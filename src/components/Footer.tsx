import React from 'react';
import { motion } from 'motion/react';
import { NavTab } from '../types';
import { BrandLogo } from './ui/BrandLogo';
import { RouteLink } from './ui/primitives';
import { MapPin, ShieldCheck, ArrowRight, Compass, BarChart3, GraduationCap, Cpu } from 'lucide-react';
import dsetLogo from '../assets/DSeTC_logo_1.svg';

interface FooterProps {
  setActiveTab: (tab: NavTab) => void;
  onOpenIntake: () => void;
  /** Every page now ends with its own, page-specific call to action, so this closing band is opt-in */
  showClosingCta?: boolean;
}

const linkClass =
  'min-h-11 py-2 text-left text-[13px] text-white/65 hover:text-white active:text-white transition-colors inline-flex items-center gap-2';

type FooterLink = { to: NavTab; label: string; icon?: React.ComponentType<{ className?: string }>; color?: string };

/** The footer mirrors the primary navigation, so every page is one link away from anywhere on the site. */
const COLUMNS: { title: string; links: FooterLink[] }[] = [
  {
    title: 'Capabilities',
    links: [
      { to: 'consulting', label: 'Business Consulting', icon: Compass, color: 'text-teal-400' },
      { to: 'market-research', label: 'Market Research', icon: BarChart3, color: 'text-sky-400' },
      { to: 'ai-training', label: 'AI Training & Literacy', icon: GraduationCap, color: 'text-amber-400' },
      { to: 'ai-solutions', label: 'AI Enterprise Solutions', icon: Cpu, color: 'text-emerald-400' },
      { to: 'operating-model', label: 'The MindCraft Model' },
      { to: 'responsible-ai', label: 'Responsible AI', icon: ShieldCheck, color: 'text-emerald-400' }
    ]
  },
  {
    title: 'Markets',
    links: [
      { to: 'industries', label: 'Industry Explorer' },
      { to: 'africa-explorer', label: 'African Regions' },
      { to: 'africa-intelligence', label: 'Regulatory & Market Map' },
      { to: 'localization', label: 'Market Localisation' },
      { to: 'market-entry', label: 'Market Entry' }
    ]
  },
  {
    title: 'Life Sciences',
    links: ['Pharmaceuticals', 'Medical Devices', 'Medical Diagnostics', 'Medical Equipment', 'Surgical Consumables', 'Hospitals & Healthcare Providers'].map(
      (label) => ({ to: 'life-sciences' as NavTab, label })
    )
  },
  {
    title: 'About',
    links: [
      { to: 'about', label: 'About MindCraft' },
      { to: 'senior-expertise', label: 'Senior Expertise' },
      { to: 'insights', label: 'Insights' },
      { to: 'engagement-builder', label: 'Engagement Builder' }
    ]
  }
];

export const Footer: React.FC<FooterProps> = ({ setActiveTab, onOpenIntake, showClosingCta = false }) => {
  return (
    <footer className="bg-[#050505] border-t border-white/10 text-white/60 text-sm">
      {/* Closing CTA */}
      {showClosingCta && (
      <div className="mc-container py-10 sm:py-14 border-b border-white/10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-2xl bg-[#0a0a0a] border border-indigo-500/25 p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6"
        >
          <div className="max-w-2xl">
            <h2 className="mc-h2">
              Start a conversation with MindCraft
            </h2>
            <p className="mt-3 text-sm text-white/65 leading-relaxed max-w-[34em]">
              Tell us about the challenge in front of your organisation. We&rsquo;ll suggest the consulting, research, training or AI support that fits.
            </p>
          </div>

          <button
            onClick={onOpenIntake}
            className="mc-tap w-full md:w-auto px-6 rounded-xl bg-indigo-600 hover:bg-indigo-500 active:scale-[0.98] text-white font-semibold text-sm transition-[background-color,transform] duration-150 flex items-center justify-center gap-2 shrink-0"
          >
            <span>Start a conversation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
      )}

      {/* Link columns */}
      <div className="mc-container py-12 sm:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-6 gap-y-10">

          {/* Brand & mission */}
          <div className="col-span-2 md:col-span-4 lg:col-span-2 space-y-4 lg:pr-8">
            <BrandLogo height={96} className="h-20 sm:h-24" sizes="(min-width: 640px) 130px, 108px" />

            <p className="text-[13px] text-white/65 leading-relaxed max-w-md">
              Business Consulting, Market Research, AI Training and AI Enterprise Solutions, delivered as one integrated engagement. Core expertise in Life Sciences, with a deliberate focus on African markets.
            </p>

            <p className="flex items-start gap-2 text-[13px] text-white/65 leading-relaxed">
              <MapPin aria-hidden="true" className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
              <span>Headquartered in Nairobi, Kenya. Africa is our primary focus; we also work with clients in Europe and the United States.</span>
            </p>

            <a href="mailto:info@mindcraftconsultancy.com" className="inline-flex min-h-11 items-center text-[13px] font-medium text-white hover:text-indigo-200 transition-colors">
              info@mindcraftconsultancy.com
            </a>
          </div>

          {COLUMNS.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h2 className="text-[13px] font-semibold text-white mb-2">{col.title}</h2>
              <ul>
                {col.links.map(({ to, label, icon: Icon, color }) => (
                  <li key={label}>
                    <RouteLink to={to} onNavigate={setActiveTab} className={linkClass}>
                      {Icon && <Icon aria-hidden="true" className={`w-3.5 h-3.5 shrink-0 ${color}`} />}
                      {label}
                    </RouteLink>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Bottom strip */}
        <div className="mt-12 pt-6 border-t border-white/10 text-xs text-white/55 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <span>© 2026 MindCraft Consultancy Services. All rights reserved.</span>
          <a
            href="https://dsetconsulting.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex min-h-11 items-center gap-3 text-white/60 hover:text-white transition-colors"
          >
            In collaboration with
            <img src={dsetLogo} alt="DSeT Consulting" width={80} height={30} loading="lazy" decoding="async" className="h-[30px] w-20 rounded-md object-cover" />
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        </div>
      </div>
    </footer>
  );
};
