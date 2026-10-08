import type { NavTab } from '../types';

/**
 * Senior Expertise - Dayanand Poojari.
 * Transcribed from resources/2.0 Business Profile- Dayanand Poojari.pdf.
 * Only the fields under `SENIOR_PROFILE`, `SENIOR_AREAS[].description`, `WHY_WORK_WITH` and `SENIOR_CONTACT`
 * come from the PDF. `mindcraftRelevance` / `MINDCRAFT_STRENGTHS` are MindCraft's own mapping, NOT from the PDF.
 */

export type StrengthKey = 'life-sciences' | 'african-market' | 'regulatory' | 'commercial';

export interface SeniorArea {
  id: string;
  title: string;
  /** Verbatim from the source profile (paragraph breaks preserved as array items). */
  description: string[];
  /** MindCraft mapping - NOT from the PDF. */
  mindcraftRelevance: {
    pillar: NavTab; // consulting | market-research | ai-solutions | ai-training | life-sciences
    pillarLabel: string;
    strengthens: StrengthKey[];
  };
}

export const SENIOR_PROFILE = {
  name: 'Dayanand Poojari',
  role: 'Independent Consultant',
  positioning:
    'Pharmaceutical & Healthcare Consultant | Market Access, Regulatory Strategy & Commercial Excellence Expert',
  shortPositioning: 'Pharmaceutical & healthcare market access, regulatory strategy and commercial excellence',
  basedIn: 'Kenya',
  background:
    'Based in Kenya, I am a seasoned pharmaceutical and healthcare consultant with a proven track record of helping manufacturers and companies successfully enter and expand in the African market. I specialize in providing strategic consultation and interim management services, focusing on go-to-market strategies, market access, regulatory compliance, and operational optimization.'
} as const;

export const SENIOR_AREAS: SeniorArea[] = [
  {
    id: 'market-entry-regulatory',
    title: 'Market Entry & Regulatory Compliance',
    description: [
      'I assist pharmaceutical manufacturers in navigating complex regulatory environments, from securing local GMP certifications to registering products, medical devices, and nutraceuticals.',
      "Whether you're stuck in the regulatory maze or need help with market access, I offer practical solutions to ensure compliance and streamline the registration process."
    ],
    mindcraftRelevance: { pillar: 'consulting', pillarLabel: 'Business Consulting', strengthens: ['regulatory', 'african-market'] }
  },
  {
    id: 'specialty-research',
    title: 'Specialty Products Research & Market Intelligence',
    description: [
      'I provide in-depth research and market analysis on specialty products, identifying emerging trends, competitive landscapes, and unmet needs within the healthcare sector.',
      'My insights help companies make informed, data-driven decisions that align with local market demands.'
    ],
    mindcraftRelevance: { pillar: 'market-research', pillarLabel: 'Market Research', strengthens: ['life-sciences', 'african-market'] }
  },
  {
    id: 'go-to-market',
    title: 'Go-to-Market Strategies & Commercial Effectiveness',
    description: [
      'With a deep understanding of local market dynamics, I develop tailored go-to-market strategies that effectively position your products for success.',
      'This includes commercial frameworks, pricing models, and operational strategies that maximize impact and ROI.'
    ],
    mindcraftRelevance: { pillar: 'consulting', pillarLabel: 'Business Consulting', strengthens: ['commercial', 'african-market'] }
  },
  {
    id: 'distributor-partnerships',
    title: 'Distributor Selection & Partnerships',
    description: [
      'My focus on distributor-based trading models allows me to identify high-potential target markets and select the right distributors to drive growth.',
      'I leverage my extensive network to secure reliable distributor partnerships, ensuring long-term operational success and market penetration.'
    ],
    mindcraftRelevance: { pillar: 'consulting', pillarLabel: 'Business Consulting', strengthens: ['commercial', 'african-market'] }
  },
  {
    id: 'supply-chain',
    title: 'Supply Chain Optimization',
    description: [
      'I help companies streamline their supply chain operations, improving efficiency, reducing costs, and ensuring timely product availability across the region.'
    ],
    mindcraftRelevance: { pillar: 'consulting', pillarLabel: 'Business Consulting', strengthens: ['commercial', 'life-sciences'] }
  },
  {
    id: 'interim-management',
    title: 'Interim Management & Operational Support',
    description: [
      'I provide hands-on interim management services to guide organizations through transitional phases, ensuring smooth operational processes and sustained business growth.'
    ],
    mindcraftRelevance: { pillar: 'consulting', pillarLabel: 'Business Consulting', strengthens: ['commercial'] }
  },
  {
    id: 'quality-systems',
    title: 'Quality Management Systems & Certification',
    description: [
      'I support companies in developing, implementing, and optimizing robust quality management systems aligned with international benchmarks.',
      'I guide organizations through the full ISO certification lifecycle, including ISO 9001 and all related frameworks, helping ensure compliance with global and regional quality standards.',
      "My expertise streamlines the path to certification, bolsters regulatory readiness, and enhances your organization's reputation for operational excellence and product quality in the African market."
    ],
    mindcraftRelevance: { pillar: 'consulting', pillarLabel: 'Business Consulting', strengthens: ['regulatory', 'life-sciences'] }
  }
];

export const WHY_WORK_WITH = [
  {
    title: 'Deep Industry Experience',
    text: 'In-depth knowledge of African pharmaceutical and healthcare markets ensures strategic guidance.'
  },
  {
    title: 'Consulting Expertise',
    text: 'Proven ability to tackle regulatory challenges and optimize commercial strategies effectively.'
  },
  {
    title: 'Rapid Value Creation',
    text: 'Delivering actionable insights and solutions to accelerate growth and achieve business success.'
  }
] as const;

export const SENIOR_CONTACT = {
  email: 'dayapoojari@gmail.com',
  phone: '+254-720572553'
} as const;

/** MindCraft mapping - NOT from the PDF. How the expertise strengthens the firm. */
export const MINDCRAFT_STRENGTHS: { key: StrengthKey; label: string; note: string }[] = [
  { key: 'life-sciences', label: 'Life Sciences authority', note: 'Pharmaceutical and healthcare depth behind MindCraft\'s core sector.' },
  { key: 'african-market', label: 'African market knowledge', note: 'Practical entry and expansion experience in African markets.' },
  { key: 'regulatory', label: 'Regulatory capability', note: 'GMP, product registration and quality-system certification.' },
  { key: 'commercial', label: 'Commercial expertise', note: 'Go-to-market, pricing, distributors and supply chain.' }
];
