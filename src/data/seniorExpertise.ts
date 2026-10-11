import type { NavTab } from '../types';

/**
 * Senior Expertise: the senior pharmaceutical and healthcare experts MindCraft draws on.
 * Deliberately generic: no individual is named. Area wording is adapted from the supplied consultant profile
 * (resources/2.0 Business Profile), rewritten for the team. `mindcraftRelevance` / `MINDCRAFT_STRENGTHS`
 * are MindCraft's own mapping.
 */

export type StrengthKey = 'life-sciences' | 'african-market' | 'regulatory' | 'commercial';

export interface SeniorArea {
  id: string;
  title: string;
  /** Paragraph breaks preserved as array items. */
  description: string[];
  /** MindCraft mapping. */
  mindcraftRelevance: {
    pillar: NavTab; // consulting | market-research | ai-solutions | ai-training | life-sciences
    pillarLabel: string;
    strengthens: StrengthKey[];
  };
}

export const SENIOR_PROFILE = {
  years: '30+',
  positioning: 'Pharmaceutical & healthcare consulting',
  focus: 'Market access, regulatory strategy and commercial excellence',
  summary:
    'MindCraft draws on senior pharmaceutical and healthcare experts with more than 30 years of experience in African markets, bringing deep local and cultural understanding and proven use cases from the field.',
  background:
    'Our senior experts have helped manufacturers and healthcare companies enter and expand across Africa for more than three decades. They know how local markets, regulators, distributors and buyers actually work, and bring strategic consultation and interim management focused on go-to-market strategy, market access, regulatory compliance and operational optimisation.'
} as const;

export const SENIOR_AREAS: SeniorArea[] = [
  {
    id: 'market-entry-regulatory',
    title: 'Market Entry & Regulatory Compliance',
    description: [
      'We help pharmaceutical manufacturers navigate complex regulatory environments, from securing local GMP certifications to registering products, medical devices and nutraceuticals.',
      'Whether a registration is stuck or market access needs a clear route, we offer practical solutions that ensure compliance and streamline the process.'
    ],
    mindcraftRelevance: { pillar: 'consulting', pillarLabel: 'Business Consulting', strengthens: ['regulatory', 'african-market'] }
  },
  {
    id: 'specialty-research',
    title: 'Specialty Products Research & Market Intelligence',
    description: [
      'In-depth research and market analysis on specialty products, identifying emerging trends, competitive landscapes and unmet needs within the healthcare sector.',
      'The insight helps companies make informed, data-driven decisions that match local market demand.'
    ],
    mindcraftRelevance: { pillar: 'market-research', pillarLabel: 'Market Research', strengthens: ['life-sciences', 'african-market'] }
  },
  {
    id: 'go-to-market',
    title: 'Go-to-Market Strategies & Commercial Effectiveness',
    description: [
      'Built on a deep understanding of local market dynamics, we develop tailored go-to-market strategies that position products for success.',
      'This includes commercial frameworks, pricing models and operational strategies that maximise impact and return on investment.'
    ],
    mindcraftRelevance: { pillar: 'consulting', pillarLabel: 'Business Consulting', strengthens: ['commercial', 'african-market'] }
  },
  {
    id: 'distributor-partnerships',
    title: 'Distributor Selection & Partnerships',
    description: [
      'Experience with distributor-based trading models lets us identify high-potential target markets and select the right distributors to drive growth.',
      'A long-standing regional network helps secure reliable distributor partnerships, for lasting operational success and market penetration.'
    ],
    mindcraftRelevance: { pillar: 'consulting', pillarLabel: 'Business Consulting', strengthens: ['commercial', 'african-market'] }
  },
  {
    id: 'supply-chain',
    title: 'Supply Chain Optimization',
    description: [
      'We help companies streamline supply chain operations, improving efficiency, reducing costs and ensuring timely product availability across the region.'
    ],
    mindcraftRelevance: { pillar: 'consulting', pillarLabel: 'Business Consulting', strengthens: ['commercial', 'life-sciences'] }
  },
  {
    id: 'interim-management',
    title: 'Interim Management & Operational Support',
    description: [
      'Hands-on interim management that guides organisations through transitional phases, keeping operations running smoothly and growth sustained.'
    ],
    mindcraftRelevance: { pillar: 'consulting', pillarLabel: 'Business Consulting', strengthens: ['commercial'] }
  },
  {
    id: 'quality-systems',
    title: 'Quality Management Systems & Certification',
    description: [
      'We support companies in developing, implementing and optimising robust quality management systems aligned with international benchmarks.',
      'That includes the full ISO certification lifecycle, including ISO 9001 and related frameworks, for compliance with global and regional quality standards.',
      'The result is a faster path to certification, stronger regulatory readiness and a reputation for operational excellence and product quality in African markets.'
    ],
    mindcraftRelevance: { pillar: 'consulting', pillarLabel: 'Business Consulting', strengthens: ['regulatory', 'life-sciences'] }
  }
];

export const WHY_WORK_WITH = [
  {
    title: 'Deep Industry Experience',
    text: 'More than 30 years in African pharmaceutical and healthcare markets, so guidance rests on how those markets really work.'
  },
  {
    title: 'Local and Cultural Understanding',
    text: 'First-hand knowledge of local regulators, distributors, buyers and business culture across the continent.'
  },
  {
    title: 'Rapid Value Creation',
    text: 'Proven use cases and practical solutions that tackle regulatory challenges and accelerate commercial growth.'
  }
] as const;

/** MindCraft mapping. How the expertise strengthens the firm. */
export const MINDCRAFT_STRENGTHS: { key: StrengthKey; label: string; note: string }[] = [
  { key: 'life-sciences', label: 'Life Sciences depth', note: "Pharmaceutical and healthcare experience relevant to MindCraft's core sector." },
  { key: 'african-market', label: 'African market knowledge', note: 'Practical entry and expansion experience in African markets.' },
  { key: 'regulatory', label: 'Regulatory capability', note: 'GMP, product registration and quality-system certification.' },
  { key: 'commercial', label: 'Commercial expertise', note: 'Go-to-market, pricing, distributors and supply chain.' }
];
