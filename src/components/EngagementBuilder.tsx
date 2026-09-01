import React, { useState } from 'react';
import { EngagementBlueprint } from '../types';
import { 
  Sparkles, 
  Layers, 
  CheckCircle2, 
  ArrowRight, 
  Download, 
  Share2, 
  Calendar, 
  Users, 
  Target, 
  FileText,
  Clock,
  Compass,
  BarChart3,
  GraduationCap,
  Cpu
} from 'lucide-react';

interface EngagementBuilderProps {
  onOpenIntakeWithBlueprint: (blueprint: EngagementBlueprint) => void;
}

export const EngagementBuilder: React.FC<EngagementBuilderProps> = ({
  onOpenIntakeWithBlueprint
}) => {
  const [selectedIndustry, setSelectedIndustry] = useState<string>('Pharmaceuticals');
  const [selectedGeography, setSelectedGeography] = useState<string>('Pan-Africa (Multi-Country)');
  const [selectedNeed, setSelectedNeed] = useState<string>('Integrated Multi-Pillar (Strategy + Research + AI)');
  const [selectedObjective, setSelectedObjective] = useState<string>('New Market Entry & Commercial Acceleration');

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
    'AI Training & Organizational Capability',
    'AI Enterprise Solutions & Engineering'
  ];

  const objectives = [
    'New Market Entry & Commercial Acceleration',
    'Regulatory Intelligence & Guideline Automation',
    'Digital Transformation & AI Readiness',
    'Commercial Sales Force Optimization & CRM AI',
    'Process Optimization, SOPs & Quality Systems',
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
          activities: 'Double-blind interviews, statistical modeling, regulatory scans, and AI use case prioritization.'
        },
        {
          phase: 'Phase 03',
          title: 'Strategy Formulation & Solution Architecture',
          duration: 'Weeks 6-8',
          activities: 'Board-ready strategy synthesis, custom AI software build, and curriculum customization.'
        },
        {
          phase: 'Phase 04',
          title: 'Activation, Training & Value Realization',
          duration: 'Weeks 9-12',
          activities: 'Live workshop delivery, production system deployment, SOP rollout, and KPI auditing.'
        }
      ],
      successMetrics: [
        'Decision-ready strategy delivered 40% faster than legacy consulting timelines',
        'Zero compliance or regulatory data leakage incidents',
        '100% adoption of approved AI workflows across core functional teams'
      ]
    };
  };

  const blueprint = generateBlueprint();

  return (
    <div className="py-20 bg-[#050505] border-b border-white/10" id="engagement-builder-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#0a0a0a] border border-indigo-500/30 text-indigo-400 text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span className="uppercase tracking-widest text-[10px]">Interactive Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-light text-white tracking-tight">
            Build Your <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-300">Engagement Blueprint</span>
          </h2>
          <p className="text-white/60 text-sm sm:text-base mt-3 leading-relaxed">
            Select your industry, geographic market, core capability need, and strategic objective to instantly generate a tailored MindCraft engagement architecture.
          </p>
        </div>

        {/* 4 Interactive Dropdown / Selector Controls in Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          
          {/* Industry */}
          <div className="p-5 rounded-2xl bg-[#0a0a0a] border border-white/10 space-y-2">
            <label className="text-[10px] font-mono uppercase font-bold text-indigo-400 block">
              01. Industry Vertical
            </label>
            <select
              value={selectedIndustry}
              onChange={(e) => setSelectedIndustry(e.target.value)}
              className="w-full p-2.5 rounded-xl bg-[#050505] border border-white/10 text-xs text-white focus:outline-none focus:border-indigo-500 font-mono"
            >
              {industries.map((ind, i) => (
                <option key={i} value={ind}>{ind}</option>
              ))}
            </select>
          </div>

          {/* Geography */}
          <div className="p-5 rounded-2xl bg-[#0a0a0a] border border-white/10 space-y-2">
            <label className="text-[10px] font-mono uppercase font-bold text-indigo-400 block">
              02. Target Geography
            </label>
            <select
              value={selectedGeography}
              onChange={(e) => setSelectedGeography(e.target.value)}
              className="w-full p-2.5 rounded-xl bg-[#050505] border border-white/10 text-xs text-white focus:outline-none focus:border-indigo-500 font-mono"
            >
              {geographies.map((geo, i) => (
                <option key={i} value={geo}>{geo}</option>
              ))}
            </select>
          </div>

          {/* Need */}
          <div className="p-5 rounded-2xl bg-[#0a0a0a] border border-white/10 space-y-2">
            <label className="text-[10px] font-mono uppercase font-bold text-indigo-400 block">
              03. Capability Need
            </label>
            <select
              value={selectedNeed}
              onChange={(e) => setSelectedNeed(e.target.value)}
              className="w-full p-2.5 rounded-xl bg-[#050505] border border-white/10 text-xs text-white focus:outline-none focus:border-indigo-500 font-mono"
            >
              {needs.map((nd, i) => (
                <option key={i} value={nd}>{nd}</option>
              ))}
            </select>
          </div>

          {/* Objective */}
          <div className="p-5 rounded-2xl bg-[#0a0a0a] border border-white/10 space-y-2">
            <label className="text-[10px] font-mono uppercase font-bold text-emerald-400 block">
              04. Strategic Objective
            </label>
            <select
              value={selectedObjective}
              onChange={(e) => setSelectedObjective(e.target.value)}
              className="w-full p-2.5 rounded-xl bg-[#050505] border border-white/10 text-xs text-white focus:outline-none focus:border-emerald-500 font-mono"
            >
              {objectives.map((obj, i) => (
                <option key={i} value={obj}>{obj}</option>
              ))}
            </select>
          </div>

        </div>

        {/* DYNAMICALLY GENERATED ENGAGEMENT BLUEPRINT DOSSIER IN BENTO CONTAINER */}
        <div className="rounded-2xl bg-[#0a0a0a] border border-indigo-500/50 p-6 sm:p-8 shadow-2xl space-y-8 relative overflow-hidden">
          
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

          {/* Blueprint Header */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-6 border-b border-white/10 gap-4">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 font-bold">
                  CUSTOM ENGAGEMENT BLUEPRINT
                </span>
                <span className="text-xs px-2.5 py-1 rounded bg-[#050505] border border-white/10 text-white/60 font-mono">
                  {blueprint.industry} · {blueprint.geography}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-light text-white">
                {blueprint.objective}
              </h3>
              <p className="text-xs sm:text-sm text-indigo-300 mt-1 font-mono">
                Integrated delivery model spanning research, strategic consulting, AI enablement & enterprise architecture.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-3 shrink-0">
              <button
                onClick={() => onOpenIntakeWithBlueprint(blueprint)}
                id="discuss-blueprint-btn"
                className="px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-mono font-semibold text-xs sm:text-sm shadow-[0_0_15px_rgba(99,102,241,0.3)] transition-all flex items-center space-x-2"
              >
                <span>Discuss This Engagement</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* 4 Workstreams Grid */}
          <div className="space-y-3">
            <div className="text-xs font-mono uppercase font-bold text-indigo-400 flex items-center space-x-2">
              <Layers className="w-3.5 h-3.5" />
              <span>Recommended Integrated Workstreams</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
              {blueprint.workstreams.map((ws, i) => (
                <div key={i} className="p-5 rounded-2xl bg-[#050505] border border-white/10 flex flex-col justify-between hover:border-indigo-500/30 transition-all">
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-bold text-white font-mono">{ws.pillar}</span>
                      <span className="text-[10px] font-mono text-indigo-400">{ws.timeline}</span>
                    </div>
                    <p className="text-xs text-white/60 leading-relaxed">
                      {ws.scope}
                    </p>
                  </div>
                  <div className="mt-3 pt-2 border-t border-white/5 text-[10px] text-white/40 font-mono">
                    Lead: MindCraft Senior Practice
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 4 Indicative Delivery Phases */}
          <div className="space-y-3 pt-2">
            <div className="text-xs font-mono uppercase font-bold text-indigo-300 flex items-center space-x-2">
              <Calendar className="w-3.5 h-3.5" />
              <span>Indicative 12-Week Delivery Phasing</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {blueprint.indicativePhases.map((ph, i) => (
                <div key={i} className="p-5 rounded-2xl bg-[#050505] border border-white/10">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-mono text-indigo-400 font-bold">{ph.phase}</span>
                    <span className="text-[10px] text-white/40 font-mono">{ph.duration}</span>
                  </div>
                  <div className="text-xs font-bold text-white mb-1.5 font-mono">{ph.title}</div>
                  <p className="text-xs text-white/60 leading-relaxed">{ph.activities}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Deliverables + Stakeholders + Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            
            <div className="p-5 rounded-2xl bg-[#050505] border border-white/10 space-y-2">
              <div className="text-[11px] font-mono uppercase font-bold text-emerald-400 flex items-center space-x-1.5">
                <FileText className="w-3.5 h-3.5" />
                <span>Expected Deliverables</span>
              </div>
              <ul className="space-y-1.5">
                {blueprint.expectedDeliverables.map((del, i) => (
                  <li key={i} className="text-xs text-white/70 flex items-start space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{del}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-5 rounded-2xl bg-[#050505] border border-white/10 space-y-2">
              <div className="text-[11px] font-mono uppercase font-bold text-indigo-400 flex items-center space-x-1.5">
                <Users className="w-3.5 h-3.5" />
                <span>Key Stakeholders Required</span>
              </div>
              <ul className="space-y-1.5">
                {blueprint.keyStakeholders.map((stk, i) => (
                  <li key={i} className="text-xs text-white/70 flex items-start space-x-2">
                    <span className="text-indigo-400 font-bold">•</span>
                    <span>{stk}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-5 rounded-2xl bg-[#050505] border border-indigo-500/30 space-y-2">
              <div className="text-[11px] font-mono uppercase font-bold text-indigo-300 flex items-center space-x-1.5">
                <Target className="w-3.5 h-3.5 text-indigo-400" />
                <span>Success Impact Targets</span>
              </div>
              <ul className="space-y-1.5">
                {blueprint.successMetrics.map((met, i) => (
                  <li key={i} className="text-xs text-indigo-200 font-mono font-medium flex items-start space-x-2">
                    <span className="text-indigo-400 font-bold">↑</span>
                    <span>{met}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Bottom Confirmation Footer */}
          <div className="p-5 rounded-2xl bg-[#050505] border border-indigo-500/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <span className="text-xs text-white/70 font-mono">
              Ready to refine this blueprint with a senior MindCraft partner?
            </span>
            <button
              onClick={() => onOpenIntakeWithBlueprint(blueprint)}
              className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-mono font-semibold shrink-0 transition-colors flex items-center space-x-1.5 shadow-[0_0_10px_rgba(99,102,241,0.25)]"
            >
              <span>Schedule Blueprint Consultation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
