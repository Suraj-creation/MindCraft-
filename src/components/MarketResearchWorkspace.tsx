import React, { useState } from 'react';
import { MotionConfig, motion } from 'motion/react';
import { SERVICE_PILLARS, RESEARCH_WORKSPACE_SAMPLE } from '../data/mindcraftData';
import { NavTab } from '../types';
import { BarChart3, ClipboardCheck, Database, Search, Users } from 'lucide-react';
import { ContextualCTA, DeepDive, EASE, RelatedLinks, SectionHeader, reveal } from './ui/primitives';
import { DeliverablesBlock, GroupCard, PillarHero, tabKeyNav } from './PillarParts';

interface MarketResearchWorkspaceProps {
  onOpenIntake: () => void;
  setActiveTab: (tab: NavTab) => void;
}

type WorkspaceTab = 'brief' | 'primary' | 'secondary' | 'findings' | 'decision';

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

/** The four research groups exactly as the corporate profile names them. */
const GROUPS = [
  {
    name: 'Primary Market Research',
    icon: Users,
    what: 'Surveys, interviews and advisory-board research with physicians, pharmacists, patients, distributors, retailers and institutional buyers.',
    why: 'First-hand evidence from the people who shape demand, access and purchasing decisions.',
    outcome: 'Field insight, KOL maps and channel and tender intelligence.'
  },
  {
    name: 'Secondary & Desk Research',
    icon: Search,
    what: 'Market sizing, forecasting, competitive intelligence and regulatory, policy and reimbursement scans across countries and categories.',
    why: 'Frames the opportunity and the rules of the market before and alongside fieldwork.',
    outcome: 'A sized, benchmarked opportunity with its regulatory context.'
  },
  {
    name: 'Program & Impact Research',
    icon: ClipboardCheck,
    what: 'Baseline, midline and endline surveys, MEL frameworks and needs assessments for corporate, development-sector and donor-funded programs.',
    why: 'Shows whether programs and capacity-building investments are working.',
    outcome: 'Impact evidence and skills-gap findings that inform the next investment.'
  },
  {
    name: 'Data, Analytics & Knowledge Products',
    icon: Database,
    what: 'Data cleaning, statistical analysis and dashboard-ready reporting, plus custom reports, whitepapers, toolkits and case studies.',
    why: 'AI-assisted literature and data synthesis speeds turnaround without compromising rigor.',
    outcome: 'Reports and dashboards ready for internal or public use.'
  }
];

const DELIVERABLES = [
  'Executive summary reports, detailed findings decks and raw datasets.',
  'Market sizing models and competitive intelligence trackers, updated on a defined cadence.',
  'Actionable recommendations linked directly to business or program decisions.'
];

const PIPELINE = [
  { num: '01', title: 'Question', desc: 'Problem framing & hypothesis definition' },
  { num: '02', title: 'Research Design', desc: 'Sampling frames & instrument design' },
  { num: '03', title: 'Data Collection', desc: 'Field surveys & secondary scraping' },
  { num: '04', title: 'Data Quality', desc: 'Cleaning, audit & verification checks' },
  { num: '05', title: 'Analysis', desc: 'Statistical modeling & regression' },
  { num: '06', title: 'Synthesis', desc: 'AI-assisted thematic extraction' },
  { num: '07', title: 'Intelligence', desc: 'Decision-ready strategic insight' },
  { num: '08', title: 'Decision', desc: 'Executive intervention roadmap' }
];

const PanelLabel: React.FC<{ className?: string; children: React.ReactNode }> = ({ className = 'text-sky-400', children }) => (
  <div className={`font-mono text-[11px] font-bold uppercase tracking-wider ${className}`}>{children}</div>
);

export const MarketResearchWorkspace: React.FC<MarketResearchWorkspaceProps> = ({ onOpenIntake, setActiveTab }) => {
  const researchPillar = SERVICE_PILLARS.find((p) => p.id === 'market-research') || SERVICE_PILLARS[1];
  const [workspaceTab, setWorkspaceTab] = useState<WorkspaceTab>('brief');
  const ws = RESEARCH_WORKSPACE_SAMPLE;
  const tabIds = WORKSPACE_TABS.map((t) => t.id);

  return (
    <MotionConfig reducedMotion="user">
      <section className="mc-section bg-[#050505]" id="market-research-section">
        <div className="mc-container">

          {/* A. What this is, what MindCraft delivers, outcomes, CTA */}
          <PillarHero
            tone="sky"
            icon={BarChart3}
            eyebrow="Pillar 02 · Market Research"
            titleLight="Market"
            titleBold="Research"
            lead="Rigorous primary and secondary research that turns market complexity into decision-ready intelligence, for Life Sciences and diversified-industry clients in African and international markets."
            outcomes={[
              { label: 'Evidence you can defend', text: 'Primary field research plus secondary desk intelligence.' },
              { label: 'Africa and beyond', text: 'African and international markets, Life Sciences first.' },
              { label: 'Built to be used', text: 'Every deliverable is designed for immediate use.' }
            ]}
            ctaLabel="Commission Research Scope"
            onCta={onOpenIntake}
            exploreLabel="See the four capabilities"
            exploreId="mr-capabilities"
          />

          {/* A/B. Capability groups, then deliverables */}
          <div id="mr-capabilities" className="mt-10 scroll-mt-24 sm:mt-14">
            <SectionHeader
              eyebrow="What MindCraft delivers"
              title={<>Four research capabilities, <span className="font-bold">one evidence base</span></>}
              className="mb-5! sm:mb-7!"
            />
            <ul className="grid grid-cols-1 items-start gap-3 md:grid-cols-2 lg:grid-cols-4 lg:gap-4">
              {GROUPS.map((g, i) => (
                <GroupCard
                  key={g.name}
                  index={i}
                  tone="sky"
                  icon={g.icon}
                  name={g.name}
                  what={g.what}
                  why={g.why}
                  outcome={g.outcome}
                  included={researchPillar.capabilities[i]?.bulletPoints ?? []}
                />
              ))}
            </ul>
            <div className="mt-4">
              <DeliverablesBlock tone="sky" items={DELIVERABLES} />
            </div>
          </div>

          {/* Explorer */}
          <div id="mr-workspace" className="mt-10 scroll-mt-24 sm:mt-14">
            <SectionHeader
              eyebrow="Explorer · illustrative sample dossier"
              title={<>MindCraft <span className="font-bold text-sky-400">Research Workspace</span></>}
              lead={<>Prototype walkthrough of how evidence becomes a decision. Sample: {ws.title}. Illustrative, not a client engagement.</>}
              className="mb-5! sm:mb-7!"
            />

            <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0A0A0A]">
              <div className="border-b border-white/[0.08] bg-[#050505]">
                <div
                  role="tablist"
                  aria-label="Research workspace sections"
                  onKeyDown={(e) => tabKeyNav(e, tabIds, workspaceTab, setWorkspaceTab, (id) => `ws-tab-${id}`)}
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
                        tabIndex={active ? 0 : -1}
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

              <div role="tabpanel" id="ws-panel" aria-labelledby={`ws-tab-${workspaceTab}`} tabIndex={0} className="p-4 sm:p-6">
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
                            {ws.targetMarkets.map((m) => (
                              <span key={m} className="rounded-lg border border-white/[0.08] bg-white/5 px-3 py-1 font-mono text-xs text-sky-400">
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
                      {ws.primaryEvidence.map((pe) => (
                        <div key={pe.source} className="rounded-xl border border-white/[0.08] bg-[#050505] p-4">
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
                      {ws.secondaryEvidence.map((se) => (
                        <div key={se.source} className="rounded-xl border border-white/[0.08] bg-[#050505] p-4">
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
                        {ws.strategicFindings.map((sf) => {
                          const risk = RISK_LEVEL[sf.riskLevel] ?? RISK_LEVEL.Moderate;
                          return (
                            <div key={sf.trend} className="flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#050505] p-4">
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
                      {ws.recommendations.map((rec) => (
                        <div key={rec.action} className="rounded-xl border border-emerald-500/30 bg-[#050505] p-4">
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

          {/* C. Deep dive: method */}
          <div className="mt-6">
            <DeepDive
              tone="sky"
              title="How every study is run: the 8-stage research pipeline"
              hint="Question to executive decision"
            >
              <ol className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4">
                {PIPELINE.map((stg) => (
                  <li key={stg.num} className="flex items-start gap-3 rounded-xl border border-white/[0.08] bg-[#050505] p-3.5">
                    <span className="font-mono text-[11px] font-bold text-sky-400">{stg.num}</span>
                    <span className="min-w-0">
                      <span className="block font-mono text-xs font-bold text-white">{stg.title}</span>
                      <span className="mt-0.5 block text-xs leading-snug text-[#9CA3AF]">{stg.desc}</span>
                    </span>
                  </li>
                ))}
              </ol>
            </DeepDive>
          </div>

          {/* One CTA, then related */}
          <div className="mt-10 space-y-8 sm:mt-14">
            <motion.div {...reveal}>
              <ContextualCTA
                title="Commission research for your market"
                body="Tell us the therapeutic portfolio, market or program in question and we will scope the primary and secondary work around it."
                primaryLabel="Commission Research Scope"
                onPrimary={onOpenIntake}
              />
            </motion.div>
            <RelatedLinks
              title="Pairs with"
              items={[
                { label: 'Localization', desc: 'Turn research into country-specific execution.', onClick: () => setActiveTab('localization'), tone: 'sky' },
                { label: 'AI Enterprise Solutions', desc: 'Feed research into automated intelligence and monitoring platforms.', onClick: () => setActiveTab('ai-solutions'), tone: 'emerald' },
                { label: 'Business Consulting', desc: 'Inform the strategic roadmap with field evidence.', onClick: () => setActiveTab('consulting'), tone: 'teal' },
                { label: 'Senior expertise', desc: 'The Life Sciences experience behind the research.', onClick: () => setActiveTab('senior-expertise'), tone: 'indigo' }
              ]}
            />
          </div>

        </div>
      </section>
    </MotionConfig>
  );
};
