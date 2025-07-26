# Guía de Desarrollador

## Sistema de Ramas y Flujo de Trabajo
- Ramas base: `main`, `develop`.
- Ramas de trabajo: `feature/rol-nombre-tareaID`, `fix/rol-nombre-tareaID`, `hotfix/rol-nombre-tareaID`, `release/vX.X.X`.
- Todo cambio va por Pull Request, con revisión y checklist.
- Automatización: scripts para crear/eliminar ramas, validación de PR, lint/tests automáticos.

## Buenas Prácticas
- Commits semánticos (`feat:`, `fix:`, `docs:`, etc).
- Documentar decisiones técnicas y fixes en el changelog y ADRs.
- Mantener la documentación actualizada y referenciada en el README.
