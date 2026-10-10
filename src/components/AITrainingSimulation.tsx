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
import { ArtImage } from './ui/ArtImage';
import { ArtCaption, HeroCopy, HeroSection, Scrim } from './ui/Hero';
import { MarkList, scrollToId, tabKeyNav } from './PillarParts';

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
    why: 'Diagnoses organisational capability and surfaces the priority use cases before any tool is chosen.',
    outcome: 'A shared AI language and a prioritised view of where to start.'
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
    what: 'Train-the-trainer programmes, custom curriculum design and mentorship and coaching that reinforce classroom learning on the job.',
    why: 'Capability has to outlast the engagement to be worth the investment.',
    outcome: 'Internal AI champions who sustain and scale adoption.'
  }
];

const DELIVERABLES = [
  'Customised training curricula, facilitator guides and participant workbooks.',
  'AI-readiness scorecards and prioritised adoption roadmaps.',
  'A trained internal cohort of AI champions able to sustain and scale adoption.'
];

const FORMATS = [
  'In-person workshops',
  'Virtual / online training',
  'Hybrid programmes',
  'Short courses (1 to 5 days)',
  'Structured programmes (weeks to months)',
  'Retainer-based advisory'
];

const COHORTS = [
  { id: 'pharma-commercial', name: 'Pharma Commercial & Sales Force', desc: 'Territory optimisation, CRM intelligence & detailing' },
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
      <HeroSection id="ai-training-section" labelledBy="ai-training-title" className="mc-art-bleed min-h-[35rem] bg-[#050505]">
        <ArtImage
          name="training-workshop"
          alt="Facilitator leading a workshop"
          sizes="100vw"
          position="object-[66%_50%] lg:object-[62%_50%]"
          priority
        />
        <Scrim background="linear-gradient(90deg, #050505 0%, rgba(5,5,5,.9) 47%, rgba(5,5,5,.42) 74%, rgba(5,5,5,.18) 100%)" />
        <Scrim background="linear-gradient(180deg, rgba(5,5,5,.62) 0%, rgba(5,5,5,0) 24%, rgba(5,5,5,0) 68%, #050505 100%)" />
        <div className="mc-container mc-art-copy flex min-h-[28rem] items-end py-14 sm:py-20 lg:min-h-[34rem] lg:py-24">
          <HeroCopy
            id="ai-training-title"
            meta="AI training & digital literacy"
            title={<>AI confidence for <em className="font-normal text-amber-300">real work.</em></>}
            lead="Practical AI learning, designed around the work teams need to do."
            actions={
              <>
                <button type="button" onClick={onOpenIntake} className="mc-tap inline-flex items-center justify-center gap-2 rounded-xl bg-amber-400 px-5 text-sm font-semibold text-[#17120a] transition-[background-color,transform] hover:bg-amber-300 active:scale-[0.98]">
                  Discuss a learning programme <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </button>
                <button type="button" onClick={() => scrollToId('tr-capabilities')} className="mc-tap inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-black/35 px-5 text-sm font-medium text-white transition-[background-color,transform] hover:bg-white/10 active:scale-[0.98]">
                  Explore the capability groups
                </button>
              </>
            }
          />
        </div>
        <ArtCaption className="absolute bottom-5 right-4 z-10 sm:right-8">Workshop illustration</ArtCaption>
      </HeroSection>

      <section className="mc-section">
        <div className="mc-container">
          {/* A/B. Capability groups + delivery formats + deliverables */}
          <div id="tr-capabilities">
            <SectionHeader
              title={<>From briefing to internal champions.</>}
              lead="Four ways to build AI capability without separating learning from day-to-day work."
            />
            <ul className="border-y border-white/[0.1]">
              {GROUPS.map((g, i) => (
                <li
                  key={g.name}
                  className="grid gap-5 border-b border-white/[0.1] py-6 last:border-b-0 md:grid-cols-[2.25rem_minmax(0,1fr)_minmax(15rem,.7fr)] md:gap-8"
                >
                  <span className="font-mono text-xs text-amber-400">0{i + 1}</span>
                  <div>
                    <h3 className="flex items-center gap-2 text-lg font-medium text-white">
                      <g.icon className="h-4 w-4 text-amber-300" aria-hidden="true" />
                      {g.name}
                    </h3>
                    <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-white/70">{g.what}</p>
                  </div>
                  <DeepDive tone="amber" title="Engagement detail" hint={g.outcome}>
                    <p className="text-sm leading-relaxed text-white/65">{g.why}</p>
                    <MarkList
                      className="mt-4 space-y-2"
                      marker="bg-amber-400"
                      items={trainingPillar.capabilities[i]?.bulletPoints ?? []}
                    />
                  </DeepDive>
                </li>
              ))}
            </ul>

            <motion.div {...reveal} className="mt-4 rounded-2xl border border-white/10 bg-[#0a0a0a] p-4 sm:p-5">
              <h3 className="text-xs font-semibold text-amber-400">Delivery formats</h3>
              <p className="mt-1 text-xs text-white/60">Across African, European and US time zones.</p>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {FORMATS.map((f) => (
                  <li key={f} className="rounded-lg border border-amber-500/25 bg-amber-500/10 px-2.5 py-1 tabular-nums text-xs text-amber-200">
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>

            <aside className="mt-10 border-t border-amber-500/30 pt-5">
              <p className="mc-eyebrow text-amber-300">Potential engagement outputs</p>
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
          {/* Explorer: curriculum simulator */}
          <div id="tr-simulator">
            <SectionHeader
              title={<>Pharma Commercial Team: applied AI transformation</>}
              lead="Step through the modules to see what is learned, practised and delivered at each stage."
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
                        <div className={`flex items-center gap-1 tabular-nums text-xs font-bold ${isSelected || done ? 'text-amber-400' : 'text-[#9CA3AF]'}`}>
                          <span>STEP {st.step}</span>
                          {done && <CheckCircle2 className="h-3 w-3" aria-label="completed" />}
                        </div>
                        <div className="mt-0.5 truncate tabular-nums text-xs">{st.title.split(' ').slice(0, 2).join(' ')}</div>
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
                  <div className="tabular-nums text-xs font-bold text-amber-400">
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
                        className={`mc-tap rounded-lg font-medium text-[13px] transition-colors duration-200 active:scale-[0.98] ${
                          mobileSection === s.id ? 'bg-[#0D0F17] font-semibold text-amber-400' : 'text-[#9CA3AF] hover:text-white'
                        }`}
                      >
                        {s.label}
                      </button>
                    ))}
                  </div>

                  <div className="mt-4 grid gap-3 md:grid-cols-3">
                    <div id="module-panel-learn" className={`${panelClass('learn')} rounded-xl border border-white/[0.08] bg-[#050505] p-4`}>
                      <h4 className="flex items-center gap-1.5 text-xs font-semibold text-amber-400">
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
                      <h4 className="flex items-center gap-1.5 text-xs font-semibold text-amber-400">
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
                        <h4 className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400">
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
                        <h4 className="flex items-center gap-1.5 text-xs font-semibold text-amber-400">
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
                    className="mc-tap flex items-center justify-center gap-2 rounded-xl border border-white/[0.08] bg-[#050505] tabular-nums text-sm text-[#E0E0E0] transition-[color,transform] duration-200 hover:text-white active:scale-[0.98] disabled:opacity-40"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    <span>Prev</span>
                  </button>
                  <button
                    type="button"
                    disabled={activeStepIdx === total - 1}
                    onClick={() => goTo(activeStepIdx + 1)}
                    className="mc-tap flex items-center justify-center gap-2 rounded-xl border border-amber-500/40 bg-[#0D0F17] tabular-nums text-sm font-semibold text-amber-400 transition-[color,transform] duration-200 hover:text-white active:scale-[0.98] disabled:opacity-40"
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

        </div>
      </section>

      <section className="mc-section" aria-label="Next steps">
        <div className="mc-container">
          {/* One CTA, then related */}
          <div className="space-y-10 md:space-y-14">
            <motion.div {...reveal}>
              <ContextualCTA
                title="Design a curriculum for your organisation"
                body="Pick your cohort and we shape the modules, exercises and champion milestones around its workflows."
                primaryLabel="Design Organisation Curriculum"
                onPrimary={onOpenIntake}
              />
            </motion.div>
            <RelatedLinks
              title="Pairs with"
              items={[
                { label: 'AI Enterprise Solutions', desc: 'Pair custom AI software with users who adopt it.', to: 'ai-solutions', tone: 'emerald' },
                { label: 'Business Consulting', desc: 'Align workforce readiness with strategic transformation.', to: 'consulting', tone: 'teal' },
                { label: 'Market localisation', desc: 'Harmonised programmes across regulatory and language environments.', to: 'localization', tone: 'amber' },
                { label: 'Senior expertise', desc: 'Life Sciences experience behind the sector briefings.', to: 'senior-expertise', tone: 'indigo' }
              ]}
            />
          </div>
        </div>
      </section>
    </MotionConfig>
  );
};
