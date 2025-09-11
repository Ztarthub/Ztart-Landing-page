'use client';
import * as React from 'react';
import clsx from 'clsx';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
};

export function Button({ className, variant = 'default', size = 'md', ...props }: ButtonProps) {
  const base = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';
  const variants = {
    default: 'bg-purple-600 text-white hover:bg-purple-700',
    outline: 'border border-gray-300 text-gray-900 hover:bg-gray-50',
    ghost: 'text-gray-700 hover:bg-gray-100'
  } as const;
  const sizes = {
    sm: 'h-8 px-3 text-sm',
    md: 'h-10 px-4 text-sm',
    lg: 'h-11 px-5 text-base'
  } as const;
  return (
    <button className={clsx(base, variants[variant], sizes[size], className)} {...props} />
  );
}

export default Button;
