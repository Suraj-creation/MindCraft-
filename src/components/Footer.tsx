import React from 'react';
import { NavTab } from '../types';
import { 
  Sparkles, 
  MapPin, 
  Mail, 
  Phone, 
  Globe2, 
  ShieldCheck, 
  ArrowRight,
  Dna,
  Compass,
  BarChart3,
  GraduationCap,
  Cpu
} from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: NavTab) => void;
  onOpenIntake: () => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab, onOpenIntake }) => {
  return (
    <footer className="bg-[#050505] border-t border-white/10 text-white/50 text-xs">
      {/* Top Pre-Footer Callout Banner in Bento Style */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-white/10">
        <div className="rounded-2xl bg-[#0a0a0a] border border-white/10 p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_0_25px_rgba(99,102,241,0.1)]">
          <div>
            <div className="flex items-center space-x-2 text-indigo-400 font-mono text-[10px] font-bold uppercase mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Ready for Strategic Clarity & Production AI?</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-light text-white">
              Transform Your Organization with <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-300">MindCraft</span>
            </h3>
            <p className="text-xs sm:text-sm text-white/60 mt-1 max-w-2xl">
              Discuss your therapeutic portfolio, African market entry, workforce AI upskilling, or custom enterprise AI architecture with our senior practice partners.
            </p>
          </div>

          <button
            onClick={onOpenIntake}
            className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-mono font-semibold text-xs shadow-[0_0_15px_rgba(99,102,241,0.35)] transition-all flex items-center space-x-2 shrink-0"
          >
            <span>Start an Engagement</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Brand & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-emerald-400 flex items-center justify-center text-[#050505] font-extrabold text-lg shadow-lg shadow-indigo-900/50">
                M
              </div>
              <div>
                <span className="text-base font-light text-white tracking-tight">MINDCRAFT</span>
                <span className="text-[9px] block font-mono text-indigo-400 tracking-widest uppercase">
                  CONSULTANCY SERVICES
                </span>
              </div>
            </div>

            <p className="text-xs text-white/50 leading-relaxed pr-6">
              A premium, multidisciplinary management consulting, market research, AI training, and enterprise AI solutions firm. Anchored in Life Sciences heritage and pan-African market realities, delivering end-to-end transformation from boardroom strategy to production software.
            </p>

            <div className="flex items-center space-x-2 text-xs text-white/60 pt-2 font-mono">
              <MapPin className="w-4 h-4 text-indigo-400 shrink-0" />
              <span>Global HQ: Nairobi, Kenya · Pan-African Field Network · Europe & US Corridors</span>
            </div>
          </div>

          {/* 4 Core Pillars */}
          <div className="space-y-3">
            <div className="text-[10px] font-mono uppercase font-bold text-white tracking-wider">
              Core Pillars
            </div>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => setActiveTab('consulting')}
                  className="hover:text-indigo-300 transition-colors text-left flex items-center space-x-1.5"
                >
                  <Compass className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Business Consulting</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setActiveTab('market-research')}
                  className="hover:text-indigo-300 transition-colors text-left flex items-center space-x-1.5"
                >
                  <BarChart3 className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Market Research</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setActiveTab('ai-training')}
                  className="hover:text-amber-300 transition-colors text-left flex items-center space-x-1.5"
                >
                  <GraduationCap className="w-3.5 h-3.5 text-amber-400" />
                  <span>AI Training & Literacy</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setActiveTab('ai-solutions')}
                  className="hover:text-emerald-300 transition-colors text-left flex items-center space-x-1.5"
                >
                  <Cpu className="w-3.5 h-3.5 text-emerald-400" />
                  <span>AI Enterprise Solutions</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Life Sciences Verticals */}
          <div className="space-y-3">
            <div className="text-[10px] font-mono uppercase font-bold text-white tracking-wider">
              Life Sciences
            </div>
            <ul className="space-y-2 text-white/50">
              <li><button onClick={() => setActiveTab('life-sciences')} className="hover:text-white transition-colors">Pharmaceuticals & Biologics</button></li>
              <li><button onClick={() => setActiveTab('life-sciences')} className="hover:text-white transition-colors">Medical Devices & Implants</button></li>
              <li><button onClick={() => setActiveTab('life-sciences')} className="hover:text-white transition-colors">Diagnostics & Laboratory Systems</button></li>
              <li><button onClick={() => setActiveTab('life-sciences')} className="hover:text-white transition-colors">Hospital & Provider Networks</button></li>
              <li><button onClick={() => setActiveTab('life-sciences')} className="hover:text-white transition-colors">Surgical Consumables</button></li>
            </ul>
          </div>

          {/* Governance & Privacy */}
          <div className="space-y-3">
            <div className="text-[10px] font-mono uppercase font-bold text-white tracking-wider">
              Governance & Compliance
            </div>
            <div className="space-y-2 text-white/50 text-[11px] leading-relaxed">
              <div className="flex items-center space-x-1.5 text-emerald-400">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span className="font-mono">GDPR & Africa DPA Aligned</span>
              </div>
              <p>Kenya Data Protection Act 2019</p>
              <p>South Africa POPIA Compliance</p>
              <p>Nigeria NDPR Compliance</p>
              <p className="text-white/30 pt-1 font-mono text-[10px]">Zero Public Model Training on Client Data</p>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Strip */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-[11px] text-white/40 font-mono gap-4">
          <div>
            © 2026 MindCraft Consultancy Services Ltd. All Rights Reserved.
          </div>
          <div className="flex items-center space-x-6">
            <span>Nairobi · Lagos · Johannesburg · Cairo · London Corridor</span>
            <span className="text-indigo-400 font-bold">Confidential Enterprise System</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
