import React, { useState } from 'react';
import { AnimatePresence, MotionConfig, motion } from 'motion/react';
import { ArrowRight, Check } from 'lucide-react';
import { UNIVERSAL_INDUSTRIES, AFRICA_REGIONS_DATA } from '../data/industryAndAfricaData';
import { SERVICE_PILLARS } from '../data/mindcraftData';
import { NavTab } from '../types';
import { ContextualCTA, EASE, reveal } from './ui/primitives';
import { HeroCopy, HeroSection } from './ui/Hero';

interface Props {
  onNavigate: (tab: NavTab) => void;
  onSelectIndustry?: (industryId: string) => void;
  /** Heading level for the page title. Defaults to 2 (this view follows the model + method on the operating-model page). */
  headingLevel?: 1 | 2;
}

type RingId = 'center' | 'capabilities' | 'industries' | 'regions' | 'outcomes';

/* What the work is for, stated as aims rather than promised results (no figures have been published) */
const OUTCOMES = [
  'Clearer decisions on market entry and market access',
  'Stronger commercial positioning and better-chosen channel partners',
  'AI tools that teams use safely and consistently in daily work',
  'Routine work such as claims, tenders and documents automated, with human review'
];

const TOTAL_COUNTRIES = AFRICA_REGIONS_DATA.reduce((n, r) => n + r.countries.length, 0);
const CORE_INDUSTRIES = UNIVERSAL_INDUSTRIES.filter((i) => i.category === 'core-lifesciences');
const OTHER_INDUSTRIES = UNIVERSAL_INDUSTRIES.filter((i) => i.category !== 'core-lifesciences');

/* The four capabilities in the order work usually flows, with their site accents and pages */
const PILLAR_ORDER = ['market-research', 'consulting', 'ai-training', 'ai-solutions'];
const PILLAR_META: Record<string, { dot: string; text: string; hex: string; tab: NavTab }> = {
  'market-research': { dot: 'bg-sky-400', text: 'text-sky-300', hex: '#38BDF8', tab: 'market-research' },
  consulting: { dot: 'bg-teal-400', text: 'text-teal-300', hex: '#2DD4BF', tab: 'consulting' },
  'ai-training': { dot: 'bg-amber-400', text: 'text-amber-300', hex: '#FBBF24', tab: 'ai-training' },
  'ai-solutions': { dot: 'bg-emerald-400', text: 'text-emerald-300', hex: '#34D399', tab: 'ai-solutions' }
};
const PILLARS = PILLAR_ORDER.map((id) => SERVICE_PILLARS.find((p) => p.id === id)).filter(
  (p): p is (typeof SERVICE_PILLARS)[number] => Boolean(p)
);

/* ------------------------------------------------------------------ */
/* Geometry shared by the hero drawing and the interactive diagram */

const polar = (c: number, r: number, deg: number) => {
  const a = ((deg - 90) * Math.PI) / 180;
  return { x: c + r * Math.cos(a), y: c + r * Math.sin(a) };
};
const arc = (c: number, r: number, from: number, to: number) => {
  const s = polar(c, r, from);
  const e = polar(c, r, to);
  return `M${s.x.toFixed(2)} ${s.y.toFixed(2)} A${r} ${r} 0 ${to - from > 180 ? 1 : 0} 1 ${e.x.toFixed(2)} ${e.y.toFixed(2)}`;
};

/** Marks that make each ring mean something: 4 capabilities, one dot per industry, one arc per region. */
const RingMarks: React.FC<{ c: number; r: Record<'capabilities' | 'industries' | 'regions', number>; scale: number; strength?: number }> = ({
  c,
  r,
  scale,
  strength = 1
}) => (
  <g>
    {PILLARS.map((p, i) => {
      const pt = polar(c, r.capabilities, 45 + i * 90);
      return <circle key={p.id} cx={pt.x} cy={pt.y} r={3.6 * scale} fill={PILLAR_META[p.id].hex} opacity={0.85 * strength} />;
    })}
    {UNIVERSAL_INDUSTRIES.map((ind, i) => {
      const pt = polar(c, r.industries, (360 / UNIVERSAL_INDUSTRIES.length) * i);
      const core = ind.category === 'core-lifesciences';
      return <circle key={ind.id} cx={pt.x} cy={pt.y} r={(core ? 2.4 : 1.8) * scale} fill={core ? '#818CF8' : '#FFFFFF'} opacity={(core ? 0.8 : 0.32) * strength} />;
    })}
    {AFRICA_REGIONS_DATA.map((reg, i) => {
      const span = 360 / AFRICA_REGIONS_DATA.length;
      return (
        <path
          key={reg.name}
          d={arc(c, r.regions, i * span + 6, (i + 1) * span - 6)}
          fill="none"
          stroke="#FFFFFF"
          strokeOpacity={0.3 * strength}
          strokeWidth={1.6 * scale}
          strokeLinecap="round"
        />
      );
    })}
  </g>
);

/** Hero motif: nucleus and four rings at low contrast, cropped by the right edge. */
const RingsMotif: React.FC<{ className?: string }> = ({ className = '' }) => {
  const c = 400;
  const r = { capabilities: 150, industries: 236, regions: 312, outcomes: 388 };
  const labels: [string, number][] = [
    ['Capabilities', r.capabilities],
    ['Industries', r.industries],
    ['Regions', r.regions],
    ['Outcomes', r.outcomes]
  ];
  return (
    <svg aria-hidden="true" viewBox="0 0 800 800" className={`pointer-events-none absolute ${className}`}>
      <circle cx={c} cy={c} r={r.outcomes} fill="none" stroke="#FFFFFF" strokeOpacity="0.1" strokeDasharray="3 9" />
      <circle cx={c} cy={c} r={r.regions} fill="none" stroke="#FFFFFF" strokeOpacity="0.06" />
      <circle cx={c} cy={c} r={r.industries} fill="none" stroke="#FFFFFF" strokeOpacity="0.09" />
      <circle cx={c} cy={c} r={r.capabilities} fill="none" stroke="#818CF8" strokeOpacity="0.22" />
      <RingMarks c={c} r={r} scale={1.15} strength={0.75} />
      <circle cx={c} cy={c} r="54" fill="rgba(99,102,241,0.12)" stroke="#818CF8" strokeOpacity="0.45" />
      <circle cx={c} cy={c} r="4" fill="#818CF8" fillOpacity="0.8" />
      {labels.map(([label, radius]) => (
        <text
          key={label}
          x={c}
          y={c - radius - 9}
          textAnchor="middle"
          fontSize="11"
          fontFamily="var(--font-mono)"
          fill="#FFFFFF"
          fillOpacity="0.32"
          style={{ textTransform: 'uppercase', letterSpacing: '0.14em' }}
        >
          {label}
        </text>
      ))}
    </svg>
  );
};

/* ------------------------------------------------------------------ */

export const MindCraftUniverseOrbital: React.FC<Props> = ({ onNavigate, onSelectIndustry, headingLevel = 2 }) => {
  const [activeRing, setActiveRing] = useState<RingId>('capabilities');
  const isPage = headingLevel === 1;
  const H = isPage ? 'h2' : 'h3';

  const ringsInfo: { id: RingId; label: string; name: string; desc: string; count: string }[] = [
    {
      id: 'center',
      label: 'Nucleus',
      name: 'MindCraft core',
      desc: 'One team, headquartered in Nairobi, bringing the four capabilities together.',
      count: '1'
    },
    {
      id: 'capabilities',
      label: 'Ring 1',
      name: 'Service pillars',
      desc: 'Market Research, Business Consulting, AI Training and AI Enterprise Solutions.',
      count: String(PILLARS.length)
    },
    {
      id: 'industries',
      label: 'Ring 2',
      name: 'Industries',
      desc: `${CORE_INDUSTRIES.length} core Life Sciences sectors and ${OTHER_INDUSTRIES.length} further industry verticals.`,
      count: String(UNIVERSAL_INDUSTRIES.length)
    },
    {
      id: 'regions',
      label: 'Ring 3',
      name: 'African regional clusters',
      desc: `East, West, Southern and North Africa: ${TOTAL_COUNTRIES} countries in all.`,
      count: String(AFRICA_REGIONS_DATA.length)
    },
    {
      id: 'outcomes',
      label: 'Ring 4',
      name: 'Outcomes',
      desc: 'What the work is for: better decisions, stronger commercial results and AI that is actually used.',
      count: String(OUTCOMES.length)
    }
  ];
  const active = ringsInfo.find((r) => r.id === activeRing) ?? ringsInfo[1];

  // Interactive diagram geometry (viewBox 400 x 400)
  const R = { capabilities: 78, industries: 118, regions: 156, outcomes: 190 };
  const rings: { id: RingId; r: number; dash?: string; label: string }[] = [
    { id: 'outcomes', r: R.outcomes, dash: '3 6', label: 'Outcomes' },
    { id: 'regions', r: R.regions, label: 'Regions' },
    { id: 'industries', r: R.industries, label: 'Industries' },
    { id: 'capabilities', r: R.capabilities, label: 'Pillars' }
  ];

  const onTabKey = (e: React.KeyboardEvent) => {
    const ids = ringsInfo.map((r) => r.id);
    const i = ids.indexOf(activeRing);
    const last = ids.length - 1;
    const next =
      e.key === 'ArrowDown' || e.key === 'ArrowRight' ? (i === last ? 0 : i + 1)
      : e.key === 'ArrowUp' || e.key === 'ArrowLeft' ? (i === 0 ? last : i - 1)
      : e.key === 'Home' ? 0
      : e.key === 'End' ? last
      : null;
    if (next === null) return;
    e.preventDefault();
    setActiveRing(ids[next]);
    document.getElementById(`orbital-tab-${ids[next]}`)?.focus();
  };

  /* ---------------------------------------------------------------- */
  const explorer = (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
      {/* Diagram: pointer shortcut to the layers; the list is the accessible control */}
      <div className="hidden sm:block lg:col-span-7 lg:order-2">
        <div className="lg:sticky lg:top-28">
          <svg viewBox="0 0 400 400" className="mx-auto w-full max-w-[34rem] h-auto" aria-hidden="true">
            {rings.map((ring) => {
              const on = activeRing === ring.id;
              return (
                <g key={ring.id} onClick={() => setActiveRing(ring.id)} className="cursor-pointer">
                  <circle
                    cx="200"
                    cy="200"
                    r={ring.r}
                    fill={on ? 'rgba(99,102,241,0.08)' : 'transparent'}
                    stroke={on ? '#818CF8' : 'rgba(255,255,255,0.16)'}
                    strokeWidth={on ? 1.5 : 1}
                    strokeDasharray={ring.dash}
                    style={{ transition: 'stroke 200ms, fill 200ms' }}
                  />
                  <text
                    x="200"
                    y={200 - ring.r + 15}
                    textAnchor="middle"
                    fontSize="11"
                    fontFamily="var(--font-mono)"
                    fill={on ? '#C7D2FE' : 'rgba(255,255,255,0.5)'}
                    style={{ textTransform: 'uppercase', letterSpacing: '0.12em' }}
                  >
                    {ring.label}
                  </text>
                </g>
              );
            })}
            <g className="pointer-events-none">
              <RingMarks c={200} r={R} scale={0.85} />
            </g>
            <g onClick={() => setActiveRing('center')} className="cursor-pointer">
              <circle cx="200" cy="200" r="38" fill="#312E81" stroke={activeRing === 'center' ? '#FFFFFF' : '#818CF8'} strokeWidth="1.25" />
              <text x="200" y="204" textAnchor="middle" fontSize="12" fontWeight="600" fill="#FFFFFF" fontFamily="var(--font-heading)">
                MindCraft
              </text>
            </g>
          </svg>
          <p className="mt-4 text-center text-[13px] text-white/50">Select a ring, or choose a layer from the list.</p>
        </div>
      </div>

      <div className="lg:col-span-5 lg:order-1 min-w-0">
        <div role="tablist" aria-label="Layers of the MindCraft universe" aria-orientation="vertical" className="border-t border-white/[0.1]">
          {ringsInfo.map((r) => {
            const on = activeRing === r.id;
            return (
              <button
                key={r.id}
                type="button"
                role="tab"
                id={`orbital-tab-${r.id}`}
                aria-selected={on}
                aria-controls="orbital-panel"
                tabIndex={on ? 0 : -1}
                onClick={() => setActiveRing(r.id)}
                onKeyDown={onTabKey}
                className={`group mc-tap w-full grid grid-cols-[4.75rem_1fr_auto] items-center gap-3 border-b border-white/[0.1] px-2 py-3 text-left transition-colors duration-150 ${
                  on ? 'bg-[#0d0f17]' : 'hover:bg-white/[0.03]'
                }`}
              >
                <span className={`font-mono text-xs uppercase tracking-[0.08em] ${on ? 'text-indigo-300' : 'text-white/55'}`}>{r.label}</span>
                <span className={`font-heading text-[1.0625rem] font-medium tracking-[-0.01em] ${on ? 'text-white' : 'text-white/70 group-hover:text-white'}`}>
                  {r.name}
                </span>
                <span className={`font-mono text-[13px] tabular-nums ${on ? 'text-white' : 'text-white/55'}`}>{r.count}</span>
              </button>
            );
          })}
        </div>

        <div id="orbital-panel" role="tabpanel" aria-labelledby={`orbital-tab-${activeRing}`} className="mt-8">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div key={activeRing} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.2, ease: EASE }}>
              <H className="font-heading text-[1.375rem] sm:text-[1.5rem] font-medium leading-tight tracking-[-0.015em] text-white">{active.name}</H>
              <p className="mt-2 text-[15px] leading-relaxed text-white/65">{active.desc}</p>

              {activeRing === 'center' && (
                <p className="mt-5 text-[15px] leading-relaxed text-white/80">
                  MindCraft Consultancy Services is a Nairobi-headquartered consultancy combining business consulting, market research, AI training and
                  AI enterprise solutions. Its core expertise is in Life Sciences, and it serves clients across Africa (its primary focus), Europe and the
                  United States.
                </p>
              )}

              {activeRing === 'capabilities' && (
                <ul className="mt-5 border-t border-white/[0.08]">
                  {PILLARS.map((p) => (
                    <li key={p.id} className="border-b border-white/[0.08]">
                      <button
                        type="button"
                        onClick={() => onNavigate(PILLAR_META[p.id].tab)}
                        className="group mc-tap w-full flex items-start gap-3 py-3.5 text-left"
                      >
                        <span aria-hidden="true" className={`mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full ${PILLAR_META[p.id].dot}`} />
                        <span className="min-w-0 flex-1">
                          <span className="block text-[15px] font-medium text-white group-hover:text-indigo-200 transition-colors duration-150">{p.name}</span>
                          <span className="mt-0.5 block text-[13px] leading-snug text-white/60">{p.tagline}</span>
                        </span>
                        <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-white/30 group-hover:text-white/70 transition-colors duration-150" aria-hidden="true" />
                      </button>
                    </li>
                  ))}
                </ul>
              )}

              {activeRing === 'industries' && (
                <div className="mt-5 space-y-5">
                  {[
                    { title: `Core: Life Sciences (${CORE_INDUSTRIES.length})`, items: CORE_INDUSTRIES, core: true },
                    { title: `Further industries (${OTHER_INDUSTRIES.length})`, items: OTHER_INDUSTRIES, core: false }
                  ].map((group) => (
                    <div key={group.title}>
                      <p className="text-[13px] font-medium text-white/55">{group.title}</p>
                      <ul className="mt-2.5 flex flex-wrap gap-2">
                        {group.items.map((i) => (
                          <li key={i.id}>
                            <button
                              type="button"
                              onClick={() => {
                                onSelectIndustry?.(i.id);
                                onNavigate('industries');
                              }}
                              className={`mc-tap inline-flex items-center rounded-lg border px-3 text-[13px] transition-colors duration-150 ${
                                group.core
                                  ? 'border-indigo-500/35 bg-[#0d0f17] text-indigo-200 hover:border-indigo-400/60'
                                  : 'border-white/10 text-white/75 hover:border-white/25 hover:text-white'
                              }`}
                            >
                              {i.name}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}

              {activeRing === 'regions' && (
                <>
                  <ul className="mt-5 border-t border-white/[0.08]">
                    {AFRICA_REGIONS_DATA.map((r) => (
                      <li key={r.name} className="border-b border-white/[0.08] py-3.5">
                        <div className="flex items-baseline justify-between gap-3">
                          <span className="text-[15px] font-medium text-white">{r.name}</span>
                          <span className="font-mono text-xs tabular-nums text-white/50">{r.countries.length} countries</span>
                        </div>
                        <p className="mt-1 text-[13px] leading-snug text-white/60 line-clamp-2">{r.countries.join(', ')}</p>
                      </li>
                    ))}
                  </ul>
                  <button
                    type="button"
                    onClick={() => onNavigate('africa-explorer')}
                    className="group mc-tap mt-3 inline-flex items-center gap-2 text-sm font-medium text-indigo-300 hover:text-indigo-200"
                  >
                    Open the Africa hub
                    <ArrowRight className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5" aria-hidden="true" />
                  </button>
                </>
              )}

              {activeRing === 'outcomes' && (
                <ul className="mt-5 space-y-3">
                  {OUTCOMES.map((o) => (
                    <li key={o} className="flex items-start gap-3 text-[15px] leading-snug text-white/80">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" aria-hidden="true" />
                      {o}
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );

  /* ---------------------------------------------------------------- */
  if (isPage) {
    return (
      <MotionConfig reducedMotion="user">
        <HeroSection id="model-universe" labelledBy="universe-title" className="lg:min-h-[36rem]">
          <RingsMotif className="right-[-13rem] top-24 w-[28rem] opacity-55 sm:right-[-10rem] sm:top-16 sm:w-[36rem] sm:opacity-80 lg:top-1/2 lg:-translate-y-[44%] lg:right-[-4rem] lg:w-[46rem] lg:opacity-100 xl:right-[calc((100vw-88rem)/2)]" />
          <div className="mc-container relative z-10 pt-10 sm:pt-14 lg:pt-20 pb-14 sm:pb-16 lg:pb-24">
            <HeroCopy
              id="universe-title"
              className="max-w-[38rem] lg:max-w-[min(40rem,52%)]"
              meta={<span aria-hidden="true">MindCraft Universe</span>}
              title={
                <>
                  <span className="sr-only">MindCraft Universe: </span>
                  One core team, <em>four rings</em> of reach.
                </>
              }
              lead={`At the centre, four capabilities. Around them, ${UNIVERSAL_INDUSTRIES.length} industries, Africa's ${AFRICA_REGIONS_DATA.length} regional clusters and the outcomes the work is for. Choose a layer below to explore it.`}
            >
              <ol aria-label="Layers, from the centre out" className="flex flex-wrap gap-x-5 gap-y-2 font-mono text-xs uppercase tracking-[0.08em] text-white/55">
                <li>Core</li>
                <li>
                  <span className="text-white/85 tabular-nums">{PILLARS.length}</span> capabilities
                </li>
                <li>
                  <span className="text-white/85 tabular-nums">{UNIVERSAL_INDUSTRIES.length}</span> industries
                </li>
                <li>
                  <span className="text-white/85 tabular-nums">{AFRICA_REGIONS_DATA.length}</span> regions
                </li>
                <li>Outcomes</li>
              </ol>
            </HeroCopy>
          </div>
        </HeroSection>

        <section className="mc-section" aria-label="Explore the layers">
          <div className="mc-container">
            {explorer}
            {/* Tool page: a quiet close rather than a banner */}
            <div className="mt-16 lg:mt-20 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-white/[0.1] pt-6">
              <p className="text-[15px] text-white/65">Ready to combine the layers for your own situation?</p>
              <div className="flex flex-col sm:flex-row gap-x-6 gap-y-1">
                <button
                  type="button"
                  onClick={() => onNavigate('engagement-builder')}
                  className="group mc-tap inline-flex items-center gap-2 text-sm font-medium text-indigo-300 hover:text-indigo-200"
                >
                  Sketch an engagement blueprint
                  <ArrowRight className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate('question-to-outcome')}
                  className="group mc-tap inline-flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white"
                >
                  Start from a challenge
                  <ArrowRight className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </section>
      </MotionConfig>
    );
  }

  // Inside the operating-model page: a compact section, then that page's closing call to action
  return (
    <MotionConfig reducedMotion="user">
      <section className="mc-section" id="model-universe" aria-labelledby="universe-title">
        <div className="mc-container">
          <motion.div {...reveal} className="max-w-2xl mb-10 lg:mb-14">
            <h2 id="universe-title" className="mc-h2">
              Where the model applies
            </h2>
            <p className="mc-lead mt-4">
              {`One core team, ${PILLARS.length} capabilities, ${UNIVERSAL_INDUSTRIES.length} industries and ${AFRICA_REGIONS_DATA.length} African regional clusters. Choose a layer to explore it.`}
            </p>
          </motion.div>
          {explorer}
          <motion.div {...reveal} className="mt-16 lg:mt-24">
            <ContextualCTA
              title="Bring us the question; we will assemble the team"
              body="Tell us what you need to decide or deliver. We scope the research, consulting, training and AI work around it, as one engagement."
              primaryLabel="Sketch an engagement blueprint"
              onPrimary={() => onNavigate('engagement-builder')}
              secondaryLabel="Start from a challenge"
              onSecondary={() => onNavigate('question-to-outcome')}
            />
          </motion.div>
        </div>
      </section>
    </MotionConfig>
  );
};
