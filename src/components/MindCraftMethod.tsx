import React, { useState, useEffect, useRef } from 'react';
import { MotionConfig, motion, AnimatePresence } from 'motion/react';
import { DeepDive, EASE } from './ui/primitives';
import {
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Search,
  LineChart,
  Lightbulb,
  Layout,
  Zap,
  Activity,
  Layers
} from 'lucide-react';


const methodSteps = [
  {
    number: '01',
    title: 'Understand',
    tagline: 'Context, Objective & Constraints Framing',
    icon: Lightbulb,
    inputs: ['Client business objective', 'Geographic & therapeutic scope', 'Regulatory & budget constraints', 'Executive success criteria'],
    process: 'Rigorous diagnostic interviews with client sponsors, problem framing workshops, and baseline assumption challenging.',
    outputs: ['Formal Engagement Charter & Problem Definition Statement'],
    keyRigor: 'Zero reliance on generic assumptions; custom scoping tailored to African & international commercial realities.'
  },
  {
    number: '02',
    title: 'Investigate',
    tagline: 'Primary + Secondary Evidence Gathering',
    icon: Search,
    inputs: ['Physician / Pharmacist / Patient networks', 'Regulatory health authority gazettes & databases', 'Trade import manifests & tender histories', 'Internal client transactional data'],
    process: 'Primary surveys, Key Opinion Leader (KOL) panels, desk research and regulatory scans across African and international markets.',
    outputs: ['Unvarnished Evidence Dossier & Verified Primary Datasets'],
    keyRigor: 'Double-verified field data with strict statistical sampling and audited clinician credentials.'
  },
  {
    number: '03',
    title: 'Analyze',
    tagline: 'Data, Market, Strategic & Operational Modeling',
    icon: LineChart,
    inputs: ['Raw primary field survey datasets', 'Tender pricing distributions', 'Process cycle-time logs', 'Organizational AI maturity scores'],
    process: 'Statistical regression, price-elasticity waterfall modeling, competitor pipeline SWOT, and value-stream process mapping.',
    outputs: ['Strategic Insight Models, Competitor Matrices & Gap Diagnostics'],
    keyRigor: 'Triangulation between qualitative physician sentiment and quantitative epidemiological pricing data.'
  },
  {
    number: '04',
    title: 'Decide',
    tagline: 'Recommendations, Trade-offs & Priorities',
    icon: CheckCircle2,
    inputs: ['Analytical findings', 'Strategic trade-off options', 'Financial ROI models', 'Risk & compliance assessments'],
    process: 'Executive decision workshops, scenario stress-testing, resource prioritization, and board-ready synthesis.',
    outputs: ['Board-Ready Strategy Document & Prioritized Action Roadmap'],
    keyRigor: 'Clear decision trade-offs with explicit confidence scores and evidence traceability.'
  },
  {
    number: '05',
    title: 'Design',
    tagline: 'Transformation, Technology & Training Architecture',
    icon: Layout,
    inputs: ['Approved strategic direction', 'Enterprise IT architecture specifications', 'Workforce competency gap audit', 'Regulatory SOP requirements'],
    process: 'Blueprinting target operating models, authoring functional AI curricula, and engineering production AI system architecture.',
    outputs: ['Operating Model Blueprint, AI System Specs & Training Curriculum'],
    keyRigor: 'Integration of technical AI architecture, compliance guardrails, and change management from day one.'
  },
  {
    number: '06',
    title: 'Activate',
    tagline: 'Deployment, Adoption & Capability Building',
    icon: Zap,
    inputs: ['Completed curriculum modules', 'Production AI software build', 'Standard Operating Procedures', 'Pilot cohort of end-users'],
    process: 'Hands-on interactive AI training workshops, production software deployment into client cloud/on-prem, and SOP rollout.',
    outputs: ['Certified Internal AI Champions & Live Production AI Tools'],
    keyRigor: 'Applied training on real work tasks, with human-in-the-loop validation checkpoints.'
  },
  {
    number: '07',
    title: 'Measure',
    tagline: 'Impact, Learning & Continuous Improvement',
    icon: Activity,
    inputs: ['Post-launch commercial KPIs', 'Software uptime and usage telemetry', 'Workforce AI confidence audits', 'Regulatory audit compliance logs'],
    process: 'Quarterly business reviews, adoption auditing, model drift monitoring, and continuous capability refresher clinics.',
    outputs: ['Impact Scorecard, Value Realization Report & Optimization Plan'],
    keyRigor: 'Continuous metric tracking tied to verified commercial revenue, time savings, and regulatory audit certainty.'
  }
];


export const MindCraftMethod: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const btnRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const mounted = useRef(false);

  const current = methodSteps[activeStep];

  // Keep the active chip visible in the phone rail without scrolling the page
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      return;
    }
    btnRefs.current[activeStep]?.scrollIntoView({ inline: 'center', block: 'nearest', behavior: 'smooth' });
  }, [activeStep]);

  return (
    <MotionConfig reducedMotion="user">
      <section className="mc-section bg-[#050505]" id="model-method">
        <div className="mc-container space-y-6 md:space-y-8">
          {/* A. Intent */}
          <header className="max-w-3xl">
            <span className="mc-eyebrow">
              <Layers className="w-3.5 h-3.5" aria-hidden="true" />
              Universal delivery framework
            </span>
            <h2 className="mc-h2 mt-3 font-light">
              The MindCraft Method: <span className="font-semibold">seven stages</span>
            </h2>
            <p className="mc-lead mt-3">
              Every engagement moves from an ambiguous market question to validated evidence, strategic clarity, workforce readiness and measurable commercial transformation.
            </p>
          </header>

          {/* Stage navigation: swipeable rail on phones, 7-up grid from lg */}
          <div
            role="tablist"
            aria-label="Method stages"
            className="mc-snap-row lg:!grid lg:!grid-cols-7 lg:!overflow-visible lg:!gap-2"
          >
            {methodSteps.map((step, idx) => {
              const isCurrent = activeStep === idx;
              const Icon = step.icon;
              return (
                <button
                  key={step.number}
                  ref={(el) => { btnRefs.current[idx] = el; }}
                  type="button"
                  role="tab"
                  aria-selected={isCurrent}
                  aria-controls="method-panel"
                  onClick={() => setActiveStep(idx)}
                  id={`method-step-btn-${step.number}`}
                  className={`mc-tap !flex-none !basis-[7rem] lg:!basis-auto p-3 rounded-xl border text-left transition-colors active:scale-[0.98] relative overflow-hidden ${
                    isCurrent
                      ? 'bg-[#0d0f17] border-indigo-500/60 text-white'
                      : 'bg-[#0a0a0a] border-white/10 text-white/70 hover:border-white/25 hover:text-white'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className={`text-[11px] font-mono font-bold ${isCurrent ? 'text-indigo-400' : 'text-white/50'}`}>{step.number}</span>
                    <Icon className={`w-3.5 h-3.5 ${isCurrent ? 'text-indigo-400' : 'text-white/50'}`} aria-hidden="true" />
                  </div>
                  <div className="text-sm font-bold truncate text-white">{step.title}</div>
                  {isCurrent && (
                    <motion.div
                      layoutId="method-active-bar"
                      transition={{ duration: 0.2, ease: EASE }}
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-400"
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Stage detail */}
          <div id="method-panel" role="tabpanel" aria-labelledby={`method-step-btn-${current.number}`} className="rounded-2xl bg-[#0a0a0a] border border-white/10 p-4 sm:p-6">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <span className="text-[11px] font-mono text-indigo-400 font-bold tracking-wide">STAGE {current.number} / 07</span>
                <h3 className="text-2xl font-bold text-white mt-1">{current.title}</h3>
                <p className="text-sm text-white/65 mt-0.5">{current.tagline}</p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  disabled={activeStep === 0}
                  onClick={() => setActiveStep(prev => prev - 1)}
                  aria-label="Previous stage"
                  className="mc-tap px-3 rounded-xl bg-[#050505] text-white/70 hover:text-white disabled:opacity-40 transition-colors active:scale-[0.98] border border-white/10 inline-flex items-center justify-center"
                >
                  <ArrowLeft className="w-4 h-4" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  disabled={activeStep === methodSteps.length - 1}
                  onClick={() => setActiveStep(prev => prev + 1)}
                  aria-label="Next stage"
                  className="mc-tap px-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white disabled:opacity-40 transition-colors active:scale-[0.98] inline-flex items-center justify-center"
                >
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </div>

            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={current.number}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.18, ease: EASE }}
                className="mt-4 space-y-4"
              >
                <p className="text-sm sm:text-base text-white/80 leading-relaxed">{current.process}</p>
                <ul className="space-y-1.5">
                  {current.outputs.map((out, i) => (
                    <li key={i} className="text-sm text-emerald-400 font-medium flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" aria-hidden="true" />
                      <span>{out}</span>
                    </li>
                  ))}
                </ul>
                <DeepDive title="Inputs and rigor benchmark" hint="What goes in, and the standard we hold">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-3">
                    <div>
                      <div className="text-[11px] font-mono uppercase font-bold tracking-wider text-white/50 mb-2">Stage inputs</div>
                      <ul className="space-y-1.5">
                        {current.inputs.map((inp, i) => (
                          <li key={i} className="text-sm text-white/80 flex items-start gap-1.5">
                            <span className="text-indigo-400" aria-hidden="true">•</span>
                            <span>{inp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <div className="text-[11px] font-mono uppercase font-bold tracking-wider text-indigo-400 mb-2">Rigor benchmark</div>
                      <p className="text-sm text-white/70 leading-relaxed italic">"{current.keyRigor}"</p>
                    </div>
                  </div>
                </DeepDive>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>
    </MotionConfig>
  );
};
