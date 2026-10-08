import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { NavTab } from '../types';
import {
  ArrowRight,
  Layers,
  Globe2,
  Workflow,
  Dna,
  Sparkles,
  Handshake,
  ShieldCheck,
  Gauge,
  MapPinned,
  Telescope
} from 'lucide-react';
import {
  UNIVERSAL_INDUSTRIES,
  AFRICA_REGIONS_DATA,
  PROBLEM_CROSS_SECTIONS
} from '../data/industryAndAfricaData';

const EASE = [0.16, 1, 0.3, 1] as const;

const reveal = {
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-10%' },
  transition: { duration: 0.3, ease: EASE }
};

interface SectionProps {
  setActiveTab: (tab: NavTab) => void;
  onOpenIntake: () => void;
}

const SectionHead: React.FC<{ eyebrow: string; title: React.ReactNode; lead?: string; action?: React.ReactNode }> = ({
  eyebrow,
  title,
  lead,
  action
}) => (
  <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-10">
    <div className="max-w-2xl">
      <span className="mc-eyebrow">{eyebrow}</span>
      <h2 className="mc-h2 mt-3 font-light">{title}</h2>
      {lead && <p className="mc-lead mt-3">{lead}</p>}
    </div>
    {action}
  </div>
);

/* ------------------------------------------------------------------ */
/* 1. Operating chain: how the four pillars compound                   */
/* ------------------------------------------------------------------ */
const STAGES = [
  { step: '01', title: 'Market Intelligence', sub: 'Primary surveys & Pan-African scans', pillar: 'Market Research', tab: 'market-research' as NavTab, tone: 'text-sky-400', border: 'border-sky-500/40',
    details: 'Primary physician/patient surveys, regulatory scans across 20+ African agencies, KOL mapping and competitive pipeline intelligence.', output: 'Decision-ready intelligence & sizing models' },
  { step: '02', title: 'Strategic Advisory', sub: 'Roadmaps, SOPs & market entry', pillar: 'Business Consulting', tab: 'consulting' as NavTab, tone: 'text-teal-400', border: 'border-teal-500/40',
    details: 'Life Sciences market-entry blueprints, portfolio prioritization, operating-model redesign and AI-readiness diagnostics.', output: 'Board-ready strategic roadmap' },
  { step: '03', title: 'AI Capability', sub: 'Executive & workforce enablement', pillar: 'AI Training', tab: 'ai-training' as NavTab, tone: 'text-amber-400', border: 'border-amber-500/40',
    details: 'Applied executive literacy, function-specific prompt engineering (commercial, regulatory, clinical) and certified internal AI champion cohorts.', output: 'Certified internal AI champions' },
  { step: '04', title: 'AI Deployment', sub: 'Production, tenant-isolated RAG', pillar: 'AI Enterprise Solutions', tab: 'ai-solutions' as NavTab, tone: 'text-emerald-400', border: 'border-emerald-500/40',
    details: 'Governed regulatory-monitoring agents, automated pharmacovigilance screening, KOL influence graphs and field-sales AI copilots.', output: 'Production AI infrastructure' },
  { step: '05', title: 'Continuous Value', sub: 'Governed clinical & commercial ROI', pillar: 'Continuous Value', tab: 'question-to-outcome' as NavTab, tone: 'text-indigo-400', border: 'border-indigo-500/40',
    details: 'Accelerated market entry, compliance audit certainty, reduced clinical-trial friction and sustained commercial revenue growth.', output: 'Verified commercial & clinical ROI' }
];

export const OperatingChainSection: React.FC<SectionProps> = ({ setActiveTab }) => {
  const [active, setActive] = useState(0);
  const s = STAGES[active];

  const Detail = (
    <div className="rounded-xl bg-[#050505] border border-white/10 p-4 sm:p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div className="max-w-2xl">
        <div className="text-xs font-mono text-white/50 mb-1.5">
          Stage {s.step} · delivered by <span className={s.tone}>{s.pillar}</span>
        </div>
        <p className="text-sm text-white/80 leading-relaxed">{s.details}</p>
      </div>
      <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row items-stretch sm:items-center gap-3 shrink-0">
        <div className="px-3 py-2 rounded-lg bg-white/5 border border-white/10">
          <div className="text-[11px] font-mono uppercase text-white/50">Deliverable</div>
          <div className="text-sm font-medium text-emerald-400">{s.output}</div>
        </div>
        <button
          onClick={() => setActiveTab(s.tab)}
          className="mc-tap px-4 rounded-xl bg-indigo-600/30 hover:bg-indigo-600/50 active:scale-[0.98] border border-indigo-500/40 text-indigo-200 text-sm flex items-center justify-center gap-1.5 transition-[background-color,transform] duration-150"
        >
          <span>Deep dive</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );

  return (
    <section className="mc-section bg-[#050505]" id="operating-chain">
      <div className="mc-container">
        <motion.div {...reveal}>
          <SectionHead
            eyebrow="Operating model"
            title="From market complexity to scalable production value"
            lead="Each pillar hands a finished artifact to the next, so research becomes strategy, strategy becomes capability, and capability becomes governed software."
          />

          <div className="rounded-2xl bg-[#0a0a0a] border border-white/10 p-3 sm:p-5">
            <div role="tablist" aria-label="Operating model stages" className="grid grid-cols-1 md:grid-cols-5 gap-2">
              {STAGES.map((st, i) => {
                const selected = i === active;
                return (
                  <div key={st.step} className="md:contents">
                    <button
                      role="tab"
                      aria-selected={selected}
                      id={`hero-stage-${i}`}
                      onClick={() => setActive(i)}
                      className={`mc-card-interactive w-full h-full text-left p-4 rounded-xl border relative overflow-hidden ${
                        selected ? `bg-[#0d0f17] ${st.border}` : 'bg-[#050505] border-white/10'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-mono font-bold text-white/50">{st.step}</span>
                        <span className={`text-[11px] font-mono uppercase ${st.tone}`}>{st.pillar}</span>
                      </div>
                      <h3 className="text-sm font-bold text-white">{st.title}</h3>
                      <p className="text-xs text-white/50 leading-snug mt-1">{st.sub}</p>
                      {selected && <span className={`absolute inset-x-0 bottom-0 h-0.5 bg-current ${st.tone}`} />}
                    </button>

                    {/* Phones: detail opens inline under the selected stage */}
                    <AnimatePresence initial={false}>
                      {selected && (
                        <motion.div
                          key="m-detail"
                          className="md:hidden overflow-hidden"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.22, ease: EASE }}
                        >
                          <div className="pt-1">{Detail}</div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {/* md+: single detail panel under the stepper */}
            <div className="hidden md:block mt-3" role="tabpanel">
              {Detail}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

/* ------------------------------------------------------------------ */
/* 2. Three ways in: industry / geography / challenge                  */
/* ------------------------------------------------------------------ */
export const PathwaysSection: React.FC<SectionProps> = ({ setActiveTab }) => {
  const industries = UNIVERSAL_INDUSTRIES.filter((i) => i.tier === 'core').map((i) => i.name);
  const diversified = UNIVERSAL_INDUSTRIES.length - industries.length;
  const jurisdictions = AFRICA_REGIONS_DATA.reduce((n, r) => n + r.countries.length, 0);

  const paths = [
    {
      tab: 'industries' as NavTab,
      icon: Layers,
      tone: 'text-indigo-400',
      chip: 'border-indigo-500/25 bg-indigo-500/10 text-indigo-200',
      hover: 'hover:border-indigo-500/50',
      kicker: 'By industry',
      count: UNIVERSAL_INDUSTRIES.length,
      unit: 'verticals',
      line: `${industries.length} core Life Sciences sectors plus ${diversified} diversified verticals, each with a strategic dossier.`,
      chips: industries,
      cta: 'Explore industries'
    },
    {
      tab: 'africa-explorer' as NavTab,
      icon: Globe2,
      tone: 'text-emerald-400',
      chip: 'border-emerald-500/25 bg-emerald-500/10 text-emerald-200',
      hover: 'hover:border-emerald-500/50',
      kicker: 'By geography',
      count: jurisdictions,
      unit: 'jurisdictions',
      line: `${AFRICA_REGIONS_DATA.length} regional clusters with country dossiers and the 9-step market-entry framework.`,
      chips: AFRICA_REGIONS_DATA.map((r) => r.name),
      cta: 'Open the Africa hub'
    },
    {
      tab: 'question-to-outcome' as NavTab,
      icon: Workflow,
      tone: 'text-amber-400',
      chip: 'border-amber-500/25 bg-amber-500/10 text-amber-200',
      hover: 'hover:border-amber-500/50',
      kicker: 'By challenge',
      count: PROBLEM_CROSS_SECTIONS.length,
      unit: 'challenges',
      line: 'Start from the problem you are trying to solve and see the integrated, five-pillar response.',
      chips: PROBLEM_CROSS_SECTIONS.slice(0, 4).map((p) => p.problemTitle),
      cta: 'Start from a problem'
    }
  ];

  return (
    <section className="mc-section bg-[#050505]" id="pathways">
      <div className="mc-container">
        <motion.div {...reveal}>
          <SectionHead
            eyebrow="Where do you want to start?"
            title="Three ways into MindCraft intelligence"
            lead="Browse by the sector you operate in, the markets you want to reach, or the problem on your desk."
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {paths.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.button
                key={p.tab}
                {...reveal}
                transition={{ ...reveal.transition, delay: i * 0.06 }}
                onClick={() => setActiveTab(p.tab)}
                className={`mc-card-interactive group text-left p-5 sm:p-6 rounded-2xl bg-[#0a0a0a] border border-white/10 ${p.hover} flex flex-col`}
              >
                <div className="flex items-center justify-between">
                  <span className={`flex items-center gap-2 text-xs font-mono uppercase tracking-wider ${p.tone}`}>
                    <Icon className="w-4 h-4" />
                    {p.kicker}
                  </span>
                  <ArrowRight className={`w-4 h-4 ${p.tone} group-hover:translate-x-1 transition-transform duration-200`} />
                </div>

                <div className="mt-5 flex items-baseline gap-2">
                  <span className="font-heading text-5xl font-light text-white tabular-nums">{p.count}</span>
                  <span className="text-xs font-mono uppercase tracking-wider text-white/50">{p.unit}</span>
                </div>

                <p className="mt-3 text-sm text-white/70 leading-relaxed">{p.line}</p>

                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {p.chips.map((c) => (
                    <li key={c} className={`text-xs px-2.5 py-1 rounded-full border ${p.chip}`}>{c}</li>
                  ))}
                </ul>

                <span className={`mt-5 pt-4 border-t border-white/5 text-sm font-medium ${p.tone}`}>{p.cta}</span>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* ------------------------------------------------------------------ */
/* 3. Life Sciences heritage band                                      */
/* ------------------------------------------------------------------ */
export const LifeSciencesBand: React.FC<SectionProps> = ({ setActiveTab, onOpenIntake }) => {
  const core = UNIVERSAL_INDUSTRIES.filter((i) => i.tier === 'core');

  return (
    <section className="mc-section bg-[#050505]" id="life-sciences-band">
      <div className="mc-container">
        <motion.div
          {...reveal}
          className="rounded-2xl bg-[#0d0f17] border border-indigo-500/25 p-6 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 shadow-[0_0_25px_rgba(99,102,241,0.12)]"
        >
          <div className="lg:col-span-5">
            <span className="mc-eyebrow"><Dna className="w-3.5 h-3.5" />Core expertise</span>
            <h2 className="mc-h2 mt-3 font-light">Life Sciences is where we started, and where we go deepest.</h2>
            <p className="mc-lead mt-3">
              Clinical, regulatory and commercial fluency, plus industry benchmarks, in every engagement, whether you are a global pharma major or a regional hospital group.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => setActiveTab('life-sciences')}
                className="mc-tap px-5 rounded-xl bg-indigo-600 hover:bg-indigo-500 active:scale-[0.98] text-white text-sm font-semibold flex items-center justify-center gap-2 transition-[background-color,transform] duration-150"
              >
                <span>Life Sciences hub</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={onOpenIntake}
                className="mc-tap px-5 rounded-xl bg-white/5 hover:bg-white/10 active:scale-[0.98] text-white/90 text-sm border border-white/10 transition-[background-color,transform] duration-150"
              >
                Discuss your portfolio
              </button>
            </div>
          </div>

          <ul className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-2.5 content-start">
            {core.map((c) => (
              <li key={c.id}>
                <button
                  onClick={() => setActiveTab('industries')}
                  className="mc-card-interactive w-full text-left p-4 rounded-xl bg-[#0a0a0a] border border-white/10 h-full"
                >
                  <span className="block text-sm font-semibold text-white">{c.name}</span>
                  <span className="block text-xs text-white/50 leading-snug mt-1 line-clamp-2">{c.tagline}</span>
                </button>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

/* ------------------------------------------------------------------ */
/* 4. Why MindCraft: the five values from the corporate profile        */
/* ------------------------------------------------------------------ */
const VALUES = [
  { icon: Telescope, tone: 'text-sky-400', title: 'Sector depth', body: 'Advice grounded in real industry knowledge, not generic frameworks.' },
  { icon: Gauge, tone: 'text-indigo-400', title: 'Applied rigor', body: 'Research and AI outputs that are decision-ready, not academic exercises.' },
  { icon: MapPinned, tone: 'text-emerald-400', title: 'African context, global standard', body: 'World-class consulting delivered with authentic local understanding.' },
  { icon: ShieldCheck, tone: 'text-teal-400', title: 'Responsible AI', body: 'Every training and solution is built on data privacy, ethics and governance.' },
  { icon: Handshake, tone: 'text-amber-400', title: 'Client partnership', body: 'Long-term relationships built on measurable, repeatable value.' }
];

export const WhyMindCraftSection: React.FC<SectionProps> = ({ setActiveTab, onOpenIntake }) => (
  <section className="mc-section bg-[#050505]" id="why-mindcraft">
    <div className="mc-container">
      <motion.div {...reveal}>
        <SectionHead
          eyebrow="Why MindCraft"
          title="Africa's most trusted partner for AI-powered business growth"
          lead="Founded in 2026 and headquartered in Nairobi, closing the gap between deep sector expertise and practical, applied AI."
        />
      </motion.div>

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
        {VALUES.map((v, i) => {
          const Icon = v.icon;
          return (
            <motion.li
              key={v.title}
              {...reveal}
              transition={{ ...reveal.transition, delay: i * 0.05 }}
              className="p-5 rounded-2xl bg-[#0a0a0a] border border-white/10"
            >
              <Icon className={`w-5 h-5 ${v.tone}`} />
              <h3 className="mt-4 text-sm font-bold text-white">{v.title}</h3>
              <p className="mt-1.5 text-xs text-white/60 leading-relaxed">{v.body}</p>
            </motion.li>
          );
        })}
      </ul>

      <div className="mt-8 flex flex-col sm:flex-row gap-3">
        <button
          onClick={() => setActiveTab('about')}
          className="mc-tap px-5 rounded-xl bg-white/5 hover:bg-white/10 active:scale-[0.98] text-white/90 text-sm border border-white/10 flex items-center justify-center gap-2 transition-[background-color,transform] duration-150"
        >
          <Sparkles className="w-4 h-4 text-indigo-400" />
          <span>About MindCraft</span>
        </button>
        <button
          onClick={onOpenIntake}
          className="mc-tap px-5 rounded-xl bg-indigo-600 hover:bg-indigo-500 active:scale-[0.98] text-white text-sm font-semibold flex items-center justify-center gap-2 transition-[background-color,transform] duration-150"
        >
          <span>Start an engagement</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  </section>
);
