# Task: Fraud Baseline for Tip'$ M€
Goal: Implement interpretable baseline (LogReg/tree) + SQL features + bias check.

Features:
- amount, frequency, device_id, geohash, hour, merchant_id, user_age_bucket, prev_chargebacks
- Supabase view + daily materialization

Metrics:
- AUC, precision@k, FPR at threshold, calibration

Acceptance:
- `features.sql`, `edge/fraud-score.ts`, `tests/fraud.test.ts`
- `bias_report.md` + `README.md`
- Feature flag `fraud_scoring_v1`

Deliver standard package.