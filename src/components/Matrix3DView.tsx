import React, { useState, useMemo } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import {
  Box,
  Layers,
  Globe2,
  Cpu,
  Compass,
  Search,
  CheckCircle2,
  ArrowRight,
  FileText,
  TrendingUp,
  Building2
} from 'lucide-react';
import { UNIVERSAL_INDUSTRIES, AFRICA_REGIONS_DATA } from '../data/industryAndAfricaData';
import { SERVICE_PILLARS } from '../data/mindcraftData';
import { NavTab } from '../types';

interface Props {
  onNavigate: (tab: NavTab) => void;
  onSelectEngagementConfig?: (industry: string, geography: string, capability: string) => void;
}

const EASE = [0.16, 1, 0.3, 1] as const;

const selectClass =
  'w-full h-11 appearance-none bg-[#050505] border border-white/[0.08] rounded-xl pl-4 pr-10 text-base sm:text-sm text-white focus:outline-none focus:border-indigo-500';

const StepHeader: React.FC<{
  n: number;
  label: string;
  meta: string;
  tone: string;
  icon: React.ReactNode;
}> = ({ n, label, meta, tone, icon }) => (
  <div className="flex items-center justify-between gap-3 pb-3 border-b border-white/[0.08]">
    <span className={`text-[11px] font-mono uppercase tracking-wider flex items-center gap-2 ${tone}`}>
      <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center text-[11px] leading-none">{n}</span>
      {icon}
      {label}
    </span>
    <span className="text-[11px] font-mono text-gray-400 text-right">{meta}</span>
  </div>
);

const SelectChevron = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 20 20"
    className="w-4 h-4 text-gray-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 8l5 5 5-5" />
  </svg>
);

export const Matrix3DView: React.FC<Props> = ({
  onNavigate,
  onSelectEngagementConfig
}) => {
  const [selectedIndustryId, setSelectedIndustryId] = useState('pharmaceuticals');
  const [selectedGeography, setSelectedGeography] = useState('East Africa');
  const [selectedCapabilityId, setSelectedCapabilityId] = useState('consulting');

  const reduceMotion = useReducedMotion();
  const dur = reduceMotion ? 0 : 0.2;

  const selectedIndustry = useMemo(() => {
    return UNIVERSAL_INDUSTRIES.find(i => i.id === selectedIndustryId) || UNIVERSAL_INDUSTRIES[0];
  }, [selectedIndustryId]);

  const selectedPillar = useMemo(() => {
    return SERVICE_PILLARS.find(p => p.id === selectedCapabilityId) || SERVICE_PILLARS[0];
  }, [selectedCapabilityId]);

  const coreCount = UNIVERSAL_INDUSTRIES.filter(i => i.category === 'core-lifesciences').length;
  const diversifiedCount = UNIVERSAL_INDUSTRIES.length - coreCount;

  const handleLaunch = () => {
    if (onSelectEngagementConfig) {
      onSelectEngagementConfig(selectedIndustry.name, selectedGeography, selectedPillar.name);
    }
    onNavigate('engagement-builder');
  };

  const stats = [
    { value: String(UNIVERSAL_INDUSTRIES.length), label: 'Industries' },
    { value: String(AFRICA_REGIONS_DATA.length), label: 'Regional hubs' },
    { value: String(SERVICE_PILLARS.length), label: 'Service pillars' }
  ];

  const fadeIn = {
    initial: { opacity: 0, y: 8 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-10%' },
    transition: { duration: dur, ease: EASE }
  } as const;

  const blocks = [
    {
      key: 'q',
      tone: 'text-indigo-400',
      icon: <Compass className="w-4 h-4" aria-hidden="true" />,
      title: 'Core Investigation Questions',
      body: (
        <ul className="space-y-2">
          {selectedIndustry.keyQuestions.slice(0, 2).map((q, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-[0.45rem] shrink-0" />
              <span className="min-w-0">{q}</span>
            </li>
          ))}
        </ul>
      )
    },
    {
      key: 'm',
      tone: 'text-sky-400',
      icon: <Search className="w-4 h-4" aria-hidden="true" />,
      title: 'Integrated Methodology',
      body: (
        <p className="leading-relaxed">
          {selectedIndustry.researchAndIntelligence[0]} combined with {selectedPillar.tagline.toLowerCase()}.
        </p>
      )
    },
    {
      key: 'd',
      tone: 'text-emerald-400',
      icon: <FileText className="w-4 h-4" aria-hidden="true" />,
      title: 'Potential Deliverables',
      body: (
        <ul className="space-y-2">
          {selectedIndustry.illustrativeEngagement.deliverables.slice(0, 2).map((d, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-[0.45rem] shrink-0" />
              <span className="min-w-0">{d}</span>
            </li>
          ))}
        </ul>
      )
    },
    {
      key: 'a',
      tone: 'text-amber-400',
      icon: <Cpu className="w-4 h-4" aria-hidden="true" />,
      title: 'AI & Automation Layer',
      body: (
        <p className="leading-relaxed">
          {selectedIndustry.aiOpportunities[0]} tailored for {selectedGeography} operating realities.
        </p>
      )
    }
  ];

  return (
    <section
      className="mc-section bg-[#050505] text-white overflow-x-clip"
      aria-labelledby="matrix-title"
    >
      <div className="mc-container space-y-8 md:space-y-10">
        {/* Intent + proof */}
        <motion.header {...fadeIn} className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="space-y-4 min-w-0">
            <p className="mc-eyebrow">
              <Box className="w-3.5 h-3.5" aria-hidden="true" />
              Multi-Dimensional Configuration Engine
            </p>
            <h2 id="matrix-title" className="mc-h2 font-semibold">
              Industry × Geography × Capability 3D Matrix
            </h2>
            <p className="mc-lead">
              Synthesize an instant, custom engagement profile by intersecting any industry vertical with a regional geographic footprint and a core MindCraft service pillar.
            </p>
            <dl className="grid grid-cols-3 gap-2 sm:gap-3 pt-2 max-w-xl">
              {stats.map(s => (
                <div key={s.label} className="rounded-xl bg-[#0A0A0A] border border-white/[0.08] px-3 sm:px-4 py-3">
                  <dt className="sr-only">{s.label}</dt>
                  <dd className="font-mono text-2xl sm:text-3xl font-semibold text-white leading-none">{s.value}</dd>
                  <p className="mt-1.5 text-[11px] font-mono uppercase tracking-wider text-gray-400" aria-hidden="true">{s.label}</p>
                </div>
              ))}
            </dl>
          </div>

          <button
            type="button"
            onClick={handleLaunch}
            className="hidden lg:flex mc-tap shrink-0 items-center gap-2 px-5 rounded-xl border border-white/[0.08] hover:border-white/20 text-[13px] font-medium text-[#E0E0E0] transition-colors active:scale-[0.98]"
          >
            Build Engagement from Matrix <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </button>
        </motion.header>

        {/* Three-step selector */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {/* 1. Industry */}
          <motion.div {...fadeIn} className="min-w-0 bg-[#0A0A0A] border border-white/[0.08] rounded-2xl p-5 space-y-4">
            <StepHeader
              n={1}
              label="Industry"
              meta={`${UNIVERSAL_INDUSTRIES.length} sectors`}
              tone="text-indigo-400"
              icon={<Building2 className="w-4 h-4" aria-hidden="true" />}
            />
            <label className="block">
              <span className="sr-only">Industry</span>
              <span className="relative block">
                <select
                  value={selectedIndustryId}
                  onChange={(e) => setSelectedIndustryId(e.target.value)}
                  className={selectClass}
                >
                  <optgroup label={`Core Life Sciences (${coreCount})`}>
                    {UNIVERSAL_INDUSTRIES.filter(i => i.category === 'core-lifesciences').map(i => (
                      <option key={i.id} value={i.id}>{i.name}</option>
                    ))}
                  </optgroup>
                  <optgroup label={`Diversified Verticals (${diversifiedCount})`}>
                    {UNIVERSAL_INDUSTRIES.filter(i => i.category === 'diversified-vertical').map(i => (
                      <option key={i.id} value={i.id}>{i.name}</option>
                    ))}
                  </optgroup>
                </select>
                <SelectChevron />
              </span>
            </label>
            <p className="p-3 rounded-xl bg-[#050505] border border-white/[0.08] text-[13px] text-[#E0E0E0] leading-relaxed">
              {selectedIndustry.tagline}
            </p>
          </motion.div>

          {/* 2. Geography */}
          <motion.div {...fadeIn} className="min-w-0 bg-[#0A0A0A] border border-white/[0.08] rounded-2xl p-5 space-y-4">
            <StepHeader
              n={2}
              label="Geography"
              meta={`${AFRICA_REGIONS_DATA.length} regional hubs`}
              tone="text-emerald-400"
              icon={<Globe2 className="w-4 h-4" aria-hidden="true" />}
            />
            <label className="block">
              <span className="sr-only">Geography</span>
              <span className="relative block">
                <select
                  value={selectedGeography}
                  onChange={(e) => setSelectedGeography(e.target.value)}
                  className={selectClass}
                >
                  {AFRICA_REGIONS_DATA.map(r => (
                    <option key={r.name} value={r.name}>{r.name} ({r.countries.length} Countries)</option>
                  ))}
                  <option value="Pan-African Multi-Country">Pan-African Multi-Country (All Hubs)</option>
                  <option value="Global Connector (US/EU/Africa)">Global Connector (US / EU / Africa)</option>
                </select>
                <SelectChevron />
              </span>
            </label>
            <p className="p-3 rounded-xl bg-[#050505] border border-white/[0.08] text-[13px] text-[#E0E0E0] leading-relaxed">
              Full primary intelligence network coverage, regulatory monitoring, and distributor due diligence in target geography.
            </p>
          </motion.div>

          {/* 3. Capability */}
          <motion.div {...fadeIn} className="min-w-0 bg-[#0A0A0A] border border-white/[0.08] rounded-2xl p-5 space-y-4">
            <StepHeader
              n={3}
              label="Capability"
              meta={`${SERVICE_PILLARS.length} service pillars`}
              tone="text-sky-400"
              icon={<Layers className="w-4 h-4" aria-hidden="true" />}
            />
            <div role="radiogroup" aria-label="Capability" className="grid grid-cols-2 gap-2">
              {SERVICE_PILLARS.map(p => {
                const active = p.id === selectedCapabilityId;
                return (
                  <button
                    key={p.id}
                    type="button"
                    role="radio"
                    aria-checked={active}
                    onClick={() => setSelectedCapabilityId(p.id)}
                    className={`mc-tap px-3 py-2 rounded-xl border text-[13px] font-medium leading-tight text-left transition-colors duration-200 active:scale-[0.98] ${
                      active
                        ? 'bg-[#0D0F17] border-indigo-500/35 text-white'
                        : 'bg-[#050505] border-white/[0.08] text-gray-400 hover:text-white hover:border-white/20'
                    }`}
                  >
                    {p.name}
                  </button>
                );
              })}
            </div>
            <p className="p-3 rounded-xl bg-[#050505] border border-white/[0.08] text-[13px] text-[#E0E0E0] leading-relaxed">
              {selectedPillar.tagline}
            </p>
          </motion.div>
        </div>

        {/* Synthesized output */}
        <motion.div
          {...fadeIn}
          className="bg-[#0A0A0A] border border-indigo-500/35 rounded-2xl p-5 md:p-8 space-y-6"
        >
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-5 border-b border-white/[0.08]">
            <div className="min-w-0">
              <div className="flex items-center gap-2 text-[11px] font-mono text-indigo-400 uppercase tracking-wider">
                <Box className="w-4 h-4 shrink-0" aria-hidden="true" /> Synthesized 3D Matrix Blueprint
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mt-2 leading-tight">
                {selectedPillar.name} for {selectedIndustry.name} in {selectedGeography}
              </h3>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-[11px] font-mono border border-indigo-500/35">
                {selectedIndustry.name}
              </span>
              <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-[11px] font-mono border border-emerald-500/30">
                {selectedGeography}
              </span>
              <span className="px-3 py-1 rounded-full bg-sky-500/10 text-sky-400 text-[11px] font-mono border border-sky-500/30">
                {selectedPillar.name}
              </span>
            </div>
          </div>

          {/* Swipe rail on phones, grid from md */}
          <motion.div
            key={`${selectedIndustryId}|${selectedGeography}|${selectedCapabilityId}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: reduceMotion ? 0 : 0.15, ease: EASE }}
            className="space-y-6"
          >
            <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory -mx-5 px-5 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:mx-0 md:px-0 md:pb-0 md:grid md:grid-cols-2 xl:grid-cols-4 md:gap-4 md:overflow-visible md:snap-none">
              {blocks.map(b => (
                <div key={b.key} className="snap-start shrink-0 w-[82%] max-w-xs md:w-auto md:max-w-none p-4 rounded-xl bg-[#050505] border border-white/[0.08] space-y-2.5 text-[13px] sm:text-sm text-[#E0E0E0]">
                  <div className={`text-[13px] font-semibold flex items-center gap-1.5 ${b.tone}`}>
                    {b.icon} {b.title}
                  </div>
                  {b.body}
                </div>
              ))}
            </div>
            <p className="md:hidden -mt-3 text-[11px] font-mono uppercase tracking-wider text-gray-400">
              Swipe for all {blocks.length} blocks
            </p>

            {/* Measured outcome */}
            <div className="p-4 rounded-xl bg-[#050505] border border-white/[0.08] space-y-1.5">
              <div className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                <TrendingUp className="w-4 h-4" aria-hidden="true" /> Target Business Outcome
              </div>
              <p className="text-[13px] sm:text-sm text-[#E0E0E0] leading-relaxed flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" aria-hidden="true" />
                <span className="min-w-0">{selectedIndustry.illustrativeEngagement.outcomeFramework[0]}</span>
              </p>
            </div>
          </motion.div>

          <button
            type="button"
            onClick={handleLaunch}
            className="hidden lg:inline-flex mc-tap items-center gap-2 px-6 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-[13px] font-semibold text-white transition-colors active:scale-[0.98]"
          >
            Configure Full Blueprint <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </button>
        </motion.div>

        {/* Sticky CTA on phones / tablets */}
        <div className="lg:hidden sticky bottom-0 z-20 -mx-4 sm:-mx-6 px-4 sm:px-6 pt-3 mc-safe-bottom bg-[#050505]/95 border-t border-white/[0.08]">
          <button
            type="button"
            onClick={handleLaunch}
            className="mc-tap w-full flex items-center justify-center gap-2 px-6 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-[13px] font-semibold text-white transition-colors active:scale-[0.98]"
          >
            Configure Full Blueprint <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
};
