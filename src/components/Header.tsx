import React, { useState, useEffect } from 'react';
import { NavTab, RoleLens } from '../types';
import { 
  Search, 
  Menu, 
  X, 
  ChevronDown, 
  ArrowRight,
  Compass,
  BarChart3,
  GraduationCap,
  Cpu,
  Layers,
  Globe2,
  Dna,
  ShieldCheck,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

interface HeaderProps {
  activeTab: NavTab;
  setActiveTab: (tab: NavTab) => void;
  roleLens?: RoleLens;
  setRoleLens?: (role: RoleLens) => void;
  onOpenIntake: () => void;
  onOpenSearch: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  roleLens = 'all',
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
      id: 'capabilities' as NavTab, 
      label: 'Capabilities',
      badge: '4 Pillars',
      dropdown: [
        { id: 'consulting', label: 'Business Consulting', desc: 'Strategy, growth, transformation & process redesign', icon: Compass, color: 'text-[#123A2E]' },
        { id: 'market-research', label: 'Market Research', desc: 'Primary & secondary intelligence and analytics', icon: BarChart3, color: 'text-[#123A2E]' },
        { id: 'ai-training', label: 'AI Training & Literacy', desc: 'Applied capability-building & internal AI champions', icon: GraduationCap, color: 'text-[#C0562F]' },
        { id: 'ai-solutions', label: 'AI Enterprise Solutions', desc: 'Governed production AI systems & automation', icon: Cpu, color: 'text-[#C0562F]' },
      ]
    },
    { 
      id: 'life-sciences' as NavTab, 
      label: 'Life Sciences',
      badge: 'Core Heritage',
      dropdown: [
        { id: 'life-sciences', label: 'Life Sciences Heritage Hub', desc: 'Deep domain across Pharma, Devices, Diagnostics & Hospitals' },
        { id: 'industries', label: '24 Industry Verticals Explorer', desc: 'Compare 6 Life Sciences sectors and 18 diversified verticals' },
        { id: 'matrix-3d', label: 'Industry × Capability Matrix', desc: 'Explore how 4 capabilities apply across all 24 industries' },
      ]
    },
    { 
      id: 'africa-explorer' as NavTab, 
      label: 'Africa & Markets',
      badge: '4 Regions',
      dropdown: [
        { id: 'africa-explorer', label: '4 Regional Clusters & 45 Markets', desc: 'East, West, Southern & North Africa intelligence dossiers' },
        { id: 'market-entry', label: 'Signature 9-Step Market Entry', desc: 'De-risk and accelerate African market expansion' },
        { id: 'africa-intelligence', label: 'Regional Harmonization Tracker', desc: 'Regulatory compliance (PPB, NAFDAC, SAHPRA, EAC, SADC)' },
      ]
    },
    { 
      id: 'question-to-outcome' as NavTab, 
      label: 'By Challenge',
      badge: 'Scenarios',
      dropdown: [
        { id: 'question-to-outcome', label: 'From Question to Outcome', desc: '8 Problem-led scenarios tracing from evidence to business impact' },
        { id: 'engagement-builder', label: 'Engagement Blueprint Builder', desc: 'Synthesize custom workstreams, deliverables & timeline' },
      ]
    },
    { id: 'solutions' as NavTab, label: 'AI Solutions' },
    { id: 'responsible-ai' as NavTab, label: 'Responsible AI' },
    { id: 'insights' as NavTab, label: 'Insights' },
    { id: 'about' as NavTab, label: 'About' }
  ];

  return (
    <header 
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#F4F1EA]/95 backdrop-blur-md border-b border-[rgba(20,25,26,0.12)] shadow-sm py-2.5' 
          : 'bg-[#F4F1EA]/90 backdrop-blur-sm border-b border-[rgba(20,25,26,0.08)] py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Brand Logo / Wordmark */}
          <div className="flex items-center space-x-3">
            <button
              onClick={() => { setActiveTab('home'); }}
              className="flex items-center space-x-3 group text-left focus:outline-none"
              id="brand-logo-button"
            >
              <div className="w-8 h-8 rounded-full bg-[#123A2E] relative flex items-center justify-center flex-none group-hover:scale-105 transition-transform duration-200">
                <span className="w-3 h-3 rounded-full border-2 border-[#C0562F]"></span>
                <span className="absolute w-6 h-6 border border-white/20 rounded-full"></span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center space-x-2">
                  <span className="font-serif text-lg font-medium tracking-tight text-[#16191A] group-hover:text-[#123A2E] transition-colors">
                    MindCraft
                  </span>
                  <span className="text-[10px] font-mono tracking-wider uppercase text-[#C0562F] font-semibold">
                    CONSULTANCY
                  </span>
                </div>
                <span className="text-[10px] text-[#8A8578] font-mono tracking-widest uppercase -mt-0.5">
                  Nairobi · Africa · Global
                </span>
              </div>
            </button>
          </div>

          {/* Desktop Navigation Links */}
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
                    className={`px-3 py-1.5 rounded-md text-[13px] font-medium tracking-tight transition-all flex items-center space-x-1.5 ${
                      isActive 
                        ? 'text-[#C0562F] font-semibold bg-black/5' 
                        : 'text-[#16191A]/80 hover:text-[#123A2E] hover:bg-black/5'
                    }`}
                  >
                    <span>{item.label}</span>
                    {item.badge && (
                      <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-[#123A2E]/10 text-[#123A2E] font-mono font-medium">
                        {{
                          '4 Pillars': '4',
                          'Core Heritage': 'Core',
                          '24 Sectors': '24',
                          '4 Regions': 'Africa',
                          'Scenarios': 'Q→O'
                        }[item.badge] || item.badge}
                      </span>
                    )}
                    {hasDropdown && (
                      <ChevronDown className="w-3 h-3 text-[#8A8578] group-hover:text-[#123A2E] transition-transform group-hover:rotate-180" />
                    )}
                  </button>

                  {/* Dropdown Menu */}
                  {hasDropdown && activeDropdown === item.id && (
                    <div className="absolute top-full left-0 mt-1 w-72 rounded-xl bg-[#FBFAF6] border border-[rgba(20,25,26,0.14)] shadow-xl p-2 z-50 animate-in fade-in-50 slide-in-from-top-2 duration-150">
                      <div className="space-y-1">
                        {item.dropdown?.map((subItem) => (
                          <button
                            key={subItem.id}
                            onClick={() => {
                              setActiveTab(subItem.id as NavTab);
                              setActiveDropdown(null);
                            }}
                            className={`w-full text-left p-2.5 rounded-lg transition-all flex items-start space-x-2.5 border ${
                              activeTab === subItem.id 
                                ? 'bg-[#123A2E]/10 border-[#123A2E]/20 text-[#123A2E]' 
                                : 'border-transparent hover:border-black/10 hover:bg-black/5 text-[#3B4441]'
                            }`}
                          >
                            {'icon' in subItem && subItem.icon && (
                              <div className={`p-1.5 rounded-md bg-white border border-black/10 ${subItem.color} mt-0.5 flex-none`}>
                                {React.createElement(subItem.icon, { className: 'w-3.5 h-3.5' })}
                              </div>
                            )}
                            <div>
                              <div className="text-xs font-semibold text-[#16191A] flex items-center space-x-1.5">
                                <span>{subItem.label}</span>
                              </div>
                              <div className="text-[11px] text-[#8A8578] mt-0.5 leading-snug">
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

          {/* Right Controls: Search + Primary CTA + Mobile Menu */}
          <div className="flex items-center space-x-2.5">
            
            {/* Quick Search Palette Trigger */}
            <button
              onClick={onOpenSearch}
              id="global-search-btn"
              className="px-2.5 py-1.5 rounded-lg bg-white border border-[rgba(20,25,26,0.15)] hover:border-[#123A2E] text-[#3B4441] transition-colors flex items-center space-x-1.5 text-xs font-mono"
              title="Search MindCraft Platform (Cmd+K)"
            >
              <Search className="w-3.5 h-3.5 text-[#8A8578]" />
              <span className="hidden xl:inline text-[#8A8578]">Search</span>
              <kbd className="hidden xl:inline px-1 py-0.2 rounded bg-[#ECE7DC] text-[9px] text-[#4C524E] font-mono">
                ⌘K
              </kbd>
            </button>

            {/* Primary Engagement CTA */}
            <button
              onClick={onOpenIntake}
              id="header-start-engagement-btn"
              className="px-4 py-2 rounded-lg bg-[#123A2E] hover:bg-[#C0562F] text-[#F4F1EA] text-xs font-semibold tracking-wide shadow-sm transition-all duration-150 flex items-center space-x-1.5"
            >
              <span>Start an Engagement</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle-btn"
              className="p-2 rounded-lg bg-white border border-[rgba(20,25,26,0.15)] lg:hidden text-[#16191A]"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-[rgba(20,25,26,0.1)] pb-4 space-y-2 animate-in slide-in-from-top-4 duration-200">
            <div className="grid grid-cols-2 gap-2 mb-2">
              <button
                onClick={() => { setActiveTab('home'); setMobileMenuOpen(false); }}
                className={`p-3 rounded-lg border text-left text-xs font-medium ${activeTab === 'home' ? 'bg-[#123A2E] text-white border-[#123A2E]' : 'bg-white border-[rgba(20,25,26,0.1)] text-[#16191A]'}`}
              >
                Overview
              </button>
              <button
                onClick={() => { setActiveTab('capabilities'); setMobileMenuOpen(false); }}
                className={`p-3 rounded-lg border text-left text-xs font-medium ${activeTab === 'capabilities' ? 'bg-[#123A2E] text-white border-[#123A2E]' : 'bg-white border-[rgba(20,25,26,0.1)] text-[#16191A]'}`}
              >
                4 Capabilities
              </button>
              <button
                onClick={() => { setActiveTab('life-sciences'); setMobileMenuOpen(false); }}
                className={`p-3 rounded-lg border text-left text-xs font-medium ${activeTab === 'life-sciences' ? 'bg-[#123A2E] text-white border-[#123A2E]' : 'bg-white border-[rgba(20,25,26,0.1)] text-[#16191A]'}`}
              >
                Life Sciences Core
              </button>
              <button
                onClick={() => { setActiveTab('industries'); setMobileMenuOpen(false); }}
                className={`p-3 rounded-lg border text-left text-xs font-medium ${activeTab === 'industries' ? 'bg-[#123A2E] text-white border-[#123A2E]' : 'bg-white border-[rgba(20,25,26,0.1)] text-[#16191A]'}`}
              >
                24 Industries
              </button>
              <button
                onClick={() => { setActiveTab('africa-explorer'); setMobileMenuOpen(false); }}
                className={`p-3 rounded-lg border text-left text-xs font-medium ${activeTab === 'africa-explorer' ? 'bg-[#123A2E] text-white border-[#123A2E]' : 'bg-white border-[rgba(20,25,26,0.1)] text-[#16191A]'}`}
              >
                Africa Hub (45 Markets)
              </button>
              <button
                onClick={() => { setActiveTab('market-entry'); setMobileMenuOpen(false); }}
                className={`p-3 rounded-lg border text-left text-xs font-medium ${activeTab === 'market-entry' ? 'bg-[#123A2E] text-white border-[#123A2E]' : 'bg-white border-[rgba(20,25,26,0.1)] text-[#16191A]'}`}
              >
                Market Entry (9-Step)
              </button>
              <button
                onClick={() => { setActiveTab('question-to-outcome'); setMobileMenuOpen(false); }}
                className={`p-3 rounded-lg border text-left text-xs font-medium ${activeTab === 'question-to-outcome' ? 'bg-[#123A2E] text-white border-[#123A2E]' : 'bg-white border-[rgba(20,25,26,0.1)] text-[#16191A]'}`}
              >
                From Question to Outcome
              </button>
              <button
                onClick={() => { setActiveTab('solutions'); setMobileMenuOpen(false); }}
                className={`p-3 rounded-lg border text-left text-xs font-medium ${activeTab === 'solutions' ? 'bg-[#123A2E] text-white border-[#123A2E]' : 'bg-white border-[rgba(20,25,26,0.1)] text-[#16191A]'}`}
              >
                Enterprise AI Solutions
              </button>
              <button
                onClick={() => { setActiveTab('responsible-ai'); setMobileMenuOpen(false); }}
                className={`p-3 rounded-lg border text-left text-xs font-medium ${activeTab === 'responsible-ai' ? 'bg-[#123A2E] text-white border-[#123A2E]' : 'bg-white border-[rgba(20,25,26,0.1)] text-[#16191A]'}`}
              >
                Responsible AI
              </button>
              <button
                onClick={() => { setActiveTab('engagement-builder'); setMobileMenuOpen(false); }}
                className={`p-3 rounded-lg border text-left text-xs font-medium ${activeTab === 'engagement-builder' ? 'bg-[#123A2E] text-white border-[#123A2E]' : 'bg-white border-[rgba(20,25,26,0.1)] text-[#16191A]'}`}
              >
                Engagement Builder
              </button>
            </div>
            <button
              onClick={() => { onOpenIntake(); setMobileMenuOpen(false); }}
              className="w-full py-3 rounded-lg bg-[#123A2E] text-white font-semibold text-xs flex items-center justify-center space-x-1.5"
            >
              <span>Start an Engagement</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
      </div>
    </header>
  );
};
