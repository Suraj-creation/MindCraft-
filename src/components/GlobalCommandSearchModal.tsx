import React, { useState, useEffect, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Search,
  X,
  ArrowRight,
  Building2,
  Globe2,
  Layers,
  HelpCircle,
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

const EASE = [0.16, 1, 0.3, 1] as const;

const FOCUSABLE =
  'a[href],button:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])';

export const GlobalCommandSearchModal: React.FC<Props> = ({
  isOpen,
  onClose,
  onNavigate,
  onSelectIndustry
}) => {
  const [query, setQuery] = useState('');
  const panelRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;

  // Keyboard listener for Cmd+K / Esc, focus trap, scroll lock, focus restore
  useEffect(() => {
    if (!isOpen) {
      setQuery('');
      return;
    }
    const opener = document.activeElement as HTMLElement | null;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const focusTimer = window.setTimeout(() => inputRef.current?.focus(), 30);

    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        onCloseRef.current();
        return;
      }
      if (e.key === 'Escape') {
        onCloseRef.current();
        return;
      }
      const panel = panelRef.current;
      if (!panel) return;

      if (e.key === 'Tab') {
        const nodes: HTMLElement[] = (Array.from(panel.querySelectorAll(FOCUSABLE)) as HTMLElement[]).filter(
          (n) => n.offsetParent !== null
        );
        if (nodes.length === 0) return;
        const first = nodes[0];
        const last = nodes[nodes.length - 1];
        const activeEl = document.activeElement;
        if (e.shiftKey && (activeEl === first || !panel.contains(activeEl))) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && (activeEl === last || !panel.contains(activeEl))) {
          e.preventDefault();
          first.focus();
        }
        return;
      }

      // Arrow navigation through results
      if ((e.key === 'ArrowDown' || e.key === 'ArrowUp') && panel.contains(document.activeElement)) {
        const items = Array.from(panel.querySelectorAll("[data-result]")) as HTMLElement[];
        if (items.length === 0) return;
        e.preventDefault();
        const i = items.indexOf(document.activeElement as HTMLElement);
        if (e.key === 'ArrowDown') {
          items[Math.min(items.length - 1, i + 1)].focus();
        } else if (i <= 0) {
          inputRef.current?.focus();
        } else {
          items[i - 1].focus();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.clearTimeout(focusTimer);
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = prevOverflow;
      opener?.focus?.();
    };
  }, [isOpen]);

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

  const gateways: { tab: NavTab; label: string; sub: string; Icon: React.ElementType; color: string }[] = [
    { tab: 'industries', label: 'Universal Industry Explorer', sub: '24 Sectors (Pharma, Devices, Telco, Energy...)', Icon: Building2, color: 'text-indigo-400' },
    { tab: 'africa-explorer', label: 'Africa Intelligence Hub', sub: '4 Regional Clusters & 45 Jurisdictions', Icon: Globe2, color: 'text-emerald-400' },
    { tab: 'market-entry', label: '9-Step Market Entry Framework', sub: 'De-risk entry into any African market', Icon: Compass, color: 'text-sky-400' },
    { tab: 'localization', label: 'Market Localisation', sub: 'Global strategy to local regulatory, commercial and partner execution', Icon: Globe2, color: 'text-emerald-400' },
    { tab: 'senior-expertise', label: 'Senior Life Sciences Expertise', sub: 'Market access, regulatory strategy and commercial excellence', Icon: Building2, color: 'text-indigo-400' },
    { tab: 'matrix-3d', label: '3D Configuration Matrix', sub: 'Industry × Geography × Capability', Icon: Layers, color: 'text-amber-400' }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-end sm:items-start justify-center sm:pt-24 sm:px-4 bg-black/80 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.16, ease: EASE }}
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
        >
          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label="Search MindCraft"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2, ease: EASE }}
            className="w-full sm:max-w-2xl bg-[#0a0a0a] border border-white/20 rounded-t-2xl sm:rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[90dvh] sm:h-auto max-h-[90dvh] sm:max-h-[80dvh]"
          >
            {/* Search Input Bar */}
            <div className="shrink-0 pl-4 pr-2 border-b border-white/10 flex items-center gap-2">
              <Search className="w-5 h-5 text-indigo-400 shrink-0" aria-hidden="true" />
              <input
                ref={inputRef}
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search industries, African markets, capabilities, challenges..."
                aria-label="Search industries, African markets, capabilities, or business challenges"
                enterKeyHint="search"
                autoComplete="off"
                className="w-full min-h-14 bg-transparent text-base text-white placeholder-neutral-500 focus:outline-none [&::-webkit-search-cancel-button]:hidden"
              />
              {query && (
                <button
                  onClick={() => { setQuery(''); inputRef.current?.focus(); }}
                  aria-label="Clear search"
                  className="mc-tap flex items-center justify-center rounded-lg text-neutral-400 hover:text-white hover:bg-white/5 shrink-0"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
              <button
                onClick={onClose}
                aria-label="Close search"
                className="mc-tap px-3 text-xs tabular-nums text-neutral-400 border border-white/10 rounded-lg hover:bg-white/5 active:scale-[0.96] shrink-0"
              >
                <span className="hidden sm:inline">ESC</span>
                <X className="w-4 h-4 sm:hidden" />
              </button>
            </div>

            {/* Results / Suggestions Container */}
            <div className="overflow-y-auto overscroll-contain p-4 space-y-4 flex-1 min-h-0">
              {searchResults ? (
                searchResults.length > 0 ? (
                  <div className="space-y-2" aria-live="polite">
                    <div className="text-xs text-neutral-400 font-medium">
                      Search Results ({searchResults.length})
                    </div>
                    {searchResults.map((res, idx) => (
                      <button
                        key={`${res.type}-${res.id}-${idx}`}
                        data-result
                        onClick={() => {
                          if (res.type === 'Industry' && onSelectIndustry) {
                            onSelectIndustry(res.id);
                          }
                          onNavigate(res.tab);
                          onClose();
                        }}
                        className="mc-tap w-full text-left p-3 rounded-xl bg-[#050505] border border-white/[0.08] hover:border-indigo-500/35 focus-visible:border-indigo-500/35 hover:bg-[#0d0f17] transition-colors active:scale-[0.99] flex items-center justify-between gap-3 group"
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <div className="p-2 rounded-lg bg-white/5 text-neutral-400 group-hover:text-indigo-400 group-hover:bg-indigo-500/10 transition-colors shrink-0">
                            {res.type === 'Industry' && <Building2 className="w-4 h-4" />}
                            {res.type === 'Geography' && <Globe2 className="w-4 h-4" />}
                            {res.type === 'Business Challenge' && <HelpCircle className="w-4 h-4" />}
                            {res.type === 'Service Pillar' && <Layers className="w-4 h-4" />}
                          </div>
                          <div className="min-w-0">
                            <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
                              <span className="text-sm font-semibold text-white group-hover:text-indigo-400">
                                {res.title}
                              </span>
                              <span className="text-xs tabular-nums px-1.5 py-0.5 rounded bg-white/5 text-neutral-400 border border-white/10">
                                {res.type}
                              </span>
                            </div>
                            <p className="text-xs text-neutral-400 line-clamp-2 sm:line-clamp-1 mt-0.5">
                              {res.subtitle}
                            </p>
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-indigo-400 transition-colors shrink-0" />
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8 text-neutral-400 text-sm" aria-live="polite">
                    No matching results found for "{query}". Try searching for "Pharma", "Kenya", "Market Entry", or "Underwriting".
                  </div>
                )
              ) : (
                /* Default Suggested Fast-Access Links */
                <div className="space-y-5">
                  <div>
                    <div className="text-xs text-neutral-400 mb-2 font-medium">
                      Popular Gateways & Frameworks
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {gateways.map(({ tab, label, sub, Icon, color }) => (
                        <button
                          key={tab}
                          data-result
                          onClick={() => { onNavigate(tab); onClose(); }}
                          className="mc-tap p-3 rounded-xl bg-[#050505] border border-white/[0.08] hover:border-white/20 text-left transition-colors active:scale-[0.99]"
                        >
                          <div className="text-sm font-semibold text-white flex items-center gap-2">
                            <Icon className={`w-4 h-4 shrink-0 ${color}`} /> {label}
                          </div>
                          <div className="text-xs text-neutral-400 mt-0.5">{sub}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="text-xs text-neutral-400 mb-2 font-medium">
                      Top Industries
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {UNIVERSAL_INDUSTRIES.slice(0, 8).map(i => (
                        <button
                          key={i.id}
                          data-result
                          onClick={() => {
                            if (onSelectIndustry) onSelectIndustry(i.id);
                            onNavigate('industries');
                            onClose();
                          }}
                          className="min-h-11 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-sm text-[#E0E0E0] border border-white/10 transition-colors active:scale-[0.98]"
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
            <div className="shrink-0 px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] border-t border-white/10 bg-[#050505] text-xs tabular-nums text-neutral-400 flex items-center justify-between gap-3">
              <span>Arrow keys to move, Enter to open</span>
              <span className="hidden sm:inline">Press ESC to close</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
