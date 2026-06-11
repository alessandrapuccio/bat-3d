import { useMemo } from 'react';
import * as THREE from 'three';
import { toThree } from '../utils/coords';

function buildRibbon(frames, startIdx, endIdx) {
  const count = endIdx - startIdx + 1;
  if (count < 2) return null;

  const positions = [];
  const indices   = [];

  for (let i = startIdx; i <= endIdx; i++) {
    const f = frames[i];
    const [hx, hy, hz] = toThree(f.handle.x, f.handle.y, f.handle.z);
    const [tx, ty, tz] = toThree(f.head.x,   f.head.y,   f.head.z);
    positions.push(hx, hy, hz);
    positions.push(tx, ty, tz);
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
}

export function SwingPath({
  frames,
  frameIndex,
  colorPre  = '#4488ff',
  colorPost = '#1a3a88',
}) {
  const { preGeo, postGeo } = useMemo(() => {
    const visibleCount = Math.min(frameIndex + 1, frames.length);
    if (visibleCount < 2) return { preGeo: null, postGeo: null };

    const ci = frames.findIndex(f => f.FRAME_FROM_CONTACT != null && f.FRAME_FROM_CONTACT >= 0);

    if (ci === -1 || ci >= visibleCount) {
      return { preGeo: buildRibbon(frames, 0, visibleCount - 1), postGeo: null };
    }
    return {
      preGeo:  ci > 0 ? buildRibbon(frames, 0, ci) : null,
      postGeo: buildRibbon(frames, ci, visibleCount - 1),
    };
  }, [frames, frameIndex]);

  const mat = { transparent: true, opacity: 0.4, side: THREE.DoubleSide, depthWrite: false };

  return (
    <group>
      {preGeo  && <mesh geometry={preGeo}>  <meshStandardMaterial {...mat} color={colorPre}  /></mesh>}
      {postGeo && <mesh geometry={postGeo}> <meshStandardMaterial {...mat} color={colorPost} /></mesh>}
    </group>
  );
}
