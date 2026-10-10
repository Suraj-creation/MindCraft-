import React, { useState, useMemo, useEffect, useRef } from 'react';
import { AnimatePresence, MotionConfig, motion } from 'motion/react';
import {
  Globe2,
  Compass,
  MapPin,
  Building2,
  Search,
  CheckCircle2,
  ArrowRight,
  HelpCircle,
  Cpu,
  ChevronDown,
  X
} from 'lucide-react';
import { AFRICA_REGIONS_DATA, UNIVERSAL_INDUSTRIES, MARKET_ENTRY_9STEPS } from '../data/industryAndAfricaData';
import { AFRICAN_COUNTRIES } from '../data/mindcraftData';
import { AfricaRegionName, NavTab } from '../types';
import { PageHeader } from './ui/primitives';
import { ArtImage } from './ui/ArtImage';
import { ArtCaption, Scrim } from './ui/Hero';
import { useMediaQuery } from '../lib/useMediaQuery';

interface Props {
  onNavigate: (tab: NavTab) => void;
  onSelectCountryForEngagement?: (countryName: string) => void;
  onSelectIndustryForEngagement?: (industryName: string) => void;
}

type ViewTab = 'regional' | 'country' | 'crossover' | 'global-connector';

const EASE = [0.16, 1, 0.3, 1] as const;

const VIEW_TABS: { id: ViewTab; label: string }[] = [
  { id: 'regional', label: 'Regional Clusters' },
  { id: 'country', label: 'Country Dossiers' },
  { id: 'crossover', label: 'Africa × Industry Crossover' },
  { id: 'global-connector', label: 'Africa as a Connector' }
];

const ALL_JURISDICTIONS = AFRICA_REGIONS_DATA.flatMap(r =>
  r.countries.map(name => ({ name, region: r.name }))
);


const primaryBtn =
  'mc-tap inline-flex items-center justify-center gap-2 px-5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-sm font-semibold text-white transition-[background-color,transform] duration-200 active:scale-[0.98] w-full sm:w-auto shrink-0';

const panel = 'bg-[#0a0a0a] border border-white/[0.08] rounded-2xl';
const inset = 'bg-[#050505] border border-white/[0.08] rounded-xl';
const monoLabel = 'text-xs font-medium text-gray-400';

/** Collapsible block: open by default on desktop, collapsed on phones (progressive disclosure). */
const Disclosure: React.FC<{
  title: React.ReactNode;
  count?: number;
  defaultOpen: boolean;
  children: React.ReactNode;
}> = ({ title, count, defaultOpen, children }) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className={`${inset} overflow-hidden`}>
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen(o => !o)}
        className="mc-tap w-full flex items-center justify-between gap-3 px-4 py-2 text-left"
      >
        <span className="text-sm font-semibold flex items-center gap-2 min-w-0">{title}</span>
        <span className="flex items-center gap-2 shrink-0">
          {typeof count === 'number' && (
            <span className="text-xs tabular-nums text-gray-400">{count}</span>
          )}
          <ChevronDown
            className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          />
        </span>
      </button>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, ease: EASE }}
          className="px-4 pb-4"
        >
          {children}
        </motion.div>
      )}
    </div>
  );
};

export const AfricaIntelligenceExplorer: React.FC<Props> = ({
  onNavigate,
  onSelectCountryForEngagement,
  onSelectIndustryForEngagement
}) => {
  const [selectedRegionName, setSelectedRegionName] = useState<AfricaRegionName>('East Africa');
  const [selectedCountryName, setSelectedCountryName] = useState<string>('Kenya');
  const [crossoverIndustryId, setCrossoverIndustryId] = useState<string>('pharmaceuticals');
  const [activeTab, setActiveTab] = useState<ViewTab>('regional');
  const [search, setSearch] = useState('');
  const [sheetOpen, setSheetOpen] = useState(false);
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  const closeRef = useRef<HTMLButtonElement>(null);

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

  const query = search.trim().toLowerCase();
  const listedCountries = useMemo(() => {
    if (query) return ALL_JURISDICTIONS.filter(c => c.name.toLowerCase().includes(query));
    return selectedRegion.countries.map(name => ({ name, region: selectedRegion.name }));
  }, [query, selectedRegion]);

  const handleStartEngagement = (countryName: string, industryName?: string) => {
    if (onSelectCountryForEngagement) onSelectCountryForEngagement(countryName);
    if (industryName && onSelectIndustryForEngagement) onSelectIndustryForEngagement(industryName);
    onNavigate('engagement-builder');
  };

  const pickCountry = (name: string, region?: AfricaRegionName) => {
    setSelectedCountryName(name);
    if (region) setSelectedRegionName(region);
    if (!isDesktop) setSheetOpen(true);
  };

  const sheetVisible = sheetOpen && !isDesktop && activeTab === 'country';

  // Bottom sheet: lock scroll, Escape to close, focus the close button
  useEffect(() => {
    if (!sheetVisible) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSheetOpen(false);
    };
    window.addEventListener('keydown', onKey);
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [sheetVisible]);

  const facts = [
    { value: String(AFRICA_REGIONS_DATA.length), label: 'Regional clusters' },
    { value: String(ALL_JURISDICTIONS.length), label: 'Jurisdictions' },
    { value: 'Nairobi', label: 'Global HQ' },
    { value: String(MARKET_ENTRY_9STEPS.length), label: 'Step entry framework' }
  ];

  const dossierBody = (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-5 border-b border-white/[0.08]">
        <div className="min-w-0">
          <div className="flex items-center gap-2 text-xs text-emerald-400 mb-1 font-medium">
            <MapPin className="w-4 h-4" /> {selectedCountryDossier.region}
          </div>
          <h2 className="mc-h2">{selectedCountryDossier.name} Market Dossier</h2>
          <p className="text-[12px] text-gray-400 mt-2 tabular-nums leading-relaxed">
            Capital: {selectedCountryDossier.capital} • Currency: {selectedCountryDossier.currency}
          </p>
        </div>
        <button
          onClick={() => handleStartEngagement(selectedCountryDossier.name)}
          className={primaryBtn}
        >
          Discuss {selectedCountryDossier.name} Market <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      <div className="space-y-3">
        <div className={monoLabel}>Market Highlights &amp; Growth Drivers</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {selectedCountryDossier.marketHighlights.map((hl, idx) => (
            <div key={idx} className={`p-3.5 ${inset} text-sm text-[#E0E0E0] leading-relaxed`}>
              {hl}
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-3 pt-5 border-t border-white/[0.08]">
        <div className="text-xs text-indigo-400 font-medium">
          MindCraft In-Country Execution Capabilities
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            ['Primary Market Research', selectedCountryDossier.capabilityCoverage.marketResearch],
            ['Regulatory Intelligence', selectedCountryDossier.capabilityCoverage.regulatoryIntelligence],
            ['Distributor & Channel Vetting', selectedCountryDossier.capabilityCoverage.marketEntrySupport],
            ['Local Associate Network', selectedCountryDossier.capabilityCoverage.localAssociateNetwork],
            ['Training Delivery', selectedCountryDossier.capabilityCoverage.trainingDelivery]
          ].map(([label, text]) => (
            <div key={label} className={`p-3.5 ${inset} space-y-1`}>
              <div className="text-xs font-semibold text-gray-400">{label}</div>
              <p className="text-sm text-[#E0E0E0] leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={`p-4 ${inset} space-y-3`}>
        <div className="text-sm font-semibold text-amber-400 flex items-center gap-2">
          <HelpCircle className="w-4 h-4 shrink-0" /> Priority Investigation Questions in {selectedCountryDossier.name}
        </div>
        <div className="space-y-2.5 text-sm text-[#E0E0E0]">
          {selectedCountryDossier.typicalQuestions.map((q, idx) => (
            <div key={idx} className="flex items-start gap-2">
              <span className="tabular-nums text-indigo-400 shrink-0">Q{idx + 1}:</span>
              <span>{q}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <MotionConfig reducedMotion="user">
      <section className="mc-section mc-page-intro w-full text-white">
        <div className="mc-container space-y-10 md:space-y-14">
          {/* Intent + key facts */}
          <PageHeader
            title="African market context."
            lead="Explore regional and country context alongside the decisions MindCraft can support."
            metrics={facts}
          />

          <figure className="mc-art-bleed mc-full-bleed relative min-h-56 sm:min-h-72">
            <ArtImage name="africa-network" alt="" sizes="100vw" position="object-[52%_50%]" />
            <Scrim background="linear-gradient(90deg, rgba(5,5,5,.78), rgba(5,5,5,.12) 68%, rgba(5,5,5,.02))" />
            <Scrim background="linear-gradient(180deg, rgba(5,5,5,.28), rgba(5,5,5,0) 35%, rgba(5,5,5,.72))" />
            <ArtCaption className="absolute bottom-4 left-[max(1rem,calc((100vw-min(100vw-2rem,88rem))/2))]">African market illustration</ArtCaption>
          </figure>

          {/* View switcher */}
          <div
            role="tablist"
            aria-label="Explorer views"
            className="flex gap-1.5 p-1 bg-[#0a0a0a] border border-white/[0.08] rounded-2xl overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {VIEW_TABS.map(t => (
              <button
                key={t.id}
                role="tab"
                aria-selected={activeTab === t.id}
                onClick={() => {
                  setActiveTab(t.id);
                  setSheetOpen(false);
                }}
                className={`mc-tap px-4 rounded-xl text-sm font-medium whitespace-nowrap transition-[background-color,color,transform] duration-200 active:scale-[0.98] ${
                  activeTab === t.id ? 'bg-indigo-600 text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* Region selector (shared by regional + country + crossover) */}
          {(activeTab === 'regional' || activeTab === 'country') && (
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3" role="group" aria-label="Regional clusters">
              {AFRICA_REGIONS_DATA.map(reg => {
                const isSelected = selectedRegionName === reg.name;
                return (
                  <button
                    key={reg.name}
                    aria-pressed={isSelected}
                    onClick={() => {
                      setSelectedRegionName(reg.name);
                      setSelectedCountryName(reg.countries[0]);
                      setSearch('');
                      setSheetOpen(false);
                    }}
                    className={`mc-card-interactive mc-tap p-3 sm:p-4 rounded-2xl border text-left ${
                      isSelected
                        ? 'bg-[#0D0F17] border-indigo-500/35'
                        : 'bg-[#0a0a0a] border-white/[0.08]'
                    }`}
                  >
                    <span className="block font-semibold text-sm text-white">{reg.name}</span>
                    <span className="block text-xs tabular-nums text-gray-400 mt-1">
                      {reg.countries.length} Jurisdictions
                    </span>
                    <span className="hidden sm:block text-xs text-gray-400 mt-2 line-clamp-1">
                      {reg.countries.slice(0, 4).join(', ')}...
                    </span>
                  </button>
                );
              })}
            </div>
          )}

          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.22, ease: EASE }}
          >
            {/* ===================== REGIONAL ===================== */}
            {activeTab === 'regional' && (
              <div className={`${panel} p-4 sm:p-6 lg:p-8`}>
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 pb-6 border-b border-white/[0.08]">
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 text-xs text-indigo-400 mb-2 font-medium">
                      <Globe2 className="w-4 h-4" /> Regional Cluster Profile
                    </div>
                    <h2 className="mc-h2">{selectedRegion.name}</h2>
                    <p className="text-sm text-indigo-400 font-medium mt-2">{selectedRegion.headline}</p>
                  </div>
                  <button onClick={() => onNavigate('market-entry')} className={primaryBtn}>
                    Launch 9-Step Market Entry Framework <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 mt-6">
                  <div className="lg:col-span-5 space-y-4">
                    <div className={`p-4 ${inset} space-y-2`}>
                      <div className={monoLabel}>Regional Context</div>
                      <p className="text-sm text-[#E0E0E0] leading-relaxed">{selectedRegion.regionalContext}</p>
                    </div>

                    <div className={`p-4 ${inset} space-y-3`}>
                      <div className={`${monoLabel} flex items-center justify-between gap-2`}>
                        <span>Member Jurisdictions ({selectedRegion.countries.length})</span>
                        <span className="text-indigo-400 normal-case tracking-normal">Tap to inspect</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {selectedRegion.countries.map(cName => (
                          <button
                            key={cName}
                            onClick={() => {
                              setSelectedCountryName(cName);
                              setActiveTab('country');
                              if (!isDesktop) setSheetOpen(true);
                            }}
                            className={`mc-tap px-3.5 rounded-xl text-sm font-medium transition-[background-color,border-color,transform] duration-200 active:scale-[0.98] ${
                              selectedCountryName === cName
                                ? 'bg-indigo-600 text-white'
                                : 'bg-[#0a0a0a] text-[#E0E0E0] border border-white/[0.08] hover:border-white/30'
                            }`}
                          >
                            {cName}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-7 space-y-3">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 items-start">
                      <Disclosure
                        key={`rc-${selectedRegion.name}`}
                        defaultOpen={isDesktop}
                        count={selectedRegion.researchCapability.length}
                        title={
                          <span className="flex items-center gap-2 text-sky-400">
                            <Search className="w-4 h-4 shrink-0" /> Primary Research Capabilities
                          </span>
                        }
                      >
                        <ul className="text-sm text-[#E0E0E0] space-y-2">
                          {selectedRegion.researchCapability.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </Disclosure>

                      <Disclosure
                        key={`io-${selectedRegion.name}`}
                        defaultOpen={isDesktop}
                        count={selectedRegion.industryOpportunity.length}
                        title={
                          <span className="flex items-center gap-2 text-indigo-400">
                            <Building2 className="w-4 h-4 shrink-0" /> High-Opportunity Sectors
                          </span>
                        }
                      >
                        <ul className="text-sm text-[#E0E0E0] space-y-2">
                          {selectedRegion.industryOpportunity.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </Disclosure>
                    </div>

                    <Disclosure
                      key={`sq-${selectedRegion.name}`}
                      defaultOpen={isDesktop}
                      count={selectedRegion.strategicQuestions.length}
                      title={
                        <span className="flex items-center gap-2 text-amber-400">
                          <HelpCircle className="w-4 h-4 shrink-0" /> Core Strategic &amp; Regulatory Questions
                        </span>
                      }
                    >
                      <div className="space-y-2.5">
                        {selectedRegion.strategicQuestions.map((q, idx) => (
                          <div key={idx} className="text-sm text-[#E0E0E0] flex items-start gap-2">
                            <span className="tabular-nums text-amber-400 shrink-0">Q{idx + 1}:</span>
                            <span>{q}</span>
                          </div>
                        ))}
                      </div>
                    </Disclosure>
                  </div>
                </div>
              </div>
            )}

            {/* ===================== COUNTRY DOSSIERS ===================== */}
            {activeTab === 'country' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
                <div className="lg:col-span-4">
                  <div className={`${panel} p-4 space-y-3 lg:sticky lg:top-24`}>
                    <div className="relative">
                      <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <input
                        type="search"
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        placeholder={`Search all ${ALL_JURISDICTIONS.length} jurisdictions`}
                        aria-label="Search jurisdictions"
                        className="w-full mc-tap pl-10 pr-3 rounded-xl bg-[#050505] border border-white/[0.08] text-base sm:text-sm text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500"
                      />
                    </div>
                    <div className={monoLabel}>
                      {query
                        ? `${listedCountries.length} match${listedCountries.length === 1 ? '' : 'es'} across all regions`
                        : `${selectedRegionName} Jurisdictions (${selectedRegion.countries.length})`}
                    </div>
                    {listedCountries.length === 0 ? (
                      <p className="text-sm text-gray-400 py-3">No jurisdictions match &ldquo;{search}&rdquo;.</p>
                    ) : (
                      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-1 gap-2 lg:max-h-[32rem] lg:overflow-y-auto lg:pr-1">
                        {listedCountries.map(c => {
                          const isSelected = selectedCountryName === c.name;
                          return (
                            <button
                              key={c.name}
                              onClick={() => pickCountry(c.name, c.region)}
                              aria-pressed={isSelected}
                              className={`mc-tap w-full text-left px-3 rounded-xl border flex items-center justify-between gap-2 transition-[background-color,border-color,transform] duration-200 active:scale-[0.98] ${
                                isSelected && isDesktop
                                  ? 'bg-[#0D0F17] border-indigo-500/35 text-white'
                                  : 'bg-[#050505] border-white/[0.08] text-[#E0E0E0] hover:border-white/20'
                              }`}
                            >
                              <span className="flex items-center gap-2 min-w-0">
                                <MapPin
                                  className={`w-4 h-4 shrink-0 ${isSelected && isDesktop ? 'text-indigo-400' : 'text-gray-400'}`}
                                />
                                <span className="text-sm font-medium truncate">{c.name}</span>
                              </span>
                              {c.name === 'Kenya' ? (
                                <span className="text-xs tabular-nums px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 shrink-0">
                                  HQ
                                </span>
                              ) : query ? (
                                <span className="hidden sm:inline text-xs tabular-nums text-gray-400 shrink-0 truncate max-w-[6rem]">
                                  {c.region.replace(' Africa', '')}
                                </span>
                              ) : null}
                            </button>
                          );
                        })}
                      </div>
                    )}
                    {!isDesktop && (
                      <p className="text-xs tabular-nums text-gray-400">Tap a jurisdiction to open its dossier.</p>
                    )}
                  </div>
                </div>

                {isDesktop && (
                  <div className={`lg:col-span-8 ${panel} p-8`}>
                    <motion.div
                      key={selectedCountryDossier.name}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2, ease: EASE }}
                    >
                      {dossierBody}
                    </motion.div>
                  </div>
                )}
              </div>
            )}

            {/* ===================== CROSSOVER ===================== */}
            {activeTab === 'crossover' && (
              <div className={`${panel} p-4 sm:p-6 lg:p-8 space-y-6`}>
                <div className="pb-5 border-b border-white/[0.08] space-y-3">
                  <h2 className="mc-h2">Africa Region + Industry Crossover Engine</h2>
                  <p className="text-sm text-gray-400 max-w-2xl">
                    Select an African Region (or Country) and an Industry Vertical to synthesise a tailored market-intelligence pathway.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="xo-geo" className={monoLabel}>Target African Geography</label>
                    <select
                      id="xo-geo"
                      value={selectedRegionName}
                      onChange={e => setSelectedRegionName(e.target.value as AfricaRegionName)}
                      className="w-full mc-tap bg-[#050505] border border-white/[0.08] rounded-xl px-4 text-base sm:text-sm text-white focus:outline-none focus:border-indigo-500"
                    >
                      {AFRICA_REGIONS_DATA.map(r => (
                        <option key={r.name} value={r.name}>{r.name} ({r.countries.length} Jurisdictions)</option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="xo-ind" className={monoLabel}>Target Industry Sector</label>
                    <select
                      id="xo-ind"
                      value={crossoverIndustryId}
                      onChange={e => setCrossoverIndustryId(e.target.value)}
                      className="w-full mc-tap bg-[#050505] border border-white/[0.08] rounded-xl px-4 text-base sm:text-sm text-white focus:outline-none focus:border-indigo-500"
                    >
                      {UNIVERSAL_INDUSTRIES.map(ind => (
                        <option key={ind.id} value={ind.id}>
                          {ind.name} ({ind.category === 'core-lifesciences' ? 'Life Sciences' : 'Diversified'})
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="p-4 sm:p-6 rounded-2xl bg-[#050505] border border-indigo-500/35 space-y-5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-white/[0.08]">
                    <div className="min-w-0">
                      <div className="text-xs text-indigo-400 font-medium">Synthesised Pathway</div>
                      <h3 className="text-xl font-bold text-white mt-1">
                        {crossoverIndustry.name} Strategy across {selectedRegion.name}
                      </h3>
                    </div>
                    <button
                      onClick={() => handleStartEngagement(selectedRegion.name, crossoverIndustry.name)}
                      className={primaryBtn}
                    >
                      Configure Engagement <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {[
                      {
                        icon: Search,
                        color: 'text-sky-400',
                        title: 'Primary Field Investigation',
                        body: `Deploying structured key opinion leader audits, distributor vetting, and customer pricing elasticity across ${selectedRegion.countries.slice(0, 3).join(', ')}.`
                      },
                      {
                        icon: Compass,
                        color: 'text-indigo-400',
                        title: 'Strategic Commercial Decision',
                        body:
                          crossoverIndustry.consultingAndStrategy[0] ||
                          'Optimising go-to-market structure and local regulatory compliance.'
                      },
                      {
                        icon: Cpu,
                        color: 'text-emerald-400',
                        title: 'Enterprise AI Layer',
                        body:
                          crossoverIndustry.enterpriseSolutions[0] ||
                          'Continuous competitive intelligence and tender tracking platform.'
                      }
                    ].map((c, i) => (
                      <motion.div
                        key={c.title}
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-10%' }}
                        transition={{ duration: 0.22, ease: EASE, delay: i * 0.06 }}
                        className={`p-4 bg-[#0a0a0a] border border-white/[0.08] rounded-xl space-y-2`}
                      >
                        <div className={`text-sm font-semibold ${c.color} flex items-center gap-2`}>
                          <c.icon className="w-4 h-4 shrink-0" /> {c.title}
                        </div>
                        <p className="text-sm text-[#E0E0E0] leading-relaxed">{c.body}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* ===================== CONNECTOR ===================== */}
            {activeTab === 'global-connector' && (
              <div className={`${panel} p-4 sm:p-6 lg:p-8 space-y-8`}>
                <div className="max-w-3xl space-y-3">
                  <h2 className="mc-h2">Africa as a Global Connector</h2>
                  <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                    MindCraft serves as the bi-directional bridge connecting international innovation hubs (North America, Europe, Asia) with dynamic African commercial ecosystems.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className={`p-5 ${inset} space-y-3`}>
                    <div className="text-xs text-sky-400 font-medium">Originating Hub</div>
                    <h3 className="text-lg font-bold text-white">United States &amp; Canada</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      Supporting global pharma innovators, medical device OEMs, technology enterprises, and investors seeking validated African market entry and regulatory navigation.
                    </p>
                    <div className="text-[12px] tabular-nums text-gray-400 pt-3 border-t border-white/[0.08]">
                      Flow: Capital, IP, Advanced Technology
                    </div>
                  </div>

                  <div className="p-5 rounded-xl bg-[#0D0F17] border border-indigo-500/35 space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs text-indigo-400 font-medium">Operational Hub</span>
                      <span className="text-xs tabular-nums px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300">
                        Nairobi HQ
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white">MindCraft Continental Core</h3>
                    <p className="text-sm text-[#E0E0E0] leading-relaxed">
                      Central coordination hub orchestrating primary research, strategic consulting, role-based AI training cohorts, and enterprise AI software builds across 4 African regions.
                    </p>
                    <div className="text-[12px] tabular-nums text-indigo-400 pt-3 border-t border-indigo-500/35">
                      Network: Associate consultants • In-country research partners • Subject-matter experts
                    </div>
                  </div>

                  <div className={`p-5 ${inset} space-y-3`}>
                    <div className="text-xs text-amber-400 font-medium">International Node</div>
                    <h3 className="text-lg font-bold text-white">Europe &amp; International Hubs</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      Partnering with European pharmaceutical manufacturers, development finance institutions, and multinational FMCG brand owners on sustainable commercial expansion.
                    </p>
                    <div className="text-[12px] tabular-nums text-gray-400 pt-3 border-t border-white/[0.08]">
                      Flow: HEOR Research, Public-Private Partnerships
                    </div>
                  </div>
                </div>

                <div className={`p-4 sm:p-6 ${inset} space-y-4`}>
                  <div className={monoLabel}>Continuous Intelligence Lifecycle</div>
                  <ol className="flex flex-col md:flex-row md:flex-wrap md:items-center gap-2 md:gap-3 text-sm text-[#E0E0E0]">
                    {[
                      '01. One-Time Study',
                      '02. Recurring Research Cadence',
                      '03. Continuous Intelligence',
                      '04. AI-Assisted Monitoring',
                      '05. Enterprise Workflow'
                    ].map((label, i, arr) => {
                      const tone =
                        i === 3
                          ? 'bg-[#0D0F17] text-indigo-400 border-indigo-500/35'
                          : i === 4
                            ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                            : 'bg-[#0a0a0a] border-white/[0.08]';
                      return (
                        <React.Fragment key={label}>
                          <li className={`px-4 py-2.5 rounded-xl border ${tone}`}>{label}</li>
                          {i < arr.length - 1 && (
                            <ArrowRight
                              aria-hidden="true"
                              className="w-4 h-4 text-gray-400 shrink-0 rotate-90 md:rotate-0 self-center"
                            />
                          )}
                        </React.Fragment>
                      );
                    })}
                  </ol>
                </div>
              </div>
            )}
          </motion.div>
        </div>

        {/* Mobile bottom sheet: country dossier */}
        <AnimatePresence>
          {sheetVisible && (
            <motion.div
              className="fixed inset-0 z-[100] flex items-end"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: EASE }}
            >
              <button
                type="button"
                aria-label="Close dossier"
                tabIndex={-1}
                onClick={() => setSheetOpen(false)}
                className="absolute inset-0 bg-black/70"
              />
              <motion.div
                role="dialog"
                aria-modal="true"
                aria-label={`${selectedCountryDossier.name} Market Dossier`}
                className="relative w-full max-h-[90dvh] overflow-y-auto overscroll-contain rounded-t-3xl bg-[#0a0a0a] border-t border-white/[0.08]"
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                exit={{ y: '100%' }}
                transition={{ duration: 0.25, ease: EASE }}
              >
                <div className="sticky top-0 z-10 flex items-center justify-between gap-3 px-4 pt-3 pb-2 bg-[#0a0a0a] border-b border-white/[0.08]">
                  <span className="mx-auto absolute left-1/2 -translate-x-1/2 top-1.5 w-10 h-1 rounded-full bg-white/20" aria-hidden="true" />
                  <span className="text-xs text-gray-400 pt-2 font-medium">
                    Country Dossier
                  </span>
                  <button
                    ref={closeRef}
                    type="button"
                    onClick={() => setSheetOpen(false)}
                    aria-label="Close dossier"
                    className="mc-tap inline-flex items-center justify-center rounded-xl text-gray-400 hover:text-white active:scale-[0.98] transition-transform"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <div className="p-4 mc-safe-bottom">{dossierBody}</div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </MotionConfig>
  );
};
