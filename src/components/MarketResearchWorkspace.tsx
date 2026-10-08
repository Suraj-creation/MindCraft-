import React, { useState } from 'react';
import { SERVICE_PILLARS, RESEARCH_WORKSPACE_SAMPLE } from '../data/mindcraftData';
import { NavTab } from '../types';
import { 
  BarChart3, 
  Search, 
  Database, 
  Users, 
  ShieldCheck, 
  FileText, 
  CheckCircle2, 
  ArrowRight, 
  Activity, 
  TrendingUp, 
  Sparkles,
  Layers,
  Filter,
  RefreshCw
} from 'lucide-react';

interface MarketResearchWorkspaceProps {
  onOpenIntake: () => void;
  setActiveTab: (tab: NavTab) => void;
}

export const MarketResearchWorkspace: React.FC<MarketResearchWorkspaceProps> = ({
  onOpenIntake,
  setActiveTab
}) => {
  const researchPillar = SERVICE_PILLARS.find(p => p.id === 'market-research') || SERVICE_PILLARS[1];
  const [workspaceTab, setWorkspaceTab] = useState<'brief' | 'primary' | 'secondary' | 'findings' | 'decision'>('brief');

  const researchPipelineStages = [
    { num: '01', title: 'Question', desc: 'Problem framing & hypothesis definition' },
    { num: '02', title: 'Research Design', desc: 'Sampling frames & instrument design' },
    { num: '03', title: 'Data Collection', desc: 'Field surveys & secondary scraping' },
    { num: '04', title: 'Data Quality', desc: 'Cleaning, audit & verification checks' },
    { num: '05', title: 'Analysis', desc: 'Statistical modeling & regression' },
    { num: '06', title: 'Synthesis', desc: 'AI-assisted thematic extraction' },
    { num: '07', title: 'Intelligence', desc: 'Decision-ready strategic insight' },
    { num: '08', title: 'Decision', desc: 'Executive intervention roadmap' }
  ];

  return (
    <div className="py-20 bg-[#050505] border-b border-white/10" id="market-research-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#0a0a0a] border border-indigo-500/30 text-indigo-400 text-xs font-mono mb-3">
            <BarChart3 className="w-3.5 h-3.5 text-indigo-400" />
            <span className="uppercase tracking-widest text-[10px]">Pillar 02 · Evidence & Intelligence</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-light text-white tracking-tight">
            Market <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-300">Research</span>
          </h2>
          <p className="text-white/60 text-sm sm:text-base mt-3 leading-relaxed">
            Rigorous primary and secondary research that turns market complexity into decision-ready intelligence — purpose-built for Life Sciences and diversified industries across African and international markets.
          </p>
        </div>

        {/* 4 Core Capabilities Grid in Bento Format */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {researchPillar.capabilities.map((cap, i) => (
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
                <span>Decision-Ready</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" />
              </div>
            </div>
          ))}
        </div>

        {/* Research Rigor Pipeline Transformation Diagram in Bento */}
        <div className="rounded-2xl bg-[#0a0a0a] border border-white/10 p-6 sm:p-8 mb-16 shadow-xl">
          <div className="text-xs font-mono uppercase text-indigo-400 font-bold mb-4 text-center tracking-wider">
            The Research Rigor Pipeline: From Ambiguous Signal to Executive Decision
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
            {researchPipelineStages.map((stg) => (
              <div
                key={stg.num}
                className="p-3.5 rounded-2xl bg-[#050505] border border-white/10 flex flex-col justify-between"
              >
                <div className="text-[10px] font-mono font-bold text-indigo-400">{stg.num}</div>
                <div className="text-xs font-bold text-white mt-1 font-mono">{stg.title}</div>
                <div className="text-[10px] text-white/50 mt-1 leading-snug">{stg.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* RESEARCH WORKSPACE PROTOTYPE MOCKUP in Bento Container */}
        <div className="rounded-2xl bg-[#0a0a0a] border border-white/10 shadow-2xl overflow-hidden">
          
          {/* Workspace Top Console Bar */}
          <div className="px-6 py-4 bg-[#050505] border-b border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center space-x-3">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
              <div>
                <div className="flex items-center space-x-2">
                  <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                    MindCraft Research Workspace
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 font-mono">
                    PROTOTYPE
                  </span>
                </div>
                <div className="text-xs text-white/40 mt-0.5 font-mono">
                  Dossier: {RESEARCH_WORKSPACE_SAMPLE.title}
                </div>
              </div>
            </div>

            {/* Sub-Tabs */}
            <div className="flex items-center space-x-1 bg-[#0a0a0a] p-1 rounded-xl border border-white/10">
              {[
                { id: 'brief', label: 'Brief' },
                { id: 'primary', label: 'Primary Evidence' },
                { id: 'secondary', label: 'Secondary Data' },
                { id: 'findings', label: 'Strategic Findings' },
                { id: 'decision', label: 'Decision Layer' }
              ].map((t) => (
                <button
                  key={t.id}
                  onClick={() => setWorkspaceTab(t.id as any)}
                  className={`px-3 py-1 rounded-lg text-xs font-mono transition-all ${
                    workspaceTab === t.id 
                      ? 'bg-indigo-950/80 border border-indigo-500/50 text-indigo-300 font-semibold shadow-[0_0_10px_rgba(99,102,241,0.2)]' 
                      : 'text-white/40 hover:text-white'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          {/* Workspace Content Pane */}
          <div className="p-6 sm:p-8 space-y-6 bg-[#0a0a0a]">
            
            {/* Tab: Brief */}
            {workspaceTab === 'brief' && (
              <div className="space-y-4 animate-in fade-in-50 duration-150">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 rounded-2xl bg-[#050505] border border-white/10">
                    <div className="text-[10px] font-mono uppercase text-white/40 font-bold mb-1">
                      Client Organization
                    </div>
                    <div className="text-sm font-bold text-white font-mono">{RESEARCH_WORKSPACE_SAMPLE.clientContext}</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-[#050505] border border-white/10 md:col-span-2">
                    <div className="text-[10px] font-mono uppercase text-white/40 font-bold mb-1">
                      Target Markets In Scope
                    </div>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {RESEARCH_WORKSPACE_SAMPLE.targetMarkets.map((m, i) => (
                        <span key={i} className="text-xs px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-indigo-300 font-mono">
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#050505] border border-white/10">
                  <div className="text-[10px] font-mono uppercase text-white/40 font-bold mb-1">
                    Core Research Objective
                  </div>
                  <p className="text-sm text-white/80 leading-relaxed">
                    {RESEARCH_WORKSPACE_SAMPLE.objective}
                  </p>
                </div>
              </div>
            )}

            {/* Tab: Primary Evidence */}
            {workspaceTab === 'primary' && (
              <div className="space-y-3 animate-in fade-in-50 duration-150">
                <div className="text-xs font-mono uppercase text-indigo-400 font-bold">
                  Audited Primary Field Intelligence Feeds
                </div>
                <div className="grid grid-cols-1 gap-3">
                  {RESEARCH_WORKSPACE_SAMPLE.primaryEvidence.map((pe, i) => (
                    <div key={i} className="p-4 rounded-2xl bg-[#050505] border border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-3">
                      <div>
                        <div className="flex items-center space-x-2">
                          <span className="text-xs font-bold text-white font-mono">{pe.source}</span>
                          <span className="text-[10px] px-2 py-0.5 rounded bg-white/5 border border-white/10 text-white/50 font-mono">
                            {pe.sampleSize}
                          </span>
                        </div>
                        <p className="text-xs text-white/70 mt-1.5">
                          {pe.keySignal}
                        </p>
                      </div>
                      <div className="shrink-0 text-right">
                        <span className="text-[10px] uppercase font-mono text-white/40 block">Confidence</span>
                        <span className="text-xs font-bold text-emerald-400 font-mono">{pe.confidence}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tab: Secondary Evidence */}
            {workspaceTab === 'secondary' && (
              <div className="space-y-3 animate-in fade-in-50 duration-150">
                <div className="text-xs font-mono uppercase text-indigo-400 font-bold">
                  Desk, Epidemiological & Regulatory Intelligence Datasets
                </div>
                <div className="grid grid-cols-1 gap-3">
                  {RESEARCH_WORKSPACE_SAMPLE.secondaryEvidence.map((se, i) => (
                    <div key={i} className="p-4 rounded-2xl bg-[#050505] border border-white/10">
                      <div className="flex items-center space-x-2">
                        <span className="text-xs font-bold text-white font-mono">{se.source}</span>
                        <span className="text-[10px] px-2 py-0.5 rounded bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 font-mono">
                          {se.datasetType}
                        </span>
                      </div>
                      <p className="text-xs text-white/70 mt-1.5">
                        {se.keyFinding}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tab: Findings */}
            {workspaceTab === 'findings' && (
              <div className="space-y-3 animate-in fade-in-50 duration-150">
                <div className="text-xs font-mono uppercase text-amber-400 font-bold">
                  Synthesized Market Signals & Risk Benchmarks
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {RESEARCH_WORKSPACE_SAMPLE.strategicFindings.map((sf, i) => (
                    <div key={i} className="p-4 rounded-2xl bg-[#050505] border border-white/10 flex flex-col justify-between">
                      <div>
                        <div className="text-xs font-bold text-white mb-1.5 font-mono">{sf.trend}</div>
                        <p className="text-xs text-white/70 leading-relaxed">{sf.impact}</p>
                      </div>
                      <div className="mt-4 pt-2 border-t border-white/5 flex items-center justify-between text-[11px]">
                        <span className="text-white/40 font-mono uppercase">Risk Level</span>
                        <span className={`font-bold font-mono ${
                          sf.riskLevel === 'Low' ? 'text-emerald-400' : sf.riskLevel === 'Moderate' ? 'text-amber-400' : 'text-rose-400'
                        }`}>
                          {sf.riskLevel}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tab: Decision Layer */}
            {workspaceTab === 'decision' && (
              <div className="space-y-3 animate-in fade-in-50 duration-150">
                <div className="text-xs font-mono uppercase text-emerald-400 font-bold">
                  Actionable Strategic Recommendations & Confidence Scores
                </div>
                <div className="grid grid-cols-1 gap-3">
                  {RESEARCH_WORKSPACE_SAMPLE.recommendations.map((rec, i) => (
                    <div key={i} className="p-4 rounded-2xl bg-[#050505] border border-emerald-500/30 flex flex-col md:flex-row md:items-center justify-between gap-3">
                      <div>
                        <div className="flex items-center space-x-2">
                          <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 font-mono font-bold uppercase">
                            Priority: {rec.priority}
                          </span>
                        </div>
                        <p className="text-xs text-white/90 font-medium mt-1.5">
                          {rec.action}
                        </p>
                      </div>
                      <div className="shrink-0 text-right">
                        <span className="text-[10px] uppercase font-mono text-white/40 block">Evidence Strength</span>
                        <span className="text-sm font-extrabold text-emerald-400 font-mono">{rec.evidenceStrength}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Workspace Footer CTA */}
          <div className="px-6 py-4 bg-[#050505] border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <span className="text-xs text-white/50 font-mono">
              Need custom research for your therapeutic portfolio or African market expansion?
            </span>
            <button
              onClick={onOpenIntake}
              className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-mono font-semibold flex items-center space-x-1.5 transition-colors shrink-0 shadow-[0_0_10px_rgba(99,102,241,0.3)]"
            >
              <span>Commission Research Scope</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
