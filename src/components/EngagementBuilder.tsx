import React, { useState } from 'react';
import { motion } from 'motion/react';
import { EngagementBlueprint } from '../types';
import { PageHeader } from './ui/primitives';
import {
  Sparkles,
  Layers,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Calendar,
  Users,
  Target,
  FileText
} from 'lucide-react';

interface EngagementBuilderProps {
  onOpenIntakeWithBlueprint: (blueprint: EngagementBlueprint) => void;
}

const EASE = [0.16, 1, 0.3, 1] as const;

const SELECT_CLASS =
  'w-full min-h-11 px-3 py-2.5 rounded-xl bg-[#050505] border border-white/10 text-base sm:text-sm text-white focus:outline-none focus:border-indigo-500';

export const EngagementBuilder: React.FC<EngagementBuilderProps> = ({
  onOpenIntakeWithBlueprint
}) => {
  const [selectedIndustry, setSelectedIndustry] = useState<string>('Pharmaceuticals');
  const [selectedGeography, setSelectedGeography] = useState<string>('Pan-Africa (Multi-Country)');
  const [selectedNeed, setSelectedNeed] = useState<string>('Integrated Multi-Pillar (Strategy + Research + AI)');
  const [selectedObjective, setSelectedObjective] = useState<string>('New Market Entry & Commercial Acceleration');
  // Mobile-only: which of the 4 selectors is visible (md+ shows all four)
  const [mobileStep, setMobileStep] = useState<number>(0);

  const industries = [
    'Pharmaceuticals',
    'Medical Devices',
    'Medical Diagnostics',
    'Medical Equipment',
    'Surgical Consumables',
    'Hospitals & Healthcare Providers',
    'Chemicals & Specialty Materials',
    'Agrochemicals',
    'Automotive & Mobility',
    'Banking & Financial Services'
  ];

  const geographies = [
    'Pan-Africa (Multi-Country)',
    'East Africa (Kenya, Tanzania, Uganda, Rwanda, Ethiopia)',
    'West Africa (Nigeria, Ghana, Côte d\'Ivoire)',
    'Southern Africa (South Africa, Zambia)',
    'North Africa (Egypt, Morocco)',
    'Europe-to-Africa Expansion Corridor',
    'United States Multinationals & Global'
  ];

  const needs = [
    'Integrated Multi-Pillar (Strategy + Research + AI)',
    'Market Research & Commercial Evidence',
    'Business Consulting & Strategic Advisory',
    'AI Training & Organisational Capability',
    'AI Enterprise Solutions & Engineering'
  ];

  const objectives = [
    'New Market Entry & Commercial Acceleration',
    'Regulatory Intelligence & Guideline Automation',
    'Digital Transformation & AI Readiness',
    'Commercial Sales Force Optimisation & CRM AI',
    'Process Optimisation, SOPs & Quality Systems',
    'KOL Mapping & Medical Affairs Strategy'
  ];

  const generateBlueprint = (): EngagementBlueprint => {
    return {
      industry: selectedIndustry,
      geography: selectedGeography,
      need: selectedNeed,
      objective: selectedObjective,
      workstreams: [
        {
          pillar: 'Market Research',
          scope: `Primary physician & payer interviews, regulatory scans in ${selectedGeography}, and competitor benchmarking tailored to ${selectedIndustry}.`,
          timeline: 'Weeks 1 - 4'
        },
        {
          pillar: 'Business Consulting',
          scope: `Strategic operating model formulation, pricing waterfall models, and regulatory submission critical-path roadmaps for ${selectedObjective}.`,
          timeline: 'Weeks 3 - 7'
        },
        {
          pillar: 'AI Training',
          scope: `Applied function-specific prompt engineering and executive briefings for cross-functional teams in ${selectedIndustry}.`,
          timeline: 'Weeks 6 - 9'
        },
        {
          pillar: 'AI Enterprise Solutions',
          scope: `Deployment of a custom intelligence monitoring agent and automated dashboard integration into client systems.`,
          timeline: 'Weeks 8 - 12'
        }
      ],
      methodologyOverview: `MindCraft's unified 7-stage delivery method integrating primary field research with executive strategy and private, governed AI software architecture.`,
      expectedDeliverables: [
        `Executive Strategy Blueprint & Market Entry Dossier (${selectedGeography})`,
        `Primary Stakeholder Insights & Competitor Pipeline Index`,
        `Tailored Applied AI Curriculum & Certified Cohort of Champions`,
        `Production-Ready Intelligence Dashboard & Integration Documentation`
      ],
      keyStakeholders: [
        'C-Suite & Strategic Planning Executives',
        'Commercial Directors & Territory Managers',
        'Regulatory Affairs & Medical Affairs Leads',
        'CIO / CTO / Enterprise Data Architects'
      ],
      indicativePhases: [
        {
          phase: 'Phase 01',
          title: 'Discovery & Research Design',
          duration: 'Weeks 1-2',
          activities: 'Problem framing, stakeholder onboarding, sampling design, and health authority data ingestion.'
        },
        {
          phase: 'Phase 02',
          title: 'Evidence Gathering & Analysis',
          duration: 'Weeks 3-5',
          activities: 'Stakeholder interviews, statistical modelling, regulatory scans, and AI use case prioritisation.'
        },
        {
          phase: 'Phase 03',
          title: 'Strategy Formulation & Solution Architecture',
          duration: 'Weeks 6-8',
          activities: 'Board-ready strategy synthesis, custom AI software build, and curriculum customisation.'
        },
        {
          phase: 'Phase 04',
          title: 'Activation, Training & Value Realization',
          duration: 'Weeks 9-12',
          activities: 'Live workshop delivery, production system deployment, SOP rollout, and KPI auditing.'
        }
      ],
      successMetrics: [
        'Decision-ready strategy delivered against an agreed timeline',
        'Data privacy and governance safeguards built in from the start',
        'Approved AI workflows adopted across core functional teams'
      ]
    };
  };

  const blueprint = generateBlueprint();

  const controls: {
    label: string;
    value: string;
    set: (v: string) => void;
    options: string[];
    accent: 'indigo' | 'emerald';
  }[] = [
    { label: '01. Industry Vertical', value: selectedIndustry, set: setSelectedIndustry, options: industries, accent: 'indigo' },
    { label: '02. Target Geography', value: selectedGeography, set: setSelectedGeography, options: geographies, accent: 'indigo' },
    { label: '03. Capability Need', value: selectedNeed, set: setSelectedNeed, options: needs, accent: 'indigo' },
    { label: '04. Strategic Objective', value: selectedObjective, set: setSelectedObjective, options: objectives, accent: 'emerald' }
  ];

  const viewport = { once: true, margin: '-10%' } as const;

  return (
    <section className="mc-section mc-page-intro" id="engagement-builder-section">
      <div className="mc-container">

        {/* Header: intent first */}
        <PageHeader
          className="mb-10 md:mb-14"
          title={<>Sketch an engagement before we talk.</>}
          lead="Choose an industry, a market, the capability you need and your objective. The builder outlines an indicative brief you can send with your enquiry."
        />

        {/* Selectors: stepwise on phones, 4-up grid from md */}
        <div className="mb-6 md:mb-10">
          <div className="md:hidden flex items-center justify-between mb-3 tabular-nums text-xs text-white/70">
            <span>Step 0{mobileStep + 1} of 04</span>
            <div className="flex items-center gap-1.5" role="tablist" aria-label="Builder steps">
              {controls.map((c, i) => (
                <button
                  key={c.label}
                  role="tab"
                  aria-selected={mobileStep === i}
                  aria-label={`Go to ${c.label}`}
                  onClick={() => setMobileStep(i)}
                  className="w-6 h-11 flex items-center justify-center"
                >
                  <span className={`block h-1.5 rounded-full transition-[width,background-color] duration-200 ${mobileStep === i ? 'w-6 bg-indigo-500' : 'w-1.5 bg-white/25'}`} />
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {controls.map((c, i) => {
              const id = `eb-select-${i}`;
              const isEmerald = c.accent === 'emerald';
              return (
                <div
                  key={c.label}
                  className={`${mobileStep === i ? 'block' : 'hidden'} md:block p-4 sm:p-5 rounded-2xl bg-[#0a0a0a] border border-white/10 space-y-2`}
                >
                  <label
                    htmlFor={id}
                    className={`text-xs font-semibold block${isEmerald ? 'text-emerald-400' : 'text-indigo-400'}`}
                  >
                    {c.label}
                  </label>
                  <select
                    id={id}
                    value={c.value}
                    onChange={(e) => c.set(e.target.value)}
                    className={`${SELECT_CLASS} ${isEmerald ? 'focus:border-emerald-500' : ''}`}
                  >
                    {c.options.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>

                  {/* Mobile step nav */}
                  <div className="md:hidden flex items-center justify-between gap-3 pt-2">
                    <button
                      onClick={() => setMobileStep(s => Math.max(0, s - 1))}
                      disabled={i === 0}
                      className="mc-tap px-3 rounded-xl border border-white/10 text-sm text-white/70 disabled:opacity-30 inline-flex items-center gap-1.5 active:scale-[0.98]"
                    >
                      <ArrowLeft className="w-4 h-4" /> Back
                    </button>
                    {i < controls.length - 1 ? (
                      <button
                        onClick={() => setMobileStep(s => Math.min(controls.length - 1, s + 1))}
                        className="mc-tap px-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-sm font-semibold text-white inline-flex items-center gap-1.5 active:scale-[0.98]"
                      >
                        Next <ArrowRight className="w-4 h-4" />
                      </button>
                    ) : (
                      <a
                        href="#engagement-blueprint-result"
                        className="mc-tap px-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-sm font-semibold text-white inline-flex items-center gap-1.5 active:scale-[0.98]"
                      >
                        See blueprint <ArrowRight className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Generated blueprint */}
        <div
          id="engagement-blueprint-result"
          className="rounded-2xl bg-[#0a0a0a] border border-indigo-500/35 p-4 sm:p-8 space-y-6 md:space-y-8 relative overflow-hidden scroll-mt-20"
        >
          {/* Blueprint Header */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-5 md:pb-6 border-b border-white/10 gap-4">
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="text-xs px-2.5 py-1 rounded-md bg-[#0d0f17] border border-indigo-500/35 text-indigo-300 font-semibold">
                  Indicative brief
                </span>
                <span className="text-xs px-2.5 py-1 rounded bg-[#050505] border border-white/10 text-white/70 tabular-nums break-words">
                  {blueprint.industry} · {blueprint.geography}
                </span>
              </div>
              <motion.h2
                key={blueprint.objective}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, ease: EASE }}
                className="font-heading text-2xl sm:text-3xl font-medium tracking-[-0.015em] text-white"
              >
                {blueprint.objective}
              </motion.h2>
              <p className="text-sm text-indigo-400 mt-1">
                An indicative plan across research, consulting, AI enablement and training. We refine it with you.
              </p>
            </div>

            {/* Primary CTA (desktop/tablet; phones use the sticky bar) */}
            <div className="hidden md:flex items-center shrink-0">
              <button
                onClick={() => onOpenIntakeWithBlueprint(blueprint)}
                id="discuss-blueprint-btn"
                className="mc-tap px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-colors active:scale-[0.98] inline-flex items-center gap-2"
              >
                <span>Discuss this engagement</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* 4 Workstreams: snap rail on phones */}
          <motion.div
            className="space-y-3"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.22, ease: EASE }}
          >
            <div className="text-xs font-semibold text-indigo-400 flex items-center gap-2">
              <Layers className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Recommended Integrated Workstreams</span>
            </div>

            <div className="mc-snap-row md:!grid md:!grid-cols-2 lg:!grid-cols-4 md:!overflow-visible">
              {blueprint.workstreams.map((ws, i) => (
                <div key={i} className="p-4 sm:p-5 rounded-2xl bg-[#050505] border border-white/10 flex flex-col justify-between hover:border-indigo-500/35 transition-colors">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span className="text-sm font-bold text-white">{ws.pillar}</span>
                      <span className="text-xs tabular-nums text-indigo-400 shrink-0">{ws.timeline}</span>
                    </div>
                    <p className="text-sm text-white/70 leading-relaxed">
                      {ws.scope}
                    </p>
                  </div>
                  <div className="mt-3 pt-2 border-t border-white/[0.08] text-xs text-white/50 tabular-nums">
                    Lead: MindCraft Senior Practice
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* 4 Indicative Delivery Phases */}
          <motion.div
            className="space-y-3"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.22, ease: EASE }}
          >
            <div className="text-xs font-semibold text-indigo-400 flex items-center gap-2">
              <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Indicative 12-Week Delivery Phasing</span>
            </div>

            <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {blueprint.indicativePhases.map((ph, i) => (
                <li key={i} className="p-4 sm:p-5 rounded-2xl bg-[#050505] border border-white/10">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-xs tabular-nums text-indigo-400 font-bold">{ph.phase}</span>
                    <span className="text-xs text-white/60 tabular-nums">{ph.duration}</span>
                  </div>
                  <div className="text-sm font-bold text-white mb-1.5">{ph.title}</div>
                  <p className="text-sm text-white/70 leading-relaxed">{ph.activities}</p>
                </li>
              ))}
            </ol>
          </motion.div>

          {/* Deliverables + Stakeholders + Metrics */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.22, ease: EASE }}
          >
            <div className="p-4 sm:p-5 rounded-2xl bg-[#050505] border border-white/10 space-y-2">
              <div className="text-xs font-semibold text-emerald-400 flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Expected Deliverables</span>
              </div>
              <ul className="space-y-2">
                {blueprint.expectedDeliverables.map((del, i) => (
                  <li key={i} className="text-sm text-white/80 flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{del}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-[#050505] border border-white/10 space-y-2">
              <div className="text-xs font-semibold text-indigo-400 flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Key Stakeholders Required</span>
              </div>
              <ul className="space-y-2">
                {blueprint.keyStakeholders.map((stk, i) => (
                  <li key={i} className="text-sm text-white/80 flex items-start gap-2">
                    <span className="text-indigo-400 font-bold" aria-hidden="true">•</span>
                    <span>{stk}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-[#050505] border border-indigo-500/35 space-y-2">
              <div className="text-xs font-semibold text-indigo-400 flex items-center gap-1.5">
                <Target className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Success Impact Targets</span>
              </div>
              <ul className="space-y-2">
                {blueprint.successMetrics.map((met, i) => (
                  <li key={i} className="text-sm text-white font-medium flex items-start gap-2">
                    <span className="text-indigo-400 font-bold" aria-hidden="true">↑</span>
                    <span>{met}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Bottom confirmation: quieter secondary action on md+, hidden on phones (sticky bar is the CTA) */}
          <div className="hidden md:flex p-5 rounded-2xl bg-[#050505] border border-white/10 flex-row items-center justify-between gap-3">
            <span className="text-sm text-white/70">
              Ready to refine this blueprint with a senior MindCraft partner?
            </span>
            <button
              onClick={() => onOpenIntakeWithBlueprint(blueprint)}
              className="mc-tap px-4 py-2 rounded-xl border border-indigo-500/35 hover:bg-indigo-500/10 text-indigo-400 text-sm font-semibold shrink-0 transition-colors active:scale-[0.98] inline-flex items-center gap-1.5"
            >
              <span>Schedule Blueprint Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Sticky summary bar (phones only, <= 56px) */}
      <div className="md:hidden sticky bottom-0 z-20 mt-4 bg-[#050505]/95 backdrop-blur border-t border-white/10 pb-[env(safe-area-inset-bottom)]">
        <div className="mc-container h-14 flex items-center justify-between gap-3">
          <div className="min-w-0 leading-tight">
            <div className="text-xs text-indigo-400 font-medium">Your blueprint</div>
            <div className="text-xs text-white/80 truncate">{blueprint.industry} · {blueprint.objective}</div>
          </div>
          <button
            onClick={() => onOpenIntakeWithBlueprint(blueprint)}
            className="mc-tap shrink-0 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold active:scale-[0.98] inline-flex items-center gap-1.5"
          >
            Discuss <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
