import React from 'react';

interface SectionProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export default function Section({ title, children, className }: SectionProps) {
  return (
    <section className={`w-full max-w-7xl mx-auto py-16 px-4 ${className || ''}`}>
      {title && <h2 className="text-3xl font-extrabold mb-8 text-center text-blue-700 dark:text-blue-300">{title}</h2>}
      {children}
    </section>
  );
}
