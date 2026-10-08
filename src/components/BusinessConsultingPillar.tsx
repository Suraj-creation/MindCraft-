import React, { useState } from 'react';
import { AnimatePresence, MotionConfig, motion } from 'motion/react';
import { SERVICE_PILLARS } from '../data/mindcraftData';
import { NavTab } from '../types';
import {
  Compass,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  FileText
} from 'lucide-react';

interface BusinessConsultingPillarProps {
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

const levelOf = (score: string) => Number(score.match(/\d/)?.[0] ?? 0);

const LevelMeter: React.FC<{ score: string }> = ({ score }) => {
  const level = levelOf(score);
  return (
    <span className="flex items-center gap-1" aria-hidden="true">
      {[1, 2, 3, 4, 5].map((n) => (
        <span
          key={n}
          className={`h-1 w-4 rounded-full ${n <= level ? 'bg-teal-600' : 'bg-white/10'}`}
        />
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

    <div className="rounded-xl border border-white/[0.08] bg-[#0A0A0A] p-4">
      <div className="mb-1 font-mono text-[11px] font-bold uppercase tracking-wider text-teal-400">
        Diagnostic inquiry
      </div>
      <p className="text-sm leading-relaxed text-[#E0E0E0]">{dim.assessment}</p>
    </div>
    <div className="rounded-xl border border-amber-500/30 bg-[#0A0A0A] p-4">
      <div className="mb-1 font-mono text-[11px] font-bold uppercase tracking-wider text-amber-400">
        Common blindspot
      </div>
      <p className="text-sm leading-relaxed text-[#E0E0E0]">{dim.blindspots}</p>
    </div>
    <div className="rounded-xl border border-emerald-500/30 bg-[#0A0A0A] p-4">
      <div className="mb-1 font-mono text-[11px] font-bold uppercase tracking-wider text-emerald-400">
        MindCraft intervention
      </div>
      <p className="text-sm leading-relaxed text-[#E0E0E0]">{dim.intervention}</p>
    </div>
  </div>
);

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
      <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-teal-400">
        Capability 0{index + 1}
      </span>
      <h3 className="mt-1 text-base font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-[#9CA3AF]">{description}</p>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="mc-tap -mx-2 mt-3 flex items-center justify-between rounded-lg px-2 font-mono text-xs text-teal-400 transition-colors hover:text-white active:scale-[0.98]"
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
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-teal-600" />
                <span>{bp}</span>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export const BusinessConsultingPillar: React.FC<BusinessConsultingPillarProps> = ({
  onOpenIntake,
  setActiveTab
}) => {
  const consultingPillar = SERVICE_PILLARS.find(p => p.id === 'consulting') || SERVICE_PILLARS[0];
  const [activeDimension, setActiveDimension] = useState<number>(0);

  const maturityDimensions: DimensionShape[] = [
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

  const facts = [
    { value: String(consultingPillar.capabilities.length), label: 'Core capabilities' },
    { value: String(maturityDimensions.length), label: 'Diagnostic dimensions' },
    { value: String(consultingPillar.deliverables.length), label: 'Decision-ready deliverables' },
    { value: 'Life Sciences', label: 'Aligned, cross-industry practice' }
  ];

  const current = maturityDimensions[activeDimension];

  return (
    <MotionConfig reducedMotion="user">
      <section className="mc-section bg-[#050505]" id="consulting-section">
        <div className="mc-container">

          {/* 1. Intent */}
          <motion.header {...reveal()} className="max-w-3xl">
            <div className="mc-eyebrow !text-teal-400">
              <Compass className="h-3.5 w-3.5" />
              <span>Pillar 01 · Strategic Advisory</span>
            </div>
            <h1 className="mc-h1 mt-3 font-light">
              Business <span className="font-bold text-teal-400">Consulting</span>
            </h1>
            <p className="mc-lead mt-4">{consultingPillar.description} Grounded in Life Sciences and cross-industry best practice.</p>
            <p className="mt-3 font-mono text-xs text-[#9CA3AF]">
              The question we answer: <span className="text-teal-400">{consultingPillar.question}</span>
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

            <div className="mt-6 rounded-2xl border border-teal-600/40 bg-[#0A0A0A] p-5 sm:p-6">
              <div className="flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-wider text-teal-400">
                <FileText className="h-3.5 w-3.5" />
                <span>What you receive</span>
              </div>
              <ul className="mt-4 grid gap-3 md:grid-cols-3">
                {consultingPillar.deliverables.map((del, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm leading-relaxed text-[#E0E0E0]">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                    <span>{del}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 3. Capabilities (progressive disclosure) */}
          <div className="mt-12 sm:mt-16">
            <div className="mc-eyebrow !text-teal-400">What we do</div>
            <h2 className="mc-h2 mt-2 font-light">Five capabilities, <span className="font-bold">one advisory team</span></h2>
            <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 lg:gap-4">
              {consultingPillar.capabilities.map((cap, i) => (
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

          {/* 4. Interactive diagnostic */}
          <div className="mt-12 sm:mt-16">
            <div className="mc-eyebrow !text-teal-400">Diagnostic framework · 8 dimensions</div>
            <h2 className="mc-h2 mt-2 font-light">
              Organizational <span className="font-bold text-teal-400">AI-Readiness Assessment</span>
            </h2>
            <p className="mt-2 text-sm text-[#9CA3AF]">
              Select a dimension to inspect its assessment criteria and our intervention.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-[17rem_1fr] lg:grid-cols-[19rem_1fr]">
              <ul className="space-y-2" role="list">
                {maturityDimensions.map((dim, idx) => {
                  const isSelected = activeDimension === idx;
                  return (
                    <li key={dim.name}>
                      <button
                        type="button"
                        onClick={() => setActiveDimension(idx)}
                        aria-expanded={isSelected}
                        aria-controls={`dim-panel-${idx}`}
                        className={`mc-tap flex w-full items-center justify-between gap-3 rounded-xl border px-4 py-3 text-left transition-colors duration-200 active:scale-[0.98] ${
                          isSelected
                            ? 'border-teal-600/60 bg-[#0D0F17] text-white'
                            : 'border-white/[0.08] bg-[#0A0A0A] text-[#9CA3AF] hover:border-white/20 hover:text-white'
                        }`}
                      >
                        <span className="min-w-0 font-mono text-xs font-semibold leading-snug">{dim.name}</span>
                        <span className="flex shrink-0 items-center gap-2">
                          <LevelMeter score={dim.score} />
                          <ChevronDown
                            className={`h-4 w-4 transition-transform duration-200 md:hidden ${isSelected ? 'rotate-180' : ''}`}
                          />
                        </span>
                      </button>

                      {/* Mobile: detail opens inline under the tapped row */}
                      <AnimatePresence initial={false}>
                        {isSelected && (
                          <motion.div
                            id={`dim-panel-${idx}`}
                            key="inline"
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

              {/* md+: detail panel beside the list */}
              <div className="hidden md:block">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={activeDimension}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2, ease: EASE }}
                    className="sticky top-24 rounded-2xl border border-white/[0.08] bg-[#050505] p-5 sm:p-6"
                  >
                    <DimensionDetail dim={current} />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* 5. Pairs with + single CTA */}
          <div className="mt-12 sm:mt-16">
            <motion.div
              {...reveal()}
              className="rounded-2xl border border-indigo-500/35 bg-[#0A0A0A] p-6 sm:p-8 md:flex md:items-center md:justify-between md:gap-8"
            >
              <div className="max-w-xl">
                <h2 className="text-xl font-semibold text-white sm:text-2xl">Scope a consulting engagement</h2>
                <p className="mt-2 text-sm leading-relaxed text-[#9CA3AF]">
                  Bring the decision you need to make. We scope the strategy, roadmap or process work around it.
                </p>
              </div>
              <button
                type="button"
                onClick={onOpenIntake}
                className="mc-tap mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 font-mono text-sm font-semibold text-white transition-[background-color,transform] duration-200 hover:bg-indigo-500 active:scale-[0.98] md:mt-0 md:w-auto md:shrink-0"
              >
                <span>Initiate Consulting Scope</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </motion.div>

            {consultingPillar.intersections && consultingPillar.intersections.length > 0 && (
              <div className="mt-4">
                <div className="font-mono text-[11px] uppercase tracking-wider text-[#9CA3AF]">Pairs with</div>
                <ul className="mt-2 grid gap-2 md:grid-cols-3">
                  {consultingPillar.intersections.map((x) => {
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
