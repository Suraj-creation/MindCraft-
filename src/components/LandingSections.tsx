import React from 'react';
import { motion } from 'motion/react';
import { NavTab } from '../types';
import {
  ArrowRight,
  Compass,
  BarChart3,
  GraduationCap,
  Cpu,
  Dna,
  Telescope,
  MapPinned,
  Layers,
  Gauge,
  ShieldCheck,
  Workflow
} from 'lucide-react';
import { PROBLEM_CROSS_SECTIONS } from '../data/industryAndAfricaData';
import { CapabilityCard, ContextualCTA, SectionHeader, TONES, reveal } from './ui/primitives';

interface SectionProps {
  setActiveTab: (tab: NavTab) => void;
  onOpenIntake: () => void;
}

/* ------------------------------------------------------------------ */
/* 02 - What MindCraft does: four pillars, what / why / outcome        */
/* Source: corporate profile s.4 (pillars, deliverables)               */
/* ------------------------------------------------------------------ */
export const CapabilitiesSection: React.FC<SectionProps> = ({ setActiveTab }) => (
  <section className="mc-section" id="capabilities">
    <div className="mc-container">
      <motion.div {...reveal}>
        <SectionHeader
          eyebrow="What MindCraft does"
          title="Four integrated capabilities, one engagement"
          lead="Research informs strategy, strategy guides AI investment, and training makes AI adoption stick."
        />
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        <CapabilityCard
          index={0}
          name="Business Consulting"
          tone="teal"
          icon={Compass}
          what="Strategy, operating models and process design for Life Sciences and cross-industry clients."
          why="Better decisions and confident execution of change."
          outcome="Board-ready strategy, transformation roadmaps and SOPs."
          onOpen={() => setActiveTab('consulting')}
        />
        <CapabilityCard
          index={1}
          name="Market Research"
          tone="sky"
          icon={BarChart3}
          what="Primary and secondary research across African and international markets."
          why="Turns market complexity into decision-ready intelligence."
          outcome="Sizing models, competitive trackers and actionable recommendations."
          onOpen={() => setActiveTab('market-research')}
        />
        <CapabilityCard
          index={2}
          name="AI Training"
          tone="amber"
          icon={GraduationCap}
          what="Hands-on AI capability-building for executives, teams and organizations."
          why="Builds real AI literacy and internal champions, not just awareness."
          outcome="A trained cohort of AI champions and prioritized adoption roadmaps."
          onOpen={() => setActiveTab('ai-training')}
        />
        <CapabilityCard
          index={3}
          name="AI Enterprise Solutions"
          tone="emerald"
          icon={Cpu}
          what="Design, build and integration of AI-powered systems."
          why="Operationalizes insight inside everyday business workflows."
          outcome="Deployed solutions with measurable efficiency, accuracy or revenue impact."
          onOpen={() => setActiveTab('ai-solutions')}
        />
      </div>
    </div>
  </section>
);

/* ------------------------------------------------------------------ */
/* 03 - Why MindCraft: profile s.7                                      */
/* ------------------------------------------------------------------ */
const WHY = [
  { icon: Dna, tone: 'indigo' as const, title: 'Deep Life Sciences heritage', body: 'Faster onboarding and sharper questions, grounded in real industry context from day one.' },
  { icon: MapPinned, tone: 'emerald' as const, title: 'Pan-African footprint, local fluency', body: 'On-ground market knowledge and regulatory awareness with international consulting standards.' },
  { icon: Layers, tone: 'sky' as const, title: 'One partner, four capabilities', body: 'One coherent engagement instead of four disconnected vendors.' },
  { icon: Gauge, tone: 'amber' as const, title: 'Applied, decision-ready outputs', body: 'Built for implementation, not left as a theoretical framework.' },
  { icon: ShieldCheck, tone: 'teal' as const, title: 'Responsible, governed AI', body: 'Data privacy, ethics and governance built into every program and solution.' }
];

export const WhySection: React.FC<SectionProps> = () => (
  <section className="mc-section" id="why-mindcraft">
    <div className="mc-container">
      <motion.div {...reveal}>
        <SectionHeader
          eyebrow="Why MindCraft"
          title="A rare combination of sector depth, local fluency and applied AI"
        />
      </motion.div>

      <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-px rounded-2xl overflow-hidden bg-white/10 border border-white/10">
        {WHY.map((w, i) => {
          const Icon = w.icon;
          return (
            <motion.li
              key={w.title}
              {...reveal}
              transition={{ ...reveal.transition, delay: i * 0.04 }}
              className="bg-[#0a0a0a] p-5 sm:p-6 flex gap-4 lg:flex-col"
            >
              <span className="flex items-center gap-3 lg:justify-between shrink-0">
                <Icon className={`w-5 h-5 ${TONES[w.tone].text}`} />
                <span className="hidden lg:inline font-mono text-xs text-white/30">0{i + 1}</span>
              </span>
              <span>
                <h3 className="text-sm font-bold text-white leading-snug">{w.title}</h3>
                <p className="mt-1.5 text-xs text-white/60 leading-relaxed">{w.body}</p>
              </span>
            </motion.li>
          );
        })}
      </ol>
    </div>
  </section>
);

/* ------------------------------------------------------------------ */
/* 04 - Life Sciences: six sub-sectors (profile s.2 illustrative areas) */
/* ------------------------------------------------------------------ */
const LIFE_SCIENCES = [
  { name: 'Pharmaceuticals', focus: ['Market access', 'Competitive intelligence', 'KOL mapping', 'Regulatory intelligence'] },
  { name: 'Medical Devices', focus: ['Launch strategy', 'Reimbursement landscape', 'Distributor mapping', 'Post-market surveillance'] },
  { name: 'Medical Diagnostics', focus: ['Market sizing', 'Testing-adoption studies', 'Laboratory network mapping', 'Regulatory pathway'] },
  { name: 'Medical Equipment', focus: ['Capital equipment studies', 'Tender intelligence', 'Hospital purchasing committees'] },
  { name: 'Surgical Consumables', focus: ['Distribution channels', 'Formulary tracking', 'Competitive benchmarking'] },
  { name: 'Hospitals & Healthcare Providers', focus: ['Operational strategy', 'Digital transformation', 'Patient experience', 'Workforce capacity'] }
];

export const LifeSciencesBand: React.FC<SectionProps> = ({ setActiveTab, onOpenIntake }) => (
  <section className="mc-section" id="life-sciences-band">
    <div className="mc-container">
      <motion.div
        {...reveal}
        className="rounded-2xl bg-[#0d0f17] border border-indigo-500/25 p-5 sm:p-8 lg:p-10"
      >
        <SectionHeader
          eyebrow="Core expertise"
          title="Life Sciences is where we started, and where we go deepest"
          lead="Clinical, regulatory, market-access and commercial fluency in every engagement."
          action={
            <button
              onClick={() => setActiveTab('life-sciences')}
              className="mc-tap px-5 rounded-xl bg-indigo-600 hover:bg-indigo-500 active:scale-[0.98] text-white text-sm font-semibold flex items-center justify-center gap-2 transition-[background-color,transform] duration-150 self-start md:self-auto shrink-0"
            >
              <span>Life Sciences hub</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          }
        />

        <ul className="mc-snap-row md:grid md:grid-cols-3 md:gap-3 md:overflow-visible">
          {LIFE_SCIENCES.map((s) => (
            <li key={s.name}>
              <button
                onClick={() => setActiveTab('life-sciences')}
                className="mc-card-interactive w-full h-full text-left p-4 rounded-xl bg-[#0a0a0a] border border-white/10 hover:border-indigo-500/40"
              >
                <span className="block text-sm font-bold text-white">{s.name}</span>
                <span className="mt-3 flex flex-wrap gap-1.5">
                  {s.focus.map((f) => (
                    <span key={f} className="text-[11px] px-2 py-0.5 rounded-full border border-white/10 text-white/65">{f}</span>
                  ))}
                </span>
              </button>
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-white/60">
          <span className="font-mono">Beyond Life Sciences: chemicals, agrochemicals, automotive, financial services and more.</span>
          <button onClick={onOpenIntake} className="mc-tap text-left sm:text-right text-indigo-300 hover:text-white transition-colors">
            Discuss your portfolio
          </button>
        </div>
      </motion.div>
    </div>
  </section>
);

/* ------------------------------------------------------------------ */
/* 08 - Start from a problem                                            */
/* ------------------------------------------------------------------ */
export const ProblemsSection: React.FC<SectionProps> = ({ setActiveTab }) => {
  const picks = PROBLEM_CROSS_SECTIONS.slice(0, 6);
  return (
    <section className="mc-section" id="problems">
      <div className="mc-container">
        <motion.div {...reveal}>
          <SectionHeader
            eyebrow="Start from a problem"
            title="Not sure which capability you need?"
            lead="Pick the challenge closest to yours and see the integrated response."
            action={
              <button
                onClick={() => setActiveTab('question-to-outcome')}
                className="mc-tap text-sm text-amber-400 hover:text-amber-300 flex items-center gap-1.5 self-start md:self-auto shrink-0 transition-colors"
              >
                <span>All {PROBLEM_CROSS_SECTIONS.length} challenges</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            }
          />
        </motion.div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
          {picks.map((p, i) => (
            <motion.li key={p.id} {...reveal} transition={{ ...reveal.transition, delay: i * 0.03 }} className={i >= 4 ? 'hidden sm:block' : undefined}>
              <button
                onClick={() => setActiveTab('question-to-outcome')}
                className="mc-card-interactive mc-tap w-full h-full text-left p-4 rounded-xl bg-[#0a0a0a] border border-white/10 hover:border-amber-500/40 flex items-start gap-3"
              >
                <Workflow className="w-4 h-4 mt-0.5 shrink-0 text-amber-400" />
                <span>
                  <span className="block text-sm font-semibold text-white">{p.problemTitle}</span>
                  <span className="block mt-1 text-xs text-white/55 leading-snug line-clamp-2">{p.tagline}</span>
                </span>
              </button>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

/* ------------------------------------------------------------------ */
/* 10 - How to engage: profile s.8 process + CTA                        */
/* ------------------------------------------------------------------ */
const PROCESS = [
  { stage: 'Discovery', body: 'Needs, objectives, market context and success measures.' },
  { stage: 'Proposal', body: 'Scope, methodology, timeline and budget.' },
  { stage: 'Design', body: 'Co-developed content, instruments or architecture.' },
  { stage: 'Delivery', body: 'Execution with regular progress check-ins.' },
  { stage: 'Evaluation', body: 'Quality assurance, impact assessment, final reporting.' },
  { stage: 'Follow-up', body: 'Optional coaching, refreshers or enhancements.' }
];

export const EngagementSection: React.FC<SectionProps> = ({ setActiveTab, onOpenIntake }) => (
  <section className="mc-section" id="engage">
    <div className="mc-container">
      <motion.div {...reveal}>
        <SectionHeader eyebrow="How to engage" title="From first conversation to measurable impact" />
      </motion.div>

      <ol className="mc-snap-row lg:grid lg:grid-cols-6 lg:gap-3 lg:overflow-visible mb-8">
        {PROCESS.map((p, i) => (
          <li key={p.stage} className="p-4 rounded-xl bg-[#0a0a0a] border border-white/10">
            <span className="font-mono text-xs text-indigo-400">0{i + 1}</span>
            <h3 className="mt-2 text-sm font-bold text-white">{p.stage}</h3>
            <p className="mt-1 text-xs text-white/55 leading-snug">{p.body}</p>
          </li>
        ))}
      </ol>

      <ContextualCTA
        title="Discuss how MindCraft can support your organization"
        body="Across Africa, Europe or the United States: Business Consulting, Market Research, AI Training and AI Enterprise Solutions, scoped to your context."
        primaryLabel="Start an engagement"
        onPrimary={onOpenIntake}
        secondaryLabel="Build an engagement blueprint"
        onSecondary={() => setActiveTab('engagement-builder')}
      />
    </div>
  </section>
);
