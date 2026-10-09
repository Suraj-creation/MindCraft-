# MindCraft Executive First Redesign Design

## Intent

MindCraft will present itself first as an integrated, executive-level consultancy for organisations making complex growth, market, operational and AI decisions. Life Sciences expertise and African market fluency will appear as specific evidence of depth rather than competing as the homepage's opening proposition.

The redesign is a refinement of the documented MindCraft digital system, not a rebrand. The obsidian palette, approved fonts, semantic pillar colours, existing content truth, supplied imagery, interaction capability and `NavTab` routing remain intact.

## Approaches Considered

### A. Editorial consolidation — selected

Five primary journeys make the information architecture easier to scan: Overview, Capabilities, Markets, Life Sciences and About. The homepage earns attention with a short editorial narrative; routes that answer a specialist question become contextual deep dives rather than top-level destinations. This preserves the site's depth while removing the sense that every service, country and framework must be understood before a visitor can enquire.

### B. Capability catalogue

Keep the current full navigation and make every page more concise. This has the least implementation risk but keeps a broad, feature-like decision surface that dilutes MindCraft's integrated positioning.

### C. Problem-first configurator

Make the existing challenge and engagement-builder tools the homepage's primary experience. It could be engaging for returning visitors but is too much cognitive load for a first-time executive evaluating credibility.

## Information Architecture

The main header will expose only the journeys a first-time visitor needs.

| Primary journey | Includes | Role of existing views |
| --- | --- | --- |
| Overview | Positioning, four capabilities, depth signals, engagement prompt | Home remains the entry point. |
| Capabilities | Business Consulting, Market Research, AI Training, AI Enterprise Solutions | Four pillar pages stay as focused detail routes. Responsible AI is embedded in the AI Enterprise narrative and retains its deep link. |
| Markets | Industries, African regions, localisation and market-entry | Existing explorer, matrix, map, localisation and market-entry routes remain functional; they are reached through a single Markets menu and contextual links. |
| Life Sciences | Six documented subsectors and relevant capability links | The specialist hub remains a flagship destination, not a duplicate general-services page. |
| About | Purpose, principles, senior expertise and insights | Dayanand's supplied portrait and verified expertise remain available without presenting unsupported corporate credentials. |

The operating model, challenge explorer, engagement builder, matrix and universe graph remain valid deep routes and search targets. They are removed from competing top-level navigation, not deleted. Every route keeps a return path and related links.

## Page Narrative and Content Discipline

### Overview

The home page will use five editorial moments:

1. A concise hero: integrated consulting, intelligence and applied AI for practical business progress; one primary enquiry action and one quieter capability action.
2. The four capabilities as a short, asymmetric decision grid. Each item carries the problem it helps solve and one outcome statement; long service lists move to the relevant pillar route.
3. Depth signals: Life Sciences heritage, African market fluency and responsible AI, expressed as proof points rather than another feature section.
4. A compact "where to begin" choice between a market, an industry, a business question or a conversation. This directs visitors into the existing specialist tools.
5. Senior expertise, selected insight and a final enquiry prompt in one restrained closing composition.

The home page no longer repeats the whole engagement process, every Life Sciences subsector, every region, the full industry set and four full article cards. It links to those destinations deliberately.

### Capability pages

Each pillar page will answer one question in this order: what the capability is for; the three or four highest-value service themes; what an engagement can produce; and a contextual enquiry action. Detailed lists use closed disclosure on small screens. Shared AI-readiness, governance and operating-model copy is written once and linked rather than repeated page-by-page.

### Markets and Life Sciences

Markets pages lead with a specific decision: where to focus, how to enter, or how to adapt execution locally. The existing regional and industry explorers retain their data-driven interactions, but their introductory prose, dense grids and duplicate market language are reduced. The Life Sciences hub keeps the documented six subsectors and uses the laboratory image as a single anchor; specialist depth is communicated through sector labels and clear links, not repeated claims.

### About, insights and engagement

About introduces purpose, values and how MindCraft works in a short editorial sequence. Senior expertise stays grounded in the supplied independent-consultant profile; the real portrait is the only identity image. Insights become a quiet proof-of-thinking strip and a dedicated readable index. The builder remains available to qualified visitors but is not required to start a conversation.

## Visual Direction

The visual language remains MindCraft's documented obsidian, indigo-led system. The changes are compositional:

- Typography does more of the persuasive work: fewer, more deliberate display headings; narrow supporting measures; small mono labels only for navigation and metadata.
- Photography is used once per page as an atmospheric or contextual anchor, then cropped, shadowed and paired with plain surfaces rather than repeated as generic section backgrounds.
- The homepage hero uses the supplied global visual once, under a controlled dark overlay; the strategy and operations imagery remains a distinct supporting moment later in the page.
- Long pages alternate typography-led, image-led and structured-information moments so their rhythm changes with the subject.
- Cards are reserved for choices, comparisons and interactive data. Repeated rounded containers are replaced with ruled lists, offset image crops, full-width bands and selective disclosure.
- Motion stays functional: image reveal, discreet border/opacity transitions and clear active states; no continuous decorative animation. Every change respects reduced-motion preferences.

## Asset Allocation

| Asset family | Primary destination | Treatment |
| --- | --- | --- |
| `overview/global-*` | Overview hero | Single editorial crop with a dark directional overlay and typographic panel. |
| `overview/strategy-*`, `overview/office-*`, `overview/corridor-*` | Overview depth moments | One restrained supporting image each; no repeated hero usage. |
| `pages/consulting-boardroom-*` | Business Consulting | Offset editorial panel beside the service themes. |
| `pages/research-mapping-*` | Market Research | Analytical workspace anchor beside research process. |
| `pages/training-workshop-*` | AI Training | Human-centred programme opener. |
| `pages/solutions-operations-*` | AI Enterprise Solutions | Workflow and governance composition. |
| `pages/lifesciences-lab-*` | Life Sciences | Primary specialist anchor. |
| `pages/industries-panorama-*`, `pages/africa-network-*` | Markets and Africa explorer | Introductory bands only. |
| `pages/localization-market-*`, `pages/market-entry-port-*` | Localisation and Market Entry | Distinct editorial metaphors, each used on its own route. |
| `pages/model-strategy-hub-*` | Operating model | Process-oriented full-width anchor. |
| `pages/about-skyline-*`, `pages/dayanand-portrait.webp` | About and Senior Expertise | About context band and verified portrait respectively. |

The `ArtImage` responsive source-set utility will be used wherever a responsive family exists. No remote stock imagery, generated portraits or repeated primary image treatments will be added.

## Implementation Boundaries

- Update the shared shell and content hierarchy in `src/App.tsx`, `src/data/navigation.ts`, `src/components/Header.tsx`, `src/components/Footer.tsx` and `src/components/LandingSections.tsx`.
- Simplify the existing page components in place; preserve public props and `NavTab` compatibility.
- Extend shared primitives only where the new hierarchy needs a reusable editorial pattern; avoid a second design system.
- Keep all factual copy traceable to the three supplied source documents. Conservative language wins where source material is broad or ambiguous.
- Preserve keyboard navigation, minimum touch targets, focus indicators, alt text, reduced-motion behaviour and responsive reflow.

## Responsive and Quality Contract

At 390px, the layout becomes a single clear reading column with disclosures and horizontal snap rails where choice density demands it. At 768px, supporting content pairs with imagery without fixed-height collisions. At 1440px, the grid supports intentional asymmetry and generous whitespace but retains readable line lengths.

Validation will include TypeScript linting, production build, rendered review of every route at mobile, tablet and desktop widths, route/navigation checks, focus/keyboard checks for changed interactions, and a single post-build visual detector pass on changed UI files.

## Out of Scope

This work does not invent case studies, performance figures, clients, offices, certifications, formal partnerships or product capabilities. It does not replace the working React/Vite architecture or remove functioning deep routes merely because they become less prominent in navigation.
