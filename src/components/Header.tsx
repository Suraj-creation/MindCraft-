import React, { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { NavTab, RoleLens } from '../types';
import {
  Compass,
  BarChart3,
  GraduationCap,
  Cpu,
  Search,
  CheckCircle2,
  ArrowRight,
  Menu,
  X,
  ChevronDown,
  SlidersHorizontal
} from 'lucide-react';

interface HeaderProps {
  activeTab: NavTab;
  setActiveTab: (tab: NavTab) => void;
  roleLens: RoleLens;
  setRoleLens: (role: RoleLens) => void;
  onOpenIntake: () => void;
  onOpenSearch: () => void;
}

interface NavSubItem {
  id: NavTab;
  label: string;
  desc: string;
  icon?: React.ComponentType<{ className?: string }>;
  color?: string;
}

interface NavItem {
  id: NavTab;
  label: string;
  badge?: string;
  dropdown?: NavSubItem[];
}

const EASE = [0.16, 1, 0.3, 1] as const;

const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Overview' },
  {
    id: 'industries',
    label: 'Industries',
    badge: '24 Sectors',
    dropdown: [
      { id: 'industries', label: '24 Industry Verticals Explorer', desc: 'Comprehensive dossiers & key strategic questions across 24 sectors' },
      { id: 'matrix-3d', label: '3D Matrix Configuration', desc: 'Intersect 24 Industries × 5 Geographies × 4 Capabilities' },
      { id: 'life-sciences', label: 'Core Life Sciences Ecosystem', desc: 'Deep heritage across Pharma, Devices, Diagnostics, and Biotech' }
    ]
  },
  {
    id: 'africa-explorer',
    label: 'Africa Hub',
    badge: '4 Regions',
    dropdown: [
      { id: 'africa-explorer', label: '4 Regional Clusters & 45 Jurisdictions', desc: 'East, West, Southern, North Africa intelligence & country dossiers' },
      { id: 'market-entry', label: '9-Step Pan-African Market Entry', desc: 'Signature framework to de-risk and accelerate expansion' },
      { id: 'africa-intelligence', label: 'Interactive Regulatory Map', desc: 'PPB, NAFDAC, SAHPRA and regional harmonization tracker' }
    ]
  },
  {
    id: 'question-to-outcome',
    label: 'Problem-Led',
    badge: '10 Challenges',
    dropdown: [
      { id: 'question-to-outcome', label: 'What Are You Trying to Solve?', desc: '10 Archetypal business challenges with 5-pillar integrated solutions' },
      { id: 'capability-graph', label: 'MindCraft Universe (Orbital)', desc: 'Concentric system topology of capabilities, sectors & geographies' },
      { id: 'engagement-builder', label: 'Engagement Blueprint Builder', desc: 'Instant scoping and timeline generation for executive sign-off' }
    ]
  },
  {
    id: 'consulting',
    label: 'Capabilities',
    dropdown: [
      { id: 'consulting', label: 'Business Consulting', icon: Compass, color: 'text-teal-400', desc: 'Corporate strategy, operating models & diagnostics' },
      { id: 'market-research', label: 'Market Research', icon: BarChart3, color: 'text-sky-400', desc: 'Primary & secondary evidence and intelligence' },
      { id: 'ai-training', label: 'AI Training & Literacy', icon: GraduationCap, color: 'text-amber-400', desc: 'Applied capability transformation & champion cohorts' },
      { id: 'ai-solutions', label: 'AI Enterprise Solutions', icon: Cpu, color: 'text-emerald-400', desc: 'Governed production systems & architecture' }
    ]
  },
  {
    id: 'operating-model',
    label: 'Operating System',
    dropdown: [
      { id: 'operating-model', label: 'The MindCraft Model', desc: 'Four integrated capabilities under one multidisciplinary partner' },
      { id: 'maturity-model', label: 'AI Transformation Maturity', desc: 'Level 0 to Level 5 enterprise readiness ladder' },
      { id: 'engagement-builder', label: 'Custom Engagement Builder', desc: 'Generate customized scoped engagement blueprints' }
    ]
  },
  { id: 'responsible-ai', label: 'Responsible AI' },
  { id: 'about', label: 'About' }
];

const ROLE_LABELS: { [key in RoleLens]: string } = {
  all: 'All Perspectives',
  executive: 'Executive / Board',
  lifesciences: 'Life Sciences Lead',
  technology: 'CIO / Tech Architect',
  commercial: 'Commercial & Sales',
  regulatory: 'Regulatory / PV Lead',
  africa: 'Africa Strategist',
  learning: 'HR & L&D Director',
  investor: 'Private Equity / Investor',
  hospital: 'Hospital / Healthcare Provider'
};

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  roleLens,
  setRoleLens,
  onOpenIntake,
  onOpenSearch
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [lensOpen, setLensOpen] = useState(false);
  const [mobileLensOpen, setMobileLensOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll while the mobile sheet is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  // Escape closes any open menu; outside click closes desktop popovers
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
        setActiveDropdown(null);
        setLensOpen(false);
      }
    };
    const onPointer = (e: PointerEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
        setLensOpen(false);
      }
    };
    window.addEventListener('keydown', onKey);
    window.addEventListener('pointerdown', onPointer);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('pointerdown', onPointer);
    };
  }, []);

  const go = (tab: NavTab) => {
    setActiveTab(tab);
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0 });
  };

  const isItemActive = (item: NavItem) =>
    activeTab === item.id || !!item.dropdown?.some(d => d.id === activeTab);

  return (
    <header
      ref={headerRef}
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,box-shadow] duration-300 border-b border-white/10 ${
        isScrolled || mobileMenuOpen
          ? 'bg-[#050505]/95 backdrop-blur-md shadow-2xl'
          : 'bg-[#050505]/80 backdrop-blur-sm'
      }`}
    >
      <div className="mc-container 2xl:!max-w-[96rem]">
        <div className="flex items-center justify-between h-16 gap-3">

          {/* Logo & Brand Identity */}
          <button
            onClick={() => go('home')}
            className="flex items-center gap-3 group text-left shrink-0 mc-tap"
            id="brand-logo-button"
            aria-label="MindCraft home"
          >
            <div className="w-9 h-9 bg-indigo-600 rounded-lg flex items-center justify-center text-white shadow-[0_0_15px_rgba(99,102,241,0.4)] transition-transform duration-200 group-active:scale-95">
              <span className="font-mono text-sm font-bold">MC</span>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-bold tracking-tight uppercase text-white group-hover:text-indigo-400 transition-colors">
                MINDCRAFT <span className="text-indigo-400">CORE</span>
              </span>
              <span className="hidden sm:flex 2xl:hidden min-[1800px]:flex items-center gap-1.5 text-[11px] text-white/50 font-mono uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Pan-Africa Strategy // Nairobi
              </span>
            </div>
          </button>

          {/* Desktop Navigation (xl and up) */}
          <nav className="hidden 2xl:flex items-center gap-0.5" id="desktop-nav" aria-label="Primary">
            {NAV_ITEMS.map((item) => {
              const hasDropdown = !!item.dropdown;
              const isActive = isItemActive(item);
              const open = activeDropdown === item.id;

              return (
                <div
                  key={item.id}
                  className="relative"
                  onMouseEnter={() => hasDropdown && setActiveDropdown(item.id)}
                  onMouseLeave={() => hasDropdown && setActiveDropdown(null)}
                >
                  <button
                    id={`nav-${item.id}`}
                    aria-haspopup={hasDropdown ? 'menu' : undefined}
                    aria-expanded={hasDropdown ? open : undefined}
                    onClick={() => (hasDropdown ? setActiveDropdown(open ? null : item.id) : go(item.id))}
                    className={`px-2.5 h-10 rounded-lg text-xs font-mono uppercase tracking-wider whitespace-nowrap transition-colors flex items-center gap-1.5 border ${
                      isActive
                        ? 'text-indigo-400 bg-white/5 border-white/10'
                        : 'text-white/60 hover:text-white hover:bg-white/5 border-transparent'
                    }`}
                  >
                    <span>{item.label}</span>
                    
                    {hasDropdown && (
                      <ChevronDown className={`w-3 h-3 text-white/40 transition-transform duration-200 ${open ? 'rotate-180 text-indigo-300' : ''}`} />
                    )}
                  </button>

                  <AnimatePresence>
                    {hasDropdown && open && (
                      <motion.div
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        transition={{ duration: 0.16, ease: EASE }}
                        role="menu"
                        className="absolute top-full left-0 pt-1.5 w-80 z-50"
                      >
                        <div className="rounded-2xl bg-[#0a0a0a] border border-white/10 shadow-2xl p-2 space-y-1">
                          {item.dropdown!.map((sub) => {
                            const Icon = sub.icon;
                            return (
                              <button
                                key={sub.id + sub.label}
                                role="menuitem"
                                onClick={() => go(sub.id)}
                                className={`w-full text-left p-2.5 rounded-xl transition-colors flex items-start gap-3 border ${
                                  activeTab === sub.id
                                    ? 'bg-indigo-950/40 border-indigo-500/40 text-white'
                                    : 'border-transparent hover:border-white/10 hover:bg-white/5 text-white/70 hover:text-white'
                                }`}
                              >
                                {Icon && (
                                  <span className={`p-1.5 rounded-lg bg-white/5 border border-white/10 mt-0.5 ${sub.color}`}>
                                    <Icon className="w-4 h-4" />
                                  </span>
                                )}
                                <span>
                                  <span className="block text-[13px] font-semibold text-white/90">{sub.label}</span>
                                  <span className="block text-xs text-white/50 mt-0.5 leading-snug">{sub.desc}</span>
                                </span>
                              </button>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={onOpenSearch}
              id="global-search-btn"
              className="mc-tap px-3 rounded-xl bg-[#0a0a0a] hover:bg-white/5 text-white/60 hover:text-white border border-white/10 transition-colors flex items-center justify-center gap-1.5 text-xs font-mono"
              aria-label="Search the MindCraft platform"
              title="Search (Ctrl/Cmd+K)"
            >
              <Search className="w-4 h-4 text-white/50" />
              <span className="hidden min-[1800px]:inline text-white/50">SEARCH</span>
              <kbd className="hidden min-[1800px]:inline px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] text-white/50">⌘K</kbd>
            </button>

            {/* Role Lens (desktop) */}
            <div className="relative hidden 2xl:block">
              <button
                id="role-lens-button"
                aria-haspopup="listbox"
                aria-expanded={lensOpen}
                onClick={() => setLensOpen(o => !o)}
                aria-label={`Perspective lens: ${ROLE_LABELS[roleLens]}`}
                className="h-11 min-w-11 px-3 rounded-xl bg-[#0a0a0a] hover:bg-white/5 border border-white/10 text-xs font-mono flex items-center justify-center gap-1.5 transition-colors"
              >
                <SlidersHorizontal className="w-3.5 h-3.5 text-indigo-400" />
                <span className="hidden min-[1800px]:inline text-white/50">LENS:</span>
                <span className="hidden min-[1800px]:inline text-indigo-300 font-semibold max-w-[8.5rem] truncate">{ROLE_LABELS[roleLens]}</span>
                <ChevronDown className={`hidden min-[1800px]:block w-3 h-3 text-white/40 transition-transform duration-200 ${lensOpen ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {lensOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.16, ease: EASE }}
                    role="listbox"
                    className="absolute right-0 top-full mt-1.5 w-64 rounded-2xl bg-[#0a0a0a] border border-white/10 shadow-2xl p-1.5 z-50"
                  >
                    <div className="px-2.5 py-1.5 text-[11px] font-mono uppercase tracking-widest text-white/50 border-b border-white/5 mb-1">
                      Perspective Lens
                    </div>
                    {(Object.keys(ROLE_LABELS) as RoleLens[]).map((r) => (
                      <button
                        key={r}
                        role="option"
                        aria-selected={roleLens === r}
                        onClick={() => { setRoleLens(r); setLensOpen(false); }}
                        className={`w-full text-left px-2.5 h-10 rounded-lg text-xs transition-colors flex items-center justify-between font-mono ${
                          roleLens === r
                            ? 'bg-indigo-950/60 border border-indigo-500/40 text-indigo-300 font-semibold'
                            : 'text-white/70 hover:bg-white/5 hover:text-white border border-transparent'
                        }`}
                      >
                        <span>{ROLE_LABELS[r]}</span>
                        {roleLens === r && <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" />}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button
              onClick={onOpenIntake}
              id="header-start-engagement-btn"
              className="mc-tap hidden sm:flex px-4 rounded-xl whitespace-nowrap bg-indigo-600 hover:bg-indigo-500 active:scale-[0.98] text-white text-xs font-medium tracking-wide shadow-[0_0_15px_rgba(99,102,241,0.4)] transition-[background-color,transform] duration-150 items-center gap-1.5"
            >
              <span>Start Engagement</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(o => !o)}
              id="mobile-menu-toggle-btn"
              className="mc-tap 2xl:hidden rounded-xl bg-[#0a0a0a] border border-white/10 flex items-center justify-center text-white/70 hover:text-white"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav-sheet"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile / tablet navigation sheet */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-nav-sheet"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: EASE }}
            className="2xl:hidden absolute top-full inset-x-0 bg-[#050505] border-b border-white/10 max-h-[calc(100dvh-4rem)] overflow-y-auto overscroll-contain"
          >
            <nav className="mc-container py-4 space-y-5 mc-safe-bottom" aria-label="Mobile">
              <button
                onClick={() => go('home')}
                className={`w-full mc-tap px-3 rounded-xl border text-left text-sm font-medium ${
                  activeTab === 'home' ? 'bg-indigo-950/40 border-indigo-500/40 text-white' : 'bg-[#0a0a0a] border-white/10 text-white/80'
                }`}
              >
                Overview
              </button>

              {NAV_ITEMS.filter(i => i.dropdown).map((item) => (
                <div key={item.id}>
                  <div className="flex items-center gap-2 px-1 mb-2">
                    <span className="mc-eyebrow">{item.label}</span>
                    {item.badge && <span className="text-[11px] font-mono text-white/40">{item.badge}</span>}
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                    {item.dropdown!.map((sub) => {
                      const Icon = sub.icon;
                      return (
                        <button
                          key={sub.id + sub.label}
                          onClick={() => go(sub.id)}
                          className={`mc-tap text-left px-3 py-2.5 rounded-xl border flex items-start gap-3 transition-colors ${
                            activeTab === sub.id
                              ? 'bg-indigo-950/40 border-indigo-500/40'
                              : 'bg-[#0a0a0a] border-white/10 active:bg-white/5'
                          }`}
                        >
                          {Icon && <Icon className={`w-4 h-4 mt-0.5 shrink-0 ${sub.color}`} />}
                          <span>
                            <span className="block text-[13px] font-semibold text-white">{sub.label}</span>
                            <span className="block text-xs text-white/50 mt-0.5 leading-snug">{sub.desc}</span>
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}

              <div className="grid grid-cols-2 gap-1.5">
                {NAV_ITEMS.filter(i => !i.dropdown && i.id !== 'home').map((item) => (
                  <button
                    key={item.id}
                    onClick={() => go(item.id)}
                    className={`mc-tap px-3 rounded-xl border text-left text-sm ${
                      activeTab === item.id ? 'bg-indigo-950/40 border-indigo-500/40 text-white' : 'bg-[#0a0a0a] border-white/10 text-white/80'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              {/* Perspective lens (previously unavailable on phones) */}
              <div>
                <button
                  onClick={() => setMobileLensOpen(o => !o)}
                  aria-expanded={mobileLensOpen}
                  className="w-full mc-tap px-3 rounded-xl bg-[#0a0a0a] border border-white/10 flex items-center justify-between text-xs font-mono"
                >
                  <span className="flex items-center gap-2">
                    <SlidersHorizontal className="w-4 h-4 text-indigo-400" />
                    <span className="text-white/50">LENS:</span>
                    <span className="text-indigo-300 font-semibold">{ROLE_LABELS[roleLens]}</span>
                  </span>
                  <ChevronDown className={`w-4 h-4 text-white/40 transition-transform duration-200 ${mobileLensOpen ? 'rotate-180' : ''}`} />
                </button>
                {mobileLensOpen && (
                  <div className="mt-1.5 grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                    {(Object.keys(ROLE_LABELS) as RoleLens[]).map((r) => (
                      <button
                        key={r}
                        onClick={() => { setRoleLens(r); setMobileLensOpen(false); }}
                        className={`mc-tap px-3 rounded-xl border text-left text-xs font-mono flex items-center justify-between ${
                          roleLens === r ? 'bg-indigo-950/60 border-indigo-500/40 text-indigo-300' : 'bg-[#0a0a0a] border-white/10 text-white/70'
                        }`}
                      >
                        <span>{ROLE_LABELS[r]}</span>
                        {roleLens === r && <CheckCircle2 className="w-4 h-4 text-indigo-400" />}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <button
                onClick={() => { onOpenIntake(); setMobileMenuOpen(false); }}
                className="w-full mc-tap rounded-xl bg-indigo-600 active:scale-[0.98] text-white font-medium text-sm flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(99,102,241,0.4)] transition-transform duration-150"
              >
                <span>Start Engagement</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
