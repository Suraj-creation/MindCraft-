import React, { useState } from 'react';
import { NavTab } from '../types';
import { 
  Building2, 
  ShieldCheck, 
  Users, 
  CheckCircle2, 
  XCircle, 
  Award, 
  ArrowRight, 
  Sparkles, 
  Lock, 
  Globe2, 
  FileCheck,
  Check
} from 'lucide-react';

interface AboutLeadershipProps {
  onOpenIntake: () => void;
  setActiveTab: (tab: NavTab) => void;
}

export const AboutLeadership: React.FC<AboutLeadershipProps> = ({
  onOpenIntake,
  setActiveTab
}) => {
  const comparisonMatrix = [
    {
      dimension: 'Life Sciences Depth',
      mindcraft: 'Founding heritage with clinical & regulatory fluency',
      strategyFirms: 'Generalist MBAs with limited therapeutic nuance',
      researchHouses: 'Field data collection without clinical strategy',
      techBoutiques: 'Pure engineers with zero health economics'
    },
    {
      dimension: 'African Market Fluency',
      mindcraft: 'HQ in Nairobi with on-ground reach across 12+ markets',
      strategyFirms: 'Fly-in teams with high overhead & low local nuance',
      researchHouses: 'Local field teams without AI or strategy capability',
      techBoutiques: 'Offshore tech hubs without African regulatory context'
    },
    {
      dimension: 'Strategy-to-Code Delivery',
      mindcraft: 'End-to-end: Strategy → Primary Research → Private AI Software',
      strategyFirms: 'Decks only; client must hire systems integrator',
      researchHouses: 'Data charts only; no strategy or software build',
      techBoutiques: 'Software only; no market intelligence or advisory'
    },
    {
      dimension: 'AI Governance & Privacy',
      mindcraft: 'Tenant-isolated private LLM gateways, 100% IP retention',
      strategyFirms: 'Theoretical slides without working software safeguards',
      researchHouses: 'Manual spreadsheets with high data handling risk',
      techBoutiques: 'Often route data to public third-party APIs'
    },
    {
      dimension: 'Turnaround & Cost',
      mindcraft: 'Agile sprints delivered 40% faster at high ROI value',
      strategyFirms: 'Massive billable hours and multi-month ramp-up',
      researchHouses: 'Slow field cycles without automated synthesis',
      techBoutiques: 'Scope creep and misaligned business requirements'
    }
  ];

  const leadershipTeam = [
    {
      role: 'Managing Partner · Life Sciences & Strategy',
      background: '20+ years steering pan-African market access, commercial launches, and health authority negotiations for multinational pharma and global health bodies.',
      focus: 'Corporate Strategy, Market Access & Commercial Leadership'
    },
    {
      role: 'Principal Partner · AI Systems & Enterprise Architecture',
      background: 'Former Silicon Valley & African fintech systems architect specializing in secure LLM orchestration, RAG architectures, and HIPAA/DPA-compliant data pipelines.',
      focus: 'AI Enterprise Solutions & Engineering'
    },
    {
      role: 'Head of Market Research & Epidemiological Analytics',
      background: 'Epidemiologist and biostatistician with extensive experience managing multi-country primary clinical panels and healthcare econometric modeling.',
      focus: 'Primary Research & Evidence Rigor'
    },
    {
      role: 'Director of AI Capability Building & Executive Enablement',
      background: 'Organizational transformation leader who has trained over 4,000 corporate executives and commercial teams in applied AI workflow mastery.',
      focus: 'AI Training, Change Management & Champions'
    }
  ];

  return (
    <div className="py-20 bg-[#050505] border-b border-white/10" id="about-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#0a0a0a] border border-indigo-500/30 text-indigo-400 text-xs font-mono mb-3">
            <Building2 className="w-3.5 h-3.5 text-indigo-400" />
            <span className="uppercase tracking-widest text-[10px]">Firm Profile & Heritage</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-light text-white tracking-tight">
            Why <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-300">MindCraft Consultancy</span>
          </h2>
          <p className="text-white/60 text-sm sm:text-base mt-3 leading-relaxed">
            Born at the intersection of Life Sciences domain expertise, African market reality, and frontier AI engineering — we bridge the fatal gap between theoretical strategy and production software.
          </p>
        </div>

        {/* 4 Brand Value Pillars in Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          
          <div className="p-6 rounded-2xl bg-[#0a0a0a] border border-white/10 hover:border-indigo-500/40 transition-all">
            <div className="w-9 h-9 rounded-xl bg-indigo-950/60 border border-indigo-500/30 flex items-center justify-center text-indigo-300 mb-3">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-white mb-1.5 font-mono">Life Sciences Heritage</h3>
            <p className="text-xs text-white/60 leading-relaxed">
              We speak the language of clinical trials, reimbursement tiers, hospital formularies, and medical device cold-chains.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0a0a0a] border border-white/10 hover:border-indigo-500/40 transition-all">
            <div className="w-9 h-9 rounded-xl bg-indigo-950/60 border border-indigo-500/30 flex items-center justify-center text-indigo-300 mb-3">
              <Globe2 className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-white mb-1.5 font-mono">Pan-African Reach</h3>
            <p className="text-xs text-white/60 leading-relaxed">
              Headquartered in Nairobi with vetted field associate networks across 12+ major African growth economies.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0a0a0a] border border-white/10 hover:border-indigo-500/40 transition-all">
            <div className="w-9 h-9 rounded-xl bg-emerald-950/60 border border-emerald-500/30 flex items-center justify-center text-emerald-300 mb-3">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-white mb-1.5 font-mono">Full Value-Chain Delivery</h3>
            <p className="text-xs text-white/60 leading-relaxed">
              We do not stop at slide decks. We gather primary evidence, write strategic policy, upskill your workforce, and build custom AI software.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0a0a0a] border border-white/10 hover:border-indigo-500/40 transition-all">
            <div className="w-9 h-9 rounded-xl bg-indigo-950/60 border border-indigo-500/30 flex items-center justify-center text-indigo-300 mb-3">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-white mb-1.5 font-mono">Enterprise Privacy & Trust</h3>
            <p className="text-xs text-white/60 leading-relaxed">
              Zero public model training on client data. Strict compliance with GDPR, Kenya DPA 2019, SA POPIA, and Nigeria NDPR.
            </p>
          </div>

        </div>

        {/* COMPARISON MATRIX IN BENTO CARD */}
        <div className="rounded-2xl bg-[#0a0a0a] border border-white/10 p-6 sm:p-8 shadow-2xl space-y-6 mb-16">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-white/10 gap-2">
            <div>
              <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 font-bold">
                Competitive Landscape Matrix
              </span>
              <h3 className="text-xl sm:text-2xl font-light text-white mt-1">
                MindCraft vs <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-300">Alternative Engagement Models</span>
              </h3>
            </div>
            <span className="text-xs text-white/40 font-mono">[Structural Differentiation]</span>
          </div>

          {/* Matrix Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-mono">
              <thead>
                <tr className="border-b border-white/10 text-white/40 uppercase text-[11px]">
                  <th className="py-3 px-3">Dimension</th>
                  <th className="py-3 px-3 text-indigo-300 bg-indigo-950/40 rounded-t-lg border-t border-x border-indigo-500/30">MindCraft Consultancy</th>
                  <th className="py-3 px-3">Traditional Strategy Houses</th>
                  <th className="py-3 px-3">Market Research Agencies</th>
                  <th className="py-3 px-3">AI Tech Boutiques</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-white/70">
                {comparisonMatrix.map((row, i) => (
                  <tr key={i} className="hover:bg-white/[0.02]">
                    <td className="py-3.5 px-3 font-semibold text-white">{row.dimension}</td>
                    <td className="py-3.5 px-3 bg-indigo-950/20 text-indigo-200 font-medium border-x border-indigo-500/20">
                      <div className="flex items-start space-x-1.5">
                        <Check className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                        <span>{row.mindcraft}</span>
                      </div>
                    </td>
                    <td className="py-3.5 px-3 text-white/40">{row.strategyFirms}</td>
                    <td className="py-3.5 px-3 text-white/40">{row.researchHouses}</td>
                    <td className="py-3.5 px-3 text-white/40">{row.techBoutiques}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>

        {/* MULTIDISCIPLINARY LEADERSHIP ARCHETYPES */}
        <div className="space-y-6 mb-16">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-light text-white">
              Multidisciplinary <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-300">Practice Leadership</span>
            </h3>
            <p className="text-xs sm:text-sm text-white/50 mt-1 font-mono">
              Led by senior practitioners combining healthcare economics, regulatory governance, and cutting-edge machine learning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {leadershipTeam.map((lead, i) => (
              <div key={i} className="p-6 rounded-2xl bg-[#0a0a0a] border border-white/10 hover:border-indigo-500/40 transition-all flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase text-indigo-400 font-bold block mb-1">
                    {lead.focus}
                  </span>
                  <h4 className="text-sm font-bold text-white mb-2.5 leading-snug font-mono">
                    {lead.role}
                  </h4>
                  <p className="text-xs text-white/60 leading-relaxed">
                    {lead.background}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/5 text-[10px] text-white/40 font-mono">
                  Nairobi HQ · Senior Partner
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* DATA GOVERNANCE & PRIVACY SAFEGUARDS BANNER */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#0a0a0a] border border-indigo-500/40 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-950/60 border border-indigo-500/40 flex items-center justify-center text-indigo-300 shrink-0">
              <Lock className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-light text-white">
                Client Data Sovereignty & <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-300">Responsible AI Guarantee</span>
              </h3>
              <p className="text-xs sm:text-sm text-white/60 mt-1 max-w-2xl leading-relaxed">
                MindCraft never trains shared public AI models on your proprietary corporate, clinical, or patient data. Every engagement includes tenant isolation, cryptographic access controls, and full IP ownership transfer for all custom artifacts and fine-tuned architectures.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenIntake}
            className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-mono font-semibold shrink-0 transition-colors flex items-center space-x-1.5 shadow-[0_0_12px_rgba(99,102,241,0.3)]"
          >
            <span>Review Security Policy</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
