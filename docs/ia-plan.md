# MindCraft IA redesign plan

Client feedback: *"heavy information on each page; I have to scroll a lot to get the true intentions and capabilities."*
Also: *"add [Dayanand] ... in line with the consultancy work. Also add localization."*

Business truth lives in `resources/` (corporate profile, Dayanand business profile, industry & geography list).
Rule: **no invented facts, stats, clients, case studies, partnerships or offices.** Founded 2026, HQ Nairobi,
serving Africa (primary), Europe, United States.

## 1. Audit (before) — mobile 375px page heights
home 7530 · life-sciences 11172 · consulting 9163 · africa-map 7995 · ai-solutions 7952 · market-research 7706 ·
ai-training 7042 · operating-model 6369 · about 4508 · builder 4076 · market-entry 3726 · industries 3911.
Problems: (1) home explains everything instead of building a mental model; (2) long sections repeat the same idea
(operating chain, pathways, pillars all restate the four capabilities); (3) deep detail is open by default;
(4) no senior-expertise layer; (5) no localization capability; (6) unsupported claims in footer (offices in Lagos /
Johannesburg / Cairo / London, GDPR/POPIA/NDPR compliance, "zero public model training") - replace with profile-backed
language; (7) logo not used.

## 2. Content -> page map
| Content | Currently | Proposed | Layer | Component | Intent | Next step |
|---|---|---|---|---|---|---|
| Positioning (who/what/where) | hero | home hero | A | ExecutiveHero | What is MindCraft? | Explore capabilities / Talk to MindCraft / African markets |
| Four pillars | hero list + chain + pathways | home 02 only; detail on pillar pages | A | CapabilityCard x4 (what/why/outcome) | What do they do? | open pillar page |
| 5 differentiators (profile s.7) | values strip | home 03 | A | icon + 1 line each | Why different? | About |
| Life Sciences 6 sub-sectors | LifeSciences band + 11k-px page | home 04 (focus areas as chips) + hub page w/ tabs | A/C | SectorMatrix | Do they understand my sector? | Life Sciences hub |
| 24 industries | explorer | home: only via explorer; industries page | B/C | PathwayExplorer select | Who do you serve? | industries |
| Geography (4 regions, 45 jurisdictions; Africa/Europe/US) | 3 cards | home 05 explorer + Africa Hub | A/B | PathwayExplorer + MetricStrip | Where? | Africa Hub |
| **Industry x Geography x Capability** | concept only | home 05 interactive selector -> pathway | A | PathwayExplorer | Which service fits me? | open industry/region/pillar, start engagement with scope |
| **Localization** | absent | home 06 module + dedicated page under Africa Hub | A/B | LocalizationModule | How does global strategy become local result? | Localization page / engagement |
| **Dayanand Poojari** | absent | About -> "Senior Expertise" section; concise card on home 07; link from Life Sciences + Africa pages | A (card) / C (full profile) | SeniorExpertiseCard + SeniorExpertiseProfile | Who proves this? | Discuss with MindCraft |
| Representative problems (10) | problem page | home 08 chips (6) -> problem page | B | chips | Is my problem covered? | problem page |
| Insights (4 articles) | unrouted | home 09 strip (title/category/read time) + insights page | B/D | InsightCard | Do they think deeply? | insights page |
| Engagement process (profile s.8, 6 stages) | builder | home 10 compact strip + builder | B | ProcessTimeline | How do we start? | Start engagement |
| Operating chain (5 stages) | home | moves OFF home to operating-model page | C | existing | - | - |

## 3. Navigation
Overview · Industries · Africa Hub (clusters, **Market Localization**, 9-step entry, regulatory map) · Problem-Led ·
Capabilities · Operating System · Responsible AI · **About (About MindCraft, Senior Expertise, Insights)**.
New tabs: `localization`, `senior-expertise` (anchor inside About), `insights`.

## 4. Home - one question per viewport
1 What is MindCraft / who / where (hero) - 2 What do they do (4 capability cards) - 3 Why different (5 items) -
4 Life Sciences (6 sub-sectors) - 5 Where + which service fits me (Industry x Geography x Capability) -
6 Localization (5-stage flow) - 7 Who proves it (senior expertise) - 8 Start from a problem + insights -
9 How to engage (process strip + CTA).

## 5. Localization - definition (source-backed only)
Profile: "cultural and regulatory fluency", "on-ground presence ... growing network of local associates and
partners", "harmonized research and training programs across diverse regulatory and language environments",
"African context, global standard". Dayanand: "tailored go-to-market strategies" from "local market dynamics",
local GMP certification, product/device/nutraceutical registration, distributor selection.
=> Localization = **local-market capability**, NOT a language switcher (no source requires one).
Flow: Global strategy -> African market intelligence -> Country-specific context (regulatory, commercial, cultural)
-> Local partners & distributors -> Local execution & measurable outcome.

## 6. Design direction
Taste: DESIGN_VARIANCE 7, MOTION_INTENSITY 4-5, VISUAL_DENSITY 4-5. Keep every token in `docs/redesign-brief.md`.
Layers: A (understand now) always visible; B behind cards/tabs; C inside `DeepDive` disclosure (closed by default);
D reference (tables, long lists) behind "show all"/dedicated page. Target <= 5 mobile viewports (~4000px) for every
page with all depth preserved behind disclosure.

## 7. Shared primitives (src/components/ui/primitives.tsx)
SectionHeader, DeepDive, PageRail, ContextualCTA, RelatedLinks, MetricStrip, CapabilityCard, TONES.
