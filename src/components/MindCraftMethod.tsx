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
      inputs: ['Client business objective', 'Geographic & therapeutic scope', 'Regulatory & budget constraints', 'Executive success criteria'],
      process: 'Rigorous diagnostic interviews with client sponsors, problem framing workshops, and baseline assumption testing.',
      outputs: ['Formal Engagement Charter & Problem Definition Statement'],
      keyRigor: 'Zero reliance on generic assumptions; custom scoping tailored to African & international commercial realities.'
    },
    {
      number: '02',
      title: 'Investigate',
      tagline: 'Primary + Secondary Evidence Gathering',
      inputs: ['Physician / Pharmacist / Patient networks', 'Regulatory health authority gazettes & databases', 'Trade import manifests & tender histories', 'Internal client transactional data'],
      process: 'Double-blind primary surveys, Key Opinion Leader (KOL) panels, desk research, and data ingestion across 20+ African agencies.',
      outputs: ['Unvarnished Evidence Dossier & Verified Primary Datasets'],
      keyRigor: 'Double-verified field data with strict statistical sampling and audited clinician credentials.'
    },
    {
      number: '03',
      title: 'Analyze',
      tagline: 'Data, Market, Strategic & Operational Modeling',
      inputs: ['Raw primary field survey datasets', 'Tender pricing distributions', 'Process cycle-time logs', 'Organizational AI maturity scores'],
      process: 'Statistical regression, price-elasticity waterfall modeling, competitor pipeline SWOT, and value-stream process mapping.',
      outputs: ['Strategic Insight Models, Competitor Matrices & Gap Diagnostics'],
      keyRigor: 'Triangulation between qualitative physician sentiment and quantitative epidemiological pricing data.'
    },
    {
      number: '04',
      title: 'Decide',
      tagline: 'Recommendations, Trade-offs & Priorities',
      inputs: ['Analytical findings', 'Strategic trade-off options', 'Financial ROI models', 'Risk & compliance assessments'],
      process: 'Executive decision workshops, scenario stress-testing, resource prioritization, and board-ready synthesis.',
      outputs: ['Board-Ready Strategy Document & Prioritized Action Roadmap'],
      keyRigor: 'Clear decision trade-offs with explicit confidence scores and evidence traceability.'
    },
    {
      number: '05',
      title: 'Design',
      tagline: 'Transformation, Technology & Training Architecture',
      inputs: ['Approved strategic direction', 'Enterprise IT architecture specifications', 'Workforce competency gap audit', 'Regulatory SOP requirements'],
      process: 'Blueprinting target operating models, authoring functional AI curricula, and engineering production AI system architecture.',
      outputs: ['Operating Model Blueprint, AI System Specs & Training Curriculum'],
      keyRigor: 'Integration of technical AI architecture, compliance guardrails, and change management from day one.'
    },
    {
      number: '06',
      title: 'Activate',
      tagline: 'Deployment, Adoption & Capability Building',
      inputs: ['Completed curriculum modules', 'Production AI software build', 'Standard Operating Procedures', 'Pilot cohort of end-users'],
      process: 'Hands-on interactive AI training workshops, production software deployment into client cloud/on-prem, and SOP rollout.',
      outputs: ['Certified Internal AI Champions & Live Production AI Tools'],
      keyRigor: '100% applied training with real work tasks and mandatory human-in-the-loop validation checkpoints.'
    },
    {
      number: '07',
      title: 'Measure',
      tagline: 'Impact, Learning & Continuous Improvement',
      inputs: ['Post-launch commercial KPIs', 'Software uptime and usage telemetry', 'Workforce AI confidence audits', 'Regulatory audit compliance logs'],
      process: 'Quarterly business reviews, adoption auditing, model drift monitoring, and continuous capability refresher clinics.',
      outputs: ['Impact Scorecard, Value Realization Report & Optimization Plan'],
      keyRigor: 'Continuous metric tracking tied to verified commercial revenue, time savings, and regulatory audit certainty.'
    }
  ];

  const current = methodSteps[activeStep];

  return (
    <section className="py-16 sm:py-24 bg-[#F4F1EA] border-b border-[rgba(20,25,26,0.12)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <div className="font-mono text-[11px] tracking-widest uppercase text-[#C0562F] mb-3">
              The MindCraft Method
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#16191A] font-normal leading-tight tracking-tight">
              A repeatable path from understanding to impact.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#4C524E] max-w-md leading-relaxed">
            The same rigor underpins every engagement — whether research, consulting, capability training or software. Select a stage to see what happens inside it.
          </p>
        </div>

        {/* 7-Step Stage Tabs */}
        <div className="flex gap-2 overflow-x-auto pb-2 mb-4 scrollbar-none">
          {methodSteps.map((step, idx) => {
            const isCurrent = activeStep === idx;
            return (
              <button
                key={step.number}
                onClick={() => setActiveStep(idx)}
                className={`flex-1 min-w-[110px] text-left p-4 rounded-t-xl transition-all border-b-2 ${
                  isCurrent 
                    ? 'bg-[#FBFAF6] border-[#C0562F] text-[#16191A] shadow-sm' 
                    : 'bg-[rgba(20,25,26,0.03)] border-transparent text-[#6A6F6B] hover:bg-[rgba(20,25,26,0.06)] hover:text-[#16191A]'
                }`}
              >
                <div className={`font-mono text-[11px] font-semibold ${isCurrent ? 'text-[#C0562F]' : 'text-[#8A8578]'}`}>
                  {step.number}
                </div>
                <div className="text-sm font-semibold tracking-tight mt-1 truncate">
                  {step.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Stage Content Panel */}
        <div className="border border-[rgba(20,25,26,0.13)] rounded-b-2xl rounded-tr-2xl bg-[#FBFAF6] p-6 sm:p-10 shadow-sm">
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-6 border-b border-[rgba(20,25,26,0.08)] gap-4">
            <div>
              <div className="flex items-center space-x-3">
                <span className="font-mono text-[10px] uppercase px-2.5 py-1 rounded bg-[#123A2E]/10 text-[#123A2E] font-bold">
                  STAGE {current.number} OF 07
                </span>
                <span className="text-sm font-medium text-[#4C524E]">
                  {current.tagline}
                </span>
              </div>
              <h3 className="font-serif text-3xl sm:text-4xl font-normal text-[#16191A] mt-2">
                {current.number}. {current.title}
              </h3>
            </div>

            <div className="flex items-center space-x-2">
              <button
                disabled={activeStep === 0}
                onClick={() => setActiveStep(prev => prev - 1)}
                className="px-3.5 py-2 rounded-lg bg-white text-xs font-mono text-[#3B4441] border border-[rgba(20,25,26,0.14)] hover:bg-black/5 disabled:opacity-30 transition-colors"
              >
                ← Previous Stage
              </button>
              <button
                disabled={activeStep === methodSteps.length - 1}
                onClick={() => setActiveStep(prev => prev + 1)}
                className="px-4 py-2 rounded-lg bg-[#123A2E] hover:bg-[#C0562F] text-xs font-semibold text-[#F4F1EA] disabled:opacity-30 transition-colors flex items-center space-x-1.5"
              >
                <span>Next Stage</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* 4-Column Structured Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            
            {/* 1. Required Inputs */}
            <div className="p-5 rounded-xl bg-white border border-[rgba(20,25,26,0.1)]">
              <div className="font-mono text-[10px] uppercase font-bold text-[#8A8578] mb-3">
                01 · Stage Inputs
              </div>
              <ul className="space-y-2">
                {current.inputs.map((inp, i) => (
                  <li key={i} className="text-xs sm:text-sm text-[#3B4441] flex items-start space-x-2">
                    <span className="text-[#123A2E] font-bold">•</span>
                    <span>{inp}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 2. Analytical Process */}
            <div className="p-5 rounded-xl bg-white border border-[rgba(20,25,26,0.1)]">
              <div className="font-mono text-[10px] uppercase font-bold text-[#8A8578] mb-3">
                02 · MindCraft Investigation
              </div>
              <p className="text-xs sm:text-sm text-[#3B4441] leading-relaxed">
                {current.process}
              </p>
            </div>

            {/* 3. Expected Deliverables */}
            <div className="p-5 rounded-xl bg-white border border-[rgba(20,25,26,0.1)]">
              <div className="font-mono text-[10px] uppercase font-bold text-[#8A8578] mb-3">
                03 · Client Deliverables
              </div>
              <ul className="space-y-2">
                {current.outputs.map((out, i) => (
                  <li key={i} className="text-xs sm:text-sm text-[#123A2E] font-semibold flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[#123A2E] shrink-0 mt-0.5" />
                    <span>{out}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 4. Rigor Guarantee */}
            <div className="p-5 rounded-xl bg-[#123A2E]/5 border border-[#123A2E]/20">
              <div className="font-mono text-[10px] uppercase font-bold text-[#C0562F] mb-3">
                04 · Rigor Benchmark
              </div>
              <p className="text-xs sm:text-sm text-[#123A2E] leading-relaxed italic font-serif">
                "{current.keyRigor}"
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
