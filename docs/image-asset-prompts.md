# MindCraft Consultancy: Image Asset Prompt Pack

Production prompts for every page that benefits from imagery. Each page gets only the images that make it
clearer or better looking. Interactive tool pages get none, because pictures would compete with the controls.

**Total required: 33 new images across 13 pages.** The Overview page is already complete (4 images in place).

---

## How to use this pack

1. For each asset, paste the **Brand art direction block** (section 1) first, then the asset's own prompt.
2. Generate at the stated aspect ratio, at least **2400 px on the long edge**, PNG.
3. Keep the stated **safe zone** dark and low in detail. That is where page text will sit.
4. Save with the exact filename into `src/assets/<page-folder>/`. We compress each to WebP at
   640 / 1024 / 1672 / 2048 px, exactly as the Overview images were.
5. Check every result against the **QA checklist** (section 4) before handing it over.

---

## 1. Brand art direction block (prepend to every prompt)

> Cinematic, photoreal, editorial image for MindCraft Consultancy Services, a multidisciplinary consulting
> and intelligence firm. It combines four integrated capabilities: Business Consulting, Market Research &
> Intelligence, AI Training & Digital Literacy, and AI Enterprise Solutions. It has specialist depth in Life
> Sciences and healthcare, works across 24 industries, and has a deliberate focus on African markets
> alongside clients in Europe and the United States. The mood is serious, intelligent, calm and premium:
> a strategic intelligence environment, not a tech startup.
>
> Colour and light: a dark, low-key image dominated by near-black obsidian (#050505), deep charcoal (#0A0A0A)
> and deep navy-indigo shadow (#0D0F17). Accent light comes only from restrained indigo / blue-violet
> (#6366F1, #818CF8) for intelligence and technology, emerald green (#10B981, #34D399) for growth, progress
> and Africa, and warm amber (#F59E0B, #FBBF24) used sparingly as dusk sunlight or the glow of a desk lamp.
> Blue-hour or dusk grading, soft volumetric light, gentle reflections on glass and polished dark stone,
> shallow depth of field, crisp detail on the focal subject, and generous dark negative space.
> It belongs to a series of images featuring dusk skylines, glass, dark marble, softly glowing data
> surfaces and maps of Africa.
>
> People, when present, are credible professionals of African and international backgrounds in conservative
> business or professional attire. They are caught mid-task in natural poses, and their faces are turned
> away, in profile or partly in shadow. Nobody looks at the camera.
>
> Strictly no text, letters, numbers, logos, watermarks, brand names, flags or legible UI anywhere. Screens,
> documents and charts show only abstract shapes, soft bars and lines. No neon overload, no pink or purple
> gradients, no holographic faces, no humanoid robots, no glowing brains, no circuit-board heads, no stock
> smiles, no recognisable real people, no identifiable real buildings or company premises, no real product
> packaging.

---

## 2. Summary: images required per page

| Page (nav) | Route id | Images | Why this many |
|---|---|---|---|
| Overview | `home` | **0 new** (4 done) | Complete |
| Business Consulting | `consulting` | **3** | Persuasion page, long; needs visual rhythm |
| Market Research & Intelligence | `market-research` | **3** | Shows evidence being gathered and turned into decisions |
| AI Training & Digital Literacy | `ai-training` | **3** | Training is about people; images make it human |
| AI Enterprise Solutions + Responsible AI | `ai-solutions` | **3** | Grounds abstract AI in real operations and oversight |
| Life Sciences | `life-sciences` | **4** | Flagship specialism with six sub-sectors |
| Industries explorer | `industries` | **1** | Interactive tool; one intro band only |
| Africa Hub: regions | `africa-explorer` | **2** | Market knowledge and on-the-ground presence |
| Market Localization | `localization` | **2** | Global strategy becoming local execution |
| Market Entry framework | `market-entry` | **2** | A pathway story; one metaphor and one reality |
| Problem-Led | `question-to-outcome` | **1** | Intro mood only; content is the cards |
| Operating System / Method | `operating-model` | **2** | Four capabilities converging; the method at work |
| About + Senior Expertise | `about`, `senior-expertise` | **3** | Vision, partnership, specialist depth |
| Insights | `insights` | **4** | One cover per published article |
| 3D Matrix, MindCraft Universe, Engagement Builder, Regulatory Map | `matrix-3d`, `capability-graph`, `engagement-builder`, `africa-intelligence` | **0** | Interactive tools; images would distract from the controls |
| **Total** | | **33** | |

---

## 3. Prompts by page

Accent per capability (already used in the site): Consulting = **teal** (#0D9488), Market Research = **sky
blue** (#0EA5E9), AI Training = **amber**, AI Enterprise Solutions = **emerald**, Life Sciences and
intelligence = **indigo**. Each page's images lean toward its accent while staying within the dark brand base.

### 3.1 Business Consulting (`src/assets/consulting/`) — 3 images

**C1 · `consulting-intro.png` · page intro visual**
- Ratio 16:9. Subject in the right two-thirds; **left third dark and quiet** for the page title.
- Intent: strategy and decision-making. Leaders set priorities and turn them into a plan people can act on.
- Prompt: *A small leadership team of three or four professionals around a long dark stone table at dusk in a
  high-floor meeting room, mid-discussion, one standing and pointing to a sequence of blank planning cards
  laid across the table, printed roadmap sheets with abstract bars, a laptop showing soft abstract charts.
  Floor-to-ceiling glass behind them looks onto a city at blue hour. Warm amber pendant light over the table,
  cool teal-indigo ambient fill, reflections on the stone. Composition weighted right; the left third falls
  into soft shadow.*

**C2 · `consulting-org-design.png` · beside organisational design and change content**
- Ratio 4:3. Focal point centred; no text-overlay zone needed.
- Intent: organisational design, role clarity, process redesign, change management.
- Prompt: *An overhead, slightly angled view of a dark table where two pairs of hands arrange blank
  rectangular cards connected by thin lines into a structured layout, like an organisation or process map
  taking shape. A pen, a notebook with abstract sketches, and a tablet with a soft teal glow sit at the edges.
  Single warm key light from the upper left, deep shadows, matte paper texture, tactile and precise.*

**C3 · `consulting-operations.png` · wide band before "Scope a consulting engagement"**
- Ratio 21:9. **Lower-left quarter dark** for an overlaid heading.
- Intent: process improvement and operational effectiveness across commercial, operations, supply chain and
  quality. Strategy that reaches the floor.
- Prompt: *A modern, clean manufacturing and distribution floor seen from an elevated mezzanine walkway at dusk.
  Two consultants stand at the rail reviewing a tablet with an abstract process diagram, while organised
  production lines and stacked unlabeled pallets stretch below under cool overhead light. Warm amber light
  spills from a side window. Teal and indigo reflections on the polished floor, deep shadow in the lower left,
  wide cinematic perspective.*

### 3.2 Market Research & Intelligence (`src/assets/market-research/`) — 3 images

**R1 · `research-intro.png` · page intro visual**
- Ratio 16:9. **Left third dark** for the title.
- Intent: evidence on markets, customers and competitors, assembled so leaders can decide with confidence.
- Prompt: *An analyst seen from behind and slightly to the side, seated at a long dark desk in a quiet
  research studio at night, facing three large monitors showing layered abstract visualisations: soft sky-blue
  bar shapes, scatter points and a faint outline of the African continent among other map fragments. Printed
  field notes and photographs with abstract content are spread across the desk. Sky-blue and indigo screen glow
  on the analyst's shoulders, a warm amber desk lamp, deep shadows on the left.*

**R2 · `research-fieldwork.png` · beside primary research content**
- Ratio 4:3. Subject centred to the right.
- Intent: primary research, meaning interviews with pharmacists, physicians, distributors, retailers and buyers.
  Real voices, gathered respectfully.
- Prompt: *A researcher conducting a one-to-one interview with a pharmacist across the counter of a modern
  neighbourhood pharmacy in the evening. The researcher holds a tablet and a notebook, and the pharmacist is
  explaining something with an open hand. Shelves behind are softly out of focus with unlabeled products.
  Warm amber interior light, cool blue dusk visible through the shop window, documentary realism, both faces
  in partial profile.*

**R3 · `research-synthesis.png` · band before "Strategic findings / Decision layer"**
- Ratio 21:9. **Right third dark** for text.
- Intent: synthesis. Raw evidence becomes a clear recommendation linked to a decision.
- Prompt: *A close, low-angle view along a dark table where hands arrange printed charts with abstract shapes and
  no numbers into a deliberate left-to-right sequence, ending at a single clean summary sheet under a pool of
  light. A laptop at the far end shows a soft sky-blue abstract dashboard. Shallow depth of field, the
  sequence sharpening as it moves toward the summary sheet, indigo rim light, the right side fading to black.*

### 3.3 AI Training & Digital Literacy (`src/assets/ai-training/`) — 3 images

**T1 · `training-intro.png` · page intro visual**
- Ratio 16:9. **Left third dark** for the title.
- Intent: practical AI literacy for executives and teams. It builds understanding and confidence, not just
  awareness.
- Prompt: *A facilitator leading a small executive workshop in a modern training room at dusk, gesturing
  toward a large wall screen with a simple abstract flow diagram. Eight participants with laptops and notebooks
  are visibly engaged, two leaning in to discuss. Warm amber light from table lamps and the low sun through
  the side windows, a gentle indigo glow from the screen. Seen from the back corner of the room, everyone in
  profile or from behind, with the left third in calm shadow.*

**T2 · `training-practice.png` · beside function-specific, hands-on training**
- Ratio 4:3. Subject centred.
- Intent: hands-on, function-specific learning in regulated sectors such as pharma, banking and healthcare
  administration. It is coaching, not lecturing.
- Prompt: *Two colleagues at a desk in a hospital administration office in the evening. One guides the other
  through a task on a laptop showing abstract shapes, pointing at the screen while the learner types. A folded
  lab coat hangs on a chair behind them, with a window onto a softly lit hospital corridor. Warm amber desk
  light, indigo screen glow on their faces in partial profile, a natural and focused mood.*

**T3 · `training-champions.png` · band before "Capability that outlasts us"**
- Ratio 21:9. **Lower-left dark** for a heading.
- Intent: train-the-trainer and internal AI champions. Capability multiplies after the engagement ends.
- Prompt: *A wide view of an open-plan office at the end of the day. In the middle ground, one employee leads a
  small informal huddle of four colleagues around a standing table with a laptop, and in the background a
  second small group mirrors the same setup. The idea of skills spreading is shown through repetition. Amber
  window light raking across the floor, indigo screen light, dark polished floor reflections, deep shadow in
  the lower left.*

### 3.4 AI Enterprise Solutions + Responsible AI (`src/assets/ai-solutions/`) — 3 images

**S1 · `solutions-intro.png` · page intro visual**
- Ratio 16:9. **Left third dark** for the title.
- Intent: AI applied to real business problems. It turns insight into everyday workflow through analytics,
  automation, conversational AI and integration.
- Prompt: *An operations team in a calm, modern control room at night. Two people review a large curved display
  of abstract flowing lines and nodes in emerald and indigo, representing documents and requests moving
  through an automated workflow. A third person at a desk works with a stack of physical files that visibly
  continues as a stream of light on the display. Professional, grounded and believable: an operations room,
  not science fiction. The left third falls to darkness.*

**S2 · `solutions-infrastructure.png` · band behind the architecture section heading**
- Ratio 21:9. **Centre band low-detail** for a heading.
- Intent: secure, governed data infrastructure and integration with existing CRM, ERP and enterprise
  systems.
- Prompt: *A long, immaculate data-centre aisle in near darkness, seen at a low angle, with rows of dark server
  cabinets fading into depth and small emerald and indigo status lights glowing in rhythmic patterns. A glass
  partition in the foreground catches soft reflections, and a thin line of light runs along the floor toward
  the vanishing point. Minimal and precise, with a quiet, low-detail centre.*

**S3 · `solutions-governance.png` · Responsible AI section**
- Ratio 4:3. Subject centred.
- Intent: human oversight, ethics, data privacy and governance built in, especially in regulated industries.
- Prompt: *Two professionals in a quiet review room. One annotates a printed policy document with a pen while
  the other compares it with an abstract output on a laptop screen. Archive boxes and neatly bound files sit
  on shelves behind them. A soft emerald accent light, a warm amber desk lamp and deep shadows give a
  serious, careful and trustworthy mood. Use no padlock, shield or similar security clichés.*

### 3.5 Life Sciences (`src/assets/life-sciences/`) — 4 images

**L1 · `lifesciences-intro.png` · page intro visual**
- Ratio 21:9. **Left 40% dark** for the title.
- Intent: specialist depth. Science, regulation and market access connected, from the laboratory to
  patients.
- Prompt: *A cinematic composition. In the right foreground, a modern pharmaceutical quality laboratory bench
  with glass vials, a pipette and a sample rack sits in crisp focus under cool indigo light. Beyond it,
  through a wall of glass, a city at dusk sits softly out of focus with the warm amber lights of a hospital
  and logistics district. A thin emerald reflection runs along the bench edge. The left 40% is deep, quiet
  shadow.*

**L2 · `lifesciences-quality.png` · beside regulatory, GMP and quality-systems content**
- Ratio 4:3. Subject centred to the left.
- Intent: regulatory readiness, product registration, quality management systems and ISO certification
  support. This is advisory, not manufacturing.
- Prompt: *A quality-assurance professional in a cleanroom gown and hairnet, seen in three-quarter rear view,
  reviewing an abstract checklist on a tablet beside a stainless-steel packaging line with blank, unlabeled
  blister packs. Clean, cool, even indigo-white light with a subtle emerald reflection on the steel and deep
  shadow at the frame edges. Calm, precise and compliant in mood.*

**L3 · `lifesciences-distribution.png` · beside market access, distributor and supply-chain content**
- Ratio 16:9. **Right third dark**.
- Intent: market access, distributor selection, supply-chain optimisation and product availability across
  the region.
- Prompt: *A temperature-controlled medical distribution warehouse at dusk. Tall racks hold neatly stacked
  unlabeled cartons, and a large open loading door frames a delivery van and amber evening sky. Two
  professionals walk the aisle in conversation, one carrying a tablet. Cool indigo overhead light, warm amber
  from the doorway and subtle emerald floor markings, with the right third receding into shadow.*

**L4 · `lifesciences-providers.png` · Hospitals & Healthcare Providers sub-sector**
- Ratio 3:2. Subject left of centre.
- Intent: operational strategy, digital transformation, patient experience and workforce capacity for
  hospitals.
- Prompt: *A calm hospital corridor at night beside a glass-walled operations area, where a clinician and an
  operations manager review an abstract patient-flow board together. The corridor stretches into soft depth
  with a nurse walking away, out of focus. Patients are not identifiable. Clean indigo-white light, warm amber
  from a nurses' station and soft reflections on the floor. Caring and well organised.*

### 3.6 Industries explorer (`src/assets/industries/`) — 1 image

**I1 · `industries-intro.png` · intro band above the explorer**
- Ratio 21:9. **Upper-left dark** for the title.
- Intent: breadth across 24 industries, shown in a different way from the Overview's panel wall so the
  series does not repeat.
- Prompt: *One continuous, seamless aerial panorama at blue hour in which sectors flow into one another from
  left to right: farmland and an agro-processing plant, a solar farm and wind turbines on a ridge, a factory
  complex, a rail line and highway, a container port with cranes, and a modern city centre lighting up. There
  are no split panels or frames, only one real landscape. Emerald on the farmland, amber city lights and
  indigo sky, with the upper-left sky dark and quiet.*

### 3.7 Africa Hub: regions & jurisdictions (`src/assets/africa/`) — 2 images

**A1 · `africa-intro.png` · page intro visual**
- Ratio 21:9. **Left third dark** (night sky) for the title.
- Intent: African market focus across East, West, Southern and North Africa: modern, growing and connected.
- Prompt: *An aerial view at dusk of a large, modern African city where dense high-rises meet green hills and
  a river or coastline, with highways streaming amber light and new buildings among older districts. It is a
  composite, not an identifiable real skyline. Emerald on the landscape, indigo sky, warm amber city lights,
  and a deep, darkening sky on the left.*

**A2 · `africa-fieldwork.png` · beside country dossiers and local-associate content**
- Ratio 4:3. Subject centred.
- Intent: on-the-ground knowledge and a network of local associates and in-country research partners.
- Prompt: *A researcher and a local associate walking through a busy, modern trade hub or covered market in the
  late afternoon. They are talking, one holding a notebook, while traders and stalls of unbranded goods are
  softly out of focus around them. Warm amber light through the roof openings, cool indigo shadows,
  documentary realism, respectful and dignified, faces in profile.*

### 3.8 Market Localization (`src/assets/localization/`) — 2 images

**Lo1 · `localization-intro.png` · page intro visual**
- Ratio 16:9. **Left third dark**.
- Intent: global strategy becoming local results, with regulatory, commercial and cultural context carried
  through to execution.
- Prompt: *A consultant and a local distribution partner in a meeting at the partner's office in the evening,
  with unbranded product samples and a folder of documents between them on the table. A large wall map with
  abstract regions and no labels sits behind them, and through the window a busy local commercial street
  glows amber. Indigo ambient light and a collaborative, equal-partner body language. The left third is in
  shadow.*

**Lo2 · `localization-handover.png` · beside "What gets localized"**
- Ratio 4:3. Subject centred.
- Intent: country-specific detail, meaning regulation, registration and the local route to market.
- Prompt: *A close-up of two pairs of hands across a dark table, one passing a bound document folder to the
  other, with a pen, an official-looking but blank stamped form and a smartphone nearby. A softly blurred
  local storefront is visible through the window behind. Warm amber key light and an emerald accent
  reflection. Tactile and specific.*

### 3.9 Market Entry framework (`src/assets/market-entry/`) — 2 images

**M1 · `market-entry-intro.png` · page intro visual**
- Ratio 21:9. **Upper-left dark**.
- Intent: a structured, step-by-step pathway that reduces the risk of entering an African market.
- Prompt: *An aerial view at first light of a single road that winds in clear, deliberate curves across a
  varied landscape of savannah, a river crossing and farmland toward a distant city on the horizon. The
  road's path is subtly highlighted by the rising sun's amber glow, with emerald landscape and an indigo
  upper sky that stays dark and quiet on the left. It suggests progress through stages.*

**M2 · `market-entry-logistics.png` · band before "Complete 9-Step Roadmap"**
- Ratio 16:9. **Lower third dark**.
- Intent: the practical reality of entry: logistics, distribution and partners on the ground.
- Prompt: *A container port gate at dawn, with trucks carrying unbranded containers heading inland along a lit
  road, and gantry cranes silhouetted against an amber and indigo sky. Wet tarmac reflects the light, with a
  calm, purposeful early-morning energy. The lower third is dark asphalt.*

### 3.10 Problem-Led: "What are you trying to solve?" (`src/assets/problems/`) — 1 image

**P1 · `problems-intro.png` · page intro visual**
- Ratio 21:9. **Left half dark**.
- Intent: every engagement starts with the client's real question, and several routes converge on one
  outcome.
- Prompt: *An overhead view of a dark table under a single warm light. Several thin lines of string in muted
  sky blue, teal, amber and emerald start from different points on the right and converge on one small
  brass pin on a blank card. Minimal, tactile and metaphorical, with a strong graphic quality and the left
  half in deep shadow.*

### 3.11 Operating System / The MindCraft Method (`src/assets/operating-model/`) — 2 images

**O1 · `operating-model-intro.png` · page intro visual**
- Ratio 21:9. **Left third dark**.
- Intent: four capabilities (Consulting, Research, Training, AI Solutions) working as one integrated
  engagement.
- Prompt: *A physical light installation in a dark gallery-like space. Four ribbons of light in sky blue, teal,
  amber and emerald arc in from different directions and merge into a single bright indigo-white beam that
  continues forward over a black reflective floor. It is real light and haze photographed in a room, with
  crisp reflections and an elegant, architectural feel. The left third is dark.*

**O2 · `operating-model-method.png` · beside the seven-step method (Understand → Measure)**
- Ratio 16:9. Subject across the full frame.
- Intent: a disciplined method from understanding to measurable outcome.
- Prompt: *A project room in the evening with a long wall of blank cards arranged in seven columns, the
  columns filling in density from left to right. Two team members stand at the wall, one placing a card and
  one reviewing a laptop. Warm amber task light and indigo ambient light. Orderly, rigorous and
  collaborative.*

### 3.12 About + Senior Expertise (`src/assets/about/`) — 3 images

**Ab1 · `about-vision.png` · About intro / Vision**
- Ratio 21:9. **Upper half dark** (pre-dawn sky).
- Intent: long-term ambition, combining African context with a global standard.
- Prompt: *Dawn breaking over a wide African landscape, with an escarpment or plain in the foreground and a
  modern city glimmering on the far horizon. The first amber light touches the land, and the upper sky is
  still a deep indigo. Vast, hopeful, quiet and premium, with no people.*

**Ab2 · `about-partnership.png` · beside values (Client partnership, Applied rigour)**
- Ratio 4:3. Subject centred.
- Intent: long-term client partnership built on listening and decision-ready advice.
- Prompt: *Two professionals in close conversation across a small table by a window at dusk, one listening
  intently while the other explains with a hand over an open notebook. Two coffee cups, the city softly blurred
  outside. Warm amber side light, indigo window light, faces in partial profile. Attentive and trusting.*

**Ab3 · `about-expertise-still.png` · Senior Life Sciences expertise section**
- Ratio 4:3. Subject centred.
- Intent: pharmaceutical market access, regulatory strategy, quality systems and commercial excellence. This
  is a still life, **not a portrait**.
- Prompt: *An editorial still life on dark stone: a bound regulatory dossier, a quality-manual binder, blank
  unlabeled medicine cartons, a fountain pen and a small glass globe showing Africa. A single soft key light
  from the left, a subtle indigo rim light and an amber reflection in the globe. Precise and authoritative.*
- **Do not generate a likeness of Dayanand Poojari or any real person.** If a portrait is wanted, use his
  real photograph from his profile, with his permission.

### 3.13 Insights (`src/assets/insights/`) — 4 article covers

All covers are **ratio 3:2**, subject centred, and read clearly when small on a card.

**N1 · `insight-lifesciences-convergence.png`** · *The Pan-African Life Sciences Convergence*
- Prompt: *Temperature-controlled pharmaceutical cargo being loaded onto an aircraft at an airport cargo apron at
  dusk, with insulated unlabeled containers on a loader and thin indigo light trails tracing routes in the
  haze above. Amber runway lights and a calm, connected mood.*

**N2 · `insight-enterprise-ai.png`** · *Beyond the Chatbot: Operationalizing Enterprise AI*
- Prompt: *A back-office operations floor at night where a soft emerald stream of light moves from a stack of
  paper files across several desks to one person's screen, implying a workflow being automated. A few staff
  are present, seen from behind, with an indigo ambience. Grounded, not science fiction.*

**N3 · `insight-out-of-pocket-healthcare.png`** · *Navigating Africa's Out-of-Pocket Healthcare Reality*
- Prompt: *A neighbourhood pharmacy counter in the warm evening light, a pharmacist advising a customer
  (both in profile, not identifiable), shelves of unlabeled products softly blurred, and a busy street at
  blue hour through the doorway. Amber and indigo light, humane and real.*

**N4 · `insight-responsible-ai.png`** · *Responsible AI in Regulated Verticals*
- Prompt: *A quiet archive room with tall shelves of bound records, with a single reviewer at a table
  comparing a printed page with a laptop showing abstract shapes. A thin emerald light falls across the table
  and the rest is deep shadow. Careful, accountable and calm.*

### 3.14 Pages that need no images

3D Matrix (`matrix-3d`), MindCraft Universe (`capability-graph`), Engagement Builder (`engagement-builder`)
and Regulatory Map (`africa-intelligence`) are interactive tools. The interface is the content there, and a
photograph would compete with the controls and slow the task. Leave them image-free.

---

## 4. QA checklist for every generated image

- [ ] Correct aspect ratio and at least 2400 px on the long edge.
- [ ] The named safe zone is dark and low in detail, so white text would pass WCAG AA contrast over it.
- [ ] No text, numbers, logos, flags, watermarks or readable screen content anywhere. Zoom in to check.
- [ ] Hands, faces and fingers are anatomically correct, with no warped objects or melted geometry.
- [ ] Light follows the brand: obsidian base, with only indigo, emerald and amber accents (plus the page's
      capability accent). No pink, purple-magenta or neon.
- [ ] It looks like the same series as the four Overview images (dusk grading, glass, dark stone, soft glow).
- [ ] It does not repeat an existing composition (panel wall, lone man at a window, globe-in-centre).
- [ ] Nothing implies a real MindCraft client, office, staff member, certification or result.
- [ ] People are credible, diverse, professionally dressed, and not posed for the camera.
- [ ] Saved with the exact filename in the folder listed above.
