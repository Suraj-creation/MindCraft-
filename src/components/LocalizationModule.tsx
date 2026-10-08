import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { NavTab } from '../types';
import { SERVICE_PILLARS } from '../data/mindcraftData';
import { DeepDive, SectionHeader, TONES, Tone, reveal } from './ui/primitives';

interface LocalizationModuleProps {
  variant?: 'compact' | 'full';
  onNavigate: (tab: NavTab) => void;
  onOpenIntake: () => void;
}

/** Five-stage flow. Every line is paraphrased from the corporate profile or the senior-expertise profile. */
const STAGES: { title: string; line: string; chips?: string[] }[] = [
  {
    title: 'Global strategy',
    line: 'African context, global standard: world-class consulting delivered with authentic local understanding.'
  },
  {
    title: 'African market intelligence',
    line: 'Regulatory, policy and reimbursement landscape scans across African and international markets.'
  },
  {
    title: 'Country-specific context',
    line: 'Cultural and regulatory fluency, built on on-ground presence across the continent.',
    chips: ['Regulatory', 'Commercial', 'Cultural']
  },
  {
    title: 'Local partners & distributors',
    line: 'A growing network of local associates and partners, with distributor selection and partnerships.'
  },
  {
    title: 'Local execution & outcome',
    line: 'Harmonized research and training programs across diverse regulatory and language environments, tied to measurable value.'
  }
];

type PillarId = 'consulting' | 'market-research' | 'ai-training' | 'ai-solutions';
const PILLAR_TONE: Record<PillarId, Tone> = {
  consulting: 'teal',
  'market-research': 'sky',
  'ai-training': 'amber',
  'ai-solutions': 'emerald'
};

const LOCALIZED: { title: string; line: string; pillar: PillarId; capability: string }[] = [
  {
    title: 'Regulatory & registration',
    line: 'Local GMP certification and registration of products, medical devices and nutraceuticals.',
    pillar: 'consulting',
    capability: 'Policy, Regulatory & Project Advisory'
  },
  {
    title: 'Commercial & go-to-market',
    line: 'Tailored go-to-market strategies built from local market dynamics.',
    pillar: 'consulting',
    capability: 'Corporate & Business Strategy'
  },
  {
    title: 'Partners & distributors',
    line: 'Distributor selection and partnerships through a growing network of local associates.',
    pillar: 'market-research',
    capability: 'Primary Market Research'
  },
  {
    title: 'Research & cultural context',
    line: 'Harmonized research across diverse regulatory and language environments.',
    pillar: 'market-research',
    capability: 'Secondary & Desk Research'
  },
  {
    title: 'Training & delivery',
    line: 'In-person, virtual and hybrid delivery across African, European and US time zones.',
    pillar: 'ai-training',
    capability: 'Capability Multiplication & Champions'
  }
];

export const LocalizationModule: React.FC<LocalizationModuleProps> = ({ variant = 'compact', onNavigate, onOpenIntake }) => {
  const full = variant === 'full';

  return (
    <section className="mc-section" aria-labelledby="localization-module-title">
      <div className="mc-container">
        <SectionHeader
          eyebrow="Localization"
          title={<span id="localization-module-title">From global strategy to local result</span>}
          lead="Localization at MindCraft is a local-market capability: regulatory, commercial and cultural context carried through to execution."
          action={
            !full ? (
              <button
                type="button"
                onClick={() => onNavigate('localization')}
                className="mc-tap self-start md:self-auto px-5 rounded-xl bg-indigo-600 hover:bg-indigo-500 active:scale-[0.98] text-white text-sm font-semibold flex items-center justify-center gap-2 transition-[background-color,transform] duration-150"
              >
                <span>See how localization works</span>
                <ArrowRight aria-hidden className="w-4 h-4" />
              </button>
            ) : undefined
          }
        />

        <ol className="grid grid-cols-1 lg:grid-cols-5 gap-0 lg:gap-4" aria-label="Localization stages">
          {STAGES.map((s, i) => (
            <motion.li
              key={s.title}
              {...reveal}
              transition={{ ...reveal.transition, delay: i * 0.05 }}
              className="relative pl-12 pb-6 last:pb-0 lg:pl-0 lg:pb-0 lg:pt-12"
            >
              {/* connector: vertical on mobile, horizontal on desktop */}
              {i < STAGES.length - 1 && (
                <span aria-hidden className="absolute left-[1.0625rem] top-9 bottom-0 w-px bg-white/10 lg:left-9 lg:right-[-1rem] lg:top-[1.0625rem] lg:bottom-auto lg:h-px lg:w-auto" />
              )}
              <span
                aria-hidden
                className="absolute left-0 top-0 lg:left-0 flex h-9 w-9 items-center justify-center rounded-full border border-indigo-500/35 bg-[#0d0f17] font-mono text-xs text-indigo-300 tabular-nums"
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="lg:rounded-xl lg:border lg:border-white/10 lg:bg-[#0a0a0a] lg:p-4 lg:h-full">
                <h3 className="text-base font-bold text-white leading-snug">
                  <span className="sr-only">Stage {i + 1}: </span>
                  {s.title}
                </h3>
                <p className="mt-1.5 text-sm text-white/65 leading-snug">{s.line}</p>
                {s.chips && (
                  <ul className="mt-2.5 flex flex-wrap gap-1.5">
                    {s.chips.map((c) => (
                      <li key={c} className={`rounded-full border px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider ${TONES.indigo.chip}`}>
                        {c}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.li>
          ))}
        </ol>

        {full && (
          <div className="mt-10 sm:mt-14">
            <h3 className="font-heading text-xl sm:text-2xl font-light text-white">What gets localized</h3>
            <p className="mt-2 text-sm text-white/60 max-w-2xl">
              Five areas where global work meets local conditions, each delivered through one of MindCraft&rsquo;s pillars.
            </p>
            <ul className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {LOCALIZED.map((item, i) => {
                const pillar = SERVICE_PILLARS.find((p) => p.id === item.pillar);
                const cap = pillar?.capabilities.find((c) => c.title === item.capability);
                const tone = PILLAR_TONE[item.pillar];
                return (
                  <motion.li
                    key={item.title}
                    {...reveal}
                    transition={{ ...reveal.transition, delay: Math.min(i, 3) * 0.05 }}
                    className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-[#0a0a0a] p-4 sm:p-5"
                  >
                    <div>
                      <span className={`inline-flex rounded-full border px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider ${TONES[tone].chip}`}>
                        {pillar?.name ?? item.pillar}
                      </span>
                      <h4 className="mt-3 text-base font-bold text-white">{item.title}</h4>
                      <p className="mt-1.5 text-sm text-white/65 leading-snug">{item.line}</p>
                    </div>
                    <DeepDive title="How it is delivered" hint={item.capability} tone={tone} className="mt-auto">
                      {cap && (
                        <ul className="mt-2 space-y-1.5 text-sm text-white/70">
                          {cap.bulletPoints.map((b) => (
                            <li key={b} className="flex gap-2 leading-snug">
                              <span aria-hidden className={`mt-2 h-1 w-1 shrink-0 rounded-full ${TONES[tone].bg} ${TONES[tone].border} border`} />
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                      <button
                        type="button"
                        onClick={() => onNavigate(item.pillar)}
                        className={`mc-tap mt-2 inline-flex items-center gap-1.5 text-sm font-medium ${TONES[tone].text}`}
                      >
                        Open {pillar?.name ?? 'pillar'} <ArrowRight aria-hidden className="w-4 h-4" />
                      </button>
                    </DeepDive>
                  </motion.li>
                );
              })}
            </ul>
            <div className="mt-6">
              <button
                type="button"
                onClick={onOpenIntake}
                className="mc-tap px-5 rounded-xl bg-white/5 hover:bg-white/10 active:scale-[0.98] text-white/90 text-sm border border-white/10 transition-[background-color,transform] duration-150"
              >
                Scope a local-market engagement
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default LocalizationModule;
