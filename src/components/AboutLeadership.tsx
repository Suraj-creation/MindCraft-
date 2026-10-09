import React from 'react';
import { MotionConfig, motion } from 'motion/react';
import { NavTab } from '../types';
import { ContextualCTA, EASE, RelatedLinks, reveal } from './ui/primitives';
import { ArtImage } from './ui/ArtImage';
import { HeroCopy, HeroSection, Scrim } from './ui/Hero';
import { SeniorExpertiseProfile } from './SeniorExpertise';

interface AboutLeadershipProps {
  onOpenIntake: () => void;
  setActiveTab: (tab: NavTab) => void;
}

/*
 * Every statement on this page comes from the 2026 corporate profile: vision and mission (s.1), core values (s.1),
 * what sets MindCraft apart (s.7), engagement process (s.8), delivery modalities (s.6), team and partnerships (s.9).
 * No offices besides the Nairobi headquarters, no named partners, no certifications, no figures.
 */

const VISION =
  "To be Africa's most trusted partner for AI-powered business growth — recognised globally for combining deep Life Sciences expertise with practical, ethical and impactful artificial intelligence adoption.";
const MISSION =
  'To equip organisations across Africa, Europe and the United States with the market intelligence, strategic advisory and AI capability they need to compete, grow and lead in their industries — with a special commitment to advancing Life Sciences enterprises operating in and around the African continent.';

const VALUES = [
  { name: 'Sector depth', text: 'Advice and solutions grounded in real industry knowledge, not generic frameworks.' },
  { name: 'Applied rigour', text: 'Research and AI outputs that are decision-ready, not academic exercises.' },
  { name: 'African context, global standard', text: 'World-class consulting delivered with authentic local understanding.' },
  { name: 'Responsible AI', text: 'Every AI training programme and enterprise solution built on data privacy, ethics and governance.' },
  { name: 'Client partnership', text: 'Long-term relationships built on measurable, repeatable value.' }
];

const APART = [
  {
    title: 'Deep Life Sciences heritage',
    text: 'Our core expertise is built on Life Sciences: pharmaceuticals, medical devices, diagnostics, equipment, surgical consumables and hospitals. That means faster onboarding, sharper questions and recommendations grounded in real industry context from day one.'
  },
  {
    title: 'Pan-African footprint, local fluency',
    text: 'Headquartered in Nairobi and structured for reach across the continent, we pair on-the-ground market knowledge, regulatory awareness and cultural fluency with international consulting standards.'
  },
  {
    title: 'One partner, four integrated capabilities',
    text: 'Research informs strategy, strategy guides AI investment, and training makes adoption stick. We deliver all four as one coherent engagement, not four disconnected vendors.'
  },
  {
    title: 'Applied, decision-ready outputs',
    text: 'Every deliverable, from a research report to a training curriculum to a deployed solution, is built to be used, not left as a theoretical framework.'
  },
  {
    title: 'Responsible, governed AI by design',
    text: 'Data privacy, ethics and governance are built into every AI training programme and enterprise solution. That matters most in regulated industries such as pharmaceuticals, healthcare and banking.'
  }
];

/* Status is stated plainly: the firm was founded in 2026 and its partnerships are still being formed. */
const TEAM: { status: string; mark: 'solid' | 'half' | 'ring'; title: string; text: string }[] = [
  {
    status: 'In place',
    mark: 'solid',
    title: 'Core team',
    text: 'Consulting, market research and AI/technology professionals with direct experience across Life Sciences and diversified industries in African, European and US markets.'
  },
  {
    status: 'Growing',
    mark: 'half',
    title: 'Associate and in-country network',
    text: 'Associate consultants, subject-matter experts and in-country research partners across Africa, so multi-country and multi-sector work keeps one method and one standard of quality.'
  },
  {
    status: 'Being built',
    mark: 'ring',
    title: 'Formal partnerships',
    text: 'Academic, technology and industry-association partnerships, to strengthen our research infrastructure, AI capability and reach across priority African markets.'
  }
];

const STAGES = [
  { name: 'Discovery', text: 'A first consultation to understand your needs, objectives, market context and measures of success.' },
  { name: 'Proposal', text: 'A tailored scope of work, method, timeline and budget across the relevant service pillars.' },
  { name: 'Design', text: 'Content, research instruments or solution architecture developed with your input and validation.' },
  { name: 'Delivery', text: 'Training, advisory, research or AI implementation, with regular progress check-ins.' },
  { name: 'Evaluation', text: 'Feedback, quality assurance, impact assessment and final reporting.' },
  { name: 'Follow-up', text: 'Optional ongoing support, coaching, refresher training or solution enhancements.', optional: true }
];

const FORMATS = [
  'In-person workshops, training and advisory sessions across African, European and US locations',
  'Virtual training, webinars and remote advisory support',
  'Hybrid programmes combining in-person and virtual delivery',
  'Short courses (1–5 days) and longer structured programmes spanning weeks to months',
  'Retainer-based advisory for ongoing strategic, research or AI needs',
  'One-off consulting assignments and clearly scoped projects',
  'Custom engagements combining any of the four pillars as needed'
];

/* The quote sits in the image's dark lower-left (chairs, table edge, interior); the light thins out toward the map and skyline */
const QUOTE_CORNER =
  'radial-gradient(ellipse 80% 125% at 0% 100%, rgba(5,5,5,0.94) 0%, rgba(5,5,5,0.86) 34%, rgba(5,5,5,0.5) 60%, rgba(5,5,5,0) 84%), linear-gradient(90deg, rgba(5,5,5,0.55) 0%, rgba(5,5,5,0.2) 30%, rgba(5,5,5,0) 46%)';
/* Mobile: the quote sits below, so only the frame's edges are settled into the canvas */
const FRAME_EDGE = 'linear-gradient(0deg, rgba(5,5,5,0.35) 0%, rgba(5,5,5,0) 28%)';

const TeamMark: React.FC<{ kind: 'solid' | 'half' | 'ring' }> = ({ kind }) => (
  <span
    aria-hidden="true"
    className={`inline-block h-2.5 w-2.5 shrink-0 rounded-full border border-indigo-400 ${
      kind === 'solid' ? 'bg-indigo-400' : kind === 'half' ? 'bg-[linear-gradient(90deg,#818cf8_50%,transparent_50%)]' : 'bg-transparent'
    }`}
  />
);

export const AboutLeadership: React.FC<AboutLeadershipProps> = ({ onOpenIntake, setActiveTab }) => {
  return (
    <MotionConfig reducedMotion="user">
      <div id="about-section" className="bg-[#050505]">
        {/* ---------------------------------------------------------- */}
        {/* Opening: type-led statement, then the horizon with the vision set into its dark corner */}
        <HeroSection id="about-who" labelledBy="about-title" className="bg-[#050505]">
          <div className="mc-container relative z-10 pt-10 sm:pt-14 lg:pt-20">
            <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-y-6 lg:gap-x-16 lg:items-end">
              <HeroCopy
                id="about-title"
                className="lg:col-span-7"
                meta={<span aria-hidden="true">About MindCraft</span>}
                title={
                  <>
                    <span className="sr-only">About MindCraft: </span>
                    <span className="block">Sector depth.</span>
                    <span className="block">African context.</span>
                    <span className="block">
                      <em>Global standard.</em>
                    </span>
                  </>
                }
              />
              <motion.div
                className="lg:col-span-5 lg:pb-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
              >
                <p className="mc-lead">
                  Consulting, market intelligence and applied AI—with specialist Life Sciences depth and an African focus.
                </p>
                <p className="mt-4 text-[13px] leading-relaxed text-white/55">Founded 2026 · Nairobi, Kenya · Africa, Europe and the United States.</p>
              </motion.div>
            </div>

          </div>

          <figure className="mc-art-bleed relative mt-10 aspect-[16/10] sm:mt-14 sm:aspect-[2/1] lg:mt-16 lg:aspect-[21/9]">
            <ArtImage
              name="about-skyline"
              alt="Illustration: a strategy table with maps and reports, a city at sunset beyond tall windows"
              priority
              sizes="100vw"
              position="object-[95%_50%] sm:object-[80%_50%] lg:object-[50%_50%]"
            />
            <Scrim background={FRAME_EDGE} className="lg:hidden" />
            <Scrim background={QUOTE_CORNER} className="hidden lg:block" />
            <div className="mc-container mc-art-copy flex h-full items-end py-7 sm:py-9 lg:py-11">
              <div className="max-w-[30rem]">
                <p className="mc-meta">Our vision</p>
                <blockquote className="mt-3 font-heading text-[1.25rem] sm:text-[1.5rem] lg:text-[1.1875rem] xl:text-[1.4375rem] font-medium leading-[1.3] tracking-[-0.01em] text-white">
                  <p>“{VISION}”</p>
                </blockquote>
              </div>
            </div>
          </figure>
        </HeroSection>

        {/* ---------------------------------------------------------- */}
        {/* Mission and values: a typographic statement, then the values as a run-in manifesto */}
        <section id="about-values" className="mc-section" aria-labelledby="about-mission-title">
          <div className="mc-container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-16">
              <motion.h2 {...reveal} id="about-mission-title" className="mc-h2 lg:col-span-4">
                Our mission
              </motion.h2>
              <motion.p
                {...reveal}
                transition={{ ...reveal.transition, delay: 0.05 }}
                className="lg:col-span-8 font-heading text-[1.375rem] sm:text-[1.75rem] lg:text-[2rem] font-medium leading-[1.25] tracking-[-0.015em] text-white/85"
              >
                {MISSION}
              </motion.p>
            </div>

            <div className="mt-16 sm:mt-24 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
              <motion.div {...reveal} className="lg:col-span-4">
                <h3 className="font-heading text-[1.375rem] sm:text-[1.625rem] font-medium tracking-[-0.015em] text-white">Five values</h3>
                <p className="mt-3 max-w-[22rem] text-[15px] leading-relaxed text-white/60">What every engagement is held to, whichever pillar it starts in.</p>
              </motion.div>
              <ol className="lg:col-span-8 space-y-7 sm:space-y-9">
                {VALUES.map((v, i) => (
                  <motion.li
                    key={v.name}
                    {...reveal}
                    transition={{ ...reveal.transition, delay: Math.min(i, 3) * 0.05 }}
                    className="relative pl-10 sm:pl-14"
                  >
                    <span aria-hidden="true" className="absolute left-0 top-[0.55em] font-mono text-[12px] tabular-nums text-indigo-300/80">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <p className="font-heading text-[1.25rem] sm:text-[1.5rem] lg:text-[1.625rem] leading-[1.3] tracking-[-0.01em]">
                      <strong className="font-medium text-white">{v.name}.</strong>{' '}
                      <span className="text-white/60">{v.text}</span>
                    </p>
                  </motion.li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------- */}
        {/* What sets MindCraft apart: one ruled frame, the founding heritage given the tall cell */}
        <section id="about-apart" className="mc-section mc-surface" aria-labelledby="about-apart-title">
          <div className="mc-container">
            <motion.div {...reveal} className="max-w-2xl">
              <h2 id="about-apart-title" className="mc-h2">
                What sets MindCraft <em>apart</em>
              </h2>
              <p className="mc-lead mt-4">A specialist core, a continental focus and one team across four capabilities.</p>
            </motion.div>

            <ol className="mt-10 sm:mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.08]">
              {APART.map((d, i) => {
                const lead = i === 0;
                return (
                  <motion.li
                    key={d.title}
                    {...reveal}
                    transition={{ ...reveal.transition, delay: Math.min(i, 3) * 0.05 }}
                    className={`bg-[#0a0a0a] p-6 sm:p-8 flex flex-col ${lead ? 'md:col-span-2 lg:col-span-1 lg:row-span-2 lg:p-10' : ''}`}
                  >
                    <span
                      aria-hidden="true"
                      className={`font-heading font-medium leading-none tracking-[-0.03em] tabular-nums ${
                        lead ? 'text-[3rem] sm:text-[4rem] text-indigo-300/90' : 'text-[1.75rem] text-white/25'
                      }`}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3
                      className={`font-heading font-medium leading-tight tracking-[-0.015em] text-white ${
                        lead ? 'mt-6 lg:mt-auto lg:pt-16 text-[1.5rem] sm:text-[1.875rem]' : 'mt-5 text-[1.1875rem] sm:text-[1.25rem]'
                      }`}
                    >
                      {d.title}
                    </h3>
                    <p className={`mt-3 leading-relaxed ${lead ? 'text-[15px] sm:text-base text-white/70 max-w-[30em]' : 'text-[14px] text-white/65'}`}>{d.text}</p>
                  </motion.li>
                );
              })}
            </ol>
          </div>
        </section>

        {/* ---------------------------------------------------------- */}
        {/* Team and partnerships, told as status rather than claims */}
        <section id="about-leadership" className="mc-section" aria-labelledby="about-team-title">
          <div className="mc-container grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <motion.div {...reveal} className="lg:col-span-5">
              <h2 id="about-team-title" className="mc-h2">
                A core team, with a network <em>still growing</em>
              </h2>
              <p className="mc-lead mt-4">
                MindCraft was established in 2026 around a core team. It extends through associates and in-country partners where the work calls for them.
              </p>
              <p className="mt-5 text-[15px] leading-relaxed text-white/60 max-w-[30em]">
                Working with us in these founding years means senior-level attention, and a partner invested in building a long-term track record.
              </p>
            </motion.div>

            <ul className="lg:col-span-7 border-t border-white/[0.1]">
              {TEAM.map((t, i) => (
                <motion.li
                  key={t.title}
                  {...reveal}
                  transition={{ ...reveal.transition, delay: i * 0.05 }}
                  className="grid grid-cols-1 sm:grid-cols-[9.5rem_1fr] gap-x-8 gap-y-3 border-b border-white/[0.1] py-7 sm:py-8"
                >
                  <p className="flex items-center gap-2.5 font-mono text-[12px] uppercase tracking-[0.08em] text-white/60 sm:pt-1.5">
                    <TeamMark kind={t.mark} />
                    {t.status}
                  </p>
                  <div className="min-w-0">
                    <h3 className="font-heading text-[1.25rem] sm:text-[1.375rem] font-medium leading-tight tracking-[-0.015em] text-white">{t.title}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-white/65 max-w-[36em]">{t.text}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </section>

        {/* ---------------------------------------------------------- */}
        {/* Senior expertise (id="senior-expertise", the nav target) */}
        <SeniorExpertiseProfile onOpenIntake={onOpenIntake} onNavigate={setActiveTab} />

        {/* ---------------------------------------------------------- */}
        {/* How an engagement works: six stages on one line */}
        <section id="about-approach" className="mc-section" aria-labelledby="about-approach-title">
          <div className="mc-container">
            <motion.div {...reveal} className="max-w-2xl">
              <p className="mc-meta">6 stages</p>
              <h2 id="about-approach-title" className="mc-h2 mt-3">
                How an engagement works
              </h2>
              <p className="mc-lead mt-4">Shaped around your operating context, from the first conversation to optional follow-up.</p>
            </motion.div>

            <ol className="mt-12 sm:mt-14 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 md:gap-y-12">
              {STAGES.map((s, i) => (
                <motion.li
                  key={s.name}
                  {...reveal}
                  transition={{ ...reveal.transition, delay: Math.min(i, 5) * 0.05 }}
                  className="relative border-l border-white/[0.14] pl-7 pb-9 last:pb-0 md:border-l-0 md:border-t md:pl-0 md:pr-6 md:pt-7 md:pb-0"
                >
                  <span
                    aria-hidden="true"
                    className={`absolute -left-[5px] top-1 h-[9px] w-[9px] rounded-full border border-indigo-400 md:left-0 md:-top-[5px] ${
                      s.optional ? 'bg-[#050505]' : 'bg-indigo-400'
                    }`}
                  />
                  <span className="font-mono text-[12px] tabular-nums text-white/50">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="mt-2 font-heading text-[1.25rem] font-medium tracking-[-0.01em] text-white">
                    {s.name}
                    {s.optional && <span className="ml-2 align-middle text-[12px] font-normal tracking-normal text-white/50">optional</span>}
                  </h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-white/65">{s.text}</p>
                </motion.li>
              ))}
            </ol>

            <motion.div
              {...reveal}
              className="mt-16 sm:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 border-t border-white/[0.1] pt-8 sm:pt-10"
            >
              <div className="lg:col-span-4">
                <h3 className="font-heading text-[1.25rem] sm:text-[1.375rem] font-medium tracking-[-0.015em] text-white">Ways to work together</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-white/60">The same formats across all four service pillars.</p>
              </div>
              <ul className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-3">
                {FORMATS.map((f) => (
                  <li key={f} className="flex gap-3 text-[14px] leading-snug text-white/70">
                    <span aria-hidden="true" className="mt-[0.45rem] h-1 w-3 shrink-0 rounded-full bg-indigo-400/80" />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        {/* ---------------------------------------------------------- */}
        <section className="mc-section" aria-label="Next steps">
          <div className="mc-container space-y-10 md:space-y-14">
            <motion.div {...reveal}>
              <ContextualCTA
                title="Start with a discovery conversation"
                body="Tell us the market, product or organisation you are working on. We listen first, then propose a scope, method, timeline and budget."
                primaryLabel="Start a conversation"
                onPrimary={onOpenIntake}
              />
            </motion.div>
            <RelatedLinks
              title="Explore next"
              items={[
                { label: 'Life Sciences', desc: 'Our core sector practice', onClick: () => setActiveTab('life-sciences'), tone: 'indigo' },
                { label: 'Localization', desc: 'From global strategy to local result', onClick: () => setActiveTab('localization'), tone: 'emerald' },
                { label: 'Insights', desc: 'Perspectives on Life Sciences, Africa and applied AI', onClick: () => setActiveTab('insights'), tone: 'teal' }
              ]}
            />
          </div>
        </section>
      </div>
    </MotionConfig>
  );
};
