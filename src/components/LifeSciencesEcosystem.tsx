import React, { useState } from 'react';
import { LIFE_SCIENCES_SECTORS, DIVERSIFIED_INDUSTRIES } from '../data/mindcraftData';
import { LifeSciencesSector, DiversifiedIndustry, NavTab } from '../types';
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
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string>('all');
  const [selectedPharmaModule, setSelectedPharmaModule] = useState<string>('market-access');

  const sectorIcons: { [key: string]: any } = {
    pharma: Pill,
    'med-devices': Stethoscope,
    diagnostics: FlaskConical,
    equipment: Activity,
    consumables: Scissors,
    hospitals: Building2
  };

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
  const SectorIcon = sectorIcons[currentSector.id] || Pill;

  return (
    <div className="py-20 bg-[#050505] border-b border-white/10" id="lifesciences-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#0a0a0a] border border-indigo-500/30 text-indigo-400 text-xs font-mono mb-3">
            <Dna className="w-3.5 h-3.5 text-indigo-400" />
            <span className="uppercase tracking-widest text-[10px]">Founding Specialization</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-light text-white tracking-tight">
            Life Sciences <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-300">Ecosystem</span>
          </h2>
          <p className="text-white/60 text-sm sm:text-base mt-3 leading-relaxed">
            Unlike generalist consultancies, MindCraft’s heritage is deeply rooted in Life Sciences. We bring clinical fluency, regulatory mastery, and health economics into every pharmaceutical, device, diagnostic, and hospital engagement.
          </p>
        </div>

        {/* Sector Tabs Bar in Bento Style */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-8">
          {LIFE_SCIENCES_SECTORS.map((sector) => {
            const isSelected = activeSectorId === sector.id;
            const Icon = sectorIcons[sector.id] || Pill;
            return (
              <button
                key={sector.id}
                onClick={() => setActiveSectorId(sector.id)}
                id={`sector-tab-${sector.id}`}
                className={`p-3.5 rounded-2xl border text-left transition-all relative flex flex-col justify-between ${
                  isSelected 
                    ? 'bg-[#0a0a0a] border-indigo-500/60 text-white shadow-[0_0_15px_rgba(99,102,241,0.25)]' 
                    : 'bg-[#0a0a0a] border-white/10 text-white/60 hover:border-white/20 hover:text-white'
                }`}
              >
                <div>
                  <Icon className={`w-4 h-4 mb-2 ${isSelected ? 'text-indigo-400' : 'text-white/40'}`} />
                  <div className="text-xs font-bold leading-snug">{sector.name}</div>
                </div>
                <div className="text-[10px] text-white/40 mt-2 capitalize font-mono truncate">
                  {sector.category.replace('-', ' ')}
                </div>
                {isSelected && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.8)]" />
                )}
              </button>
            );
          })}
        </div>

        {/* Active Sector Master Explorer Bento Container */}
        <div className="rounded-2xl bg-[#0a0a0a] border border-white/10 p-6 sm:p-8 shadow-2xl space-y-8 mb-16">
          
          {/* Sector Header */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-6 border-b border-white/10 gap-4">
            <div className="flex items-start space-x-3">
              <div className="w-12 h-12 rounded-xl bg-indigo-950/40 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0">
                <SectorIcon className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 font-bold uppercase">
                    {currentSector.category.replace('-', ' ')}
                  </span>
                  <span className="text-xs text-white/40 font-mono">Life Sciences Vertical</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-light text-white mt-1">
                  {currentSector.name}
                </h3>
                <p className="text-xs sm:text-sm text-indigo-300/80 font-mono mt-0.5">
                  {currentSector.tagline}
                </p>
              </div>
            </div>

            <button
              onClick={onOpenIntake}
              className="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs sm:text-sm font-mono shrink-0 transition-colors flex items-center space-x-1.5 shadow-[0_0_12px_rgba(99,102,241,0.3)]"
            >
              <span>Consult on {currentSector.name}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* If Sector is Pharmaceuticals, render the dedicated Multi-Module Matrix */}
          {currentSector.id === 'pharma' && (
            <div className="rounded-xl bg-[#050505] border border-white/10 p-5 space-y-4">
              <div className="flex items-center justify-between">
                <div className="text-xs font-mono uppercase font-bold text-indigo-400 flex items-center space-x-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Pharmaceutical Deep Capability Modules</span>
                </div>
                <span className="text-[11px] text-white/40 font-mono">[Select module to inspect]</span>
              </div>

              {/* Module Buttons */}
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                {pharmaModules.map((mod) => (
                  <button
                    key={mod.id}
                    onClick={() => setSelectedPharmaModule(mod.id)}
                    className={`p-2.5 rounded-xl border text-left text-xs font-mono transition-all ${
                      selectedPharmaModule === mod.id 
                        ? 'bg-indigo-950/60 border-indigo-500/50 text-indigo-300 shadow-[0_0_10px_rgba(99,102,241,0.2)]' 
                        : 'bg-[#0a0a0a] border-white/10 text-white/50 hover:border-white/20 hover:text-white'
                    }`}
                  >
                    {mod.title}
                  </button>
                ))}
              </div>

              {/* Active Pharma Module Details */}
              {(() => {
                const activeMod = pharmaModules.find(m => m.id === selectedPharmaModule) || pharmaModules[0];
                return (
                  <div className="p-4 rounded-xl bg-[#0a0a0a] border border-white/10 mt-3 animate-in fade-in-50 duration-150">
                    <h4 className="text-sm font-bold text-white font-mono">{activeMod.title}</h4>
                    <p className="text-xs text-white/60 mt-1">{activeMod.desc}</p>
                    <ul className="mt-3 space-y-1.5">
                      {activeMod.points.map((pt, i) => (
                        <li key={i} className="text-xs text-white/70 flex items-start space-x-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            {/* Strategic Challenges */}
            <div className="p-5 rounded-2xl bg-[#050505] border border-white/10 space-y-3">
              <div className="text-[10px] font-mono uppercase font-bold text-rose-400 flex items-center space-x-1.5">
                <HelpCircle className="w-3.5 h-3.5" />
                <span>Sector Strategic Challenges</span>
              </div>
              <ul className="space-y-2">
                {currentSector.strategicChallenges.map((ch, i) => (
                  <li key={i} className="text-xs text-white/70 flex items-start space-x-2">
                    <span className="text-rose-400 font-bold">•</span>
                    <span>{ch}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Research Methods */}
            <div className="p-5 rounded-2xl bg-[#050505] border border-white/10 space-y-3">
              <div className="text-[10px] font-mono uppercase font-bold text-indigo-400 flex items-center space-x-1.5">
                <Search className="w-3.5 h-3.5" />
                <span>MindCraft Research Methods</span>
              </div>
              <ul className="space-y-2">
                {currentSector.researchMethods.map((rm, i) => (
                  <li key={i} className="text-xs text-white/70 flex items-start space-x-2">
                    <span className="text-indigo-400 font-bold">•</span>
                    <span>{rm}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* AI Opportunities */}
            <div className="p-5 rounded-2xl bg-[#050505] border border-white/10 space-y-3">
              <div className="text-[10px] font-mono uppercase font-bold text-emerald-400 flex items-center space-x-1.5">
                <Cpu className="w-3.5 h-3.5" />
                <span>AI & Automation Opportunities</span>
              </div>
              <ul className="space-y-2">
                {currentSector.aiOpportunities.map((ao, i) => (
                  <li key={i} className="text-xs text-white/70 flex items-start space-x-2">
                    <span className="text-emerald-400 font-bold">•</span>
                    <span>{ao}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* End-to-End Sub-Sector Workflow Transformer Bento */}
          <div className="rounded-2xl bg-[#050505] border border-white/10 p-5 space-y-4">
            <div className="flex items-center justify-between">
              <div className="text-xs font-mono uppercase font-bold text-indigo-300 flex items-center space-x-1.5">
                <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                <span>Illustrative End-to-End Transformation Workflow</span>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded bg-indigo-950/60 text-indigo-300 border border-indigo-500/30 font-mono">
                Question → Outcome
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-3 pt-2">
              
              <div className="p-3.5 rounded-xl bg-[#0a0a0a] border border-white/10">
                <div className="text-[9px] font-mono uppercase text-white/40 font-bold">01. Question</div>
                <p className="text-xs text-white/90 mt-1 font-medium italic">
                  "{currentSector.workflowExample.question}"
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#0a0a0a] border border-white/10">
                <div className="text-[9px] font-mono uppercase text-indigo-400 font-bold">02. Method</div>
                <p className="text-xs text-white/70 mt-1">
                  {currentSector.workflowExample.method}
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#0a0a0a] border border-white/10">
                <div className="text-[9px] font-mono uppercase text-indigo-300 font-bold">03. Intelligence</div>
                <p className="text-xs text-white/70 mt-1">
                  {currentSector.workflowExample.intelligence}
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#0a0a0a] border border-white/10">
                <div className="text-[9px] font-mono uppercase text-teal-400 font-bold">04. Decision</div>
                <p className="text-xs text-white/70 mt-1 font-medium">
                  {currentSector.workflowExample.decision}
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#0a0a0a] border border-white/10">
                <div className="text-[9px] font-mono uppercase text-emerald-400 font-bold">05. AI Solution</div>
                <p className="text-xs text-white/70 mt-1">
                  {currentSector.workflowExample.aiSolution}
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#0a0a0a] border border-emerald-500/30">
                <div className="text-[9px] font-mono uppercase text-emerald-300 font-bold">06. Measured ROI</div>
                <p className="text-xs text-emerald-300 mt-1 font-semibold">
                  {currentSector.workflowExample.outcome}
                </p>
              </div>

            </div>
          </div>

        </div>

        {/* Additional Diversified Industry Verticals in Bento Grid */}
        <div className="mt-16">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="text-2xl font-light text-white">
              Additional <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-300">Industry Verticals</span> Served
            </h3>
            <p className="text-white/50 text-xs sm:text-sm mt-1 font-mono">
              Applying the same rigorous, evidence-based methodology to diversified sectors across Africa.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {DIVERSIFIED_INDUSTRIES.map((ind) => (
              <div
                key={ind.id}
                className="p-5 rounded-2xl bg-[#0a0a0a] border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs font-bold text-indigo-400 uppercase font-mono mb-1">
                    {ind.name}
                  </div>
                  <div className="text-xs font-semibold text-white mb-2 font-mono">
                    {ind.tagline}
                  </div>
                  <p className="text-xs text-white/60 leading-relaxed mb-3">
                    {ind.description}
                  </p>
                  <div className="space-y-1">
                    <div className="text-[9px] font-mono uppercase text-white/40 font-semibold">
                      Focus Areas:
                    </div>
                    {ind.focusAreas.slice(0, 3).map((fa, i) => (
                      <div key={i} className="text-[11px] text-white/70 flex items-center space-x-1.5">
                        <span className="text-indigo-400">•</span>
                        <span className="truncate">{fa}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5 text-[10px] text-white/40 font-mono italic">
                  Method: {ind.methodology}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
