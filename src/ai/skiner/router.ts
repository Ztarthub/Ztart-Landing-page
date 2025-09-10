export type RouteCtx = {
  task: string;
  tags?: string[];
  constraints?: { latencyMsP95?: number; costPer1kMaxUSD?: number };
};

export type RouteDecision = {
  specialist: "theorist" | "vision_data" | "gen_research" | "productizer" | "ethics";
  provider: "openai" | "anthropic" | "gemini" | "local";
  model: string;
  reason: string;
};

export function route(ctx: RouteCtx): RouteDecision {
  const t = (ctx.task || "").toLowerCase();
  // naive heuristics — Cursor will improve
  if (t.includes("dataset") || t.includes("label") || t.includes("bias"))
    return { specialist: "vision_data", provider: "openai", model: "gpt-4.1", reason: "Data-centric" };
  if (t.includes("fraud") || t.includes("baseline") || t.includes("metrics"))
    return { specialist: "theorist", provider: "openai", model: "gpt-4.1", reason: "Modeling & metrics" };
  if (t.includes("rag") || t.includes("retrieval"))
    return { specialist: "productizer", provider: "openai", model: "gpt-4.1", reason: "Ship RAG feature" };
  if (t.includes("ethic") || t.includes("privacy"))
    return { specialist: "ethics", provider: "openai", model: "gpt-4.1", reason: "Safety" };
  return { specialist: "productizer", provider: "openai", model: "gpt-4.1", reason: "Default ship" };
}