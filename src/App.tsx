import React, { useState, useEffect, lazy, Suspense } from 'react';
import { NavTab, RoleLens, EngagementBlueprint } from './types';
import { Header } from './components/Header';
import { HeroOperatingSystem } from './components/HeroOperatingSystem';
import { Footer } from './components/Footer';
import { OperatingChainSection, PathwaysSection, LifeSciencesBand, WhyMindCraftSection } from './components/LandingSections';

// New Advanced Bento Components

import { ArrowUp } from 'lucide-react';

// Inner pages load on demand so the landing page ships a much smaller bundle
const IntegratedModelSection = lazy(() => import('./components/IntegratedModelSection').then(m => ({ default: m.IntegratedModelSection })));
const LifeSciencesEcosystem = lazy(() => import('./components/LifeSciencesEcosystem').then(m => ({ default: m.LifeSciencesEcosystem })));
const AfricaIntelligenceMap = lazy(() => import('./components/AfricaIntelligenceMap').then(m => ({ default: m.AfricaIntelligenceMap })));
const BusinessConsultingPillar = lazy(() => import('./components/BusinessConsultingPillar').then(m => ({ default: m.BusinessConsultingPillar })));
const MarketResearchWorkspace = lazy(() => import('./components/MarketResearchWorkspace').then(m => ({ default: m.MarketResearchWorkspace })));
const AITrainingSimulation = lazy(() => import('./components/AITrainingSimulation').then(m => ({ default: m.AITrainingSimulation })));
const AIEnterpriseSolutionsView = lazy(() => import('./components/AIEnterpriseSolutionsView').then(m => ({ default: m.AIEnterpriseSolutionsView })));
const MindCraftMethod = lazy(() => import('./components/MindCraftMethod').then(m => ({ default: m.MindCraftMethod })));
const EngagementBuilder = lazy(() => import('./components/EngagementBuilder').then(m => ({ default: m.EngagementBuilder })));
const AboutLeadership = lazy(() => import('./components/AboutLeadership').then(m => ({ default: m.AboutLeadership })));
const EngagementIntakeModal = lazy(() => import('./components/EngagementIntakeModal').then(m => ({ default: m.EngagementIntakeModal })));
const IndustryIntelligenceExplorer = lazy(() => import('./components/IndustryIntelligenceExplorer').then(m => ({ default: m.IndustryIntelligenceExplorer })));
const AfricaIntelligenceExplorer = lazy(() => import('./components/AfricaIntelligenceExplorer').then(m => ({ default: m.AfricaIntelligenceExplorer })));
const ProblemCrossSectionView = lazy(() => import('./components/ProblemCrossSectionView').then(m => ({ default: m.ProblemCrossSectionView })));
const MarketEntryFrameworkView = lazy(() => import('./components/MarketEntryFrameworkView').then(m => ({ default: m.MarketEntryFrameworkView })));
const Matrix3DView = lazy(() => import('./components/Matrix3DView').then(m => ({ default: m.Matrix3DView })));
const MindCraftUniverseOrbital = lazy(() => import('./components/MindCraftUniverseOrbital').then(m => ({ default: m.MindCraftUniverseOrbital })));
const GlobalCommandSearchModal = lazy(() => import('./components/GlobalCommandSearchModal').then(m => ({ default: m.GlobalCommandSearchModal })));

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
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Every navigation starts at the top of the new view
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [activeTab]);

  // Nav targets that share content with an existing view
  const VIEW_ALIASES: Partial<Record<NavTab, NavTab>> = {
    method: 'operating-model',
    'maturity-model': 'consulting',
    'responsible-ai': 'ai-solutions',
    scenarios: 'question-to-outcome',
    insights: 'about',
    contact: 'about'
  };
  const view: NavTab = VIEW_ALIASES[activeTab] ?? activeTab;

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

      {/* Main View Router */}
      <main className="pt-16">
        <Suspense fallback={<div className="min-h-[60dvh]" aria-busy="true" />}>
        {/* Role Lens Active Notice Banner (if filtered) */}
      {activeRole !== 'all' && (
        <div className="bg-[#0a0a0a] border-b border-indigo-500/20 py-2.5">
          <div className="mc-container flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
              <span className="font-mono text-[11px] tracking-wider uppercase font-bold text-indigo-300">
                {roleSummaries[activeRole].title}:
              </span>
              <span className="text-white/70 text-xs">{roleSummaries[activeRole].desc}</span>
            </div>
            <button
              onClick={() => setActiveRole('all')}
              className="text-indigo-400 hover:text-white font-mono text-[11px] tracking-wider uppercase border border-indigo-500/30 px-3 min-h-9 rounded bg-indigo-950/40 hover:bg-indigo-900/60 transition-colors self-start sm:self-auto"
            >
              Reset to Full Overview
            </button>
          </div>
        </div>
      )}

        {/* 1. Overview / Home */}
        {(view === 'home' || view === 'overview') && (
          <div>
            <HeroOperatingSystem
              onOpenIntake={handleOpenIntakeGeneric}
              setActiveTab={setActiveTab}
              roleLens={activeRole}
            />
            <OperatingChainSection setActiveTab={setActiveTab} onOpenIntake={handleOpenIntakeGeneric} />
            <PathwaysSection setActiveTab={setActiveTab} onOpenIntake={handleOpenIntakeGeneric} />
            <LifeSciencesBand setActiveTab={setActiveTab} onOpenIntake={handleOpenIntakeGeneric} />
            <WhyMindCraftSection setActiveTab={setActiveTab} onOpenIntake={handleOpenIntakeGeneric} />
          </div>
        )}

        {/* 2. 24 Industry Verticals Explorer */}
        {view === 'industries' && (
          <div>
            <IndustryIntelligenceExplorer
              onNavigate={setActiveTab}
              onSelectIndustryForEngagement={(ind) => setPreselectedIndustry(ind)}
            />
          </div>
        )}

        {/* 3. Africa Regional Clusters & 45 Jurisdictions Hub */}
        {view === 'africa-explorer' && (
          <div>
            <AfricaIntelligenceExplorer
              onNavigate={setActiveTab}
            />
          </div>
        )}

        {/* 4. Problem-Led Cross-Sections ("What Are You Trying to Solve?") */}
        {(view === 'question-to-outcome') && (
          <div>
            <ProblemCrossSectionView
              onNavigate={setActiveTab}
            />
          </div>
        )}

        {/* 5. 9-Step Signature Market Entry Framework */}
        {view === 'market-entry' && (
          <div>
            <MarketEntryFrameworkView
              onNavigate={setActiveTab}
            />
          </div>
        )}

        {/* 6. 3D Matrix Configuration Engine (24 Ind × 5 Geo × 4 Cap) */}
        {view === 'matrix-3d' && (
          <div>
            <Matrix3DView
              onNavigate={setActiveTab}
            />
          </div>
        )}

        {/* 7. MindCraft Universe Orbital Graph */}
        {view === 'capability-graph' && (
          <div>
            <MindCraftUniverseOrbital
              onNavigate={setActiveTab}
              onSelectIndustry={(ind) => setPreselectedIndustry(ind)}
            />
          </div>
        )}

        {/* 8. Core Service Pillars */}
        {view === 'consulting' && (
          <div>
            <BusinessConsultingPillar 
              onOpenIntake={handleOpenIntakeGeneric}
              setActiveTab={setActiveTab}
            />
            <MindCraftMethod onOpenIntake={handleOpenIntakeGeneric} />
            <EngagementBuilder onOpenIntakeWithBlueprint={handleOpenIntakeWithBlueprint} />
          </div>
        )}

        {view === 'market-research' && (
          <div>
            <MarketResearchWorkspace 
              onOpenIntake={handleOpenIntakeGeneric}
              setActiveTab={setActiveTab}
            />
            <EngagementBuilder onOpenIntakeWithBlueprint={handleOpenIntakeWithBlueprint} />
          </div>
        )}

        {view === 'ai-training' && (
          <div>
            <AITrainingSimulation 
              onOpenIntake={handleOpenIntakeGeneric}
              setActiveTab={setActiveTab}
            />
            <EngagementBuilder onOpenIntakeWithBlueprint={handleOpenIntakeWithBlueprint} />
          </div>
        )}

        {view === 'ai-solutions' && (
          <div>
            <AIEnterpriseSolutionsView 
              onOpenIntake={handleOpenIntakeGeneric}
              setActiveTab={setActiveTab}
            />
            <EngagementBuilder onOpenIntakeWithBlueprint={handleOpenIntakeWithBlueprint} />
          </div>
        )}

        {/* 9. Life Sciences Heritage Hub */}
        {view === 'life-sciences' && (
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
        {view === 'africa-intelligence' && (
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
        {view === 'operating-model' && (
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
        {(view === 'engagement-builder' || view === 'builder') && (
          <div>
            <EngagementBuilder onOpenIntakeWithBlueprint={handleOpenIntakeWithBlueprint} />
          </div>
        )}

        {/* 13. About / Leadership */}
        {view === 'about' && (
          <div>
            <AboutLeadership 
              onOpenIntake={handleOpenIntakeGeneric}
              setActiveTab={setActiveTab}
            />
          </div>
        )}
        </Suspense>
      </main>

      <Suspense fallback={null}>
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
      </Suspense>

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
          className="fixed right-4 sm:right-6 bottom-[max(1rem,env(safe-area-inset-bottom))] sm:bottom-6 z-40 w-12 h-12 flex items-center justify-center rounded-full bg-indigo-600 hover:bg-indigo-500 active:scale-95 text-white shadow-xl shadow-indigo-950 transition-[background-color,transform] duration-150"
          aria-label="Back to Top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

    </div>
  );
}
