import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { LIFE_SCIENCES_SECTORS, DIVERSIFIED_INDUSTRIES } from '../data/mindcraftData';
import { NavTab, RoleLens } from '../types';
import {
  Dna,
  Pill,
  Stethoscope,
  Activity,
  Building2,
  Scissors,
  FlaskConical,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Search,
  Cpu,
  HelpCircle,
  ChevronDown
} from 'lucide-react';

interface LifeSciencesEcosystemProps {
  onOpenIntake: () => void;
  setActiveTab: (tab: NavTab) => void;
  roleLens?: RoleLens;
}

type Tone = 'indigo' | 'emerald' | 'amber';

const EASE = [0.16, 1, 0.3, 1] as const;

const TONE_TEXT: Record<Tone, string> = {
  indigo: 'text-indigo-400',
  emerald: 'text-emerald-400',
  amber: 'text-amber-400'
};

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

/** Accordion on phones, always-open card from md up. */
const Disclosure: React.FC<{
  title: string;
  icon: React.ReactNode;
  tone: Tone;
  meta?: string;
  defaultOpen?: boolean;
  isWide: boolean;
  children: React.ReactNode;
}> = ({ title, icon, tone, meta, defaultOpen = false, isWide, children }) => {
  const [open, setOpen] = useState(defaultOpen);
  const expanded = isWide || open;
  return (
    <div className="min-w-0 rounded-2xl bg-[#050505] border border-white/[0.08]">
      <button
        type="button"
        aria-expanded={expanded}
        tabIndex={isWide ? -1 : 0}
        onClick={() => !isWide && setOpen(o => !o)}
        className={`w-full mc-tap flex items-center justify-between gap-3 px-4 py-3 text-left active:scale-[0.99] transition-transform md:cursor-default md:pointer-events-none ${TONE_TEXT[tone]}`}
      >
        <span className="flex items-center gap-2 min-w-0 font-mono text-[11px] uppercase tracking-wider font-bold">
          <span className="shrink-0" aria-hidden="true">{icon}</span>
          <span className="min-w-0">{title}</span>
        </span>
        <span className="flex items-center gap-2 shrink-0">
          {meta && <span className="font-mono text-[11px] text-gray-400">{meta}</span>}
          <ChevronDown
            aria-hidden="true"
            className={`w-4 h-4 text-gray-400 md:hidden transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`}
          />
        </span>
      </button>
      {expanded && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.18, ease: EASE }}
          className="px-4 pb-4"
        >
          {children}
        </motion.div>
      )}
    </div>
  );
};

const DOT: Record<Tone, string> = {
  indigo: 'bg-indigo-500',
  emerald: 'bg-emerald-500',
  amber: 'bg-amber-500'
};

const DotList: React.FC<{ items: string[]; tone: Tone }> = ({ items, tone }) => (
  <ul className="space-y-2.5">
    {items.map((it, i) => (
      <li key={i} className="text-[13px] sm:text-sm text-[#E0E0E0] leading-relaxed flex items-start gap-2.5">
        <span className={`w-1.5 h-1.5 rounded-full mt-[0.45rem] shrink-0 ${DOT[tone]}`} />
        <span className="min-w-0">{it}</span>
      </li>
    ))}
  </ul>
);

export const LifeSciencesEcosystem: React.FC<LifeSciencesEcosystemProps> = ({
  onOpenIntake,
  setActiveTab
}) => {
  const [activeSectorId, setActiveSectorId] = useState<string>('pharma');
  const [selectedPharmaModule, setSelectedPharmaModule] = useState<string>('market-access');
  const [showAllVerticals, setShowAllVerticals] = useState(false);

  const reduceMotion = useReducedMotion();
  const dur = reduceMotion ? 0 : 0.2;
  const isMd = useMediaQuery('(min-width: 768px)');
  const isSm = useMediaQuery('(min-width: 640px)');

  const sectorIcons: { [key: string]: React.ComponentType<{ className?: string }> } = {
    pharma: Pill,
    'med-devices': Stethoscope,
    diagnostics: FlaskConical,
    equipment: Activity,
    consumables: Scissors,
    hospitals: Building2
  };

  const pharmaModules = [
    {
      id: 'market-access',
      title: 'Market Access & Pricing',
      desc: 'Pan-African reimbursement landscape, out-of-pocket price elasticity, and tender listing strategies.',
      points: [
        'National health scheme formulary inclusion (e.g. Kenya SHA, Ghana NHIS, SA NHI)',
        'Tiered dual-brand pricing modeling to navigate out-of-pocket constraints',
        'Private hospital group procurement and patient-assistance co-pay structuring'
      ]
    },
    {
      id: 'competitive-intel',
      title: 'Competitive Intelligence & Pipelines',
      desc: 'Granular tracking of clinical trial pipelines, generic market entry, and import manifests.',
      points: [
        'Therapeutic area market sizing and 5-year patient epidemiology forecasting',
        'Patent cliff defense and authorized generic positioning strategies',
        'Customs manifest import tracking across major regional ports'
      ]
    },
    {
      id: 'regulatory-intel',
      title: 'Regulatory Intelligence & Filings',
      desc: 'Navigating national medicines regulatory authorities across 54 African countries.',
      points: [
        'Real-time tracking of PPB, NAFDAC, SAHPRA, EDA, EFDA, and TMDA guidelines',
        'EAC, ECOWAS, and ZAZIBONA regional joint-assessment acceleration',
        'African Medicines Agency (AMA) policy evolution and harmonization advisory'
      ]
    },
    {
      id: 'pharmacovigilance',
      title: 'Pharmacovigilance Support',
      desc: 'Adverse event screening, signal detection, and regulatory safety compliance.',
      points: [
        'AI-assisted biomedical literature screening and spontaneous report triage',
        'Standard E2B(R3) safety reporting compliance workflows',
        'Post-authorization safety study (PASS) design and monitoring'
      ]
    },
    {
      id: 'kol-mapping',
      title: 'KOL & Commercial Effectiveness',
      desc: 'Scientific leadership mapping, advisory boards, and territory sales intelligence.',
      points: [
        'Double-blind Key Opinion Leader (KOL) network mapping across therapeutic centers',
        'Sales representative territory optimization and detailing effectiveness',
        'Mobile AI pre-call briefing assistants for field medical science liaisons'
      ]
    }
  ];

  const currentSector = LIFE_SCIENCES_SECTORS.find(s => s.id === activeSectorId) || LIFE_SCIENCES_SECTORS[0];
  const SectorIcon = sectorIcons[currentSector.id] || Pill;
  const activeMod = pharmaModules.find(m => m.id === selectedPharmaModule) || pharmaModules[0];

  const verticalLimit = isSm ? 8 : 4;
  const visibleVerticals = showAllVerticals ? DIVERSIFIED_INDUSTRIES : DIVERSIFIED_INDUSTRIES.slice(0, verticalLimit);

  const stats = [
    { value: String(LIFE_SCIENCES_SECTORS.length), label: 'Life Sciences sectors' },
    { value: String(pharmaModules.length), label: 'Pharma capability modules' },
    { value: String(DIVERSIFIED_INDUSTRIES.length), label: 'Additional verticals' }
  ];

  const fadeIn = {
    initial: { opacity: 0, y: 8 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-10%' },
    transition: { duration: dur, ease: EASE }
  } as const;

  const workflow = [
    { n: '01. Question', color: 'text-gray-400', text: `"${currentSector.workflowExample.question}"`, cls: 'text-white italic font-medium', border: 'border-white/[0.08]' },
    { n: '02. Method', color: 'text-indigo-400', text: currentSector.workflowExample.method, cls: 'text-[#E0E0E0]', border: 'border-white/[0.08]' },
    { n: '03. Intelligence', color: 'text-indigo-400', text: currentSector.workflowExample.intelligence, cls: 'text-[#E0E0E0]', border: 'border-white/[0.08]' },
    { n: '04. Decision', color: 'text-teal-400', text: currentSector.workflowExample.decision, cls: 'text-[#E0E0E0] font-medium', border: 'border-white/[0.08]' },
    { n: '05. AI Solution', color: 'text-emerald-400', text: currentSector.workflowExample.aiSolution, cls: 'text-[#E0E0E0]', border: 'border-white/[0.08]' },
    { n: '06. Measured ROI', color: 'text-emerald-400', text: currentSector.workflowExample.outcome, cls: 'text-emerald-400 font-semibold', border: 'border-emerald-500/30' }
  ];

  return (
    <section
      id="lifesciences-section"
      className="mc-section bg-[#050505] text-white overflow-x-clip"
      aria-labelledby="lifesciences-title"
    >
      <div className="mc-container space-y-10 md:space-y-12">
        {/* Intent + proof */}
        <motion.header {...fadeIn} className="space-y-4 max-w-3xl">
          <p className="mc-eyebrow">
            <Dna className="w-3.5 h-3.5" aria-hidden="true" />
            Founding Specialization
          </p>
          <h2 id="lifesciences-title" className="mc-h2 font-light">
            Life Sciences <span className="font-bold text-indigo-400">Ecosystem</span>
          </h2>
          <p className="mc-lead">
            Unlike generalist consultancies, MindCraft’s heritage is deeply rooted in Life Sciences. We bring clinical fluency, regulatory mastery, and health economics into every pharmaceutical, device, diagnostic, and hospital engagement.
          </p>
          <dl className="grid grid-cols-3 gap-2 sm:gap-3 pt-2">
            {stats.map(s => (
              <div key={s.label} className="rounded-xl bg-[#0A0A0A] border border-white/[0.08] px-3 sm:px-4 py-3">
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-mono text-2xl sm:text-3xl font-semibold text-white leading-none">{s.value}</dd>
                <p className="mt-1.5 text-[11px] font-mono uppercase tracking-wider text-gray-400" aria-hidden="true">{s.label}</p>
              </div>
            ))}
          </dl>
        </motion.header>

        {/* Sector tabs: swipe rail on phones, 6-up grid on desktop */}
        <div>
          <div
            role="tablist"
            aria-label="Life Sciences sectors"
            className="flex gap-2 overflow-x-auto snap-x snap-mandatory pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:grid lg:grid-cols-6 lg:overflow-visible lg:snap-none lg:pb-0"
          >
            {LIFE_SCIENCES_SECTORS.map((sector) => {
              const isSelected = activeSectorId === sector.id;
              const Icon = sectorIcons[sector.id] || Pill;
              return (
                <button
                  key={sector.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setActiveSectorId(sector.id)}
                  id={`sector-tab-${sector.id}`}
                  className={`mc-tap snap-start shrink-0 w-[10.5rem] lg:w-auto p-3 rounded-2xl border text-left transition-colors duration-200 active:scale-[0.98] flex flex-col gap-2 ${
                    isSelected
                      ? 'bg-[#0D0F17] border-indigo-500/35 text-white'
                      : 'bg-[#0A0A0A] border-white/[0.08] text-gray-400 hover:border-white/20 hover:text-white'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isSelected ? 'text-indigo-400' : 'text-gray-400'}`} aria-hidden="true" />
                  <span className="text-[13px] font-bold leading-snug">{sector.name}</span>
                  <span className="text-[11px] text-gray-400 capitalize font-mono">
                    {sector.category.replace('-', ' ')}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active sector */}
        <div className="rounded-2xl bg-[#0A0A0A] border border-white/[0.08] p-4 sm:p-6 lg:p-8 space-y-6">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={currentSector.id}
              role="tabpanel"
              aria-labelledby={`sector-tab-${currentSector.id}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: dur * 0.75, ease: EASE }}
              className="space-y-6"
            >
              {/* Sector header */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-6 border-b border-white/[0.08] gap-5">
                <div className="flex items-start gap-3 min-w-0">
                  <div className="w-12 h-12 rounded-xl bg-[#0D0F17] border border-indigo-500/35 flex items-center justify-center text-indigo-400 shrink-0">
                    <SectorIcon className="w-6 h-6" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#0D0F17] border border-indigo-500/35 text-indigo-400 font-bold uppercase">
                        {currentSector.category.replace('-', ' ')}
                      </span>
                      <span className="text-[11px] text-gray-400 font-mono">Life Sciences Vertical</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-light text-white mt-1.5">{currentSector.name}</h3>
                    <p className="text-[13px] sm:text-sm text-indigo-400 font-mono mt-1">{currentSector.tagline}</p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={onOpenIntake}
                  className="mc-tap w-full lg:w-auto px-5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-[13px] sm:text-sm font-mono shrink-0 transition-colors active:scale-[0.98] flex items-center justify-center gap-2"
                >
                  <span>Consult on {currentSector.name}</span>
                  <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
                </button>
              </div>

              {/* Pharmaceuticals: deep capability modules */}
              {currentSector.id === 'pharma' && (
                <div className="rounded-xl bg-[#050505] border border-white/[0.08] p-4 sm:p-5 space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="text-[11px] font-mono uppercase tracking-wider font-bold text-indigo-400 flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>Pharmaceutical Deep Capability Modules</span>
                    </div>
                    <span className="text-[11px] text-gray-400 font-mono">Select module to inspect</span>
                  </div>

                  <div
                    role="tablist"
                    aria-label="Pharmaceutical capability modules"
                    className="flex gap-2 overflow-x-auto snap-x snap-mandatory pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:grid md:grid-cols-5 md:overflow-visible md:snap-none md:pb-0"
                  >
                    {pharmaModules.map((mod) => {
                      const active = selectedPharmaModule === mod.id;
                      return (
                        <button
                          key={mod.id}
                          type="button"
                          role="tab"
                          aria-selected={active}
                          onClick={() => setSelectedPharmaModule(mod.id)}
                          className={`mc-tap snap-start shrink-0 w-[11rem] md:w-auto px-3 py-2.5 rounded-xl border text-left text-[13px] font-mono leading-snug transition-colors duration-200 active:scale-[0.98] ${
                            active
                              ? 'bg-[#0D0F17] border-indigo-500/35 text-indigo-400'
                              : 'bg-[#0A0A0A] border-white/[0.08] text-gray-400 hover:border-white/20 hover:text-white'
                          }`}
                        >
                          {mod.title}
                        </button>
                      );
                    })}
                  </div>

                  <motion.div
                    key={activeMod.id}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: reduceMotion ? 0 : 0.15, ease: EASE }}
                    className="p-4 rounded-xl bg-[#0A0A0A] border border-white/[0.08]"
                  >
                    <h4 className="text-sm font-bold text-white font-mono">{activeMod.title}</h4>
                    <p className="text-[13px] sm:text-sm text-gray-400 mt-1.5 leading-relaxed">{activeMod.desc}</p>
                    <ul className="mt-3 space-y-2.5">
                      {activeMod.points.map((pt, i) => (
                        <li key={i} className="text-[13px] sm:text-sm text-[#E0E0E0] leading-relaxed flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" aria-hidden="true" />
                          <span className="min-w-0">{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              )}

              {/* Challenges, research, AI */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 items-start">
                <Disclosure
                  title="Sector Strategic Challenges"
                  icon={<HelpCircle className="w-3.5 h-3.5" />}
                  tone="amber"
                  meta={String(currentSector.strategicChallenges.length)}
                  defaultOpen
                  isWide={isMd}
                >
                  <DotList items={currentSector.strategicChallenges} tone="amber" />
                </Disclosure>

                <Disclosure
                  title="MindCraft Research Methods"
                  icon={<Search className="w-3.5 h-3.5" />}
                  tone="indigo"
                  meta={String(currentSector.researchMethods.length)}
                  isWide={isMd}
                >
                  <DotList items={currentSector.researchMethods} tone="indigo" />
                </Disclosure>

                <Disclosure
                  title="AI & Automation Opportunities"
                  icon={<Cpu className="w-3.5 h-3.5" />}
                  tone="emerald"
                  meta={String(currentSector.aiOpportunities.length)}
                  isWide={isMd}
                >
                  <DotList items={currentSector.aiOpportunities} tone="emerald" />
                </Disclosure>
              </div>

              {/* End-to-end workflow */}
              <div className="rounded-2xl bg-[#050505] border border-white/[0.08] p-4 sm:p-5 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="text-[11px] font-mono uppercase tracking-wider font-bold text-indigo-400 flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Illustrative End-to-End Transformation Workflow</span>
                  </div>
                  <span className="text-[11px] px-2 py-0.5 rounded bg-[#0D0F17] text-indigo-400 border border-indigo-500/35 font-mono">
                    Question → Outcome
                  </span>
                </div>

                <ol className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-6 gap-3">
                  {workflow.map((step) => (
                    <li key={step.n} className={`p-3.5 rounded-xl bg-[#0A0A0A] border ${step.border}`}>
                      <div className={`text-[11px] font-mono uppercase font-bold tracking-wider ${step.color}`}>{step.n}</div>
                      <p className={`text-[13px] leading-relaxed mt-1.5 ${step.cls}`}>{step.text}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Additional verticals */}
        <div className="space-y-6">
          <motion.div {...fadeIn} className="max-w-2xl space-y-2">
            <h3 className="text-2xl font-light text-white">
              Additional <span className="font-bold text-indigo-400">Industry Verticals</span> Served
            </h3>
            <p className="text-gray-400 text-[13px] sm:text-sm font-mono leading-relaxed">
              Applying the same rigorous, evidence-based methodology to diversified sectors across Africa.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {visibleVerticals.map((ind, i) => (
              <motion.div
                key={ind.id}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10%' }}
                transition={{ duration: dur, ease: EASE, delay: reduceMotion ? 0 : Math.min(i % 4, 3) * 0.04 }}
                className="mc-card-interactive min-w-0 p-5 rounded-2xl bg-[#0A0A0A] border border-white/[0.08] flex flex-col justify-between"
              >
                <div>
                  <div className="text-[13px] font-bold text-indigo-400 uppercase font-mono mb-1">{ind.name}</div>
                  <div className="text-[13px] font-semibold text-white mb-2 font-mono">{ind.tagline}</div>
                  <p className="text-[13px] text-gray-400 leading-relaxed mb-3">{ind.description}</p>
                  <div className="space-y-1.5">
                    <div className="text-[11px] font-mono uppercase text-gray-400 font-semibold tracking-wider">Focus Areas</div>
                    {ind.focusAreas.slice(0, 3).map((fa, j) => (
                      <div key={j} className="text-[13px] text-[#E0E0E0] flex items-start gap-1.5">
                        <span className="text-indigo-400 shrink-0">•</span>
                        <span className="min-w-0">{fa}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-white/[0.08] text-[11px] text-gray-400 font-mono italic">
                  Method: {ind.methodology}
                </div>
              </motion.div>
            ))}
          </div>

          {DIVERSIFIED_INDUSTRIES.length > verticalLimit && (
            <button
              type="button"
              onClick={() => setShowAllVerticals(v => !v)}
              className="mc-tap w-full sm:w-auto px-6 rounded-xl border border-white/[0.08] bg-[#0A0A0A] text-[13px] font-medium text-[#E0E0E0] hover:border-white/20 active:scale-[0.98] transition"
            >
              {showAllVerticals ? 'Show fewer verticals' : `Show all ${DIVERSIFIED_INDUSTRIES.length} verticals`}
            </button>
          )}
        </div>
      </div>
    </section>
  );
};
