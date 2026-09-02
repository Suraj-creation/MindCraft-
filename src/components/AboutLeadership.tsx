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
      mindcraft: 'Founding heritage with clinical, regulatory & health economics fluency',
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
    <div className="bg-[#F4F1EA] py-16 sm:py-24 border-b border-[rgba(20,25,26,0.12)]" id="about-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="max-w-3xl">
          <div className="font-mono text-[11px] tracking-widest uppercase text-[#C0562F] mb-3">
            Firm Profile & Heritage
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#16191A] font-normal leading-tight tracking-tight">
            Why MindCraft Consultancy
          </h2>
          <p className="text-sm sm:text-base text-[#4C524E] mt-3 leading-relaxed">
            Born at the intersection of Life Sciences domain expertise, African market reality, and frontier AI engineering — we bridge the gap between theoretical strategy and production software.
          </p>
        </div>

        {/* 4 Brand Value Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          
          <div className="p-6 rounded-xl bg-[#FBFAF6] border border-[rgba(20,25,26,0.12)] hover:border-[#123A2E] transition-all space-y-3">
            <div className="w-8 h-8 rounded-lg bg-[#123A2E]/10 text-[#123A2E] flex items-center justify-center">
              <Award className="w-4 h-4" />
            </div>
            <h3 className="font-serif text-base font-normal text-[#16191A]">Life Sciences Heritage</h3>
            <p className="text-xs text-[#4C524E] leading-relaxed">
              We speak the language of clinical trials, reimbursement tiers, hospital formularies, and medical device cold-chains.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#FBFAF6] border border-[rgba(20,25,26,0.12)] hover:border-[#123A2E] transition-all space-y-3">
            <div className="w-8 h-8 rounded-lg bg-[#123A2E]/10 text-[#123A2E] flex items-center justify-center">
              <Globe2 className="w-4 h-4" />
            </div>
            <h3 className="font-serif text-base font-normal text-[#16191A]">Pan-African Footprint</h3>
            <p className="text-xs text-[#4C524E] leading-relaxed">
              Headquartered in Nairobi with vetted field associate networks across 12+ major African growth economies.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#FBFAF6] border border-[rgba(20,25,26,0.12)] hover:border-[#123A2E] transition-all space-y-3">
            <div className="w-8 h-8 rounded-lg bg-[#C0562F]/10 text-[#C0562F] flex items-center justify-center">
              <Sparkles className="w-4 h-4" />
            </div>
            <h3 className="font-serif text-base font-normal text-[#16191A]">Full Value-Chain Delivery</h3>
            <p className="text-xs text-[#4C524E] leading-relaxed">
              We do not stop at slide decks. We gather primary evidence, write strategic policy, upskill your workforce, and build custom AI software.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#FBFAF6] border border-[rgba(20,25,26,0.12)] hover:border-[#123A2E] transition-all space-y-3">
            <div className="w-8 h-8 rounded-lg bg-[#123A2E]/10 text-[#123A2E] flex items-center justify-center">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <h3 className="font-serif text-base font-normal text-[#16191A]">Enterprise Privacy & Trust</h3>
            <p className="text-xs text-[#4C524E] leading-relaxed">
              Zero public model training on client data. Strict compliance with GDPR, Kenya DPA 2019, SA POPIA, and Nigeria NDPR.
            </p>
          </div>

        </div>

        {/* COMPARISON MATRIX TABLE */}
        <div className="rounded-2xl bg-[#FBFAF6] border border-[rgba(20,25,26,0.14)] p-6 sm:p-8 shadow-sm space-y-6">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[rgba(20,25,26,0.08)] gap-2">
            <div>
              <span className="font-mono text-[10px] uppercase font-bold text-[#C0562F]">
                Competitive Landscape Matrix
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#16191A] mt-1">
                MindCraft vs Alternative Engagement Models
              </h3>
            </div>
            <span className="text-xs text-[#8A8578] font-mono">[Structural Differentiation]</span>
          </div>

          {/* Matrix Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-[rgba(20,25,26,0.1)] text-[#8A8578] font-mono uppercase text-[11px]">
                  <th className="py-3 px-3">Dimension</th>
                  <th className="py-3 px-3 text-[#123A2E] font-bold bg-[#123A2E]/10 rounded-t-lg">MindCraft Consultancy</th>
                  <th className="py-3 px-3">Traditional Strategy Houses</th>
                  <th className="py-3 px-3">Market Research Agencies</th>
                  <th className="py-3 px-3">AI Tech Boutiques</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[rgba(20,25,26,0.06)] text-[#3B4441]">
                {comparisonMatrix.map((row, i) => (
                  <tr key={i} className="hover:bg-[#F4F1EA]/50">
                    <td className="py-3.5 px-3 font-semibold text-[#16191A] font-serif">{row.dimension}</td>
                    <td className="py-3.5 px-3 bg-[#123A2E]/5 text-[#123A2E] font-medium">
                      <div className="flex items-start space-x-1.5">
                        <Check className="w-3.5 h-3.5 text-[#123A2E] shrink-0 mt-0.5" />
                        <span>{row.mindcraft}</span>
                      </div>
                    </td>
                    <td className="py-3.5 px-3 text-[#6A6F6B]">{row.strategyFirms}</td>
                    <td className="py-3.5 px-3 text-[#6A6F6B]">{row.researchHouses}</td>
                    <td className="py-3.5 px-3 text-[#6A6F6B]">{row.techBoutiques}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>

        {/* MULTIDISCIPLINARY LEADERSHIP ARCHETYPES */}
        <div className="space-y-6">
          <div className="max-w-2xl">
            <div className="font-mono text-[10px] uppercase font-bold text-[#123A2E] mb-1">
              Senior Leadership
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#16191A] font-normal">
              Multidisciplinary Practice Leadership
            </h3>
            <p className="text-xs sm:text-sm text-[#4C524E] mt-1 font-serif italic">
              Led by senior practitioners combining healthcare economics, regulatory governance, and enterprise AI architecture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {leadershipTeam.map((lead, i) => (
              <div key={i} className="p-6 rounded-xl bg-[#FBFAF6] border border-[rgba(20,25,26,0.12)] hover:border-[#123A2E] transition-all flex flex-col justify-between">
                <div>
                  <span className="font-mono text-[10px] uppercase text-[#C0562F] font-bold block mb-1">
                    {lead.focus}
                  </span>
                  <h4 className="font-serif text-sm font-bold text-[#16191A] mb-2 leading-snug">
                    {lead.role}
                  </h4>
                  <p className="text-xs text-[#4C524E] leading-relaxed">
                    {lead.background}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[rgba(20,25,26,0.08)] text-[10px] text-[#8A8578] font-mono">
                  Nairobi HQ · Senior Partner
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* DATA GOVERNANCE & PRIVACY SAFEGUARDS BANNER */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#123A2E] text-[#EDE7D9] shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-[#D98A5F] shrink-0">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif text-xl font-normal text-[#F4F1EA]">
                Client Data Sovereignty & Responsible AI Guarantee
              </h3>
              <p className="text-xs sm:text-sm text-[rgba(237,231,217,0.8)] mt-1 max-w-2xl leading-relaxed">
                MindCraft never trains shared public AI models on your proprietary corporate, clinical, or patient data. Every engagement includes tenant isolation, cryptographic access controls, and full IP ownership transfer for all custom artifacts.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenIntake}
            className="px-5 py-2.5 rounded-lg bg-[#C0562F] hover:bg-[#D98A5F] text-white text-xs font-semibold shrink-0 transition-colors flex items-center space-x-1.5"
          >
            <span>Review Security Policy</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
};
