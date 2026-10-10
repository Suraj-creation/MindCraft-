import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { EASE, SectionTabs } from './primitives';

/*
 * Building blocks for page openings. Each page composes its own hero from these
 * (split, opener, framed, panorama, type-led...) so pages share a voice without sharing a template.
 * Page openings are type-first by default; supplied art is opt-in, not a background requirement.
 */

/** The opening band of a page: section tabs on top, composition below. */
export const HeroSection: React.FC<{
  id?: string;
  labelledBy?: string;
  /** Show the in-section page tabs (Africa Hub, Capabilities...). On by default. */
  tabs?: boolean;
  className?: string;
  children: React.ReactNode;
}> = ({ id, labelledBy, tabs = true, className = '', children }) => (
  <section id={id} aria-labelledby={labelledBy} className={`relative isolate overflow-hidden border-b border-white/[0.07] ${className}`}>
    {tabs && (
      <div className="mc-container relative z-20 pt-6 sm:pt-8 lg:pt-10 [&>nav]:mb-0">
        <SectionTabs />
      </div>
    )}
    {children}
  </section>
);

/**
 * Title, lead and actions. The title settling in is the page's one entrance.
 * `meta` is a single mono line above the title (coordinates, not a slogan).
 */
export const HeroCopy: React.FC<{
  id?: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  meta?: React.ReactNode;
  /** One quiet line under the lead. */
  note?: React.ReactNode;
  actions?: React.ReactNode;
  size?: 'display' | 'title';
  className?: string;
  leadClassName?: string;
  children?: React.ReactNode;
}> = ({ id, title, lead, meta, note, actions, size = 'display', className = '', leadClassName = '', children }) => {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: reduce ? 0 : 0.24, delay: reduce ? 0 : 0.03, ease: EASE }}
    >
      {meta && <p className="mc-meta mb-5">{meta}</p>}
      <h1 id={id} className={size === 'display' ? 'mc-display' : 'mc-h1'}>
        {title}
      </h1>
      {lead && <p className={`mc-lead mt-5 sm:mt-6 ${leadClassName}`}>{lead}</p>}
      {note && <div className="mt-4 text-[13px] leading-relaxed text-white/55">{note}</div>}
      {children && <div className="mt-8">{children}</div>}
      {actions && <div className="mt-8 sm:mt-9 flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-3">{actions}</div>}
    </motion.div>
  );
};

const GLOW = {
  indigo: '99,102,241',
  emerald: '16,185,129',
  amber: '245,158,11',
  sky: '14,165,233',
  teal: '13,148,136'
} as const;

/** Local light: a soft radial pool placed behind one element. Position and size come from className. */
export const Illumination: React.FC<{ className?: string; tone?: keyof typeof GLOW; strength?: number }> = ({
  className = '',
  tone = 'indigo',
  strength = 1
}) => (
  <div
    aria-hidden="true"
    className={`pointer-events-none absolute ${className}`}
    style={{ background: `radial-gradient(closest-side, rgba(${GLOW[tone]},${0.2 * strength}), rgba(${GLOW[tone]},0))` }}
  />
);

/** A gradient laid over an image. Write the gradient to follow the composition, not as a blanket tint. */
export const Scrim: React.FC<{ background: string; className?: string }> = ({ background, className = '' }) => (
  <div aria-hidden="true" className={`pointer-events-none absolute inset-0 ${className}`} style={{ background }} />
);

/** Counts the data actually holds, set as typography on a hairline instead of boxed tiles. */
export const FactRow: React.FC<{ items: { value: React.ReactNode; label: string }[]; className?: string }> = ({ items, className = '' }) => (
  <dl className={`grid grid-cols-2 ${items.length >= 4 ? 'lg:grid-cols-4' : items.length === 3 ? 'sm:grid-cols-3' : ''} gap-x-8 gap-y-6 border-t border-white/[0.1] pt-6 ${className}`}>
    {items.map((m) => (
      <div key={m.label} className="min-w-0 flex flex-col-reverse">
        <dt className="mt-2 text-[13px] leading-snug text-white/55">{m.label}</dt>
        <dd className="font-heading text-[1.875rem] sm:text-[2.25rem] leading-none font-medium tracking-[-0.02em] text-white tabular-nums">{m.value}</dd>
      </div>
    ))}
  </dl>
);

/** A short caption for an illustration. Honest about what the picture is. */
export const ArtCaption: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <figcaption className={`mc-meta !text-xs !text-white/50 ${className}`}>{children}</figcaption>
);
