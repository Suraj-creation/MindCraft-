import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Mail, MapPin, Phone, ShieldCheck, Globe2, Award, TrendingUp, BadgeCheck } from 'lucide-react';
import type { NavTab } from '../types';
import { ContextualCTA, DeepDive, TONES, reveal } from './ui/primitives';
import type { Tone } from './ui/primitives';
import {
  MINDCRAFT_STRENGTHS,
  SENIOR_AREAS,
  SENIOR_CONTACT,
  SENIOR_PROFILE,
  WHY_WORK_WITH,
  type StrengthKey
} from '../data/seniorExpertise';

const PILLAR_TONE: Partial<Record<NavTab, Tone>> = {
  consulting: 'teal',
  'market-research': 'sky',
  'ai-solutions': 'emerald',
  'ai-training': 'amber',
  'life-sciences': 'indigo'
};

const STRENGTH_ICON: Record<StrengthKey, React.ComponentType<{ className?: string }>> = {
  'life-sciences': Award,
  'african-market': Globe2,
  regulatory: ShieldCheck,
  commercial: TrendingUp
};

const initials = SENIOR_PROFILE.name
  .split(' ')
  .map((p) => p[0])
  .join('');

const Monogram: React.FC<{ className?: string }> = ({ className = '' }) => (
  <span
    aria-hidden="true"
    className={`inline-flex items-center justify-center rounded-xl border border-indigo-500/35 bg-[#0d0f17] font-heading font-light text-indigo-300 tracking-wider ${className}`}
  >
    {initials}
  </span>
);

/* ------------------------------------------------------------------ */
/** Compact homepage card. */
export const SeniorExpertiseCard: React.FC<{ onOpenProfile: () => void }> = ({ onOpenProfile }) => {
  const chips = [SENIOR_AREAS[0], SENIOR_AREAS[2], SENIOR_AREAS[3]];
  return (
    <motion.article
      {...reveal}
      aria-labelledby="se-card-title"
      className="rounded-2xl border border-white/10 bg-[#0a0a0a] p-5 sm:p-7 grid gap-6 lg:grid-cols-[auto_1fr_auto] lg:items-center"
    >
      <Monogram className="w-14 h-14 text-xl" />
      <div className="min-w-0">
        <span className="mc-eyebrow">Senior expertise · Life Sciences</span>
        <h3 id="se-card-title" className="font-heading text-xl sm:text-2xl font-light text-white mt-2">
          {SENIOR_PROFILE.name}
        </h3>
        <p className="mt-1.5 text-sm text-white/65 leading-snug max-w-xl">{SENIOR_PROFILE.shortPositioning}.</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {chips.map((c) => (
            <li
              key={c.id}
              className="px-3 py-1.5 rounded-full border border-white/10 bg-[#0d0f17] text-xs text-white/75"
            >
              {c.title}
            </li>
          ))}
        </ul>
      </div>
      <button
        type="button"
        onClick={onOpenProfile}
        className="mc-tap px-5 rounded-xl border border-indigo-500/35 bg-[#0d0f17] hover:border-indigo-500/60 active:scale-[0.98] text-white text-sm font-semibold inline-flex items-center justify-center gap-2 transition-[border-color,transform] duration-150"
      >
        <span>View senior expertise</span>
        <ArrowRight className="w-4 h-4 text-indigo-400" aria-hidden="true" />
      </button>
    </motion.article>
  );
};

/* ------------------------------------------------------------------ */
/** Full profile section, designed as a corporate module (not a personal portfolio). */
export const SeniorExpertiseProfile: React.FC<{
  onOpenIntake: () => void;
  onNavigate: (tab: NavTab) => void;
}> = ({ onOpenIntake, onNavigate }) => {
  return (
    <section id="senior-expertise" aria-labelledby="se-title" className="scroll-mt-28 space-y-8 md:space-y-10">
      {/* Executive header: asymmetric split */}
      <div className="grid gap-6 lg:gap-12 lg:grid-cols-12">
        <motion.div {...reveal} className="lg:col-span-7">
          <span className="mc-eyebrow">Senior expertise · Life Sciences</span>
          <h2 id="se-title" className="mc-h2 font-light mt-3">
            Senior <span className="font-bold text-indigo-400">Life Sciences</span> expertise behind MindCraft
          </h2>
          <p className="mc-lead mt-3">{SENIOR_PROFILE.background}</p>
        </motion.div>

        <motion.aside
          {...reveal}
          aria-label="Senior expert"
          className="lg:col-span-5 lg:self-start rounded-2xl border border-white/10 bg-[#0a0a0a] p-5 sm:p-6 flex gap-4 items-start"
        >
          <Monogram className="w-14 h-14 text-xl shrink-0" />
          <div className="min-w-0">
            <div className="font-heading text-lg text-white">{SENIOR_PROFILE.name}</div>
            <div className="text-[11px] font-mono uppercase tracking-wider text-indigo-400 mt-0.5">
              {SENIOR_PROFILE.role}
            </div>
            <p className="mt-2 text-sm text-white/70 leading-snug">{SENIOR_PROFILE.positioning}</p>
            <div className="mt-3 inline-flex items-center gap-1.5 text-xs text-white/60">
              <MapPin className="w-3.5 h-3.5 text-white/40" aria-hidden="true" />
              Based in {SENIOR_PROFILE.basedIn}
            </div>
          </div>
        </motion.aside>
      </div>

      {/* 7 areas */}
      <div>
        <h3 className="mc-eyebrow mb-3">
          {SENIOR_AREAS.length} areas of expertise
        </h3>
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 items-start">
          {SENIOR_AREAS.map((a, i) => {
            const tone = PILLAR_TONE[a.mindcraftRelevance.pillar] ?? 'indigo';
            return (
              <motion.li
                key={a.id}
                {...reveal}
                transition={{ ...reveal.transition, delay: Math.min(i, 5) * 0.05 }}
                className={i === 0 ? 'lg:col-span-2' : ''}
              >
                <DeepDive
                  tone={tone}
                  title={`${String(i + 1).padStart(2, '0')}  ${a.title}`}
                  hint={`Supports ${a.mindcraftRelevance.pillarLabel}`}
                >
                  <div className="space-y-2.5 text-sm text-white/75 leading-relaxed pt-2">
                    {a.description.map((p, k) => (
                      <p key={k}>{p}</p>
                    ))}
                  </div>
                  <div className="mt-4 pt-3 border-t border-white/5 flex flex-wrap items-center gap-2">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-white/40">
                      MindCraft mapping
                    </span>
                    <button
                      type="button"
                      onClick={() => onNavigate(a.mindcraftRelevance.pillar)}
                      className={`mc-tap px-3 rounded-full border text-xs inline-flex items-center gap-1.5 ${TONES[tone].chip}`}
                    >
                      {a.mindcraftRelevance.pillarLabel}
                      <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </button>
                  </div>
                </DeepDive>
              </motion.li>
            );
          })}
        </ul>
        <p className="mt-3 text-[11px] font-mono text-white/40">
          Area descriptions follow the expert's own business profile. Pillar mapping is MindCraft's.
        </p>
      </div>

      {/* Why work with */}
      <div>
        <h3 className="mc-eyebrow mb-3">Why work with this expertise</h3>
        <ul className="grid gap-3 md:grid-cols-3">
          {WHY_WORK_WITH.map((w, i) => (
            <motion.li
              key={w.title}
              {...reveal}
              transition={{ ...reveal.transition, delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-[#0a0a0a] p-5"
            >
              <BadgeCheck className="w-5 h-5 text-indigo-400" aria-hidden="true" />
              <h4 className="mt-3 text-base font-bold text-white">{w.title}</h4>
              <p className="mt-1.5 text-sm text-white/70 leading-relaxed">{w.text}</p>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* How this strengthens MindCraft */}
      <motion.div {...reveal} className="rounded-2xl border border-indigo-500/25 bg-[#0d0f17] p-5 sm:p-7">
        <h3 className="mc-eyebrow">How this strengthens MindCraft</h3>
        <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {MINDCRAFT_STRENGTHS.map((s) => {
            const Icon = STRENGTH_ICON[s.key];
            const count = SENIOR_AREAS.filter((a) => a.mindcraftRelevance.strengthens.includes(s.key)).length;
            return (
              <li key={s.key} className="flex gap-3">
                <span className="shrink-0 w-9 h-9 rounded-lg border border-indigo-500/35 bg-[#0a0a0a] text-indigo-400 flex items-center justify-center">
                  <Icon className="w-4 h-4" />
                </span>
                <div className="min-w-0">
                  <div className="text-sm font-semibold text-white">{s.label}</div>
                  <p className="text-xs text-white/60 mt-0.5 leading-snug">{s.note}</p>
                  <div className="mt-1 text-[11px] font-mono uppercase tracking-wider text-indigo-400/80">
                    {count} of {SENIOR_AREAS.length} areas
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
        <p className="mt-4 text-[11px] font-mono text-white/40">MindCraft mapping, not part of the expert's own profile.</p>
      </motion.div>

      {/* Contact + CTA */}
      <div className="space-y-4">
        <ul className="flex flex-col sm:flex-row gap-2" aria-label="Expert contact details">
          <li>
            <a
              href={`mailto:${SENIOR_CONTACT.email}`}
              className="mc-tap w-full px-4 rounded-xl border border-white/10 bg-[#0a0a0a] hover:border-white/25 text-sm text-white/80 inline-flex items-center gap-2 transition-colors duration-150 break-all"
            >
              <Mail className="w-4 h-4 text-indigo-400 shrink-0" aria-hidden="true" />
              {SENIOR_CONTACT.email}
            </a>
          </li>
          <li>
            <a
              href={`tel:${SENIOR_CONTACT.phone.replace(/[^+\d]/g, '')}`}
              className="mc-tap w-full px-4 rounded-xl border border-white/10 bg-[#0a0a0a] hover:border-white/25 text-sm text-white/80 inline-flex items-center gap-2 transition-colors duration-150"
            >
              <Phone className="w-4 h-4 text-indigo-400 shrink-0" aria-hidden="true" />
              {SENIOR_CONTACT.phone}
            </a>
          </li>
        </ul>
        <ContextualCTA
          title="Bring a Life Sciences question to MindCraft"
          body="Bring a Life Sciences market access, regulatory or commercial question to MindCraft and we will frame the engagement together."
          primaryLabel="Discuss with MindCraft"
          onPrimary={onOpenIntake}
          secondaryLabel="Life Sciences practice"
          onSecondary={() => onNavigate('life-sciences')}
        />
      </div>
    </section>
  );
};
