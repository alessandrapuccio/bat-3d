import { useMemo } from 'react';
import { Line } from '@react-three/drei';
import * as THREE from 'three';
import { toThree } from '../utils/coords';

// Plate dimensions in feet (sourced from batter_swing_graphs_v4.R)
const HW  = 8.5 / 12;  // half-width
const PD  = 8.5 / 12;  // square portion depth
export const TIP = 17 / 12;  // total depth to pointed tip

export function HomePlate() {
  // Pentagon filled shape; rotated +90° around X to lay on the XZ (ground) plane.
  const plateShape = useMemo(() => {
    const s = new THREE.Shape();
    s.moveTo(-HW, 0);
    s.lineTo( HW, 0);
    s.lineTo( HW, PD);
    s.lineTo( 0,  TIP);
    s.lineTo(-HW, PD);
    s.closePath();
    return s;
  }, []);

  const plateLine = [
    [-HW,  0,   0], [ HW,  0,   0],
    [ HW, -PD,  0], [ 0,  -TIP, 0],
    [-HW, -PD,  0], [-HW,  0,   0],
  ].map(([x, y, z]) => toThree(x, y, z));

  const zoneLine = [
    [-HW, 0, 1.5], [ HW, 0, 1.5],
    [ HW, 0, 3.5], [-HW, 0, 3.5],
    [-HW, 0, 1.5],
  ].map(([x, y, z]) => toThree(x, y, z));

  const lbx1 = (-8.5 - 6 - 48) / 12, lbx2 = (-8.5 - 6) / 12;
  const bby1 = (-8.5 + 36) / 12,      bby2 = (-8.5 - 36) / 12;
  const rbx1 = ( 8.5 + 6)      / 12,  rbx2 = ( 8.5 + 6 + 48) / 12;

  const leftBox  = [[lbx1,bby1,0],[lbx2,bby1,0],[lbx2,bby2,0],[lbx1,bby2,0],[lbx1,bby1,0]].map(([x,y,z]) => toThree(x,y,z));
  const rightBox = [[rbx1,bby1,0],[rbx2,bby1,0],[rbx2,bby2,0],[rbx1,bby2,0],[rbx1,bby1,0]].map(([x,y,z]) => toThree(x,y,z));

  return (
    <group>
      {/* Filled white plate, raised slightly to avoid z-fighting with ground */}
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0.002, 0]}>
        <shapeGeometry args={[plateShape]} />
        <meshStandardMaterial color="white" side={THREE.DoubleSide} />
      </mesh>
      <Line points={plateLine}  color="white"               lineWidth={2} />
      <Line points={zoneLine}   color="rgba(200,200,200,1)" lineWidth={1} />
      <Line points={leftBox}    color="rgba(150,150,150,1)" lineWidth={1} />
      <Line points={rightBox}   color="rgba(150,150,150,1)" lineWidth={1} />
    </group>
  );
}
