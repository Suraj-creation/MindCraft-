import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { NavTab, RoleLens } from '../types';
import { ArrowRight } from 'lucide-react';
import { UNIVERSAL_INDUSTRIES } from '../data/industryAndAfricaData';
import { BTN_PRIMARY, BTN_SECONDARY, EASE } from './ui/primitives';
import { ArtImage } from './ui/ArtImage';

interface HeroOperatingSystemProps {
  setActiveTab: (tab: NavTab) => void;
  roleLens: RoleLens;
  onOpenIntake: () => void;
}

/* The image's busy left edge (lab and leaf panels) dissolves into the canvas so the copy owns that side */
const FADE_TO_COPY =
  'linear-gradient(90deg, #050505 0%, rgba(5,5,5,0.92) 12%, rgba(5,5,5,0.55) 30%, rgba(5,5,5,0.12) 52%, rgba(5,5,5,0) 70%)';
const FADE_TO_BAND = 'linear-gradient(0deg, #050505 0%, rgba(5,5,5,0.7) 18%, rgba(5,5,5,0) 46%)';
const FADE_FROM_HEADER = 'linear-gradient(180deg, rgba(5,5,5,0.75) 0%, rgba(5,5,5,0) 22%)';
const FADE_MOBILE = 'linear-gradient(0deg, #050505 0%, rgba(5,5,5,0.55) 30%, rgba(5,5,5,0) 62%), linear-gradient(180deg, rgba(5,5,5,0.6) 0%, rgba(5,5,5,0) 25%)';

export const HeroOperatingSystem: React.FC<HeroOperatingSystemProps> = ({ onOpenIntake }) => {
  const reduce = useReducedMotion();
  const lifeSciences = UNIVERSAL_INDUSTRIES.filter((i) => i.category === 'core-lifesciences').length;

  const goCapabilities = () => {
    document.getElementById('capabilities')?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
  };

  return (
    <section aria-labelledby="overview-title" className="relative isolate overflow-hidden bg-[#050505] border-b border-white/[0.07]">
      {/* Cinematic anchor: a band on phones, the right ~60% of the hero from lg up */}
      <div
        aria-hidden="true"
        className="relative h-[clamp(15rem,64vw,28rem)] -mb-20 sm:-mb-28 lg:mb-0 lg:absolute lg:inset-y-0 lg:right-0 lg:h-auto lg:w-[62%] xl:w-[60%] overflow-hidden"
      >
        <ArtImage
          name="global"
          alt=""
          priority
          sizes="(min-width: 1024px) 62vw, 100vw"
          position="object-[54%_42%] lg:object-[40%_48%]"
        />
        <div className="absolute inset-0 lg:hidden" style={{ background: FADE_MOBILE }} />
        <div className="absolute inset-0 hidden lg:block" style={{ background: FADE_TO_COPY }} />
        <div className="absolute inset-0 hidden lg:block" style={{ background: FADE_TO_BAND }} />
        <div className="absolute inset-0 hidden lg:block" style={{ background: FADE_FROM_HEADER }} />
      </div>

      <div className="mc-container relative z-10 pb-12 sm:pb-16 lg:pb-14">
        <motion.div
          className="lg:min-h-[min(38rem,calc(100dvh-14rem))] lg:pt-20 xl:pt-24 flex flex-col justify-center max-w-[40rem] lg:max-w-[min(40rem,46%)]"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
        >
          <h1
            id="overview-title"
            className="font-heading font-medium text-white tracking-[-0.03em] leading-[1.02] text-[2.5rem] sm:text-[3.25rem] lg:text-[3.75rem] xl:text-[4.25rem] max-w-[13ch] [text-shadow:0_2px_24px_rgba(5,5,5,0.6)]"
          >
            Turn complexity into meaningful business progress.
          </h1>

          <p className="mc-lead mt-6 sm:mt-7 !text-white/75 !max-w-[31em]">
            MindCraft brings consulting, market intelligence, AI training and enterprise solutions together, helping organisations make informed decisions and turn them into practical progress.
          </p>

          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row sm:items-center gap-3">
            <button type="button" onClick={onOpenIntake} id="hero-primary-cta" className={`${BTN_PRIMARY} !px-6 shadow-[0_10px_30px_-12px_rgba(99,102,241,0.7)]`}>
              Discuss your business challenge
              <ArrowRight aria-hidden="true" className="w-4 h-4" />
            </button>
            <button type="button" onClick={goCapabilities} id="hero-secondary-cta" className={`${BTN_SECONDARY} bg-[#050505]/60 backdrop-blur-sm`}>
              Explore our capabilities
            </button>
          </div>
        </motion.div>

        {/* Three answers a first-time visitor is looking for */}
        <dl className="mt-14 sm:mt-16 lg:mt-20 grid grid-cols-1 md:grid-cols-3 border-t border-white/[0.1]">
          {[
            {
              term: 'One team, four capabilities',
              desc: 'Bring us a single, focused requirement or a programme that draws on several disciplines.'
            },
            {
              term: `${UNIVERSAL_INDUSTRIES.length} industries, specialist depth in Life Sciences`,
              desc: `From manufacturing, finance and energy to retail and education, with our deepest experience across ${lifeSciences} Life Sciences sectors.`
            },
            {
              term: 'African insight, international reach',
              desc: 'A deliberate focus on African markets, with work for organisations in Europe and the United States.'
            }
          ].map((f, i) => (
            <div
              key={f.term}
              className={`pt-6 pb-2 md:pb-0 md:pr-8 ${i > 0 ? 'md:pl-8 md:border-l md:border-white/[0.1] border-t border-white/[0.08] md:border-t-0 mt-4 md:mt-0' : ''}`}
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
