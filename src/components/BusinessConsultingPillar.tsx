import React, { useState } from 'react';
import { SERVICE_PILLARS } from '../data/mindcraftData';
import { NavTab } from '../types';
import { 
  Compass, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Sliders, 
  BarChart2, 
  FileText, 
  ShieldCheck, 
  HelpCircle,
  Cpu,
  Layers,
  Workflow
} from 'lucide-react';

interface BusinessConsultingPillarProps {
  onOpenIntake: () => void;
  setActiveTab: (tab: NavTab) => void;
}

export const BusinessConsultingPillar: React.FC<BusinessConsultingPillarProps> = ({
  onOpenIntake,
  setActiveTab
}) => {
  const consultingPillar = SERVICE_PILLARS.find(p => p.id === 'consulting') || SERVICE_PILLARS[0];
  const [activeDimension, setActiveDimension] = useState<number>(0);

  const maturityDimensions = [
    {
      name: '01. Strategy & Vision',
      score: 'Level 2 / 5',
      assessment: 'Is AI adoption anchored directly to measurable business growth, margin retention, or market expansion goals?',
      blindspots: 'Executing isolated proof-of-concept experiments without executive sponsorship or clear ROI hurdles.',
      intervention: 'Formulate an Enterprise AI & Growth Strategy with executive steering committee governance and 24-month roadmap.'
    },
    {
      name: '02. Leadership & Culture',
      score: 'Level 1 / 5',
      assessment: 'Do executive leaders and middle managers understand practical AI mechanics and lead change proactively?',
      blindspots: 'Fear of workforce replacement, unmanaged hype expectations, or resistance from senior clinical/technical staff.',
      intervention: 'Deliver structured C-suite AI briefings and middle management change enablement workshops.'
    },
    {
      name: '03. Data Readiness & Assets',
      score: 'Level 2 / 5',
      assessment: 'Is enterprise data accessible, clean, categorized, and protected by role-based access control?',
      blindspots: 'Data fragmented across unlinked spreadsheets, siloed CRM/ERP instances, or unindexed historical documents.',
      intervention: 'Establish a central governed data catalog and build pre-processing ingestion pipelines.'
    },
    {
      name: '04. Technology & Infrastructure',
      score: 'Level 3 / 5',
      assessment: 'Does the enterprise possess secure cloud/hybrid infrastructure capable of hosting private LLM gateways and API pipelines?',
      blindspots: 'Employees utilizing unsecured public consumer AI accounts with sensitive corporate data.',
      intervention: 'Deploy a private enterprise AI gateway with tenant isolation and cryptographic audit trails.'
    },
    {
      name: '05. Workforce Capability',
      score: 'Level 2 / 5',
      assessment: 'Have frontline teams been trained on function-specific prompt engineering and validation protocols?',
      blindspots: 'Generic prompting resulting in inconsistent outputs and low daily workflow stickiness.',
      intervention: 'Execute a 6-week applied AI accelerator with verified prompt libraries and internal champion certification.'
    },
    {
      name: '06. Process & SOP Integration',
      score: 'Level 1 / 5',
      assessment: 'Are AI outputs formally integrated into daily standard operating procedures with human verification gates?',
      blindspots: 'AI outputs treated as discretionary informal notes rather than auditable business artifacts.',
      intervention: 'Redesign core business SOPs to embed AI drafting with mandatory human-in-the-loop sign-off.'
    },
    {
      name: '07. Governance & Ethics',
      score: 'Level 2 / 5',
      assessment: 'Are data privacy policies, local Data Protection Act compliance, and copyright safeguards enforced?',
      blindspots: 'Zero formal enterprise AI policy, risking severe regulatory non-compliance penalties.',
      intervention: 'Institute a formal Enterprise Responsible AI Policy and ethical review board.'
    },
    {
      name: '08. Use Case Prioritization',
      score: 'Level 3 / 5',
      assessment: 'Are AI use cases ranked by business value vs technical feasibility with clear success metrics?',
      blindspots: 'Attempting overly complex, unfeasible AI projects before securing quick-win operational momentum.',
      intervention: 'Prioritize top 3 high-impact, low-complexity use cases for rapid 90-day deployment.'
    }
  ];

  return (
    <div className="py-20 bg-[#050505] border-b border-white/10" id="consulting-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#0a0a0a] border border-indigo-500/30 text-indigo-400 text-xs font-mono mb-3">
            <Compass className="w-3.5 h-3.5 text-indigo-400" />
            <span className="uppercase tracking-widest text-[10px]">Pillar 01 · Strategic Advisory</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-light text-white tracking-tight">
            Business <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-300">Consulting</span>
          </h2>
          <p className="text-white/60 text-sm sm:text-base mt-3 leading-relaxed">
            Helping organizations make better decisions, restructure for sustainable growth, and execute change with confidence — grounded in Life Sciences and cross-industry best practice.
          </p>
        </div>

        {/* 5 Core Capabilities Grid in Bento Format */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {consultingPillar.capabilities.map((cap, i) => (
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
                <span>Life Sciences Aligned</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" />
              </div>
            </div>
          ))}

          {/* Expected Deliverables Box in Bento Highlight */}
          <div className="p-6 rounded-2xl bg-[#0a0a0a] border border-indigo-500/40 flex flex-col justify-between shadow-[0_0_20px_rgba(99,102,241,0.15)]">
            <div>
              <div className="text-[10px] font-mono uppercase text-indigo-300 font-bold flex items-center space-x-1.5 mb-2">
                <FileText className="w-3.5 h-3.5 text-indigo-400" />
                <span>Deliverables Clients Receive</span>
              </div>
              <h3 className="text-base font-bold text-white mb-3 font-mono">
                Actionable, Decision-Ready Artifacts
              </h3>
              <ul className="space-y-2">
                {consultingPillar.deliverables.map((del, i) => (
                  <li key={i} className="text-xs text-white/80 flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{del}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={onOpenIntake}
              className="mt-6 w-full py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-mono font-semibold flex items-center justify-center space-x-1.5 transition-colors shadow-[0_0_12px_rgba(99,102,241,0.3)]"
            >
              <span>Initiate Consulting Scope</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Interactive AI-Readiness Diagnostic Maturity Matrix in Bento */}
        <div className="rounded-2xl bg-[#0a0a0a] border border-white/10 p-6 sm:p-8 shadow-2xl space-y-6">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-white/10 gap-2">
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 font-bold uppercase">
                  Diagnostic Framework
                </span>
                <span className="text-xs text-white/40 font-mono">8-Dimension Diagnostic Model</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-light text-white mt-1">
                Interactive Organizational <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-300">AI-Readiness Assessment</span>
              </h3>
            </div>

            <span className="text-xs text-white/40 font-mono">
              [Click dimensions to inspect assessment criteria & interventions]
            </span>
          </div>

          {/* 8 Dimension Pills */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {maturityDimensions.map((dim, idx) => {
              const isSelected = activeDimension === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveDimension(idx)}
                  className={`p-3 rounded-2xl border text-left transition-all ${
                    isSelected 
                      ? 'bg-[#050505] border-indigo-500/60 text-white shadow-[0_0_12px_rgba(99,102,241,0.25)]' 
                      : 'bg-[#050505] border-white/10 text-white/50 hover:text-white hover:border-white/20'
                  }`}
                >
                  <div className="text-xs font-bold truncate font-mono">{dim.name}</div>
                  <div className="text-[10px] text-indigo-400 font-mono mt-1">{dim.score}</div>
                </button>
              );
            })}
          </div>

          {/* Active Dimension Details */}
          {(() => {
            const cur = maturityDimensions[activeDimension];
            return (
              <div className="p-6 rounded-2xl bg-[#050505] border border-white/10 space-y-4 animate-in fade-in-50 duration-150">
                <div className="flex items-center justify-between">
                  <h4 className="text-base font-bold text-white font-mono">{cur.name} Assessment</h4>
                  <span className="text-xs px-2.5 py-1 rounded bg-indigo-950/80 border border-indigo-500/40 text-indigo-300 font-mono">
                    Benchmark: {cur.score}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                  
                  <div className="p-4 rounded-xl bg-[#0a0a0a] border border-white/10">
                    <div className="text-[10px] font-mono uppercase font-bold text-indigo-400 mb-1">
                      01. Diagnostic Inquiry
                    </div>
                    <p className="text-xs text-white/70 leading-relaxed">
                      {cur.assessment}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#0a0a0a] border border-rose-500/30">
                    <div className="text-[10px] font-mono uppercase font-bold text-rose-400 mb-1">
                      02. Common Blindspot
                    </div>
                    <p className="text-xs text-white/70 leading-relaxed">
                      {cur.blindspots}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#0a0a0a] border border-emerald-500/30">
                    <div className="text-[10px] font-mono uppercase font-bold text-emerald-400 mb-1">
                      03. MindCraft Intervention
                    </div>
                    <p className="text-xs text-white/70 leading-relaxed">
                      {cur.intervention}
                    </p>
                  </div>

                </div>
              </div>
            );
          })()}

        </div>

      </div>
    </div>
  );
};
