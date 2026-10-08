import React, { useState } from 'react';
import { AnimatePresence, MotionConfig, motion } from 'motion/react';
import { SERVICE_PILLARS, AI_SOLUTIONS_CATALOG } from '../data/mindcraftData';
import { AISolutionItem, NavTab } from '../types';
import {
  Cpu,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  ShieldCheck,
  Database,
  Workflow,
  Users,
  FileText,
  Server
} from 'lucide-react';

interface AIEnterpriseSolutionsViewProps {
  onOpenIntake: () => void;
  setActiveTab: (tab: NavTab) => void;
}

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

const STATUS_STYLE: Record<string, string> = {
  'Production Architecture Pattern': 'border-emerald-500/30 text-emerald-400',
  'Demonstration Prototype': 'border-amber-500/30 text-amber-400',
  'Illustrative Blueprint': 'border-indigo-500/35 text-indigo-400'
};

type Tone = 'neutral' | 'indigo' | 'emerald';

const TONE: Record<Tone, { border: string; icon: string; title: string; tag: string }> = {
  neutral: {
    border: 'border-white/[0.08]',
    icon: 'border-white/[0.08] bg-white/5 text-[#9CA3AF]',
    title: 'text-white',
    tag: 'text-[#9CA3AF]'
  },
  indigo: {
    border: 'border-indigo-500/35',
    icon: 'border-indigo-500/35 bg-[#0D0F17] text-indigo-400',
    title: 'text-indigo-400',
    tag: 'text-indigo-400'
  },
  emerald: {
    border: 'border-emerald-500/30',
    icon: 'border-emerald-500/30 bg-[#0D0F17] text-emerald-400',
    title: 'text-emerald-400',
    tag: 'text-emerald-400'
  }
};

const ARCHITECTURE_TIERS: {
  icon: React.ReactNode;
  title: string;
  detail: string;
  tag: string;
  tone: Tone;
}[] = [
  {
    icon: <Users className="h-4 w-4" />,
    title: 'Tier 1: Business Users & Clinical Stakeholders',
    detail: 'Executives · Medical Science Liaisons · Regulatory Officers · Physicians · Hospital Administrators',
    tag: 'Access Layer',
    tone: 'neutral'
  },
  {
    icon: <Sparkles className="h-4 w-4" />,
    title: 'Tier 2: AI Experience & Interface Layer',
    detail: 'Mobile Pre-Call Copilots · Regulatory Diff Portals · Executive Dashboards · Chatbot Hubs',
    tag: 'UI / API',
    tone: 'indigo'
  },
  {
    icon: <Workflow className="h-4 w-4" />,
    title: 'Tier 3: Autonomous Agents & Orchestration Layer',
    detail: 'Adverse Event Screener · Pan-African Gazette Scraper · Tender Scoring Agent · KOL Resolution',
    tag: 'Agentic Core',
    tone: 'emerald'
  },
  {
    icon: <Cpu className="h-4 w-4" />,
    title: 'Tier 4: Fine-Tuned Models & Foundation LLM Layer',
    detail: 'Medical BioBERT · Claude / Gemini / GPT Enterprise · Custom Graph Neural Networks',
    tag: 'Model Gateway',
    tone: 'indigo'
  },
  {
    icon: <Database className="h-4 w-4" />,
    title: 'Tier 5: Data, Vector Embeddings & Knowledge Vaults',
    detail: 'RAG Vector Stores · Cleaned Epidemiological Data · Regulatory Guidelines · Drug Registries',
    tag: 'Data Layer',
    tone: 'indigo'
  },
  {
    icon: <Server className="h-4 w-4" />,
    title: 'Tier 6: Existing Enterprise Systems & Records',
    detail: 'CRM (Veeva, Salesforce) · ERP (SAP, Oracle) · EHR (Hospital Systems) · Document Repositories',
    tag: 'System of Record',
    tone: 'neutral'
  }
];

const ArchitectureTier: React.FC<{ tier: (typeof ARCHITECTURE_TIERS)[number]; index: number }> = ({ tier, index }) => {
  const [open, setOpen] = useState(false);
  const t = TONE[tier.tone];
  return (
    <motion.li
      {...reveal(index)}
      className={`rounded-xl border bg-[#050505] ${t.border}`}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="mc-tap flex w-full items-center gap-3 rounded-xl p-3.5 text-left md:pointer-events-none md:items-start"
      >
        <span className={`mt-0.5 shrink-0 rounded-lg border p-2 ${t.icon}`}>{tier.icon}</span>
        <span className="min-w-0 flex-1">
          <span className={`block font-mono text-xs font-bold leading-snug ${t.title}`}>{tier.title}</span>
          <span className={`mt-0.5 block font-mono text-[11px] ${t.tag}`}>{tier.tag}</span>
          <span className={`${open ? 'block' : 'hidden'} mt-2 text-xs leading-relaxed text-[#9CA3AF] md:block`}>
            {tier.detail}
          </span>
        </span>
        <ChevronDown
          className={`h-4 w-4 shrink-0 text-[#9CA3AF] transition-transform duration-200 md:hidden ${open ? 'rotate-180' : ''}`}
        />
      </button>
    </motion.li>
  );
};

const SolutionDetail: React.FC<{ sol: AISolutionItem; onOpenIntake: () => void }> = ({ sol, onOpenIntake }) => {
  const [techOpen, setTechOpen] = useState(false);
  return (
    <div className="space-y-3">
      <div>
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-md border border-white/[0.08] bg-[#050505] px-2 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-[#9CA3AF]">
            {sol.category}
          </span>
          <span className={`rounded-md border px-2 py-1 font-mono text-[11px] ${STATUS_STYLE[sol.status] ?? 'border-white/[0.08] text-[#9CA3AF]'}`}>
            {sol.status}
          </span>
        </div>
        <h3 className="mt-3 text-xl font-semibold leading-snug text-white sm:text-2xl">{sol.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-[#9CA3AF]">{sol.description}</p>
      </div>

      {/* Outcome first */}
      <div className="rounded-xl border border-emerald-500/30 bg-[#050505] p-4">
        <div className="font-mono text-[11px] font-bold uppercase tracking-wider text-emerald-400">
          Projected operational & commercial outcome
        </div>
        <p className="mt-1 text-sm font-medium leading-relaxed text-white">{sol.projectedOutcome}</p>
      </div>

      <div className="rounded-xl border border-white/[0.08] bg-[#050505] p-4">
        <div className="font-mono text-[11px] font-bold uppercase tracking-wider text-amber-400">01. Business problem</div>
        <p className="mt-1 text-sm leading-relaxed text-[#E0E0E0]">{sol.businessProblem}</p>
      </div>

      {/* Technical trio: collapsed on phones/tablets, open on desktop */}
      <button
        type="button"
        onClick={() => setTechOpen((v) => !v)}
        aria-expanded={techOpen}
        className="mc-tap flex w-full items-center justify-between rounded-xl border border-white/[0.08] bg-[#050505] px-4 font-mono text-xs text-emerald-400 transition-colors hover:text-white active:scale-[0.98] lg:hidden"
      >
        <span>{techOpen ? 'Hide data, model & integration' : 'Show data, model & integration (3)'}</span>
        <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${techOpen ? 'rotate-180' : ''}`} />
      </button>

      <div className={`${techOpen ? 'grid' : 'hidden'} gap-3 lg:grid`}>
        <div className="rounded-xl border border-white/[0.08] bg-[#050505] p-4">
          <div className="font-mono text-[11px] font-bold uppercase tracking-wider text-indigo-400">02. Data ingestion feeds</div>
          <ul className="mt-2 space-y-1.5">
            {sol.dataInputs.map((inp, i) => (
              <li key={i} className="flex items-start gap-2 text-sm leading-relaxed text-[#E0E0E0]">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-indigo-500" />
                <span>{inp}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl border border-white/[0.08] bg-[#050505] p-4">
          <div className="font-mono text-[11px] font-bold uppercase tracking-wider text-emerald-400">03. AI analytics / model layer</div>
          <p className="mt-1 text-sm leading-relaxed text-[#E0E0E0]">{sol.aiAnalyticsLayer}</p>
        </div>
        <div className="rounded-xl border border-white/[0.08] bg-[#050505] p-4">
          <div className="font-mono text-[11px] font-bold uppercase tracking-wider text-indigo-400">04. Enterprise integration</div>
          <p className="mt-1 text-sm leading-relaxed text-[#E0E0E0]">{sol.workflowIntegration}</p>
        </div>
      </div>

      <div className="rounded-xl border border-white/[0.08] bg-[#050505] p-4">
        <div className="font-mono text-[11px] font-bold uppercase tracking-wider text-amber-400">05. Human interaction & review</div>
        <p className="mt-1 text-sm leading-relaxed text-[#E0E0E0]">{sol.humanInteraction}</p>
      </div>

      <div className="rounded-xl border border-emerald-500/30 bg-[#050505] p-4">
        <div className="flex items-center gap-1.5 font-mono text-[11px] font-bold uppercase tracking-wider text-emerald-400">
          <ShieldCheck className="h-3.5 w-3.5" />
          <span>06. Governance safeguards</span>
        </div>
        <p className="mt-1 text-sm leading-relaxed text-[#E0E0E0]">{sol.governanceSafeguards}</p>
      </div>

      <button
        type="button"
        onClick={onOpenIntake}
        className="mc-tap flex w-full items-center justify-center gap-2 rounded-xl border border-emerald-500/40 bg-[#0D0F17] px-4 font-mono text-sm font-semibold text-emerald-400 transition-[color,transform] duration-200 hover:text-white active:scale-[0.98]"
      >
        <span>Discuss this architecture</span>
        <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  );
};

export const AIEnterpriseSolutionsView: React.FC<AIEnterpriseSolutionsViewProps> = ({
  onOpenIntake,
  setActiveTab
}) => {
  const solutionsPillar = SERVICE_PILLARS.find(p => p.id === 'ai-solutions') || SERVICE_PILLARS[3];
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeSolutionId, setActiveSolutionId] = useState<string>(AI_SOLUTIONS_CATALOG[0].id);
  const [mobileOpenId, setMobileOpenId] = useState<string | null>(null);

  const categories = ['All', 'Life Sciences Core', 'Intelligence Platforms', 'Process Automation', 'Conversational & Engagement'];

  const filteredSolutions = AI_SOLUTIONS_CATALOG.filter(s =>
    selectedCategory === 'All' || s.category === selectedCategory
  );

  const activeSolution =
    filteredSolutions.find(s => s.id === activeSolutionId) || filteredSolutions[0] || AI_SOLUTIONS_CATALOG[0];

  const countFor = (cat: string) =>
    cat === 'All' ? AI_SOLUTIONS_CATALOG.length : AI_SOLUTIONS_CATALOG.filter(s => s.category === cat).length;

  const lifecycleSteps = [
    'Problem Framing', 'Use Case Discovery', 'Data Readiness', 'Architecture Design',
    'Secure Build', 'Enterprise Integration', 'Governed Deployment', 'Champion Training', 'ROI Measurement'
  ];

  const facts = [
    { value: String(AI_SOLUTIONS_CATALOG.length), label: 'Solution architectures in the catalog' },
    { value: String(categories.length - 1), label: 'Solution categories' },
    { value: String(ARCHITECTURE_TIERS.length), label: 'Architecture tiers, one governance layer' },
    { value: String(lifecycleSteps.length), label: 'Lifecycle stages, concept to ROI' }
  ];

  const selectSolution = (id: string) => {
    setActiveSolutionId(id);
    setMobileOpenId((cur) => (cur === id ? null : id));
  };

  return (
    <MotionConfig reducedMotion="user">
      <section className="mc-section bg-[#050505]" id="ai-solutions-section">
        <div className="mc-container">

          {/* 1. Intent */}
          <motion.header {...reveal()} className="max-w-3xl">
            <div className="mc-eyebrow !text-emerald-400">
              <Cpu className="h-3.5 w-3.5" />
              <span>Pillar 04 · Production Systems</span>
            </div>
            <h1 className="mc-h1 mt-3 font-light">
              AI Enterprise <span className="font-bold text-emerald-400">Solutions</span>
            </h1>
            <p className="mc-lead mt-4">
              End-to-end design, build, and integration of AI-powered systems that operationalize insight into everyday business workflows — from market intelligence platforms to patient- and customer-facing AI tools.
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

            {solutionsPillar.deliverables.length > 0 && (
              <div className="mt-6 rounded-2xl border border-emerald-500/30 bg-[#0A0A0A] p-5 sm:p-6">
                <div className="flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-wider text-emerald-400">
                  <FileText className="h-3.5 w-3.5" />
                  <span>What you receive</span>
                </div>
                <ul className="mt-4 grid gap-3 md:grid-cols-3">
                  {solutionsPillar.deliverables.map((del, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm leading-relaxed text-[#E0E0E0]">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                      <span>{del}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* 3. Solution catalog (explorer) */}
          <div className="mt-12 sm:mt-16">
            <div className="mc-eyebrow !text-emerald-400">Solution catalog</div>
            <h2 className="mc-h2 mt-2 font-light">
              Enterprise AI <span className="font-bold text-emerald-400">Solution Catalog</span>
            </h2>
            <p className="mt-2 text-sm text-[#9CA3AF]">
              Purpose-engineered solution architectures for Life Sciences and enterprise transformation.
            </p>

            {/* Category filter rail */}
            <div
              role="group"
              aria-label="Filter solutions by category"
              className="mt-5 flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {categories.map((cat) => {
                const active = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    aria-pressed={active}
                    onClick={() => {
                      setSelectedCategory(cat);
                      setMobileOpenId(null);
                    }}
                    className={`mc-tap shrink-0 rounded-xl border px-4 font-mono text-xs transition-colors duration-200 active:scale-[0.98] ${
                      active
                        ? 'border-emerald-500/60 bg-[#0D0F17] font-semibold text-emerald-400'
                        : 'border-white/[0.08] bg-[#0A0A0A] text-[#9CA3AF] hover:text-white'
                    }`}
                  >
                    {cat} <span className="text-[#9CA3AF]">({countFor(cat)})</span>
                  </button>
                );
              })}
            </div>

            <div className="mt-4 grid gap-4 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] lg:items-start">
              {/* List (accordion on phones, master list on desktop) */}
              <ul className="space-y-2">
                {filteredSolutions.map((sol) => {
                  const mobileOpen = mobileOpenId === sol.id;
                  const desktopActive = activeSolution.id === sol.id;
                  return (
                    <li key={sol.id}>
                      <button
                        type="button"
                        id={`solution-card-${sol.id}`}
                        onClick={() => selectSolution(sol.id)}
                        aria-expanded={mobileOpen}
                        className={`mc-tap w-full rounded-2xl border p-4 text-left transition-colors duration-200 active:scale-[0.98] ${
                          mobileOpen ? 'border-emerald-500/60 bg-[#0D0F17]' : 'border-white/[0.08] bg-[#0A0A0A]'
                        } ${
                          desktopActive
                            ? 'lg:border-emerald-500/60 lg:bg-[#0D0F17]'
                            : 'lg:border-white/[0.08] lg:bg-[#0A0A0A] lg:hover:border-white/20'
                        }`}
                      >
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="rounded-md border border-white/[0.08] bg-[#050505] px-2 py-0.5 font-mono text-[11px] text-[#9CA3AF]">
                            {sol.category}
                          </span>
                          <span className={`rounded-md border px-2 py-0.5 font-mono text-[11px] ${STATUS_STYLE[sol.status] ?? 'border-white/[0.08] text-[#9CA3AF]'}`}>
                            {sol.status}
                          </span>
                        </div>
                        <div className="mt-2 flex items-start justify-between gap-3">
                          <h4 className="text-sm font-semibold leading-snug text-white">{sol.title}</h4>
                          <ChevronDown
                            className={`mt-0.5 h-4 w-4 shrink-0 text-[#9CA3AF] transition-transform duration-200 lg:hidden ${mobileOpen ? 'rotate-180' : ''}`}
                          />
                        </div>
                        <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-[#9CA3AF]">{sol.description}</p>
                      </button>

                      <AnimatePresence initial={false}>
                        {mobileOpen && (
                          <motion.div
                            key="inline"
                            initial={{ opacity: 0, y: -4 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2, ease: EASE }}
                            className="mt-2 rounded-2xl border border-white/[0.08] bg-[#0A0A0A] p-4 lg:hidden"
                          >
                            <SolutionDetail sol={sol} onOpenIntake={onOpenIntake} />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </li>
                  );
                })}
              </ul>

              {/* Desktop detail panel */}
              <div className="hidden lg:block">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={activeSolution.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2, ease: EASE }}
                    className="sticky top-24 rounded-2xl border border-white/[0.08] bg-[#0A0A0A] p-6"
                  >
                    <SolutionDetail sol={activeSolution} onOpenIntake={onOpenIntake} />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* 4. How it is engineered */}
          <div className="mt-12 sm:mt-16">
            <div className="mc-eyebrow !text-emerald-400">Architecture blueprint · governed, secure, tenant-isolated</div>
            <h2 className="mc-h2 mt-2 font-light">
              Layered enterprise <span className="font-bold text-emerald-400">AI system architecture</span>
            </h2>

            <ol className="mt-6 space-y-2">
              {ARCHITECTURE_TIERS.map((tier, i) => (
                <ArchitectureTier key={tier.title} tier={tier} index={i} />
              ))}
              <motion.li
                {...reveal(ARCHITECTURE_TIERS.length)}
                className="flex flex-col gap-3 rounded-xl border border-indigo-500/35 bg-[#0D0F17] p-4 md:flex-row md:items-center md:justify-between"
              >
                <div className="flex items-start gap-3">
                  <span className="shrink-0 rounded-lg border border-indigo-500/35 bg-[#050505] p-2 text-indigo-400">
                    <ShieldCheck className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="font-mono text-xs font-bold text-white">SPANNING GOVERNANCE & RESPONSIBLE AI LAYER</div>
                    <div className="mt-1 text-xs leading-relaxed text-[#9CA3AF]">
                      Data Privacy Protection · Zero Consumer Model Training · Cryptographic Audit Trails · Human-in-the-Loop Sign-off
                    </div>
                  </div>
                </div>
                <span className="self-start rounded-lg border border-indigo-500/35 bg-[#050505] px-2.5 py-1 font-mono text-[11px] font-bold text-indigo-400 md:self-center">
                  100% AUDITABLE
                </span>
              </motion.li>
            </ol>

            <div className="mt-10">
              <div className="font-mono text-[11px] font-bold uppercase tracking-wider text-emerald-400">
                Engineering lifecycle: proof of concept to governed production
              </div>
              <ol className="mt-3 grid grid-cols-3 gap-2 sm:grid-cols-5 lg:grid-cols-9">
                {lifecycleSteps.map((step, idx) => (
                  <motion.li
                    key={step}
                    {...reveal(idx)}
                    className="rounded-xl border border-white/[0.08] bg-[#0A0A0A] p-2.5 text-center"
                  >
                    <div className="font-mono text-[11px] font-bold text-emerald-400">0{idx + 1}</div>
                    <div className="mt-0.5 text-xs leading-snug text-[#E0E0E0]">{step}</div>
                  </motion.li>
                ))}
              </ol>
            </div>
          </div>

          {/* 5. Single CTA + pairs with */}
          <div className="mt-12 sm:mt-16">
            <motion.div
              {...reveal()}
              className="rounded-2xl border border-indigo-500/35 bg-[#0A0A0A] p-6 sm:p-8 md:flex md:items-center md:justify-between md:gap-8"
            >
              <div className="max-w-xl">
                <h2 className="text-xl font-semibold text-white sm:text-2xl">Put an AI system into production</h2>
                <p className="mt-2 text-sm leading-relaxed text-[#9CA3AF]">
                  Start from a catalog architecture or a blank page. Every build is governed, secure and tenant-isolated.
                </p>
              </div>
              <button
                type="button"
                onClick={onOpenIntake}
                className="mc-tap mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 font-mono text-sm font-semibold text-white transition-[background-color,transform] duration-200 hover:bg-indigo-500 active:scale-[0.98] md:mt-0 md:w-auto md:shrink-0"
              >
                <span>Deploy Solution Architecture</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </motion.div>

            {solutionsPillar.intersections && solutionsPillar.intersections.length > 0 && (
              <div className="mt-4">
                <div className="font-mono text-[11px] uppercase tracking-wider text-[#9CA3AF]">Pairs with</div>
                <ul className="mt-2 grid gap-2 md:grid-cols-3">
                  {solutionsPillar.intersections.map((x) => {
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
