
import React, { useState } from 'react';
import { Menu, X, ChevronRight, Globe, Wallet, Bookmark, Car, Home, Briefcase, Book, LineChart, MessageSquare } from 'lucide-react';

const ZtartLanding = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed w-full bg-white border-b border-gray-200 z-50">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
          {/* Logo */}
          <div className="flex lg:flex-1">
            <a href="#" className="text-2xl font-bold text-purple-600">Ztart</a>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Desktop navigation */}
          <div className="hidden lg:flex lg:gap-x-12">
            <div className="flex items-center gap-6">
              <div className="relative group">
                <button className="flex items-center gap-2 text-gray-700 hover:text-purple-600">
                  Servicios Financieros
                  <ChevronRight className="h-4 w-4" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="p-4 space-y-3">
                    <div className="flex items-center gap-3">
                      <Wallet className="h-6 w-6 text-purple-600" />
                      <div>
                        <h3 className="font-medium">Ztart Pay</h3>
                        <p className="text-sm text-gray-500">Plataforma de pagos digitales</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <LineChart className="h-6 w-6 text-purple-600" />
                      <div>
                        <h3 className="font-medium">Ztart Broker</h3>
                        <p className="text-sm text-gray-500">Trading e inversiones</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative group">
                <button className="flex items-center gap-2 text-gray-700 hover:text-purple-600">
                  Servicios
                  <ChevronRight className="h-4 w-4" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="p-4 space-y-3">
                    <div className="flex items-center gap-3">
                      <Car className="h-6 w-6 text-purple-600" />
                      <div>
                        <h3 className="font-medium">Ztart Ride</h3>
                        <p className="text-sm text-gray-500">Servicios de transporte</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Home className="h-6 w-6 text-purple-600" />
                      <div>
                        <h3 className="font-medium">Ztart Home</h3>
                        <p className="text-sm text-gray-500">Alquileres y hospedajes</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Briefcase className="h-6 w-6 text-purple-600" />
                      <div>
                        <h3 className="font-medium">Ztart Work</h3>
                        <p className="text-sm text-gray-500">Servicios profesionales</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-6">
            <button className="flex items-center gap-2 text-gray-700 hover:text-purple-600">
              <Globe className="h-4 w-4" />
              ES
            </button>
            <button className="text-gray-700 hover:text-purple-600">Iniciar sesión</button>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg">Comenzar</button>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-black bg-opacity-50">
          <div className="fixed inset-y-0 right-0 z-50 w-full bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="text-2xl font-bold text-purple-600">Ztart</a>
              <button
                type="button"
                className="rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <a href="#" className="block px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Servicios Financieros</a>
                  <a href="#" className="block px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Servicios</a>
                </div>
                <div className="py-6">
                  <button className="block w-full text-left px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Iniciar sesión</button>
                  <button className="block w-full mt-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg">Comenzar</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main content */}
      <main className="pt-16">
        {/* Hero section */}
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Tu ecosistema digital completo
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Desde pagos hasta educación, movilidad y servicios financieros. Todo lo que necesitas en una única plataforma.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg flex items-center gap-2">
                  Comenzar ahora
                  <ChevronRight className="h-4 w-4" />
                </button>
                <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50">
                  Explorar servicios
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Features section */}
        <div className="bg-gray-50 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Un ecosistema completo para tu vida digital
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Descubre todas las posibilidades que Ztart tiene para ti. Pagos, educación, movilidad y más en una sola plataforma.
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
              <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                {/* Feature 1 */}
                <div className="flex flex-col">
                  <div className="mb-6">
                    <div className="rounded-lg bg-purple-600 p-2 w-10 h-10 flex items-center justify-center">
                      <Wallet className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold leading-8 text-gray-900">
                    Ztart Pay & Wallet
                  </h3>
                  <p className="mt-4 text-base leading-7 text-gray-600">
                    Procesa pagos de forma segura y gestiona tu dinero con nuestra billetera digital integrada.
                  </p>
                </div>

                {/* Feature 2 */}
                <div className="flex flex-col">
                  <div className="mb-6">
                    <div className="rounded-lg bg-purple-600 p-2 w-10 h-10 flex items-center justify-center">
                      <Book className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold leading-8 text-gray-900">
                    Ztart Academy
                  </h3>
                  <p className="mt-4 text-base leading-7 text-gray-600">
                    Aprende con nuestros cursos en línea sobre trading, negocios y tecnología.
                  </p>
                </div>

                {/* Feature 3 */}
                <div className="flex flex-col">
                  <div className="mb-6">
                    <div className="rounded-lg bg-purple-600 p-2 w-10 h-10 flex items-center justify-center">
                      <MessageSquare className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold leading-8 text-gray-900">
                    Ztart Voice Assistant
                  </h3>
                  <p className="mt-4 text-base leading-7 text-gray-600">
                    Controla todas las funciones con comandos de voz inteligentes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
          <div className="flex justify-center space-x-6 md:order-2">
            <button className="text-white flex items-center gap-2">
              <Globe className="h-4 w-4" />
              Español
            </button>
          </div>
          <div className="mt-8 md:order-1 md:mt-0">
            <p className="text-center text-xs leading-5 text-gray-400">
              &copy; 2024 Ztart. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ZtartLanding;