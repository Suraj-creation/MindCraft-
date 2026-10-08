import React from 'react';
import { motion } from 'motion/react';
import { NavTab } from '../types';
import {
  Building2,
  ShieldCheck,
  Award,
  ArrowRight,
  Sparkles,
  Lock,
  Globe2,
  Check,
  ChevronDown
} from 'lucide-react';

interface AboutLeadershipProps {
  onOpenIntake: () => void;
  setActiveTab: (tab: NavTab) => void;
}

const EASE = [0.16, 1, 0.3, 1] as const;
const viewport = { once: true, margin: '-10%' } as const;

export const AboutLeadership: React.FC<AboutLeadershipProps> = ({
  onOpenIntake
}) => {
  const comparisonMatrix = [
    {
      dimension: 'Life Sciences Depth',
      mindcraft: 'Founding heritage with clinical & regulatory fluency',
      strategyFirms: 'Generalist MBAs with limited therapeutic nuance',
      researchHouses: 'Field data collection without clinical strategy',
      techBoutiques: 'Pure engineers with zero health economics'
    },
    {
      dimension: 'African Market Fluency',
      mindcraft: 'HQ in Nairobi with on-ground reach across 12+ markets',
      strategyFirms: 'Fly-in teams with high overhead & low local nuance',
      researchHouses: 'Local field teams without AI or strategy capability',
      techBoutiques: 'Offshore tech hubs without African regulatory context'
    },
    {
      dimension: 'Strategy-to-Code Delivery',
      mindcraft: 'End-to-end: Strategy → Primary Research → Private AI Software',
      strategyFirms: 'Decks only; client must hire systems integrator',
      researchHouses: 'Data charts only; no strategy or software build',
      techBoutiques: 'Software only; no market intelligence or advisory'
    },
    {
      dimension: 'AI Governance & Privacy',
      mindcraft: 'Tenant-isolated private LLM gateways, 100% IP retention',
      strategyFirms: 'Theoretical slides without working software safeguards',
      researchHouses: 'Manual spreadsheets with high data handling risk',
      techBoutiques: 'Often route data to public third-party APIs'
    },
    {
      dimension: 'Turnaround & Cost',
      mindcraft: 'Agile sprints delivered 40% faster at high ROI value',
      strategyFirms: 'Massive billable hours and multi-month ramp-up',
      researchHouses: 'Slow field cycles without automated synthesis',
      techBoutiques: 'Scope creep and misaligned business requirements'
    }
  ];

  const leadershipTeam = [
    {
      role: 'Managing Partner · Life Sciences & Strategy',
      background: '20+ years steering pan-African market access, commercial launches, and health authority negotiations for multinational pharma and global health bodies.',
      focus: 'Corporate Strategy, Market Access & Commercial Leadership'
    },
    {
      role: 'Principal Partner · AI Systems & Enterprise Architecture',
      background: 'Former Silicon Valley & African fintech systems architect specializing in secure LLM orchestration, RAG architectures, and HIPAA/DPA-compliant data pipelines.',
      focus: 'AI Enterprise Solutions & Engineering'
    },
    {
      role: 'Head of Market Research & Epidemiological Analytics',
      background: 'Epidemiologist and biostatistician with extensive experience managing multi-country primary clinical panels and healthcare econometric modeling.',
      focus: 'Primary Research & Evidence Rigor'
    },
    {
      role: 'Director of AI Capability Building & Executive Enablement',
      background: 'Organizational transformation leader who has trained over 4,000 corporate executives and commercial teams in applied AI workflow mastery.',
      focus: 'AI Training, Change Management & Champions'
    }
  ];

  const values = [
    { Icon: Award, tone: 'indigo', title: 'Life Sciences Heritage', text: 'We speak the language of clinical trials, reimbursement tiers, hospital formularies, and medical device cold-chains.' },
    { Icon: Globe2, tone: 'indigo', title: 'Pan-African Reach', text: 'Headquartered in Nairobi with vetted field associate networks across 12+ major African growth economies.' },
    { Icon: Sparkles, tone: 'emerald', title: 'Full Value-Chain Delivery', text: 'We do not stop at slide decks. We gather primary evidence, write strategic policy, upskill your workforce, and build custom AI software.' },
    { Icon: ShieldCheck, tone: 'indigo', title: 'Enterprise Privacy & Trust', text: 'Zero public model training on client data. Strict compliance with GDPR, Kenya DPA 2019, SA POPIA, and Nigeria NDPR.' }
  ];

  const fade = {
    initial: { opacity: 0, y: 12 },
    whileInView: { opacity: 1, y: 0 },
    viewport,
    transition: { duration: 0.22, ease: EASE }
  };

  return (
    <section className="mc-section bg-[#050505]" id="about-section">
      <div className="mc-container space-y-10 md:space-y-16">

        {/* Header: intent line first */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="mc-eyebrow mb-3 px-3 py-1 rounded-full bg-[#0a0a0a] border border-indigo-500/35">
            <Building2 className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Firm Profile & Heritage</span>
          </div>
          <h2 className="mc-h2 font-light tracking-tight">
            Why <span className="font-bold text-indigo-400">MindCraft Consultancy</span>
          </h2>
          <p className="mc-lead mx-auto mt-3">
            Born at the intersection of Life Sciences domain expertise, African market reality, and frontier AI engineering — we bridge the fatal gap between theoretical strategy and production software.
          </p>
        </div>

        {/* 4 value pillars: 2-up from sm, tight cards on phones */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {values.map(({ Icon, tone, title, text }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.22, ease: EASE, delay: i * 0.05 }}
              className="mc-card-interactive p-5 sm:p-6 rounded-2xl bg-[#0a0a0a] border border-white/10 flex sm:block items-start gap-4"
            >
              <div className={`w-10 h-10 shrink-0 rounded-xl bg-[#0d0f17] border flex items-center justify-center sm:mb-3 ${
                tone === 'emerald' ? 'border-emerald-500/35 text-emerald-400' : 'border-indigo-500/35 text-indigo-400'
              }`}>
                <Icon className="w-5 h-5" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white mb-1">{title}</h3>
                <p className="text-sm text-white/70 leading-relaxed">{text}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Comparison: table on md+, stacked cards on phones */}
        <motion.div {...fade} className="rounded-2xl bg-[#0a0a0a] border border-white/10 p-4 sm:p-8 space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-4 border-b border-white/10 gap-2">
            <div>
              <span className="text-[11px] font-mono uppercase px-2 py-0.5 rounded bg-[#0d0f17] border border-indigo-500/35 text-indigo-400 font-bold tracking-wider">
                Competitive Landscape Matrix
              </span>
              <h3 className="text-xl sm:text-2xl font-light text-white mt-2">
                MindCraft vs <span className="font-bold text-indigo-400">Alternative Engagement Models</span>
              </h3>
            </div>
            <span className="text-xs text-white/50 font-mono">[Structural Differentiation]</span>
          </div>

          {/* Desktop table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-white/10 text-white/50 uppercase text-[11px] font-mono tracking-wider">
                  <th scope="col" className="py-3 px-3">Dimension</th>
                  <th scope="col" className="py-3 px-3 text-indigo-400 bg-[#0d0f17] rounded-t-lg border-t border-x border-indigo-500/35">MindCraft Consultancy</th>
                  <th scope="col" className="py-3 px-3">Traditional Strategy Houses</th>
                  <th scope="col" className="py-3 px-3">Market Research Agencies</th>
                  <th scope="col" className="py-3 px-3">AI Tech Boutiques</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.08] text-white/70 align-top">
                {comparisonMatrix.map((row, i) => (
                  <tr key={i}>
                    <th scope="row" className="py-3.5 px-3 font-semibold text-white">{row.dimension}</th>
                    <td className="py-3.5 px-3 bg-[#0d0f17] text-white font-medium border-x border-indigo-500/20">
                      <div className="flex items-start gap-1.5">
                        <Check className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" aria-hidden="true" />
                        <span>{row.mindcraft}</span>
                      </div>
                    </td>
                    <td className="py-3.5 px-3 text-white/60">{row.strategyFirms}</td>
                    <td className="py-3.5 px-3 text-white/60">{row.researchHouses}</td>
                    <td className="py-3.5 px-3 text-white/60">{row.techBoutiques}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Phone cards */}
          <div className="md:hidden space-y-3">
            {comparisonMatrix.map((row, i) => (
              <div key={i} className="rounded-xl bg-[#050505] border border-white/10 overflow-hidden">
                <div className="p-4 space-y-2">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-white/60">{row.dimension}</div>
                  <div className="flex items-start gap-2 p-3 rounded-lg bg-[#0d0f17] border border-indigo-500/35 text-sm text-white font-medium">
                    <Check className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" aria-hidden="true" />
                    <span><span className="block text-[11px] font-mono uppercase tracking-wider text-indigo-400 mb-0.5">MindCraft</span>{row.mindcraft}</span>
                  </div>
                </div>
                <details className="group border-t border-white/[0.08]">
                  <summary className="mc-tap flex items-center justify-between px-4 text-sm text-white/70 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                    <span>How alternatives compare</span>
                    <ChevronDown className="w-4 h-4 transition-transform duration-200 group-open:rotate-180" aria-hidden="true" />
                  </summary>
                  <dl className="px-4 pb-4 space-y-2.5 text-sm">
                    <div>
                      <dt className="text-[11px] font-mono uppercase tracking-wider text-white/50">Traditional Strategy Houses</dt>
                      <dd className="text-white/70">{row.strategyFirms}</dd>
                    </div>
                    <div>
                      <dt className="text-[11px] font-mono uppercase tracking-wider text-white/50">Market Research Agencies</dt>
                      <dd className="text-white/70">{row.researchHouses}</dd>
                    </div>
                    <div>
                      <dt className="text-[11px] font-mono uppercase tracking-wider text-white/50">AI Tech Boutiques</dt>
                      <dd className="text-white/70">{row.techBoutiques}</dd>
                    </div>
                  </dl>
                </details>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Leadership archetypes: snap rail on phones */}
        <div className="space-y-5 md:space-y-6">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-light text-white">
              Multidisciplinary <span className="font-bold text-indigo-400">Practice Leadership</span>
            </h3>
            <p className="text-sm text-white/60 mt-1">
              Led by senior practitioners combining healthcare economics, regulatory governance, and cutting-edge machine learning.
            </p>
          </div>

          <div className="mc-snap-row md:!grid md:!grid-cols-2 lg:!grid-cols-4 md:!overflow-visible md:!gap-4">
            {leadershipTeam.map((lead, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.22, ease: EASE, delay: i * 0.05 }}
                className="mc-card-interactive p-5 sm:p-6 rounded-2xl bg-[#0a0a0a] border border-white/10 flex flex-col justify-between"
              >
                <div>
                  <span className="text-[11px] font-mono uppercase text-indigo-400 font-bold tracking-wider block mb-1">
                    {lead.focus}
                  </span>
                  <h4 className="text-base font-bold text-white mb-2.5 leading-snug">
                    {lead.role}
                  </h4>
                  <p className="text-sm text-white/70 leading-relaxed">
                    {lead.background}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/[0.08] text-[11px] text-white/50 font-mono">
                  Nairobi HQ · Senior Partner
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Data governance banner: the single CTA */}
        <motion.div
          {...fade}
          className="p-5 sm:p-8 rounded-2xl bg-[#0a0a0a] border border-indigo-500/35 flex flex-col md:flex-row md:items-center justify-between gap-5 md:gap-6"
        >
          <div className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-xl bg-[#0d0f17] border border-indigo-500/35 flex items-center justify-center text-indigo-400 shrink-0">
              <Lock className="w-5 h-5" aria-hidden="true" />
            </div>
            <div>
              <h3 className="text-lg font-light text-white">
                Client Data Sovereignty & <span className="font-bold text-indigo-400">Responsible AI Guarantee</span>
              </h3>
              <p className="text-sm text-white/70 mt-1 max-w-2xl leading-relaxed">
                MindCraft never trains shared public AI models on your proprietary corporate, clinical, or patient data. Every engagement includes tenant isolation, cryptographic access controls, and full IP ownership transfer for all custom artifacts and fine-tuned architectures.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenIntake}
            className="mc-tap px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold shrink-0 transition-colors active:scale-[0.98] inline-flex items-center justify-center gap-1.5"
          >
            <span>Review Security Policy</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};
