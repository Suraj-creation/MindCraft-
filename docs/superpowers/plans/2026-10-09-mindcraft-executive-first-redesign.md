# MindCraft Executive-First Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use `executing-plans` to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Deliver a concise, evidence-led MindCraft website with five clear primary journeys, working deep links, deliberate use of the supplied imagery, and preserved interactive specialist routes.

**Architecture:** Keep the current React/Vite single-view architecture and `NavTab` contract. A single `navigate` function in `App.tsx` will own selection, URL hash updates and scroll restoration; `NAV_ITEMS` remains the source of truth for the header and contextual section tabs. Existing visual primitives and `ArtImage` will be extended in place rather than creating a parallel design system.

**Tech Stack:** React 19, TypeScript, Vite 6, Tailwind CSS v4, Motion, Lucide React.

**Spec:** `docs/superpowers/specs/2026-10-09-mindcraft-executive-first-redesign-design.md`

## Global Constraints

- Preserve every existing `NavTab`, public component prop, data-driven explorer and engagement-builder workflow.
- Use `info@mindcraftconsultancy.com` only through the existing `EngagementIntakeModal` for general enquiries.
- Use only supplied assets; use `ArtImage` for responsive WebP families and the supplied portrait for Dayanand Poojari.
- Retain only sourced claims; preserve the six documented Life Sciences subsectors exactly.
- Keep `NAV_ITEMS` as the sole navigation data model and retain `NavTab` compatibility.
- Validate at 390px, 768px and 1440px, including direct hash entry, keyboard access and reduced motion.
- Run `npm run lint`, `npm run build`, available browser checks and the installed Impeccable detector after the visual changes.

---

## Files and responsibilities

| File | Responsibility |
| --- | --- |
| `src/components/PillarParts.tsx` | Capability-page helpers and no orphaned public imports. |
| `src/components/AITrainingSimulation.tsx` | Concise training pillar opening and workshop artwork. |
| `src/components/AIEnterpriseSolutionsView.tsx` | Concise enterprise-AI pillar opening and operations artwork. |
| `src/App.tsx` | One validated hash-aware route-selection function; app shell accessibility. |
| `src/data/navigation.ts` | Five primary journeys and discovery of all preserved deep routes. |
| `src/components/Header.tsx` | Existing responsive menu driven by the navigation model, with clear active state and accessible hash navigation. |
| `src/components/LandingSections.tsx`, `src/components/HeroOperatingSystem.tsx` | Editorial overview hierarchy, reduced repeat copy and strategy imagery. |
| `src/components/{BusinessConsultingPillar,MarketResearchWorkspace,LifeSciencesEcosystem,IndustryIntelligenceExplorer,AfricaIntelligenceExplorer,LocalizationView,MarketEntryFrameworkView,IntegratedModelSection,AboutLeadership}.tsx` | Existing page-specific surfaces, each using its assigned supplied artwork and concise verified copy. |
| `src/index.css`, `src/components/ui/{Hero,primitives}.tsx` | Skip link, visible focus treatment, motion-safe shared patterns and global reading rhythm. |

## Task 1: Restore the capability-page module contract

**Files:**
- Modify: `src/components/AITrainingSimulation.tsx`
- Modify: `src/components/AIEnterpriseSolutionsView.tsx`
- Modify: `src/components/PillarParts.tsx`

**Interfaces:**
- Consumes: `AITrainingSimulationProps` and `AIEnterpriseSolutionsViewProps`, each retaining `onOpenIntake` and `setActiveTab`.
- Produces: Type-safe capability page entry points with no imports for unavailable exports.

- [x] **Step 1: Establish the failing integration check**

Run: `npm run lint`

Expected before repair: TypeScript reports that `PillarHero`, `GroupCard` and `DeliverablesBlock` are not exported from `PillarParts`.

- [x] **Step 2: Replace orphaned capability primitives with the approved shared system**

In each affected pillar page, replace the unavailable imports with `HeroSection`, `HeroCopy`, `Scrim`, `ArtCaption` and `ArtImage`; retain `tabKeyNav` for the working curriculum/solution explorers. Use the actual page family (`training-workshop` and `solutions-operations`) as a single visual anchor, with `priority` only for its page opener.

```tsx
<HeroSection className="min-h-[34rem] overflow-hidden">
  <ArtImage name="training-workshop" alt="Facilitator leading a workshop" priority />
  <Scrim background="linear-gradient(90deg, #050505 0%, rgba(5,5,5,.78) 52%, rgba(5,5,5,.2) 100%)" />
  <div className="mc-container relative z-10 py-20"><HeroCopy title={<>AI training for <em>real work.</em></>} /></div>
</HeroSection>
```

Keep the sourced capability groups and deliverables, but display them as ruled lists or existing `DeepDive` disclosures rather than reintroducing a second generic hero/card system.

- [x] **Step 3: Make the integration check pass**

Run: `npm run lint`

Expected: exit code 0, confirming all lazy-loaded capability modules type-check.

- [x] **Step 4: Smoke-test both lazy routes**

Open `/#ai-training` and `/#ai-solutions` in the local Vite server; ensure each art asset loads, the primary enquiry action opens the existing modal, and its tab/explorer controls still respond.

## Task 2: Make all existing views URL-addressable

**Files:**
- Modify: `src/App.tsx`
- Modify: `src/data/navigation.ts`

**Interfaces:**
- Consumes: every existing `NavTab`, `navTabOf` and the app’s existing lazy view aliases.
- Produces: `navigate(tab: NavTab)` used by `NavContext`, header, footer, search, landing sections and deep-route controls.

- [x] **Step 1: Add an explicit route validation set**

Export a route validator from `src/data/navigation.ts` based on the existing valid tab IDs and aliases, rather than accepting arbitrary hash text.

```ts
export const tabFromHash = (hash: string): NavTab | null => {
  const tab = decodeURIComponent(hash.replace(/^#/, '')) as NavTab;
  return ROUTE_TABS.has(tab) ? tab : null;
};
```

Include every existing deep tab (`matrix-3d`, `capability-graph`, `operating-model`, `engagement-builder`, `localization`, `africa-intelligence` and aliases), so direct entry never silently removes a route.

- [x] **Step 2: Use one navigation owner in `App.tsx`**

Initialize `activeTab` from `tabFromHash(window.location.hash) ?? 'home'`; add a `hashchange` listener; define `navigate` with a stable callback that updates state and `history.pushState` only when the selected tab changes. Pass `navigate` everywhere that currently receives `setActiveTab`.

```ts
const navigate = useCallback((tab: NavTab) => {
  setActiveTab(tab);
  const nextHash = `#${encodeURIComponent(tab)}`;
  if (window.location.hash !== nextHash) window.history.pushState(null, '', nextHash);
}, []);
```

Retain existing alias rendering (`responsible-ai` → `ai-solutions`, `senior-expertise` → `about`) so a selected alias remains the active contextual route while its existing view renders.

- [x] **Step 3: Verify selection and return paths**

At local URLs `/#industries`, `/#life-sciences`, `/#about`, `/#senior-expertise`, `/#engagement-builder` and `/#responsible-ai`, refresh the browser and confirm the expected view, matching active menu state and a route back to its parent journey.

- [x] **Step 4: Run the static check**

Run: `npm run lint`

Expected: exit code 0.

## Task 3: Consolidate navigation to five primary journeys

**Files:**
- Modify: `src/data/navigation.ts`
- Modify: `src/components/Header.tsx`
- Modify: `src/components/Footer.tsx` only where a changed label or discoverability link requires it

**Interfaces:**
- Consumes: `NAV_ITEMS`, `sectionItemOf`, `sectionOf`, the existing Header desktop dropdown / mobile accordion APIs.
- Produces: Overview, Capabilities, Markets, Life Sciences and About as the only primary header journeys.

- [x] **Step 1: Encode the five-journey model in `NAV_ITEMS`**

Use this exact ownership without deleting IDs:

| Header journey | Primary ID | Dropdown IDs |
| --- | --- | --- |
| Overview | `home` | none |
| Capabilities | `consulting` | `consulting`, `market-research`, `ai-training`, `ai-solutions`, `operating-model`, `maturity-model`, `capability-graph`, `responsible-ai` |
| Markets | `industries` | `industries`, `africa-explorer`, `africa-intelligence`, `localization`, `market-entry`, `matrix-3d`, `question-to-outcome` |
| Life Sciences | `life-sciences` | `life-sciences` |
| About | `about` | `about`, `senior-expertise`, `insights`, `engagement-builder` |

Descriptions must stay conservative: refer to “market context,” “entry planning,” “AI readiness” and “indicative engagement” rather than claims of proven outcomes.

- [x] **Step 2: Preserve desktop, mobile and keyboard behavior**

Keep the current header’s Arrow key, Escape, focus-return, desktop dropdown and mobile accordion logic. Update its link/button behavior to invoke the supplied `navigate` callback; do not create a second mobile navigation list.

- [x] **Step 3: Verify navigation at all breakpoints**

At 1440px, open each dropdown with keyboard and pointer; at 390px, open the menu, expand every group and select a nested route. Confirm Escape closes the active menu and focus indicators remain visible.

## Task 4: Apply the editorial visual system and concise evidence-led copy

**Files:**
- Modify: `src/components/HeroOperatingSystem.tsx`
- Modify: `src/components/LandingSections.tsx`
- Modify: `src/components/BusinessConsultingPillar.tsx`
- Modify: `src/components/MarketResearchWorkspace.tsx`
- Modify: `src/components/LifeSciencesEcosystem.tsx`
- Modify: `src/components/IndustryIntelligenceExplorer.tsx`
- Modify: `src/components/AfricaIntelligenceExplorer.tsx`
- Modify: `src/components/LocalizationView.tsx`
- Modify: `src/components/MarketEntryFrameworkView.tsx`
- Modify: `src/components/IntegratedModelSection.tsx`
- Modify: `src/components/AboutLeadership.tsx`

**Interfaces:**
- Consumes: existing component props and `ArtImage` asset names documented in `docs/implementation-map.md`.
- Produces: a shorter page opening for every major journey without changing explorer data or inquiry actions.

- [x] **Step 1: Set one assigned visual anchor per page**

Use these exact `ArtImage` names: `strategy` on overview; `consulting-boardroom`; `research-mapping`; `lifesciences-lab`; `industries-panorama`; `africa-network`; `localization-market`; `market-entry-port`; `model-strategy-hub`; and `about-skyline`. Keep the portrait path `src/assets/pages/dayanand-portrait.webp` for Dayanand; do not add stock/generated images or use a responsive family as a second page background.

- [x] **Step 2: Rewrite openings as decision-oriented sections**

Keep each hero to an H1, one supporting sentence and at most two actions. On Overview retain exactly: the four documented capabilities, Life Sciences, African market fluency, responsible AI, and the existing enquiry. On Life Sciences render all six sourced subsectors:

```ts
['Pharmaceuticals', 'Medical Devices', 'Medical Diagnostics', 'Medical Equipment', 'Surgical Consumables', 'Hospitals & Healthcare Providers']
```

Move retained detail into existing progressive disclosures, data explorers and contextual related links rather than repeating it in introductory cards.

- [x] **Step 3: Keep evidence boundaries explicit**

Remove or soften claims that imply unverified products, outcomes, clients, certifications, partnerships or statistics. Use “can support,” “engagements may include,” or the source document’s neutral service wording when describing potential deliverables.

- [x] **Step 4: Verify functional content paths**

For Overview, every capability card must still reach its pillar. For Markets, preserve all explorer filters/selection state and forward paths. For Life Sciences, each six-subsector label must remain readable. For About, verify the real portrait is displayed and Dayanand’s independent-professional contact remains distinct from the general enquiry action.

## Task 5: Complete accessibility and motion-safe global refinements

**Files:**
- Modify: `src/App.tsx`
- Modify: `src/index.css`
- Modify: `src/components/ui/Hero.tsx`
- Modify: `src/components/ui/primitives.tsx`
- Modify only changed form controls that currently remove the outline without a `focus-visible` replacement

**Interfaces:**
- Consumes: existing design tokens, `prefers-reduced-motion`, current focus styles.
- Produces: skip-to-content path, unmasked keyboard focus and opacity/transform-only entrance motion in changed shared components.

- [x] **Step 1: Add a skip link and a named main target**

Place this first in the app shell and give the main element `id="main-content"` with `tabIndex={-1}`:

```tsx
<a className="mc-skip-link" href="#main-content">Skip to content</a>
```

Define `.mc-skip-link` in `index.css` so it is offscreen until `:focus-visible`, then appears above the header with brand-consistent contrast.

- [x] **Step 2: Preserve focus and reduce costly animation**

For controls with `focus:outline-none`, add an explicit `focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-300`. Remove `filter: blur(...)` from the changed `HeroCopy` and `PageHeader` motion variants, retaining only `opacity` and `transform`. Leave the existing global reduced-motion guard active.

- [x] **Step 3: Keyboard verification**

Using keyboard only, tab from the top of the document to the skip link, header controls, primary CTA, page disclosures, enquiry modal controls and footer links. Confirm focus never disappears and the modal continues to validate without sending data automatically.

## Task 6: Validate the finished site and record evidence

**Files:**
- Modify: `docs/implementation-map.md` with final validation outcomes only

- [x] **Step 1: Run repository gates**

Run, in order:

```powershell
npm run lint
npm run build
```

Expected: both commands exit 0.

- [x] **Step 2: Inspect every route at required widths**

At 390px, 768px and 1440px inspect `home`, `consulting`, `market-research`, `ai-training`, `ai-solutions`, `industries`, `africa-explorer`, `africa-intelligence`, `localization`, `market-entry`, `matrix-3d`, `question-to-outcome`, `life-sciences`, `operating-model`, `capability-graph`, `engagement-builder`, `insights`, `about` and `senior-expertise`. Record horizontal overflow, clipping, collisions, art contrast and active-state outcomes.

- [x] **Step 3: Run the available visual detector**

Run the installed detector on changed UI code after the build succeeds:

```powershell
C:\Users\Govin\.agents\skills\impeccable\scripts\impeccable.cmd detect --json src\App.tsx src\components\Header.tsx src\components\LandingSections.tsx src\components\HeroOperatingSystem.tsx src\components\AITrainingSimulation.tsx src\components\AIEnterpriseSolutionsView.tsx
```

Fix detector findings that correspond to an actual issue, rerun the applicable check, and record any non-actionable limitation instead of claiming it passed.

- [x] **Step 4: Update the validation record**

Append exact commands, exit statuses, viewport findings, direct-link checks, keyboard checks and known limitations to `docs/implementation-map.md`. Do not describe a visual or functional test as complete unless it was observed in the browser.

## Plan self-review

- **Spec coverage:** Tasks 2–3 cover routing, five primary journeys, active states, direct entry and deep-route preservation. Task 4 covers concise sourced content and deliberate asset placement. Task 5 covers keyboard, focus and reduced motion. Task 6 covers all mandated validation widths, build gates and detector use.
- **No invented claims:** Task 4 explicitly constrains copy to the supplied documents and preserves all six Life Sciences sectors.
- **No parallel systems:** Tasks 2–3 retain `NavTab`, `NAV_ITEMS` and existing header controls; Tasks 1 and 4 reuse `Hero`, `primitives` and `ArtImage`.
