import React, { useState } from 'react';
import { NavTab } from '../types';
import { 
  Compass, 
  BarChart3, 
  GraduationCap, 
  Cpu, 
  ArrowRight, 
  Sparkles, 
  Layers, 
  CheckCircle2, 
  Network
} from 'lucide-react';

interface IntegratedModelSectionProps {
  setActiveTab: (tab: NavTab) => void;
}

export const IntegratedModelSection: React.FC<IntegratedModelSectionProps> = ({ setActiveTab }) => {
  const [selectedPair, setSelectedPair] = useState<string>('research-consulting');

  const capabilities = [
    {
      id: 'consulting',
      tag: 'Pillar 01',
      name: 'Business Consulting',
      q: 'What should we do?',
      body: 'Corporate strategy, market entry & expansion, organizational design, process improvement, regulatory advisory and transformation roadmaps.',
      bullets: ['Corporate & Growth Strategy', 'Market Entry (Africa, EU, US)', 'Process & SOP Redesign']
    },
    {
      id: 'research',
      tag: 'Pillar 02',
      name: 'Market Research',
      q: 'What is actually happening?',
      body: 'Primary physician, pharmacist and buyer surveys; KOL mapping; competitive pricing; regulatory scans; and epidemiologic market sizing.',
      bullets: ['Primary Healthcare Fieldwork', 'Competitive & Pipeline Intelligence', 'Monitoring, Evaluation & Learning']
    },
    {
      id: 'training',
      tag: 'Pillar 03',
      name: 'AI Training',
      q: 'Can our people use AI effectively?',
      body: 'Applied, function-specific AI literacy, prompt workflows, responsible-use governance and certified internal AI champions.',
      bullets: ['Executive & Board AI Literacy', 'Commercial & Regulatory Workflows', 'Internal AI Champion Cohorts']
    },
    {
      id: 'solutions',
      tag: 'Pillar 04',
      name: 'AI Enterprise Solutions',
      q: 'How do we operationalize intelligence?',
      body: 'End-to-end design, build, and integration of AI systems — from market intelligence platforms to automated regulatory tracking.',
      bullets: ['Market Intelligence Platforms', 'Automated Regulatory Monitors', 'Conversational AI & Copilots']
    }
  ];

  const flowChips = [
    { t: 'Market Research' },
    { t: 'Intelligence' },
    { t: 'Business Strategy' },
    { t: 'AI Capability' },
    { t: 'AI Systems' },
    { t: 'Adoption' },
    { t: 'Business Impact', last: true }
  ];

  const synergies = [
    {
      id: 'research-consulting',
      title: 'Market Research → Business Consulting',
      tagline: 'Evidence-Grounded Strategic Advisory',
      description: 'Consulting strategy is never built on generic templates; it is powered directly by primary field surveys with physicians, hospital procurement data, and competitor pricing intelligence.',
      example: '48 oncologist interviews reveal diagnostic delays in East Africa → Consulting structures a tiered PPP diagnostic subsidy model with regional referral centers.',
      deliverable: 'Strategy Blueprint backed by Primary Epidemiological & Pricing Data'
    },
    {
      id: 'consulting-training',
      title: 'Business Consulting → AI Training',
      tagline: 'Human Capability Aligned to Strategy',
      description: 'Strategic restructuring and digital roadmaps only succeed when the human workforce is equipped to execute. MindCraft designs organization-specific AI training matching the new operating model.',
      example: 'Consulting redesigns commercial territory routes → AI Training equips 40 sales reps with customized mobile prompt assistants to generate pre-call briefings.',
      deliverable: 'Function-Specific Training Playbooks & Certified AI Champions'
    },
    {
      id: 'consulting-solutions',
      title: 'Business Consulting → AI Enterprise Solutions',
      tagline: 'Strategy Operationalized into Production Systems',
      description: 'Instead of leaving recommendations as slide decks, MindCraft engineers build the software, agents, and data pipelines to automate the recommended processes.',
      example: 'Consulting designs pan-African regulatory filing SOPs → AI Solutions deploys an automated web scraping agent tracking 14 national health authority gazettes.',
      deliverable: 'Production-Grade Enterprise AI Software & API Pipelines'
    },
    {
      id: 'training-solutions',
      title: 'AI Training ↔ AI Enterprise Solutions',
      tagline: 'Sustained Adoption & Zero Shelfware',
      description: 'The primary cause of enterprise AI failure is poor user adoption. MindCraft trains the specific end-users who operate the custom systems, ensuring daily utilization and continuous feedback.',
      example: 'AI Solutions deploys an automated Pharmacovigilance literature screener → AI Training certifies safety officers on audit trail validation and human override protocols.',
      deliverable: 'High Daily Active Usage with Measurable Efficiency ROI'
    }
  ];

  const activeSynergy = synergies.find(s => s.id === selectedPair) || synergies[0];

  return (
    <section className="bg-[#0E2C23] text-[#EDE7D9] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <div className="font-mono text-[11px] tracking-widest uppercase text-[#D98A5F] mb-4">
            The MindCraft Model
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#F4F1EA] font-normal leading-tight tracking-tight mb-4">
            One unified partner. Four integrated capabilities.
          </h2>
          <p className="text-base sm:text-lg text-[rgba(237,231,217,0.72)] leading-relaxed">
            Most organizations hire disconnected vendors for research, strategy, training, and software. MindCraft delivers all four as a single coherent engagement.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {capabilities.map((c) => (
            <button
              key={c.id}
              onClick={() => {
                if (c.id === 'consulting') setActiveTab('consulting');
                else if (c.id === 'research') setActiveTab('market-research');
                else if (c.id === 'training') setActiveTab('ai-training');
                else setActiveTab('solutions');
              }}
              className="p-6 rounded-xl border border-[rgba(237,231,217,0.14)] bg-[rgba(237,231,217,0.04)] hover:bg-[rgba(237,231,217,0.08)] hover:border-[#D98A5F] transition-all text-left flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="font-mono text-[10px] tracking-widest uppercase text-[#D98A5F]">
                  {c.tag}
                </div>
                <h3 className="font-serif text-2xl text-[#F4F1EA] leading-snug">
                  {c.name}
                </h3>
                <div className="font-serif italic text-sm text-[rgba(237,231,217,0.7)]">
                  "{c.q}"
                </div>
                <p className="text-xs sm:text-sm text-[rgba(237,231,217,0.75)] leading-relaxed">
                  {c.body}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[rgba(237,231,217,0.12)] flex items-center justify-between text-xs font-semibold text-[#D98A5F]">
                <span>Explore Pillar</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </button>
          ))}
        </div>

        {/* Integrated Flow Ribbon */}
        <div className="p-6 rounded-xl border border-[rgba(237,231,217,0.14)] bg-[#123A2E] mb-12">
          <div className="font-mono text-[10px] tracking-widest uppercase text-[#D98A5F] mb-3 text-center sm:text-left">
            The Integrated Delivery Loop
          </div>
          <div className="flex items-center justify-center sm:justify-start flex-wrap gap-2 text-xs font-mono tracking-wider uppercase text-[rgba(237,231,217,0.85)]">
            {flowChips.map((chip, idx) => (
              <React.Fragment key={idx}>
                <span className="px-3 py-1.5 rounded-full border border-[rgba(237,231,217,0.2)] bg-[rgba(237,231,217,0.05)] text-[#F4F1EA]">
                  {chip.t}
                </span>
                {!chip.last && <span className="text-[#D98A5F]">→</span>}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Cross-Pillar Synergies Explorer */}
        <div className="border border-[rgba(237,231,217,0.14)] rounded-2xl bg-[rgba(237,231,217,0.03)] p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-4 mb-6 border-b border-[rgba(237,231,217,0.1)]">
            <h3 className="font-serif text-2xl text-[#F4F1EA] font-normal">
              Cross-Pillar Synergy in Action
            </h3>
            <span className="font-mono text-[11px] tracking-wider uppercase text-[#D98A5F]">
              Select a pairing to inspect
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            
            {/* Synergy List */}
            <div className="lg:col-span-5 space-y-2">
              {synergies.map((item) => {
                const isSelected = selectedPair === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setSelectedPair(item.id)}
                    className={`w-full text-left p-4 rounded-xl border transition-all ${
                      isSelected
                        ? 'bg-[#123A2E] border-[#D98A5F] text-[#F4F1EA] shadow-md'
                        : 'bg-transparent border-[rgba(237,231,217,0.12)] text-[rgba(237,231,217,0.7)] hover:bg-[rgba(237,231,217,0.06)] hover:text-[#F4F1EA]'
                    }`}
                  >
                    <div className="text-sm font-semibold text-[#F4F1EA] mb-0.5">
                      {item.title}
                    </div>
                    <div className="font-mono text-[11px] text-[#D98A5F]">
                      {item.tagline}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Synergy Detail Panel */}
            <div className="lg:col-span-7 p-6 rounded-xl border border-[rgba(237,231,217,0.16)] bg-[#123A2E] space-y-4">
              <div className="font-mono text-[10px] tracking-widest uppercase text-[#D98A5F]">
                Combined Workflow
              </div>
              
              <h4 className="font-serif text-2xl text-[#F4F1EA] leading-snug">
                {activeSynergy.title}
              </h4>

              <p className="text-sm text-[rgba(237,231,217,0.8)] leading-relaxed">
                {activeSynergy.description}
              </p>

              <div className="p-4 rounded-lg bg-[rgba(237,231,217,0.06)] border border-[rgba(237,231,217,0.12)] space-y-1.5">
                <div className="font-mono text-[10px] tracking-wider uppercase text-[#D98A5F]">
                  Illustrative Delivery Scenario
                </div>
                <p className="text-xs sm:text-sm text-[#F4F1EA] font-serif italic leading-relaxed">
                  "{activeSynergy.example}"
                </p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-[rgba(237,231,217,0.12)]">
                <div>
                  <div className="font-mono text-[10px] uppercase text-[rgba(237,231,217,0.6)]">Deliverable Artifact</div>
                  <div className="font-mono text-xs text-[#D98A5F] font-semibold">{activeSynergy.deliverable}</div>
                </div>

                <button
                  onClick={() => setActiveTab('engagement-builder')}
                  className="px-4 py-2 rounded-lg bg-[#C0562F] hover:bg-[#D98A5F] text-[#F4F1EA] text-xs font-semibold tracking-wide transition-colors self-start sm:self-auto"
                >
                  Build Multi-Pillar Engagement →
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
