import React, { Suspense, useEffect, useRef, useState } from 'react';
import Select from 'react-select';
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

const PLAYBACK_SPEED = 0.75;

// Color scheme for the comparison (secondary) swing
const CMP = {
  handle:    '#ff5555',
  head:      '#55ffaa',
  pathPre:   '#44aa44',
  pathPost:  '#226622',
};

// Parse batter name from label: "MM/DD/YYYY: Batter Name (Side) vs. Pitcher (Result)"
function getBatterFromLabel(label) {
  const match = label?.match(/:\s+(.+?)\s+\([^)]+\)\s+vs\./);
  return match ? match[1] : null;
}

// react-select dark theme
const selectStyles = {
  control: (base, state) => ({
    ...base, background: '#2a2a2a', minHeight: 30,
    borderColor: state.isFocused ? '#4af' : '#444',
    boxShadow: state.isFocused ? '0 0 0 1px #4af' : 'none',
    '&:hover': { borderColor: '#555' },
    fontFamily: 'monospace', fontSize: 13, cursor: 'text',
  }),
  menu:      base => ({ ...base, background: '#2a2a2a', border: '1px solid #444', zIndex: 20 }),
  menuList:  base => ({ ...base, padding: 0 }),
  option:    (base, state) => ({
    ...base, fontFamily: 'monospace', fontSize: 13, cursor: 'pointer',
    background: state.isSelected ? '#4af' : state.isFocused ? '#3a3a3a' : '#2a2a2a',
    color: state.isSelected ? '#000' : '#eee',
  }),
  singleValue:        base => ({ ...base, color: '#eee', fontFamily: 'monospace', fontSize: 13 }),
  input:              base => ({ ...base, color: '#eee', fontFamily: 'monospace', fontSize: 13 }),
  placeholder:        base => ({ ...base, color: '#555', fontFamily: 'monospace', fontSize: 13 }),
  indicatorSeparator: ()   => ({ display: 'none' }),
  dropdownIndicator:  base => ({ ...base, color: '#666', padding: 4 }),
  clearIndicator:     base => ({ ...base, color: '#666', padding: 4, '&:hover': { color: '#aaa' } }),
  groupHeading:       base => ({ ...base, color: '#4af', fontSize: 10, fontFamily: 'monospace', padding: '6px 8px 2px' }),
};

// Given a target SEC_FROM_CONTACT, find the closest frame index in a swing
function findFrameByContactSec(frames, targetSec) {
  let best = 0, bestDiff = Infinity;
  for (let i = 0; i < frames.length; i++) {
    const sec = frames[i].SEC_FROM_CONTACT;
    if (sec == null) continue;
    const diff = Math.abs(sec - targetSec);
    if (diff < bestDiff) { bestDiff = diff; best = i; }
  }
  return best;
}

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
  const [labels, setLabels]             = useState({});
  const [selectedPlay, setSelectedPlay] = useState('');
  const [frameIndex, setFrameIndex]     = useState(0);
  const [avgBatLength, setAvgBatLength] = useState(null);
  const [azimuth, setAzimuth]           = useState(180); // 180 = Front view
  const [isPlaying, setIsPlaying]         = useState(false);
  const [selectedCompare, setSelectedCompare] = useState('');
  const [showSwingPath, setShowSwingPath] = useState(true);

  const frames        = swingsData?.[selectedPlay]   ?? [];
  const compareFrames = swingsData?.[selectedCompare] ?? [];

  // RAF-based playback: on each ~16ms browser frame, seek to wherever we should
  // be based on elapsed real time × PLAYBACK_SPEED. Works correctly even when
  // tracking frames are sub-millisecond apart (as with ~300fps Hawkeye data).
  // frameIndex is intentionally NOT a dep — RAF drives it, not React re-renders.
  useEffect(() => {
    if (!isPlaying || frames.length === 0) return;

    const startIdx = frameIndex;
    const startSec = frames[startIdx].SEC_FROM_PITCH_RELEASE;
    const wallStart = performance.now();
    let rafId;

    const tick = () => {
      const elapsedSec = ((performance.now() - wallStart) / 1000) * PLAYBACK_SPEED;
      const targetSec  = startSec + elapsedSec;

      // Walk forward to the last frame whose timestamp is ≤ targetSec
      let newIdx = startIdx;
      while (newIdx < frames.length - 1 && frames[newIdx + 1].SEC_FROM_PITCH_RELEASE <= targetSec) {
        newIdx++;
      }

      setFrameIndex(newIdx);

      if (newIdx >= frames.length - 1) {
        setIsPlaying(false);
        return;
      }
      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [isPlaying, frames]); // frameIndex omitted intentionally — RAF drives it

  // Load local JSON for dev; same shape expected from Shiny postMessage
  useEffect(() => {
    fetch('/data/swings.json')
      .then(r => r.json())
      .then(({ swings, default_play_id, labels }) => {
        setSwingsData(swings);
        if (labels) setLabels(labels);
        const ids = Object.keys(swings);
        setPlayIds(ids);
        const defaultId = ids[0];
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
        if (e.data.labels) setLabels(e.data.labels);
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

  // Build grouped options for the comparison dropdown: same batter first, then others
  const primarySwingOptions = playIds.map(id => ({ value: id, label: labels[id] ?? id }));

  const compareOptions = (() => {
    const primaryBatter = getBatterFromLabel(labels[selectedPlay]);
    console.log('[compare] primaryBatter:', primaryBatter, '| label:', labels[selectedPlay]);
    const sameBatter = [], others = [];
    playIds
      .filter(id => id !== selectedPlay)
      .forEach(id => {
        const opt = { value: id, label: labels[id] ?? id };
        if (primaryBatter && getBatterFromLabel(labels[id]) === primaryBatter) sameBatter.push(opt);
        else others.push(opt);
      });
    const groups = [];
    if (sameBatter.length) groups.push({ label: 'Same Batter', options: sameBatter });
    if (others.length)     groups.push({ label: 'Other Swings', options: others });
    return groups;
  })();

  // Comparison swing — contact-aligned to the primary swing's SEC_FROM_CONTACT
  const cmpFrameIndex = compareFrames.length > 0 && frame?.SEC_FROM_CONTACT != null
    ? findFrameByContactSec(compareFrames, frame.SEC_FROM_CONTACT)
    : 0;
  const cmpFrame     = compareFrames[cmpFrameIndex];
  const cmpHandlePos = cmpFrame ? toThree(cmpFrame.handle.x, cmpFrame.handle.y, cmpFrame.handle.z) : null;
  const cmpHeadPos   = cmpFrame ? toThree(cmpFrame.head.x,   cmpFrame.head.y,   cmpFrame.head.z)   : null;

  return (
    <div style={{ width: '100vw', height: '100vh', background: '#111', display: 'flex', flexDirection: 'column' }}>

      {/* Top bar — play ID selector + frame time */}
      <div style={styles.bar}>
        <Select
          options={primarySwingOptions}
          value={primarySwingOptions.find(o => o.value === selectedPlay) ?? null}
          onChange={opt => { if (opt) { setSelectedPlay(opt.value); setFrameIndex(0); } }}
          styles={{ ...selectStyles, container: base => ({ ...base, width: 320 }) }}
          placeholder="Loading swings…"
          isSearchable
        />
        <Select
          options={compareOptions}
          value={compareOptions.flatMap(g => g.options ?? [g]).find(o => o.value === selectedCompare) ?? null}
          onChange={opt => setSelectedCompare(opt?.value ?? '')}
          styles={{ ...selectStyles, container: base => ({ ...base, width: 320 }) }}
          placeholder="— Compare with —"
          isSearchable
          isClearable
        />

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

            {/* Comparison swing — contact-aligned, distinct colors */}
            {cmpFrame && <BatModel handlePos={cmpHandlePos} headPos={cmpHeadPos} avgBatLength={avgBatLength} />}
            {cmpFrame && <TrackingDot position={cmpHandlePos} label="handle (cmp)" color={CMP.handle} />}
            {cmpFrame && <TrackingDot position={cmpHeadPos}   label="head (cmp)"   color={CMP.head}   />}
            {showSwingPath && cmpFrame && (
              <SwingPath frames={compareFrames} frameIndex={cmpFrameIndex} colorPre={CMP.pathPre} colorPost={CMP.pathPost} />
            )}

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
