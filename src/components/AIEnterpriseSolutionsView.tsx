import React, { useState } from 'react';
import { SERVICE_PILLARS, AI_SOLUTIONS_CATALOG } from '../data/mindcraftData';
import { AISolutionItem, NavTab } from '../types';
import { 
  Cpu, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Layers, 
  Database, 
  Workflow, 
  Users, 
  Lock, 
  FileText,
  Activity,
  Server
} from 'lucide-react';

interface AIEnterpriseSolutionsViewProps {
  onOpenIntake: () => void;
  setActiveTab: (tab: NavTab) => void;
}

export const AIEnterpriseSolutionsView: React.FC<AIEnterpriseSolutionsViewProps> = ({
  onOpenIntake,
  setActiveTab
}) => {
  const solutionsPillar = SERVICE_PILLARS.find(p => p.id === 'ai-solutions') || SERVICE_PILLARS[3];
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeSolutionId, setActiveSolutionId] = useState<string>(AI_SOLUTIONS_CATALOG[0].id);

  const categories = ['All', 'Life Sciences Core', 'Intelligence Platforms', 'Process Automation', 'Conversational & Engagement'];

  const filteredSolutions = AI_SOLUTIONS_CATALOG.filter(s => 
    selectedCategory === 'All' || s.category === selectedCategory
  );

  const activeSolution = AI_SOLUTIONS_CATALOG.find(s => s.id === activeSolutionId) || AI_SOLUTIONS_CATALOG[0];

  const lifecycleSteps = [
    'Problem Framing', 'Use Case Discovery', 'Data Readiness', 'Architecture Design', 
    'Secure Build', 'Enterprise Integration', 'Governed Deployment', 'Champion Training', 'ROI Measurement'
  ];

  return (
    <div className="bg-[#F4F1EA] py-16 sm:py-24 border-b border-[rgba(20,25,26,0.12)]" id="ai-solutions-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="max-w-3xl">
          <div className="font-mono text-[11px] tracking-widest uppercase text-[#C0562F] mb-3">
            Pillar 04 · Production Systems
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#16191A] font-normal leading-tight tracking-tight">
            AI Enterprise Solutions
          </h2>
          <p className="text-sm sm:text-base text-[#4C524E] mt-3 leading-relaxed">
            End-to-end design, build, and integration of AI-powered systems that operationalize insight into everyday business workflows — from market intelligence platforms to clinician- and customer-facing tools.
          </p>
        </div>

        {/* Enterprise AI Lifecycle Strip */}
        <div className="rounded-2xl bg-[#FBFAF6] border border-[rgba(20,25,26,0.12)] p-6 shadow-sm">
          <div className="text-xs font-mono uppercase text-[#C0562F] font-bold mb-4 text-center tracking-wider">
            The Enterprise AI Engineering Lifecycle: From Problem Framing to Governed Production
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-2">
            {lifecycleSteps.map((step, idx) => (
              <div key={idx} className="p-3 rounded-lg bg-white border border-[rgba(20,25,26,0.08)] text-center">
                <div className="text-[10px] font-mono font-bold text-[#123A2E]">0{idx + 1}</div>
                <div className="text-[11px] font-serif text-[#16191A] mt-0.5 leading-snug">{step}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ENTERPRISE AI ARCHITECTURE DIAGRAM */}
        <div className="rounded-2xl bg-[#FBFAF6] border border-[rgba(20,25,26,0.14)] p-6 sm:p-8 shadow-sm space-y-6">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[rgba(20,25,26,0.08)] gap-2">
            <div>
              <span className="font-mono text-[10px] uppercase px-2 py-0.5 rounded bg-[#123A2E]/10 text-[#123A2E] font-bold">
                Architecture Blueprint
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#16191A] mt-1">
                Layered Enterprise AI System Architecture
              </h3>
            </div>
            <span className="text-xs text-[#8A8578] font-mono">[Governed · Secure · Tenant-Isolated]</span>
          </div>

          {/* Layered Stack */}
          <div className="space-y-2.5">
            
            {/* Layer 1: Business Users */}
            <div className="p-4 rounded-xl bg-white border border-[rgba(20,25,26,0.08)] flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-lg bg-[#123A2E]/10 text-[#123A2E]"><Users className="w-4 h-4" /></div>
                <div>
                  <div className="text-xs font-bold text-[#16191A] font-serif">Tier 1: Business Users & Clinical Stakeholders</div>
                  <div className="text-[11px] text-[#4C524E]">Executives · Medical Science Liaisons · Regulatory Officers · Physicians · Hospital Administrators</div>
                </div>
              </div>
              <span className="text-[10px] font-mono text-[#8A8578]">Access Layer</span>
            </div>

            {/* Layer 2: Experience & Interaction */}
            <div className="p-4 rounded-xl bg-white border border-[rgba(20,25,26,0.08)] flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-lg bg-[#C0562F]/10 text-[#C0562F]"><Sparkles className="w-4 h-4" /></div>
                <div>
                  <div className="text-xs font-bold text-[#C0562F] font-serif">Tier 2: AI Experience & Interface Layer</div>
                  <div className="text-[11px] text-[#4C524E]">Mobile Pre-Call Copilots · Regulatory Diff Portals · Executive Dashboards · Advisory Portals</div>
                </div>
              </div>
              <span className="text-[10px] font-mono text-[#C0562F]">UI / API</span>
            </div>

            {/* Layer 3: Agents & Intelligence */}
            <div className="p-4 rounded-xl bg-white border border-[rgba(20,25,26,0.08)] flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-lg bg-[#123A2E]/10 text-[#123A2E]"><Workflow className="w-4 h-4" /></div>
                <div>
                  <div className="text-xs font-bold text-[#123A2E] font-serif">Tier 3: Autonomous Agents & Orchestration Layer</div>
                  <div className="text-[11px] text-[#4C524E]">Adverse Event Screener · Pan-African Gazette Scraper · Tender Scoring Agent · KOL Resolution</div>
                </div>
              </div>
              <span className="text-[10px] font-mono text-[#123A2E]">Agentic Core</span>
            </div>

            {/* Layer 4: Models & Analytics */}
            <div className="p-4 rounded-xl bg-white border border-[rgba(20,25,26,0.08)] flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-lg bg-[#123A2E]/10 text-[#123A2E]"><Cpu className="w-4 h-4" /></div>
                <div>
                  <div className="text-xs font-bold text-[#16191A] font-serif">Tier 4: Fine-Tuned Models & Foundation LLM Layer</div>
                  <div className="text-[11px] text-[#4C524E]">Medical BioBERT · Claude / Gemini Enterprise Gateway · Custom Graph Neural Networks</div>
                </div>
              </div>
              <span className="text-[10px] font-mono text-[#8A8578]">Model Gateway</span>
            </div>

            {/* Layer 5: Data & Knowledge */}
            <div className="p-4 rounded-xl bg-white border border-[rgba(20,25,26,0.08)] flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-lg bg-[#123A2E]/10 text-[#123A2E]"><Database className="w-4 h-4" /></div>
                <div>
                  <div className="text-xs font-bold text-[#16191A] font-serif">Tier 5: Data, Vector Embeddings & Knowledge Vaults</div>
                  <div className="text-[11px] text-[#4C524E]">RAG Vector Stores · Cleaned Epidemiological Data · Regulatory Guidelines · Drug Registries</div>
                </div>
              </div>
              <span className="text-[10px] font-mono text-[#8A8578]">Data Layer</span>
            </div>

            {/* Layer 6: Enterprise Systems */}
            <div className="p-4 rounded-xl bg-white border border-[rgba(20,25,26,0.08)] flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-lg bg-[#123A2E]/10 text-[#123A2E]"><Server className="w-4 h-4" /></div>
                <div>
                  <div className="text-xs font-bold text-[#16191A] font-serif">Tier 6: Existing Enterprise Systems & Records</div>
                  <div className="text-[11px] text-[#4C524E]">CRM (Veeva, Salesforce) · ERP (SAP, Oracle) · EHR (Hospital Systems) · Document Repositories</div>
                </div>
              </div>
              <span className="text-[10px] font-mono text-[#8A8578]">System of Record</span>
            </div>

            {/* Spanning Governance Layer */}
            <div className="p-4 rounded-xl bg-[#123A2E] text-[#EDE7D9] flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-md">
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-lg bg-white/10 text-[#D98A5F] shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold font-serif text-[#F4F1EA]">SPANNING GOVERNANCE & RESPONSIBLE AI LAYER</div>
                  <div className="text-[11px] text-[rgba(237,231,217,0.8)]">
                    Data Privacy Protection · Zero Public Model Training · Cryptographic Audit Trails · Human-in-the-Loop Sign-off
                  </div>
                </div>
              </div>
              <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-white/10 text-[#D98A5F] font-bold shrink-0">
                100% AUDITABLE
              </span>
            </div>

          </div>

        </div>

        {/* AI SOLUTIONS CATALOG */}
        <div className="space-y-6">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#16191A]">
                Enterprise AI Solution Catalog
              </h3>
              <p className="text-xs sm:text-sm text-[#4C524E] mt-0.5 font-serif italic">
                Purpose-engineered solution architectures for Life Sciences and enterprise transformation.
              </p>
            </div>

            {/* Category Filter Chips */}
            <div className="flex flex-wrap gap-1.5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                    selectedCategory === cat 
                      ? 'bg-[#123A2E] text-white font-semibold shadow-sm' 
                      : 'bg-white border border-[rgba(20,25,26,0.1)] text-[#4C524E] hover:border-[#123A2E]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Solution Selector Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredSolutions.map((sol) => {
              const isSelected = activeSolutionId === sol.id;
              return (
                <button
                  key={sol.id}
                  onClick={() => setActiveSolutionId(sol.id)}
                  id={`solution-card-${sol.id}`}
                  className={`p-6 rounded-xl border text-left transition-all relative flex flex-col justify-between ${
                    isSelected 
                      ? 'bg-white border-[#123A2E] ring-2 ring-[#123A2E]/20 shadow-sm text-[#16191A]' 
                      : 'bg-[#FBFAF6] border-[rgba(20,25,26,0.12)] text-[#4C524E] hover:border-[#123A2E]'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-[#F4F1EA] text-[#4C524E] border border-[rgba(20,25,26,0.08)]">
                        {sol.category}
                      </span>
                      <span className="text-[9px] px-1.5 py-0.5 rounded bg-[#123A2E]/10 text-[#123A2E] font-mono font-bold">
                        {sol.status}
                      </span>
                    </div>
                    <h4 className="text-base font-serif font-normal text-[#16191A] leading-snug">{sol.title}</h4>
                    <p className="text-xs text-[#4C524E] mt-2 line-clamp-2 leading-relaxed">
                      {sol.description}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-[rgba(20,25,26,0.08)] flex items-center justify-between text-[11px] text-[#123A2E] font-medium">
                    <span>Inspect Full Architecture</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Solution Detailed Architecture Card */}
          <div className="rounded-2xl bg-[#FBFAF6] border border-[rgba(20,25,26,0.14)] p-6 sm:p-8 shadow-sm space-y-6">
            
            <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-6 border-b border-[rgba(20,25,26,0.08)] gap-4">
              <div>
                <div className="flex items-center space-x-2">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#123A2E]/10 text-[#123A2E] font-bold uppercase">
                    {activeSolution.category}
                  </span>
                  <span className="text-xs text-[#8A8578] font-mono">
                    Status: {activeSolution.status}
                  </span>
                </div>
                <h4 className="font-serif text-2xl sm:text-3xl font-normal text-[#16191A] mt-1">
                  {activeSolution.title}
                </h4>
                <p className="text-xs sm:text-sm text-[#4C524E] mt-1">
                  {activeSolution.description}
                </p>
              </div>

              <button
                onClick={onOpenIntake}
                className="px-5 py-2.5 rounded-lg bg-[#123A2E] hover:bg-[#C0562F] text-white text-xs font-semibold shrink-0 transition-colors flex items-center space-x-1.5"
              >
                <span>Deploy Solution Architecture</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* 6-Point Technical & Operational Architecture Breakdown */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              
              <div className="p-5 rounded-xl bg-white border border-[rgba(20,25,26,0.08)]">
                <div className="font-mono text-[10px] uppercase font-bold text-[#C0562F] mb-1">
                  01 · Business Problem
                </div>
                <p className="text-xs text-[#3B4441] leading-relaxed">
                  {activeSolution.businessProblem}
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white border border-[rgba(20,25,26,0.08)]">
                <div className="font-mono text-[10px] uppercase font-bold text-[#123A2E] mb-1">
                  02 · Data Ingestion Feeds
                </div>
                <ul className="space-y-1">
                  {activeSolution.dataInputs.map((inp, i) => (
                    <li key={i} className="text-xs text-[#3B4441] flex items-start space-x-1.5">
                      <span className="text-[#123A2E] font-bold">•</span>
                      <span>{inp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-5 rounded-xl bg-white border border-[rgba(20,25,26,0.08)]">
                <div className="font-mono text-[10px] uppercase font-bold text-[#123A2E] mb-1">
                  03 · AI Analytics / Model Layer
                </div>
                <p className="text-xs text-[#3B4441] leading-relaxed">
                  {activeSolution.aiAnalyticsLayer}
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white border border-[rgba(20,25,26,0.08)]">
                <div className="font-mono text-[10px] uppercase font-bold text-[#123A2E] mb-1">
                  04 · Enterprise Integration
                </div>
                <p className="text-xs text-[#3B4441] leading-relaxed">
                  {activeSolution.workflowIntegration}
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white border border-[rgba(20,25,26,0.08)]">
                <div className="font-mono text-[10px] uppercase font-bold text-[#C0562F] mb-1">
                  05 · Human Interaction & Review
                </div>
                <p className="text-xs text-[#3B4441] leading-relaxed">
                  {activeSolution.humanInteraction}
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#123A2E]/5 border border-[#123A2E]/15">
                <div className="font-mono text-[10px] uppercase font-bold text-[#123A2E] mb-1 flex items-center space-x-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#123A2E]" />
                  <span>06 · Governance Safeguards</span>
                </div>
                <p className="text-xs text-[#3B4441] leading-relaxed">
                  {activeSolution.governanceSafeguards}
                </p>
              </div>

            </div>

            {/* Projected Outcome Banner */}
            <div className="p-5 rounded-xl bg-white border border-[rgba(20,25,26,0.1)] flex items-center justify-between shadow-sm">
              <div>
                <span className="font-mono text-[10px] uppercase text-[#123A2E] font-bold">
                  Projected Operational & Commercial Outcome
                </span>
                <p className="text-xs sm:text-sm text-[#16191A] font-medium mt-0.5 font-serif">
                  {activeSolution.projectedOutcome}
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
