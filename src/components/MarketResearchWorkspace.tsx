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
    <div className="bg-[#F4F1EA] py-16 sm:py-24 border-b border-[rgba(20,25,26,0.12)]" id="market-research-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="max-w-3xl">
          <div className="font-mono text-[11px] tracking-widest uppercase text-[#C0562F] mb-3">
            Pillar 02 · Evidence & Intelligence
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#16191A] font-normal leading-tight tracking-tight">
            Market Research & Intelligence
          </h2>
          <p className="text-sm sm:text-base text-[#4C524E] mt-3 leading-relaxed">
            Rigorous primary and secondary research that turns market complexity into decision-ready intelligence — purpose-built for Life Sciences and diversified industries across African and international markets.
          </p>
        </div>

        {/* 4 Core Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {researchPillar.capabilities.map((cap, i) => (
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
                <span>Verified Field Evidence</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-[#123A2E]" />
              </div>
            </div>
          ))}
        </div>

        {/* The 8-Stage Research Rigor Pipeline */}
        <div className="rounded-2xl bg-[#FBFAF6] border border-[rgba(20,25,26,0.12)] p-6 sm:p-8 shadow-sm">
          <div className="font-mono text-[11px] uppercase text-[#123A2E] font-bold mb-4 tracking-wider">
            The Research Rigor Pipeline: From Ambiguous Signal to Executive Decision
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
            {researchPipelineStages.map((stg) => (
              <div
                key={stg.num}
                className="p-3.5 rounded-lg bg-white border border-[rgba(20,25,26,0.08)] flex flex-col justify-between"
              >
                <div className="font-mono text-[10px] font-bold text-[#C0562F]">{stg.num}</div>
                <div className="text-xs font-bold text-[#16191A] mt-1 font-serif">{stg.title}</div>
                <div className="text-[10px] text-[#6A6F6B] mt-1 leading-snug">{stg.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Prototype Dossier Console */}
        <div className="rounded-2xl border border-[rgba(20,25,26,0.14)] bg-[#FBFAF6] overflow-hidden shadow-sm">
          
          {/* Console Header */}
          <div className="px-6 py-4 bg-[#123A2E] text-[#EDE7D9] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                  MindCraft Research Dossier
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-white/10 text-[#D98A5F] font-mono">
                  INTERACTIVE SAMPLE
                </span>
              </div>
              <div className="text-xs text-[rgba(237,231,217,0.7)] mt-0.5 font-serif italic">
                Case Study: {RESEARCH_WORKSPACE_SAMPLE.title}
              </div>
            </div>

            {/* Sub-Tabs */}
            <div className="flex items-center space-x-1 bg-black/20 p-1 rounded-lg">
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
                  className={`px-3 py-1 rounded text-xs font-mono transition-all ${
                    workspaceTab === t.id 
                      ? 'bg-white text-[#123A2E] font-semibold' 
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          {/* Console Content */}
          <div className="p-6 sm:p-8 space-y-6 bg-[#FBFAF6]">
            
            {/* Tab: Brief */}
            {workspaceTab === 'brief' && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 rounded-xl bg-white border border-[rgba(20,25,26,0.08)]">
                    <div className="font-mono text-[10px] uppercase text-[#8A8578] font-bold mb-1">
                      Client Organization
                    </div>
                    <div className="text-sm font-semibold text-[#16191A]">{RESEARCH_WORKSPACE_SAMPLE.clientContext}</div>
                  </div>
                  <div className="p-4 rounded-xl bg-white border border-[rgba(20,25,26,0.08)] md:col-span-2">
                    <div className="font-mono text-[10px] uppercase text-[#8A8578] font-bold mb-1">
                      Target Markets In Scope
                    </div>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {RESEARCH_WORKSPACE_SAMPLE.targetMarkets.map((m, i) => (
                        <span key={i} className="text-xs px-2.5 py-1 rounded bg-[#F4F1EA] border border-[rgba(20,25,26,0.1)] text-[#123A2E] font-mono">
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[rgba(20,25,26,0.08)]">
                  <div className="font-mono text-[10px] uppercase text-[#8A8578] font-bold mb-1">
                    Core Research Objective
                  </div>
                  <p className="text-xs sm:text-sm text-[#3B4441] leading-relaxed">
                    {RESEARCH_WORKSPACE_SAMPLE.objective}
                  </p>
                </div>
              </div>
            )}

            {/* Tab: Primary Evidence */}
            {workspaceTab === 'primary' && (
              <div className="space-y-3">
                <div className="font-mono text-xs uppercase text-[#123A2E] font-bold">
                  Audited Primary Field Intelligence Feeds
                </div>
                <div className="grid grid-cols-1 gap-3">
                  {RESEARCH_WORKSPACE_SAMPLE.primaryEvidence.map((pe, i) => (
                    <div key={i} className="p-4 rounded-xl bg-white border border-[rgba(20,25,26,0.08)] flex flex-col md:flex-row md:items-center justify-between gap-3">
                      <div>
                        <div className="flex items-center space-x-2">
                          <span className="text-xs font-bold text-[#16191A] font-mono">{pe.source}</span>
                          <span className="text-[10px] px-2 py-0.5 rounded bg-[#F4F1EA] text-[#6A6F6B] font-mono">
                            {pe.sampleSize}
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-[#3B4441] mt-1.5">
                          {pe.keySignal}
                        </p>
                      </div>
                      <div className="shrink-0 text-right">
                        <span className="font-mono text-[10px] uppercase text-[#8A8578] block">Statistical Confidence</span>
                        <span className="text-xs font-bold text-[#123A2E] font-mono">{pe.confidence}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tab: Secondary Evidence */}
            {workspaceTab === 'secondary' && (
              <div className="space-y-3">
                <div className="font-mono text-xs uppercase text-[#123A2E] font-bold">
                  Desk, Epidemiological & Regulatory Intelligence Datasets
                </div>
                <div className="grid grid-cols-1 gap-3">
                  {RESEARCH_WORKSPACE_SAMPLE.secondaryEvidence.map((se, i) => (
                    <div key={i} className="p-4 rounded-xl bg-white border border-[rgba(20,25,26,0.08)]">
                      <div className="flex items-center space-x-2">
                        <span className="text-xs font-bold text-[#16191A] font-mono">{se.source}</span>
                        <span className="text-[10px] px-2 py-0.5 rounded bg-[#123A2E]/10 text-[#123A2E] font-mono">
                          {se.datasetType}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-[#3B4441] mt-1.5">
                        {se.keyFinding}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tab: Findings */}
            {workspaceTab === 'findings' && (
              <div className="space-y-3">
                <div className="font-mono text-xs uppercase text-[#C0562F] font-bold">
                  Synthesized Market Signals & Risk Benchmarks
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {RESEARCH_WORKSPACE_SAMPLE.strategicFindings.map((sf, i) => (
                    <div key={i} className="p-4 rounded-xl bg-white border border-[rgba(20,25,26,0.08)] flex flex-col justify-between">
                      <div>
                        <div className="text-xs font-bold text-[#16191A] mb-1.5 font-serif">{sf.trend}</div>
                        <p className="text-xs text-[#3B4441] leading-relaxed">{sf.impact}</p>
                      </div>
                      <div className="mt-4 pt-2 border-t border-[rgba(20,25,26,0.08)] flex items-center justify-between text-[11px]">
                        <span className="text-[#8A8578] font-mono uppercase">Risk Level</span>
                        <span className="font-bold font-mono text-[#C0562F]">
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
              <div className="space-y-3">
                <div className="font-mono text-xs uppercase text-[#123A2E] font-bold">
                  Actionable Strategic Recommendations & Evidence Strength
                </div>
                <div className="grid grid-cols-1 gap-3">
                  {RESEARCH_WORKSPACE_SAMPLE.recommendations.map((rec, i) => (
                    <div key={i} className="p-4 rounded-xl bg-white border border-[rgba(20,25,26,0.08)] flex flex-col md:flex-row md:items-center justify-between gap-3">
                      <div>
                        <span className="text-[10px] px-2 py-0.5 rounded bg-[#123A2E]/10 text-[#123A2E] font-mono font-bold uppercase">
                          Priority: {rec.priority}
                        </span>
                        <p className="text-xs sm:text-sm text-[#16191A] font-medium mt-1.5">
                          {rec.action}
                        </p>
                      </div>
                      <div className="shrink-0 text-right">
                        <span className="font-mono text-[10px] uppercase text-[#8A8578] block">Evidence Strength</span>
                        <span className="text-sm font-bold text-[#123A2E] font-mono">{rec.evidenceStrength}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Console Footer */}
          <div className="px-6 py-4 bg-[#F4F1EA] border-t border-[rgba(20,25,26,0.1)] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <span className="text-xs text-[#4C524E] font-serif italic">
              Need custom research for your therapeutic portfolio or African market expansion?
            </span>
            <button
              onClick={onOpenIntake}
              className="px-5 py-2.5 rounded-lg bg-[#123A2E] hover:bg-[#C0562F] text-white text-xs font-semibold flex items-center space-x-1.5 transition-colors shrink-0"
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
