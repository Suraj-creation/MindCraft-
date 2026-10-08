import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { NavTab } from '../types';
import {
  Compass,
  BarChart3,
  GraduationCap,
  Cpu,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Network
} from 'lucide-react';

interface IntegratedModelSectionProps {
  setActiveTab: (tab: NavTab) => void;
}

const EASE = [0.16, 1, 0.3, 1] as const;
const viewport = { once: true, margin: '-10%' } as const;

const pillars = [
  {
    n: '01',
    name: 'Market Research',
    question: '"What is happening?"',
    text: 'Primary surveys, KOL mapping, epidemiology & regulatory landscape scans.',
    role: 'Feeds Evidence',
    Icon: BarChart3,
    text_c: 'text-sky-400',
    border: 'border-sky-500/35',
    hover: 'hover:border-sky-500/50',
    last: false
  },
  {
    n: '02',
    name: 'Business Consulting',
    question: '"What should we do?"',
    text: 'Corporate strategy, market entry blueprints, operating models & SOP redesign.',
    role: 'Guides Execution',
    Icon: Compass,
    text_c: 'text-teal-400',
    border: 'border-teal-500/35',
    hover: 'hover:border-teal-500/50',
    last: false
  },
  {
    n: '03',
    name: 'AI Training',
    question: '"Can our people use AI?"',
    text: 'Applied literacy, prompt workflows, responsible use & certified internal champions.',
    role: 'Drives Adoption',
    Icon: GraduationCap,
    text_c: 'text-amber-400',
    border: 'border-amber-500/35',
    hover: 'hover:border-amber-500/50',
    last: false
  },
  {
    n: '04',
    name: 'AI Enterprise Solutions',
    question: '"How to automate?"',
    text: 'Governed production agents, PV monitoring, regulatory scrapers & CRM intelligence.',
    role: 'Automates Scale',
    Icon: Cpu,
    text_c: 'text-emerald-400',
    border: 'border-emerald-500/35',
    hover: 'hover:border-emerald-500/50',
    last: true
  }
];

const integrations = [
  {
    id: 'research-consulting',
    title: 'Market Research → Business Consulting',
    tagline: 'Evidence-Grounded Strategic Advisory',
    from: 'Market Research ("What is happening?")',
    to: 'Business Consulting ("What should we do?")',
    description: 'Consulting strategy is never built on generic academic templates; it is powered directly by primary field surveys with physicians, tender award histories, and unvarnished competitor pricing intelligence.',
    exampleFlow: '48 oncologist interviews reveal diagnostic delay in Kenya/Nigeria → Consulting structures a tiered PPP diagnostic subsidy model with regional referral centers.',
    deliverable: 'Strategy Blueprint backed by Primary Epidemiological & Pricing Data'
  },
  {
    id: 'consulting-training',
    title: 'Business Consulting → AI Training',
    tagline: 'Human Capability Aligned to Strategy',
    from: 'Business Consulting (Operating Model)',
    to: 'AI Training (Workforce Upskilling)',
    description: 'Strategic restructuring and digital roadmaps only succeed when the human workforce is equipped to execute. MindCraft designs organization-specific AI training that mirrors the newly designed operating model.',
    exampleFlow: 'Consulting redesigns commercial territory routes → AI Training equips 40 sales reps with customized mobile prompt assistants to generate pre-call briefings.',
    deliverable: 'Function-Specific Training Playbooks & Certified AI Champions'
  },
  {
    id: 'consulting-solutions',
    title: 'Business Consulting → AI Enterprise Solutions',
    tagline: 'Strategy Operationalized into Production Systems',
    from: 'Business Consulting (Process & Governance)',
    to: 'AI Solutions (Custom Architecture)',
    description: 'Instead of leaving recommendations as 100-page slide decks, MindCraft engineers build the custom software, agents, and data pipelines to automate the recommended processes.',
    exampleFlow: 'Consulting designs pan-African regulatory filing SOPs → AI Solutions deploys an automated web scraping agent tracking 14 national health authority gazettes.',
    deliverable: 'Production-Grade Enterprise AI Software & API Pipelines'
  },
  {
    id: 'training-solutions',
    title: 'AI Training ↔ AI Enterprise Solutions',
    tagline: 'Sustained Adoption & Zero Shelfware',
    from: 'AI Enterprise Solutions (The Technology)',
    to: 'AI Training (The User Champions)',
    description: 'The primary cause of enterprise AI failure is poor user adoption. MindCraft trains the specific end-users who will operate the custom systems, ensuring 100% daily utilization and continuous feedback.',
    exampleFlow: 'AI Solutions deploys an automated Pharmacovigilance literature screener → AI Training certifies safety officers on audit trail validation and human override protocols.',
    deliverable: 'High Daily Active Usage with Measurable Efficiency ROI'
  }
];

export const IntegratedModelSection: React.FC<IntegratedModelSectionProps> = ({ setActiveTab }) => {
  const [selectedPair, setSelectedPair] = useState<string>('research-consulting');

  const activeIntegration = integrations.find(i => i.id === selectedPair) || integrations[0];

  return (
    <section className="mc-section bg-[#050505] relative">
      <div className="mc-container">

        {/* Header: intent first */}
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
          <div className="mc-eyebrow mb-3 px-3 py-1 rounded-full bg-[#0a0a0a] border border-indigo-500/35">
            <Network className="w-3.5 h-3.5" aria-hidden="true" />
            <span>The MindCraft Advantage</span>
          </div>
          <h2 className="mc-h2 font-light tracking-tight">
            One Unified Partner. <span className="font-bold text-indigo-400">Four Integrated Pillars.</span>
          </h2>
          <p className="mc-lead mx-auto mt-3">
            Most organizations hire separate vendors for market research, management advisory, workforce training, and AI engineering. MindCraft integrates all four into a single modular architecture.
          </p>
        </div>

        {/* Architecture */}
        <div className="rounded-2xl bg-[#0a0a0a] border border-white/10 p-4 sm:p-8 mb-8 md:mb-12">
          <div className="text-[11px] font-mono uppercase text-white/60 tracking-widest font-semibold mb-4 md:mb-6 text-center">
            Integrated Organizational Value Architecture
          </div>

          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {pillars.map(({ n, name, question, text, role, Icon, text_c, border, hover, last }, i) => (
              <motion.li
                key={n}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.22, ease: EASE, delay: i * 0.05 }}
                className={`p-4 sm:p-5 rounded-2xl bg-[#050505] border border-white/10 ${hover} flex flex-col justify-between transition-colors`}
              >
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`w-9 h-9 shrink-0 rounded-lg bg-[#0d0f17] border ${border} flex items-center justify-center ${text_c}`}>
                      <Icon className="w-4 h-4" aria-hidden="true" />
                    </div>
                    <div className="min-w-0">
                      <div className={`text-[11px] font-mono font-semibold uppercase tracking-wider ${text_c}`}>Pillar {n}</div>
                      <h3 className="text-base font-bold text-white leading-tight">{name}</h3>
                    </div>
                  </div>
                  <div className="text-sm text-white/80 font-mono">{question}</div>
                  <p className="text-sm text-white/60 mt-2 leading-relaxed">{text}</p>
                </div>
                <div className="mt-3 pt-3 border-t border-white/[0.08] flex items-center justify-between">
                  <span className={`text-[11px] font-mono ${text_c}`}>{role}</span>
                  {last
                    ? <CheckCircle2 className={`w-4 h-4 ${text_c}`} aria-hidden="true" />
                    : <ArrowRight className={`w-4 h-4 ${text_c}`} aria-hidden="true" />}
                </div>
              </motion.li>
            ))}
          </ol>

          {/* Unified outcome + the single primary CTA */}
          <div className="mt-5 p-4 rounded-xl bg-[#050505] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#0d0f17] border border-indigo-500/35 flex items-center justify-center text-indigo-400 shrink-0">
                <Sparkles className="w-4 h-4" aria-hidden="true" />
              </div>
              <div>
                <div className="text-sm font-bold text-white">Unified Outcome: End-to-End Measurable Business Impact</div>
                <div className="text-xs text-white/60 mt-0.5">Grounded in Life Sciences depth, African local context, and governed AI.</div>
              </div>
            </div>

            <button
              onClick={() => setActiveTab('engagement-builder')}
              className="mc-tap px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold shrink-0 transition-colors active:scale-[0.98]"
            >
              Build Multi-Pillar Engagement
            </button>
          </div>
        </div>

        {/* Inter-pillar relationship explorer */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6 items-start">

          {/* Selector: chip rail on phones, list on lg */}
          <div className="min-w-0 space-y-2">
            <div className="text-[11px] font-mono uppercase tracking-widest text-white/60 font-semibold">
              Select Inter-Pillar Integration
            </div>
            <div
              role="tablist"
              aria-label="Inter-pillar integrations"
              className="mc-snap-row lg:!flex-col lg:!overflow-visible lg:!gap-2"
            >
              {integrations.map((item) => {
                const isActive = selectedPair === item.id;
                return (
                  <button
                    key={item.id}
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setSelectedPair(item.id)}
                    className={`mc-tap !flex-none !basis-[16rem] lg:!basis-auto lg:w-full text-left p-3.5 rounded-2xl border transition-colors active:scale-[0.98] ${
                      isActive
                        ? 'bg-[#0d0f17] border-indigo-500/60 text-white'
                        : 'bg-[#0a0a0a] border-white/10 text-white/70 hover:border-white/25 hover:text-white'
                    }`}
                  >
                    <div className={`text-sm font-bold ${isActive ? 'text-indigo-400' : 'text-white/90'}`}>{item.title}</div>
                    <div className="text-xs text-white/60 mt-0.5">{item.tagline}</div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Detail */}
          <div className="lg:col-span-2 min-w-0 rounded-2xl bg-[#0a0a0a] border border-white/10 p-4 sm:p-6">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={activeIntegration.id}
                role="tabpanel"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.18, ease: EASE }}
                className="space-y-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-white/10 gap-2">
                  <div>
                    <span className="text-[11px] uppercase font-mono px-2 py-0.5 rounded bg-[#0d0f17] border border-indigo-500/35 text-indigo-400 font-semibold tracking-wider">
                      Cross-Pillar Synergy
                    </span>
                    <h3 className="text-lg font-bold text-white mt-2">{activeIntegration.title}</h3>
                  </div>
                  <div className="text-xs text-white/60 font-mono">Integrated Delivery</div>
                </div>

                <p className="text-sm sm:text-base text-white/80 leading-relaxed">
                  {activeIntegration.description}
                </p>

                <div className="p-4 rounded-xl bg-[#050505] border border-white/10 space-y-2">
                  <div className="text-xs font-bold text-amber-400 flex items-center gap-1.5 font-mono">
                    <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Illustrative Integrated Delivery Scenario</span>
                  </div>
                  <p className="text-sm text-white/80 leading-relaxed italic">
                    "{activeIntegration.exampleFlow}"
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1">
                  <div>
                    <div className="text-[11px] text-white/60 uppercase font-mono tracking-wider">Combined Deliverable</div>
                    <div className="text-sm font-medium text-emerald-400">{activeIntegration.deliverable}</div>
                  </div>

                  <button
                    onClick={() => setActiveTab('question-to-outcome')}
                    className="mc-tap px-4 py-2 rounded-xl text-white/80 hover:text-white text-sm inline-flex items-center justify-center gap-1.5 transition-colors active:scale-[0.98] border border-white/10 hover:bg-white/5 shrink-0"
                  >
                    <span>View Problem Scenarios</span>
                    <ArrowRight className="w-4 h-4 text-indigo-400" aria-hidden="true" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
