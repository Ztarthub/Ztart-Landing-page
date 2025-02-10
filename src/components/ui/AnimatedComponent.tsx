
import { motion } from 'framer-motion';

const AnimatedComponent = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
  >
    <h1>Contenido Animado</h1>
  </motion.div>
);

export default AnimatedComponent;