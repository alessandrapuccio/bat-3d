// Hawkeye → Three.js coordinate mapping:
//   Hawkeye X (side-to-side)  → Three.js  X
//   Hawkeye Y (field depth)   → Three.js -Z  (negate so field goes away from viewer)
//   Hawkeye Z (vertical)      → Three.js  Y
export function toThree(x, y, z) {
  return [x, z, -y];
}
