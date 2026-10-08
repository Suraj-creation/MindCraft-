import React from 'react';
import { motion } from 'motion/react';
import { NavTab } from '../types';
import logoMark from '../assets/logo-mark.png';
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
              <img src={logoMark} alt="" width={52} height={33} className="h-8 w-auto" />
              <div className="leading-tight">
                <span className="font-heading text-base font-bold text-white tracking-tight uppercase">MindCraft</span>
                <span className="block text-[11px] font-mono text-indigo-400 tracking-widest uppercase">Consultancy Services</span>
              </div>
            </div>

            <p className="text-[13px] text-white/60 leading-relaxed max-w-md">
              Business Consulting, Market Research, AI Training and AI Enterprise Solutions, delivered as one integrated engagement. Core expertise in Life Sciences, with a deliberate focus on African markets.
            </p>

            <div className="flex items-start gap-2 text-xs text-white/60 font-mono leading-relaxed">
              <MapPin className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
              <span>Headquarters: Nairobi, Kenya · Africa (primary focus) · Europe · United States</span>
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
          <div className="hidden lg:block">
            <div className="mc-eyebrow !text-white mb-2">Life Sciences</div>
            <ul>
              {['Pharmaceuticals & Biologics', 'Medical Devices & Implants', 'Diagnostics & Laboratory Systems', 'Hospital & Provider Networks', 'Surgical Consumables'].map((label) => (
                <li key={label}><button onClick={() => go('life-sciences')} className={linkClass}>{label}</button></li>
              ))}
            </ul>
          </div>

          {/* Explore + contact */}
          <div className="col-span-2 lg:col-span-1">
            <div className="mc-eyebrow !text-white mb-2">Explore</div>
            <ul>
              <li><button onClick={() => go('localization')} className={linkClass}>Market Localization</button></li>
              <li><button onClick={() => go('senior-expertise')} className={linkClass}>Senior Expertise</button></li>
              <li><button onClick={() => go('insights')} className={linkClass}>Insights</button></li>
              <li><button onClick={() => go('responsible-ai')} className={linkClass}><ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />Responsible AI</button></li>
            </ul>
            <div className="mt-3 space-y-1 text-xs font-mono text-white/60">
              <a href="mailto:info@mindcraftconsultancy.com" className="block min-h-11 py-2.5 hover:text-white">info@mindcraftconsultancy.com</a>
            </div>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs text-white/50 font-mono">
          <div>© 2026 MindCraft Consultancy Services Ltd. All Rights Reserved.</div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-6">
            <span>Nairobi, Kenya · Africa · Europe · United States</span>
            <span className="text-white/50">www.mindcraftconsultancy.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
