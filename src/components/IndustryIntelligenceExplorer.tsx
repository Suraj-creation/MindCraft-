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

  const renderIcon = (iconName: string, className = "w-4 h-4") => {
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
    <div className="w-full bg-[#F4F1EA] min-h-screen text-[#16191A] py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Editorial Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-[rgba(20,25,26,0.12)]">
          <div>
            <div className="font-mono text-[11px] tracking-widest uppercase text-[#C0562F] mb-3">
              Universal Industry Intelligence Explorer
            </div>
            <h1 className="font-serif text-3xl md:text-5xl font-normal tracking-tight text-[#16191A]">
              24 Industry Verticals
            </h1>
            <p className="text-[#4C524E] text-sm md:text-base mt-2 max-w-2xl leading-relaxed">
              6 Core Life Sciences sub-sectors and 18 diversified African enterprise verticals. Inspect field research methodologies, strategic consulting questions, applied AI training, and custom enterprise systems for each.
            </p>
          </div>

          {/* View Toggle */}
          <div className="flex items-center gap-2 p-1.5 bg-[#ECE7DC] border border-[rgba(20,25,26,0.1)] rounded-xl self-start lg:self-auto">
            <button
              onClick={() => setViewMode('dossier')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold tracking-wide transition-all ${
                viewMode === 'dossier'
                  ? 'bg-[#123A2E] text-white shadow-sm'
                  : 'text-[#4C524E] hover:text-[#16191A]'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              Industry Dossiers
            </button>
            <button
              onClick={() => setViewMode('matrix')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold tracking-wide transition-all ${
                viewMode === 'matrix'
                  ? 'bg-[#123A2E] text-white shadow-sm'
                  : 'text-[#4C524E] hover:text-[#16191A]'
              }`}
            >
              <TableProperties className="w-3.5 h-3.5" />
              24 × 4 Capability Matrix
            </button>
          </div>
        </div>

        {viewMode === 'matrix' ? (
          /* ========================================================================= */
          /* 24 × 4 INDUSTRY CAPABILITY MATRIX */
          /* ========================================================================= */
          <div className="space-y-6">
            <div className="bg-[#FBFAF6] border border-[rgba(20,25,26,0.12)] rounded-2xl p-6 sm:p-8 shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                  <h2 className="font-serif text-2xl text-[#16191A] font-normal flex items-center gap-2">
                    <TableProperties className="w-5 h-5 text-[#123A2E]" />
                    Cross-Industry Capability Coverage Matrix
                  </h2>
                  <p className="text-xs sm:text-sm text-[#4C524E] mt-1">
                    Inspect how MindCraft’s 4 pillars (Consulting, Research, AI Training, Enterprise Solutions) deploy across all 24 verticals.
                  </p>
                </div>
                <div className="flex items-center gap-4 text-xs font-mono text-[#6A6F6B]">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#123A2E]"></span> Core Life Sciences (6)
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#C0562F]"></span> Diversified Verticals (18)
                  </span>
                </div>
              </div>

              <div className="overflow-x-auto border border-[rgba(20,25,26,0.1)] rounded-xl bg-white">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-[rgba(20,25,26,0.1)] bg-[#F4F1EA] text-[#3B4441] font-mono">
                      <th className="p-3.5 font-semibold min-w-[200px]">Industry Vertical</th>
                      <th className="p-3.5 font-semibold min-w-[140px]">Classification</th>
                      <th className="p-3.5 font-semibold min-w-[200px]">Strategic Consulting</th>
                      <th className="p-3.5 font-semibold min-w-[200px]">Primary Research</th>
                      <th className="p-3.5 font-semibold min-w-[200px]">AI Training</th>
                      <th className="p-3.5 font-semibold min-w-[200px]">Enterprise AI Solutions</th>
                      <th className="p-3.5 font-semibold text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[rgba(20,25,26,0.06)]">
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
                              ? 'bg-[#123A2E]/5 hover:bg-[#123A2E]/10' 
                              : 'hover:bg-[#F4F1EA]/50'
                          }`}
                        >
                          <td className="p-3.5 font-medium text-[#16191A] flex items-center gap-2.5">
                            <span className={`p-1.5 rounded-lg ${isCore ? 'bg-[#123A2E] text-white' : 'bg-[#ECE7DC] text-[#3B4441]'}`}>
                              {renderIcon(ind.designMetaphor.icon, "w-3.5 h-3.5")}
                            </span>
                            <span className="font-semibold text-sm">{ind.name}</span>
                          </td>
                          <td className="p-3.5">
                            <span className={`px-2 py-0.5 rounded text-[10px] font-mono uppercase ${
                              isCore 
                                ? 'bg-[#123A2E]/10 text-[#123A2E] font-bold' 
                                : 'bg-[#C0562F]/10 text-[#C0562F] font-bold'
                            }`}>
                              {isCore ? 'Life Sciences' : 'Diversified'}
                            </span>
                          </td>
                          <td className="p-3.5 text-[#3B4441]">
                            {ind.consultingAndStrategy[0]}
                          </td>
                          <td className="p-3.5 text-[#3B4441]">
                            {ind.researchAndIntelligence[0]}
                          </td>
                          <td className="p-3.5 text-[#3B4441]">
                            {ind.capabilityBuilding[0]}
                          </td>
                          <td className="p-3.5 text-[#3B4441]">
                            {ind.enterpriseSolutions[0]}
                          </td>
                          <td className="p-3.5 text-right">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setSelectedIndustryId(ind.id);
                                setViewMode('dossier');
                              }}
                              className="px-3 py-1 rounded bg-[#123A2E] hover:bg-[#C0562F] text-white font-medium text-[11px] transition-colors"
                            >
                              Dossier
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ) : (
          /* ========================================================================= */
          /* DOSSIER VIEW (Selector List + Comprehensive 10-Part Detail) */
          /* ========================================================================= */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left Column: Selector List & Filters (4 cols) */}
            <div className="lg:col-span-4 space-y-4">
              
              {/* Search & Filter Card */}
              <div className="bg-[#FBFAF6] border border-[rgba(20,25,26,0.12)] rounded-2xl p-4 space-y-3 shadow-sm">
                <div className="relative">
                  <Search className="w-4 h-4 text-[#8A8578] absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search 24 industry sectors..."
                    className="w-full bg-white border border-[rgba(20,25,26,0.12)] rounded-xl pl-9 pr-3 py-2 text-xs text-[#16191A] placeholder-[#8A8578] focus:outline-none focus:border-[#123A2E]"
                  />
                </div>

                {/* Filter Pills */}
                <div className="grid grid-cols-3 gap-1.5 p-1 bg-[#ECE7DC] rounded-xl text-[11px] font-mono">
                  <button
                    onClick={() => setActiveCategoryFilter('all')}
                    className={`py-1.5 rounded-lg font-medium transition-all ${
                      activeCategoryFilter === 'all'
                        ? 'bg-[#123A2E] text-white'
                        : 'text-[#4C524E] hover:text-[#16191A]'
                    }`}
                  >
                    All (24)
                  </button>
                  <button
                    onClick={() => setActiveCategoryFilter('core-lifesciences')}
                    className={`py-1.5 rounded-lg font-medium transition-all ${
                      activeCategoryFilter === 'core-lifesciences'
                        ? 'bg-[#123A2E] text-white'
                        : 'text-[#4C524E] hover:text-[#16191A]'
                    }`}
                  >
                    Life Sci (6)
                  </button>
                  <button
                    onClick={() => setActiveCategoryFilter('diversified-vertical')}
                    className={`py-1.5 rounded-lg font-medium transition-all ${
                      activeCategoryFilter === 'diversified-vertical'
                        ? 'bg-[#123A2E] text-white'
                        : 'text-[#4C524E] hover:text-[#16191A]'
                    }`}
                  >
                    Verts (18)
                  </button>
                </div>
              </div>

              {/* Selector List */}
              <div className="space-y-2 max-h-[720px] overflow-y-auto pr-1">
                {filteredIndustries.map((ind) => {
                  const isSelected = selectedIndustryId === ind.id;
                  const isCore = ind.category === 'core-lifesciences';
                  return (
                    <button
                      key={ind.id}
                      onClick={() => setSelectedIndustryId(ind.id)}
                      className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-start gap-3 ${
                        isSelected
                          ? 'bg-[#123A2E] border-[#123A2E] text-white shadow-sm'
                          : 'bg-[#FBFAF6] border-[rgba(20,25,26,0.1)] text-[#3B4441] hover:border-[#123A2E]'
                      }`}
                    >
                      <div className={`p-2 rounded-lg border shrink-0 ${
                        isSelected
                          ? 'bg-white/10 text-[#D98A5F] border-white/20'
                          : 'bg-white text-[#123A2E] border-[rgba(20,25,26,0.1)]'
                      }`}>
                        {renderIcon(ind.designMetaphor.icon, "w-4 h-4")}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-1 mb-0.5">
                          <span className={`font-semibold text-sm truncate ${isSelected ? 'text-white' : 'text-[#16191A]'}`}>
                            {ind.name}
                          </span>
                          {isCore && (
                            <span className={`text-[9px] font-mono px-1.5 py-0.5 rounded uppercase font-bold shrink-0 ${
                              isSelected ? 'bg-white/20 text-[#EDE7D9]' : 'bg-[#123A2E]/10 text-[#123A2E]'
                            }`}>
                              Core
                            </span>
                          )}
                        </div>
                        <p className={`text-xs line-clamp-1 ${isSelected ? 'text-[#EDE7D9]/80' : 'text-[#6A6F6B]'}`}>
                          {ind.tagline}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>

            </div>

            {/* Right Column: Full Detailed Industry Dossier (8 cols) */}
            <div className="lg:col-span-8 space-y-6">
              
              {/* Header Box */}
              <div className="border border-[rgba(20,25,26,0.14)] rounded-2xl bg-[#FBFAF6] p-6 sm:p-8 space-y-6 shadow-sm">
                
                <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[rgba(20,25,26,0.08)]">
                  <div className="flex items-center gap-2">
                    <span className={`px-2.5 py-1 text-[10px] font-mono tracking-wider uppercase font-bold rounded ${
                      selectedIndustry.category === 'core-lifesciences'
                        ? 'bg-[#123A2E]/10 text-[#123A2E]'
                        : 'bg-[#C0562F]/10 text-[#C0562F]'
                    }`}>
                      {selectedIndustry.category === 'core-lifesciences' ? 'Core Life Sciences Heritage' : 'Diversified Industry Vertical'}
                    </span>
                    {selectedIndustry.heritageNote && (
                      <span className="text-xs text-[#8A8578] font-mono">
                        • {selectedIndustry.heritageNote}
                      </span>
                    )}
                  </div>
                  <button
                    onClick={() => handleStartEngagement(selectedIndustry.name)}
                    className="px-4 py-2 rounded-lg bg-[#123A2E] hover:bg-[#C0562F] text-xs font-semibold text-white transition-colors flex items-center gap-1.5"
                  >
                    <span>Engage in {selectedIndustry.name}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div>
                  <h2 className="font-serif text-3xl sm:text-4xl text-[#16191A] font-normal">
                    {selectedIndustry.name}
                  </h2>
                  <p className="text-[#C0562F] font-serif italic text-base sm:text-lg mt-1">
                    {selectedIndustry.tagline}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[rgba(20,25,26,0.08)]">
                  <div className="font-mono text-[10px] uppercase font-bold text-[#8A8578] mb-1">
                    Industry Context & Structural Dynamics
                  </div>
                  <p className="text-xs sm:text-sm text-[#3B4441] leading-relaxed">
                    {selectedIndustry.context}
                  </p>
                </div>

              </div>

              {/* Grid: Key Questions & Primary Research */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Questions */}
                <div className="bg-[#FBFAF6] border border-[rgba(20,25,26,0.12)] rounded-2xl p-6 space-y-4">
                  <div className="font-mono text-[10px] uppercase font-bold text-[#C0562F] flex items-center gap-1.5">
                    <HelpCircle className="w-3.5 h-3.5" />
                    <span>01 · Strategic & Operational Questions</span>
                  </div>
                  <div className="space-y-2">
                    {selectedIndustry.keyQuestions.map((q, idx) => (
                      <div key={idx} className="p-3 rounded-lg bg-white border border-[rgba(20,25,26,0.08)] text-xs text-[#3B4441] flex items-start gap-2">
                        <span className="font-mono text-[#123A2E] font-bold">Q{idx + 1}</span>
                        <span>{q}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Research Methods */}
                <div className="bg-[#FBFAF6] border border-[rgba(20,25,26,0.12)] rounded-2xl p-6 space-y-4">
                  <div className="font-mono text-[10px] uppercase font-bold text-[#123A2E] flex items-center gap-1.5">
                    <Search className="w-3.5 h-3.5" />
                    <span>02 · Research & Intelligence Methods</span>
                  </div>
                  <ul className="space-y-2">
                    {selectedIndustry.researchAndIntelligence.map((item, idx) => (
                      <li key={idx} className="p-3 rounded-lg bg-white border border-[rgba(20,25,26,0.08)] text-xs text-[#3B4441] flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#123A2E] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Grid 3: Strategic Consulting, AI Opportunities & Training */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                <div className="bg-[#FBFAF6] border border-[rgba(20,25,26,0.12)] rounded-2xl p-5 space-y-3">
                  <div className="font-mono text-[10px] uppercase font-bold text-[#123A2E] flex items-center gap-1.5">
                    <Compass className="w-3.5 h-3.5" />
                    <span>03 · Consulting</span>
                  </div>
                  <ul className="space-y-2 text-xs text-[#3B4441]">
                    {selectedIndustry.consultingAndStrategy.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#123A2E] font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-[#FBFAF6] border border-[rgba(20,25,26,0.12)] rounded-2xl p-5 space-y-3">
                  <div className="font-mono text-[10px] uppercase font-bold text-[#C0562F] flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>04 · AI & Automation</span>
                  </div>
                  <ul className="space-y-2 text-xs text-[#3B4441]">
                    {selectedIndustry.aiOpportunities.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#C0562F] font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-[#FBFAF6] border border-[rgba(20,25,26,0.12)] rounded-2xl p-5 space-y-3">
                  <div className="font-mono text-[10px] uppercase font-bold text-[#123A2E] flex items-center gap-1.5">
                    <GraduationCap className="w-3.5 h-3.5" />
                    <span>05 · Systems & Training</span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-[#3B4441]">
                    {selectedIndustry.capabilityBuilding.slice(0, 2).map((item, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="text-[#123A2E] font-bold">✓</span>
                        <span className="line-clamp-2">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Illustrative Engagement Scenario Dossier */}
              <div className="border border-[rgba(20,25,26,0.14)] rounded-2xl bg-[#FBFAF6] p-6 sm:p-8 space-y-6 shadow-sm">
                
                <div className="pb-4 border-b border-[rgba(20,25,26,0.08)]">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#C0562F] font-bold">
                    Illustrative Engagement Architecture
                  </span>
                  <h3 className="font-serif text-2xl text-[#16191A] font-normal mt-1">
                    "{selectedIndustry.illustrativeEngagement.title}"
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-white border border-[rgba(20,25,26,0.08)] space-y-1">
                    <div className="font-mono text-[10px] uppercase text-[#C0562F] font-bold">01 · Challenge</div>
                    <p className="text-xs text-[#3B4441] leading-relaxed">
                      {selectedIndustry.illustrativeEngagement.challenge}
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-white border border-[rgba(20,25,26,0.08)] space-y-1">
                    <div className="font-mono text-[10px] uppercase text-[#123A2E] font-bold">02 · Primary Investigation</div>
                    <p className="text-xs text-[#3B4441] leading-relaxed">
                      {selectedIndustry.illustrativeEngagement.investigation}
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-white border border-[rgba(20,25,26,0.08)] space-y-1">
                    <div className="font-mono text-[10px] uppercase text-[#123A2E] font-bold">03 · Strategic Intervention</div>
                    <p className="text-xs text-[#3B4441] leading-relaxed">
                      {selectedIndustry.illustrativeEngagement.strategicDecision}
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-white border border-[rgba(20,25,26,0.08)] space-y-1">
                    <div className="font-mono text-[10px] uppercase text-[#C0562F] font-bold">04 · AI Layer & Systems</div>
                    <p className="text-xs text-[#3B4441] leading-relaxed">
                      {selectedIndustry.illustrativeEngagement.aiLayer}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-[rgba(20,25,26,0.08)]">
                  <div>
                    <div className="text-xs font-mono font-bold text-[#16191A] mb-2 flex items-center gap-1.5 uppercase">
                      <FileText className="w-3.5 h-3.5 text-[#123A2E]" /> Expected Deliverables
                    </div>
                    <ul className="space-y-1.5 text-xs text-[#4C524E]">
                      {selectedIndustry.illustrativeEngagement.deliverables.map((d, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-[#123A2E] font-bold">•</span>
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="text-xs font-mono font-bold text-[#123A2E] mb-2 flex items-center gap-1.5 uppercase">
                      <TrendingUp className="w-3.5 h-3.5 text-[#C0562F]" /> Measured Business Impact
                    </div>
                    <ul className="space-y-1.5 text-xs text-[#3B4441] font-medium">
                      {selectedIndustry.illustrativeEngagement.outcomeFramework.map((out, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#123A2E] shrink-0 mt-0.5" />
                          <span>{out}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>

            </div>

          </div>
        )}

      </div>
    </div>
  );
};
