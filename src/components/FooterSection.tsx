export default function FooterSection() {
  return (
    <footer className="bg-gray-950 text-white py-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <img src="/assets/logo-ztart.png" alt="Ztart Logo" className="w-10 h-10" />
          <span className="font-bold text-lg">Ztart Ecosystem</span>
        </div>
        <div className="flex gap-6 text-sm">
          <a href="#" className="hover:text-blue-400">Inicio</a>
          <a href="#" className="hover:text-blue-400">Ecosistema</a>
          <a href="#" className="hover:text-blue-400">Planes</a>
          <a href="#" className="hover:text-blue-400">Demo</a>
          <a href="#" className="hover:text-blue-400">Comunidad</a>
        </div>
        <div className="flex gap-4">
          <a href="#" className="hover:text-blue-400">Legal</a>
          <a href="#" className="hover:text-blue-400">Contacto</a>
        </div>
      </div>
      <div className="mt-6 text-center text-xs text-white/60">
        &copy; {new Date().getFullYear()} Ztart Ecosystem. Todos los derechos reservados.
      </div>
    </footer>
  );
}
