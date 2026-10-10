import React, { useState } from 'react';
import { AnimatePresence, MotionConfig, motion } from 'motion/react';
import { SERVICE_PILLARS, RESEARCH_WORKSPACE_SAMPLE } from '../data/mindcraftData';
import { NavTab } from '../types';
import { BTN_PRIMARY, ContextualCTA, EASE, RelatedLinks, reveal } from './ui/primitives';
import { ArtImage } from './ui/ArtImage';
import { HeroCopy, HeroSection, Scrim } from './ui/Hero';
import { IllustrativeTag, MarkList, ScrollCue, tabKeyNav } from './PillarParts';

interface MarketResearchWorkspaceProps {
  onOpenIntake: () => void;
  setActiveTab: (tab: NavTab) => void;
}

/* ------------------------------------------------------------------ */
/** The four research groups as the corporate profile names them (Pillar 2), with its own bullet wording. */
const GROUPS: { name: string; summary: string; items: string[]; outcome: string }[] = [
  {
    name: 'Primary Market Research',
    summary: 'First-hand evidence from the people who shape demand, access and purchasing decisions.',
    items: [
      'Quantitative and qualitative surveys with physicians, pharmacists, patients, distributors, retailers and institutional buyers',
      'Key Opinion Leader (KOL) identification, mapping and advisory-board research',
      'Customer, patient and consumer insight: satisfaction, journey and unmet-needs studies',
      'Distributor, channel-partner and tender or procurement intelligence'
    ],
    outcome: 'Field insight, KOL maps, and channel and tender intelligence.'
  },
  {
    name: 'Secondary & Desk Research',
    summary: 'The size, competition and rules of a market, before and alongside fieldwork.',
    items: [
      'Market sizing, forecasting and opportunity assessment by therapy area, category and country',
      'Competitive intelligence: pipelines, pricing, market share and SWOT benchmarking',
      'Regulatory, policy and reimbursement scans across African and international markets',
      'Sector scans, including AI-adoption and emerging-technology studies'
    ],
    outcome: 'A sized, benchmarked opportunity in its regulatory context.'
  },
  {
    name: 'Programme & Impact Research',
    summary: 'Whether programmes and capacity-building investments are working.',
    items: [
      'Baseline, midline and endline surveys for corporate, development-sector and donor-funded programmes',
      'Monitoring, Evaluation and Learning (MEL) frameworks and impact assessments',
      'Needs assessments and skills-gap analyses ahead of training investment'
    ],
    outcome: 'Impact evidence that informs the next investment.'
  },
  {
    name: 'Data, Analytics & Knowledge Products',
    summary: 'Clean data, sound analysis and products people can use.',
    items: [
      'Data cleaning, statistical analysis and dashboard-ready reporting',
      'Custom reports, whitepapers, toolkits and case studies for internal or public use',
      'AI-assisted literature and data synthesis that speeds turnaround without lowering rigour'
    ],
    outcome: 'Reports and dashboards ready for internal or public use.'
  }
];

const DELIVERABLES = [
  'Executive summary reports, detailed findings decks and raw datasets',
  'Market sizing models and competitive intelligence trackers, updated on an agreed cadence',
  'Actionable recommendations linked directly to business or programme decisions'
];

/* ------------------------------------------------------------------ */
/** How a study runs: eight stages, grouped into the five layers of the research workspace. */
const STAGES: { title: string; desc: string }[] = [
  { title: 'Question', desc: 'Frame the decision and the hypotheses' },
  { title: 'Research design', desc: 'Samples, instruments and sources' },
  { title: 'Data collection', desc: 'Fieldwork and desk research' },
  { title: 'Data quality', desc: 'Cleaning, audit and verification' },
  { title: 'Analysis', desc: 'Statistical and qualitative analysis' },
  { title: 'Synthesis', desc: 'Themes drawn together, AI-assisted where useful' },
  { title: 'Intelligence', desc: 'Findings framed for the decision' },
  { title: 'Decision', desc: 'Recommendations with priorities' }
];

type Layer = 'brief' | 'primary' | 'secondary' | 'findings' | 'decision';

const LAYERS: { id: Layer; label: string; first: number; holds: string; place: string }[] = [
  {
    id: 'brief',
    label: 'Brief',
    first: 0,
    holds: 'The decision the research has to inform, the questions that follow from it, and the design: who to ask, what to measure and which sources to trust.',
    place: 'lg:col-start-1 lg:row-start-1'
  },
  {
    id: 'primary',
    label: 'Primary evidence',
    first: 2,
    holds: 'First-hand evidence from surveys, in-depth interviews and advisory boards. Every response is checked before it is used.',
    place: 'lg:col-start-3 lg:row-start-1'
  },
  {
    id: 'secondary',
    label: 'Secondary data',
    first: 2,
    holds: 'Desk evidence that runs alongside fieldwork: epidemiology and market size, competitor pipelines and pricing, and the regulatory and reimbursement landscape.',
    place: 'lg:col-start-3 lg:row-start-2'
  },
  {
    id: 'findings',
    label: 'Strategic findings',
    first: 4,
    holds: 'Analysis and synthesis. Each finding states the trend, what it means for the decision and how much risk it carries.',
    place: 'lg:col-start-5 lg:row-start-1'
  },
  {
    id: 'decision',
    label: 'Decision layer',
    first: 6,
    holds: 'Recommendations tied back to the original decision, each with a priority and the evidence it rests on.',
    place: 'lg:col-start-7 lg:row-start-1'
  }
];

/*
 * Example content for the workspace. The brief, markets and source types come from the sample in the data file;
 * its sample sizes, statistics, named companies and evidence scores are deliberately not shown, because they read
 * as real findings. The findings and recommendations below are written as an illustration of format only.
 */
const PRIMARY_ESTABLISHES = ['Clinical willingness and access barriers', 'Listing and tender requirements', 'Reimbursement expectations and evidence needs'];

const FINDINGS_EXAMPLE: { trend: string; meaning: string; risk: 'High' | 'Moderate' | 'Low' }[] = [
  { trend: 'Currency movements raise the cost of imported specialty medicines', meaning: 'Pricing may need local-currency or tiered terms to keep patients on treatment.', risk: 'High' },
  { trend: 'Interest in public–private models for specialist centres', meaning: 'Access could be negotiated together with training or equipment support.', risk: 'Moderate' },
  { trend: 'Private specialist providers are expanding', meaning: 'A private channel could open before public access is secured.', risk: 'Low' }
];
const RISK_TEXT = { High: 'text-amber-300', Moderate: 'text-amber-200/80', Low: 'text-emerald-300' } as const;

const DECISION_EXAMPLE: { action: string; priority: string; basis: string }[] = [
  { action: 'Supply private specialist centres directly while public access routes are explored.', priority: 'Immediate', basis: 'Interviews, regulatory scan' },
  { action: 'Work with reference laboratories where diagnostic testing is the bottleneck.', priority: 'Immediate', basis: 'Interviews, epidemiology' },
  { action: 'Consider a patient support programme to help people stay on treatment.', priority: 'Medium term', basis: 'Payer panel, findings' }
];

const pad = (n: number) => String(n).padStart(2, '0');

/* The sunset and port on the image's right edge dissolve into the canvas where the copy sits; the top is
   darkened under the section tabs and the floor settles into the next band */
export const MarketResearchWorkspace: React.FC<MarketResearchWorkspaceProps> = ({ onOpenIntake, setActiveTab }) => {
  const pillar = SERVICE_PILLARS.find((p) => p.id === 'market-research') || SERVICE_PILLARS[1];
  const ws = RESEARCH_WORKSPACE_SAMPLE;
  const [layerId, setLayerId] = useState<Layer>('brief');
  const layer = LAYERS.find((l) => l.id === layerId) ?? LAYERS[0];
  const layerIds = LAYERS.map((l) => l.id);
  const inLayer = (i: number) => i === layer.first || i === layer.first + 1;

  return (
    <MotionConfig reducedMotion="user">
      <HeroSection id="market-research-section" labelledBy="mr-title" className="mc-art-bleed min-h-[35rem] bg-[#050505] lg:min-h-[min(46rem,calc(100dvh-5rem))]">
        <div aria-hidden="true" className="absolute inset-0">
          <ArtImage
            name="research-mapping"
            alt=""
            priority
            sizes="100vw"
            position="object-[34%_40%] lg:object-[20%_50%]"
          />
          <Scrim background="linear-gradient(90deg, rgba(5,5,5,.05) 0%, rgba(5,5,5,.12) 28%, rgba(5,5,5,.64) 55%, rgba(5,5,5,.94) 79%, #050505 100%)" />
          <Scrim background="linear-gradient(180deg, rgba(5,5,5,.76) 0%, rgba(5,5,5,0) 22%, rgba(5,5,5,0) 72%, #050505 100%)" />
        </div>
        <div className="mc-container mc-art-copy flex min-h-[35rem] items-end py-14 sm:py-20 lg:min-h-[min(46rem,calc(100dvh-5rem))] lg:py-24">
          <HeroCopy
            id="mr-title"
            className="max-w-[34rem] lg:ml-auto"
            title={
              <>
                <span className="sr-only">Market Research &amp; Intelligence: </span>
                Evidence you can <em>decide on</em>.
              </>
            }
            lead={pillar.tagline}
            note={
              <>
                The question we help answer: <span className="text-sky-300">{pillar.question}</span>
              </>
            }
            actions={
              <>
                <button type="button" onClick={onOpenIntake} className={`${BTN_PRIMARY} !px-6`}>
                  Commission research
                </button>
                <ScrollCue targetId="mr-capabilities">See the research capabilities</ScrollCue>
              </>
            }
          />
        </div>
      </HeroSection>

      {/* ---------------------------------------------------------- */}
      {/* Capabilities as an evidence grid: one lead method, three supporting, the deliverables as a side note */}
      <section className="mc-section" id="mr-capabilities" aria-labelledby="mr-caps-title">
        <div className="mc-container">
          <motion.div {...reveal} className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-16 lg:items-end">
            <h2 id="mr-caps-title" className="mc-h2 lg:col-span-6">
              Question. Evidence. Decision.
            </h2>
            <p className="lg:col-span-5 lg:col-start-8 text-[15px] leading-relaxed text-white/65">
              Combine fieldwork and desk research around the decision that needs to be made.
            </p>
          </motion.div>

          <motion.div
            {...reveal}
            className="mt-10 sm:mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.08]"
          >
            {GROUPS.map((g, i) => {
              const lead = i === 0;
              return (
                <React.Fragment key={g.name}>
                  <article className={`flex flex-col bg-[#050505] ${lead ? 'md:col-span-2 p-6 sm:p-8 lg:p-10' : 'p-6 sm:p-7'}`}>
                    <p className="font-mono text-xs text-sky-300/80 tabular-nums" aria-hidden="true">{pad(i + 1)}</p>
                    <h3
                      className={`mt-3 font-heading font-medium leading-tight tracking-[-0.015em] text-white ${
                        lead ? 'text-[1.5rem] sm:text-[2rem]' : 'text-[1.25rem]'
                      }`}
                    >
                      {g.name}
                    </h3>
                    <p className={`mt-3 leading-relaxed text-white/70 ${lead ? 'text-[16px] sm:text-[17px] max-w-[34em]' : 'text-[15px]'}`}>{g.summary}</p>
                    <MarkList
                      items={g.items}
                      marker="bg-sky-400/80"
                      className={`mt-5 grid gap-y-2.5 ${lead ? 'sm:grid-cols-2 gap-x-8 sm:mt-7' : ''}`}
                    />
                    <p className="mt-auto pt-6 text-[13px] leading-snug">
                      <span className="text-white/50">Outcome: </span>
                      <span className="text-sky-200/90">{g.outcome}</span>
                    </p>
                  </article>

                  {lead && (
                    <aside aria-labelledby="mr-deliverables" className="order-last md:order-none bg-[#0D0F17] p-6 sm:p-8">
                      <h3 id="mr-deliverables" className="text-[13px] font-medium text-sky-300">
                        What you receive
                      </h3>
                      <ul className="mt-4 space-y-4">
                        {DELIVERABLES.map((d) => (
                          <li key={d} className="border-t border-white/[0.08] pt-4 text-[15px] leading-snug text-white/80">
                            {d}
                          </li>
                        ))}
                      </ul>
                    </aside>
                  )}
                </React.Fragment>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/* Centrepiece: the research workflow, drawn as a process with the workspace layers beneath it */}
      <section className="mc-section mc-surface-2 relative overflow-hidden" id="mr-workspace" aria-labelledby="mr-flow-title">
        <div className="mc-container relative">
          <motion.div {...reveal} className="max-w-2xl">
            <p className="mc-meta">8 stages · 5 layers</p>
            <h2 id="mr-flow-title" className="mc-h2 mt-3">
              From a question to <em>a decision</em>
            </h2>
            <p className="mc-lead mt-4">
              Every study follows the same path. Choose a layer to see what it holds, with an illustrative oncology market-entry brief as the example.
            </p>
          </motion.div>

          {/* Stages: a vertical path on phones, two rows of four on tablets, one line of eight on desktop */}
          <motion.ol {...reveal} className="mt-10 sm:mt-14 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-8 md:gap-y-10" aria-label="Research stages">
            {STAGES.map((s, i) => {
              const on = inLayer(i);
              return (
                <li
                  key={s.title}
                  aria-current={on ? 'step' : undefined}
                  className={`relative border-l pl-6 pb-6 md:border-l-0 md:border-t md:pl-0 md:pb-0 md:pt-6 md:pr-5 transition-colors duration-200 ${
                    on ? 'border-sky-400/70' : 'border-white/15'
                  }`}
                >
                  <span
                    aria-hidden="true"
                    className={`absolute -left-[5px] top-1 md:left-0 md:-top-[5px] h-[9px] w-[9px] rounded-full transition-colors duration-200 ${
                      on ? 'bg-sky-400' : 'bg-[#0D0F17] ring-1 ring-white/30'
                    }`}
                  />
                  <span className={`font-mono text-xs tabular-nums ${on ? 'text-sky-300' : 'text-white/55'}`}>{pad(i + 1)}</span>
                  <span className={`mt-1 block font-heading text-[15px] font-medium leading-snug transition-colors duration-200 ${on ? 'text-white' : 'text-white/75'}`}>
                    {s.title}
                  </span>
                  <span className="mt-1 block text-[13px] leading-snug text-white/55">{s.desc}</span>
                </li>
              );
            })}
          </motion.ol>

          {/* Layers: the workspace tabs, placed under the stages they cover on desktop; primary and secondary run in parallel */}
          <div
            role="tablist"
            aria-label="Research workspace layers"
            onKeyDown={(e) => tabKeyNav(e, layerIds, layerId, setLayerId, (id) => `ws-tab-${id}`)}
            className="mt-8 lg:mt-6 -mx-4 px-4 sm:mx-0 sm:px-0 flex gap-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:grid lg:grid-cols-8 lg:gap-x-0 lg:gap-y-2 lg:overflow-visible"
          >
            {LAYERS.map((l) => {
              const active = l.id === layerId;
              return (
                <button
                  key={l.id}
                  type="button"
                  role="tab"
                  id={`ws-tab-${l.id}`}
                  aria-selected={active}
                  aria-controls="ws-panel"
                  tabIndex={active ? 0 : -1}
                  onClick={(e) => {
                    setLayerId(l.id);
                    e.currentTarget.scrollIntoView({ inline: 'nearest', block: 'nearest' });
                  }}
                  className={`mc-tap shrink-0 lg:col-span-2 lg:mr-5 flex items-center justify-between gap-4 rounded-lg border px-4 text-left text-[13px] font-medium whitespace-nowrap transition-colors duration-200 ${l.place} ${
                    active ? 'border-sky-400/50 bg-sky-500/10 text-white' : 'border-white/10 text-white/65 hover:border-white/25 hover:text-white'
                  }`}
                >
                  <span>{l.label}</span>
                  <span aria-hidden="true" className={`hidden lg:inline font-mono text-xs tabular-nums ${active ? 'text-sky-300' : 'text-white/55'}`}>
                    {pad(l.first + 1)}–{pad(l.first + 2)}
                  </span>
                </button>
              );
            })}
          </div>

          <div id="ws-panel" role="tabpanel" aria-labelledby={`ws-tab-${layerId}`} tabIndex={0} className="mt-8 sm:mt-10 rounded-2xl focus-visible:outline-offset-4">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={layerId}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2, ease: EASE }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12"
              >
                <div className="lg:col-span-4">
                  <p className="font-mono text-xs tabular-nums text-sky-300">
                    Stages {pad(layer.first + 1)}–{pad(layer.first + 2)}
                  </p>
                  <h3 className="mt-2 font-heading text-[1.5rem] sm:text-[1.875rem] font-medium leading-tight tracking-[-0.02em] text-white">{layer.label}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-white/70">{layer.holds}</p>
                </div>

                <div className="lg:col-span-8 rounded-2xl border border-white/[0.08] bg-[#050505]/70 p-5 sm:p-7">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-white/[0.08] pb-4">
                    <p className="text-[15px] font-medium text-white">{ws.title}</p>
                    <IllustrativeTag>Illustrative · not a client study</IllustrativeTag>
                  </div>

                  {layerId === 'brief' && (
                    <dl className="divide-y divide-white/[0.06]">
                      <div className="grid sm:grid-cols-[9rem_1fr] gap-1 sm:gap-6 py-4">
                        <dt className="text-[13px] text-white/50">Client (hypothetical)</dt>
                        <dd className="text-[15px] text-white/85">A specialty biopharmaceutical company</dd>
                      </div>
                      <div className="grid sm:grid-cols-[9rem_1fr] gap-1 sm:gap-6 py-4">
                        <dt className="text-[13px] text-white/50">Objective</dt>
                        <dd className="text-[15px] leading-relaxed text-white/85">{ws.objective}</dd>
                      </div>
                      <div className="grid sm:grid-cols-[9rem_1fr] gap-1 sm:gap-6 pt-4">
                        <dt className="text-[13px] text-white/50">Markets in scope</dt>
                        <dd className="text-[15px] text-sky-200">{ws.targetMarkets.join(' · ')}</dd>
                      </div>
                    </dl>
                  )}

                  {layerId === 'primary' && (
                    <ul className="divide-y divide-white/[0.06]">
                      {ws.primaryEvidence.map((pe, i) => (
                        <li key={pe.source} className="grid sm:grid-cols-2 gap-1 sm:gap-6 py-4 last:pb-0">
                          <span className="text-[15px] font-medium leading-snug text-white/90">{pe.source}</span>
                          {PRIMARY_ESTABLISHES[i] && (
                            <span className="text-[14px] leading-snug text-white/60">
                              <span className="text-white/55">Would establish: </span>
                              {PRIMARY_ESTABLISHES[i]}
                            </span>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}

                  {layerId === 'secondary' && (
                    <ul className="divide-y divide-white/[0.06]">
                      {ws.secondaryEvidence.map((se) => (
                        <li key={se.source} className="grid sm:grid-cols-2 gap-1 sm:gap-6 py-4 last:pb-0">
                          <span className="text-[15px] font-medium leading-snug text-white/90">{se.source}</span>
                          <span className="text-[14px] leading-snug text-white/60">{se.datasetType}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {layerId === 'findings' && (
                    <ul className="divide-y divide-white/[0.06]">
                      {FINDINGS_EXAMPLE.map((f) => (
                        <li key={f.trend} className="grid sm:grid-cols-[1fr_1fr_5.5rem] gap-1 sm:gap-6 py-4 last:pb-0">
                          <span className="text-[15px] font-medium leading-snug text-white/90">{f.trend}</span>
                          <span className="text-[14px] leading-snug text-white/60">{f.meaning}</span>
                          <span className={`text-[13px] sm:text-right ${RISK_TEXT[f.risk]}`}>
                            <span className="text-white/55 sm:hidden">Risk: </span>
                            {f.risk}
                            <span className="sr-only"> risk</span>
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {layerId === 'decision' && (
                    <ol className="divide-y divide-white/[0.06]">
                      {DECISION_EXAMPLE.map((d) => (
                        <li key={d.action} className="grid sm:grid-cols-[7rem_1fr] gap-1 sm:gap-6 py-4 last:pb-0">
                          <span className="text-[13px] font-medium text-emerald-300">{d.priority}</span>
                          <span>
                            <span className="block text-[15px] leading-snug text-white/90">{d.action}</span>
                            <span className="mt-1 block text-[13px] text-white/50">Rests on: {d.basis}</span>
                          </span>
                        </li>
                      ))}
                    </ol>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      <section className="mc-section" aria-label="Next steps">
        <div className="mc-container space-y-10 md:space-y-14">
          <motion.div {...reveal}>
            <ContextualCTA
              title="Tell us the decision your research has to inform"
              body="Name the portfolio, market or programme in question and we will scope the primary and secondary work around it."
              primaryLabel="Commission research"
              onPrimary={onOpenIntake}
            />
          </motion.div>
          <RelatedLinks
            title="Pairs with"
            items={[
              { label: 'Business Consulting', desc: 'Turn field evidence into a strategy and a plan.', to: 'consulting', tone: 'teal' },
              { label: 'AI Enterprise Solutions', desc: 'Move from periodic studies to ongoing monitoring.', to: 'ai-solutions', tone: 'emerald' },
              { label: 'Market localisation', desc: 'Carry findings into country-specific execution.', to: 'localization', tone: 'sky' },
              { label: 'Senior expertise', desc: 'Pharmaceutical and healthcare consulting depth.', to: 'senior-expertise', tone: 'indigo' }
            ]}
          />
        </div>
      </section>
    </MotionConfig>
  );
};
