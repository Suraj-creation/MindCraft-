import React from 'react';
import { motion } from 'motion/react';
import { NavTab } from '../types';
import {
  Sparkles,
  MapPin,
  ShieldCheck,
  ArrowRight,
  Compass,
  BarChart3,
  GraduationCap,
  Cpu
} from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: NavTab) => void;
  onOpenIntake: () => void;
}

const linkClass =
  'min-h-11 py-2 text-left text-[13px] text-white/60 hover:text-white active:text-white transition-colors inline-flex items-center gap-2';

export const Footer: React.FC<FooterProps> = ({ setActiveTab, onOpenIntake }) => {
  const go = (tab: NavTab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0 });
  };

  return (
    <footer className="bg-[#050505] border-t border-white/10 text-white/60 text-sm">
      {/* Closing CTA */}
      <div className="mc-container py-10 sm:py-14 border-b border-white/10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-2xl bg-[#0a0a0a] border border-indigo-500/25 p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-[0_0_25px_rgba(99,102,241,0.1)]"
        >
          <div className="max-w-2xl">
            <div className="mc-eyebrow mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Ready for strategic clarity &amp; production AI?</span>
            </div>
            <h3 className="mc-h2 font-light">
              Transform your organization with{' '}
              <span className="font-bold text-indigo-400">MindCraft</span>
            </h3>
            <p className="mt-3 text-sm text-white/60 leading-relaxed">
              Discuss your therapeutic portfolio, African market entry, workforce AI upskilling, or custom enterprise AI architecture with our senior practice partners.
            </p>
          </div>

          <button
            onClick={onOpenIntake}
            className="mc-tap w-full md:w-auto px-6 rounded-xl bg-indigo-600 hover:bg-indigo-500 active:scale-[0.98] text-white font-semibold text-sm shadow-[0_0_15px_rgba(99,102,241,0.35)] transition-[background-color,transform] duration-150 flex items-center justify-center gap-2 shrink-0"
          >
            <span>Start an Engagement</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>

      {/* Link columns */}
      <div className="mc-container py-10 sm:py-14">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-x-6 gap-y-10">

          {/* Brand & mission */}
          <div className="col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-emerald-400 flex items-center justify-center text-[#050505] font-extrabold text-lg">
                M
              </div>
              <div className="leading-tight">
                <span className="text-base font-light text-white tracking-tight">MINDCRAFT</span>
                <span className="block text-[11px] font-mono text-indigo-400 tracking-widest uppercase">Consultancy Services</span>
              </div>
            </div>

            <p className="text-[13px] text-white/60 leading-relaxed max-w-md">
              A multidisciplinary management consulting, market research, AI training and enterprise AI solutions firm. Anchored in Life Sciences heritage and pan-African market realities, delivering end-to-end transformation from boardroom strategy to production software.
            </p>

            <div className="flex items-start gap-2 text-xs text-white/60 font-mono leading-relaxed">
              <MapPin className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
              <span>Global HQ: Nairobi, Kenya · Pan-African Field Network · Europe &amp; US Corridors</span>
            </div>
          </div>

          {/* Pillars */}
          <div>
            <div className="mc-eyebrow !text-white mb-2">Core Pillars</div>
            <ul>
              <li><button onClick={() => go('consulting')} className={linkClass}><Compass className="w-3.5 h-3.5 text-teal-400 shrink-0" />Business Consulting</button></li>
              <li><button onClick={() => go('market-research')} className={linkClass}><BarChart3 className="w-3.5 h-3.5 text-sky-400 shrink-0" />Market Research</button></li>
              <li><button onClick={() => go('ai-training')} className={linkClass}><GraduationCap className="w-3.5 h-3.5 text-amber-400 shrink-0" />AI Training &amp; Literacy</button></li>
              <li><button onClick={() => go('ai-solutions')} className={linkClass}><Cpu className="w-3.5 h-3.5 text-emerald-400 shrink-0" />AI Enterprise Solutions</button></li>
            </ul>
          </div>

          {/* Life sciences */}
          <div>
            <div className="mc-eyebrow !text-white mb-2">Life Sciences</div>
            <ul>
              {['Pharmaceuticals & Biologics', 'Medical Devices & Implants', 'Diagnostics & Laboratory Systems', 'Hospital & Provider Networks', 'Surgical Consumables'].map((label) => (
                <li key={label}><button onClick={() => go('life-sciences')} className={linkClass}>{label}</button></li>
              ))}
            </ul>
          </div>

          {/* Governance */}
          <div className="col-span-2 lg:col-span-1">
            <div className="mc-eyebrow !text-white mb-3">Governance &amp; Compliance</div>
            <div className="space-y-2 text-[13px] leading-relaxed">
              <div className="flex items-center gap-1.5 text-emerald-400 font-mono text-xs">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <span>GDPR &amp; Africa DPA Aligned</span>
              </div>
              <p>Kenya Data Protection Act 2019</p>
              <p>South Africa POPIA Compliance</p>
              <p>Nigeria NDPR Compliance</p>
              <p className="text-white/50 pt-1 font-mono text-xs">Zero Public Model Training on Client Data</p>
            </div>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs text-white/50 font-mono">
          <div>© 2026 MindCraft Consultancy Services Ltd. All Rights Reserved.</div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-6">
            <span>Nairobi · Lagos · Johannesburg · Cairo · London Corridor</span>
            <span className="text-indigo-400 font-bold">Confidential Enterprise System</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
