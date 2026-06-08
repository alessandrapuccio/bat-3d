import { Html } from '@react-three/drei';

export function TrackingDot({ position, label, color }) {
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
