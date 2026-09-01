import React, { useState } from 'react';
import { AFRICAN_COUNTRIES } from '../data/mindcraftData';
import { CountryDossier, NavTab } from '../types';
import { 
  Globe2, 
  MapPin, 
  Search, 
  Building2, 
  ShieldCheck, 
  BookOpen, 
  Users, 
  GraduationCap, 
  ArrowRight, 
  HelpCircle,
  Sparkles,
  Layers,
  Compass
} from 'lucide-react';

interface AfricaIntelligenceMapProps {
  onOpenIntake: () => void;
  setActiveTab: (tab: NavTab) => void;
}

export const AfricaIntelligenceMap: React.FC<AfricaIntelligenceMapProps> = ({
  onOpenIntake,
  setActiveTab
}) => {
  const [selectedCountryId, setSelectedCountryId] = useState<string>('kenya');
  const [selectedRegion, setSelectedRegion] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const regions = ['All', 'East Africa', 'West Africa', 'Southern Africa', 'North Africa'];

  const filteredCountries = AFRICAN_COUNTRIES.filter(c => {
    const matchesRegion = selectedRegion === 'All' || c.region === selectedRegion;
    const matchesSearch = c.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          c.keySectors.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesRegion && matchesSearch;
  });

  const currentCountry: CountryDossier = 
    AFRICAN_COUNTRIES.find(c => c.id === selectedCountryId) || AFRICAN_COUNTRIES[0];

  return (
    <div className="py-20 bg-[#050505] border-b border-white/10" id="africa-intelligence-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#0a0a0a] border border-amber-500/30 text-amber-400 text-xs font-mono mb-3">
            <Globe2 className="w-3.5 h-3.5 text-amber-400" />
            <span className="uppercase tracking-widest text-[10px]">Pan-African Intelligence Footprint</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-light text-white tracking-tight">
            African Market <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-emerald-300">Intelligence</span>
          </h2>
          <p className="text-white/60 text-sm sm:text-base mt-3 leading-relaxed">
            Africa is not one homogeneous market. It is 54 distinct regulatory, commercial, and clinical jurisdictions. Headquartered in Nairobi with pan-continental delivery, MindCraft brings authentic on-ground fluency backed by strategic consulting rigor.
          </p>
        </div>

        {/* Global Hubs: Nairobi HQ + Europe + US Corridors in Bento Style */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          
          <div className="p-5 rounded-2xl bg-[#0a0a0a] border border-indigo-500/40 flex items-start space-x-3 shadow-[0_0_15px_rgba(99,102,241,0.15)]">
            <div className="w-9 h-9 rounded-xl bg-indigo-950/60 border border-indigo-500/40 flex items-center justify-center text-indigo-300 shrink-0 mt-0.5">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-xs font-bold text-white font-mono">Nairobi, Kenya</span>
                <span className="text-[9px] px-1.5 py-0.5 rounded bg-indigo-950 border border-indigo-500/40 text-indigo-300 font-mono">
                  GLOBAL HQ
                </span>
              </div>
              <p className="text-xs text-white/60 mt-1">
                Central executive, research infrastructure, and senior AI engineering hub coordinating pan-African delivery.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-[#0a0a0a] border border-white/10 flex items-start space-x-3">
            <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-indigo-400 shrink-0 mt-0.5">
              <Globe2 className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-white font-mono">Europe Corridor</div>
              <p className="text-xs text-white/60 mt-1">
                Supporting European pharma and med-tech majors with market entry, regulatory mapping, and African expansion strategy.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-[#0a0a0a] border border-white/10 flex items-start space-x-3">
            <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-white font-mono">United States Corridor</div>
              <p className="text-xs text-white/60 mt-1">
                Advising US healthcare multinationals, donor agencies, and investors on competitive intelligence and governed AI adoption.
              </p>
            </div>
          </div>

        </div>

        {/* Interactive Explorer Container in Bento Grid */}
        <div className="rounded-2xl bg-[#0a0a0a] border border-white/10 p-6 sm:p-8 shadow-2xl space-y-8">
          
          {/* Controls Bar: Region Filter + Search */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
            
            {/* Region Buttons */}
            <div className="flex flex-wrap gap-1.5">
              {regions.map((reg) => (
                <button
                  key={reg}
                  onClick={() => setSelectedRegion(reg)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all ${
                    selectedRegion === reg
                      ? 'bg-indigo-950/60 border border-indigo-500/50 text-indigo-300 font-semibold shadow-[0_0_10px_rgba(99,102,241,0.2)]'
                      : 'bg-white/5 border border-white/10 text-white/50 hover:text-white'
                  }`}
                >
                  {reg}
                </button>
              ))}
            </div>

            {/* Country Search */}
            <div className="relative max-w-xs w-full">
              <Search className="w-4 h-4 text-white/40 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search country or sector..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 rounded-xl bg-[#050505] border border-white/10 text-xs font-mono text-white placeholder-white/40 focus:outline-none focus:border-indigo-500"
              />
            </div>

          </div>

          {/* Country Selection Chips */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-2">
            {filteredCountries.map((c) => {
              const isSelected = selectedCountryId === c.id;
              return (
                <button
                  key={c.id}
                  onClick={() => setSelectedCountryId(c.id)}
                  id={`country-pill-${c.id}`}
                  className={`p-3 rounded-2xl border text-left transition-all relative flex flex-col justify-between ${
                    isSelected 
                      ? 'bg-[#050505] border-indigo-500/60 text-white shadow-[0_0_15px_rgba(99,102,241,0.25)]' 
                      : 'bg-[#050505] border-white/10 text-white/60 hover:border-white/20 hover:text-white'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold font-mono">{c.name}</span>
                    {c.isHQ && (
                      <span className="text-[9px] px-1 rounded bg-indigo-950 text-indigo-300 border border-indigo-500/40 font-mono">
                        HQ
                      </span>
                    )}
                  </div>
                  <div className="text-[10px] text-white/40 font-mono">{c.region}</div>
                  {isSelected && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.8)]" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Detailed Country Dossier in Bento Card */}
          <div className="rounded-2xl bg-[#050505] border border-white/10 p-6 space-y-6 animate-in fade-in-50 duration-200">
            
            {/* Dossier Header */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-4 border-b border-white/10 gap-3">
              <div>
                <div className="flex items-center space-x-2">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 font-bold uppercase">
                    {currentCountry.region}
                  </span>
                  <span className="text-xs text-white/40 font-mono">
                    Capital: {currentCountry.capital} · Currency: {currentCountry.currency}
                  </span>
                </div>
                <h3 className="text-2xl font-light text-white mt-1 flex items-center space-x-2">
                  <span>{currentCountry.name} Market Dossier</span>
                  {currentCountry.isHQ && (
                    <span className="text-xs px-2 py-0.5 rounded bg-indigo-950/80 border border-indigo-500/40 text-indigo-300 font-semibold font-mono">
                      Global HQ
                    </span>
                  )}
                </h3>
              </div>

              <button
                onClick={onOpenIntake}
                className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-mono shrink-0 transition-colors flex items-center space-x-1.5 shadow-[0_0_10px_rgba(99,102,241,0.3)]"
              >
                <span>Request {currentCountry.name} Briefing</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Market Highlights */}
            <div className="space-y-2">
              <div className="text-[10px] font-mono uppercase font-bold text-amber-400 tracking-wider">
                Market Dynamics & Strategic Context
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {currentCountry.marketHighlights.map((hl, i) => (
                  <div key={i} className="p-3 rounded-xl bg-[#0a0a0a] border border-white/10 text-xs text-white/70 flex items-start space-x-2">
                    <span className="text-amber-400 font-bold">•</span>
                    <span>{hl}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* MindCraft Capability Coverage in this Country */}
            <div className="space-y-3 pt-2">
              <div className="text-[10px] font-mono uppercase font-bold text-indigo-400 tracking-wider">
                MindCraft On-Ground Capability Coverage ({currentCountry.name})
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                
                <div className="p-4 rounded-xl bg-[#0a0a0a] border border-white/10">
                  <div className="text-[11px] font-bold text-indigo-400 flex items-center space-x-1.5 mb-1 font-mono">
                    <Search className="w-3.5 h-3.5" />
                    <span>Market Research Reach</span>
                  </div>
                  <p className="text-xs text-white/60 leading-snug">
                    {currentCountry.capabilityCoverage.marketResearch}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#0a0a0a] border border-white/10">
                  <div className="text-[11px] font-bold text-teal-400 flex items-center space-x-1.5 mb-1 font-mono">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Regulatory Intelligence</span>
                  </div>
                  <p className="text-xs text-white/60 leading-snug">
                    {currentCountry.capabilityCoverage.regulatoryIntelligence}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#0a0a0a] border border-white/10">
                  <div className="text-[11px] font-bold text-emerald-400 flex items-center space-x-1.5 mb-1 font-mono">
                    <Compass className="w-3.5 h-3.5" />
                    <span>Market Entry Support</span>
                  </div>
                  <p className="text-xs text-white/60 leading-snug">
                    {currentCountry.capabilityCoverage.marketEntrySupport}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#0a0a0a] border border-white/10">
                  <div className="text-[11px] font-bold text-amber-400 flex items-center space-x-1.5 mb-1 font-mono">
                    <Users className="w-3.5 h-3.5" />
                    <span>Local Associate Network</span>
                  </div>
                  <p className="text-xs text-white/60 leading-snug">
                    {currentCountry.capabilityCoverage.localAssociateNetwork}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#0a0a0a] border border-white/10 md:col-span-2 lg:col-span-2">
                  <div className="text-[11px] font-bold text-indigo-300 flex items-center space-x-1.5 mb-1 font-mono">
                    <GraduationCap className="w-3.5 h-3.5" />
                    <span>Training & AI Enablement Delivery</span>
                  </div>
                  <p className="text-xs text-white/60 leading-snug">
                    {currentCountry.capabilityCoverage.trainingDelivery}
                  </p>
                </div>

              </div>
            </div>

            {/* Typical Questions & Engagement Models */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 pt-2">
              
              <div className="p-4 rounded-xl bg-[#0a0a0a] border border-white/10 space-y-2">
                <div className="text-[10px] font-mono uppercase font-bold text-white/40 flex items-center space-x-1.5">
                  <HelpCircle className="w-3.5 h-3.5 text-white/40" />
                  <span>Key Questions We Answer in {currentCountry.name}</span>
                </div>
                <ul className="space-y-1.5">
                  {currentCountry.typicalQuestions.map((q, i) => (
                    <li key={i} className="text-xs text-white/70 italic flex items-start space-x-2">
                      <span className="text-amber-400 font-bold">?</span>
                      <span>"{q}"</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-[#0a0a0a] border border-white/10 space-y-2">
                <div className="text-[10px] font-mono uppercase font-bold text-white/40 flex items-center space-x-1.5">
                  <Layers className="w-3.5 h-3.5 text-white/40" />
                  <span>Available Engagement Models</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {currentCountry.engagementModels.map((em, i) => (
                    <span key={i} className="text-xs px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-indigo-300 font-mono">
                      {em}
                    </span>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
