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

// New Advanced Bento Components
import { IndustryIntelligenceExplorer } from './components/IndustryIntelligenceExplorer';
import { AfricaIntelligenceExplorer } from './components/AfricaIntelligenceExplorer';
import { ProblemCrossSectionView } from './components/ProblemCrossSectionView';
import { MarketEntryFrameworkView } from './components/MarketEntryFrameworkView';
import { Matrix3DView } from './components/Matrix3DView';
import { MindCraftUniverseOrbital } from './components/MindCraftUniverseOrbital';
import { GlobalCommandSearchModal } from './components/GlobalCommandSearchModal';

import { ArrowUp } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<NavTab>('home');
  const [activeRole, setActiveRole] = useState<RoleLens>('all');
  const [isIntakeOpen, setIsIntakeOpen] = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [activeBlueprint, setActiveBlueprint] = useState<EngagementBlueprint | null>(null);
  const [showBackToTop, setShowBackToTop] = useState<boolean>(false);
  
  // Cross-component selected entities
  const [preselectedIndustry, setPreselectedIndustry] = useState<string | undefined>(undefined);

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

  // Global keydown listener for Cmd+K / Ctrl+K
  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown);
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

  // Role perspective descriptions
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
      desc: 'Highlighting 45+ national dossiers, local associate networks & regional harmonization.',
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
        roleLens={activeRole}
        setRoleLens={setActiveRole}
        onOpenIntake={handleOpenIntakeGeneric}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Role Lens Active Notice Banner (if filtered) */}
      {activeRole !== 'all' && (
        <div className="bg-[#0a0a0a] border-b border-indigo-500/20 px-4 py-2.5 mt-16">
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
      <main className="pt-16">
        {/* 1. Overview / Home */}
        {(activeTab === 'home' || activeTab === 'overview') && (
          <div>
            <HeroOperatingSystem 
              onOpenIntake={handleOpenIntakeGeneric}
              setActiveTab={setActiveTab}
              roleLens={activeRole}
            />
            <IntegratedModelSection 
              setActiveTab={setActiveTab}
              onOpenIntake={handleOpenIntakeGeneric}
            />
            <IndustryIntelligenceExplorer
              onNavigate={setActiveTab}
              onSelectIndustryForEngagement={(ind) => setPreselectedIndustry(ind)}
            />
            <AfricaIntelligenceExplorer
              onNavigate={setActiveTab}
            />
            <ProblemCrossSectionView
              onNavigate={setActiveTab}
            />
            <LifeSciencesEcosystem 
              onOpenIntake={handleOpenIntakeGeneric}
              setActiveTab={setActiveTab}
              roleLens={activeRole}
            />
            <EngagementBuilder 
              onOpenIntakeWithBlueprint={handleOpenIntakeWithBlueprint}
            />
            <AboutLeadership 
              onOpenIntake={handleOpenIntakeGeneric}
              setActiveTab={setActiveTab}
            />
          </div>
        )}

        {/* 2. 24 Industry Verticals Explorer */}
        {activeTab === 'industries' && (
          <div>
            <IndustryIntelligenceExplorer
              onNavigate={setActiveTab}
              onSelectIndustryForEngagement={(ind) => setPreselectedIndustry(ind)}
            />
          </div>
        )}

        {/* 3. Africa Regional Clusters & 45 Jurisdictions Hub */}
        {activeTab === 'africa-explorer' && (
          <div>
            <AfricaIntelligenceExplorer
              onNavigate={setActiveTab}
            />
          </div>
        )}

        {/* 4. Problem-Led Cross-Sections ("What Are You Trying to Solve?") */}
        {(activeTab === 'question-to-outcome' || activeTab === 'problem-cross-sections') && (
          <div>
            <ProblemCrossSectionView
              onNavigate={setActiveTab}
            />
          </div>
        )}

        {/* 5. 9-Step Signature Market Entry Framework */}
        {activeTab === 'market-entry' && (
          <div>
            <MarketEntryFrameworkView
              onNavigate={setActiveTab}
            />
          </div>
        )}

        {/* 6. 3D Matrix Configuration Engine (24 Ind × 5 Geo × 4 Cap) */}
        {activeTab === 'matrix-3d' && (
          <div>
            <Matrix3DView
              onNavigate={setActiveTab}
            />
          </div>
        )}

        {/* 7. MindCraft Universe Orbital Graph */}
        {activeTab === 'capability-graph' && (
          <div>
            <MindCraftUniverseOrbital
              onNavigate={setActiveTab}
              onSelectIndustry={(ind) => setPreselectedIndustry(ind)}
            />
          </div>
        )}

        {/* 8. Core Service Pillars */}
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
            <EngagementBuilder onOpenIntakeWithBlueprint={handleOpenIntakeWithBlueprint} />
          </div>
        )}

        {/* 9. Life Sciences Heritage Hub */}
        {activeTab === 'life-sciences' && (
          <div>
            <LifeSciencesEcosystem 
              onOpenIntake={handleOpenIntakeGeneric}
              setActiveTab={setActiveTab}
              roleLens={activeRole}
            />
            <IndustryIntelligenceExplorer
              onNavigate={setActiveTab}
            />
            <EngagementBuilder onOpenIntakeWithBlueprint={handleOpenIntakeWithBlueprint} />
          </div>
        )}

        {/* 10. Africa Intelligence Map */}
        {activeTab === 'africa-intelligence' && (
          <div>
            <AfricaIntelligenceMap 
              onOpenIntake={handleOpenIntakeGeneric}
              setActiveTab={setActiveTab}
            />
            <AfricaIntelligenceExplorer
              onNavigate={setActiveTab}
            />
            <EngagementBuilder onOpenIntakeWithBlueprint={handleOpenIntakeWithBlueprint} />
          </div>
        )}

        {/* 11. Operating Model & MindCraft Method */}
        {activeTab === 'operating-model' && (
          <div>
            <IntegratedModelSection 
              setActiveTab={setActiveTab}
              onOpenIntake={handleOpenIntakeGeneric}
            />
            <MindCraftMethod onOpenIntake={handleOpenIntakeGeneric} />
            <MindCraftUniverseOrbital onNavigate={setActiveTab} />
          </div>
        )}

        {/* 12. Engagement Builder */}
        {(activeTab === 'engagement-builder' || activeTab === 'builder') && (
          <div>
            <EngagementBuilder onOpenIntakeWithBlueprint={handleOpenIntakeWithBlueprint} />
          </div>
        )}

        {/* 13. About / Leadership */}
        {activeTab === 'about' && (
          <div>
            <AboutLeadership 
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

      {/* Global Command Search Modal (Cmd+K) */}
      <GlobalCommandSearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onNavigate={setActiveTab}
        onSelectIndustry={(indId) => setPreselectedIndustry(indId)}
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
          className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white shadow-xl shadow-indigo-950 transition-all animate-in fade-in zoom-in-75 duration-200"
          aria-label="Back to Top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

    </div>
  );
}
