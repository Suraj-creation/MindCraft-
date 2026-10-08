import React, { useRef, useState } from 'react';
import { MotionConfig, motion } from 'motion/react';
import { AFRICAN_COUNTRIES } from '../data/mindcraftData';
import { AFRICA_REGIONS_DATA } from '../data/industryAndAfricaData';
import { CountryDossier, NavTab } from '../types';
import { DeepDive, RelatedLinks, TONES, reveal, EASE } from './ui/primitives';
import {
  Globe2,
  MapPin,
  Search,
  ShieldCheck,
  Users,
  GraduationCap,
  ArrowRight,
  HelpCircle,
  Layers,
  Compass
} from 'lucide-react';

interface AfricaIntelligenceMapProps {
  onOpenIntake: () => void;
  setActiveTab: (tab: NavTab) => void;
}

const REGIONS = ['All', ...AFRICA_REGIONS_DATA.map(r => r.name)];
const TOTAL_JURISDICTIONS = AFRICA_REGIONS_DATA.reduce((n, r) => n + r.countries.length, 0);

export const AfricaIntelligenceMap: React.FC<AfricaIntelligenceMapProps> = ({
  onOpenIntake,
  setActiveTab
}) => {
  const [selectedCountryId, setSelectedCountryId] = useState<string>('kenya');
  const [selectedRegion, setSelectedRegion] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const sectionRef = useRef<HTMLElement>(null);

  const q = searchQuery.toLowerCase();
  const filteredCountries = AFRICAN_COUNTRIES.filter(c => {
    const matchesRegion = selectedRegion === 'All' || c.region === selectedRegion;
    const matchesSearch =
      c.name.toLowerCase().includes(q) || c.keySectors.some(s => s.toLowerCase().includes(q));
    return matchesRegion && matchesSearch;
  });

  const currentCountry: CountryDossier =
    AFRICAN_COUNTRIES.find(c => c.id === selectedCountryId) || AFRICAN_COUNTRIES[0];

  const capabilities = [
    { icon: Search, color: 'text-indigo-400', title: 'Market Research Reach', text: currentCountry.capabilityCoverage.marketResearch },
    { icon: ShieldCheck, color: 'text-teal-400', title: 'Regulatory Intelligence', text: currentCountry.capabilityCoverage.regulatoryIntelligence },
    { icon: Compass, color: 'text-emerald-400', title: 'Market Entry Support', text: currentCountry.capabilityCoverage.marketEntrySupport },
    { icon: Users, color: 'text-amber-400', title: 'Local Associate Network', text: currentCountry.capabilityCoverage.localAssociateNetwork },
    { icon: GraduationCap, color: 'text-indigo-400', title: 'Training & AI Enablement Delivery', text: currentCountry.capabilityCoverage.trainingDelivery }
  ];

  const goToMap = () => {
    const next = sectionRef.current?.nextElementSibling as HTMLElement | null;
    next?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <MotionConfig reducedMotion="user">
      <section ref={sectionRef} className="mc-section bg-[#050505]" id="africa-intelligence-section">
        <div className="mc-container space-y-8 sm:space-y-10">
          {/* A. Intent, geography and the CTA: first two mobile viewports */}
          <header className="max-w-3xl">
            <span className="mc-eyebrow !text-emerald-400">
              <Globe2 className="w-3.5 h-3.5" aria-hidden="true" />
              Geographic footprint
            </span>
            <h1 className="mc-h1 mt-3 font-light">
              Africa is our <span className="font-semibold">primary focus.</span>
            </h1>
            <p className="mc-lead mt-3">
              Headquartered in Nairobi, MindCraft serves clients across Africa, Europe and the United States, with
              on-ground presence, cultural and regulatory fluency, and a growing network of local associates and partners.
            </p>
            <div className="mt-5 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={onOpenIntake}
                className="mc-tap px-5 rounded-xl bg-indigo-600 hover:bg-indigo-500 active:scale-[0.98] text-white text-sm font-semibold flex items-center justify-center gap-2 transition-[background-color,transform] duration-150"
              >
                <span>Request a regional briefing</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={goToMap}
                className="mc-tap px-5 rounded-xl bg-white/5 hover:bg-white/10 active:scale-[0.98] text-white/90 text-sm border border-white/10 transition-[background-color,transform] duration-150"
              >
                Explore the regulatory map
              </button>
            </div>
          </header>

          {/* A. Three geographies: Africa primary */}
          <div>
            <h2 className="mc-eyebrow mb-3">Three geographies, one primary focus</h2>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-3">
              <motion.article
                {...reveal}
                className={`lg:col-span-3 rounded-2xl bg-[#0d0f17] border ${TONES.emerald.border} p-5 sm:p-6`}
              >
                <div className="flex flex-wrap items-center gap-2">
                  <span className={`text-[11px] font-mono uppercase tracking-wider px-2 py-0.5 rounded border ${TONES.emerald.chip}`}>
                    Primary focus
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider text-white/60">
                    <MapPin className="w-3.5 h-3.5 text-indigo-400" aria-hidden="true" />
                    Global HQ · Nairobi, Kenya
                  </span>
                </div>
                <h3 className="mt-3 font-heading text-2xl font-light text-white">Africa</h3>
                <p className="mt-1 text-sm text-white/65 leading-relaxed">
                  Not one market but {AFRICA_REGIONS_DATA.length} regional clusters and {TOTAL_JURISDICTIONS} jurisdictions, each with its own
                  regulatory, commercial and clinical reality.
                </p>
                <dl className="mt-4 grid grid-cols-2 gap-2">
                  {AFRICA_REGIONS_DATA.map(r => (
                    <div key={r.name} className="rounded-xl bg-[#050505] border border-white/10 px-3 py-2.5">
                      <dd className="font-heading text-xl font-light text-white tabular-nums">{r.countries.length}</dd>
                      <dt className="text-[11px] font-mono uppercase tracking-wider text-white/55">{r.name}</dt>
                    </div>
                  ))}
                </dl>
              </motion.article>

              <div className="lg:col-span-2 grid grid-cols-2 lg:grid-cols-1 gap-3">
                {[
                  {
                    title: 'Europe',
                    body: 'Supporting European pharma and med-tech majors with market entry, regulatory mapping, and African expansion strategy.'
                  },
                  {
                    title: 'United States',
                    body: 'Advising US healthcare multinationals, donor agencies, and investors on competitive intelligence and governed AI adoption.'
                  }
                ].map((g, i) => (
                  <motion.article
                    key={g.title}
                    {...reveal}
                    transition={{ ...reveal.transition, delay: (i + 1) * 0.05 }}
                    className="rounded-2xl bg-[#0a0a0a] border border-white/10 p-4 sm:p-5"
                  >
                    <span className="text-[11px] font-mono uppercase tracking-wider text-white/50">Serving</span>
                    <h3 className="mt-1 font-heading text-lg font-light text-white">{g.title}</h3>
                    <p className="mt-1.5 text-xs sm:text-sm text-white/65 leading-relaxed">{g.body}</p>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>

          {/* C. Country dossiers: deep dive, closed by default */}
          <DeepDive
            tone="emerald"
            title={`Country dossiers (${AFRICAN_COUNTRIES.length})`}
            hint="Market dynamics, on-ground coverage, key questions and engagement models by country"
          >
            <div className="space-y-5 pt-3">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
                <div role="group" aria-label="Filter by region" className="flex gap-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                  {REGIONS.map(reg => (
                    <button
                      key={reg}
                      type="button"
                      aria-pressed={selectedRegion === reg}
                      onClick={() => setSelectedRegion(reg)}
                      className={`mc-tap shrink-0 px-4 rounded-xl text-xs font-mono whitespace-nowrap border transition-[background-color,border-color,transform] duration-200 active:scale-[0.98] ${
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
                  <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" aria-hidden="true" />
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
                          type="button"
                          onClick={() => setSelectedCountryId(c.id)}
                          id={`country-pill-${c.id}`}
                          aria-pressed={isSelected}
                          className={`mc-card-interactive mc-tap snap-start shrink-0 min-w-[8.5rem] md:min-w-0 p-3 rounded-2xl border text-left bg-[#050505] ${
                            isSelected ? 'border-indigo-500/35 text-white' : 'border-white/[0.08] text-gray-400 hover:text-white'
                          }`}
                        >
                          <div className="flex items-center justify-between gap-2 mb-1">
                            <span className="text-xs font-bold font-mono">{c.name}</span>
                            {c.isHQ && (
                              <span className="text-[11px] px-1 rounded bg-[#0D0F17] text-indigo-400 border border-indigo-500/35 font-mono">HQ</span>
                            )}
                          </div>
                          <div className="text-[11px] text-gray-400 font-mono">{c.region}</div>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>

              <motion.div
                key={currentCountry.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.22, ease: EASE }}
                className="rounded-2xl bg-[#050505] border border-white/[0.08] p-4 sm:p-6 space-y-5"
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
                    type="button"
                    onClick={onOpenIntake}
                    className="mc-tap w-full lg:w-auto px-5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold shrink-0 transition-[background-color,transform] duration-200 active:scale-[0.98] flex items-center justify-center gap-2"
                  >
                    <span>Request {currentCountry.name} Briefing</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </button>
                </div>

                <div className="space-y-3">
                  <div className="text-[11px] font-mono uppercase font-bold text-amber-400 tracking-wider">
                    Market Dynamics &amp; Strategic Context
                  </div>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {currentCountry.marketHighlights.map((hl, i) => (
                      <li key={i} className="p-3 rounded-xl bg-[#0a0a0a] border border-white/[0.08] text-sm text-[#E0E0E0] flex items-start gap-2 leading-relaxed">
                        <span className="text-amber-400 font-bold" aria-hidden="true">•</span>
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <DeepDive title={`On-ground capability coverage (${currentCountry.name})`} hint="Research, regulatory, market entry, associates, training">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 pt-3">
                    {capabilities.map((c, i) => (
                      <div
                        key={c.title}
                        className={`p-4 rounded-xl bg-[#0a0a0a] border border-white/[0.08] ${i === capabilities.length - 1 ? 'md:col-span-2 lg:col-span-2' : ''}`}
                      >
                        <div className={`text-xs font-bold ${c.color} flex items-center gap-2 mb-2 font-mono`}>
                          <c.icon className="w-4 h-4 shrink-0" aria-hidden="true" />
                          <span>{c.title}</span>
                        </div>
                        <p className="text-sm text-gray-400 leading-relaxed">{c.text}</p>
                      </div>
                    ))}
                  </div>
                </DeepDive>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-[#0a0a0a] border border-white/[0.08] space-y-3">
                    <div className="text-[11px] font-mono uppercase font-bold text-gray-400 flex items-center gap-2">
                      <HelpCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                      <span>Key Questions We Answer in {currentCountry.name}</span>
                    </div>
                    <ul className="space-y-2.5">
                      {currentCountry.typicalQuestions.map((q2, i) => (
                        <li key={i} className="text-sm text-[#E0E0E0] italic flex items-start gap-2">
                          <span className="text-amber-400 font-bold not-italic" aria-hidden="true">?</span>
                          <span>"{q2}"</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="p-4 rounded-xl bg-[#0a0a0a] border border-white/[0.08] space-y-3">
                    <div className="text-[11px] font-mono uppercase font-bold text-gray-400 flex items-center gap-2">
                      <Layers className="w-4 h-4 shrink-0" aria-hidden="true" />
                      <span>Available Engagement Models</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {currentCountry.engagementModels.map((em, i) => (
                        <span key={i} className="text-xs px-3 py-1.5 rounded-lg bg-white/5 border border-white/[0.08] text-indigo-400 font-mono">
                          {em}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </DeepDive>

          {/* B. Where to next */}
          <RelatedLinks
            title="Go further"
            items={[
              { label: 'Market Localization', desc: 'Turn global strategy into local results', tone: 'emerald', onClick: () => setActiveTab('localization') },
              { label: 'Market Entry Framework', desc: 'The 9-step signature approach', tone: 'indigo', onClick: () => setActiveTab('market-entry') },
              { label: 'Senior Expertise', desc: 'Who stands behind the work', tone: 'amber', onClick: () => setActiveTab('senior-expertise') }
            ]}
          />
        </div>
      </section>
    </MotionConfig>
  );
};
