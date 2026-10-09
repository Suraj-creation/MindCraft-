import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { NavTab, RoleLens } from '../types';
import { ArrowRight } from 'lucide-react';
import { UNIVERSAL_INDUSTRIES } from '../data/industryAndAfricaData';
import { BTN_PRIMARY, BTN_SECONDARY, EASE } from './ui/primitives';

interface HeroOperatingSystemProps {
  setActiveTab: (tab: NavTab) => void;
  roleLens: RoleLens;
  onOpenIntake: () => void;
}

export const HeroOperatingSystem: React.FC<HeroOperatingSystemProps> = ({ onOpenIntake }) => {
  const reduce = useReducedMotion();
  const lifeSciences = UNIVERSAL_INDUSTRIES.filter((i) => i.category === 'core-lifesciences').length;

  const goCapabilities = () => {
    document.getElementById('capabilities')?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
  };

  return (
    <section aria-labelledby="overview-title" className="mc-editorial-band--indigo border-b border-white/[0.12]">
      <div className="mc-container py-[clamp(4.5rem,10vw,8rem)]">
        <motion.div
          className="max-w-[46rem]"
          initial={reduce ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduce ? 0 : 0.24, delay: reduce ? 0 : 0.03, ease: EASE }}
        >
          <h1
            id="overview-title"
            className="font-heading font-medium text-white tracking-[-0.03em] leading-[1.02] text-[2.5rem] sm:text-[3.25rem] lg:text-[4rem] max-w-[13ch]"
          >
            Turn complexity into meaningful business progress.
          </h1>

          <p className="mc-lead mt-6 sm:mt-7 !text-white/80 !max-w-[31em]">
            Consulting, market intelligence and applied AI for decisions that need practical progress.
          </p>

          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row sm:items-center gap-3">
            <button type="button" onClick={onOpenIntake} id="hero-primary-cta" className={`${BTN_PRIMARY} !px-6`}>
              Discuss your business challenge
              <ArrowRight aria-hidden="true" className="w-4 h-4" />
            </button>
            <button type="button" onClick={goCapabilities} id="hero-secondary-cta" className={BTN_SECONDARY}>
              Explore our capabilities
            </button>
          </div>
        </motion.div>

        {/* Three answers a first-time visitor is looking for */}
        <dl className="mt-14 sm:mt-16 grid grid-cols-1 md:grid-cols-3 border-t border-white/[0.18]">
          {[
            {
              term: 'One team, four capabilities',
              desc: 'One focused requirement or a programme across disciplines.'
            },
            {
              term: `${UNIVERSAL_INDUSTRIES.length} industries, specialist depth in Life Sciences`,
              desc: `Cross-sector context, with depth across ${lifeSciences} Life Sciences sectors.`
            },
            {
              term: 'African insight, international reach',
              desc: 'African-market focus, with international delivery.'
            }
          ].map((f, i) => (
            <div
              key={f.term}
              className={`pt-6 pb-2 md:pb-0 md:pr-8 ${i > 0 ? 'md:pl-8 md:border-l md:border-white/[0.18] border-t border-white/[0.12] md:border-t-0 mt-4 md:mt-0' : ''}`}
            >
              <dt className="font-heading text-[1.0625rem] font-medium text-white leading-snug">{f.term}</dt>
              <dd className="mt-2 text-sm text-white/60 leading-relaxed max-w-[34em]">{f.desc}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};
