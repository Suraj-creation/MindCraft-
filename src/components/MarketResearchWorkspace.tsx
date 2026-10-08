import React, { useState } from 'react';
import { AnimatePresence, MotionConfig, motion } from 'motion/react';
import { SERVICE_PILLARS, RESEARCH_WORKSPACE_SAMPLE } from '../data/mindcraftData';
import { NavTab } from '../types';
import {
  BarChart3,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  FileText
} from 'lucide-react';

interface MarketResearchWorkspaceProps {
  onOpenIntake: () => void;
  setActiveTab: (tab: NavTab) => void;
}

type WorkspaceTab = 'brief' | 'primary' | 'secondary' | 'findings' | 'decision';

const EASE = [0.16, 1, 0.3, 1] as const;

const reveal = (i = 0) => ({
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-10%' },
  transition: { duration: 0.25, ease: EASE, delay: Math.min(i, 5) * 0.05 }
});

const PILLAR_TABS: Record<string, NavTab> = {
  'Business Consulting': 'consulting',
  'Market Research': 'market-research',
  'AI Training': 'ai-training',
  'AI Enterprise Solutions': 'ai-solutions'
};

const WORKSPACE_TABS: { id: WorkspaceTab; label: string }[] = [
  { id: 'brief', label: 'Brief' },
  { id: 'primary', label: 'Primary Evidence' },
  { id: 'secondary', label: 'Secondary Data' },
  { id: 'findings', label: 'Strategic Findings' },
  { id: 'decision', label: 'Decision Layer' }
];

const RISK_LEVEL: Record<string, { bars: number; text: string; bar: string }> = {
  Low: { bars: 1, text: 'text-emerald-400', bar: 'bg-emerald-500' },
  Moderate: { bars: 2, text: 'text-amber-400', bar: 'bg-amber-500' },
  High: { bars: 3, text: 'text-amber-400', bar: 'bg-amber-500' }
};

const CapabilityCard: React.FC<{
  index: number;
  title: string;
  description: string;
  bullets: string[];
}> = ({ index, title, description, bullets }) => {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      {...reveal(index)}
      className="flex flex-col rounded-2xl border border-white/[0.08] bg-[#0A0A0A] p-5"
    >
      <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-sky-400">
        Capability 0{index + 1}
      </span>
      <h3 className="mt-1 text-base font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-[#9CA3AF]">{description}</p>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="mc-tap -mx-2 mt-3 flex items-center justify-between rounded-lg px-2 font-mono text-xs text-sky-400 transition-colors hover:text-white active:scale-[0.98]"
      >
        <span>{open ? 'Hide scope' : `What is included (${bullets.length})`}</span>
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: EASE }}
            className="mt-1 space-y-2 border-t border-white/[0.08] pt-3"
          >
            {bullets.map((bp, j) => (
              <li key={j} className="flex items-start gap-2 text-sm text-[#E0E0E0]">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-sky-500" />
                <span>{bp}</span>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const PanelLabel: React.FC<{ className?: string; children: React.ReactNode }> = ({ className = 'text-sky-400', children }) => (
  <div className={`font-mono text-[11px] font-bold uppercase tracking-wider ${className}`}>{children}</div>
);

export const MarketResearchWorkspace: React.FC<MarketResearchWorkspaceProps> = ({
  onOpenIntake,
  setActiveTab
}) => {
  const researchPillar = SERVICE_PILLARS.find(p => p.id === 'market-research') || SERVICE_PILLARS[1];
  const [workspaceTab, setWorkspaceTab] = useState<WorkspaceTab>('brief');
  const ws = RESEARCH_WORKSPACE_SAMPLE;

  const researchPipelineStages = [
    { num: '01', title: 'Question', desc: 'Problem framing & hypothesis definition' },
    { num: '02', title: 'Research Design', desc: 'Sampling frames & instrument design' },
    { num: '03', title: 'Data Collection', desc: 'Field surveys & secondary scraping' },
    { num: '04', title: 'Data Quality', desc: 'Cleaning, audit & verification checks' },
    { num: '05', title: 'Analysis', desc: 'Statistical modeling & regression' },
    { num: '06', title: 'Synthesis', desc: 'AI-assisted thematic extraction' },
    { num: '07', title: 'Intelligence', desc: 'Decision-ready strategic insight' },
    { num: '08', title: 'Decision', desc: 'Executive intervention roadmap' }
  ];

  const facts = [
    { value: String(researchPillar.capabilities.length), label: 'Core capabilities' },
    { value: String(researchPipelineStages.length), label: 'Pipeline stages, question to decision' },
    { value: String(ws.primaryEvidence.length), label: 'Primary evidence sources in the sample dossier' },
    { value: String(ws.targetMarkets.length), label: 'Markets in the sample dossier' }
  ];

  return (
    <MotionConfig reducedMotion="user">
      <section className="mc-section bg-[#050505]" id="market-research-section">
        <div className="mc-container">

          {/* 1. Intent */}
          <motion.header {...reveal()} className="max-w-3xl">
            <div className="mc-eyebrow !text-sky-400">
              <BarChart3 className="h-3.5 w-3.5" />
              <span>Pillar 02 · Evidence & Intelligence</span>
            </div>
            <h1 className="mc-h1 mt-3 font-light">
              Market <span className="font-bold text-sky-400">Research</span>
            </h1>
            <p className="mc-lead mt-4">
              Rigorous primary and secondary research that turns market complexity into decision-ready intelligence — purpose-built for Life Sciences and diversified industries across African and international markets.
            </p>
          </motion.header>

          {/* 2. Facts + outcomes */}
          <div className="mt-10 sm:mt-12">
            <dl className="grid grid-cols-2 gap-3 md:grid-cols-4">
              {facts.map((f, i) => (
                <motion.div
                  key={f.label}
                  {...reveal(i)}
                  className="rounded-xl border border-white/[0.08] bg-[#0A0A0A] p-4"
                >
                  <dd className="font-mono text-xl font-bold text-white sm:text-2xl">{f.value}</dd>
                  <dt className="mt-1 text-xs leading-snug text-[#9CA3AF]">{f.label}</dt>
                </motion.div>
              ))}
            </dl>

            {researchPillar.deliverables.length > 0 && (
              <div className="mt-6 rounded-2xl border border-sky-500/30 bg-[#0A0A0A] p-5 sm:p-6">
                <div className="flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-wider text-sky-400">
                  <FileText className="h-3.5 w-3.5" />
                  <span>What you receive</span>
                </div>
                <ul className="mt-4 grid gap-3 md:grid-cols-3">
                  {researchPillar.deliverables.map((del, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm leading-relaxed text-[#E0E0E0]">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                      <span>{del}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* 3. Capabilities */}
          <div className="mt-12 sm:mt-16">
            <div className="mc-eyebrow !text-sky-400">What we do</div>
            <h2 className="mc-h2 mt-2 font-light">Primary and secondary research, <span className="font-bold">decision-ready</span></h2>
            <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4 lg:gap-4">
              {researchPillar.capabilities.map((cap, i) => (
                <CapabilityCard
                  key={i}
                  index={i}
                  title={cap.title}
                  description={cap.description}
                  bullets={cap.bulletPoints}
                />
              ))}
            </div>
          </div>

          {/* 4. Pipeline */}
          <div className="mt-12 sm:mt-16">
            <div className="mc-eyebrow !text-sky-400">The research rigor pipeline</div>
            <h2 className="mc-h2 mt-2 font-light">From ambiguous signal to <span className="font-bold">executive decision</span></h2>
            <ol className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-8 lg:gap-3">
              {researchPipelineStages.map((stg, i) => (
                <motion.li
                  key={stg.num}
                  {...reveal(i)}
                  className="flex flex-col rounded-xl border border-white/[0.08] bg-[#0A0A0A] p-3.5"
                >
                  <span className="font-mono text-[11px] font-bold text-sky-400">{stg.num}</span>
                  <span className="mt-1 font-mono text-xs font-bold text-white">{stg.title}</span>
                  <span className="mt-1 text-xs leading-snug text-[#9CA3AF]">{stg.desc}</span>
                </motion.li>
              ))}
            </ol>
          </div>

          {/* 5. Workspace explorer */}
          <div className="mt-12 sm:mt-16">
            <div className="mc-eyebrow !text-sky-400">Sample dossier · prototype</div>
            <h2 className="mc-h2 mt-2 font-light">MindCraft <span className="font-bold text-sky-400">Research Workspace</span></h2>
            <p className="mt-2 text-sm text-[#9CA3AF]">
              <span className="font-mono text-xs uppercase tracking-wider">Dossier</span> · {ws.title}
            </p>

            <div className="mt-6 overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0A0A0A]">
              {/* Tab rail: scrolls inside itself on phones, never the page */}
              <div className="border-b border-white/[0.08] bg-[#050505]">
                <div
                  role="tablist"
                  aria-label="Research workspace sections"
                  className="flex gap-1 overflow-x-auto p-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                >
                  {WORKSPACE_TABS.map((t) => {
                    const active = workspaceTab === t.id;
                    return (
                      <button
                        key={t.id}
                        type="button"
                        role="tab"
                        id={`ws-tab-${t.id}`}
                        aria-selected={active}
                        aria-controls="ws-panel"
                        onClick={(e) => {
                          setWorkspaceTab(t.id);
                          e.currentTarget.scrollIntoView({ inline: 'center', block: 'nearest', behavior: 'smooth' });
                        }}
                        className={`mc-tap shrink-0 rounded-lg border px-4 font-mono text-xs transition-colors duration-200 active:scale-[0.98] ${
                          active
                            ? 'border-sky-500/50 bg-[#0D0F17] font-semibold text-sky-400'
                            : 'border-transparent text-[#9CA3AF] hover:text-white'
                        }`}
                      >
                        {t.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div
                role="tabpanel"
                id="ws-panel"
                aria-labelledby={`ws-tab-${workspaceTab}`}
                className="p-4 sm:p-6"
              >
                <motion.div
                  key={workspaceTab}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, ease: EASE }}
                  className="space-y-3"
                >
                  {workspaceTab === 'brief' && (
                    <>
                      <div className="grid gap-3 md:grid-cols-3">
                        <div className="rounded-xl border border-white/[0.08] bg-[#050505] p-4">
                          <PanelLabel className="text-[#9CA3AF]">Client organization</PanelLabel>
                          <div className="mt-1 text-sm font-semibold text-white">{ws.clientContext}</div>
                        </div>
                        <div className="rounded-xl border border-white/[0.08] bg-[#050505] p-4 md:col-span-2">
                          <PanelLabel className="text-[#9CA3AF]">Target markets in scope</PanelLabel>
                          <div className="mt-2 flex flex-wrap gap-2">
                            {ws.targetMarkets.map((m, i) => (
                              <span key={i} className="rounded-lg border border-white/[0.08] bg-white/5 px-3 py-1 font-mono text-xs text-sky-400">
                                {m}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="rounded-xl border border-white/[0.08] bg-[#050505] p-4">
                        <PanelLabel className="text-[#9CA3AF]">Core research objective</PanelLabel>
                        <p className="mt-1 text-sm leading-relaxed text-[#E0E0E0]">{ws.objective}</p>
                      </div>
                    </>
                  )}

                  {workspaceTab === 'primary' && (
                    <>
                      <PanelLabel>Audited primary field intelligence feeds</PanelLabel>
                      {ws.primaryEvidence.map((pe, i) => (
                        <div key={i} className="rounded-xl border border-white/[0.08] bg-[#050505] p-4">
                          <div className="flex flex-wrap items-start justify-between gap-2">
                            <span className="min-w-0 flex-1 text-sm font-semibold leading-snug text-white">{pe.source}</span>
                            <span className="shrink-0 rounded-lg border border-emerald-500/30 px-2.5 py-1 font-mono text-xs font-bold text-emerald-400">
                              {pe.confidence} confidence
                            </span>
                          </div>
                          <div className="mt-2 inline-block rounded-md border border-white/[0.08] bg-white/5 px-2 py-1 font-mono text-[11px] text-[#9CA3AF]">
                            {pe.sampleSize}
                          </div>
                          <p className="mt-2 text-sm leading-relaxed text-[#E0E0E0]">{pe.keySignal}</p>
                        </div>
                      ))}
                    </>
                  )}

                  {workspaceTab === 'secondary' && (
                    <>
                      <PanelLabel>Desk, epidemiological & regulatory intelligence datasets</PanelLabel>
                      {ws.secondaryEvidence.map((se, i) => (
                        <div key={i} className="rounded-xl border border-white/[0.08] bg-[#050505] p-4">
                          <span className="text-sm font-semibold leading-snug text-white">{se.source}</span>
                          <div className="mt-2 inline-block rounded-md border border-sky-500/30 px-2 py-1 font-mono text-[11px] text-sky-400">
                            {se.datasetType}
                          </div>
                          <p className="mt-2 text-sm leading-relaxed text-[#E0E0E0]">{se.keyFinding}</p>
                        </div>
                      ))}
                    </>
                  )}

                  {workspaceTab === 'findings' && (
                    <>
                      <PanelLabel className="text-amber-400">Synthesized market signals & risk benchmarks</PanelLabel>
                      <div className="grid gap-3 md:grid-cols-3">
                        {ws.strategicFindings.map((sf, i) => {
                          const risk = RISK_LEVEL[sf.riskLevel] ?? RISK_LEVEL.Moderate;
                          return (
                            <div key={i} className="flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#050505] p-4">
                              <div>
                                <div className="text-sm font-semibold leading-snug text-white">{sf.trend}</div>
                                <p className="mt-2 text-sm leading-relaxed text-[#9CA3AF]">{sf.impact}</p>
                              </div>
                              <div className="mt-4 flex items-center justify-between border-t border-white/[0.08] pt-3">
                                <span className="font-mono text-[11px] uppercase tracking-wider text-[#9CA3AF]">Risk level</span>
                                <span className={`flex items-center gap-2 font-mono text-xs font-bold ${risk.text}`}>
                                  <span className="flex gap-0.5" aria-hidden="true">
                                    {[1, 2, 3].map((n) => (
                                      <span key={n} className={`h-3 w-1.5 rounded-sm ${n <= risk.bars ? risk.bar : 'bg-white/10'}`} />
                                    ))}
                                  </span>
                                  {sf.riskLevel}
                                </span>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </>
                  )}

                  {workspaceTab === 'decision' && (
                    <>
                      <PanelLabel className="text-emerald-400">Actionable strategic recommendations & confidence scores</PanelLabel>
                      {ws.recommendations.map((rec, i) => (
                        <div key={i} className="rounded-xl border border-emerald-500/30 bg-[#050505] p-4">
                          <div className="flex items-center justify-between gap-3">
                            <span className="rounded-md border border-emerald-500/40 px-2 py-1 font-mono text-[11px] font-bold uppercase text-emerald-400">
                              Priority: {rec.priority}
                            </span>
                            <span className="font-mono text-sm font-extrabold text-emerald-400">{rec.evidenceStrength}%</span>
                          </div>
                          <p className="mt-3 text-sm font-medium leading-relaxed text-white">{rec.action}</p>
                          <div className="mt-3">
                            <div className="mb-1 font-mono text-[11px] uppercase tracking-wider text-[#9CA3AF]">Evidence strength</div>
                            <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                              <motion.div
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: rec.evidenceStrength / 100 }}
                                transition={{ duration: 0.25, ease: EASE, delay: 0.05 }}
                                style={{ transformOrigin: 'left' }}
                                className="h-full w-full rounded-full bg-emerald-500"
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                    </>
                  )}
                </motion.div>
              </div>
            </div>
          </div>

          {/* 6. Single CTA + pairs with */}
          <div className="mt-12 sm:mt-16">
            <motion.div
              {...reveal()}
              className="rounded-2xl border border-indigo-500/35 bg-[#0A0A0A] p-6 sm:p-8 md:flex md:items-center md:justify-between md:gap-8"
            >
              <div className="max-w-xl">
                <h2 className="text-xl font-semibold text-white sm:text-2xl">Commission research for your market</h2>
                <p className="mt-2 text-sm leading-relaxed text-[#9CA3AF]">
                  Need custom research for your therapeutic portfolio or African market expansion?
                </p>
              </div>
              <button
                type="button"
                onClick={onOpenIntake}
                className="mc-tap mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 font-mono text-sm font-semibold text-white transition-[background-color,transform] duration-200 hover:bg-indigo-500 active:scale-[0.98] md:mt-0 md:w-auto md:shrink-0"
              >
                <span>Commission Research Scope</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </motion.div>

            {researchPillar.intersections && researchPillar.intersections.length > 0 && (
              <div className="mt-4">
                <div className="font-mono text-[11px] uppercase tracking-wider text-[#9CA3AF]">Pairs with</div>
                <ul className="mt-2 grid gap-2 md:grid-cols-3">
                  {researchPillar.intersections.map((x) => {
                    const target = PILLAR_TABS[x.withPillar];
                    return (
                      <li key={x.withPillar}>
                        <button
                          type="button"
                          disabled={!target}
                          onClick={() => target && setActiveTab(target)}
                          className="mc-tap mc-card-interactive flex h-full w-full items-start justify-between gap-3 rounded-xl border border-white/[0.08] bg-[#0A0A0A] p-4 text-left"
                        >
                          <span>
                            <span className="block font-mono text-xs font-semibold text-white">{x.withPillar}</span>
                            <span className="mt-1 block text-xs leading-relaxed text-[#9CA3AF]">{x.integratedValue}</span>
                          </span>
                          <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-[#9CA3AF]" />
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>

        </div>
      </section>
    </MotionConfig>
  );
};
