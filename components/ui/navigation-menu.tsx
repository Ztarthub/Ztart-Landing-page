'use client';
import * as React from 'react';

export function NavigationMenu({ children }: { children: React.ReactNode }) {
  return <div className=relative>{children}</div>;
}
export function NavigationMenuList({ children }: { children: React.ReactNode }) {
  return <div className=flex
