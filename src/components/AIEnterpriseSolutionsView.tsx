import React, { useState } from 'react';
import { AnimatePresence, MotionConfig, motion } from 'motion/react';
import { NavTab } from '../types';
import {
  Cpu,
  Sparkles,
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  ShieldCheck,
  Database,
  Workflow,
  Users,
  Server,
  Compass,
  LineChart,
  MessageSquare,
  Cog,
  Microscope,
  CheckCircle2,
  ExternalLink,
  Layers,
  PhoneCall,
  Activity,
  Boxes,
  FileCheck2,
  Code2
} from 'lucide-react';
import { ContextualCTA, DeepDive, EASE, RelatedLinks, SectionHeader, reveal } from './ui/primitives';
import { ArtImage } from './ui/ArtImage';
import { ArtCaption, HeroCopy, HeroSection, Scrim } from './ui/Hero';
import { scrollToId } from './PillarParts';
import dsetLogo from '../assets/DSeTC_logo_1.svg';
import {
  AI_PLATFORMS,
  AI_IMPLEMENTATION_SERVICES,
  AI_CLUSTERS,
  AIPlatformItem
} from '../data/aiSolutionsPortfolio';

interface AIEnterpriseSolutionsViewProps {
  onOpenIntake: () => void;
  setActiveTab: (tab: NavTab) => void;
}

type ActiveFilter = 'all' | 'conversational' | 'lifesciences' | 'industrial' | 'services';

type TierTone = 'neutral' | 'indigo' | 'emerald';

const TIER_TONE: Record<TierTone, { border: string; icon: string; title: string; tag: string }> = {
  neutral: {
    border: 'border-white/[0.08]',
    icon: 'border-white/[0.08] bg-white/5 text-[#9CA3AF]',
    title: 'text-white',
    tag: 'text-[#9CA3AF]'
  },
  indigo: {
    border: 'border-indigo-500/35',
    icon: 'border-indigo-500/35 bg-[#0D0F17] text-indigo-400',
    title: 'text-indigo-400',
    tag: 'text-indigo-400'
  },
  emerald: {
    border: 'border-emerald-500/30',
    icon: 'border-emerald-500/30 bg-[#0D0F17] text-emerald-400',
    title: 'text-emerald-400',
    tag: 'text-emerald-400'
  }
};

const ARCHITECTURE_TIERS: { icon: React.ReactNode; title: string; detail: string; tag: string; tone: TierTone }[] = [
  {
    icon: <Users className="h-4 w-4" />,
    title: 'Tier 1: Business Users & Clinical Stakeholders',
    detail: 'Executives · Commercial Directors · Medical Science Liaisons · Regulatory Officers · Plant Engineers',
    tag: 'Access Layer',
    tone: 'neutral'
  },
  {
    icon: <Sparkles className="h-4 w-4" />,
    title: 'Tier 2: AI Experience & Interface Layer',
    detail: 'VoiceOps Telephony Gateway · PharmaAI Natural-Language Portal · MedicsIQ Edge Kiosk · IoT Dashboards',
    tag: 'UI / API / Voice',
    tone: 'indigo'
  },
  {
    icon: <Workflow className="h-4 w-4" />,
    title: 'Tier 3: Autonomous Agents & Orchestration Layer',
    detail: 'Telephony Multi-Turn Agent · Weighbridge IDP Parser · Cloud Compliance Telemetry · SCADA Anomaly Tracker',
    tag: 'Agentic Core',
    tone: 'emerald'
  },
  {
    icon: <Cpu className="h-4 w-4" />,
    title: 'Tier 4: Fine-Tuned Models & Foundation LLM Layer',
    detail: 'Deterministic Retrieval Engines · Specialized BioBERT · Neural Speech Synthesis · Vision Biomarker Models',
    tag: 'Model Gateway',
    tone: 'indigo'
  },
  {
    icon: <Database className="h-4 w-4" />,
    title: 'Tier 5: Data, Vector Embeddings & Knowledge Vaults',
    detail: 'Licensed Pharmaceutical Databases · Plant Sensor Historians · Audited Regulatory Tariffs · Vector Stores',
    tag: 'Data Layer',
    tone: 'indigo'
  },
  {
    icon: <Server className="h-4 w-4" />,
    title: 'Tier 6: Existing Enterprise Systems & Records',
    detail: 'CRM (Veeva, Salesforce) · ERP (SAP, Oracle, Tally) · SCADA/PLCs · Safety Databases · Cloud Infrastructure',
    tag: 'System of Record',
    tone: 'neutral'
  }
];

const LIFECYCLE_STEPS = [
  'Problem Framing',
  'Use Case Discovery',
  'Data Readiness',
  'Architecture Design',
  'Secure Build',
  'Enterprise Integration',
  'Governed Deployment',
  'Champion Training',
  'ROI Measurement'
];

const SERVICE_ICONS = [Server, Workflow, Activity, Code2, Compass];

const BADGE_STYLES: Record<string, string> = {
  emerald: 'border-emerald-500/40 bg-emerald-950/40 text-emerald-300',
  indigo: 'border-indigo-500/40 bg-indigo-950/40 text-indigo-300',
  amber: 'border-amber-500/40 bg-amber-950/40 text-amber-300',
  cyan: 'border-cyan-500/40 bg-cyan-950/40 text-cyan-300'
};

export const AIEnterpriseSolutionsView: React.FC<AIEnterpriseSolutionsViewProps> = ({
  onOpenIntake,
  setActiveTab
}) => {
  const [activeFilter, setActiveFilter] = useState<ActiveFilter>('all');
  const [expandedPlatformId, setExpandedPlatformId] = useState<string | null>(null);

  const filteredPlatforms =
    activeFilter === 'services'
      ? []
      : activeFilter === 'all'
      ? AI_PLATFORMS
      : AI_PLATFORMS.filter((p) => p.clusterKey === activeFilter);

  const showServices = activeFilter === 'all' || activeFilter === 'services';

  return (
    <MotionConfig reducedMotion="user">
      {/* 1. Hero Section */}
      <HeroSection
        id="ai-solutions-section"
        labelledBy="ai-solutions-title"
        className="mc-art-bleed min-h-[36rem] bg-[#050505]"
      >
        <ArtImage
          name="solutions-operations"
          alt="Operations team working in a high-tech control and intelligence room"
          sizes="100vw"
          position="object-[70%_50%] lg:object-[64%_50%]"
          priority
        />
        <Scrim background="linear-gradient(90deg, #050505 0%, rgba(5,5,5,.92) 48%, rgba(5,5,5,.48) 76%, rgba(5,5,5,.18) 100%)" />
        <Scrim background="linear-gradient(180deg, rgba(5,5,5,.65) 0%, rgba(5,5,5,0) 24%, rgba(5,5,5,0) 68%, #050505 100%)" />
        <div className="mc-container mc-art-copy flex min-h-[28rem] items-end py-14 sm:py-20 lg:min-h-[34rem] lg:py-24">
          <HeroCopy
            id="ai-solutions-title"
            meta="AI & Enterprise Solutions"
            title={
              <>
                Purpose-built AI platforms. <em className="font-normal text-emerald-300">Applied responsibly.</em>
              </>
            }
            lead="Specialized enterprise AI platforms and delivery capabilities, developed and deployed through MindCraft's collaboration with DSeT Consulting."
            actions={
              <>
                <button
                  type="button"
                  onClick={onOpenIntake}
                  className="mc-tap inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-400 px-5 py-3 text-sm font-semibold text-[#06150f] transition-[background-color,transform] hover:bg-emerald-300 active:scale-[0.98]"
                >
                  Request an AI Consultation <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={() => scrollToId('ai-portfolio')}
                  className="mc-tap inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-black/40 px-5 py-3 text-sm font-medium text-white transition-[background-color,transform] hover:bg-white/10 active:scale-[0.98]"
                >
                  Explore AI Platforms
                </button>
              </>
            }
          />
        </div>
        <ArtCaption className="absolute bottom-5 right-4 z-10 sm:right-8">
          Enterprise operations & AI orchestration
        </ArtCaption>
      </HeroSection>

      {/* Collaboration Quick Banner */}
      <div className="border-b border-white/[0.08] bg-[#07080c] py-3.5">
        <div className="mc-container flex flex-wrap items-center justify-between gap-3 text-xs text-white/70">
          <div className="flex items-center gap-2.5">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400" aria-hidden="true" />
            <span className="font-semibold text-white">Enterprise AI Delivery:</span>
            <span>Delivered in strategic collaboration with DSeT Consulting</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-white/50">6 Specialized Platforms · 5 Implementation Practices</span>
            <a
              href="https://dsetconsulting.com/product"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-medium text-emerald-400 hover:text-emerald-300 hover:underline"
            >
              <span>DSeT Product Catalog</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* 2. Platform Catalog & Implementation Services */}
      <section id="ai-portfolio" className="mc-section">
        <div className="mc-container">
          <SectionHeader
            title={<>Enterprise AI solutions portfolio.</>}
            lead="Purpose-built platforms spanning conversational automation, life sciences intelligence, industrial edge analytics, revenue operations, and cloud compliance."
          />

          {/* Interactive Cluster Filter Tabs */}
          <div className="mt-8 flex flex-wrap gap-2 border-b border-white/[0.08] pb-4">
            <button
              type="button"
              onClick={() => setActiveFilter('all')}
              className={`mc-tap rounded-xl border px-4 py-2 text-xs font-medium transition-colors active:scale-[0.98] ${
                activeFilter === 'all'
                  ? 'border-emerald-500/60 bg-[#0D0F17] font-semibold text-emerald-400 shadow-sm'
                  : 'border-white/[0.08] bg-[#0a0a0a] text-white/70 hover:border-white/20 hover:text-white'
              }`}
            >
              All Platforms & Services <span className="ml-1 opacity-60">(11)</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('conversational')}
              className={`mc-tap rounded-xl border px-4 py-2 text-xs font-medium transition-colors active:scale-[0.98] ${
                activeFilter === 'conversational'
                  ? 'border-emerald-500/60 bg-[#0D0F17] font-semibold text-emerald-400 shadow-sm'
                  : 'border-white/[0.08] bg-[#0a0a0a] text-white/70 hover:border-white/20 hover:text-white'
              }`}
            >
              Conversational AI & Automation <span className="ml-1 opacity-60">(1)</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('lifesciences')}
              className={`mc-tap rounded-xl border px-4 py-2 text-xs font-medium transition-colors active:scale-[0.98] ${
                activeFilter === 'lifesciences'
                  ? 'border-emerald-500/60 bg-[#0D0F17] font-semibold text-emerald-400 shadow-sm'
                  : 'border-white/[0.08] bg-[#0a0a0a] text-white/70 hover:border-white/20 hover:text-white'
              }`}
            >
              Life Sciences Intelligence <span className="ml-1 opacity-60">(2)</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('industrial')}
              className={`mc-tap rounded-xl border px-4 py-2 text-xs font-medium transition-colors active:scale-[0.98] ${
                activeFilter === 'industrial'
                  ? 'border-emerald-500/60 bg-[#0D0F17] font-semibold text-emerald-400 shadow-sm'
                  : 'border-white/[0.08] bg-[#0a0a0a] text-white/70 hover:border-white/20 hover:text-white'
              }`}
            >
              Industrial & Enterprise AI <span className="ml-1 opacity-60">(3)</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('services')}
              className={`mc-tap rounded-xl border px-4 py-2 text-xs font-medium transition-colors active:scale-[0.98] ${
                activeFilter === 'services'
                  ? 'border-emerald-500/60 bg-[#0D0F17] font-semibold text-emerald-400 shadow-sm'
                  : 'border-white/[0.08] bg-[#0a0a0a] text-white/70 hover:border-white/20 hover:text-white'
              }`}
            >
              Implementation & Integration Services <span className="ml-1 opacity-60">(5)</span>
            </button>
          </div>

          {/* AI Platforms Grid */}
          {filteredPlatforms.length > 0 && (
            <div className="mt-8 space-y-6">
              {filteredPlatforms.map((platform) => {
                const isExpanded = expandedPlatformId === platform.id;
                return (
                  <article
                    key={platform.id}
                    id={`platform-${platform.id}`}
                    className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0a0a0a] p-6 transition-all duration-200 hover:border-emerald-500/30 sm:p-8"
                  >
                    {/* Top Metadata Header */}
                    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.08] pb-4">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="rounded-md border border-white/10 bg-[#050505] px-2.5 py-1 text-xs font-medium text-white/70">
                          {platform.cluster}
                        </span>
                        {platform.priorityBadge && (
                          <span
                            className={`rounded-md border px-2.5 py-1 text-xs font-semibold ${
                              BADGE_STYLES[platform.badgeTone] ?? 'border-white/10 text-white'
                            }`}
                          >
                            {platform.priorityBadge}
                          </span>
                        )}
                      </div>
                      <a
                        href={platform.officialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-400 transition-colors hover:text-emerald-300 hover:underline"
                      >
                        <span>{platform.officialLabel}</span>
                        <ArrowUpRight className="h-3.5 w-3.5" />
                        <span className="sr-only">(opens external specification in a new tab)</span>
                      </a>
                    </div>

                    {/* Product Title & Subtitle */}
                    <div className="mt-5">
                      <h3 className="font-heading text-2xl font-semibold tracking-[-0.015em] text-white sm:text-3xl">
                        {platform.name}
                      </h3>
                      <p className="mt-1 text-sm font-medium text-emerald-400/90 sm:text-base">
                        {platform.subtitle}
                      </p>
                    </div>

                    {/* Synthesized One-Paragraph Business Impact */}
                    <div className="mt-4 rounded-xl border border-white/[0.06] bg-[#050505] p-4 sm:p-5">
                      <p className="text-[15px] leading-relaxed text-white/90">
                        {platform.summary}
                      </p>
                    </div>

                    {/* Problem Statement Callout */}
                    <div className="mt-4 rounded-xl border border-amber-500/25 bg-amber-950/15 p-4 text-xs leading-relaxed sm:text-[13px]">
                      <span className="font-semibold text-amber-300">The Operational Challenge: </span>
                      <span className="text-white/80">{platform.businessChallenge}</span>
                    </div>

                    {/* Key Technical Capabilities */}
                    <div className="mt-5">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-white/60">
                        Key Capabilities & Architecture
                      </h4>
                      <ul className="mt-2.5 grid grid-cols-1 gap-2 sm:grid-cols-2">
                        {platform.keyCapabilities.map((cap) => (
                          <li
                            key={cap}
                            className="flex items-start gap-2.5 rounded-lg border border-white/[0.04] bg-[#050505]/60 p-2.5 text-xs leading-relaxed text-white/80"
                          >
                            <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-400" />
                            <span>{cap}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technology Stack & Target Sectors */}
                    <div className="mt-5 grid grid-cols-1 gap-4 border-t border-white/[0.08] pt-4 lg:grid-cols-2">
                      <div>
                        <span className="text-xs font-semibold text-indigo-300">Underlying Technology:</span>
                        <div className="mt-2 flex flex-wrap gap-1.5">
                          {platform.technology.map((tech) => (
                            <span
                              key={tech}
                              className="rounded-md border border-indigo-500/30 bg-[#0d0f17] px-2.5 py-1 text-[11px] font-medium text-indigo-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-emerald-300">Best-Fit Sectors:</span>
                        <div className="mt-2 flex flex-wrap gap-1.5">
                          {platform.bestFitSectors.map((sector) => (
                            <span
                              key={sector}
                              className="rounded-md border border-emerald-500/30 bg-[#0d1411] px-2.5 py-1 text-[11px] font-medium text-emerald-300"
                            >
                              {sector}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Action Footer */}
                    <div className="mt-6 flex flex-col-reverse items-stretch justify-between gap-3 border-t border-white/[0.08] pt-4 sm:flex-row sm:items-center">
                      <a
                        href={platform.officialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mc-tap inline-flex items-center justify-center gap-1.5 rounded-xl border border-white/10 bg-[#050505] px-4 py-2.5 text-xs font-medium text-white/80 transition-colors hover:bg-white/5 hover:text-white"
                      >
                        <span>Official Platform Specs</span>
                        <ExternalLink className="h-3.5 w-3.5 text-white/50" />
                      </a>
                      <button
                        type="button"
                        onClick={onOpenIntake}
                        className="mc-tap inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-500/40 bg-[#0D0F17] px-5 py-2.5 text-xs font-semibold text-emerald-400 transition-[background-color,color,transform] hover:bg-emerald-400 hover:text-[#06150f] active:scale-[0.98]"
                      >
                        <span>Discuss {platform.name} Implementation</span>
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  </article>
                );
              })}
            </div>
          )}

          {/* 3. Supporting Implementation Services Section */}
          {showServices && (
            <div id="ai-services" className="mt-16">
              <div className="border-t border-white/[0.1] pt-12">
                <SectionHeader
                  title={<>Implementation & Integration Services.</>}
                  lead="MindCraft combines strategic consulting with DSeT's enterprise engineering to deliver AI systems that integrate with existing ERP, CRM, and SCADA infrastructure."
                />

                <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                  {AI_IMPLEMENTATION_SERVICES.map((svc, idx) => {
                    const IconComponent = SERVICE_ICONS[idx % SERVICE_ICONS.length];
                    const isWide = idx === 0 || idx === 1;
                    return (
                      <div
                        key={svc.id}
                        className={`flex flex-col rounded-2xl border border-white/[0.08] bg-[#0a0a0a] p-6 transition-colors hover:border-indigo-500/40 ${
                          idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-xs font-bold text-emerald-400">{svc.step}</span>
                          <span className="rounded-lg border border-white/10 bg-[#050505] p-2 text-indigo-400">
                            <IconComponent className="h-4 w-4" />
                          </span>
                        </div>
                        <h4 className="mt-4 font-heading text-lg font-semibold text-white">{svc.title}</h4>
                        <p className="mt-2.5 text-xs leading-relaxed text-white/70">{svc.summary}</p>

                        <div className="mt-5 border-t border-white/[0.06] pt-4">
                          <span className="text-[11px] font-semibold uppercase tracking-wider text-indigo-300">
                            Core Deliverables
                          </span>
                          <ul className="mt-2 space-y-1.5">
                            {svc.deliverables.map((item) => (
                              <li key={item} className="flex items-start gap-2 text-xs leading-relaxed text-white/75">
                                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-emerald-400" aria-hidden="true" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* 4. DSeT Consulting Strategic Collaboration Showcase */}
          <div id="dset-collaboration" className="mt-16">
            <div className="relative overflow-hidden rounded-3xl border border-indigo-500/30 bg-gradient-to-br from-[#0d0f17] via-[#090b10] to-[#050505] p-8 sm:p-10 shadow-2xl">
              <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[14rem_1fr_auto]">
                {/* Logo and Partner Caption */}
                <div className="flex flex-col items-center justify-center rounded-2xl border border-white/[0.08] bg-[#050505] p-6 text-center">
                  <img
                    src={dsetLogo}
                    alt="DSeT Consulting"
                    width={160}
                    height={60}
                    loading="lazy"
                    decoding="async"
                    className="h-12 w-36 object-contain"
                  />
                  <span className="mt-3 text-[11px] font-medium tracking-wide text-white/50">
                    Technology & Engineering Partner
                  </span>
                </div>

                {/* Narrative */}
                <div className="space-y-2">
                  <p className="mc-meta text-emerald-400">Enterprise AI Partnership</p>
                  <h3 className="font-heading text-xl font-medium tracking-[-0.015em] text-white sm:text-2xl">
                    In collaboration with DSeT Consulting
                  </h3>
                  <p className="text-sm leading-relaxed text-white/70">
                    MindCraft Consultancy works in strategic collaboration with DSeT Consulting, bridging senior Life
                    Sciences advisory, Pan-African market access, and regulatory strategy with DSeT’s proprietary AI
                    platforms, data pipelines, and enterprise engineering capabilities. This partnership ensures every
                    deployed solution is grounded in commercial viability, strict data governance, and measurable
                    operational outcomes.
                  </p>
                </div>

                {/* External Action */}
                <div className="flex flex-col items-stretch sm:items-end justify-center gap-2.5">
                  <a
                    href="https://dsetconsulting.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mc-tap inline-flex items-center justify-center gap-2 rounded-xl border border-indigo-500/40 bg-[#0d0f17] px-5 py-3 text-xs font-semibold text-indigo-300 transition-colors hover:bg-indigo-950/60 hover:text-white"
                  >
                    <span>Visit DSeT Consulting</span>
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                  <button
                    type="button"
                    onClick={onOpenIntake}
                    className="mc-tap inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-400 px-5 py-3 text-xs font-semibold text-[#06150f] transition-colors hover:bg-emerald-300 active:scale-[0.98]"
                  >
                    <span>Request AI Consultation</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* 5. Deep Dives: Reference Architecture & Engineering Lifecycle */}
          <div className="mt-12 space-y-4">
            <DeepDive
              tone="emerald"
              title="Reference architecture: six tiers with cross-cutting governance"
              hint="Enterprise deployment topology for production AI systems"
            >
              <ol className="mt-3 space-y-2">
                {ARCHITECTURE_TIERS.map((tier) => {
                  const t = TIER_TONE[tier.tone];
                  return (
                    <li
                      key={tier.title}
                      className={`flex items-start gap-3 rounded-xl border bg-[#050505] p-3.5 ${t.border}`}
                    >
                      <span className={`mt-0.5 shrink-0 rounded-lg border p-2 ${t.icon}`}>{tier.icon}</span>
                      <span className="min-w-0 flex-1">
                        <span className={`block tabular-nums text-xs font-bold leading-snug ${t.title}`}>
                          {tier.title}
                        </span>
                        <span className={`mt-0.5 block tabular-nums text-xs ${t.tag}`}>{tier.tag}</span>
                        <span className="mt-1.5 block text-xs leading-relaxed text-[#9CA3AF]">{tier.detail}</span>
                      </span>
                    </li>
                  );
                })}
                <li className="flex items-start gap-3 rounded-xl border border-indigo-500/35 bg-[#0D0F17] p-4">
                  <span className="shrink-0 rounded-lg border border-indigo-500/35 bg-[#050505] p-2 text-indigo-400">
                    <ShieldCheck className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[13px] font-semibold text-white">
                      Governance, Responsible AI & Compliance Layer (Cross-Cutting)
                    </span>
                    <span className="mt-1 block text-xs leading-relaxed text-[#9CA3AF]">
                      Data privacy controls · Deterministic accuracy verification · HIPAA & ISO 27001 compliance ·
                      Continuous audit logs · Mandatory human-in-the-loop sign-off
                    </span>
                  </span>
                </li>
              </ol>
            </DeepDive>

            <DeepDive
              tone="emerald"
              title="Engineering lifecycle: nine stages from framing to ROI realization"
              hint="From use-case discovery to enterprise-governed production"
            >
              <ol className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-5">
                {LIFECYCLE_STEPS.map((step, idx) => (
                  <li
                    key={step}
                    className="flex items-start gap-2.5 rounded-xl border border-white/[0.08] bg-[#050505] p-3"
                  >
                    <span className="tabular-nums text-xs font-bold text-emerald-400">0{idx + 1}</span>
                    <span className="text-xs leading-snug text-[#E0E0E0]">{step}</span>
                  </li>
                ))}
              </ol>
            </DeepDive>
          </div>
        </div>
      </section>

      {/* 6. Contextual CTA & Related Navigation */}
      <section className="mc-section" aria-label="Next steps">
        <div className="mc-container">
          <div className="space-y-10 md:space-y-14">
            <motion.div {...reveal}>
              <ContextualCTA
                title="Put a governed AI system into production"
                body="Explore deployment options for VoiceOps, PharmaAI, MedicsIQ, EdgeBay IntelliFence, OreBill AI, or SecureCloud. Backed by end-to-end integration and ethical AI governance."
                primaryLabel="Request AI Consultation"
                onPrimary={onOpenIntake}
              />
            </motion.div>
            <RelatedLinks
              title="Pairs with"
              items={[
                {
                  label: 'Market Research',
                  desc: 'Turn periodic studies into continuous intelligence monitoring.',
                  to: 'market-research',
                  tone: 'sky'
                },
                {
                  label: 'AI Training & Literacy',
                  desc: 'Equip leadership and operational teams to adopt AI systems.',
                  to: 'ai-training',
                  tone: 'amber'
                },
                {
                  label: 'Market localisation',
                  desc: 'Adapt platforms to each country’s regulatory and commercial context.',
                  to: 'localization',
                  tone: 'emerald'
                },
                {
                  label: 'Senior expertise',
                  desc: 'The Life Sciences leadership and advisory team behind our solutions.',
                  to: 'senior-expertise',
                  tone: 'indigo'
                },
                {
                  label: 'Sketch an engagement',
                  desc: '13 practice areas & 89 specialized healthcare services.',
                  to: 'engagement-builder',
                  tone: 'indigo'
                }
              ]}
            />
          </div>
        </div>
      </section>
    </MotionConfig>
  );
};
