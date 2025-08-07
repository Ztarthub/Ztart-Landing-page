
import { Canvas } from '@react-three/fiber';
import { Box } from '@react-three/drei';
import * as THREE from 'three';

const ThreeDComponent = () => (
  <Canvas>
    {/* @ts-ignore */}
    <primitive object={new (window as any).THREE.AmbientLight(0xffffff, 0.5)} />
    {/* @ts-ignore */}
    <primitive object={new (window as any).THREE.PointLight(0xffffff, 1)} position={[10, 10, 10]} />
    <Box position={[-1.2, 0, 0]}>
      {/* @ts-ignore */}
      <primitive object={new THREE.MeshStandardMaterial({ color: 'orange' })} attach="material" />
    </Box>
  </Canvas>
);

export default ThreeDComponent;