import React, { useMemo, useState } from 'react';
import { MotionConfig, motion } from 'motion/react';
import { ArrowRight, ChevronDown, Search } from 'lucide-react';
import { AFRICAN_COUNTRIES } from '../data/mindcraftData';
import { AFRICA_REGIONS_DATA } from '../data/industryAndAfricaData';
import { AfricaRegionName, CountryDossier, NavTab } from '../types';
import { BTN_PRIMARY, BTN_SECONDARY, ContextualCTA, DeepDive, EASE, RelatedLinks, reveal } from './ui/primitives';
import { FactRow, HeroCopy, HeroSection, Illumination } from './ui/Hero';

interface AfricaIntelligenceMapProps {
  onOpenIntake: () => void;
  setActiveTab: (tab: NavTab) => void;
}

/* ================================================================== */
/*  Country dossier display copy (also used by the Africa Hub and Localization pages)  */
/* ================================================================== */

const normCountry = (s: string) => s.trim().toLowerCase().replace(/[‘’`]/g, "'");
/** The region lists and the dossiers spell some names differently (Côte d’Ivoire / Côte d'Ivoire). */
export const sameCountry = (a: string, b: string) => normCountry(a) === normCountry(b);
export const findDossier = (name: string) => AFRICAN_COUNTRIES.find((c) => sameCountry(c.name, name));

/** The documented wording for who carries the work locally (corporate profile, s.3 and s.9). */
export const NETWORK_NOTE =
  'Delivered by our core team with a growing network of local associates and in-country research partners across Africa.';

/*
 * AFRICAN_COUNTRIES (src/data/mindcraftData.ts) carries lines the corporate profile does not support: contact counts,
 * "real-time" monitoring, own facilities, statistics, superlatives and named private hospital groups. Until the data is
 * corrected, those lines are reworded (or dropped) here. The per-country `localAssociateNetwork` and `trainingDelivery`
 * fields name city-based teams that are not documented, so they are not shown; NETWORK_NOTE is shown instead.
 */
const HIGHLIGHT_COPY: Record<string, string | null> = {
  'Headquarters of MindCraft Consultancy Services': null, // shown as a plain note in the dossier header instead
  'Strong private hospital network (Aga Khan, Nairobi Hospital, MP Shah) and expanding Social Health Authority (SHA)':
    'Large private hospital sector and an expanding Social Health Authority (SHA)',
  'Largest population and pharmaceutical consumer market in Africa': 'Africa’s most populous country and a large pharmaceutical market',
  'Most mature healthcare, pharmaceutical manufacturing, and financial services market on the continent':
    'One of the continent’s most developed healthcare, pharmaceutical manufacturing and financial services markets',
  'Dual-tier healthcare: world-class private hospital groups (Netcare, Life Healthcare, Mediclinic) and public NHI transition':
    'Two-tier healthcare: large private hospital groups alongside the public transition to National Health Insurance (NHI)',
  'Gateway to North Africa and the Middle East with massive domestic manufacturing capacity':
    'Gateway to North Africa and the Middle East, with a large domestic manufacturing base',
  'Stable economic environment with National Health Insurance Scheme (NHIS) coverage':
    'National Health Insurance Scheme (NHIS) coverage shaping medicine purchasing',
  'Ghana FDA recognised for progressive regulatory oversight in ECOWAS': 'Ghana FDA oversight within the wider ECOWAS regulatory landscape',
  'Second most populous nation in Africa (120M+) undergoing economic and healthcare modernisation':
    'One of Africa’s most populous countries, modernising its economy and health system',
  'Huge unmet clinical need and expanding domestic industrial parks': 'Significant unmet clinical need and expanding domestic industrial parks',
  'Over 90% population coverage through Community-Based Health Insurance (Mutuelle de Santé)':
    'Broad population coverage through Community-Based Health Insurance (Mutuelle de Santé)'
};

type CoverageKey = 'marketResearch' | 'regulatoryIntelligence' | 'marketEntrySupport';
const COVERAGE_COPY: Record<string, Partial<Record<CoverageKey, string>>> = {
  kenya: {
    marketResearch: 'Primary research with physicians, pharmacists, distributors and institutional buyers.',
    regulatoryIntelligence: 'PPB guidelines, expedited pathways and regional EAC harmonisation.',
    marketEntrySupport: 'Distributor identification and hospital formulary listing strategy.'
  },
  'south-africa': {
    regulatoryIntelligence: 'SAHPRA submission pathways, Section 21 authorisations and Single Exit Price (SEP) context.'
  },
  ethiopia: {
    marketEntrySupport: 'Public procurement pathways and development-partner co-investment strategy.'
  }
};

const QUESTION_COPY: Record<string, string> = {
  'What is the real reimbursement reimbursement cycle from NHIS to private provider pharmacies?':
    'What is the real reimbursement cycle from NHIS to private provider pharmacies?'
};

const MODEL_COPY: Record<string, string> = {
  'Regulatory Fast-track Advisory': 'Regulatory Pathway Advisory'
};

export interface DossierView {
  id: string;
  name: string;
  region: string;
  isHQ: boolean;
  capital: string;
  currency: string;
  highlights: string[];
  coverage: { label: string; text: string }[];
  questions: string[];
  models: string[];
  sectors: string[];
}

export const presentDossier = (c: CountryDossier): DossierView => {
  const fix = COVERAGE_COPY[c.id] ?? {};
  const cov = (k: CoverageKey) => fix[k] ?? c.capabilityCoverage[k];
  return {
    id: c.id,
    name: c.name,
    region: c.region,
    isHQ: !!c.isHQ,
    capital: c.capital,
    currency: c.currency,
    highlights: c.marketHighlights
      .map((h) => (h in HIGHLIGHT_COPY ? HIGHLIGHT_COPY[h] : h))
      .filter((h): h is string => !!h),
    coverage: [
      { label: 'Research we can scope', text: cov('marketResearch') },
      { label: 'Regulatory context we map', text: cov('regulatoryIntelligence') },
      { label: 'Entry support', text: cov('marketEntrySupport') }
    ],
    questions: c.typicalQuestions.map((q) => QUESTION_COPY[q] ?? q),
    models: c.engagementModels.map((m) => MODEL_COPY[m] ?? m),
    sectors: c.keySectors
  };
};

/* ================================================================== */

const TOTAL_JURISDICTIONS = AFRICA_REGIONS_DATA.reduce((n, r) => n + r.countries.length, 0);
const FILTERS: ('All' | AfricaRegionName)[] = ['All', ...AFRICA_REGIONS_DATA.map((r) => r.name)];

/* Where each region sits in the schematic: relative orientation only, deliberately not a map */
const COMPASS: Record<AfricaRegionName, { cell: string; word: string }> = {
  'North Africa': { cell: 'col-start-2 row-start-1', word: 'North' },
  'West Africa': { cell: 'col-start-1 row-start-2', word: 'West' },
  'East Africa': { cell: 'col-start-3 row-start-2', word: 'East' },
  'Southern Africa': { cell: 'col-start-2 row-start-3', word: 'Southern' }
};

const scrollToId = (id: string) => {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.getElementById(id)?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
};

export const AfricaIntelligenceMap: React.FC<AfricaIntelligenceMapProps> = ({ onOpenIntake, setActiveTab }) => {
  const [selectedCountryId, setSelectedCountryId] = useState<string>('kenya');
  const [selectedRegion, setSelectedRegion] = useState<'All' | AfricaRegionName>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const q = searchQuery.trim().toLowerCase();
  const filteredCountries = AFRICAN_COUNTRIES.filter((c) => {
    const matchesRegion = selectedRegion === 'All' || c.region === selectedRegion;
    const matchesSearch = c.name.toLowerCase().includes(q) || c.keySectors.some((s) => s.toLowerCase().includes(q));
    return matchesRegion && matchesSearch;
  });

  const currentCountry: CountryDossier = AFRICAN_COUNTRIES.find((c) => c.id === selectedCountryId) || AFRICAN_COUNTRIES[0];
  const dossier = useMemo(() => presentDossier(currentCountry), [currentCountry]);

  const dossiersIn = (region: AfricaRegionName) => AFRICAN_COUNTRIES.filter((c) => c.region === region);

  /** From the hero schematic: filter the dossiers to that region and take the reader there. */
  const showRegion = (region: AfricaRegionName) => {
    setSelectedRegion(region);
    setSearchQuery('');
    if (currentCountry.region !== region) {
      const first = dossiersIn(region)[0];
      if (first) setSelectedCountryId(first.id);
    }
    scrollToId('country-dossiers');
  };

  return (
    <MotionConfig reducedMotion="user">
      {/* ---------------------------------------------------------- */}
      {/* Opening: type-led, with the four regions as a schematic you can use */}
      <HeroSection id="africa-intelligence-section" labelledBy="africa-intel-title">
        <div className="mc-container relative pt-10 sm:pt-14 lg:pt-16 pb-14 sm:pb-16 lg:pb-20">
          <Illumination tone="emerald" strength={0.95} className="right-[-14rem] top-[-4rem] h-[38rem] w-[38rem] lg:right-[-6rem] lg:top-[-2rem]" />

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-x-10 gap-y-12 lg:items-center">
            <HeroCopy
              id="africa-intel-title"
              className="lg:col-span-7"
              meta={<span aria-hidden="true">Regulatory map</span>}
              title={
                <>
                  <span className="sr-only">Regulatory and market map: </span>
                  African regulation and markets, <em>country by country</em>.
                </>
              }
              lead="An overview, by region and country, of who regulates, how buyers purchase and which questions shape market entry. Use it to frame the research and advice we scope with you."
              actions={
                <>
                  <button type="button" onClick={onOpenIntake} className={`${BTN_PRIMARY} !px-6`}>
                    Request a regional briefing
                  </button>
                  <button type="button" onClick={() => scrollToId('country-dossiers')} className={BTN_SECONDARY}>
                    <span>Open the country dossiers</span>
                    <ChevronDown className="h-4 w-4" aria-hidden="true" />
                  </button>
                </>
              }
            />

            {/* Schematic: four regions by orientation. Each node filters the dossiers below. */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.24, delay: 0.06, ease: EASE }}
              className="lg:col-span-5"
            >
              <div role="group" aria-label="Show country dossiers by region" className="relative mx-auto grid aspect-square w-full max-w-[25rem] grid-cols-3 grid-rows-3">
                <span aria-hidden="true" className="absolute left-1/2 top-[27%] bottom-[27%] w-px -translate-x-1/2 bg-white/[0.14]" />
                <span aria-hidden="true" className="absolute top-1/2 left-[29%] right-[29%] h-px -translate-y-1/2 bg-white/[0.14]" />
                <div aria-hidden="true" className="col-start-2 row-start-2 flex flex-col items-center justify-center">
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 ring-[6px] ring-emerald-400/15" />
                </div>
                {AFRICA_REGIONS_DATA.map((r) => {
                  const on = selectedRegion === r.name;
                  const pos = COMPASS[r.name];
                  return (
                    <button
                      key={r.name}
                      type="button"
                      aria-pressed={on}
                      onClick={() => showRegion(r.name)}
                      className={`${pos.cell} group mc-tap m-auto flex flex-col items-center justify-center rounded-xl px-2 py-2 text-center transition-colors duration-150`}
                    >
                      <span
                        className={`font-heading text-[1.375rem] sm:text-[1.75rem] lg:text-[1.625rem] xl:text-[2rem] font-medium leading-none tracking-[-0.02em] transition-colors duration-150 ${
                          on ? 'text-emerald-300' : 'text-white group-hover:text-emerald-200'
                        }`}
                      >
                        {pos.word}
                        <span className="sr-only"> Africa</span>
                      </span>
                      <span className="mt-2 font-mono text-xs tabular-nums text-white/55">
                        {r.countries.length}
                        <span aria-hidden="true"> · </span>
                        <span className="sr-only"> jurisdictions, </span>
                        {dossiersIn(r.name).length} dossiers
                      </span>
                      <span aria-hidden="true" className={`mt-2 h-px w-6 transition-colors duration-150 ${on ? 'bg-emerald-400' : 'bg-transparent'}`} />
                    </button>
                  );
                })}
              </div>
              <p className="mt-2 text-center text-[12px] text-white/50">Jurisdictions · published dossiers, by region</p>
            </motion.div>
          </div>

          <FactRow
            className="relative mt-12 lg:mt-16"
            items={[
              { value: AFRICA_REGIONS_DATA.length, label: 'African regions' },
              { value: TOTAL_JURISDICTIONS, label: 'Jurisdictions' },
              { value: AFRICAN_COUNTRIES.length, label: 'Country dossiers so far' },
              { value: 3, label: 'Geographies served' }
            ]}
          />
        </div>
      </HeroSection>

      {/* ---------------------------------------------------------- */}
      {/* Three geographies: a split, Africa first and widest */}
      <section className="mc-section" aria-labelledby="geo-title">
        <div className="mc-container grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <motion.div {...reveal} className="lg:col-span-5">
            <h2 id="geo-title" className="mc-h2">
              Three geographies, <em>one primary focus</em>
            </h2>
            <p className="mt-4 max-w-[34em] text-[15px] leading-relaxed text-white/65">
              We serve clients in Africa, Europe and the United States. Most of our depth is built around the African continent, where
              regulators, buyers and channels change from one market to the next.
            </p>
          </motion.div>

          <div className="lg:col-span-7">
            <motion.article {...reveal} className="border-t-2 border-emerald-400/80 pt-6">
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                <h3 className="font-heading text-[2rem] sm:text-[2.5rem] font-medium leading-none tracking-[-0.025em] text-white">Africa</h3>
                <span className="text-[13px] font-medium text-emerald-300">Primary focus</span>
              </div>
              <p className="mt-4 max-w-[40em] text-[15px] leading-relaxed text-white/75">
                Engagement capability across all African countries, with particular depth in key pharmaceutical, healthcare and consumer
                markets: multi-country market entry, regulatory mapping, and harmonised research and training across different regulatory
                and language environments.
              </p>
              <p className="mt-3 text-[13px] leading-relaxed text-white/55">Headquarters: Nairobi, Kenya. {NETWORK_NOTE}</p>
            </motion.article>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8">
              {[
                {
                  title: 'Europe',
                  body: 'Pharmaceutical, medical device and life sciences companies looking at African and emerging markets for intelligence, expansion and partnerships, and organisations seeking AI training and digital transformation advice.'
                },
                {
                  title: 'United States',
                  body: 'Multinational and mid-sized organisations, particularly in Life Sciences and healthcare, that need African and global market-entry research, competitive intelligence and AI-enabled solutions.'
                }
              ].map((g, i) => (
                <motion.article
                  key={g.title}
                  {...reveal}
                  transition={{ ...reveal.transition, delay: (i + 1) * 0.05 }}
                  className="border-t border-white/[0.12] pt-5"
                >
                  <h3 className="font-heading text-[1.375rem] font-medium tracking-[-0.015em] text-white">{g.title}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-white/65">{g.body}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/* Country dossiers: the working tool, on its own surface */}
      <section id="country-dossiers" className="mc-section mc-surface scroll-mt-20" aria-labelledby="dossiers-title">
        <div className="mc-container">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <motion.div {...reveal} className="max-w-2xl">
              <p className="mc-meta" aria-live="polite">
                {filteredCountries.length} of {AFRICAN_COUNTRIES.length} dossiers
                {selectedRegion !== 'All' ? ` · ${selectedRegion}` : ''}
              </p>
              <h2 id="dossiers-title" className="mc-h2 mt-3">
                Country dossiers
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-white/65">
                Market context, regulators and the questions clients bring, for the countries written up so far. For any other country,
                ask us: we work across the continent.
              </p>
            </motion.div>
            <div className="relative w-full lg:max-w-xs">
              <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-white/50" aria-hidden="true" />
              <input
                type="search"
                placeholder="Search country or sector"
                aria-label="Search country or sector"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="mc-tap w-full rounded-xl border border-white/[0.1] bg-[#050505] pl-10 pr-3 text-base text-white placeholder-white/45 focus:border-emerald-400/60 focus:outline-none sm:text-sm"
              />
            </div>
          </div>

          <div
            role="group"
            aria-label="Filter dossiers by region"
            className="mt-8 -mx-4 px-4 sm:mx-0 sm:px-0 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            <div className="flex min-w-max gap-x-6 border-b border-white/[0.08]">
              {FILTERS.map((reg) => {
                const on = selectedRegion === reg;
                return (
                  <button
                    key={reg}
                    type="button"
                    aria-pressed={on}
                    onClick={() => setSelectedRegion(reg)}
                    className={`relative mc-tap flex items-end pb-3 text-[13px] font-medium whitespace-nowrap transition-colors duration-150 ${
                      on ? 'text-white' : 'text-white/55 hover:text-white'
                    }`}
                  >
                    {reg === 'All' ? 'All regions' : reg}
                    {on && <span aria-hidden="true" className="absolute inset-x-0 -bottom-px h-0.5 rounded-full bg-emerald-400" />}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
            {/* List */}
            <div className="lg:col-span-4">
              {filteredCountries.length === 0 ? (
                <p className="py-3 text-sm text-white/60">No dossiers match your filters.</p>
              ) : (
                <ul className="grid grid-cols-2 gap-x-4 sm:grid-cols-3 lg:grid-cols-1 border-t border-white/[0.08] lg:sticky lg:top-28">
                  {filteredCountries.map((c) => {
                    const on = selectedCountryId === c.id;
                    return (
                      <li key={c.id} className="border-b border-white/[0.08]">
                        <button
                          type="button"
                          id={`country-pill-${c.id}`}
                          aria-pressed={on}
                          onClick={() => setSelectedCountryId(c.id)}
                          className={`group mc-tap flex w-full items-center justify-between gap-3 py-2.5 text-left transition-colors duration-150 lg:px-3 lg:-mx-3 lg:w-[calc(100%+1.5rem)] lg:rounded-lg ${
                            on ? 'lg:bg-[#0d0f17]' : 'lg:hover:bg-white/[0.03]'
                          }`}
                        >
                          <span className="min-w-0">
                            <span className={`block truncate text-[15px] font-medium ${on ? 'text-white' : 'text-white/75 group-hover:text-white'}`}>
                              {c.name}
                            </span>
                            <span className="hidden lg:block truncate text-[12px] text-white/55">{c.keySectors.slice(0, 3).join(' · ')}</span>
                          </span>
                          <span className="flex shrink-0 items-center gap-2">
                            {c.isHQ && <span className="font-mono text-[11px] text-white/50">HQ</span>}
                            <span className="hidden sm:inline font-mono text-xs text-white/55">{c.region.replace(' Africa', '')}</span>
                            <span aria-hidden="true" className={`h-1.5 w-1.5 rounded-full ${on ? 'bg-emerald-400' : 'bg-transparent'}`} />
                          </span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>

            {/* Dossier */}
            <motion.article
              key={dossier.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.22, ease: EASE }}
              aria-labelledby="dossier-name"
              className="lg:col-span-8 rounded-2xl border border-white/[0.08] bg-[#050505] p-5 sm:p-8"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-5 border-b border-white/[0.08] pb-6">
                <div className="min-w-0">
                  <p className="text-[13px] font-medium text-emerald-300">
                    {dossier.region}
                    {dossier.isHQ ? ' · MindCraft headquarters' : ''}
                  </p>
                  <h3 id="dossier-name" className="mt-2 font-heading text-[2rem] sm:text-[2.5rem] font-medium leading-none tracking-[-0.025em] text-white">
                    {dossier.name}
                  </h3>
                  <dl className="mt-3 flex flex-wrap gap-x-6 gap-y-1 font-mono text-[12px] text-white/50">
                    <div>
                      <dt className="inline">Capital </dt>
                      <dd className="inline text-white/80">{dossier.capital}</dd>
                    </div>
                    <div>
                      <dt className="inline">Currency </dt>
                      <dd className="inline text-white/80">{dossier.currency}</dd>
                    </div>
                  </dl>
                </div>
                <button type="button" onClick={onOpenIntake} className={`${BTN_PRIMARY} shrink-0`}>
                  <span>Request a {dossier.name} briefing</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>

              <div className="mt-7 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
                <div>
                  <h4 className="text-[13px] font-medium text-white/55">Market and regulatory context</h4>
                  <ul className="mt-3 border-t border-white/[0.08]">
                    {dossier.highlights.map((hl) => (
                      <li key={hl} className="flex gap-3 border-b border-white/[0.08] py-3 text-[14px] leading-relaxed text-white/80">
                        <span aria-hidden="true" className="mt-[0.55rem] h-1 w-1 shrink-0 rounded-full bg-amber-400" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-[13px] text-white/55">
                    <span className="text-white/55">Key sectors: </span>
                    {dossier.sectors.join(', ')}
                  </p>
                </div>
                <div>
                  <h4 className="text-[13px] font-medium text-white/55">Questions we help answer</h4>
                  <ul className="mt-3 space-y-4">
                    {dossier.questions.map((q2) => (
                      <li key={q2} className="font-heading text-[1.0625rem] leading-snug tracking-[-0.01em] text-white/90">
                        {q2}
                      </li>
                    ))}
                  </ul>
                  <h4 className="mt-8 text-[13px] font-medium text-white/55">Engagement models</h4>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {dossier.models.map((em) => (
                      <li key={em} className="rounded-lg border border-white/[0.1] px-3 py-1.5 text-[12px] text-white/75">
                        {em}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <DeepDive
                className="mt-8"
                tone="emerald"
                title={`What an engagement can cover in ${dossier.name}`}
                hint="Research, regulatory context and entry support"
              >
                <dl className="mt-2 grid grid-cols-1 md:grid-cols-3 gap-5">
                  {dossier.coverage.map((c) => (
                    <div key={c.label}>
                      <dt className="text-[13px] font-medium text-emerald-300">{c.label}</dt>
                      <dd className="mt-1.5 text-[14px] leading-relaxed text-white/75">{c.text}</dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-5 text-[13px] leading-relaxed text-white/55">{NETWORK_NOTE}</p>
              </DeepDive>
            </motion.article>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      <section className="mc-section" aria-label="Next steps">
        <div className="mc-container space-y-10 md:space-y-14">
          <motion.div {...reveal}>
            <ContextualCTA
              title="Need a briefing on a specific market?"
              body="Name the countries, the product and the decision in front of you. We will scope a regulatory and market briefing around it."
              primaryLabel="Request a regional briefing"
              onPrimary={onOpenIntake}
            />
          </motion.div>
          <RelatedLinks
            title="Elsewhere in Markets"
            items={[
              { label: 'Regions and jurisdictions', desc: 'All four regions and 45 jurisdictions', tone: 'emerald', to: 'africa-explorer' },
              { label: 'Market localisation', desc: 'How a global strategy becomes a local result', tone: 'emerald', to: 'localization' },
              { label: 'Market entry', desc: 'A structured, nine-step approach', tone: 'amber', to: 'market-entry' }
            ]}
          />
        </div>
      </section>
    </MotionConfig>
  );
};
