import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Search,
  Compass,
  Sparkles,
  GraduationCap,
  ArrowRight,
  Layers,
  TrendingUp,
  Target,
  X
} from 'lucide-react';
import { PROBLEM_CROSS_SECTIONS } from '../data/industryAndAfricaData';
import { NavTab, ProblemCrossSection } from '../types';

interface Props {
  onNavigate: (tab: NavTab) => void;
  onSelectProblemForEngagement?: (problemTitle: string) => void;
}

const EASE = [0.16, 1, 0.3, 1] as const;

export const ProblemCrossSectionView: React.FC<Props> = ({
  onNavigate,
  onSelectProblemForEngagement
}) => {
  const [selectedProblemId, setSelectedProblemId] = useState<string>(
    PROBLEM_CROSS_SECTIONS[0].id
  );
  const [filterQuery, setFilterQuery] = useState('');

  const filteredProblems = useMemo(() => {
    const q = filterQuery.toLowerCase();
    return PROBLEM_CROSS_SECTIONS.filter(p =>
      p.problemTitle.toLowerCase().includes(q) ||
      p.tagline.toLowerCase().includes(q) ||
      p.triggerQuestion.toLowerCase().includes(q) ||
      p.commonIndustries.some(i => i.toLowerCase().includes(q))
    );
  }, [filterQuery]);

  const selectedProblem: ProblemCrossSection = useMemo(() => {
    return PROBLEM_CROSS_SECTIONS.find(p => p.id === selectedProblemId) || PROBLEM_CROSS_SECTIONS[0];
  }, [selectedProblemId]);

  const selectedIndex = PROBLEM_CROSS_SECTIONS.findIndex(p => p.id === selectedProblem.id);

  const handleStartEngagement = (probTitle: string) => {
    if (onSelectProblemForEngagement) {
      onSelectProblemForEngagement(probTitle);
    }
    onNavigate('engagement-builder');
  };

  const pillars = [
    { n: '01', label: 'Primary Research & Evidence', text: selectedProblem.mindcraftApproach.research, Icon: Search, color: 'text-sky-400' },
    { n: '02', label: 'Strategic Decision Framework', text: selectedProblem.mindcraftApproach.strategy, Icon: Compass, color: 'text-indigo-400' },
    { n: '03', label: 'Continuous AI Systems', text: selectedProblem.mindcraftApproach.aiEnablement, Icon: Sparkles, color: 'text-emerald-400' },
    { n: '04', label: 'Workforce Capability', text: selectedProblem.mindcraftApproach.training, Icon: GraduationCap, color: 'text-amber-400' }
  ];

  return (
    <div className="w-full min-h-dvh bg-[#050505] text-white overflow-x-clip">
      <div className="mc-container mc-section !border-b-0 space-y-6 md:space-y-8">
        {/* Header: intent first */}
        <header className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5">
          <div className="space-y-3 min-w-0">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
              <span className="mc-eyebrow">Problem-Led Cross-Section Experience</span>
              <span className="text-[11px] text-neutral-400 font-mono">10 Archetypal Business Challenges</span>
            </div>
            <h1 className="mc-h1 font-semibold tracking-tight">What Are You Trying to Solve?</h1>
            <p className="mc-lead">
              Start directly from your core business objective. Explore how MindCraft weaves primary research, strategic advisory, AI enablement, and capability building to deliver concrete outcomes.
            </p>
          </div>
          <button
            onClick={() => handleStartEngagement(selectedProblem.problemTitle)}
            className="mc-tap hidden lg:inline-flex px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-sm font-semibold text-white transition-colors active:scale-[0.98] shrink-0 items-center gap-2"
          >
            Build Engagement for this Challenge <ArrowRight className="w-4 h-4" />
          </button>
        </header>

        {/* Challenge picker: chips rail on phones, list on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8">
          <aside className="lg:col-span-4 min-w-0 space-y-3 lg:sticky lg:top-24 lg:self-start">
            <div className="relative">
              <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" aria-hidden="true" />
              <input
                type="text"
                value={filterQuery}
                onChange={(e) => setFilterQuery(e.target.value)}
                placeholder="Search challenges or industries..."
                aria-label="Search challenges or industries"
                className="w-full mc-tap bg-[#0a0a0a] border border-white/10 rounded-xl pl-9 pr-10 py-2 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-indigo-500/60"
              />
              {filterQuery && (
                <button
                  type="button"
                  onClick={() => setFilterQuery('')}
                  aria-label="Clear search"
                  className="absolute right-0 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center text-neutral-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            <div
              role="tablist"
              aria-label="Business challenges"
              className="mc-snap-row lg:!flex-col lg:!overflow-visible lg:!gap-2 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0"
            >
              {filteredProblems.map((prob) => {
                const isSelected = selectedProblemId === prob.id;
                const idx = PROBLEM_CROSS_SECTIONS.findIndex(p => p.id === prob.id);
                return (
                  <button
                    key={prob.id}
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => setSelectedProblemId(prob.id)}
                    className={`mc-tap !flex-none !basis-auto max-w-[78vw] lg:max-w-none lg:w-full text-left px-3.5 py-2.5 rounded-xl border transition-colors active:scale-[0.98] flex items-center gap-3 ${
                      isSelected
                        ? 'bg-[#0d0f17] border-indigo-500/60'
                        : 'bg-[#0a0a0a] border-white/10 hover:border-white/25'
                    }`}
                  >
                    <span className={`text-[11px] font-mono font-bold shrink-0 ${isSelected ? 'text-indigo-400' : 'text-neutral-400'}`}>
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <span className="min-w-0">
                      <span className={`block text-sm font-semibold leading-snug truncate lg:whitespace-normal ${isSelected ? 'text-white' : 'text-[#E0E0E0]'}`}>
                        {prob.problemTitle}
                      </span>
                      <span className="hidden lg:block text-xs text-neutral-400 line-clamp-1 mt-0.5">
                        {prob.tagline}
                      </span>
                    </span>
                  </button>
                );
              })}
              {filteredProblems.length === 0 && (
                <p className="text-sm text-neutral-400 py-2">No challenges match "{filterQuery}".</p>
              )}
            </div>
          </aside>

          {/* Problem -> pillars -> outcome panel */}
          <div className="lg:col-span-8 min-w-0">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={selectedProblem.id}
                role="tabpanel"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2, ease: EASE }}
                className="space-y-4 md:space-y-5"
              >
                {/* Problem */}
                <section className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-5 md:p-7 space-y-4">
                  <div className="flex items-center gap-2 text-[11px] font-mono text-indigo-400 uppercase tracking-wider">
                    <Target className="w-4 h-4" aria-hidden="true" />
                    Problem {String(selectedIndex + 1).padStart(2, '0')} / Core Business Objective
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                    {selectedProblem.problemTitle}
                  </h2>
                  <p className="text-indigo-400 font-medium text-base">
                    {selectedProblem.tagline}
                  </p>

                  <div className="p-4 rounded-xl bg-[#050505] border border-white/[0.08] space-y-1">
                    <div className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider">Triggering Executive Question</div>
                    <p className="text-sm md:text-base text-white italic">
                      "{selectedProblem.triggerQuestion}"
                    </p>
                  </div>

                  <div>
                    <div className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider mb-2">
                      Frequently Encountered Across Industries
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {selectedProblem.commonIndustries.map((ind, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 rounded-lg bg-white/5 text-[#E0E0E0] text-xs border border-white/10"
                        >
                          {ind}
                        </span>
                      ))}
                    </div>
                  </div>
                </section>

                {/* 5-pillar architecture */}
                <section className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-5 md:p-7 space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1">
                    <h3 className="text-base md:text-lg font-bold text-white flex items-center gap-2">
                      <Layers className="w-5 h-5 text-indigo-400 shrink-0" aria-hidden="true" />
                      How MindCraft Solves This: 5-Pillar Integrated Architecture
                    </h3>
                    <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider">Methodology Framework</span>
                  </div>

                  <ol className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {pillars.map(({ n, label, text, Icon, color }, i) => (
                      <motion.li
                        key={n}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2, ease: EASE, delay: i * 0.04 }}
                        className="p-4 rounded-xl bg-[#050505] border border-white/[0.08] space-y-2"
                      >
                        <div className={`flex items-center gap-2 ${color} text-xs font-semibold uppercase tracking-wide`}>
                          <Icon className="w-4 h-4 shrink-0" aria-hidden="true" />
                          <span>{n}. {label}</span>
                        </div>
                        <p className="text-sm text-[#E0E0E0] leading-relaxed">{text}</p>
                      </motion.li>
                    ))}
                  </ol>

                  {/* 05 outcome */}
                  <div className="p-4 rounded-xl bg-[#0d0f17] border border-emerald-500/30 space-y-1.5">
                    <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold uppercase tracking-wide">
                      <TrendingUp className="w-4 h-4 shrink-0" aria-hidden="true" />
                      05. Measurable Business Outcome
                    </div>
                    <p className="text-sm text-white leading-relaxed">
                      {selectedProblem.mindcraftApproach.measurableOutcome}
                    </p>
                  </div>
                </section>

                {/* Illustrative engagement + single CTA */}
                <section className="p-5 md:p-6 rounded-2xl bg-[#0a0a0a] border border-indigo-500/35 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1 min-w-0">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-indigo-400">Illustrative Client Engagement</div>
                    <div className="text-sm font-semibold text-white">{selectedProblem.illustrativeEngagement}</div>
                  </div>
                  <button
                    onClick={() => handleStartEngagement(selectedProblem.problemTitle)}
                    className="mc-tap px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-sm font-semibold text-white transition-colors active:scale-[0.98] shrink-0 inline-flex items-center justify-center gap-2"
                  >
                    Start This Engagement <ArrowRight className="w-4 h-4" />
                  </button>
                </section>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};
