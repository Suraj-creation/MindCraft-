import React, { useState } from 'react';
import { AnimatePresence, MotionConfig, motion } from 'motion/react';
import { SERVICE_PILLARS } from '../data/mindcraftData';
import { NavTab } from '../types';
import { ContextualCTA, DeepDive, EASE, RelatedLinks, reveal } from './ui/primitives';
import { Compass, CheckCircle2, ArrowRight, ChevronDown, FileText } from 'lucide-react';

interface BusinessConsultingPillarProps {
  onOpenIntake: () => void;
  setActiveTab: (tab: NavTab) => void;
}

const PILLAR_TABS: Record<string, NavTab> = {
  'Business Consulting': 'consulting',
  'Market Research': 'market-research',
  'AI Training': 'ai-training',
  'AI Enterprise Solutions': 'ai-solutions'
};

const levelOf = (score: string) => Number(score.match(/\d/)?.[0] ?? 0);

const LevelMeter: React.FC<{ score: string }> = ({ score }) => {
  const level = levelOf(score);
  return (
    <span className="flex items-center gap-1" aria-hidden="true">
      {[1, 2, 3, 4, 5].map((n) => (
        <span key={n} className={`h-1 w-4 rounded-full ${n <= level ? 'bg-teal-600' : 'bg-white/10'}`} />
      ))}
    </span>
  );
};

interface DimensionShape {
  name: string;
  score: string;
  assessment: string;
  blindspots: string;
  intervention: string;
}

const DimensionDetail: React.FC<{ dim: DimensionShape }> = ({ dim }) => (
  <div className="space-y-3">
    <div className="flex flex-wrap items-center justify-between gap-2">
      <h3 className="font-mono text-sm font-bold text-white">{dim.name}</h3>
      <span className="inline-flex items-center gap-2 rounded-lg border border-teal-600/40 bg-[#050505] px-2.5 py-1 font-mono text-xs text-teal-400">
        Benchmark: {dim.score}
        <LevelMeter score={dim.score} />
      </span>
    </div>
    <div className="rounded-xl border border-white/[0.08] bg-[#050505] p-4">
      <div className="mb-1 font-mono text-[11px] font-bold uppercase tracking-wider text-teal-400">Diagnostic inquiry</div>
      <p className="text-sm leading-relaxed text-[#E0E0E0]">{dim.assessment}</p>
    </div>
    <div className="rounded-xl border border-amber-500/30 bg-[#050505] p-4">
      <div className="mb-1 font-mono text-[11px] font-bold uppercase tracking-wider text-amber-400">Common blindspot</div>
      <p className="text-sm leading-relaxed text-[#E0E0E0]">{dim.blindspots}</p>
    </div>
    <div className="rounded-xl border border-emerald-500/30 bg-[#050505] p-4">
      <div className="mb-1 font-mono text-[11px] font-bold uppercase tracking-wider text-emerald-400">MindCraft intervention</div>
      <p className="text-sm leading-relaxed text-[#E0E0E0]">{dim.intervention}</p>
    </div>
  </div>
);

/** Capability card: summary always visible, scope opens on demand. */
const CapabilityRow: React.FC<{
  index: number;
  title: string;
  description: string;
  bullets: string[];
  open: boolean;
  onToggle: () => void;
}> = ({ index, title, description, bullets, open, onToggle }) => {
  const panelId = `cap-scope-${index}`;
  return (
    <motion.li
      {...reveal}
      transition={{ ...reveal.transition, delay: Math.min(index, 4) * 0.05 }}
      className={`flex flex-col rounded-2xl border bg-[#0A0A0A] p-5 transition-colors duration-200 ${open ? 'border-teal-500/40' : 'border-white/10'}`}
    >
      <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-teal-400">Capability 0{index + 1}</span>
      <h3 className="mt-1 text-base font-semibold text-white">{title}</h3>
      <p className="mt-1.5 text-sm leading-snug text-white/70">{description}</p>

      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={panelId}
        className="mc-tap -mx-2 mt-2 flex items-center justify-between rounded-lg px-2 text-xs font-mono text-teal-400 transition-colors hover:text-white active:scale-[0.98]"
      >
        <span>{open ? 'Hide scope' : `Scope: ${bullets.length} items`}</span>
        <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} aria-hidden="true" />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.ul
            id={panelId}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: EASE }}
            className="space-y-2 overflow-hidden border-t border-white/10 pt-3"
          >
            {bullets.map((bp) => (
              <li key={bp} className="flex items-start gap-2 text-[13px] leading-relaxed text-[#E0E0E0]">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-teal-500" aria-hidden="true" />
                <span>{bp}</span>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.li>
  );
};

const MATURITY_DIMENSIONS: DimensionShape[] = [
  {
    name: '01. Strategy & Vision',
    score: 'Level 2 / 5',
    assessment: 'Is AI adoption anchored directly to measurable business growth, margin retention, or market expansion goals?',
    blindspots: 'Executing isolated proof-of-concept experiments without executive sponsorship or clear ROI hurdles.',
    intervention: 'Formulate an Enterprise AI & Growth Strategy with executive steering committee governance and 24-month roadmap.'
  },
  {
    name: '02. Leadership & Culture',
    score: 'Level 1 / 5',
    assessment: 'Do executive leaders and middle managers understand practical AI mechanics and lead change proactively?',
    blindspots: 'Fear of workforce replacement, unmanaged hype expectations, or resistance from senior clinical/technical staff.',
    intervention: 'Deliver structured C-suite AI briefings and middle management change enablement workshops.'
  },
  {
    name: '03. Data Readiness & Assets',
    score: 'Level 2 / 5',
    assessment: 'Is enterprise data accessible, clean, categorized, and protected by role-based access control?',
    blindspots: 'Data fragmented across unlinked spreadsheets, siloed CRM/ERP instances, or unindexed historical documents.',
    intervention: 'Establish a central governed data catalog and build pre-processing ingestion pipelines.'
  },
  {
    name: '04. Technology & Infrastructure',
    score: 'Level 3 / 5',
    assessment: 'Does the enterprise possess secure cloud/hybrid infrastructure capable of hosting private LLM gateways and API pipelines?',
    blindspots: 'Employees utilizing unsecured public consumer AI accounts with sensitive corporate data.',
    intervention: 'Deploy a private enterprise AI gateway with tenant isolation and cryptographic audit trails.'
  },
  {
    name: '05. Workforce Capability',
    score: 'Level 2 / 5',
    assessment: 'Have frontline teams been trained on function-specific prompt engineering and validation protocols?',
    blindspots: 'Generic prompting resulting in inconsistent outputs and low daily workflow stickiness.',
    intervention: 'Execute a 6-week applied AI accelerator with verified prompt libraries and internal champion certification.'
  },
  {
    name: '06. Process & SOP Integration',
    score: 'Level 1 / 5',
    assessment: 'Are AI outputs formally integrated into daily standard operating procedures with human verification gates?',
    blindspots: 'AI outputs treated as discretionary informal notes rather than auditable business artifacts.',
    intervention: 'Redesign core business SOPs to embed AI drafting with mandatory human-in-the-loop sign-off.'
  },
  {
    name: '07. Governance & Ethics',
    score: 'Level 2 / 5',
    assessment: 'Are data privacy policies, local Data Protection Act compliance, and copyright safeguards enforced?',
    blindspots: 'Zero formal enterprise AI policy, risking severe regulatory non-compliance penalties.',
    intervention: 'Institute a formal Enterprise Responsible AI Policy and ethical review board.'
  },
  {
    name: '08. Use Case Prioritization',
    score: 'Level 3 / 5',
    assessment: 'Are AI use cases ranked by business value vs technical feasibility with clear success metrics?',
    blindspots: 'Attempting overly complex, unfeasible AI projects before securing quick-win operational momentum.',
    intervention: 'Prioritize top 3 high-impact, low-complexity use cases for rapid 90-day deployment.'
  }
];

export const BusinessConsultingPillar: React.FC<BusinessConsultingPillarProps> = ({ onOpenIntake, setActiveTab }) => {
  const pillar = SERVICE_PILLARS.find((p) => p.id === 'consulting') || SERVICE_PILLARS[0];
  const [openCap, setOpenCap] = useState<number | null>(null);
  const [activeDimension, setActiveDimension] = useState(0);
  const current = MATURITY_DIMENSIONS[activeDimension];

  const related = [
    ...(pillar.intersections ?? []).map((x) => ({
      label: x.withPillar,
      desc: x.integratedValue.split(':')[0],
      onClick: () => PILLAR_TABS[x.withPillar] && setActiveTab(PILLAR_TABS[x.withPillar]),
      tone: 'teal' as const
    })),
    { label: 'Localization', desc: 'From global strategy to local result', onClick: () => setActiveTab('localization'), tone: 'emerald' as const },
    { label: 'Senior expertise', desc: 'The senior experience behind our advisory', onClick: () => setActiveTab('senior-expertise') }
  ];

  return (
    <MotionConfig reducedMotion="user">
      <section className="mc-section bg-[#050505]" id="consulting-section" aria-labelledby="consulting-title">
        <div className="mc-container space-y-9 md:space-y-12">
          {/* A. Intent + CTA */}
          <motion.header {...reveal} className="max-w-3xl">
            <div className="mc-eyebrow !text-teal-400">
              <Compass className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Pillar 01 · Strategic advisory</span>
            </div>
            <h1 id="consulting-title" className="mc-h1 mt-3 font-light">
              Business <span className="font-bold text-teal-400">Consulting</span>
            </h1>
            <p className="mc-lead mt-4">{pillar.description}</p>
            <p className="mt-3 font-mono text-xs text-white/60">
              The question we answer: <span className="text-teal-400">{pillar.question}</span>
            </p>
            <div className="mt-5 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={onOpenIntake}
                className="mc-tap px-5 rounded-xl bg-indigo-600 hover:bg-indigo-500 active:scale-[0.98] text-white text-sm font-semibold flex items-center justify-center gap-2 transition-[background-color,transform] duration-150"
              >
                <span>Scope a consulting engagement</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
              <a
                href="#consulting-capabilities"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('consulting-capabilities')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className="mc-tap px-5 rounded-xl border border-white/10 hover:border-white/20 bg-white/5 active:scale-[0.98] text-white/90 text-sm flex items-center justify-center transition-[background-color,border-color,transform] duration-150"
              >
                See the five capabilities
              </a>
            </div>
          </motion.header>

          {/* A. Five capabilities */}
          <div id="consulting-capabilities" className="scroll-mt-24">
            <div className="mc-eyebrow !text-teal-400">What we do</div>
            <h2 className="mc-h2 mt-2 font-light">
              Five capabilities, <span className="font-bold">one advisory team</span>
            </h2>
            <ul className="mt-5 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 lg:gap-4 items-start">
              {pillar.capabilities.map((cap, i) => (
                <CapabilityRow
                  key={cap.title}
                  index={i}
                  title={cap.title}
                  description={cap.description}
                  bullets={cap.bulletPoints}
                  open={openCap === i}
                  onToggle={() => setOpenCap(openCap === i ? null : i)}
                />
              ))}
            </ul>
          </div>

          {/* A. Deliverables */}
          <motion.div {...reveal} className="rounded-2xl border border-teal-600/40 bg-[#0A0A0A] p-5 sm:p-6">
            <div className="flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-wider text-teal-400">
              <FileText className="h-3.5 w-3.5" aria-hidden="true" />
              <h2>Deliverables clients can expect</h2>
            </div>
            <ul className="mt-4 grid gap-3 md:grid-cols-3">
              {pillar.deliverables.map((del) => (
                <li key={del} className="flex items-start gap-2.5 text-sm leading-relaxed text-[#E0E0E0]">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" aria-hidden="true" />
                  <span>{del}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* C. Diagnostic deep dive */}
          <DeepDive
            tone="emerald"
            title="AI-readiness diagnostic: 8 dimensions"
            hint="How we assess an organization, where it typically stalls and how we intervene"
          >
            <p className="pt-3 text-sm text-white/60">Select a dimension to see its assessment criteria and our intervention.</p>
            <div className="mt-4 grid gap-4 md:grid-cols-[16rem_1fr]">
              <ul className="space-y-2">
                {MATURITY_DIMENSIONS.map((dim, idx) => {
                  const isSelected = activeDimension === idx;
                  return (
                    <li key={dim.name}>
                      <button
                        type="button"
                        onClick={() => setActiveDimension(idx)}
                        aria-expanded={isSelected}
                        aria-controls={`dim-panel-${idx}`}
                        className={`mc-tap flex w-full items-center justify-between gap-3 rounded-xl border px-4 py-2.5 text-left transition-colors duration-200 active:scale-[0.98] ${
                          isSelected
                            ? 'border-teal-600/60 bg-[#0D0F17] text-white'
                            : 'border-white/[0.08] bg-[#050505] text-[#9CA3AF] hover:border-white/20 hover:text-white'
                        }`}
                      >
                        <span className="min-w-0 font-mono text-xs font-semibold leading-snug">{dim.name}</span>
                        <span className="flex shrink-0 items-center gap-2">
                          <LevelMeter score={dim.score} />
                          <ChevronDown className={`h-4 w-4 transition-transform duration-200 md:hidden ${isSelected ? 'rotate-180' : ''}`} aria-hidden="true" />
                        </span>
                      </button>
                      <AnimatePresence initial={false}>
                        {isSelected && (
                          <motion.div
                            id={`dim-panel-${idx}`}
                            initial={{ opacity: 0, y: -4 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2, ease: EASE }}
                            className="mt-2 md:hidden"
                          >
                            <DimensionDetail dim={dim} />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </li>
                  );
                })}
              </ul>
              <div className="hidden md:block">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={activeDimension}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2, ease: EASE }}
                    className="rounded-2xl border border-white/[0.08] bg-[#0A0A0A] p-5"
                  >
                    <DimensionDetail dim={current} />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </DeepDive>

          {/* B. Pairs with + related */}
          <RelatedLinks title="Pairs with and related" items={related} />

          <ContextualCTA
            title="Scope a consulting engagement"
            body="Bring the decision you need to make. We scope the strategy, roadmap or process work around it."
            primaryLabel="Talk to MindCraft"
            onPrimary={onOpenIntake}
          />
        </div>
      </section>
    </MotionConfig>
  );
};
