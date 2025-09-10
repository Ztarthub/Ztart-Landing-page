# Task: RAG Support on Ztart-DDF
Goal: Answer with sources + confidence; fallback to human if confidence < τ.

Acceptance:
- `edge/rag-answer.ts` (citations, confidence)
- Eval set + accuracy/faithfulness measure
- `tests/rag.test.ts`, `README.md`
- Feature flag `rag_support_v1`