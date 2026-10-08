import React, { useId, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowRight, CheckCircle2, ChevronDown, FileText } from 'lucide-react';
import { EASE, TONES, reveal } from './ui/primitives';
import type { Tone } from './ui/primitives';

/** Shared building blocks for the three pillar pages (Market Research, AI Training, AI Enterprise). */

export const scrollToId = (id: string) => {
  const el = document.getElementById(id);
  if (!el) return;
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
};

/** Roving-tabindex keyboard support for role="tablist" widgets. */
export function tabKeyNav<T extends string | number>(
  e: React.KeyboardEvent,
  ids: T[],
  current: T,
  select: (id: T) => void,
  domId: (id: T) => string
) {
  const i = ids.indexOf(current);
  let n = i;
  if (e.key === 'ArrowRight') n = (i + 1) % ids.length;
  else if (e.key === 'ArrowLeft') n = (i - 1 + ids.length) % ids.length;
  else if (e.key === 'Home') n = 0;
  else if (e.key === 'End') n = ids.length - 1;
  else return;
  e.preventDefault();
  select(ids[n]);
  document.getElementById(domId(ids[n]))?.focus();
}

/* ------------------------------------------------------------------ */
/** Class A: what the page is, what MindCraft delivers here, key outcomes, CTA. */
export const PillarHero: React.FC<{
  tone: Tone;
  icon: React.ComponentType<{ className?: string }>;
  eyebrow: string;
  titleLight: string;
  titleBold: string;
  lead: string;
  outcomes: { label: string; text: string }[];
  ctaLabel: string;
  onCta: () => void;
  exploreLabel: string;
  exploreId: string;
}> = ({ tone, icon: Icon, eyebrow, titleLight, titleBold, lead, outcomes, ctaLabel, onCta, exploreLabel, exploreId }) => (
  <motion.header {...reveal} className="max-w-4xl">
    <div className={`mc-eyebrow ${TONES[tone].text}`}>
      <Icon className="h-3.5 w-3.5" />
      <span>{eyebrow}</span>
    </div>
    <h1 className="mc-h1 mt-3 font-light">
      {titleLight} <span className={`font-bold ${TONES[tone].text}`}>{titleBold}</span>
    </h1>
    <p className="mc-lead mt-4">{lead}</p>

    <ul className="mt-6 grid gap-2 sm:grid-cols-3 sm:gap-3">
      {outcomes.map((o) => (
        <li key={o.label} className={`flex items-start gap-3 rounded-xl border bg-[#0a0a0a] px-4 py-3 ${TONES[tone].border}`}>
          <CheckCircle2 className={`mt-0.5 h-4 w-4 shrink-0 ${TONES[tone].text}`} aria-hidden="true" />
          <span className="min-w-0">
            <span className="block text-sm font-semibold leading-snug text-white">{o.label}</span>
            <span className="mt-0.5 block text-xs leading-snug text-white/60">{o.text}</span>
          </span>
        </li>
      ))}
    </ul>

    <div className="mt-6 flex flex-col gap-3 sm:flex-row">
      <button
        type="button"
        onClick={onCta}
        className="mc-tap flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 text-sm font-semibold text-white transition-[background-color,transform] duration-150 hover:bg-indigo-500 active:scale-[0.98]"
      >
        <span>{ctaLabel}</span>
        <ArrowRight className="h-4 w-4" />
      </button>
      <button
        type="button"
        onClick={() => scrollToId(exploreId)}
        className="mc-tap flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 text-sm text-white/90 transition-[background-color,transform] duration-150 hover:bg-white/10 active:scale-[0.98]"
      >
        <span>{exploreLabel}</span>
        <ChevronDown className="h-4 w-4" />
      </button>
    </div>
  </motion.header>
);

/* ------------------------------------------------------------------ */
/** Capability group card: what + outcome visible; why + scope behind a disclosure. */
export const GroupCard: React.FC<{
  index: number;
  tone: Tone;
  icon: React.ComponentType<{ className?: string }>;
  name: string;
  what: string;
  why: string;
  outcome: string;
  included: string[];
  className?: string;
}> = ({ index, tone, icon: Icon, name, what, why, outcome, included, className = '' }) => {
  const [open, setOpen] = useState(false);
  const id = useId();
  const t = TONES[tone];
  return (
    <motion.li
      {...reveal}
      transition={{ ...reveal.transition, delay: Math.min(index, 4) * 0.05 }}
      className={`flex flex-col rounded-2xl border border-white/10 bg-[#0a0a0a] ${open ? t.border : ''} transition-colors duration-200 ${className}`}
    >
      <div className="p-4 sm:p-5">
        <div className="flex items-center gap-3">
          <span className={`inline-flex shrink-0 rounded-xl border p-2 ${t.border} ${t.bg} ${t.text}`}>
            <Icon className="h-4 w-4" />
          </span>
          <div className="min-w-0">
            <span className={`font-mono text-[11px] font-bold uppercase tracking-wider ${t.text}`}>0{index + 1}</span>
            <h3 className="text-base font-semibold leading-snug text-white">{name}</h3>
          </div>
        </div>
        <p className="mt-3 text-sm leading-snug text-white/75">{what}</p>
        <p className="mt-3 text-xs leading-snug">
          <span className="font-mono uppercase tracking-wider text-white/45">Outcome </span>
          <span className={t.text}>{outcome}</span>
        </p>
      </div>

      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls={id}
        className="mc-tap mt-auto flex w-full items-center justify-between gap-3 rounded-b-2xl border-t border-white/10 px-4 text-left font-mono text-xs text-white/70 transition-colors hover:text-white sm:px-5"
      >
        <span>{open ? 'Hide detail' : `Why it matters · ${included.length} inclusions`}</span>
        <ChevronDown className={`h-4 w-4 shrink-0 ${t.text} transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={id}
            role="region"
            aria-label={`${name} detail`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: EASE }}
            className="border-t border-white/5 px-4 pb-4 pt-3 sm:px-5"
          >
            <p className="text-xs leading-relaxed text-white/65">
              <span className="font-mono uppercase tracking-wider text-white/45">Why </span>
              {why}
            </p>
            <ul className="mt-3 space-y-2">
              {included.map((b) => (
                <li key={b} className="flex items-start gap-2 text-sm leading-snug text-[#E0E0E0]">
                  <span className={`mt-2 h-1 w-1 shrink-0 rounded-full bg-current ${t.text}`} aria-hidden="true" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.li>
  );
};

/* ------------------------------------------------------------------ */
export const DeliverablesBlock: React.FC<{ tone: Tone; items: string[] }> = ({ tone, items }) => (
  <motion.div {...reveal} className={`rounded-2xl border bg-[#0a0a0a] p-4 sm:p-6 ${TONES[tone].border}`}>
    <h3 className={`flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-wider ${TONES[tone].text}`}>
      <FileText className="h-3.5 w-3.5" aria-hidden="true" />
      <span>Deliverables clients can expect</span>
    </h3>
    <ul className="mt-3 grid gap-3 md:grid-cols-3">
      {items.map((d) => (
        <li key={d} className="flex items-start gap-2.5 text-sm leading-snug text-[#E0E0E0]">
          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" aria-hidden="true" />
          <span>{d}</span>
        </li>
      ))}
    </ul>
  </motion.div>
);
