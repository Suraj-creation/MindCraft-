import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import type { NavTab } from '../types';
import { INSIGHTS_REPOSITORY } from '../data/mindcraftData';
import { SectionHeader, reveal } from './ui/primitives';

/** Homepage strip: category, title and read time only. */
export const InsightsStrip: React.FC<{ onNavigate: (tab: NavTab) => void }> = ({ onNavigate }) => {
  const items = INSIGHTS_REPOSITORY.slice(0, 4);
  return (
    <section className="mc-section bg-[#050505]" aria-label="Insights">
      <div className="mc-container">
        <SectionHeader
          title={<>How MindCraft thinks</>}
          lead="Perspectives on Life Sciences, African markets and applied AI."
          action={
            <button
              type="button"
              onClick={() => onNavigate('insights')}
              className="mc-tap self-start md:self-auto px-4 rounded-xl border border-white/10 hover:border-white/25 active:scale-[0.98] text-sm text-white/85 inline-flex items-center gap-2 transition-[border-color,transform] duration-150"
            >
              All insights <ArrowRight className="w-4 h-4 text-indigo-400" aria-hidden="true" />
            </button>
          }
        />
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((a, i) => (
            <motion.li key={a.id} {...reveal} transition={{ ...reveal.transition, delay: i * 0.05 }} className={i >= 3 ? 'hidden lg:block' : undefined}>
              <button
                type="button"
                onClick={() => onNavigate('insights')}
                className="mc-card-interactive mc-tap group w-full h-full text-left p-5 rounded-2xl bg-[#0a0a0a] border border-white/10 flex flex-col"
              >
                <span className="text-xs text-indigo-400 font-medium">{a.category}</span>
                <span className="mt-3 font-heading text-base font-medium text-white leading-snug">{a.title}</span>
                <span className="mt-auto pt-4 flex items-center justify-between text-xs text-white/50">
                  <span className="tabular-nums">{a.readTime}</span>
                  <ArrowRight className="w-4 h-4 text-indigo-400 group-hover:translate-x-0.5 transition-transform duration-200" aria-hidden="true" />
                </span>
              </button>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};
