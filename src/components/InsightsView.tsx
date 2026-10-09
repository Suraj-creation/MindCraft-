import React, { useMemo, useState } from 'react';
import { AnimatePresence, MotionConfig, motion, useReducedMotion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import type { InsightArticle, NavTab } from '../types';
import { INSIGHTS_REPOSITORY } from '../data/mindcraftData';
import { EASE, ContextualCTA, RelatedLinks, reveal } from './ui/primitives';
import { HeroCopy, HeroSection, Illumination } from './ui/Hero';

/* ------------------------------------------------------------------ */
/*
 * Editorial holds. The articles are drafts awaiting editorial review, and some sentences carry figures with no cited
 * source, guarantees MindCraft has not published, research it has not reported, or invented internal bodies.
 * Until the data file is corrected these are withheld or reworded at display time. Each edit is an exact find/replace,
 * so it simply stops applying once the source text changes. Reported to the lead as data issues.
 */
const HOLDS: Record<string, { find: string; replace: string }[]> = {
  'ins-1': [
    { find: ' The average lag between global regulatory approval (FDA/EMA) and commercial availability across African markets routinely exceeded 4 to 7 years.', replace: '' },
    { find: 'are achieving 40% faster time-to-market while slashing redundant local testing expenditure.', replace: 'can shorten time-to-market and cut redundant local testing.' },
    { find: 'cuts registration timelines by up to 50%.', replace: 'can shorten registration timelines.' }
  ],
  'ins-2': [
    { find: 'Why 85% of corporate AI pilots fail to reach production', replace: 'Why many corporate AI pilots never reach production' },
    {
      find: 'a pervasive frustration: hundreds of proof-of-concepts, thousands of individual ChatGPT subscriptions, but virtually zero measurable impact on core balance sheets.',
      replace: 'a common frustration: plenty of proofs of concept and individual AI subscriptions, but little measurable impact on the core business.'
    },
    {
      find: 'MindCraft’s "Strategy → Data → Build → Training → Governance" lifecycle provides the necessary discipline to transform isolated experiments into governed production infrastructure.',
      replace: 'A disciplined sequence, from strategy to data readiness, build, training and governance, is what turns isolated experiments into governed production systems.'
    },
    { find: 'MindCraft Enterprise AI Directorate', replace: 'MindCraft' }
  ],
  'ins-3': [
    { find: 'An empirical analysis of patient affordability, private insurance penetration, and innovative tiered pricing models', replace: 'A look at patient affordability, private insurance penetration, and tiered pricing models' },
    {
      find: 'out-of-pocket health expenditure still accounts for 40% to 70% of total healthcare spending, despite commendable public health insurance expansions',
      replace: 'out-of-pocket payments still account for a large share of total healthcare spending, despite public health insurance expansions'
    },
    {
      find: 'Through primary physician surveys and payer price-elasticity modeling, MindCraft demonstrates how tiered dual-branding, hospital patient-assistance co-pays, and localized packaging sizes preserve gross margins while expanding commercial volume.',
      replace: 'Primary physician surveys and payer price-elasticity modeling can test whether tiered dual-branding, hospital patient-assistance co-pays, and localized packaging sizes would preserve gross margins while expanding commercial volume.'
    },
    { find: '70% of specialty healthcare transactions occur in private tier-1/tier-2 clinics.', replace: '' },
    { find: 'reduce clinic inventory wastage by 18%.', replace: 'can reduce clinic inventory wastage.' },
    { find: 'high-volume tender tenders', replace: 'high-volume tenders' }
  ],
  'ins-4': [
    {
      find: 'MindCraft embeds zero-data-retention guarantees, cryptographic anonymization, and explainable decision trees into every AI training program and enterprise deployment.',
      replace: 'MindCraft embeds data privacy, ethics and governance into every AI training program and enterprise solution.'
    },
    { find: 'Zero client data is ever used to train underlying public foundational models.', replace: 'Client data should never be used to train public foundation models.' },
    { find: 'All AI inferences operate within private tenant enclosures with strict encryption.', replace: '' },
    { find: 'MindCraft AI Governance Council', replace: 'MindCraft' }
  ]
};

/** Safety net: any remaining sentence with a percentage is withheld until it carries a source. */
const PERCENT = /\d\s?%/;
const withholdPercents = (text: string) =>
  text
    .split(/(?<=[.!?])\s+/)
    .filter((s) => !PERCENT.test(s))
    .join(' ');

const forDisplay = (a: InsightArticle): InsightArticle => {
  const edits = HOLDS[a.id] ?? [];
  const fix = (s: string) => withholdPercents(edits.reduce((t, e) => t.split(e.find).join(e.replace), s)).trim();
  return {
    ...a,
    summary: fix(a.summary),
    author: fix(a.author),
    content: a.content.map(fix).filter(Boolean),
    keyTakeaways: a.keyTakeaways.map(fix).filter(Boolean)
  };
};

/* ------------------------------------------------------------------ */
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const monthIndex = (date: string) => {
  const [m, y] = date.split(' ');
  const i = MONTHS.indexOf(m);
  return i < 0 || !y ? null : Number(y) * 12 + i;
};
const fmtMonth = (n: number, withYear: boolean) => `${MONTHS[n % 12].slice(0, 3)}${withYear ? ` ${Math.floor(n / 12)}` : ''}`;
/** "Jan–Feb 2026" from the article dates, or null if they cannot be read. */
const dateSpan = (dates: string[]) => {
  const ns = dates.map(monthIndex).filter((n): n is number => n !== null);
  if (!ns.length) return null;
  const lo = Math.min(...ns);
  const hi = Math.max(...ns);
  if (lo === hi) return fmtMonth(lo, true);
  const sameYear = Math.floor(lo / 12) === Math.floor(hi / 12);
  return `${fmtMonth(lo, !sameYear)}–${fmtMonth(hi, true)}`;
};

/* ------------------------------------------------------------------ */
/** One entry in the index: number and coordinates on the left, a large title that opens the article on the right. */
const ArticleEntry: React.FC<{ article: InsightArticle; number: number; index: number }> = ({ article, number, index }) => {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();
  const btnId = `insight-btn-${article.id}`;
  const titleId = `insight-title-${article.id}`;
  const panelId = `insight-${article.id}`;
  const no = String(number).padStart(2, '0');
  return (
    <motion.li
      {...reveal}
      transition={{ ...reveal.transition, delay: Math.min(index, 3) * 0.05 }}
      className="border-b border-white/[0.1]"
    >
      <article aria-labelledby={titleId} className="grid grid-cols-1 lg:grid-cols-12 lg:gap-x-16 py-8 sm:py-10">
        {/* Coordinates: one line on phones, a column at lg */}
        <div className="lg:col-span-3 flex lg:flex-col flex-wrap items-baseline lg:items-start gap-x-4 gap-y-1.5">
          <span aria-hidden="true" className="font-heading text-[1.25rem] lg:text-[2.75rem] font-medium leading-none tracking-[-0.03em] tabular-nums text-white/25 lg:mb-4">
            {no}
          </span>
          <span className="text-[13px] font-medium text-indigo-300">{article.category}</span>
          <span className="text-[13px] text-white/55">
            {article.date}
            <span aria-hidden="true" className="mx-2 text-white/25">·</span>
            {article.readTime}
          </span>
        </div>

        <div className="lg:col-span-9 min-w-0 mt-4 lg:mt-0">
          <h3 className="m-0 font-normal">
            <button
              type="button"
              id={btnId}
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-controls={panelId}
              className="group mc-tap w-full text-left"
            >
              <span id={titleId} className="block font-heading text-[1.5rem] sm:text-[1.875rem] lg:text-[2.125rem] font-medium leading-[1.12] tracking-[-0.02em] text-white transition-colors duration-150 group-hover:text-indigo-100">
                {article.title}
              </span>
              <span className="mt-3 sm:mt-4 block max-w-[40em] text-[15px] sm:text-base leading-relaxed text-white/65">{article.summary}</span>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-indigo-300 group-hover:text-indigo-200">
                {open ? 'Close article' : 'Read article'}
                <ChevronDown aria-hidden="true" className={`h-4 w-4 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
              </span>
            </button>
          </h3>

          <AnimatePresence initial={false}>
            {open && (
              <motion.div
                id={panelId}
                role="region"
                aria-labelledby={titleId}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: reduce ? 0 : 0.22, ease: EASE }}
                className="overflow-hidden"
              >
                <div className="pt-7 sm:pt-8">
                  <div className="max-w-[38em] space-y-4 text-base leading-[1.7] text-white/80">
                    {article.content.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                  {article.keyTakeaways.length > 0 && (
                    <div className="mt-8 max-w-[38em] border-t border-white/[0.1] pt-5">
                      <h4 className="text-[13px] font-medium text-white/55">Key takeaways</h4>
                      <ul className="mt-3 space-y-2.5">
                        {article.keyTakeaways.map((k, i) => (
                          <li key={i} className="flex gap-3 text-[15px] leading-snug text-white/80">
                            <span aria-hidden="true" className="mt-[0.5rem] h-1 w-3 shrink-0 rounded-full bg-indigo-400/80" />
                            {k}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <p className="mt-6 text-[13px] text-white/50">
                    {article.author} · {article.date} · draft awaiting editorial review
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </article>
    </motion.li>
  );
};

/* ------------------------------------------------------------------ */
export const InsightsView: React.FC<{
  onNavigate: (tab: NavTab) => void;
  onOpenIntake: () => void;
}> = ({ onNavigate, onOpenIntake }) => {
  const articles = useMemo(() => INSIGHTS_REPOSITORY.map(forDisplay), []);
  const categories = useMemo(() => Array.from(new Set(articles.map((a) => a.category))), [articles]);
  const span = useMemo(() => dateSpan(articles.map((a) => a.date)), [articles]);
  const [filter, setFilter] = useState<string>('All');
  const list = filter === 'All' ? articles : articles.filter((a) => a.category === filter);
  const count = (n: number, one: string, many: string) => `${n} ${n === 1 ? one : many}`;

  return (
    <MotionConfig reducedMotion="user">
      {/* ---------------------------------------------------------- */}
      {/* Masthead: a journal's title block, ruled, with the issue's coordinates in mono */}
      <HeroSection id="insights-section" labelledBy="insights-title">
        <div className="mc-container relative z-10 pt-10 sm:pt-14 lg:pt-20 pb-12 sm:pb-16 lg:pb-20">
          <Illumination tone="indigo" strength={0.7} className="-left-44 -top-24 h-[32rem] w-[32rem]" />

          <div className="relative flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 border-b border-white/[0.14] pb-4">
            <p className="mc-meta">
              <span aria-hidden="true">Insights · </span>
              {count(articles.length, 'article', 'articles')} · {count(categories.length, 'category', 'categories')}
            </p>
            {span && <p className="mc-meta">{span}</p>}
          </div>

          <HeroCopy
            id="insights-title"
            className="relative mt-8 sm:mt-10 [&_h1]:max-w-[14em] lg:[&_h1]:text-[5.25rem]"
            title={
              <>
                <span className="sr-only">Insights: </span>
                Notes on Life Sciences, African markets and <em>applied AI</em>.
              </>
            }
          />

          <div className="relative mt-8 sm:mt-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 border-t border-white/[0.14] pt-6 sm:pt-8">
            <motion.p
              className="mc-lead lg:col-span-7"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: EASE }}
            >
              Perspectives on regulation, market access and AI adoption, written for the people who have to make the decision.
            </motion.p>
            <motion.div
              className="lg:col-span-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.25, ease: EASE }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1.5 text-xs font-medium text-amber-200">
                <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-amber-300" />
                Editorial review pending
              </span>
              <p className="mt-3 text-[13px] leading-relaxed text-white/55 max-w-[28em]">
                These pieces are drafts. Figures without a cited source are withheld until review.
              </p>
            </motion.div>
          </div>
        </div>
      </HeroSection>

      {/* ---------------------------------------------------------- */}
      {/* The index */}
      <section className="mc-section" aria-labelledby="insights-index-title">
        <div className="mc-container">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5">
            <h2 id="insights-index-title" className="font-heading text-[1.375rem] sm:text-[1.625rem] font-medium tracking-[-0.015em] text-white">
              {filter === 'All' ? 'All articles' : filter}
              <span className="ml-3 align-middle font-mono text-[12px] font-medium tabular-nums text-white/50">{String(list.length).padStart(2, '0')}</span>
            </h2>
            <div role="group" aria-label="Filter insights by category" className="-mx-4 px-4 sm:mx-0 sm:px-0">
              <ul className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {['All', ...categories].map((label) => (
                  <li key={label} className="shrink-0">
                    <button
                      type="button"
                      onClick={() => setFilter(label)}
                      aria-pressed={filter === label}
                      className={`mc-tap px-4 rounded-full border text-[13px] font-medium transition-colors duration-150 active:scale-[0.98] ${
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
                Showing {count(list.length, 'article', 'articles')}
              </p>
            </div>
          </div>

          <ol className="mt-8 sm:mt-10 border-t border-white/[0.14]">
            {list.map((a, i) => (
              <ArticleEntry key={a.id} article={a} number={articles.indexOf(a) + 1} index={i} />
            ))}
          </ol>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      <section className="mc-section mc-surface" aria-label="Next steps">
        <div className="mc-container space-y-10 md:space-y-14">
          <motion.div {...reveal}>
            <ContextualCTA
              title="Bring us the question an article raised"
              body="Tell us which one you are facing in your own market, product or organisation, and we will talk through how it applies."
              primaryLabel="Discuss your question"
              onPrimary={onOpenIntake}
              secondaryLabel="Life Sciences practice"
              onSecondary={() => onNavigate('life-sciences')}
            />
          </motion.div>

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
    </MotionConfig>
  );
};
