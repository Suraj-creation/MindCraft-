# MindCraft Immersive Art Direction Amendment Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace boxed evidence frames with an immersive, dark-fade image grammar while restoring the approved Overview hero composition.

**Architecture:** Reuse `ArtImage`, `Scrim`, `HeroSection` and the existing responsive image data. Add only shared CSS roles for full-bleed art and readable copy placement; page components select a route-specific direction and crop rather than introducing a second image system.

**Tech Stack:** React 19, TypeScript, Vite 6, Tailwind CSS v4, Motion.

**Spec:** `docs/superpowers/specs/2026-10-10-mindcraft-evidence-led-editorial-refinement-design.md`

## Global Constraints

- Use supplied `ArtImage` assets only; do not fetch or generate imagery.
- Restore the Overview global hero and remove the deep-indigo type-only opening.
- Image art dissolves into `#050505`/`#0A0A0A`; no framed or card-like editorial imagery.
- Keep route-specific asset assignment, all `NavTab` paths, data explorers, keyboard flow and the verified enquiry destination.
- Keep fades purposeful, visual text legible, accent lighting restrained and reduced motion authoritative.
- Validate changed routes at 390px, 768px and 1440px with lint, production build and browser checks.

---

### Task 1: Establish a shared immersive-art surface

**Files:**
- Modify: `src/index.css`
- Modify: `src/components/ui/Hero.tsx`

**Interfaces:**
- Consumes: existing `ArtImage` absolute fill behaviour and `Scrim` overlay component.
- Produces: `mc-art-bleed` and `mc-art-copy` classes usable by route openings without a new component API.

- [ ] **Step 1: Capture current regressions**

Run `npm run lint` and inspect `#home`, `#consulting`, `#market-research` in the local browser.

- [ ] **Step 2: Add only shared composition roles**

Add CSS roles that make an art container relative and edge-clipped, then position readable foreground copy above it. Use only approved canvas/graphite fades in individual `Scrim` backgrounds.

- [ ] **Step 3: Verify the shared role**

At desktop and narrow browser widths, confirm the absolute image cannot overlay an unrelated CTA and that `document.documentElement.scrollWidth <= window.innerWidth`.

- [ ] **Step 4: Commit**

```powershell
git add src/index.css src/components/ui/Hero.tsx
git commit -m "refactor: establish immersive art treatment"
```

### Task 2: Restore the Overview image-led opening and unbox its art

**Files:**
- Modify: `src/components/HeroOperatingSystem.tsx`
- Modify: `src/components/LandingSections.tsx`

**Interfaces:**
- Consumes: existing `onOpenIntake`, capability `setActiveTab`, `ArtImage`, `Scrim` and `BTN_*` contracts.
- Produces: a full-bleed global Overview hero and three distinct immersive proof placements while retaining the 420–520 word target and all actions.

- [ ] **Step 1: Write the browser acceptance contract**

Before changing the Overview, record that `#home` must contain a `global` image in the hero, exactly one each of `global`, `strategy` and `office`, a working hero enquiry button, and no horizontal overflow.

- [ ] **Step 2: Restore the full-bleed hero**

Place `global` beneath the existing H1/actions, with a left-to-right black scrim and a header-safe top fade. Remove the deep-indigo hero surface and any wide CTA glow.

- [ ] **Step 3: Make lower art edge-led**

Keep `strategy` and `office` in their assigned Overview moments, but extend each art composition to its content boundary and let a canvas fade carry concise copy—not a rounded box or bordered image frame.

- [ ] **Step 4: Run acceptance checks**

Use the real browser to click each capability action, open the hero enquiry dialog, close it with Escape, and confirm focus returns to the hero action.

- [ ] **Step 5: Commit**

```powershell
git add src/components/HeroOperatingSystem.tsx src/components/LandingSections.tsx
git commit -m "refactor: immerse overview art direction"
```

### Task 3: Apply the grammar to capability and specialist openings

**Files:**
- Modify: `src/components/BusinessConsultingPillar.tsx`
- Modify: `src/components/MarketResearchWorkspace.tsx`
- Modify: `src/components/AITrainingSimulation.tsx`
- Modify: `src/components/AIEnterpriseSolutionsView.tsx`
- Modify: `src/components/LifeSciencesEcosystem.tsx`
- Modify: `src/components/AboutLeadership.tsx`

**Interfaces:**
- Consumes: each page’s assigned `ArtImage`, existing content arrays, selectors and enquiry callbacks.
- Produces: one primary route-specific immersive image composition per route; existing filters, tabs, disclosures and source labels remain unchanged.

- [ ] **Step 1: Reuse each route’s assigned art only**

For consulting, research, training, solutions, Life Sciences and About, make the existing primary image a section-spanning or edge-bleed composition with an intentional dark fade and concise foreground copy.

- [ ] **Step 2: Protect tools and factual labels**

Keep all data controls outside art overlays. Preserve illustrative, prototype and source qualifiers exactly where the existing data supplies them.

- [ ] **Step 3: Verify selections and enquiry paths**

On each direct route, use one existing tab/filter/selection then open and close the enquiry dialog without submitting it.

- [ ] **Step 4: Commit**

```powershell
git add src/components/BusinessConsultingPillar.tsx src/components/MarketResearchWorkspace.tsx src/components/AITrainingSimulation.tsx src/components/AIEnterpriseSolutionsView.tsx src/components/LifeSciencesEcosystem.tsx src/components/AboutLeadership.tsx
git commit -m "refactor: immerse route-specific art"
```

### Task 4: Complete consistency and validation

**Files:**
- Modify: `src/components/IndustryIntelligenceExplorer.tsx`
- Modify: `src/components/AfricaIntelligenceExplorer.tsx`
- Modify: `src/components/LocalizationView.tsx`
- Modify: `src/components/MarketEntryFrameworkView.tsx`
- Modify: `src/components/IntegratedModelSection.tsx`
- Modify: `docs/implementation-map.md`

**Interfaces:**
- Consumes: existing route art, `PageHeader`, explorer controls and direct hashes.
- Produces: a factual record of observed coverage; data-first routes remain data-first.

- [ ] **Step 1: Apply only orienting art to Markets**

Convert route-specific panoramic art to edge-led context surfaces only where it assists orientation. Leave matrix, country map, problem explorer and universe graph without decorative photo framing.

- [ ] **Step 2: Run final validation**

Run `npm run lint`, `npm run build` and `C:\Users\Govin\.agents\skills\impeccable\scripts\impeccable.cmd detect --json src\App.tsx src\components src\components\ui`. Inspect every route at 390px, 768px and 1440px; test keyboard navigation, reduced motion, direct hashes and no overflow.

- [ ] **Step 3: Record evidence and commit**

Append only observed results and limitations to `docs/implementation-map.md`, then commit with `docs: record immersive art validation`.

## Plan Self-Review

- The amendment maps the restored Overview hero to Task 2, shared fade mechanics to Task 1, all requested route-family consistency to Tasks 3–4, and retained navigation/content constraints to every task.
- It introduces no asset, route, routing layer or component library.
- The prior editorial copy reduction remains intact while image treatment changes from contained frames to immersive compositions.
