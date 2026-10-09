import React, { useState } from 'react';
import { AnimatePresence, MotionConfig, motion } from 'motion/react';
import { SERVICE_PILLARS } from '../data/mindcraftData';
import { NavTab } from '../types';
import { BTN_PRIMARY, BTN_SECONDARY, ContextualCTA, EASE, RelatedLinks, reveal } from './ui/primitives';
import { scrollToId } from './PillarParts';
import { ArtImage } from './ui/ArtImage';
import { HeroCopy, HeroSection, Illumination, Scrim } from './ui/Hero';
import { ChevronDown } from 'lucide-react';

interface BusinessConsultingPillarProps {
  onOpenIntake: () => void;
  setActiveTab: (tab: NavTab) => void;
}

const PILLAR_TABS: Record<string, NavTab> = {
  'Business Consulting': 'consulting',
  'Market Research': 'market-research',
  'AI Training': 'ai-training',
  'AI Enterprise Solutions': 'ai-solutions'
};

/*
 * AI-readiness diagnostic. The questions describe what a digital-maturity / AI-readiness assessment covers
 * (corporate profile s.4, Pillar 1 and Pillar 3). "How we help" maps each dimension to a documented service;
 * no scores or benchmarks are shown because none have been published.
 */
const DIMENSIONS: { name: string; ask: string; stall: string; help: string }[] = [
  {
    name: 'Strategy and vision',
    ask: 'Is AI adoption tied to clear business goals such as growth, margin or market expansion?',
    stall: 'Isolated experiments with no executive sponsor and no agreed measure of value.',
    help: 'Enterprise AI strategy and use-case prioritisation aligned to business value and budget.'
  },
  {
    name: 'Leadership and culture',
    ask: 'Do leaders and managers understand what AI can and cannot do, and lead the change?',
    stall: 'Unmanaged expectations, or resistance rooted in uncertainty about roles.',
    help: 'Executive AI briefings, change-readiness diagnostics and stakeholder engagement planning.'
  },
  {
    name: 'Data readiness',
    ask: 'Is the data you would rely on accessible, organised and protected?',
    stall: 'Information spread across spreadsheets, separate systems and unindexed documents.',
    help: 'Data strategy, governance and infrastructure advisory ahead of any AI deployment.'
  },
  {
    name: 'Technology and infrastructure',
    ask: 'Can your systems support AI tools securely, and integrate with CRM and ERP?',
    stall: 'Staff using public AI tools with sensitive information because no approved option exists.',
    help: 'Technology and vendor selection advice for AI, CRM, ERP and data platforms.'
  },
  {
    name: 'Workforce capability',
    ask: 'Have teams been trained to use AI in their own functions, and to check what it produces?',
    stall: 'Generic use that produces inconsistent results and fades after the first weeks.',
    help: 'Function-specific AI training and train-the-trainer programmes, delivered with our AI Training team.'
  },
  {
    name: 'Process and SOP integration',
    ask: 'Are AI-assisted steps written into standard operating procedures, with human review where it matters?',
    stall: 'AI outputs treated as informal notes rather than accountable work products.',
    help: 'Process mapping and SOP design that build in clear human sign-off.'
  },
  {
    name: 'Governance and ethics',
    ask: 'Are privacy, confidentiality and responsible-use rules defined and followed?',
    stall: 'No written AI policy, which is a particular risk in regulated sectors.',
    help: 'Responsible-use policies and guidelines, especially for pharmaceuticals, healthcare and banking.'
  },
  {
    name: 'Use-case prioritisation',
    ask: 'Are potential uses ranked by business value and feasibility, with clear success measures?',
    stall: 'Starting with complex projects before simpler, high-value ones have built momentum.',
    help: 'A prioritised roadmap with owners, timelines and investment estimates.'
  }
];

/* The image's left edge (data screen) hands over to the canvas; the team and the sunset stay open */
const BOARDROOM_FADE =
  'linear-gradient(90deg, #050505 0%, rgba(5,5,5,0.86) 14%, rgba(5,5,5,0.3) 36%, rgba(5,5,5,0) 58%), linear-gradient(0deg, #050505 0%, rgba(5,5,5,0) 30%), linear-gradient(180deg, rgba(5,5,5,0.55) 0%, rgba(5,5,5,0) 22%)';
const BOARDROOM_FADE_MOBILE = 'linear-gradient(180deg, #050505 0%, rgba(5,5,5,0) 30%, rgba(5,5,5,0) 70%, #050505 100%)';

export const BusinessConsultingPillar: React.FC<BusinessConsultingPillarProps> = ({ onOpenIntake, setActiveTab }) => {
  const pillar = SERVICE_PILLARS.find((p) => p.id === 'consulting') || SERVICE_PILLARS[0];
  const [active, setActive] = useState(0);
  const dim = DIMENSIONS[active];

  // Roving focus: arrows move along the list in either orientation, Home/End jump to the ends
  const onTabKey = (e: React.KeyboardEvent) => {
    const last = DIMENSIONS.length - 1;
    const next =
      e.key === 'ArrowDown' || e.key === 'ArrowRight' ? (active === last ? 0 : active + 1)
      : e.key === 'ArrowUp' || e.key === 'ArrowLeft' ? (active === 0 ? last : active - 1)
      : e.key === 'Home' ? 0
      : e.key === 'End' ? last
      : null;
    if (next === null) return;
    e.preventDefault();
    setActive(next);
    document.getElementById(`dim-tab-${next}`)?.focus();
  };

  const related = [
    ...(pillar.intersections ?? []).map((x) => ({
      label: x.withPillar,
      desc: x.integratedValue.split(':')[0],
      onClick: () => PILLAR_TABS[x.withPillar] && setActiveTab(PILLAR_TABS[x.withPillar]),
      tone: 'teal' as const
    })),
    { label: 'Localization', desc: 'From global strategy to local result', onClick: () => setActiveTab('localization'), tone: 'emerald' as const },
    { label: 'Senior expertise', desc: 'Pharmaceutical and healthcare consulting depth', onClick: () => setActiveTab('senior-expertise') }
  ];

  return (
    <MotionConfig reducedMotion="user">
      {/* ---------------------------------------------------------- */}
      {/* Opening: copy on the canvas, the strategy room entering from the right edge */}
      <HeroSection id="consulting-section" labelledBy="consulting-title" className="lg:min-h-[min(46rem,calc(100dvh-5rem))]">
        <div className="mc-container relative z-10 pt-10 sm:pt-14 lg:pt-20 lg:pb-24">
          <Illumination tone="teal" strength={1.1} className="-left-40 -top-24 h-[34rem] w-[34rem]" />
          <HeroCopy
            id="consulting-title"
            className="relative max-w-[36rem] lg:max-w-[min(36rem,42%)]"
            meta={<span aria-hidden="true">Business Consulting</span>}
            title={
              <>
                <span className="sr-only">Business Consulting: </span>
                Clear decisions, and a plan people <em>can act on</em>.
              </>
            }
            lead={pillar.description}
            note={
              <>
                The question we help answer: <span className="text-teal-300">{pillar.question}</span>
              </>
            }
            actions={
              <>
                <button type="button" onClick={onOpenIntake} className={`${BTN_PRIMARY} !px-6`}>
                  Scope a consulting engagement
                </button>
                <button type="button" onClick={() => scrollToId('consulting-capabilities')} className={`${BTN_SECONDARY} bg-[#050505]/60 backdrop-blur-sm`}>
                  <span>See the five capabilities</span>
                  <ChevronDown className="h-4 w-4" aria-hidden="true" />
                </button>
              </>
            }
          />
        </div>

        <div
          aria-hidden="true"
          className="relative mt-10 h-[clamp(15rem,62vw,26rem)] lg:mt-0 lg:absolute lg:inset-y-0 lg:right-0 lg:h-auto lg:w-[56%] overflow-hidden"
        >
          <ArtImage
            name="consulting-boardroom"
            alt=""
            priority
            sizes="(min-width: 1024px) 56vw, 100vw"
            position="object-[60%_50%] lg:object-[64%_50%]"
          />
          <Scrim background={BOARDROOM_FADE_MOBILE} className="lg:hidden" />
          <Scrim background={BOARDROOM_FADE} className="hidden lg:block" />
        </div>
      </HeroSection>

      {/* ---------------------------------------------------------- */}
      {/* Capabilities as an editorial index: the left column frames, the right column lists */}
      <section className="mc-section" id="consulting-capabilities" aria-labelledby="consulting-caps-title">
        <div className="mc-container grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <motion.div {...reveal} className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start">
            <h2 id="consulting-caps-title" className="mc-h2">
              Five capabilities, <em>one advisory team</em>
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-white/65">
              From the strategy itself to the structures, processes and rules that carry it out. Use one, or combine them.
            </p>
            <div className="mt-8 border-t border-white/[0.1] pt-6">
              <h3 className="text-[13px] font-medium text-white/55">What you receive</h3>
              <ul className="mt-3 space-y-3">
                {pillar.deliverables.map((d) => (
                  <li key={d} className="flex gap-3 text-sm leading-snug text-white/80">
                    <span aria-hidden="true" className="mt-[0.45rem] h-1 w-3 shrink-0 rounded-full bg-teal-400" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <ol className="lg:col-span-8 border-t border-white/[0.1]">
            {pillar.capabilities.map((cap, i) => (
              <motion.li
                key={cap.title}
                {...reveal}
                transition={{ ...reveal.transition, delay: Math.min(i, 3) * 0.04 }}
                className="group grid grid-cols-[2.75rem_1fr] sm:grid-cols-[4.5rem_1fr] gap-x-4 border-b border-white/[0.1] py-7 sm:py-9"
              >
                <span aria-hidden="true" className="font-heading text-[1.75rem] sm:text-[2.5rem] font-medium leading-none tracking-[-0.03em] text-white/20 tabular-nums transition-colors duration-300 group-hover:text-teal-400/80">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="min-w-0">
                  <h3 className="font-heading text-[1.25rem] sm:text-[1.5rem] font-medium leading-tight tracking-[-0.015em] text-white">{cap.title}</h3>
                  <p className="mt-2 max-w-[38em] text-[15px] leading-relaxed text-white/70">{cap.description}</p>
                  <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
                    {cap.bulletPoints.map((b) => (
                      <li key={b} className="flex gap-2.5 text-[13px] leading-snug text-white/60">
                        <span aria-hidden="true" className="mt-[0.4rem] h-1 w-1 shrink-0 rounded-full bg-teal-400/80" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/* Diagnostic: a working tool, so it sits on its own surface */}
      <section className="mc-section mc-surface relative overflow-hidden" aria-labelledby="diagnostic-title">
        <Illumination tone="teal" strength={0.7} className="right-[-10rem] top-[-8rem] h-[30rem] w-[30rem]" />
        <div className="mc-container relative">
          <motion.div {...reveal} className="max-w-2xl">
            <p className="mc-meta">8 dimensions</p>
            <h2 id="diagnostic-title" className="mc-h2 mt-3">How we assess AI readiness</h2>
            <p className="mc-lead mt-4">
              Before recommending any AI investment, we look at eight dimensions of the organisation. Choose one to see what we ask, where organisations tend to stall and how we help.
            </p>
          </motion.div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-[17rem_1fr] lg:grid-cols-[20rem_1fr] gap-6 lg:gap-12">
            <div role="tablist" aria-label="Readiness dimensions" aria-orientation="vertical" className="flex md:flex-col gap-1 overflow-x-auto md:overflow-visible -mx-4 px-4 md:mx-0 md:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {DIMENSIONS.map((d, i) => {
                const selected = active === i;
                return (
                  <button
                    key={d.name}
                    type="button"
                    role="tab"
                    id={`dim-tab-${i}`}
                    aria-selected={selected}
                    aria-controls="dim-panel"
                    tabIndex={selected ? 0 : -1}
                    onClick={() => setActive(i)}
                    onKeyDown={onTabKey}
                    className={`mc-tap shrink-0 md:w-full flex items-center gap-3 rounded-lg px-3 text-left text-sm transition-colors duration-150 ${
                      selected ? 'bg-[#0d0f17] text-white' : 'text-white/60 hover:text-white hover:bg-white/[0.03]'
                    }`}
                  >
                    <span className={`tabular-nums font-mono text-[11px] ${selected ? 'text-teal-300' : 'text-white/35'}`}>{String(i + 1).padStart(2, '0')}</span>
                    <span className="whitespace-nowrap md:whitespace-normal">{d.name}</span>
                    {selected && <span aria-hidden="true" className="ml-auto hidden md:block h-px w-6 bg-teal-400" />}
                  </button>
                );
              })}
            </div>

            <div id="dim-panel" role="tabpanel" aria-labelledby={`dim-tab-${active}`} className="min-w-0">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2, ease: EASE }}
                >
                  <h3 className="font-heading text-[1.5rem] sm:text-[1.875rem] font-medium leading-tight tracking-[-0.02em] text-white">{dim.name}</h3>
                  <dl className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.08]">
                    {[
                      { term: 'What we ask', text: dim.ask, accent: 'text-teal-300' },
                      { term: 'Where it often stalls', text: dim.stall, accent: 'text-amber-300' },
                      { term: 'How we help', text: dim.help, accent: 'text-emerald-300' }
                    ].map((row) => (
                      <div key={row.term} className="bg-[#0a0a0a] p-5 sm:p-6">
                        <dt className={`text-[13px] font-medium ${row.accent}`}>{row.term}</dt>
                        <dd className="mt-2 text-[15px] leading-relaxed text-white/80">{row.text}</dd>
                      </div>
                    ))}
                  </dl>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      <section className="mc-section" aria-label="Next steps">
        <div className="mc-container space-y-10 md:space-y-14">
          <motion.div {...reveal}>
            <ContextualCTA
              title="Bring us the decision you need to make"
              body="We scope the strategy, roadmap or process work around it, on its own or alongside research, training or AI solutions."
              primaryLabel="Scope a consulting engagement"
              onPrimary={onOpenIntake}
            />
          </motion.div>
          <RelatedLinks title="Pairs with and related" items={related} />
        </div>
      </section>
    </MotionConfig>
  );
};
