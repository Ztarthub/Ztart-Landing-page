export const metadata = {
  title: 'Ztart — Ecosistema Digital',
  description: 'Landing oficial de Ztart Ecosystem',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-white antialiased">{children}</body>
    </html>
  );
}
