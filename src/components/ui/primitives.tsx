import React, { createContext, useContext, useEffect, useId, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import type { NavTab } from '../../types';
import { navTabOf, sectionItemOf } from '../../data/navigation';

export const EASE = [0.16, 1, 0.3, 1] as const;

/** Semantic accents. Only existing brand tokens: indigo, emerald, sky, amber, teal. */
export type Tone = 'indigo' | 'emerald' | 'sky' | 'amber' | 'teal';
export const TONES: Record<Tone, { text: string; border: string; bg: string; chip: string; hoverBorder: string }> = {
  indigo:  { text: 'text-indigo-400',  border: 'border-indigo-500/30',  bg: 'bg-indigo-500/10',  chip: 'border-indigo-500/25 bg-indigo-500/10 text-indigo-200',  hoverBorder: 'hover:border-indigo-500/50' },
  emerald: { text: 'text-emerald-400', border: 'border-emerald-500/30', bg: 'bg-emerald-500/10', chip: 'border-emerald-500/25 bg-emerald-500/10 text-emerald-200', hoverBorder: 'hover:border-emerald-500/50' },
  sky:     { text: 'text-sky-400',     border: 'border-sky-500/30',     bg: 'bg-sky-500/10',     chip: 'border-sky-500/25 bg-sky-500/10 text-sky-200',           hoverBorder: 'hover:border-sky-500/50' },
  amber:   { text: 'text-amber-400',   border: 'border-amber-500/30',   bg: 'bg-amber-500/10',   chip: 'border-amber-500/25 bg-amber-500/10 text-amber-200',     hoverBorder: 'hover:border-amber-500/50' },
  teal:    { text: 'text-teal-400',    border: 'border-teal-500/30',    bg: 'bg-teal-500/10',    chip: 'border-teal-500/25 bg-teal-500/10 text-teal-200',        hoverBorder: 'hover:border-teal-500/50' }
};

/** Enter-on-view, once. Reserve this for an orienting moment rather than repeated rows. */
export const reveal = {
  initial: { opacity: 0, y: 10 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '0px 0px -10% 0px' },
  transition: { duration: 0.24, ease: EASE }
};

/** Current route and navigation, provided by App so page headers can show their section's pages. */
export const NavContext = createContext<{ activeTab: NavTab; navigate: (tab: NavTab) => void } | null>(null);

/** Shared button looks so every page's actions match the Overview. */
export const BTN_PRIMARY =
  'mc-tap px-5 rounded-xl bg-indigo-600 hover:bg-indigo-500 active:scale-[0.98] text-white text-sm font-semibold flex items-center justify-center gap-2 transition-[background-color,transform] duration-150';
export const BTN_SECONDARY =
  'mc-tap px-5 rounded-xl bg-white/5 hover:bg-white/10 active:scale-[0.98] text-white/90 text-sm border border-white/10 hover:border-white/20 flex items-center justify-center gap-2 transition-[background-color,border-color,transform] duration-150';

/* ---------------------------------------------------------------- */
/**
 * Tabs for the pages inside the current nav section (e.g. Africa Hub: regions, localization, entry, map).
 * Replaces a decorative kicker with something you can use: where you are, and where else you can go.
 */
export const SectionTabs: React.FC = () => {
  const nav = useContext(NavContext);
  if (!nav) return null;
  const section = sectionItemOf(nav.activeTab);
  if (!section?.dropdown || section.dropdown.length < 2) return null;
  const current = navTabOf(nav.activeTab);
  return (
    <nav
      aria-label={`${section.label} pages`}
      className="mb-10 sm:mb-14 -mx-4 px-4 sm:mx-0 sm:px-0 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
    >
      <div className="flex items-end gap-x-6 sm:gap-x-8 border-b border-white/[0.08] min-w-max">
        <span className="flex items-center gap-x-6 sm:gap-x-8 pb-3 text-[13px] font-medium text-white/40">
          {section.label}
          <span aria-hidden="true" className="h-3.5 w-px bg-white/15" />
        </span>
        <ul className="flex items-end gap-x-5 sm:gap-x-7">
          {section.dropdown.map((item) => {
            const active = item.id === current;
            return (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => nav.navigate(item.id)}
                  aria-current={active ? 'page' : undefined}
                  className={`relative min-h-11 flex items-end pb-3 text-[13px] font-medium whitespace-nowrap transition-colors duration-150 ${
                    active ? 'text-white' : 'text-white/55 hover:text-white'
                  }`}
                >
                  {item.short}
                  {active && <span aria-hidden="true" className="absolute inset-x-0 -bottom-px h-0.5 rounded-full bg-indigo-400" />}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

/* ---------------------------------------------------------------- */
/**
 * Page intro: section tabs -> title -> lead -> actions -> metrics.
 * Put it first inside `<section className="mc-section mc-page-intro">`.
 * The title settling in is the page's one entrance; nothing else on load competes with it.
 */
export const PageHeader: React.FC<{
  title: React.ReactNode;
  lead?: React.ReactNode;
  /** One quiet line under the lead. */
  meta?: React.ReactNode;
  /** Extra intro content shown between the lead and the actions. */
  children?: React.ReactNode;
  actions?: React.ReactNode;
  metrics?: { value: React.ReactNode; label: string }[];
  as?: 'h1' | 'h2';
  id?: string;
  className?: string;
}> = ({ title, lead, meta, children, actions, metrics, as = 'h1', id, className = '' }) => {
  const reduce = useReducedMotion();
  const Heading = as;
  return (
    <header className={className}>
      {as === 'h1' && <SectionTabs />}
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: reduce ? 0 : 0.24, ease: EASE }}
      >
        <div className="max-w-3xl">
          <Heading id={id} className={as === 'h1' ? 'mc-h1' : 'mc-h2'}>{title}</Heading>
          {lead && <p className="mc-lead mt-5">{lead}</p>}
          {meta && <div className="mt-4 text-[13px] leading-relaxed text-white/50">{meta}</div>}
        </div>
        {children && <div className="mt-8">{children}</div>}
        {actions && <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-3">{actions}</div>}
      </motion.div>
      {metrics && <MetricStrip items={metrics} className="mt-10 sm:mt-14" />}
    </header>
  );
};

/* ---------------------------------------------------------------- */
export const SectionHeader: React.FC<{
  title: React.ReactNode;
  lead?: React.ReactNode;
  action?: React.ReactNode;
  as?: 'h1' | 'h2';
  className?: string;
}> = ({ title, lead, action, as = 'h2', className = '' }) => {
  const Heading = as;
  return (
    <div className={`flex flex-col md:flex-row md:items-end justify-between gap-5 mb-8 md:mb-12 ${className}`}>
      <div className="max-w-2xl">
        <Heading className={as === 'h1' ? 'mc-h1' : 'mc-h2'}>{title}</Heading>
        {lead && <p className="mc-lead mt-4">{lead}</p>}
      </div>
      {action}
    </div>
  );
};

/* ---------------------------------------------------------------- */
/** Progressive disclosure. Closed by default; keyboard + screen-reader accessible. */
export const DeepDive: React.FC<{
  title: string;
  hint?: string;
  tone?: Tone;
  /** Ruled reading is the default; use a panel only where data controls need containment. */
  surface?: 'rule' | 'panel';
  defaultOpen?: boolean;
  children: React.ReactNode;
  className?: string;
}> = ({ title, hint, tone = 'indigo', surface = 'rule', defaultOpen = false, children, className = '' }) => {
  const [open, setOpen] = useState(defaultOpen);
  const reduce = useReducedMotion();
  const id = useId();
  return (
    <div className={`${surface === 'panel' ? 'rounded-xl border border-white/10 bg-[#0a0a0a]' : 'border-t border-white/[0.12]'} ${className}`}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls={id}
        className={`mc-tap w-full ${surface === 'panel' ? 'px-4 py-3' : 'py-4'} flex items-center justify-between gap-3 text-left`}
      >
        <span className="min-w-0">
          <span className="block text-sm font-semibold text-white">{title}</span>
          {hint && <span className="block text-xs text-white/50 mt-0.5">{hint}</span>}
        </span>
        <ChevronDown className={`w-4 h-4 shrink-0 ${TONES[tone].text} transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={id}
            role="region"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.22, ease: EASE }}
            className="overflow-hidden"
          >
            <div className={`${surface === 'panel' ? 'px-4 pb-4 pt-1 border-t border-white/5' : 'pb-5 pr-8 text-white/70'}`}>{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

/* ---------------------------------------------------------------- */
/** Sticky in-page navigation. Items map to element ids on the page. */
export const PageRail: React.FC<{ items: { id: string; label: string }[] }> = ({ items }) => {
  const [active, setActive] = useState(items[0]?.id);
  useEffect(() => {
    const els = items.map((i) => document.getElementById(i.id)).filter(Boolean) as HTMLElement[];
    if (!els.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: '-30% 0px -60% 0px', threshold: [0, 0.25, 0.5, 1] }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [items]);

  return (
    <nav aria-label="On this page" className="sticky top-16 lg:top-20 z-30 bg-[#050505]/90 backdrop-blur-md border-b border-white/10">
      <div className="mc-container">
        <ul className="flex gap-1.5 overflow-x-auto py-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {items.map((i) => (
            <li key={i.id} className="shrink-0">
              <a
                href={`#${i.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(i.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                aria-current={active === i.id ? 'true' : undefined}
                className={`mc-tap inline-flex items-center px-3 rounded-full text-[13px] font-medium border transition-colors ${
                  active === i.id ? 'bg-indigo-950/50 border-indigo-500/40 text-indigo-200' : 'border-white/10 text-white/60 hover:text-white'
                }`}
              >
                {i.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

/* ---------------------------------------------------------------- */
/** Counts the data actually holds, set as typography on a hairline instead of boxed tiles. */
const STRIP_COLS: Record<number, string> = { 1: 'grid-cols-1', 2: 'grid-cols-2', 3: 'grid-cols-3', 4: 'grid-cols-2 lg:grid-cols-4' };
export const MetricStrip: React.FC<{ items: { value: React.ReactNode; label: string }[]; className?: string }> = ({ items, className = '' }) => (
  <dl className={`grid ${STRIP_COLS[Math.min(items.length, 4)]} gap-x-8 gap-y-6 border-t border-white/[0.1] pt-6 ${className}`}>
    {items.map((m) => (
      <div key={m.label} className="min-w-0 flex flex-col-reverse">
        <dt className="mt-2 text-[13px] leading-snug text-white/55">{m.label}</dt>
        <dd className="font-heading text-[1.75rem] sm:text-[2.125rem] leading-none font-medium tracking-[-0.02em] text-white tabular-nums">{m.value}</dd>
      </div>
    ))}
  </dl>
);

/* ---------------------------------------------------------------- */
export const ContextualCTA: React.FC<{
  title: string;
  body?: string;
  primaryLabel: string;
  onPrimary: () => void;
  secondaryLabel?: string;
  onSecondary?: () => void;
}> = ({ title, body, primaryLabel, onPrimary, secondaryLabel, onSecondary }) => (
  <div className="rounded-2xl bg-[#0d0f17] border border-indigo-500/25 p-6 sm:p-10 flex flex-col lg:flex-row lg:items-end justify-between gap-6 lg:gap-10">
    <div className="max-w-2xl">
      <h3 className="font-heading text-[1.5rem] sm:text-[1.875rem] leading-tight font-medium tracking-[-0.02em] text-white">{title}</h3>
      {body && <p className="mt-3 text-[15px] text-white/65 leading-relaxed max-w-[34em]">{body}</p>}
    </div>
    <div className="flex flex-col sm:flex-row gap-3 shrink-0">
      <button type="button" onClick={onPrimary} className={BTN_PRIMARY}>
        {primaryLabel}
      </button>
      {secondaryLabel && onSecondary && (
        <button type="button" onClick={onSecondary} className={BTN_SECONDARY}>
          {secondaryLabel}
        </button>
      )}
    </div>
  </div>
);

/* ---------------------------------------------------------------- */
/** Onward links as a quiet ruled list rather than another row of cards. */
const ARROW_HOVER: Record<Tone, string> = {
  indigo: 'group-hover:text-indigo-400',
  emerald: 'group-hover:text-emerald-400',
  sky: 'group-hover:text-sky-400',
  amber: 'group-hover:text-amber-400',
  teal: 'group-hover:text-teal-400'
};
export const RelatedLinks: React.FC<{
  title?: string;
  items: { label: string; desc?: string; onClick: () => void; tone?: Tone }[];
}> = ({ title = 'Related', items }) => (
  <div>
    <h2 className="text-[13px] font-medium text-white/45 mb-1">{title}</h2>
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8">
      {items.map((i) => (
        <li key={i.label} className="border-t border-white/[0.08]">
          <button
            type="button"
            onClick={i.onClick}
            className="group mc-tap w-full text-left py-4 flex items-start justify-between gap-4"
          >
            <span className="min-w-0">
              <span className="block text-[15px] font-medium text-white group-hover:text-indigo-200 transition-colors duration-150">{i.label}</span>
              {i.desc && <span className="block text-[13px] text-white/50 mt-1 leading-snug">{i.desc}</span>}
            </span>
            <ArrowRight className={`mt-1 w-4 h-4 shrink-0 text-white/30 ${ARROW_HOVER[i.tone ?? 'indigo']} transition-colors duration-150`} />
          </button>
        </li>
      ))}
    </ul>
  </div>
);

/* ---------------------------------------------------------------- */
/** WHAT / WHY / OUTCOME in very little space. */
export const CapabilityCard: React.FC<{
  name: string;
  tone: Tone;
  icon: React.ComponentType<{ className?: string }>;
  what: string;
  why: string;
  outcome: string;
  index?: number;
  onOpen: () => void;
}> = ({ name, tone, icon: Icon, what, why, outcome, index = 0, onOpen }) => (
  <motion.button
    type="button"
    {...reveal}
    transition={{ ...reveal.transition, delay: index * 0.05 }}
    onClick={onOpen}
    className={`mc-card-interactive group text-left p-6 rounded-2xl bg-[#0a0a0a] border border-white/[0.08] ${TONES[tone].hoverBorder} flex flex-col h-full`}
  >
    <h3 className="flex items-center gap-2.5 font-heading text-lg font-medium tracking-[-0.01em] text-white">
      <Icon className={`w-[18px] h-[18px] shrink-0 ${TONES[tone].text}`} />
      {name}
    </h3>
    <p className="mt-3 text-[15px] text-white/75 leading-relaxed">{what}</p>
    <dl className="mt-5 space-y-3 text-[13px]">
      <div className="hidden sm:block"><dt className="font-medium text-white/40">Why it matters</dt><dd className="text-white/65 mt-1 leading-snug">{why}</dd></div>
      <div><dt className="font-medium text-white/40">Outcome</dt><dd className="text-white/85 mt-1 leading-snug">{outcome}</dd></div>
    </dl>
    <span className={`mt-auto pt-6 inline-flex items-center gap-1.5 text-sm font-medium ${TONES[tone].text}`}>
      Explore {name} <ArrowRight className="w-4 h-4" />
    </span>
  </motion.button>
);
