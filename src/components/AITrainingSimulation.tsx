import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, MotionConfig, motion } from 'motion/react';
import { SERVICE_PILLARS, TRAINING_SIMULATION_STEPS } from '../data/mindcraftData';
import { NavTab } from '../types';
import {
  GraduationCap,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  ChevronDown,
  Award,
  BookOpen,
  Zap,
  FileText
} from 'lucide-react';

interface AITrainingSimulationProps {
  onOpenIntake: () => void;
  setActiveTab: (tab: NavTab) => void;
}

type StepSection = 'learn' | 'practice' | 'deliver';

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

const SECTIONS: { id: StepSection; label: string }[] = [
  { id: 'learn', label: 'Learn' },
  { id: 'practice', label: 'Practice' },
  { id: 'deliver', label: 'Deliver' }
];

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
      <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-amber-400">
        Capability 0{index + 1}
      </span>
      <h3 className="mt-1 text-base font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-[#9CA3AF]">{description}</p>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="mc-tap -mx-2 mt-3 flex items-center justify-between rounded-lg px-2 font-mono text-xs text-amber-400 transition-colors hover:text-white active:scale-[0.98]"
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
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-amber-500" />
                <span>{bp}</span>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export const AITrainingSimulation: React.FC<AITrainingSimulationProps> = ({
  onOpenIntake,
  setActiveTab
}) => {
  const trainingPillar = SERVICE_PILLARS.find(p => p.id === 'ai-training') || SERVICE_PILLARS[2];
  const [activeStepIdx, setActiveStepIdx] = useState<number>(0);
  const [mobileSection, setMobileSection] = useState<StepSection>('learn');

  const railRef = useRef<HTMLDivElement>(null);
  const chipRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const cardRef = useRef<HTMLDivElement>(null);
  const hasInteracted = useRef(false);

  const total = TRAINING_SIMULATION_STEPS.length;
  const currentStep = TRAINING_SIMULATION_STEPS[activeStepIdx];

  const cohorts = [
    { id: 'pharma-commercial', name: 'Pharma Commercial & Sales Force', desc: 'Territory optimization, CRM intelligence & detailing' },
    { id: 'regulatory-clinical', name: 'Regulatory & Pharmacovigilance', desc: 'Dossier synthesis, guideline scraping & safety screening' },
    { id: 'hospital-execs', name: 'Hospital & Healthcare Leadership', desc: 'Clinical workflow AI, claims pre-check & HIS integration' },
    { id: 'banking-ops', name: 'Banking & Financial Operations', desc: 'Fraud detection, document parsing & customer service' }
  ];

  const facts = [
    { value: String(total), label: 'Applied modules in the pathway' },
    { value: String(cohorts.length), label: 'Cohort tracks' },
    { value: String(trainingPillar.capabilities.length), label: 'Core capabilities' },
    { value: String(trainingPillar.deliverables.length), label: 'Practical deliverable types' }
  ];

  const goTo = (idx: number) => {
    hasInteracted.current = true;
    setActiveStepIdx(Math.max(0, Math.min(total - 1, idx)));
  };

  // Keep the active chip centred inside the rail (never scrolls the page).
  useEffect(() => {
    const rail = railRef.current;
    const chip = chipRefs.current[activeStepIdx];
    if (!rail || !chip) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    rail.scrollTo({
      left: chip.offsetLeft - rail.clientWidth / 2 + chip.clientWidth / 2,
      behavior: reduce ? 'auto' : 'smooth'
    });
  }, [activeStepIdx]);

  // After Prev/Next, bring the module heading back into view if it scrolled away.
  useEffect(() => {
    if (!hasInteracted.current) return;
    const card = cardRef.current;
    if (!card) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (card.getBoundingClientRect().top < 72) {
      card.scrollIntoView({ block: 'start', behavior: reduce ? 'auto' : 'smooth' });
    }
  }, [activeStepIdx]);

  const panelClass = (id: StepSection) => `${mobileSection === id ? 'block' : 'hidden'} md:block`;

  return (
    <MotionConfig reducedMotion="user">
      <section className="mc-section bg-[#050505]" id="ai-training-section">
        <div className="mc-container">

          {/* 1. Intent */}
          <motion.header {...reveal()} className="max-w-3xl">
            <div className="mc-eyebrow !text-amber-400">
              <GraduationCap className="h-3.5 w-3.5" />
              <span>Pillar 03 · Applied Human Enablement</span>
            </div>
            <h1 className="mc-h1 mt-3 font-light">
              AI Training & <span className="font-bold text-amber-400">Capability Building</span>
            </h1>
            <p className="mc-lead mt-4">
              Practical, hands-on AI capability transformation for teams, executives, and organizations — designed to build genuine AI literacy and internal champions, not just theoretical awareness.
            </p>
          </motion.header>

          {/* 2. Facts + who it is for */}
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

            <div className="mt-6">
              <div className="font-mono text-[11px] font-bold uppercase tracking-wider text-amber-400">Built for these cohorts</div>
              <ul className="mc-snap-row mt-3 md:grid! md:grid-cols-2 md:gap-3 md:overflow-visible! lg:grid-cols-4">
                {cohorts.map((c) => (
                  <li key={c.id} className="rounded-xl border border-white/[0.08] bg-[#0A0A0A] p-4">
                    <div className="text-sm font-semibold leading-snug text-white">{c.name}</div>
                    <p className="mt-1 text-xs leading-relaxed text-[#9CA3AF]">{c.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 3. Capabilities */}
          <div className="mt-12 sm:mt-16">
            <div className="mc-eyebrow !text-amber-400">What we do</div>
            <h2 className="mc-h2 mt-2 font-light">Literacy, workflows and <span className="font-bold">internal champions</span></h2>
            <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4 lg:gap-4">
              {trainingPillar.capabilities.map((cap, i) => (
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

          {/* 4. Simulator */}
          <div className="mt-12 sm:mt-16">
            <div className="mc-eyebrow !text-amber-400">Applied curriculum simulator · {total}-module pathway</div>
            <h2 className="mc-h2 mt-2 font-light">
              Pharma Commercial Team: <span className="font-bold text-amber-400">{total}-Step Applied AI Transformation</span>
            </h2>

            <div className="mt-6 overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0A0A0A]">
              {/* Step rail */}
              <div className="border-b border-white/[0.08] bg-[#050505] px-3 pt-3">
                <div
                  ref={railRef}
                  role="tablist"
                  aria-label="Curriculum modules"
                  className="relative flex gap-2 overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                >
                  {TRAINING_SIMULATION_STEPS.map((st, idx) => {
                    const isSelected = activeStepIdx === idx;
                    const done = idx < activeStepIdx;
                    return (
                      <button
                        key={st.step}
                        ref={(el) => { chipRefs.current[idx] = el; }}
                        type="button"
                        role="tab"
                        aria-selected={isSelected}
                        aria-controls="training-step-panel"
                        id={`curriculum-step-btn-${st.step}`}
                        onClick={() => goTo(idx)}
                        className={`mc-tap w-28 shrink-0 rounded-xl border px-3 py-2 text-left transition-colors duration-200 active:scale-[0.98] ${
                          isSelected
                            ? 'border-amber-500/60 bg-[#0D0F17] text-white'
                            : 'border-white/[0.08] bg-[#0A0A0A] text-[#9CA3AF] hover:border-white/20 hover:text-white'
                        }`}
                      >
                        <div className={`flex items-center gap-1 font-mono text-[11px] font-bold ${isSelected || done ? 'text-amber-400' : 'text-[#9CA3AF]'}`}>
                          <span>STEP {st.step}</span>
                          {done && <CheckCircle2 className="h-3 w-3" />}
                        </div>
                        <div className="mt-0.5 truncate font-mono text-xs">{st.title.split(' ').slice(0, 2).join(' ')}</div>
                      </button>
                    );
                  })}
                </div>
                <div className="-mx-3 h-0.5 bg-white/[0.08]">
                  <motion.div
                    className="h-full w-full bg-amber-500"
                    style={{ transformOrigin: 'left' }}
                    animate={{ scaleX: (activeStepIdx + 1) / total }}
                    transition={{ duration: 0.25, ease: EASE }}
                  />
                </div>
              </div>

              {/* Active module */}
              <div
                ref={cardRef}
                id="training-step-panel"
                role="tabpanel"
                aria-labelledby={`curriculum-step-btn-${currentStep.step}`}
                className="p-4 sm:p-6"
              >
                <motion.div
                  key={activeStepIdx}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, ease: EASE }}
                >
                  <div className="font-mono text-xs font-bold text-amber-400">
                    MODULE {currentStep.step} OF {total} · {currentStep.duration}
                  </div>
                  <h3 className="mt-1 text-lg font-semibold leading-snug text-white sm:text-xl">{currentStep.title}</h3>

                  {/* Phone: segmented control; md+: all three columns */}
                  <div
                    role="tablist"
                    aria-label="Module sections"
                    className="mt-4 grid grid-cols-3 gap-1 rounded-xl border border-white/[0.08] bg-[#050505] p-1 md:hidden"
                  >
                    {SECTIONS.map((s) => (
                      <button
                        key={s.id}
                        type="button"
                        role="tab"
                        aria-selected={mobileSection === s.id}
                        onClick={() => setMobileSection(s.id)}
                        className={`mc-tap rounded-lg font-mono text-xs transition-colors duration-200 active:scale-[0.98] ${
                          mobileSection === s.id
                            ? 'bg-[#0D0F17] font-semibold text-amber-400'
                            : 'text-[#9CA3AF] hover:text-white'
                        }`}
                      >
                        {s.label}
                      </button>
                    ))}
                  </div>

                  <div className="mt-4 grid gap-3 md:grid-cols-3">
                    <div className={`${panelClass('learn')} rounded-xl border border-white/[0.08] bg-[#050505] p-4`}>
                      <div className="flex items-center gap-1.5 font-mono text-[11px] font-bold uppercase tracking-wider text-amber-400">
                        <BookOpen className="h-3.5 w-3.5" />
                        <span>Learning objectives</span>
                      </div>
                      <ul className="mt-3 space-y-2">
                        {currentStep.learningObjectives.map((obj, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm leading-relaxed text-[#E0E0E0]">
                            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-amber-500" />
                            <span>{obj}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className={`${panelClass('practice')} rounded-xl border border-white/[0.08] bg-[#050505] p-4`}>
                      <div className="flex items-center gap-1.5 font-mono text-[11px] font-bold uppercase tracking-wider text-amber-400">
                        <Zap className="h-3.5 w-3.5" />
                        <span>Applied workplace exercises</span>
                      </div>
                      <ul className="mt-3 space-y-2">
                        {currentStep.appliedExercises.map((ex, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm leading-relaxed text-[#E0E0E0]">
                            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-amber-500" />
                            <span>{ex}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className={`${panelClass('deliver')} flex flex-col justify-between rounded-xl border border-emerald-500/30 bg-[#050505] p-4`}>
                      <div>
                        <div className="flex items-center gap-1.5 font-mono text-[11px] font-bold uppercase tracking-wider text-emerald-400">
                          <FileText className="h-3.5 w-3.5" />
                          <span>Tangible deliverable</span>
                        </div>
                        <ul className="mt-3 space-y-2">
                          {currentStep.practicalDeliverables.map((del, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm font-semibold leading-relaxed text-emerald-300">
                              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                              <span>{del}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="mt-4 border-t border-white/[0.08] pt-3">
                        <div className="flex items-center gap-1.5 font-mono text-[11px] font-bold uppercase tracking-wider text-amber-400">
                          <Award className="h-3.5 w-3.5" />
                          <span>Champion milestone</span>
                        </div>
                        <p className="mt-1 text-sm italic leading-relaxed text-[#9CA3AF]">
                          "{currentStep.championMilestone}"
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Prev / Next */}
                <div className="mt-5 grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    disabled={activeStepIdx === 0}
                    onClick={() => goTo(activeStepIdx - 1)}
                    className="mc-tap flex items-center justify-center gap-2 rounded-xl border border-white/[0.08] bg-[#050505] font-mono text-sm text-[#E0E0E0] transition-[color,transform] duration-200 hover:text-white active:scale-[0.98] disabled:opacity-40"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    <span>Prev</span>
                  </button>
                  <button
                    type="button"
                    disabled={activeStepIdx === total - 1}
                    onClick={() => goTo(activeStepIdx + 1)}
                    className="mc-tap flex items-center justify-center gap-2 rounded-xl border border-amber-500/40 bg-[#0D0F17] font-mono text-sm font-semibold text-amber-400 transition-[color,transform] duration-200 hover:text-white active:scale-[0.98] disabled:opacity-40"
                  >
                    <span>Next</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* 5. Single CTA + pairs with */}
          <div className="mt-12 sm:mt-16">
            <motion.div
              {...reveal()}
              className="rounded-2xl border border-indigo-500/35 bg-[#0A0A0A] p-6 sm:p-8 md:flex md:items-center md:justify-between md:gap-8"
            >
              <div className="max-w-xl">
                <h2 className="text-xl font-semibold text-white sm:text-2xl">Design a curriculum for your organization</h2>
                <p className="mt-2 text-sm leading-relaxed text-[#9CA3AF]">
                  Pick your cohort and we shape the modules, exercises and champion milestones around its workflows.
                </p>
              </div>
              <button
                type="button"
                onClick={onOpenIntake}
                className="mc-tap mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 font-mono text-sm font-semibold text-white transition-[background-color,transform] duration-200 hover:bg-indigo-500 active:scale-[0.98] md:mt-0 md:w-auto md:shrink-0"
              >
                <span>Design Organization Curriculum</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </motion.div>

            {trainingPillar.intersections && trainingPillar.intersections.length > 0 && (
              <div className="mt-4">
                <div className="font-mono text-[11px] uppercase tracking-wider text-[#9CA3AF]">Pairs with</div>
                <ul className="mt-2 grid gap-2 md:grid-cols-3">
                  {trainingPillar.intersections.map((x) => {
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
