import { VIEW_PRESETS } from './CameraRig';

const styles = {
  wrapper: {
    position: 'absolute', top: 12, right: 12, zIndex: 10,
    display: 'flex', flexDirection: 'column', gap: 6,
    width: 215, fontFamily: 'monospace',
  },
  panel: {
    background: 'rgba(20,20,20,0.82)', border: '1px solid #333',
    borderRadius: 6, padding: '8px 10px',
    backdropFilter: 'blur(4px)',
  },
  heading: {
    color: '#ddd', fontSize: 14, fontFamily: 'monospace', fontWeight: 'bold',
    textAlign: 'center', marginBottom: 8,
    borderBottom: '1px solid #444', paddingBottom: 6,
  },
  row: { display: 'flex', gap: 4 },
  btn: {
    flex: 1, padding: '4px 0', background: '#2a2a2a', color: '#aaa',
    border: '1px solid #444', borderRadius: 4, cursor: 'pointer', fontSize: 11,
    fontFamily: 'monospace',
  },
  btnActive: {
    flex: 1, padding: '4px 0', background: '#4af', color: '#000',
    border: '1px solid #4af', borderRadius: 4, cursor: 'pointer', fontSize: 11,
    fontFamily: 'monospace', fontWeight: 'bold',
  },
  degreeLabel: { color: '#888', textAlign: 'center', marginTop: 2, fontSize: 11 },
  swingPathLabel: {
    display: 'flex', alignItems: 'center', gap: 6,
    color: '#ccc', fontSize: 13, fontFamily: 'monospace',
    cursor: 'pointer', paddingLeft: 2,
  },
};

export function ViewControls({ azimuth, onAzimuth, showSwingPath, onToggleSwingPath }) {
  return (
    <div style={styles.wrapper}>
      <div style={styles.panel}>
        <div style={styles.heading}>View Angle</div>
        <div style={styles.row}>
          {Object.entries(VIEW_PRESETS).map(([name, angle]) => (
            <button
              key={name}
              onClick={() => onAzimuth(angle)}
              style={azimuth === angle ? styles.btnActive : styles.btn}
            >
              {name}
            </button>
          ))}
        </div>
        {azimuth !== null && <>
          <input
            type="range" min={0} max={359} value={azimuth}
            onChange={e => onAzimuth(Number(e.target.value))}
            style={{ width: '100%', accentColor: '#4af', marginTop: 6 }}
          />
          <div style={styles.degreeLabel}>{azimuth}°</div>
        </>}
      </div>

      <label style={styles.swingPathLabel}>
        <input
          type="checkbox"
          checked={showSwingPath}
          onChange={e => onToggleSwingPath(e.target.checked)}
          style={{ accentColor: '#4af', cursor: 'pointer' }}
        />
        Show swing path
      </label>
    </div>
  );
}
