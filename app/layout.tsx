export const metadata = {
  title: 'Ztart — The Digital Revolution Hub for Finance & Lifestyle',
  description: 'The future of finance & lifestyle — powered by AI & blockchain. Manage funds, rewards, and crypto in one place.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-white antialiased">{children}</body>
    </html>
  );
}
