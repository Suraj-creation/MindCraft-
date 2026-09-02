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
    <footer className="bg-[#123A2E] text-[#EDE7D9] border-t border-[rgba(237,231,217,0.12)]">
      
      {/* Top Pre-Footer Callout Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 border-b border-white/10">
        <div className="rounded-2xl bg-[#0E2C23] border border-white/10 p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2">
            <div className="font-mono text-[10px] tracking-widest uppercase text-[#D98A5F] font-bold">
              Initiate a Strategic Advisory Scope
            </div>
            <h3 className="font-serif text-2xl sm:text-4xl text-[#F4F1EA] font-normal leading-tight">
              Transform Your Pan-African Footprint with MindCraft
            </h3>
            <p className="text-xs sm:text-sm text-[rgba(237,231,217,0.8)] max-w-2xl leading-relaxed">
              Discuss your therapeutic portfolio, African market entry, workforce AI upskilling, or custom enterprise AI architecture directly with our senior practice partners in Nairobi.
            </p>
          </div>

          <button
            onClick={onOpenIntake}
            className="px-6 py-3.5 rounded-lg bg-[#C0562F] hover:bg-[#D98A5F] text-white font-semibold text-xs sm:text-sm transition-colors flex items-center space-x-2 shrink-0 shadow-md"
          >
            <span>Start an Engagement</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-lg bg-[#F4F1EA] text-[#123A2E] flex items-center justify-center font-serif font-bold text-xl">
                M
              </div>
              <div>
                <span className="font-serif text-lg font-normal tracking-wide text-[#F4F1EA]">MINDCRAFT</span>
                <span className="text-[9px] block font-mono text-[#D98A5F] tracking-widest uppercase font-semibold">
                  CONSULTANCY SERVICES
                </span>
              </div>
            </div>

            <p className="text-xs text-[rgba(237,231,217,0.7)] leading-relaxed pr-6">
              A multidisciplinary management consulting, market research, AI training, and enterprise software engineering firm. Anchored in Life Sciences founding heritage and Pan-African market realities, delivering end-to-end transformation from boardroom strategy to production intelligence.
            </p>

            <div className="flex items-start space-x-2 text-xs text-[rgba(237,231,217,0.8)] pt-2 font-mono">
              <MapPin className="w-4 h-4 text-[#D98A5F] shrink-0 mt-0.5" />
              <span>Global HQ: Nairobi, Kenya • Pan-African Associate Network • Europe & US Corridors</span>
            </div>
          </div>

          {/* 4 Core Pillars */}
          <div className="space-y-3">
            <div className="font-mono text-[10px] uppercase font-bold text-[#F4F1EA] tracking-wider">
              Four Core Pillars
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <button 
                  onClick={() => setActiveTab('consulting')}
                  className="text-[rgba(237,231,217,0.7)] hover:text-white transition-colors text-left flex items-center space-x-2"
                >
                  <Compass className="w-3.5 h-3.5 text-[#D98A5F]" />
                  <span>Business Consulting</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setActiveTab('market-research')}
                  className="text-[rgba(237,231,217,0.7)] hover:text-white transition-colors text-left flex items-center space-x-2"
                >
                  <BarChart3 className="w-3.5 h-3.5 text-[#D98A5F]" />
                  <span>Market Research</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setActiveTab('ai-training')}
                  className="text-[rgba(237,231,217,0.7)] hover:text-white transition-colors text-left flex items-center space-x-2"
                >
                  <GraduationCap className="w-3.5 h-3.5 text-[#D98A5F]" />
                  <span>AI Training & Literacy</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setActiveTab('ai-solutions')}
                  className="text-[rgba(237,231,217,0.7)] hover:text-white transition-colors text-left flex items-center space-x-2"
                >
                  <Cpu className="w-3.5 h-3.5 text-[#D98A5F]" />
                  <span>AI Enterprise Solutions</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Life Sciences Heritage */}
          <div className="space-y-3">
            <div className="font-mono text-[10px] uppercase font-bold text-[#F4F1EA] tracking-wider">
              Life Sciences Heritage
            </div>
            <ul className="space-y-2 text-xs text-[rgba(237,231,217,0.7)]">
              <li><button onClick={() => setActiveTab('life-sciences')} className="hover:text-white transition-colors">Pharmaceuticals & Biologics</button></li>
              <li><button onClick={() => setActiveTab('life-sciences')} className="hover:text-white transition-colors">Medical Devices & Implants</button></li>
              <li><button onClick={() => setActiveTab('life-sciences')} className="hover:text-white transition-colors">Diagnostics & Laboratory Systems</button></li>
              <li><button onClick={() => setActiveTab('life-sciences')} className="hover:text-white transition-colors">Hospital & Provider Networks</button></li>
              <li><button onClick={() => setActiveTab('life-sciences')} className="hover:text-white transition-colors">Surgical Consumables</button></li>
            </ul>
          </div>

          {/* Governance & Compliance */}
          <div className="space-y-3">
            <div className="font-mono text-[10px] uppercase font-bold text-[#F4F1EA] tracking-wider">
              Governance & Privacy
            </div>
            <div className="space-y-2 text-[rgba(237,231,217,0.7)] text-xs leading-relaxed">
              <div className="flex items-center space-x-1.5 text-[#D98A5F]">
                <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                <span className="font-mono text-[11px] font-bold">GDPR & Africa DPA Aligned</span>
              </div>
              <p>Kenya Data Protection Act 2019</p>
              <p>South Africa POPIA Compliance</p>
              <p>Nigeria NDPR Compliance</p>
              <p className="text-[rgba(237,231,217,0.5)] pt-1 font-mono text-[10px]">Zero Public Model Training on Client IP</p>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Strip */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[rgba(237,231,217,0.6)] font-mono gap-4">
          <div>
            © 2026 MindCraft Consultancy Services Ltd. All Rights Reserved.
          </div>
          <div className="flex items-center space-x-6">
            <span>Nairobi • Lagos • Johannesburg • Cairo • London Corridor</span>
            <span className="text-[#D98A5F] font-bold">Enterprise Advisory System</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
