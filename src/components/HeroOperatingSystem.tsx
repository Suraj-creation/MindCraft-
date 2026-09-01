import React, { useState } from 'react';
import { NavTab, RoleLens } from '../types';
import { 
  ArrowRight, 
  Sparkles, 
  Globe2, 
  Dna, 
  Compass, 
  BarChart3, 
  GraduationCap, 
  Cpu, 
  CheckCircle2, 
  ShieldCheck, 
  ChevronRight,
  TrendingUp,
  Workflow,
  Search,
  Activity,
  Layers
} from 'lucide-react';

interface HeroOperatingSystemProps {
  setActiveTab: (tab: NavTab) => void;
  roleLens: RoleLens;
  onOpenIntake: () => void;
}

export const HeroOperatingSystem: React.FC<HeroOperatingSystemProps> = ({
  setActiveTab,
  roleLens,
  onOpenIntake
}) => {
  const [selectedStage, setSelectedStage] = useState<number>(0);

  const operatingStages = [
    {
      id: 'market-intel',
      step: '01',
      title: 'Market Intelligence',
      sub: 'Primary Surveys & Pan-African Scans',
      pillar: 'Market Research',
      color: 'text-indigo-400',
      badgeBorder: 'border-indigo-400/30 text-indigo-400',
      details: 'Unvarnished primary physician/patient surveys, regulatory scans across 20+ African agencies, KOL mapping, and competitive pipeline intelligence.',
      keyOutput: 'Decision-Ready Intelligence & Sizing Models'
    },
    {
      id: 'strategy',
      step: '02',
      title: 'Strategic Advisory',
      sub: 'Roadmaps, SOPs & Market Entry',
      pillar: 'Business Consulting',
      color: 'text-emerald-400',
      badgeBorder: 'border-emerald-400/30 text-emerald-400',
      details: 'Life Sciences market entry blueprints, portfolio prioritization, operating model redesign, and AI-readiness diagnostics.',
      keyOutput: 'Board-Ready Strategic Roadmap'
    },
    {
      id: 'capability',
      step: '03',
      title: 'AI Capability',
      sub: 'Executive & Workforce Enablement',
      pillar: 'AI Training',
      color: 'text-amber-400',
      badgeBorder: 'border-amber-400/30 text-amber-400',
      details: 'Applied executive literacy, function-specific prompt engineering (commercial, regulatory, clinical), and certified internal AI champion cohorts.',
      keyOutput: 'Certified Internal AI Champions'
    },
    {
      id: 'systems',
      step: '04',
      title: 'AI Deployment',
      sub: 'Production Tenant-Isolated RAG',
      pillar: 'AI Enterprise Solutions',
      color: 'text-indigo-400',
      badgeBorder: 'border-indigo-400/30 text-indigo-400',
      details: 'Governed regulatory monitoring agents, automated pharmacovigilance screening, KOL influence graphs, and field sales AI copilots.',
      keyOutput: 'Production AI Infrastructure'
    },
    {
      id: 'impact',
      step: '05',
      title: 'Continuous Value',
      sub: 'Governed Clinical & Commercial ROI',
      pillar: 'Continuous Value',
      color: 'text-rose-400',
      badgeBorder: 'border-rose-400/30 text-rose-400',
      details: 'Accelerated market entry, compliance audit certainty, reduced clinical trial friction, and sustained commercial revenue growth.',
      keyOutput: 'Verified Commercial & Clinical ROI'
    }
  ];

  return (
    <section className="relative pt-24 pb-16 overflow-hidden bg-[#050505] bg-grid-pattern border-b border-white/10">
      {/* Ambient background glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-radial-glow pointer-events-none opacity-90" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Bento Grid Header Stage */}
        <div className="grid grid-cols-12 gap-4 mb-6">
          
          {/* Bento Cell 1: Master Hero Display (Span 8) */}
          <div className="col-span-12 lg:col-span-8 bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 sm:p-8 relative overflow-hidden flex flex-col justify-between group">
            <div className="flex justify-between items-start mb-6">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-indigo-400 border border-indigo-400/30 px-2.5 py-0.5 rounded bg-indigo-950/40">
                  MindCraft Core OS // v2026
                </span>
                <span className="text-[10px] font-mono uppercase tracking-widest text-white/40 border border-white/10 px-2.5 py-0.5 rounded">
                  Nairobi HQ · Pan-Africa
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest hidden sm:inline">Active Link</span>
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
              </div>
            </div>

            <div>
              <h1 className="text-3xl sm:text-5xl font-light tracking-tight text-white leading-[1.15] mb-5">
                AI-Powered Growth <br />
                <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-teal-300 to-emerald-300">
                  Grounded in African Context.
                </span>
              </h1>

              <p className="text-sm sm:text-base text-white/70 leading-relaxed font-normal mb-8 max-w-2xl">
                MindCraft bridges <span className="text-white font-medium">Business Consulting</span>, <span className="text-white font-medium">Primary Market Intelligence</span>, <span className="text-white font-medium">AI Workforce Training</span>, and <span className="text-white font-medium">Production AI Software</span> across Pan-African healthcare, pharmaceuticals, diagnostics, and diversified enterprise markets.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onOpenIntake}
                id="hero-primary-cta"
                className="px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-xs sm:text-sm shadow-[0_0_15px_rgba(99,102,241,0.4)] transition-all flex items-center space-x-2"
              >
                <span>Start Engagement</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => setActiveTab('operating-model')}
                id="hero-secondary-cta"
                className="px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white/90 text-xs sm:text-sm font-mono uppercase tracking-wider border border-white/10 hover:border-white/20 transition-all flex items-center space-x-2"
              >
                <span>Explore Method</span>
                <ChevronRight className="w-3.5 h-3.5 text-indigo-400" />
              </button>

              <button
                onClick={() => setActiveTab('question-to-outcome')}
                className="px-4 py-3 rounded-xl bg-transparent hover:bg-white/5 text-white/60 hover:text-white text-xs sm:text-sm font-mono border border-white/10 transition-colors flex items-center space-x-2"
              >
                <Workflow className="w-3.5 h-3.5 text-amber-400" />
                <span>Question-to-Outcome</span>
              </button>
            </div>
          </div>

          {/* Bento Cell 2: Live Telemetry & Allocation (Span 4) */}
          <div className="col-span-12 lg:col-span-4 flex flex-col gap-4">
            
            {/* Telemetry Metric Block 1 */}
            <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-5 flex flex-col justify-between flex-1">
              <div className="flex justify-between items-start">
                <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">
                  Intelligence Accuracy
                </span>
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
              </div>
              <div className="my-3">
                <div className="text-3xl sm:text-4xl font-light text-white mb-1">
                  98.4<span className="text-lg text-white/30 font-mono">%</span>
                </div>
                <div className="text-[11px] text-white/40 font-mono uppercase tracking-wider">
                  Harmonized Dossier Precision · 12 African Nations
                </div>
              </div>
              <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                <div className="w-[98.4%] h-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>
              </div>
            </div>

            {/* Telemetry Metric Block 2 */}
            <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-5 flex flex-col justify-between flex-1">
              <div className="flex justify-between items-start">
                <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">
                  Active Corridors
                </span>
                <span className="text-xs font-mono text-indigo-400 border border-indigo-500/20 px-2 py-0.5 rounded bg-indigo-950/30">
                  HQ NAIROBI
                </span>
              </div>
              <div className="grid grid-cols-3 gap-2 my-2 text-center font-mono">
                <div className="p-2 rounded-xl bg-white/5 border border-white/5">
                  <div className="text-[10px] text-white/40 uppercase">EAC</div>
                  <div className="text-base font-medium text-white">4 Markets</div>
                </div>
                <div className="p-2 rounded-xl bg-white/5 border border-white/5">
                  <div className="text-[10px] text-white/40 uppercase">ECOWAS</div>
                  <div className="text-base font-medium text-white">3 Markets</div>
                </div>
                <div className="p-2 rounded-xl bg-white/5 border border-white/5">
                  <div className="text-[10px] text-white/40 uppercase">SADC</div>
                  <div className="text-base font-medium text-white">5 Markets</div>
                </div>
              </div>
              <div className="flex justify-between items-center text-[10px] font-mono text-white/40 pt-1">
                <span>PPB · NAFDAC · SAHPRA</span>
                <span className="text-emerald-400">SYNCED</span>
              </div>
            </div>

          </div>

        </div>

        {/* Interactive Operating System Value Chain Bento Grid */}
        <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 sm:p-7 shadow-2xl mb-6">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 mb-5 border-b border-white/10 gap-3">
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-indigo-400 border border-indigo-400/30 px-2 py-0.5 rounded">
                  Operating Model Value Chain
                </span>
                <span className="text-[10px] font-mono uppercase text-white/40">
                  Interactive Stages
                </span>
              </div>
              <h2 className="text-lg font-normal text-white mt-1">
                From Raw Market Complexity to Scalable Production Value
              </h2>
            </div>

            <div className="text-[11px] font-mono text-white/40">
              [Click any stage below to inspect]
            </div>
          </div>

          {/* Value Chain Stages Bento Cells */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 mb-5">
            {operatingStages.map((stage, idx) => {
              const isSelected = selectedStage === idx;
              return (
                <button
                  key={stage.id}
                  onClick={() => setSelectedStage(idx)}
                  id={`hero-stage-${stage.id}`}
                  className={`text-left p-4 rounded-xl border transition-all relative overflow-hidden group ${
                    isSelected 
                      ? 'bg-indigo-950/30 border-indigo-500/50 shadow-[0_0_15px_rgba(99,102,241,0.2)]' 
                      : 'bg-[#050505] border-white/10 hover:border-white/20 hover:bg-white/5'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-bold text-white/40">
                      {stage.step}
                    </span>
                    <span className={`text-[9px] font-mono uppercase px-2 py-0.5 rounded border ${stage.badgeBorder}`}>
                      {stage.pillar}
                    </span>
                  </div>

                  <h3 className="text-xs font-bold text-white mb-1">
                    {stage.title}
                  </h3>

                  <p className="text-[11px] text-white/50 leading-snug">
                    {stage.sub}
                  </p>

                  {/* Active Indicator Bar */}
                  {isSelected && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.8)]" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Active Stage Deep-Dive Bento Panel */}
          <div className="rounded-xl bg-[#050505] border border-white/10 p-4 sm:p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1 max-w-3xl">
              <div className="flex items-center space-x-2 text-xs font-mono">
                <span className="font-semibold text-indigo-400">
                  STAGE {operatingStages[selectedStage].step}: {operatingStages[selectedStage].title}
                </span>
                <span className="text-white/20">|</span>
                <span className="text-white/50 text-[11px]">
                  Delivered by {operatingStages[selectedStage].pillar}
                </span>
              </div>
              <p className="text-xs text-white/70 leading-relaxed">
                {operatingStages[selectedStage].details}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 shrink-0">
              <div className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-right font-mono">
                <div className="text-[9px] uppercase text-white/40">
                  Deliverable Artifact
                </div>
                <div className="text-xs font-medium text-emerald-400">
                  {operatingStages[selectedStage].keyOutput}
                </div>
              </div>

              <button
                onClick={() => {
                  if (selectedStage === 0) setActiveTab('market-research');
                  else if (selectedStage === 1) setActiveTab('consulting');
                  else if (selectedStage === 2) setActiveTab('ai-training');
                  else if (selectedStage === 3) setActiveTab('ai-solutions');
                  else setActiveTab('question-to-outcome');
                }}
                className="px-3.5 py-2 rounded-xl bg-indigo-600/30 hover:bg-indigo-600/50 border border-indigo-500/40 text-indigo-300 text-xs font-mono flex items-center space-x-1.5 transition-colors"
              >
                <span>Deep Dive Pillar</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Four Integrated Pillars Summary Bento Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          <button
            onClick={() => setActiveTab('consulting')}
            className="p-4 rounded-2xl bg-[#0a0a0a] border border-white/10 hover:border-indigo-500/40 hover:bg-white/5 transition-all text-left group"
          >
            <div className="flex justify-between items-start mb-2">
              <div className="flex items-center space-x-2 text-indigo-400">
                <Compass className="w-4 h-4" />
                <span className="text-xs font-mono uppercase font-bold text-white group-hover:text-indigo-300">
                  Business Consulting
                </span>
              </div>
              <span className="text-[10px] font-mono text-white/30">01</span>
            </div>
            <p className="text-[11px] text-white/50">Strategy, Operating Models, SOPs & Governance</p>
          </button>

          <button
            onClick={() => setActiveTab('market-research')}
            className="p-4 rounded-2xl bg-[#0a0a0a] border border-white/10 hover:border-indigo-500/40 hover:bg-white/5 transition-all text-left group"
          >
            <div className="flex justify-between items-start mb-2">
              <div className="flex items-center space-x-2 text-indigo-400">
                <BarChart3 className="w-4 h-4" />
                <span className="text-xs font-mono uppercase font-bold text-white group-hover:text-indigo-300">
                  Market Research
                </span>
              </div>
              <span className="text-[10px] font-mono text-white/30">02</span>
            </div>
            <p className="text-[11px] text-white/50">Primary Surveys, Physician Panels & Reg Scans</p>
          </button>

          <button
            onClick={() => setActiveTab('ai-training')}
            className="p-4 rounded-2xl bg-[#0a0a0a] border border-white/10 hover:border-indigo-500/40 hover:bg-white/5 transition-all text-left group"
          >
            <div className="flex justify-between items-start mb-2">
              <div className="flex items-center space-x-2 text-amber-400">
                <GraduationCap className="w-4 h-4" />
                <span className="text-xs font-mono uppercase font-bold text-white group-hover:text-amber-300">
                  AI Training
                </span>
              </div>
              <span className="text-[10px] font-mono text-white/30">03</span>
            </div>
            <p className="text-[11px] text-white/50">Executive Briefings, Prompting & AI Champions</p>
          </button>

          <button
            onClick={() => setActiveTab('ai-solutions')}
            className="p-4 rounded-2xl bg-[#0a0a0a] border border-white/10 hover:border-indigo-500/40 hover:bg-white/5 transition-all text-left group"
          >
            <div className="flex justify-between items-start mb-2">
              <div className="flex items-center space-x-2 text-emerald-400">
                <Cpu className="w-4 h-4" />
                <span className="text-xs font-mono uppercase font-bold text-white group-hover:text-emerald-300">
                  AI Enterprise Solutions
                </span>
              </div>
              <span className="text-[10px] font-mono text-white/30">04</span>
            </div>
            <p className="text-[11px] text-white/50">Production PV, Regulatory Monitors & Copilots</p>
          </button>
        </div>

      </div>
    </section>
  );
};
