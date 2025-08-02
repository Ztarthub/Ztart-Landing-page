# Ztart Landing Page 🚀

Una landing page moderna y responsive para el ecosistema Ztart, construida con React, TypeScript y Tailwind CSS.

## ✨ Características

- **React 18** con TypeScript
- **Tailwind CSS** para estilos modernos
- **Framer Motion** para animaciones fluidas
- **Three.js** para componentes 3D
- **Context API** para estado global
- **Responsive Design** para todos los dispositivos
- **Testing** con Jest y React Testing Library

## 🛠️ Tecnologías

- **Frontend:** React 18, TypeScript
- **Styling:** Tailwind CSS, CSS Modules
- **Animations:** Framer Motion
- **3D Graphics:** Three.js, @react-three/fiber
- **Icons:** Lucide React
- **Testing:** Jest, React Testing Library
- **Build Tool:** Create React App

## 📦 Instalación

1. **Clonar el repositorio:**
```bash
git clone <repository-url>
cd ztart-landing
```

2. **Instalar dependencias:**
```bash
npm install
```

3. **Ejecutar en modo desarrollo:**
```bash
npm start
```

4. **Abrir en el navegador:**
```
http://localhost:3000
```

## 🧪 Testing

```bash
# Ejecutar tests
npm test

# Ejecutar tests en modo watch
npm test -- --watch

# Ejecutar tests con coverage
npm test -- --coverage
```

## 🏗️ Build

```bash
# Crear build de producción
npm run build

# Servir build de producción
npm run serve
```

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── ui/            # Componentes de UI
│   └── __tests__/     # Tests de componentes
├── contexts/           # Contextos de React
├── hooks/              # Hooks personalizados
├── types/              # Definiciones de TypeScript
├── utils/              # Utilidades y constantes
├── services/           # Servicios y APIs
└── index.css          # Estilos globales
```

## 🎨 Componentes Principales

### ZtartLanding
El componente principal que renderiza la landing page completa con:
- Header con navegación
- Sección hero
- Sección de características
- Footer

### AppContext
Contexto global para manejar:
- Estado del menú móvil
- Tema (claro/oscuro)
- Idioma
- Usuario autenticado

## 🚀 Scripts Disponibles

- `npm start` - Ejecutar en modo desarrollo
- `npm build` - Crear build de producción
- `npm test` - Ejecutar tests
- `npm eject` - Ejectar configuración de CRA

## 📱 Responsive Design

La aplicación está optimizada para:
- **Desktop:** 1024px+
- **Tablet:** 768px - 1023px
- **Mobile:** < 768px

## 🎯 Características del Ecosistema Ztart

### Servicios Financieros
- **Ztart Pay** - Plataforma de pagos digitales
- **Ztart Broker** - Trading e inversiones

### Servicios Generales
- **Ztart Ride** - Servicios de transporte
- **Ztart Home** - Alquileres y hospedajes
- **Ztart Work** - Servicios profesionales
- **Ztart Academy** - Cursos en línea

## 🔧 Configuración

### Tailwind CSS
Configurado con colores personalizados y animaciones:
- Paleta de colores primarios
- Animaciones personalizadas
- Componentes reutilizables

### TypeScript
Configurado con:
- Path aliases (`@/components`, `@/utils`)
- Strict mode habilitado
- Tipos personalizados

## 📈 Próximas Mejoras

- [ ] Integración con backend
- [ ] Autenticación de usuarios
- [ ] PWA (Progressive Web App)
- [ ] Internacionalización (i18n)
- [ ] Dark mode
- [ ] Optimización de performance
- [ ] SEO mejorado

## 🤝 Contribuir

1. Fork el proyecto
2. Crear una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para detalles.

## 📞 Contacto

- **Proyecto:** [Ztart Landing Page](https://github.com/your-username/ztart-landing)
- **Issues:** [GitHub Issues](https://github.com/your-username/ztart-landing/issues)

---

**Desarrollado con ❤️ por el equipo Ztart**