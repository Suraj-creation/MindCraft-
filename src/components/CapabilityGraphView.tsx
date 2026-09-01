import React, { useState } from 'react';
import { NavTab } from '../types';
import { 
  Network, 
  Dna, 
  Compass, 
  BarChart3, 
  GraduationCap, 
  Cpu, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2,
  Filter,
  Eye
} from 'lucide-react';

interface CapabilityGraphViewProps {
  setActiveTab: (tab: NavTab) => void;
  onOpenIntake: () => void;
}

interface CapabilityPath {
  id: string;
  industry: string;
  problem: string;
  pillar: string;
  methodology: string;
  aiSolution: string;
  outcome: string;
}

export const CapabilityGraphView: React.FC<CapabilityGraphViewProps> = ({
  setActiveTab,
  onOpenIntake
}) => {
  const [selectedPathId, setSelectedPathId] = useState<string>('path-1');
  const [industryFilter, setIndustryFilter] = useState<string>('All');

  const capabilityPaths: CapabilityPath[] = [
    {
      id: 'path-1',
      industry: 'Pharmaceuticals',
      problem: 'Fragmented Pan-African Regulatory Filing & Compliance',
      pillar: 'Market Research + AI Solutions',
      methodology: 'Multi-Agency Regulatory Gazette Ingestion + Fast-Track Mapping',
      aiSolution: 'Pan-African Regulatory Intelligence & Compliance Monitor',
      outcome: '50% Faster Dossier Filing & Zero Compliance Lags'
    },
    {
      id: 'path-2',
      industry: 'Pharmaceuticals',
      problem: 'High-Cost Adverse Event Triage & Regulatory Reporting',
      pillar: 'AI Enterprise Solutions',
      methodology: 'Biomedical Entity Extraction & MedDRA Causality Mapping',
      aiSolution: 'AI Pharmacovigilance & Adverse Event Triage Agent',
      outcome: '70% Intake Acceleration & 100% E2B(R3) Compliance'
    },
    {
      id: 'path-3',
      industry: 'Medical Devices',
      problem: 'Unverified Regional Distributor Networks & Quality Gaps',
      pillar: 'Business Consulting + Market Research',
      methodology: 'Distributor Audits + Health Economics & Hospital Procurement Panels',
      aiSolution: 'Predictive Distributor Scoring & Parts Portal',
      outcome: '62% Reduction in Hospital Device Downtime'
    },
    {
      id: 'path-4',
      industry: 'Hospitals & Healthcare Providers',
      problem: 'Severe Insurance Claim Rejections & Cash Flow Delays',
      pillar: 'Business Consulting + AI Solutions',
      methodology: 'Value-Stream Workflow Mapping + Billing SOP Redesign',
      aiSolution: 'AI Insurance Pre-Adjudication & Coding Validator',
      outcome: 'Claim Rejections Dropped from 22% to 3.8%'
    },
    {
      id: 'path-5',
      industry: 'Life Sciences Commercial',
      problem: 'Unstructured Field Detailing & Low Sales Rep AI Adoption',
      pillar: 'AI Training + AI Solutions',
      methodology: '10-Step Applied AI Curriculum + Champion Certification',
      aiSolution: 'Mobile Commercial Field-Force Intelligence Copilot',
      outcome: '4.2 Hours Saved/Rep/Week & 35% Conversion Lift'
    },
    {
      id: 'path-6',
      industry: 'Banking & Financial Services',
      problem: 'Loan Application Verification Bottlenecks & Fraud',
      pillar: 'Business Consulting + AI Solutions',
      methodology: 'Risk Governance Frameworks + Multi-Modal Document Parsing',
      aiSolution: 'Governed Document & Fraud Intelligence Engine',
      outcome: '75% Faster Loan Verification with Zero Privacy Leaks'
    },
    {
      id: 'path-7',
      industry: 'Agrochemicals',
      problem: 'Sub-Optimal Agro-Dealer Rural Penetration & Stockouts',
      pillar: 'Market Research + Business Consulting',
      methodology: 'Geospatial Agro-Ecological Mapping + Rural Dealer Audits',
      aiSolution: 'Agro-Dealer Inventory & Seasonal Demand Predictor',
      outcome: '28% Growth in Rural Smallholder Channel Share'
    }
  ];

  const filteredPaths = capabilityPaths.filter(p => 
    industryFilter === 'All' || p.industry === industryFilter
  );

  const activePath = capabilityPaths.find(p => p.id === selectedPathId) || capabilityPaths[0];

  return (
    <div className="py-20 bg-[#050505] border-b border-white/10" id="capability-graph-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#0a0a0a] border border-indigo-500/30 text-indigo-400 text-xs font-mono mb-3">
            <Network className="w-3.5 h-3.5 text-indigo-400" />
            <span className="uppercase tracking-widest text-[10px]">Interactive Network System</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-light text-white tracking-tight">
            Integrated <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-300">Capability Graph</span>
          </h2>
          <p className="text-white/60 text-sm sm:text-base mt-3 leading-relaxed">
            Explore how industry context, business dilemmas, consulting pillars, research methodologies, and enterprise AI solutions connect into unified, measurable outcomes.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-8 p-3.5 rounded-2xl bg-[#0a0a0a] border border-white/10">
          <div className="flex items-center space-x-2">
            <Filter className="w-4 h-4 text-indigo-400" />
            <span className="text-xs font-mono font-semibold text-white/70">Filter by Sector:</span>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {['All', 'Pharmaceuticals', 'Medical Devices', 'Hospitals & Healthcare Providers', 'Life Sciences Commercial', 'Banking & Financial Services', 'Agrochemicals'].map((ind) => (
              <button
                key={ind}
                onClick={() => setIndustryFilter(ind)}
                className={`px-3 py-1 rounded-xl text-xs font-mono transition-all ${
                  industryFilter === ind 
                    ? 'bg-indigo-950/60 border border-indigo-500/50 text-indigo-300 font-semibold shadow-[0_0_10px_rgba(99,102,241,0.25)]' 
                    : 'bg-[#050505] border border-white/10 text-white/50 hover:text-white hover:border-white/20'
                }`}
              >
                {ind}
              </button>
            ))}
          </div>
        </div>

        {/* Master Graph Node Explorer in Bento Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Left Column: Path Selector List */}
          <div className="space-y-2">
            <div className="text-[10px] font-mono uppercase font-bold text-white/40 mb-2">
              Select Transformation Pathway
            </div>

            {filteredPaths.map((path) => {
              const isSelected = selectedPathId === path.id;
              return (
                <button
                  key={path.id}
                  onClick={() => setSelectedPathId(path.id)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all relative ${
                    isSelected 
                      ? 'bg-[#0a0a0a] border-indigo-500/60 text-white shadow-[0_0_15px_rgba(99,102,241,0.25)]' 
                      : 'bg-[#0a0a0a] border-white/10 text-white/60 hover:border-white/20 hover:text-white'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#050505] text-indigo-300 font-bold border border-white/5">
                      {path.industry}
                    </span>
                    {isSelected && (
                      <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
                    )}
                  </div>
                  <h4 className="text-xs font-bold leading-snug line-clamp-2 mt-1 text-white">
                    {path.problem}
                  </h4>
                </button>
              );
            })}
          </div>

          {/* Right 2-Columns: Connected Pathway Flow Visualization */}
          <div className="lg:col-span-2 rounded-2xl bg-[#0a0a0a] border border-white/10 p-6 sm:p-8 shadow-2xl space-y-6">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-white/10 gap-2">
              <div>
                <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 font-bold">
                  ACTIVE PATHWAY TRACE
                </span>
                <h3 className="text-xl font-light text-white mt-1">
                  {activePath.industry} · <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-300">{activePath.problem}</span>
                </h3>
              </div>

              <button
                onClick={onOpenIntake}
                className="px-3.5 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-mono font-semibold shrink-0 transition-colors shadow-[0_0_10px_rgba(99,102,241,0.25)]"
              >
                Discuss This Pathway
              </button>
            </div>

            {/* 5-Step Connected Node Ribbon in Bento Cards */}
            <div className="space-y-3 relative">
              
              {/* Node 1: Industry & Challenge */}
              <div className="p-4 rounded-2xl bg-[#050505] border border-white/10 flex items-start space-x-3">
                <div className="w-7 h-7 rounded-xl bg-[#0a0a0a] border border-white/10 text-white/60 flex items-center justify-center font-mono text-xs font-bold shrink-0">
                  01
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase text-indigo-400 font-bold">Industry & Challenge Node</div>
                  <div className="text-xs font-bold text-white mt-0.5 font-mono">{activePath.industry}</div>
                  <p className="text-xs text-white/60 mt-1">{activePath.problem}</p>
                </div>
              </div>

              {/* Node 2: Service Pillar */}
              <div className="p-4 rounded-2xl bg-[#050505] border border-indigo-500/20 flex items-start space-x-3">
                <div className="w-7 h-7 rounded-xl bg-[#0a0a0a] border border-indigo-500/30 text-indigo-300 flex items-center justify-center font-mono text-xs font-bold shrink-0">
                  02
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase text-indigo-400 font-bold">Engaged Service Pillar</div>
                  <div className="text-xs font-bold text-white mt-0.5 font-mono">{activePath.pillar}</div>
                </div>
              </div>

              {/* Node 3: Methodology */}
              <div className="p-4 rounded-2xl bg-[#050505] border border-white/10 flex items-start space-x-3">
                <div className="w-7 h-7 rounded-xl bg-[#0a0a0a] border border-white/10 text-amber-400 flex items-center justify-center font-mono text-xs font-bold shrink-0">
                  03
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase text-amber-400 font-bold">Applied Methodology & Rigor</div>
                  <div className="text-xs text-white/70 mt-0.5 font-mono">{activePath.methodology}</div>
                </div>
              </div>

              {/* Node 4: AI Solution */}
              <div className="p-4 rounded-2xl bg-[#050505] border border-indigo-500/30 flex items-start space-x-3">
                <div className="w-7 h-7 rounded-xl bg-indigo-950/60 border border-indigo-500/50 text-indigo-300 flex items-center justify-center font-mono text-xs font-bold shrink-0">
                  04
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase text-indigo-400 font-bold">Deployed Enterprise AI System</div>
                  <div className="text-xs font-bold text-indigo-300 mt-0.5 font-mono">{activePath.aiSolution}</div>
                </div>
              </div>

              {/* Node 5: Measured Outcome */}
              <div className="p-4 rounded-2xl bg-[#050505] border border-emerald-500/40 flex items-start space-x-3">
                <div className="w-7 h-7 rounded-xl bg-emerald-950/60 border border-emerald-500/50 text-emerald-300 flex items-center justify-center font-mono text-xs font-bold shrink-0">
                  05
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase text-emerald-400 font-bold">Measured Business Impact</div>
                  <div className="text-xs font-bold text-white mt-0.5 font-mono">{activePath.outcome}</div>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
