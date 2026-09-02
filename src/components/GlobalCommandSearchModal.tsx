import React, { useState, useEffect, useMemo } from 'react';
import { 
  Search, 
  X, 
  ArrowRight, 
  Building2, 
  Globe2, 
  Layers, 
  HelpCircle, 
  Sparkles, 
  MapPin, 
  FileText,
  Compass
} from 'lucide-react';
import { UNIVERSAL_INDUSTRIES, AFRICA_REGIONS_DATA, PROBLEM_CROSS_SECTIONS } from '../data/industryAndAfricaData';
import { SERVICE_PILLARS } from '../data/mindcraftData';
import { NavTab } from '../types';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (tab: NavTab) => void;
  onSelectIndustry?: (indId: string) => void;
}

export const GlobalCommandSearchModal: React.FC<Props> = ({
  isOpen,
  onClose,
  onNavigate,
  onSelectIndustry
}) => {
  const [query, setQuery] = useState('');

  // Keyboard listener for Cmd+K / Esc
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const searchResults = useMemo(() => {
    if (!query.trim()) return null;
    const q = query.toLowerCase();

    const industries = UNIVERSAL_INDUSTRIES.filter(i => 
      i.name.toLowerCase().includes(q) || 
      i.tagline.toLowerCase().includes(q) ||
      i.context.toLowerCase().includes(q)
    ).map(i => ({
      type: 'Industry',
      title: i.name,
      subtitle: i.tagline,
      tab: 'industries' as NavTab,
      id: i.id
    }));

    const regions = AFRICA_REGIONS_DATA.flatMap(r => {
      const matchCountries = r.countries.filter(c => c.toLowerCase().includes(q));
      if (r.name.toLowerCase().includes(q) || matchCountries.length > 0) {
        return [{
          type: 'Geography',
          title: `${r.name} (${r.countries.length} Jurisdictions)`,
          subtitle: matchCountries.length > 0 ? `Matches: ${matchCountries.join(', ')}` : r.headline,
          tab: 'africa-explorer' as NavTab,
          id: r.name
        }];
      }
      return [];
    });

    const problems = PROBLEM_CROSS_SECTIONS.filter(p =>
      p.problemTitle.toLowerCase().includes(q) ||
      p.tagline.toLowerCase().includes(q) ||
      p.triggerQuestion.toLowerCase().includes(q)
    ).map(p => ({
      type: 'Business Challenge',
      title: p.problemTitle,
      subtitle: p.tagline,
      tab: 'question-to-outcome' as NavTab,
      id: p.id
    }));

    const pillars = SERVICE_PILLARS.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.tagline.toLowerCase().includes(q)
    ).map(p => ({
      type: 'Service Pillar',
      title: p.name,
      subtitle: p.tagline,
      tab: p.id as NavTab,
      id: p.id
    }));

    return [...industries, ...regions, ...problems, ...pillars];
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="w-full max-w-2xl bg-[#FBFAF6] border border-[rgba(20,25,26,0.16)] rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh]">
        {/* Search Input Bar */}
        <div className="p-4 border-b border-[rgba(20,25,26,0.1)] flex items-center gap-3 bg-white">
          <Search className="w-5 h-5 text-[#123A2E] shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search 24 industries, 45 African markets, capabilities, or business challenges..."
            className="w-full bg-transparent text-sm md:text-base text-[#16191A] placeholder-[#8A8578] focus:outline-none font-serif"
            autoFocus
          />
          {query && (
            <button 
              onClick={() => setQuery('')}
              className="p-1 rounded-lg text-[#8A8578] hover:text-[#16191A] hover:bg-black/5"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="text-xs font-mono text-[#8A8578] border border-[rgba(20,25,26,0.12)] px-2 py-1 rounded-md hover:bg-black/5"
          >
            ESC
          </button>
        </div>

        {/* Results / Suggestions Container */}
        <div className="overflow-y-auto p-4 space-y-4 flex-1">
          {searchResults ? (
            searchResults.length > 0 ? (
              <div className="space-y-2">
                <div className="text-[11px] font-mono text-[#8A8578] uppercase">
                  Search Results ({searchResults.length})
                </div>
                {searchResults.map((res, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      if (res.type === 'Industry' && onSelectIndustry) {
                        onSelectIndustry(res.id);
                      }
                      onNavigate(res.tab);
                      onClose();
                    }}
                    className="w-full text-left p-3 rounded-xl bg-white border border-[rgba(20,25,26,0.08)] hover:border-[#123A2E] hover:bg-[#F4F1EA] transition-all flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-[#123A2E]/10 text-[#123A2E] group-hover:bg-[#123A2E] group-hover:text-white transition-colors">
                        {res.type === 'Industry' && <Building2 className="w-4 h-4" />}
                        {res.type === 'Geography' && <Globe2 className="w-4 h-4" />}
                        {res.type === 'Business Challenge' && <HelpCircle className="w-4 h-4" />}
                        {res.type === 'Service Pillar' && <Layers className="w-4 h-4" />}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-serif font-normal text-[#16191A]">
                            {res.title}
                          </span>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#F4F1EA] text-[#4C524E] border border-[rgba(20,25,26,0.08)]">
                            {res.type}
                          </span>
                        </div>
                        <p className="text-xs text-[#4C524E] line-clamp-1 mt-0.5">
                          {res.subtitle}
                        </p>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#8A8578] group-hover:text-[#123A2E] transition-colors shrink-0" />
                  </button>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-[#8A8578] text-xs font-serif">
                No matching results found for "{query}". Try searching for "Pharma", "Kenya", "Market Entry", or "Underwriting".
              </div>
            )
          ) : (
            /* Default Suggested Fast-Access Links */
            <div className="space-y-4">
              <div>
                <div className="text-[11px] font-mono text-[#8A8578] uppercase mb-2">
                  Popular Gateways & Frameworks
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <button
                    onClick={() => { onNavigate('industries'); onClose(); }}
                    className="p-3 rounded-xl bg-white border border-[rgba(20,25,26,0.08)] hover:border-[#123A2E] text-left transition-all"
                  >
                    <div className="text-xs font-semibold text-[#16191A] flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-[#123A2E]" /> Universal Industry Explorer
                    </div>
                    <div className="text-[11px] text-[#4C524E] mt-0.5">24 Sectors (Pharma, Devices, Telco, Energy...)</div>
                  </button>

                  <button
                    onClick={() => { onNavigate('africa-explorer'); onClose(); }}
                    className="p-3 rounded-xl bg-white border border-[rgba(20,25,26,0.08)] hover:border-[#123A2E] text-left transition-all"
                  >
                    <div className="text-xs font-semibold text-[#16191A] flex items-center gap-2">
                      <Globe2 className="w-4 h-4 text-[#123A2E]" /> Africa Intelligence Hub
                    </div>
                    <div className="text-[11px] text-[#4C524E] mt-0.5">4 Regional Clusters & 45 Jurisdictions</div>
                  </button>

                  <button
                    onClick={() => { onNavigate('market-entry'); onClose(); }}
                    className="p-3 rounded-xl bg-white border border-[rgba(20,25,26,0.08)] hover:border-[#123A2E] text-left transition-all"
                  >
                    <div className="text-xs font-semibold text-[#16191A] flex items-center gap-2">
                      <Compass className="w-4 h-4 text-[#C0562F]" /> 9-Step Market Entry Framework
                    </div>
                    <div className="text-[11px] text-[#4C524E] mt-0.5">De-risk entry into any African market</div>
                  </button>

                  <button
                    onClick={() => { onNavigate('matrix-3d'); onClose(); }}
                    className="p-3 rounded-xl bg-white border border-[rgba(20,25,26,0.08)] hover:border-[#123A2E] text-left transition-all"
                  >
                    <div className="text-xs font-semibold text-[#16191A] flex items-center gap-2">
                      <Layers className="w-4 h-4 text-[#123A2E]" /> 3D Configuration Matrix
                    </div>
                    <div className="text-[11px] text-[#4C524E] mt-0.5">Industry × Geography × Capability</div>
                  </button>
                </div>
              </div>

              <div>
                <div className="text-[11px] font-mono text-[#8A8578] uppercase mb-2">
                  Top Industries
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {UNIVERSAL_INDUSTRIES.slice(0, 8).map(i => (
                    <button
                      key={i.id}
                      onClick={() => {
                        if (onSelectIndustry) onSelectIndustry(i.id);
                        onNavigate('industries');
                        onClose();
                      }}
                      className="px-2.5 py-1 rounded-lg bg-white hover:bg-[#123A2E] hover:text-white text-xs text-[#3B4441] border border-[rgba(20,25,26,0.1)] transition-colors"
                    >
                      {i.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer info bar */}
        <div className="p-3 border-t border-[rgba(20,25,26,0.08)] bg-[#F4F1EA] text-[11px] font-mono text-[#8A8578] flex items-center justify-between">
          <span>Navigate with mouse or keyboard</span>
          <span>Press ESC to close</span>
        </div>
      </div>
    </div>
  );
};
