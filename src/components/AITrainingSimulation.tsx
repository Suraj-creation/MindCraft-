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
    <div className="bg-[#F4F1EA] py-16 sm:py-24 border-b border-[rgba(20,25,26,0.12)]" id="ai-training-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="max-w-3xl">
          <div className="font-mono text-[11px] tracking-widest uppercase text-[#C0562F] mb-3">
            Pillar 03 · Applied Human Enablement
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#16191A] font-normal leading-tight tracking-tight">
            AI Training & Capability Building
          </h2>
          <p className="text-sm sm:text-base text-[#4C524E] mt-3 leading-relaxed">
            Practical, hands-on AI capability transformation for teams, executives, and organizations — designed to build genuine AI literacy and internal champions, not just theoretical awareness.
          </p>
        </div>

        {/* 4 Core Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {trainingPillar.capabilities.map((cap, i) => (
            <div
              key={i}
              className="p-6 rounded-xl bg-[#FBFAF6] border border-[rgba(20,25,26,0.12)] hover:border-[#123A2E] transition-all flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-[10px] uppercase text-[#C0562F] font-bold">
                  Capability 0{i + 1}
                </span>
                <h3 className="font-serif text-lg font-normal text-[#16191A] mt-1 mb-2">
                  {cap.title}
                </h3>
                <p className="text-xs text-[#4C524E] mb-4 leading-relaxed">
                  {cap.description}
                </p>
                <ul className="space-y-1.5">
                  {cap.bulletPoints.map((bp, j) => (
                    <li key={j} className="text-xs text-[#3B4441] flex items-start space-x-1.5">
                      <span className="text-[#123A2E] mt-0.5 font-bold">•</span>
                      <span>{bp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-4 pt-3 border-t border-[rgba(20,25,26,0.08)] text-[11px] text-[#123A2E] font-mono font-medium flex items-center justify-between">
                <span>Applied Workflows</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-[#123A2E]" />
              </div>
            </div>
          ))}
        </div>

        {/* Applied AI Training Simulation Console */}
        <div className="rounded-2xl bg-[#FBFAF6] border border-[rgba(20,25,26,0.14)] p-6 sm:p-8 shadow-sm space-y-6">
          
          {/* Header & Controls */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-4 border-b border-[rgba(20,25,26,0.08)] gap-4">
            <div>
              <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-[#123A2E]/10 text-[#123A2E] font-bold uppercase">
                Applied Curriculum Simulator
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#16191A] mt-1">
                Pharma Commercial Team: 10-Step Applied AI Pathway
              </h3>
            </div>

            <button
              onClick={onOpenIntake}
              className="px-5 py-2.5 rounded-lg bg-[#123A2E] hover:bg-[#C0562F] text-white text-xs font-semibold shrink-0 transition-colors flex items-center space-x-1.5"
            >
              <span>Design Organization Curriculum</span>
              <ArrowRight className="w-3.5 h-3.5" />
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
                  className={`p-2.5 rounded-lg border text-center transition-all relative ${
                    isSelected 
                      ? 'bg-[#123A2E] border-[#123A2E] text-white shadow-sm' 
                      : 'bg-white border-[rgba(20,25,26,0.1)] text-[#4C524E] hover:border-[#123A2E]'
                  }`}
                >
                  <div className="text-[10px] font-mono font-bold">STEP {st.step}</div>
                  <div className="text-[11px] truncate mt-0.5">{st.title.split(' ')[0]}</div>
                </button>
              );
            })}
          </div>

          {/* Active Step Details Master Card */}
          <div className="rounded-xl bg-white border border-[rgba(20,25,26,0.08)] p-6 space-y-6">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[rgba(20,25,26,0.06)] gap-2">
              <div>
                <span className="text-xs text-[#C0562F] font-mono font-bold">
                  MODULE {currentStep.step} OF 10 · {currentStep.duration}
                </span>
                <h4 className="text-xl font-serif text-[#16191A] mt-1 font-normal">
                  {currentStep.title}
                </h4>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  disabled={activeStepIdx === 0}
                  onClick={() => setActiveStepIdx(prev => prev - 1)}
                  className="px-3 py-1.5 rounded-lg bg-[#FBFAF6] text-xs font-semibold text-[#4C524E] hover:text-[#16191A] disabled:opacity-30 transition-colors border border-[rgba(20,25,26,0.1)]"
                >
                  Prev
                </button>
                <button
                  disabled={activeStepIdx === TRAINING_SIMULATION_STEPS.length - 1}
                  onClick={() => setActiveStepIdx(prev => prev + 1)}
                  className="px-3 py-1.5 rounded-lg bg-[#123A2E] hover:bg-[#C0562F] text-white text-xs font-semibold disabled:opacity-30 transition-colors"
                >
                  Next
                </button>
              </div>
            </div>

            {/* 3-Column Breakdown */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              
              {/* Learning Objectives */}
              <div className="p-5 rounded-xl bg-[#FBFAF6] border border-[rgba(20,25,26,0.08)] space-y-2">
                <div className="font-mono text-[10px] uppercase font-bold text-[#123A2E] flex items-center space-x-1.5">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Learning Objectives</span>
                </div>
                <ul className="space-y-1.5">
                  {currentStep.learningObjectives.map((obj, i) => (
                    <li key={i} className="text-xs text-[#3B4441] flex items-start space-x-2">
                      <span className="text-[#123A2E] font-bold">•</span>
                      <span>{obj}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Applied Exercises */}
              <div className="p-5 rounded-xl bg-[#FBFAF6] border border-[rgba(20,25,26,0.08)] space-y-2">
                <div className="font-mono text-[10px] uppercase font-bold text-[#C0562F] flex items-center space-x-1.5">
                  <Zap className="w-3.5 h-3.5" />
                  <span>Applied Workplace Exercises</span>
                </div>
                <ul className="space-y-1.5">
                  {currentStep.appliedExercises.map((ex, i) => (
                    <li key={i} className="text-xs text-[#3B4441] flex items-start space-x-2">
                      <span className="text-[#C0562F] font-bold">•</span>
                      <span>{ex}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Practical Deliverables & Champion Milestone */}
              <div className="p-5 rounded-xl bg-[#123A2E]/5 border border-[#123A2E]/15 space-y-3 flex flex-col justify-between">
                <div>
                  <div className="font-mono text-[10px] uppercase font-bold text-[#123A2E] flex items-center space-x-1.5 mb-2">
                    <FileText className="w-3.5 h-3.5" />
                    <span>Tangible Deliverable</span>
                  </div>
                  <ul className="space-y-1">
                    {currentStep.practicalDeliverables.map((del, i) => (
                      <li key={i} className="text-xs text-[#123A2E] font-medium flex items-start space-x-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#123A2E] shrink-0 mt-0.5" />
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-3 border-t border-[#123A2E]/10">
                  <div className="font-mono text-[10px] uppercase text-[#C0562F] font-bold flex items-center space-x-1 mb-1">
                    <Award className="w-3 h-3 text-[#C0562F]" />
                    <span>Champion Milestone</span>
                  </div>
                  <p className="text-xs text-[#4C524E] italic font-serif">
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
