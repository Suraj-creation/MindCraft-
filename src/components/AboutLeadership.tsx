import React from 'react';
import { motion } from 'motion/react';
import { NavTab } from '../types';
import { Award, Check, Globe2, Lock, ShieldCheck, Sparkles } from 'lucide-react';
import { ContextualCTA, DeepDive, PageRail, RelatedLinks, SectionHeader, reveal } from './ui/primitives';
import { SeniorExpertiseProfile } from './SeniorExpertise';

interface AboutLeadershipProps {
  onOpenIntake: () => void;
  setActiveTab: (tab: NavTab) => void;
}

const RAIL = [
  { id: 'about-who', label: 'Who we are' },
  { id: 'about-leadership', label: 'Leadership' },
  { id: 'senior-expertise', label: 'Senior expertise' },
  { id: 'about-approach', label: 'How we engage' }
];

/* Corporate profile s.7 - what sets MindCraft apart */
const apart = [
  { title: 'Deep Life Sciences Heritage', text: "Unlike generalist consultancies, MindCraft's core expertise is built on Life Sciences: pharmaceuticals, medical devices, diagnostics, equipment, surgical consumables and hospitals. That means faster onboarding, sharper questions, and recommendations grounded in real industry context from day one." },
  { title: 'Pan-African Footprint with Local Fluency', text: 'Headquartered in Nairobi and structured for reach across all African countries, MindCraft combines on-ground market knowledge, regulatory awareness and cultural fluency with international consulting standards.' },
  { title: 'One Partner, Four Integrated Capabilities', text: 'Most clients need research to inform strategy, strategy to guide AI investment, and training to make AI adoption stick. MindCraft delivers all four as one coherent engagement rather than four disconnected vendors.' },
  { title: 'Applied, Decision-Ready Outputs', text: 'Every deliverable, from a market research report to an AI training curriculum to a deployed enterprise solution, is designed to be immediately usable: built for implementation, not left as a theoretical framework.' },
  { title: 'Responsible, Governed AI by Design', text: 'MindCraft embeds data privacy, ethics and governance into every AI training program and enterprise solution, ensuring adoption is safe, compliant and sustainable, which is particularly critical for regulated industries such as pharmaceuticals, healthcare and banking.' }
];

/* Corporate profile s.9 - team & partnerships */
const teamPoints = [
  { label: 'Core team', text: 'Consulting, market research and AI/technology professionals with direct experience across Life Sciences and diversified industries in African, European and US markets.' },
  { label: 'Associate & in-country network', text: 'A growing network of associate consultants, subject-matter experts and in-country research partners across Africa, allowing multi-country and multi-sector engagements with consistent quality and methodology.' },
  { label: 'Partnerships', text: 'As a newly established firm founded in 2026, MindCraft is actively building formal academic, technology and industry-association partnerships to strengthen its research infrastructure, AI solution capability and reach across priority African markets.' }
];

const values = [
  { Icon: Award, tone: 'indigo', title: 'Life Sciences Heritage', text: 'Direct working knowledge of clinical, regulatory, market-access and commercial dynamics across Life Sciences.' },
  { Icon: Globe2, tone: 'indigo', title: 'Pan-African Reach', text: 'Headquartered in Nairobi and structured for reach across all African countries, with a growing network of local associates and partners.' },
  { Icon: Sparkles, tone: 'emerald', title: 'Full Value-Chain Delivery', text: 'Research informs strategy, strategy guides AI investment, and training makes adoption stick, as one integrated engagement.' },
  { Icon: ShieldCheck, tone: 'indigo', title: 'Enterprise Privacy & Trust', text: 'Data privacy, ethics and governance are built into every AI training program and enterprise solution.' }
];

/* From the corporate profile (sections 1, 6, 8). */
const vision =
  "To be Africa's most trusted partner for AI-powered business growth — recognized globally for combining deep Life Sciences expertise with practical, ethical and impactful artificial intelligence adoption.";
const mission =
  'To equip organizations across Africa, Europe and the United States with the market intelligence, strategic advisory and AI capability they need to compete, grow and lead in their industries — with a special commitment to advancing Life Sciences enterprises operating in and around the African continent.';

const stages = [
  { name: 'Discovery', text: 'Initial consultation to understand client needs, objectives, market context and success measures.' },
  { name: 'Proposal', text: 'Tailored scope of work, methodology, timeline and budget across the relevant service pillar(s).' },
  { name: 'Design', text: 'Co-development of content, research instruments or solution architecture with client input and validation.' },
  { name: 'Delivery', text: 'Execution of training, advisory, research or AI solution implementation, with regular progress check-ins.' },
  { name: 'Evaluation', text: 'Feedback collection, quality assurance, impact assessment and final reporting.' },
  { name: 'Follow-up', text: 'Optional ongoing support, coaching, refresher training or solution enhancement engagements.' }
];

const deliveryFormats = [
  'In-person workshops, training and advisory sessions across African, European and US locations.',
  'Virtual/online training, webinars and remote advisory support.',
  'Hybrid programs combining in-person and virtual delivery.',
  'Short courses (1–5 days) and longer structured programs spanning weeks to months.',
  'Retainer-based advisory support for ongoing strategic, research or AI needs.',
  'One-off consulting assignments and clearly scoped projects.',
  'Custom-designed engagements combining Business Consulting, Market Research, AI Training and AI Enterprise Solutions as needed.'
];

export const AboutLeadership: React.FC<AboutLeadershipProps> = ({ onOpenIntake, setActiveTab }) => {
  return (
    <div id="about-section" className="bg-[#050505]">
      <PageRail items={RAIL} />

      {/* 1. Who we are */}
      <section id="about-who" className="mc-section scroll-mt-28" aria-label="Who we are">
        <div className="mc-container space-y-8 md:space-y-10">
          <SectionHeader
            as="h1"
            eyebrow="About MindCraft"
            title={
              <>
                Why <span className="font-bold text-indigo-400">MindCraft Consultancy</span>
              </>
            }
            lead="Born at the intersection of Life Sciences domain expertise, African market reality, and frontier AI engineering — we bridge the fatal gap between theoretical strategy and production software."
            className="!mb-0"
          />

          {/* Vision / mission: asymmetric */}
          <div className="grid gap-3 lg:grid-cols-5">
            <motion.div {...reveal} className="lg:col-span-3 p-5 sm:p-7 rounded-2xl bg-[#0d0f17] border border-indigo-500/25">
              <h2 className="mc-eyebrow">Vision</h2>
              <p className="mt-3 font-heading text-lg sm:text-xl font-light text-white leading-snug">{vision}</p>
            </motion.div>
            <motion.div {...reveal} transition={{ ...reveal.transition, delay: 0.05 }} className="lg:col-span-2 p-5 sm:p-7 rounded-2xl bg-[#0a0a0a] border border-white/10">
              <h2 className="mc-eyebrow">Mission</h2>
              <p className="mt-3 text-sm text-white/75 leading-relaxed">{mission}</p>
            </motion.div>
          </div>

          {/* Values: snap rail on phones, 4-up on large */}
          <div>
            <h2 className="mc-eyebrow mb-3">What we stand on</h2>
            <ul className="mc-snap-row sm:!grid sm:!grid-cols-2 lg:!grid-cols-4 sm:!overflow-visible sm:!gap-3">
              {values.map(({ Icon, tone, title, text }, i) => (
                <motion.li
                  key={title}
                  {...reveal}
                  transition={{ ...reveal.transition, delay: i * 0.05 }}
                  className="mc-card-interactive p-5 rounded-2xl bg-[#0a0a0a] border border-white/10"
                >
                  <div
                    className={`w-10 h-10 mb-3 rounded-xl bg-[#0d0f17] border flex items-center justify-center ${
                      tone === 'emerald' ? 'border-emerald-500/35 text-emerald-400' : 'border-indigo-500/35 text-indigo-400'
                    }`}
                  >
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-1">{title}</h3>
                  <p className="text-sm text-white/70 leading-relaxed">{text}</p>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* What sets MindCraft apart, behind disclosure (profile s.7) */}
          <DeepDive title="What sets MindCraft apart" hint="Five differentiators from our corporate profile">
            <ol className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-3">
              {apart.map((d, i) => (
                <li key={d.title} className="p-4 rounded-xl bg-[#0d0f17] border border-white/10">
                  <span className="font-mono text-xs text-indigo-400">0{i + 1}</span>
                  <h3 className="mt-1.5 text-sm font-bold text-white">{d.title}</h3>
                  <p className="mt-1.5 text-xs text-white/65 leading-relaxed">{d.text}</p>
                </li>
              ))}
            </ol>
          </DeepDive>
        </div>
      </section>

      {/* 2. Leadership */}
      <section id="about-leadership" className="mc-section scroll-mt-28" aria-labelledby="about-leadership-title">
        <div className="mc-container">
          <SectionHeader
            eyebrow="Team & partnerships"
            title={
              <span id="about-leadership-title">
                A core team, <span className="font-bold text-indigo-400">backed by a growing network</span>
              </span>
            }
            lead="Senior-level attention in our founding years, with local reach across priority African markets."
          />
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
            {teamPoints.map((t, i) => (
              <motion.li
                key={t.label}
                {...reveal}
                transition={{ ...reveal.transition, delay: i * 0.05 }}
                className="p-5 sm:p-6 rounded-2xl bg-[#0a0a0a] border border-white/10"
              >
                <span className="text-[11px] font-mono uppercase text-indigo-400 font-bold tracking-wider block mb-2">{t.label}</span>
                <p className="text-sm text-white/70 leading-relaxed">{t.text}</p>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* 3. Senior expertise */}
      <section className="mc-section" aria-label="Senior expertise">
        <div className="mc-container">
          <SeniorExpertiseProfile onOpenIntake={onOpenIntake} onNavigate={setActiveTab} />
        </div>
      </section>

      {/* 4. Engagement approach */}
      <section id="about-approach" className="mc-section scroll-mt-28" aria-labelledby="about-approach-title">
        <div className="mc-container space-y-8 md:space-y-10">
          <SectionHeader
            eyebrow="How we engage"
            title={
              <span id="about-approach-title">
                Six stages, <span className="font-bold text-indigo-400">scoped to your context</span>
              </span>
            }
            lead="Every engagement is designed around the client's operating context, from first consultation through optional follow-up."
            className="!mb-0"
          />

          <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {stages.map((s, i) => (
              <motion.li
                key={s.name}
                {...reveal}
                transition={{ ...reveal.transition, delay: Math.min(i, 5) * 0.05 }}
                className="p-5 rounded-2xl bg-[#0a0a0a] border border-white/10"
              >
                <span className="font-mono text-[11px] tracking-wider text-indigo-400">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="mt-1 text-base font-bold text-white">{s.name}</h3>
                <p className="mt-1.5 text-sm text-white/70 leading-relaxed">{s.text}</p>
              </motion.li>
            ))}
          </ol>

          <div className="grid gap-3 lg:grid-cols-2 items-start">
            <DeepDive title="Delivery formats" hint="Flexible across all four service pillars">
              <ul className="pt-2 space-y-2 text-sm text-white/75 list-disc pl-5 marker:text-indigo-400">
                {deliveryFormats.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </DeepDive>
            <DeepDive title="Responsible AI by design" hint="How governance shapes every AI engagement">
              <div className="flex items-start gap-3 pt-2">
                <span className="w-9 h-9 shrink-0 rounded-lg bg-[#0d0f17] border border-indigo-500/35 flex items-center justify-center text-indigo-400">
                  <Lock className="w-4 h-4" aria-hidden="true" />
                </span>
                <p className="text-sm text-white/70 leading-relaxed">
                  MindCraft embeds data privacy, ethics and governance into every AI training program and enterprise solution, so adoption is safe, compliant and sustainable. This matters most in regulated industries such as pharmaceuticals, healthcare and banking.
                </p>
              </div>
            </DeepDive>
          </div>

          <ContextualCTA
            title="Start with a conversation"
            body="Tell us the market, product or organization you are working on and we will scope the right engagement."
            primaryLabel="Talk to MindCraft"
            onPrimary={onOpenIntake}
          />

          <RelatedLinks
            title="Explore next"
            items={[
              { label: 'Life Sciences', desc: 'Our core sector practice', onClick: () => setActiveTab('life-sciences'), tone: 'indigo' },
              { label: 'Localization', desc: 'From global strategy to local result', onClick: () => setActiveTab('localization'), tone: 'emerald' },
              { label: 'Insights', desc: 'How MindCraft thinks', onClick: () => setActiveTab('insights'), tone: 'teal' }
            ]}
          />
        </div>
      </section>
    </div>
  );
};
