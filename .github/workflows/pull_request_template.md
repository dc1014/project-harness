## 🤖 AI & Feature Summary
- **Agent Chain:** (e.g., Strategy -> Spec -> Engineering)
- **Feature/Fix:** [Briefly describe what this PR accomplishes]

## 🔗 Artifact Links
- **Brief:** [Link to `docs/product/briefs/...`]
- **Contract:** [Link to `docs/product/contracts/...`]
- **ADR Accepted:** [Link to `docs/product/adr/...`] or [N/A]

## 🔒 CEO Security & Architecture Audit
- [ ] **No Secret Leaks:** Verified ZERO API keys or PII are hardcoded. `pre-commit` secret scan passed.
- [ ] **Dependency Audit:** The AI did not hallucinate or add unapproved libraries to `package.json` or `pyproject.toml`.
- [ ] **Database Safety:** Migrations are verified. No destructive actions (`DROP TABLE`, `DELETE FROM` without `WHERE`) were executed without explicit approval.
- [ ] **Environment:** New environment variables updated in `.env.example` and target PaaS.

## 🧪 Verifiability & Zero-Debt Checklist
- [ ] **Hook Passed:** Local `pre-commit` passed (Ruff, Biome).
- [ ] **Tests Green:** Backend (`pytest`) and Frontend (`Vitest` / E2E) tests are passing.
- [ ] **Accessibility:** A11y tests passed (`@axe-core/playwright`).
- [ ] **Component RAG:** Used existing `shadcn` components. Visual placeholders used (no raw hallucinated SVGs).
- [ ] **Non-Destructive Logging:** Tracking databases (`experiment_log.md`) were *appended* to, not overwritten.
- [ ] **Telemetry:** Events added to schema (if applicable).

## 🗑️ Teardown (If Applicable)
- [ ] Dead code, unused UI components, and obsolete tests deleted.
- [ ] Dead telemetry events removed.

## 📝 Operator Notes & Friction
*Did the AI get stuck or hallucinate? Add observations here, and remember to update `docs/company/lessons_learned.md` before the next run.*