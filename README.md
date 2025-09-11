# Ztart Landing — The Digital Revolution Hub for Finance & Lifestyle

## Run / Build / Deploy

- Dev: `npm run dev`
- Build: `npm run build`
- Start: `npm run start`

Stack: Next.js (App Router) + TypeScript + Tailwind v4.

## Quality Standards

- Lint/Types: `npm run lint`, `npm run type-check`
- No artifacts en git: `.next`, `dist`, `build` ignorados
- Accesibilidad: semántica básica y contraste en CTAs

## Project Structure

- `app/` — `layout.tsx`, `page.tsx`, `globals.css`
- `components/` — UI y secciones de landing

## Branching

Este proyecto implementa un sistema de ramas y documentación profesional:

- Ramas base: `main`, `develop`.
- Ramas de trabajo: `feature/rol-nombre-tareaID`, `fix/rol-nombre-tareaID`, `hotfix/rol-nombre-tareaID`, `release/vX.X.X`.
- Automatización: scripts y acciones automáticas para crear/eliminar ramas, validar PRs y ejecutar lint/tests.
- Todo cambio va por Pull Request, con revisión y checklist.
- Documentación técnica y de decisiones en `/docs`.

Consulta la [Guía de Desarrollador](./docs/developer-guide.md) y [CONTRIBUTING.md](./CONTRIBUTING.md) para detalles y buenas prácticas.
