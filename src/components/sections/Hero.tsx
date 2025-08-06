import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[80vh] py-16 bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 overflow-hidden">
      <div className="z-10 flex flex-col items-center">
        <div className="animate-spin-slow drop-shadow-xl">
          <Image
            src="/assets/logo-ztart.png"
            alt="Ztart Ecosystem Logo"
            width={180}
            height={180}
            priority
          />
        </div>
        <h1 className="mt-8 text-5xl md:text-7xl font-extrabold text-center bg-gradient-to-r from-blue-600 via-cyan-500 to-red-500 bg-clip-text text-transparent animate-gradient bg-300%">
          Ztart Ecosystem
        </h1>
        <p className="mt-6 text-xl md:text-2xl text-gray-700 dark:text-gray-200 text-center max-w-2xl">
          Innovación global en finanzas, IA, movilidad y más.<br />
          Vive la experiencia WOW. Escala sin límites.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <a href="#demo" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-red-500 rounded-xl text-white font-semibold text-lg shadow-lg hover:scale-105 transition-transform">
            Probar Demo
          </a>
          <a href="#planes" className="px-8 py-4 border-2 border-blue-500 rounded-xl font-semibold text-lg text-blue-600 dark:text-blue-300 hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors">
            Ver Planes
          </a>
        </div>
      </div>
      {/* Efecto de fondo animado */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-blue-400/20 via-cyan-300/10 to-transparent rounded-full blur-3xl animate-pulse-slow" />
      </div>
    </section>
  )
}
