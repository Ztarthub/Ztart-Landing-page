import React from 'react';

interface GridProps {
  children: React.ReactNode;
  cols?: number;
  className?: string;
}

export default function Grid({ children, cols = 3, className }: GridProps) {
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-${cols} gap-8 ${className || ''}`}>
      {children}
    </div>
  );
}
