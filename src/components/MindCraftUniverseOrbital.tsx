import React, { useState } from 'react';
import { MotionConfig, motion, AnimatePresence } from 'motion/react';
import {
  Orbit,
  CheckCircle2,
} from 'lucide-react';
import { UNIVERSAL_INDUSTRIES, AFRICA_REGIONS_DATA } from '../data/industryAndAfricaData';
import { SERVICE_PILLARS } from '../data/mindcraftData';
import { NavTab } from '../types';
import { ContextualCTA, EASE } from './ui/primitives';

interface Props {
  onNavigate: (tab: NavTab) => void;
  onSelectIndustry?: (industryId: string) => void;
  /** Heading level for the page title. Defaults to 2 (this view follows the model + method on the operating-model page). */
  headingLevel?: 1 | 2;
}

type RingId = 'center' | 'capabilities' | 'industries' | 'regions' | 'outcomes';

const OUTCOMES = [
  'Accelerated Pan-African Market Access & Fast-Track Approvals',
  'Protected Commercial Margins & Vetted Distributor Networks',
  'Sustained Daily Adoption of Governed Enterprise AI Tools',
  'Automated Claims, Tender Tracking & Intelligent Document Engines'
];

const TOTAL_JURISDICTIONS = AFRICA_REGIONS_DATA.reduce((n, r) => n + r.countries.length, 0);

export const MindCraftUniverseOrbital: React.FC<Props> = ({
  onNavigate,
  onSelectIndustry,
  headingLevel = 2
}) => {
  const Heading = headingLevel === 1 ? 'h1' : 'h2';
  const [activeRing, setActiveRing] = useState<RingId>('capabilities');

  const ringsInfo: { id: RingId; name: string; desc: string; count: string }[] = [
    {
      id: 'center',
      name: 'Nucleus: MindCraft Core',
      desc: 'Pan-African intelligence, consulting advisory, and AI transformation engine.',
      count: '1 Core Engine'
    },
    {
      id: 'capabilities',
      name: 'Ring 1: 4 Service Pillars',
      desc: 'Strategic Consulting, Market Research, Applied AI Training, Enterprise AI Solutions.',
      count: '4 Pillars'
    },
    {
      id: 'industries',
      name: 'Ring 2: 24 Industry Verticals',
      desc: '6 Core Life Sciences + 18 Diversified Industry Verticals.',
      count: '24 Sectors'
    },
    {
      id: 'regions',
      name: 'Ring 3: African Geographies',
      desc: `East Africa, West Africa, Southern Africa, North Africa (${TOTAL_JURISDICTIONS} Jurisdictions).`,
      count: '4 Regions'
    },
    {
      id: 'outcomes',
      name: 'Ring 4: Measurable Business Outcomes',
      desc: 'Market access, margin expansion, risk mitigation, workflow velocity.',
      count: 'High Impact'
    }
  ];

  const active = ringsInfo.find(r => r.id === activeRing) ?? ringsInfo[1];

  // SVG ring geometry (viewBox 400 x 400, scales with container width)
  const rings: { id: RingId; r: number; stroke: string; fill: string; dash?: string; label: string }[] = [
    { id: 'outcomes', r: 190, stroke: '#10B981', fill: 'rgba(16,185,129,0.06)', dash: '4 6', label: 'Outcomes' },
    { id: 'regions', r: 150, stroke: '#F59E0B', fill: 'rgba(245,158,11,0.06)', dash: '4 6', label: 'Regions' },
    { id: 'industries', r: 110, stroke: '#0EA5E9', fill: 'rgba(14,165,233,0.06)', dash: '4 6', label: 'Industries' },
    { id: 'capabilities', r: 72, stroke: '#6366F1', fill: 'rgba(99,102,241,0.10)', label: 'Pillars' }
  ];

  const activate = (id: RingId) => setActiveRing(id);

  return (
    <MotionConfig reducedMotion="user">
    <section className="mc-section bg-[#050505] text-white" id="model-universe">
      <div className="mc-container space-y-6 md:space-y-8">
        {/* A. Intent */}
        <header className="max-w-3xl">
          <span className="mc-eyebrow">MindCraft universe</span>
          <Heading className={`${headingLevel === 1 ? 'mc-h1' : 'mc-h2'} mt-3 font-light`}>
            Where the model <span className="font-semibold">applies</span>
          </Heading>
          <p className="mc-lead mt-3">
            One nucleus powers 4 capabilities across 24 industry verticals, {AFRICA_REGIONS_DATA.length} African regional clusters and measurable business outcomes. Select a layer to inspect it.
          </p>
        </header>

        {/* Layer selector: swipeable chips on phones, grid on larger screens */}
        <div
          role="tablist"
          aria-label="Orbital layers"
          className="mc-snap-row sm:!grid sm:!grid-cols-3 lg:!grid-cols-5 sm:!overflow-visible sm:!gap-3"
        >
          {ringsInfo.map((r) => {
            const isActive = activeRing === r.id;
            const [head, tail] = r.name.split(':');
            return (
              <button
                key={r.id}
                type="button"
                role="tab"
                id={`orbital-tab-${r.id}`}
                aria-selected={isActive}
                aria-controls="orbital-panel"
                onClick={() => activate(r.id)}
                className={`mc-tap !flex-none !basis-auto sm:!basis-auto px-3.5 py-2.5 sm:p-4 rounded-xl border text-left transition-colors active:scale-[0.98] ${
                  isActive
                    ? 'bg-[#0d0f17] border-indigo-500/60'
                    : 'bg-[#0a0a0a] border-white/10 hover:border-white/25'
                }`}
              >
                <div className="flex items-center gap-2 sm:justify-between">
                  <span className="font-semibold text-sm text-white whitespace-nowrap">{head}</span>
                  <span className="text-[11px] font-mono px-1.5 py-0.5 rounded bg-white/5 text-neutral-400 shrink-0 whitespace-nowrap">
                    {r.count}
                  </span>
                </div>
                <p className="hidden sm:block text-xs text-neutral-400 mt-1 sm:line-clamp-2">{tail?.trim()}</p>
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8">
          {/* Orbital graph: hidden on phones (the list above is the fallback) */}
          <div className="hidden sm:flex lg:col-span-7 bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 md:p-8 flex-col items-center justify-center min-w-0">
            <svg
              viewBox="0 0 400 400"
              className="w-full max-w-[440px] h-auto"
              role="group"
              aria-label="Concentric orbital diagram: nucleus, 4 service pillars, 24 industries, 4 African regions, measurable outcomes"
            >
              {rings.map((ring) => {
                const isActive = activeRing === ring.id;
                return (
                  <g
                    key={ring.id}
                    role="button"
                    tabIndex={0}
                    aria-label={`Focus ${ring.label}`}
                    aria-pressed={isActive}
                    onClick={() => activate(ring.id)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        activate(ring.id);
                      }
                    }}
                    className="cursor-pointer outline-none"
                    style={{ transition: 'opacity 0.2s cubic-bezier(0.16,1,0.3,1)' }}
                    opacity={isActive ? 1 : 0.55}
                  >
                    <circle
                      cx="200"
                      cy="200"
                      r={ring.r}
                      fill={isActive ? ring.fill : 'transparent'}
                      stroke={isActive ? ring.stroke : 'rgba(255,255,255,0.18)'}
                      strokeWidth={isActive ? 1.75 : 1}
                      strokeDasharray={ring.dash}
                    />
                    {/* Always-visible ring label (no hover-only info) */}
                    <text
                      x="200"
                      y={200 - ring.r + 16}
                      textAnchor="middle"
                      fontSize="12"
                      fontFamily="var(--font-mono)"
                      fill={isActive ? ring.stroke : '#9CA3AF'}
                      style={{ textTransform: 'uppercase', letterSpacing: '0.08em' }}
                    >
                      {ring.label}
                    </text>
                  </g>
                );
              })}

              <g
                role="button"
                tabIndex={0}
                aria-label="Focus nucleus"
                aria-pressed={activeRing === 'center'}
                onClick={() => activate('center')}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    activate('center');
                  }
                }}
                className="cursor-pointer outline-none"
              >
                <circle
                  cx="200"
                  cy="200"
                  r="36"
                  fill="#4F46E5"
                  stroke={activeRing === 'center' ? '#FFFFFF' : '#6366F1'}
                  strokeWidth="1.5"
                />
                <text x="200" y="204" textAnchor="middle" fontSize="12" fontWeight="700" fill="#FFFFFF" fontFamily="var(--font-heading)">
                  MindCraft
                </text>
              </g>
            </svg>

            <p className="text-xs font-mono text-neutral-400 mt-4 text-center">
              Select any ring to focus that layer of the MindCraft universe.
            </p>
          </div>

          {/* Active layer inspector */}
          <div id="orbital-panel" role="tabpanel" aria-labelledby={`orbital-tab-${activeRing}`} className="lg:col-span-5 sm:max-lg:col-span-1 min-w-0 bg-[#0a0a0a] border border-indigo-500/35 rounded-2xl p-4 md:p-7 space-y-4">
            <div>
              <span className="mc-eyebrow">Active layer</span>
              <h3 className="text-xl font-bold text-white mt-2">{active.name}</h3>
              <p className="text-sm text-neutral-400 mt-1">{active.desc}</p>
            </div>

            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={activeRing}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.18, ease: EASE }}
              >
                {activeRing === 'capabilities' && (
                  <div className="space-y-2">
                    {SERVICE_PILLARS.map(p => (
                      <div key={p.id} className="p-3 rounded-xl bg-[#050505] border border-white/[0.08] space-y-1">
                        <div className="text-sm font-semibold text-indigo-400">{p.name}</div>
                        <p className="text-sm text-[#E0E0E0]">{p.tagline}</p>
                      </div>
                    ))}
                  </div>
                )}

                {activeRing === 'industries' && (
                  <div className="space-y-3">
                    <div className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider">Core Life Sciences (6) & Verticals (18)</div>
                    <div className="flex flex-wrap gap-2 max-h-[16rem] lg:max-h-[300px] overflow-y-auto pr-1">
                      {UNIVERSAL_INDUSTRIES.map(i => (
                        <button
                          key={i.id}
                          type="button"
                          onClick={() => {
                            if (onSelectIndustry) onSelectIndustry(i.id);
                            onNavigate('industries');
                          }}
                          className={`mc-tap px-3 py-1.5 rounded-lg text-xs transition-colors active:scale-[0.98] ${
                            i.category === 'core-lifesciences'
                              ? 'bg-[#0d0f17] text-indigo-400 border border-indigo-500/35 hover:bg-indigo-500/10'
                              : 'bg-white/5 text-[#E0E0E0] border border-white/10 hover:bg-white/10'
                          }`}
                        >
                          {i.name}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {activeRing === 'regions' && (
                  <div className="space-y-2">
                    {AFRICA_REGIONS_DATA.map(r => (
                      <div key={r.name} className="p-3 rounded-xl bg-[#050505] border border-white/[0.08] space-y-1">
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-sm font-semibold text-emerald-400">{r.name}</span>
                          <span className="text-[11px] font-mono text-neutral-400 shrink-0">{r.countries.length} Jurisdictions</span>
                        </div>
                        <p className="text-xs text-neutral-400 line-clamp-2">{r.countries.join(', ')}</p>
                      </div>
                    ))}
                  </div>
                )}

                {activeRing === 'outcomes' && (
                  <ul className="space-y-2 text-sm text-[#E0E0E0]">
                    {OUTCOMES.map(o => (
                      <li key={o} className="p-3 rounded-xl bg-[#050505] border border-white/[0.08] flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" aria-hidden="true" />
                        <span>{o}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {activeRing === 'center' && (
                  <div className="p-4 rounded-xl bg-[#050505] border border-white/[0.08] flex items-start gap-3 text-sm text-[#E0E0E0]">
                    <Orbit className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" aria-hidden="true" />
                    <p>
                      MindCraft is the specialized consulting, research, and enterprise AI transformation house headquartered in Nairobi, Kenya, serving Africa (primary focus), Europe and the United States.
                    </p>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

          </div>
        </div>

        {/* One closing CTA for the whole page */}
        <ContextualCTA
          title="Configure an engagement across the model"
          body="Combine capabilities, industries and geographies into a scoped engagement."
          primaryLabel="Configure custom engagement"
          onPrimary={() => onNavigate('engagement-builder')}
          secondaryLabel="Explore 24 industries"
          onSecondary={() => onNavigate('industries')}
        />
      </div>
    </section>
    </MotionConfig>
  );
};
