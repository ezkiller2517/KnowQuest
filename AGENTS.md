# AGENTS
- Project: KnowQuest (Next.js / TypeScript)
- Node: v18+
- Start dev: npm install && npm run dev
- Goals:
  1) Fix 410 transcript failures by implementing robust AssemblyAI start route with stream → Drive fallback.
  2) Add /debug/transcribe page that shows last AAI mode (stream vs drive) and last status JSON.
  3) Ensure KnowQuestPlayer fully loads videos, exposes onTick/onTranscript, and gate unlocks at 25%.
  4) Keep .env* out of git; use .env.example.
- Testing:
  - Lint: npm run lint
  - Typecheck: npm run typecheck (if present)
  - Dev server should start cleanly.
