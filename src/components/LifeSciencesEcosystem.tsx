import React, { useState } from 'react';
import { AnimatePresence, MotionConfig, motion } from 'motion/react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { LIFE_SCIENCES_SECTORS, DIVERSIFIED_INDUSTRIES } from '../data/mindcraftData';
import { UNIVERSAL_INDUSTRIES } from '../data/industryAndAfricaData';
import { SENIOR_AREAS, SENIOR_PROFILE } from '../data/seniorExpertise';
import { NavTab, RoleLens, LifeSciencesSector } from '../types';
import { BTN_PRIMARY, BTN_SECONDARY, ContextualCTA, DeepDive, EASE, RelatedLinks, reveal } from './ui/primitives';
import { scrollToId } from './PillarParts';
import { ArtImage } from './ui/ArtImage';
import { ArtCaption, HeroCopy, HeroSection, Illumination, Scrim } from './ui/Hero';

interface LifeSciencesEcosystemProps {
  onOpenIntake: () => void;
  setActiveTab: (tab: NavTab) => void;
  roleLens?: RoleLens;
}

/* ------------------------------------------------------------------ */
/* Image treatment. The lab is bright daylight and full of faces in its upper half, so copy never sits there. */

/* Framed (lg): settles the frame's lower edge into the page where the panel overlaps; faces and windows stay open */
const LAB_SETTLE = 'linear-gradient(0deg, rgba(5,5,5,0.55) 0%, rgba(5,5,5,0.18) 22%, rgba(5,5,5,0) 42%)';
/* Full-bleed (mobile): the band hands over to the canvas at the bottom, where the copy panel overlaps it */
const LAB_SETTLE_MOBILE = 'linear-gradient(0deg, #050505 0%, rgba(5,5,5,0.55) 16%, rgba(5,5,5,0) 40%), linear-gradient(180deg, rgba(5,5,5,0.35) 0%, rgba(5,5,5,0) 16%)';

/* ------------------------------------------------------------------ */
/* Content overrides. Data strings that state unsupported specifics as fact are softened for display here. */

const SOFTEN: Record<string, string> = {
  'Extended public tender procurement cycles (12-24 months)': 'Long public tender procurement cycles',
  'Post-Market Clinical Follow-up (PMCF) Framework': 'Post-Market Surveillance Support Framework'
};
const soft = (s: string) => SOFTEN[s] ?? s;

const CATEGORY_LABEL: Record<LifeSciencesSector['category'], string> = {
  'core-pharma': 'Medicines',
  'devices-equipment': 'Devices and equipment',
  'healthcare-delivery': 'Care delivery'
};

/*
 * One illustrative question per sub-sector, rewritten from the data's workflow examples without the
 * invented counts and results. It shows how we would approach a question, not a case we delivered.
 */
const ILLUSTRATIVE: Record<string, { question: string; method: string; decision: string; ai: string }> = {
  pharma: {
    question: 'How should we price and position a new biologic across East and West Africa?',
    method: 'Physician and payer interviews in each market, price-sensitivity research and competitor benchmarking.',
    decision: 'A pricing and access approach for each channel, from private hospitals to public tenders.',
    ai: 'A competitor price and tender tracker that keeps the picture current after launch.'
  },
  'med-devices': {
    question: 'Which distributor in Southern Africa can genuinely support our device after the sale?',
    method: 'Distributor due-diligence interviews, hospital reference checks and conversations with biomedical engineers.',
    decision: 'A shortlist, and the service commitments worth writing into the agreement.',
    ai: 'A simple service and parts tracker to follow distributor performance.'
  },
  diagnostics: {
    question: 'Is it commercially viable to place point-of-care analysers in rural clinics?',
    method: 'Site assessments covering power, connectivity, sample turnaround and staff training.',
    decision: 'A placement model and product bundle that fits the conditions found.',
    ai: 'An offline-first tool for test logging and quality-control alerts.'
  },
  equipment: {
    question: 'When are public referral hospitals likely to replace their imaging equipment?',
    method: 'An installed-base review, tender history analysis and interviews with hospital finance and procurement leads.',
    decision: 'A pre-tender engagement plan, and financing options to test with buyers.',
    ai: 'A tender pipeline tracker that flags new opportunities as they are published.'
  },
  consumables: {
    question: 'Why are mid-tier hospitals switching from premium sutures to unbranded imports?',
    method: 'A price-to-quality perception study with theatre nurses and procurement managers.',
    decision: 'Pack sizes, pricing and rebate structures matched to how hospitals actually buy.',
    ai: 'Re-order triggers in distributor ordering systems to reduce stock-outs.'
  },
  hospitals: {
    question: 'How can a hospital network reduce insurance claim rejections?',
    method: 'A review of rejected claims and billing workflows, with the administrative staff who run them.',
    decision: 'Redesigned admission and billing checkpoints.',
    ai: 'An AI pre-check that flags coding discrepancies before claims are submitted, with staff review.'
  }
};

/*
 * Pharmaceutical modules. Wording follows the corporate profile (market access, competitive intelligence,
 * regulatory intelligence, pharmacovigilance support, KOL mapping, sales force effectiveness). Regulators are named
 * only as sources of published guidance we track; nothing implies filings, approvals or partnerships.
 */
const PHARMA_MODULES: { title: string; desc: string; points: string[] }[] = [
  {
    title: 'Market access and pricing',
    desc: 'How reimbursement, out-of-pocket spending and tenders shape what a product can achieve.',
    points: [
      'Reimbursement and formulary landscape research (for example Kenya SHA, Ghana NHIS, South Africa NHI)',
      'Pricing research and tiered-pricing scenarios for out-of-pocket markets',
      'Private hospital group procurement mapping'
    ]
  },
  {
    title: 'Competitive intelligence',
    desc: 'Where competitors are, what they charge and what is coming next.',
    points: [
      'Therapeutic-area market sizing and forecasting',
      'Pipeline tracking, pricing analysis and market-share estimation',
      'Positioning as generics and biosimilars enter'
    ]
  },
  {
    title: 'Regulatory intelligence',
    desc: 'What national regulators expect, and how that is changing.',
    points: [
      'Regulatory landscape mapping across African markets',
      'Tracking published guidance from regulators such as PPB, NAFDAC and SAHPRA',
      'Regional harmonisation, joint-assessment routes and the African Medicines Agency'
    ]
  },
  {
    title: 'Pharmacovigilance support',
    desc: 'Support for safety teams, not a replacement for them.',
    points: [
      'AI-assisted literature screening and adverse-event triage, with human review',
      'Pharmacovigilance process mapping and SOP design',
      'Training for safety teams on AI-assisted workflows'
    ]
  },
  {
    title: 'KOL and commercial effectiveness',
    desc: 'Who shapes clinical practice, and how field teams reach them.',
    points: [
      'Key opinion leader identification and mapping',
      'Sales force effectiveness and territory planning',
      'AI pre-call briefing assistants for field teams'
    ]
  }
];

/* How each capability applies in Life Sciences: taken from the corporate profile, section 4. */
const PILLARS: { name: string; tab: NavTab; dot: string; points: string[] }[] = [
  {
    name: 'Business Consulting',
    tab: 'consulting',
    dot: 'bg-teal-400',
    points: [
      'Portfolio strategy, product prioritisation and go-to-market planning',
      'Regulatory landscape mapping and compliance strategy',
      'Policy analysis on healthcare regulation across African markets'
    ]
  },
  {
    name: 'Market Research',
    tab: 'market-research',
    dot: 'bg-sky-400',
    points: [
      'Surveys with physicians, pharmacists, patients, distributors and institutional buyers',
      'Key opinion leader identification, mapping and advisory board research',
      'Market sizing by therapeutic area, product category and country'
    ]
  },
  {
    name: 'AI Training',
    tab: 'ai-training',
    dot: 'bg-amber-400',
    points: [
      'AI for market access, regulatory affairs and pharmacovigilance teams',
      'Sector briefings for Life Sciences and healthcare leadership',
      'Guidelines for safe AI use in regulated settings'
    ]
  },
  {
    name: 'AI Enterprise Solutions',
    tab: 'ai-solutions',
    dot: 'bg-emerald-400',
    points: [
      'AI-assisted pharmacovigilance and adverse-event monitoring',
      'Regulatory intelligence tools that track guideline changes and deadlines',
      'KOL identification and market-access analytics'
    ]
  }
];

const pad = (n: number) => String(n).padStart(2, '0');

export const LifeSciencesEcosystem: React.FC<LifeSciencesEcosystemProps> = ({ onOpenIntake, setActiveTab }) => {
  const [sectorId, setSectorId] = useState<string>(LIFE_SCIENCES_SECTORS[0].id);
  const sectorIndex = Math.max(0, LIFE_SCIENCES_SECTORS.findIndex((s) => s.id === sectorId));
  const sector = LIFE_SCIENCES_SECTORS[sectorIndex];
  const example = ILLUSTRATIVE[sector.id];
  const total = LIFE_SCIENCES_SECTORS.length;

  const selectSector = (i: number, focus = false) => {
    setSectorId(LIFE_SCIENCES_SECTORS[i].id);
    if (focus) document.getElementById(`ls-tab-${LIFE_SCIENCES_SECTORS[i].id}`)?.focus();
  };

  // Roving focus: arrows move along the list in either orientation, Home/End jump to the ends
  const onTabKey = (e: React.KeyboardEvent) => {
    const last = total - 1;
    const next =
      e.key === 'ArrowDown' || e.key === 'ArrowRight' ? (sectorIndex === last ? 0 : sectorIndex + 1)
      : e.key === 'ArrowUp' || e.key === 'ArrowLeft' ? (sectorIndex === 0 ? last : sectorIndex - 1)
      : e.key === 'Home' ? 0
      : e.key === 'End' ? last
      : null;
    if (next === null) return;
    e.preventDefault();
    selectSector(next, true);
  };

  const jumpToSector = (i: number) => {
    selectSector(i);
    scrollToId('ls-subsectors');
  };

  const details: { term: string; dot: string; items: string[] }[] = [
    { term: 'Challenges we often hear', dot: 'bg-amber-400', items: sector.strategicChallenges },
    { term: 'How we research it', dot: 'bg-sky-400', items: sector.researchMethods },
    { term: 'Where AI can help', dot: 'bg-emerald-400', items: sector.aiOpportunities },
    { term: 'What you can receive', dot: 'bg-indigo-400', items: sector.exampleDeliverables }
  ];

  return (
    <MotionConfig reducedMotion="user">
      {/* ---------------------------------------------------------- */}
      {/* Opening: the lab in a frame, the copy on a panel anchored to its lower-right corner, below the faces */}
      <HeroSection id="lifesciences-section" labelledBy="lifesciences-title" className="text-white">
        <div className="mc-container relative pt-6 sm:pt-8 lg:pt-12 pb-14 sm:pb-16 lg:pb-24">
          <div className="relative">
            <figure className="relative -mx-4 sm:-mx-6 lg:mx-0 lg:w-[66%]">
              <div className="relative aspect-[4/3] md:aspect-[16/10] overflow-hidden lg:rounded-2xl lg:border lg:border-white/10">
                <ArtImage
                  name="lifesciences-lab"
                  alt=""
                  priority
                  sizes="(min-width: 1024px) 62vw, 100vw"
                  position="object-[50%_40%]"
                  className="brightness-[0.85] saturate-[0.9]"
                />
                <Scrim background={LAB_SETTLE_MOBILE} className="lg:hidden" />
                <Scrim background={LAB_SETTLE} className="hidden lg:block" />
              </div>
              <ArtCaption className="hidden lg:block absolute left-[calc(100%+2rem)] top-1 w-[13rem] xl:w-[16rem] leading-relaxed">
                Illustration, not a MindCraft facility
              </ArtCaption>
            </figure>

            <Illumination
              tone="indigo"
              strength={1}
              className="-bottom-32 left-1/2 -translate-x-1/2 h-[30rem] w-[30rem] lg:left-auto lg:translate-x-0 lg:-right-24 lg:-bottom-40 lg:h-[46rem] lg:w-[46rem]"
            />

            {/* The row is pulled up into the frame; the list (left) is pushed back down, so only the panel overlaps. Panel first in source order */}
            <div className="relative -mt-12 lg:-mt-[17.5%] lg:flex lg:flex-row-reverse lg:items-start">
              <div className="relative z-10 rounded-2xl border border-indigo-500/25 bg-[#0D0F17] p-6 sm:p-8 lg:p-10 md:ml-auto md:w-[86%] lg:ml-0 lg:w-[56%]">
                <HeroCopy
                  id="lifesciences-title"
                  size="title"
                  className="lg:[&_h1]:text-[2.375rem] xl:[&_h1]:text-[3rem]"
                  meta={<span aria-hidden="true">Life Sciences</span>}
                  title={
                    <>
                      <span className="sr-only">Life Sciences: </span>
                      Our deepest specialism, with <em>regulatory and commercial fluency</em> built in.
                    </>
                  }
                  lead="Research, strategy, AI training and AI solutions for pharmaceutical, device, diagnostics and hospital organisations across Africa, Europe and the United States, with the deepest focus on African markets."
                  note={<>One of the {UNIVERSAL_INDUSTRIES.length} industries we serve, and the one we know best.</>}
                  actions={
                    <>
                      <button type="button" onClick={onOpenIntake} className={`${BTN_PRIMARY} !px-6`}>
                        Discuss a Life Sciences engagement
                      </button>
                      <button type="button" onClick={() => scrollToId('ls-subsectors')} className={BTN_SECONDARY}>
                        <span>See the {total} sub-sectors</span>
                        <ChevronDown className="h-4 w-4" aria-hidden="true" />
                      </button>
                    </>
                  }
                />
              </div>
              <div className="hidden lg:block lg:w-[44%] lg:mt-[17.5%] lg:pt-8 lg:pr-12">
                <p id="ls-hero-index" className="mc-meta">{total} sub-sectors</p>
                <ul aria-labelledby="ls-hero-index" className="mt-3 grid grid-cols-2 gap-x-6 border-t border-white/[0.08]">
                  {LIFE_SCIENCES_SECTORS.map((s, i) => (
                    <li key={s.id} className="border-b border-white/[0.08]">
                      <button
                        type="button"
                        onClick={() => jumpToSector(i)}
                        className="group mc-tap w-full flex items-center gap-3 py-2 text-left text-[13px] leading-snug text-white/65 hover:text-white transition-colors duration-150"
                      >
                        <span aria-hidden="true" className="font-mono text-[11px] tabular-nums text-white/40 group-hover:text-indigo-300 transition-colors duration-150">
                          {pad(i + 1)}
                        </span>
                        {s.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </div>
      </HeroSection>

      {/* ---------------------------------------------------------- */}
      {/* Sub-sectors as a master-detail index: the names are the navigation, the detail is the page */}
      <section id="ls-subsectors" className="mc-section scroll-mt-20" aria-labelledby="ls-subsectors-title">
        <div className="mc-container grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          <div className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start min-w-0">
            <motion.div {...reveal}>
              <h2 id="ls-subsectors-title" className="mc-h2">
                Six sub-sectors, each with <em>its own rules</em>
              </h2>
              <p className="mt-4 max-w-[34em] text-[15px] leading-relaxed text-white/65">
                Buyers, regulators and evidence differ from one to the next. Choose a sub-sector to see where we focus, what we hear, how we research it and where AI can help.
              </p>
            </motion.div>

            <div
              role="tablist"
              aria-label="Life Sciences sub-sectors"
              aria-orientation="vertical"
              className="mt-8 lg:mt-10 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0 flex lg:flex-col gap-2 lg:gap-0 overflow-x-auto lg:overflow-visible lg:border-t lg:border-white/[0.08] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {LIFE_SCIENCES_SECTORS.map((s, i) => {
                const selected = i === sectorIndex;
                return (
                  <button
                    key={s.id}
                    id={`ls-tab-${s.id}`}
                    type="button"
                    role="tab"
                    aria-selected={selected}
                    aria-controls="ls-sector-panel"
                    tabIndex={selected ? 0 : -1}
                    onClick={() => selectSector(i)}
                    onKeyDown={onTabKey}
                    className={`group mc-tap shrink-0 flex items-center gap-2.5 rounded-full border px-4 text-left text-[14px] font-medium whitespace-nowrap transition-colors duration-150 lg:w-full lg:items-baseline lg:gap-5 lg:rounded-none lg:border-0 lg:border-b lg:border-white/[0.08] lg:px-0 lg:py-4 lg:whitespace-normal ${
                      selected
                        ? 'border-indigo-500/40 bg-indigo-500/10 text-white lg:bg-transparent'
                        : 'border-white/10 text-white/65 hover:text-white lg:text-white/45'
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className={`font-mono text-[11px] tabular-nums transition-colors duration-150 ${selected ? 'text-indigo-300' : 'text-white/40 group-hover:text-white/60'}`}
                    >
                      {pad(i + 1)}
                    </span>
                    <span className="lg:flex-1 lg:font-heading lg:text-[1.5rem] xl:text-[1.75rem] lg:leading-[1.15] lg:tracking-[-0.02em]">{s.name}</span>
                    {selected && <ArrowRight aria-hidden="true" className="hidden lg:block h-5 w-5 shrink-0 self-center text-indigo-400" />}
                  </button>
                );
              })}
            </div>
          </div>

          <div id="ls-sector-panel" role="tabpanel" aria-labelledby={`ls-tab-${sector.id}`} className="lg:col-span-7 min-w-0">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={sector.id}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2, ease: EASE }}
              >
                <p className="mc-meta">
                  {pad(sectorIndex + 1)} / {pad(total)} · {CATEGORY_LABEL[sector.category]}
                </p>
                <h3 className="mt-3 font-heading text-[1.75rem] sm:text-[2.25rem] font-medium leading-[1.1] tracking-[-0.02em] text-white">{sector.name}</h3>
                <p className="mt-3 max-w-[36em] text-[16px] sm:text-[17px] leading-snug text-indigo-200/90">{sector.tagline}</p>
                <p className="mt-3 max-w-[38em] text-[15px] leading-relaxed text-white/65">{sector.description}</p>

                <div className="mt-8 border-t border-white/[0.1] pt-6">
                  <h4 className="text-[13px] font-medium text-white/55">Where we focus</h4>
                  <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                    {sector.focusAreas.map((f) => (
                      <li key={f} className="flex gap-3 text-[15px] leading-snug text-white/85">
                        <span aria-hidden="true" className="mt-[0.55rem] h-px w-3 shrink-0 bg-indigo-400" />
                        {soft(f)}
                      </li>
                    ))}
                  </ul>
                </div>

                <dl className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8">
                  {details.map((d) => (
                    <div key={d.term} className="border-t border-white/[0.1] pt-5">
                      <dt className="flex items-center gap-2.5 text-[13px] font-medium text-white">
                        <span aria-hidden="true" className={`h-1.5 w-1.5 rounded-full ${d.dot}`} />
                        {d.term}
                      </dt>
                      <dd className="mt-3">
                        <ul className="space-y-2">
                          {d.items.map((it) => (
                            <li key={it} className="text-[14px] leading-relaxed text-white/70">
                              {soft(it)}
                            </li>
                          ))}
                        </ul>
                      </dd>
                    </div>
                  ))}
                </dl>

                {example && (
                  <figure className="mt-10 rounded-2xl border border-indigo-500/20 bg-[#0D0F17] p-6 sm:p-8">
                    <p className="text-[13px] font-medium text-indigo-300">An illustrative question</p>
                    <blockquote className="mt-3 font-heading text-[1.25rem] sm:text-[1.5rem] font-medium leading-snug tracking-[-0.01em] text-white">
                      “{example.question}”
                    </blockquote>
                    <ol className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
                      {[
                        { label: 'How we would look', text: example.method },
                        { label: 'What it would inform', text: example.decision },
                        { label: 'Where AI could fit', text: example.ai }
                      ].map((step, i) => (
                        <li key={step.label} className="border-t border-white/[0.1] pt-4">
                          <span className="flex items-baseline gap-2 text-[13px] font-medium text-white/80">
                            <span aria-hidden="true" className="font-mono text-[11px] text-white/45 tabular-nums">{pad(i + 1)}</span>
                            {step.label}
                          </span>
                          <p className="mt-2 text-[14px] leading-relaxed text-white/65">{step.text}</p>
                        </li>
                      ))}
                    </ol>
                    <figcaption className="mt-6 text-[12px] leading-relaxed text-white/50">
                      An example of how we would approach the question. Not a client case, and no results are implied.
                    </figcaption>
                  </figure>
                )}

                <button
                  type="button"
                  onClick={onOpenIntake}
                  className="mc-tap mt-6 inline-flex items-center gap-2 text-sm font-medium text-indigo-300 hover:text-indigo-200 transition-colors duration-150"
                >
                  Talk to us about {sector.name}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/* Pharmaceuticals in depth: ruled columns on their own surface */}
      <section className="mc-section mc-surface" aria-labelledby="ls-pharma-title">
        <div className="mc-container">
          <motion.div {...reveal} className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-16 lg:items-end">
            <div className="lg:col-span-6">
              <p className="mc-meta">{PHARMA_MODULES.length} modules</p>
              <h2 id="ls-pharma-title" className="mc-h2 mt-3">
                Pharmaceuticals, <em>module by module</em>
              </h2>
            </div>
            <p className="lg:col-span-6 max-w-[34em] text-[15px] leading-relaxed text-white/65">
              The sub-sector where our work is most detailed. Each module can run on its own or alongside the others, and each draws on research, consulting, training and AI as the question needs.
            </p>
          </motion.div>

          <ol className="mt-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-x-8 gap-y-10">
            {PHARMA_MODULES.map((m, i) => (
              <motion.li
                key={m.title}
                {...reveal}
                transition={{ ...reveal.transition, delay: Math.min(i, 4) * 0.05 }}
                className="min-w-0 border-t border-white/[0.14] pt-5"
              >
                <span aria-hidden="true" className="font-mono text-[11px] tabular-nums text-indigo-300">{pad(i + 1)}</span>
                <h3 className="mt-3 font-heading text-[1.1875rem] font-medium leading-snug tracking-[-0.01em] text-white">{m.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-white/65">{m.desc}</p>
                <ul className="mt-4 space-y-2.5">
                  {m.points.map((p) => (
                    <li key={p} className="flex gap-2.5 text-[13px] leading-snug text-white/70">
                      <span aria-hidden="true" className="mt-[0.45rem] h-1 w-1 shrink-0 rounded-full bg-indigo-400/80" />
                      {p}
                    </li>
                  ))}
                </ul>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/* The four capabilities as a quadrant diagram around one sector lens */}
      <section className="mc-section" aria-labelledby="ls-pillars-title">
        <div className="mc-container">
          <motion.div {...reveal} className="max-w-2xl">
            <h2 id="ls-pillars-title" className="mc-h2">
              Four capabilities, <em>one sector lens</em>
            </h2>
            <p className="mc-lead mt-4">
              Most Life Sciences questions need more than one kind of help. Research informs the strategy, training makes it stick, and AI keeps the intelligence current.
            </p>
          </motion.div>

          <div className="relative mt-12 grid grid-cols-1 sm:grid-cols-2 border-t border-white/[0.1]">
            <span
              aria-hidden="true"
              className="hidden sm:block absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-indigo-500/30 bg-[#050505] px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.08em] text-indigo-200"
            >
              Life Sciences
            </span>
            {PILLARS.map((p, i) => (
              <motion.div
                key={p.name}
                {...reveal}
                transition={{ ...reveal.transition, delay: i * 0.05 }}
                className={`min-w-0 border-b border-white/[0.1] py-8 sm:py-10 ${i % 2 === 0 ? 'sm:border-r sm:pr-10 lg:pr-14' : 'sm:pl-10 lg:pl-14'} ${i >= 2 ? 'sm:border-b-0' : ''}`}
              >
                <h3 className="flex items-center gap-3 font-heading text-[1.25rem] sm:text-[1.5rem] font-medium leading-tight tracking-[-0.015em] text-white">
                  <span aria-hidden="true" className={`h-2 w-2 shrink-0 rounded-full ${p.dot}`} />
                  {p.name}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {p.points.map((pt) => (
                    <li key={pt} className="text-[15px] leading-relaxed text-white/70">
                      {pt}
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  onClick={() => setActiveTab(p.tab)}
                  className="group mc-tap mt-3 inline-flex items-center gap-2 text-[13px] font-medium text-white/65 hover:text-white transition-colors duration-150"
                >
                  {p.name}
                  <ArrowRight className="h-4 w-4 text-white/40 group-hover:text-white transition-colors duration-150" aria-hidden="true" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/* Senior experience and the wider practice, side by side */}
      <section className="mc-section mc-surface-2" aria-label="Senior expertise and other industries">
        <div className="mc-container grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-16">
          <motion.div {...reveal} className="lg:col-span-5 min-w-0">
            <h2 className="mc-h2">
              Senior experience <em>we draw on</em>
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-white/70">
              MindCraft draws on the experience of {SENIOR_PROFILE.name}, an independent pharmaceutical and healthcare consultant based in {SENIOR_PROFILE.basedIn}. His work spans:
            </p>
            <ul className="mt-5 border-t border-white/[0.1]">
              {SENIOR_AREAS.map((a) => (
                <li key={a.id} className="border-b border-white/[0.08] py-3 text-[14px] leading-snug text-white/80">
                  {a.title}
                </li>
              ))}
            </ul>
            <button type="button" onClick={() => setActiveTab('senior-expertise')} className={`${BTN_SECONDARY} mt-7 w-full sm:w-auto`}>
              <span>Read his profile</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </motion.div>

          <motion.div {...reveal} className="lg:col-span-7 min-w-0">
            <h2 className="mc-h2">Beyond Life Sciences</h2>
            <p className="mt-4 max-w-[36em] text-[15px] leading-relaxed text-white/70">
              The same methods carry into other sectors. These four sit closest to our healthcare work; the industries page covers all {UNIVERSAL_INDUSTRIES.length}.
            </p>
            <ul className="mt-6 border-t border-white/[0.1]">
              {DIVERSIFIED_INDUSTRIES.map((v) => (
                <li key={v.id} className="grid grid-cols-1 sm:grid-cols-[13rem_1fr] gap-x-6 gap-y-1 border-b border-white/[0.08] py-4">
                  <span className="text-[15px] font-medium text-white">{v.name}</span>
                  <span className="text-[14px] leading-snug text-white/60">{v.tagline}</span>
                </li>
              ))}
            </ul>
            <DeepDive title="Focus areas and method for each" hint={`${DIVERSIFIED_INDUSTRIES.length} verticals`} className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 pt-4">
                {DIVERSIFIED_INDUSTRIES.map((v) => (
                  <div key={v.id} className="min-w-0">
                    <h3 className="text-sm font-semibold text-white">{v.name}</h3>
                    <p className="mt-1 text-[13px] leading-relaxed text-white/60">{v.description}</p>
                    <ul className="mt-3 space-y-1.5">
                      {v.focusAreas.map((fa) => (
                        <li key={fa} className="flex gap-2 text-[13px] leading-snug text-white/75">
                          <span aria-hidden="true" className="mt-[0.45rem] h-1 w-1 shrink-0 rounded-full bg-indigo-400" />
                          {fa}
                        </li>
                      ))}
                    </ul>
                    <p className="mt-2 text-[12px] leading-relaxed text-white/50">Method: {v.methodology}</p>
                  </div>
                ))}
              </div>
            </DeepDive>
            <button
              type="button"
              onClick={() => setActiveTab('industries')}
              className="group mc-tap mt-4 inline-flex items-center gap-2 text-sm font-medium text-indigo-300 hover:text-indigo-200 transition-colors duration-150"
            >
              Explore all {UNIVERSAL_INDUSTRIES.length} industries
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      <section className="mc-section" aria-label="Next steps">
        <div className="mc-container space-y-10 md:space-y-14">
          <motion.div {...reveal}>
            <ContextualCTA
              title="Bring us the Life Sciences question"
              body="A launch, a market-access problem, a distributor choice or a hospital process: we scope the research, strategy, training or AI work around it."
              primaryLabel="Discuss a Life Sciences engagement"
              onPrimary={onOpenIntake}
            />
          </motion.div>
          <RelatedLinks
            title="Continue"
            items={[
              { label: 'Senior expertise', desc: 'The independent consultant whose experience we draw on', onClick: () => setActiveTab('senior-expertise') },
              { label: 'Industries we serve', desc: `All ${UNIVERSAL_INDUSTRIES.length} sectors and their dossiers`, onClick: () => setActiveTab('industries') },
              { label: 'Localization', desc: 'From global strategy to local result', onClick: () => setActiveTab('localization'), tone: 'emerald' },
              { label: 'Market entry', desc: 'A stepwise route into African markets', onClick: () => setActiveTab('market-entry'), tone: 'emerald' }
            ]}
          />
        </div>
      </section>
    </MotionConfig>
  );
};
