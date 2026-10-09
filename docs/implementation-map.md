# MindCraft Implementation Map

_Recorded before implementation on branch `upgrading`, 2026-10-09._

## Baseline and toolchain

- The app is React 19 + TypeScript + Vite 6, styled with Tailwind CSS v4 and `motion/react`; Lucide React is the only icon library.
- The app renders a single React view in `src/App.tsx`. Route state is a `NavTab` value in local React state, not a URL router. Existing direct-entry URLs therefore do not select an inner route; this is a required integrity gap to address through hash synchronisation while retaining `NavTab` and every existing prop.
- `npm run lint` runs `tsc --noEmit`; `npm run build` runs Vite. There are no unit, integration, visual-regression, Playwright, Vitest or ESLint test files/configurations in the repository.
- A Vite development server is available at `http://localhost:3000/`. The available in-app browser supports DOM inspection, screenshots and controlled viewport testing at 390px, 768px and 1440px.
- No installed repository-specific visual detector was found. The available Impeccable detector can run after changes and will be used only if the build is restored.

## Current route inventory

| `NavTab` / alias | Rendered view in `App.tsx` | Existing role | Future discovery path |
| --- | --- | --- | --- |
| `home`, `overview` | `HeroOperatingSystem` + six `LandingSections` | Landing overview | Overview |
| `industries` | `IndustryIntelligenceExplorer` | 24-industry explorer | Markets |
| `africa-explorer` | `AfricaIntelligenceExplorer` | African region/country explorer | Markets |
| `question-to-outcome`, `scenarios` | `ProblemCrossSectionView` | Challenge-led starting point | Markets and contextual home links |
| `market-entry` | `MarketEntryFrameworkView` | Entry sequence | Markets |
| `matrix-3d` | `Matrix3DView` | Industry × geography × capability selector | Markets |
| `capability-graph` | `MindCraftUniverseOrbital` | Integrated capability graph | Capabilities / operating model links |
| `consulting` | `BusinessConsultingPillar` | Business Consulting detail | Capabilities |
| `market-research` | `MarketResearchWorkspace` | Market Research detail | Capabilities |
| `ai-training` | `AITrainingSimulation` | AI Training detail | Capabilities |
| `ai-solutions`, `responsible-ai` | `AIEnterpriseSolutionsView` | AI Enterprise / governance detail | Capabilities |
| `life-sciences` | `LifeSciencesEcosystem` | Six-subsector specialist hub | Life Sciences |
| `africa-intelligence` | `AfricaIntelligenceMap` | Country dossiers / regional market map | Markets |
| `operating-model`, `method`, `maturity-model` | `IntegratedModelSection` + `MindCraftMethod` + graph | Integrated delivery model | Capabilities contextual links |
| `engagement-builder`, `builder` | `EngagementBuilder` | Optional engagement configurator | Footer, search and contextual links |
| `localization` | `LocalizationView` | Local-market adaptation | Markets |
| `insights` | `InsightsView` | Insight index | About |
| `about`, `senior-expertise`, `contact` | `AboutLeadership` with senior-expertise anchor | Organisation, verified senior expertise and enquiry path | About |

All views are currently lazy-loaded except the overview. `App.tsx` owns the enquiry modal, command search, footer and back-to-top control. No route or data-driven explorer will be removed.

## Navigation and interaction map

- `src/data/navigation.ts` is the single shared navigation model consumed by the header and in-page `SectionTabs` primitive. It currently contains seven top-level menu groups: Overview, Industries, Africa Hub, Problem-Led, Capabilities, Operating System and More.
- `src/components/Header.tsx` implements desktop dropdowns, responsive overflow, mobile accordion navigation, active section styling, Escape/arrow keyboard controls and the role-lens selector.
- `src/components/ui/primitives.tsx` exposes `SectionTabs`, which derives contextual secondary navigation from `NAV_ITEMS`; it must not become a parallel hard-coded menu.
- `src/components/Footer.tsx`, `GlobalCommandSearchModal.tsx`, landing CTAs and `RelatedLinks` are additional deep-route entry points. Their destinations must remain valid after the five-journey header consolidation.
- The five primary header journeys will be encoded in `NAV_ITEMS`: Overview, Capabilities, Markets, Life Sciences and About. Specialist routes remain in their appropriate dropdowns and contextual related links. The existing header consumes this model, so this changes navigation in one place.
- Current active state is driven by `sectionOf(activeTab)` and current nested-item IDs. Hash synchronisation will use the same valid `NavTab` map so a direct URL entry, a header action, search result and contextual action all resolve through one route-selection function.

## Shared UI and design system

- `src/index.css` contains the frozen brand type stack and global layout primitives: `mc-container`, `mc-section`, `mc-eyebrow`, `mc-h1`, `mc-h2`, `mc-display`, `mc-lead`, `mc-meta`, `mc-tap`, `mc-snap-row`, `mc-card-interactive` and visible `:focus-visible` styles.
- `src/components/ui/primitives.tsx` provides semantic tones, shared button classes, `SectionTabs`, `PageHeader`, `SectionHeader`, `DeepDive`, `PageRail`, `MetricStrip`, `ContextualCTA`, `RelatedLinks` and `CapabilityCard`.
- `src/components/ui/Hero.tsx` provides composed hero helpers (`HeroSection`, `HeroCopy`, `Illumination`, `Scrim`, `FactRow`, `ArtCaption`) and should be preferred over reintroducing older generic capability-hero primitives.
- `src/components/PillarParts.tsx` currently provides only `scrollToId`, keyboard tab support, `ScrollCue`, `MarkList` and `IllustrativeTag`.
- The CSS uses the approved canvas/surface/accent palette and reduced-motion guard. Current issues found in the pre-change code are input styles that remove outlines without a complete `focus-visible` replacement, an absent skip link, and local state that is not URL-addressable.

## Assets and verified visual roles

Asset files were inspected recursively, including actual dimensions and a contact-sheet review. There are no exact duplicate image fingerprints. The WebP image families are responsive encodes of the same source scene, not redundant content. `ArtImage` is the verified responsive source-set utility: it derives `srcSet` via `import.meta.glob`, supplies intrinsic dimensions, uses lazy loading below the fold, priority/fetch priority for hero art, and supports deliberate focal-point crops.

| Actual asset family | Visual content | Quality / dimensions | Primary destination |
| --- | --- | --- | --- |
| `overview/strategy-{640,1024,1672}.webp` | Executive team reviewing market screens | 16:9, up to 1672×941 | Overview expertise — editorial crop beside market and sector context |
| `overview/office-*` | Quiet executive workspace | 16:9 responsive family | Overview depth / operating-model supporting scene |
| `overview/global-*` | Global network / African world visual | 16:9 responsive family | Overview hero — dark crop with typography-led left panel |
| `overview/corridor-*` | Digital market corridor collage | 16:9 responsive family | Secondary market-context visual only |
| `pages/consulting-boardroom-*` | Strategy discussion in a city office | 16:9 responsive family | Business Consulting |
| `pages/research-mapping-*` | Researchers with regional intelligence workspace | 16:9 responsive family | Market Research |
| `pages/training-workshop-*` | Workshop facilitator and participants | 16:9 responsive family | AI Training |
| `pages/solutions-operations-*` | Operational control room | 16:9 responsive family | AI Enterprise Solutions |
| `pages/lifesciences-lab-*` | Biomedical laboratory work | 16:9 responsive family | Life Sciences anchor |
| `pages/industries-panorama-*` | Industrial harbour/city panorama | 2048×768 family | Industries explorer opener |
| `pages/africa-network-*` | African network intelligence collage | 1983×793 family | Africa Hub / Regions opener |
| `pages/localization-market-*` | Street-level regional market scene | 2048×768 family | Market Localisation only |
| `pages/market-entry-port-*` | Trade-port planning scene | 1983×793 family | Market Entry only |
| `pages/model-strategy-hub-*` | Workshop strategy table | 2048×768 family | Operating Model only |
| `pages/about-skyline-*` | Strategy materials against city skyline | 1983×793 family | About opener |
| `pages/dayanand-portrait.webp` | Original supplied portrait of Dayanand Poojari | 220×248 | Every occurrence representing Dayanand; no substitute |
| Root PNGs | Original, unencoded source scenes and legacy logo treatments | 1,672–2,048px source material | Do not add to page markup while responsive WebP family exists; retain as source archive |
| `brand/mindcraft-logo-{120…720}.png` | Approved brand lockup | Responsive source set | `BrandLogo` in header/footer |

## Enquiry and data integrity

- The verified MindCraft enquiry destination is `info@mindcraftconsultancy.com`.
- `EngagementIntakeModal` validates name, work email and organisation, then creates a user-initiated `mailto:` to that address with a generated enquiry summary. It does not send data itself. The header, primary hero action, page CTAs and footer invoke this same modal.
- `EngagementBuilder` produces an optional blueprint and passes it into the same modal. It remains available but will not be required to enquire.
- Dayanand Poojari’s direct independent-consultant contact is separately retained in `src/data/seniorExpertise.ts`; it must not be presented as the general MindCraft enquiry route.
- The corporate profile, vertical/geography document and Dayanand profile remain the fact sources. The preserved Life Sciences subsectors are Pharmaceuticals, Medical Devices, Medical Diagnostics, Medical Equipment, Surgical Consumables and Hospitals & Healthcare Providers.

## Baseline route and quality record

- The current overview renders at desktop and 390px in the local browser. It has a visually effective first screen but repeats service question, description, rationale, list and CTA inside each capability before reaching the next decision moment.
- Current mobile navigation reduces to logo, search and menu trigger; it exposes a mobile accordion when opened.
- `npm run lint` and `npm run build` both currently fail before the planned implementation. The reproducible cause is not visual: `AITrainingSimulation.tsx` and `AIEnterpriseSolutionsView.tsx` import `PillarHero`, `GroupCard` and `DeliverablesBlock`, but the currently modified `PillarParts.tsx` removed those exports while the callers retained them. The last complete committed version contains those exports, establishing the broken module contract.
- The smallest root-cause repair is to align the two callers with the current small shared helpers and existing `Hero`/`primitives` system, rather than restoring obsolete generic-card primitives. This preserves the current content-consolidation direction and removes the incompatible imports.

## Final validation record — 2026-10-09

- `npm run lint` completed successfully (`tsc --noEmit`, exit 0).
- `npm run build` completed successfully (Vite production build, exit 0). Vite reported one non-blocking bundle-size advisory: the main JS bundle is 651.59 kB minified / 202.03 kB gzip. Lazy page chunks remain enabled; bundle splitting beyond the existing lazy routes was not changed in this redesign.
- Browser direct-entry verification was run for `home`, `consulting`, `market-research`, `ai-training`, `ai-solutions`, `industries`, `africa-explorer`, `africa-intelligence`, `localization`, `market-entry`, `matrix-3d`, `question-to-outcome`, `life-sciences`, `operating-model`, `capability-graph`, `engagement-builder`, `insights`, `about` and `senior-expertise` at 390px, 768px and 1440px. Each route rendered its expected page content, retained the five primary header journeys, had no horizontal overflow, and had no unloaded image intersecting the viewport.
- Screen composition was visually reviewed at 1440px (Overview), 768px (Markets / Industry Explorer) and 390px (AI Training). The review found readable contrast, intentional art crops, no fixed-height collision and no text clipping in the inspected viewports. The mobile capability tabs intentionally form a horizontal scroll rail rather than wrapping.
- Desktop keyboard test: Arrow Down on the Capabilities trigger opened its menu and moved focus to Business Consulting; Escape closed it and returned focus to `nav-consulting`.
- Mobile test: the menu opened, Capabilities expanded, selecting AI Enterprise Solutions changed the hash to `#ai-solutions`, loaded its page and closed the sheet.
- Skip link test: activating “Skip to content” moved focus to `#main-content` while preserving the current page hash.
- Enquiry test: the primary training CTA opened the existing dialog. Its content references `info@mindcraftconsultancy.com`; no form was submitted and no email was sent during verification.
- Impeccable detector: `impeccable.cmd detect --json` on changed shell, navigation, hero and page components returned `[]`.
- Remaining unverified: testing was browser-based; a separate assistive-technology screen-reader session was not available. The production build-size advisory remains an optimisation opportunity, not a build failure.
