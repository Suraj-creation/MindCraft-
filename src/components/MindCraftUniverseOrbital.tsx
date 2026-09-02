import React, { useState } from 'react';
import { 
  Orbit, 
  Layers, 
  Globe2, 
  Cpu, 
  Compass, 
  Search, 
  GraduationCap, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Building2,
  MapPin,
  TrendingUp,
  Target
} from 'lucide-react';
import { UNIVERSAL_INDUSTRIES, AFRICA_REGIONS_DATA } from '../data/industryAndAfricaData';
import { SERVICE_PILLARS } from '../data/mindcraftData';
import { NavTab } from '../types';

interface Props {
  onNavigate: (tab: NavTab) => void;
  onSelectIndustry?: (industryId: string) => void;
}

export const MindCraftUniverseOrbital: React.FC<Props> = ({ 
  onNavigate,
  onSelectIndustry
}) => {
  const [activeRing, setActiveRing] = useState<'center' | 'capabilities' | 'industries' | 'regions' | 'outcomes'>('capabilities');
  const [selectedNode, setSelectedNode] = useState<string>('Strategic Consulting');

  const ringsInfo = [
    {
      id: 'center',
      name: 'Nucleus: MindCraft Core',
      desc: 'Pan-African intelligence, consulting advisory, and AI transformation engine.',
      icon: 'Orbit',
      count: '1 Core Engine'
    },
    {
      id: 'capabilities',
      name: 'Ring 1: 4 Service Pillars',
      desc: 'Strategic Consulting, Market Research, Applied AI Training, Enterprise AI Solutions.',
      icon: 'Layers',
      count: '4 Pillars'
    },
    {
      id: 'industries',
      name: 'Ring 2: 24 Industry Verticals',
      desc: '6 Core Life Sciences + 18 Diversified Industry Verticals.',
      icon: 'Building2',
      count: '24 Sectors'
    },
    {
      id: 'regions',
      name: 'Ring 3: African Geographies',
      desc: 'East Africa, West Africa, Southern Africa, North Africa (45 Jurisdictions).',
      icon: 'Globe2',
      count: '4 Regions'
    },
    {
      id: 'outcomes',
      name: 'Ring 4: Measurable Business Outcomes',
      desc: 'Market access, margin expansion, risk mitigation, workflow velocity.',
      icon: 'TrendingUp',
      count: 'High Impact'
    }
  ];

  return (
    <div className="w-full min-h-screen bg-[#050505] text-white p-4 md:p-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 pb-6 border-b border-white/10">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="px-3 py-1 text-xs font-mono tracking-wider uppercase rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
              MindCraft Universe
            </span>
            <span className="text-xs text-neutral-400 font-mono">
              Orbital Systems & Ecosystem Topology
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
            Orbital Architecture Explorer
          </h1>
          <p className="text-neutral-400 text-sm md:text-base mt-1 max-w-3xl">
            A concentric visualization illustrating how MindCraft’s nucleus powers 4 capabilities, 24 industry verticals, 4 African geographic clusters, and verified business outcomes.
          </p>
        </div>

        <button
          onClick={() => onNavigate('industries')}
          className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-xs font-semibold text-white transition-all shadow-[0_0_15px_rgba(99,102,241,0.3)] shrink-0 flex items-center gap-2"
        >
          Explore 24 Industries <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Orbital Layer Ring Selector Bento Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        {ringsInfo.map((r) => {
          const isActive = activeRing === r.id;
          return (
            <button
              key={r.id}
              onClick={() => setActiveRing(r.id as any)}
              className={`p-4 rounded-2xl border text-left transition-all ${
                isActive
                  ? 'bg-gradient-to-br from-indigo-950/60 to-[#0a0a0a] border-indigo-500/60 shadow-[0_0_15px_rgba(99,102,241,0.25)]'
                  : 'bg-[#0a0a0a] border-white/5 hover:border-white/20'
              }`}
            >
              <div className="flex items-center justify-between gap-1 mb-1">
                <span className="font-semibold text-xs text-white">{r.name.split(':')[0]}</span>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/5 text-neutral-400">
                  {r.count}
                </span>
              </div>
              <p className="text-[11px] text-neutral-400 line-clamp-2 mt-1">
                {r.name.split(':')[1]}
              </p>
            </button>
          );
        })}
      </div>

      {/* Interactive Orbital Visualization Canvas & Detail Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Visual Orbital Rings (7 cols) */}
        <div className="lg:col-span-7 bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col items-center justify-center relative overflow-hidden min-h-[480px]">
          {/* Concentric Circle Guides */}
          <div className="relative w-full max-w-[420px] aspect-square flex items-center justify-center">
            {/* Outer Ring 4: Outcomes */}
            <div 
              onClick={() => setActiveRing('outcomes')}
              className={`absolute inset-0 rounded-full border border-dashed transition-all cursor-pointer ${
                activeRing === 'outcomes' ? 'border-emerald-500/60 bg-emerald-950/10 shadow-[0_0_30px_rgba(16,185,129,0.15)]' : 'border-white/10 hover:border-white/30'
              }`}
            />
            {/* Ring 3: African Regions */}
            <div 
              onClick={() => setActiveRing('regions')}
              className={`absolute inset-10 rounded-full border border-dashed transition-all cursor-pointer ${
                activeRing === 'regions' ? 'border-amber-500/60 bg-amber-950/10 shadow-[0_0_30px_rgba(245,158,11,0.15)]' : 'border-white/10 hover:border-white/30'
              }`}
            />
            {/* Ring 2: Industries */}
            <div 
              onClick={() => setActiveRing('industries')}
              className={`absolute inset-20 rounded-full border border-dashed transition-all cursor-pointer ${
                activeRing === 'industries' ? 'border-sky-500/60 bg-sky-950/10 shadow-[0_0_30px_rgba(14,165,233,0.15)]' : 'border-white/10 hover:border-white/30'
              }`}
            />
            {/* Ring 1: Capabilities */}
            <div 
              onClick={() => setActiveRing('capabilities')}
              className={`absolute inset-28 rounded-full border transition-all cursor-pointer ${
                activeRing === 'capabilities' ? 'border-indigo-500/60 bg-indigo-950/20 shadow-[0_0_30px_rgba(99,102,241,0.25)]' : 'border-white/10 hover:border-white/30'
              }`}
            />
            {/* Nucleus Core */}
            <div 
              onClick={() => setActiveRing('center')}
              className="z-10 w-24 h-24 rounded-full bg-gradient-to-br from-indigo-600 to-indigo-900 border border-indigo-400/80 shadow-[0_0_25px_rgba(99,102,241,0.6)] flex flex-col items-center justify-center text-center p-2 cursor-pointer"
            >
              <Orbit className="w-6 h-6 text-white animate-spin-slow" />
              <span className="text-[10px] font-bold text-white mt-1">MindCraft</span>
            </div>
          </div>

          <div className="text-xs font-mono text-neutral-500 mt-4">
            Click any concentric ring to focus that layer of the MindCraft universe.
          </div>
        </div>

        {/* Selected Layer Node Inspector (5 cols) */}
        <div className="lg:col-span-5 bg-[#0a0a0a] border border-indigo-500/40 rounded-2xl p-6 md:p-8 space-y-6 shadow-[0_0_20px_rgba(99,102,241,0.15)]">
          <div>
            <span className="text-xs font-mono uppercase text-indigo-400 bg-indigo-500/10 px-2.5 py-1 rounded-full border border-indigo-500/20">
              Active Layer Inspector
            </span>
            <h3 className="text-xl font-bold text-white mt-2">
              {ringsInfo.find(r => r.id === activeRing)?.name}
            </h3>
            <p className="text-xs text-neutral-400 mt-1">
              {ringsInfo.find(r => r.id === activeRing)?.desc}
            </p>
          </div>

          {/* Dynamic Content by Active Ring */}
          {activeRing === 'capabilities' && (
            <div className="space-y-2">
              {SERVICE_PILLARS.map(p => (
                <div key={p.id} className="p-3 rounded-xl bg-[#050505] border border-white/5 space-y-1">
                  <div className="text-xs font-semibold text-indigo-400">{p.name}</div>
                  <p className="text-xs text-neutral-300">{p.tagline}</p>
                </div>
              ))}
            </div>
          )}

          {activeRing === 'industries' && (
            <div className="space-y-3">
              <div className="text-xs font-mono text-neutral-400">Core Life Sciences (6) & Verticals (18):</div>
              <div className="flex flex-wrap gap-1.5 max-h-[300px] overflow-y-auto pr-1">
                {UNIVERSAL_INDUSTRIES.map(i => (
                  <button
                    key={i.id}
                    onClick={() => {
                      if (onSelectIndustry) onSelectIndustry(i.id);
                      onNavigate('industries');
                    }}
                    className={`px-2.5 py-1 rounded-lg text-xs transition-colors ${
                      i.category === 'core-lifesciences'
                        ? 'bg-indigo-950/60 text-indigo-300 border border-indigo-500/30 hover:bg-indigo-900'
                        : 'bg-white/5 text-neutral-300 border border-white/10 hover:bg-white/10'
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
                <div key={r.name} className="p-3 rounded-xl bg-[#050505] border border-white/5 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-emerald-400">{r.name}</span>
                    <span className="text-[10px] font-mono text-neutral-500">{r.countries.length} Jurisdictions</span>
                  </div>
                  <p className="text-xs text-neutral-400 line-clamp-1">{r.countries.join(', ')}</p>
                </div>
              ))}
            </div>
          )}

          {activeRing === 'outcomes' && (
            <div className="space-y-2 text-xs text-neutral-300">
              <div className="p-3 rounded-xl bg-[#050505] border border-white/5 flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Accelerated Pan-African Market Access & Fast-Track Approvals</span>
              </div>
              <div className="p-3 rounded-xl bg-[#050505] border border-white/5 flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Protected Commercial Margins & Vetted Distributor Networks</span>
              </div>
              <div className="p-3 rounded-xl bg-[#050505] border border-white/5 flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>70%+ Daily Governed Enterprise AI Tool Adoption</span>
              </div>
              <div className="p-3 rounded-xl bg-[#050505] border border-white/5 flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Automated Claims, Tender Tracking & Intelligent Document Engines</span>
              </div>
            </div>
          )}

          {activeRing === 'center' && (
            <div className="p-4 rounded-xl bg-[#050505] border border-white/5 space-y-2 text-xs text-neutral-300">
              <p>
                MindCraft is the specialized consulting, research, and enterprise AI transformation house operating from Nairobi, Kenya with bi-directional reach across Africa, Europe, and North America.
              </p>
            </div>
          )}

          <div className="pt-4 border-t border-white/10">
            <button
              onClick={() => onNavigate('engagement-builder')}
              className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-xs font-semibold text-white transition-all shadow-[0_0_15px_rgba(99,102,241,0.3)] flex items-center justify-center gap-2"
            >
              Configure Custom Engagement <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
