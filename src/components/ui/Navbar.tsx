import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 dark:bg-gray-950/80 backdrop-blur-md shadow-sm border-b border-gray-200 dark:border-gray-800">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/assets/logo-ztart.png" alt="Ztart Logo" width={40} height={40} priority />
          <span className="font-bold text-xl bg-gradient-to-r from-blue-600 via-cyan-500 to-red-500 bg-clip-text text-transparent">Ztart</span>
        </Link>
        <ul className="hidden md:flex gap-8 text-base font-medium">
          <li><a href="#ecosistema" className="hover:text-blue-600 transition-colors">Ecosistema</a></li>
          <li><a href="#planes" className="hover:text-blue-600 transition-colors">Planes</a></li>
          <li><a href="#demo" className="hover:text-blue-600 transition-colors">Demo</a></li>
          <li><a href="#comunidad" className="hover:text-blue-600 transition-colors">Comunidad</a></li>
        </ul>
        <div className="flex items-center gap-2">
          <a href="#cta" className="px-5 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-red-500 text-white font-semibold shadow hover:scale-105 transition-transform">Comenzar</a>
        </div>
      </nav>
    </header>
  )
}
