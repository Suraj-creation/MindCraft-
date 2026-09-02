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
    // Fallback synthesized dossier for non-prepopulated countries in the regional list
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
    <div className="w-full min-h-screen bg-[#050505] text-white p-4 md:p-8 space-y-8">
      {/* Header & Main Views */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 pb-6 border-b border-white/10">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="px-3 py-1 text-xs font-mono tracking-wider uppercase rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              Pan-African Intelligence Footprint
            </span>
            <span className="text-xs text-neutral-400 font-mono">
              4 Regional Clusters • 45 Jurisdictions • Nairobi Global HQ
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
            Africa Intelligence Explorer
          </h1>
          <p className="text-neutral-400 text-sm md:text-base mt-1 max-w-3xl">
            In-depth on-the-ground intelligence, regulatory tracking, healthcare systems, and commercial execution frameworks across East, West, Southern, and North Africa.
          </p>
        </div>

        {/* Sub-view switcher */}
        <div className="flex items-center gap-1.5 p-1 bg-[#0a0a0a] border border-white/10 rounded-xl overflow-x-auto">
          <button
            onClick={() => setActiveTab('regional')}
            className={`px-3 py-2 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
              activeTab === 'regional'
                ? 'bg-indigo-600 text-white shadow-[0_0_12px_rgba(99,102,241,0.3)]'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            Regional Clusters
          </button>
          <button
            onClick={() => setActiveTab('country')}
            className={`px-3 py-2 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
              activeTab === 'country'
                ? 'bg-indigo-600 text-white shadow-[0_0_12px_rgba(99,102,241,0.3)]'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            Country Dossiers
          </button>
          <button
            onClick={() => setActiveTab('crossover')}
            className={`px-3 py-2 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
              activeTab === 'crossover'
                ? 'bg-indigo-600 text-white shadow-[0_0_12px_rgba(99,102,241,0.3)]'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            Africa × Industry Crossover
          </button>
          <button
            onClick={() => setActiveTab('global-connector')}
            className={`px-3 py-2 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
              activeTab === 'global-connector'
                ? 'bg-indigo-600 text-white shadow-[0_0_12px_rgba(99,102,241,0.3)]'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            Africa as a Connector
          </button>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 4 REGIONAL CLUSTERS SELECTOR BAR */}
      {/* ========================================================================= */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {AFRICA_REGIONS_DATA.map((reg) => {
          const isSelected = selectedRegionName === reg.name;
          return (
            <button
              key={reg.name}
              onClick={() => {
                setSelectedRegionName(reg.name);
                setSelectedCountryName(reg.countries[0]);
              }}
              className={`p-4 rounded-2xl border text-left transition-all relative overflow-hidden ${
                isSelected
                  ? 'bg-gradient-to-br from-indigo-950/60 to-[#0a0a0a] border-indigo-500/60 shadow-[0_0_15px_rgba(99,102,241,0.25)]'
                  : 'bg-[#0a0a0a] border-white/5 hover:border-white/20 hover:bg-white/[0.02]'
              }`}
            >
              <div className="flex items-center justify-between gap-1 mb-1">
                <span className="font-semibold text-sm text-white">{reg.name}</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-neutral-400 border border-white/10">
                  {reg.countries.length} Jurisdictions
                </span>
              </div>
              <p className="text-xs text-neutral-400 line-clamp-1">
                {reg.countries.slice(0, 4).join(', ')}...
              </p>
            </button>
          );
        })}
      </div>

      {/* ========================================================================= */}
      {/* VIEW: REGIONAL LANDING */}
      {/* ========================================================================= */}
      {activeTab === 'regional' && (
        <div className="space-y-6">
          <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 md:p-8 relative overflow-hidden">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-white/10">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-indigo-400 mb-1">
                  <Globe2 className="w-4 h-4" /> REGIONAL CLUSTER PROFILE
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  {selectedRegion.name}
                </h2>
                <p className="text-sm text-indigo-300 font-medium mt-1">
                  {selectedRegion.headline}
                </p>
              </div>
              <button
                onClick={() => onNavigate('market-entry')}
                className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-xs font-semibold text-white transition-all shadow-[0_0_15px_rgba(99,102,241,0.3)] shrink-0 flex items-center gap-2"
              >
                Launch 9-Step Market Entry Framework <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6">
              {/* Left: Context & Country Roster (5 cols) */}
              <div className="lg:col-span-5 space-y-4">
                <div className="p-4 rounded-xl bg-[#050505] border border-white/5 space-y-2">
                  <div className="text-xs font-mono text-neutral-400 uppercase">Regional Context</div>
                  <p className="text-xs text-neutral-300 leading-relaxed">
                    {selectedRegion.regionalContext}
                  </p>
                </div>

                <div className="bg-[#050505] border border-white/5 rounded-xl p-4 space-y-3">
                  <div className="text-xs font-mono text-neutral-400 uppercase flex items-center justify-between">
                    <span>Member Jurisdictions ({selectedRegion.countries.length})</span>
                    <span className="text-[10px] text-indigo-400">Click to Inspect</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {selectedRegion.countries.map((cName) => (
                      <button
                        key={cName}
                        onClick={() => {
                          setSelectedCountryName(cName);
                          setActiveTab('country');
                        }}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                          selectedCountryName === cName
                            ? 'bg-indigo-600 text-white shadow-[0_0_10px_rgba(99,102,241,0.3)]'
                            : 'bg-[#0a0a0a] text-neutral-300 border border-white/10 hover:border-white/30'
                        }`}
                      >
                        {cName}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right: Key Opportunities & Questions (7 cols) */}
              <div className="lg:col-span-7 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Research Capabilities */}
                  <div className="p-4 rounded-xl bg-[#050505] border border-white/5 space-y-2">
                    <div className="text-xs font-semibold text-sky-400 flex items-center gap-1.5">
                      <Search className="w-4 h-4" /> Primary Research Capabilities
                    </div>
                    <ul className="text-xs text-neutral-300 space-y-1.5">
                      {selectedRegion.researchCapability.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* High-Growth Industry Verticals */}
                  <div className="p-4 rounded-xl bg-[#050505] border border-white/5 space-y-2">
                    <div className="text-xs font-semibold text-indigo-400 flex items-center gap-1.5">
                      <Building2 className="w-4 h-4" /> High-Opportunity Sectors
                    </div>
                    <ul className="text-xs text-neutral-300 space-y-1.5">
                      {selectedRegion.industryOpportunity.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Key Regional Strategic Questions */}
                <div className="p-4 rounded-xl bg-[#050505] border border-white/5 space-y-2">
                  <div className="text-xs font-semibold text-amber-400 flex items-center gap-1.5">
                    <HelpCircle className="w-4 h-4" /> Core Strategic & Regulatory Questions
                  </div>
                  <div className="space-y-2">
                    {selectedRegion.strategicQuestions.map((q, idx) => (
                      <div key={idx} className="text-xs text-neutral-300 flex items-start gap-2">
                        <span className="font-mono text-amber-400">Q{idx + 1}:</span>
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
      {/* VIEW: COUNTRY DOSSIER */}
      {/* ========================================================================= */}
      {activeTab === 'country' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Country Selection Column (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-4 space-y-3">
              <div className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
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
                          ? 'bg-indigo-950/60 border-indigo-500/60 text-white shadow-[0_0_12px_rgba(99,102,241,0.25)]'
                          : 'bg-[#050505] border-white/5 text-neutral-300 hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <MapPin className={`w-4 h-4 ${isSelected ? 'text-indigo-400' : 'text-neutral-500'}`} />
                        <span className="text-xs font-medium">{cName}</span>
                      </div>
                      {cName === 'Kenya' && (
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                          HQ
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Detailed Country Dossier (8 cols) */}
          <div className="lg:col-span-8 space-y-6">
            <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 md:p-8 space-y-6">
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 mb-1">
                    <MapPin className="w-4 h-4" /> {selectedCountryDossier.region}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white">
                    {selectedCountryDossier.name} Market Dossier
                  </h2>
                  <p className="text-xs text-neutral-400 mt-1 font-mono">
                    Capital: {selectedCountryDossier.capital} • Currency: {selectedCountryDossier.currency}
                  </p>
                </div>
                <button
                  onClick={() => handleStartEngagement(selectedCountryDossier.name)}
                  className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-xs font-semibold text-white transition-all shadow-[0_0_15px_rgba(99,102,241,0.3)] shrink-0 flex items-center gap-2"
                >
                  Discuss {selectedCountryDossier.name} Market <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Market Highlights */}
              <div className="space-y-3">
                <div className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
                  Market Highlights & Growth Drivers
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {selectedCountryDossier.marketHighlights.map((hl, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-[#050505] border border-white/5 text-xs text-neutral-300 leading-relaxed">
                      {hl}
                    </div>
                  ))}
                </div>
              </div>

              {/* MindCraft Capability Coverage in Country */}
              <div className="space-y-3 pt-2 border-t border-white/5">
                <div className="text-xs font-mono text-indigo-400 uppercase tracking-wider">
                  MindCraft In-Country Execution Capabilities
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-xl bg-[#050505] border border-white/5 space-y-1">
                    <span className="text-neutral-400 font-medium">Primary Market Research:</span>
                    <p className="text-neutral-200">{selectedCountryDossier.capabilityCoverage.marketResearch}</p>
                  </div>
                  <div className="p-3 rounded-xl bg-[#050505] border border-white/5 space-y-1">
                    <span className="text-neutral-400 font-medium">Regulatory Intelligence:</span>
                    <p className="text-neutral-200">{selectedCountryDossier.capabilityCoverage.regulatoryIntelligence}</p>
                  </div>
                  <div className="p-3 rounded-xl bg-[#050505] border border-white/5 space-y-1">
                    <span className="text-neutral-400 font-medium">Distributor & Channel Vetting:</span>
                    <p className="text-neutral-200">{selectedCountryDossier.capabilityCoverage.marketEntrySupport}</p>
                  </div>
                  <div className="p-3 rounded-xl bg-[#050505] border border-white/5 space-y-1">
                    <span className="text-neutral-400 font-medium">Associate Network & Training:</span>
                    <p className="text-neutral-200">{selectedCountryDossier.capabilityCoverage.localAssociateNetwork}</p>
                  </div>
                </div>
              </div>

              {/* Strategic Questions for this Country */}
              <div className="p-4 rounded-xl bg-[#050505] border border-white/5 space-y-2">
                <div className="text-xs font-semibold text-amber-400 flex items-center gap-1.5">
                  <HelpCircle className="w-4 h-4" /> Priority Investigation Questions in {selectedCountryDossier.name}
                </div>
                <div className="space-y-2 text-xs text-neutral-300">
                  {selectedCountryDossier.typicalQuestions.map((q, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <span className="font-mono text-indigo-400">Q{idx + 1}:</span>
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
      {/* VIEW: AFRICA + INDUSTRY CROSSOVER ENGINE */}
      {/* ========================================================================= */}
      {activeTab === 'crossover' && (
        <div className="space-y-6">
          <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 md:p-8 space-y-6">
            <div className="pb-4 border-b border-white/10">
              <span className="text-xs font-mono uppercase tracking-wider text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
                Interactive Cross-Matrix Engine
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-white mt-2">
                Africa Region + Industry Crossover Engine
              </h2>
              <p className="text-sm text-neutral-400 mt-1">
                Select an African Region (or Country) and an Industry Vertical to synthesize a tailored market-intelligence pathway.
              </p>
            </div>

            {/* Selectors */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-mono text-neutral-400 uppercase">Target African Geography</label>
                <select
                  value={selectedRegionName}
                  onChange={(e) => setSelectedRegionName(e.target.value as AfricaRegionName)}
                  className="w-full bg-[#050505] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-indigo-500"
                >
                  {AFRICA_REGIONS_DATA.map(r => (
                    <option key={r.name} value={r.name}>{r.name} ({r.countries.length} Jurisdictions)</option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono text-neutral-400 uppercase">Target Industry Sector</label>
                <select
                  value={crossoverIndustryId}
                  onChange={(e) => setCrossoverIndustryId(e.target.value)}
                  className="w-full bg-[#050505] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-indigo-500"
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
            <div className="p-6 rounded-2xl bg-[#050505] border border-indigo-500/30 space-y-6 shadow-[0_0_20px_rgba(99,102,241,0.1)]">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/10">
                <div>
                  <div className="text-xs font-mono text-indigo-400 uppercase">Synthesized Pathway</div>
                  <h3 className="text-xl font-bold text-white mt-1">
                    {crossoverIndustry.name} Strategy across {selectedRegion.name}
                  </h3>
                </div>
                <button
                  onClick={() => handleStartEngagement(selectedRegion.name, crossoverIndustry.name)}
                  className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-xs font-semibold text-white transition-all shadow-[0_0_15px_rgba(99,102,241,0.3)] shrink-0 flex items-center gap-2"
                >
                  Configure Engagement <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-[#0a0a0a] border border-white/5 space-y-2">
                  <div className="text-xs font-semibold text-sky-400 flex items-center gap-1.5">
                    <Search className="w-4 h-4" /> Primary Field Investigation
                  </div>
                  <p className="text-xs text-neutral-300 leading-relaxed">
                    Deploying structured key opinion leader audits, distributor vetting, and customer pricing elasticity across {selectedRegion.countries.slice(0, 3).join(', ')}.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#0a0a0a] border border-white/5 space-y-2">
                  <div className="text-xs font-semibold text-indigo-400 flex items-center gap-1.5">
                    <Compass className="w-4 h-4" /> Strategic Commercial Decision
                  </div>
                  <p className="text-xs text-neutral-300 leading-relaxed">
                    {crossoverIndustry.consultingAndStrategy[0] || 'Optimizing go-to-market structure and local regulatory compliance.'}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#0a0a0a] border border-white/5 space-y-2">
                  <div className="text-xs font-semibold text-emerald-400 flex items-center gap-1.5">
                    <Cpu className="w-4 h-4" /> Enterprise AI Layer
                  </div>
                  <p className="text-xs text-neutral-300 leading-relaxed">
                    {crossoverIndustry.enterpriseSolutions[0] || 'Continuous competitive intelligence and tender tracking platform.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* VIEW: AFRICA AS A CONNECTOR (GLOBAL FOOTPRINT) */}
      {/* ========================================================================= */}
      {activeTab === 'global-connector' && (
        <div className="space-y-6">
          <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 md:p-8 space-y-8">
            <div className="max-w-3xl space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
                Global Footprint & Strategic Topology
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Africa as a Global Connector
              </h2>
              <p className="text-sm text-neutral-400 leading-relaxed">
                MindCraft serves as the bi-directional bridge connecting international innovation hubs (North America, Europe, Asia) with dynamic African commercial ecosystems.
              </p>
            </div>

            {/* Tri-Hub Global Node Graphic */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Node 1: North America */}
              <div className="p-6 rounded-2xl bg-[#050505] border border-white/10 space-y-3 relative overflow-hidden">
                <div className="text-xs font-mono text-sky-400 uppercase">Originating Hub</div>
                <h3 className="text-lg font-bold text-white">United States & Canada</h3>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Supporting global pharma innovators, medical device OEMs, technology enterprises, and investors seeking validated African market entry and regulatory navigation.
                </p>
                <div className="text-[11px] font-mono text-neutral-500 pt-2 border-t border-white/5">
                  Flow: Capital, IP, Advanced Technology
                </div>
              </div>

              {/* Node 2: Africa HQ Nairobi */}
              <div className="p-6 rounded-2xl bg-gradient-to-b from-indigo-950/60 to-[#050505] border border-indigo-500/60 space-y-3 relative overflow-hidden shadow-[0_0_20px_rgba(99,102,241,0.2)]">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-indigo-400 uppercase">Operational Hub</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300">
                    Nairobi HQ
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white">MindCraft Continental Core</h3>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  Central coordination hub orchestrating primary research, strategic consulting, role-based AI training cohorts, and enterprise AI software builds across 4 African regions.
                </p>
                <div className="text-[11px] font-mono text-indigo-300 pt-2 border-t border-indigo-500/20">
                  Network: 500+ KOLs • Field Force • Regulatory Experts
                </div>
              </div>

              {/* Node 3: Europe & Global */}
              <div className="p-6 rounded-2xl bg-[#050505] border border-white/10 space-y-3 relative overflow-hidden">
                <div className="text-xs font-mono text-amber-400 uppercase">International Node</div>
                <h3 className="text-lg font-bold text-white">Europe & International Hubs</h3>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Partnering with European pharmaceutical manufacturers, development finance institutions, and multinational FMCG brand owners on sustainable commercial expansion.
                </p>
                <div className="text-[11px] font-mono text-neutral-500 pt-2 border-t border-white/5">
                  Flow: HEOR Research, Public-Private Partnerships
                </div>
              </div>
            </div>

            {/* Continuous Intelligence Flow Banner */}
            <div className="p-6 rounded-xl bg-[#050505] border border-white/5 space-y-3">
              <div className="text-xs font-mono text-neutral-400 uppercase">Continuous Intelligence Lifecycle</div>
              <div className="flex flex-wrap items-center gap-3 text-xs text-neutral-300">
                <span className="px-3 py-1.5 rounded-lg bg-[#0a0a0a] border border-white/10">01. One-Time Study</span>
                <ArrowRight className="w-3.5 h-3.5 text-neutral-500" />
                <span className="px-3 py-1.5 rounded-lg bg-[#0a0a0a] border border-white/10">02. Recurring Research Cadence</span>
                <ArrowRight className="w-3.5 h-3.5 text-neutral-500" />
                <span className="px-3 py-1.5 rounded-lg bg-[#0a0a0a] border border-white/10">03. Continuous Intelligence</span>
                <ArrowRight className="w-3.5 h-3.5 text-neutral-500" />
                <span className="px-3 py-1.5 rounded-lg bg-indigo-950/60 text-indigo-300 border border-indigo-500/40">04. AI-Assisted Monitoring</span>
                <ArrowRight className="w-3.5 h-3.5 text-neutral-500" />
                <span className="px-3 py-1.5 rounded-lg bg-emerald-950/60 text-emerald-300 border border-emerald-500/40">05. Enterprise Workflow</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
