import { CheckCircle } from 'lucide-react'
import Image from 'next/image'

const modules = [
  {
    name: 'Ztart Wallet',
    desc: 'Monedero digital, fiat/crypto, tarjetas, recompensas.',
    icon: '/assets/logo-ztart.png',
  },
  {
    name: "Tip'$ M€",
    desc: 'Propinas digitales, QR, gamificación, referidos.',
    icon: '/assets/logo-ztart.png',
  },
  {
    name: 'ZtartCoin',
    desc: 'Token nativo, minería por uso, trading, staking.',
    icon: '/assets/logo-ztart.png',
  },
  {
    name: 'Ztart Ride',
    desc: 'Movilidad, IA de rutas, comandos por voz.',
    icon: '/assets/logo-ztart.png',
  },
  {
    name: 'Ztart Academy',
    desc: 'Cursos, certificaciones, academia de trading.',
    icon: '/assets/logo-ztart.png',
  },
  {
    name: 'Ztart AI',
    desc: 'Skiner AI, asistentes inteligentes, automatización.',
    icon: '/assets/logo-ztart.png',
  },
  {
    name: 'Ztart eSIM',
    desc: 'Compra de eSIM internacional, descuentos, gestión.',
    icon: '/assets/logo-ztart.png',
  },
  {
    name: 'Ztart Travel',
    desc: 'Reservas de hoteles/vuelos, cashback, integración eSIM.',
    icon: '/assets/logo-ztart.png',
  },
]

export default function EcosystemModules() {
  return (
    <section id="ecosistema" className="py-24 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 via-cyan-500 to-red-500 bg-clip-text text-transparent">
          Módulos del Ecosistema
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {modules.map((mod) => (
            <div key={mod.name} className="group relative flex flex-col items-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 shadow-lg border border-blue-100 dark:border-gray-800 hover:scale-105 transition-transform cursor-pointer">
              <div className="mb-4">
                <Image src={mod.icon} alt={mod.name} width={56} height={56} className="rounded-full shadow" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center group-hover:text-blue-600 transition-colors">
                {mod.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-center text-base mb-4">
                {mod.desc}
              </p>
              <span className="inline-flex items-center gap-1 text-blue-500 dark:text-blue-300 text-sm font-medium">
                <CheckCircle className="w-4 h-4" />
                Disponible
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
