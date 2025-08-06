import ZtartHead from '@/components/ZtartHead'
import Navbar from '@/components/ui/Navbar'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <ZtartHead />
      <body className="bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 min-h-screen antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  )
}
