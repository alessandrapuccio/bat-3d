import { useMemo } from 'react';
import * as THREE from 'three';
import { toThree } from '../utils/coords';

// Renders a ribbon mesh tracing the plane swept by the bat from frame 0 to frameIndex.
// Each pair of consecutive frames contributes one quad (two triangles) to the mesh.
export function SwingPath({ frames, frameIndex }) {
  const geometry = useMemo(() => {
    const count = Math.min(frameIndex + 1, frames.length);
    if (count < 2) return null;

    const positions = [];
    const indices   = [];

    for (let i = 0; i < count; i++) {
      const f = frames[i];
      const [hx, hy, hz] = toThree(f.handle.x, f.handle.y, f.handle.z);
      const [tx, ty, tz] = toThree(f.head.x,   f.head.y,   f.head.z);
      positions.push(hx, hy, hz); // vertex 2i   = handle
      positions.push(tx, ty, tz); // vertex 2i+1 = head
    }

    for (let i = 0; i < count - 1; i++) {
      const a = 2 * i,       b = 2 * i + 1;
      const c = 2 * (i + 1), d = 2 * (i + 1) + 1;
      indices.push(a, b, c);
      indices.push(b, d, c);
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geo.setIndex(indices);
    geo.computeVertexNormals();
    return geo;
  }, [frames, frameIndex]);

  if (!geometry) return null;

  return (
    <mesh geometry={geometry}>
      <meshStandardMaterial
        color="#4488ff"
        transparent
        opacity={0.35}
        side={THREE.DoubleSide}
        depthWrite={false}
      />
    </mesh>
  );
}
