import React, { useMemo, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { ArrowRight, MapPinned } from 'lucide-react';
import { NavTab } from '../types';
import { AFRICA_REGIONS_DATA } from '../data/industryAndAfricaData';
import { AFRICAN_COUNTRIES, SERVICE_PILLARS } from '../data/mindcraftData';
import { ContextualCTA, DeepDive, EASE, PageHeader, RelatedLinks, SectionHeader, TONES } from './ui/primitives';
import { LocalizationModule } from './LocalizationModule';
import { ArtImage } from './ui/ArtImage';
import { ArtCaption, Scrim } from './ui/Hero';

interface LocalizationViewProps {
  onNavigate: (tab: NavTab) => void;
  onOpenIntake: () => void;
}

const norm = (s: string) => s.trim().toLowerCase();

export const LocalizationView: React.FC<LocalizationViewProps> = ({ onNavigate, onOpenIntake }) => {
  const reduce = useReducedMotion();
  const [regionName, setRegionName] = useState<string>(AFRICA_REGIONS_DATA[0].name);
  const [country, setCountry] = useState<string | null>(null);

  const region = AFRICA_REGIONS_DATA.find((r) => r.name === regionName) ?? AFRICA_REGIONS_DATA[0];
  const dossierByName = useMemo(() => new Map(AFRICAN_COUNTRIES.map((c) => [norm(c.name), c])), []);
  const dossier = country ? dossierByName.get(norm(country)) : undefined;

  const jurisdictions = useMemo(() => AFRICA_REGIONS_DATA.reduce((n, r) => n + r.countries.length, 0), []);

  const pickRegion = (name: string) => {
    setRegionName(name);
    setCountry(null);
  };

  return (
    <div>
      <section className="mc-section mc-page-intro" aria-labelledby="localization-title">
        <div className="mc-container">
          <PageHeader
            id="localization-title"
            title="Make strategy work locally."
            lead="Bring commercial and regulatory decisions into the realities of each market across Africa."
            metrics={[
              { value: AFRICA_REGIONS_DATA.length, label: 'African regions' },
              { value: jurisdictions, label: 'Jurisdictions' },
              { value: SERVICE_PILLARS.length, label: 'Service pillars' },
              { value: AFRICAN_COUNTRIES.length, label: 'Country dossiers' }
            ]}
          />
          <figure className="mc-art-bleed mc-full-bleed relative mt-10 min-h-56 sm:min-h-72">
            <ArtImage name="localization-market" alt="" sizes="100vw" position="object-[52%_52%]" />
            <Scrim background="linear-gradient(90deg, rgba(5,5,5,.8), rgba(5,5,5,.13) 68%, rgba(5,5,5,.02))" />
            <Scrim background="linear-gradient(180deg, rgba(5,5,5,.28), rgba(5,5,5,0) 35%, rgba(5,5,5,.72))" />
            <ArtCaption className="absolute bottom-4 left-[max(1rem,calc((100vw-min(100vw-2rem,88rem))/2))]">Local market illustration</ArtCaption>
          </figure>
        </div>
      </section>

      <LocalizationModule variant="full" onNavigate={onNavigate} onOpenIntake={onOpenIntake} />

      <section className="mc-section" aria-labelledby="country-picker-title">
        <div className="mc-container">
          <SectionHeader
            title={<span id="country-picker-title">Where do you need local context?</span>}
            lead="Choose a region, then a country. Published dossiers show the market context we hold today."
          />

          <div role="group" aria-label="Region" className="flex flex-wrap gap-2">
            {AFRICA_REGIONS_DATA.map((r) => {
              const active = r.name === regionName;
              return (
                <button
                  key={r.name}
                  type="button"
                  aria-pressed={active}
                  onClick={() => pickRegion(r.name)}
                  className={`mc-tap px-4 rounded-xl border text-sm active:scale-[0.98] transition-[background-color,border-color,transform] duration-150 ${
                    active ? 'bg-indigo-950/50 border-indigo-500/40 text-indigo-100' : 'bg-[#0a0a0a] border-white/10 text-white/70 hover:border-white/20 hover:text-white'
                  }`}
                >
                  {r.name}
                  <span className="ml-2 tabular-nums text-xs text-white/55 tabular-nums">{r.countries.length}</span>
                </button>
              );
            })}
          </div>

          <ul aria-label={`Countries in ${region.name}`} className="mt-4 flex flex-wrap gap-2">
            {region.countries.map((c) => {
              const active = country === c;
              const has = dossierByName.has(norm(c));
              return (
                <li key={c}>
                  <button
                    type="button"
                    aria-pressed={active}
                    onClick={() => setCountry(active ? null : c)}
                    className={`mc-tap inline-flex items-center gap-2 px-3.5 rounded-full border text-sm active:scale-[0.98] transition-[background-color,border-color,transform] duration-150 ${
                      active ? `${TONES.emerald.bg} ${TONES.emerald.border} text-white` : 'bg-[#0a0a0a] border-white/10 text-white/70 hover:border-white/20 hover:text-white'
                    }`}
                  >
                    {c}
                    {has && <span aria-label="dossier published" className="h-1.5 w-1.5 rounded-full bg-emerald-400" />}
                  </button>
                </li>
              );
            })}
          </ul>
          <p className="mt-3 text-xs text-white/50">A green dot marks countries with a published dossier.</p>

          <div className="mt-6" aria-live="polite">
            <AnimatePresence mode="wait" initial={false}>
              {country && (
                <motion.div
                  key={country}
                  initial={{ opacity: 0, y: reduce ? 0 : 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: reduce ? 0 : 0.2, ease: EASE }}
                  className="rounded-2xl border border-white/10 bg-[#0d0f17] p-5 sm:p-7"
                >
                  {dossier ? (
                    <div>
                      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                        <h3 className="font-heading text-2xl font-medium text-white">{dossier.name}</h3>
                        <span className="text-xs text-emerald-300 font-medium">
                          {dossier.isHQ ? 'MindCraft headquarters · ' : ''}
                          {dossier.region}
                        </span>
                      </div>
                      <dl className="mt-4 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10">
                        <div className="bg-[#0a0a0a] p-3.5">
                          <dt className="text-xs text-white/50 font-medium">Capital</dt>
                          <dd className="mt-1 text-sm text-white">{dossier.capital}</dd>
                        </div>
                        <div className="bg-[#0a0a0a] p-3.5">
                          <dt className="text-xs text-white/50 font-medium">Currency</dt>
                          <dd className="mt-1 text-sm text-white">{dossier.currency}</dd>
                        </div>
                      </dl>

                      <div className="mt-5">
                        <div className="mc-eyebrow">Market highlights</div>
                        <ul className="mt-2 space-y-2 text-sm text-white/75">
                          {dossier.marketHighlights.slice(0, 3).map((h) => (
                            <li key={h} className="flex gap-2.5 leading-snug">
                              <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-emerald-400" />
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <ul aria-label="Key sectors" className="mt-4 flex flex-wrap gap-1.5">
                        {dossier.keySectors.map((s) => (
                          <li key={s} className={`rounded-full border px-2.5 py-1 text-xs font-medium${TONES.indigo.chip}`}>
                            {s}
                          </li>
                        ))}
                      </ul>

                      <DeepDive className="mt-5" title="Regulatory and market-entry context" hint={`${dossier.name} dossier`} tone="emerald">
                        <dl className="mt-2 space-y-3 text-sm">
                          <div>
                            <dt className="text-xs text-white/50 font-medium">Regulatory intelligence</dt>
                            <dd className="mt-1 text-white/75 leading-snug">{dossier.capabilityCoverage.regulatoryIntelligence}</dd>
                          </div>
                          <div>
                            <dt className="text-xs text-white/50 font-medium">Market entry support</dt>
                            <dd className="mt-1 text-white/75 leading-snug">{dossier.capabilityCoverage.marketEntrySupport}</dd>
                          </div>
                          {dossier.marketHighlights.length > 3 && (
                            <div>
                              <dt className="text-xs text-white/50 font-medium">More highlights</dt>
                              <dd className="mt-1">
                                <ul className="space-y-1.5 text-white/75">
                                  {dossier.marketHighlights.slice(3).map((h) => (
                                    <li key={h} className="leading-snug">{h}</li>
                                  ))}
                                </ul>
                              </dd>
                            </div>
                          )}
                        </dl>
                      </DeepDive>

                      <button
                        type="button"
                        onClick={onOpenIntake}
                        className="mc-tap mt-5 px-5 rounded-xl bg-indigo-600 hover:bg-indigo-500 active:scale-[0.98] text-white text-sm font-semibold inline-flex items-center justify-center gap-2 transition-[background-color,transform] duration-150"
                      >
                        <span>Start an engagement in {dossier.name}</span>
                        <ArrowRight aria-hidden className="w-4 h-4" />
                      </button>
                    </div>
                  ) : (
                    <div>
                      <h3 className="font-heading text-2xl font-medium text-white">{country}</h3>
                      <p className="mt-2 text-sm text-white/65 leading-relaxed max-w-xl">
                        A country dossier has not been published yet for {country}. Tell us what you need to know and we will scope the local context with you.
                      </p>
                      <button
                        type="button"
                        onClick={onOpenIntake}
                        className="mc-tap mt-4 px-5 rounded-xl bg-indigo-600 hover:bg-indigo-500 active:scale-[0.98] text-white text-sm font-semibold inline-flex items-center justify-center gap-2 transition-[background-color,transform] duration-150"
                      >
                        <span>Ask about {country}</span>
                        <ArrowRight aria-hidden className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <section className="mc-section" aria-label="Next steps">
        <div className="mc-container space-y-10 md:space-y-14">
          <RelatedLinks
            title="Continue exploring"
            items={[
              { label: 'African regions', desc: 'Regions and jurisdictions', tone: 'emerald', to: 'africa-explorer' },
              { label: 'Market entry', desc: 'Nine steps into a new market', tone: 'emerald', to: 'market-entry' },
              { label: 'Regulatory & market map', desc: 'Country-level market context', tone: 'sky', to: 'africa-intelligence' },
              { label: 'Senior expertise', desc: 'The people behind the work', tone: 'indigo', to: 'senior-expertise' }
            ]}
          />
          <ContextualCTA
            title="Take a global strategy local"
            body="Share your industry, target countries and the outcome you need. We will scope the local-market work with you."
            primaryLabel="Start an engagement"
            onPrimary={onOpenIntake}
            secondaryLabel="Explore African markets"
            onSecondary={() => onNavigate('africa-explorer')}
          />
        </div>
      </section>
    </div>
  );
};

export default LocalizationView;
