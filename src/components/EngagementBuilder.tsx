import React, { useState } from 'react';
import { EngagementBlueprint } from '../types';
import { 
  Sparkles, 
  Layers, 
  CheckCircle2, 
  ArrowRight, 
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
    <div className="bg-[#F4F1EA] py-16 sm:py-24 border-b border-[rgba(20,25,26,0.12)]" id="engagement-builder-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="max-w-3xl">
          <div className="font-mono text-[11px] tracking-widest uppercase text-[#C0562F] mb-3">
            Interactive Architecture
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#16191A] font-normal leading-tight tracking-tight">
            Build Your Engagement Blueprint
          </h2>
          <p className="text-sm sm:text-base text-[#4C524E] mt-3 leading-relaxed">
            Select your industry, geographic market, core capability need, and strategic objective to instantly generate a tailored MindCraft engagement architecture.
          </p>
        </div>

        {/* 4 Interactive Dropdowns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Industry */}
          <div className="p-5 rounded-xl bg-[#FBFAF6] border border-[rgba(20,25,26,0.12)] space-y-2">
            <label className="font-mono text-[10px] uppercase font-bold text-[#C0562F] block">
              01 · Industry Vertical
            </label>
            <select
              value={selectedIndustry}
              onChange={(e) => setSelectedIndustry(e.target.value)}
              className="w-full p-2.5 rounded-lg bg-white border border-[rgba(20,25,26,0.12)] text-xs text-[#16191A] focus:outline-none focus:border-[#123A2E] font-sans"
            >
              {industries.map((ind, i) => (
                <option key={i} value={ind}>{ind}</option>
              ))}
            </select>
          </div>

          {/* Geography */}
          <div className="p-5 rounded-xl bg-[#FBFAF6] border border-[rgba(20,25,26,0.12)] space-y-2">
            <label className="font-mono text-[10px] uppercase font-bold text-[#123A2E] block">
              02 · Target Geography
            </label>
            <select
              value={selectedGeography}
              onChange={(e) => setSelectedGeography(e.target.value)}
              className="w-full p-2.5 rounded-lg bg-white border border-[rgba(20,25,26,0.12)] text-xs text-[#16191A] focus:outline-none focus:border-[#123A2E] font-sans"
            >
              {geographies.map((geo, i) => (
                <option key={i} value={geo}>{geo}</option>
              ))}
            </select>
          </div>

          {/* Need */}
          <div className="p-5 rounded-xl bg-[#FBFAF6] border border-[rgba(20,25,26,0.12)] space-y-2">
            <label className="font-mono text-[10px] uppercase font-bold text-[#123A2E] block">
              03 · Capability Need
            </label>
            <select
              value={selectedNeed}
              onChange={(e) => setSelectedNeed(e.target.value)}
              className="w-full p-2.5 rounded-lg bg-white border border-[rgba(20,25,26,0.12)] text-xs text-[#16191A] focus:outline-none focus:border-[#123A2E] font-sans"
            >
              {needs.map((nd, i) => (
                <option key={i} value={nd}>{nd}</option>
              ))}
            </select>
          </div>

          {/* Objective */}
          <div className="p-5 rounded-xl bg-[#FBFAF6] border border-[rgba(20,25,26,0.12)] space-y-2">
            <label className="font-mono text-[10px] uppercase font-bold text-[#C0562F] block">
              04 · Strategic Objective
            </label>
            <select
              value={selectedObjective}
              onChange={(e) => setSelectedObjective(e.target.value)}
              className="w-full p-2.5 rounded-lg bg-white border border-[rgba(20,25,26,0.12)] text-xs text-[#16191A] focus:outline-none focus:border-[#123A2E] font-sans"
            >
              {objectives.map((obj, i) => (
                <option key={i} value={obj}>{obj}</option>
              ))}
            </select>
          </div>

        </div>

        {/* Blueprint Output Panel */}
        <div className="rounded-2xl border border-[rgba(20,25,26,0.14)] bg-[#FBFAF6] p-6 sm:p-10 shadow-sm space-y-8">
          
          {/* Top Info */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-6 border-b border-[rgba(20,25,26,0.08)] gap-4">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-[#123A2E]/10 text-[#123A2E] font-bold uppercase">
                  Custom Engagement Blueprint
                </span>
                <span className="text-xs px-2.5 py-1 rounded bg-white border border-[rgba(20,25,26,0.1)] text-[#6A6F6B] font-mono">
                  {blueprint.industry} · {blueprint.geography}
                </span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#16191A]">
                {blueprint.objective}
              </h3>
              <p className="text-xs sm:text-sm text-[#4C524E] mt-1 font-serif italic">
                Integrated delivery model spanning research, strategic consulting, AI enablement & enterprise architecture.
              </p>
            </div>

            <button
              onClick={() => onOpenIntakeWithBlueprint(blueprint)}
              className="px-5 py-3 rounded-lg bg-[#123A2E] hover:bg-[#C0562F] text-white font-semibold text-xs sm:text-sm transition-colors flex items-center space-x-2 shrink-0 self-start lg:self-auto"
            >
              <span>Discuss This Engagement</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* 4 Workstreams Grid */}
          <div className="space-y-3">
            <div className="font-mono text-xs uppercase font-bold text-[#123A2E] flex items-center space-x-2">
              <Layers className="w-3.5 h-3.5 text-[#C0562F]" />
              <span>Recommended Integrated Workstreams</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
              {blueprint.workstreams.map((ws, i) => (
                <div key={i} className="p-5 rounded-xl bg-white border border-[rgba(20,25,26,0.08)] flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-bold text-[#16191A] font-serif">{ws.pillar}</span>
                      <span className="text-[10px] font-mono text-[#C0562F] font-bold">{ws.timeline}</span>
                    </div>
                    <p className="text-xs text-[#4C524E] leading-relaxed">
                      {ws.scope}
                    </p>
                  </div>
                  <div className="mt-3 pt-2 border-t border-[rgba(20,25,26,0.06)] text-[10px] text-[#8A8578] font-mono">
                    Lead: MindCraft Senior Practice
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 4 Phased Milestones */}
          <div className="space-y-3 pt-2">
            <div className="font-mono text-xs uppercase font-bold text-[#123A2E] flex items-center space-x-2">
              <Calendar className="w-3.5 h-3.5 text-[#C0562F]" />
              <span>Indicative 12-Week Phased Milestones</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {blueprint.indicativePhases.map((ph, i) => (
                <div key={i} className="p-5 rounded-xl bg-white border border-[rgba(20,25,26,0.08)]">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-mono text-[#123A2E] font-bold">{ph.phase}</span>
                    <span className="text-[10px] text-[#8A8578] font-mono">{ph.duration}</span>
                  </div>
                  <div className="text-xs font-bold text-[#16191A] mb-1 font-serif">{ph.title}</div>
                  <p className="text-xs text-[#4C524E] leading-relaxed">{ph.activities}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Deliverables + Stakeholders + Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            
            <div className="p-5 rounded-xl bg-white border border-[rgba(20,25,26,0.08)] space-y-2">
              <div className="font-mono text-[10px] uppercase font-bold text-[#123A2E] flex items-center space-x-1.5">
                <FileText className="w-3.5 h-3.5" />
                <span>Expected Deliverables</span>
              </div>
              <ul className="space-y-1.5">
                {blueprint.expectedDeliverables.map((del, i) => (
                  <li key={i} className="text-xs text-[#3B4441] flex items-start space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#123A2E] shrink-0 mt-0.5" />
                    <span>{del}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-white border border-[rgba(20,25,26,0.08)] space-y-2">
              <div className="font-mono text-[10px] uppercase font-bold text-[#C0562F] flex items-center space-x-1.5">
                <Users className="w-3.5 h-3.5" />
                <span>Key Stakeholders Required</span>
              </div>
              <ul className="space-y-1.5">
                {blueprint.keyStakeholders.map((stk, i) => (
                  <li key={i} className="text-xs text-[#3B4441] flex items-start space-x-2">
                    <span className="text-[#C0562F] font-bold">•</span>
                    <span>{stk}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-[#123A2E]/5 border border-[#123A2E]/15 space-y-2">
              <div className="font-mono text-[10px] uppercase font-bold text-[#123A2E] flex items-center space-x-1.5">
                <Target className="w-3.5 h-3.5" />
                <span>Measured Impact Targets</span>
              </div>
              <ul className="space-y-1.5">
                {blueprint.successMetrics.map((met, i) => (
                  <li key={i} className="text-xs text-[#123A2E] font-medium flex items-start space-x-2">
                    <span className="text-[#C0562F] font-bold">↑</span>
                    <span>{met}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
