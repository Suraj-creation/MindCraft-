import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { NavTab, RoleLens } from '../types';
import { ArrowRight } from 'lucide-react';
import { AFRICA_REGIONS_DATA, UNIVERSAL_INDUSTRIES } from '../data/industryAndAfricaData';
import { BTN_PRIMARY, BTN_SECONDARY, EASE } from './ui/primitives';
import { ArtImage } from './ui/ArtImage';
import { Scrim } from './ui/Hero';

interface HeroOperatingSystemProps {
  setActiveTab: (tab: NavTab) => void;
  roleLens: RoleLens;
  onOpenIntake: () => void;
}

export const HeroOperatingSystem: React.FC<HeroOperatingSystemProps> = ({ onOpenIntake }) => {
  const reduce = useReducedMotion();
  const lifeSciences = UNIVERSAL_INDUSTRIES.filter((i) => i.category === 'core-lifesciences').length;
  const regions = AFRICA_REGIONS_DATA.map((r) => r.name.replace(' Africa', ''));

  const goCapabilities = () => {
    document.getElementById('capabilities')?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
  };

  return (
    <section aria-labelledby="overview-title" className="mc-art-bleed min-h-[clamp(34rem,72vw,48rem)] border-b border-white/[0.1] bg-[#050505]">
      {/* The globe sits left of centre in the photograph, so on desktop the photo takes the right of the hero
          and its left edge dissolves into the canvas; the headline never covers Africa. */}
      <div aria-hidden="true" className="absolute inset-0 lg:left-auto lg:w-[56%]">
        <ArtImage
          name="globe"
          alt=""
          priority
          sizes="(min-width: 1024px) 90vw, 100vw"
          position="object-[38%_45%] lg:object-[34%_48%]"
          className="brightness-[0.8] saturate-[0.9]"
        />
        <Scrim className="hidden lg:block" background="linear-gradient(90deg, #050505 0%, rgba(5,5,5,.82) 12%, rgba(5,5,5,.3) 30%, rgba(5,5,5,0) 46%)" />
        <Scrim className="lg:hidden" background="linear-gradient(180deg, rgba(5,5,5,.55) 0%, rgba(5,5,5,.6) 42%, rgba(5,5,5,.9) 70%, #050505 100%)" />
        <Scrim background="linear-gradient(180deg, rgba(5,5,5,.7) 0%, rgba(5,5,5,0) 22%, rgba(5,5,5,0) 70%, #050505 100%)" />
      </div>

      <div className="mc-container mc-art-copy flex min-h-[clamp(34rem,72vw,48rem)] flex-col justify-end pb-12 pt-28 sm:pb-16 sm:pt-32 lg:pb-14 lg:pt-36">
        <motion.div
          className="max-w-[40rem]"
          initial={reduce ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduce ? 0 : 0.24, delay: reduce ? 0 : 0.03, ease: EASE }}
        >
          <h1 id="overview-title" className="mc-display max-w-[13ch]">
            Turn complexity into meaningful business progress.
          </h1>

          <p className="mc-lead mt-6 sm:mt-7 !text-white/80 !max-w-[31em]">
            Consulting, market intelligence and applied AI that turns African ambition into measurable growth.
          </p>

          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row sm:items-center gap-3">
            <button type="button" onClick={onOpenIntake} id="hero-primary-cta" className={`${BTN_PRIMARY} !px-6`}>
              Discuss your business challenge
              <ArrowRight aria-hidden="true" className="w-4 h-4" />
            </button>
            <button type="button" onClick={goCapabilities} id="hero-secondary-cta" className={`${BTN_SECONDARY} bg-black/35`}>
              Explore our capabilities
            </button>
          </div>
        </motion.div>

        {/* Three answers a first-time visitor is looking for */}
        <dl className="mt-14 sm:mt-16 lg:mt-20 grid grid-cols-1 md:grid-cols-3 border-t border-white/[0.14]">
          {[
            {
              term: 'One team, four capabilities',
              desc: 'Start with one focused need, or run research, strategy, training and AI as one programme.'
            },
            {
              term: `${UNIVERSAL_INDUSTRIES.length} industries, led by Life Sciences`,
              desc: `Specialist depth across ${lifeSciences} Life Sciences sub-sectors, from pharmaceuticals to hospitals.`
            },
            {
              term: 'Africa first, international reach',
              desc: `${regions.slice(0, -1).join(', ')} and ${regions[regions.length - 1]} Africa, with clients in Europe and the United States.`
            }
          ].map((f, i) => (
            <div
              key={f.term}
              className={`pt-6 pb-2 md:pb-0 md:pr-8 ${i > 0 ? 'md:pl-8 md:border-l md:border-white/[0.14] border-t border-white/[0.1] md:border-t-0 mt-4 md:mt-0' : ''}`}
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
