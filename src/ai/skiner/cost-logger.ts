type CostEvent = { provider: string; model: string; inputTokens: number; outputTokens: number; ms: number; ts?: string };
export function logCost(e: CostEvent) {
  const ts = e.ts ?? new Date().toISOString();
  console.info("[skiner-cost]", { ...e, ts });
  // TODO: push to Supabase table `ai_cost_logs` via REST/Edge
}