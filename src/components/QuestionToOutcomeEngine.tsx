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
    <section className="py-16 sm:py-24 bg-[#ECE7DC] border-b border-[rgba(20,25,26,0.12)]" id="question-to-outcome-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="font-mono text-[11px] tracking-widest uppercase text-[#C0562F] mb-3">
            From Question to Outcome
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#16191A] font-normal leading-tight tracking-tight mb-4">
            See how we actually solve a problem.
          </h2>
          <p className="text-sm sm:text-base text-[#4C524E] leading-relaxed">
            Pick an enterprise dilemma. We'll trace it through the full MindCraft method — from the evidence we gather to the intervention, technology and people layer, and the metrics that prove business impact.
          </p>
        </div>

        {/* Problem Selector Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
          {PROBLEM_OUTCOME_SCENARIOS.map((item, idx) => {
            const isSelected = selectedId === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setSelectedId(item.id)}
                className={`p-5 rounded-xl text-left border transition-all flex flex-col justify-between ${
                  isSelected 
                    ? 'bg-[#123A2E] border-[#123A2E] text-[#F4F1EA] shadow-md' 
                    : 'bg-[#FBFAF6] border-[rgba(20,25,26,0.12)] text-[#3B4441] hover:border-[#123A2E]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-[10px] font-mono font-semibold uppercase ${isSelected ? 'text-[#D98A5F]' : 'text-[#8A8578]'}`}>
                      Case 0{idx + 1}
                    </span>
                    <span className={`text-[9px] font-mono px-2 py-0.5 rounded-full ${isSelected ? 'bg-white/10 text-white' : 'bg-black/5 text-[#8A8578]'}`}>
                      {item.category}
                    </span>
                  </div>
                  <h3 className={`text-sm font-semibold leading-snug line-clamp-2 ${isSelected ? 'text-[#F4F1EA]' : 'text-[#16191A]'}`}>
                    "{item.title}"
                  </h3>
                </div>
                <div className={`mt-3 pt-2 border-t text-[11px] font-mono flex items-center justify-between ${isSelected ? 'border-white/15 text-[rgba(237,231,217,0.7)]' : 'border-black/5 text-[#8A8578]'}`}>
                  <span className="truncate">{item.clientType}</span>
                  <ArrowRight className="w-3.5 h-3.5 flex-none" />
                </div>
              </button>
            );
          })}
        </div>

        {/* Master Solution Blueprint Container */}
        <div className="border border-[rgba(20,25,26,0.14)] rounded-2xl bg-[#FBFAF6] overflow-hidden shadow-sm">
          
          {/* Top Header */}
          <div className="p-6 sm:p-8 bg-[#123A2E] text-[#EDE7D9] border-b border-[rgba(20,25,26,0.1)]">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-[#D98A5F] text-[#0E2C23] font-bold uppercase">
                {currentScenario.category}
              </span>
              <span className="text-xs px-2.5 py-1 rounded border border-white/20 text-white/80 font-mono">
                Target Profile: {currentScenario.clientType}
              </span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#F4F1EA] font-normal leading-tight mt-1">
              "{currentScenario.title}"
            </h3>
            <p className="text-sm text-[rgba(237,231,217,0.8)] mt-3 leading-relaxed max-w-4xl font-sans">
              <strong className="text-[#D98A5F] font-semibold">The Friction: </strong> {currentScenario.theChallenge}
            </p>
          </div>

          {/* 6 Structured Solution Dimensions */}
          <div className="p-6 sm:p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* 1. What We Investigate */}
            <div className="space-y-3">
              <div className="font-mono text-[10px] tracking-widest uppercase text-[#C0562F] font-semibold">
                01 · What We Investigate
              </div>
              <ul className="space-y-2">
                {currentScenario.whatMindCraftInvestigates.map((inv, i) => (
                  <li key={i} className="text-xs sm:text-sm text-[#3B4441] flex items-start space-x-2">
                    <span className="text-[#123A2E] font-bold">•</span>
                    <span>{inv}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 2. Evidence Required */}
            <div className="space-y-3">
              <div className="font-mono text-[10px] tracking-widest uppercase text-[#C0562F] font-semibold">
                02 · Evidence Required
              </div>
              <ul className="space-y-2">
                {currentScenario.dataRequired.map((d, i) => (
                  <li key={i} className="text-xs sm:text-sm text-[#3B4441] flex items-start space-x-2">
                    <span className="text-[#123A2E] font-bold">•</span>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 3. Analysis & Strategic Modeling */}
            <div className="space-y-3">
              <div className="font-mono text-[10px] tracking-widest uppercase text-[#C0562F] font-semibold">
                03 · Analysis & Modeling
              </div>
              <ul className="space-y-2">
                {currentScenario.analysisPerformed.map((an, i) => (
                  <li key={i} className="text-xs sm:text-sm text-[#3B4441] flex items-start space-x-2">
                    <span className="text-[#123A2E] font-bold">•</span>
                    <span>{an}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 4. Strategic Intervention */}
            <div className="space-y-3">
              <div className="font-mono text-[10px] tracking-widest uppercase text-[#123A2E] font-semibold">
                04 · Recommended Intervention
              </div>
              <p className="text-xs sm:text-sm text-[#16191A] font-semibold leading-relaxed bg-[#123A2E]/5 p-3.5 rounded-lg border border-[#123A2E]/15">
                {currentScenario.recommendedIntervention}
              </p>
            </div>

            {/* 5. Technology & AI Layer */}
            <div className="space-y-3">
              <div className="font-mono text-[10px] tracking-widest uppercase text-[#123A2E] font-semibold">
                05 · Technology & AI Layer
              </div>
              <p className="text-xs sm:text-sm text-[#3B4441] font-mono leading-relaxed bg-white p-3.5 rounded-lg border border-[rgba(20,25,26,0.1)]">
                {currentScenario.technologyAiLayer}
              </p>
            </div>

            {/* 6. Success Metrics & People */}
            <div className="space-y-3">
              <div className="font-mono text-[10px] tracking-widest uppercase text-[#123A2E] font-semibold">
                06 · Measured Success Metrics
              </div>
              <ul className="space-y-1.5 bg-white p-3.5 rounded-lg border border-[rgba(20,25,26,0.1)]">
                {currentScenario.successMetrics.map((met, i) => (
                  <li key={i} className="text-xs font-semibold text-[#123A2E] flex items-start space-x-1.5 font-mono">
                    <TrendingUp className="w-3.5 h-3.5 text-[#C0562F] shrink-0 mt-0.5" />
                    <span>{met}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="p-6 bg-[rgba(18,58,46,0.04)] border-t border-[rgba(20,25,26,0.1)] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="font-serif italic text-sm text-[#4C524E]">
              Illustrative solution architecture — not a claim of a completed project.
            </div>
            <button
              onClick={onOpenIntake}
              className="px-5 py-2.5 rounded-lg bg-[#C0562F] hover:bg-[#123A2E] text-white text-xs font-semibold tracking-wide transition-colors flex items-center space-x-2"
            >
              <span>Discuss this challenge</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
