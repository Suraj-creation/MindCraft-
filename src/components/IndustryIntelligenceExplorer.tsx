import React, { useState, useMemo } from 'react';
import { 
  Building2, 
  FlaskConical, 
  Search, 
  Layers, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Compass, 
  FileText, 
  Cpu, 
  GraduationCap, 
  BarChart3, 
  ShieldCheck, 
  Globe2, 
  Workflow, 
  Pill, 
  Stethoscope, 
  Activity, 
  Boxes, 
  Sprout, 
  Car, 
  CreditCard, 
  Wheat, 
  Wine, 
  Radio, 
  Palmtree, 
  SunMedium, 
  Building, 
  Truck, 
  Factory, 
  Pickaxe, 
  HeartPulse, 
  ShoppingBag, 
  Briefcase, 
  Recycle,
  HelpCircle,
  TrendingUp,
  TableProperties
} from 'lucide-react';
import { UNIVERSAL_INDUSTRIES } from '../data/industryAndAfricaData';
import { UniversalIndustry, NavTab } from '../types';

interface Props {
  onNavigate: (tab: NavTab) => void;
  onSelectIndustryForEngagement?: (industryName: string) => void;
  initialIndustryId?: string;
}

export const IndustryIntelligenceExplorer: React.FC<Props> = ({ 
  onNavigate, 
  onSelectIndustryForEngagement,
  initialIndustryId 
}) => {
  const [selectedIndustryId, setSelectedIndustryId] = useState<string>(
    initialIndustryId || UNIVERSAL_INDUSTRIES[0].id
  );
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<'all' | 'core-lifesciences' | 'diversified-vertical'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'dossier' | 'matrix'>('dossier');
  const [activeMatrixIndustry, setActiveMatrixIndustry] = useState<UniversalIndustry | null>(null);

  const filteredIndustries = useMemo(() => {
    return UNIVERSAL_INDUSTRIES.filter(ind => {
      const matchesCategory = activeCategoryFilter === 'all' || ind.category === activeCategoryFilter;
      const matchesSearch = ind.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ind.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ind.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ind.context.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategoryFilter, searchQuery]);

  const selectedIndustry = useMemo(() => {
    return UNIVERSAL_INDUSTRIES.find(ind => ind.id === selectedIndustryId) || UNIVERSAL_INDUSTRIES[0];
  }, [selectedIndustryId]);

  const renderIcon = (iconName: string, className = "w-5 h-5") => {
    switch (iconName) {
      case 'Pill': return <Pill className={className} />;
      case 'Stethoscope': return <Stethoscope className={className} />;
      case 'Activity': return <Activity className={className} />;
      case 'Cpu': return <Cpu className={className} />;
      case 'Boxes': return <Boxes className={className} />;
      case 'Building2': return <Building2 className={className} />;
      case 'FlaskConical': return <FlaskConical className={className} />;
      case 'Sprout': return <Sprout className={className} />;
      case 'Car': return <Car className={className} />;
      case 'CreditCard': return <CreditCard className={className} />;
      case 'Wheat': return <Wheat className={className} />;
      case 'Wine': return <Wine className={className} />;
      case 'Radio': return <Radio className={className} />;
      case 'Palmtree': return <Palmtree className={className} />;
      case 'SunMedium': return <SunMedium className={className} />;
      case 'Building': return <Building className={className} />;
      case 'Truck': return <Truck className={className} />;
      case 'Factory': return <Factory className={className} />;
      case 'Pickaxe': return <Pickaxe className={className} />;
      case 'HeartPulse': return <HeartPulse className={className} />;
      case 'ShoppingBag': return <ShoppingBag className={className} />;
      case 'GraduationCap': return <GraduationCap className={className} />;
      case 'Briefcase': return <Briefcase className={className} />;
      case 'Recycle': return <Recycle className={className} />;
      default: return <Layers className={className} />;
    }
  };

  const handleStartEngagement = (indName: string) => {
    if (onSelectIndustryForEngagement) {
      onSelectIndustryForEngagement(indName);
    }
    onNavigate('engagement-builder');
  };

  return (
    <div className="w-full min-h-screen bg-[#050505] text-white p-4 md:p-8 space-y-8">
      {/* Header & View Mode Switcher */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 pb-6 border-b border-white/10">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="px-3 py-1 text-xs font-mono tracking-wider uppercase rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
              Universal Industry Intelligence Explorer
            </span>
            <span className="text-xs text-neutral-400">
              24 Sectors • 6 Core Life Sciences + 18 Diversified Verticals
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
            Industry Intelligence & Capabilities
          </h1>
          <p className="text-neutral-400 text-sm md:text-base mt-1 max-w-3xl">
            Explore MindCraft’s specialized research, strategic consulting, AI capability building, and custom enterprise systems across 24 distinct industry sectors.
          </p>
        </div>

        {/* View Toggle */}
        <div className="flex items-center gap-2 p-1 bg-[#0a0a0a] border border-white/10 rounded-xl">
          <button
            onClick={() => setViewMode('dossier')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium transition-all ${
              viewMode === 'dossier'
                ? 'bg-indigo-600 text-white shadow-[0_0_12px_rgba(99,102,241,0.3)]'
                : 'text-neutral-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <FileText className="w-4 h-4" />
            Industry Dossiers
          </button>
          <button
            onClick={() => setViewMode('matrix')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium transition-all ${
              viewMode === 'matrix'
                ? 'bg-indigo-600 text-white shadow-[0_0_12px_rgba(99,102,241,0.3)]'
                : 'text-neutral-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <TableProperties className="w-4 h-4" />
            24 × 4 Capability Matrix
          </button>
        </div>
      </div>

      {viewMode === 'matrix' ? (
        /* ========================================================================= */
        /* INTERACTIVE 24 × 4 INDUSTRY CAPABILITY MATRIX */
        /* ========================================================================= */
        <div className="space-y-6">
          <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div>
                <h2 className="text-xl font-semibold text-white flex items-center gap-2">
                  <TableProperties className="w-5 h-5 text-indigo-400" />
                  Cross-Industry Capability Coverage Matrix
                </h2>
                <p className="text-sm text-neutral-400 mt-1">
                  Click any cell or row to inspect how MindCraft’s 4 pillars (Consulting, Research, AI Training, Enterprise Solutions) integrate for that vertical.
                </p>
              </div>
              <div className="flex items-center gap-3 text-xs text-neutral-400">
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-indigo-500"></span> Core Life Sciences
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span> Diversified Verticals
                </span>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-white/10 bg-white/5 text-neutral-300 font-mono">
                    <th className="p-3 font-semibold min-w-[200px]">Industry Vertical</th>
                    <th className="p-3 font-semibold min-w-[180px]">Tier & Heritage</th>
                    <th className="p-3 font-semibold min-w-[200px]">Strategic Consulting</th>
                    <th className="p-3 font-semibold min-w-[200px]">Primary Research</th>
                    <th className="p-3 font-semibold min-w-[200px]">AI Training & Capability</th>
                    <th className="p-3 font-semibold min-w-[200px]">Enterprise AI Solutions</th>
                    <th className="p-3 font-semibold text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {UNIVERSAL_INDUSTRIES.map((ind) => {
                    const isSelected = selectedIndustryId === ind.id;
                    const isCore = ind.category === 'core-lifesciences';
                    return (
                      <tr 
                        key={ind.id}
                        onClick={() => {
                          setSelectedIndustryId(ind.id);
                          setActiveMatrixIndustry(ind);
                        }}
                        className={`cursor-pointer transition-colors ${
                          isSelected 
                            ? 'bg-indigo-950/40 hover:bg-indigo-950/50' 
                            : 'hover:bg-white/[0.03]'
                        }`}
                      >
                        <td className="p-3 font-medium text-white flex items-center gap-2">
                          <span className={`p-1.5 rounded-lg ${isCore ? 'bg-indigo-500/20 text-indigo-300' : 'bg-white/5 text-neutral-300'}`}>
                            {renderIcon(ind.designMetaphor.icon, "w-4 h-4")}
                          </span>
                          <span>{ind.name}</span>
                        </td>
                        <td className="p-3">
                          <span className={`px-2 py-0.5 rounded text-[10px] font-mono uppercase ${
                            isCore 
                              ? 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/30' 
                              : 'bg-white/5 text-neutral-400 border border-white/10'
                          }`}>
                            {isCore ? 'Life Sciences Core' : 'Diversified Vertical'}
                          </span>
                        </td>
                        <td className="p-3 text-neutral-300">
                          {ind.consultingAndStrategy[0] || 'Market strategy & operating model'}
                        </td>
                        <td className="p-3 text-neutral-300">
                          {ind.researchAndIntelligence[0] || 'Field audits & buyer intelligence'}
                        </td>
                        <td className="p-3 text-neutral-300">
                          {ind.capabilityBuilding[0] || 'Role-based applied AI training'}
                        </td>
                        <td className="p-3 text-neutral-300">
                          {ind.enterpriseSolutions[0] || 'Automated intelligence platform'}
                        </td>
                        <td className="p-3 text-right">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedIndustryId(ind.id);
                              setViewMode('dossier');
                            }}
                            className="px-2.5 py-1 rounded bg-white/5 hover:bg-indigo-600 text-neutral-300 hover:text-white transition-all text-[11px]"
                          >
                            Inspect Dossier
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* Quick Matrix Drawer if selected */}
          {activeMatrixIndustry && (
            <div className="bg-[#0a0a0a] border border-indigo-500/30 rounded-2xl p-6 shadow-[0_0_20px_rgba(99,102,241,0.15)] animate-in fade-in">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
                    {renderIcon(activeMatrixIndustry.designMetaphor.icon, "w-6 h-6")}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{activeMatrixIndustry.name}</h3>
                    <p className="text-xs text-neutral-400">{activeMatrixIndustry.tagline}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => {
                      setSelectedIndustryId(activeMatrixIndustry.id);
                      setViewMode('dossier');
                    }}
                    className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-medium text-white transition-colors flex items-center gap-1.5"
                  >
                    View Full 10-Part Dossier <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => handleStartEngagement(activeMatrixIndustry.name)}
                    className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-xs font-medium text-white transition-colors shadow-[0_0_15px_rgba(99,102,241,0.3)]"
                  >
                    Build Engagement
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
                <div className="p-4 rounded-xl bg-[#050505] border border-white/5 space-y-2">
                  <div className="flex items-center gap-2 text-indigo-400 text-xs font-semibold">
                    <Compass className="w-4 h-4" /> Strategic Consulting
                  </div>
                  <ul className="text-xs text-neutral-300 space-y-1 list-disc list-inside">
                    {activeMatrixIndustry.consultingAndStrategy.slice(0, 2).map((item, idx) => (
                      <li key={idx} className="line-clamp-2">{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="p-4 rounded-xl bg-[#050505] border border-white/5 space-y-2">
                  <div className="flex items-center gap-2 text-sky-400 text-xs font-semibold">
                    <Search className="w-4 h-4" /> Market Research
                  </div>
                  <ul className="text-xs text-neutral-300 space-y-1 list-disc list-inside">
                    {activeMatrixIndustry.researchAndIntelligence.slice(0, 2).map((item, idx) => (
                      <li key={idx} className="line-clamp-2">{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="p-4 rounded-xl bg-[#050505] border border-white/5 space-y-2">
                  <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold">
                    <GraduationCap className="w-4 h-4" /> AI Training
                  </div>
                  <ul className="text-xs text-neutral-300 space-y-1 list-disc list-inside">
                    {activeMatrixIndustry.capabilityBuilding.slice(0, 2).map((item, idx) => (
                      <li key={idx} className="line-clamp-2">{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="p-4 rounded-xl bg-[#050505] border border-white/5 space-y-2">
                  <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold">
                    <Cpu className="w-4 h-4" /> Enterprise AI Solutions
                  </div>
                  <ul className="text-xs text-neutral-300 space-y-1 list-disc list-inside">
                    {activeMatrixIndustry.enterpriseSolutions.slice(0, 2).map((item, idx) => (
                      <li key={idx} className="line-clamp-2">{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        /* ========================================================================= */
        /* DOSSIER VIEW (Bento Grid Navigation & Comprehensive 10-Part Detail) */
        /* ========================================================================= */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Sector Index & Filters (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            {/* Filter and Search Card */}
            <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-4 space-y-3">
              <div className="relative">
                <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search 24 industries..."
                  className="w-full bg-[#050505] border border-white/10 rounded-xl pl-9 pr-3 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-indigo-500/60"
                />
              </div>

              {/* Category Filter Pills */}
              <div className="grid grid-cols-3 gap-1.5 p-1 bg-[#050505] rounded-xl border border-white/5 text-[11px]">
                <button
                  onClick={() => setActiveCategoryFilter('all')}
                  className={`py-1.5 rounded-lg font-medium transition-all ${
                    activeCategoryFilter === 'all'
                      ? 'bg-indigo-600 text-white'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  All (24)
                </button>
                <button
                  onClick={() => setActiveCategoryFilter('core-lifesciences')}
                  className={`py-1.5 rounded-lg font-medium transition-all ${
                    activeCategoryFilter === 'core-lifesciences'
                      ? 'bg-indigo-600 text-white'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  Life Sci (6)
                </button>
                <button
                  onClick={() => setActiveCategoryFilter('diversified-vertical')}
                  className={`py-1.5 rounded-lg font-medium transition-all ${
                    activeCategoryFilter === 'diversified-vertical'
                      ? 'bg-indigo-600 text-white'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  Verts (18)
                </button>
              </div>
            </div>

            {/* Industry Selector List */}
            <div className="space-y-2 max-h-[750px] overflow-y-auto pr-1">
              {filteredIndustries.map((ind) => {
                const isSelected = selectedIndustryId === ind.id;
                const isCore = ind.category === 'core-lifesciences';
                return (
                  <button
                    key={ind.id}
                    onClick={() => setSelectedIndustryId(ind.id)}
                    className={`w-full text-left p-3.5 rounded-2xl border transition-all flex items-start gap-3.5 group ${
                      isSelected
                        ? 'bg-gradient-to-r from-indigo-950/60 to-[#0a0a0a] border-indigo-500/60 shadow-[0_0_15px_rgba(99,102,241,0.25)]'
                        : 'bg-[#0a0a0a] border-white/5 hover:border-white/20 hover:bg-white/[0.02]'
                    }`}
                  >
                    <div className={`p-2 rounded-xl border shrink-0 transition-colors ${
                      isSelected
                        ? 'bg-indigo-600 text-white border-indigo-400'
                        : 'bg-[#050505] text-neutral-400 border-white/10 group-hover:text-white'
                    }`}>
                      {renderIcon(ind.designMetaphor.icon, "w-4 h-4")}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-1 mb-1">
                        <span className="font-semibold text-sm text-white truncate">
                          {ind.name}
                        </span>
                        {isCore && (
                          <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 shrink-0">
                            Core
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-neutral-400 line-clamp-1 leading-relaxed">
                        {ind.tagline}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Universal Industry Detail Template (8 cols) */}
          <div className="lg:col-span-8 space-y-6">
            {/* Header Bento Card */}
            <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 md:p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
              
              <div className="relative z-10 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span className={`px-3 py-1 text-xs font-mono tracking-wider uppercase rounded-full border ${
                      selectedIndustry.category === 'core-lifesciences'
                        ? 'bg-indigo-500/10 text-indigo-400 border-indigo-500/30'
                        : 'bg-amber-500/10 text-amber-400 border-amber-500/30'
                    }`}>
                      {selectedIndustry.category === 'core-lifesciences' ? 'Core Life Sciences Sector' : 'Diversified Industry Vertical'}
                    </span>
                    {selectedIndustry.heritageNote && (
                      <span className="text-xs text-neutral-400 font-mono">
                        • {selectedIndustry.heritageNote}
                      </span>
                    )}
                  </div>
                  <button
                    onClick={() => handleStartEngagement(selectedIndustry.name)}
                    className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-xs font-semibold text-white transition-all shadow-[0_0_15px_rgba(99,102,241,0.3)] flex items-center gap-1.5"
                  >
                    Build Engagement in {selectedIndustry.name} <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3.5 rounded-2xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                    {renderIcon(selectedIndustry.designMetaphor.icon, "w-8 h-8")}
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                      {selectedIndustry.name}
                    </h2>
                    <p className="text-indigo-300 text-sm md:text-base font-medium mt-0.5">
                      {selectedIndustry.tagline}
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#050505] border border-white/5">
                  <div className="text-xs font-mono text-neutral-400 uppercase tracking-wider mb-1">
                    Industry Context & Structural Dynamics
                  </div>
                  <p className="text-sm text-neutral-300 leading-relaxed">
                    {selectedIndustry.context}
                  </p>
                </div>
              </div>
            </div>

            {/* Grid 1: Key Questions & Research Methodology */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Key Questions Card */}
              <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 space-y-4">
                <div className="flex items-center gap-2 text-indigo-400 font-semibold text-sm">
                  <HelpCircle className="w-4 h-4" />
                  Key Strategic & Operational Questions
                </div>
                <div className="space-y-2.5">
                  {selectedIndustry.keyQuestions.map((q, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-[#050505] border border-white/5 text-xs text-neutral-200 leading-relaxed flex items-start gap-2.5">
                      <span className="font-mono text-indigo-400 font-bold">Q{idx + 1}</span>
                      <span>{q}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Research & Intelligence Card */}
              <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 space-y-4">
                <div className="flex items-center gap-2 text-sky-400 font-semibold text-sm">
                  <Search className="w-4 h-4" />
                  Primary Research & Intelligence Methods
                </div>
                <ul className="space-y-2.5 text-xs text-neutral-300">
                  {selectedIndustry.researchAndIntelligence.map((item, idx) => (
                    <li key={idx} className="p-3 rounded-xl bg-[#050505] border border-white/5 flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Grid 2: Strategy, AI Opportunities & Training */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Strategic Consulting */}
              <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-5 space-y-3">
                <div className="flex items-center gap-2 text-indigo-400 font-semibold text-xs uppercase tracking-wider">
                  <Compass className="w-4 h-4" />
                  Strategic Consulting
                </div>
                <ul className="space-y-2 text-xs text-neutral-300">
                  {selectedIndustry.consultingAndStrategy.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* AI & Analytics Opportunities */}
              <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-5 space-y-3">
                <div className="flex items-center gap-2 text-emerald-400 font-semibold text-xs uppercase tracking-wider">
                  <Sparkles className="w-4 h-4" />
                  AI & Automation
                </div>
                <ul className="space-y-2 text-xs text-neutral-300">
                  {selectedIndustry.aiOpportunities.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Capability Building & Systems */}
              <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-5 space-y-3">
                <div className="flex items-center gap-2 text-amber-400 font-semibold text-xs uppercase tracking-wider">
                  <GraduationCap className="w-4 h-4" />
                  Capability & Enterprise
                </div>
                <div className="space-y-2">
                  <div className="text-[11px] font-mono text-neutral-400">Custom Training:</div>
                  <ul className="space-y-1.5 text-xs text-neutral-300">
                    {selectedIndustry.capabilityBuilding.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                        <span className="line-clamp-2">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-2 border-t border-white/5">
                    <div className="text-[11px] font-mono text-neutral-400">Systems:</div>
                    <ul className="space-y-1 text-xs text-neutral-300">
                      {selectedIndustry.enterpriseSolutions.map((item, idx) => (
                        <li key={idx} className="text-neutral-300 text-[11px] line-clamp-1">
                          • {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Illustrative Engagement Bento Card (Rich Dossier Example) */}
            <div className="bg-[#0a0a0a] border border-indigo-500/40 rounded-2xl p-6 md:p-8 space-y-6 shadow-[0_0_20px_rgba(99,102,241,0.15)]">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 pb-4 border-b border-white/10">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20">
                    Illustrative Capability • Example Engagement • Potential Solution
                  </span>
                  <h3 className="text-lg md:text-xl font-bold text-white mt-1.5">
                    {selectedIndustry.illustrativeEngagement.title}
                  </h3>
                </div>
                <div className="text-xs font-mono text-neutral-400">
                  Target Outcome Framework
                </div>
              </div>

              {/* 4-Step Narrative Flow */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-[#050505] border border-white/5 space-y-1.5">
                  <div className="text-xs font-mono text-rose-400 uppercase tracking-wider">01. The Client Challenge</div>
                  <p className="text-xs text-neutral-300 leading-relaxed">
                    {selectedIndustry.illustrativeEngagement.challenge}
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#050505] border border-white/5 space-y-1.5">
                  <div className="text-xs font-mono text-sky-400 uppercase tracking-wider">02. Primary Investigation</div>
                  <p className="text-xs text-neutral-300 leading-relaxed">
                    {selectedIndustry.illustrativeEngagement.investigation}
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#050505] border border-white/5 space-y-1.5">
                  <div className="text-xs font-mono text-indigo-400 uppercase tracking-wider">03. Strategic Intervention</div>
                  <p className="text-xs text-neutral-300 leading-relaxed">
                    {selectedIndustry.illustrativeEngagement.strategicDecision}
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#050505] border border-white/5 space-y-1.5">
                  <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider">04. AI & Systems Layer</div>
                  <p className="text-xs text-neutral-300 leading-relaxed">
                    {selectedIndustry.illustrativeEngagement.aiLayer}
                  </p>
                </div>
              </div>

              {/* Deliverables & Outcomes */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-white/5">
                <div>
                  <div className="text-xs font-semibold text-neutral-300 mb-2 flex items-center gap-1.5">
                    <FileText className="w-4 h-4 text-indigo-400" /> Typical Engagement Deliverables
                  </div>
                  <ul className="space-y-1.5 text-xs text-neutral-400">
                    {selectedIndustry.illustrativeEngagement.deliverables.map((d, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-indigo-400 font-mono">•</span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="text-xs font-semibold text-neutral-300 mb-2 flex items-center gap-1.5">
                    <TrendingUp className="w-4 h-4 text-emerald-400" /> Measured Business Impact
                  </div>
                  <ul className="space-y-1.5 text-xs text-neutral-300">
                    {selectedIndustry.illustrativeEngagement.outcomeFramework.map((out, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{out}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Sector Ecosystem Breakdown Grid */}
            <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <h3 className="text-sm font-semibold text-white flex items-center gap-2">
                  <Layers className="w-4 h-4 text-indigo-400" />
                  {selectedIndustry.name} Sector Ecosystem Dimensions
                </h3>
                <span className="text-xs font-mono text-neutral-500">8-Point Structural Map</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-[#050505] border border-white/5 space-y-1">
                  <div className="text-neutral-400 font-mono text-[10px] uppercase">Market Dynamics</div>
                  <div className="text-neutral-300 line-clamp-3">{selectedIndustry.sectorEcosystem.market}</div>
                </div>
                <div className="p-3 rounded-xl bg-[#050505] border border-white/5 space-y-1">
                  <div className="text-neutral-400 font-mono text-[10px] uppercase">Competitor Landscape</div>
                  <div className="text-neutral-300 line-clamp-3">{selectedIndustry.sectorEcosystem.competitors}</div>
                </div>
                <div className="p-3 rounded-xl bg-[#050505] border border-white/5 space-y-1">
                  <div className="text-neutral-400 font-mono text-[10px] uppercase">Customer Segments</div>
                  <div className="text-neutral-300 line-clamp-3">{selectedIndustry.sectorEcosystem.customers}</div>
                </div>
                <div className="p-3 rounded-xl bg-[#050505] border border-white/5 space-y-1">
                  <div className="text-neutral-400 font-mono text-[10px] uppercase">Regulatory Environment</div>
                  <div className="text-neutral-300 line-clamp-3">{selectedIndustry.sectorEcosystem.regulators}</div>
                </div>
                <div className="p-3 rounded-xl bg-[#050505] border border-white/5 space-y-1">
                  <div className="text-neutral-400 font-mono text-[10px] uppercase">Operational Workflows</div>
                  <div className="text-neutral-300 line-clamp-3">{selectedIndustry.sectorEcosystem.operations}</div>
                </div>
                <div className="p-3 rounded-xl bg-[#050505] border border-white/5 space-y-1">
                  <div className="text-neutral-400 font-mono text-[10px] uppercase">Technology Stack</div>
                  <div className="text-neutral-300 line-clamp-3">{selectedIndustry.sectorEcosystem.technology}</div>
                </div>
                <div className="p-3 rounded-xl bg-[#050505] border border-white/5 space-y-1">
                  <div className="text-neutral-400 font-mono text-[10px] uppercase">Workforce & Skills</div>
                  <div className="text-neutral-300 line-clamp-3">{selectedIndustry.sectorEcosystem.people}</div>
                </div>
                <div className="p-3 rounded-xl bg-[#050505] border border-white/5 space-y-1">
                  <div className="text-emerald-400 font-mono text-[10px] uppercase">AI & Automation</div>
                  <div className="text-neutral-300 line-clamp-3">{selectedIndustry.sectorEcosystem.aiOpportunities}</div>
                </div>
              </div>
            </div>

            {/* Bottom Engagement Action Bar */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-indigo-950/60 via-[#0a0a0a] to-[#0a0a0a] border border-indigo-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h4 className="font-semibold text-white text-base">
                  Ready to activate a project in {selectedIndustry.name}?
                </h4>
                <p className="text-xs text-neutral-400 mt-0.5">
                  Configure an engagement combining research, strategy, AI training, and custom systems.
                </p>
              </div>
              <button
                onClick={() => handleStartEngagement(selectedIndustry.name)}
                className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-sm font-semibold text-white transition-all shadow-[0_0_20px_rgba(99,102,241,0.3)] shrink-0 flex items-center justify-center gap-2"
              >
                Launch Engagement Builder <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
