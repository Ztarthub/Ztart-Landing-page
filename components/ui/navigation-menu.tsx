'use client';
import * as React from 'react';

export function NavigationMenu({ children }: { children: React.ReactNode }) {
  return <div className="relative">{children}</div>;
}
export function NavigationMenuList({ children }: { children: React.ReactNode }) {
  return <div className="flex items-center gap-6">{children}</div>;
}
export function NavigationMenuItem({ children }: { children: React.ReactNode }) {
  return <div className="relative">{children}</div>;
}
export function NavigationMenuTrigger({ children }: { children: React.ReactNode }) {
  return <button className="text-sm text-gray-700 hover:text-gray-900">{children}</button>;
}
export function NavigationMenuContent({ children }: { children: React.ReactNode }) {
  return (
    <div className="absolute mt-2 rounded-md border bg-white shadow-lg">
      {children}
    </div>
  );
}
