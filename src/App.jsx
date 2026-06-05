import React, { Suspense, useEffect, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment, Html } from '@react-three/drei';
import * as THREE from 'three';

// Hawkeye → Three.js coordinate mapping:
//   Hawkeye X (side-to-side)  → Three.js  X
//   Hawkeye Y (field depth)   → Three.js -Z  (negate so field goes away from viewer)
//   Hawkeye Z (vertical)      → Three.js  Y
function toThree(x, y, z) {
  return [x, z, -y];
}

// ---------------------------------------------------------------------------
// BAT TUNING CONSTANTS — adjust these to fix alignment and proportions.
// ---------------------------------------------------------------------------

// Which axis the GLB points along by default. Console logs bounding box on load
// so you can verify. +Z is current assumption.
const NATURAL_AXIS = new THREE.Vector3(0, 0, 1);

// Shift the mesh along its own length after positioning.
// Negative = slide toward handle end, positive = slide toward head end.
// Use this when the dots sit above/below the visible ends of the bat.
const PIVOT_OFFSET =-0.2;

// Extra uniform thickness multiplier for the bat cross-section.
// Increase above 1 if the bat looks too thin when stretched to full length.
const CROSS_SECTION_SCALE = 1.8;

// ---------------------------------------------------------------------------

function BatModel({ handlePos, headPos }) {
  const { scene } = useGLTF('/models/bat.glb');
  const ref = useRef();

  const naturalLength = useRef(null);
  const pivotCorrection = useRef(0); // auto-computed from bounding box center offset

  useEffect(() => {
    const box = new THREE.Box3().setFromObject(scene);
    const size = new THREE.Vector3();
    const center = new THREE.Vector3();
    box.getSize(size);
    box.getCenter(center);
    naturalLength.current = Math.max(size.x, size.y, size.z);
    // How far is the GLB origin from the bounding box center along the long axis?
    // This is the auto pivot correction; PIVOT_OFFSET lets you fine-tune on top.
    pivotCorrection.current = center.z; // change component if NATURAL_AXIS changes
    console.log('Bat natural length (GLB units):', naturalLength.current);
    console.log('Bat bounding box size:', size);
    console.log('Bat pivot (bbox center from origin):', center);
  }, [scene]);

  useFrame(() => {
    if (!ref.current || !naturalLength.current) return;

    const h = new THREE.Vector3(...handlePos);
    const t = new THREE.Vector3(...headPos);
    const dist = h.distanceTo(t);
    const s = dist / naturalLength.current;

    // Rotation: align natural axis with handle→head direction
    const dir = t.clone().sub(h).normalize();
    const q = new THREE.Quaternion().setFromUnitVectors(NATURAL_AXIS, dir);
    ref.current.quaternion.copy(q);

    // Scale: stretch long axis to span handle→head distance; scale cross-section separately
    ref.current.scale.set(CROSS_SECTION_SCALE, CROSS_SECTION_SCALE, s);

    // Position: midpoint, then compensate for pivot offset (auto + manual)
    const mid = h.clone().add(t).multiplyScalar(0.5);
    const offsetAlongAxis = (pivotCorrection.current * s + PIVOT_OFFSET) * -1;
    const correction = dir.clone().multiplyScalar(offsetAlongAxis);
    ref.current.position.copy(mid).add(correction);
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
// Main App
// ---------------------------------------------------------------------------
export default function App() {
  const [swingsData, setSwingsData] = useState(null);
  const [playIds, setPlayIds] = useState([]);
  const [selectedPlay, setSelectedPlay] = useState('');
  const [frameIndex, setFrameIndex] = useState(0);

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

  const frames = swingsData?.[selectedPlay] ?? [];
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

      {/* 3-D canvas */}
      <div style={{ flex: 1 }}>
        <Canvas camera={{ position: [-1, 3, 20], fov: 50 }}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <directionalLight position={[-5, -5, -5]} intensity={0.3} />
          <Suspense fallback={null}>
            {frame && <BatModel handlePos={handlePos} headPos={headPos} />}
            {frame && <TrackingDot position={handlePos} label={handleLabel} color="#f90" />}
            {frame && <TrackingDot position={headPos}   label={headLabel}   color="#4af" />}
            <Environment preset="studio" />
          </Suspense>
          <OrbitControls target={[-1, 3, 0]} />
        </Canvas>
      </div>

      {/* Frame scrubber */}
      <div style={styles.bar}>
        <input
          type="range"
          min={0}
          max={Math.max(0, frames.length - 1)}
          value={frameIndex}
          onChange={e => setFrameIndex(Number(e.target.value))}
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
};
