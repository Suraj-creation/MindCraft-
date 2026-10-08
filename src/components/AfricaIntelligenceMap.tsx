import React, { useState, useEffect } from 'react';
import { MotionConfig, motion } from 'motion/react';
import { AFRICAN_COUNTRIES } from '../data/mindcraftData';
import { CountryDossier, NavTab } from '../types';
import {
  Globe2,
  MapPin,
  Search,
  Building2,
  ShieldCheck,
  Users,
  GraduationCap,
  ArrowRight,
  HelpCircle,
  Layers,
  Compass,
  ChevronDown
} from 'lucide-react';

interface AfricaIntelligenceMapProps {
  onOpenIntake: () => void;
  setActiveTab: (tab: NavTab) => void;
}

const EASE = [0.16, 1, 0.3, 1] as const;

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(
    () => typeof window !== 'undefined' && window.matchMedia(query).matches
  );
  useEffect(() => {
    const mq = window.matchMedia(query);
    const handler = () => setMatches(mq.matches);
    handler();
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, [query]);
  return matches;
}

/** Collapsible group: open by default on desktop, collapsed on phones. */
const Disclosure: React.FC<{
  title: React.ReactNode;
  defaultOpen: boolean;
  children: React.ReactNode;
}> = ({ title, defaultOpen, children }) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="rounded-xl border border-white/[0.08] overflow-hidden">
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen(o => !o)}
        className="mc-tap w-full flex items-center justify-between gap-3 px-4 py-2 text-left bg-[#0a0a0a]"
      >
        <span className="text-[11px] font-mono uppercase font-bold tracking-wider text-indigo-400">{title}</span>
        <ChevronDown
          className={`w-4 h-4 text-gray-400 shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, ease: EASE }}
          className="p-3 sm:p-4 bg-[#050505]"
        >
          {children}
        </motion.div>
      )}
    </div>
  );
};

const REGIONS = ['All', 'East Africa', 'West Africa', 'Southern Africa', 'North Africa'];

export const AfricaIntelligenceMap: React.FC<AfricaIntelligenceMapProps> = ({
  onOpenIntake,
  setActiveTab
}) => {
  const [selectedCountryId, setSelectedCountryId] = useState<string>('kenya');
  const [selectedRegion, setSelectedRegion] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const isDesktop = useMediaQuery('(min-width: 768px)');

  const q = searchQuery.toLowerCase();
  const filteredCountries = AFRICAN_COUNTRIES.filter(c => {
    const matchesRegion = selectedRegion === 'All' || c.region === selectedRegion;
    const matchesSearch =
      c.name.toLowerCase().includes(q) || c.keySectors.some(s => s.toLowerCase().includes(q));
    return matchesRegion && matchesSearch;
  });

  const currentCountry: CountryDossier =
    AFRICAN_COUNTRIES.find(c => c.id === selectedCountryId) || AFRICAN_COUNTRIES[0];

  const facts = [
    { value: String(REGIONS.length - 1), label: 'Regional clusters' },
    { value: String(AFRICAN_COUNTRIES.length), label: 'Country dossiers' },
    { value: '54', label: 'Jurisdictions in Africa' },
    { value: 'Nairobi', label: 'Global HQ' }
  ];

  const hubs = [
    {
      icon: MapPin,
      iconColor: 'text-indigo-400',
      title: 'Nairobi, Kenya',
      badge: 'GLOBAL HQ',
      body: 'Central executive, research infrastructure, and senior AI engineering hub coordinating pan-African delivery.',
      primary: true
    },
    {
      icon: Globe2,
      iconColor: 'text-indigo-400',
      title: 'Europe Corridor',
      body: 'Supporting European pharma and med-tech majors with market entry, regulatory mapping, and African expansion strategy.'
    },
    {
      icon: Building2,
      iconColor: 'text-amber-400',
      title: 'United States Corridor',
      body: 'Advising US healthcare multinationals, donor agencies, and investors on competitive intelligence and governed AI adoption.'
    }
  ];

  const capabilities = [
    { icon: Search, color: 'text-indigo-400', title: 'Market Research Reach', text: currentCountry.capabilityCoverage.marketResearch },
    { icon: ShieldCheck, color: 'text-teal-400', title: 'Regulatory Intelligence', text: currentCountry.capabilityCoverage.regulatoryIntelligence },
    { icon: Compass, color: 'text-emerald-400', title: 'Market Entry Support', text: currentCountry.capabilityCoverage.marketEntrySupport },
    { icon: Users, color: 'text-amber-400', title: 'Local Associate Network', text: currentCountry.capabilityCoverage.localAssociateNetwork },
    { icon: GraduationCap, color: 'text-indigo-400', title: 'Training & AI Enablement Delivery', text: currentCountry.capabilityCoverage.trainingDelivery }
  ];

  return (
    <MotionConfig reducedMotion="user">
      <section className="mc-section bg-[#050505]" id="africa-intelligence-section">
        <div className="mc-container space-y-8">
          {/* Intent + key facts */}
          <header className="max-w-3xl space-y-4">
            <span className="mc-eyebrow !text-amber-400">
              <Globe2 className="w-3.5 h-3.5" />
              Pan-African Intelligence Footprint
            </span>
            <h2 className="mc-h2 font-light">
              African Market{' '}
              <span className="font-bold text-amber-400">
                Intelligence
              </span>
            </h2>
            <p className="mc-lead">
              Africa is not one homogeneous market. It is 54 distinct regulatory, commercial, and clinical jurisdictions. Headquartered in Nairobi with pan-continental delivery, MindCraft brings authentic on-ground fluency backed by strategic consulting rigor.
            </p>
          </header>

          <dl className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/[0.08] border border-white/[0.08] rounded-2xl overflow-hidden">
            {facts.map(f => (
              <div key={f.label} className="bg-[#0a0a0a] px-4 py-4">
                <dd className="text-2xl font-semibold text-white leading-none">{f.value}</dd>
                <dt className="text-[11px] font-mono uppercase tracking-wider text-gray-400 mt-2">{f.label}</dt>
              </div>
            ))}
          </dl>

          {/* Hubs: swipeable rail on phones, 3-col grid from md up */}
          <div className="flex gap-3 overflow-x-auto snap-x pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:grid md:grid-cols-3 md:overflow-visible md:pb-0">
            {hubs.map((h, i) => (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10%' }}
                transition={{ duration: 0.22, ease: EASE, delay: i * 0.06 }}
                className={`p-5 rounded-2xl bg-[#0a0a0a] border flex items-start gap-3 snap-start shrink-0 basis-[82%] max-w-[20rem] md:max-w-none md:basis-auto ${
                  h.primary ? 'border-indigo-500/35' : 'border-white/[0.08]'
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 ${h.iconColor} ${
                    h.primary ? 'bg-[#0D0F17] border-indigo-500/35' : 'bg-white/5 border-white/[0.08]'
                  }`}
                >
                  <h.icon className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-sm font-bold text-white font-mono">{h.title}</span>
                    {h.badge && (
                      <span className="text-[11px] px-1.5 py-0.5 rounded bg-[#0D0F17] border border-indigo-500/35 text-indigo-400 font-mono">
                        {h.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-400 mt-1 leading-relaxed">{h.body}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Explorer */}
          <div className="rounded-2xl bg-[#0a0a0a] border border-white/[0.08] p-4 sm:p-6 lg:p-8 space-y-6">
            {/* Controls: region rail + search */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
              <div
                role="group"
                aria-label="Filter by region"
                className="flex gap-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              >
                {REGIONS.map(reg => (
                  <button
                    key={reg}
                    aria-pressed={selectedRegion === reg}
                    onClick={() => setSelectedRegion(reg)}
                    className={`mc-tap px-4 rounded-xl text-xs font-mono whitespace-nowrap border transition-[background-color,border-color,transform] duration-200 active:scale-[0.98] ${
                      selectedRegion === reg
                        ? 'bg-[#0D0F17] border-indigo-500/35 text-indigo-400 font-semibold'
                        : 'bg-white/5 border-white/[0.08] text-gray-400 hover:text-white'
                    }`}
                  >
                    {reg}
                  </button>
                ))}
              </div>

              <div className="relative w-full lg:max-w-xs">
                <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="search"
                  placeholder="Search country or sector..."
                  aria-label="Search country or sector"
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  className="mc-tap w-full pl-10 pr-3 rounded-xl bg-[#050505] border border-white/[0.08] text-base sm:text-sm font-mono text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500"
                />
              </div>
            </div>

            {/* Country selector: horizontal rail on phones, grid from md up */}
            <div>
              <div className="text-[11px] font-mono uppercase tracking-wider text-gray-400 mb-3">
                {filteredCountries.length} of {AFRICAN_COUNTRIES.length} dossiers
                {selectedRegion !== 'All' ? ` · ${selectedRegion}` : ''}
              </div>
              {filteredCountries.length === 0 ? (
                <p className="text-sm text-gray-400 py-2">No dossiers match your filters.</p>
              ) : (
                <div className="flex gap-2 overflow-x-auto snap-x pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:grid md:grid-cols-4 lg:grid-cols-6 md:overflow-visible md:pb-0">
                  {filteredCountries.map(c => {
                    const isSelected = selectedCountryId === c.id;
                    return (
                      <button
                        key={c.id}
                        onClick={() => setSelectedCountryId(c.id)}
                        id={`country-pill-${c.id}`}
                        aria-pressed={isSelected}
                        className={`mc-card-interactive mc-tap snap-start shrink-0 min-w-[8.5rem] md:min-w-0 p-3 rounded-2xl border text-left relative flex flex-col justify-between bg-[#050505] ${
                          isSelected
                            ? 'border-indigo-500/35 text-white'
                            : 'border-white/[0.08] text-gray-400 hover:text-white'
                        }`}
                      >
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <span className="text-xs font-bold font-mono">{c.name}</span>
                          {c.isHQ && (
                            <span className="text-[11px] px-1 rounded bg-[#0D0F17] text-indigo-400 border border-indigo-500/35 font-mono">
                              HQ
                            </span>
                          )}
                        </div>
                        <div className="text-[11px] text-gray-400 font-mono">{c.region}</div>
                        {isSelected && (
                          <motion.div
                            layoutId="map-country-underline"
                            className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full bg-indigo-500"
                          />
                        )}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Dossier */}
            <motion.div
              key={currentCountry.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.22, ease: EASE }}
              className="rounded-2xl bg-[#050505] border border-white/[0.08] p-4 sm:p-6 space-y-6"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-5 border-b border-white/[0.08] gap-4">
                <div className="min-w-0">
                  <div className="flex items-center flex-wrap gap-x-3 gap-y-1.5">
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#0D0F17] border border-indigo-500/35 text-indigo-400 font-bold uppercase">
                      {currentCountry.region}
                    </span>
                    <span className="text-xs text-gray-400 font-mono">
                      Capital: {currentCountry.capital} · Currency: {currentCountry.currency}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-light text-white mt-2 flex items-center flex-wrap gap-x-3 gap-y-1">
                    <span>{currentCountry.name} Market Dossier</span>
                    {currentCountry.isHQ && (
                      <span className="text-xs px-2 py-0.5 rounded bg-[#0D0F17] border border-indigo-500/35 text-indigo-400 font-semibold font-mono">
                        Global HQ
                      </span>
                    )}
                  </h3>
                </div>

                <button
                  onClick={onOpenIntake}
                  className="mc-tap w-full lg:w-auto px-5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold shrink-0 transition-[background-color,transform] duration-200 active:scale-[0.98] flex items-center justify-center gap-2"
                >
                  <span>Request {currentCountry.name} Briefing</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Market highlights */}
              <div className="space-y-3">
                <div className="text-[11px] font-mono uppercase font-bold text-amber-400 tracking-wider">
                  Market Dynamics &amp; Strategic Context
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {currentCountry.marketHighlights.map((hl, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-xl bg-[#0a0a0a] border border-white/[0.08] text-sm text-[#E0E0E0] flex items-start gap-2 leading-relaxed"
                    >
                      <span className="text-amber-400 font-bold">•</span>
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Capability coverage */}
              <Disclosure
                key={`cap-${currentCountry.id}-${isDesktop}`}
                defaultOpen={isDesktop}
                title={`MindCraft On-Ground Capability Coverage (${currentCountry.name})`}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {capabilities.map((c, i) => (
                    <div
                      key={c.title}
                      className={`p-4 rounded-xl bg-[#0a0a0a] border border-white/[0.08] ${
                        i === capabilities.length - 1 ? 'md:col-span-2 lg:col-span-2' : ''
                      }`}
                    >
                      <div className={`text-xs font-bold ${c.color} flex items-center gap-2 mb-2 font-mono`}>
                        <c.icon className="w-4 h-4 shrink-0" />
                        <span>{c.title}</span>
                      </div>
                      <p className="text-sm text-gray-400 leading-relaxed">{c.text}</p>
                    </div>
                  ))}
                </div>
              </Disclosure>

              {/* Questions + engagement models */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-[#0a0a0a] border border-white/[0.08] space-y-3">
                  <div className="text-[11px] font-mono uppercase font-bold text-gray-400 flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 shrink-0" />
                    <span>Key Questions We Answer in {currentCountry.name}</span>
                  </div>
                  <ul className="space-y-2.5">
                    {currentCountry.typicalQuestions.map((q2, i) => (
                      <li key={i} className="text-sm text-[#E0E0E0] italic flex items-start gap-2">
                        <span className="text-amber-400 font-bold not-italic">?</span>
                        <span>"{q2}"</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-[#0a0a0a] border border-white/[0.08] space-y-3">
                  <div className="text-[11px] font-mono uppercase font-bold text-gray-400 flex items-center gap-2">
                    <Layers className="w-4 h-4 shrink-0" />
                    <span>Available Engagement Models</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {currentCountry.engagementModels.map((em, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1.5 rounded-lg bg-white/5 border border-white/[0.08] text-indigo-400 font-mono"
                      >
                        {em}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </MotionConfig>
  );
};
