import React from 'react';
import { motion } from 'motion/react';
import { NavTab, RoleLens } from '../types';
import {
  ArrowRight,
  Compass,
  BarChart3,
  GraduationCap,
  Cpu,
  ChevronRight
} from 'lucide-react';
import { UNIVERSAL_INDUSTRIES, AFRICA_REGIONS_DATA, PROBLEM_CROSS_SECTIONS } from '../data/industryAndAfricaData';

interface HeroOperatingSystemProps {
  setActiveTab: (tab: NavTab) => void;
  roleLens: RoleLens;
  onOpenIntake: () => void;
}

const EASE = [0.16, 1, 0.3, 1] as const;

const PILLARS: {
  tab: NavTab;
  name: string;
  line: string;
  icon: React.ComponentType<{ className?: string }>;
  tone: string;
  ring: string;
}[] = [
  { tab: 'consulting', name: 'Business Consulting', line: 'Strategy, operating models, SOPs & governance', icon: Compass, tone: 'text-teal-400', ring: 'border-teal-500/30 bg-teal-500/10' },
  { tab: 'market-research', name: 'Market Research', line: 'Primary surveys, physician panels & regulatory scans', icon: BarChart3, tone: 'text-sky-400', ring: 'border-sky-500/30 bg-sky-500/10' },
  { tab: 'ai-training', name: 'AI Training', line: 'Executive briefings, prompting & AI champions', icon: GraduationCap, tone: 'text-amber-400', ring: 'border-amber-500/30 bg-amber-500/10' },
  { tab: 'ai-solutions', name: 'AI Enterprise Solutions', line: 'Governed production systems & copilots', icon: Cpu, tone: 'text-emerald-400', ring: 'border-emerald-500/30 bg-emerald-500/10' }
];

export const HeroOperatingSystem: React.FC<HeroOperatingSystemProps> = ({
  setActiveTab,
  onOpenIntake
}) => {
  const jurisdictions = AFRICA_REGIONS_DATA.reduce((n, r) => n + r.countries.length, 0);
  const stats = [
    { value: UNIVERSAL_INDUSTRIES.length, label: 'Industry verticals', tab: 'industries' as NavTab },
    { value: jurisdictions, label: 'African jurisdictions', tab: 'africa-explorer' as NavTab },
    { value: PROBLEM_CROSS_SECTIONS.length, label: 'Business challenges', tab: 'question-to-outcome' as NavTab },
    { value: PILLARS.length, label: 'Integrated pillars', tab: 'operating-model' as NavTab }
  ];

  return (
    <section className="relative overflow-hidden bg-[#050505] border-b border-white/10">
      <div className="absolute inset-x-0 top-0 h-[28rem] bg-radial-glow pointer-events-none" aria-hidden />

      <div className="mc-container relative z-10 pt-10 sm:pt-16 lg:pt-20 pb-10 sm:pb-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Promise */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
          >
            <div className="flex flex-wrap items-center gap-2 mb-5">
              <span className="text-[11px] font-mono uppercase tracking-widest text-indigo-400 border border-indigo-400/30 px-2.5 py-1 rounded-full bg-indigo-950/40">
                MindCraft Core OS // 2026
              </span>
              <span className="text-[11px] font-mono uppercase tracking-widest text-white/50 border border-white/10 px-2.5 py-1 rounded-full">
                Nairobi HQ · Pan-Africa
              </span>
            </div>

            <h1 className="mc-h1 font-light">
              AI-powered growth,
              <br />
              <span className="font-bold text-indigo-400">
                grounded in African context.
              </span>
            </h1>

            <p className="mc-lead mt-5">
              One partner for <span className="text-white font-medium">business consulting</span>,{' '}
              <span className="text-white font-medium">primary market intelligence</span>,{' '}
              <span className="text-white font-medium">AI workforce training</span> and{' '}
              <span className="text-white font-medium">production AI software</span> across Pan-African healthcare, pharmaceuticals, diagnostics and diversified enterprise markets.
            </p>

            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <button
                onClick={onOpenIntake}
                id="hero-primary-cta"
                className="mc-tap px-6 rounded-xl bg-indigo-600 hover:bg-indigo-500 active:scale-[0.98] text-white font-semibold text-sm shadow-[0_0_20px_rgba(99,102,241,0.4)] transition-[background-color,transform] duration-150 flex items-center justify-center gap-2"
              >
                <span>Start Engagement</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => setActiveTab('operating-model')}
                id="hero-secondary-cta"
                className="mc-tap px-5 rounded-xl bg-white/5 hover:bg-white/10 active:scale-[0.98] text-white/90 text-sm border border-white/10 hover:border-white/20 transition-[background-color,border-color,transform] duration-150 flex items-center justify-center gap-1.5"
              >
                <span>See how it works</span>
                <ChevronRight className="w-4 h-4 text-indigo-400" />
              </button>
            </div>

            <p className="mt-4 text-xs text-white/50 font-mono">
              Core expertise in Life Sciences · Serving Africa, Europe &amp; the United States
            </p>
          </motion.div>

          {/* What we do, at a glance */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.08, ease: EASE }}
          >
            <div className="rounded-2xl bg-[#0a0a0a] border border-white/10 p-3 sm:p-4 shadow-2xl">
              <div className="flex items-center justify-between px-2 pt-1 pb-3">
                <span className="mc-eyebrow">Four integrated capabilities</span>
                <span className="relative flex w-2 h-2" aria-hidden>
                  <span className="absolute inline-flex w-full h-full rounded-full bg-emerald-500/60 animate-ping" />
                  <span className="relative inline-flex w-2 h-2 rounded-full bg-emerald-500" />
                </span>
              </div>
              <ul className="space-y-2">
                {PILLARS.map((p) => {
                  const Icon = p.icon;
                  return (
                    <li key={p.tab}>
                      <button
                        onClick={() => setActiveTab(p.tab)}
                        className="mc-card-interactive w-full text-left p-3 rounded-xl bg-[#050505] border border-white/10 flex items-center gap-3 group"
                      >
                        <span className={`shrink-0 p-2.5 rounded-xl border ${p.ring} ${p.tone}`}>
                          <Icon className="w-5 h-5" />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block text-sm font-semibold text-white">{p.name}</span>
                          <span className="block text-xs text-white/50 leading-snug mt-0.5">{p.line}</span>
                        </span>
                        <ArrowRight className="w-4 h-4 shrink-0 text-white/30 group-hover:text-white group-hover:translate-x-0.5 transition-[color,transform] duration-200" />
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Proof strip: real counts from the data layer */}
        <motion.dl
          className="mt-10 sm:mt-14 grid grid-cols-2 lg:grid-cols-4 gap-px rounded-2xl overflow-hidden bg-white/10 border border-white/10"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.3, ease: EASE }}
        >
          {stats.map((s) => (
            <button
              key={s.label}
              onClick={() => setActiveTab(s.tab)}
              className="bg-[#0a0a0a] hover:bg-[#0d0f17] active:bg-[#0d0f17] transition-colors p-4 sm:p-5 text-left"
            >
              <dt className="sr-only">{s.label}</dt>
              <dd>
                <span className="block font-heading text-3xl sm:text-4xl font-light text-white tabular-nums">{s.value}</span>
                <span className="block mt-1 text-[11px] sm:text-xs font-mono uppercase tracking-wider text-white/50">{s.label}</span>
              </dd>
            </button>
          ))}
        </motion.dl>
      </div>
    </section>
  );
};
