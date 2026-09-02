import React, { useState } from 'react';
import { NavTab, RoleLens } from '../types';
import { 
  ArrowRight, 
  Globe2, 
  Layers, 
  Workflow, 
  Compass, 
  BarChart3, 
  GraduationCap, 
  Cpu, 
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

interface HeroOperatingSystemProps {
  setActiveTab: (tab: NavTab) => void;
  roleLens?: RoleLens;
  onOpenIntake: () => void;
}

export const HeroOperatingSystem: React.FC<HeroOperatingSystemProps> = ({
  setActiveTab,
  roleLens = 'all',
  onOpenIntake
}) => {
  const [selectedStage, setSelectedStage] = useState<number>(0);

  const glance = [
    { k: 'Founded', v: '2026 · Nairobi, Kenya' },
    { k: 'Core expertise', v: 'Life Sciences' },
    { k: 'Geographic reach', v: 'Africa · Europe · USA' },
    { k: 'Service pillars', v: 'Four, integrated' },
  ];

  const operatingSpine = [
    {
      k: '01',
      label: 'Market',
      role: 'The terrain',
      body: 'We map the real structure of your market — its regulatory environment, channels, stakeholders, and competitive dynamics — before any strategic recommendation is made.'
    },
    {
      k: '02',
      label: 'Intelligence',
      role: 'Evidence',
      body: 'Primary and secondary research turn that terrain into decision-ready evidence: market sizing, competitive intelligence, and KOL/stakeholder insights.'
    },
    {
      k: '03',
      label: 'Strategy',
      role: 'Direction',
      body: 'Business consulting translates evidence into a clear strategic direction — where to play, how to win, and what to prioritise, grounded in sector reality.'
    },
    {
      k: '04',
      label: 'AI Capability',
      role: 'People',
      body: 'Applied, function-specific AI training builds the internal literacy and champions your teams need to execute with modern tools.'
    },
    {
      k: '05',
      label: 'AI Systems',
      role: 'Technology',
      body: 'Enterprise AI solutions operationalize intelligence — from market-monitoring platforms to regulatory automation embedded in daily workflows.'
    },
    {
      k: '06',
      label: 'Adoption',
      role: 'Embedding',
      body: 'Change management, governance and reinforcement ensure the strategy and systems are actually adopted — safely and consistently.'
    },
    {
      k: '07',
      label: 'Business Impact',
      role: 'Outcome',
      body: 'Everything ties back to measurable outcomes — efficiency, accuracy, and commercial growth — evaluated against the success criteria set at discovery.'
    }
  ];

  return (
    <div className="bg-[#F4F1EA]">
      {/* 1. HERO ABOVE THE FOLD */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-12 sm:pb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Left Column: Clear Value Proposition */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2.5 font-mono text-[11px] tracking-widest uppercase text-[#C0562F] font-semibold">
            <span className="w-5 h-[1.5px] bg-[#C0562F]"></span>
            <span>AI-Powered Growth · Grounded in Intelligence</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#16191A] leading-[1.05] tracking-tight font-normal">
            From market complexity to{' '}
            <em className="italic text-[#123A2E] font-normal">
              measurable business impact.
            </em>
          </h1>

          <p className="text-base sm:text-lg text-[#4C524E] leading-relaxed max-w-2xl">
            MindCraft combines <strong className="text-[#16191A] font-semibold">Business Consulting</strong>, <strong className="text-[#16191A] font-semibold">Market Research</strong>, <strong className="text-[#16191A] font-semibold">AI Training</strong>, and <strong className="text-[#16191A] font-semibold">AI Enterprise Solutions</strong> — with deep Life Sciences expertise and a focused understanding of African markets.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={onOpenIntake}
              id="hero-primary-cta"
              className="px-6 py-3.5 rounded-lg bg-[#123A2E] hover:bg-[#C0562F] text-[#F4F1EA] font-semibold text-sm shadow-sm transition-all duration-150 flex items-center space-x-2"
            >
              <span>Start a Conversation</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => setActiveTab('capabilities')}
              id="hero-secondary-cta"
              className="px-5 py-3.5 rounded-lg bg-transparent hover:bg-black/5 text-[#16191A] font-semibold text-sm border border-[rgba(20,25,26,0.22)] transition-all flex items-center space-x-2"
            >
              <span>Explore Capabilities</span>
              <ChevronRight className="w-4 h-4 text-[#8A8578]" />
            </button>
          </div>

          {/* Quick Factual At-A-Glance Indicators */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-[rgba(20,25,26,0.12)]">
            {glance.map((g, idx) => (
              <div key={idx} className="space-y-1">
                <div className="font-mono text-[10px] tracking-wider uppercase text-[#8A8578]">
                  {g.k}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-[#16191A]">
                  {g.v}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: 7-Stage MindCraft Operating Spine */}
        <div className="lg:col-span-5">
          <div className="border border-[rgba(20,25,26,0.14)] rounded-2xl bg-[#FBFAF6] p-5 sm:p-6 shadow-sm">
            
            <div className="flex items-center justify-between pb-3 mb-2 border-b border-[rgba(20,25,26,0.08)]">
              <span className="font-mono text-[10px] tracking-widest uppercase text-[#8A8578]">
                The MindCraft Operating Model
              </span>
              <span className="font-mono text-[10px] text-[#C0562F] font-semibold">
                {operatingSpine[selectedStage].k} / 07
              </span>
            </div>

            {/* Stage Selector Buttons */}
            <div className="space-y-1">
              {operatingSpine.map((stage, idx) => {
                const isSelected = selectedStage === idx;
                return (
                  <button
                    key={stage.k}
                    onClick={() => setSelectedStage(idx)}
                    className={`w-full text-left flex items-start gap-3 p-2.5 rounded-lg transition-all ${
                      isSelected
                        ? 'bg-[rgba(18,58,46,0.08)] text-[#123A2E]'
                        : 'hover:bg-black/5 text-[#3B4441]'
                    }`}
                  >
                    <span className={`font-mono text-[11px] pt-0.5 w-6 flex-none ${isSelected ? 'text-[#C0562F] font-bold' : 'text-[#8A8578]'}`}>
                      {stage.k}
                    </span>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className={`text-sm font-semibold ${isSelected ? 'text-[#123A2E]' : 'text-[#16191A]'}`}>
                          {stage.label}
                        </span>
                        <span className="text-[11px] font-mono text-[#8A8578]">
                          {stage.role}
                        </span>
                      </div>
                    </div>
                    <span className={`w-2 h-2 rounded-full mt-1.5 flex-none ${isSelected ? 'bg-[#C0562F]' : 'bg-[rgba(20,25,26,0.15)]'}`} />
                  </button>
                );
              })}
            </div>

            {/* Active Stage Explanation */}
            <div className="mt-3 pt-3.5 border-t border-[rgba(20,25,26,0.08)]">
              <p className="text-xs sm:text-sm text-[#3B4441] leading-relaxed">
                {operatingSpine[selectedStage].body}
              </p>
            </div>

          </div>
        </div>

      </section>

      {/* 2. "WHERE DO YOU WANT TO EXPLORE?" THREE GATEWAY PATHWAYS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16">
        <div className="border-t border-[rgba(20,25,26,0.12)] pt-8">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-6">
            <h2 className="font-serif text-2xl sm:text-3xl text-[#16191A] font-normal tracking-tight">
              Where do you want to explore?
            </h2>
            <span className="font-mono text-[11px] tracking-wider uppercase text-[#8A8578]">
              Three ways in · One unified intelligence system
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            
            {/* Gateway 1: By Industry */}
            <button
              onClick={() => setActiveTab('industries')}
              className="p-6 rounded-xl border border-[rgba(20,25,26,0.14)] bg-[#FBFAF6] hover:border-[#123A2E] hover:shadow-md transition-all text-left flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <span className="font-mono text-[10px] tracking-widest uppercase text-[#C0562F] font-semibold">
                  By Industry Vertical
                </span>
                <h3 className="font-serif text-2xl text-[#16191A] group-hover:text-[#123A2E] leading-snug">
                  “I know my sector.”
                </h3>
                <p className="text-xs sm:text-sm text-[#4C524E] leading-relaxed">
                  24 industries, from deep Life Sciences (Pharma, Devices, Diagnostics) to diversified sectors (Telco, Financial Services, Energy, Mining, Agribusiness).
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-[rgba(20,25,26,0.08)] flex items-center justify-between text-xs font-semibold text-[#123A2E]">
                <span>Explore 24 Industries</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </button>

            {/* Gateway 2: By Geography */}
            <button
              onClick={() => setActiveTab('africa-explorer')}
              className="p-6 rounded-xl border border-[rgba(20,25,26,0.14)] bg-[#123A2E] text-[#EDE7D9] hover:bg-[#0E2C23] hover:shadow-md transition-all text-left flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <span className="font-mono text-[10px] tracking-widest uppercase text-[#D98A5F] font-semibold">
                  By Geography & Markets
                </span>
                <h3 className="font-serif text-2xl text-[#F4F1EA] leading-snug">
                  “I need market intelligence.”
                </h3>
                <p className="text-xs sm:text-sm text-[rgba(237,231,217,0.75)] leading-relaxed">
                  Four African regional clusters, 45 national market dossiers, and bidirectional trade corridors linking Africa with Europe and the United States.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-[rgba(237,231,217,0.15)] flex items-center justify-between text-xs font-semibold text-[#D98A5F]">
                <span>Explore African Hub</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </button>

            {/* Gateway 3: By Business Challenge */}
            <button
              onClick={() => setActiveTab('question-to-outcome')}
              className="p-6 rounded-xl border border-[rgba(20,25,26,0.14)] bg-[#FBFAF6] hover:border-[#123A2E] hover:shadow-md transition-all text-left flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <span className="font-mono text-[10px] tracking-widest uppercase text-[#C0562F] font-semibold">
                  By Business Challenge
                </span>
                <h3 className="font-serif text-2xl text-[#16191A] group-hover:text-[#123A2E] leading-snug">
                  “I know the problem.”
                </h3>
                <p className="text-xs sm:text-sm text-[#4C524E] leading-relaxed">
                  Start directly from the question you face (market entry, competitive intelligence, AI capability, process automation) and trace the full path to outcome.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-[rgba(20,25,26,0.08)] flex items-center justify-between text-xs font-semibold text-[#123A2E]">
                <span>See Question to Outcome</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </button>

          </div>
        </div>
      </section>
    </div>
  );
};
