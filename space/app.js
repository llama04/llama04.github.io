import React from 'react';
import { Canvas } from '@react-three/fiber';
export default function App() {
  return <Canvas></Canvas>;
}
export default function App() {
  return (
    <Canvas>
      <mesh>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="#E1DC59" />
      </mesh>
    </Canvas>
  );
}