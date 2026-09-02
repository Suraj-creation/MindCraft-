import React, { useState } from 'react';
import { LIFE_SCIENCES_SECTORS } from '../data/mindcraftData';
import { NavTab } from '../types';
import { 
  Dna, 
  Pill, 
  Stethoscope, 
  Activity, 
  Building2, 
  Scissors, 
  FlaskConical, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Search, 
  ShieldCheck, 
  Cpu, 
  FileText, 
  HelpCircle,
  Briefcase
} from 'lucide-react';

interface LifeSciencesEcosystemProps {
  onOpenIntake: () => void;
  setActiveTab: (tab: NavTab) => void;
}

export const LifeSciencesEcosystem: React.FC<LifeSciencesEcosystemProps> = ({
  onOpenIntake,
  setActiveTab
}) => {
  const [activeSectorId, setActiveSectorId] = useState<string>('pharma');
  const [selectedPharmaModule, setSelectedPharmaModule] = useState<string>('market-access');

  const pharmaModules = [
    {
      id: 'market-access',
      title: 'Market Access & Pricing',
      desc: 'Pan-African reimbursement landscape, out-of-pocket price elasticity, and tender listing strategies.',
      points: [
        'National health scheme formulary inclusion (e.g. Kenya SHA, Ghana NHIS, SA NHI)',
        'Tiered dual-brand pricing modeling to navigate out-of-pocket constraints',
        'Private hospital group procurement and patient-assistance co-pay structuring'
      ]
    },
    {
      id: 'competitive-intel',
      title: 'Competitive Intelligence & Pipelines',
      desc: 'Granular tracking of clinical trial pipelines, generic market entry, and import manifests.',
      points: [
        'Therapeutic area market sizing and 5-year patient epidemiology forecasting',
        'Patent cliff defense and authorized generic positioning strategies',
        'Customs manifest import tracking across major regional ports'
      ]
    },
    {
      id: 'regulatory-intel',
      title: 'Regulatory Intelligence & Filings',
      desc: 'Navigating national medicines regulatory authorities across 54 African countries.',
      points: [
        'Real-time tracking of PPB, NAFDAC, SAHPRA, EDA, EFDA, and TMDA guidelines',
        'EAC, ECOWAS, and ZAZIBONA regional joint-assessment acceleration',
        'African Medicines Agency (AMA) policy evolution and harmonization advisory'
      ]
    },
    {
      id: 'pharmacovigilance',
      title: 'Pharmacovigilance Support',
      desc: 'Adverse event screening, signal detection, and regulatory safety compliance.',
      points: [
        'AI-assisted biomedical literature screening and spontaneous report triage',
        'Standard E2B(R3) safety reporting compliance workflows',
        'Post-authorization safety study (PASS) design and monitoring'
      ]
    },
    {
      id: 'kol-mapping',
      title: 'KOL & Commercial Effectiveness',
      desc: 'Scientific leadership mapping, advisory boards, and territory sales intelligence.',
      points: [
        'Double-blind Key Opinion Leader (KOL) network mapping across therapeutic centers',
        'Sales representative territory optimization and detailing effectiveness',
        'Mobile AI pre-call briefing assistants for field medical science liaisons'
      ]
    }
  ];

  const currentSector = LIFE_SCIENCES_SECTORS.find(s => s.id === activeSectorId) || LIFE_SCIENCES_SECTORS[0];

  return (
    <div className="bg-[#F4F1EA]">
      {/* Editorial Hero Banner */}
      <section className="bg-[#0E2C23] text-[#EDE7D9] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="font-mono text-[11px] tracking-widest uppercase text-[#D98A5F] mb-4">
              Core Domain · Founding Heritage
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#F4F1EA] font-normal leading-tight tracking-tight mb-6">
              Life Sciences is where MindCraft was built.
            </h1>
            <p className="text-base sm:text-lg text-[rgba(237,231,217,0.76)] leading-relaxed">
              Our consultants, researchers, and AI solution architects bring direct working knowledge of clinical, regulatory, market-access, and commercial dynamics — so onboarding is fast, inquiries are sharp, and recommendations are grounded in real industry context from day one.
            </p>
          </div>
        </div>
      </section>

      {/* Sector Tabs & Explorer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        
        {/* Sector Tabs */}
        <div className="flex flex-wrap gap-2.5 mb-8">
          {LIFE_SCIENCES_SECTORS.map((sector) => {
            const isSelected = activeSectorId === sector.id;
            return (
              <button
                key={sector.id}
                onClick={() => setActiveSectorId(sector.id)}
                className={`px-5 py-3 rounded-lg border text-sm font-semibold tracking-tight transition-all ${
                  isSelected 
                    ? 'bg-[#123A2E] border-[#123A2E] text-[#F4F1EA] shadow-md' 
                    : 'bg-[#FBFAF6] border-[rgba(20,25,26,0.12)] text-[#3B4441] hover:border-[#123A2E]'
                }`}
              >
                {sector.name}
              </button>
            );
          })}
        </div>

        {/* Master Sector Panel */}
        <div className="border border-[rgba(20,25,26,0.14)] rounded-2xl bg-[#FBFAF6] overflow-hidden shadow-sm space-y-8 p-6 sm:p-10 mb-12">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-[rgba(20,25,26,0.08)] gap-4">
            <div>
              <div className="font-mono text-[10px] tracking-widest uppercase text-[#C0562F] font-semibold mb-1">
                Life Sciences Core Sector
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#16191A] font-normal">
                {currentSector.name}
              </h2>
              <p className="text-sm sm:text-base text-[#4C524E] mt-1 font-serif italic">
                {currentSector.tagline}
              </p>
            </div>

            <button
              onClick={onOpenIntake}
              className="px-5 py-2.5 rounded-lg bg-[#123A2E] hover:bg-[#C0562F] text-white text-xs font-semibold tracking-wide transition-colors flex items-center space-x-2 self-start md:self-auto"
            >
              <span>Consult on {currentSector.name}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* If Sector is Pharma: Render Dedicated Deep Capabilities */}
          {currentSector.id === 'pharma' && (
            <div className="p-6 rounded-xl bg-white border border-[rgba(20,25,26,0.1)] space-y-5">
              <div className="flex items-center justify-between">
                <div className="font-mono text-[11px] uppercase font-bold text-[#123A2E] flex items-center space-x-2">
                  <Sparkles className="w-3.5 h-3.5 text-[#C0562F]" />
                  <span>Pharmaceutical Deep Capability Modules</span>
                </div>
                <span className="text-[11px] text-[#8A8578] font-mono">[Select to inspect]</span>
              </div>

              {/* Module Buttons */}
              <div className="flex flex-wrap gap-2">
                {pharmaModules.map((mod) => (
                  <button
                    key={mod.id}
                    onClick={() => setSelectedPharmaModule(mod.id)}
                    className={`px-4 py-2 rounded-lg border text-xs font-mono transition-all ${
                      selectedPharmaModule === mod.id 
                        ? 'bg-[#123A2E] border-[#123A2E] text-white font-semibold' 
                        : 'bg-[#FBFAF6] border-[rgba(20,25,26,0.12)] text-[#3B4441] hover:border-[#123A2E]'
                    }`}
                  >
                    {mod.title}
                  </button>
                ))}
              </div>

              {/* Active Module Details */}
              {(() => {
                const activeMod = pharmaModules.find(m => m.id === selectedPharmaModule) || pharmaModules[0];
                return (
                  <div className="p-5 rounded-lg bg-[#FBFAF6] border border-[rgba(20,25,26,0.08)]">
                    <h3 className="text-base font-bold text-[#16191A] font-serif">{activeMod.title}</h3>
                    <p className="text-xs sm:text-sm text-[#4C524E] mt-1">{activeMod.desc}</p>
                    <ul className="mt-4 space-y-2">
                      {activeMod.points.map((pt, i) => (
                        <li key={i} className="text-xs sm:text-sm text-[#3B4441] flex items-start space-x-2">
                          <CheckCircle2 className="w-4 h-4 text-[#123A2E] shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })()}
            </div>
          )}

          {/* 3-Column Core Breakdown: Strategic Challenges, Research Methods, AI Opportunities */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Strategic Challenges */}
            <div className="p-5 rounded-xl bg-white border border-[rgba(20,25,26,0.1)] space-y-3">
              <div className="font-mono text-[10px] tracking-widest uppercase font-bold text-[#C0562F] flex items-center space-x-1.5">
                <HelpCircle className="w-3.5 h-3.5" />
                <span>Strategic Challenges</span>
              </div>
              <ul className="space-y-2">
                {currentSector.strategicChallenges.map((ch, i) => (
                  <li key={i} className="text-xs sm:text-sm text-[#3B4441] flex items-start space-x-2">
                    <span className="text-[#C0562F] font-bold">•</span>
                    <span>{ch}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Research Methods */}
            <div className="p-5 rounded-xl bg-white border border-[rgba(20,25,26,0.1)] space-y-3">
              <div className="font-mono text-[10px] tracking-widest uppercase font-bold text-[#123A2E] flex items-center space-x-1.5">
                <Search className="w-3.5 h-3.5" />
                <span>Primary & Secondary Methods</span>
              </div>
              <ul className="space-y-2">
                {currentSector.researchMethods.map((rm, i) => (
                  <li key={i} className="text-xs sm:text-sm text-[#3B4441] flex items-start space-x-2">
                    <span className="text-[#123A2E] font-bold">•</span>
                    <span>{rm}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* AI Opportunities */}
            <div className="p-5 rounded-xl bg-white border border-[rgba(20,25,26,0.1)] space-y-3">
              <div className="font-mono text-[10px] tracking-widest uppercase font-bold text-[#123A2E] flex items-center space-x-1.5">
                <Cpu className="w-3.5 h-3.5" />
                <span>AI & Automation Opportunities</span>
              </div>
              <ul className="space-y-2">
                {currentSector.aiOpportunities.map((ao, i) => (
                  <li key={i} className="text-xs sm:text-sm text-[#3B4441] flex items-start space-x-2">
                    <span className="text-[#123A2E] font-bold">•</span>
                    <span>{ao}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* End-to-End Workflow Transformer */}
          <div className="rounded-xl bg-[#123A2E]/5 border border-[#123A2E]/15 p-6 space-y-4">
            <div className="flex items-center justify-between">
              <div className="font-mono text-[10px] tracking-widest uppercase font-bold text-[#123A2E] flex items-center space-x-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#C0562F]" />
                <span>Illustrative End-to-End Delivery Workflow</span>
              </div>
              <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-[#123A2E] text-white font-mono">
                Question → Outcome
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-3 pt-2">
              
              <div className="p-4 rounded-lg bg-white border border-[rgba(20,25,26,0.08)]">
                <div className="font-mono text-[9px] uppercase text-[#8A8578] font-bold">01 · Question</div>
                <p className="text-xs text-[#16191A] mt-1 font-serif italic leading-relaxed">
                  "{currentSector.workflowExample.question}"
                </p>
              </div>

              <div className="p-4 rounded-lg bg-white border border-[rgba(20,25,26,0.08)]">
                <div className="font-mono text-[9px] uppercase text-[#123A2E] font-bold">02 · Method</div>
                <p className="text-xs text-[#3B4441] mt-1 leading-relaxed">
                  {currentSector.workflowExample.method}
                </p>
              </div>

              <div className="p-4 rounded-lg bg-white border border-[rgba(20,25,26,0.08)]">
                <div className="font-mono text-[9px] uppercase text-[#123A2E] font-bold">03 · Intelligence</div>
                <p className="text-xs text-[#3B4441] mt-1 leading-relaxed">
                  {currentSector.workflowExample.intelligence}
                </p>
              </div>

              <div className="p-4 rounded-lg bg-white border border-[rgba(20,25,26,0.08)]">
                <div className="font-mono text-[9px] uppercase text-[#123A2E] font-bold">04 · Decision</div>
                <p className="text-xs text-[#16191A] mt-1 font-semibold leading-relaxed">
                  {currentSector.workflowExample.decision}
                </p>
              </div>

              <div className="p-4 rounded-lg bg-white border border-[rgba(20,25,26,0.08)]">
                <div className="font-mono text-[9px] uppercase text-[#C0562F] font-bold">05 · AI Solution</div>
                <p className="text-xs text-[#3B4441] mt-1 leading-relaxed">
                  {currentSector.workflowExample.aiSolution}
                </p>
              </div>

              <div className="p-4 rounded-lg bg-[#123A2E] text-white">
                <div className="font-mono text-[9px] uppercase text-[#D98A5F] font-bold">06 · Measured ROI</div>
                <p className="text-xs text-[#F4F1EA] mt-1 font-semibold leading-relaxed">
                  {currentSector.workflowExample.outcome}
                </p>
              </div>

            </div>
          </div>

        </div>

        {/* Cross-Sector Pathway Button */}
        <div className="p-8 rounded-2xl border border-[rgba(20,25,26,0.12)] bg-[#FBFAF6] flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-serif text-2xl text-[#16191A] font-normal mb-1">
              Explore Our Broader 24 Industry Verticals
            </h3>
            <p className="text-sm text-[#4C524E]">
              See how MindCraft applies its methodology to diversified sectors (Telco, Financial Services, Energy, Agribusiness).
            </p>
          </div>
          <button
            onClick={() => setActiveTab('industries')}
            className="px-6 py-3 rounded-lg bg-[#123A2E] hover:bg-[#C0562F] text-white text-xs font-semibold tracking-wide transition-colors whitespace-nowrap"
          >
            Open 24 Industries Explorer →
          </button>
        </div>

      </div>
    </div>
  );
};
