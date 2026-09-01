import React, { useState } from 'react';
import { NavTab } from '../types';
import { SERVICE_PILLARS } from '../data/mindcraftData';
import { 
  Compass, 
  BarChart3, 
  GraduationCap, 
  Cpu, 
  ArrowRight, 
  Sparkles, 
  Layers, 
  CheckCircle2, 
  ArrowDown, 
  Network,
  Maximize2
} from 'lucide-react';

interface IntegratedModelSectionProps {
  setActiveTab: (tab: NavTab) => void;
}

export const IntegratedModelSection: React.FC<IntegratedModelSectionProps> = ({ setActiveTab }) => {
  const [selectedPair, setSelectedPair] = useState<string>('research-consulting');

  const pillarIcons: { [key: string]: any } = {
    Compass,
    BarChart3,
    GraduationCap,
    Cpu
  };

  const integrations = [
    {
      id: 'research-consulting',
      title: 'Market Research → Business Consulting',
      tagline: 'Evidence-Grounded Strategic Advisory',
      from: 'Market Research ("What is happening?")',
      to: 'Business Consulting ("What should we do?")',
      description: 'Consulting strategy is never built on generic academic templates; it is powered directly by primary field surveys with physicians, tender award histories, and unvarnished competitor pricing intelligence.',
      exampleFlow: '48 oncologist interviews reveal diagnostic delay in Kenya/Nigeria → Consulting structures a tiered PPP diagnostic subsidy model with regional referral centers.',
      deliverable: 'Strategy Blueprint backed by Primary Epidemiological & Pricing Data'
    },
    {
      id: 'consulting-training',
      title: 'Business Consulting → AI Training',
      tagline: 'Human Capability Aligned to Strategy',
      from: 'Business Consulting (Operating Model)',
      to: 'AI Training (Workforce Upskilling)',
      description: 'Strategic restructuring and digital roadmaps only succeed when the human workforce is equipped to execute. MindCraft designs organization-specific AI training that mirrors the newly designed operating model.',
      exampleFlow: 'Consulting redesigns commercial territory routes → AI Training equips 40 sales reps with customized mobile prompt assistants to generate pre-call briefings.',
      deliverable: 'Function-Specific Training Playbooks & Certified AI Champions'
    },
    {
      id: 'consulting-solutions',
      title: 'Business Consulting → AI Enterprise Solutions',
      tagline: 'Strategy Operationalized into Production Systems',
      from: 'Business Consulting (Process & Governance)',
      to: 'AI Solutions (Custom Architecture)',
      description: 'Instead of leaving recommendations as 100-page slide decks, MindCraft engineers build the custom software, agents, and data pipelines to automate the recommended processes.',
      exampleFlow: 'Consulting designs pan-African regulatory filing SOPs → AI Solutions deploys an automated web scraping agent tracking 14 national health authority gazettes.',
      deliverable: 'Production-Grade Enterprise AI Software & API Pipelines'
    },
    {
      id: 'training-solutions',
      title: 'AI Training ↔ AI Enterprise Solutions',
      tagline: 'Sustained Adoption & Zero Shelfware',
      from: 'AI Enterprise Solutions (The Technology)',
      to: 'AI Training (The User Champions)',
      description: 'The primary cause of enterprise AI failure is poor user adoption. MindCraft trains the specific end-users who will operate the custom systems, ensuring 100% daily utilization and continuous feedback.',
      exampleFlow: 'AI Solutions deploys an automated Pharmacovigilance literature screener → AI Training certifies safety officers on audit trail validation and human override protocols.',
      deliverable: 'High Daily Active Usage with Measurable Efficiency ROI'
    }
  ];

  const activeIntegration = integrations.find(i => i.id === selectedPair) || integrations[0];

  return (
    <section className="py-20 bg-[#050505] border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#0a0a0a] border border-indigo-500/30 text-indigo-400 text-xs font-mono mb-3">
            <Network className="w-3.5 h-3.5 text-indigo-400" />
            <span className="uppercase tracking-widest text-[10px]">The MindCraft Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-light text-white tracking-tight">
            One Unified Partner. <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-300">Four Integrated Pillars.</span>
          </h2>
          <p className="text-white/60 text-sm sm:text-base mt-3 leading-relaxed">
            Most organizations hire separate vendors for market research, management advisory, workforce training, and AI engineering. MindCraft integrates all four into a single modular architecture.
          </p>
        </div>

        {/* Conceptual Architecture Flow Diagram in Bento Style */}
        <div className="rounded-2xl bg-[#0a0a0a] border border-white/10 p-6 sm:p-8 mb-12 shadow-xl">
          <div className="text-[10px] font-mono uppercase text-white/40 tracking-widest font-semibold mb-6 text-center">
            Integrated Organizational Value Architecture
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
            
            {/* Pillar 1: Market Research */}
            <div className="p-5 rounded-2xl bg-[#050505] border border-white/10 flex flex-col justify-between relative group hover:border-indigo-500/40 transition-all">
              <div>
                <div className="w-8 h-8 rounded-lg bg-indigo-950/40 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mb-3">
                  <BarChart3 className="w-4 h-4" />
                </div>
                <div className="text-[10px] font-mono text-indigo-400 font-semibold uppercase tracking-wider">Pillar 01</div>
                <h3 className="text-sm font-bold text-white mt-0.5">Market Research</h3>
                <div className="text-xs text-white/70 font-mono mt-1">"What is happening?"</div>
                <p className="text-xs text-white/50 mt-2 leading-relaxed">
                  Primary surveys, KOL mapping, epidemiology & regulatory landscape scans.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between">
                <span className="text-[10px] text-indigo-300/80 font-mono">Feeds Evidence</span>
                <ArrowRight className="w-3.5 h-3.5 text-indigo-400" />
              </div>
            </div>

            {/* Pillar 2: Business Consulting */}
            <div className="p-5 rounded-2xl bg-[#050505] border border-white/10 flex flex-col justify-between relative group hover:border-indigo-500/40 transition-all">
              <div>
                <div className="w-8 h-8 rounded-lg bg-indigo-950/40 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mb-3">
                  <Compass className="w-4 h-4" />
                </div>
                <div className="text-[10px] font-mono text-indigo-400 font-semibold uppercase tracking-wider">Pillar 02</div>
                <h3 className="text-sm font-bold text-white mt-0.5">Business Consulting</h3>
                <div className="text-xs text-white/70 font-mono mt-1">"What should we do?"</div>
                <p className="text-xs text-white/50 mt-2 leading-relaxed">
                  Corporate strategy, market entry blueprints, operating models & SOP redesign.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between">
                <span className="text-[10px] text-indigo-300/80 font-mono">Guides Execution</span>
                <ArrowRight className="w-3.5 h-3.5 text-indigo-400" />
              </div>
            </div>

            {/* Pillar 3: AI Training */}
            <div className="p-5 rounded-2xl bg-[#050505] border border-white/10 flex flex-col justify-between relative group hover:border-amber-500/40 transition-all">
              <div>
                <div className="w-8 h-8 rounded-lg bg-amber-950/40 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-3">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div className="text-[10px] font-mono text-amber-400 font-semibold uppercase tracking-wider">Pillar 03</div>
                <h3 className="text-sm font-bold text-white mt-0.5">AI Training</h3>
                <div className="text-xs text-white/70 font-mono mt-1">"Can our people use AI?"</div>
                <p className="text-xs text-white/50 mt-2 leading-relaxed">
                  Applied literacy, prompt workflows, responsible use & certified internal champions.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between">
                <span className="text-[10px] text-amber-300/80 font-mono">Drives Adoption</span>
                <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
              </div>
            </div>

            {/* Pillar 4: AI Enterprise Solutions */}
            <div className="p-5 rounded-2xl bg-[#050505] border border-white/10 flex flex-col justify-between relative group hover:border-emerald-500/40 transition-all">
              <div>
                <div className="w-8 h-8 rounded-lg bg-emerald-950/40 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-3">
                  <Cpu className="w-4 h-4" />
                </div>
                <div className="text-[10px] font-mono text-emerald-400 font-semibold uppercase tracking-wider">Pillar 04</div>
                <h3 className="text-sm font-bold text-white mt-0.5">AI Enterprise Solutions</h3>
                <div className="text-xs text-white/70 font-mono mt-1">"How to automate?"</div>
                <p className="text-xs text-white/50 mt-2 leading-relaxed">
                  Governed production agents, PV monitoring, regulatory scrapers & CRM intelligence.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between">
                <span className="text-[10px] text-emerald-300/80 font-mono">Automates Scale</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              </div>
            </div>

          </div>

          {/* Bottom Culmination Bar in Bento Style */}
          <div className="mt-6 p-4 rounded-xl bg-[#050505] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg bg-indigo-950/50 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-white">Unified Outcome: End-to-End Measurable Business Impact</div>
                <div className="text-[11px] text-white/40 font-mono">Grounded in Life Sciences depth, African local context, and governed AI.</div>
              </div>
            </div>

            <button
              onClick={() => setActiveTab('engagement-builder')}
              className="px-3.5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-mono shrink-0 transition-colors shadow-[0_0_10px_rgba(99,102,241,0.3)]"
            >
              Build Multi-Pillar Engagement
            </button>
          </div>
        </div>

        {/* Interactive Inter-Pillar Relationship Explorer in Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          
          {/* Pair Selector List */}
          <div className="space-y-2">
            <div className="text-[10px] font-mono uppercase tracking-widest text-white/40 font-semibold mb-2">
              Select Inter-Pillar Integration
            </div>
            {integrations.map((item) => (
              <button
                key={item.id}
                onClick={() => setSelectedPair(item.id)}
                className={`w-full text-left p-3.5 rounded-2xl border transition-all ${
                  selectedPair === item.id 
                    ? 'bg-[#0a0a0a] border-indigo-500/60 shadow-[0_0_15px_rgba(99,102,241,0.25)] text-white' 
                    : 'bg-[#0a0a0a] border-white/10 text-white/70 hover:border-white/20 hover:text-white'
                }`}
              >
                <div className="text-xs font-bold text-indigo-300">{item.title}</div>
                <div className="text-[11px] text-white/40 mt-0.5">{item.tagline}</div>
              </button>
            ))}
          </div>

          {/* Detailed Integration Scenario Card */}
          <div className="lg:col-span-2 rounded-2xl bg-[#0a0a0a] border border-white/10 p-6 shadow-xl space-y-4">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-white/10 gap-2">
              <div>
                <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-indigo-950/60 border border-indigo-500/40 text-indigo-300 font-semibold">
                  Cross-Pillar Synergy
                </span>
                <h3 className="text-lg font-bold text-white mt-1">
                  {activeIntegration.title}
                </h3>
              </div>

              <div className="text-xs text-white/40 font-mono">
                Integrated Delivery
              </div>
            </div>

            <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
              {activeIntegration.description}
            </p>

            <div className="p-4 rounded-xl bg-[#050505] border border-white/10 space-y-2">
              <div className="text-xs font-bold text-amber-300 flex items-center space-x-1.5 font-mono">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Illustrative Integrated Delivery Scenario</span>
              </div>
              <p className="text-xs text-white/70 leading-relaxed italic">
                "{activeIntegration.exampleFlow}"
              </p>
            </div>

            <div className="flex items-center justify-between pt-2">
              <div>
                <div className="text-[10px] text-white/40 uppercase font-mono">Combined Deliverable</div>
                <div className="text-xs font-medium text-emerald-400 font-mono">{activeIntegration.deliverable}</div>
              </div>

              <button
                onClick={() => setActiveTab('question-to-outcome')}
                className="px-4 py-2 rounded-xl bg-[#050505] hover:bg-white/5 text-white/80 hover:text-white text-xs font-mono flex items-center space-x-1.5 transition-colors border border-white/10"
              >
                <span>View Problem Scenarios</span>
                <ArrowRight className="w-3.5 h-3.5 text-indigo-400" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
