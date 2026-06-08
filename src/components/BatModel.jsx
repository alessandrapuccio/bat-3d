import { useEffect, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

// GLB long axis. Set FLIP_ENDS=true if head/handle appear swapped.
const NATURAL_AXIS = new THREE.Vector3(0, 0, 1);
const FLIP_ENDS = false;

export function BatModel({ handlePos, headPos, avgBatLength }) {
  const { scene } = useGLTF('/models/bat.glb');
  const ref = useRef();
  const localHandleEnd = useRef(new THREE.Vector3());
  const naturalLength  = useRef(null);

  useEffect(() => {
    const box = new THREE.Box3().setFromObject(scene);
    naturalLength.current = box.max.z - box.min.z;

    // GLB origin is off-center in X; use bbox center for the cross-section origin.
    const center = new THREE.Vector3();
    box.getCenter(center);

    const endA = new THREE.Vector3(center.x, center.y, FLIP_ENDS ? box.max.z : box.min.z);
    localHandleEnd.current.copy(endA);

    console.log('GLB natural length (units):', naturalLength.current);
    if (avgBatLength) {
      console.log('Base scale:', (avgBatLength / naturalLength.current).toFixed(3));
    }
  }, [scene, avgBatLength]);

  useFrame(() => {
    if (!ref.current || !naturalLength.current) return;

    const h = new THREE.Vector3(...handlePos);
    const t = new THREE.Vector3(...headPos);
    const dist = h.distanceTo(t);

    // avgBatLength as baseline keeps s≈1 for a typical swing
    const baseLength = avgBatLength ?? naturalLength.current;
    const s          = dist / baseLength;
    const baseScale  = baseLength / naturalLength.current;

    const dir = t.clone().sub(h).normalize();
    const q   = new THREE.Quaternion().setFromUnitVectors(NATURAL_AXIS, dir);
    ref.current.quaternion.copy(q);
    ref.current.scale.setScalar(baseScale * s);

    // Rotate local handle endpoint into world space, then align it with the tracking dot
    const handleEndWorld = localHandleEnd.current.clone()
      .multiplyScalar(baseScale * s)
      .applyQuaternion(q);
    ref.current.position.copy(h).sub(handleEndWorld);
  });

  return <primitive ref={ref} object={scene} />;
}
