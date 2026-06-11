import { useEffect, useRef } from 'react';
import { useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// Camera tuning — adjust PLATE_TARGET.y to change floor angle; CAM_RADIUS for zoom
export const PLATE_TARGET = new THREE.Vector3(0, 3.7, 17 / 24); // look-at (TIP/2 depth)
export const CAM_RADIUS   = 13;
export const CAM_HEIGHT   = 1.7;

// Aerial uses null as sentinel — no azimuth applies
export const VIEW_PRESETS = { Front: 180, Right: 90, Back: 0, Left: 270, Aerial: null };

const AERIAL_HEIGHT = 16.4; // feet above ground

export function CameraRig({ azimuth }) {
  const { camera } = useThree();
  const controlsRef = useRef();

  useEffect(() => {
    if (!controlsRef.current) return;
    if (azimuth === null) {
      // Look straight down at the plate from above
      camera.position.set(PLATE_TARGET.x, AERIAL_HEIGHT, PLATE_TARGET.z);
      controlsRef.current.target.set(PLATE_TARGET.x, 0, PLATE_TARGET.z);
    } else {
      const rad = (azimuth * Math.PI) / 180;
      camera.position.set(
        PLATE_TARGET.x + CAM_RADIUS * Math.sin(rad),
        CAM_HEIGHT,
        PLATE_TARGET.z + CAM_RADIUS * Math.cos(rad),
      );
      controlsRef.current.target.copy(PLATE_TARGET);
    }
    controlsRef.current.update();
  }, [azimuth, camera]);

  return <OrbitControls ref={controlsRef} />;
}
