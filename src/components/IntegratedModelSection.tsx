import React, { useState } from 'react';
import { MotionConfig, motion, AnimatePresence } from 'motion/react';
import { NavTab } from '../types';
import { DeepDive, EASE, TONES, Tone, reveal } from './ui/primitives';
import { Compass, BarChart3, GraduationCap, Cpu, ArrowRight, Sparkles, Network } from 'lucide-react';

interface IntegratedModelSectionProps {
  setActiveTab: (tab: NavTab) => void;
}

const pillars: {
  n: string;
  name: string;
  question: string;
  text: string;
  role: string;
  Icon: React.ComponentType<{ className?: string }>;
  tone: Tone;
}[] = [
  { n: '01', name: 'Market Research', question: 'What is happening?', text: 'Primary surveys, KOL mapping, epidemiology & regulatory landscape scans.', role: 'Feeds evidence', Icon: BarChart3, tone: 'sky' },
  { n: '02', name: 'Business Consulting', question: 'What should we do?', text: 'Corporate strategy, market entry blueprints, operating models & SOP redesign.', role: 'Guides execution', Icon: Compass, tone: 'teal' },
  { n: '03', name: 'AI Training', question: 'Can our people use AI?', text: 'Applied literacy, prompt workflows, responsible use & certified internal champions.', role: 'Drives adoption', Icon: GraduationCap, tone: 'amber' },
  { n: '04', name: 'AI Enterprise Solutions', question: 'How do we automate?', text: 'Governed production agents, PV monitoring, regulatory scrapers & CRM intelligence.', role: 'Automates scale', Icon: Cpu, tone: 'emerald' }
];

const integrations = [
  {
    id: 'research-consulting',
    short: 'Research → Consulting',
    title: 'Market Research → Business Consulting',
    tagline: 'Evidence-grounded strategic advisory',
    description: 'Consulting strategy is never built on generic academic templates; it is powered directly by primary field surveys with physicians, tender award histories, and unvarnished competitor pricing intelligence.',
    exampleFlow: 'Primary oncologist interviews reveal diagnostic delay in Kenya/Nigeria → Consulting structures a tiered PPP diagnostic subsidy model with regional referral centers.',
    deliverable: 'Strategy blueprint backed by primary epidemiological & pricing data'
  },
  {
    id: 'consulting-training',
    short: 'Consulting → Training',
    title: 'Business Consulting → AI Training',
    tagline: 'Human capability aligned to strategy',
    description: 'Strategic restructuring and digital roadmaps only succeed when the human workforce is equipped to execute. MindCraft designs organization-specific AI training that mirrors the newly designed operating model.',
    exampleFlow: 'Consulting redesigns commercial territory routes → AI Training equips the sales team with customized mobile prompt assistants to generate pre-call briefings.',
    deliverable: 'Function-specific training playbooks & certified AI champions'
  },
  {
    id: 'consulting-solutions',
    short: 'Consulting → Solutions',
    title: 'Business Consulting → AI Enterprise Solutions',
    tagline: 'Strategy operationalized into production systems',
    description: 'Instead of leaving recommendations as 100-page slide decks, MindCraft engineers build the custom software, agents, and data pipelines to automate the recommended processes.',
    exampleFlow: 'Consulting designs pan-African regulatory filing SOPs → AI Solutions deploys an automated web scraping agent tracking national health authority gazettes.',
    deliverable: 'Production-grade enterprise AI software & API pipelines'
  },
  {
    id: 'training-solutions',
    short: 'Training ↔ Solutions',
    title: 'AI Training ↔ AI Enterprise Solutions',
    tagline: 'Sustained adoption',
    description: 'The primary cause of enterprise AI failure is poor user adoption. MindCraft trains the specific end-users who will operate the custom systems, driving sustained daily utilization and continuous feedback.',
    exampleFlow: 'AI Solutions deploys an automated pharmacovigilance literature screener → AI Training certifies safety officers on audit trail validation and human override protocols.',
    deliverable: 'High daily active usage with measurable efficiency ROI'
  }
];

export const IntegratedModelSection: React.FC<IntegratedModelSectionProps> = ({ setActiveTab }) => {
  const [selectedPair, setSelectedPair] = useState<string>('research-consulting');
  const active = integrations.find(i => i.id === selectedPair) || integrations[0];

  return (
    <MotionConfig reducedMotion="user">
      <section className="mc-section bg-[#050505]" id="model-compounding">
        <div className="mc-container space-y-8 sm:space-y-10">
          {/* A. Intent + CTA */}
          <header className="max-w-3xl">
            <span className="mc-eyebrow">
              <Network className="w-3.5 h-3.5" aria-hidden="true" />
              The MindCraft Model
            </span>
            <h1 className="mc-h1 mt-3 font-light">
              One partner. Four capabilities that <span className="font-semibold">compound.</span>
            </h1>
            <p className="mc-lead mt-3">
              Research informs strategy, strategy guides AI investment, and training makes adoption stick. MindCraft delivers all four
              as one integrated engagement, not four disconnected vendors.
            </p>
            <div className="mt-5 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={() => setActiveTab('engagement-builder')}
                className="mc-tap px-5 rounded-xl bg-indigo-600 hover:bg-indigo-500 active:scale-[0.98] text-white text-sm font-semibold flex items-center justify-center gap-2 transition-[background-color,transform] duration-150"
              >
                <span>Build a multi-pillar engagement</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('question-to-outcome')}
                className="mc-tap px-5 rounded-xl bg-white/5 hover:bg-white/10 active:scale-[0.98] text-white/90 text-sm border border-white/10 transition-[background-color,transform] duration-150"
              >
                Start from a problem
              </button>
            </div>
          </header>

          {/* A. The chain: one question each, in order */}
          <div>
            <h2 className="mc-eyebrow mb-3">Four questions, one chain</h2>
            <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3">
              {pillars.map(({ n, name, question, text, role, Icon, tone }, i) => (
                <motion.li
                  key={n}
                  {...reveal}
                  transition={{ ...reveal.transition, delay: i * 0.05 }}
                  className="p-4 rounded-2xl bg-[#0a0a0a] border border-white/10"
                >
                  <div className="flex items-center gap-3">
                    <span className={`w-10 h-10 shrink-0 rounded-xl bg-[#0d0f17] border ${TONES[tone].border} flex items-center justify-center ${TONES[tone].text}`}>
                      <Icon className="w-4 h-4" aria-hidden="true" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-baseline justify-between gap-2">
                        <h3 className="text-base font-bold text-white leading-tight">{name}</h3>
                        <span className={`text-[11px] font-mono shrink-0 ${TONES[tone].text}`}>{n}</span>
                      </div>
                      <p className="text-xs font-mono text-white/60 mt-0.5">{question}</p>
                    </div>
                  </div>
                  <p className="hidden sm:block mt-3 text-sm text-white/60 leading-snug">{text}</p>
                  <p className={`hidden sm:block mt-3 pt-3 border-t border-white/[0.08] text-[11px] font-mono ${TONES[tone].text}`}>{role}</p>
                </motion.li>
              ))}
            </ol>
          </div>

          {/* B. How they compound */}
          <div>
            <h2 className="mc-eyebrow mb-3">How they compound</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 lg:gap-5 items-start">
              <div role="tablist" aria-label="Inter-pillar integrations" className="mc-snap-row min-w-0 lg:!flex-col lg:!overflow-visible lg:!gap-2">
                {integrations.map(item => {
                  const isActive = selectedPair === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      role="tab"
                      id={`pair-tab-${item.id}`}
                      aria-selected={isActive}
                      aria-controls="pair-panel"
                      onClick={() => setSelectedPair(item.id)}
                      className={`mc-tap !flex-none !basis-auto whitespace-nowrap lg:whitespace-normal lg:w-full text-left px-4 py-2.5 rounded-xl border text-sm transition-colors active:scale-[0.98] ${
                        isActive ? 'bg-[#0d0f17] border-indigo-500/60 text-white font-semibold' : 'bg-[#0a0a0a] border-white/10 text-white/70 hover:border-white/25 hover:text-white'
                      }`}
                    >
                      <span className="lg:hidden">{item.short}</span>
                      <span className="hidden lg:block">{item.title}</span>
                    </button>
                  );
                })}
              </div>

              <div className="lg:col-span-2 min-w-0 rounded-2xl bg-[#0a0a0a] border border-white/10 p-4 sm:p-6">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={active.id}
                    id="pair-panel"
                    role="tabpanel"
                    aria-labelledby={`pair-tab-${active.id}`}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.18, ease: EASE }}
                    className="space-y-4"
                  >
                    <div>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-indigo-400">{active.tagline}</span>
                      <h3 className="text-lg font-bold text-white mt-1">{active.title}</h3>
                    </div>
                    <p className="text-sm sm:text-base text-white/75 leading-relaxed">{active.description}</p>
                    <div className="pt-3 border-t border-white/10">
                      <div className="text-[11px] font-mono uppercase tracking-wider text-white/50">Combined deliverable</div>
                      <div className="text-sm font-medium text-emerald-400 mt-0.5">{active.deliverable}</div>
                    </div>
                    <DeepDive title="Illustrative scenario" hint="How this hand-off can look in practice" tone="amber">
                      <p className="pt-3 text-sm text-white/80 leading-relaxed italic flex items-start gap-2">
                        <Sparkles className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" aria-hidden="true" />
                        <span>"{active.exampleFlow}"</span>
                      </p>
                    </DeepDive>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
            <p className="mt-4 text-sm text-white/60">
              Unified outcome: end-to-end measurable business impact, grounded in Life Sciences depth, African local context, and governed AI.
            </p>
          </div>
        </div>
      </section>
    </MotionConfig>
  );
};
