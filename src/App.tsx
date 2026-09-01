import React, { useState, useEffect } from 'react';
import { NavTab, RoleLens, EngagementBlueprint } from './types';
import { Header } from './components/Header';
import { HeroOperatingSystem } from './components/HeroOperatingSystem';
import { IntegratedModelSection } from './components/IntegratedModelSection';
import { LifeSciencesEcosystem } from './components/LifeSciencesEcosystem';
import { AfricaIntelligenceMap } from './components/AfricaIntelligenceMap';
import { BusinessConsultingPillar } from './components/BusinessConsultingPillar';
import { MarketResearchWorkspace } from './components/MarketResearchWorkspace';
import { AITrainingSimulation } from './components/AITrainingSimulation';
import { AIEnterpriseSolutionsView } from './components/AIEnterpriseSolutionsView';
import { MindCraftMethod } from './components/MindCraftMethod';
import { QuestionToOutcomeEngine } from './components/QuestionToOutcomeEngine';
import { EngagementBuilder } from './components/EngagementBuilder';
import { CapabilityGraphView } from './components/CapabilityGraphView';
import { AboutLeadership } from './components/AboutLeadership';
import { EngagementIntakeModal } from './components/EngagementIntakeModal';
import { Footer } from './components/Footer';
import { ArrowUp, Sparkles, ShieldCheck, Compass, BarChart3, GraduationCap, Cpu, Dna, Globe2 } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<NavTab>('overview');
  const [activeRole, setActiveRole] = useState<RoleLens>('all');
  const [isIntakeOpen, setIsIntakeOpen] = useState<boolean>(false);
  const [activeBlueprint, setActiveBlueprint] = useState<EngagementBlueprint | null>(null);
  const [showBackToTop, setShowBackToTop] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenIntakeWithBlueprint = (blueprint: EngagementBlueprint) => {
    setActiveBlueprint(blueprint);
    setIsIntakeOpen(true);
  };

  const handleOpenIntakeGeneric = () => {
    setActiveBlueprint(null);
    setIsIntakeOpen(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Role perspective banner descriptions
  const roleSummaries: { [key in RoleLens]: { title: string; desc: string; focus: string } } = {
    all: {
      title: 'Full Executive Overview',
      desc: 'Showing integrated strategy, primary intelligence, AI training & production systems.',
      focus: 'End-to-End Multidisciplinary Value Chain'
    },
    executive: {
      title: 'C-Suite & Managing Director Lens',
      desc: 'Highlighting market entry speed, capital allocation ROI, enterprise risk & governed AI adoption.',
      focus: 'Corporate Strategy & Governance'
    },
    lifesciences: {
      title: 'Life Sciences & Healthcare Lens',
      desc: 'Highlighting pharma, medical devices, diagnostics, hospitals & regulatory intelligence.',
      focus: 'Therapeutic Strategy & Clinical Impact'
    },
    technology: {
      title: 'CIO, CTO & AI Innovation Lens',
      desc: 'Highlighting private tenant-isolated LLM gateways, vector RAG knowledge vaults & system integration.',
      focus: 'Production AI Software Architecture'
    },
    commercial: {
      title: 'Commercial & Market Access Lens',
      desc: 'Highlighting KOL networks, formulary inclusion, pricing elasticity & field-force AI copilots.',
      focus: 'Revenue Acceleration & Territory Intelligence'
    },
    regulatory: {
      title: 'Regulatory Affairs & Pharmacovigilance Lens',
      desc: 'Highlighting PPB/NAFDAC/SAHPRA filings, automated adverse event screening & compliance safety.',
      focus: 'Pan-African Regulatory Compliance'
    },
    africa: {
      title: 'Pan-African Market Lead Lens',
      desc: 'Highlighting 12+ national dossiers, local associate networks & regional harmonization.',
      focus: 'Pan-Continental Operational Scale'
    },
    learning: {
      title: 'Chief People & Talent Officer Lens',
      desc: 'Highlighting applied AI curriculum, cohort simulator & internal AI champion certification.',
      focus: 'Human Enablement & Change Management'
    },
    investor: {
      title: 'Private Equity & Healthcare Investor Lens',
      desc: 'Highlighting market sizing, competitive moats, asset due diligence & operational scalability.',
      focus: 'Commercial Diligence & Valuation Moats'
    },
    hospital: {
      title: 'Hospital & Healthcare Provider Lens',
      desc: 'Highlighting clinical pathway adherence, insurance claims pre-check & equipment uptime.',
      focus: 'Clinical Quality & Revenue Cycle Management'
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#e0e0e0] font-sans selection:bg-indigo-500 selection:text-white">
      
      {/* Global Navigation Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        activeRole={activeRole}
        setActiveRole={setActiveRole}
        onOpenIntake={handleOpenIntakeGeneric}
      />

      {/* Role Lens Active Notice Banner (if filtered) */}
      {activeRole !== 'all' && (
        <div className="bg-[#0a0a0a] border-b border-indigo-500/20 px-4 py-2.5">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
              <span className="font-mono text-[11px] tracking-wider uppercase font-bold text-indigo-300">
                {roleSummaries[activeRole].title}:
              </span>
              <span className="text-white/70 text-xs">{roleSummaries[activeRole].desc}</span>
            </div>
            <button
              onClick={() => setActiveRole('all')}
              className="text-indigo-400 hover:text-white font-mono text-[10px] tracking-wider uppercase border border-indigo-500/30 px-2 py-0.5 rounded bg-indigo-950/40 hover:bg-indigo-900/60 transition-colors self-start sm:self-auto"
            >
              Reset to Full Overview
            </button>
          </div>
        </div>
      )}

      {/* Main View Router */}
      <main>
        {activeTab === 'overview' && (
          <div>
            <HeroOperatingSystem 
              onOpenIntake={handleOpenIntakeGeneric}
              setActiveTab={setActiveTab}
            />
            <IntegratedModelSection 
              setActiveTab={setActiveTab}
              onOpenIntake={handleOpenIntakeGeneric}
            />
            <LifeSciencesEcosystem 
              onOpenIntake={handleOpenIntakeGeneric}
              setActiveTab={setActiveTab}
            />
            <AfricaIntelligenceMap 
              onOpenIntake={handleOpenIntakeGeneric}
              setActiveTab={setActiveTab}
            />
            <MindCraftMethod 
              onOpenIntake={handleOpenIntakeGeneric}
            />
            <QuestionToOutcomeEngine 
              onOpenIntake={handleOpenIntakeGeneric}
              setActiveTab={setActiveTab}
            />
            <EngagementBuilder 
              onOpenIntakeWithBlueprint={handleOpenIntakeWithBlueprint}
            />
            <CapabilityGraphView 
              setActiveTab={setActiveTab}
              onOpenIntake={handleOpenIntakeGeneric}
            />
            <AboutLeadership 
              onOpenIntake={handleOpenIntakeGeneric}
              setActiveTab={setActiveTab}
            />
          </div>
        )}

        {activeTab === 'consulting' && (
          <div>
            <BusinessConsultingPillar 
              onOpenIntake={handleOpenIntakeGeneric}
              setActiveTab={setActiveTab}
            />
            <MindCraftMethod onOpenIntake={handleOpenIntakeGeneric} />
            <EngagementBuilder onOpenIntakeWithBlueprint={handleOpenIntakeWithBlueprint} />
          </div>
        )}

        {activeTab === 'market-research' && (
          <div>
            <MarketResearchWorkspace 
              onOpenIntake={handleOpenIntakeGeneric}
              setActiveTab={setActiveTab}
            />
            <AfricaIntelligenceMap 
              onOpenIntake={handleOpenIntakeGeneric}
              setActiveTab={setActiveTab}
            />
            <EngagementBuilder onOpenIntakeWithBlueprint={handleOpenIntakeWithBlueprint} />
          </div>
        )}

        {activeTab === 'ai-training' && (
          <div>
            <AITrainingSimulation 
              onOpenIntake={handleOpenIntakeGeneric}
              setActiveTab={setActiveTab}
            />
            <EngagementBuilder onOpenIntakeWithBlueprint={handleOpenIntakeWithBlueprint} />
          </div>
        )}

        {activeTab === 'ai-solutions' && (
          <div>
            <AIEnterpriseSolutionsView 
              onOpenIntake={handleOpenIntakeGeneric}
              setActiveTab={setActiveTab}
            />
            <CapabilityGraphView 
              setActiveTab={setActiveTab}
              onOpenIntake={handleOpenIntakeGeneric}
            />
            <EngagementBuilder onOpenIntakeWithBlueprint={handleOpenIntakeWithBlueprint} />
          </div>
        )}

        {activeTab === 'life-sciences' && (
          <div>
            <LifeSciencesEcosystem 
              onOpenIntake={handleOpenIntakeGeneric}
              setActiveTab={setActiveTab}
            />
            <MarketResearchWorkspace 
              onOpenIntake={handleOpenIntakeGeneric}
              setActiveTab={setActiveTab}
            />
            <EngagementBuilder onOpenIntakeWithBlueprint={handleOpenIntakeWithBlueprint} />
          </div>
        )}

        {activeTab === 'africa-intelligence' && (
          <div>
            <AfricaIntelligenceMap 
              onOpenIntake={handleOpenIntakeGeneric}
              setActiveTab={setActiveTab}
            />
            <LifeSciencesEcosystem 
              onOpenIntake={handleOpenIntakeGeneric}
              setActiveTab={setActiveTab}
            />
            <EngagementBuilder onOpenIntakeWithBlueprint={handleOpenIntakeWithBlueprint} />
          </div>
        )}

        {activeTab === 'method' && (
          <div>
            <MindCraftMethod onOpenIntake={handleOpenIntakeGeneric} />
            <QuestionToOutcomeEngine 
              onOpenIntake={handleOpenIntakeGeneric}
              setActiveTab={setActiveTab}
            />
            <EngagementBuilder onOpenIntakeWithBlueprint={handleOpenIntakeWithBlueprint} />
          </div>
        )}

        {activeTab === 'scenarios' && (
          <div>
            <QuestionToOutcomeEngine 
              onOpenIntake={handleOpenIntakeGeneric}
              setActiveTab={setActiveTab}
            />
            <CapabilityGraphView 
              setActiveTab={setActiveTab}
              onOpenIntake={handleOpenIntakeGeneric}
            />
            <EngagementBuilder onOpenIntakeWithBlueprint={handleOpenIntakeWithBlueprint} />
          </div>
        )}

        {activeTab === 'builder' && (
          <div>
            <EngagementBuilder onOpenIntakeWithBlueprint={handleOpenIntakeWithBlueprint} />
            <IntegratedModelSection 
              setActiveTab={setActiveTab}
              onOpenIntake={handleOpenIntakeGeneric}
            />
          </div>
        )}

        {activeTab === 'capability-graph' && (
          <div>
            <CapabilityGraphView 
              setActiveTab={setActiveTab}
              onOpenIntake={handleOpenIntakeGeneric}
            />
            <QuestionToOutcomeEngine 
              onOpenIntake={handleOpenIntakeGeneric}
              setActiveTab={setActiveTab}
            />
            <EngagementBuilder onOpenIntakeWithBlueprint={handleOpenIntakeWithBlueprint} />
          </div>
        )}

        {activeTab === 'about' && (
          <div>
            <AboutLeadership 
              onOpenIntake={handleOpenIntakeGeneric}
              setActiveTab={setActiveTab}
            />
            <AfricaIntelligenceMap 
              onOpenIntake={handleOpenIntakeGeneric}
              setActiveTab={setActiveTab}
            />
          </div>
        )}
      </main>

      {/* Global Interactive Intake Wizard Modal */}
      <EngagementIntakeModal
        isOpen={isIntakeOpen}
        onClose={() => setIsIntakeOpen(false)}
        initialBlueprint={activeBlueprint}
      />

      {/* Global Footer */}
      <Footer 
        setActiveTab={setActiveTab}
        onOpenIntake={handleOpenIntakeGeneric}
      />

      {/* Floating Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          id="back-to-top-btn"
          className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-teal-600 hover:bg-teal-500 text-white shadow-xl shadow-teal-950 transition-all animate-in fade-in zoom-in-75 duration-200"
          aria-label="Back to Top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

    </div>
  );
}
