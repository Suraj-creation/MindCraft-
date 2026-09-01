import React, { useState, useEffect } from 'react';
import { NavTab, RoleLens } from '../types';
import { 
  Compass, 
  BarChart3, 
  GraduationCap, 
  Cpu, 
  Globe2, 
  Dna, 
  Sparkles, 
  Search, 
  Layers, 
  CheckCircle2, 
  ShieldCheck, 
  FileText, 
  ArrowRight,
  Menu,
  X,
  ChevronDown,
  Building2,
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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home' as NavTab, label: 'Overview' },
    { 
      id: 'life-sciences' as NavTab, 
      label: 'Life Sciences',
      badge: 'Core Heritage',
      dropdown: [
        { id: 'life-sciences', label: 'Life Sciences Hub', desc: 'Core domain ecosystem across 6 healthcare sectors' },
        { id: 'africa-intelligence', label: 'Africa Market Intelligence', desc: 'Pan-African regulatory & commercial coverage' },
        { id: 'question-to-outcome', label: 'From Question to Outcome', desc: 'Interactive strategic problem-solving engine' }
      ]
    },
    { 
      id: 'consulting' as NavTab, 
      label: 'Capabilities',
      dropdown: [
        { id: 'consulting', label: 'Business Consulting', icon: Compass, color: 'text-teal-400', desc: 'Corporate strategy, operating models & diagnostics' },
        { id: 'market-research', label: 'Market Research', icon: BarChart3, color: 'text-blue-400', desc: 'Primary & secondary evidence and intelligence' },
        { id: 'ai-training', label: 'AI Training & Literacy', icon: GraduationCap, color: 'text-amber-400', desc: 'Applied capability transformation & champion cohorts' },
        { id: 'ai-solutions', label: 'AI Enterprise Solutions', icon: Cpu, color: 'text-emerald-400', desc: 'Governed production systems & architecture' }
      ]
    },
    {
      id: 'operating-model' as NavTab,
      label: 'Operating System',
      dropdown: [
        { id: 'operating-model', label: 'The MindCraft Model', desc: 'Four integrated capabilities under one partner' },
        { id: 'capability-graph', label: 'Capability Network Graph', desc: 'Interactive multi-dimensional capability map' },
        { id: 'maturity-model', label: 'AI Transformation Maturity', desc: 'Level 0 to Level 5 readiness ladder' },
        { id: 'engagement-builder', label: 'Engagement Blueprint Builder', desc: 'Generate customized engagement blueprints' }
      ]
    },
    { id: 'responsible-ai' as NavTab, label: 'Responsible AI' },
    { id: 'insights' as NavTab, label: 'Insights' },
    { id: 'about' as NavTab, label: 'About' }
  ];

  const roleLabels: { [key in RoleLens]: string } = {
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

  return (
    <header 
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#050505]/95 backdrop-blur-md border-b border-white/10 shadow-2xl py-3' 
          : 'bg-[#050505]/80 backdrop-blur-sm border-b border-white/10 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Brand Identity */}
          <div className="flex items-center space-x-3">
            <button
              onClick={() => { setActiveTab('home'); }}
              className="flex items-center space-x-3 group text-left focus:outline-none"
              id="brand-logo-button"
            >
              <div className="w-9 h-9 bg-indigo-600 rounded-lg flex items-center justify-center font-bold text-white shadow-[0_0_15px_rgba(99,102,241,0.4)] group-hover:scale-105 transition-transform duration-200">
                <span className="font-mono text-sm font-bold">MC</span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-bold tracking-tight uppercase text-white group-hover:text-indigo-400 transition-colors">
                    MINDCRAFT <span className="text-indigo-400">CORE</span>
                  </span>
                  <span className="text-[10px] font-mono text-white/40 border border-white/10 px-1.5 py-0.2 rounded uppercase">
                    v2026.1
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                  <span className="text-[10px] text-white/40 font-mono uppercase tracking-wider">
                    Pan-Africa Strategy // Nairobi
                  </span>
                </div>
              </div>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1" id="desktop-nav">
            {navItems.map((item) => {
              const hasDropdown = !!item.dropdown;
              const isActive = activeTab === item.id || (item.dropdown && item.dropdown.some(d => d.id === activeTab));

              return (
                <div 
                  key={item.id} 
                  className="relative group"
                  onMouseEnter={() => hasDropdown && setActiveDropdown(item.id)}
                  onMouseLeave={() => hasDropdown && setActiveDropdown(null)}
                >
                  <button
                    id={`nav-${item.id}`}
                    onClick={() => {
                      if (!hasDropdown) {
                        setActiveTab(item.id);
                      }
                    }}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider transition-all flex items-center space-x-1.5 ${
                      isActive 
                        ? 'text-indigo-400 bg-white/5 border border-white/10 shadow-sm' 
                        : 'text-white/60 hover:text-white hover:bg-white/5 border border-transparent'
                    }`}
                  >
                    <span>{item.label}</span>
                    {item.badge && (
                      <span className="text-[9px] px-1.5 py-0.2 rounded bg-indigo-500/20 border border-indigo-500/40 text-indigo-300 font-mono">
                        {item.badge}
                      </span>
                    )}
                    {hasDropdown && (
                      <ChevronDown className="w-3 h-3 text-white/40 group-hover:text-indigo-300 transition-transform group-hover:rotate-180" />
                    )}
                  </button>

                  {/* Mega Dropdown in Bento Grid style */}
                  {hasDropdown && activeDropdown === item.id && (
                    <div className="absolute top-full left-0 mt-1.5 w-80 rounded-2xl bg-[#0a0a0a] border border-white/10 shadow-2xl p-2 z-50 animate-in fade-in-50 slide-in-from-top-2 duration-150">
                      <div className="space-y-1">
                        {item.dropdown?.map((subItem) => (
                          <button
                            key={subItem.id}
                            onClick={() => {
                              setActiveTab(subItem.id as NavTab);
                              setActiveDropdown(null);
                            }}
                            className={`w-full text-left p-2.5 rounded-xl transition-all flex items-start space-x-3 group/item border ${
                              activeTab === subItem.id 
                                ? 'bg-indigo-950/40 border-indigo-500/40 text-white shadow-[0_0_10px_rgba(99,102,241,0.2)]' 
                                : 'border-transparent hover:border-white/10 hover:bg-white/5 text-white/70 hover:text-white'
                            }`}
                          >
                            {'icon' in subItem && subItem.icon && (
                              <div className={`p-1.5 rounded-lg bg-white/5 border border-white/10 ${subItem.color} mt-0.5`}>
                                {React.createElement(subItem.icon, { className: 'w-4 h-4' })}
                              </div>
                            )}
                            <div>
                              <div className="text-xs font-semibold text-white/90 group-hover/item:text-indigo-300 flex items-center space-x-1.5">
                                <span>{subItem.label}</span>
                              </div>
                              <div className="text-[11px] text-white/40 mt-0.5 leading-snug">
                                {subItem.desc}
                              </div>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Right Actions: Role Lens + Search + Primary CTA */}
          <div className="flex items-center space-x-2.5">
            
            {/* Quick Search */}
            <button
              onClick={onOpenSearch}
              id="global-search-btn"
              className="p-2 rounded-xl bg-[#0a0a0a] hover:bg-white/5 text-white/60 hover:text-white border border-white/10 transition-colors flex items-center space-x-1.5 text-xs font-mono"
              title="Search MindCraft Platform (Cmd+K)"
            >
              <Search className="w-3.5 h-3.5 text-white/40" />
              <span className="hidden xl:inline text-white/40">SEARCH</span>
              <kbd className="hidden xl:inline px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-[9px] text-white/40 font-mono">
                ⌘K
              </kbd>
            </button>

            {/* Role Lens Switcher */}
            <div className="relative group hidden sm:block">
              <button
                id="role-lens-button"
                className="px-2.5 py-1.5 rounded-xl bg-[#0a0a0a] hover:bg-white/5 border border-white/10 text-white/80 hover:text-white text-xs font-mono flex items-center space-x-1.5 transition-colors"
                title="Filter view perspective"
              >
                <SlidersHorizontal className="w-3.5 h-3.5 text-indigo-400" />
                <span className="hidden md:inline text-white/40">LENS:</span>
                <span className="text-indigo-300 font-semibold">{roleLabels[roleLens]}</span>
                <ChevronDown className="w-3 h-3 text-white/40" />
              </button>
              <div className="absolute right-0 top-full mt-1.5 w-60 rounded-2xl bg-[#0a0a0a] border border-white/10 shadow-2xl p-1.5 hidden group-hover:block z-50">
                <div className="px-2 py-1 text-[10px] font-mono uppercase tracking-widest text-white/40 border-b border-white/5 mb-1">
                  Perspective Lens
                </div>
                {(Object.keys(roleLabels) as RoleLens[]).map((r) => (
                  <button
                    key={r}
                    onClick={() => setRoleLens(r)}
                    className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs transition-colors flex items-center justify-between font-mono ${
                      roleLens === r 
                        ? 'bg-indigo-950/60 border border-indigo-500/40 text-indigo-300 font-semibold' 
                        : 'text-white/70 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <span>{roleLabels[r]}</span>
                    {roleLens === r && <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Primary Engagement CTA in Bento Style */}
            <button
              onClick={onOpenIntake}
              id="header-start-engagement-btn"
              className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-medium tracking-wide shadow-[0_0_15px_rgba(99,102,241,0.4)] transition-all duration-150 flex items-center space-x-1.5"
            >
              <span>Start Engagement</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle-btn"
              className="p-2 rounded-xl bg-[#0a0a0a] border border-white/10 lg:hidden text-white/70 hover:text-white"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-white/10 pb-4 space-y-1.5 animate-in slide-in-from-top-4 duration-200">
            <div className="grid grid-cols-2 gap-1.5 mb-2">
              <button
                onClick={() => { setActiveTab('home'); setMobileMenuOpen(false); }}
                className="p-2.5 rounded-xl bg-[#0a0a0a] border border-white/10 text-left text-xs font-mono text-white/80"
              >
                Overview
              </button>
              <button
                onClick={() => { setActiveTab('life-sciences'); setMobileMenuOpen(false); }}
                className="p-2.5 rounded-xl bg-[#0a0a0a] border border-white/10 text-left text-xs font-mono text-indigo-300"
              >
                Life Sciences Hub
              </button>
              <button
                onClick={() => { setActiveTab('africa-intelligence'); setMobileMenuOpen(false); }}
                className="p-2.5 rounded-xl bg-[#0a0a0a] border border-white/10 text-left text-xs font-mono text-white/80"
              >
                Africa Intelligence
              </button>
              <button
                onClick={() => { setActiveTab('question-to-outcome'); setMobileMenuOpen(false); }}
                className="p-2.5 rounded-xl bg-[#0a0a0a] border border-white/10 text-left text-xs font-mono text-white/80"
              >
                From Question to Outcome
              </button>
              <button
                onClick={() => { setActiveTab('consulting'); setMobileMenuOpen(false); }}
                className="p-2.5 rounded-xl bg-[#0a0a0a] border border-white/10 text-left text-xs font-mono text-white/80"
              >
                Business Consulting
              </button>
              <button
                onClick={() => { setActiveTab('market-research'); setMobileMenuOpen(false); }}
                className="p-2.5 rounded-xl bg-[#0a0a0a] border border-white/10 text-left text-xs font-mono text-white/80"
              >
                Market Research
              </button>
              <button
                onClick={() => { setActiveTab('ai-training'); setMobileMenuOpen(false); }}
                className="p-2.5 rounded-xl bg-[#0a0a0a] border border-white/10 text-left text-xs font-mono text-white/80"
              >
                AI Training
              </button>
              <button
                onClick={() => { setActiveTab('ai-solutions'); setMobileMenuOpen(false); }}
                className="p-2.5 rounded-xl bg-[#0a0a0a] border border-white/10 text-left text-xs font-mono text-white/80"
              >
                AI Enterprise Solutions
              </button>
              <button
                onClick={() => { setActiveTab('engagement-builder'); setMobileMenuOpen(false); }}
                className="p-2.5 rounded-xl bg-[#0a0a0a] border border-white/10 text-left text-xs font-mono text-white/80"
              >
                Engagement Builder
              </button>
              <button
                onClick={() => { setActiveTab('responsible-ai'); setMobileMenuOpen(false); }}
                className="p-2.5 rounded-xl bg-[#0a0a0a] border border-white/10 text-left text-xs font-mono text-white/80"
              >
                Responsible AI
              </button>
            </div>
            <button
              onClick={() => { onOpenIntake(); setMobileMenuOpen(false); }}
              className="w-full py-2.5 rounded-xl bg-indigo-600 text-white font-medium text-xs flex items-center justify-center space-x-1.5 shadow-[0_0_15px_rgba(99,102,241,0.4)]"
            >
              <span>Start Engagement</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
      </div>
    </header>
  );
};
