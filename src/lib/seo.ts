import type { NavTab } from '../types';
import { ALL_TABS, routePath } from '../data/navigation';

/**
 * Search, social and AI-answer metadata for every route, shared by the build-time prerender (head tags,
 * JSON-LD, sitemap, llms.txt) and the client (title, description and canonical on in-app navigation).
 * Copy is drawn from the corporate profile and each page's own lead; nothing here may claim more than the page does.
 */

export const SITE = {
  origin: (import.meta.env.VITE_SITE_URL as string | undefined)?.replace(/\/+$/, '') || 'https://www.mindcraftconsultancy.com',
  name: 'MindCraft Consultancy Services',
  shortName: 'MindCraft Consultancy',
  email: 'info@mindcraftconsultancy.com',
  locale: 'en_GB',
  description:
    'Nairobi-headquartered consultancy for business consulting, market research, AI training and enterprise AI solutions, with specialist Life Sciences depth and an African market focus.',
  ogImage: '/og/mindcraft-og.jpg',
  logo: '/brand/mindcraft-logo-480.png'
} as const;

interface PageSeo {
  title: string;
  description: string;
  /** Short name for breadcrumbs and llms.txt. */
  name: string;
  /** Alias routes render another route's content; the canonical points there and they stay out of the sitemap. */
  canonical?: NavTab;
  /** Capability routes also describe a schema.org Service. */
  service?: string;
}

const brand = (t: string) => `${t} | ${SITE.shortName}`;

export const PAGES: Record<NavTab, PageSeo> = {
  home: {
    name: 'Overview',
    title: 'MindCraft Consultancy: Consulting, Market Research & Applied AI',
    description: SITE.description
  },
  consulting: {
    name: 'Business Consulting',
    title: brand('Business Consulting'),
    description:
      'Strategy, organisational change, process and regulatory advisory that turns priorities into a plan people can act on, for organisations working across Africa.',
    service: 'Business consulting'
  },
  'market-research': {
    name: 'Market Research & Intelligence',
    title: brand('Market Research & Intelligence'),
    description:
      'Primary and secondary research that turns market complexity into decision-ready evidence on customers, competitors and regulation in African markets.',
    service: 'Market research and intelligence'
  },
  'ai-training': {
    name: 'AI Training & Digital Literacy',
    title: brand('AI Training & Digital Literacy'),
    description:
      'Practical AI learning for leaders and teams: executive briefings, function-specific training and train-the-trainer programmes built around real work.',
    service: 'AI training and digital literacy'
  },
  'ai-solutions': {
    name: 'AI Enterprise Solutions',
    title: brand('AI Enterprise Solutions'),
    description:
      'AI strategy, analytics, automation and integration with existing systems, grounded in data privacy, ethics, governance and human oversight.',
    service: 'AI enterprise solutions'
  },
  'operating-model': {
    name: 'The MindCraft Model',
    title: brand('The MindCraft Model'),
    description:
      'Research shows what is happening, consulting decides what to do, training prepares people and AI solutions build the result into daily work: one engagement.'
  },
  industries: {
    name: 'Industry Explorer',
    title: brand('Industry Explorer'),
    description:
      'Explore 24 industries, led by Life Sciences, and the MindCraft capabilities relevant to the decisions each sector faces in African markets.'
  },
  'africa-explorer': {
    name: 'African Regions',
    title: brand('African Market Regions'),
    description:
      'Market context across East, West, Southern and North Africa, with country coverage and the decisions MindCraft can support in each region.'
  },
  'africa-intelligence': {
    name: 'Regulatory & Market Map',
    title: brand('African Regulatory & Market Map'),
    description:
      'Who regulates, how buyers purchase and which questions shape market entry, by African region and country. A starting point for scoping research and advice.'
  },
  localization: {
    name: 'Market Localisation',
    title: brand('Market Localisation'),
    description:
      'Adapt commercial and regulatory strategy to the realities of each African market, from local regulation and buyers to distribution and execution.'
  },
  'market-entry': {
    name: 'Market Entry',
    title: brand('Market Entry Planning'),
    description:
      'A structured planning sequence for entering a market: market context, entry decisions and local execution, for organisations expanding into Africa.'
  },
  'matrix-3d': {
    name: 'Market Matrix',
    title: brand('Market Matrix'),
    description:
      'Combine an industry, a geography and a MindCraft capability to see how an engagement could be shaped for that context.'
  },
  'question-to-outcome': {
    name: 'Start with a Business Question',
    title: brand('Start with a Business Question'),
    description:
      'Begin with the decision in front of you and see how research, advisory, AI enablement and capability building combine to address it.'
  },
  'capability-graph': {
    name: 'Capability Map',
    title: brand('Capability Map'),
    description:
      "See how MindCraft's four capabilities connect to 24 industries, Africa's four regional clusters and the outcomes the work is for."
  },
  'life-sciences': {
    name: 'Life Sciences',
    title: brand('Life Sciences Consulting'),
    description:
      'Research, strategy and applied AI for pharmaceuticals, medical devices, diagnostics, equipment, surgical consumables and hospitals & healthcare providers.'
  },
  about: {
    name: 'About MindCraft',
    title: brand('About'),
    description:
      'Consulting, market intelligence and applied AI with specialist Life Sciences depth and an African focus. Headquartered in Nairobi, Kenya.'
  },
  insights: {
    name: 'Insights',
    title: brand('Insights'),
    description:
      'Perspectives on Life Sciences regulation, African market access and responsible AI adoption, written for the people who make the decision.'
  },
  'engagement-builder': {
    name: 'Engagement Builder',
    title: brand('Engagement Builder'),
    description:
      'Sketch an indicative brief by choosing an industry, market, capability and objective before a conversation with MindCraft.'
  },
  // Aliases: same content as another route
  overview: { name: 'Overview', title: '', description: '', canonical: 'home' },
  method: { name: 'The MindCraft Model', title: '', description: '', canonical: 'operating-model' },
  builder: { name: 'Engagement Builder', title: '', description: '', canonical: 'engagement-builder' },
  scenarios: { name: 'Start with a Business Question', title: '', description: '', canonical: 'question-to-outcome' },
  contact: { name: 'About MindCraft', title: '', description: '', canonical: 'about' },
  'maturity-model': {
    name: 'AI Readiness Diagnostic',
    title: brand('AI Readiness Diagnostic'),
    description:
      'The eight dimensions MindCraft uses to assess AI readiness, from strategy and data to governance and use-case prioritisation.',
    canonical: 'consulting'
  },
  'responsible-ai': {
    name: 'Responsible AI',
    title: brand('Responsible AI'),
    description: 'How MindCraft builds data privacy, ethics, governance and human oversight into AI training and enterprise AI solutions.',
    canonical: 'ai-solutions'
  },
  'senior-expertise': {
    name: 'Senior Expertise',
    title: brand('Senior Pharmaceutical & Healthcare Expertise'),
    description:
      'The independent pharmaceutical and healthcare consulting experience of Dayanand Poojari, based in Kenya, that MindCraft draws on.',
    canonical: 'about'
  }
};

export const absoluteUrl = (path: string) => `${SITE.origin}${path}`;
const canonicalTab = (tab: NavTab): NavTab => PAGES[tab].canonical ?? tab;

/** Resolved title, description and canonical URL for a route (aliases inherit from their canonical route). */
export const pageMeta = (tab: NavTab) => {
  const own = PAGES[tab];
  const base = PAGES[canonicalTab(tab)];
  return {
    title: own.title || base.title,
    description: own.description || base.description,
    name: own.name,
    path: routePath(tab),
    canonicalUrl: absoluteUrl(routePath(canonicalTab(tab)))
  };
};

/** Routes that have their own content and belong in the sitemap. */
export const INDEXABLE_TABS = ALL_TABS.filter((t) => !PAGES[t].canonical);

/* ------------------------------------------------------------------ */
/* JSON-LD                                                             */

const ORG_ID = `${SITE.origin}/#organization`;
const SITE_ID = `${SITE.origin}/#website`;
const PERSON_ID = `${SITE.origin}/about#dayanand-poojari`;

const LIFE_SCIENCES = [
  'Pharmaceuticals',
  'Medical Devices',
  'Medical Diagnostics',
  'Medical Equipment',
  'Surgical Consumables',
  'Hospitals & Healthcare Providers'
];
const AREAS_SERVED = ['Africa', 'Europe', 'United States'].map((name) => ({ '@type': 'Place', name }));

const organization = {
  '@type': 'Organization',
  '@id': ORG_ID,
  name: SITE.name,
  alternateName: ['MindCraft', SITE.shortName],
  url: `${SITE.origin}/`,
  logo: { '@type': 'ImageObject', url: absoluteUrl(SITE.logo) },
  image: absoluteUrl(SITE.ogImage),
  description: SITE.description,
  email: SITE.email,
  foundingDate: '2026',
  address: { '@type': 'PostalAddress', addressLocality: 'Nairobi', addressCountry: 'KE' },
  areaServed: AREAS_SERVED,
  knowsAbout: [
    'Business consulting',
    'Market research and intelligence',
    'AI training and digital literacy',
    'AI enterprise solutions',
    'Market entry in Africa',
    'Regulatory strategy',
    'Life Sciences',
    ...LIFE_SCIENCES
  ],
  contactPoint: { '@type': 'ContactPoint', contactType: 'Enquiries', email: SITE.email, areaServed: AREAS_SERVED }
};

const website = {
  '@type': 'WebSite',
  '@id': SITE_ID,
  url: `${SITE.origin}/`,
  name: SITE.name,
  inLanguage: 'en-GB',
  publisher: { '@id': ORG_ID }
};

/** The independent consultant whose experience MindCraft draws on (resources/2.0 Business Profile). No affiliation is claimed. */
const person = {
  '@type': 'Person',
  '@id': PERSON_ID,
  name: 'Dayanand Poojari',
  jobTitle: 'Independent Consultant',
  description: 'Pharmaceutical and healthcare consultant: market access, regulatory strategy and commercial excellence in African markets.',
  homeLocation: { '@type': 'Place', name: 'Kenya' },
  knowsAbout: [
    'Market entry and regulatory compliance',
    'Specialty products research and market intelligence',
    'Go-to-market strategy and commercial effectiveness',
    'Distributor selection and partnerships',
    'Supply chain optimisation',
    'Interim management',
    'Quality management systems and ISO certification'
  ]
};

/** The JSON-LD graph for one route. */
export const structuredData = (tab: NavTab) => {
  const meta = pageMeta(tab);
  const url = meta.canonicalUrl;
  const own = PAGES[canonicalTab(tab)];
  const graph: Record<string, unknown>[] = [organization, website];
  const page: Record<string, unknown> = {
    '@type': tab === 'about' || tab === 'senior-expertise' ? 'AboutPage' : tab === 'insights' ? 'CollectionPage' : 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name: meta.title,
    description: meta.description,
    inLanguage: 'en-GB',
    isPartOf: { '@id': SITE_ID },
    about: { '@id': ORG_ID },
    primaryImageOfPage: { '@type': 'ImageObject', url: absoluteUrl(SITE.ogImage) }
  };
  if (canonicalTab(tab) !== 'home') {
    page.breadcrumb = {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE.origin}/` },
        { '@type': 'ListItem', position: 2, name: own.name, item: url }
      ]
    };
  }
  graph.push(page);
  if (own.service) {
    graph.push({
      '@type': 'Service',
      '@id': `${url}#service`,
      name: own.name,
      serviceType: own.service,
      description: own.description,
      url,
      provider: { '@id': ORG_ID },
      areaServed: AREAS_SERVED
    });
  }
  if (canonicalTab(tab) === 'life-sciences') {
    graph.push({
      '@type': 'Service',
      '@id': `${url}#service`,
      name: 'Life Sciences consulting, research and applied AI',
      serviceType: 'Life Sciences consulting',
      description: own.description,
      url,
      provider: { '@id': ORG_ID },
      areaServed: AREAS_SERVED,
      audience: LIFE_SCIENCES.map((name) => ({ '@type': 'BusinessAudience', audienceType: name }))
    });
  }
  if (canonicalTab(tab) === 'about') graph.push(person);
  return { '@context': 'https://schema.org', '@graph': graph };
};

/* ------------------------------------------------------------------ */
/* Client-side head sync for in-app navigation (the prerender writes the same values into each page). */

const setMeta = (selector: string, attr: 'content' | 'href', value: string) => {
  const el = document.head.querySelector(selector);
  if (el) el.setAttribute(attr, value);
};

export const applyHead = (tab: NavTab) => {
  const meta = pageMeta(tab);
  document.title = meta.title;
  setMeta('meta[name="description"]', 'content', meta.description);
  setMeta('link[rel="canonical"]', 'href', meta.canonicalUrl);
  setMeta('meta[property="og:title"]', 'content', meta.title);
  setMeta('meta[property="og:description"]', 'content', meta.description);
  setMeta('meta[property="og:url"]', 'content', meta.canonicalUrl);
  setMeta('meta[name="twitter:title"]', 'content', meta.title);
  setMeta('meta[name="twitter:description"]', 'content', meta.description);
};
