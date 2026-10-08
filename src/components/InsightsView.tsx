import React, { useId, useMemo, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import type { NavTab } from '../types';
import { INSIGHTS_REPOSITORY } from '../data/mindcraftData';
import { EASE, ContextualCTA, RelatedLinks, SectionHeader, reveal } from './ui/primitives';

type Article = (typeof INSIGHTS_REPOSITORY)[number];

const ArticleItem: React.FC<{ article: Article; index: number }> = ({ article, index }) => {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();
  const panelId = useId();
  return (
    <motion.li
      {...reveal}
      transition={{ ...reveal.transition, delay: Math.min(index, 4) * 0.05 }}
      className="rounded-2xl border border-white/10 bg-[#0a0a0a]"
    >
      <article>
        <h2 className="m-0 font-normal">
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls={panelId}
            className="mc-tap w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4"
          >
            <span className="min-w-0">
              <span className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] font-mono uppercase tracking-wider">
                <span className="text-indigo-400">{article.category}</span>
                <span className="text-white/45">{article.readTime}</span>
                <span className="text-white/45">{article.date}</span>
              </span>
              <span className="block mt-2.5 font-heading text-lg sm:text-xl font-light text-white leading-snug">
                {article.title}
              </span>
              <span className="block mt-2 text-sm text-white/65 leading-relaxed font-normal">{article.summary}</span>
              <span className="mt-3 inline-flex items-center gap-1.5 text-sm text-indigo-400 font-medium">
                {open ? 'Hide article' : 'Read article'}
              </span>
            </span>
            <ChevronDown
              aria-hidden="true"
              className={`w-5 h-5 shrink-0 mt-1 text-indigo-400 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
            />
          </button>
        </h2>
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              id={panelId}
              role="region"
              aria-label={article.title}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: reduce ? 0 : 0.22, ease: EASE }}
              className="overflow-hidden"
            >
              <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-white/5 space-y-4">
                <div className="space-y-3 pt-4 text-[0.9375rem] text-white/80 leading-relaxed max-w-3xl">
                  {article.content.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
                {article.keyTakeaways.length > 0 && (
                  <div className="rounded-xl bg-[#0d0f17] border border-indigo-500/25 p-4 max-w-3xl">
                    <h3 className="mc-eyebrow">Key takeaways</h3>
                    <ul className="mt-2 space-y-1.5 text-sm text-white/75 list-disc pl-5 marker:text-indigo-400">
                      {article.keyTakeaways.map((k, i) => (
                        <li key={i}>{k}</li>
                      ))}
                    </ul>
                  </div>
                )}
                <p className="text-[11px] font-mono text-white/40">
                  {article.author} · {article.date}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </article>
    </motion.li>
  );
};

export const InsightsView: React.FC<{
  onNavigate: (tab: NavTab) => void;
  onOpenIntake: () => void;
}> = ({ onNavigate, onOpenIntake }) => {
  const categories = useMemo(() => Array.from(new Set(INSIGHTS_REPOSITORY.map((a) => a.category))), []);
  const [filter, setFilter] = useState<string>('All');
  const list = filter === 'All' ? INSIGHTS_REPOSITORY : INSIGHTS_REPOSITORY.filter((a) => a.category === filter);

  return (
    <section className="mc-section bg-[#050505]" id="insights-section">
      <div className="mc-container space-y-8 md:space-y-10">
        <SectionHeader
          as="h1"
          eyebrow="Insights"
          title={
            <>
              How MindCraft <span className="font-bold text-indigo-400">thinks</span>
            </>
          }
          lead="Perspectives on Life Sciences, African markets, regulation and applied AI, written for decision-makers."
          action={
            <span className="self-start md:self-auto inline-flex items-center px-3 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-[11px] font-mono uppercase tracking-wider text-amber-200">
              Editorial review pending
            </span>
          }
          className="!mb-0"
        />

        <div role="group" aria-label="Filter insights by category">
          <ul className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {['All', ...categories].map((label) => (
              <li key={label} className="shrink-0">
                <button
                  type="button"
                  onClick={() => setFilter(label)}
                  aria-pressed={filter === label}
                  className={`mc-tap px-4 rounded-full border text-xs font-mono uppercase tracking-wider transition-colors duration-150 active:scale-[0.98] ${
                    filter === label
                      ? 'bg-indigo-950/50 border-indigo-500/40 text-indigo-200'
                      : 'border-white/10 text-white/60 hover:text-white hover:border-white/25'
                  }`}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
          <p className="sr-only" aria-live="polite">
            Showing {list.length} {list.length === 1 ? 'article' : 'articles'}
          </p>
        </div>

        <ul className="space-y-3">
          {list.map((a, i) => (
            <ArticleItem key={a.id} article={a} index={i} />
          ))}
        </ul>

        <ContextualCTA
          title="Have a question these articles raise?"
          body="Talk to MindCraft about how these themes apply to your market, product or organization."
          primaryLabel="Talk to MindCraft"
          onPrimary={onOpenIntake}
          secondaryLabel="Life Sciences practice"
          onSecondary={() => onNavigate('life-sciences')}
        />

        <RelatedLinks
          title="Related"
          items={[
            { label: 'About MindCraft', desc: 'Who we are and how we engage', onClick: () => onNavigate('about') },
            { label: 'Africa Hub', desc: 'Market intelligence across Africa', onClick: () => onNavigate('africa-intelligence'), tone: 'emerald' },
            { label: 'Responsible AI', desc: 'Governance and data principles', onClick: () => onNavigate('responsible-ai') }
          ]}
        />
      </div>
    </section>
  );
};
