import React, { useState, useEffect, useRef } from 'react';
import { MotionConfig, motion } from 'motion/react';
import { ArrowRight, ArrowLeft, MapPin, Building2, FileText, Check } from 'lucide-react';
import { MARKET_ENTRY_9STEPS, UNIVERSAL_INDUSTRIES, AFRICA_REGIONS_DATA } from '../data/industryAndAfricaData';
import { NavTab } from '../types';
import { BTN_PRIMARY, PageHeader } from './ui/primitives';
import { ArtImage } from './ui/ArtImage';
import { ArtCaption, Scrim } from './ui/Hero';
import { useMediaQuery } from '../lib/useMediaQuery';

interface Props {
  onNavigate: (tab: NavTab) => void;
  onSelectCountryForEngagement?: (country: string) => void;
  onSelectIndustryForEngagement?: (industry: string) => void;
}

const EASE = [0.16, 1, 0.3, 1] as const;


const primaryBtn =
  'mc-tap inline-flex items-center justify-center gap-2 px-6 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-sm font-semibold text-white transition-[background-color,transform] duration-200 active:scale-[0.98] w-full sm:w-auto shrink-0';
const ghostBtn =
  'mc-tap inline-flex items-center justify-center gap-2 px-4 rounded-xl bg-white/5 hover:bg-white/10 text-sm font-medium text-white disabled:opacity-30 disabled:pointer-events-none transition-[background-color,transform] duration-200 active:scale-[0.98]';
const monoLabel = 'text-xs font-medium text-gray-400';

export const MarketEntryFrameworkView: React.FC<Props> = ({
  onNavigate,
  onSelectCountryForEngagement,
  onSelectIndustryForEngagement
}) => {
  const [selectedCountry, setSelectedCountry] = useState('Kenya');
  const [selectedIndustry, setSelectedIndustry] = useState('Pharmaceuticals');
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);
  const scrollOnChange = useRef(false);

  const total = MARKET_ENTRY_9STEPS.length;
  const jurisdictionCount = AFRICA_REGIONS_DATA.reduce((n, r) => n + r.countries.length, 0);

  const handleLaunchEngagement = () => {
    if (onSelectCountryForEngagement) onSelectCountryForEngagement(selectedCountry);
    if (onSelectIndustryForEngagement) onSelectIndustryForEngagement(selectedIndustry);
    onNavigate('engagement-builder');
  };

  const goToStep = (idx: number) => {
    scrollOnChange.current = true;
    setActiveStepIndex(Math.max(0, Math.min(total - 1, idx)));
  };

  // On phones, keep the newly opened timeline step in view after the previous one collapses
  useEffect(() => {
    if (!scrollOnChange.current) return;
    scrollOnChange.current = false;
    if (isDesktop) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    itemRefs.current[activeStepIndex]?.scrollIntoView({ block: 'nearest', behavior: reduce ? 'auto' : 'smooth' });
  }, [activeStepIndex, isDesktop]);

  const facts = [
    { value: String(total), label: 'Steps, one pathway' },
    { value: String(total), label: 'Deliverables' },
    { value: String(jurisdictionCount), label: 'Jurisdictions' },
    { value: String(UNIVERSAL_INDUSTRIES.length), label: 'Industries' }
  ];

  const renderDetail = (idx: number) => {
    const step = MARKET_ENTRY_9STEPS[idx];
    return (
      <motion.div
        key={step.stepNumber}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.22, ease: EASE }}
        className="space-y-4"
      >
        <div className="p-4 rounded-xl bg-[#050505] border border-white/[0.08] space-y-1.5">
          <div className="text-xs text-indigo-400 font-medium">Core Strategic Question</div>
          <p className="text-base text-white font-medium italic leading-relaxed">"{step.question}"</p>
        </div>

        <div className="space-y-2">
          <div className={monoLabel}>MindCraft Field Scope &amp; Methodology</div>
          <p className="text-sm text-[#E0E0E0] leading-relaxed p-4 rounded-xl bg-[#050505] border border-white/[0.08]">
            {step.mindcraftScope}
          </p>
        </div>

        <div className="p-4 rounded-xl bg-[#0D0F17] border border-indigo-500/35 flex items-center justify-between gap-4">
          <div className="min-w-0">
            <div className={monoLabel}>Key Deliverable</div>
            <div className="text-sm font-semibold text-white mt-1">{step.deliverable}</div>
          </div>
          <FileText className="w-6 h-6 text-indigo-400 shrink-0" />
        </div>

        <div className="flex items-center justify-between gap-3 pt-4 border-t border-white/[0.08]">
          <button onClick={() => goToStep(idx - 1)} disabled={idx === 0} className={ghostBtn}>
            <ArrowLeft className="w-4 h-4" /> Previous Step
          </button>
          <div className="text-[12px] tabular-nums text-gray-400 hidden sm:block">
            {idx + 1} of {total}
          </div>
          <button
            onClick={() => goToStep(idx + 1)}
            disabled={idx === total - 1}
            className="mc-tap inline-flex items-center justify-center gap-2 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-sm font-semibold text-white disabled:opacity-30 disabled:pointer-events-none transition-[background-color,transform] duration-200 active:scale-[0.98]"
          >
            Next Step <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </motion.div>
    );
  };

  const currentStep = MARKET_ENTRY_9STEPS[activeStepIndex];

  return (
    <MotionConfig reducedMotion="user">
      <section className="mc-section mc-page-intro w-full text-white">
        <div className="mc-container space-y-10 md:space-y-14">
          {/* Intent + facts + primary CTA */}
          <PageHeader
            title="A clearer way into a market."
            lead="A structured planning sequence for market context, entry decisions and local execution."
            meta="Market entry framework"
            actions={
              <button type="button" onClick={handleLaunchEngagement} className={BTN_PRIMARY}>
                <span>Build a Market Entry Engagement</span>
              </button>
            }
            metrics={facts}
          />

          <figure className="mc-art-bleed mc-full-bleed relative min-h-56 sm:min-h-72">
            <ArtImage name="market-entry-port" alt="" sizes="100vw" position="object-[52%_50%]" />
            <Scrim background="linear-gradient(90deg, rgba(5,5,5,.78), rgba(5,5,5,.12) 68%, rgba(5,5,5,.02))" />
            <Scrim background="linear-gradient(180deg, rgba(5,5,5,.28), rgba(5,5,5,0) 35%, rgba(5,5,5,.72))" />
            <ArtCaption className="absolute bottom-4 left-[max(1rem,calc((100vw-min(100vw-2rem,88rem))/2))]">Market entry illustration</ArtCaption>
          </figure>

          {/* Context selectors */}
          <div className="bg-[#0a0a0a] border border-white/[0.08] rounded-2xl p-4 sm:p-6 space-y-5">
            <div>
              <h2 className="text-lg font-semibold text-white">Contextualize the 9-Step Pathway</h2>
              <p className="text-sm text-gray-400 mt-1">
                Select your target country and industry to adapt questions, investigations, and deliverables.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <label className="flex items-center gap-3 bg-[#050505] border border-white/[0.08] rounded-xl px-4 mc-tap focus-within:border-indigo-500">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="sr-only">Target country</span>
                <select
                  value={selectedCountry}
                  onChange={e => setSelectedCountry(e.target.value)}
                  className="w-full min-w-0 bg-transparent text-base sm:text-sm text-white focus:outline-none py-2"
                >
                  {AFRICA_REGIONS_DATA.map(r => (
                    <optgroup key={r.name} label={r.name} className="bg-[#0a0a0a] text-white">
                      {r.countries.map(c => (
                        <option key={`${r.name}-${c}`} value={c} className="bg-[#0a0a0a] text-white">
                          {c}
                        </option>
                      ))}
                    </optgroup>
                  ))}
                </select>
              </label>

              <label className="flex items-center gap-3 bg-[#050505] border border-white/[0.08] rounded-xl px-4 mc-tap focus-within:border-indigo-500">
                <Building2 className="w-4 h-4 text-indigo-400 shrink-0" />
                <span className="sr-only">Target industry</span>
                <select
                  value={selectedIndustry}
                  onChange={e => setSelectedIndustry(e.target.value)}
                  className="w-full min-w-0 bg-transparent text-base sm:text-sm text-white focus:outline-none py-2"
                >
                  {UNIVERSAL_INDUSTRIES.map(i => (
                    <option key={i.id} value={i.name} className="bg-[#0a0a0a] text-white">
                      {i.name}
                    </option>
                  ))}
                </select>
              </label>
            </div>
          </div>

          {/* ============ DESKTOP: horizontal stepper + detail ============ */}
          {isDesktop ? (
            <div className="bg-[#0a0a0a] border border-white/[0.08] rounded-2xl p-8 space-y-8">
              <nav aria-label="9-step roadmap">
                <ol className="relative grid grid-cols-9">
                  {/* rail + progress (transform only) */}
                  <span
                    aria-hidden="true"
                    className="absolute top-5 h-px bg-white/[0.08]"
                    style={{ left: 'calc(100% / 18)', right: 'calc(100% / 18)' }}
                  />
                  <motion.span
                    aria-hidden="true"
                    className="absolute top-5 h-px bg-indigo-500 origin-left"
                    style={{ left: 'calc(100% / 18)', width: 'calc(100% * 8 / 9)' }}
                    animate={{ scaleX: activeStepIndex / (total - 1) }}
                    transition={{ duration: 0.25, ease: EASE }}
                  />
                  {MARKET_ENTRY_9STEPS.map((step, idx) => {
                    const isActive = activeStepIndex === idx;
                    const isDone = idx < activeStepIndex;
                    return (
                      <li key={step.stepNumber} className="relative">
                        <button
                          onClick={() => goToStep(idx)}
                          aria-current={isActive ? 'step' : undefined}
                          className="group w-full flex flex-col items-center gap-3 px-1 text-center"
                        >
                          <span
                            className={`relative w-10 h-10 rounded-full border flex items-center justify-center font-mono text-sm font-bold transition-[background-color,border-color,color,transform] duration-200 group-active:scale-[0.96] ${
                              isActive
                                ? 'bg-indigo-600 border-indigo-400 text-white'
                                : isDone
                                  ? 'bg-[#0D0F17] border-indigo-500 text-indigo-400'
                                  : 'bg-[#050505] border-white/[0.08] text-gray-400 group-hover:text-white group-hover:border-white/30'
                            }`}
                          >
                            {isDone ? <Check className="w-4 h-4" /> : step.stepNumber}
                          </span>
                          <span
                            className={`text-[12px] leading-snug font-medium line-clamp-3 ${
                              isActive ? 'text-white' : 'text-gray-400 group-hover:text-white'
                            }`}
                          >
                            {step.title}
                          </span>
                        </button>
                      </li>
                    );
                  })}
                </ol>
              </nav>

              <div className="rounded-2xl border border-indigo-500/35 p-8 space-y-6">
                <div className="flex items-center justify-between gap-4 pb-5 border-b border-white/[0.08]">
                  <div className="flex items-center gap-4 min-w-0">
                    <span className="w-12 h-12 rounded-2xl bg-indigo-600 text-white font-mono font-bold text-lg flex items-center justify-center shrink-0">
                      {currentStep.stepNumber}
                    </span>
                    <div className="min-w-0">
                      <span className="text-xs text-indigo-400 font-medium">
                        Step {currentStep.stepNumber} of {String(total).padStart(2, '0')}
                      </span>
                      <h3 className="text-2xl font-bold text-white mt-0.5">{currentStep.title}</h3>
                    </div>
                  </div>
                  <span className="text-[12px] tabular-nums text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-full border border-emerald-500/30 shrink-0">
                    {selectedCountry} • {selectedIndustry}
                  </span>
                </div>
                {renderDetail(activeStepIndex)}
              </div>

              <div className="flex justify-center">
                <button onClick={handleLaunchEngagement} className={primaryBtn}>
                  Build Engagement Blueprint <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ) : (
            /* ============ MOBILE / TABLET: vertical timeline ============ */
            <div className="space-y-6">
              <div className="flex items-center justify-between gap-3">
                <h2 className="text-lg font-semibold text-white">Complete 9-Step Roadmap</h2>
                <span className="text-xs tabular-nums text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/30 truncate max-w-[60%]">
                  {selectedCountry} • {selectedIndustry}
                </span>
              </div>

              <ol className="relative max-w-3xl">
                {MARKET_ENTRY_9STEPS.map((step, idx) => {
                  const isActive = activeStepIndex === idx;
                  const isDone = idx < activeStepIndex;
                  const isLast = idx === total - 1;
                  return (
                    <li
                      key={step.stepNumber}
                      ref={el => {
                        itemRefs.current[idx] = el;
                      }}
                      className="relative pl-14 scroll-mt-24"
                    >
                      {!isLast && (
                        <span
                          aria-hidden="true"
                          className={`absolute left-5 top-10 bottom-0 w-px ${isDone ? 'bg-indigo-500' : 'bg-white/[0.08]'}`}
                        />
                      )}
                      <span
                        aria-hidden="true"
                        className={`absolute left-0 top-0.5 w-10 h-10 rounded-full border flex items-center justify-center font-mono text-sm font-bold transition-[background-color,border-color,color] duration-200 ${
                          isActive
                            ? 'bg-indigo-600 border-indigo-400 text-white'
                            : isDone
                              ? 'bg-[#0D0F17] border-indigo-500 text-indigo-400'
                              : 'bg-[#050505] border-white/[0.08] text-gray-400'
                        }`}
                      >
                        {isDone ? <Check className="w-4 h-4" /> : step.stepNumber}
                      </span>

                      <button
                        onClick={() => goToStep(idx)}
                        aria-expanded={isActive}
                        aria-current={isActive ? 'step' : undefined}
                        className="mc-tap w-full text-left py-2.5 active:scale-[0.99] transition-transform duration-200"
                      >
                        <span className="block text-xs text-gray-400 font-medium">
                          Step {step.stepNumber}
                        </span>
                        <span className={`block text-base font-semibold leading-snug ${isActive ? 'text-white' : 'text-[#E0E0E0]'}`}>
                          {step.title}
                        </span>
                      </button>

                      <div className={isLast ? 'pb-0' : 'pb-4'}>
                        {isActive && (
                          <div className="mt-1 mb-2 p-4 rounded-2xl bg-[#0a0a0a] border border-indigo-500/35">
                            {renderDetail(idx)}
                          </div>
                        )}
                      </div>
                    </li>
                  );
                })}
              </ol>

              <button onClick={handleLaunchEngagement} className={primaryBtn}>
                Build Engagement Blueprint <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </section>
    </MotionConfig>
  );
};
