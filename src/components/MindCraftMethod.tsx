import React, { useState } from 'react';
import { AnimatePresence, MotionConfig, motion } from 'motion/react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { EASE, reveal } from './ui/primitives';

interface MindCraftMethodProps {
  /** Passed by App; the method section itself does not open the enquiry form. */
  onOpenIntake?: () => void;
}

/*
 * The seven stages of the MindCraft Method. Wording follows the services and deliverables in the corporate
 * profile (s.4, s.8). No benchmarks, confidence scores or certifications: none have been published.
 */
const STAGES: { title: string; tagline: string; process: string; output: string; inputs: string[] }[] = [
  {
    title: 'Understand',
    tagline: 'Frame the question',
    process: 'Interviews with your sponsors and a framing workshop to agree the objective, the scope, the constraints and what success should look like.',
    output: 'An agreed problem statement and engagement scope',
    inputs: ['Your business objective', 'Geographic and product scope', 'Regulatory and budget constraints', 'How leadership will judge success']
  },
  {
    title: 'Investigate',
    tagline: 'Gather the evidence',
    process: 'Primary surveys and interviews, Key Opinion Leader (KOL) research, desk research and regulatory scans across African and international markets.',
    output: 'An evidence base of primary and secondary findings',
    inputs: ['Physicians, pharmacists, patients, distributors and buyers', 'Regulatory authority publications', 'Trade, tender and procurement records', 'Your internal data']
  },
  {
    title: 'Analyze',
    tagline: 'Make sense of it',
    process: 'Market sizing, pricing and competitor analysis, and process mapping, with what people told us checked against the numbers.',
    output: 'Insight models, competitor comparisons and gap analysis',
    inputs: ['Survey and interview data', 'Pricing and tender data', 'Process and cycle-time data', 'AI-readiness assessment results']
  },
  {
    title: 'Decide',
    tagline: 'Choose and prioritise',
    process: 'Decision workshops with your leadership on options, trade-offs, risks and priorities, brought together in a board-ready recommendation.',
    output: 'A strategy document and prioritised roadmap',
    inputs: ['Analytical findings', 'Strategic options and trade-offs', 'Financial and investment estimates', 'Risk and compliance assessment']
  },
  {
    title: 'Design',
    tagline: 'Plan the change',
    process: 'Design the operating model, processes and SOPs, the AI solution architecture and the training curriculum, together rather than one after another.',
    output: 'Operating model design, solution specification and training curriculum',
    inputs: ['The agreed strategic direction', 'Current systems and data', 'Workforce skills gaps', 'Regulatory and SOP requirements']
  },
  {
    title: 'Activate',
    tagline: 'Put it to work',
    process: 'Training on real work tasks, AI solutions deployed into your environment and new SOPs rolled out, with human review built in where it matters.',
    output: 'Trained internal AI champions and working AI tools',
    inputs: ['Training materials', 'The AI solution build', 'Standard operating procedures', 'A first group of users']
  },
  {
    title: 'Measure',
    tagline: 'Check what changed',
    process: 'Review adoption and results against the measures agreed at the start, collect feedback, and plan refreshers or improvements.',
    output: 'An impact review and improvement plan',
    inputs: ['Agreed business indicators', 'Usage data from deployed tools', 'Participant feedback and assessments', 'Compliance and audit records']
  }
];

const pad = (n: number) => String(n).padStart(2, '0');

export const MindCraftMethod: React.FC<MindCraftMethodProps> = () => {
  const [active, setActive] = useState(0);
  const stage = STAGES[active];
  const last = STAGES.length - 1;
  /* How far along the line the sequence has travelled (0 at the first stage, 1 at the last) */
  const progress = active / last;

  const select = (i: number, focus = false) => {
    setActive(i);
    if (focus) document.getElementById(`method-stage-${i}`)?.focus();
  };

  const onTabKey = (e: React.KeyboardEvent) => {
    const next =
      e.key === 'ArrowRight' || e.key === 'ArrowDown' ? (active === last ? 0 : active + 1)
      : e.key === 'ArrowLeft' || e.key === 'ArrowUp' ? (active === 0 ? last : active - 1)
      : e.key === 'Home' ? 0
      : e.key === 'End' ? last
      : null;
    if (next === null) return;
    e.preventDefault();
    select(next, true);
  };

  return (
    <MotionConfig reducedMotion="user">
      <section className="mc-section mc-surface relative overflow-hidden" id="model-method" aria-labelledby="method-title">
        <div className="mc-container">
          <motion.div {...reveal} className="max-w-2xl">
            <p className="mc-meta">7 stages</p>
            <h2 id="method-title" className="mc-h2 mt-3">
              The MindCraft Method
            </h2>
            <p className="mc-lead mt-4">
              Every engagement follows the same sequence, from framing the question to checking what changed. How deep each stage goes depends on
              the work.
            </p>
          </motion.div>

          {/* The sequence: a horizontal line from lg, a vertical one below */}
          <motion.div {...reveal} className="relative mt-12 lg:mt-16">
            {/* Track and progress, horizontal */}
            <div aria-hidden="true" className="hidden lg:block absolute left-[calc(100%/14)] right-[calc(100%/14)] top-[1.375rem] h-px bg-white/[0.14]">
              <div
                className="h-full origin-left bg-indigo-400 transition-transform duration-[250ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
                style={{ transform: `scaleX(${progress})` }}
              />
            </div>
            {/* Track and progress, vertical */}
            <div aria-hidden="true" className="lg:hidden absolute left-[0.6875rem] top-[1.625rem] bottom-[1.625rem] w-px bg-white/[0.14]">
              <div
                className="w-full h-full origin-top bg-indigo-400 transition-transform duration-[250ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
                style={{ transform: `scaleY(${progress})` }}
              />
            </div>

            <div role="tablist" aria-label="Method stages" className="relative flex flex-col lg:grid lg:grid-cols-7">
              {STAGES.map((s, i) => {
                const current = i === active;
                const done = i < active;
                return (
                  <button
                    key={s.title}
                    type="button"
                    role="tab"
                    id={`method-stage-${i}`}
                    aria-selected={current}
                    aria-controls="method-panel"
                    tabIndex={current ? 0 : -1}
                    onClick={() => select(i)}
                    onKeyDown={onTabKey}
                    className="group mc-tap flex lg:flex-col items-center gap-4 lg:gap-0 py-1 lg:py-0 lg:px-2 text-left lg:text-center"
                  >
                    <span className="relative flex h-11 w-[1.375rem] lg:w-auto shrink-0 items-center justify-center">
                      <span
                        aria-hidden="true"
                        className={`block rounded-full border transition-[transform,background-color,border-color] duration-200 ${
                          current
                            ? 'h-3.5 w-3.5 bg-indigo-400 border-indigo-300 scale-110'
                            : done
                              ? 'h-2.5 w-2.5 bg-indigo-400/70 border-transparent'
                              : 'h-2.5 w-2.5 bg-[#0a0a0a] border-white/35 group-hover:border-white/70'
                        }`}
                      />
                    </span>
                    <span className="min-w-0 lg:mt-3">
                      <span className={`font-mono text-xs tabular-nums ${current ? 'text-indigo-300' : 'text-white/55'}`}>{pad(i + 1)}</span>
                      <span
                        className={`ml-2.5 lg:ml-0 lg:mt-1 lg:block font-heading text-[1.0625rem] lg:text-[1.125rem] font-medium tracking-[-0.01em] transition-colors duration-150 ${
                          current ? 'text-white' : 'text-white/70 group-hover:text-white'
                        }`}
                      >
                        {s.title}
                      </span>
                      <span className={`hidden sm:inline lg:block ml-2.5 lg:ml-0 lg:mt-1 text-[13px] ${current ? 'text-white/70' : 'text-white/50'}`}>
                        <span className="lg:hidden" aria-hidden="true">· </span>
                        {s.tagline}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
          </motion.div>

          {/* Stage detail */}
          <div
            id="method-panel"
            role="tabpanel"
            aria-labelledby={`method-stage-${active}`}
            className="mt-8 lg:mt-12 rounded-2xl border border-white/[0.08] bg-[#050505] p-5 sm:p-8"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2, ease: EASE }}
                className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10"
              >
                <div className="md:col-span-7">
                  <p className="mc-meta">
                    Stage {pad(active + 1)} of {pad(STAGES.length)}
                  </p>
                  <h3 className="mt-3 font-heading text-[1.75rem] sm:text-[2.125rem] font-medium leading-tight tracking-[-0.02em] text-white">
                    {stage.title}
                    <span className="text-white/55"> · {stage.tagline}</span>
                  </h3>
                  <p className="mt-4 max-w-[36em] text-[15px] sm:text-base leading-relaxed text-white/75">{stage.process}</p>
                  <p className="mt-6 text-[13px] font-medium text-white/55">What this stage produces</p>
                  <p className="mt-1.5 text-[15px] font-medium text-emerald-300">{stage.output}</p>
                </div>
                <div className="md:col-span-5 md:border-l md:border-white/[0.08] md:pl-10">
                  <p className="text-[13px] font-medium text-white/55">What goes in</p>
                  <ul className="mt-3 space-y-2.5">
                    {stage.inputs.map((inp) => (
                      <li key={inp} className="flex gap-3 text-[14px] leading-snug text-white/75">
                        <span aria-hidden="true" className="mt-[0.45rem] h-1 w-1 shrink-0 rounded-full bg-indigo-400" />
                        {inp}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-8 flex items-center justify-between gap-3 border-t border-white/[0.08] pt-5">
              <button
                type="button"
                disabled={active === 0}
                onClick={() => select(active - 1)}
                className="mc-tap inline-flex items-center gap-2 rounded-xl px-3 text-sm text-white/70 hover:text-white disabled:opacity-35 disabled:hover:text-white/70 transition-colors duration-150"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                <span>{active > 0 ? STAGES[active - 1].title : 'Previous'}</span>
              </button>
              <button
                type="button"
                disabled={active === last}
                onClick={() => select(active + 1)}
                className="mc-tap inline-flex items-center gap-2 rounded-xl px-3 text-sm text-white/80 hover:text-white disabled:opacity-35 disabled:hover:text-white/80 transition-colors duration-150"
              >
                <span>{active < last ? STAGES[active + 1].title : 'Next'}</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </MotionConfig>
  );
};
