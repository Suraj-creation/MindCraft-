import React, { useState, useMemo } from 'react';
import { 
  Globe2, 
  Compass, 
  MapPin, 
  Building2, 
  Search, 
  Layers, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  FileText, 
  TrendingUp, 
  ShieldCheck, 
  Workflow, 
  HelpCircle,
  Network,
  Cpu,
  GraduationCap
} from 'lucide-react';
import { AFRICA_REGIONS_DATA, UNIVERSAL_INDUSTRIES } from '../data/industryAndAfricaData';
import { AFRICAN_COUNTRIES } from '../data/mindcraftData';
import { AfricaRegionName, NavTab } from '../types';

interface Props {
  onNavigate: (tab: NavTab) => void;
  onSelectCountryForEngagement?: (countryName: string) => void;
  onSelectIndustryForEngagement?: (industryName: string) => void;
}

export const AfricaIntelligenceExplorer: React.FC<Props> = ({ 
  onNavigate,
  onSelectCountryForEngagement,
  onSelectIndustryForEngagement
}) => {
  const [selectedRegionName, setSelectedRegionName] = useState<AfricaRegionName>('East Africa');
  const [selectedCountryName, setSelectedCountryName] = useState<string>('Kenya');
  const [crossoverIndustryId, setCrossoverIndustryId] = useState<string>('pharmaceuticals');
  const [activeTab, setActiveTab] = useState<'regional' | 'country' | 'crossover' | 'global-connector'>('regional');

  const selectedRegion = useMemo(() => {
    return AFRICA_REGIONS_DATA.find(r => r.name === selectedRegionName) || AFRICA_REGIONS_DATA[0];
  }, [selectedRegionName]);

  const selectedCountryDossier = useMemo(() => {
    const existing = AFRICAN_COUNTRIES.find(c => c.name.toLowerCase() === selectedCountryName.toLowerCase());
    if (existing) return existing;
    return {
      id: selectedCountryName.toLowerCase().replace(/[^a-z0-9]/g, '-'),
      name: selectedCountryName,
      region: selectedRegionName,
      capital: 'National Commercial Capital',
      currency: 'National Currency',
      marketHighlights: [
        `Strategic market access corridor within ${selectedRegionName}`,
        'Growing public and private healthcare expenditure',
        'Expanding regional trade integration and digital commerce'
      ],
      capabilityCoverage: {
        marketResearch: 'Primary key opinion leader and distributor interviews via local associate network',
        regulatoryIntelligence: 'National regulatory authority and ministry filing advisory',
        marketEntrySupport: 'Commercial distributor vetting and channel structuring',
        localAssociateNetwork: 'On-the-ground research associates and interviewers',
        trainingDelivery: 'Executive and field force digital capability building'
      },
      keySectors: ['Pharmaceuticals', 'Agribusiness', 'Financial Services', 'Consumer Goods'],
      typicalQuestions: [
        `What are the registration timelines and local agent requirements in ${selectedCountryName}?`,
        `Which distribution partners possess verified cold-chain and ethical compliance capacity in ${selectedCountryName}?`
      ],
      engagementModels: ['Market Assessment & Entry Roadmap', 'Regulatory Dossier Audit', 'Distributor Due Diligence']
    };
  }, [selectedCountryName, selectedRegionName]);

  const crossoverIndustry = useMemo(() => {
    return UNIVERSAL_INDUSTRIES.find(ind => ind.id === crossoverIndustryId) || UNIVERSAL_INDUSTRIES[0];
  }, [crossoverIndustryId]);

  const handleStartEngagement = (countryName: string, industryName?: string) => {
    if (onSelectCountryForEngagement) onSelectCountryForEngagement(countryName);
    if (industryName && onSelectIndustryForEngagement) onSelectIndustryForEngagement(industryName);
    onNavigate('engagement-builder');
  };

  return (
    <div className="w-full bg-[#F4F1EA] min-h-screen text-[#16191A] py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Editorial Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-[rgba(20,25,26,0.12)]">
          <div>
            <div className="font-mono text-[11px] tracking-widest uppercase text-[#C0562F] mb-3">
              Pan-African Intelligence Footprint
            </div>
            <h1 className="font-serif text-3xl md:text-5xl font-normal tracking-tight text-[#16191A]">
              Africa Intelligence Explorer
            </h1>
            <p className="text-[#4C524E] text-sm md:text-base mt-2 max-w-2xl leading-relaxed">
              4 Regional Clusters, 45+ jurisdictions, and our Nairobi Global HQ. Explore on-the-ground evidence, regulatory authorities, trade corridors, and commercial execution frameworks.
            </p>
          </div>

          {/* Sub-view switcher */}
          <div className="flex items-center gap-1.5 p-1.5 bg-[#ECE7DC] border border-[rgba(20,25,26,0.1)] rounded-xl overflow-x-auto self-start lg:self-auto scrollbar-none">
            <button
              onClick={() => setActiveTab('regional')}
              className={`px-3.5 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                activeTab === 'regional'
                  ? 'bg-[#123A2E] text-white shadow-sm'
                  : 'text-[#4C524E] hover:text-[#16191A]'
              }`}
            >
              Regional Clusters
            </button>
            <button
              onClick={() => setActiveTab('country')}
              className={`px-3.5 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                activeTab === 'country'
                  ? 'bg-[#123A2E] text-white shadow-sm'
                  : 'text-[#4C524E] hover:text-[#16191A]'
              }`}
            >
              Country Dossiers
            </button>
            <button
              onClick={() => setActiveTab('crossover')}
              className={`px-3.5 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                activeTab === 'crossover'
                  ? 'bg-[#123A2E] text-white shadow-sm'
                  : 'text-[#4C524E] hover:text-[#16191A]'
              }`}
            >
              Region × Industry Matrix
            </button>
            <button
              onClick={() => setActiveTab('global-connector')}
              className={`px-3.5 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                activeTab === 'global-connector'
                  ? 'bg-[#123A2E] text-white shadow-sm'
                  : 'text-[#4C524E] hover:text-[#16191A]'
              }`}
            >
              Africa as a Connector
            </button>
          </div>
        </div>

        {/* 4 Regional Selector Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {AFRICA_REGIONS_DATA.map((reg) => {
            const isSelected = selectedRegionName === reg.name;
            return (
              <button
                key={reg.name}
                onClick={() => {
                  setSelectedRegionName(reg.name);
                  setSelectedCountryName(reg.countries[0]);
                }}
                className={`p-4 rounded-xl border text-left transition-all ${
                  isSelected
                    ? 'bg-[#123A2E] border-[#123A2E] text-[#F4F1EA] shadow-md'
                    : 'bg-[#FBFAF6] border-[rgba(20,25,26,0.1)] text-[#3B4441] hover:border-[#123A2E]'
                }`}
              >
                <div className="flex items-center justify-between gap-1 mb-1">
                  <span className="font-semibold text-sm">{reg.name}</span>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${isSelected ? 'bg-white/10 text-white' : 'bg-[#ECE7DC] text-[#6A6F6B]'}`}>
                    {reg.countries.length} Markets
                  </span>
                </div>
                <p className={`text-xs line-clamp-1 ${isSelected ? 'text-[rgba(237,231,217,0.8)]' : 'text-[#6A6F6B]'}`}>
                  {reg.countries.slice(0, 4).join(', ')}...
                </p>
              </button>
            );
          })}
        </div>

        {/* ========================================================================= */}
        {/* VIEW 1: REGIONAL LANDING */}
        {/* ========================================================================= */}
        {activeTab === 'regional' && (
          <div className="space-y-6">
            <div className="bg-[#FBFAF6] border border-[rgba(20,25,26,0.12)] rounded-2xl p-6 sm:p-10 shadow-sm space-y-8">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-[rgba(20,25,26,0.08)]">
                <div>
                  <div className="font-mono text-[10px] tracking-widest uppercase text-[#C0562F] font-semibold mb-1">
                    Regional Cluster Overview
                  </div>
                  <h2 className="font-serif text-3xl sm:text-4xl text-[#16191A] font-normal">
                    {selectedRegion.name}
                  </h2>
                  <p className="text-sm sm:text-base text-[#4C524E] font-serif italic mt-1">
                    {selectedRegion.headline}
                  </p>
                </div>
                <button
                  onClick={() => onNavigate('market-entry')}
                  className="px-5 py-2.5 rounded-lg bg-[#123A2E] hover:bg-[#C0562F] text-xs font-semibold text-white transition-colors shrink-0 flex items-center gap-2"
                >
                  <span>9-Step Market Entry Blueprint</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                
                {/* Left: Regional Context & Countries List (5 cols) */}
                <div className="lg:col-span-5 space-y-5">
                  <div className="p-5 rounded-xl bg-white border border-[rgba(20,25,26,0.08)] space-y-2">
                    <div className="font-mono text-[10px] uppercase font-bold text-[#8A8578]">Regional Context</div>
                    <p className="text-xs sm:text-sm text-[#3B4441] leading-relaxed">
                      {selectedRegion.regionalContext}
                    </p>
                  </div>

                  <div className="bg-white border border-[rgba(20,25,26,0.08)] rounded-xl p-5 space-y-3">
                    <div className="font-mono text-[10px] uppercase font-bold text-[#8A8578] flex items-center justify-between">
                      <span>Jurisdictions ({selectedRegion.countries.length})</span>
                      <span className="text-[#123A2E]">Select to view dossier</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {selectedRegion.countries.map((cName) => (
                        <button
                          key={cName}
                          onClick={() => {
                            setSelectedCountryName(cName);
                            setActiveTab('country');
                          }}
                          className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                            selectedCountryName === cName
                              ? 'bg-[#123A2E] text-white font-semibold'
                              : 'bg-[#FBFAF6] text-[#3B4441] border border-[rgba(20,25,26,0.1)] hover:border-[#123A2E]'
                          }`}
                        >
                          {cName}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right: Research Capabilities & Strategic Questions (7 cols) */}
                <div className="lg:col-span-7 space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    
                    {/* Research Capabilities */}
                    <div className="p-5 rounded-xl bg-white border border-[rgba(20,25,26,0.08)] space-y-2">
                      <div className="font-mono text-[10px] uppercase font-bold text-[#123A2E] flex items-center gap-1.5">
                        <Search className="w-3.5 h-3.5" />
                        <span>Primary Field Capabilities</span>
                      </div>
                      <ul className="space-y-2 text-xs sm:text-sm text-[#3B4441]">
                        {selectedRegion.researchCapability.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#123A2E] shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* High-Growth Sectors */}
                    <div className="p-5 rounded-xl bg-white border border-[rgba(20,25,26,0.08)] space-y-2">
                      <div className="font-mono text-[10px] uppercase font-bold text-[#C0562F] flex items-center gap-1.5">
                        <Building2 className="w-3.5 h-3.5" />
                        <span>High-Opportunity Sectors</span>
                      </div>
                      <ul className="space-y-2 text-xs sm:text-sm text-[#3B4441]">
                        {selectedRegion.industryOpportunity.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-[#C0562F] font-bold">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>

                  {/* Strategic Questions */}
                  <div className="p-5 rounded-xl bg-white border border-[rgba(20,25,26,0.08)] space-y-3">
                    <div className="font-mono text-[10px] uppercase font-bold text-[#8A8578] flex items-center gap-1.5">
                      <HelpCircle className="w-3.5 h-3.5 text-[#C0562F]" />
                      <span>Priority Regional Strategic Questions</span>
                    </div>
                    <div className="space-y-2">
                      {selectedRegion.strategicQuestions.map((q, idx) => (
                        <div key={idx} className="text-xs sm:text-sm text-[#3B4441] flex items-start gap-2">
                          <span className="font-mono text-[#123A2E] font-bold">Q{idx + 1}:</span>
                          <span>{q}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW 2: COUNTRY DOSSIER */}
        {/* ========================================================================= */}
        {activeTab === 'country' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Country Selector Column (4 cols) */}
            <div className="lg:col-span-4 space-y-4">
              <div className="bg-[#FBFAF6] border border-[rgba(20,25,26,0.12)] rounded-2xl p-5 space-y-3 shadow-sm">
                <div className="font-mono text-[10px] text-[#8A8578] uppercase font-bold tracking-wider">
                  {selectedRegionName} Jurisdictions ({selectedRegion.countries.length})
                </div>
                <div className="space-y-1.5 max-h-[600px] overflow-y-auto pr-1">
                  {selectedRegion.countries.map((cName) => {
                    const isSelected = selectedCountryName === cName;
                    return (
                      <button
                        key={cName}
                        onClick={() => setSelectedCountryName(cName)}
                        className={`w-full text-left p-3 rounded-xl border transition-all flex items-center justify-between ${
                          isSelected
                            ? 'bg-[#123A2E] border-[#123A2E] text-white shadow-sm'
                            : 'bg-white border-[rgba(20,25,26,0.08)] text-[#3B4441] hover:border-[#123A2E]'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <MapPin className={`w-3.5 h-3.5 ${isSelected ? 'text-[#D98A5F]' : 'text-[#8A8578]'}`} />
                          <span className="text-xs font-semibold">{cName}</span>
                        </div>
                        {cName === 'Kenya' && (
                          <span className={`text-[9px] font-mono px-2 py-0.5 rounded font-bold ${
                            isSelected ? 'bg-white/20 text-white' : 'bg-[#123A2E]/10 text-[#123A2E]'
                          }`}>
                            HQ
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Country Dossier Details (8 cols) */}
            <div className="lg:col-span-8 space-y-6">
              <div className="bg-[#FBFAF6] border border-[rgba(20,25,26,0.14)] rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm">
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[rgba(20,25,26,0.08)]">
                  <div>
                    <div className="font-mono text-[10px] tracking-widest uppercase text-[#C0562F] font-bold mb-1">
                      {selectedCountryDossier.region} Market Dossier
                    </div>
                    <h2 className="font-serif text-3xl sm:text-4xl text-[#16191A] font-normal">
                      {selectedCountryDossier.name}
                    </h2>
                    <p className="text-xs sm:text-sm text-[#8A8578] font-mono mt-1">
                      Capital: {selectedCountryDossier.capital} • Currency: {selectedCountryDossier.currency}
                    </p>
                  </div>
                  <button
                    onClick={() => handleStartEngagement(selectedCountryDossier.name)}
                    className="px-5 py-2.5 rounded-lg bg-[#123A2E] hover:bg-[#C0562F] text-xs font-semibold text-white transition-colors shrink-0 flex items-center gap-2"
                  >
                    <span>Engage in {selectedCountryDossier.name}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Market Highlights */}
                <div className="space-y-3">
                  <div className="font-mono text-[10px] uppercase font-bold text-[#8A8578]">
                    Market Highlights & Growth Drivers
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {selectedCountryDossier.marketHighlights.map((hl, idx) => (
                      <div key={idx} className="p-4 rounded-xl bg-white border border-[rgba(20,25,26,0.08)] text-xs text-[#3B4441] leading-relaxed">
                        {hl}
                      </div>
                    ))}
                  </div>
                </div>

                {/* MindCraft Capability Coverage in Country */}
                <div className="space-y-3 pt-2">
                  <div className="font-mono text-[10px] uppercase font-bold text-[#123A2E]">
                    MindCraft Execution Capabilities in {selectedCountryDossier.name}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                    <div className="p-4 rounded-xl bg-white border border-[rgba(20,25,26,0.08)] space-y-1">
                      <span className="font-semibold text-[#16191A]">Primary Field Research:</span>
                      <p className="text-[#4C524E]">{selectedCountryDossier.capabilityCoverage.marketResearch}</p>
                    </div>
                    <div className="p-4 rounded-xl bg-white border border-[rgba(20,25,26,0.08)] space-y-1">
                      <span className="font-semibold text-[#16191A]">Regulatory Intelligence:</span>
                      <p className="text-[#4C524E]">{selectedCountryDossier.capabilityCoverage.regulatoryIntelligence}</p>
                    </div>
                    <div className="p-4 rounded-xl bg-white border border-[rgba(20,25,26,0.08)] space-y-1">
                      <span className="font-semibold text-[#16191A]">Distributor & Channel Structuring:</span>
                      <p className="text-[#4C524E]">{selectedCountryDossier.capabilityCoverage.marketEntrySupport}</p>
                    </div>
                    <div className="p-4 rounded-xl bg-white border border-[rgba(20,25,26,0.08)] space-y-1">
                      <span className="font-semibold text-[#16191A]">Local Associates & Training:</span>
                      <p className="text-[#4C524E]">{selectedCountryDossier.capabilityCoverage.localAssociateNetwork}</p>
                    </div>
                  </div>
                </div>

                {/* Strategic Questions for this Country */}
                <div className="p-5 rounded-xl bg-[#123A2E]/5 border border-[#123A2E]/15 space-y-2">
                  <div className="font-mono text-[10px] uppercase font-bold text-[#123A2E] flex items-center gap-1.5">
                    <HelpCircle className="w-3.5 h-3.5 text-[#C0562F]" />
                    <span>Priority Investigation Questions in {selectedCountryDossier.name}</span>
                  </div>
                  <div className="space-y-2 text-xs sm:text-sm text-[#16191A]">
                    {selectedCountryDossier.typicalQuestions.map((q, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <span className="font-mono text-[#C0562F] font-bold">Q{idx + 1}:</span>
                        <span>{q}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>

          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW 3: CROSSOVER ENGINE */}
        {/* ========================================================================= */}
        {activeTab === 'crossover' && (
          <div className="bg-[#FBFAF6] border border-[rgba(20,25,26,0.12)] rounded-2xl p-6 sm:p-10 shadow-sm space-y-8">
            <div className="pb-4 border-b border-[rgba(20,25,26,0.08)]">
              <div className="font-mono text-[10px] tracking-widest uppercase text-[#C0562F] font-semibold mb-1">
                Interactive Cross-Matrix Engine
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#16191A] font-normal">
                Region × Industry Crossover
              </h2>
              <p className="text-sm text-[#4C524E] mt-1">
                Select an African Region and an Industry Sector to synthesize a tailored market-entry and intelligence architecture.
              </p>
            </div>

            {/* Selectors */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="font-mono text-[10px] uppercase font-bold text-[#8A8578]">Target Geography</label>
                <select
                  value={selectedRegionName}
                  onChange={(e) => setSelectedRegionName(e.target.value as AfricaRegionName)}
                  className="w-full bg-white border border-[rgba(20,25,26,0.14)] rounded-xl px-4 py-2.5 text-sm text-[#16191A] focus:outline-none focus:border-[#123A2E]"
                >
                  {AFRICA_REGIONS_DATA.map(r => (
                    <option key={r.name} value={r.name}>{r.name} ({r.countries.length} Jurisdictions)</option>
                  ))}
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="font-mono text-[10px] uppercase font-bold text-[#8A8578]">Target Industry Sector</label>
                <select
                  value={crossoverIndustryId}
                  onChange={(e) => setCrossoverIndustryId(e.target.value)}
                  className="w-full bg-white border border-[rgba(20,25,26,0.14)] rounded-xl px-4 py-2.5 text-sm text-[#16191A] focus:outline-none focus:border-[#123A2E]"
                >
                  {UNIVERSAL_INDUSTRIES.map(ind => (
                    <option key={ind.id} value={ind.id}>
                      {ind.name} ({ind.category === 'core-lifesciences' ? 'Life Sciences' : 'Diversified'})
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Synthesized Pathway Dossier */}
            <div className="p-6 sm:p-8 rounded-xl bg-white border border-[rgba(20,25,26,0.12)] space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[rgba(20,25,26,0.08)]">
                <div>
                  <div className="font-mono text-[10px] uppercase font-bold text-[#C0562F]">Synthesized Strategy Pathway</div>
                  <h3 className="font-serif text-2xl text-[#16191A] font-normal mt-1">
                    {crossoverIndustry.name} Strategy across {selectedRegion.name}
                  </h3>
                </div>
                <button
                  onClick={() => handleStartEngagement(selectedRegion.name, crossoverIndustry.name)}
                  className="px-5 py-2.5 rounded-lg bg-[#123A2E] hover:bg-[#C0562F] text-xs font-semibold text-white transition-colors shrink-0 flex items-center gap-2"
                >
                  <span>Configure Engagement</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-5 rounded-xl bg-[#FBFAF6] border border-[rgba(20,25,26,0.08)] space-y-2">
                  <div className="font-mono text-[10px] uppercase font-bold text-[#123A2E] flex items-center gap-1.5">
                    <Search className="w-3.5 h-3.5" />
                    <span>01 · Field Investigation</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#3B4441] leading-relaxed">
                    Deploying structured key opinion leader audits, distributor vetting, and customer pricing elasticity across {selectedRegion.countries.slice(0, 3).join(', ')}.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-[#FBFAF6] border border-[rgba(20,25,26,0.08)] space-y-2">
                  <div className="font-mono text-[10px] uppercase font-bold text-[#123A2E] flex items-center gap-1.5">
                    <Compass className="w-3.5 h-3.5" />
                    <span>02 · Strategic Decision</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#3B4441] leading-relaxed">
                    {crossoverIndustry.consultingAndStrategy[0] || 'Optimizing go-to-market structure and local regulatory compliance.'}
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-[#FBFAF6] border border-[rgba(20,25,26,0.08)] space-y-2">
                  <div className="font-mono text-[10px] uppercase font-bold text-[#C0562F] flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5" />
                    <span>03 · Enterprise AI Layer</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#3B4441] leading-relaxed">
                    {crossoverIndustry.enterpriseSolutions[0] || 'Continuous competitive intelligence and tender tracking platform.'}
                  </p>
                </div>
              </div>
            </div>

          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW 4: AFRICA AS A CONNECTOR */}
        {/* ========================================================================= */}
        {activeTab === 'global-connector' && (
          <div className="bg-[#FBFAF6] border border-[rgba(20,25,26,0.12)] rounded-2xl p-6 sm:p-10 shadow-sm space-y-8">
            <div className="max-w-3xl space-y-2">
              <div className="font-mono text-[10px] tracking-widest uppercase text-[#C0562F] font-bold">
                Global Footprint & Strategic Topology
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#16191A]">
                Africa as a Global Connector
              </h2>
              <p className="text-sm sm:text-base text-[#4C524E] leading-relaxed">
                MindCraft serves as the bi-directional bridge connecting international innovation hubs (North America, Europe, Asia) with dynamic African commercial ecosystems.
              </p>
            </div>

            {/* Tri-Hub Global Node Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div className="p-6 rounded-xl bg-white border border-[rgba(20,25,26,0.08)] space-y-3">
                <div className="font-mono text-[10px] uppercase text-[#8A8578] font-bold">Originating Hub</div>
                <h3 className="font-serif text-xl font-normal text-[#16191A]">United States & Canada</h3>
                <p className="text-xs sm:text-sm text-[#4C524E] leading-relaxed">
                  Supporting global pharma innovators, medical device OEMs, technology enterprises, and investors seeking validated African market entry and regulatory navigation.
                </p>
                <div className="font-mono text-[11px] text-[#8A8578] pt-3 border-t border-[rgba(20,25,26,0.08)]">
                  Flow: Capital, IP, Advanced Technology
                </div>
              </div>

              <div className="p-6 rounded-xl bg-[#123A2E] text-[#EDE7D9] space-y-3 shadow-md">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase text-[#D98A5F] font-bold">Operational Hub</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-white">
                    Nairobi Global HQ
                  </span>
                </div>
                <h3 className="font-serif text-xl font-normal text-[#F4F1EA]">MindCraft Continental Core</h3>
                <p className="text-xs sm:text-sm text-[rgba(237,231,217,0.8)] leading-relaxed">
                  Central coordination hub orchestrating primary research, strategic consulting, role-based AI training cohorts, and enterprise AI software builds across Africa.
                </p>
                <div className="font-mono text-[11px] text-[#D98A5F] pt-3 border-t border-white/15">
                  Network: 500+ KOLs • Field Associates • Regulatory Experts
                </div>
              </div>

              <div className="p-6 rounded-xl bg-white border border-[rgba(20,25,26,0.08)] space-y-3">
                <div className="font-mono text-[10px] uppercase text-[#8A8578] font-bold">International Node</div>
                <h3 className="font-serif text-xl font-normal text-[#16191A]">Europe & International Hubs</h3>
                <p className="text-xs sm:text-sm text-[#4C524E] leading-relaxed">
                  Partnering with European pharmaceutical manufacturers, development finance institutions, and multinational brand owners on sustainable commercial expansion.
                </p>
                <div className="font-mono text-[11px] text-[#8A8578] pt-3 border-t border-[rgba(20,25,26,0.08)]">
                  Flow: HEOR Research, Public-Private Partnerships
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
};
