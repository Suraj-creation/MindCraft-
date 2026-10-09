import React, { useId, useMemo, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { ArrowRight, ChevronDown, Compass, Cpu, GraduationCap, Search } from 'lucide-react';
import { NavTab } from '../types';
import { UNIVERSAL_INDUSTRIES, AFRICA_REGIONS_DATA } from '../data/industryAndAfricaData';
import { SERVICE_PILLARS } from '../data/mindcraftData';
import { EASE, SectionHeader, TONES, Tone, reveal } from './ui/primitives';

interface PathwayExplorerProps {
  onNavigate: (tab: NavTab) => void;
  onSelectIndustry?: (name: string) => void;
  onOpenIntake: () => void;
}

type PillarId = 'consulting' | 'market-research' | 'ai-training' | 'ai-solutions';

/** Pillar presentation, keyed by the pillar ids that double as NavTab values. */
const PILLAR_UI: Record<PillarId, { tone: Tone; icon: React.ComponentType<{ className?: string }>; checked: string }> = {
  consulting: { tone: 'teal', icon: Compass, checked: 'peer-checked:border-teal-500/60 peer-checked:bg-teal-500/10' },
  'market-research': { tone: 'sky', icon: Search, checked: 'peer-checked:border-sky-500/60 peer-checked:bg-sky-500/10' },
  'ai-training': { tone: 'amber', icon: GraduationCap, checked: 'peer-checked:border-amber-500/60 peer-checked:bg-amber-500/10' },
  'ai-solutions': { tone: 'emerald', icon: Cpu, checked: 'peer-checked:border-emerald-500/60 peer-checked:bg-emerald-500/10' }
};

/** Non-African markets, as described in the corporate profile (section 3). */
const OTHER_GEOS: Record<string, string> = {
  Europe:
    'Market intelligence, expansion strategy and partnership opportunities across African and emerging markets; AI training and digital transformation advisory.',
  'United States':
    'African and global market entry research, competitive intelligence and AI-enabled enterprise solutions, particularly in Life Sciences and healthcare.'
};

const selectClass =
  'mc-tap w-full appearance-none rounded-xl bg-[#050505] border border-white/10 hover:border-white/20 pl-3.5 pr-10 py-3 text-base text-white transition-colors duration-150 cursor-pointer';

const StepLabel: React.FC<{ n: string; htmlFor?: string; id?: string; children: React.ReactNode }> = ({ n, htmlFor, id, children }) => (
  <label htmlFor={htmlFor} id={id} className="flex items-center gap-2 mb-2">
    <span className="tabular-nums text-[11px] text-indigo-400 tabular-nums">{n}</span>
    <span className="text-xs text-white/60 font-medium">{children}</span>
  </label>
);

export const PathwayExplorer: React.FC<PathwayExplorerProps> = ({ onNavigate, onSelectIndustry, onOpenIntake }) => {
  const reduce = useReducedMotion();
  const uid = useId();
  const industryId = `${uid}-industry`;
  const geoId = `${uid}-geo`;
  const capLabelId = `${uid}-cap`;

  const coreIndustries = useMemo(() => UNIVERSAL_INDUSTRIES.filter((i) => i.category === 'core-lifesciences'), []);
  const otherIndustries = useMemo(() => UNIVERSAL_INDUSTRIES.filter((i) => i.category !== 'core-lifesciences'), []);
  const otherGeoNames = Object.keys(OTHER_GEOS);

  const [industryKey, setIndustryKey] = useState<string>(UNIVERSAL_INDUSTRIES[0].id);
  const [geo, setGeo] = useState<string>(AFRICA_REGIONS_DATA[0].name);
  const [pillarId, setPillarId] = useState<PillarId>('market-research');

  const industry = UNIVERSAL_INDUSTRIES.find((i) => i.id === industryKey) ?? UNIVERSAL_INDUSTRIES[0];
  const region = AFRICA_REGIONS_DATA.find((r) => r.name === geo);
  const pillar = SERVICE_PILLARS.find((p) => p.id === pillarId) ?? SERVICE_PILLARS[0];
  const pui = PILLAR_UI[pillarId];
  const isAfrica = Boolean(region);

  const geoLead = isAfrica ? 'across' : 'in';
  const geoName = geo === 'United States' ? 'the United States' : geo;
  const sentence = `${pillar.name} for ${industry.name} ${geoLead} ${geoName}`;

  const geoContext = region
    ? `${region.countries.length} jurisdictions: ${region.countries.slice(0, 4).join(', ')}${region.countries.length > 4 ? ` and ${region.countries.length - 4} more` : ''}.`
    : OTHER_GEOS[geo];

  const pathways: { label: string; desc: string; tone: Tone; go: () => void }[] = [
    {
      label: `${industry.name} explorer`,
      desc: 'Questions, research and AI opportunities for this industry',
      tone: 'indigo',
      go: () => {
        onSelectIndustry?.(industry.name);
        onNavigate('industries');
      }
    },
    region
      ? { label: `${region.name} hub`, desc: `${region.countries.length} jurisdictions, regional context`, tone: 'emerald', go: () => onNavigate('africa-explorer') }
      : { label: 'Entering African markets', desc: 'The nine-step market entry framework', tone: 'emerald', go: () => onNavigate('market-entry') },
    { label: pillar.name, desc: pillar.question, tone: pui.tone, go: () => onNavigate(pillarId) },
    { label: 'Local-market capability', desc: 'How global strategy becomes local execution', tone: 'indigo', go: () => onNavigate('localization') }
  ];

  return (
    <section className="mc-section" aria-labelledby={`${uid}-title`}>
      <div className="mc-container">
        <SectionHeader
          title={<span id={`${uid}-title`}>Which MindCraft pathway fits you?</span>}
          lead="Pick your industry, where you operate and what you need. We compose the pathway and the scope."
        />

        <motion.div {...reveal} className="rounded-2xl border border-white/10 bg-[#0a0a0a] overflow-hidden">
          {/* Selectors */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6 p-4 sm:p-6">
            <div>
              <StepLabel n="01" htmlFor={industryId}>Industry</StepLabel>
              <div className="relative">
                <select id={industryId} value={industryKey} onChange={(e) => setIndustryKey(e.target.value)} className={selectClass}>
                  <optgroup label="Life Sciences (core expertise)">
                    {coreIndustries.map((i) => (
                      <option key={i.id} value={i.id}>{i.name}</option>
                    ))}
                  </optgroup>
                  <optgroup label="Diversified verticals">
                    {otherIndustries.map((i) => (
                      <option key={i.id} value={i.id}>{i.name}</option>
                    ))}
                  </optgroup>
                </select>
                <ChevronDown aria-hidden className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50" />
              </div>
              <p className="mt-2 text-xs text-white/50">{UNIVERSAL_INDUSTRIES.length} industries across {coreIndustries.length} Life Sciences sectors and {otherIndustries.length} verticals.</p>
            </div>

            <div>
              <StepLabel n="02" htmlFor={geoId}>Geography</StepLabel>
              <div className="relative">
                <select id={geoId} value={geo} onChange={(e) => setGeo(e.target.value)} className={selectClass}>
                  <optgroup label="Africa (primary focus)">
                    {AFRICA_REGIONS_DATA.map((r) => (
                      <option key={r.name} value={r.name}>{r.name}</option>
                    ))}
                  </optgroup>
                  <optgroup label="Also serving">
                    {otherGeoNames.map((g) => (
                      <option key={g} value={g}>{g}</option>
                    ))}
                  </optgroup>
                </select>
                <ChevronDown aria-hidden className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50" />
              </div>
              <p className="mt-2 text-xs text-white/50">
                {isAfrica ? 'Africa is MindCraft’s primary focus market.' : 'Served from Nairobi alongside the African focus.'}
              </p>
            </div>

            <fieldset>
              <legend id={capLabelId} className="flex items-center gap-2 mb-2">
                <span className="tabular-nums text-[11px] text-indigo-400 tabular-nums">03</span>
                <span className="text-xs text-white/60 font-medium">Capability</span>
              </legend>
              <div className="grid grid-cols-2 gap-2" role="radiogroup" aria-labelledby={capLabelId}>
                {SERVICE_PILLARS.map((p) => {
                  const id = p.id as PillarId;
                  const ui = PILLAR_UI[id];
                  if (!ui) return null;
                  const Icon = ui.icon;
                  return (
                    <div key={p.id} className="relative">
                      <input
                        type="radio"
                        name={`${uid}-capability`}
                        id={`${uid}-cap-${p.id}`}
                        value={p.id}
                        checked={pillarId === id}
                        onChange={() => setPillarId(id)}
                        className="peer sr-only"
                      />
                      <label
                        htmlFor={`${uid}-cap-${p.id}`}
                        className={`mc-tap flex h-full items-center gap-2 rounded-xl border border-white/10 bg-[#050505] px-3 py-2.5 text-[13px] leading-tight text-white/75 hover:border-white/20 cursor-pointer select-none transition-colors duration-150 active:scale-[0.98] peer-checked:text-white peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-indigo-400 ${ui.checked}`}
                      >
                        <Icon className={`w-4 h-4 shrink-0 ${TONES[ui.tone].text}`} />
                        <span className="min-w-0">{p.name}</span>
                      </label>
                    </div>
                  );
                })}
              </div>
            </fieldset>
          </div>

          {/* Output */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 border-t border-white/10 bg-[#0d0f17] p-4 sm:p-6">
            <div className="lg:col-span-7 min-w-0">
              <div className="mc-eyebrow">Your pathway</div>
              <div aria-live="polite" aria-atomic="true">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.p
                    key={sentence}
                    initial={{ opacity: 0, y: reduce ? 0 : 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: reduce ? 0 : 0.18, ease: EASE }}
                    className="mt-3 font-heading text-xl sm:text-2xl lg:text-[1.75rem] font-medium leading-snug text-white text-balance"
                  >
                    <span className={TONES[pui.tone].text}>{pillar.name}</span> for{' '}
                    <span className="text-white">{industry.name}</span>{' '}
                    <span className="text-white/60">{geoLead}</span>{' '}
                    <span className="text-emerald-300">{geoName}</span>
                  </motion.p>
                </AnimatePresence>
              </div>

              <dl className="mt-5 space-y-3 text-sm">
                <div className="grid grid-cols-[5.5rem_1fr] gap-3">
                  <dt className="text-xs text-white/40 pt-0.5 font-medium">Industry</dt>
                  <dd className="text-white/70 leading-snug max-w-[62ch]">{industry.tagline}</dd>
                </div>
                <div className="grid grid-cols-[5.5rem_1fr] gap-3">
                  <dt className="text-xs text-white/40 pt-0.5 font-medium">Geography</dt>
                  <dd className="text-white/70 leading-snug max-w-[62ch]">{geoContext}</dd>
                </div>
                <div className="grid grid-cols-[5.5rem_1fr] gap-3">
                  <dt className="text-xs text-white/40 pt-0.5 font-medium">Capability</dt>
                  <dd className="text-white/70 leading-snug max-w-[62ch]">{pillar.tagline}</dd>
                </div>
              </dl>
            </div>

            <div className="lg:col-span-5 min-w-0">
              <div className="mc-eyebrow">Open the pathway</div>
              <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-2">
                {pathways.map((p) => (
                  <li key={p.label}>
                    <button
                      type="button"
                      onClick={p.go}
                      className={`mc-card-interactive mc-tap w-full h-full text-left px-3.5 py-2.5 rounded-xl bg-[#0a0a0a] border border-white/10 ${TONES[p.tone].hoverBorder} flex items-center justify-between gap-2`}
                    >
                      <span className="min-w-0">
                        <span className="block text-sm font-semibold text-white leading-tight">{p.label}</span>
                        <span className="block text-xs text-white/50 mt-0.5 leading-snug">{p.desc}</span>
                      </span>
                      <ArrowRight aria-hidden className={`w-4 h-4 shrink-0 ${TONES[p.tone].text}`} />
                    </button>
                  </li>
                ))}
              </ul>
              <button
                type="button"
                onClick={onOpenIntake}
                className="mc-tap mt-3 w-full px-5 rounded-xl bg-indigo-600 hover:bg-indigo-500 active:scale-[0.98] text-white text-sm font-semibold flex items-center justify-center gap-2 transition-[background-color,transform] duration-150"
              >
                <span>Start an engagement with this scope</span>
                <ArrowRight aria-hidden className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PathwayExplorer;
