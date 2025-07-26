import { useEffect, useRef } from 'react';

export function useParallax(cb: (offsetX: number, offsetY: number) => void) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function handleMove(e: MouseEvent) {
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;
      cb(x, y);
    }
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, [cb]);
  return ref;
}
