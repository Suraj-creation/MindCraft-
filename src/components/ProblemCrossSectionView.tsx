import React, { useState, useMemo } from 'react';
import { 
  HelpCircle, 
  Search, 
  Compass, 
  Sparkles, 
  GraduationCap, 
  CheckCircle2, 
  ArrowRight, 
  Layers, 
  Building2, 
  TrendingUp, 
  Cpu, 
  FileText,
  Target,
  ArrowUpRight
} from 'lucide-react';
import { PROBLEM_CROSS_SECTIONS } from '../data/industryAndAfricaData';
import { NavTab, ProblemCrossSection } from '../types';

interface Props {
  onNavigate: (tab: NavTab) => void;
  onSelectProblemForEngagement?: (problemTitle: string) => void;
}

export const ProblemCrossSectionView: React.FC<Props> = ({ 
  onNavigate,
  onSelectProblemForEngagement 
}) => {
  const [selectedProblemId, setSelectedProblemId] = useState<string>(
    PROBLEM_CROSS_SECTIONS[0].id
  );
  const [filterQuery, setFilterQuery] = useState('');

  const filteredProblems = useMemo(() => {
    return PROBLEM_CROSS_SECTIONS.filter(p => 
      p.problemTitle.toLowerCase().includes(filterQuery.toLowerCase()) ||
      p.tagline.toLowerCase().includes(filterQuery.toLowerCase()) ||
      p.triggerQuestion.toLowerCase().includes(filterQuery.toLowerCase()) ||
      p.commonIndustries.some(i => i.toLowerCase().includes(filterQuery.toLowerCase()))
    );
  }, [filterQuery]);

  const selectedProblem: ProblemCrossSection = useMemo(() => {
    return PROBLEM_CROSS_SECTIONS.find(p => p.id === selectedProblemId) || PROBLEM_CROSS_SECTIONS[0];
  }, [selectedProblemId]);

  const handleStartEngagement = (probTitle: string) => {
    if (onSelectProblemForEngagement) {
      onSelectProblemForEngagement(probTitle);
    }
    onNavigate('engagement-builder');
  };

  return (
    <div className="w-full min-h-screen bg-[#050505] text-white p-4 md:p-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 pb-6 border-b border-white/10">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="px-3 py-1 text-xs font-mono tracking-wider uppercase rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
              Problem-Led Cross-Section Experience
            </span>
            <span className="text-xs text-neutral-400 font-mono">
              10 Archetypal Business Challenges
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
            What Are You Trying to Solve?
          </h1>
          <p className="text-neutral-400 text-sm md:text-base mt-1 max-w-3xl">
            Start directly from your core business objective. Explore how MindCraft weaves primary research, strategic advisory, AI enablement, and capability building to deliver concrete outcomes.
          </p>
        </div>

        {/* Global Action */}
        <button
          onClick={() => handleStartEngagement(selectedProblem.problemTitle)}
          className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-xs font-semibold text-white transition-all shadow-[0_0_15px_rgba(99,102,241,0.3)] shrink-0 flex items-center gap-2"
        >
          Build Engagement for this Challenge <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: 10 Problem Archetypes (4 cols) */}
        <div className="lg:col-span-4 space-y-4">
          <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-4 space-y-3">
            <div className="relative">
              <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={filterQuery}
                onChange={(e) => setFilterQuery(e.target.value)}
                placeholder="Search challenges or industries..."
                className="w-full bg-[#050505] border border-white/10 rounded-xl pl-9 pr-3 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-indigo-500/60"
              />
            </div>
          </div>

          <div className="space-y-2 max-h-[700px] overflow-y-auto pr-1">
            {filteredProblems.map((prob, idx) => {
              const isSelected = selectedProblemId === prob.id;
              return (
                <button
                  key={prob.id}
                  onClick={() => setSelectedProblemId(prob.id)}
                  className={`w-full text-left p-3.5 rounded-2xl border transition-all flex items-start gap-3.5 ${
                    isSelected
                      ? 'bg-gradient-to-r from-indigo-950/60 to-[#0a0a0a] border-indigo-500/60 shadow-[0_0_15px_rgba(99,102,241,0.25)]'
                      : 'bg-[#0a0a0a] border-white/5 hover:border-white/20 hover:bg-white/[0.02]'
                  }`}
                >
                  <div className={`p-2 rounded-xl border shrink-0 text-xs font-mono font-bold ${
                    isSelected
                      ? 'bg-indigo-600 text-white border-indigo-400'
                      : 'bg-[#050505] text-neutral-400 border-white/10'
                  }`}>
                    {String(idx + 1).padStart(2, '0')}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-sm text-white truncate">
                      {prob.problemTitle}
                    </h3>
                    <p className="text-xs text-neutral-400 line-clamp-1 mt-0.5">
                      {prob.tagline}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column: Problem Deep Dive & 5-Part Integrated Approach (8 cols) */}
        <div className="lg:col-span-8 space-y-6">
          {/* Header Card */}
          <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 md:p-8 relative overflow-hidden">
            <div className="relative z-10 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-indigo-400 uppercase">
                <Target className="w-4 h-4" /> Core Business Objective
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                {selectedProblem.problemTitle}
              </h2>
              <p className="text-indigo-300 font-medium text-sm md:text-base">
                {selectedProblem.tagline}
              </p>

              <div className="p-4 rounded-xl bg-[#050505] border border-white/5 space-y-1">
                <div className="text-[11px] font-mono text-neutral-400 uppercase">Triggering Executive Question:</div>
                <p className="text-sm text-white italic">
                  "{selectedProblem.triggerQuestion}"
                </p>
              </div>

              {/* Commonly Occurs In */}
              <div className="pt-2">
                <div className="text-xs font-mono text-neutral-400 uppercase mb-2">
                  Frequently Encountered Across Industries:
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedProblem.commonIndustries.map((ind, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg bg-white/5 text-neutral-300 text-xs border border-white/10"
                    >
                      {ind}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* MindCraft 5-Pillar Integrated Solution Architecture */}
          <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 md:p-8 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Layers className="w-5 h-5 text-indigo-400" />
                How MindCraft Solves This: 5-Pillar Integrated Architecture
              </h3>
              <span className="text-xs font-mono text-neutral-400">Methodology Framework</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* 01 Research */}
              <div className="p-4 rounded-xl bg-[#050505] border border-white/5 space-y-2">
                <div className="flex items-center gap-2 text-sky-400 text-xs font-semibold uppercase">
                  <Search className="w-4 h-4" /> 01. Primary Research & Evidence
                </div>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  {selectedProblem.mindcraftApproach.research}
                </p>
              </div>

              {/* 02 Strategy */}
              <div className="p-4 rounded-xl bg-[#050505] border border-white/5 space-y-2">
                <div className="flex items-center gap-2 text-indigo-400 text-xs font-semibold uppercase">
                  <Compass className="w-4 h-4" /> 02. Strategic Decision Framework
                </div>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  {selectedProblem.mindcraftApproach.strategy}
                </p>
              </div>

              {/* 03 AI Enablement */}
              <div className="p-4 rounded-xl bg-[#050505] border border-white/5 space-y-2">
                <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold uppercase">
                  <Sparkles className="w-4 h-4" /> 03. Continuous AI Systems
                </div>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  {selectedProblem.mindcraftApproach.aiEnablement}
                </p>
              </div>

              {/* 04 Capability Building */}
              <div className="p-4 rounded-xl bg-[#050505] border border-white/5 space-y-2">
                <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold uppercase">
                  <GraduationCap className="w-4 h-4" /> 04. Workforce Capability
                </div>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  {selectedProblem.mindcraftApproach.training}
                </p>
              </div>
            </div>

            {/* 05 Measurable Outcome */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-950/40 to-[#050505] border border-emerald-500/30 space-y-1.5">
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold uppercase">
                <TrendingUp className="w-4 h-4" /> 05. Measurable Business Outcome
              </div>
              <p className="text-xs text-neutral-200 leading-relaxed">
                {selectedProblem.mindcraftApproach.measurableOutcome}
              </p>
            </div>
          </div>

          {/* Illustrative Engagement Card */}
          <div className="p-6 rounded-2xl bg-[#0a0a0a] border border-indigo-500/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-[0_0_20px_rgba(99,102,241,0.15)]">
            <div className="space-y-1">
              <div className="text-xs font-mono uppercase text-indigo-400">Illustrative Client Engagement:</div>
              <div className="text-sm font-semibold text-white">{selectedProblem.illustrativeEngagement}</div>
            </div>
            <button
              onClick={() => handleStartEngagement(selectedProblem.problemTitle)}
              className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-xs font-semibold text-white transition-all shadow-[0_0_15px_rgba(99,102,241,0.3)] shrink-0 flex items-center gap-2"
            >
              Start This Engagement <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
