// Componente mínimo para evitar errores de importación
import React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: string;
};

export function Button({ children, variant, className = '', ...props }: ButtonProps) {
  // Aplica la variante como clase extra si existe
  const variantClass = variant ? `btn-${variant}` : '';
  return (
    <button className={`${className} ${variantClass}`.trim()} {...props}>
      {children}
    </button>
  );
}
