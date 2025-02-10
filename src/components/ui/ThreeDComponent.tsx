
import { Canvas } from '@react-three/fiber';
import { Box } from '@react-three/drei';

const ThreeDComponent = () => (
  <Canvas>
    <ambientLight />
    <pointLight position={[10, 10, 10]} />
    <Box position={[-1.2, 0, 0]}>
      <meshStandardMaterial attach="material" color="orange" />
    </Box>
  </Canvas>
);

export default ThreeDComponent;