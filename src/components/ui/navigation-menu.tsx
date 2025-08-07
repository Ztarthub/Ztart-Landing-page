// Componente mínimo para evitar errores de importación
export function NavigationMenu({ children }: { children: React.ReactNode }) {
  return <nav>{children}</nav>;
}

export function NavigationMenuList({ children }: { children: React.ReactNode }) {
  return <ul>{children}</ul>;
}

export function NavigationMenuItem({ children }: { children: React.ReactNode }) {
  return <li>{children}</li>;
}

export function NavigationMenuTrigger({ children }: { children: React.ReactNode }) {
  return <button>{children}</button>;
}

export function NavigationMenuContent({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
