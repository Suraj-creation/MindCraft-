# MindCraft Evidence-Led Editorial Refinement Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use executing-plans to implement this plan task-by-task. Steps use checkbox (- [ ]) syntax for tracking.

**Goal:** Make MindCraft feel like a precise, evidence-led executive fieldbook by reducing first-pass copy, using approved-palette tonal rhythm, treating supplied art as sparse evidence frames, and removing repetitive AI-style visual/motion patterns without losing functionality or factual coverage.

**Architecture:** Preserve React/Vite, NavTab, NAV_ITEMS, ArtImage, data explorers and the enquiry workflow. Extend existing CSS/UI primitives with approved-palette surface roles, then recompose route families in place. Overview establishes the grammar; capability, specialist and data-tool pages adopt it without a parallel component system.

**Tech Stack:** React 19, TypeScript, Vite 6, Tailwind CSS v4, Motion, Lucide React.

**Spec:** docs/superpowers/specs/2026-10-10-mindcraft-evidence-led-editorial-refinement-design.md

## Global Constraints

- Preserve every NavTab, deep route, explorer, public prop, keyboard path, enquiry action and the five-journey navigation model.
- Use only supplied assets. ArtImage remains the responsive WebP utility; pages/dayanand-portrait.webp remains the only image used for Dayanand Poojari.
- Keep all claims traceable to source documents/current verified content. Do not invent clients, results, statistics, certifications, products, partnerships or history.
- Keep the six Life Sciences subsectors exactly: Pharmaceuticals, Medical Devices, Medical Diagnostics, Medical Equipment, Surgical Consumables, and Hospitals & Healthcare Providers.
- Use only approved palette values: #050505, #0A0A0A, #0D0F17, #1E1B4B, plus indigo, emerald, amber, sky and teal semantic signals.
- Do not introduce a new router, navigation model, image utility, CSS framework, test framework or remote asset dependency.
- No automated UI test runner exists. TypeScript/build gates plus explicit browser checks are the regression contract; do not add brittle source-text tests as a substitute for visual validation.
- Validate changed work at 390px, 768px and 1440px, including reduced motion, focus, direct hashes and no horizontal overflow.

---

## Files and Responsibilities

| File(s) | Responsibility |
| --- | --- |
| src/index.css; src/components/ui/primitives.tsx; src/components/ui/Hero.tsx | Palette roles, reading rhythm, evidence frames, button/card restraint and shared motion defaults. |
| src/components/HeroOperatingSystem.tsx; src/components/LandingSections.tsx | Type-led Overview with five clear moments and a concise content budget. |
| src/components/BusinessConsultingPillar.tsx; src/components/MarketResearchWorkspace.tsx; src/components/AITrainingSimulation.tsx; src/components/AIEnterpriseSolutionsView.tsx | Distinct but consistent capability routes using assigned evidence frames and concise sourced copy. |
| src/components/IndustryIntelligenceExplorer.tsx; src/components/AfricaIntelligenceExplorer.tsx; src/components/AfricaIntelligenceMap.tsx; src/components/LocalizationView.tsx; src/components/MarketEntryFrameworkView.tsx; src/components/IntegratedModelSection.tsx; src/components/MindCraftMethod.tsx; src/components/MindCraftUniverseOrbital.tsx; src/components/Matrix3DView.tsx; src/components/ProblemCrossSectionView.tsx | Existing specialist tools with concise intros and less repeated card treatment. |
| src/components/LifeSciencesEcosystem.tsx; src/components/AboutLeadership.tsx; src/components/SeniorExpertise.tsx; src/components/InsightsView.tsx; src/components/InsightsStrip.tsx | Reduced reading load while preserving specialist and leadership evidence. |
| src/App.tsx; src/components/Header.tsx; src/components/EngagementIntakeModal.tsx; src/components/GlobalCommandSearchModal.tsx; src/components/Footer.tsx | Purposeful, fast and focus-safe interaction motion. |
| docs/implementation-map.md | Final observed validation evidence. |

---

### Task 1: Establish approved tonal and editorial primitives

**Files:**
- Modify: src/index.css:10-225
- Modify: src/components/ui/primitives.tsx:20-340
- Modify: src/components/ui/Hero.tsx:1-130

**Interfaces:**
- Consumes: existing mc-* helpers, BTN_PRIMARY, BTN_SECONDARY, DeepDive, SectionHeader, HeroSection, HeroCopy and Motion useReducedMotion.
- Produces: reusable editorial surface, ruled-list and evidence-frame classes, with no new design system.

- [ ] **Step 1: Capture the baseline**

Run:

    npm run lint
    npm run build

Expected: both exit 0. Capture uncommitted browser screenshots at 1440px and 390px for #home, #life-sciences and #about.

- [ ] **Step 2: Add palette aliases and surface roles**

Add aliases, not replacement colours, in index.css:

    :root {
      --mc-canvas: #050505;
      --mc-surface: #0a0a0a;
      --mc-surface-raised: #0d0f17;
      --mc-surface-indigo: #1e1b4b;
    }

    .mc-editorial-band { background: var(--mc-surface); }
    .mc-editorial-band--indigo { background: var(--mc-surface-indigo); }
    .mc-evidence-frame { overflow: hidden; background: var(--mc-surface-raised); }
    .mc-rule-list > * + * { border-top: 1px solid rgba(255,255,255,.08); }

Add a route-level surface-rhythm utility rather than a global gradient. Preserve containers, focus and reduced-motion rules. Replace hard-coded surface values only where the shared role becomes clearer.

- [ ] **Step 3: Tighten shared primitives without API breakage**

Update BTN_PRIMARY to a solid indigo state with short colour/transform transition and no wide glow. Keep BTN_SECONDARY quiet. Restyle prose-oriented DeepDive as a ruled disclosure, while retaining a panel surface for data controls. Add a tone prop only if a container class cannot express the intended surface.

Keep this accessible disclosure contract:

    <button aria-expanded={open} aria-controls={id} onClick={() => setOpen((value) => !value)} />
    <motion.div id={id} role="region">{children}</motion.div>

- [ ] **Step 4: Make hero composition type-first by default**

Keep HeroSection and HeroCopy props intact. Remove default local Illumination from page openings and use Scrim only when text shares supplied art. The default entry is opacity plus maximum y: 10; no blur, scale, glow or continuous movement.

- [ ] **Step 5: Verify and commit primitives**

Run npm run lint. In-browser, open a DeepDive, close it by keyboard, and verify aria-expanded, focus and reduced-motion behavior.

    git add src/index.css src/components/ui/primitives.tsx src/components/ui/Hero.tsx
    git commit -m "refactor: establish editorial surface system"

### Task 2: Recompose Overview into five decision moments

**Files:**
- Modify: src/components/HeroOperatingSystem.tsx:1-110
- Modify: src/components/LandingSections.tsx:47-520

**Interfaces:**
- Consumes: setActiveTab, onOpenIntake, CAPABILITIES, UNIVERSAL_INDUSTRIES, AFRICA_REGIONS_DATA, SENIOR_AREAS, ArtImage and MoreLink.
- Produces: Overview with 420–520 visible words before footer; all outgoing route actions remain functional.

- [ ] **Step 1: Make the opening proposition typography-led**

In HeroOperatingSystem, remove global hero art, FADE_* constants and hero image markup. Retain the H1, two existing actions and three factual proof rows. Use mc-editorial-band--indigo or approved graphite/indigo split with no radial AI glow.

Preserve motion-safe scrolling:

    document.getElementById('capabilities')?.scrollIntoView({
      behavior: reduce ? 'auto' : 'smooth',
      block: 'start'
    });

- [ ] **Step 2: Reduce capabilities to the visitor decision**

In CapabilitiesSection, retain each documented question, concise answer and destination. Remove always-visible Useful when and Typical work content from Overview; retain it in capability pages. Render four ruled choices instead of four identical dark cards.

- [ ] **Step 3: Replace sector inventory with one proof frame**

Convert IndustriesSection to a compact Life Sciences/African-market proof composition. Use ArtImage name="global" once inside mc-evidence-frame, with copy beside it and links to life-sciences, industries and africa-explorer. Do not show all 24 industries or six sector descriptions on Overview.

- [ ] **Step 4: Retain expertise without synthetic framing**

Keep ArtImage name="strategy" only in ExpertiseReachSection. Remove vignette/card/glass treatment; preserve its meaningful alternative text, factual region list and senior-expertise link.

- [ ] **Step 5: Compress but preserve six process steps**

Group PROCESS into visible phases: Frame (Discovery, Proposal), Develop (Design, Delivery), and Sustain (Evaluation, Follow-up). Use semantic headings and a DeepDive per phase, retaining all six names and descriptions.

- [ ] **Step 6: Turn the close into a two-column evidence moment**

Keep ArtImage name="office" only in ClosingSection, but render it beside—not behind—the CTA at desktop. Retain primary CTA and verified mailto:info@mindcraftconsultancy.com. No glow/shadow halo or glass panel.

- [ ] **Step 7: Verify and commit Overview**

At all widths, confirm only global, strategy and office are used by Overview; every capability changes hash correctly; all six stages remain discoverable; primary CTA opens dialog; and document.documentElement.scrollWidth <= window.innerWidth.

    npm run lint
    npm run build
    git add src/components/HeroOperatingSystem.tsx src/components/LandingSections.tsx
    git commit -m "refactor: make overview evidence-led"

### Task 3: Give each capability route a concise, distinct grammar

**Files:**
- Modify: src/components/BusinessConsultingPillar.tsx:84-304
- Modify: src/components/MarketResearchWorkspace.tsx:150-474
- Modify: src/components/AITrainingSimulation.tsx:91-454
- Modify: src/components/AIEnterpriseSolutionsView.tsx:164-553

**Interfaces:**
- Consumes: existing props (onOpenIntake, setActiveTab), assigned ArtImage names, existing interactive layers/tabs and shared primitives.
- Produces: one H1, one short lead, at most two actions and a single evidence frame per capability route.

- [ ] **Step 1: Preserve visual ownership**

Retain one family per route: consulting-boardroom, research-mapping, training-workshop and solutions-operations. Each is an evidence frame with a route-specific crop; it is not reused as lower-page background or another route's visual.

- [ ] **Step 2: Recast Business Consulting as a decision sequence**

Keep PILLAR_TABS, DIMENSIONS, related links and enquiry. Display three concise themes as ruled items; retain source-grounded material in existing disclosure. Remove generic card backgrounds and a second large CTA panel.

- [ ] **Step 3: Recast Market Research as an evidence flow**

Keep GROUPS, STAGES, LAYERS, FINDINGS_EXAMPLE and decision controls. Make reading sequence question → evidence → decision. Preserve illustrative labels and all interactive AnimatePresence layer swaps.

- [ ] **Step 4: Recast AI Training as a learning pathway**

Keep SECTIONS, GROUPS, DELIVERABLES, FORMATS and COHORTS. Use amber only as a small semantic signal; move programme detail behind existing selection/disclosure instead of permanent panels.

- [ ] **Step 5: Recast AI Enterprise Solutions as an operating pattern**

Keep filters, ARCHITECTURE_TIERS, LIFECYCLE_STEPS, GROUPS, DELIVERABLES and status labels. Use emerald semantically; retain terms such as Illustrative Blueprint and Demonstration Prototype exactly where data uses them.

- [ ] **Step 6: Verify and commit capability pages**

At all widths inspect direct hash, crop, action count, active tab/layer/filter, expanded disclosure and enquiry dialog. Test prefers-reduced-motion: reduce before accepting retained reveal.

    npm run lint
    git add src/components/BusinessConsultingPillar.tsx src/components/MarketResearchWorkspace.tsx src/components/AITrainingSimulation.tsx src/components/AIEnterpriseSolutionsView.tsx
    git commit -m "refactor: simplify capability narratives"

### Task 4: Keep Markets useful while reducing introductory noise

**Files:**
- Modify: src/components/IndustryIntelligenceExplorer.tsx:98-720
- Modify: src/components/AfricaIntelligenceExplorer.tsx:66-780
- Modify: src/components/AfricaIntelligenceMap.tsx:135-518
- Modify: src/components/LocalizationView.tsx:19-243
- Modify: src/components/MarketEntryFrameworkView.tsx:38-355
- Modify: src/components/IntegratedModelSection.tsx:129-412
- Modify: src/components/MindCraftMethod.tsx
- Modify: src/components/MindCraftUniverseOrbital.tsx
- Modify: src/components/Matrix3DView.tsx
- Modify: src/components/ProblemCrossSectionView.tsx

**Interfaces:**
- Consumes: explorer data, selection state, region/country helpers, PageHeader, SectionTabs, deep routes and setActiveTab.
- Produces: shorter tool intros, unchanged selectors and clear returns to Markets/Capabilities.

- [ ] **Step 1: Shorten every PageHeader to a decision plus orientation**

Keep one H1, one lead and relevant action. Delete repeated category summaries already available in selected panels. Do not delete country, region, industry, matrix or problem data.

- [ ] **Step 2: Use route-specific art only when it orients**

Keep industries-panorama, africa-network, localization-market, market-entry-port and model-strategy-hub on their assigned routes. Use mc-evidence-frame crop only when it helps orientation; tool-first routes (matrix, country map, problem explorer, universe graph) remain type/data-led.

- [ ] **Step 3: Make selection the focus, not repeated panels**

For industry, region and country explorers, surface selected result first. Convert secondary explanatory blocks to ruled sections or existing disclosure. Preserve every filter, selected-state visual, keyboard path and contextual outgoing link.

- [ ] **Step 4: Preserve factual boundaries**

Keep presentDossier, sameCountry, country/region data, matrix relationships, readiness labels and illustrative scenario disclosures. Do not add regulatory claims, country data or performance metrics.

- [ ] **Step 5: Verify and commit Markets**

At 390px use industry, regional and matrix controls by touch target; at 1440px use keyboard. Confirm data remains after selection, contextual links update hash and no tool has horizontal overflow.

    npm run lint
    git add src/components/IndustryIntelligenceExplorer.tsx src/components/AfricaIntelligenceExplorer.tsx src/components/AfricaIntelligenceMap.tsx src/components/LocalizationView.tsx src/components/MarketEntryFrameworkView.tsx src/components/IntegratedModelSection.tsx src/components/MindCraftMethod.tsx src/components/MindCraftUniverseOrbital.tsx src/components/Matrix3DView.tsx src/components/ProblemCrossSectionView.tsx
    git commit -m "refactor: focus market intelligence routes"

### Task 5: Reduce Life Sciences, About and Insights to their strongest evidence

**Files:**
- Modify: src/components/LifeSciencesEcosystem.tsx:184-632
- Modify: src/components/AboutLeadership.tsx:112-382
- Modify: src/components/SeniorExpertise.tsx
- Modify: src/components/InsightsView.tsx
- Modify: src/components/InsightsStrip.tsx

**Interfaces:**
- Consumes: existing Life Sciences, senior-profile and article data; page props and current ArtImage assignments.
- Produces: initial word targets of 500–600 for Life Sciences and 450–550 for About, with verified detail retained in selection/disclosure/deep routes.

- [ ] **Step 1: Make Life Sciences sector-first**

Keep laboratory art as single route anchor. Present six named subsectors as primary choices, revealing sector focus, method and AI context when selected. Remove duplicated generic explanation while retaining existing AnimatePresence selection and every sector label.

- [ ] **Step 2: Make About a compact credibility narrative**

Combine duplicated vision/mission/values/working-method prose into short editorial sequence. Keep verified locations and general enquiry. Use about-skyline as offset contextual frame, not immersive backdrop.

- [ ] **Step 3: Protect senior-expertise integrity**

Keep supplied portrait, independent-consultant framing and direct-contact distinction. Never collapse profile into invented corporate team member or generated portrait.

- [ ] **Step 4: Move thought leadership to its dedicated route**

On Overview retain at most one contextual Insight link. In InsightsView, retain article labels, read times and content while simplifying page framing. Keep InsightsStrip compact, not a multi-card feed.

- [ ] **Step 5: Verify and commit specialist evidence**

Confirm all six subsectors remain visible/selectable, loaded portrait is dayanand-portrait.webp, #about and #senior-expertise retain returns, and general enquiry opens EngagementIntakeModal.

    npm run lint
    git add src/components/LifeSciencesEcosystem.tsx src/components/AboutLeadership.tsx src/components/SeniorExpertise.tsx src/components/InsightsView.tsx src/components/InsightsStrip.tsx
    git commit -m "refactor: foreground specialist evidence"

### Task 6: Make interaction motion restrained, fast and accessible

**Files:**
- Modify: src/components/ui/primitives.tsx:20-35,146-190,314-340
- Modify: src/App.tsx:220-255
- Modify: src/components/Header.tsx:64-744
- Modify: src/components/EngagementIntakeModal.tsx:211-595
- Modify: src/components/GlobalCommandSearchModal.tsx:174-338
- Modify: route components from Tasks 2–5 only where route-entry animation remains

**Interfaces:**
- Consumes: EASE, reveal, AnimatePresence, MotionConfig reducedMotion="user", dialog focus management and CSS reduced-motion guard.
- Produces: motion that orientates a state change, is interruptible, and is absent for high-frequency/keyboard-triggered actions.

- [ ] **Step 1: Remove decorative pulse**

Delete animate-pulse from App.tsx. Replace it with static semantic status mark or textual loading state; add no looped animation.

- [ ] **Step 2: Limit reveal to intentional moments**

Keep reveal as maximum 200–250ms opacity/y transition for rare route-level arrivals. Remove it from repeated rows, list items and every section heading in touched routes. Retain viewport.once only for evidence-frame reveals that communicate orientation.

- [ ] **Step 3: Tune nav, disclosure and modal movement**

Use existing custom EASE. Menus, disclosures, command search and enquiry dialog enter in 180–250ms and exit more quietly. Keep logical transform origins, focus return and instant/reduced-motion equivalent for keyboard-triggered changes.

- [ ] **Step 4: Validate repeated interaction and reduced motion**

Enable prefers-reduced-motion: reduce and check overview CTAs, header menu, disclosure, command search and enquiry modal. Disable it, repeatedly open/close same controls, and confirm no queued animation, layout shift, lost focus or trapped scroll.

- [ ] **Step 5: Run gates and commit**

    npm run lint
    npm run build
    git add src/App.tsx src/components/ui/primitives.tsx src/components/Header.tsx src/components/EngagementIntakeModal.tsx src/components/GlobalCommandSearchModal.tsx
    git commit -m "refactor: restrain interface motion"

### Task 7: Complete browser validation and record observed evidence

**Files:**
- Modify: docs/implementation-map.md

**Interfaces:**
- Consumes: local Vite server, direct hash navigation, browser viewports, current lint/build commands and Impeccable detector.
- Produces: factual final validation record; nothing is called complete without an observed result.

- [ ] **Step 1: Run repository checks**

    npm run lint
    npm run build
    C:\Users\Govin\.agents\skills\impeccable\scripts\impeccable.cmd detect --json src\App.tsx src\components src\components\ui

Expected: TypeScript and Vite exit 0. Triage detector results; record unavailable tooling or false positives rather than calling them passes.

- [ ] **Step 2: Inspect every route at every required width**

Inspect direct entry at 390px, 768px and 1440px for:

    home, consulting, market-research, ai-training, ai-solutions,
    industries, africa-explorer, africa-intelligence, localization,
    market-entry, matrix-3d, question-to-outcome, life-sciences,
    operating-model, capability-graph, engagement-builder, insights,
    about, senior-expertise

Record image source/crop, contrast, text clipping, horizontal overflow, active nav, parent/next step and absence of repeated primary images.

- [ ] **Step 3: Check keyboard and enquiry flows**

Keyboard-test desktop nav Arrow key/Escape, skip link, disclosure, primary CTA, modal validation and focus return. On mobile, test menu accordion and one nested route. Do not submit enquiry or send email.

- [ ] **Step 4: Record and checkpoint**

Append only observed outcomes, command statuses, word-count targets, keyboard/mobile results, detector status and remaining limitations to docs/implementation-map.md.

    git add docs/implementation-map.md
    git commit -m "docs: record editorial refinement validation"
    git status --short

Expected: clean next-upgrade worktree.

## Plan Self-Review

- **Spec coverage:** Tasks 1–2 establish tonal system and Overview target; Task 3 covers capability grammar; Task 4 preserves deep Market tools; Task 5 preserves Life Sciences/About evidence; Task 6 applies the motion direction; Task 7 covers required validation.
- **Architecture:** NavTab, NAV_ITEMS, ArtImage, supplied data and modal/search/navigation interfaces are preserved. No task introduces a competing system.
- **Evidence:** Unsupported claims are prohibited, the verified enquiry path and six Life Sciences sectors are retained, and original portrait remains protected.
- **No placeholders:** No task depends on unspecified asset, invented source, future framework or fix-later instruction.

