import React, { Suspense, useEffect, useMemo, useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment, Html, Line } from '@react-three/drei';
import * as THREE from 'three';

// Hawkeye → Three.js coordinate mapping:
//   Hawkeye X (side-to-side)  → Three.js  X
//   Hawkeye Y (field depth)   → Three.js -Z  (negate so field goes away from viewer)
//   Hawkeye Z (vertical)      → Three.js  Y
function toThree(x, y, z) {
  return [x, z, -y];
}

// ---------------------------------------------------------------------------
// BAT TUNING CONSTANTS
// ---------------------------------------------------------------------------

// Which axis the GLB points along. Logged to console on load so you can verify.
const NATURAL_AXIS = new THREE.Vector3(0, 0, 1);

// If the bat renders backwards (head where handle should be), flip this to true.
const FLIP_ENDS = false;

// ---------------------------------------------------------------------------

function BatModel({ handlePos, headPos, avgBatLength }) {
  const { scene } = useGLTF('/models/bat.glb');
  const ref = useRef();

  // Local-space endpoints of the bat along NATURAL_AXIS, read from bounding box.
  const localHandleEnd = useRef(new THREE.Vector3());
  const localHeadEnd   = useRef(new THREE.Vector3());
  const naturalLength  = useRef(null);

  useEffect(() => {
    const box = new THREE.Box3().setFromObject(scene);
    naturalLength.current = box.max.z - box.min.z; // length along Z (NATURAL_AXIS)

    // Cross-section center of the GLB (may not be at origin if model is off-center).
    const center = new THREE.Vector3();
    box.getCenter(center);

    // min Z = one physical end, max Z = the other. FLIP_ENDS swaps which is handle.
    // Use center.x / center.y so the endpoint sits at the actual axis of the bat,
    // not at (0,0) which may be offset from the mesh center.
    const endA = new THREE.Vector3(center.x, center.y, FLIP_ENDS ? box.max.z : box.min.z);
    const endB = new THREE.Vector3(center.x, center.y, FLIP_ENDS ? box.min.z : box.max.z);
    localHandleEnd.current.copy(endA);
    localHeadEnd.current.copy(endB);

    console.log('GLB natural length (units):', naturalLength.current);
    console.log('Cross-section center offset (x, y):', center.x.toFixed(4), center.y.toFixed(4));
    console.log('Handle end local Z:', endA.z, '| Head end local Z:', endB.z);
    if (avgBatLength) {
      console.log('Avg bat length from data (ft):', avgBatLength.toFixed(3),
        '→ base scale:', (avgBatLength / naturalLength.current).toFixed(3));
    }
  }, [scene, avgBatLength]);

  useFrame(() => {
    if (!ref.current || !naturalLength.current) return;

    const h = new THREE.Vector3(...handlePos);
    const t = new THREE.Vector3(...headPos);
    const dist = h.distanceTo(t);

    // Use average bat length as baseline so s≈1 for a typical swing.
    // Falls back to raw dist/naturalLength if average isn't computed yet.
    const baseLength = avgBatLength ?? naturalLength.current;
    const s = dist / baseLength;
    const baseScale = baseLength / naturalLength.current;

    // Rotate: align NATURAL_AXIS with handle→head direction
    const dir = t.clone().sub(h).normalize();
    const q = new THREE.Quaternion().setFromUnitVectors(NATURAL_AXIS, dir);
    ref.current.quaternion.copy(q);

    // Uniform scale — preserves GLB proportions exactly.
    // baseScale maps the GLB to average bat size; s adjusts for this swing's actual length.
    ref.current.scale.setScalar(baseScale * s);

    // Position: rotate the local handle endpoint into world space, then
    // place the mesh so that point lands exactly on the handle tracking dot.
    const handleEndWorld = localHandleEnd.current.clone()
      .multiplyScalar(baseScale * s)
      .applyQuaternion(q);
    ref.current.position.copy(h).sub(handleEndWorld);
  });

  return <primitive ref={ref} object={scene} />;
}

function TrackingDot({ position, label, color }) {
  return (
    <group position={position}>
      <mesh>
        <sphereGeometry args={[0.04, 16, 16]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.6} />
      </mesh>
      <Html distanceFactor={6} style={{ pointerEvents: 'none' }}>
        <div style={{
          background: 'rgba(0,0,0,0.65)', color, fontFamily: 'monospace',
          fontSize: 11, padding: '2px 5px', borderRadius: 3, whiteSpace: 'nowrap',
        }}>
          {label}
        </div>
      </Html>
    </group>
  );
}

// ---------------------------------------------------------------------------
// Home plate, strike zone, and batter boxes — fixed in scene, Hawkeye coords.
// All geometry sourced from batter_swing_graphs_v4.R.
// ---------------------------------------------------------------------------
const HW = 8.5 / 12;   // half-width of plate in feet
const PD = 8.5 / 12;   // depth of square portion
const TIP = 17 / 12;   // total depth to pointed tip

function HomePlate() {
  // Plate pentagon as a filled ShapeGeometry.
  // THREE.Shape works in XY; we rotate -90° around X to lay it on the XZ plane.
  // Shape x = Hawkeye x (= Three.js x), shape y = -Hawkeye y (= Three.js z).
  const plateShape = useMemo(() => {
    const s = new THREE.Shape();
    s.moveTo(-HW,  0);
    s.lineTo( HW,  0);
    s.lineTo( HW,  PD);
    s.lineTo( 0,   TIP);
    s.lineTo(-HW,  PD);
    s.closePath();
    return s;
  }, []);

  // Line loops — convert Hawkeye → Three.js for each set of points.
  const plateLine = [
    [-HW,  0,    0], [ HW,  0,    0],
    [ HW, -PD,   0], [ 0,  -TIP,  0],
    [-HW, -PD,   0], [-HW,  0,    0],
  ].map(([x, y, z]) => toThree(x, y, z));

  const zoneLine = [
    [-HW, 0, 1.5], [ HW, 0, 1.5],
    [ HW, 0, 3.5], [-HW, 0, 3.5],
    [-HW, 0, 1.5],
  ].map(([x, y, z]) => toThree(x, y, z));

  const lbx1 = (-8.5 - 6 - 48) / 12, lbx2 = (-8.5 - 6) / 12;
  const bby1 = (-8.5 + 36) / 12,      bby2 = (-8.5 - 36) / 12;
  const rbx1 = ( 8.5 + 6)      / 12,  rbx2 = ( 8.5 + 6 + 48) / 12;

  const leftBox = [
    [lbx1, bby1, 0], [lbx2, bby1, 0],
    [lbx2, bby2, 0], [lbx1, bby2, 0],
    [lbx1, bby1, 0],
  ].map(([x, y, z]) => toThree(x, y, z));

  const rightBox = [
    [rbx1, bby1, 0], [rbx2, bby1, 0],
    [rbx2, bby2, 0], [rbx1, bby2, 0],
    [rbx1, bby1, 0],
  ].map(([x, y, z]) => toThree(x, y, z));

  return (
    <group>
      {/* Filled white plate, sitting just above y=0 to avoid z-fighting */}
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0.002, 0]}>
        <shapeGeometry args={[plateShape]} />
        <meshStandardMaterial color="white" side={THREE.DoubleSide} />
      </mesh>

      {/* Outlines */}
      <Line points={plateLine}  color="white"             lineWidth={2} />
      <Line points={zoneLine}   color="rgba(200,200,200,1)" lineWidth={1} />
      <Line points={leftBox}    color="rgba(150,150,150,1)" lineWidth={1} />
      <Line points={rightBox}   color="rgba(150,150,150,1)" lineWidth={1} />
    </group>
  );
}

// ---------------------------------------------------------------------------
// Camera — orbits around the plate center at a fixed radius and height.
// Azimuth (degrees): 0=Front (catcher side), 90=Right, 180=Back, 270=Left.
// ---------------------------------------------------------------------------
const PLATE_TARGET = new THREE.Vector3(0, 3.7, TIP / 2); // look-at point (mid-height above plate) - kind of changes floor angle
const CAM_RADIUS   = 13;   // feet from plate center
const CAM_HEIGHT   = 1.7;    // feet above ground

const VIEW_PRESETS = { Front: 180, Right: 90, Back: 0, Left: 270 };

function CameraRig({ azimuth }) {
  const { camera } = useThree();
  const controlsRef = useRef();

  useEffect(() => {
    if (!controlsRef.current) return;
    const rad = (azimuth * Math.PI) / 180;
    camera.position.set(
      PLATE_TARGET.x + CAM_RADIUS * Math.sin(rad),
      CAM_HEIGHT,
      PLATE_TARGET.z + CAM_RADIUS * Math.cos(rad),
    );
    controlsRef.current.target.copy(PLATE_TARGET);
    controlsRef.current.update();
  }, [azimuth, camera]);

  return <OrbitControls ref={controlsRef} />;
}

// ---------------------------------------------------------------------------
// Main App
// ---------------------------------------------------------------------------
function avgBatLengthFromSwings(swings) {
  const dists = Object.values(swings).flatMap(frames =>
    frames.map(f => {
      const h = toThree(f.handle.x, f.handle.y, f.handle.z);
      const t = toThree(f.head.x,   f.head.y,   f.head.z);
      return Math.hypot(t[0]-h[0], t[1]-h[1], t[2]-h[2]);
    })
  );
  return dists.reduce((a, b) => a + b, 0) / dists.length;
}

export default function App() {
  const [swingsData, setSwingsData] = useState(null);
  const [playIds, setPlayIds] = useState([]);
  const [selectedPlay, setSelectedPlay] = useState('');
  const [frameIndex, setFrameIndex] = useState(0);
  const [avgBatLength, setAvgBatLength] = useState(null);
  const [azimuth, setAzimuth] = useState(180); // 180 = Front
  const [isPlaying, setIsPlaying] = useState(false);

  const frames = swingsData?.[selectedPlay] ?? [];

  // Advance one frame every 50 ms while playing (~20 fps playback).
  useEffect(() => {
    if (!isPlaying || frames.length === 0) return;
    const id = setInterval(() => {
      setFrameIndex(prev => {
        if (prev >= frames.length - 1) {
          setIsPlaying(false);
          return prev;
        }
        return prev + 1;
      });
    }, 20);
    return () => clearInterval(id);
  }, [isPlaying, frames.length]);

  // Load local JSON for dev; same data shape expected from Shiny postMessage.
  useEffect(() => {
    fetch('/data/swings.json')
      .then(r => r.json())
      .then(({ swings, default_play_id }) => {
        setSwingsData(swings);
        const ids = Object.keys(swings);
        setPlayIds(ids);
        const defaultId = default_play_id && swings[default_play_id] ? default_play_id : ids[0];
        if (defaultId) setSelectedPlay(defaultId);
        const avg = avgBatLengthFromSwings(swings);
        setAvgBatLength(avg);
        console.log('Average bat length across all swings (ft):', avg.toFixed(3));
      })
      .catch(() => {
        console.warn('No local swings.json — waiting for postMessage data from Shiny.');
      });
  }, []);

  // Shiny postMessage listener
  useEffect(() => {
    const handler = (e) => {
      if (e.data?.type === 'load_frames') {
        const data = e.data.frames;
        setSwingsData(data);
        const ids = Object.keys(data);
        setPlayIds(ids);
        if (ids.length > 0) setSelectedPlay(ids[0]);
      } else if (e.data?.type === 'seek_frame') {
        setFrameIndex(e.data.index);
      } else if (e.data?.type === 'reset') {
        setFrameIndex(0);
      }
    };
    window.addEventListener('message', handler);
    return () => window.removeEventListener('message', handler);
  }, []);

  const frame  = frames[frameIndex];

  const handlePos = frame ? toThree(frame.handle.x, frame.handle.y, frame.handle.z) : [0, -1, 0];
  const headPos   = frame ? toThree(frame.head.x,   frame.head.y,   frame.head.z)   : [0,  1, 0];

  const fmt = (v) => v?.toFixed(2) ?? '—';
  const handleLabel = frame
    ? `handle (${fmt(frame.handle.x)}, ${fmt(frame.handle.y)}, ${fmt(frame.handle.z)})`
    : 'handle';
  const headLabel = frame
    ? `head (${fmt(frame.head.x)}, ${fmt(frame.head.y)}, ${fmt(frame.head.z)})`
    : 'head';

  return (
    <div style={{ width: '100vw', height: '100vh', background: '#111', display: 'flex', flexDirection: 'column' }}>

      {/* Controls bar */}
      <div style={styles.bar}>
        <select
          value={selectedPlay}
          onChange={e => { setSelectedPlay(e.target.value); setFrameIndex(0); }}
          style={styles.select}
        >
          {playIds.length === 0 && <option>Loading swings…</option>}
          {playIds.map(id => (
            <option key={id} value={id}>{id}</option>
          ))}
        </select>

        <span style={styles.label}>
          {frame ? `t = ${frame.SEC_FROM_PITCH_RELEASE?.toFixed(3)}s` : '—'}
          {frame?.FRAME_FROM_CONTACT != null ? `  (${frame.FRAME_FROM_CONTACT >= 0 ? '+' : ''}${frame.FRAME_FROM_CONTACT} from contact)` : ''}
        </span>
      </div>

      {/* 3-D canvas + view controls overlay */}
      <div style={{ flex: 1, position: 'relative' }}>

        {/* View controls — top-right overlay */}
        <div style={styles.viewPanel}>
          <div style={styles.viewRow}>
            {Object.entries(VIEW_PRESETS).map(([name, angle]) => (
              <button
                key={name}
                onClick={() => setAzimuth(angle)}
                style={azimuth === angle ? styles.viewBtnActive : styles.viewBtn}
              >
                {name}
              </button>
            ))}
          </div>
          <input
            type="range" min={0} max={359} value={azimuth}
            onChange={e => setAzimuth(Number(e.target.value))}
            style={{ width: '100%', accentColor: '#4af', marginTop: 6 }}
          />
          <div style={{ ...styles.label, textAlign: 'center', marginTop: 2 }}>{azimuth}°</div>
        </div>

        <Canvas camera={{ position: [0, CAM_HEIGHT, PLATE_TARGET.z - CAM_RADIUS], fov: 50 }}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <directionalLight position={[-5, -5, -5]} intensity={0.3} />
          <Suspense fallback={null}>
            {frame && <BatModel handlePos={handlePos} headPos={headPos} avgBatLength={avgBatLength} />}
            {frame && <TrackingDot position={handlePos} label={handleLabel} color="#f90" />}
            {frame && <TrackingDot position={headPos}   label={headLabel}   color="#4af" />}
            <HomePlate />
            <Environment preset="studio" />
          </Suspense>
          <CameraRig azimuth={azimuth} />
        </Canvas>
      </div>

      {/* Frame scrubber */}
      <div style={styles.bar}>
        <button
          onClick={() => {
            if (frameIndex >= frames.length - 1) setFrameIndex(0);
            setIsPlaying(p => !p);
          }}
          style={styles.playBtn}
          disabled={frames.length === 0}
        >
          {isPlaying ? '⏸' : '▶'}
        </button>
        <input
          type="range"
          min={0}
          max={Math.max(0, frames.length - 1)}
          value={frameIndex}
          onChange={e => { setIsPlaying(false); setFrameIndex(Number(e.target.value)); }}
          style={{ flex: 1, accentColor: '#4af' }}
        />
        <span style={styles.label}>{frameIndex + 1} / {frames.length || '—'}</span>
      </div>

    </div>
  );
}

const styles = {
  bar: {
    display: 'flex', alignItems: 'center', gap: 12,
    padding: '8px 16px', background: '#1a1a1a', color: '#ccc',
    fontFamily: 'monospace', fontSize: 13,
  },
  select: {
    background: '#2a2a2a', color: '#eee', border: '1px solid #444',
    padding: '4px 8px', borderRadius: 4, fontSize: 13,
  },
  label: { color: '#888', whiteSpace: 'nowrap' },
  playBtn: {
    background: '#2a2a2a', color: '#eee', border: '1px solid #444',
    borderRadius: 4, padding: '4px 10px', cursor: 'pointer', fontSize: 14,
    lineHeight: 1, flexShrink: 0,
  },
  viewPanel: {
    position: 'absolute', top: 12, right: 12, zIndex: 10,
    background: 'rgba(20,20,20,0.82)', border: '1px solid #333',
    borderRadius: 6, padding: '8px 10px', width: 190,
    fontFamily: 'monospace', fontSize: 12,
    backdropFilter: 'blur(4px)',
  },
  viewRow: { display: 'flex', gap: 4 },
  viewBtn: {
    flex: 1, padding: '4px 0', background: '#2a2a2a', color: '#aaa',
    border: '1px solid #444', borderRadius: 4, cursor: 'pointer', fontSize: 11,
  },
  viewBtnActive: {
    flex: 1, padding: '4px 0', background: '#4af', color: '#000',
    border: '1px solid #4af', borderRadius: 4, cursor: 'pointer', fontSize: 11,
    fontWeight: 'bold',
  },
};
