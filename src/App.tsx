import React, { useState, useEffect, useMemo, useCallback, useRef, lazy, Suspense } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { NavTab, RoleLens, EngagementBlueprint } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { NavContext } from './components/ui/primitives';
import { routePath, tabFromHash, tabFromPath } from './data/navigation';
import { applyHead } from './lib/seo';
import { glideToTop, scrollToTop as jumpToTop, startSmoothScroll } from './lib/smoothScroll';
import { ArrowUp } from 'lucide-react';

// Every page loads on demand (prerendered HTML covers first paint), so the shared bundle stays small
const OverviewPage = lazy(() => import('./components/OverviewPage').then(m => ({ default: m.OverviewPage })));
const IntegratedModelSection = lazy(() => import('./components/IntegratedModelSection').then(m => ({ default: m.IntegratedModelSection })));
const LifeSciencesEcosystem = lazy(() => import('./components/LifeSciencesEcosystem').then(m => ({ default: m.LifeSciencesEcosystem })));
const AfricaIntelligenceMap = lazy(() => import('./components/AfricaIntelligenceMap').then(m => ({ default: m.AfricaIntelligenceMap })));
const BusinessConsultingPillar = lazy(() => import('./components/BusinessConsultingPillar').then(m => ({ default: m.BusinessConsultingPillar })));
const MarketResearchWorkspace = lazy(() => import('./components/MarketResearchWorkspace').then(m => ({ default: m.MarketResearchWorkspace })));
const AITrainingSimulation = lazy(() => import('./components/AITrainingSimulation').then(m => ({ default: m.AITrainingSimulation })));
const AIEnterpriseSolutionsView = lazy(() => import('./components/AIEnterpriseSolutionsView').then(m => ({ default: m.AIEnterpriseSolutionsView })));
const MindCraftMethod = lazy(() => import('./components/MindCraftMethod').then(m => ({ default: m.MindCraftMethod })));
const EngagementBuilder = lazy(() => import('./components/EngagementBuilder').then(m => ({ default: m.EngagementBuilder })));
const LocalizationView = lazy(() => import('./components/LocalizationView').then(m => ({ default: m.LocalizationView })));
const InsightsView = lazy(() => import('./components/InsightsView').then(m => ({ default: m.InsightsView })));
const AboutLeadership = lazy(() => import('./components/AboutLeadership').then(m => ({ default: m.AboutLeadership })));
const EngagementIntakeModal = lazy(() => import('./components/EngagementIntakeModal').then(m => ({ default: m.EngagementIntakeModal })));
const IndustryIntelligenceExplorer = lazy(() => import('./components/IndustryIntelligenceExplorer').then(m => ({ default: m.IndustryIntelligenceExplorer })));
const AfricaIntelligenceExplorer = lazy(() => import('./components/AfricaIntelligenceExplorer').then(m => ({ default: m.AfricaIntelligenceExplorer })));
const ProblemCrossSectionView = lazy(() => import('./components/ProblemCrossSectionView').then(m => ({ default: m.ProblemCrossSectionView })));
const MarketEntryFrameworkView = lazy(() => import('./components/MarketEntryFrameworkView').then(m => ({ default: m.MarketEntryFrameworkView })));
const Matrix3DView = lazy(() => import('./components/Matrix3DView').then(m => ({ default: m.Matrix3DView })));
const MindCraftUniverseOrbital = lazy(() => import('./components/MindCraftUniverseOrbital').then(m => ({ default: m.MindCraftUniverseOrbital })));
const GlobalCommandSearchModal = lazy(() => import('./components/GlobalCommandSearchModal').then(m => ({ default: m.GlobalCommandSearchModal })));

/** `initialTab` comes from the URL in the browser and from the route being prerendered at build time. */
export default function App({ initialTab = 'home' }: { initialTab?: NavTab }) {
  const [activeTab, setActiveTab] = useState<NavTab>(initialTab);
  const [activeRole, setActiveRole] = useState<RoleLens>('all');
  const [isIntakeOpen, setIsIntakeOpen] = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [activeBlueprint, setActiveBlueprint] = useState<EngagementBlueprint | null>(null);
  const [showBackToTop, setShowBackToTop] = useState<boolean>(false);

  // Cross-component selected entities (an industry id or display name)
  const [preselectedIndustry, setPreselectedIndustry] = useState<string | undefined>(undefined);

  /** The single navigation path for menus, contextual links, search and direct URLs. */
  const navigate = useCallback((tab: NavTab) => {
    setActiveTab(tab);
    const path = routePath(tab);
    if (window.location.pathname !== path || window.location.hash) window.history.pushState(null, '', path);
  }, []);

  // Browser history and legacy `#tab` links resolve through the same route validation.
  useEffect(() => {
    const syncFromLocation = () => {
      const legacy = tabFromHash(window.location.hash);
      if (legacy) {
        window.history.replaceState(null, '', routePath(legacy));
        setActiveTab(legacy);
      } else {
        setActiveTab(tabFromPath(window.location.pathname) ?? 'home');
      }
    };
    window.addEventListener('hashchange', syncFromLocation);
    window.addEventListener('popstate', syncFromLocation);
    return () => {
      window.removeEventListener('hashchange', syncFromLocation);
      window.removeEventListener('popstate', syncFromLocation);
    };
  }, []);

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

  // Smooth wheel scrolling for the whole site (skipped for reduced motion)
  useEffect(() => startSmoothScroll(), []);

  // Every navigation starts at the top of the new view, with the title and canonical for that route.
  // After the first render, focus moves to the new page so screen readers announce it.
  const mainRef = useRef<HTMLElement>(null);
  const shownTab = useRef(activeTab);
  useEffect(() => {
    applyHead(activeTab);
    if (shownTab.current !== activeTab) mainRef.current?.focus({ preventScroll: true });
    shownTab.current = activeTab;
    if (activeTab !== 'senior-expertise') {
      jumpToTop();
      return;
    }
    // The About view is lazy-loaded: wait for the anchor to exist, then scroll to it
    let tries = 0;
    const id = window.setInterval(() => {
      const el = document.getElementById('senior-expertise');
      if (el || ++tries > 40) {
        window.clearInterval(id);
        if (el) el.scrollIntoView({ block: 'start' });
        else jumpToTop();
      }
    }, 50);
    return () => window.clearInterval(id);
  }, [activeTab]);

  // Nav targets that share content with an existing view
  const VIEW_ALIASES: Partial<Record<NavTab, NavTab>> = {
    method: 'operating-model',
    'maturity-model': 'consulting',
    'responsible-ai': 'ai-solutions',
    scenarios: 'question-to-outcome',
    'senior-expertise': 'about',
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

  const skipToContent = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    document.getElementById('main-content')?.focus();
  };

  const navContext = useMemo(() => ({ activeTab, navigate }), [activeTab, navigate]);

  // Role perspective descriptions (documented capabilities only; see the corporate profile s.4-5)
  const roleSummaries: { [key in RoleLens]: { title: string; desc: string; focus: string } } = {
    all: {
      title: 'Full overview',
      desc: 'Business consulting, market research, AI training and AI enterprise solutions together.',
      focus: 'The integrated model'
    },
    executive: {
      title: 'Executive lens',
      desc: 'Growth and market-entry strategy, transformation roadmaps and responsible AI adoption.',
      focus: 'Strategy and governance'
    },
    lifesciences: {
      title: 'Life Sciences & healthcare lens',
      desc: 'Pharmaceuticals, medical devices, diagnostics, equipment, surgical consumables and hospitals.',
      focus: 'Sector depth'
    },
    technology: {
      title: 'Technology & AI lens',
      desc: 'AI strategy and solution architecture, analytics, automation and integration with existing systems.',
      focus: 'Applied AI'
    },
    commercial: {
      title: 'Commercial & market access lens',
      desc: 'Market access, competitive intelligence, pricing analysis and go-to-market planning.',
      focus: 'Commercial effectiveness'
    },
    regulatory: {
      title: 'Regulatory & quality lens',
      desc: 'Regulatory landscape mapping, compliance strategy and quality management systems support.',
      focus: 'Regulatory readiness'
    },
    africa: {
      title: 'African markets lens',
      desc: 'Multi-country market entry, regulatory mapping and research across East, West, Southern and North Africa.',
      focus: 'African market knowledge'
    },
    learning: {
      title: 'People & learning lens',
      desc: 'Executive AI briefings, function-specific training and train-the-trainer programmes.',
      focus: 'Capability building'
    },
    investor: {
      title: 'Investor lens',
      desc: 'Market sizing, competitive intelligence and commercial diligence research.',
      focus: 'Evidence for investment decisions'
    },
    hospital: {
      title: 'Hospitals & providers lens',
      desc: 'Operational strategy, digital transformation, patient experience research and workforce capacity.',
      focus: 'Provider operations'
    }
  };

  return (
    <NavContext.Provider value={navContext}>
    <div className="min-h-screen bg-[#050505] text-[#e0e0e0] font-sans">
      <a className="mc-skip-link" href="#main-content" onClick={skipToContent}>Skip to content</a>
      
      {/* Global Navigation Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={navigate}
        roleLens={activeRole}
        setRoleLens={setActiveRole}
        onOpenIntake={handleOpenIntakeGeneric}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Main View Router */}
      <main ref={mainRef} id="main-content" tabIndex={-1} className="pt-16 lg:pt-20">
        <Suspense fallback={<div className="min-h-[60dvh]" aria-busy="true" />}>
        {/* Role Lens Active Notice Banner (if filtered) */}
      {activeRole !== 'all' && (
        <div className="bg-[#0a0a0a] border-b border-indigo-500/20 py-2.5">
          <div className="mc-container flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
            <div className="flex items-center space-x-2">
              <span aria-hidden="true" className="w-2 h-2 rounded-full bg-indigo-400" />
              <span className="text-xs font-semibold text-indigo-300">
                {roleSummaries[activeRole].title}:
              </span>
              <span className="text-white/70 text-xs">{roleSummaries[activeRole].desc}</span>
            </div>
            <button
              onClick={() => setActiveRole('all')}
              className="text-indigo-400 hover:text-white text-xs border border-indigo-500/30 px-3 min-h-9 rounded bg-indigo-950/40 hover:bg-indigo-900/60 transition-colors self-start sm:self-auto font-medium"
            >
              Reset to full overview
            </button>
          </div>
        </div>
      )}

        {/* Pages cross-fade so a route change reads as one continuous move */}
        <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={view}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.22, ease: [0.16, 1, 0.3, 1] } }}
          exit={{ opacity: 0, transition: { duration: 0.12 } }}
        >
        {/* 1. Overview / Home */}
        {(view === 'home' || view === 'overview') && (
          <OverviewPage
            navigate={navigate}
            onOpenIntake={handleOpenIntakeGeneric}
            roleLens={activeRole}
            onSelectIndustry={(id) => setPreselectedIndustry(id)}
          />
        )}

        {/* 2. 24 Industry Verticals Explorer */}
        {view === 'industries' && (
          <div>
            <IndustryIntelligenceExplorer
              headingLevel={1}
              initialIndustryId={preselectedIndustry}
              onNavigate={navigate}
              onSelectIndustryForEngagement={(ind) => setPreselectedIndustry(ind)}
            />
          </div>
        )}

        {/* 3. Africa Regional Clusters & 45 Jurisdictions Hub */}
        {view === 'africa-explorer' && (
          <div>
            <AfricaIntelligenceExplorer
              onNavigate={navigate}
            />
          </div>
        )}

        {/* 4. Problem-Led Cross-Sections ("What Are You Trying to Solve?") */}
        {(view === 'question-to-outcome') && (
          <div>
            <ProblemCrossSectionView
              onNavigate={navigate}
            />
          </div>
        )}

        {/* 5. 9-Step Signature Market Entry Framework */}
        {view === 'market-entry' && (
          <div>
            <MarketEntryFrameworkView
              onNavigate={navigate}
            />
          </div>
        )}

        {/* 6. 3D Matrix Configuration Engine (24 Ind × 5 Geo × 4 Cap) */}
        {view === 'matrix-3d' && (
          <div>
            <Matrix3DView
              headingLevel={1}
              onNavigate={navigate}
            />
          </div>
        )}

        {/* 7. MindCraft Universe Orbital Graph */}
        {view === 'capability-graph' && (
          <div>
            <MindCraftUniverseOrbital
              headingLevel={1}
              onNavigate={navigate}
              onSelectIndustry={(ind) => setPreselectedIndustry(ind)}
            />
          </div>
        )}

        {/* 8. Core Service Pillars */}
        {view === 'consulting' && (
          <div>
            <BusinessConsultingPillar 
              onOpenIntake={handleOpenIntakeGeneric}
              setActiveTab={navigate}
            />
          </div>
        )}

        {view === 'market-research' && (
          <div>
            <MarketResearchWorkspace 
              onOpenIntake={handleOpenIntakeGeneric}
              setActiveTab={navigate}
            />
          </div>
        )}

        {view === 'ai-training' && (
          <div>
            <AITrainingSimulation 
              onOpenIntake={handleOpenIntakeGeneric}
              setActiveTab={navigate}
            />
          </div>
        )}

        {view === 'ai-solutions' && (
          <div>
            <AIEnterpriseSolutionsView 
              onOpenIntake={handleOpenIntakeGeneric}
              setActiveTab={navigate}
            />
          </div>
        )}

        {/* 9. Life Sciences Heritage Hub */}
        {view === 'life-sciences' && (
          <div>
            <LifeSciencesEcosystem 
              onOpenIntake={handleOpenIntakeGeneric}
              setActiveTab={navigate}
              roleLens={activeRole}
            />
          </div>
        )}

        {/* 10. Africa Intelligence Map */}
        {view === 'africa-intelligence' && (
          <div>
            <AfricaIntelligenceMap 
              onOpenIntake={handleOpenIntakeGeneric}
              setActiveTab={navigate}
            />
          </div>
        )}

        {/* 11. Operating Model & MindCraft Method */}
        {view === 'operating-model' && (
          <div>
            <IntegratedModelSection 
              setActiveTab={navigate}
              onOpenIntake={handleOpenIntakeGeneric}
            />
            <MindCraftMethod onOpenIntake={handleOpenIntakeGeneric} />
            <MindCraftUniverseOrbital onNavigate={navigate} />
          </div>
        )}

        {/* 12. Engagement Builder */}
        {(view === 'engagement-builder' || view === 'builder') && (
          <div>
            <EngagementBuilder onOpenIntakeWithBlueprint={handleOpenIntakeWithBlueprint} />
          </div>
        )}

        {/* Localization capability */}
        {view === 'localization' && (
          <div>
            <LocalizationView onNavigate={navigate} onOpenIntake={handleOpenIntakeGeneric} />
          </div>
        )}

        {/* Insights */}
        {view === 'insights' && (
          <div>
            <InsightsView onNavigate={navigate} onOpenIntake={handleOpenIntakeGeneric} />
          </div>
        )}

        {/* 13. About / Leadership */}
        {view === 'about' && (
          <div>
            <AboutLeadership 
              onOpenIntake={handleOpenIntakeGeneric}
              setActiveTab={navigate}
            />
          </div>
        )}
        </motion.div>
        </AnimatePresence>
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
        onNavigate={navigate}
        onSelectIndustry={(indId) => setPreselectedIndustry(indId)}
      />
      </Suspense>

      {/* Global Footer */}
      <Footer 
        setActiveTab={navigate}
        onOpenIntake={handleOpenIntakeGeneric}
      />

      {/* Floating Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={glideToTop}
          id="back-to-top-btn"
          className="fixed right-4 sm:right-6 bottom-[max(1rem,env(safe-area-inset-bottom))] sm:bottom-6 z-40 w-12 h-12 flex items-center justify-center rounded-full bg-[#0a0a0a]/90 backdrop-blur border border-white/10 hover:border-white/25 text-white/75 hover:text-white active:scale-95 shadow-[0_8px_24px_-8px_rgba(0,0,0,0.8)] transition-[border-color,color,transform] duration-150"
          aria-label="Back to Top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

    </div>
    </NavContext.Provider>
  );
}
