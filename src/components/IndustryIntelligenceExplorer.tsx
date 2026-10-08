import React, { useState, useMemo, useEffect, useRef, useCallback } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import {
  Building2,
  FlaskConical,
  Search,
  Layers,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Compass,
  FileText,
  Cpu,
  GraduationCap,
  Pill,
  Stethoscope,
  Activity,
  Boxes,
  Sprout,
  Car,
  CreditCard,
  Wheat,
  Wine,
  Radio,
  Palmtree,
  SunMedium,
  Building,
  Truck,
  Factory,
  Pickaxe,
  HeartPulse,
  ShoppingBag,
  Briefcase,
  Recycle,
  HelpCircle,
  TrendingUp,
  TableProperties,
  ChevronDown,
  X
} from 'lucide-react';
import { UNIVERSAL_INDUSTRIES } from '../data/industryAndAfricaData';
import { UniversalIndustry, NavTab } from '../types';

interface Props {
  onNavigate: (tab: NavTab) => void;
  onSelectIndustryForEngagement?: (industryName: string) => void;
  initialIndustryId?: string;
  headingLevel?: 1 | 2;
}

type CategoryFilter = 'all' | 'core-lifesciences' | 'diversified-vertical';
type Tone = 'indigo' | 'sky' | 'emerald' | 'amber';

const EASE = [0.16, 1, 0.3, 1] as const;

const TONE_TEXT: Record<Tone, string> = {
  indigo: 'text-indigo-400',
  sky: 'text-sky-400',
  emerald: 'text-emerald-400',
  amber: 'text-amber-400'
};
const TONE_DOT: Record<Tone, string> = {
  indigo: 'bg-indigo-500',
  sky: 'bg-sky-500',
  emerald: 'bg-emerald-500',
  amber: 'bg-amber-500'
};

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Pill, Stethoscope, Activity, Cpu, Boxes, Building2, FlaskConical, Sprout, Car, CreditCard,
  Wheat, Wine, Radio, Palmtree, SunMedium, Building, Truck, Factory, Pickaxe, HeartPulse,
  ShoppingBag, GraduationCap, Briefcase, Recycle
};

const renderIcon = (iconName: string, className = 'w-5 h-5') => {
  const Icon = ICONS[iconName] || Layers;
  return <Icon className={className} />;
};

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(
    () => typeof window !== 'undefined' && window.matchMedia(query).matches
  );
  useEffect(() => {
    const mq = window.matchMedia(query);
    const handler = () => setMatches(mq.matches);
    handler();
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, [query]);
  return matches;
}

/** Collapsible section: accordion on phones/tablets, always open on desktop. */
const Disclosure: React.FC<{
  title: string;
  icon: React.ReactNode;
  tone?: Tone;
  meta?: string;
  defaultOpen?: boolean;
  isDesktop: boolean;
  className?: string;
  children: React.ReactNode;
}> = ({ title, icon, tone = 'indigo', meta, defaultOpen = false, isDesktop, className = '', children }) => {
  const [open, setOpen] = useState(defaultOpen);
  const expanded = isDesktop || open;
  return (
    <div className={`min-w-0 bg-[#0A0A0A] border border-white/[0.08] rounded-2xl ${className}`}>
      <button
        type="button"
        aria-expanded={expanded}
        tabIndex={isDesktop ? -1 : 0}
        onClick={() => !isDesktop && setOpen(o => !o)}
        className={`w-full mc-tap flex items-center justify-between gap-3 px-4 sm:px-5 py-3 text-left active:scale-[0.99] transition-transform lg:cursor-default lg:pointer-events-none ${TONE_TEXT[tone]}`}
      >
        <span className="flex items-center gap-2 min-w-0 font-semibold text-sm">
          <span className="shrink-0" aria-hidden="true">{icon}</span>
          <span className="min-w-0">{title}</span>
        </span>
        <span className="flex items-center gap-2 shrink-0">
          {meta && <span className="font-mono text-[11px] text-gray-400">{meta}</span>}
          <ChevronDown
            aria-hidden="true"
            className={`w-4 h-4 text-gray-400 lg:hidden transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`}
          />
        </span>
      </button>
      {expanded && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.18, ease: EASE }}
          className="px-4 sm:px-5 pb-4 sm:pb-5"
        >
          {children}
        </motion.div>
      )}
    </div>
  );
};

const BulletList: React.FC<{ items: string[]; tone: Tone }> = ({ items, tone }) => (
  <ul className="space-y-2.5 text-[13px] sm:text-sm text-[#E0E0E0] leading-relaxed">
    {items.map((item, idx) => (
      <li key={idx} className="flex items-start gap-2.5">
        <span className={`w-1.5 h-1.5 rounded-full mt-[0.45rem] shrink-0 ${TONE_DOT[tone]}`} />
        <span className="min-w-0">{item}</span>
      </li>
    ))}
  </ul>
);

export const IndustryIntelligenceExplorer: React.FC<Props> = ({
  onNavigate,
  onSelectIndustryForEngagement,
  initialIndustryId,
  headingLevel = 2
}) => {
  const Heading = headingLevel === 1 ? 'h1' : 'h2';
  const [selectedIndustryId, setSelectedIndustryId] = useState<string>(
    initialIndustryId || UNIVERSAL_INDUSTRIES[0].id
  );
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<CategoryFilter>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'dossier' | 'matrix'>('dossier');
  const [activeMatrixIndustry, setActiveMatrixIndustry] = useState<UniversalIndustry | null>(null);
  const [showAllMatrix, setShowAllMatrix] = useState(false);

  const reduceMotion = useReducedMotion();
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  const dur = reduceMotion ? 0 : 0.2;

  const detailRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  const coreCount = useMemo(
    () => UNIVERSAL_INDUSTRIES.filter(i => i.category === 'core-lifesciences').length,
    []
  );
  const totalCount = UNIVERSAL_INDUSTRIES.length;
  const diversifiedCount = totalCount - coreCount;

  const byCategory = useMemo(
    () => UNIVERSAL_INDUSTRIES.filter(ind => activeCategoryFilter === 'all' || ind.category === activeCategoryFilter),
    [activeCategoryFilter]
  );

  const filteredIndustries = useMemo(() => {
    const q = searchQuery.toLowerCase();
    return byCategory.filter(ind =>
      ind.name.toLowerCase().includes(q) ||
      ind.tagline.toLowerCase().includes(q) ||
      ind.description.toLowerCase().includes(q) ||
      ind.context.toLowerCase().includes(q)
    );
  }, [byCategory, searchQuery]);

  const selectedIndustry = useMemo(() => {
    return UNIVERSAL_INDUSTRIES.find(ind => ind.id === selectedIndustryId) || UNIVERSAL_INDUSTRIES[0];
  }, [selectedIndustryId]);

  const handleStartEngagement = (indName: string) => {
    if (onSelectIndustryForEngagement) {
      onSelectIndustryForEngagement(indName);
    }
    onNavigate('engagement-builder');
  };

  const openDossier = useCallback((id: string) => {
    setSelectedIndustryId(id);
    setActiveMatrixIndustry(null);
    setViewMode('dossier');
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        detailRef.current?.scrollIntoView({ block: 'start', behavior: reduceMotion ? 'auto' : 'smooth' });
      });
    });
  }, [reduceMotion]);

  // Keep the selected industry visible inside its rail/list without moving the page.
  useEffect(() => {
    if (viewMode !== 'dossier') return;
    const container = listRef.current;
    if (!container) return;
    const el = container.querySelector<HTMLElement>(`[data-industry-id="${selectedIndustryId}"]`);
    if (!el) return;
    if (container.scrollWidth > container.clientWidth + 1) {
      container.scrollTo({
        left: el.offsetLeft - (container.clientWidth - el.clientWidth) / 2,
        behavior: reduceMotion ? 'auto' : 'smooth'
      });
    }
  }, [selectedIndustryId, viewMode, activeCategoryFilter, reduceMotion]);

  // Sheet / drawer: lock page scroll, Escape to close, focus the close button.
  useEffect(() => {
    if (!activeMatrixIndustry) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveMatrixIndustry(null);
    };
    window.addEventListener('keydown', onKey);
    closeBtnRef.current?.focus();
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [activeMatrixIndustry]);

  const filterChips: { id: CategoryFilter; label: string; count: number }[] = [
    { id: 'all', label: 'All', count: totalCount },
    { id: 'core-lifesciences', label: 'Core Life Sciences', count: coreCount },
    { id: 'diversified-vertical', label: 'Diversified', count: diversifiedCount }
  ];

  const stats = [
    { value: String(totalCount), label: 'Industry sectors' },
    { value: String(coreCount), label: 'Core Life Sciences' },
    { value: String(diversifiedCount), label: 'Diversified verticals' },
    { value: '4', label: 'Service pillars' }
  ];

  const chipClass = (active: boolean) =>
    `mc-tap inline-flex items-center gap-1.5 px-3.5 rounded-full border text-[13px] font-medium transition-colors duration-200 active:scale-[0.98] ${
      active
        ? 'bg-indigo-600 border-indigo-500 text-white'
        : 'bg-[#0A0A0A] border-white/[0.08] text-gray-400 hover:text-white hover:border-white/20'
    }`;

  const matrixIndustries = byCategory;
  const matrixVisible = showAllMatrix ? matrixIndustries : matrixIndustries.slice(0, 8);

  const fadeIn = {
    initial: { opacity: 0, y: 8 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-10%' },
    transition: { duration: dur, ease: EASE }
  } as const;

  const filterBar = (
    <div className="flex flex-wrap gap-2" role="group" aria-label="Filter industries by category">
      {filterChips.map(chip => (
        <button
          key={chip.id}
          type="button"
          aria-pressed={activeCategoryFilter === chip.id}
          onClick={() => {
            setActiveCategoryFilter(chip.id);
            setShowAllMatrix(false);
          }}
          className={chipClass(activeCategoryFilter === chip.id)}
        >
          {chip.label}
          <span className="font-mono text-[11px] opacity-70">{chip.count}</span>
        </button>
      ))}
    </div>
  );

  const isCoreSel = selectedIndustry.category === 'core-lifesciences';

  return (
    <section
      className="mc-section bg-[#050505] text-white overflow-x-clip"
      aria-labelledby="industry-explorer-title"
    >
      <div className="mc-container space-y-8 md:space-y-10">
        {/* Intent + proof */}
        <motion.header {...fadeIn} className="space-y-4">
          <p className="mc-eyebrow">
            <Layers className="w-3.5 h-3.5" aria-hidden="true" />
            Universal Industry Intelligence Explorer
          </p>
          <Heading id="industry-explorer-title" className={`${headingLevel === 1 ? 'mc-h1' : 'mc-h2'} font-semibold`}>
            Industry Intelligence &amp; Capabilities
          </Heading>
          <p className="mc-lead">
            Explore MindCraft’s specialized research, strategic consulting, AI capability building, and custom enterprise systems across {totalCount} distinct industry sectors.
          </p>
          <dl className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 pt-2">
            {stats.map(s => (
              <div key={s.label} className="rounded-xl bg-[#0A0A0A] border border-white/[0.08] px-4 py-3">
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-mono text-2xl sm:text-3xl font-semibold text-white leading-none">{s.value}</dd>
                <p className="mt-1.5 text-[11px] font-mono uppercase tracking-wider text-gray-400" aria-hidden="true">{s.label}</p>
              </div>
            ))}
          </dl>
        </motion.header>

        {/* View toggle */}
        <div
          role="tablist"
          aria-label="Explorer view"
          className="grid grid-cols-2 gap-1 p-1 bg-[#0A0A0A] border border-white/[0.08] rounded-xl sm:inline-grid sm:grid-cols-[auto_auto]"
        >
          {([
            { id: 'dossier', label: 'Industry Dossiers', icon: <FileText className="w-4 h-4 hidden sm:block" aria-hidden="true" /> },
            { id: 'matrix', label: '24 × 4 Capability Matrix', icon: <TableProperties className="w-4 h-4 hidden sm:block" aria-hidden="true" /> }
          ] as const).map(tab => (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={viewMode === tab.id}
              onClick={() => setViewMode(tab.id)}
              className={`mc-tap flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-[13px] font-medium leading-tight text-center transition-colors duration-200 active:scale-[0.98] ${
                viewMode === tab.id ? 'bg-indigo-600 text-white' : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {viewMode === 'matrix' ? (
          /* ===================== CAPABILITY MATRIX ===================== */
          <div className="space-y-5">
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                <TableProperties className="w-5 h-5 text-indigo-400 shrink-0" aria-hidden="true" />
                Cross-Industry Capability Coverage Matrix
              </h3>
              <p className="text-sm text-gray-400 max-w-3xl">
                Select any industry to inspect how MindCraft’s 4 pillars (Consulting, Research, AI Training, Enterprise Solutions) integrate for that vertical.
              </p>
              <div className="flex flex-wrap items-center justify-between gap-3">
                {filterBar}
                <div className="flex items-center gap-4 text-[11px] font-mono text-gray-400">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-indigo-500" /> Core Life Sciences
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500" /> Diversified Verticals
                  </span>
                </div>
              </div>
            </div>

            {/* Stacked cards below xl */}
            <div className="xl:hidden space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {matrixVisible.map((ind, i) => {
                  const isCore = ind.category === 'core-lifesciences';
                  const isSelected = selectedIndustryId === ind.id;
                  return (
                    <motion.button
                      key={ind.id}
                      type="button"
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-10%' }}
                      transition={{ duration: dur, ease: EASE, delay: reduceMotion ? 0 : Math.min(i % 4, 3) * 0.04 }}
                      onClick={() => {
                        setSelectedIndustryId(ind.id);
                        setActiveMatrixIndustry(ind);
                      }}
                      className={`mc-card-interactive mc-tap w-full text-left p-4 rounded-2xl border flex items-start gap-3 ${
                        isSelected ? 'bg-[#0D0F17] border-indigo-500/35' : 'bg-[#0A0A0A] border-white/[0.08]'
                      }`}
                    >
                      <span className={`p-2 rounded-lg shrink-0 ${isCore ? 'bg-indigo-500/15 text-indigo-400' : 'bg-white/5 text-[#E0E0E0]'}`}>
                        {renderIcon(ind.designMetaphor.icon, 'w-4 h-4')}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="flex items-center justify-between gap-2">
                          <span className="font-semibold text-sm text-white">{ind.name}</span>
                          <ArrowRight className="w-4 h-4 text-gray-400 shrink-0" aria-hidden="true" />
                        </span>
                        <span className={`mt-1 inline-block text-[11px] font-mono uppercase tracking-wide ${isCore ? 'text-indigo-400' : 'text-amber-400'}`}>
                          {isCore ? 'Life Sciences Core' : 'Diversified Vertical'}
                        </span>
                        <span className="mt-1.5 block text-[13px] text-gray-400 leading-snug line-clamp-2">{ind.tagline}</span>
                      </span>
                    </motion.button>
                  );
                })}
              </div>
              {matrixIndustries.length > 8 && (
                <button
                  type="button"
                  onClick={() => setShowAllMatrix(v => !v)}
                  className="mc-tap w-full rounded-xl border border-white/[0.08] bg-[#0A0A0A] text-[13px] font-medium text-[#E0E0E0] hover:border-white/20 active:scale-[0.98] transition"
                >
                  {showAllMatrix ? 'Show fewer' : `Show all ${matrixIndustries.length} industries`}
                </button>
              )}
            </div>

            {/* Full table on wide screens */}
            <div className="hidden xl:block bg-[#0A0A0A] border border-white/[0.08] rounded-2xl overflow-x-auto">
              <table className="w-full text-left text-[13px] border-collapse">
                <thead>
                  <tr className="border-b border-white/[0.08] bg-white/5 text-[#E0E0E0] font-mono text-[11px] uppercase tracking-wider">
                    <th scope="col" className="p-3 font-semibold min-w-[200px]">Industry Vertical</th>
                    <th scope="col" className="p-3 font-semibold min-w-[160px]">Tier &amp; Heritage</th>
                    <th scope="col" className="p-3 font-semibold min-w-[200px]">Strategic Consulting</th>
                    <th scope="col" className="p-3 font-semibold min-w-[200px]">Primary Research</th>
                    <th scope="col" className="p-3 font-semibold min-w-[200px]">AI Training &amp; Capability</th>
                    <th scope="col" className="p-3 font-semibold min-w-[200px]">Enterprise AI Solutions</th>
                    <th scope="col" className="p-3 font-semibold text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {matrixIndustries.map(ind => {
                    const isSelected = selectedIndustryId === ind.id;
                    const isCore = ind.category === 'core-lifesciences';
                    return (
                      <tr
                        key={ind.id}
                        onClick={() => {
                          setSelectedIndustryId(ind.id);
                          setActiveMatrixIndustry(ind);
                        }}
                        className={`cursor-pointer transition-colors duration-200 align-top ${
                          isSelected ? 'bg-[#0D0F17]' : 'hover:bg-white/[0.03]'
                        }`}
                      >
                        <td className="p-3">
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedIndustryId(ind.id);
                              setActiveMatrixIndustry(ind);
                            }}
                            className="mc-tap flex items-center gap-2 font-medium text-white text-left"
                          >
                            <span className={`p-1.5 rounded-lg shrink-0 ${isCore ? 'bg-indigo-500/15 text-indigo-400' : 'bg-white/5 text-[#E0E0E0]'}`}>
                              {renderIcon(ind.designMetaphor.icon, 'w-4 h-4')}
                            </span>
                            <span>{ind.name}</span>
                          </button>
                        </td>
                        <td className="p-3">
                          <span className={`px-2 py-0.5 rounded text-[11px] font-mono uppercase border ${
                            isCore
                              ? 'bg-indigo-500/10 text-indigo-400 border-indigo-500/35'
                              : 'bg-white/5 text-gray-400 border-white/[0.08]'
                          }`}>
                            {isCore ? 'Life Sciences Core' : 'Diversified Vertical'}
                          </span>
                        </td>
                        <td className="p-3 text-[#E0E0E0]">{ind.consultingAndStrategy[0] || 'Market strategy & operating model'}</td>
                        <td className="p-3 text-[#E0E0E0]">{ind.researchAndIntelligence[0] || 'Field audits & buyer intelligence'}</td>
                        <td className="p-3 text-[#E0E0E0]">{ind.capabilityBuilding[0] || 'Role-based applied AI training'}</td>
                        <td className="p-3 text-[#E0E0E0]">{ind.enterpriseSolutions[0] || 'Automated intelligence platform'}</td>
                        <td className="p-3 text-right">
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              openDossier(ind.id);
                            }}
                            className="mc-tap px-3 rounded-lg bg-white/5 hover:bg-indigo-600 text-[#E0E0E0] hover:text-white transition-colors duration-200 text-xs whitespace-nowrap"
                          >
                            Inspect Dossier
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Detail: bottom sheet on phones, side drawer on desktop */}
            <AnimatePresence>
              {activeMatrixIndustry && (
                <div className="fixed inset-0 z-[70]">
                  <motion.div
                    className="absolute inset-0 bg-black/70"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: dur, ease: EASE }}
                    onClick={() => setActiveMatrixIndustry(null)}
                  />
                  <motion.div
                    role="dialog"
                    aria-modal="true"
                    aria-label={`${activeMatrixIndustry.name} capability summary`}
                    initial={isDesktop ? { x: '100%' } : { y: '100%' }}
                    animate={{ x: 0, y: 0 }}
                    exit={isDesktop ? { x: '100%' } : { y: '100%' }}
                    transition={{ duration: reduceMotion ? 0 : 0.25, ease: EASE }}
                    className="absolute inset-x-0 bottom-0 max-h-[90dvh] overflow-y-auto overscroll-contain rounded-t-2xl bg-[#0A0A0A] border border-indigo-500/35 lg:inset-y-0 lg:left-auto lg:right-0 lg:w-[30rem] lg:max-h-none lg:rounded-none lg:border-y-0 lg:border-r-0"
                  >
                    <div className="sticky top-0 z-10 flex items-start justify-between gap-3 bg-[#0A0A0A] border-b border-white/[0.08] px-4 sm:px-6 py-4">
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="p-2.5 rounded-xl bg-indigo-500/15 text-indigo-400 border border-indigo-500/35 shrink-0">
                          {renderIcon(activeMatrixIndustry.designMetaphor.icon, 'w-5 h-5')}
                        </div>
                        <div className="min-w-0">
                          <h3 className="text-lg font-semibold text-white leading-tight">{activeMatrixIndustry.name}</h3>
                          <p className="text-[13px] text-gray-400 mt-0.5">{activeMatrixIndustry.tagline}</p>
                        </div>
                      </div>
                      <button
                        ref={closeBtnRef}
                        type="button"
                        aria-label="Close industry summary"
                        onClick={() => setActiveMatrixIndustry(null)}
                        className="mc-tap rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/5 active:scale-[0.96] transition shrink-0"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>

                    <div className="px-4 sm:px-6 py-4 space-y-3">
                      {([
                        { label: 'Strategic Consulting', tone: 'indigo', icon: <Compass className="w-4 h-4" />, items: activeMatrixIndustry.consultingAndStrategy },
                        { label: 'Market Research', tone: 'sky', icon: <Search className="w-4 h-4" />, items: activeMatrixIndustry.researchAndIntelligence },
                        { label: 'AI Training', tone: 'amber', icon: <GraduationCap className="w-4 h-4" />, items: activeMatrixIndustry.capabilityBuilding },
                        { label: 'Enterprise AI Solutions', tone: 'emerald', icon: <Cpu className="w-4 h-4" />, items: activeMatrixIndustry.enterpriseSolutions }
                      ] as { label: string; tone: Tone; icon: React.ReactNode; items: string[] }[]).map(group => (
                        <div key={group.label} className="p-4 rounded-xl bg-[#050505] border border-white/[0.08] space-y-2.5">
                          <div className={`flex items-center gap-2 text-[13px] font-semibold ${TONE_TEXT[group.tone]}`}>
                            {group.icon} {group.label}
                          </div>
                          <BulletList items={group.items.slice(0, 2)} tone={group.tone} />
                        </div>
                      ))}
                    </div>

                    <div className="sticky bottom-0 bg-[#0A0A0A] border-t border-white/[0.08] px-4 sm:px-6 pt-3 mc-safe-bottom flex flex-col sm:flex-row gap-2">
                      <button
                        type="button"
                        onClick={() => handleStartEngagement(activeMatrixIndustry.name)}
                        className="mc-tap flex-1 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-[13px] font-semibold text-white transition-colors active:scale-[0.98]"
                      >
                        Build Engagement
                      </button>
                      <button
                        type="button"
                        onClick={() => openDossier(activeMatrixIndustry.id)}
                        className="mc-tap flex-1 px-4 rounded-xl border border-white/[0.08] hover:border-white/20 text-[13px] font-medium text-[#E0E0E0] transition-colors active:scale-[0.98] flex items-center justify-center gap-1.5"
                      >
                        View Full 10-Part Dossier <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                      </button>
                    </div>
                  </motion.div>
                </div>
              )}
            </AnimatePresence>
          </div>
        ) : (
          /* ===================== DOSSIER VIEW ===================== */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            {/* Index: swipe rail on phones, sticky list on desktop */}
            <div className="min-w-0 lg:col-span-4 space-y-3 lg:sticky lg:top-20 lg:self-start">
              <div className="space-y-3">
                <label className="relative block">
                  <span className="sr-only">Search industries</span>
                  <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" aria-hidden="true" />
                  <input
                    type="search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={`Search ${totalCount} industries...`}
                    className="w-full h-11 bg-[#0A0A0A] border border-white/[0.08] rounded-xl pl-10 pr-3 text-base sm:text-sm text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500/60"
                  />
                </label>
                {filterBar}
              </div>

              <p className="lg:hidden text-[11px] font-mono uppercase tracking-wider text-gray-400">
                {filteredIndustries.length} of {totalCount} · swipe to browse
              </p>

              {filteredIndustries.length === 0 ? (
                <div className="rounded-2xl border border-white/[0.08] bg-[#0A0A0A] p-5 text-sm text-gray-400 space-y-3">
                  <p>No industries match “{searchQuery}”.</p>
                  <button
                    type="button"
                    onClick={() => { setSearchQuery(''); setActiveCategoryFilter('all'); }}
                    className="mc-tap px-4 rounded-xl border border-white/[0.08] text-[13px] text-[#E0E0E0] hover:border-white/20"
                  >
                    Clear filters
                  </button>
                </div>
              ) : (
                <div
                  ref={listRef}
                  className="relative flex gap-2 overflow-x-auto snap-x snap-mandatory pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:flex-col lg:overflow-x-visible lg:overflow-y-auto lg:snap-none lg:pb-0 lg:pr-1 lg:max-h-[calc(100dvh-15rem)]"
                >
                  {filteredIndustries.map(ind => {
                    const isSelected = selectedIndustryId === ind.id;
                    const isCore = ind.category === 'core-lifesciences';
                    return (
                      <button
                        key={ind.id}
                        type="button"
                        data-industry-id={ind.id}
                        aria-current={isSelected ? 'true' : undefined}
                        onClick={() => setSelectedIndustryId(ind.id)}
                        className={`mc-tap snap-start shrink-0 w-[min(15rem,72vw)] lg:w-full text-left p-3 rounded-2xl border flex items-start gap-3 transition-colors duration-200 active:scale-[0.98] ${
                          isSelected
                            ? 'bg-[#0D0F17] border-indigo-500/35'
                            : 'bg-[#0A0A0A] border-white/[0.08] hover:border-white/20'
                        }`}
                      >
                        <span className={`p-2 rounded-xl border shrink-0 ${
                          isSelected ? 'bg-indigo-600 text-white border-indigo-400' : 'bg-[#050505] text-gray-400 border-white/[0.08]'
                        }`}>
                          {renderIcon(ind.designMetaphor.icon, 'w-4 h-4')}
                        </span>
                        <span className="flex-1 min-w-0">
                          <span className="flex items-center justify-between gap-2">
                            <span className="font-semibold text-sm text-white truncate">{ind.name}</span>
                            {isCore && (
                              <span className="text-[11px] font-mono px-1.5 rounded bg-indigo-500/15 text-indigo-400 border border-indigo-500/35 shrink-0">
                                Core
                              </span>
                            )}
                          </span>
                          <span className="block text-[13px] text-gray-400 line-clamp-1 mt-0.5">{ind.tagline}</span>
                        </span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Detail */}
            <div ref={detailRef} className="min-w-0 lg:col-span-8 scroll-mt-20">
              <motion.div
                key={selectedIndustry.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: dur, ease: EASE }}
                className="space-y-4"
              >
                {/* Header card */}
                <div className="bg-[#0A0A0A] border border-white/[0.08] rounded-2xl p-5 md:p-7 space-y-5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className={`px-3 py-1 text-[11px] font-mono tracking-wider uppercase rounded-full border ${
                      isCoreSel
                        ? 'bg-indigo-500/10 text-indigo-400 border-indigo-500/35'
                        : 'bg-amber-500/10 text-amber-400 border-amber-500/30'
                    }`}>
                      {isCoreSel ? 'Core Life Sciences Sector' : 'Diversified Industry Vertical'}
                    </span>
                    {selectedIndustry.heritageNote && (
                      <span className="text-[11px] text-gray-400 font-mono">• {selectedIndustry.heritageNote}</span>
                    )}
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-2xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/35 shrink-0">
                      {renderIcon(selectedIndustry.designMetaphor.icon, 'w-7 h-7')}
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight leading-tight">
                        {selectedIndustry.name}
                      </h3>
                      <p className="text-indigo-400 text-sm md:text-base font-medium mt-1">
                        {selectedIndustry.tagline}
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-[#050505] border border-white/[0.08]">
                    <div className="text-[11px] font-mono text-gray-400 uppercase tracking-wider mb-1.5">
                      Industry Context &amp; Structural Dynamics
                    </div>
                    <p className="text-sm text-[#E0E0E0] leading-relaxed">{selectedIndustry.context}</p>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleStartEngagement(selectedIndustry.name)}
                    className="mc-tap w-full sm:w-auto px-5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-[13px] font-semibold text-white transition-colors active:scale-[0.98] flex items-center justify-center gap-2"
                  >
                    Build Engagement in {selectedIndustry.name} <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
                  </button>
                </div>

                {/* Key questions + research */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
                  <Disclosure
                    title="Key Strategic & Operational Questions"
                    icon={<HelpCircle className="w-4 h-4" />}
                    tone="indigo"
                    meta={String(selectedIndustry.keyQuestions.length)}
                    defaultOpen
                    isDesktop={isDesktop}
                  >
                    <div className="space-y-2">
                      {selectedIndustry.keyQuestions.map((q, idx) => (
                        <div key={idx} className="p-3 rounded-xl bg-[#050505] border border-white/[0.08] text-[13px] sm:text-sm text-[#E0E0E0] leading-relaxed flex items-start gap-2.5">
                          <span className="font-mono text-indigo-400 font-bold shrink-0">Q{idx + 1}</span>
                          <span className="min-w-0">{q}</span>
                        </div>
                      ))}
                    </div>
                  </Disclosure>

                  <Disclosure
                    title="Primary Research & Intelligence Methods"
                    icon={<Search className="w-4 h-4" />}
                    tone="sky"
                    meta={String(selectedIndustry.researchAndIntelligence.length)}
                    isDesktop={isDesktop}
                  >
                    <ul className="space-y-2">
                      {selectedIndustry.researchAndIntelligence.map((item, idx) => (
                        <li key={idx} className="p-3 rounded-xl bg-[#050505] border border-white/[0.08] text-[13px] sm:text-sm text-[#E0E0E0] leading-relaxed flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" aria-hidden="true" />
                          <span className="min-w-0">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </Disclosure>
                </div>

                {/* Consulting, AI, Capability */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3 gap-4 items-start">
                  <Disclosure
                    title="Strategic Consulting"
                    icon={<Compass className="w-4 h-4" />}
                    tone="indigo"
                    meta={String(selectedIndustry.consultingAndStrategy.length)}
                    isDesktop={isDesktop}
                  >
                    <BulletList items={selectedIndustry.consultingAndStrategy} tone="indigo" />
                  </Disclosure>

                  <Disclosure
                    title="AI & Automation"
                    icon={<Sparkles className="w-4 h-4" />}
                    tone="emerald"
                    meta={String(selectedIndustry.aiOpportunities.length)}
                    isDesktop={isDesktop}
                  >
                    <BulletList items={selectedIndustry.aiOpportunities} tone="emerald" />
                  </Disclosure>

                  <Disclosure
                    title="Capability & Enterprise"
                    icon={<GraduationCap className="w-4 h-4" />}
                    tone="amber"
                    meta={String(selectedIndustry.capabilityBuilding.length + selectedIndustry.enterpriseSolutions.length)}
                    isDesktop={isDesktop}
                  >
                    <div className="space-y-3">
                      <div>
                        <div className="text-[11px] font-mono uppercase tracking-wider text-gray-400 mb-2">Custom Training</div>
                        <BulletList items={selectedIndustry.capabilityBuilding} tone="amber" />
                      </div>
                      <div className="pt-3 border-t border-white/[0.08]">
                        <div className="text-[11px] font-mono uppercase tracking-wider text-gray-400 mb-2">Systems</div>
                        <BulletList items={selectedIndustry.enterpriseSolutions} tone="amber" />
                      </div>
                    </div>
                  </Disclosure>
                </div>

                {/* Illustrative engagement */}
                <Disclosure
                  title={selectedIndustry.illustrativeEngagement.title}
                  icon={<FileText className="w-4 h-4" />}
                  tone="indigo"
                  meta="Example"
                  isDesktop={isDesktop}
                  className="!border-indigo-500/35"
                >
                  <div className="space-y-5">
                    <span className="inline-block text-[11px] font-mono uppercase tracking-wider text-indigo-400 bg-indigo-500/10 px-2 py-1 rounded border border-indigo-500/35">
                      Illustrative Capability • Example Engagement • Potential Solution
                    </span>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {([
                        { n: '01. The Client Challenge', tone: 'amber', text: selectedIndustry.illustrativeEngagement.challenge },
                        { n: '02. Primary Investigation', tone: 'sky', text: selectedIndustry.illustrativeEngagement.investigation },
                        { n: '03. Strategic Intervention', tone: 'indigo', text: selectedIndustry.illustrativeEngagement.strategicDecision },
                        { n: '04. AI & Systems Layer', tone: 'emerald', text: selectedIndustry.illustrativeEngagement.aiLayer }
                      ] as { n: string; tone: Tone; text: string }[]).map(step => (
                        <div key={step.n} className="p-4 rounded-xl bg-[#050505] border border-white/[0.08] space-y-1.5">
                          <div className={`text-[11px] font-mono uppercase tracking-wider ${TONE_TEXT[step.tone]}`}>{step.n}</div>
                          <p className="text-[13px] sm:text-sm text-[#E0E0E0] leading-relaxed">{step.text}</p>
                        </div>
                      ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-4 border-t border-white/[0.08]">
                      <div>
                        <div className="text-[13px] font-semibold text-[#E0E0E0] mb-2.5 flex items-center gap-1.5">
                          <FileText className="w-4 h-4 text-indigo-400" aria-hidden="true" /> Typical Engagement Deliverables
                        </div>
                        <BulletList items={selectedIndustry.illustrativeEngagement.deliverables} tone="indigo" />
                      </div>
                      <div>
                        <div className="text-[13px] font-semibold text-[#E0E0E0] mb-2.5 flex items-center gap-1.5">
                          <TrendingUp className="w-4 h-4 text-emerald-400" aria-hidden="true" /> Measured Business Impact
                        </div>
                        <ul className="space-y-2.5 text-[13px] sm:text-sm text-[#E0E0E0] leading-relaxed">
                          {selectedIndustry.illustrativeEngagement.outcomeFramework.map((out, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" aria-hidden="true" />
                              <span className="min-w-0">{out}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </Disclosure>

                {/* Sector ecosystem */}
                <Disclosure
                  title={`${selectedIndustry.name} Sector Ecosystem Dimensions`}
                  icon={<Layers className="w-4 h-4" />}
                  tone="indigo"
                  meta="8 points"
                  isDesktop={isDesktop}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3">
                    {([
                      ['Market Dynamics', selectedIndustry.sectorEcosystem.market, false],
                      ['Competitor Landscape', selectedIndustry.sectorEcosystem.competitors, false],
                      ['Customer Segments', selectedIndustry.sectorEcosystem.customers, false],
                      ['Regulatory Environment', selectedIndustry.sectorEcosystem.regulators, false],
                      ['Operational Workflows', selectedIndustry.sectorEcosystem.operations, false],
                      ['Technology Stack', selectedIndustry.sectorEcosystem.technology, false],
                      ['Workforce & Skills', selectedIndustry.sectorEcosystem.people, false],
                      ['AI & Automation', selectedIndustry.sectorEcosystem.aiOpportunities, true]
                    ] as [string, string, boolean][]).map(([label, text, accent]) => (
                      <div key={label} className="p-3.5 rounded-xl bg-[#050505] border border-white/[0.08] space-y-1.5">
                        <div className={`font-mono text-[11px] uppercase tracking-wider ${accent ? 'text-emerald-400' : 'text-gray-400'}`}>{label}</div>
                        <div className="text-[13px] text-[#E0E0E0] leading-relaxed">{text}</div>
                      </div>
                    ))}
                  </div>
                </Disclosure>

                {/* Closing CTA */}
                <div className="p-5 md:p-6 rounded-2xl bg-[#0D0F17] border border-indigo-500/35 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="min-w-0">
                    <h4 className="font-semibold text-white text-base">
                      Ready to activate a project in {selectedIndustry.name}?
                    </h4>
                    <p className="text-[13px] text-gray-400 mt-1">
                      Configure an engagement combining research, strategy, AI training, and custom systems.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleStartEngagement(selectedIndustry.name)}
                    className="mc-tap px-6 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-sm font-semibold text-white transition-colors active:scale-[0.98] shrink-0 flex items-center justify-center gap-2"
                  >
                    Launch Engagement Builder <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
