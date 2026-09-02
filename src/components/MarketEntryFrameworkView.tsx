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
    <div className="w-full min-h-screen bg-[#F4F1EA] text-[#16191A] py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-[rgba(20,25,26,0.12)]">
          <div>
            <div className="font-mono text-[11px] tracking-widest uppercase text-[#C0562F] mb-3">
              Signature 9-Step Interactive Framework
            </div>
            <h1 className="font-serif text-3xl md:text-5xl font-normal tracking-tight text-[#16191A]">
              Entering an African Market?
            </h1>
            <p className="text-[#4C524E] text-sm md:text-base mt-2 max-w-2xl leading-relaxed">
              From addressable market sizing and competitor price teardowns to regulatory licensing, distributor due diligence, and ongoing operational governance.
            </p>
          </div>

          <button
            onClick={handleLaunchEngagement}
            className="px-6 py-3 rounded-lg bg-[#123A2E] hover:bg-[#C0562F] text-xs font-semibold text-white transition-colors shrink-0 flex items-center gap-2 self-start lg:self-auto"
          >
            <span>Build a Market Entry Engagement</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Target Market Configuration Card */}
        <div className="bg-[#FBFAF6] border border-[rgba(20,25,26,0.12)] rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-[rgba(20,25,26,0.08)]">
            <div>
              <h2 className="font-serif text-xl sm:text-2xl font-normal text-[#16191A]">Contextualize the 9-Step Pathway</h2>
              <p className="text-xs text-[#4C524E] mt-0.5">
                Select your target jurisdiction and industry vertical to tailor questions and deliverables.
              </p>
            </div>
            
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2 bg-white border border-[rgba(20,25,26,0.12)] rounded-lg px-3 py-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#123A2E]" />
                <select
                  value={selectedCountry}
                  onChange={(e) => setSelectedCountry(e.target.value)}
                  className="bg-transparent text-xs text-[#16191A] focus:outline-none font-medium"
                >
                  {AFRICA_REGIONS_DATA.flatMap(r => r.countries).map(c => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>

              <div className="flex items-center gap-2 bg-white border border-[rgba(20,25,26,0.12)] rounded-lg px-3 py-1.5">
                <Building2 className="w-3.5 h-3.5 text-[#C0562F]" />
                <select
                  value={selectedIndustry}
                  onChange={(e) => setSelectedIndustry(e.target.value)}
                  className="bg-transparent text-xs text-[#16191A] focus:outline-none font-medium"
                >
                  {UNIVERSAL_INDUSTRIES.map(i => (
                    <option key={i.id} value={i.name}>{i.name}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* 9-Step Progression Navigator */}
          <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-9 gap-2">
            {MARKET_ENTRY_9STEPS.map((step, idx) => {
              const isActive = activeStepIndex === idx;
              return (
                <button
                  key={step.stepNumber}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`p-2.5 rounded-lg border text-center transition-all ${
                    isActive
                      ? 'bg-[#123A2E] text-white border-[#123A2E] shadow-sm font-semibold'
                      : 'bg-white border-[rgba(20,25,26,0.1)] text-[#4C524E] hover:border-[#123A2E]'
                  }`}
                >
                  <div className="font-mono text-[10px]">{step.stepNumber}</div>
                  <div className="text-[11px] truncate mt-0.5">{step.title.split(' ')[0]}</div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Step Deep-Dive Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Step Details (8 cols) */}
          <div className="lg:col-span-8 bg-[#FBFAF6] border border-[rgba(20,25,26,0.14)] rounded-2xl p-6 md:p-8 space-y-6 shadow-sm">
            <div className="flex items-center justify-between pb-4 border-b border-[rgba(20,25,26,0.08)]">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl bg-[#123A2E] text-white font-mono font-bold text-base flex items-center justify-center">
                  {currentStep.stepNumber}
                </span>
                <div>
                  <span className="text-xs font-mono uppercase text-[#C0562F] font-bold">Step {currentStep.stepNumber} of 09</span>
                  <h3 className="font-serif text-2xl font-normal text-[#16191A] mt-0.5">{currentStep.title}</h3>
                </div>
              </div>
              <span className="text-xs font-mono text-[#123A2E] bg-[#123A2E]/10 px-3 py-1 rounded-full font-bold">
                {selectedCountry} • {selectedIndustry}
              </span>
            </div>

            <div className="p-4 rounded-xl bg-white border border-[rgba(20,25,26,0.08)] space-y-1">
              <div className="font-mono text-[10px] uppercase text-[#C0562F] font-bold">Core Strategic Question</div>
              <p className="text-sm md:text-base text-[#16191A] font-serif italic">
                "{currentStep.question}"
              </p>
            </div>

            <div className="space-y-2">
              <div className="font-mono text-[10px] uppercase text-[#8A8578] font-bold">MindCraft Field Scope & Methodology</div>
              <p className="text-xs sm:text-sm text-[#3B4441] leading-relaxed p-4 rounded-xl bg-white border border-[rgba(20,25,26,0.08)]">
                {currentStep.mindcraftScope}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#123A2E]/5 border border-[#123A2E]/15 flex items-center justify-between gap-4">
              <div>
                <div className="font-mono text-[10px] uppercase text-[#123A2E] font-bold">Key Deliverable</div>
                <div className="text-sm font-semibold text-[#16191A]">{currentStep.deliverable}</div>
              </div>
              <FileText className="w-6 h-6 text-[#123A2E] shrink-0" />
            </div>

            {/* Step Controls */}
            <div className="flex items-center justify-between pt-4 border-t border-[rgba(20,25,26,0.08)]">
              <button
                onClick={() => setActiveStepIndex(Math.max(0, activeStepIndex - 1))}
                disabled={activeStepIndex === 0}
                className="px-4 py-2 rounded-lg bg-white border border-[rgba(20,25,26,0.1)] text-xs font-semibold text-[#4C524E] hover:text-[#16191A] disabled:opacity-30 transition-all"
              >
                Previous Step
              </button>
              <div className="text-xs font-mono text-[#8A8578]">
                {activeStepIndex + 1} of 9
              </div>
              <button
                onClick={() => setActiveStepIndex(Math.min(MARKET_ENTRY_9STEPS.length - 1, activeStepIndex + 1))}
                disabled={activeStepIndex === MARKET_ENTRY_9STEPS.length - 1}
                className="px-4 py-2 rounded-lg bg-[#123A2E] hover:bg-[#C0562F] text-xs font-semibold text-white disabled:opacity-30 transition-all"
              >
                Next Step
              </button>
            </div>
          </div>

          {/* Right Sidebar: All 9 Steps Overview (4 cols) */}
          <div className="lg:col-span-4 bg-[#FBFAF6] border border-[rgba(20,25,26,0.12)] rounded-2xl p-6 space-y-4 shadow-sm">
            <div className="font-serif text-base font-normal text-[#16191A] flex items-center gap-2">
              <Workflow className="w-4 h-4 text-[#C0562F]" />
              <span>Complete 9-Step Roadmap</span>
            </div>
            
            <div className="space-y-1.5 text-xs">
              {MARKET_ENTRY_9STEPS.map((step, idx) => (
                <button
                  key={step.stepNumber}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`w-full text-left p-3 rounded-xl border transition-all flex items-center justify-between ${
                    activeStepIndex === idx
                      ? 'bg-[#123A2E] text-white border-[#123A2E] font-medium shadow-sm'
                      : 'bg-white border-[rgba(20,25,26,0.08)] text-[#4C524E] hover:border-[#123A2E]'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className={`font-mono text-[10px] ${activeStepIndex === idx ? 'text-[#D98A5F]' : 'text-[#8A8578]'}`}>{step.stepNumber}</span>
                    <span className="truncate">{step.title}</span>
                  </div>
                  {activeStepIndex === idx && <CheckCircle2 className="w-3.5 h-3.5 text-[#D98A5F]" />}
                </button>
              ))}
            </div>

            <div className="pt-4 border-t border-[rgba(20,25,26,0.08)]">
              <button
                onClick={handleLaunchEngagement}
                className="w-full py-3 rounded-lg bg-[#123A2E] hover:bg-[#C0562F] text-xs font-semibold text-white transition-colors flex items-center justify-center gap-2"
              >
                <span>Build Engagement Blueprint</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
