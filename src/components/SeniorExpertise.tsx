import React, { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { ArrowRight, ChevronDown, Mail } from 'lucide-react';
import type { NavTab } from '../types';
import { BTN_PRIMARY, BTN_SECONDARY, EASE, TONES, reveal } from './ui/primitives';
import type { Tone } from './ui/primitives';
import { Illumination } from './ui/Hero';
import { SITE } from '../lib/seo';
import { MINDCRAFT_STRENGTHS, SENIOR_AREAS, SENIOR_PROFILE, WHY_WORK_WITH, type StrengthKey } from '../data/seniorExpertise';

/*
 * The senior pharmaceutical and healthcare experts MindCraft draws on, presented as a team: no individual is named.
 * The pillar and strength mapping is MindCraft's and is labelled as such.
 */

const PILLAR_TONE: Partial<Record<NavTab, Tone>> = {
  consulting: 'teal',
  'market-research': 'sky',
  'ai-solutions': 'emerald',
  'ai-training': 'amber',
  'life-sciences': 'indigo'
};

const strengthLabel = (key: StrengthKey) => MINDCRAFT_STRENGTHS.find((s) => s.key === key)?.label ?? key;

/** "Go-to-Market Strategies & Commercial Effectiveness" -> "Go-to-market strategies & commercial effectiveness" */
const sentenceCase = (s: string) => s.charAt(0) + s.slice(1).toLowerCase();

/* ------------------------------------------------------------------ */
/** One area of expertise: a ruled row that opens to its description and MindCraft's mapping. */
const AreaRow: React.FC<{
  area: (typeof SENIOR_AREAS)[number];
  index: number;
  open: boolean;
  onToggle: () => void;
  onNavigate: (tab: NavTab) => void;
}> = ({ area, index, open, onToggle, onNavigate }) => {
  const reduce = useReducedMotion();
  const tone = PILLAR_TONE[area.mindcraftRelevance.pillar] ?? 'indigo';
  const btnId = `se-area-btn-${area.id}`;
  const panelId = `se-area-${area.id}`;
  return (
    <motion.li
      {...reveal}
      transition={{ ...reveal.transition, delay: Math.min(index, 3) * 0.04 }}
      className="border-b border-white/[0.1]"
    >
      <h4 className="m-0">
        <button
          type="button"
          id={btnId}
          onClick={onToggle}
          aria-expanded={open}
          aria-controls={panelId}
          className="group mc-tap w-full grid grid-cols-[2.5rem_1fr_auto] sm:grid-cols-[3.5rem_1fr_auto] items-start gap-x-3 py-6 sm:py-7 text-left"
        >
          <span
            aria-hidden="true"
            className={`font-heading text-[1.5rem] sm:text-[2rem] font-medium leading-none tracking-[-0.03em] tabular-nums transition-colors duration-200 ${
              open ? 'text-indigo-300' : 'text-white/25 group-hover:text-indigo-300/80'
            }`}
          >
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="min-w-0 pt-0.5 font-heading text-[1.1875rem] sm:text-[1.375rem] font-medium leading-tight tracking-[-0.015em] text-white">
            {sentenceCase(area.title)}
          </span>
          <ChevronDown
            aria-hidden="true"
            className={`mt-1 h-5 w-5 shrink-0 text-white/45 transition-transform duration-200 group-hover:text-white/80 ${open ? 'rotate-180' : ''}`}
          />
        </button>
      </h4>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={btnId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.22, ease: EASE }}
            className="overflow-hidden"
          >
            <div className="pb-8 pl-[3.25rem] sm:pl-[4.25rem] pr-1">
              <div className="max-w-[38em] space-y-3 text-[15px] leading-relaxed text-white/75">
                {area.description.map((p, k) => (
                  <p key={k}>{p}</p>
                ))}
              </div>
              <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2">
                <span className="text-[13px] text-white/50">MindCraft's mapping:</span>
                <button
                  type="button"
                  onClick={() => onNavigate(area.mindcraftRelevance.pillar)}
                  className={`mc-tap px-3.5 rounded-full border text-[13px] inline-flex items-center gap-1.5 transition-colors duration-150 ${TONES[tone].chip} ${TONES[tone].hoverBorder}`}
                >
                  {area.mindcraftRelevance.pillarLabel}
                  <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </button>
                <span className="text-[13px] text-white/55">
                  {area.mindcraftRelevance.strengthens.map(strengthLabel).join(' · ')}
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.li>
  );
};

/* ------------------------------------------------------------------ */
/** Full senior expertise section (rendered inside About; the nav item "Senior Expertise" scrolls here). */
export const SeniorExpertiseProfile: React.FC<{
  onOpenIntake: () => void;
  onNavigate: (tab: NavTab) => void;
}> = ({ onOpenIntake, onNavigate }) => {
  const [openIds, setOpenIds] = useState<string[]>(() => [SENIOR_AREAS[0].id]);
  const toggle = (id: string) => setOpenIds((ids) => (ids.includes(id) ? ids.filter((x) => x !== id) : [...ids, id]));

  return (
    <section id="senior-expertise" aria-labelledby="se-title" className="mc-section mc-surface-2 relative overflow-hidden">
      <Illumination tone="indigo" strength={0.55} className="-left-48 -top-40 h-[34rem] w-[34rem]" />

      <div className="mc-container relative">
        {/* Opening: the label spans the row, so the experience figure and the heading share one top edge */}
        <p className="mc-meta mb-6 sm:mb-8" aria-hidden="true">
          Senior expertise
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-[11rem_1fr] lg:grid-cols-[13.75rem_1fr] gap-8 sm:gap-10 lg:gap-16 items-start">
          <motion.div {...reveal} className="sm:border-t sm:border-indigo-400/60 sm:pt-5">
            <p className="font-heading text-[4.5rem] sm:text-[5rem] lg:text-[6rem] font-medium leading-none tracking-[-0.04em] text-indigo-300 tabular-nums">
              {SENIOR_PROFILE.years}
            </p>
            <p className="mt-3 max-w-[12rem] text-[14px] leading-snug text-white/65">years of pharmaceutical and healthcare experience in African markets</p>
          </motion.div>

          <motion.div {...reveal} transition={{ ...reveal.transition, delay: 0.05 }} className="min-w-0">
            <h2 id="se-title" className="mc-h1">
              Senior experts, <em>three decades</em> in the field
            </h2>
            <p className="mt-3 text-[15px] font-medium text-indigo-300">
              {SENIOR_PROFILE.positioning} · {SENIOR_PROFILE.focus}
            </p>

            <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              <p className="font-heading text-[1.25rem] sm:text-[1.5rem] font-medium leading-snug tracking-[-0.015em] text-white">{SENIOR_PROFILE.summary}</p>
              <p className="text-[15px] leading-relaxed text-white/70 lg:border-l lg:border-white/[0.1] lg:pl-12">{SENIOR_PROFILE.background}</p>
            </div>
          </motion.div>
        </div>

        {/* Seven areas: framing on the left, an editorial list that opens on the right */}
        <div className="mt-16 sm:mt-24 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <motion.div {...reveal} className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start">
            <h3 className="mc-h2">{SENIOR_AREAS.length === 7 ? 'Seven' : SENIOR_AREAS.length} areas of expertise</h3>
            <p className="mt-4 text-[15px] leading-relaxed text-white/65">
              Open an area to see how our senior experts help, and where MindCraft maps it.
            </p>

            <div className="mt-8 border-t border-white/[0.1] pt-6">
              <h4 className="text-[13px] font-medium text-white/80">MindCraft's mapping</h4>
              <p className="mt-1 text-[13px] leading-snug text-white/50">Our reading of where this experience meets our four capabilities.</p>
              <ul className="mt-5 space-y-4">
                {MINDCRAFT_STRENGTHS.map((s) => {
                  const count = SENIOR_AREAS.filter((a) => a.mindcraftRelevance.strengthens.includes(s.key)).length;
                  return (
                    <li key={s.key} className="grid grid-cols-[1fr_auto] gap-x-4">
                      <span className="text-sm font-medium text-white">{s.label}</span>
                      <span className="font-mono text-[12px] text-indigo-300/85 tabular-nums">
                        {count}/{SENIOR_AREAS.length}
                        <span className="sr-only"> areas</span>
                      </span>
                      <span className="col-span-2 mt-0.5 text-[13px] leading-snug text-white/55">{s.note}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </motion.div>

          <ol className="lg:col-span-8 border-t border-white/[0.1]">
            {SENIOR_AREAS.map((a, i) => (
              <AreaRow
                key={a.id}
                area={a}
                index={i}
                open={openIds.includes(a.id)}
                onToggle={() => toggle(a.id)}
                onNavigate={onNavigate}
              />
            ))}
          </ol>
        </div>

        {/* Why work with our senior experts */}
        <motion.div {...reveal} className="mt-16 sm:mt-24">
          <h3 className="font-heading text-[1.375rem] sm:text-[1.625rem] font-medium tracking-[-0.015em] text-white">Why work with our senior experts</h3>
          <ul className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-x-10">
            {WHY_WORK_WITH.map((w) => (
              <li key={w.title} className="border-t border-white/[0.12] py-5">
                <h4 className="text-[15px] font-semibold text-white">{sentenceCase(w.title)}</h4>
                <p className="mt-1.5 text-sm leading-relaxed text-white/65">{w.text}</p>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Close: write to the team, or bring the question to MindCraft */}
        <motion.div
          {...reveal}
          className="mt-14 sm:mt-20 grid grid-cols-1 lg:grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.08]"
        >
          <div className="bg-[#0a0a0a] p-6 sm:p-8">
            <h3 className="font-heading text-[1.25rem] font-medium text-white">Speak to our senior experts</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-white/65 max-w-[30em]">Write to us and we will connect you with the right expert.</p>
            <a
              href={`mailto:${SITE.email}`}
              className="mc-tap mt-4 px-4 rounded-xl border border-white/10 hover:border-white/25 text-sm text-white/80 hover:text-white inline-flex items-center gap-2 transition-colors duration-150 break-all"
            >
              <Mail className="w-4 h-4 text-indigo-400 shrink-0" aria-hidden="true" />
              {SITE.email}
            </a>
          </div>
          <div className="bg-[#0a0a0a] p-6 sm:p-8">
            <h3 className="font-heading text-[1.25rem] font-medium text-white">Or bring the question to MindCraft</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-white/65 max-w-[30em]">
              A market access, regulatory or commercial question in Life Sciences? We will frame the engagement with you.
            </p>
            <div className="mt-5 flex flex-col sm:flex-row gap-3">
              <button type="button" onClick={onOpenIntake} className={BTN_PRIMARY}>
                Discuss a Life Sciences question
              </button>
              <button type="button" onClick={() => onNavigate('life-sciences')} className={BTN_SECONDARY}>
                Life Sciences practice
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
