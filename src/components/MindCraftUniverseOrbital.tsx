import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Orbit,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';
import { UNIVERSAL_INDUSTRIES, AFRICA_REGIONS_DATA } from '../data/industryAndAfricaData';
import { SERVICE_PILLARS } from '../data/mindcraftData';
import { NavTab } from '../types';

interface Props {
  onNavigate: (tab: NavTab) => void;
  onSelectIndustry?: (industryId: string) => void;
}

type RingId = 'center' | 'capabilities' | 'industries' | 'regions' | 'outcomes';

const EASE = [0.16, 1, 0.3, 1] as const;

const OUTCOMES = [
  'Accelerated Pan-African Market Access & Fast-Track Approvals',
  'Protected Commercial Margins & Vetted Distributor Networks',
  '70%+ Daily Governed Enterprise AI Tool Adoption',
  'Automated Claims, Tender Tracking & Intelligent Document Engines'
];

export const MindCraftUniverseOrbital: React.FC<Props> = ({
  onNavigate,
  onSelectIndustry
}) => {
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
      desc: 'East Africa, West Africa, Southern Africa, North Africa (45 Jurisdictions).',
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
    <div className="w-full min-h-dvh bg-[#050505] text-white overflow-x-clip">
      <div className="mc-container mc-section !border-b-0 space-y-6 md:space-y-8">
        {/* Header: intent + single CTA */}
        <header className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5">
          <div className="space-y-3 min-w-0">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
              <span className="mc-eyebrow">MindCraft Universe</span>
              <span className="text-[11px] text-neutral-400 font-mono">Orbital Systems & Ecosystem Topology</span>
            </div>
            <h1 className="mc-h1 font-semibold tracking-tight">Orbital Architecture Explorer</h1>
            <p className="mc-lead">
              A concentric visualization illustrating how MindCraft’s nucleus powers 4 capabilities, 24 industry verticals, 4 African geographic clusters, and verified business outcomes.
            </p>
          </div>
          <button
            onClick={() => onNavigate('industries')}
            className="mc-tap px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-sm font-semibold text-white transition-colors active:scale-[0.98] shrink-0 inline-flex items-center justify-center gap-2"
          >
            Explore 24 Industries <ArrowRight className="w-4 h-4" />
          </button>
        </header>

        {/* Layer selector: vertical list on phones (fallback to the graph), grid on larger screens */}
        <div
          role="tablist"
          aria-label="Orbital layers"
          className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-3"
        >
          {ringsInfo.map((r) => {
            const isActive = activeRing === r.id;
            const [head, tail] = r.name.split(':');
            return (
              <button
                key={r.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => activate(r.id)}
                className={`mc-tap p-3.5 sm:p-4 rounded-2xl border text-left transition-colors active:scale-[0.98] ${
                  isActive
                    ? 'bg-[#0d0f17] border-indigo-500/60'
                    : 'bg-[#0a0a0a] border-white/10 hover:border-white/25'
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="font-semibold text-sm text-white">{head}</span>
                  <span className="text-[11px] font-mono px-1.5 py-0.5 rounded bg-white/5 text-neutral-400 shrink-0">
                    {r.count}
                  </span>
                </div>
                <p className="text-xs text-neutral-400 mt-1 sm:line-clamp-2">{tail?.trim()}</p>
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
          <div className="lg:col-span-5 sm:max-lg:col-span-1 min-w-0 bg-[#0a0a0a] border border-indigo-500/35 rounded-2xl p-5 md:p-7 space-y-5">
            <div>
              <span className="mc-eyebrow">Active Layer Inspector</span>
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
                    <div className="flex flex-wrap gap-2 max-h-[40dvh] lg:max-h-[300px] overflow-y-auto pr-1">
                      {UNIVERSAL_INDUSTRIES.map(i => (
                        <button
                          key={i.id}
                          onClick={() => {
                            if (onSelectIndustry) onSelectIndustry(i.id);
                            onNavigate('industries');
                          }}
                          className={`min-h-9 px-3 py-1.5 rounded-lg text-xs transition-colors active:scale-[0.98] ${
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
                      MindCraft is the specialized consulting, research, and enterprise AI transformation house operating from Nairobi, Kenya with bi-directional reach across Africa, Europe, and North America.
                    </p>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            <div className="pt-4 border-t border-white/10">
              <button
                onClick={() => onNavigate('engagement-builder')}
                className="mc-tap w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-sm font-semibold text-white transition-colors active:scale-[0.98] flex items-center justify-center gap-2"
              >
                Configure Custom Engagement <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
