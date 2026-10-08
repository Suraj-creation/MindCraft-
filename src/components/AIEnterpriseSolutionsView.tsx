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
    <div className="py-20 bg-[#050505] border-b border-white/10" id="ai-solutions-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#0a0a0a] border border-indigo-500/30 text-indigo-400 text-xs font-mono mb-3">
            <Cpu className="w-3.5 h-3.5 text-indigo-400" />
            <span className="uppercase tracking-widest text-[10px]">Pillar 04 · Production Systems</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-light text-white tracking-tight">
            AI Enterprise <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-300">Solutions</span>
          </h2>
          <p className="text-white/60 text-sm sm:text-base mt-3 leading-relaxed">
            End-to-end design, build, and integration of AI-powered systems that operationalize insight into everyday business workflows — from market intelligence platforms to patient- and customer-facing AI tools.
          </p>
        </div>

        {/* Enterprise AI Lifecycle Strip in Bento Cells */}
        <div className="rounded-2xl bg-[#0a0a0a] border border-white/10 p-6 mb-16 shadow-xl">
          <div className="text-xs font-mono uppercase text-indigo-400 font-bold mb-4 text-center tracking-wider">
            The Enterprise AI Engineering Lifecycle: From Proof of Concept to Governed Production
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-2">
            {lifecycleSteps.map((step, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-[#050505] border border-white/10 text-center">
                <div className="text-[10px] font-mono font-bold text-indigo-400">0{idx + 1}</div>
                <div className="text-[11px] font-mono text-white/80 mt-0.5 leading-snug">{step}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ENTERPRISE AI ARCHITECTURE DIAGRAM IN BENTO */}
        <div className="rounded-2xl bg-[#0a0a0a] border border-white/10 p-6 sm:p-8 shadow-2xl space-y-6 mb-16">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-white/10 gap-2">
            <div>
              <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 font-bold">
                Architecture Blueprint
              </span>
              <h3 className="text-xl sm:text-2xl font-light text-white mt-1">
                Layered Enterprise <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-300">AI System Architecture</span>
              </h3>
            </div>
            <span className="text-xs text-white/40 font-mono">[Governed · Secure · Tenant-Isolated]</span>
          </div>

          {/* Layered Visual Stack */}
          <div className="space-y-2.5 relative">
            
            {/* Layer 1: Business Users */}
            <div className="p-4 rounded-2xl bg-[#050505] border border-white/10 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-xl bg-white/5 text-indigo-400 border border-white/10"><Users className="w-4 h-4" /></div>
                <div>
                  <div className="text-xs font-bold text-white font-mono">Tier 1: Business Users & Clinical Stakeholders</div>
                  <div className="text-[11px] text-white/50">Executives · Medical Science Liaisons · Regulatory Officers · Physicians · Hospital Administrators</div>
                </div>
              </div>
              <span className="text-[10px] font-mono text-white/40">Access Layer</span>
            </div>

            {/* Layer 2: Experience & Interaction */}
            <div className="p-4 rounded-2xl bg-[#050505] border border-indigo-500/30 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-xl bg-indigo-950/60 text-indigo-300 border border-indigo-500/30"><Sparkles className="w-4 h-4" /></div>
                <div>
                  <div className="text-xs font-bold text-indigo-300 font-mono">Tier 2: AI Experience & Interface Layer</div>
                  <div className="text-[11px] text-white/50">Mobile Pre-Call Copilots · Regulatory Diff Portals · Executive Dashboards · Chatbot Hubs</div>
                </div>
              </div>
              <span className="text-[10px] font-mono text-indigo-400">UI / API</span>
            </div>

            {/* Layer 3: Agents & Intelligence */}
            <div className="p-4 rounded-2xl bg-[#050505] border border-emerald-500/30 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-xl bg-emerald-950/60 text-emerald-300 border border-emerald-500/30"><Workflow className="w-4 h-4" /></div>
                <div>
                  <div className="text-xs font-bold text-emerald-300 font-mono">Tier 3: Autonomous Agents & Orchestration Layer</div>
                  <div className="text-[11px] text-white/50">Adverse Event Screener · Pan-African Gazette Scraper · Tender Scoring Agent · KOL Resolution</div>
                </div>
              </div>
              <span className="text-[10px] font-mono text-emerald-400">Agentic Core</span>
            </div>

            {/* Layer 4: Models & Analytics */}
            <div className="p-4 rounded-2xl bg-[#050505] border border-indigo-500/30 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-xl bg-indigo-950/60 text-indigo-300 border border-indigo-500/30"><Cpu className="w-4 h-4" /></div>
                <div>
                  <div className="text-xs font-bold text-indigo-300 font-mono">Tier 4: Fine-Tuned Models & Foundation LLM Layer</div>
                  <div className="text-[11px] text-white/50">Medical BioBERT · Claude / Gemini / GPT Enterprise · Custom Graph Neural Networks</div>
                </div>
              </div>
              <span className="text-[10px] font-mono text-indigo-400">Model Gateway</span>
            </div>

            {/* Layer 5: Data & Knowledge */}
            <div className="p-4 rounded-2xl bg-[#050505] border border-indigo-500/30 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-xl bg-indigo-950/60 text-indigo-300 border border-indigo-500/30"><Database className="w-4 h-4" /></div>
                <div>
                  <div className="text-xs font-bold text-indigo-300 font-mono">Tier 5: Data, Vector Embeddings & Knowledge Vaults</div>
                  <div className="text-[11px] text-white/50">RAG Vector Stores · Cleaned Epidemiological Data · Regulatory Guidelines · Drug Registries</div>
                </div>
              </div>
              <span className="text-[10px] font-mono text-indigo-400">Data Layer</span>
            </div>

            {/* Layer 6: Enterprise Systems */}
            <div className="p-4 rounded-2xl bg-[#050505] border border-white/10 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-xl bg-white/5 text-white/40 border border-white/10"><Server className="w-4 h-4" /></div>
                <div>
                  <div className="text-xs font-bold text-white/80 font-mono">Tier 6: Existing Enterprise Systems & Records</div>
                  <div className="text-[11px] text-white/50">CRM (Veeva, Salesforce) · ERP (SAP, Oracle) · EHR (Hospital Systems) · Document Repositories</div>
                </div>
              </div>
              <span className="text-[10px] font-mono text-white/40">System of Record</span>
            </div>

            {/* Spanning Governance Layer */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-indigo-950/40 via-[#0a0a0a] to-emerald-950/40 border border-indigo-500/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-xl bg-indigo-950 border border-indigo-500/50 text-indigo-300 shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white font-mono">SPANNING GOVERNANCE & RESPONSIBLE AI LAYER</div>
                  <div className="text-[11px] text-white/60">
                    Data Privacy Protection · Zero Consumer Model Training · Cryptographic Audit Trails · Human-in-the-Loop Sign-off
                  </div>
                </div>
              </div>
              <span className="text-[10px] font-mono px-2 py-1 rounded-lg bg-[#050505] text-indigo-300 border border-indigo-500/40 font-bold shrink-0">
                100% AUDITABLE
              </span>
            </div>

          </div>

        </div>

        {/* AI SOLUTIONS CATALOG */}
        <div className="space-y-6">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-2xl font-light text-white">
                Enterprise AI <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-300">Solution Catalog</span>
              </h3>
              <p className="text-xs sm:text-sm text-white/50 mt-0.5 font-mono">
                Purpose-engineered solution architectures for Life Sciences and enterprise transformation.
              </p>
            </div>

            {/* Category Filter Chips */}
            <div className="flex flex-wrap gap-1.5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all ${
                    selectedCategory === cat 
                      ? 'bg-indigo-950/80 border border-indigo-500/60 text-indigo-300 font-semibold shadow-[0_0_10px_rgba(99,102,241,0.2)]' 
                      : 'bg-[#0a0a0a] border border-white/10 text-white/40 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Solution Selector Cards Grid in Bento Format */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredSolutions.map((sol) => {
              const isSelected = activeSolutionId === sol.id;
              return (
                <button
                  key={sol.id}
                  onClick={() => setActiveSolutionId(sol.id)}
                  id={`solution-card-${sol.id}`}
                  className={`p-6 rounded-2xl border text-left transition-all relative flex flex-col justify-between ${
                    isSelected 
                      ? 'bg-[#0a0a0a] border-indigo-500/60 shadow-[0_0_15px_rgba(99,102,241,0.25)] text-white' 
                      : 'bg-[#0a0a0a] border-white/10 text-white/70 hover:border-white/20 hover:text-white'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-[#050505] text-white/40 border border-white/10">
                        {sol.category}
                      </span>
                      <span className="text-[9px] px-1.5 py-0.5 rounded bg-emerald-950/60 text-emerald-300 border border-emerald-500/30 font-mono">
                        {sol.status}
                      </span>
                    </div>
                    <h4 className="text-sm font-bold leading-snug font-mono text-white">{sol.title}</h4>
                    <p className="text-xs text-white/50 mt-2 line-clamp-2 leading-relaxed">
                      {sol.description}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-indigo-400 font-mono font-medium">
                    <span>Inspect Full Architecture</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Solution Detailed Architecture Card in Bento Container */}
          <div className="rounded-2xl bg-[#0a0a0a] border border-white/10 p-6 sm:p-8 shadow-2xl space-y-6">
            
            <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-6 border-b border-white/10 gap-4">
              <div>
                <div className="flex items-center space-x-2">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 font-bold uppercase">
                    {activeSolution.category}
                  </span>
                  <span className="text-xs text-white/40 font-mono">
                    Status: {activeSolution.status}
                  </span>
                </div>
                <h4 className="text-2xl font-light text-white mt-1">
                  {activeSolution.title}
                </h4>
                <p className="text-xs sm:text-sm text-white/60 mt-1">
                  {activeSolution.description}
                </p>
              </div>

              <button
                onClick={onOpenIntake}
                className="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-mono font-semibold shrink-0 transition-colors flex items-center space-x-1.5 shadow-[0_0_12px_rgba(99,102,241,0.3)]"
              >
                <span>Deploy Solution Architecture</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* 6-Point Technical & Operational Architecture Breakdown */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              
              <div className="p-5 rounded-2xl bg-[#050505] border border-white/10">
                <div className="text-[10px] font-mono uppercase font-bold text-rose-400 mb-1">
                  01. Business Problem
                </div>
                <p className="text-xs text-white/70 leading-relaxed">
                  {activeSolution.businessProblem}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#050505] border border-white/10">
                <div className="text-[10px] font-mono uppercase font-bold text-indigo-400 mb-1">
                  02. Data Ingestion Feeds
                </div>
                <ul className="space-y-1">
                  {activeSolution.dataInputs.map((inp, i) => (
                    <li key={i} className="text-xs text-white/70 flex items-start space-x-1.5">
                      <span className="text-indigo-400">•</span>
                      <span>{inp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-5 rounded-2xl bg-[#050505] border border-white/10">
                <div className="text-[10px] font-mono uppercase font-bold text-emerald-400 mb-1">
                  03. AI Analytics / Model Layer
                </div>
                <p className="text-xs text-white/70 leading-relaxed">
                  {activeSolution.aiAnalyticsLayer}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#050505] border border-white/10">
                <div className="text-[10px] font-mono uppercase font-bold text-indigo-300 mb-1">
                  04. Enterprise Integration
                </div>
                <p className="text-xs text-white/70 leading-relaxed">
                  {activeSolution.workflowIntegration}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#050505] border border-white/10">
                <div className="text-[10px] font-mono uppercase font-bold text-amber-400 mb-1">
                  05. Human Interaction & Review
                </div>
                <p className="text-xs text-white/70 leading-relaxed">
                  {activeSolution.humanInteraction}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#050505] border border-emerald-500/30">
                <div className="text-[10px] font-mono uppercase font-bold text-emerald-300 mb-1 flex items-center space-x-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>06. Governance Safeguards</span>
                </div>
                <p className="text-xs text-white/70 leading-relaxed">
                  {activeSolution.governanceSafeguards}
                </p>
              </div>

            </div>

            {/* Projected Outcome Banner */}
            <div className="p-5 rounded-2xl bg-[#050505] border border-indigo-500/40 flex items-center justify-between shadow-[0_0_15px_rgba(99,102,241,0.15)]">
              <div>
                <span className="text-[10px] font-mono uppercase text-indigo-400 font-bold">
                  Projected Operational & Commercial Outcome
                </span>
                <p className="text-xs sm:text-sm text-white font-mono mt-0.5">
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
