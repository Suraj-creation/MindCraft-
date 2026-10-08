import React, { useState } from 'react';
import { 
  Globe2, 
  MapPin, 
  CheckCircle2, 
  ArrowRight, 
  Compass, 
  Search, 
  Layers, 
  Sparkles, 
  GraduationCap, 
  BarChart3, 
  ShieldCheck, 
  FileText, 
  TrendingUp,
  Building2,
  Workflow
} from 'lucide-react';
import { MARKET_ENTRY_9STEPS, UNIVERSAL_INDUSTRIES, AFRICA_REGIONS_DATA } from '../data/industryAndAfricaData';
import { NavTab } from '../types';

interface Props {
  onNavigate: (tab: NavTab) => void;
  onSelectCountryForEngagement?: (country: string) => void;
  onSelectIndustryForEngagement?: (industry: string) => void;
}

export const MarketEntryFrameworkView: React.FC<Props> = ({ 
  onNavigate,
  onSelectCountryForEngagement,
  onSelectIndustryForEngagement
}) => {
  const [selectedCountry, setSelectedCountry] = useState('Kenya');
  const [selectedIndustry, setSelectedIndustry] = useState('Pharmaceuticals');
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const handleLaunchEngagement = () => {
    if (onSelectCountryForEngagement) onSelectCountryForEngagement(selectedCountry);
    if (onSelectIndustryForEngagement) onSelectIndustryForEngagement(selectedIndustry);
    onNavigate('engagement-builder');
  };

  const currentStep = MARKET_ENTRY_9STEPS[activeStepIndex];

  return (
    <div className="w-full min-h-screen bg-[#050505] text-white p-4 md:p-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 pb-6 border-b border-white/10">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="px-3 py-1 text-xs font-mono tracking-wider uppercase rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              Signature 9-Step Interactive Framework
            </span>
            <span className="text-xs text-neutral-400 font-mono">
              Pan-African Market Entry & De-risking Blueprint
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
            Entering an African Market?
          </h1>
          <p className="text-neutral-400 text-sm md:text-base mt-1 max-w-3xl">
            From initial addressable market sizing and competitor price teardowns to regulatory licensing, distributor due diligence, AI copilots, and ongoing governance.
          </p>
        </div>

        {/* Global Action */}
        <button
          onClick={handleLaunchEngagement}
          className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-xs font-semibold text-white transition-all shadow-[0_0_15px_rgba(99,102,241,0.3)] shrink-0 flex items-center gap-2"
        >
          Build a Market Entry Engagement <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Target Market Configuration Card */}
      <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-white/10">
          <div>
            <h2 className="text-lg font-semibold text-white">Contextualize the 9-Step Pathway</h2>
            <p className="text-xs text-neutral-400 mt-0.5">
              Select your target country and industry to adapt questions, investigations, and deliverables.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 bg-[#050505] border border-white/10 rounded-xl px-3 py-1.5">
              <MapPin className="w-4 h-4 text-emerald-400" />
              <select
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                className="bg-transparent text-xs text-white focus:outline-none"
              >
                {AFRICA_REGIONS_DATA.flatMap(r => r.countries).map(c => (
                  <option key={c} value={c} className="bg-[#0a0a0a] text-white">{c}</option>
                ))}
              </select>
            </div>

            <div className="flex items-center gap-2 bg-[#050505] border border-white/10 rounded-xl px-3 py-1.5">
              <Building2 className="w-4 h-4 text-indigo-400" />
              <select
                value={selectedIndustry}
                onChange={(e) => setSelectedIndustry(e.target.value)}
                className="bg-transparent text-xs text-white focus:outline-none"
              >
                {UNIVERSAL_INDUSTRIES.map(i => (
                  <option key={i.id} value={i.name} className="bg-[#0a0a0a] text-white">{i.name}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* 9-Step Progression Navigator */}
        <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-9 gap-2 pt-2">
          {MARKET_ENTRY_9STEPS.map((step, idx) => {
            const isActive = activeStepIndex === idx;
            return (
              <button
                key={step.stepNumber}
                onClick={() => setActiveStepIndex(idx)}
                className={`p-2.5 rounded-xl border text-center transition-all ${
                  isActive
                    ? 'bg-indigo-600 text-white border-indigo-400 shadow-[0_0_12px_rgba(99,102,241,0.3)]'
                    : 'bg-[#050505] border-white/5 text-neutral-400 hover:text-white hover:border-white/20'
                }`}
              >
                <div className="text-[10px] font-mono font-bold">{step.stepNumber}</div>
                <div className="text-[11px] font-medium truncate mt-0.5">{step.title.split(' ')[0]}</div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Step Deep-Dive Bento Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Step Details (8 cols) */}
        <div className="lg:col-span-8 bg-[#0a0a0a] border border-indigo-500/40 rounded-2xl p-6 md:p-8 space-y-6 shadow-[0_0_20px_rgba(99,102,241,0.15)]">
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <span className="p-3 rounded-2xl bg-indigo-600 text-white font-mono font-bold text-lg">
                {currentStep.stepNumber}
              </span>
              <div>
                <span className="text-xs font-mono uppercase text-indigo-400">Step {currentStep.stepNumber} of 09</span>
                <h3 className="text-xl md:text-2xl font-bold text-white mt-0.5">{currentStep.title}</h3>
              </div>
            </div>
            <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
              {selectedCountry} • {selectedIndustry}
            </span>
          </div>

          <div className="p-4 rounded-xl bg-[#050505] border border-white/5 space-y-1">
            <div className="text-xs font-mono text-indigo-400 uppercase">Core Strategic Question:</div>
            <p className="text-sm md:text-base text-white font-medium italic">
              "{currentStep.question}"
            </p>
          </div>

          <div className="space-y-2">
            <div className="text-xs font-mono text-neutral-400 uppercase">MindCraft Field Scope & Methodology:</div>
            <p className="text-sm text-neutral-300 leading-relaxed p-4 rounded-xl bg-[#050505] border border-white/5">
              {currentStep.mindcraftScope}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-gradient-to-r from-indigo-950/40 to-[#050505] border border-indigo-500/30 flex items-center justify-between gap-4">
            <div>
              <div className="text-xs font-mono text-neutral-400 uppercase">Key Deliverable:</div>
              <div className="text-sm font-semibold text-white">{currentStep.deliverable}</div>
            </div>
            <FileText className="w-6 h-6 text-indigo-400 shrink-0" />
          </div>

          {/* Previous / Next Controls */}
          <div className="flex items-center justify-between pt-4 border-t border-white/10">
            <button
              onClick={() => setActiveStepIndex(Math.max(0, activeStepIndex - 1))}
              disabled={activeStepIndex === 0}
              className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-medium text-white disabled:opacity-30 transition-all"
            >
              Previous Step
            </button>
            <div className="text-xs font-mono text-neutral-500">
              {activeStepIndex + 1} of 9
            </div>
            <button
              onClick={() => setActiveStepIndex(Math.min(MARKET_ENTRY_9STEPS.length - 1, activeStepIndex + 1))}
              disabled={activeStepIndex === MARKET_ENTRY_9STEPS.length - 1}
              className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-xs font-semibold text-white disabled:opacity-30 transition-all"
            >
              Next Step
            </button>
          </div>
        </div>

        {/* Right Sidebar: All 9 Steps Overview (4 cols) */}
        <div className="lg:col-span-4 bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 space-y-4">
          <div className="text-sm font-semibold text-white flex items-center gap-2">
            <Workflow className="w-4 h-4 text-indigo-400" />
            Complete 9-Step Roadmap
          </div>
          <div className="space-y-2 text-xs">
            {MARKET_ENTRY_9STEPS.map((step, idx) => (
              <button
                key={step.stepNumber}
                onClick={() => setActiveStepIndex(idx)}
                className={`w-full text-left p-3 rounded-xl border transition-all flex items-center justify-between ${
                  activeStepIndex === idx
                    ? 'bg-indigo-950/60 border-indigo-500/60 text-white font-medium'
                    : 'bg-[#050505] border-white/5 text-neutral-400 hover:text-white'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span className="font-mono text-[10px] text-indigo-400">{step.stepNumber}</span>
                  <span className="truncate">{step.title}</span>
                </div>
                {activeStepIndex === idx && <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" />}
              </button>
            ))}
          </div>

          <div className="pt-4 border-t border-white/10 space-y-3">
            <button
              onClick={handleLaunchEngagement}
              className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-xs font-semibold text-white transition-all shadow-[0_0_15px_rgba(99,102,241,0.3)] flex items-center justify-center gap-2"
            >
              Build Engagement Blueprint <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
