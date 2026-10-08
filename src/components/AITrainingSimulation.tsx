import React, { useEffect, useRef, useState } from 'react';
import { MotionConfig, motion } from 'motion/react';
import { SERVICE_PILLARS, TRAINING_SIMULATION_STEPS } from '../data/mindcraftData';
import { NavTab } from '../types';
import {
  GraduationCap,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Award,
  BookOpen,
  Zap,
  FileText,
  Presentation,
  Settings2,
  ShieldCheck,
  Users
} from 'lucide-react';
import { ContextualCTA, DeepDive, EASE, RelatedLinks, SectionHeader, reveal } from './ui/primitives';
import { DeliverablesBlock, GroupCard, PillarHero, tabKeyNav } from './PillarParts';

interface AITrainingSimulationProps {
  onOpenIntake: () => void;
  setActiveTab: (tab: NavTab) => void;
}

type StepSection = 'learn' | 'practice' | 'deliver';

const SECTIONS: { id: StepSection; label: string }[] = [
  { id: 'learn', label: 'Learn' },
  { id: 'practice', label: 'Practice' },
  { id: 'deliver', label: 'Deliver' }
];

/** The four training groups exactly as the corporate profile names them. */
const GROUPS = [
  {
    name: 'AI Foundations & Executive Briefings',
    icon: Presentation,
    what: 'AI fundamentals for executives, boards and new staff, AI-readiness assessments and sector briefings for Life Sciences, healthcare, chemicals, automotive and financial services leaders.',
    why: 'Diagnoses organizational capability and surfaces the priority use cases before any tool is chosen.',
    outcome: 'A shared AI language and a prioritized view of where to start.'
  },
  {
    name: 'Applied, Function-Specific AI Training',
    icon: Settings2,
    what: 'Hands-on training for commercial and sales, market access, regulatory affairs, pharmacovigilance, HR, finance, communications and M&E teams, including prompt engineering and generative AI tools.',
    why: 'Each team learns AI on its own workflows rather than in the abstract.',
    outcome: 'Teams that apply AI in their daily functions.'
  },
  {
    name: 'Responsible & Governed AI Adoption',
    icon: ShieldCheck,
    what: 'AI ethics, governance and responsible-use workshops, including data privacy and confidentiality safeguards, with policy and guideline development for regulated industries.',
    why: 'Regulated sectors such as pharmaceuticals and banking need adoption that is safe and compliant.',
    outcome: 'Clear policies and guidelines for safe AI use.'
  },
  {
    name: 'Capability Multiplication',
    icon: Users,
    what: 'Train-the-trainer programs, custom curriculum design and mentorship and coaching that reinforce classroom learning on the job.',
    why: 'Capability has to outlast the engagement to be worth the investment.',
    outcome: 'Internal AI champions who sustain and scale adoption.'
  }
];

const DELIVERABLES = [
  'Customized training curricula, facilitator guides and participant workbooks.',
  'AI-readiness scorecards and prioritized adoption roadmaps.',
  'A trained internal cohort of AI champions able to sustain and scale adoption.'
];

const FORMATS = [
  'In-person workshops',
  'Virtual / online training',
  'Hybrid programs',
  'Short courses (1 to 5 days)',
  'Structured programs (weeks to months)',
  'Retainer-based advisory'
];

const COHORTS = [
  { id: 'pharma-commercial', name: 'Pharma Commercial & Sales Force', desc: 'Territory optimization, CRM intelligence & detailing' },
  { id: 'regulatory-clinical', name: 'Regulatory & Pharmacovigilance', desc: 'Dossier synthesis, guideline scraping & safety screening' },
  { id: 'hospital-execs', name: 'Hospital & Healthcare Leadership', desc: 'Clinical workflow AI, claims pre-check & HIS integration' },
  { id: 'banking-ops', name: 'Banking & Financial Operations', desc: 'Fraud detection, document parsing & customer service' }
];

export const AITrainingSimulation: React.FC<AITrainingSimulationProps> = ({ onOpenIntake, setActiveTab }) => {
  const trainingPillar = SERVICE_PILLARS.find((p) => p.id === 'ai-training') || SERVICE_PILLARS[2];
  const [activeStepIdx, setActiveStepIdx] = useState<number>(0);
  const [mobileSection, setMobileSection] = useState<StepSection>('learn');

  const railRef = useRef<HTMLDivElement>(null);
  const chipRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const cardRef = useRef<HTMLDivElement>(null);
  const hasInteracted = useRef(false);

  const total = TRAINING_SIMULATION_STEPS.length;
  const currentStep = TRAINING_SIMULATION_STEPS[activeStepIdx];
  const stepIdxs = TRAINING_SIMULATION_STEPS.map((_, i) => i);
  const sectionIds = SECTIONS.map((s) => s.id);

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

          {/* A. What this is, what MindCraft delivers, outcomes, CTA */}
          <PillarHero
            tone="amber"
            icon={GraduationCap}
            eyebrow="Pillar 03 · AI Training & Digital Literacy"
            titleLight="AI Training &"
            titleBold="Digital Literacy"
            lead="Practical, hands-on AI capability-building for individuals, teams and organizations, designed to build real AI literacy and internal champions, not just awareness."
            outcomes={[
              { label: 'Literacy that sticks', text: 'Taught on each team’s own workflows.' },
              { label: 'Safe in regulated sectors', text: 'Built on data privacy, ethics and governance.' },
              { label: 'Capability that outlasts us', text: 'Internal champions sustain adoption.' }
            ]}
            ctaLabel="Design Organization Curriculum"
            onCta={onOpenIntake}
            exploreLabel="See the four capability groups"
            exploreId="tr-capabilities"
          />

          {/* A/B. Capability groups + delivery formats + deliverables */}
          <div id="tr-capabilities" className="mt-10 scroll-mt-24 sm:mt-14">
            <SectionHeader
              eyebrow="What MindCraft delivers"
              title={<>Four capability groups, <span className="font-bold">from briefing to champions</span></>}
              className="mb-5! sm:mb-7!"
            />
            <ul className="grid grid-cols-1 items-start gap-3 md:grid-cols-2 lg:grid-cols-4 lg:gap-4">
              {GROUPS.map((g, i) => (
                <GroupCard
                  key={g.name}
                  index={i}
                  tone="amber"
                  icon={g.icon}
                  name={g.name}
                  what={g.what}
                  why={g.why}
                  outcome={g.outcome}
                  included={trainingPillar.capabilities[i]?.bulletPoints ?? []}
                />
              ))}
            </ul>

            <motion.div {...reveal} className="mt-4 rounded-2xl border border-white/10 bg-[#0a0a0a] p-4 sm:p-5">
              <h3 className="font-mono text-[11px] font-bold uppercase tracking-wider text-amber-400">Delivery formats</h3>
              <p className="mt-1 text-xs text-white/60">Across African, European and US time zones.</p>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {FORMATS.map((f) => (
                  <li key={f} className="rounded-lg border border-amber-500/25 bg-amber-500/10 px-2.5 py-1 font-mono text-[11px] text-amber-200">
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>

            <div className="mt-4">
              <DeliverablesBlock tone="amber" items={DELIVERABLES} />
            </div>
          </div>

          {/* Explorer: curriculum simulator */}
          <div id="tr-simulator" className="mt-10 scroll-mt-24 sm:mt-14">
            <SectionHeader
              eyebrow={`Explorer · ${total}-module applied pathway`}
              title={<>Pharma Commercial Team: <span className="font-bold text-amber-400">applied AI transformation</span></>}
              lead="Step through the modules to see what is learned, practised and delivered at each stage."
              className="mb-5! sm:mb-7!"
            />

            <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0A0A0A]">
              {/* Step rail */}
              <div className="border-b border-white/[0.08] bg-[#050505] px-3 pt-3">
                <div
                  ref={railRef}
                  role="tablist"
                  aria-label="Curriculum modules"
                  onKeyDown={(e) => tabKeyNav(e, stepIdxs, activeStepIdx, goTo, (i) => `curriculum-step-btn-${TRAINING_SIMULATION_STEPS[i].step}`)}
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
                        tabIndex={isSelected ? 0 : -1}
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
                          {done && <CheckCircle2 className="h-3 w-3" aria-label="completed" />}
                        </div>
                        <div className="mt-0.5 truncate font-mono text-xs">{st.title.split(' ').slice(0, 2).join(' ')}</div>
                      </button>
                    );
                  })}
                </div>
                <div className="-mx-3 h-0.5 bg-white/[0.08]" aria-hidden="true">
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
                    onKeyDown={(e) => tabKeyNav(e, sectionIds, mobileSection, setMobileSection, (id) => `module-section-${id}`)}
                    className="mt-4 grid grid-cols-3 gap-1 rounded-xl border border-white/[0.08] bg-[#050505] p-1 md:hidden"
                  >
                    {SECTIONS.map((s) => (
                      <button
                        key={s.id}
                        id={`module-section-${s.id}`}
                        type="button"
                        role="tab"
                        aria-selected={mobileSection === s.id}
                        aria-controls={`module-panel-${s.id}`}
                        tabIndex={mobileSection === s.id ? 0 : -1}
                        onClick={() => setMobileSection(s.id)}
                        className={`mc-tap rounded-lg font-mono text-xs transition-colors duration-200 active:scale-[0.98] ${
                          mobileSection === s.id ? 'bg-[#0D0F17] font-semibold text-amber-400' : 'text-[#9CA3AF] hover:text-white'
                        }`}
                      >
                        {s.label}
                      </button>
                    ))}
                  </div>

                  <div className="mt-4 grid gap-3 md:grid-cols-3">
                    <div id="module-panel-learn" className={`${panelClass('learn')} rounded-xl border border-white/[0.08] bg-[#050505] p-4`}>
                      <h4 className="flex items-center gap-1.5 font-mono text-[11px] font-bold uppercase tracking-wider text-amber-400">
                        <BookOpen className="h-3.5 w-3.5" aria-hidden="true" />
                        <span>Learning objectives</span>
                      </h4>
                      <ul className="mt-3 space-y-2">
                        {currentStep.learningObjectives.map((obj) => (
                          <li key={obj} className="flex items-start gap-2 text-sm leading-relaxed text-[#E0E0E0]">
                            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-amber-500" aria-hidden="true" />
                            <span>{obj}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div id="module-panel-practice" className={`${panelClass('practice')} rounded-xl border border-white/[0.08] bg-[#050505] p-4`}>
                      <h4 className="flex items-center gap-1.5 font-mono text-[11px] font-bold uppercase tracking-wider text-amber-400">
                        <Zap className="h-3.5 w-3.5" aria-hidden="true" />
                        <span>Applied workplace exercises</span>
                      </h4>
                      <ul className="mt-3 space-y-2">
                        {currentStep.appliedExercises.map((ex) => (
                          <li key={ex} className="flex items-start gap-2 text-sm leading-relaxed text-[#E0E0E0]">
                            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-amber-500" aria-hidden="true" />
                            <span>{ex}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div id="module-panel-deliver" className={`${panelClass('deliver')} flex flex-col justify-between rounded-xl border border-emerald-500/30 bg-[#050505] p-4`}>
                      <div>
                        <h4 className="flex items-center gap-1.5 font-mono text-[11px] font-bold uppercase tracking-wider text-emerald-400">
                          <FileText className="h-3.5 w-3.5" aria-hidden="true" />
                          <span>Tangible deliverable</span>
                        </h4>
                        <ul className="mt-3 space-y-2">
                          {currentStep.practicalDeliverables.map((del) => (
                            <li key={del} className="flex items-start gap-2 text-sm font-semibold leading-relaxed text-emerald-300">
                              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" aria-hidden="true" />
                              <span>{del}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="mt-4 border-t border-white/[0.08] pt-3">
                        <h4 className="flex items-center gap-1.5 font-mono text-[11px] font-bold uppercase tracking-wider text-amber-400">
                          <Award className="h-3.5 w-3.5" aria-hidden="true" />
                          <span>Champion milestone</span>
                        </h4>
                        <p className="mt-1 text-sm italic leading-relaxed text-[#9CA3AF]">“{currentStep.championMilestone}”</p>
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

          {/* C. Deep dive: cohorts */}
          <div className="mt-6">
            <DeepDive tone="amber" title="Who it is built for: four cohort tracks" hint="Pharma commercial, regulatory, hospital leadership, banking operations">
              <ul className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
                {COHORTS.map((c) => (
                  <li key={c.id} className="rounded-xl border border-white/[0.08] bg-[#050505] p-4">
                    <div className="text-sm font-semibold leading-snug text-white">{c.name}</div>
                    <p className="mt-1 text-xs leading-relaxed text-[#9CA3AF]">{c.desc}</p>
                  </li>
                ))}
              </ul>
            </DeepDive>
          </div>

          {/* One CTA, then related */}
          <div className="mt-10 space-y-8 sm:mt-14">
            <motion.div {...reveal}>
              <ContextualCTA
                title="Design a curriculum for your organization"
                body="Pick your cohort and we shape the modules, exercises and champion milestones around its workflows."
                primaryLabel="Design Organization Curriculum"
                onPrimary={onOpenIntake}
              />
            </motion.div>
            <RelatedLinks
              title="Pairs with"
              items={[
                { label: 'AI Enterprise Solutions', desc: 'Pair custom AI software with users who adopt it.', onClick: () => setActiveTab('ai-solutions'), tone: 'emerald' },
                { label: 'Business Consulting', desc: 'Align workforce readiness with strategic transformation.', onClick: () => setActiveTab('consulting'), tone: 'teal' },
                { label: 'Localization', desc: 'Harmonized programs across regulatory and language environments.', onClick: () => setActiveTab('localization'), tone: 'amber' },
                { label: 'Senior expertise', desc: 'Life Sciences experience behind the sector briefings.', onClick: () => setActiveTab('senior-expertise'), tone: 'indigo' }
              ]}
            />
          </div>

        </div>
      </section>
    </MotionConfig>
  );
};
