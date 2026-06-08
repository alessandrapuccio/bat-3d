const styles = {
  bar: {
    display: 'flex', alignItems: 'center', gap: 12,
    padding: '8px 16px', background: '#1a1a1a', color: '#ccc',
    fontFamily: 'monospace', fontSize: 13,
  },
  playBtn: {
    background: '#2a2a2a', color: '#eee', border: '1px solid #444',
    borderRadius: 4, padding: '4px 10px', cursor: 'pointer', fontSize: 14,
    lineHeight: 1, flexShrink: 0,
  },
  label: { color: '#888', whiteSpace: 'nowrap' },
};

export function FrameScrubber({ frameIndex, frameCount, isPlaying, onSeek, onPlayToggle }) {
  return (
    <div style={styles.bar}>
      <button
        onClick={onPlayToggle}
        style={styles.playBtn}
        disabled={frameCount === 0}
      >
        {isPlaying ? '⏸' : '▶'}
      </button>
      <input
        type="range"
        min={0}
        max={Math.max(0, frameCount - 1)}
        value={frameIndex}
        onChange={e => onSeek(Number(e.target.value))}
        style={{ flex: 1, accentColor: '#4af' }}
      />
      <span style={styles.label}>{frameIndex + 1} / {frameCount || '—'}</span>
    </div>
  );
}
