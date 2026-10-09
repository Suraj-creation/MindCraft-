import React from 'react';
import { ChevronDown } from 'lucide-react';
import { BTN_SECONDARY } from './ui/primitives';

/** Small helpers shared by the capability pages (Business Consulting, Market Research, AI Training, AI Enterprise Solutions). */

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
/** Secondary hero action that moves down the same page. Translucent so it sits on photography or canvas. */
export const ScrollCue: React.FC<{ targetId: string; children: React.ReactNode }> = ({ targetId, children }) => (
  <button type="button" onClick={() => scrollToId(targetId)} className={`${BTN_SECONDARY} bg-[#050505]/60 backdrop-blur-sm`}>
    <span>{children}</span>
    <ChevronDown className="h-4 w-4" aria-hidden="true" />
  </button>
);

/** A short list with small accent markers. `marker` is a background class such as "bg-sky-400/80". */
export const MarkList: React.FC<{ items: string[]; marker: string; className?: string; itemClassName?: string }> = ({
  items,
  marker,
  className = '',
  itemClassName = 'text-[13px] leading-snug text-white/65'
}) => (
  <ul className={className}>
    {items.map((item) => (
      <li key={item} className={`flex gap-2.5 ${itemClassName}`}>
        <span aria-hidden="true" className={`mt-[0.45em] h-1 w-1 shrink-0 rounded-full ${marker}`} />
        <span className="min-w-0">{item}</span>
      </li>
    ))}
  </ul>
);

/** Honest marker for example content: what follows is illustrative, not a client engagement. */
export const IllustrativeTag: React.FC<{ children?: React.ReactNode; className?: string }> = ({
  children = 'Illustrative example',
  className = ''
}) => <span className={`mc-meta !text-[11px] !text-white/50 ${className}`}>{children}</span>;
