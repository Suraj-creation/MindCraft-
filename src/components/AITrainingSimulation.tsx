import React, { useState } from 'react';
import { SERVICE_PILLARS, TRAINING_SIMULATION_STEPS } from '../data/mindcraftData';
import { NavTab } from '../types';
import { 
  GraduationCap, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Award, 
  BookOpen, 
  Users, 
  ShieldCheck, 
  Sliders, 
  Zap, 
  FileText,
  Target
} from 'lucide-react';

interface AITrainingSimulationProps {
  onOpenIntake: () => void;
  setActiveTab: (tab: NavTab) => void;
}

export const AITrainingSimulation: React.FC<AITrainingSimulationProps> = ({
  onOpenIntake,
  setActiveTab
}) => {
  const trainingPillar = SERVICE_PILLARS.find(p => p.id === 'ai-training') || SERVICE_PILLARS[2];
  const [selectedCohort, setSelectedCohort] = useState<string>('pharma-commercial');
  const [activeStepIdx, setActiveStepIdx] = useState<number>(0);

  const currentStep = TRAINING_SIMULATION_STEPS[activeStepIdx];

  const cohorts = [
    { id: 'pharma-commercial', name: 'Pharma Commercial & Sales Force', desc: 'Territory optimization, CRM intelligence & detailing' },
    { id: 'regulatory-clinical', name: 'Regulatory & Pharmacovigilance', desc: 'Dossier synthesis, guideline scraping & safety screening' },
    { id: 'hospital-execs', name: 'Hospital & Healthcare Leadership', desc: 'Clinical workflow AI, claims pre-check & HIS integration' },
    { id: 'banking-ops', name: 'Banking & Financial Operations', desc: 'Fraud detection, document parsing & customer service' }
  ];

  return (
    <div className="py-20 bg-[#050505] border-b border-white/10" id="ai-training-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#0a0a0a] border border-indigo-500/30 text-indigo-400 text-xs font-mono mb-3">
            <GraduationCap className="w-3.5 h-3.5 text-indigo-400" />
            <span className="uppercase tracking-widest text-[10px]">Pillar 03 · Applied Human Enablement</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-light text-white tracking-tight">
            AI Training & <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-300">Capability Building</span>
          </h2>
          <p className="text-white/60 text-sm sm:text-base mt-3 leading-relaxed">
            Practical, hands-on AI capability transformation for teams, executives, and organizations — designed to build genuine AI literacy and internal champions, not just theoretical awareness.
          </p>
        </div>

        {/* 4 Core Capabilities Grid in Bento Format */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {trainingPillar.capabilities.map((cap, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-[#0a0a0a] border border-white/10 hover:border-indigo-500/40 transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-mono uppercase text-indigo-400 font-bold">
                  Capability 0{i + 1}
                </span>
                <h3 className="text-base font-bold text-white mt-1 mb-2 font-mono">
                  {cap.title}
                </h3>
                <p className="text-xs text-white/60 mb-4 leading-relaxed">
                  {cap.description}
                </p>
                <ul className="space-y-1.5">
                  {cap.bulletPoints.map((bp, j) => (
                    <li key={j} className="text-xs text-white/70 flex items-start space-x-1.5">
                      <span className="text-indigo-400 mt-0.5">•</span>
                      <span>{bp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-4 pt-3 border-t border-white/5 text-[11px] text-indigo-300 font-mono font-medium flex items-center justify-between">
                <span>Applied Workflows</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" />
              </div>
            </div>
          ))}
        </div>

        {/* INTERACTIVE APPLIED AI TRAINING SIMULATION IN BENTO CONTAINER */}
        <div className="rounded-2xl bg-[#0a0a0a] border border-white/10 p-6 sm:p-8 shadow-2xl space-y-8">
          
          {/* Header & Cohort Selection */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-6 border-b border-white/10 gap-4">
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 font-bold uppercase">
                  Applied Curriculum Simulator
                </span>
                <span className="text-xs text-white/40 font-mono">10-Module Transformation Pathway</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-light text-white mt-1">
                Pharma Commercial Team: <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-300">10-Step Applied AI Transformation</span>
              </h3>
            </div>

            <button
              onClick={onOpenIntake}
              className="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-mono font-semibold shrink-0 transition-colors flex items-center space-x-1.5 shadow-[0_0_12px_rgba(99,102,241,0.3)]"
            >
              <span>Design Organization Curriculum</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* 10 Step Pills Slider */}
          <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-10 gap-1.5">
            {TRAINING_SIMULATION_STEPS.map((st, idx) => {
              const isSelected = activeStepIdx === idx;
              return (
                <button
                  key={st.step}
                  onClick={() => setActiveStepIdx(idx)}
                  id={`curriculum-step-btn-${st.step}`}
                  className={`p-2.5 rounded-2xl border text-center transition-all relative ${
                    isSelected 
                      ? 'bg-[#050505] border-indigo-500/60 text-white shadow-[0_0_12px_rgba(99,102,241,0.25)]' 
                      : 'bg-[#050505] border-white/10 text-white/40 hover:text-white hover:border-white/20'
                  }`}
                >
                  <div className="text-[10px] font-mono font-bold text-indigo-400">STEP {st.step}</div>
                  <div className="text-[11px] font-mono truncate mt-0.5">{st.title.split(' ')[0]}</div>
                  {isSelected && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-400" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Active Step Details Master Card in Bento Inner Container */}
          <div className="rounded-2xl bg-[#050505] border border-white/10 p-6 space-y-6 animate-in fade-in-50 duration-150">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-white/10 gap-2">
              <div>
                <span className="text-xs text-indigo-400 font-mono font-bold">
                  MODULE {currentStep.step} OF 10 · {currentStep.duration}
                </span>
                <h4 className="text-xl font-bold text-white mt-1 font-mono">
                  {currentStep.title}
                </h4>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  disabled={activeStepIdx === 0}
                  onClick={() => setActiveStepIdx(prev => prev - 1)}
                  className="px-3 py-1.5 rounded-xl bg-[#0a0a0a] text-xs font-mono text-white/50 hover:text-white disabled:opacity-40 transition-colors border border-white/10"
                >
                  Prev
                </button>
                <button
                  disabled={activeStepIdx === TRAINING_SIMULATION_STEPS.length - 1}
                  onClick={() => setActiveStepIdx(prev => prev + 1)}
                  className="px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-mono font-semibold disabled:opacity-40 transition-colors shadow-[0_0_10px_rgba(99,102,241,0.3)]"
                >
                  Next
                </button>
              </div>
            </div>

            {/* 3-Column Breakdown: Objectives -> Applied Exercises -> Deliverables & Milestones */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              
              {/* Learning Objectives */}
              <div className="p-5 rounded-2xl bg-[#0a0a0a] border border-white/10 space-y-2">
                <div className="text-[11px] font-mono uppercase font-bold text-indigo-400 flex items-center space-x-1.5">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Learning Objectives</span>
                </div>
                <ul className="space-y-1.5">
                  {currentStep.learningObjectives.map((obj, i) => (
                    <li key={i} className="text-xs text-white/70 flex items-start space-x-2">
                      <span className="text-indigo-400 font-bold">•</span>
                      <span>{obj}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Applied Exercises */}
              <div className="p-5 rounded-2xl bg-[#0a0a0a] border border-white/10 space-y-2">
                <div className="text-[11px] font-mono uppercase font-bold text-indigo-300 flex items-center space-x-1.5">
                  <Zap className="w-3.5 h-3.5" />
                  <span>Applied Workplace Exercises</span>
                </div>
                <ul className="space-y-1.5">
                  {currentStep.appliedExercises.map((ex, i) => (
                    <li key={i} className="text-xs text-white/70 flex items-start space-x-2">
                      <span className="text-indigo-400 font-bold">•</span>
                      <span>{ex}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Practical Deliverables & Champion Milestone */}
              <div className="p-5 rounded-2xl bg-[#0a0a0a] border border-emerald-500/30 space-y-3 flex flex-col justify-between">
                <div>
                  <div className="text-[11px] font-mono uppercase font-bold text-emerald-400 flex items-center space-x-1.5 mb-2">
                    <FileText className="w-3.5 h-3.5" />
                    <span>Tangible Deliverable</span>
                  </div>
                  <ul className="space-y-1">
                    {currentStep.practicalDeliverables.map((del, i) => (
                      <li key={i} className="text-xs text-emerald-300 font-semibold flex items-start space-x-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-3 border-t border-white/5">
                  <div className="text-[10px] font-mono uppercase text-indigo-300 font-bold flex items-center space-x-1 mb-1">
                    <Award className="w-3 h-3 text-indigo-400" />
                    <span>Champion Milestone</span>
                  </div>
                  <p className="text-xs text-white/60 italic font-mono">
                    "{currentStep.championMilestone}"
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
