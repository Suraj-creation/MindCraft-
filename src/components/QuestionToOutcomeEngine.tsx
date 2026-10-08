import React, { useState } from 'react';
import { PROBLEM_OUTCOME_SCENARIOS } from '../data/mindcraftData';
import { ProblemOutcomeScenario } from '../types';
import { 
  Workflow, 
  Search, 
  Database, 
  LineChart, 
  HelpCircle, 
  CheckCircle2, 
  Cpu, 
  GraduationCap, 
  FileText, 
  TrendingUp, 
  ArrowRight,
  Sparkles,
  Building2
} from 'lucide-react';

interface QuestionToOutcomeEngineProps {
  onOpenIntake: () => void;
}

export const QuestionToOutcomeEngine: React.FC<QuestionToOutcomeEngineProps> = ({ onOpenIntake }) => {
  const [selectedId, setSelectedId] = useState<string>(PROBLEM_OUTCOME_SCENARIOS[0].id);

  const currentScenario: ProblemOutcomeScenario = 
    PROBLEM_OUTCOME_SCENARIOS.find(s => s.id === selectedId) || PROBLEM_OUTCOME_SCENARIOS[0];

  return (
    <section className="py-20 bg-[#050505] border-b border-white/10" id="question-to-outcome-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#0a0a0a] border border-indigo-500/30 text-indigo-400 text-xs font-mono mb-3">
            <Workflow className="w-3.5 h-3.5 text-indigo-400" />
            <span className="uppercase tracking-widest text-[10px]">Problem Solving Engine</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-light text-white tracking-tight">
            From Question to <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-300">Measured Outcome</span>
          </h2>
          <p className="text-white/60 text-sm sm:text-base mt-3 leading-relaxed">
            Select a critical enterprise dilemma below to see exactly how MindCraft investigates the problem, analyzes evidence, prescribes strategic interventions, upskills teams, and deploys production AI.
          </p>
        </div>

        {/* Problem Selector Grid in Bento */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
          {PROBLEM_OUTCOME_SCENARIOS.map((item) => {
            const isSelected = selectedId === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setSelectedId(item.id)}
                id={`problem-btn-${item.id}`}
                className={`p-5 rounded-2xl text-left border transition-all relative flex flex-col justify-between ${
                  isSelected 
                    ? 'bg-[#0a0a0a] border-indigo-500/60 shadow-[0_0_15px_rgba(99,102,241,0.25)] text-white' 
                    : 'bg-[#0a0a0a] border-white/10 text-white/50 hover:border-white/20 hover:text-white'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-[#050505] text-indigo-300 border border-white/5">
                      {item.category}
                    </span>
                    {isSelected && (
                      <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
                    )}
                  </div>
                  <h3 className="text-xs font-bold leading-snug line-clamp-2 text-white">
                    "{item.title}"
                  </h3>
                </div>
                <div className="mt-3 pt-2 border-t border-white/5 text-[10px] font-mono text-white/40 flex items-center justify-between">
                  <span>{item.clientType}</span>
                  <ArrowRight className={`w-3 h-3 ${isSelected ? 'text-indigo-400' : 'text-white/30'}`} />
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Scenario Master Diagnostic Dossier in Bento Card */}
        <div className="rounded-2xl bg-[#0a0a0a] border border-white/10 p-6 sm:p-8 shadow-2xl space-y-8">
          
          {/* Header & Meta */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-6 border-b border-white/10 gap-4">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 font-bold">
                  {currentScenario.category}
                </span>
                <span className="text-xs px-2.5 py-1 rounded bg-[#050505] border border-white/10 text-white/60 font-mono">
                  Client Profile: {currentScenario.clientType}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-light text-white leading-tight">
                "{currentScenario.title}"
              </h3>
            </div>

            <button
              onClick={onOpenIntake}
              className="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs sm:text-sm font-mono font-semibold shrink-0 transition-colors flex items-center space-x-1.5 shadow-[0_0_15px_rgba(99,102,241,0.3)]"
            >
              <span>Discuss This Challenge</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* 1. The Core Challenge */}
          <div className="p-5 rounded-2xl bg-[#050505] border border-red-500/20">
            <div className="text-[10px] font-mono uppercase font-bold text-red-400 mb-1 flex items-center space-x-1.5">
              <HelpCircle className="w-3.5 h-3.5 text-red-400" />
              <span>01. The Core Challenge & Friction</span>
            </div>
            <p className="text-sm text-white/80 leading-relaxed font-sans">
              {currentScenario.theChallenge}
            </p>
          </div>

          {/* 2-Column: Investigation & Evidence vs Analysis & Strategy */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* Left: What MindCraft Investigates + Data Required */}
            <div className="space-y-4">
              
              <div className="p-5 rounded-2xl bg-[#050505] border border-white/10">
                <div className="text-[10px] font-mono uppercase font-bold text-indigo-400 mb-2 flex items-center space-x-1.5">
                  <Search className="w-3.5 h-3.5 text-indigo-400" />
                  <span>02. What MindCraft Investigates (Primary Scope)</span>
                </div>
                <ul className="space-y-2">
                  {currentScenario.whatMindCraftInvestigates.map((inv, i) => (
                    <li key={i} className="text-xs text-white/70 flex items-start space-x-2">
                      <span className="text-indigo-400 font-bold">•</span>
                      <span>{inv}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-5 rounded-2xl bg-[#050505] border border-white/10">
                <div className="text-[10px] font-mono uppercase font-bold text-indigo-300 mb-2 flex items-center space-x-1.5">
                  <Database className="w-3.5 h-3.5 text-indigo-400" />
                  <span>03. Data & Evidence Required</span>
                </div>
                <ul className="space-y-2">
                  {currentScenario.dataRequired.map((d, i) => (
                    <li key={i} className="text-xs text-white/70 flex items-start space-x-2">
                      <span className="text-indigo-400 font-bold">•</span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Right: Analysis Performed + Strategic Questions */}
            <div className="space-y-4">
              
              <div className="p-5 rounded-2xl bg-[#050505] border border-white/10">
                <div className="text-[10px] font-mono uppercase font-bold text-emerald-400 mb-2 flex items-center space-x-1.5">
                  <LineChart className="w-3.5 h-3.5 text-emerald-400" />
                  <span>04. Analysis & Modeling Performed</span>
                </div>
                <ul className="space-y-2">
                  {currentScenario.analysisPerformed.map((an, i) => (
                    <li key={i} className="text-xs text-white/70 flex items-start space-x-2">
                      <span className="text-emerald-400 font-bold">•</span>
                      <span>{an}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-5 rounded-2xl bg-[#050505] border border-white/10">
                <div className="text-[10px] font-mono uppercase font-bold text-amber-400 mb-2 flex items-center space-x-1.5">
                  <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
                  <span>05. Strategic Questions Answered</span>
                </div>
                <ul className="space-y-2">
                  {currentScenario.strategicQuestions.map((q, i) => (
                    <li key={i} className="text-xs text-white/70 italic flex items-start space-x-2">
                      <span className="text-amber-400 font-bold">?</span>
                      <span>"{q}"</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

          </div>

          {/* 3. Recommended Intervention */}
          <div className="p-5 rounded-2xl bg-[#050505] border border-indigo-500/40">
            <div className="text-[10px] font-mono uppercase font-bold text-indigo-300 mb-1 flex items-center space-x-1.5">
              <CheckCircle2 className="w-4 h-4 text-indigo-400" />
              <span>06. Recommended Strategic Intervention</span>
            </div>
            <p className="text-sm text-white/90 font-medium leading-relaxed mt-1">
              {currentScenario.recommendedIntervention}
            </p>
          </div>

          {/* 4. The 2-Tier Enablement Layer: AI Technology + People Training */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Tech / AI Layer */}
            <div className="p-5 rounded-2xl bg-[#050505] border border-indigo-500/30">
              <div className="text-[10px] font-mono uppercase font-bold text-indigo-400 mb-1.5 flex items-center space-x-1.5">
                <Cpu className="w-3.5 h-3.5 text-indigo-400" />
                <span>07. Technology & AI Layer</span>
              </div>
              <p className="text-xs text-white/70 leading-relaxed font-mono">
                {currentScenario.technologyAiLayer}
              </p>
            </div>

            {/* People / Training Layer */}
            <div className="p-5 rounded-2xl bg-[#050505] border border-emerald-500/30">
              <div className="text-[10px] font-mono uppercase font-bold text-emerald-400 mb-1.5 flex items-center space-x-1.5">
                <GraduationCap className="w-3.5 h-3.5 text-emerald-400" />
                <span>08. People & Training Layer</span>
              </div>
              <p className="text-xs text-white/70 leading-relaxed font-mono">
                {currentScenario.peopleTrainingLayer}
              </p>
            </div>

          </div>

          {/* 5. Expected Outputs & Success Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            
            <div className="p-5 rounded-2xl bg-[#050505] border border-white/10">
              <div className="text-[10px] font-mono uppercase font-bold text-white/40 mb-2 flex items-center space-x-1.5">
                <FileText className="w-3.5 h-3.5 text-white/40" />
                <span>09. Expected Client Deliverables</span>
              </div>
              <ul className="space-y-1.5">
                {currentScenario.expectedOutputs.map((out, i) => (
                  <li key={i} className="text-xs text-white/70 flex items-start space-x-2">
                    <span className="text-indigo-400 font-bold">✓</span>
                    <span>{out}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-5 rounded-2xl bg-[#050505] border border-emerald-500/20">
              <div className="text-[10px] font-mono uppercase font-bold text-emerald-400 mb-2 flex items-center space-x-1.5">
                <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                <span>10. Measured Success Metrics</span>
              </div>
              <ul className="space-y-1.5">
                {currentScenario.successMetrics.map((met, i) => (
                  <li key={i} className="text-xs text-emerald-300 font-mono font-medium flex items-start space-x-2">
                    <span className="text-emerald-400 font-bold">↑</span>
                    <span>{met}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
