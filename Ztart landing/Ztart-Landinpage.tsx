import React, { useState } from 'react';
import { Menu, X, ChevronRight, Globe, Wallet, Bookmark, Car, Home, Briefcase, Book, LineChart, MessageSquare } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";

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
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Servicios Financieros</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 w-[400px]">
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
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Servicios</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 w-[400px]">
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
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-6">
            <Button variant="ghost">
              <Globe className="mr-2 h-4 w-4" />
              ES
            </Button>
            <Button variant="ghost">Iniciar sesión</Button>
            <Button className="bg-purple-600 hover:bg-purple-700">Comenzar</Button>
          </div>
        </nav>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden">
            <div className="space-y-1 px-4 pb-3 pt-2">
              <Button variant="ghost" className="w-full justify-start">Servicios Financieros</Button>
              <Button variant="ghost" className="w-full justify-start">Servicios</Button>
              <Button variant="ghost" className="w-full justify-start">Academia</Button>
              <hr className="my-2" />
              <Button variant="ghost" className="w-full justify-start">Iniciar sesión</Button>
              <Button className="w-full bg-purple-600 hover:bg-purple-700">Comenzar</Button>
            </div>
          </div>
        )}
      </header>

      {/* Hero section */}
      <main className="pt-24">
        <div className="relative isolate">
          <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Tu ecosistema digital integral
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Desde pagos hasta educación, movilidad y servicios financieros. Todo lo que necesitas en una única plataforma.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                  Comenzar ahora
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg">
                  Explorar servicios
                </Button>
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
            <Button variant="ghost" className="text-white">
              <Globe className="mr-2 h-4 w-4" />
              Español
            </Button>
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
