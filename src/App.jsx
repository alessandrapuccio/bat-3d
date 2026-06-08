import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import { toThree } from './utils/coords';
import { BatModel } from './components/BatModel';
import { TrackingDot } from './components/TrackingDot';
import { HomePlate } from './components/HomePlate';
import { CameraRig, CAM_HEIGHT, PLATE_TARGET, CAM_RADIUS } from './components/CameraRig';
import { ViewControls } from './components/ViewControls';
import { FrameScrubber } from './components/FrameScrubber';
import { SwingPath } from './components/SwingPath';

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

export default function App() {
  const [swingsData, setSwingsData]     = useState(null);
  const [playIds, setPlayIds]           = useState([]);
  const [selectedPlay, setSelectedPlay] = useState('');
  const [frameIndex, setFrameIndex]     = useState(0);
  const [avgBatLength, setAvgBatLength] = useState(null);
  const [azimuth, setAzimuth]           = useState(180); // 180 = Front view
  const [isPlaying, setIsPlaying]       = useState(false);
  const [showSwingPath, setShowSwingPath] = useState(false);

  const frames = swingsData?.[selectedPlay] ?? [];

  // Advance frames at ~20 fps while playing
  useEffect(() => {
    if (!isPlaying || frames.length === 0) return;
    const id = setInterval(() => {
      setFrameIndex(prev => {
        if (prev >= frames.length - 1) { setIsPlaying(false); return prev; }
        return prev + 1;
      });
    }, 20);
    return () => clearInterval(id);
  }, [isPlaying, frames.length]);

  // Load local JSON for dev; same shape expected from Shiny postMessage
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
        console.log('Avg bat length (ft):', avg.toFixed(3));
      })
      .catch(() => console.warn('No local swings.json — waiting for Shiny postMessage.'));
  }, []);

  // Shiny → React postMessage listener
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

  const frame = frames[frameIndex];
  const handlePos = frame ? toThree(frame.handle.x, frame.handle.y, frame.handle.z) : [0, -1, 0];
  const headPos   = frame ? toThree(frame.head.x,   frame.head.y,   frame.head.z)   : [0,  1, 0];

  const fmt = v => v?.toFixed(2) ?? '—';
  const handleLabel = frame
    ? `handle (${fmt(frame.handle.x)}, ${fmt(frame.handle.y)}, ${fmt(frame.handle.z)})`
    : 'handle';
  const headLabel = frame
    ? `head (${fmt(frame.head.x)}, ${fmt(frame.head.y)}, ${fmt(frame.head.z)})`
    : 'head';

  return (
    <div style={{ width: '100vw', height: '100vh', background: '#111', display: 'flex', flexDirection: 'column' }}>

      {/* Top bar — play ID selector + frame time */}
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
          {frame?.FRAME_FROM_CONTACT != null
            ? `  (${frame.FRAME_FROM_CONTACT >= 0 ? '+' : ''}${frame.FRAME_FROM_CONTACT} from contact)`
            : ''}
        </span>

      </div>

      {/* 3-D canvas + view controls overlay */}
      <div style={{ flex: 1, position: 'relative' }}>
        <ViewControls
          azimuth={azimuth}
          onAzimuth={setAzimuth}
          showSwingPath={showSwingPath}
          onToggleSwingPath={setShowSwingPath}
        />
        <Canvas camera={{ position: [0, CAM_HEIGHT, PLATE_TARGET.z - CAM_RADIUS], fov: 50 }}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <directionalLight position={[-5, -5, -5]} intensity={0.3} />
          <Suspense fallback={null}>
            {frame && <BatModel handlePos={handlePos} headPos={headPos} avgBatLength={avgBatLength} />}
            {frame && <TrackingDot position={handlePos} label={handleLabel} color="#f90" />}
            {frame && <TrackingDot position={headPos}   label={headLabel}   color="#4af" />}
            {showSwingPath && <SwingPath frames={frames} frameIndex={frameIndex} />}
            <HomePlate />
            <Environment preset="studio" />
          </Suspense>
          <CameraRig azimuth={azimuth} />
        </Canvas>
      </div>

      {/* Frame scrubber */}
      <FrameScrubber
        frameIndex={frameIndex}
        frameCount={frames.length}
        isPlaying={isPlaying}
        onSeek={i => { setIsPlaying(false); setFrameIndex(i); }}
        onPlayToggle={() => {
          if (frameIndex >= frames.length - 1) setFrameIndex(0);
          setIsPlaying(p => !p);
        }}
      />

    </div>
  );
}
