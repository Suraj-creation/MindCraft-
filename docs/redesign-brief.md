# MindCraft redesign brief (baseline: 54a4255)

Mode: **Persuade** (landing) / **Operate+Read** (inner pages). Refinement, not a rebrand.

## Hard constraints
- **Color token schema is frozen.** Only these values may appear: canvas `#050505`, card `#0A0A0A`, active `#0D0F17`,
  indigo `#6366F1`/`#4F46E5` (Tailwind indigo-400/500/600), emerald `#10B981`, sky `#0EA5E9`, amber `#F59E0B`,
  teal `#0D9488`, text `#FFF` / `#E0E0E0` / `#9CA3AF`, borders `rgba(255,255,255,.08)` and indigo `/35`.
  No new hues, no new gradients outside these. Semantic mapping: indigo=primary/intelligence, emerald=AI Enterprise/Africa,
  sky=Market Research, amber=AI Training, teal=Consulting. Keep 60/30/10 distribution.
- Fonts frozen: Outfit (headings), Plus Jakarta Sans (body), JetBrains Mono (labels/data).
- **Copy facts are preserved.** Restructure, trim, reorder, tighten. Do not invent clients, stats, certifications or claims.
- Component props/exports and `NavTab` routing stay compatible (App.tsx passes the same props).
- `motion` (v12, `import { motion } from 'motion/react'`) for animation; lucide-react for icons.

## Information architecture rules
1. Every page opens with one-sentence **intent** (what is this page for, who is it for) then proof, then exploration, then one CTA.
2. Progressive disclosure: show 5-8 scannable items first; the rest behind tabs/accordions/"show all" (never 24 cards flat on mobile).
3. One primary CTA per viewport. Secondary actions are visually quieter (ghost/text).
4. Prefer real structure over decoration: counts, labels and outputs the data already holds.

## Layout / type rules (use shared classes from `src/index.css`)
- `mc-container` (max 80rem, fluid gutters), `mc-section` (fluid vertical rhythm), `mc-eyebrow`, `mc-h1`, `mc-h2`, `mc-lead`.
- Fluid type via `clamp`; body min 14px on mobile; mono labels min 11px; never 9-10px for meaningful text.
- Tap targets >= 44x44 (`mc-tap`). Visible `:focus-visible` ring is global.
- Mobile-first at 375px: single column, no horizontal page scroll, tables become stacked cards or `mc-snap-row`
  horizontal snap rails, sticky controls <= 56px, modals become bottom sheets (full width, `max-h-[90dvh]`, safe-area padding).
- Use `dvh` not `vh`. Respect `env(safe-area-inset-*)`.

## Motion rules (Emil Kowalski / impeccable)
- 150-250ms, `cubic-bezier(0.16,1,0.3,1)` ease-out; transform + opacity only; never animate layout properties.
- Enter-on-view once (`whileInView`, `viewport={{ once: true, margin: '-10%' }}`), stagger <= 60ms, no bounce.
- Press feedback `active:scale-[0.98]`; hover lifts only under `@media (hover:hover)`.
- Honor `prefers-reduced-motion` (global CSS already collapses durations; also skip JS-driven loops).

## Verification
`npm run lint` (tsc) and `npm run build` must pass. Check at 375, 768, 1440 widths with agent-browser; no horizontal overflow.
