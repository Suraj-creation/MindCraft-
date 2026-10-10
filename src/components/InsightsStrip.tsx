import React from 'react';
import { ArrowRight } from 'lucide-react';
import type { NavTab } from '../types';
import { INSIGHTS_REPOSITORY } from '../data/mindcraftData';
import { RouteLink, SectionHeader } from './ui/primitives';

/** Homepage strip: a short ruled reading list (topic, title, read time) that leads into the Insights index. */
export const InsightsStrip: React.FC<{ onNavigate: (tab: NavTab) => void }> = ({ onNavigate }) => {
  const items = INSIGHTS_REPOSITORY.slice(0, 3);
  return (
    <section className="mc-section bg-[#050505]" aria-labelledby="insights-strip-title">
      <div className="mc-container">
        <SectionHeader
          title={<span id="insights-strip-title">How MindCraft thinks</span>}
          lead="Perspectives on Life Sciences, African markets and applied AI."
          action={
            <RouteLink
              to="insights"
              onNavigate={onNavigate}
              className="mc-tap self-start md:self-auto inline-flex items-center gap-2 text-sm font-medium text-indigo-300 hover:text-white transition-colors duration-150"
            >
              All insights <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </RouteLink>
          }
        />
        <ul className="border-t border-white/[0.1]">
          {items.map((a) => (
            <li key={a.id} className="border-b border-white/[0.1]">
              <RouteLink
                to="insights"
                onNavigate={onNavigate}
                className="group grid grid-cols-1 md:grid-cols-[12rem_minmax(0,1fr)_auto] gap-x-8 gap-y-1.5 py-5 sm:py-6 md:items-baseline"
              >
                <span className="text-[13px] font-medium text-indigo-300">{a.category}</span>
                <span className="font-heading text-[1.125rem] sm:text-[1.25rem] font-medium leading-snug tracking-[-0.01em] text-white group-hover:text-indigo-100 transition-colors duration-150 max-w-[40em]">
                  {a.title}
                </span>
                <span className="text-[13px] tabular-nums text-white/55">{a.readTime}</span>
              </RouteLink>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
