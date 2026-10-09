import React, { useState } from 'react';
import { motion } from 'motion/react';
import { NavTab } from '../types';
import { ArrowRight, BarChart3, Compass, Cpu, GraduationCap, Mail } from 'lucide-react';
import { PROBLEM_CROSS_SECTIONS, UNIVERSAL_INDUSTRIES, AFRICA_REGIONS_DATA } from '../data/industryAndAfricaData';
import { SENIOR_AREAS, SENIOR_PROFILE } from '../data/seniorExpertise';
import { BTN_PRIMARY, SectionHeader, TONES, Tone, reveal } from './ui/primitives';
import { ArtImage } from './ui/ArtImage';

/*
 * Overview page sections. Every claim below is traceable to
 * resources/MindCraft Consultancy Services - Corporate Profile (1).docx,
 * resources/Industry verticals & Geography (4).docx or
 * resources/2.0 Business Profile- Dayanand Poojari.pdf.
 */

interface SectionProps {
  setActiveTab: (tab: NavTab) => void;
  onOpenIntake: () => void;
}

const CONTACT_EMAIL = 'info@mindcraftconsultancy.com';

/** Quiet text link with an arrow, used for every "go deeper" action on the page. */
const MoreLink: React.FC<{ onClick: () => void; tone?: Tone; children: React.ReactNode }> = ({ onClick, tone = 'indigo', children }) => (
  <button
    type="button"
    onClick={onClick}
    className={`group mc-tap -ml-0.5 inline-flex items-center gap-1.5 text-sm font-medium ${TONES[tone].text} hover:text-white transition-colors duration-150`}
  >
    {children}
    <ArrowRight aria-hidden="true" className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
  </button>
);

/* ------------------------------------------------------------------ */
/* Capabilities: what each does, when it helps, what it includes       */
/* ------------------------------------------------------------------ */
const BULLET: Record<Tone, string> = {
  sky: 'bg-sky-400',
  teal: 'bg-teal-400',
  amber: 'bg-amber-400',
  emerald: 'bg-emerald-400',
  indigo: 'bg-indigo-400'
};

const CAPABILITIES: {
  tab: NavTab;
  name: string;
  short: string;
  tone: Tone;
  icon: React.ComponentType<{ className?: string }>;
  verb: string;
  question: string;
  what: string;
  when: string;
  services: string[];
}[] = [
  {
    tab: 'market-research',
    name: 'Market Research & Intelligence',
    short: 'Market Research',
    tone: 'sky',
    icon: BarChart3,
    verb: 'Understand',
    question: 'What is really happening in the market?',
    what: 'Evidence on markets, customers and competitors, gathered and analysed so you can decide with confidence.',
    when: 'You are weighing a new market, product or investment and the picture is incomplete.',
    services: ['Market sizing and opportunity assessment', 'Customer and stakeholder insight', 'Competitive intelligence', 'Programme and impact research']
  },
  {
    tab: 'consulting',
    name: 'Business Consulting',
    short: 'Business Consulting',
    tone: 'teal',
    icon: Compass,
    verb: 'Decide',
    question: 'Where should we focus, and how do we get there?',
    what: 'Strategy, planning and organisational change that turn priorities into a plan people can act on.',
    when: 'You need to set direction, enter a market, restructure for growth or make operations run better.',
    services: ['Growth and market-entry strategy', 'Organisational design and change', 'Process improvement and digital transformation', 'Regulatory and project advisory']
  },
  {
    tab: 'ai-training',
    name: 'AI Training & Digital Literacy',
    short: 'AI Training',
    tone: 'amber',
    icon: GraduationCap,
    verb: 'Equip',
    question: 'Are our people ready to use AI well?',
    what: 'Practical programmes that help leaders and teams understand AI, use it well and adopt it responsibly.',
    when: 'Interest in AI is high, but skills, confidence and guidelines vary across the organisation.',
    services: ['Executive AI briefings', 'Function-specific, hands-on training', 'AI readiness assessments', 'Train-the-trainer and responsible-use programmes']
  },
  {
    tab: 'ai-solutions',
    name: 'AI Enterprise Solutions',
    short: 'AI Enterprise Solutions',
    tone: 'emerald',
    icon: Cpu,
    verb: 'Implement',
    question: 'Which systems will make the work better?',
    what: 'Analytics, automation and AI systems, built where they solve a real business problem.',
    when: 'Manual work, scattered data or slow decisions are holding the business back.',
    services: ['AI strategy and solution architecture', 'Analytics and business intelligence', 'Conversational AI and workflow automation', 'Integration with CRM, ERP and existing systems']
  }
];

export const CapabilitiesSection: React.FC<SectionProps> = ({ setActiveTab }) => (
  <section className="mc-section" id="capabilities" aria-labelledby="capabilities-title">
    <div className="mc-container">
      <motion.div {...reveal}>
        <SectionHeader
          title={<span id="capabilities-title">Four capabilities that work alone or together</span>}
          lead="Research informs strategy, strategy guides investment in technology, and training makes new ways of working stick. Engage us for one focused need or a combination."
        />
      </motion.div>

      {/* The four capabilities as one sequence: a thread runs from evidence to implementation */}
      <ol className="relative border-t border-white/[0.08]">
        <span
          aria-hidden="true"
          className="absolute left-[0.6875rem] top-12 bottom-12 w-px bg-gradient-to-b from-sky-400/50 via-amber-400/35 to-emerald-400/50"
        />
        {CAPABILITIES.map((c, i) => {
          const Icon = c.icon;
          return (
            <motion.li
              key={c.tab}
              {...reveal}
              transition={{ ...reveal.transition, delay: i * 0.05 }}
              className="relative border-b border-white/[0.08] py-8 sm:py-10 pl-11 sm:pl-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-x-10 gap-y-5"
            >
              <span
                aria-hidden="true"
                className={`absolute left-0 top-[2.3rem] sm:top-[2.8rem] flex h-[1.375rem] w-[1.375rem] items-center justify-center rounded-full border ${TONES[c.tone].border} bg-[#050505]`}
              >
                <span className={`h-2 w-2 rounded-full ${BULLET[c.tone]}`} />
              </span>
              <div className="md:col-span-2 lg:col-span-5">
                <p className={`flex flex-wrap items-center gap-x-2 gap-y-0.5 text-[13px] font-semibold ${TONES[c.tone].text}`}>
                  <Icon aria-hidden="true" className="w-4 h-4" />
                  {c.verb}
                  <span className="font-normal text-white/50">{c.question}</span>
                </p>
                <h3 className="mt-2 font-heading text-[1.5rem] sm:text-[1.75rem] font-medium tracking-[-0.015em] leading-tight text-white">
                  {c.name}
                </h3>
                <p className="mt-3 text-[15px] text-white/75 leading-relaxed max-w-[34em]">{c.what}</p>
                <div className="mt-3">
                  <MoreLink tone={c.tone} onClick={() => setActiveTab(c.tab)}>Explore {c.short}</MoreLink>
                </div>
              </div>
              <div className="lg:col-span-3 lg:pt-8">
                <p className="text-[13px] font-medium text-white/50">Useful when</p>
                <p className="mt-1.5 text-sm text-white/70 leading-relaxed">{c.when}</p>
              </div>
              <div className="lg:col-span-4 lg:pt-8">
                <p className="text-[13px] font-medium text-white/50">Typical work</p>
                <ul className="mt-1.5 space-y-1.5">
                  {c.services.map((sv) => (
                    <li key={sv} className="flex gap-2.5 text-sm text-white/70 leading-snug">
                      <span aria-hidden="true" className={`mt-[0.45rem] h-1 w-1 shrink-0 rounded-full ${BULLET[c.tone]}`} />
                      {sv}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.li>
          );
        })}
      </ol>

      <div className="mt-8 flex flex-col md:flex-row md:items-center justify-between gap-3 md:gap-8">
        <p className="text-[15px] text-white/60 leading-relaxed max-w-[44em]">
          Not sure which capability fits? Start from the challenge instead, such as entering a new market, understanding customers or automating workflows.
        </p>
        <div className="shrink-0">
          <MoreLink tone="amber" onClick={() => setActiveTab('question-to-outcome')}>
            Browse {PROBLEM_CROSS_SECTIONS.length} common challenges
          </MoreLink>
        </div>
      </div>
    </div>
  </section>
);

/* ------------------------------------------------------------------ */
/* Industries: specialist depth first, then the full breadth            */
/* ------------------------------------------------------------------ */
/* Sky and sunset stay vivid; the floor dissolves into the canvas where the heading sits */
const CORRIDOR_FADE =
  'linear-gradient(180deg, #050505 0%, rgba(5,5,5,0.25) 14%, rgba(5,5,5,0) 32%, rgba(5,5,5,0.35) 58%, rgba(5,5,5,0.92) 84%, #050505 100%)';
const CORRIDOR_SIDE = 'linear-gradient(90deg, rgba(5,5,5,0.55) 0%, rgba(5,5,5,0) 45%)';

/** Two illustrative focus areas per sub-sector, from the corporate profile s.2. */
const LIFE_SCIENCES_FOCUS: Record<string, string> = {
  pharmaceuticals: 'Market access, regulatory and competitive intelligence',
  'medical-devices': 'Launch strategy, reimbursement and distributor mapping',
  'medical-diagnostics': 'Market sizing and regulatory pathway advice',
  'medical-equipment': 'Capital equipment studies and tender intelligence',
  'surgical-consumables': 'Distribution channels and formulary tracking',
  'hospitals-healthcare-providers': 'Operational strategy and digital transformation'
};

export const IndustriesSection: React.FC<SectionProps & { onSelectIndustry: (id: string) => void }> = ({
  setActiveTab,
  onSelectIndustry
}) => {
  const lifeSciences = UNIVERSAL_INDUSTRIES.filter((i) => i.category === 'core-lifesciences');
  const others = UNIVERSAL_INDUSTRIES.filter((i) => i.category !== 'core-lifesciences');
  // Phones show the first few; the full list is one tap away
  const [showAll, setShowAll] = useState(false);
  const MOBILE_VISIBLE = 8;
  const openIndustry = (id: string) => {
    onSelectIndustry(id);
    setActiveTab('industries');
  };

  return (
    <section className="relative border-b border-white/[0.07] pb-[clamp(3.5rem,8vw,7rem)]" id="industries-served" aria-labelledby="industries-title">
      {/* Image-led opening: a wall of sectors, from laboratories and energy to logistics and finance */}
      <div className="relative h-[clamp(15rem,48vw,36rem)] overflow-hidden">
        <ArtImage
          name="corridor"
          alt=""
          sizes="100vw"
          position="object-[32%_42%] sm:object-[40%_42%]"
        />
        <div aria-hidden="true" className="absolute inset-0" style={{ background: CORRIDOR_FADE }} />
        <div aria-hidden="true" className="absolute inset-0 hidden lg:block" style={{ background: CORRIDOR_SIDE }} />
      </div>

      <div className="mc-container relative -mt-16 sm:-mt-24 lg:-mt-48">
        <motion.div {...reveal} className="max-w-[46rem]">
          <h2 id="industries-title" className="mc-h2 [text-shadow:0_2px_28px_rgba(5,5,5,0.85)]">
            Built for many industries, with specialist depth in Life Sciences
          </h2>
          <p className="mc-lead mt-4 !text-white/75">
            We apply the same consulting, research and AI capabilities across very different business environments. Life Sciences is where our specialist experience runs deepest.
          </p>
        </motion.div>
      </div>

      <div className="mc-container mt-10 md:mt-14">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Specialist depth */}
          <div className="lg:col-span-5 rounded-2xl border border-indigo-500/25 bg-[#0d0f17] p-6 sm:p-8">
            <h3 className="font-heading text-xl sm:text-[1.375rem] font-medium tracking-[-0.01em] text-white">Life Sciences and healthcare</h3>
            <p className="mt-2 text-sm text-white/65 leading-relaxed">
              Our founding specialism. Regulatory, market-access and commercial context comes with every engagement in these sectors.
            </p>
            <ul className="mt-5 divide-y divide-white/[0.08] border-y border-white/[0.08]">
              {lifeSciences.map((i) => (
                <li key={i.id}>
                  <button
                    type="button"
                    onClick={() => openIndustry(i.id)}
                    className="group w-full min-h-11 py-3 text-left flex items-start justify-between gap-3"
                  >
                    <span className="min-w-0">
                      <span className="block text-[15px] font-medium text-white group-hover:text-indigo-200 transition-colors duration-150">{i.name}</span>
                      {LIFE_SCIENCES_FOCUS[i.id] && (
                        <span className="block mt-0.5 text-[13px] text-white/50 leading-snug">{LIFE_SCIENCES_FOCUS[i.id]}</span>
                      )}
                    </span>
                    <ArrowRight aria-hidden="true" className="mt-1 w-4 h-4 shrink-0 text-white/25 group-hover:text-indigo-300 transition-colors duration-150" />
                  </button>
                </li>
              ))}
            </ul>
            <div className="mt-5">
              <MoreLink onClick={() => setActiveTab('life-sciences')}>Explore our Life Sciences practice</MoreLink>
            </div>
          </div>

          {/* Breadth */}
          <div className="lg:col-span-7">
            <h3 className="font-heading text-xl sm:text-[1.375rem] font-medium tracking-[-0.01em] text-white">Across the wider economy</h3>
            <p className="mt-2 text-sm text-white/65 leading-relaxed max-w-[40em]">
              Each engagement is shaped by the sector&rsquo;s own regulatory, commercial and operational realities, with cross-sector benchmarks where they help.
            </p>
            <ul id="industries-other-list" className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-x-8 border-t border-white/[0.08]">
              {others.map((i, idx) => (
                <li key={i.id} className={`border-b border-white/[0.08] ${!showAll && idx >= MOBILE_VISIBLE ? 'hidden sm:block' : ''}`}>
                  <button
                    type="button"
                    onClick={() => openIndustry(i.id)}
                    className="group w-full min-h-12 py-2.5 text-left flex items-center justify-between gap-3"
                  >
                    <span className="text-[15px] text-white/80 group-hover:text-white leading-snug transition-colors duration-150">{i.name}</span>
                    <ArrowRight aria-hidden="true" className="w-4 h-4 shrink-0 text-white/20 group-hover:text-indigo-300 transition-colors duration-150" />
                  </button>
                </li>
              ))}
            </ul>
            {!showAll && (
              <button
                type="button"
                onClick={() => {
                  setShowAll(true);
                  // Keep keyboard users in place: move focus to the first newly shown industry
                  requestAnimationFrame(() =>
                    document.querySelectorAll<HTMLButtonElement>('#industries-other-list button')[MOBILE_VISIBLE]?.focus()
                  );
                }}
                aria-expanded={showAll}
                aria-controls="industries-other-list"
                className="sm:hidden mc-tap w-full border-b border-white/[0.08] text-left text-[15px] text-white/60 hover:text-white transition-colors duration-150"
              >
                Show all {others.length} industries
              </button>
            )}
            <div className="mt-5">
              <MoreLink onClick={() => setActiveTab('industries')}>Explore all {UNIVERSAL_INDUSTRIES.length} industries</MoreLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ------------------------------------------------------------------ */
/* Specialist expertise and geographic reach                            */
/* ------------------------------------------------------------------ */
/* A soft vignette seats the picture in the dark page without hiding the map */
const STRATEGY_VIGNETTE =
  'radial-gradient(120% 90% at 45% 45%, rgba(5,5,5,0) 55%, rgba(5,5,5,0.55) 100%), linear-gradient(0deg, rgba(5,5,5,0.35) 0%, rgba(5,5,5,0) 30%)';
export const ExpertiseReachSection: React.FC<SectionProps> = ({ setActiveTab }) => {
  const regions = AFRICA_REGIONS_DATA.map((r) => r.name.replace(' Africa', ''));
  const regionList = `${regions.slice(0, -1).join(', ')} and ${regions[regions.length - 1]}`;

  return (
    <section className="mc-section" id="expertise" aria-labelledby="expertise-title">
      <div className="mc-container">
        <motion.div {...reveal}>
          <SectionHeader
            title={<span id="expertise-title">Specialist knowledge, applied with a wider lens</span>}
            lead="Sector and market knowledge matters most where regulation, market access and local conditions decide what is possible."
          />
        </motion.div>

        {/* Market knowledge: image and copy as one editorial spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 lg:items-center">
          <figure className="lg:col-span-7 relative aspect-[4/3] sm:aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a]">
            <ArtImage
              name="strategy"
              alt="Conceptual illustration of a team reviewing a map of Africa alongside panels on healthcare, agriculture, logistics and energy."
              sizes="(min-width: 1024px) 56vw, 100vw"
              position="object-[40%_45%]"
            />
            <div aria-hidden="true" className="absolute inset-0 rounded-2xl" style={{ background: STRATEGY_VIGNETTE }} />
          </figure>

          <article className="lg:col-span-5" aria-labelledby="expertise-geo-title">
            <h3 id="expertise-geo-title" className="font-heading text-[1.5rem] sm:text-[1.75rem] font-medium tracking-[-0.015em] leading-tight text-white">
              African market knowledge, international delivery
            </h3>
            <p className="mt-4 text-[15px] sm:text-base text-white/70 leading-relaxed">
              Africa is our deliberate focus, with engagement capability across {regionList} Africa and a growing network of local associates and research partners.
            </p>
            <p className="mt-3 text-[15px] sm:text-base text-white/70 leading-relaxed">
              We also support organisations in Europe and the United States, including those planning to enter or expand in African markets.
            </p>
            <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-[13px] text-white/60" aria-label="Where we work">
              {[...AFRICA_REGIONS_DATA.map((r) => r.name), 'Europe', 'United States'].map((g, i, all) => (
                <li key={g} className="flex items-center gap-2">
                  <span aria-hidden="true" className={`h-1.5 w-1.5 rounded-full ${i < all.length - 2 ? 'bg-emerald-400' : 'bg-indigo-400'}`} />
                  {g}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-col items-start gap-1">
              <MoreLink tone="emerald" onClick={() => setActiveTab('africa-explorer')}>Explore African markets</MoreLink>
              <MoreLink tone="emerald" onClick={() => setActiveTab('localization')}>How we adapt strategy to local markets</MoreLink>
            </div>
          </article>
        </div>

        {/* Specialist depth */}
        <article
          className="mt-14 sm:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 border-t border-white/[0.08] pt-10 sm:pt-14"
          aria-labelledby="expertise-ls-title"
        >
          <div className="lg:col-span-5">
            <h3 id="expertise-ls-title" className="font-heading text-[1.5rem] sm:text-[1.75rem] font-medium tracking-[-0.015em] leading-tight text-white">
              Senior pharmaceutical and healthcare expertise
            </h3>
            <p className="mt-4 text-[15px] sm:text-base text-white/70 leading-relaxed">
              MindCraft draws on senior consulting experience in helping pharmaceutical and healthcare manufacturers enter and grow in African markets, including that of {SENIOR_PROFILE.name}, an independent consultant based in {SENIOR_PROFILE.basedIn}.
            </p>
            <div className="mt-5">
              <MoreLink onClick={() => setActiveTab('senior-expertise')}>View the expertise profile</MoreLink>
            </div>
          </div>
          <ul className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-x-8 border-t border-white/[0.08] self-start">
            {SENIOR_AREAS.map((a) => (
              <li key={a.id} className="border-b border-white/[0.08] py-3.5 text-[15px] text-white/80 leading-snug">
                {a.title}
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
};

/* ------------------------------------------------------------------ */
/* How an engagement works (corporate profile s.6 and s.8)              */
/* ------------------------------------------------------------------ */
const PROCESS = [
  { stage: 'Discovery', body: 'We learn your objectives, context and what success should look like.' },
  { stage: 'Proposal', body: 'You receive a scope, method, timeline and budget across the capabilities you need.' },
  { stage: 'Design', body: 'Research instruments, content or solution architecture, developed with your team.' },
  { stage: 'Delivery', body: 'The work is carried out with regular progress check-ins.' },
  { stage: 'Evaluation', body: 'Quality, results and impact reviewed against the agreed objectives.' },
  { stage: 'Follow-up', body: 'Optional coaching, refresher training or enhancements.' }
];

export const ApproachSection: React.FC<SectionProps> = () => (
  <section className="mc-section bg-[#0a0a0a]" id="approach" aria-labelledby="approach-title">
    <div className="mc-container">
      <motion.div {...reveal}>
        <SectionHeader
          title={<span id="approach-title">How an engagement works</span>}
          lead="A clear, collaborative process, whether you need one capability or several."
        />
      </motion.div>

      <ol className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-5 sm:gap-x-6 gap-y-8">
        {PROCESS.map((p, i) => (
          <li key={p.stage} className="relative border-t border-white/[0.12] pt-4">
            <span aria-hidden="true" className="absolute -top-px left-0 h-px w-10 bg-indigo-400" />
            <h3 className="flex items-baseline gap-2.5 text-[15px] font-semibold text-white">
              <span className="tabular-nums text-[13px] font-medium text-indigo-300">{i + 1}</span>
              {p.stage}
            </h3>
            <p className="mt-1.5 text-sm text-white/60 leading-snug">{p.body}</p>
          </li>
        ))}
      </ol>

      <p className="mt-10 text-sm text-white/50 leading-relaxed max-w-[48em]">
        Engagements range from one-off assignments and short courses to longer programmes and retainers, delivered in person, virtually or as a mix of both.
      </p>
    </div>
  </section>
);

/* ------------------------------------------------------------------ */
/* Closing call to action                                               */
/* ------------------------------------------------------------------ */
/* Copy sits on the darker interior side; the window and sunset stay open on the right */
const OFFICE_FADE =
  'linear-gradient(90deg, #0d0f17 0%, rgba(13,15,23,0.94) 30%, rgba(13,15,23,0.6) 52%, rgba(13,15,23,0.1) 78%, rgba(13,15,23,0) 100%)';
const OFFICE_FADE_MOBILE = 'linear-gradient(0deg, #0d0f17 0%, rgba(13,15,23,0.6) 35%, rgba(13,15,23,0) 70%)';
export const ClosingSection: React.FC<SectionProps> = ({ onOpenIntake }) => (
  <section className="mc-section !border-b-0" id="start" aria-labelledby="start-title">
    <div className="mc-container">
      <motion.div
        {...reveal}
        className="relative isolate overflow-hidden rounded-2xl border border-indigo-500/25 bg-[#0d0f17]"
      >
        {/* Dusk over the city: the desk, maps and open horizon sit behind the invitation */}
        <div aria-hidden="true" className="relative h-56 sm:h-72 lg:absolute lg:inset-0 lg:h-auto">
          <ArtImage name="office" alt="" sizes="(min-width: 1024px) 88rem, 100vw" position="object-[72%_55%] lg:object-[60%_50%]" />
          <div className="absolute inset-0 lg:hidden" style={{ background: OFFICE_FADE_MOBILE }} />
          <div className="absolute inset-0 hidden lg:block" style={{ background: OFFICE_FADE }} />
        </div>

        <div className="relative px-6 pb-10 -mt-16 sm:px-10 sm:pb-14 sm:-mt-20 lg:mt-0 lg:px-14 lg:py-20 xl:py-24 max-w-[46rem]">
          <h2 id="start-title" className="font-heading font-medium text-white tracking-[-0.025em] leading-[1.08] text-[1.875rem] sm:text-[2.5rem] lg:text-[2.875rem] max-w-[18ch]">
            Let&rsquo;s explore what progress could look like for your organisation.
          </h2>
          <p className="mt-5 text-[15px] sm:text-base text-white/75 leading-relaxed max-w-[34em]">
            Tell us about the challenge in front of you. We&rsquo;ll talk it through and suggest the consulting, research, training or AI support that fits.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
            <button type="button" onClick={onOpenIntake} className={`${BTN_PRIMARY} !px-6 w-full sm:w-auto shrink-0 whitespace-nowrap shadow-[0_10px_30px_-12px_rgba(99,102,241,0.7)]`}>
              Start a conversation
              <ArrowRight aria-hidden="true" className="w-4 h-4" />
            </button>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="mc-tap inline-flex items-center justify-center sm:justify-start gap-2 text-sm text-white/70 hover:text-white whitespace-nowrap transition-colors duration-150"
            >
              <Mail aria-hidden="true" className="w-4 h-4 text-indigo-300" />
              or email {CONTACT_EMAIL}
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);
