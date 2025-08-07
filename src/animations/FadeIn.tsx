import { motion } from 'framer-motion';
import React from 'react';

export default function FadeIn({ children }: { children: React.ReactNode }) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
      {children}
    </motion.div>
  );
}
