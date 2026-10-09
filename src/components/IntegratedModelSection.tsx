import React, { useState } from 'react';
import { AnimatePresence, MotionConfig, motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { NavTab } from '../types';
import { BTN_PRIMARY, BTN_SECONDARY, EASE, reveal } from './ui/primitives';
import { ArtCaption, HeroCopy, HeroSection, Illumination, Scrim } from './ui/Hero';
import { ArtImage } from './ui/ArtImage';
import { scrollToId } from './PillarParts';

interface IntegratedModelSectionProps {
  setActiveTab: (tab: NavTab) => void;
  /** Opens the enquiry form. App passes it; optional so the section also works without it. */
  onOpenIntake?: () => void;
}

/* ------------------------------------------------------------------ */
/* The four capabilities, in the order work usually flows (corporate profile s.4 and s.7.3) */

type Accent = 'sky' | 'teal' | 'amber' | 'emerald';

const ACCENT: Record<Accent, { text: string; dot: string; line: string; ring: string; hex: string }> = {
  sky: { text: 'text-sky-300', dot: 'bg-sky-400', line: 'bg-sky-400/50', ring: 'border-sky-400/60', hex: '#38BDF8' },
  teal: { text: 'text-teal-300', dot: 'bg-teal-400', line: 'bg-teal-400/50', ring: 'border-teal-400/60', hex: '#2DD4BF' },
  amber: { text: 'text-amber-300', dot: 'bg-amber-400', line: 'bg-amber-400/50', ring: 'border-amber-400/60', hex: '#FBBF24' },
  emerald: { text: 'text-emerald-300', dot: 'bg-emerald-400', line: 'bg-emerald-400/50', ring: 'border-emerald-400/60', hex: '#34D399' }
};

const CAPS: { short: string; name: string; question: string; role: string; accent: Accent; tab: NavTab }[] = [
  { short: 'Market Research', name: 'Market Research & Intelligence', question: 'What is happening?', role: 'Supplies the evidence', accent: 'sky', tab: 'market-research' },
  { short: 'Business Consulting', name: 'Business Consulting', question: 'What should we do?', role: 'Sets the direction', accent: 'teal', tab: 'consulting' },
  { short: 'AI Training', name: 'AI Training & Digital Literacy', question: 'Can our people use AI well?', role: 'Builds the capability', accent: 'amber', tab: 'ai-training' },
  { short: 'AI Solutions', name: 'AI Enterprise Solutions', question: 'How do we build it into daily work?', role: 'Carries it into systems', accent: 'emerald', tab: 'ai-solutions' }
];

/*
 * Hand-offs between capabilities. "What you get" restates deliverables from the corporate profile (s.4);
 * each scenario is an invented illustration and is labelled as one wherever it is shown.
 */
const HANDOFFS: {
  id: string;
  from: number;
  to: number;
  both?: boolean;
  edge: string;
  short: string;
  summary: string;
  description: string;
  deliverable: string;
  scenario: string;
  /** Desktop position of the edge label on the diagram */
  place: string;
}[] = [
  {
    id: 'research-consulting',
    from: 0,
    to: 1,
    edge: 'Evidence',
    short: 'Research → Consulting',
    summary: 'Strategy starts from evidence',
    description:
      'Recommendations are built on what the research finds in your market (buyers, competitors, prices, regulation) rather than on a generic template.',
    deliverable: 'A strategy or entry plan grounded in primary and secondary research.',
    scenario:
      'Interviews with clinicians in two markets show that slow diagnosis, not price, is holding back uptake. The consulting team builds the launch sequence and partner choices around that finding.',
    place: 'md:left-[25%] md:top-[6rem]'
  },
  {
    id: 'consulting-training',
    from: 1,
    to: 2,
    edge: 'Capability',
    short: 'Consulting → Training',
    summary: 'People ready for the new way of working',
    description:
      'A new operating model only works if teams can run it. Training is designed around the roles and processes the strategy defines.',
    deliverable: 'Function-specific training and a group of internal AI champions.',
    scenario:
      'Consulting redesigns sales territories; training then shows the field team how to use approved AI tools to prepare account briefings for the new routes.',
    place: 'md:left-[50%] md:top-[6rem]'
  },
  {
    id: 'consulting-solutions',
    from: 1,
    to: 3,
    edge: 'Systems',
    short: 'Consulting → Solutions',
    summary: 'Recommendations carried into systems',
    description:
      'Where a recommendation depends on a repeatable process, we design and build the AI tool, dashboard or automation that runs it, connected to the systems you already use.',
    deliverable: 'A working AI solution in your environment, with documentation and a support plan.',
    scenario:
      'Consulting agrees how regulatory updates should be tracked across several markets; the solutions team builds a tool that watches published guidance and flags changes for human review.',
    place: 'md:left-[62.5%] md:top-[2.0625rem]'
  },
  {
    id: 'training-solutions',
    from: 2,
    to: 3,
    both: true,
    edge: 'Adoption',
    short: 'Training ↔ Solutions',
    summary: 'Tools that people actually use',
    description:
      'Training is what makes adoption stick. We train the people who will operate each solution, and feed what they learn back into the tool.',
    deliverable: 'Teams trained on the tools they run, with clear points of human review.',
    scenario:
      'A literature-screening tool goes live for a pharmacovigilance team; safety officers are trained to check its output and to know when to override it.',
    place: 'md:left-[75%] md:top-[6rem]'
  }
];

/* Diagram geometry. Desktop: x in % of the width, y in px (spine at 96px). Phone: px, rows 88px tall. */
const H_PATHS: Record<string, string> = {
  'research-consulting': 'M12.5 96 H37.5',
  'consulting-training': 'M37.5 96 H62.5',
  'consulting-solutions': 'M37.5 96 C37.5 12 87.5 12 87.5 96',
  'training-solutions': 'M62.5 96 H87.5'
};
const V_PATHS: Record<string, string> = {
  'research-consulting': 'M44 44 V132',
  'consulting-training': 'M44 132 V220',
  'consulting-solutions': 'M44 132 C6 132 6 308 44 308',
  'training-solutions': 'M44 220 V308'
};
const H_X = [12.5, 37.5, 62.5, 87.5];
const V_Y = [44, 132, 220, 308];

/* The band's top edge rises out of the canvas; a light floor keeps the caption legible */
const BAND_FADE =
  'linear-gradient(180deg, #050505 0%, rgba(5,5,5,0.72) 6%, rgba(5,5,5,0.2) 14%, rgba(5,5,5,0) 22%), linear-gradient(0deg, rgba(5,5,5,0.6) 0%, rgba(5,5,5,0) 16%)';

export const IntegratedModelSection: React.FC<IntegratedModelSectionProps> = ({ setActiveTab, onOpenIntake }) => {
  const [selected, setSelected] = useState<string>(HANDOFFS[0].id);
  const active = HANDOFFS.find((h) => h.id === selected) ?? HANDOFFS[0];
  const lit = new Set([active.from, active.to]);

  const onTabKey = (e: React.KeyboardEvent) => {
    const i = HANDOFFS.findIndex((h) => h.id === selected);
    const last = HANDOFFS.length - 1;
    const next =
      e.key === 'ArrowRight' || e.key === 'ArrowDown' ? (i === last ? 0 : i + 1)
      : e.key === 'ArrowLeft' || e.key === 'ArrowUp' ? (i === 0 ? last : i - 1)
      : e.key === 'Home' ? 0
      : e.key === 'End' ? last
      : null;
    if (next === null) return;
    e.preventDefault();
    setSelected(HANDOFFS[next].id);
    document.getElementById(`handoff-tab-${HANDOFFS[next].id}`)?.focus();
  };

  const gradientId = (id: string, axis: 'h' | 'v') => `handoff-${axis}-${id}`;

  return (
    <MotionConfig reducedMotion="user">
      {/* ---------------------------------------------------------- */}
      {/* Opening: type first, then the strategy room as a full-bleed band */}
      <HeroSection id="model-compounding" labelledBy="model-title">
        <div className="mc-container relative z-10 pt-10 sm:pt-14 lg:pt-16 pb-10 sm:pb-12 lg:pb-14">
          <Illumination tone="indigo" strength={0.9} className="-left-48 -top-36 h-[36rem] w-[36rem]" />
          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-7">
            <HeroCopy
              id="model-title"
              className="lg:col-span-12 xl:col-span-8"
              meta={<span aria-hidden="true">Operating System · The MindCraft Model</span>}
              title={
                <>
                  <span className="sr-only">The MindCraft Model: </span>
                  Four capabilities, run as <em>one way of working</em>.
                </>
              }
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
              className="lg:col-span-8 xl:col-span-4 xl:self-end xl:pb-1.5"
            >
              <p className="mc-lead">
                Research shows what is happening. Consulting decides what to do. Training prepares your people, and AI solutions build the
                result into daily work. We deliver them as one engagement, not four separate suppliers.
              </p>
              <div className="mt-7 flex flex-col sm:flex-row sm:flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => (onOpenIntake ? onOpenIntake() : setActiveTab('engagement-builder'))}
                  className={`${BTN_PRIMARY} !px-6`}
                >
                  Discuss an engagement
                </button>
                <button type="button" onClick={() => scrollToId('model-handoffs')} className={BTN_SECONDARY}>
                  <span>See how they connect</span>
                  <ChevronDown className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </motion.div>

            {/* The four capabilities as a quiet chain: each label opens its page */}
            <ol aria-label="The four capabilities, in sequence" className="lg:col-span-12 xl:col-span-8 flex flex-col md:flex-row md:items-center md:mt-2">
              {CAPS.map((c, i) => {
                const last = i === CAPS.length - 1;
                return (
                  <li key={c.short} className={`relative flex items-center ${last ? '' : 'md:flex-1'}`}>
                    <button
                      type="button"
                      onClick={() => setActiveTab(c.tab)}
                      className="group mc-tap inline-flex items-center gap-2.5 text-[14px] font-medium text-white/75 hover:text-white transition-colors duration-150 whitespace-nowrap"
                    >
                      <span aria-hidden="true" className={`h-[7px] w-[7px] shrink-0 rounded-full ${ACCENT[c.accent].dot}`} />
                      {c.short}
                    </button>
                    {!last && (
                      <>
                        <span aria-hidden="true" className={`hidden md:block mx-3 lg:mx-4 h-px min-w-4 flex-1 ${ACCENT[c.accent].line}`} />
                        <span aria-hidden="true" className={`md:hidden absolute left-[3px] top-[27px] h-[34px] w-px ${ACCENT[c.accent].line}`} />
                      </>
                    )}
                  </li>
                );
              })}
            </ol>
          </div>
        </div>

        <figure className="relative w-full overflow-hidden aspect-[16/10] md:aspect-[21/9] lg:aspect-[2048/768] lg:max-h-[46rem]">
          <ArtImage
            name="model-strategy-hub"
            alt="Illustration of a strategy team working through maps and research together"
            priority
            sizes="100vw"
            position="object-[100%_50%] md:object-[65%_50%] lg:object-[50%_35%]"
          />
          <Scrim background={BAND_FADE} />
          <ArtCaption className="absolute bottom-3 right-4 sm:bottom-4 sm:right-6 lg:right-8">Illustration</ArtCaption>
        </figure>
      </HeroSection>

      {/* ---------------------------------------------------------- */}
      {/* How they compound: the capabilities as nodes, the hand-offs as the connections between them */}
      <section id="model-handoffs" className="mc-section scroll-mt-20" aria-labelledby="handoffs-title">
        <div className="mc-container">
          <motion.div {...reveal} className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-12 lg:items-end">
            <h2 id="handoffs-title" className="mc-h2 lg:col-span-6">
              Each capability hands <em>something real</em> to the next
            </h2>
            <p className="mc-lead lg:col-span-5 lg:col-start-8">
              Clients often use two or more together. Choose a connection to see what passes across it.
            </p>
          </motion.div>

          <motion.div {...reveal} className="relative mt-12 md:mt-16">
            {/* Lines: horizontal from md, vertical on phones. Decorative; the tabs below carry the meaning. */}
            <svg
              aria-hidden="true"
              className="hidden md:block absolute inset-x-0 top-0 h-[7.5rem] w-full overflow-visible"
              viewBox="0 0 100 120"
              preserveAspectRatio="none"
            >
              <defs>
                {HANDOFFS.map((h) => (
                  <linearGradient key={h.id} id={gradientId(h.id, 'h')} gradientUnits="userSpaceOnUse" x1={H_X[h.from]} y1="0" x2={H_X[h.to]} y2="0">
                    <stop offset="0" stopColor={ACCENT[CAPS[h.from].accent].hex} />
                    <stop offset="1" stopColor={ACCENT[CAPS[h.to].accent].hex} />
                  </linearGradient>
                ))}
              </defs>
              {HANDOFFS.map((h) => (
                <g key={h.id}>
                  <path d={H_PATHS[h.id]} fill="none" stroke="rgba(255,255,255,0.16)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
                  <path
                    d={H_PATHS[h.id]}
                    fill="none"
                    stroke={`url(#${gradientId(h.id, 'h')})`}
                    strokeWidth="1.75"
                    vectorEffect="non-scaling-stroke"
                    style={{ opacity: selected === h.id ? 1 : 0, transition: 'opacity 220ms cubic-bezier(0.16,1,0.3,1)' }}
                  />
                </g>
              ))}
            </svg>
            <svg aria-hidden="true" className="md:hidden absolute left-0 top-0 h-[22rem] w-14" viewBox="0 0 56 352">
              <defs>
                {HANDOFFS.map((h) => (
                  <linearGradient key={h.id} id={gradientId(h.id, 'v')} gradientUnits="userSpaceOnUse" x1="0" y1={V_Y[h.from]} x2="0" y2={V_Y[h.to]}>
                    <stop offset="0" stopColor={ACCENT[CAPS[h.from].accent].hex} />
                    <stop offset="1" stopColor={ACCENT[CAPS[h.to].accent].hex} />
                  </linearGradient>
                ))}
              </defs>
              {HANDOFFS.map((h) => (
                <g key={h.id}>
                  <path d={V_PATHS[h.id]} fill="none" stroke="rgba(255,255,255,0.16)" strokeWidth="1" />
                  <path
                    d={V_PATHS[h.id]}
                    fill="none"
                    stroke={`url(#${gradientId(h.id, 'v')})`}
                    strokeWidth="1.75"
                    style={{ opacity: selected === h.id ? 1 : 0, transition: 'opacity 220ms cubic-bezier(0.16,1,0.3,1)' }}
                  />
                </g>
              ))}
            </svg>

            {/* Nodes */}
            <ol className="relative grid grid-cols-1 md:grid-cols-4 md:pt-[7.5rem]">
              {CAPS.map((c, i) => {
                const on = lit.has(i);
                return (
                  <li
                    key={c.short}
                    className="relative h-[5.5rem] md:h-auto flex flex-col justify-center md:justify-start md:items-center md:text-center pl-[4.5rem] md:pl-0 md:px-3 md:pt-6"
                  >
                    <span
                      aria-hidden="true"
                      className={`absolute left-[2.75rem] top-1/2 md:left-1/2 md:top-[-1.5rem] h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border transition-colors duration-200 ${
                        on ? `${ACCENT[c.accent].dot} border-transparent` : 'bg-[#050505] border-white/35'
                      }`}
                    />
                    <span className={`hidden md:block font-mono text-[11px] tabular-nums ${on ? ACCENT[c.accent].text : 'text-white/45'}`}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3
                      className={`font-heading text-[1.0625rem] md:mt-2 md:text-[1.125rem] lg:text-[1.3125rem] font-medium leading-tight tracking-[-0.01em] transition-colors duration-200 ${
                        on ? 'text-white' : 'text-white/70'
                      }`}
                    >
                      {c.name}
                    </h3>
                    <p className="mt-1 md:mt-2 text-[14px] leading-snug text-white/60">{c.question}</p>
                    <p className={`hidden md:block mt-3 text-[13px] ${on ? ACCENT[c.accent].text : 'text-white/50'}`}>{c.role}</p>
                  </li>
                );
              })}
            </ol>

            {/* Hand-offs: a list on phones, labels sitting on the connections from md */}
            <div
              role="tablist"
              aria-label="Hand-offs between capabilities"
              className="mt-6 grid grid-cols-1 gap-2 md:mt-0 md:block md:absolute md:inset-x-0 md:top-0 md:h-[7.5rem] md:pointer-events-none"
            >
              {HANDOFFS.map((h) => {
                const on = selected === h.id;
                const from = CAPS[h.from];
                const to = CAPS[h.to];
                return (
                  <button
                    key={h.id}
                    type="button"
                    role="tab"
                    id={`handoff-tab-${h.id}`}
                    aria-selected={on}
                    aria-controls="handoff-panel"
                    tabIndex={on ? 0 : -1}
                    onClick={() => setSelected(h.id)}
                    onKeyDown={onTabKey}
                    className={`mc-tap md:pointer-events-auto flex items-center justify-between gap-3 rounded-xl border px-4 text-left text-[14px] transition-colors duration-150 md:absolute md:-translate-x-1/2 md:-translate-y-1/2 md:justify-center md:rounded-full md:bg-[#050505] md:px-4 md:text-[13px] whitespace-nowrap ${h.place} ${
                      on ? 'border-white/30 bg-[#0d0f17] text-white' : 'border-white/[0.1] text-white/65 hover:text-white hover:border-white/25'
                    }`}
                  >
                    <span className="md:hidden flex items-center gap-2">
                      <span aria-hidden="true" className={`h-1.5 w-1.5 rounded-full ${ACCENT[from.accent].dot}`} />
                      <span aria-hidden="true" className={`h-1.5 w-1.5 rounded-full ${ACCENT[to.accent].dot}`} />
                      <span className="ml-1">{h.short}</span>
                    </span>
                    <span className="text-white/50 md:text-inherit">{h.edge}</span>
                    <span className="sr-only hidden md:inline">
                      {`: ${from.name} ${h.both ? 'and' : 'to'} ${to.name}`}
                    </span>
                  </button>
                );
              })}
            </div>
          </motion.div>

          {/* What passes across the selected hand-off */}
          <div id="handoff-panel" role="tabpanel" aria-labelledby={`handoff-tab-${active.id}`} className="mt-10 md:mt-14 border-t border-white/[0.1] pt-8 md:pt-10">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2, ease: EASE }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12"
              >
                <div className="lg:col-span-6">
                  <p className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[13px] text-white/60">
                    <span aria-hidden="true" className={`h-1.5 w-1.5 rounded-full ${ACCENT[CAPS[active.from].accent].dot}`} />
                    {CAPS[active.from].name}
                    <span aria-hidden="true" className="text-white/35">{active.both ? '↔' : '→'}</span>
                    <span className="sr-only">{active.both ? 'and' : 'to'}</span>
                    <span aria-hidden="true" className={`h-1.5 w-1.5 rounded-full ${ACCENT[CAPS[active.to].accent].dot}`} />
                    {CAPS[active.to].name}
                  </p>
                  <h3 className="mt-4 font-heading text-[1.5rem] sm:text-[1.875rem] font-medium leading-tight tracking-[-0.02em] text-white">
                    {active.summary}
                  </h3>
                  <p className="mt-4 max-w-[36em] text-[15px] leading-relaxed text-white/70">{active.description}</p>
                  <p className="mt-6 text-[13px] font-medium text-white/55">What you get</p>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-white/85">{active.deliverable}</p>
                </div>
                <figure className="lg:col-span-5 lg:col-start-8 self-start rounded-2xl bg-[#0a0a0a] border border-white/[0.08] p-5 sm:p-6">
                  <figcaption className="text-[13px] font-medium text-amber-300">Illustrative scenario, not a client case</figcaption>
                  <p className="mt-3 text-[15px] leading-relaxed text-white/75">{active.scenario}</p>
                </figure>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>
    </MotionConfig>
  );
};
