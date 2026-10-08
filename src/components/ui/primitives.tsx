import React, { useEffect, useId, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { ArrowRight, ChevronDown } from 'lucide-react';

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

/** Enter-on-view, once. Spread onto a motion element. */
export const reveal = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-8%' },
  transition: { duration: 0.28, ease: EASE }
};

/* ---------------------------------------------------------------- */
export const SectionHeader: React.FC<{
  eyebrow: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  action?: React.ReactNode;
  as?: 'h1' | 'h2';
  className?: string;
}> = ({ eyebrow, title, lead, action, as = 'h2', className = '' }) => {
  const Heading = as;
  return (
    <div className={`flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 sm:mb-9 ${className}`}>
      <div className="max-w-2xl">
        <span className="mc-eyebrow">{eyebrow}</span>
        <Heading className={`${as === 'h1' ? 'mc-h1' : 'mc-h2'} mt-3 font-light`}>{title}</Heading>
        {lead && <p className="mc-lead mt-3">{lead}</p>}
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
  defaultOpen?: boolean;
  children: React.ReactNode;
  className?: string;
}> = ({ title, hint, tone = 'indigo', defaultOpen = false, children, className = '' }) => {
  const [open, setOpen] = useState(defaultOpen);
  const reduce = useReducedMotion();
  const id = useId();
  return (
    <div className={`rounded-xl border border-white/10 bg-[#0a0a0a] ${className}`}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls={id}
        className="mc-tap w-full px-4 py-3 flex items-center justify-between gap-3 text-left"
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
            <div className="px-4 pb-4 pt-1 border-t border-white/5">{children}</div>
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
    <nav aria-label="On this page" className="sticky top-16 z-30 bg-[#050505]/90 backdrop-blur-md border-b border-white/10">
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
                className={`mc-tap inline-flex items-center px-3 rounded-full text-xs font-mono uppercase tracking-wider border transition-colors ${
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
const LG_COLS: Record<number, string> = { 1: 'lg:grid-cols-1', 2: 'lg:grid-cols-2', 3: 'lg:grid-cols-3', 4: 'lg:grid-cols-4' };
export const MetricStrip: React.FC<{ items: { value: React.ReactNode; label: string }[]; className?: string }> = ({ items, className = '' }) => (
  <dl className={`grid grid-cols-2 ${LG_COLS[Math.min(items.length, 4)]} gap-px rounded-2xl overflow-hidden bg-white/10 border border-white/10 ${className}`}>
    {items.map((m) => (
      <div key={m.label} className="bg-[#0a0a0a] p-4 sm:p-5">
        <dd className="font-heading text-2xl sm:text-3xl font-light text-white tabular-nums">{m.value}</dd>
        <dt className="mt-1 text-[11px] sm:text-xs font-mono uppercase tracking-wider text-white/50">{m.label}</dt>
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
  <div className="rounded-2xl bg-[#0d0f17] border border-indigo-500/25 p-5 sm:p-7 flex flex-col md:flex-row md:items-center justify-between gap-5">
    <div className="max-w-2xl">
      <h3 className="font-heading text-xl sm:text-2xl font-light text-white">{title}</h3>
      {body && <p className="mt-2 text-sm text-white/65 leading-relaxed">{body}</p>}
    </div>
    <div className="flex flex-col sm:flex-row gap-3 shrink-0">
      <button
        type="button"
        onClick={onPrimary}
        className="mc-tap px-5 rounded-xl bg-indigo-600 hover:bg-indigo-500 active:scale-[0.98] text-white text-sm font-semibold flex items-center justify-center gap-2 transition-[background-color,transform] duration-150"
      >
        <span>{primaryLabel}</span>
        <ArrowRight className="w-4 h-4" />
      </button>
      {secondaryLabel && onSecondary && (
        <button
          type="button"
          onClick={onSecondary}
          className="mc-tap px-5 rounded-xl bg-white/5 hover:bg-white/10 active:scale-[0.98] text-white/90 text-sm border border-white/10 transition-[background-color,transform] duration-150"
        >
          {secondaryLabel}
        </button>
      )}
    </div>
  </div>
);

/* ---------------------------------------------------------------- */
export const RelatedLinks: React.FC<{
  title?: string;
  items: { label: string; desc?: string; onClick: () => void; tone?: Tone }[];
}> = ({ title = 'Related', items }) => (
  <div>
    <div className="mc-eyebrow mb-3">{title}</div>
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
      {items.map((i) => (
        <li key={i.label}>
          <button
            type="button"
            onClick={i.onClick}
            className={`mc-card-interactive mc-tap w-full text-left px-4 py-3 rounded-xl bg-[#0a0a0a] border border-white/10 ${TONES[i.tone ?? 'indigo'].hoverBorder} flex items-center justify-between gap-3`}
          >
            <span className="min-w-0">
              <span className="block text-sm font-semibold text-white">{i.label}</span>
              {i.desc && <span className="block text-xs text-white/50 mt-0.5 leading-snug">{i.desc}</span>}
            </span>
            <ArrowRight className={`w-4 h-4 shrink-0 ${TONES[i.tone ?? 'indigo'].text}`} />
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
    className={`mc-card-interactive group text-left p-5 rounded-2xl bg-[#0a0a0a] border border-white/10 ${TONES[tone].hoverBorder} flex flex-col h-full`}
  >
    <span className={`inline-flex self-start p-2.5 rounded-xl border ${TONES[tone].border} ${TONES[tone].bg} ${TONES[tone].text}`}>
      <Icon className="w-5 h-5" />
    </span>
    <h3 className="mt-4 text-base font-bold text-white">{name}</h3>
    <p className="mt-1.5 text-sm text-white/75 leading-snug">{what}</p>
    <dl className="mt-4 space-y-2 text-xs">
      <div className="hidden sm:block"><dt className="font-mono uppercase tracking-wider text-white/40">Why</dt><dd className="text-white/65 mt-0.5 leading-snug">{why}</dd></div>
      <div><dt className="font-mono uppercase tracking-wider text-white/40">Outcome</dt><dd className={`${TONES[tone].text} mt-0.5 leading-snug`}>{outcome}</dd></div>
    </dl>
    <span className={`mt-auto pt-4 inline-flex items-center gap-1.5 text-sm font-medium ${TONES[tone].text}`}>
      Explore <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
    </span>
  </motion.button>
);
