import React, { useState } from 'react';
import { AnimatePresence, MotionConfig, motion } from 'motion/react';
import { SERVICE_PILLARS, AI_SOLUTIONS_CATALOG } from '../data/mindcraftData';
import { AISolutionItem, NavTab } from '../types';
import {
  Cpu,
  Sparkles,
  ArrowRight,
  ChevronDown,
  ShieldCheck,
  Database,
  Workflow,
  Users,
  Server,
  Compass,
  LineChart,
  MessageSquare,
  Cog,
  Microscope
} from 'lucide-react';
import { ContextualCTA, DeepDive, EASE, RelatedLinks, SectionHeader, reveal } from './ui/primitives';
import { ArtImage } from './ui/ArtImage';
import { ArtCaption, HeroCopy, HeroSection, Scrim } from './ui/Hero';
import { MarkList, scrollToId } from './PillarParts';

interface AIEnterpriseSolutionsViewProps {
  onOpenIntake: () => void;
  setActiveTab: (tab: NavTab) => void;
}

const STATUS_STYLE: Record<string, string> = {
  'Production Architecture Pattern': 'border-emerald-500/30 text-emerald-400',
  'Demonstration Prototype': 'border-amber-500/30 text-amber-400',
  'Illustrative Blueprint': 'border-indigo-500/35 text-indigo-400'
};

const STATUS_LABEL: Record<string, string> = {
  'Production Architecture Pattern': 'Architecture pattern',
  'Demonstration Prototype': 'Demonstration concept',
  'Illustrative Blueprint': 'Illustrative blueprint'
};

type TierTone = 'neutral' | 'indigo' | 'emerald';

const TIER_TONE: Record<TierTone, { border: string; icon: string; title: string; tag: string }> = {
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

const ARCHITECTURE_TIERS: { icon: React.ReactNode; title: string; detail: string; tag: string; tone: TierTone }[] = [
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

const LIFECYCLE_STEPS = [
  'Problem Framing', 'Use Case Discovery', 'Data Readiness', 'Architecture Design',
  'Secure Build', 'Enterprise Integration', 'Governed Deployment', 'Champion Training', 'ROI Measurement'
];

/** The five solution groups exactly as the corporate profile names them. */
const GROUPS = [
  {
    name: 'AI Strategy & Solution Architecture',
    icon: Compass,
    what: 'Enterprise AI strategy and use-case prioritization, solution architecture, vendor and technology stack selection, and data strategy and governance advisory.',
    why: 'Aligns every build to business value and data readiness before development starts.',
    outcome: 'Prioritized use cases and an architecture ready to build.'
  },
  {
    name: 'Custom AI & Analytics Solutions',
    icon: LineChart,
    what: 'Custom AI/ML for commercial, operational and clinical use cases, AI-powered market intelligence and monitoring platforms, BI dashboards and predictive analytics.',
    why: 'Turns insight into tools that sales, finance and operations teams use daily.',
    outcome: 'Dashboards and platforms embedded in how teams work.'
  },
  {
    name: 'Conversational AI & Engagement Tools',
    icon: MessageSquare,
    what: 'AI chatbots and virtual assistants for patient engagement, customer service and field-force support, plus call center and helpdesk augmentation.',
    why: 'Extends reach to patients, customers and field teams in banking, healthcare and consumer-facing organizations.',
    outcome: 'Assistants that serve patients, customers and field forces.'
  },
  {
    name: 'Process Automation',
    icon: Cog,
    what: 'RPA combined with AI for document processing, claims, invoicing and compliance workflows, integrated with existing CRM, ERP and enterprise systems.',
    why: 'Embeds intelligence into daily operations without replacing the systems already in place.',
    outcome: 'Faster, more accurate document and compliance workflows.'
  },
  {
    name: 'Life Sciences-Specific AI Solutions',
    icon: Microscope,
    what: 'AI-assisted pharmacovigilance and adverse-event monitoring, regulatory intelligence automation across African and international regulators, and AI-powered KOL and market-access analytics.',
    why: 'Built on MindCraft’s Life Sciences heritage for pharmaceutical and medical device clients.',
    outcome: 'Safety, regulatory and stakeholder intelligence on tap.'
  }
];

const DELIVERABLES = [
  'A prioritised AI use-case and solution architecture.',
  'Data, governance and integration requirements for the agreed scope.',
  'Implementation documentation, user guidance and adoption support where required.'
];

const CATEGORIES = ['All', 'Life Sciences Core', 'Intelligence Platforms', 'Process Automation', 'Conversational & Engagement'];
const COLLAPSED_COUNT = 3;

const SolutionDetail: React.FC<{ sol: AISolutionItem; onOpenIntake: () => void }> = ({ sol, onOpenIntake }) => {
  const [techOpen, setTechOpen] = useState(false);
  return (
    <div className="space-y-3">
      <div>
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-md border border-white/[0.08] bg-[#050505] px-2 py-1 text-xs font-semibold text-[#9CA3AF]">
            {sol.category}
          </span>
          <span className={`rounded-md border px-2 py-1 tabular-nums text-[11px] ${STATUS_STYLE[sol.status] ?? 'border-white/[0.08] text-[#9CA3AF]'}`}>
            {STATUS_LABEL[sol.status] ?? sol.status}
          </span>
        </div>
        <h3 className="mt-3 text-xl font-semibold leading-snug text-white sm:text-2xl">{sol.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-[#9CA3AF]">{sol.description}</p>
      </div>

      <div className="rounded-xl border border-emerald-500/30 bg-[#050505] p-4">
        <h4 className="text-xs font-semibold text-emerald-400">Illustrative potential outcome</h4>
        <p className="mt-1 text-sm font-medium leading-relaxed text-white">{sol.projectedOutcome}</p>
      </div>

      <div className="rounded-xl border border-white/[0.08] bg-[#050505] p-4">
        <h4 className="text-xs font-semibold text-amber-400">01. Business problem</h4>
        <p className="mt-1 text-sm leading-relaxed text-[#E0E0E0]">{sol.businessProblem}</p>
      </div>

      {/* Technical trio: collapsed on phones/tablets, open on desktop */}
      <button
        type="button"
        onClick={() => setTechOpen((v) => !v)}
        aria-expanded={techOpen}
        aria-controls={`tech-${sol.id}`}
        className="mc-tap flex w-full items-center justify-between rounded-xl border border-white/[0.08] bg-[#050505] px-4 tabular-nums text-xs text-emerald-400 transition-colors hover:text-white active:scale-[0.98] lg:hidden"
      >
        <span>{techOpen ? 'Hide data, model & integration' : 'Show data, model & integration (3)'}</span>
        <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${techOpen ? 'rotate-180' : ''}`} />
      </button>

      <div id={`tech-${sol.id}`} className={`${techOpen ? 'grid' : 'hidden'} gap-3 lg:grid`}>
        <div className="rounded-xl border border-white/[0.08] bg-[#050505] p-4">
          <h4 className="text-xs font-semibold text-indigo-400">02. Data ingestion feeds</h4>
          <ul className="mt-2 space-y-1.5">
            {sol.dataInputs.map((inp) => (
              <li key={inp} className="flex items-start gap-2 text-sm leading-relaxed text-[#E0E0E0]">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-indigo-500" aria-hidden="true" />
                <span>{inp}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl border border-white/[0.08] bg-[#050505] p-4">
          <h4 className="text-xs font-semibold text-emerald-400">03. AI analytics / model layer</h4>
          <p className="mt-1 text-sm leading-relaxed text-[#E0E0E0]">{sol.aiAnalyticsLayer}</p>
        </div>
        <div className="rounded-xl border border-white/[0.08] bg-[#050505] p-4">
          <h4 className="text-xs font-semibold text-indigo-400">04. Enterprise integration</h4>
          <p className="mt-1 text-sm leading-relaxed text-[#E0E0E0]">{sol.workflowIntegration}</p>
        </div>
      </div>

      <div className="rounded-xl border border-white/[0.08] bg-[#050505] p-4">
        <h4 className="text-xs font-semibold text-amber-400">05. Human interaction & review</h4>
        <p className="mt-1 text-sm leading-relaxed text-[#E0E0E0]">{sol.humanInteraction}</p>
      </div>

      <div className="rounded-xl border border-emerald-500/30 bg-[#050505] p-4">
        <h4 className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400">
          <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
          <span>06. Governance safeguards</span>
        </h4>
        <p className="mt-1 text-sm leading-relaxed text-[#E0E0E0]">{sol.governanceSafeguards}</p>
      </div>

      <button
        type="button"
        onClick={onOpenIntake}
        className="mc-tap flex w-full items-center justify-center gap-2 rounded-xl border border-emerald-500/40 bg-[#0D0F17] px-4 tabular-nums text-sm font-semibold text-emerald-400 transition-[color,transform] duration-200 hover:text-white active:scale-[0.98]"
      >
        <span>Discuss this architecture</span>
        <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  );
};

export const AIEnterpriseSolutionsView: React.FC<AIEnterpriseSolutionsViewProps> = ({ onOpenIntake, setActiveTab }) => {
  const solutionsPillar = SERVICE_PILLARS.find((p) => p.id === 'ai-solutions') || SERVICE_PILLARS[3];
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeSolutionId, setActiveSolutionId] = useState<string>(AI_SOLUTIONS_CATALOG[0].id);
  const [mobileOpenId, setMobileOpenId] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);

  const filteredSolutions = AI_SOLUTIONS_CATALOG.filter((s) => selectedCategory === 'All' || s.category === selectedCategory);
  const activeSolution = filteredSolutions.find((s) => s.id === activeSolutionId) || filteredSolutions[0] || AI_SOLUTIONS_CATALOG[0];
  const countFor = (cat: string) => (cat === 'All' ? AI_SOLUTIONS_CATALOG.length : AI_SOLUTIONS_CATALOG.filter((s) => s.category === cat).length);
  const hiddenCount = Math.max(0, filteredSolutions.length - COLLAPSED_COUNT);

  const selectSolution = (id: string) => {
    setActiveSolutionId(id);
    setMobileOpenId((cur) => (cur === id ? null : id));
  };

  return (
    <MotionConfig reducedMotion="user">
      <HeroSection id="ai-solutions-section" labelledBy="ai-solutions-title" className="mc-art-bleed min-h-[35rem] bg-[#050505]">
        <ArtImage
          name="solutions-operations"
          alt="Operations team working in a control room"
          sizes="100vw"
          position="object-[70%_50%] lg:object-[64%_50%]"
          priority
        />
        <Scrim background="linear-gradient(90deg, #050505 0%, rgba(5,5,5,.9) 47%, rgba(5,5,5,.44) 74%, rgba(5,5,5,.18) 100%)" />
        <Scrim background="linear-gradient(180deg, rgba(5,5,5,.62) 0%, rgba(5,5,5,0) 24%, rgba(5,5,5,0) 68%, #050505 100%)" />
        <div className="mc-container mc-art-copy flex min-h-[28rem] items-end py-14 sm:py-20 lg:min-h-[34rem] lg:py-24">
          <HeroCopy
            id="ai-solutions-title"
            meta="AI enterprise solutions"
            title={<>Applied AI, <em className="font-normal text-emerald-300">responsibly.</em></>}
            lead="AI strategy, analytics, automation and integration—grounded in governance and real work."
            actions={
              <>
                <button type="button" onClick={onOpenIntake} className="mc-tap inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-400 px-5 text-sm font-semibold text-[#06150f] transition-[background-color,transform] hover:bg-emerald-300 active:scale-[0.98]">
                  Discuss an AI need <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </button>
                <button type="button" onClick={() => scrollToId('ai-capabilities')} className="mc-tap inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-black/35 px-5 text-sm font-medium text-white transition-[background-color,transform] hover:bg-white/10 active:scale-[0.98]">
                  Explore solution groups
                </button>
              </>
            }
          />
        </div>
        <ArtCaption className="absolute bottom-5 right-4 z-10 sm:right-8">Operations illustration</ArtCaption>
      </HeroSection>

      <section className="mc-section">
        <div className="mc-container">
          {/* A/B. Capability groups, then deliverables */}
          <div id="ai-capabilities">
            <SectionHeader
              title={<>From strategy to responsible adoption.</>}
              lead="Five connected areas for framing, building and integrating enterprise AI work."
            />
            <ul className="border-y border-white/[0.1]">
              {GROUPS.map((g, i) => (
                <li
                  key={g.name}
                  className="grid gap-5 border-b border-white/[0.1] py-6 last:border-b-0 md:grid-cols-[2.25rem_minmax(0,1fr)_minmax(15rem,.7fr)] md:gap-8"
                >
                  <span className="font-mono text-xs text-emerald-400">0{i + 1}</span>
                  <div>
                    <h3 className="flex items-center gap-2 text-lg font-medium text-white">
                      <g.icon className="h-4 w-4 text-emerald-300" aria-hidden="true" />
                      {g.name}
                    </h3>
                    <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-white/70">{g.what}</p>
                  </div>
                  <DeepDive tone="emerald" title="Engagement detail" hint={g.outcome}>
                    <p className="text-sm leading-relaxed text-white/65">{g.why}</p>
                    <MarkList
                      className="mt-4 space-y-2"
                      marker="bg-emerald-400"
                      items={solutionsPillar.capabilities[i]?.bulletPoints ?? []}
                    />
                  </DeepDive>
                </li>
              ))}
            </ul>
            <aside className="mt-10 border-t border-emerald-500/30 pt-5">
              <p className="mc-eyebrow text-emerald-300">Potential engagement outputs</p>
              <ul className="mt-4 grid gap-4 md:grid-cols-3">
                {DELIVERABLES.map((item) => (
                  <li key={item} className="border-t border-white/[0.1] pt-3 text-sm leading-relaxed text-white/70">{item}</li>
                ))}
              </ul>
            </aside>
          </div>

        </div>
      </section>

      <section className="mc-section">
        <div className="mc-container">
          {/* Explorer: solution catalog */}
          <div id="ai-catalog">
            <SectionHeader
              title={<>Illustrative AI solution patterns.</>}
              lead="Examples of how strategy, data, integration, human review and governance can come together around a business need."
            />

            <div
              role="group"
              aria-label="Filter solutions by category"
              className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {CATEGORIES.map((cat) => {
                const active = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    aria-pressed={active}
                    onClick={() => {
                      setSelectedCategory(cat);
                      setMobileOpenId(null);
                      setShowAll(false);
                    }}
                    className={`mc-tap shrink-0 rounded-xl border px-4 font-medium text-[13px] transition-colors duration-200 active:scale-[0.98] ${
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
              <div>
                <ul className="space-y-2">
                  {filteredSolutions.map((sol, idx) => {
                    const mobileOpen = mobileOpenId === sol.id;
                    const desktopActive = activeSolution.id === sol.id;
                    const hideOnPhone = !showAll && idx >= COLLAPSED_COUNT;
                    return (
                      <li key={sol.id} className={hideOnPhone ? 'hidden lg:block' : undefined}>
                        <button
                          type="button"
                          id={`solution-card-${sol.id}`}
                          onClick={() => selectSolution(sol.id)}
                          aria-expanded={mobileOpen}
                          aria-controls={`solution-detail-${sol.id}`}
                          className={`mc-tap w-full rounded-2xl border p-4 text-left transition-colors duration-200 active:scale-[0.98] ${
                            mobileOpen ? 'border-emerald-500/60 bg-[#0D0F17]' : 'border-white/[0.08] bg-[#0A0A0A]'
                          } ${
                            desktopActive
                              ? 'lg:border-emerald-500/60 lg:bg-[#0D0F17]'
                              : 'lg:border-white/[0.08] lg:bg-[#0A0A0A] lg:hover:border-white/20'
                          }`}
                        >
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="hidden rounded-md border border-white/[0.08] bg-[#050505] px-2 py-0.5 tabular-nums text-[11px] text-[#9CA3AF] lg:inline">
                              {/* category is shown in the filter rail and detail on phones */}
                              {sol.category}
                            </span>
                            <span className={`rounded-md border px-2 py-0.5 tabular-nums text-[11px] ${STATUS_STYLE[sol.status] ?? 'border-white/[0.08] text-[#9CA3AF]'}`}>
                              {STATUS_LABEL[sol.status] ?? sol.status}
                            </span>
                          </div>
                          <div className="mt-2 flex items-start justify-between gap-3">
                            <h3 className="text-sm font-semibold leading-snug text-white">{sol.title}</h3>
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
                              id={`solution-detail-${sol.id}`}
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

                {!showAll && hiddenCount > 0 && (
                  <button
                    type="button"
                    onClick={() => setShowAll(true)}
                    className="mc-tap mt-2 flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 tabular-nums text-xs text-white/80 transition-[background-color,transform] duration-150 hover:bg-white/10 active:scale-[0.98] lg:hidden"
                  >
                    <span>Show all {filteredSolutions.length} solutions</span>
                    <ChevronDown className="h-4 w-4 text-emerald-400" />
                  </button>
                )}
              </div>

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

          {/* C. Deep dives: architecture + lifecycle */}
          <div className="mt-6 space-y-3">
            <DeepDive
              tone="emerald"
              title="Reference architecture: six layers, one governance layer"
              hint="Illustrative layered enterprise AI system"
            >
              <ol className="mt-3 space-y-2">
                {ARCHITECTURE_TIERS.map((tier) => {
                  const t = TIER_TONE[tier.tone];
                  return (
                    <li key={tier.title} className={`flex items-start gap-3 rounded-xl border bg-[#050505] p-3.5 ${t.border}`}>
                      <span className={`mt-0.5 shrink-0 rounded-lg border p-2 ${t.icon}`}>{tier.icon}</span>
                      <span className="min-w-0 flex-1">
                        <span className={`block tabular-nums text-xs font-bold leading-snug ${t.title}`}>{tier.title}</span>
                        <span className={`mt-0.5 block tabular-nums text-[11px] ${t.tag}`}>{tier.tag}</span>
                        <span className="mt-1.5 block text-xs leading-relaxed text-[#9CA3AF]">{tier.detail}</span>
                      </span>
                    </li>
                  );
                })}
                <li className="flex items-start gap-3 rounded-xl border border-indigo-500/35 bg-[#0D0F17] p-4">
                  <span className="shrink-0 rounded-lg border border-indigo-500/35 bg-[#050505] p-2 text-indigo-400">
                    <ShieldCheck className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[13px] font-semibold text-white">Governance and responsible AI layer, spanning every layer</span>
                    <span className="mt-1 block text-xs leading-relaxed text-[#9CA3AF]">
                      Data privacy · Ethics · Governance · Human-in-the-loop sign-off
                    </span>
                  </span>
                </li>
              </ol>
            </DeepDive>

            <DeepDive
              tone="emerald"
              title="Engineering lifecycle: nine stages from framing to ROI"
              hint="Proof of concept to governed production"
            >
              <ol className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-5">
                {LIFECYCLE_STEPS.map((step, idx) => (
                  <li key={step} className="flex items-start gap-2.5 rounded-xl border border-white/[0.08] bg-[#050505] p-3">
                    <span className="tabular-nums text-[11px] font-bold text-emerald-400">0{idx + 1}</span>
                    <span className="text-xs leading-snug text-[#E0E0E0]">{step}</span>
                  </li>
                ))}
              </ol>
            </DeepDive>
          </div>

        </div>
      </section>

      <section className="mc-section" aria-label="Next steps">
        <div className="mc-container">
          {/* One CTA, then related */}
          <div className="space-y-10 md:space-y-14">
            <motion.div {...reveal}>
              <ContextualCTA
                title="Put an AI system into production"
                body="Start from a catalog architecture or a blank page. Every build rests on data privacy, ethics and governance."
                primaryLabel="Deploy Solution Architecture"
                onPrimary={onOpenIntake}
              />
            </motion.div>
            <RelatedLinks
              title="Pairs with"
              items={[
                { label: 'Market Research', desc: 'Turn periodic studies into continuous intelligence monitoring.', onClick: () => setActiveTab('market-research'), tone: 'sky' },
                { label: 'AI Training & Literacy', desc: 'Make sure the people using the system adopt it.', onClick: () => setActiveTab('ai-training'), tone: 'amber' },
                { label: 'Localization', desc: 'Adapt solutions to each country’s regulatory and market context.', onClick: () => setActiveTab('localization'), tone: 'emerald' },
                { label: 'Senior expertise', desc: 'The Life Sciences experience behind these solutions.', onClick: () => setActiveTab('senior-expertise'), tone: 'indigo' }
              ]}
            />
          </div>
        </div>
      </section>
    </MotionConfig>
  );
};
