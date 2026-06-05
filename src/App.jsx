import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment } from '@react-three/drei';

function BatModel() {
  const { scene } = useGLTF('/models/bat.glb');
  return <primitive object={scene} scale={1} />;
}

export default function App() {
  return (
    <div style={{ width: '100vw', height: '100vh', background: '#111' }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <directionalLight position={[-5, -5, -5]} intensity={0.3} />
        <Suspense fallback={null}>
          <BatModel />
          <Environment preset="studio" />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  );
}
