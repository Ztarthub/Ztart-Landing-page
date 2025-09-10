# Skiner Collective — Spec

## Scope (MVP 2 semanas)
- Optimizar Skiner (router, prompts, guardrails, logs/costos).
- Implementar 2 recetas de alto impacto:
  A) Detección de fraude Tip’$ M€ (baseline + bias check)
  B) Soporte RAG Ztart-DDF con fallback humano

## Deliverables por receta
- `spec.md`, `features.sql`, `edge/` function, `tests/`, `README.md`
- Métricas definidas y panel básico (latencia P95, costo/1k req, calidad)

## Data/Privacy
- Evitar datos sensibles; si son necesarios, anonimizar y documentar.
- RLS obligatoria; usar vistas públicas cuando aplique.

## Release gates
- Baseline >= propuesta
- Bias/fairness OK
- Feature flag + rollback