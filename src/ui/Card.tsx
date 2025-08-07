import React from 'react';

interface CardProps {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

export default function Card({ title, description, icon, children }: CardProps) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6 flex flex-col items-center gap-2 transition-transform hover:scale-105">
      {icon && <div className="mb-2 text-4xl">{icon}</div>}
      <h3 className="font-bold text-xl text-blue-600 dark:text-blue-300 text-center">{title}</h3>
      {description && <p className="text-gray-600 dark:text-gray-300 text-center">{description}</p>}
      {children}
    </div>
  );
}
