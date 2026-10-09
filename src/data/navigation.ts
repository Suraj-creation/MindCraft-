import type React from 'react';
import { Compass, BarChart3, GraduationCap, Cpu } from 'lucide-react';
import type { NavTab } from '../types';

/** Site navigation, shared by the header menus and the in-page section tabs. */

export interface NavSubItem {
  id: NavTab;
  label: string;
  /** Compact label for the in-page section tabs */
  short: string;
  desc: string;
  icon?: React.ComponentType<{ className?: string }>;
  color?: string;
}

export interface NavItem {
  id: NavTab;
  label: string;
  /** Shown on direct links when they land in the "More" menu */
  desc?: string;
  /** Count shown on the collapsed mobile group */
  badge?: string;
  dropdown?: NavSubItem[];
  /** Two-column panel with icons */
  wide?: boolean;
}

/** Every route accepted from a URL hash. Keep aliases here so existing shared links stay addressable. */
const ROUTE_TABS = new Set<NavTab>([
  'overview',
  'home',
  'operating-model',
  'life-sciences',
  'industries',
  'africa-intelligence',
  'africa-explorer',
  'market-entry',
  'consulting',
  'market-research',
  'ai-training',
  'ai-solutions',
  'question-to-outcome',
  'scenarios',
  'capability-graph',
  'matrix-3d',
  'maturity-model',
  'engagement-builder',
  'builder',
  'method',
  'responsible-ai',
  'insights',
  'about',
  'contact',
  'localization',
  'senior-expertise'
]);

/** Resolve a safe `NavTab` from a hash without allowing arbitrary route state. */
export const tabFromHash = (hash: string): NavTab | null => {
  const encoded = hash.replace(/^#/, '');
  if (!encoded) return null;
  try {
    const tab = decodeURIComponent(encoded) as NavTab;
    return ROUTE_TABS.has(tab) ? tab : null;
  } catch {
    return null;
  }
};

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Overview', desc: 'MindCraft at a glance' },
  {
    id: 'consulting',
    label: 'Capabilities',
    badge: '4 pillars',
    wide: true,
    dropdown: [
      { id: 'consulting', label: 'Business Consulting', short: 'Business Consulting', icon: Compass, color: 'text-teal-400', desc: 'Strategy, organisational change, process and regulatory advisory' },
      { id: 'market-research', label: 'Market Research', short: 'Market Research', icon: BarChart3, color: 'text-sky-400', desc: 'Research and intelligence to inform decisions' },
      { id: 'ai-training', label: 'AI Training & Literacy', short: 'AI Training', icon: GraduationCap, color: 'text-amber-400', desc: 'Practical learning for leaders and teams' },
      { id: 'ai-solutions', label: 'AI Enterprise Solutions', short: 'AI Enterprise', icon: Cpu, color: 'text-emerald-400', desc: 'AI strategy, analytics, automation and integration' },
      { id: 'operating-model', label: 'The MindCraft Model', short: 'Operating model', desc: 'How the four capabilities work together' },
      { id: 'maturity-model', label: 'AI Readiness Diagnostic', short: 'AI readiness', desc: 'An eight-dimension starting point for AI work' },
      { id: 'capability-graph', label: 'Capability Map', short: 'Capability map', desc: 'See the relationships between MindCraft capabilities' },
      { id: 'responsible-ai', label: 'Responsible AI', short: 'Responsible AI', desc: 'Privacy, ethics, governance and human oversight' }
    ]
  },
  {
    id: 'industries',
    label: 'Markets',
    badge: '4 regions',
    wide: true,
    dropdown: [
      { id: 'industries', label: 'Industry Explorer', short: 'Industries', desc: 'Sector context and relevant capability links' },
      { id: 'africa-explorer', label: 'African Regions', short: 'African regions', desc: 'Market context across East, West, Southern and North Africa' },
      { id: 'africa-intelligence', label: 'Regulatory & Market Map', short: 'Market map', desc: 'Regulatory and market context across African regions' },
      { id: 'localization', label: 'Market Localisation', short: 'Localisation', desc: 'Adapt strategy for local regulatory and commercial context' },
      { id: 'market-entry', label: 'Market Entry', short: 'Market entry', desc: 'A structured approach to entering a market' },
      { id: 'matrix-3d', label: 'Market Matrix', short: 'Market matrix', desc: 'Explore the industry, geography and capability relationship' },
      { id: 'question-to-outcome', label: 'Start with a Business Question', short: 'Business questions', desc: 'Begin with the decision or challenge in front of you' }
    ]
  },
  { id: 'life-sciences', label: 'Life Sciences', desc: 'Specialist depth across six documented subsectors' },
  {
    id: 'about',
    label: 'About',
    dropdown: [
      { id: 'about', label: 'About MindCraft', short: 'About MindCraft', desc: 'Vision, mission, values and how we engage' },
      { id: 'senior-expertise', label: 'Senior Expertise', short: 'Senior expertise', desc: 'Pharmaceutical and healthcare consulting experience we draw on' },
      { id: 'insights', label: 'Insights', short: 'Insights', desc: 'Perspectives on Life Sciences, Africa and applied AI' },
      { id: 'engagement-builder', label: 'Engagement Builder', short: 'Engagement builder', desc: 'Sketch an indicative brief before a conversation' }
    ]
  }
];

// Routes that are not in the nav but belong to one of its sections
const NAV_ALIASES: Partial<Record<NavTab, NavTab>> = {
  overview: 'home',
  builder: 'engagement-builder',
  method: 'operating-model',
  scenarios: 'question-to-outcome',
  contact: 'about'
};

/** Resolve a route to the id the nav uses for it. */
export const navTabOf = (tab: NavTab): NavTab => NAV_ALIASES[tab] ?? tab;

/** The single top-level section that owns a route (first match wins for shared pages). */
export const sectionItemOf = (tab: NavTab): NavItem | null => {
  const t = navTabOf(tab);
  return NAV_ITEMS.find((i) => i.id === t || i.dropdown?.some((d) => d.id === t)) ?? null;
};

export const sectionOf = (tab: NavTab): NavTab | null => sectionItemOf(tab)?.id ?? null;
