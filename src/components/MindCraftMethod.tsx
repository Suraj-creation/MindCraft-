import React, { useState } from 'react';
import { 
  CheckCircle2, 
  ArrowRight, 
  Search, 
  LineChart, 
  Lightbulb, 
  Layout, 
  Zap, 
  Activity,
  Layers,
  FileCheck
} from 'lucide-react';

export const MindCraftMethod: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const methodSteps = [
    {
      number: '01',
      title: 'Understand',
      tagline: 'Context, Objective & Constraints Framing',
      icon: Lightbulb,
      color: 'text-amber-400',
      borderColor: 'border-amber-500/40',
      bgColor: 'bg-amber-950/20',
      inputs: ['Client business objective', 'Geographic & therapeutic scope', 'Regulatory & budget constraints', 'Executive success criteria'],
      process: 'Rigorous diagnostic interviews with client sponsors, problem framing workshops, and baseline assumption challenging.',
      outputs: ['Formal Engagement Charter & Problem Definition Statement'],
      keyRigor: 'Zero reliance on generic assumptions; custom scoping tailored to African & international commercial realities.'
    },
    {
      number: '02',
      title: 'Investigate',
      tagline: 'Primary + Secondary Evidence Gathering',
      icon: Search,
      color: 'text-blue-400',
      borderColor: 'border-blue-500/40',
      bgColor: 'bg-blue-950/20',
      inputs: ['Physician / Pharmacist / Patient networks', 'Regulatory health authority gazettes & databases', 'Trade import manifests & tender histories', 'Internal client transactional data'],
      process: 'Double-blind primary surveys, Key Opinion Leader (KOL) panels, desk research, and automated data ingestion across 20+ African agencies.',
      outputs: ['Unvarnished Evidence Dossier & Verified Primary Datasets'],
      keyRigor: 'Double-verified field data with strict statistical sampling and audited clinician credentials.'
    },
    {
      number: '03',
      title: 'Analyze',
      tagline: 'Data, Market, Strategic & Operational Modeling',
      icon: LineChart,
      color: 'text-indigo-400',
      borderColor: 'border-indigo-500/40',
      bgColor: 'bg-indigo-950/20',
      inputs: ['Raw primary field survey datasets', 'Tender pricing distributions', 'Process cycle-time logs', 'Organizational AI maturity scores'],
      process: 'Statistical regression, price-elasticity waterfall modeling, competitor pipeline SWOT, and value-stream process mapping.',
      outputs: ['Strategic Insight Models, Competitor Matrices & Gap Diagnostics'],
      keyRigor: 'Triangulation between qualitative physician sentiment and quantitative epidemiological pricing data.'
    },
    {
      number: '04',
      title: 'Decide',
      tagline: 'Recommendations, Trade-offs & Priorities',
      icon: CheckCircle2,
      color: 'text-teal-400',
      borderColor: 'border-teal-500/40',
      bgColor: 'bg-teal-950/20',
      inputs: ['Analytical findings', 'Strategic trade-off options', 'Financial ROI models', 'Risk & compliance assessments'],
      process: 'Executive decision workshops, scenario stress-testing, resource prioritization, and board-ready synthesis.',
      outputs: ['Board-Ready Strategy Document & Prioritized Action Roadmap'],
      keyRigor: 'Clear decision trade-offs with explicit confidence scores and evidence traceability.'
    },
    {
      number: '05',
      title: 'Design',
      tagline: 'Transformation, Technology & Training Architecture',
      icon: Layout,
      color: 'text-emerald-400',
      borderColor: 'border-emerald-500/40',
      bgColor: 'bg-emerald-950/20',
      inputs: ['Approved strategic direction', 'Enterprise IT architecture specifications', 'Workforce competency gap audit', 'Regulatory SOP requirements'],
      process: 'Blueprinting target operating models, authoring functional AI curricula, and engineering production AI system architecture.',
      outputs: ['Operating Model Blueprint, AI System Specs & Training Curriculum'],
      keyRigor: 'Integration of technical AI architecture, compliance guardrails, and change management from day one.'
    },
    {
      number: '06',
      title: 'Activate',
      tagline: 'Deployment, Adoption & Capability Building',
      icon: Zap,
      color: 'text-amber-300',
      borderColor: 'border-amber-400/40',
      bgColor: 'bg-amber-950/20',
      inputs: ['Completed curriculum modules', 'Production AI software build', 'Standard Operating Procedures', 'Pilot cohort of end-users'],
      process: 'Hands-on interactive AI training workshops, production software deployment into client cloud/on-prem, and SOP rollout.',
      outputs: ['Certified Internal AI Champions & Live Production AI Tools'],
      keyRigor: '100% applied training with real work tasks and mandatory human-in-the-loop validation checkpoints.'
    },
    {
      number: '07',
      title: 'Measure',
      tagline: 'Impact, Learning & Continuous Improvement',
      icon: Activity,
      color: 'text-purple-400',
      borderColor: 'border-purple-500/40',
      bgColor: 'bg-purple-950/20',
      inputs: ['Post-launch commercial KPIs', 'Software uptime and usage telemetry', 'Workforce AI confidence audits', 'Regulatory audit compliance logs'],
      process: 'Quarterly business reviews, adoption auditing, model drift monitoring, and continuous capability refresher clinics.',
      outputs: ['Impact Scorecard, Value Realization Report & Optimization Plan'],
      keyRigor: 'Continuous metric tracking tied to verified commercial revenue, time savings, and regulatory audit certainty.'
    }
  ];

  const current = methodSteps[activeStep];

  return (
    <section className="py-20 bg-[#050505] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#0a0a0a] border border-indigo-500/30 text-indigo-400 text-xs font-mono mb-3">
            <Layers className="w-3.5 h-3.5 text-indigo-400" />
            <span className="uppercase tracking-widest text-[10px]">Universal Delivery Framework</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-light text-white tracking-tight">
            The <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-300">MindCraft Method</span>
          </h2>
          <p className="text-white/60 text-sm sm:text-base mt-3 leading-relaxed">
            Our 7-stage delivery discipline ensures every engagement moves smoothly from ambiguous market questions to validated evidence, strategic clarity, workforce readiness, and measurable commercial transformation.
          </p>
        </div>

        {/* 7-Step Navigation Bar in Bento Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 mb-8">
          {methodSteps.map((step, idx) => {
            const isCurrent = activeStep === idx;
            const Icon = step.icon;
            return (
              <button
                key={step.number}
                onClick={() => setActiveStep(idx)}
                id={`method-step-btn-${step.number}`}
                className={`p-3 rounded-2xl border text-left transition-all relative ${
                  isCurrent 
                    ? 'bg-[#0a0a0a] border-indigo-500/60 shadow-[0_0_15px_rgba(99,102,241,0.25)] text-white' 
                    : 'bg-[#0a0a0a] border-white/10 text-white/50 hover:border-white/20 hover:text-white'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className={`text-[10px] font-mono font-bold ${isCurrent ? 'text-indigo-400' : 'text-white/40'}`}>
                    STAGE {step.number}
                  </span>
                  <Icon className={`w-3.5 h-3.5 ${isCurrent ? 'text-indigo-400' : 'text-white/40'}`} />
                </div>
                <div className="text-xs font-bold font-mono truncate text-white">{step.title}</div>
                {isCurrent && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-400" />
                )}
              </button>
            );
          })}
        </div>

        {/* Detailed Stage Card in Bento Container */}
        <div className="rounded-2xl bg-[#0a0a0a] border border-white/10 p-6 sm:p-8 shadow-2xl">
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-6 border-b border-white/10 gap-4">
            <div>
              <div className="flex items-center space-x-3">
                <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 font-bold">
                  STAGE {current.number} / 07
                </span>
                <span className="text-sm font-medium text-white/60 font-mono">
                  {current.tagline}
                </span>
              </div>
              <h3 className="text-2xl font-light text-white mt-2 flex items-center space-x-2">
                <span>{current.number}. <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-300">{current.title}</span></span>
              </h3>
            </div>

            <div className="flex items-center space-x-2">
              <button
                disabled={activeStep === 0}
                onClick={() => setActiveStep(prev => prev - 1)}
                className="px-3 py-1.5 rounded-xl bg-[#050505] text-xs font-mono text-white/50 hover:text-white disabled:opacity-40 disabled:hover:text-white/50 transition-colors border border-white/10"
              >
                Previous Stage
              </button>
              <button
                disabled={activeStep === methodSteps.length - 1}
                onClick={() => setActiveStep(prev => prev + 1)}
                className="px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-xs font-mono font-semibold text-white disabled:opacity-40 transition-colors flex items-center space-x-1 shadow-[0_0_10px_rgba(99,102,241,0.3)]"
              >
                <span>Next Stage</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Grid Breakdown: Inputs -> Process -> Outputs -> Rigor */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
            
            {/* 1. Required Inputs */}
            <div className="p-5 rounded-2xl bg-[#050505] border border-white/10">
              <div className="text-[10px] font-mono uppercase font-bold text-white/40 mb-2">
                01. Stage Inputs
              </div>
              <ul className="space-y-1.5">
                {current.inputs.map((inp, i) => (
                  <li key={i} className="text-xs text-white/70 flex items-start space-x-1.5">
                    <span className="text-indigo-400 mt-0.5">•</span>
                    <span>{inp}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 2. Analytical Process */}
            <div className="p-5 rounded-2xl bg-[#050505] border border-white/10">
              <div className="text-[10px] font-mono uppercase font-bold text-white/40 mb-2">
                02. MindCraft Investigation
              </div>
              <p className="text-xs text-white/70 leading-relaxed">
                {current.process}
              </p>
            </div>

            {/* 3. Expected Deliverables */}
            <div className="p-5 rounded-2xl bg-[#050505] border border-white/10">
              <div className="text-[10px] font-mono uppercase font-bold text-white/40 mb-2">
                03. Client Deliverables
              </div>
              <ul className="space-y-1.5">
                {current.outputs.map((out, i) => (
                  <li key={i} className="text-xs text-emerald-300 font-mono font-medium flex items-start space-x-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{out}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 4. Rigor Guarantee */}
            <div className="p-5 rounded-2xl bg-[#050505] border border-indigo-500/30">
              <div className="text-[10px] font-mono uppercase font-bold text-indigo-400 mb-2">
                04. Rigor Benchmark
              </div>
              <p className="text-xs text-white/60 leading-relaxed italic font-mono">
                "{current.keyRigor}"
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
