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
    <div className="bg-[#F4F1EA] py-16 sm:py-24 border-b border-[rgba(20,25,26,0.12)]" id="consulting-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="max-w-3xl">
          <div className="font-mono text-[11px] tracking-widest uppercase text-[#C0562F] mb-3">
            Pillar 01 · Strategic Advisory
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#16191A] font-normal leading-tight tracking-tight">
            Business Consulting & Strategy
          </h2>
          <p className="text-sm sm:text-base text-[#4C524E] mt-3 leading-relaxed">
            Helping organizations make better decisions, restructure for sustainable growth, and execute change with confidence — grounded in Life Sciences and cross-industry best practice.
          </p>
        </div>

        {/* 5 Core Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {consultingPillar.capabilities.map((cap, i) => (
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
                <span>Decision-Ready Advisory</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-[#123A2E]" />
              </div>
            </div>
          ))}

          {/* Expected Deliverables Box */}
          <div className="p-6 rounded-xl bg-[#123A2E] text-[#EDE7D9] flex flex-col justify-between shadow-md">
            <div>
              <div className="font-mono text-[10px] uppercase text-[#D98A5F] font-bold flex items-center space-x-1.5 mb-2">
                <FileText className="w-3.5 h-3.5 text-[#D98A5F]" />
                <span>Deliverables Clients Receive</span>
              </div>
              <h3 className="font-serif text-lg font-normal text-[#F4F1EA] mb-3">
                Actionable, Decision-Ready Artifacts
              </h3>
              <ul className="space-y-2">
                {consultingPillar.deliverables.map((del, i) => (
                  <li key={i} className="text-xs text-[rgba(237,231,217,0.85)] flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D98A5F] shrink-0 mt-0.5" />
                    <span>{del}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={onOpenIntake}
              className="mt-6 w-full py-2.5 rounded-lg bg-[#C0562F] hover:bg-[#D98A5F] text-white text-xs font-semibold flex items-center justify-center space-x-1.5 transition-colors"
            >
              <span>Initiate Consulting Scope</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Interactive AI-Readiness Diagnostic Maturity Matrix */}
        <div className="rounded-2xl bg-[#FBFAF6] border border-[rgba(20,25,26,0.14)] p-6 sm:p-8 shadow-sm space-y-6">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[rgba(20,25,26,0.08)] gap-2">
            <div>
              <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-[#123A2E]/10 text-[#123A2E] font-bold uppercase">
                Diagnostic Framework
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#16191A] mt-1">
                Interactive Organizational AI-Readiness Assessment
              </h3>
            </div>

            <span className="text-xs text-[#8A8578] font-mono">
              [Select dimensions to inspect assessment criteria & interventions]
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
                  className={`p-3 rounded-xl border text-left transition-all ${
                    isSelected 
                      ? 'bg-[#123A2E] border-[#123A2E] text-white shadow-sm' 
                      : 'bg-white border-[rgba(20,25,26,0.1)] text-[#4C524E] hover:border-[#123A2E]'
                  }`}
                >
                  <div className="text-xs font-semibold truncate">{dim.name}</div>
                  <div className={`text-[10px] font-mono mt-1 ${isSelected ? 'text-[#D98A5F]' : 'text-[#8A8578]'}`}>{dim.score}</div>
                </button>
              );
            })}
          </div>

          {/* Active Dimension Details */}
          {(() => {
            const cur = maturityDimensions[activeDimension];
            return (
              <div className="p-6 rounded-xl bg-white border border-[rgba(20,25,26,0.08)] space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-serif text-lg font-normal text-[#16191A]">{cur.name} Assessment</h4>
                  <span className="text-xs px-2.5 py-1 rounded bg-[#123A2E]/10 text-[#123A2E] font-mono font-bold">
                    Benchmark: {cur.score}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                  
                  <div className="p-4 rounded-xl bg-[#FBFAF6] border border-[rgba(20,25,26,0.08)]">
                    <div className="font-mono text-[10px] uppercase font-bold text-[#123A2E] mb-1">
                      01 · Diagnostic Inquiry
                    </div>
                    <p className="text-xs text-[#3B4441] leading-relaxed">
                      {cur.assessment}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#FBFAF6] border border-[#C0562F]/20">
                    <div className="font-mono text-[10px] uppercase font-bold text-[#C0562F] mb-1">
                      02 · Common Blindspot
                    </div>
                    <p className="text-xs text-[#3B4441] leading-relaxed">
                      {cur.blindspots}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#FBFAF6] border border-[#123A2E]/20">
                    <div className="font-mono text-[10px] uppercase font-bold text-[#123A2E] mb-1">
                      03 · MindCraft Intervention
                    </div>
                    <p className="text-xs text-[#3B4441] leading-relaxed">
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
