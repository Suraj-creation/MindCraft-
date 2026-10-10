import React from 'react';
import { NavTab } from '../types';
import { ArrowRight, BarChart3, Compass, Cpu, GraduationCap, Mail } from 'lucide-react';
import { PROBLEM_CROSS_SECTIONS, AFRICA_REGIONS_DATA } from '../data/industryAndAfricaData';
import { SENIOR_AREAS, SENIOR_PROFILE } from '../data/seniorExpertise';
import { BTN_PRIMARY, RouteLink, SectionHeader, TONES, Tone } from './ui/primitives';
import { ArtImage } from './ui/ArtImage';
import { Scrim } from './ui/Hero';

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

/** Quiet text link with an arrow, used for every "go deeper" route on the page. */
const MoreLink: React.FC<{ to: NavTab; onNavigate: (tab: NavTab) => void; tone?: Tone; children: React.ReactNode }> = ({ to, onNavigate, tone = 'indigo', children }) => (
  <RouteLink
    to={to}
    onNavigate={onNavigate}
    className={`group mc-tap -ml-0.5 inline-flex items-center gap-1.5 text-sm font-medium ${TONES[tone].text} hover:text-white transition-colors duration-150`}
  >
    {children}
    <ArrowRight aria-hidden="true" className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
  </RouteLink>
);

/* ------------------------------------------------------------------ */
/* Capabilities: a short question, answer and onward route.            */
/* ------------------------------------------------------------------ */
const CAPABILITIES: {
  tab: NavTab;
  name: string;
  short: string;
  tone: Tone;
  icon: React.ComponentType<{ className?: string }>;
  verb: string;
  question: string;
  what: string;
}[] = [
  {
    tab: 'market-research',
    name: 'Market Research & Intelligence',
    short: 'Market Research',
    tone: 'sky',
    icon: BarChart3,
    verb: 'Understand',
    question: 'What is really happening in the market?',
    what: 'Evidence on markets, customers and competitors for a confident decision.'
  },
  {
    tab: 'consulting',
    name: 'Business Consulting',
    short: 'Business Consulting',
    tone: 'teal',
    icon: Compass,
    verb: 'Decide',
    question: 'Where should we focus, and how do we get there?',
    what: 'Strategy and change that turn priorities into a plan people can use.'
  },
  {
    tab: 'ai-training',
    name: 'AI Training & Digital Literacy',
    short: 'AI Training',
    tone: 'amber',
    icon: GraduationCap,
    verb: 'Equip',
    question: 'Are our people ready to use AI well?',
    what: 'Practical programmes for confident, responsible AI use.'
  },
  {
    tab: 'ai-solutions',
    name: 'AI Enterprise Solutions',
    short: 'AI Enterprise Solutions',
    tone: 'emerald',
    icon: Cpu,
    verb: 'Implement',
    question: 'Which systems will make the work better?',
    what: 'Analytics, automation and AI systems for a real business problem.'
  }
];

export const CapabilitiesSection: React.FC<SectionProps> = ({ setActiveTab }) => (
  <section className="mc-section" id="capabilities" aria-labelledby="capabilities-title">
    <div className="mc-container">
      <SectionHeader
        title={<span id="capabilities-title">Four ways to move a decision forward</span>}
        lead="Use one capability, or combine them around the question in front of you."
      />

      <ol className="mc-rule-list border-y border-white/[0.08]">
        {CAPABILITIES.map((c) => {
          const Icon = c.icon;
          return (
            <li
              key={c.tab}
              className="py-7 sm:py-8 grid grid-cols-1 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)_15rem] gap-x-8 gap-y-3 md:items-end"
            >
              <div>
                <p className={`flex flex-wrap items-center gap-x-2 gap-y-0.5 text-[13px] font-semibold ${TONES[c.tone].text}`}>
                  <Icon aria-hidden="true" className="w-4 h-4" />
                  {c.verb}
                  <span className="font-normal text-white/60">{c.question}</span>
                </p>
                <h3 className="mt-2 font-heading text-[1.375rem] sm:text-[1.5rem] font-medium tracking-[-0.015em] leading-tight text-white">
                  {c.name}
                </h3>
              </div>
              <p className="text-[15px] text-white/70 leading-relaxed max-w-[34em]">{c.what}</p>
              <div className="md:justify-self-end">
                <MoreLink tone={c.tone} to={c.tab} onNavigate={setActiveTab}>Explore {c.short}</MoreLink>
              </div>
            </li>
          );
        })}
      </ol>

      <div className="mt-8 flex flex-col md:flex-row md:items-center justify-between gap-3 md:gap-8">
        <p className="text-[15px] text-white/60 leading-relaxed max-w-[44em]">
          Start with a challenge if the route is not yet clear.
        </p>
        <div className="shrink-0">
          <MoreLink tone="amber" to="question-to-outcome" onNavigate={setActiveTab}>
            Browse {PROBLEM_CROSS_SECTIONS.length} common challenges
          </MoreLink>
        </div>
      </div>
    </div>
  </section>
);

/* ------------------------------------------------------------------ */
/* Industries: one contextual field, then direct routes                */
/* ------------------------------------------------------------------ */
export const IndustriesSection: React.FC<SectionProps & { onSelectIndustry: (id: string) => void }> = ({ setActiveTab }) => (
  <section className="mc-art-bleed border-b border-white/[0.07] bg-[#0a0a0a]" id="industries-served" aria-labelledby="industries-title">
    <div aria-hidden="true" className="absolute inset-0">
      <ArtImage
        name="corridor"
        alt=""
        sizes="100vw"
        position="object-[52%_48%] lg:object-[58%_50%]"
      />
      <Scrim background="linear-gradient(90deg, #0a0a0a 0%, rgba(10,10,10,.96) 20%, rgba(10,10,10,.72) 42%, rgba(10,10,10,.28) 67%, rgba(10,10,10,.08) 100%)" />
      <Scrim background="linear-gradient(180deg, rgba(10,10,10,.54) 0%, rgba(10,10,10,0) 25%, rgba(10,10,10,.12) 70%, #0a0a0a 100%)" />
    </div>
    <div className="mc-container mc-art-copy py-[clamp(4.5rem,10vw,8rem)]">
      <div className="max-w-[35rem]">
        <h2 id="industries-title" className="mc-h2">Sector context changes the answer.</h2>
        <p className="mc-lead mt-5 !text-white/75">
          Life Sciences is our deepest specialism. Market context, local conditions and operating realities shape every engagement.
        </p>
        <div className="mt-7 flex flex-col items-start gap-1">
          <MoreLink to="life-sciences" onNavigate={setActiveTab}>Explore Life Sciences</MoreLink>
          <MoreLink to="industries" onNavigate={setActiveTab}>Browse all 24 industries</MoreLink>
          <MoreLink tone="emerald" to="africa-explorer" onNavigate={setActiveTab}>Explore African markets</MoreLink>
        </div>
      </div>
    </div>
  </section>
);

/* ------------------------------------------------------------------ */
/* Specialist expertise and geographic reach                            */
/* ------------------------------------------------------------------ */
export const ExpertiseReachSection: React.FC<SectionProps> = ({ setActiveTab }) => {
  const regions = AFRICA_REGIONS_DATA.map((r) => r.name.replace(' Africa', ''));
  const regionList = `${regions.slice(0, -1).join(', ')} and ${regions[regions.length - 1]}`;

  return (
    <section className="mc-art-bleed border-b border-white/[0.07] bg-[#050505]" id="expertise" aria-labelledby="expertise-title">
      <div aria-hidden="true" className="absolute inset-0">
        <ArtImage
          name="strategy"
          alt=""
          sizes="100vw"
          position="object-[48%_48%] lg:object-[60%_48%]"
        />
        <Scrim background="linear-gradient(90deg, #050505 0%, rgba(5,5,5,.94) 23%, rgba(5,5,5,.64) 47%, rgba(5,5,5,.21) 73%, rgba(5,5,5,.05) 100%)" />
        {/* The lower half carries the expertise list, so it sits on a near-solid field rather than the bright window */}
        <Scrim background="linear-gradient(180deg, rgba(5,5,5,.52) 0%, rgba(5,5,5,0) 24%, rgba(5,5,5,.5) 52%, rgba(5,5,5,.9) 70%, #050505 100%)" />
      </div>
      <div className="mc-container mc-art-copy py-[clamp(4.5rem,10vw,8rem)]">
        <SectionHeader title={<span id="expertise-title">Depth where context matters.</span>} />

        <div className="max-w-[35rem]">
          <article aria-labelledby="expertise-geo-title">
            <h3 id="expertise-geo-title" className="font-heading text-[1.5rem] sm:text-[1.75rem] font-medium tracking-[-0.015em] leading-tight text-white">
              African market knowledge, international delivery
            </h3>
            <p className="mt-4 text-[15px] sm:text-base text-white/70 leading-relaxed">
              Africa is our deliberate focus, with engagement capability across {regionList} Africa. We also support organisations in Europe and the United States planning African-market work.
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
              <MoreLink tone="emerald" to="africa-explorer" onNavigate={setActiveTab}>See the four African regions</MoreLink>
              <MoreLink tone="emerald" to="localization" onNavigate={setActiveTab}>How we adapt strategy to local markets</MoreLink>
            </div>
          </article>
        </div>

        {/* Specialist depth */}
        <article
          className="mt-12 sm:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 border-t border-white/[0.08] pt-8 sm:pt-10"
          aria-labelledby="expertise-ls-title"
        >
          <div className="lg:col-span-5">
            <h3 id="expertise-ls-title" className="font-heading text-[1.5rem] sm:text-[1.75rem] font-medium tracking-[-0.015em] leading-tight text-white">
              Senior pharmaceutical and healthcare expertise
            </h3>
            <p className="mt-4 text-[15px] sm:text-base text-white/70 leading-relaxed">
              MindCraft draws on the independent pharmaceutical and healthcare consulting experience of {SENIOR_PROFILE.name}, based in {SENIOR_PROFILE.basedIn}.
            </p>
            <div className="mt-5">
              <MoreLink to="senior-expertise" onNavigate={setActiveTab}>View the expertise profile</MoreLink>
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
/* How an engagement works (corporate profile s.6 and s.8)             */
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
  <section className="mc-section mc-editorial-band" id="approach" aria-labelledby="approach-title">
    <div className="mc-container">
      <SectionHeader
        title={<span id="approach-title">How an engagement works.</span>}
        lead="The same six steps, from the first conversation to follow-up, whichever capability you start with."
      />

      <ol className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-10">
        {[
          { title: 'Frame', steps: PROCESS.slice(0, 2) },
          { title: 'Develop', steps: PROCESS.slice(2, 4) },
          { title: 'Sustain', steps: PROCESS.slice(4, 6) }
        ].map((phase, p) => (
          <li key={phase.title} className="border-t border-white/[0.14] pt-5">
            <h3 className="font-heading text-[1.25rem] font-medium tracking-[-0.01em] text-white">{phase.title}</h3>
            <ol className="mt-5 space-y-5">
              {phase.steps.map((step, i) => (
                <li key={step.stage} className="grid grid-cols-[1.75rem_minmax(0,1fr)] gap-x-2">
                  <span aria-hidden="true" className="pt-px font-mono text-xs tabular-nums text-indigo-300">{p * 2 + i + 1}</span>
                  <div>
                    <h4 className="text-[15px] font-semibold text-white">{step.stage}</h4>
                    <p className="mt-1 text-[15px] leading-relaxed text-white/70">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

/* ------------------------------------------------------------------ */
/* Closing call to action                                               */
/* ------------------------------------------------------------------ */
export const ClosingSection: React.FC<SectionProps> = ({ onOpenIntake }) => (
  <section className="mc-art-bleed !border-b-0 bg-[#0d0f17]" id="start" aria-labelledby="start-title">
    <div aria-hidden="true" className="absolute inset-0">
      <ArtImage name="office" alt="" sizes="100vw" position="object-[60%_50%]" />
      <Scrim background="linear-gradient(90deg, #0d0f17 0%, rgba(13,15,23,.96) 21%, rgba(13,15,23,.69) 47%, rgba(13,15,23,.2) 74%, rgba(13,15,23,.04) 100%)" />
      <Scrim background="linear-gradient(180deg, rgba(13,15,23,.58) 0%, rgba(13,15,23,0) 28%, rgba(13,15,23,.08) 72%, #0d0f17 100%)" />
    </div>
    <div className="mc-container mc-art-copy py-[clamp(4.5rem,10vw,8rem)]">
      <div className="max-w-[35rem]">
          <h2 id="start-title" className="font-heading font-medium text-white tracking-[-0.025em] leading-[1.08] text-[1.875rem] sm:text-[2.5rem] lg:text-[2.875rem] max-w-[18ch]">
            Bring the question in front of you.
          </h2>
          <p className="mt-5 text-[15px] sm:text-base text-white/75 leading-relaxed max-w-[34em]">
            We&rsquo;ll help identify the consulting, research, training or AI support that fits.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
            <button type="button" onClick={onOpenIntake} className={`${BTN_PRIMARY} !px-6 w-full sm:w-auto shrink-0 whitespace-nowrap`}>
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
    </div>
  </section>
);
