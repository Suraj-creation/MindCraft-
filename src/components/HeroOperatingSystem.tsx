import React from 'react';
import { motion } from 'motion/react';
import { NavTab, RoleLens } from '../types';
import { ArrowRight, Compass, BarChart3, GraduationCap, Cpu, Dna, Globe2, MapPin } from 'lucide-react';
import { UNIVERSAL_INDUSTRIES, AFRICA_REGIONS_DATA } from '../data/industryAndAfricaData';
import { EASE, MetricStrip, TONES, Tone } from './ui/primitives';

interface HeroOperatingSystemProps {
  setActiveTab: (tab: NavTab) => void;
  roleLens: RoleLens;
  onOpenIntake: () => void;
}

const PILLARS: { tab: NavTab; name: string; tone: Tone; icon: React.ComponentType<{ className?: string }> }[] = [
  { tab: 'consulting', name: 'Business Consulting', tone: 'teal', icon: Compass },
  { tab: 'market-research', name: 'Market Research', tone: 'sky', icon: BarChart3 },
  { tab: 'ai-training', name: 'AI Training', tone: 'amber', icon: GraduationCap },
  { tab: 'ai-solutions', name: 'AI Enterprise Solutions', tone: 'emerald', icon: Cpu }
];

export const HeroOperatingSystem: React.FC<HeroOperatingSystemProps> = ({ setActiveTab, onOpenIntake }) => {
  const jurisdictions = AFRICA_REGIONS_DATA.reduce((n, r) => n + r.countries.length, 0);
  const core = UNIVERSAL_INDUSTRIES.filter((i) => i.tier === 'core');
  const diversified = UNIVERSAL_INDUSTRIES.length - core.length;

  const goCapabilities = () => {
    document.getElementById('capabilities')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative overflow-hidden bg-[#050505] border-b border-white/10">
      <div className="absolute inset-x-0 top-0 h-[28rem] bg-radial-glow pointer-events-none" aria-hidden />

      <div className="mc-container relative z-10 pt-8 sm:pt-14 lg:pt-16 pb-8 sm:pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-12 items-center">

          {/* Positioning + actions */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
          >
            <p className="mc-eyebrow">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500" aria-hidden />
              Consultancy · Nairobi · Africa · Europe · United States
            </p>

            <h1 className="mc-h1 mt-4 font-light lg:text-[2.9rem] xl:text-[3.25rem]">
              AI-powered business growth,
              <br />
              grounded in <span className="font-bold text-indigo-400">African markets</span>
              {' '}and deep <span className="font-bold text-white">Life Sciences</span> expertise.
            </h1>

            <p className="mc-lead mt-5">
              One partner for Business Consulting, Market Research, AI Training and AI Enterprise Solutions, delivered as a single integrated engagement.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-3">
              <button
                onClick={goCapabilities}
                id="hero-primary-cta"
                className="mc-tap px-6 rounded-xl bg-indigo-600 hover:bg-indigo-500 active:scale-[0.98] text-white font-semibold text-sm shadow-[0_0_20px_rgba(99,102,241,0.4)] transition-[background-color,transform] duration-150 flex items-center justify-center gap-2"
              >
                <span>Explore capabilities</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={onOpenIntake}
                id="hero-secondary-cta"
                className="mc-tap px-5 rounded-xl bg-white/5 hover:bg-white/10 active:scale-[0.98] text-white/90 text-sm border border-white/10 hover:border-white/20 transition-[background-color,border-color,transform] duration-150 flex items-center justify-center"
              >
                Talk to MindCraft
              </button>
              <button
                onClick={() => setActiveTab('africa-explorer')}
                className="mc-tap px-2 text-sm text-emerald-400 hover:text-emerald-300 flex items-center justify-center sm:justify-start gap-1.5 transition-colors"
              >
                <Globe2 className="w-4 h-4" />
                <span>Explore African markets</span>
              </button>
            </div>
          </motion.div>

          {/* At a glance: what / where / who */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.08, ease: EASE }}
          >
            <div className="rounded-2xl bg-[#0a0a0a] border border-white/10 divide-y divide-white/10">
              <div className="p-4 sm:p-5">
                <div className="mc-eyebrow mb-3">What we do</div>
                <ul className="grid grid-cols-2 gap-2">
                  {PILLARS.map((p) => {
                    const Icon = p.icon;
                    return (
                      <li key={p.tab}>
                        <button
                          onClick={() => setActiveTab(p.tab)}
                          className={`mc-card-interactive mc-tap w-full text-left px-3 py-2 rounded-xl bg-[#050505] border border-white/10 ${TONES[p.tone].hoverBorder} flex items-center gap-2.5`}
                        >
                          <Icon className={`w-4 h-4 shrink-0 ${TONES[p.tone].text}`} />
                          <span className="text-[13px] font-medium text-white leading-tight">{p.name}</span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="p-4 sm:p-5">
                <div className="mc-eyebrow mb-3">Where</div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-emerald-400" />
                  <p className="text-sm text-white/80 leading-snug">
                    <span className="text-white font-semibold">Africa is our primary focus</span>, with <span className="text-white">Europe</span> and the <span className="text-white">United States</span> served from our Nairobi headquarters.
                  </p>
                </div>
              </div>

              <div className="p-4 sm:p-5">
                <div className="mc-eyebrow mb-3">Who we help</div>
                <div className="flex items-start gap-3">
                  <Dna className="w-4 h-4 mt-0.5 shrink-0 text-indigo-400" />
                  <p className="text-sm text-white/80 leading-snug">
                    <span className="text-white font-semibold">Life Sciences first</span>: pharmaceuticals, devices, diagnostics and hospitals, plus {diversified} other industry verticals.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="hidden sm:block mt-12">
          <MetricStrip
            items={[
              { value: PILLARS.length, label: 'Integrated capabilities' },
              { value: UNIVERSAL_INDUSTRIES.length, label: 'Industry verticals' },
              { value: jurisdictions, label: 'African jurisdictions' },
              { value: 3, label: 'Regions served' }
            ]}
          />
        </div>
      </div>
    </section>
  );
};
