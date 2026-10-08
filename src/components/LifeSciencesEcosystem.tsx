import React, { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { LIFE_SCIENCES_SECTORS, DIVERSIFIED_INDUSTRIES } from '../data/mindcraftData';
import { NavTab, RoleLens } from '../types';
import { ContextualCTA, DeepDive, EASE, RelatedLinks, TONES, reveal } from './ui/primitives';
import {
  Dna,
  Pill,
  Stethoscope,
  Activity,
  Building2,
  Scissors,
  FlaskConical,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

interface LifeSciencesEcosystemProps {
  onOpenIntake: () => void;
  setActiveTab: (tab: NavTab) => void;
  roleLens?: RoleLens;
}

type Icon = React.ComponentType<{ className?: string }>;

const SECTOR_ICONS: Record<string, Icon> = {
  pharma: Pill,
  'med-devices': Stethoscope,
  diagnostics: FlaskConical,
  equipment: Activity,
  consumables: Scissors,
  hospitals: Building2
};

const PHARMA_MODULES = [
  {
    id: 'market-access',
    title: 'Market Access & Pricing',
    desc: 'Pan-African reimbursement landscape, out-of-pocket price elasticity, and tender listing strategies.',
    points: [
      'National health scheme formulary inclusion (e.g. Kenya SHA, Ghana NHIS, SA NHI)',
      'Tiered dual-brand pricing modeling to navigate out-of-pocket constraints',
      'Private hospital group procurement and patient-assistance co-pay structuring'
    ]
  },
  {
    id: 'competitive-intel',
    title: 'Competitive Intelligence & Pipelines',
    desc: 'Granular tracking of clinical trial pipelines, generic market entry, and import manifests.',
    points: [
      'Therapeutic area market sizing and 5-year patient epidemiology forecasting',
      'Patent cliff defense and authorized generic positioning strategies',
      'Customs manifest import tracking across major regional ports'
    ]
  },
  {
    id: 'regulatory-intel',
    title: 'Regulatory Intelligence & Filings',
    desc: 'Navigating national medicines regulatory authorities across 54 African countries.',
    points: [
      'Real-time tracking of PPB, NAFDAC, SAHPRA, EDA, EFDA, and TMDA guidelines',
      'EAC, ECOWAS, and ZAZIBONA regional joint-assessment acceleration',
      'African Medicines Agency (AMA) policy evolution and harmonization advisory'
    ]
  },
  {
    id: 'pharmacovigilance',
    title: 'Pharmacovigilance Support',
    desc: 'Adverse event screening, signal detection, and regulatory safety compliance.',
    points: [
      'AI-assisted biomedical literature screening and spontaneous report triage',
      'Standard E2B(R3) safety reporting compliance workflows',
      'Post-authorization safety study (PASS) design and monitoring'
    ]
  },
  {
    id: 'kol-mapping',
    title: 'KOL & Commercial Effectiveness',
    desc: 'Scientific leadership mapping, advisory boards, and territory sales intelligence.',
    points: [
      'Key Opinion Leader (KOL) network mapping across therapeutic centers',
      'Sales representative territory optimization and detailing effectiveness',
      'Mobile AI pre-call briefing assistants for field medical science liaisons'
    ]
  }
];

/* ------------------------------------------------------------------ */
/** Accessible tablist with roving tabindex + arrow-key support. */
interface TabItem {
  id: string;
  label: string;
  icon?: Icon;
}

const TabList: React.FC<{
  items: TabItem[];
  value: string;
  onChange: (id: string) => void;
  label: string;
  idPrefix: string;
  className: string;
  tabClass: (active: boolean) => string;
  iconClass?: (active: boolean) => string;
}> = ({ items, value, onChange, label, idPrefix, className, tabClass, iconClass }) => {
  const onKeyDown = (e: React.KeyboardEvent) => {
    const i = items.findIndex((t) => t.id === value);
    let next = -1;
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') next = (i + 1) % items.length;
    else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') next = (i - 1 + items.length) % items.length;
    else if (e.key === 'Home') next = 0;
    else if (e.key === 'End') next = items.length - 1;
    if (next < 0) return;
    e.preventDefault();
    onChange(items[next].id);
    document.getElementById(`${idPrefix}-tab-${items[next].id}`)?.focus();
  };
  return (
    <div role="tablist" aria-label={label} onKeyDown={onKeyDown} className={className}>
      {items.map((t) => {
        const active = t.id === value;
        const I = t.icon;
        return (
          <button
            key={t.id}
            type="button"
            role="tab"
            id={`${idPrefix}-tab-${t.id}`}
            aria-selected={active}
            aria-controls={`${idPrefix}-panel`}
            tabIndex={active ? 0 : -1}
            onClick={() => onChange(t.id)}
            className={`mc-tap active:scale-[0.98] transition-[background-color,border-color,color,transform] duration-200 ${tabClass(active)}`}
          >
            {I && <I className={iconClass ? iconClass(active) : 'w-4 h-4'} aria-hidden="true" />}
            <span>{t.label}</span>
          </button>
        );
      })}
    </div>
  );
};

const DotList: React.FC<{ items: string[]; dot: string }> = ({ items, dot }) => (
  <ul className="space-y-2.5">
    {items.map((it) => (
      <li key={it} className="text-[13px] sm:text-sm text-[#E0E0E0] leading-relaxed flex items-start gap-2.5">
        <span className={`w-1.5 h-1.5 rounded-full mt-[0.45rem] shrink-0 ${dot}`} aria-hidden="true" />
        <span className="min-w-0">{it}</span>
      </li>
    ))}
  </ul>
);

const Chip: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <li className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs leading-snug text-[#E0E0E0]">
    {children}
  </li>
);

type DetailId = 'challenges' | 'research' | 'ai' | 'deliverables' | 'workflow' | 'modules';

export const LifeSciencesEcosystem: React.FC<LifeSciencesEcosystemProps> = ({ onOpenIntake, setActiveTab }) => {
  const [sectorId, setSectorId] = useState<string>(LIFE_SCIENCES_SECTORS[0].id);
  const [detailId, setDetailId] = useState<DetailId>('challenges');
  const [moduleId, setModuleId] = useState<string>(PHARMA_MODULES[0].id);
  const reduce = useReducedMotion();
  const dur = reduce ? 0 : 0.18;

  const sector = LIFE_SCIENCES_SECTORS.find((s) => s.id === sectorId) ?? LIFE_SCIENCES_SECTORS[0];
  const SectorIcon = SECTOR_ICONS[sector.id] ?? Pill;
  const isPharma = sector.id === 'pharma';
  const activeModule = PHARMA_MODULES.find((m) => m.id === moduleId) ?? PHARMA_MODULES[0];

  const detailTabs: TabItem[] = [
    { id: 'challenges', label: 'Challenges' },
    { id: 'research', label: 'Research methods' },
    { id: 'ai', label: 'AI opportunities' },
    { id: 'deliverables', label: 'Deliverables' },
    { id: 'workflow', label: 'Example workflow' },
    ...(isPharma ? [{ id: 'modules', label: 'Pharma modules' }] : [])
  ];
  const effectiveDetail: DetailId = detailTabs.some((t) => t.id === detailId) ? detailId : 'challenges';

  const wf = sector.workflowExample;
  const workflow = [
    { n: '01 Question', text: `"${wf.question}"`, cls: 'text-white italic' },
    { n: '02 Method', text: wf.method, cls: 'text-[#E0E0E0]' },
    { n: '03 Intelligence', text: wf.intelligence, cls: 'text-[#E0E0E0]' },
    { n: '04 Decision', text: wf.decision, cls: 'text-[#E0E0E0]' },
    { n: '05 AI solution', text: wf.aiSolution, cls: 'text-[#E0E0E0]' },
    { n: '06 Outcome', text: wf.outcome, cls: 'text-emerald-400' }
  ];

  const sectorItems: TabItem[] = LIFE_SCIENCES_SECTORS.map((s) => ({
    id: s.id,
    label: s.name,
    icon: SECTOR_ICONS[s.id] ?? Pill
  }));

  return (
    <section id="lifesciences-section" className="mc-section bg-[#050505] text-white overflow-x-clip" aria-labelledby="lifesciences-title">
      <div className="mc-container space-y-8 md:space-y-10">
        {/* A. Intent + CTA */}
        <motion.header {...reveal} className="max-w-3xl">
          <p className="mc-eyebrow">
            <Dna className="w-3.5 h-3.5" aria-hidden="true" />
            Founding expertise · {LIFE_SCIENCES_SECTORS.length} sub-sectors
          </p>
          <h1 id="lifesciences-title" className="mc-h1 mt-3 font-light">
            Life Sciences, <span className="font-bold text-indigo-400">our core expertise</span>
          </h1>
          <p className="mc-lead mt-4">
            MindCraft was founded in Life Sciences. We bring regulatory fluency, clinical and commercial context and sector benchmarks to
            pharmaceutical, device, diagnostic and hospital work across Africa, Europe and the United States.
          </p>
          <div className="mt-5 flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={onOpenIntake}
              className="mc-tap px-5 rounded-xl bg-indigo-600 hover:bg-indigo-500 active:scale-[0.98] text-white text-sm font-semibold flex items-center justify-center gap-2 transition-[background-color,transform] duration-150"
            >
              <span>Discuss a Life Sciences engagement</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('senior-expertise')}
              className="mc-tap px-5 rounded-xl border border-white/10 hover:border-white/20 bg-white/5 active:scale-[0.98] text-white/90 text-sm transition-[background-color,border-color,transform] duration-150"
            >
              Senior Life Sciences expertise
            </button>
          </div>
        </motion.header>

        {/* A. Sector matrix */}
        <div>
          <TabList
            items={sectorItems}
            value={sector.id}
            onChange={setSectorId}
            label="Life Sciences sub-sectors"
            idPrefix="sector"
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2"
            tabClass={(a) =>
              `px-3 py-2.5 rounded-xl border text-left flex items-center gap-2.5 text-[13px] font-semibold leading-snug ${
                a ? 'bg-[#0D0F17] border-indigo-500/35 text-white' : 'bg-[#0A0A0A] border-white/10 text-white/60 hover:border-white/20 hover:text-white'
              }`
            }
            iconClass={(a) => `w-4 h-4 shrink-0 ${a ? 'text-indigo-400' : 'text-white/40'}`}
          />

          <div
            id="sector-panel"
            role="tabpanel"
            aria-labelledby={`sector-tab-${sector.id}`}
            className="mt-3 rounded-2xl bg-[#0A0A0A] border border-white/10 p-4 sm:p-6"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={sector.id}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: dur, ease: EASE }}
              >
                <div className="flex items-start gap-3">
                  <span className="w-11 h-11 rounded-xl bg-[#0D0F17] border border-indigo-500/35 flex items-center justify-center text-indigo-400 shrink-0">
                    <SectorIcon className="w-5 h-5" aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <h2 className="font-heading text-xl sm:text-2xl font-light text-white">{sector.name}</h2>
                    <p className="mt-1 text-sm text-indigo-300 leading-snug">{sector.tagline}</p>
                  </div>
                </div>
                <p className="mt-3 text-sm text-white/70 leading-relaxed max-w-3xl">{sector.description}</p>

                <div className="mt-4">
                  <div className="mc-eyebrow !text-white/50">Focus areas</div>
                  <ul className="mt-2.5 flex flex-wrap gap-2" aria-label={`${sector.name} focus areas`}>
                    {sector.focusAreas.map((f) => (
                      <Chip key={f}>{f}</Chip>
                    ))}
                  </ul>
                </div>

                <button
                  type="button"
                  onClick={onOpenIntake}
                  className="mc-tap mt-5 text-sm font-medium text-indigo-400 hover:text-indigo-300 inline-flex items-center gap-2 transition-colors"
                >
                  Consult on {sector.name}
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* C. Sector deep dive */}
        <DeepDive
          title={`${sector.name}: challenges, methods, AI and deliverables`}
          hint="Open for research methods, AI opportunities, example workflow and deliverables"
        >
          <TabList
            items={detailTabs}
            value={effectiveDetail}
            onChange={(id) => setDetailId(id as DetailId)}
            label={`${sector.name} detail`}
            idPrefix="detail"
            className="flex flex-wrap gap-2 pt-3"
            tabClass={(a) =>
              `px-3 rounded-full border text-xs font-mono ${
                a ? 'bg-[#0D0F17] border-indigo-500/35 text-indigo-200' : 'border-white/10 text-white/60 hover:text-white hover:border-white/20'
              }`
            }
          />
          <div id="detail-panel" role="tabpanel" aria-labelledby={`detail-tab-${effectiveDetail}`} className="mt-4">
            {effectiveDetail === 'challenges' && <DotList items={sector.strategicChallenges} dot={`bg-amber-500`} />}
            {effectiveDetail === 'research' && <DotList items={sector.researchMethods} dot="bg-indigo-500" />}
            {effectiveDetail === 'ai' && <DotList items={sector.aiOpportunities} dot="bg-emerald-500" />}
            {effectiveDetail === 'deliverables' && <DotList items={sector.exampleDeliverables} dot="bg-teal-500" />}
            {effectiveDetail === 'workflow' && (
              <div>
                <p className="text-xs text-white/50 mb-3">Illustrative end-to-end workflow, from question to outcome.</p>
                <ol className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {workflow.map((s) => (
                    <li key={s.n} className="rounded-xl border border-white/10 bg-[#050505] p-3">
                      <div className="font-mono text-[11px] uppercase tracking-wider text-white/50">{s.n}</div>
                      <p className={`mt-1 text-[13px] leading-relaxed ${s.cls}`}>{s.text}</p>
                    </li>
                  ))}
                </ol>
              </div>
            )}
            {effectiveDetail === 'modules' && (
              <div>
                <TabList
                  items={PHARMA_MODULES.map((m) => ({ id: m.id, label: m.title }))}
                  value={activeModule.id}
                  onChange={setModuleId}
                  label="Pharmaceutical capability modules"
                  idPrefix="module"
                  className="flex flex-wrap gap-2"
                  tabClass={(a) =>
                    `px-3 py-2 rounded-xl border text-left text-xs leading-snug ${
                      a ? 'bg-[#0D0F17] border-indigo-500/35 text-indigo-200' : 'border-white/10 text-white/60 hover:text-white hover:border-white/20'
                    }`
                  }
                />
                <div id="module-panel" role="tabpanel" aria-labelledby={`module-tab-${activeModule.id}`} className="mt-4 rounded-xl border border-white/10 bg-[#050505] p-4">
                  <h3 className="text-sm font-semibold text-white">{activeModule.title}</h3>
                  <p className="mt-1.5 text-[13px] text-white/60 leading-relaxed">{activeModule.desc}</p>
                  <ul className="mt-3 space-y-2.5">
                    {activeModule.points.map((pt) => (
                      <li key={pt} className="text-[13px] text-[#E0E0E0] leading-relaxed flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" aria-hidden="true" />
                        <span className="min-w-0">{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </DeepDive>

        {/* B. Additional verticals */}
        <motion.div {...reveal} className="space-y-4">
          <div className="max-w-2xl">
            <h2 className="font-heading text-xl sm:text-2xl font-light text-white">
              Beyond Life Sciences: <span className="font-bold text-indigo-400">same rigor, more sectors</span>
            </h2>
            <p className="mt-2 text-sm text-white/65 leading-relaxed">
              The same evidence-based methodology applied to diversified industries across Africa.
            </p>
          </div>
          <ul className="flex flex-wrap gap-2" aria-label="Additional industry verticals">
            {DIVERSIFIED_INDUSTRIES.map((v) => (
              <li key={v.id} className={`rounded-full border px-3.5 py-2 text-xs font-medium ${TONES.indigo.chip}`}>
                {v.name}
              </li>
            ))}
          </ul>
          <DeepDive title={`Vertical detail (${DIVERSIFIED_INDUSTRIES.length})`} hint="Focus areas and method for each additional vertical">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-3">
              {DIVERSIFIED_INDUSTRIES.map((v) => (
                <article key={v.id} className="min-w-0 rounded-xl border border-white/10 bg-[#050505] p-4">
                  <h3 className="text-sm font-semibold text-white">{v.name}</h3>
                  <p className="mt-1 text-[13px] text-white leading-snug">{v.tagline}</p>
                  <p className="mt-2 text-[13px] text-white/60 leading-relaxed">{v.description}</p>
                  <ul className="mt-3 space-y-1.5">
                    {v.focusAreas.map((fa) => (
                      <li key={fa} className="text-[13px] text-[#E0E0E0] flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full bg-indigo-400 mt-2 shrink-0" aria-hidden="true" />
                        <span className="min-w-0">{fa}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-3 pt-3 border-t border-white/10 text-xs text-white/50 italic">Method: {v.methodology}</p>
                </article>
              ))}
            </div>
          </DeepDive>
        </motion.div>

        {/* Next steps */}
        <RelatedLinks
          title="Continue"
          items={[
            { label: 'Senior Life Sciences expertise', desc: 'The senior experience behind this work', onClick: () => setActiveTab('senior-expertise') },
            { label: 'Industries we serve', desc: 'All verticals and focus areas', onClick: () => setActiveTab('industries') },
            { label: 'Localization', desc: 'From global strategy to local result', onClick: () => setActiveTab('localization'), tone: 'emerald' },
            { label: 'Market entry', desc: 'Nine-step entry across African markets', onClick: () => setActiveTab('market-entry'), tone: 'emerald' }
          ]}
        />

        <ContextualCTA
          title="Bring us the Life Sciences decision"
          body="Pharma, devices, diagnostics, equipment, consumables or hospitals: we scope the research, strategy or AI work around it."
          primaryLabel="Talk to MindCraft"
          onPrimary={onOpenIntake}
        />
      </div>
    </section>
  );
};
