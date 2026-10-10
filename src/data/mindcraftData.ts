import {
  ServicePillar,
  LifeSciencesSector,
  DiversifiedIndustry,
  CountryDossier,
  ProblemOutcomeScenario,
  ResearchWorkspaceItem,
  AISolutionItem,
  TrainingCurriculumStep,
  InsightArticle
} from '../types';

export const SERVICE_PILLARS: ServicePillar[] = [
  {
    id: 'consulting',
    name: 'Business Consulting',
    tagline: 'Strategic advisory grounded in Life Sciences and cross-industry best practice.',
    question: 'What should we do?',
    description: 'Helping organisations make better decisions, restructure for sustainable growth, and execute change with confidence.',
    color: '#0D9488', // Teal
    iconName: 'Compass',
    capabilities: [
      {
        title: 'Corporate & Business Strategy',
        description: 'Formulating growth blueprints, portfolio prioritisation, and African/international market expansion.',
        bulletPoints: [
          'Corporate strategy formulation and business planning',
          'Market entry and expansion strategy (Africa, Europe, USA)',
          'Portfolio strategy & product prioritisation for pharma/devices',
          'Competitive positioning and brand strategy support'
        ]
      },
      {
        title: 'Digital & AI Transformation Strategy',
        description: 'Maturity assessments and AI-readiness diagnostics aligned to business budget realities.',
        bulletPoints: [
          'Digital maturity assessments & AI-readiness diagnostics',
          'Prioritised transformation roadmaps with ROI models',
          'Technology and vendor selection advisory for AI, CRM, ERP'
        ]
      },
      {
        title: 'Organisational Design & Change Management',
        description: 'Operating model redesign, role clarity, and cultural transition for technology rollouts.',
        bulletPoints: [
          'Operating model redesign and organisational structure',
          'Change management execution for M&A and AI adoption',
          'Culture diagnostics and executive alignment'
        ]
      },
      {
        title: 'Process Improvement & Systems Design',
        description: 'End-to-end process optimisation across commercial, operations, supply chain, and quality.',
        bulletPoints: [
          'End-to-end business process mapping and optimisation',
          'Standard Operating Procedure (SOP) design & compliance',
          'Workflow architecture to support scaling and efficiency'
        ]
      },
      {
        title: 'Policy, Regulatory & Project Advisory',
        description: 'Navigating regulatory dynamics across African markets and structuring corporate/donor feasibility.',
        bulletPoints: [
          'Policy analysis on healthcare and technology adoption',
          'Regulatory landscape mapping and compliance strategy',
          'Feasibility studies & grant proposal structuring'
        ]
      }
    ],
    deliverables: [
      'Strategy blueprints, business plans & board-ready presentations',
      'Prioritised transformation roadmaps with owners & investment models',
      'Process maps, SOP packages & organisational design blueprints'
    ],
    intersections: [
      {
        withPillar: 'Market Research',
        integratedValue: 'Evidence-grounded strategy: Market research yields ground truth which consulting converts into executive decisions.'
      },
      {
        withPillar: 'AI Training',
        integratedValue: 'Human capability enablement: Strategic restructuring is backed by targeted workforce upskilling.'
      },
      {
        withPillar: 'AI Enterprise Solutions',
        integratedValue: 'Operationalised strategy: Recommended operating models are directly automated via enterprise AI systems.'
      }
    ]
  },
  {
    id: 'market-research',
    name: 'Market Research',
    tagline: 'Rigorous primary and secondary research turning complexity into decision-ready intelligence.',
    question: 'What is actually happening?',
    description: 'Purpose-built research methodology for Life Sciences and diversified industries across African and international markets.',
    color: '#3B82F6', // Blue
    iconName: 'BarChart3',
    capabilities: [
      {
        title: 'Primary Market Research',
        description: 'Direct field insights from physicians, pharmacists, patients, distributors, and institutional buyers.',
        bulletPoints: [
          'Quantitative & qualitative surveys with healthcare practitioners',
          'Key Opinion Leader (KOL) identification and mapping',
          'Patient journey, unmet needs, and satisfaction research',
          'Distributor, channel partner, and tender intelligence'
        ]
      },
      {
        title: 'Secondary & Desk Research',
        description: 'Exhaustive desk analysis covering market sizing, competitive pipelines, and regulatory landscapes.',
        bulletPoints: [
          'Therapeutic area market sizing and forecasting',
          'Competitive pipeline tracking and pricing benchmarking',
          'Pan-African regulatory, reimbursement, and policy scans',
          'AI-adoption and emerging-technology landscape studies'
        ]
      },
      {
        title: 'Programme & Impact Research',
        description: 'Rigorous evaluation for corporate, donor-funded, and development initiatives.',
        bulletPoints: [
          'Baseline, midline, and endline evaluation surveys',
          'Monitoring, Evaluation and Learning (MEL) frameworks',
          'Skills-gap and capacity-building needs assessments'
        ]
      },
      {
        title: 'Data Analytics & Knowledge Products',
        description: 'AI-accelerated synthesis, data cleansing, and executive dashboard products.',
        bulletPoints: [
          'Data cleaning, statistical modelling, and dashboarding',
          'Custom whitepapers, toolkits, and sector dossiers',
          'AI-assisted literature & market data synthesis'
        ]
      }
    ],
    deliverables: [
      'Executive summary reports, detailed findings decks & raw datasets',
      'Market sizing models & competitive intelligence trackers',
      'Actionable recommendations linked directly to commercial decisions'
    ],
    intersections: [
      {
        withPillar: 'Business Consulting',
        integratedValue: 'Informs strategic roadmap with unvarnished primary field evidence and competitive metrics.'
      },
      {
        withPillar: 'AI Enterprise Solutions',
        integratedValue: 'Feeds continuous data streams into automated intelligence and monitoring platforms.'
      }
    ]
  },
  {
    id: 'ai-training',
    name: 'AI Training & Digital Literacy',
    tagline: 'Practical, hands-on AI capability building for teams, executives, and organisations.',
    question: 'Can our people use AI effectively?',
    description: 'Transforming organisational capability to build real AI literacy and internal champions, not just theoretical awareness.',
    color: '#F59E0B', // Amber
    iconName: 'GraduationCap',
    capabilities: [
      {
        title: 'AI Foundations & Executive Briefings',
        description: 'Demystifying AI for boards and leadership teams with industry-specific application frameworks.',
        bulletPoints: [
          'Executive & board AI fundamentals and strategic literacy',
          'Organisational AI-readiness assessments and use case mapping',
          'Sector briefings for Life Sciences, banking, and industry'
        ]
      },
      {
        title: 'Applied Function-Specific Training',
        description: 'Hands-on workflows for commercial, regulatory, medical affairs, HR, and finance teams.',
        bulletPoints: [
          'Commercial & sales teams: territory planning & CRM intelligence',
          'Regulatory affairs & pharmacovigilance AI workflows',
          'Prompt engineering & advanced enterprise LLM tooling',
          'Finance, HR, and operational AI productivity accelerators'
        ]
      },
      {
        title: 'Responsible & Governed AI Adoption',
        description: 'Practical ethics, compliance guidelines, and privacy safeguards for regulated sectors.',
        bulletPoints: [
          'AI ethics, data privacy, and confidentiality safeguards',
          'Organisational policy creation for regulated industries',
          'Human-in-the-loop validation frameworks'
        ]
      },
      {
        title: 'Capability Multiplication & Champions',
        description: 'Train-the-trainer programmes and custom curricula to ensure lasting institutional ownership.',
        bulletPoints: [
          'Train-the-trainer cohorts to establish internal AI champions',
          'Custom organization-specific curriculum development',
          'On-the-job mentorship, coaching, and reinforcement programmes'
        ]
      }
    ],
    deliverables: [
      'Customised training curricula, facilitator guides & workbooks',
      'AI-readiness scorecards & function-by-function adoption roadmaps',
      'Certified internal cohort of AI champions driving daily usage'
    ],
    intersections: [
      {
        withPillar: 'AI Enterprise Solutions',
        integratedValue: 'Ensures software adoption: Custom AI software is matched by trained users who actually embrace it.'
      },
      {
        withPillar: 'Business Consulting',
        integratedValue: 'Culture & change readiness: Upskilling aligns workforce attitudes with strategic transformation.'
      }
    ]
  },
  {
    id: 'ai-solutions',
    name: 'AI Enterprise Solutions',
    tagline: 'End-to-end design, build, and integration of AI systems operationalising insights into workflows.',
    question: 'How do we operationalise intelligence?',
    description: 'Bridging the gap from AI proof-of-concept to robust, governed production systems integrated into enterprise infrastructure.',
    color: '#10B981', // Emerald
    iconName: 'Cpu',
    capabilities: [
      {
        title: 'AI Strategy & Solution Architecture',
        description: 'Prioritising high-ROI use cases and architecting enterprise-grade data and model stacks.',
        bulletPoints: [
          'Enterprise use case discovery and feasibility prioritisation',
          'Solution architecture and modern AI stack selection',
          'Data strategy, governance, and enterprise data readiness'
        ]
      },
      {
        title: 'Custom AI & Analytics Systems',
        description: 'Bespoke machine learning and agentic systems tailored to commercial and clinical realities.',
        bulletPoints: [
          'Custom AI/ML models for commercial and operational workflows',
          'Continuous market intelligence & competitor monitoring platforms',
          'Predictive sales forecasting and business intelligence hubs'
        ]
      },
      {
        title: 'Conversational & Engagement Agents',
        description: 'Context-aware virtual assistants for field forces, patient education, and customer support.',
        bulletPoints: [
          'AI assistants for field-force enablement and product queries',
          'Patient engagement & adherence conversational tools',
          'Automated customer support augmentation with human handoff'
        ]
      },
      {
        title: 'Process Automation & Enterprise Integration',
        description: 'Integrating intelligent document parsing and workflow automation into CRM and ERP stacks.',
        bulletPoints: [
          'Intelligent document processing (claims, regulatory dossiers, invoices)',
          'CRM, ERP, and EHR enterprise pipeline integrations',
          'Automated audit logging and compliance checkpoints'
        ]
      },
      {
        title: 'Life Sciences-Specific AI Solutions',
        description: 'Purpose-built systems for pharmacovigilance, regulatory monitoring, and KOL intelligence.',
        bulletPoints: [
          'AI-assisted adverse event screening & signal detection support',
          'Automated pan-African regulatory guideline & submission tracker',
          'KOL identification and market-access stakeholder analytics'
        ]
      }
    ],
    deliverables: [
      'Functional AI systems & production-ready intelligence dashboards',
      'Technical architecture blueprints, API docs & user guides',
      'Measurable efficiency, speed, and accuracy improvements'
    ],
    intersections: [
      {
        withPillar: 'Market Research',
        integratedValue: 'Transforms periodic research studies into 24/7 automated intelligence monitoring platforms.'
      },
      {
        withPillar: 'Business Consulting',
        integratedValue: 'Translates strategic organisational redesign into automated software workflows.'
      }
    ]
  }
];

export const LIFE_SCIENCES_SECTORS: LifeSciencesSector[] = [
  {
    id: 'pharma',
    name: 'Pharmaceuticals',
    category: 'core-pharma',
    tagline: 'Commercial intelligence, regulatory fluency, and market access across African & global markets.',
    description: 'MindCraft provides multinational and regional pharma manufacturers with deep clinical, commercial, and regulatory advisory.',
    focusAreas: [
      'Market access & reimbursement landscape',
      'Competitive intelligence & pipeline benchmarking',
      'Brand strategy & product launch positioning',
      'Key Opinion Leader (KOL) identification & mapping',
      'Pharmacovigilance & adverse-event monitoring support',
      'Pan-African regulatory intelligence & submission tracking',
      'Sales force effectiveness & territory optimisation'
    ],
    strategicChallenges: [
      'Fragmented regulatory pathways across 54 African countries',
      'Out-of-pocket payment dominance vs emerging public insurance schemes',
      'Limited secondary healthcare epidemiological data',
      'Complex multi-tier distribution networks and gray-market infiltration'
    ],
    researchMethods: [
      'Double-blind qualitative interviews with key medical specialists & pharmacists',
      'Hospital formulary listing and procurement audits',
      'Retail pricing and brand perception surveys',
      'Therapeutic area patient journey & compliance studies'
    ],
    aiOpportunities: [
      'Automated adverse-event literature screening for pharmacovigilance',
      'Regulatory change-detection agent tracking regional health agencies',
      'AI-driven territory sales intelligence and CRM call preparation',
      'KOL relationship graph analysis from clinical publications & conferences'
    ],
    exampleDeliverables: [
      'Pan-African Market Access Blueprint & Pricing Index',
      'Oncology / Specialty Care Competitor Pipeline Matrix',
      'AI-Assisted Pharmacovigilance Triage Dashboard Prototype',
      'KOL Influence Mapping & Advisory Board Strategy'
    ],
    workflowExample: {
      question: 'How should we price and position a new biologic across East and West Africa?',
      method: 'Multi-country physician & payer research + price-elasticity modelling + competitor benchmarking.',
      intelligence: 'Identified willingness-to-pay tiers and public tender inclusion criteria in Kenya, Ghana, and Nigeria.',
      decision: 'Formulated tiered dual-brand strategy: private hospital premium line + public institution volume tier.',
      aiSolution: 'Deployed a dynamic market pricing & competitor tracker with automated tender scraping.',
      outcome: 'Achieved 38% faster hospital formulary adoption and optimised gross margin retention.'
    }
  },
  {
    id: 'med-devices',
    name: 'Medical Devices',
    category: 'devices-equipment',
    tagline: 'Launch advisory, distributor qualification, and health economics across emerging healthcare systems.',
    description: 'Supporting global and regional medical device innovators to navigate procurement ecosystems, distributor partnerships, and clinical adoption.',
    focusAreas: [
      'Product launch & market entry strategy',
      'Health economics & reimbursement landscape',
      'Distributor identification, mapping & auditing',
      'Post-market surveillance & clinical feedback loops',
      'Hospital purchasing committee decision mapping'
    ],
    strategicChallenges: [
      'High import duties and complex device registration timelines',
      'Distributor opacity and variable after-sales technical support capability',
      'Healthcare provider budget constraints favoring refurbished equipment'
    ],
    researchMethods: [
      'Surgeon and biomedical engineer technical feedback panels',
      'Distributor due-diligence interviews and capability scoring',
      'Hospital procurement committee decision flow analysis'
    ],
    aiOpportunities: [
      'Predictive equipment maintenance & consumable re-order analytics',
      'AI distributor performance scoring and compliance monitoring',
      'Automated medical device adverse incident classification'
    ],
    exampleDeliverables: [
      'Distributor Partner Assessment & Vetting Matrix',
      'Device Health Economics Dossier for Payer Negotiations',
      'Post-Market Clinical Follow-up (PMCF) Framework'
    ],
    workflowExample: {
      question: 'Which distributor partner in Southern Africa possesses genuine clinical training infrastructure?',
      method: 'Primary audit of 18 regional distributors, hospital reference checks, and biomedical engineer surveys.',
      intelligence: 'Revealed that only 3 distributors had certified technical service engineers across provincial hospitals.',
      decision: 'Structured exclusive hybrid distributor agreement with mandatory service-level agreements.',
      aiSolution: 'Built a field maintenance & parts tracking portal for real-time uptime visibility.',
      outcome: 'Reduced device downtime by 62% and expanded tier-1 hospital penetration.'
    }
  },
  {
    id: 'diagnostics',
    name: 'Medical Diagnostics',
    category: 'devices-equipment',
    tagline: 'Point-of-care adoption, laboratory network mapping, and diagnostic testing strategy.',
    description: 'Enabling molecular, rapid diagnostic, and clinical chemistry providers to expand laboratory access and diagnostic throughput.',
    focusAreas: [
      'Market sizing & testing-adoption studies',
      'Laboratory network & reference centre mapping',
      'Regulatory pathway advisory for diagnostic kits',
      'Reagent rental model & placement economics',
      'Public health screening programme integration'
    ],
    strategicChallenges: [
      'Cold-chain logistics vulnerabilities for sensitive reagents',
      'Fragmented private lab networks vs centralised national reference labs',
      'Price sensitivity for self-pay diagnostic panels'
    ],
    researchMethods: [
      'Pathologist & lab director preference interviews',
      'Laboratory test volume & capacity mapping across urban/rural centres',
      'National health ministry disease-screening priority audits'
    ],
    aiOpportunities: [
      'Automated diagnostic test demand forecasting by seasonal disease patterns',
      'Computer vision assistance for rapid test strip interpretation support',
      'Laboratory workflow optimisation and reagent inventory forecasting'
    ],
    exampleDeliverables: [
      'National Laboratory Capacity & Footprint Map',
      'Diagnostic Reagent Rental Economic Model',
      'Public-Private Partnership (PPP) Diagnostic Proposal Blueprint'
    ],
    workflowExample: {
      question: 'What is the commercial viability of deploying point-of-care infectious disease analyzers in rural clinics?',
      method: 'Field assessment across 60 secondary clinics, power/connectivity audit, and turnaround-time analysis.',
      intelligence: 'Identified solar-backed battery requirements and primary care worker training gaps as key hurdles.',
      decision: 'Redesigned product bundle with ruggedized solar kits and simplified visual SOPs.',
      aiSolution: 'Introduced an offline-first mobile sync tool for test logging and quality control alerts.',
      outcome: 'Successfully placed 140 units across 4 counties with 99.4% reporting accuracy.'
    }
  },
  {
    id: 'equipment',
    name: 'Medical Equipment',
    category: 'devices-equipment',
    tagline: 'Capital equipment market intelligence, tender tracking, and financing advisory.',
    description: 'Strategic advisory for imaging systems, surgical suites, ICU ventilators, and hospital capital installations.',
    focusAreas: [
      'Capital equipment market studies & installed base tracking',
      'Tender & public procurement intelligence',
      'Hospital purchasing-committee mapping',
      'Equipment leasing & managed equipment services (MES) models',
      'Refurbished vs new equipment market dynamic analysis'
    ],
    strategicChallenges: [
      'Extended public tender procurement cycles (12-24 months)',
      'Financing constraints among private hospital chains',
      'Shortage of specialised biomedical maintenance technicians'
    ],
    researchMethods: [
      'Installed base audits across public referral and private hospitals',
      'Tender award history analysis and competitor pricing teardowns',
      'Hospital CFO and procurement executive structured interviews'
    ],
    aiOpportunities: [
      'Automated government gazette & tender opportunity scraper and scoring',
      'Predictive lifetime cost and utilisation simulation models',
      'AI-assisted RFP/tender bid response drafting'
    ],
    exampleDeliverables: [
      'Installed Equipment Base & Replacement Cycle Forecast',
      'Public Healthcare Tender Intelligence Dashboard',
      'Managed Equipment Services (MES) Structuring Framework'
    ],
    workflowExample: {
      question: 'When will major public referral hospitals upgrade their MRI and CT imaging infrastructure?',
      method: 'Audited 42 referral facilities, equipment age, service contract expiries, and national budget allocations.',
      intelligence: 'Forecasted 14 replacement tenders scheduled across the upcoming 18-month fiscal cycle.',
      decision: 'Positioned pre-tender educational workshops and tailored flexible lease financing options.',
      aiSolution: 'Implemented a tender pipeline tracker with automated regulatory compliance checklists.',
      outcome: 'Secured 3 major public hospital supply contracts worth $8.2M.'
    }
  },
  {
    id: 'consumables',
    name: 'Surgical Consumables',
    category: 'devices-equipment',
    tagline: 'Channel distribution, hospital formulary intelligence, and volume optimisation.',
    description: 'Market research and supply chain strategy for surgical gloves, sutures, wound care, drapes, and disposable devices.',
    focusAreas: [
      'Distribution channel & wholesaler network studies',
      'Hospital formulary tracking & surgeon preference mapping',
      'Competitive benchmarking on quality vs price elasticity',
      'Counterfeit detection & supply chain integrity',
      'Central medical store (CMS) procurement analysis'
    ],
    strategicChallenges: [
      'Severe price competition from low-cost imports',
      'Hospital stock-outs and irregular replenishment cycles',
      'Complex hospital buying consortiums'
    ],
    researchMethods: [
      'Operating theater nurse and surgeon usage preference surveys',
      'Pharmacy distributor price and rebate structure benchmarking',
      'Supply chain lead-time and stock-out frequency audits'
    ],
    aiOpportunities: [
      'Hospital surgical volume forecasting for proactive replenishment',
      'Automated SKU rationalization and price optimisation models',
      'Packaging verification & anti-counterfeit scanning pipelines'
    ],
    exampleDeliverables: [
      'Surgical Consumable Price & Margin Waterfall Analysis',
      'Hospital Formulary Listing Strategy & Toolkit',
      'Channel Partner Performance Scorecard'
    ],
    workflowExample: {
      question: 'Why are tier-2 hospitals switching from premium sutures to unbranded imports?',
      method: 'Price-to-quality perception study with 120 theatre nurses and hospital procurement managers.',
      intelligence: 'Found that packaging sizes did not match typical daily surgical batch sizes, causing 18% inventory wastage.',
      decision: 'Introduced right-sized procedure packs and introduced volume-tiered rebate contracts.',
      aiSolution: 'Configured automated re-order triggers within distributor ordering portals.',
      outcome: 'Regained 24% lost market share within 9 months while increasing operating margin.'
    }
  },
  {
    id: 'hospitals',
    name: 'Hospitals & Healthcare Providers',
    category: 'healthcare-delivery',
    tagline: 'Operational strategy, digital health transformation, and clinical workforce capacity.',
    description: 'Advising private hospital groups, faith-based networks, and public health systems on operational efficiency and patient experience.',
    focusAreas: [
      'Operational strategy & clinical service line optimisation',
      'Digital health transformation & hospital information system (HIS) advisory',
      'Patient experience research & clinical pathway optimisation',
      'Workforce capacity building & clinical AI readiness',
      'Accreditation readiness & quality assurance framework design'
    ],
    strategicChallenges: [
      'Clinical staff attrition and brain drain',
      'Legacy paper-based or disconnected digital systems',
      'Insurance claim rejection rates and cash flow bottlenecks'
    ],
    researchMethods: [
      'Patient satisfaction journey mapping & wait-time analytics',
      'Doctor and nursing staff workflow & burnout diagnostics',
      'Insurance claim submission and rejection root-cause analysis'
    ],
    aiOpportunities: [
      'AI-assisted medical coding and pre-submission insurance claim validation',
      'Patient appointment scheduling & no-show prediction algorithms',
      'Clinical documentation voice-to-text assistants customised for regional accents'
    ],
    exampleDeliverables: [
      'Hospital Digital Transformation Master Roadmap',
      'Patient Journey Optimisation & Quality Scorecard',
      'Clinical Workforce AI Enablement & Training Curriculum'
    ],
    workflowExample: {
      question: 'How can a 300-bed hospital network reduce insurance claim rejection rates from 22% to under 5%?',
      method: 'Audited 5,000 rejected claims, mapped billing workflows, and trained administrative staff.',
      intelligence: 'Identified missing pre-authorization codes and diagnostic code mismatches as 78% of rejection causes.',
      decision: 'Restructured the admissions billing gate and implemented mandatory digital pre-checks.',
      aiSolution: 'Integrated an AI pre-adjudication engine that flags code discrepancies prior to insurer submission.',
      outcome: 'Rejection rate dropped to 3.8%, accelerating cash collection by 35 days.'
    }
  }
];

export const DIVERSIFIED_INDUSTRIES: DiversifiedIndustry[] = [
  {
    id: 'chemicals',
    name: 'Chemicals & Specialty Materials',
    tagline: 'Supply chain intelligence, environmental regulation, and industrial market sizing.',
    description: 'Advising specialty chemical manufacturers and raw material importers on regulatory compliance, distributor networks, and end-user demand.',
    focusAreas: [
      'Industrial market studies & demand forecasting',
      'Environmental and chemical regulatory compliance tracking',
      'Supply chain, distributor, and storage logistics intelligence',
      'Raw material pricing and import tariff optimisation'
    ],
    methodology: 'Cross-industry supply chain mapping + regulatory benchmarking + industrial buyer interviews.'
  },
  {
    id: 'agrochemicals',
    name: 'Agrochemicals & Crop Protection',
    tagline: 'Farmer insights, agronomist networks, and rural distribution channel strategy.',
    description: 'Helping crop protection, seed, and fertilizer companies understand smallholder and commercial farming adoption dynamics across Africa.',
    focusAreas: [
      'Crop-protection & fertilizer market sizing by agro-ecological zone',
      'Farmer and agronomist adoption & brand preference studies',
      'Agro-dealer network mapping and rural retail channel strategy',
      'Pesticide registration and environmental regulatory advisory'
    ],
    methodology: 'Geospatial agro-zone analysis + rural dealer audits + structured farmer focus groups.'
  },
  {
    id: 'automotive',
    name: 'Automotive & Mobility',
    tagline: 'Dealer network research, aftermarket parts distribution, and customer experience.',
    description: 'Supporting vehicle OEMs, commercial fleet operators, and aftermarket parts distributors in navigating African vehicle markets.',
    focusAreas: [
      'Authorized dealer network studies & territory optimisation',
      'Aftermarket and spare parts distribution channel research',
      'Customer experience analytics & fleet buyer preference studies',
      'Electric vehicle (EV) infrastructure readiness and policy advisory'
    ],
    methodology: 'Fleet manager surveys + aftermarket distributor mapping + customer sentiment analytics.'
  },
  {
    id: 'banking',
    name: 'Banking & Financial Services',
    tagline: 'Digital transformation, AI-driven risk analytics, and process automation.',
    description: 'Advising commercial banks, microfinance institutions, and fintechs on operational transformation, AI adoption, and credit intelligence.',
    focusAreas: [
      'Digital banking transformation & core system advisory',
      'Customer analytics, churn prediction, and segmentation',
      'AI-driven credit scoring and fraud analytics frameworks',
      'Back-office process automation and regulatory reporting (RegTech)'
    ],
    methodology: 'Customer transaction analytics + credit workflow redesign + risk governance frameworks.'
  }
];

export const AFRICAN_COUNTRIES: CountryDossier[] = [
  {
    id: 'kenya',
    name: 'Kenya',
    region: 'East Africa',
    isHQ: true,
    capital: 'Nairobi',
    currency: 'KES',
    marketHighlights: [
      'Headquarters of MindCraft Consultancy Services',
      'Regional healthcare & tech hub for East and Central Africa',
      'Advanced digital health ecosystem and progressive Pharmacy & Poisons Board (PPB) regulatory frameworks',
      'Strong private hospital network (Aga Khan, Nairobi Hospital, MP Shah) and expanding Social Health Authority (SHA)'
    ],
    capabilityCoverage: {
      marketResearch: 'Comprehensive primary field reach with over 500+ physician & pharmacist network contacts.',
      regulatoryIntelligence: 'Real-time monitoring of PPB guidelines, fast-track pathways, and regional EAC harmonisation.',
      marketEntrySupport: 'End-to-end entity setup, distributor identification, and hospital formulary listings.',
      localAssociateNetwork: 'Permanent senior consulting team and active field researcher network across 12 counties.',
      trainingDelivery: 'In-person workshops at MindCraft Nairobi facilities, client sites, and virtual hybrid delivery.'
    },
    keySectors: ['Pharmaceuticals', 'Medical Devices', 'Diagnostics', 'Agrochemicals', 'Banking & Fintech'],
    typicalQuestions: [
      'What are the reimbursement implications of the new Social Health Authority (SHA) rollout?',
      'Which private hospital chains offer optimal entry points for high-tier oncology therapies?'
    ],
    engagementModels: ['Full-service Consulting Retainer', 'Ad-hoc Market Research', 'AI Enterprise Build', 'Executive AI Academy']
  },
  {
    id: 'nigeria',
    name: 'Nigeria',
    region: 'West Africa',
    capital: 'Abuja (Commercial: Lagos)',
    currency: 'NGN',
    marketHighlights: [
      'Largest population and pharmaceutical consumer market in Africa',
      'Dynamic private pharmaceutical distribution networks (Idumota, Onitsha, Kano trading hubs)',
      'NAFDAC regulatory oversight and strict anti-counterfeiting serialization mandates',
      'Rapidly growing private diagnostic and health-tech ecosystem'
    ],
    capabilityCoverage: {
      marketResearch: 'In-depth trade channel surveys across Lagos, Abuja, Kano, Ibadan, and Port Harcourt.',
      regulatoryIntelligence: 'NAFDAC registration timelines, dossier requirements, and GMP inspection tracking.',
      marketEntrySupport: 'Tier-1 distributor qualification, open-market vs modern-trade strategy.',
      localAssociateNetwork: 'Established associate network of regulatory pharmacists and commercial researchers.',
      trainingDelivery: 'Hybrid executive training and on-site corporate programmes in Lagos & Abuja.'
    },
    keySectors: ['Pharmaceuticals', 'Surgical Consumables', 'Diagnostics', 'Banking & Finance', 'Chemicals'],
    typicalQuestions: [
      'How can a global pharma brand navigate FX volatility while maintaining channel availability?',
      'What is the true volume throughput across open pharmaceutical markets vs hospital chains?'
    ],
    engagementModels: ['Market Entry Strategy Blueprint', 'Regulatory Fast-track Advisory', 'Channel Audit', 'AI Training Cohort']
  },
  {
    id: 'south-africa',
    name: 'South Africa',
    region: 'Southern Africa',
    capital: 'Pretoria / Cape Town / Johannesburg',
    currency: 'ZAR',
    marketHighlights: [
      'Most mature healthcare, pharmaceutical manufacturing, and financial services market on the continent',
      'Strict SAHPRA regulatory standards aligned to ICH benchmarks',
      'Dual-tier healthcare: world-class private hospital groups (Netcare, Life Healthcare, Mediclinic) and public NHI transition',
      'Sophisticated medical scheme reimbursement and Single Exit Price (SEP) regulations'
    ],
    capabilityCoverage: {
      marketResearch: 'KOL mapping, private hospital purchasing committee studies, and health economics modelling.',
      regulatoryIntelligence: 'SAHPRA submission tracking, Section 21 approvals, and SEP price monitoring.',
      marketEntrySupport: 'Private hospital group formulary submission strategy and BEE compliance advisory.',
      localAssociateNetwork: 'Specialist life sciences consultants and data analytics associates in Johannesburg & Cape Town.',
      trainingDelivery: 'Advanced enterprise AI workshops and corporate digital transformation intensives.'
    },
    keySectors: ['Pharmaceuticals', 'Medical Devices', 'Medical Equipment', 'Banking & Insurance', 'Automotive'],
    typicalQuestions: [
      'How will the National Health Insurance (NHI) legislation alter private hospital procurement?',
      'What health economics evidence is required for Council for Medical Schemes (CMS) coverage?'
    ],
    engagementModels: ['Health Economics & Outcomes Research (HEOR)', 'Enterprise AI Architecture', 'Strategic Advisory Retainer']
  },
  {
    id: 'egypt',
    name: 'Egypt',
    region: 'North Africa',
    capital: 'Cairo',
    currency: 'EGP',
    marketHighlights: [
      'Gateway to North Africa and the Middle East with massive domestic manufacturing capacity',
      'Egyptian Drug Authority (EDA) oversight and expanding Universal Health Insurance system',
      'High-volume government tenders via the Unified Procurement Authority (UPAH / UPA)',
      'Major medical tourism and specialised tertiary hospital centre'
    ],
    capabilityCoverage: {
      marketResearch: 'UPA tender pricing analysis and private pharmacy chain benchmarking.',
      regulatoryIntelligence: 'EDA registration pathways, localised clinical trial rules, and bioequivalence mandates.',
      marketEntrySupport: 'Local manufacturing partner identification and tender bidding strategy.',
      localAssociateNetwork: 'Arabic- and English-fluent life sciences associates based in Cairo and Alexandria.',
      trainingDelivery: 'Virtual and in-person corporate AI enablement for North African leadership.'
    },
    keySectors: ['Pharmaceuticals', 'Medical Devices', 'Capital Equipment', 'Chemicals', 'Banking'],
    typicalQuestions: [
      'What are the historical win-rates and discount thresholds in UPA medical equipment tenders?',
      'How to structure a contract manufacturing agreement with local Egyptian pharmaceutical plants?'
    ],
    engagementModels: ['Tender Intelligence Advisory', 'Localisation Feasibility Study', 'Executive AI Briefings']
  },
  {
    id: 'ghana',
    name: 'Ghana',
    region: 'West Africa',
    capital: 'Accra',
    currency: 'GHS',
    marketHighlights: [
      'Stable economic environment with National Health Insurance Scheme (NHIS) coverage',
      'Ghana FDA recognised for progressive regulatory oversight in ECOWAS',
      'Hub for West African medical supply distribution and clinical trials'
    ],
    capabilityCoverage: {
      marketResearch: 'NHIS medicine reimbursement audits and community pharmacy surveys.',
      regulatoryIntelligence: 'Ghana FDA fast-track pathways and ECOWAS regulatory harmonisation.',
      marketEntrySupport: 'Distributor vetting and institutional hospital formulary navigation.',
      localAssociateNetwork: 'Accra-based researchers and health policy specialists.',
      trainingDelivery: 'Executive and functional AI training delivery.'
    },
    keySectors: ['Pharmaceuticals', 'Diagnostics', 'Agrochemicals', 'Banking'],
    typicalQuestions: [
      'What is the real reimbursement reimbursement cycle from NHIS to private provider pharmacies?',
      'Which distribution partners have cold-chain integrity across regional capitals?'
    ],
    engagementModels: ['Market Sizing & Channel Strategy', 'Distributor Audit', 'AI Readiness Diagnostic']
  },
  {
    id: 'ethiopia',
    name: 'Ethiopia',
    region: 'East Africa',
    capital: 'Addis Ababa',
    currency: 'ETB',
    marketHighlights: [
      'Second most populous nation in Africa (120M+) undergoing economic and healthcare modernisation',
      'Ethiopian Food and Drug Authority (EFDA) and Ethiopian Pharmaceuticals Supply Service (EPSS)',
      'Huge unmet clinical need and expanding domestic industrial parks'
    ],
    capabilityCoverage: {
      marketResearch: 'EPSS public tender analysis and private clinic purchasing behaviour.',
      regulatoryIntelligence: 'EFDA registration requirements and foreign currency allocation mechanisms.',
      marketEntrySupport: 'Government agency liaison and development partner co-investment strategy.',
      localAssociateNetwork: 'Addis Ababa-based field research team.',
      trainingDelivery: 'Public sector and corporate AI enablement workshops.'
    },
    keySectors: ['Pharmaceuticals', 'Medical Equipment', 'Consumables', 'Agrochemicals'],
    typicalQuestions: [
      'How can foreign medical suppliers navigate EPSS procurement and letter-of-credit constraints?',
      'What are the registration priorities for maternal and child health diagnostics?'
    ],
    engagementModels: ['Public Sector Feasibility Study', 'Tender Support', 'Capacity Building']
  },
  {
    id: 'tanzania',
    name: 'Tanzania',
    region: 'East Africa',
    capital: 'Dodoma (Commercial: Dar es Salaam)',
    currency: 'TZS',
    marketHighlights: [
      'Fast-growing East African economy with Tanzania Medicines and Medical Devices Authority (TMDA)',
      'Medical Stores Department (MSD) centralised public procurement system',
      'Expanding private healthcare infrastructure in Dar es Salaam, Arusha, and Mwanza'
    ],
    capabilityCoverage: {
      marketResearch: 'MSD tender analytics and private faith-based hospital network studies.',
      regulatoryIntelligence: 'TMDA registration timelines and EAC joint-assessment submissions.',
      marketEntrySupport: 'Local agent appointment and hospital formulary inclusion.',
      localAssociateNetwork: 'Dar es Salaam research partners.',
      trainingDelivery: 'Hybrid corporate and development-sector training.'
    },
    keySectors: ['Pharmaceuticals', 'Medical Devices', 'Diagnostics', 'Agrochemicals'],
    typicalQuestions: [
      'How does the TMDA fast-track process work for WHO-prequalified formulations?',
      'What is the market share of faith-based hospital networks (CSSC) vs government facilities?'
    ],
    engagementModels: ['Market Landscape Study', 'Regulatory Advisory', 'AI Training Programme']
  },
  {
    id: 'uganda',
    name: 'Uganda',
    region: 'East Africa',
    capital: 'Kampala',
    currency: 'UGX',
    marketHighlights: [
      'Dynamic healthcare hub with National Drug Authority (NDA) and Joint Medical Store (JMS)',
      'Strong private not-for-profit (PNFP) healthcare delivery sector',
      'Growing regional pharmaceutical distribution into DRC and South Sudan'
    ],
    capabilityCoverage: {
      marketResearch: 'NDA market audits, private clinic pricing studies, and JMS procurement scans.',
      regulatoryIntelligence: 'NDA compliance, local manufacturing incentives, and cross-border trade.',
      marketEntrySupport: 'Distributor partnership modelling and regional re-export advisory.',
      localAssociateNetwork: 'Kampala life sciences and research associates.',
      trainingDelivery: 'In-person and virtual workforce enablement.'
    },
    keySectors: ['Pharmaceuticals', 'Consumables', 'Diagnostics', 'Agrochemicals'],
    typicalQuestions: [
      'What are the cross-border distribution opportunities from Kampala into Eastern DRC?',
      'How to structure supply agreements with private not-for-profit hospital networks?'
    ],
    engagementModels: ['Regional Supply Chain Study', 'Distributor Audit', 'AI Literacy Cohort']
  },
  {
    id: 'rwanda',
    name: 'Rwanda',
    region: 'East Africa',
    capital: 'Kigali',
    currency: 'RWF',
    marketHighlights: [
      'Pioneering digital health and biotechnology ecosystem; host of African Medicines Agency (AMA) headquarters',
      'Rwanda FDA with streamlined electronic submission portals',
      'Over 90% population coverage through Community-Based Health Insurance (Mutuelle de Santé)'
    ],
    capabilityCoverage: {
      marketResearch: 'Digital health adoption, public health supply chain, and innovation pilot assessments.',
      regulatoryIntelligence: 'Rwanda FDA and African Medicines Agency (AMA) policy evolution.',
      marketEntrySupport: 'Biotech pilot structuring, public-private partnership advisory.',
      localAssociateNetwork: 'Kigali-based digital health and regulatory specialists.',
      trainingDelivery: 'Executive digital transformation and advanced AI briefings.'
    },
    keySectors: ['Digital Health & Biotech', 'Pharmaceuticals', 'Medical Devices', 'Banking'],
    typicalQuestions: [
      'How will the African Medicines Agency (AMA) headquarters in Kigali shape continent-wide harmonisation?',
      'What are the commercial requirements for integration into the national electronic medical record system?'
    ],
    engagementModels: ['Innovation Pilot Advisory', 'Regulatory Policy Strategy', 'AI Centre of Excellence Training']
  },
  {
    id: 'morocco',
    name: 'Morocco',
    region: 'North Africa',
    capital: 'Rabat (Commercial: Casablanca)',
    currency: 'MAD',
    marketHighlights: [
      'Advanced pharmaceutical manufacturing cluster supplying North and West Africa',
      'Ministry of Health and Social Protection (Direction du Médicament et de la Pharmacie - DMP)',
      'Expansion of compulsory health insurance (AMO) coverage'
    ],
    capabilityCoverage: {
      marketResearch: 'Industrial benchmarking and private clinic specialist research.',
      regulatoryIntelligence: 'DMP registration, pricing decrees, and French-language dossier standards.',
      marketEntrySupport: 'Licensing, contract manufacturing, and regional export advisory.',
      localAssociateNetwork: 'Casablanca and Rabat associates fluent in French, Arabic, and English.',
      trainingDelivery: 'Multilingual AI training and corporate strategy advisory.'
    },
    keySectors: ['Pharmaceuticals', 'Medical Equipment', 'Chemicals', 'Automotive', 'Banking'],
    typicalQuestions: [
      'What are the price reference basket rules for new specialty medicine launches in Morocco?',
      'How can a European medical device manufacturer establish contract assembly in Casablanca?'
    ],
    engagementModels: ['Market Entry & Licensing Strategy', 'Regulatory Dossier Advisory', 'AI Transformation']
  },
  {
    id: 'cote-divoire',
    name: 'Côte d\'Ivoire',
    region: 'West Africa',
    capital: 'Yamoussoukro (Commercial: Abidjan)',
    currency: 'XOF',
    marketHighlights: [
      'Economic hub of Francophone West Africa (WAEMU / UEMOA)',
      'Autorité Ivoirienne de Régulation Pharmaceutique (AIRP)',
      'Universal Health Coverage (CMU) implementation driving pharmaceutical demand'
    ],
    capabilityCoverage: {
      marketResearch: 'Pharmacy wholesaler and specialist physician research across Abidjan and regional hubs.',
      regulatoryIntelligence: 'AIRP registration pathways and UEMOA mutual recognition guidelines.',
      marketEntrySupport: 'Francophone distributor qualification and tender strategy.',
      localAssociateNetwork: 'Abidjan-based bilingual life sciences consultants.',
      trainingDelivery: 'French-language executive AI training and strategy sessions.'
    },
    keySectors: ['Pharmaceuticals', 'Diagnostics', 'Agrochemicals', 'Banking & Microfinance'],
    typicalQuestions: [
      'How does the CMU reimbursement list influence private pharmacy purchasing in Abidjan?',
      'What are the key differences between UEMOA regulatory guidelines and English-speaking West Africa?'
    ],
    engagementModels: ['Francophone Market Entry Blueprint', 'Channel Audit', 'Executive Training']
  },
  {
    id: 'zambia',
    name: 'Zambia',
    region: 'Southern Africa',
    capital: 'Lusaka',
    currency: 'ZMW',
    marketHighlights: [
      'Southern African trade corridor with Zambia Medicines Regulatory Authority (ZAMRA)',
      'ZAMMSA (Zambia Medicines and Medical Supplies Agency) public supply chain',
      'National Health Insurance Scheme (NHIMA) expanding private and public healthcare purchasing'
    ],
    capabilityCoverage: {
      marketResearch: 'NHIMA provider audits, mining-sector private hospital studies, and distributor scans.',
      regulatoryIntelligence: 'ZAMRA registration procedures and SADC regional harmonisation (ZAZIBONA).',
      marketEntrySupport: 'Distributor appointment and ZAMMSA tender support.',
      localAssociateNetwork: 'Lusaka-based health economists and researchers.',
      trainingDelivery: 'Corporate strategy and applied AI workshops.'
    },
    keySectors: ['Pharmaceuticals', 'Mining Healthcare', 'Consumables', 'Agrochemicals'],
    typicalQuestions: [
      'How can a medical supplier leverage the ZAZIBONA collaborative regulatory procedure?',
      'What are the procurement requirements for copperbelt private hospital networks?'
    ],
    engagementModels: ['Market Entry Assessment', 'ZAZIBONA Regulatory Support', 'AI Readiness Programme']
  }
];

export const PROBLEM_OUTCOME_SCENARIOS: ProblemOutcomeScenario[] = [
  {
    id: 'market-entry',
    title: 'We want to enter an African market with a specialised therapeutic portfolio.',
    category: 'Market Entry & Commercial Strategy',
    clientType: 'Global / Regional Pharmaceutical Manufacturer',
    theChallenge: 'A multinational specialty pharma company needs to launch an oncology & autoimmune line across 4 African markets but lacks granular epidemiology, pricing transparency, and distributor credibility data.',
    whatMindCraftInvestigates: [
      'Local disease burden, diagnosed patient pools, and hospital referral flows',
      'Private vs public reimbursement and out-of-pocket price elasticity',
      'Distributor cold-chain capabilities, financial strength, and compliance records',
      'Regulatory approval timelines, local testing rules, and fast-track pathways'
    ],
    dataRequired: [
      'Primary interviews with 60+ oncologists & key hospital pharmacists',
      'Historical tender award databases & private hospital pricing indices',
      'National health ministry drug registries and regulatory gazettes',
      'Distributor audited balance sheets and warehouse inspection logs'
    ],
    analysisPerformed: [
      'Price sensitivity waterfall modelling across private vs public sectors',
      'Distributor capability multi-criteria scoring matrix',
      'Regulatory pathway critical-path timeline mapping (including EAC / ZAZIBONA options)',
      '5-year revenue and market-penetration financial forecast'
    ],
    strategicQuestions: [
      'Should we appoint one master distributor or separate hospital specialty partners?',
      'How do we set pricing to avoid parallel re-export while remaining accessible?',
      'Which public institutions will pilot access programmes with donor co-funding?'
    ],
    recommendedIntervention: 'Formulate a phased entry strategy starting with flagship private oncology centres, followed by a negotiated public access programme backed by a tiered distributor governance model.',
    technologyAiLayer: 'Deploy an automated Pan-African Market Pricing & Competitor Scraping Monitor to alert commercial teams of gray-market price differentials.',
    peopleTrainingLayer: 'Deliver applied AI training for regional medical science liaisons (MSLs) on KOL mapping and clinical trial data synthesis.',
    expectedOutputs: [
      'Comprehensive Market Entry Blueprint & 5-Year Financial Model',
      'Distributor Qualification & Due Diligence Dossier',
      'Regulatory Filing Roadmap with Country-by-Country Dossier Checklists'
    ],
    successMetrics: [
      'Product registered 4 months ahead of industry average timeline',
      'Secured 100% of target top-tier private hospital formulary listings',
      'Zero compliance or cold-chain breaches during initial launch phase'
    ]
  },
  {
    id: 'competitive-intelligence',
    title: 'We need to understand our competitive landscape and defend against generic erosion.',
    category: 'Competitive Intelligence & Brand Strategy',
    clientType: 'Pharmaceutical Brand Leader',
    theChallenge: 'A leading cardiovascular brand is facing impending patent expiry and aggressive penetration by unbranded generic imports across retail pharmacy chains.',
    whatMindCraftInvestigates: [
      'Retail pharmacy substitution rates and pharmacist incentive schemes',
      'Physician prescribing loyalty factors and patient brand-switching triggers',
      'Generic manufacturer pipeline submissions at national regulatory authorities',
      'Price elasticity and bundle discounting across retail pharmacy chains'
    ],
    dataRequired: [
      'Mystery shopping & prescription audits across 180 community pharmacies',
      'Survey of 80 cardiologists and internal medicine specialists',
      'Customs import manifest data and active pharmaceutical ingredient (API) shipment trends',
      'Wholesaler rebate and credit-term benchmarking data'
    ],
    analysisPerformed: [
      'Brand equity vs price differential trade-off analysis',
      'Pharmacist margin comparison modelling between originators and generics',
      'Competitor supply chain vulnerability and stock-out probability mapping'
    ],
    strategicQuestions: [
      'Should we launch an authorized generic or maintain premium positioning?',
      'Can we introduce loyalty/patient support programmes to lock in chronic prescriptions?',
      'How can we incentivize pharmacists without violating ethical guidelines?'
    ],
    recommendedIntervention: 'Launch a dual-brand defense: retain the originator for specialist prescriptions while introducing a localised second-brand for high-volume retail chains, supported by a digital patient adherence programme.',
    technologyAiLayer: 'Custom AI predictive model tracking retail pharmacy re-order patterns and flagging at-risk accounts prior to generic substitution.',
    peopleTrainingLayer: 'Upskilling commercial sales representatives in consultative selling and digital CRM territory intelligence.',
    expectedOutputs: [
      'Competitive Vulnerability Assessment & Defend-the-Core Action Plan',
      'Retail Pharmacist Incentive & Education Architecture',
      'Automated Retail Competitor Price Tracker'
    ],
    successMetrics: [
      'Retained 72% volume share 12 months post-generic launch',
      'Grew direct-to-patient adherence programme enrolment by 40%',
      'Maintained gross operating margin above 58%'
    ]
  },
  {
    id: 'ai-readiness',
    title: 'We want to assess our AI readiness and build an enterprise roadmap.',
    category: 'Digital & AI Transformation',
    clientType: 'Regional Hospital Group / Enterprise Bank',
    theChallenge: 'Executive leadership wants to leverage AI to modernise operations but is overwhelmed by vendor hype, disjointed pilot projects, and severe internal data silos.',
    whatMindCraftInvestigates: [
      'Data architecture, cleanliness, integration, and security governance',
      'Executive & workforce digital literacy, cultural openness, and fear of displacement',
      'High-value operational bottlenecks (e.g. claims adjudication, scheduling, customer queries)',
      'Regulatory compliance requirements (patient privacy, GDPR, local data protection acts)'
    ],
    dataRequired: [
      'Organization-wide survey across 400+ employees measuring AI literacy and tool usage',
      'Technical architecture audit of EHR, CRM, ERP, and data warehouse instances',
      'Review of existing IT vendor contracts and software licensing costs',
      'Historical process cycle times and error logs for priority business functions'
    ],
    analysisPerformed: [
      '8-Dimension AI Maturity Diagnostic Matrix scoring (Strategy, People, Data, Tech, etc.)',
      'Use case ROI vs Implementation Complexity prioritisation quadrant',
      'Data readiness and privacy vulnerability risk assessment'
    ],
    strategicQuestions: [
      'Which 2-3 high-impact use cases will demonstrate early ROI to the board?',
      'How do we structure data governance to prevent sensitive IP or patient data leaks?',
      'What balance of internal capability building vs third-party SaaS is optimal?'
    ],
    recommendedIntervention: 'Establish an enterprise AI steering committee, build an integrated central data layer with strict role-based access, and execute 3 quick-win automated workflow pilots.',
    technologyAiLayer: 'Implement a secure, private enterprise AI gateway with centralised audit logging and strict data anonymization.',
    peopleTrainingLayer: 'Roll out executive briefings for C-suite leaders and a 4-week applied AI accelerator for functional department heads.',
    expectedOutputs: [
      'Comprehensive AI-Readiness Diagnostic Scorecard & Gap Analysis',
      'Prioritised 24-Month Enterprise AI Transformation Roadmap',
      'Enterprise AI Governance Policy & Responsible Use Guidelines'
    ],
    successMetrics: [
      '3 quick-win AI workflows deployed within 90 days with positive ROI',
      'Zero security or privacy incidents across pilot deployments',
      'Workforce AI confidence score increased by 65%'
    ]
  },
  {
    id: 'regulatory-automation',
    title: 'We want to automate regulatory intelligence and compliance monitoring.',
    category: 'Life Sciences & AI Systems',
    clientType: 'Pan-African Regulatory Affairs Directorate',
    theChallenge: 'A regulatory affairs team managing 200+ SKU registrations across 14 African countries struggles with manual tracking of fragmented guideline updates, inspection schedules, and renewal deadlines.',
    whatMindCraftInvestigates: [
      'Workflow stages from dossier compilation to approval and post-market renewals',
      'Regulatory authority communication channels (websites, gazettes, circulars, email bulletins)',
      'Critical points of delay and document version mismatch risks',
      'Integration requirements with internal regulatory information management systems (RIMS)'
    ],
    dataRequired: [
      'Historical submission files, query response logs, and timeline variance records',
      'Public and semi-private regulatory announcement feeds across 14 health authorities',
      'Internal standard operating procedures (SOPs) for regulatory dossier submissions'
    ],
    analysisPerformed: [
      'Regulatory change-frequency and impact categorization modelling',
      'Workflow bottleneck analysis highlighting avoidable submission delays',
      'Document parsing accuracy benchmarks for machine-assisted dossier extraction'
    ],
    strategicQuestions: [
      'How do we ensure automated scraping does not miss unannounced policy revisions?',
      'What human-in-the-loop validation checkpoints are essential for compliance integrity?',
      'Can we forecast approval timelines based on historical agency queue dynamics?'
    ],
    recommendedIntervention: 'Design a unified Regulatory Intelligence Operating System that ingests multi-country gazettes, standardizes guideline changes, and triggers proactive compliance tasks.',
    technologyAiLayer: 'Custom NLP agent that monitors 14 national health authority portals, extracts document changes, and maps impact to active company SKUs.',
    peopleTrainingLayer: 'Specialised training for regulatory officers on prompt-assisted dossier synthesis and automated query response drafting.',
    expectedOutputs: [
      'Interactive Multi-Country Regulatory Intelligence Dashboard',
      'Automated Compliance & Renewal Alert Pipeline',
      'Updated Regulatory SOPs incorporating AI-assisted document workflows'
    ],
    successMetrics: [
      'Zero missed renewal deadlines or non-compliance penalties',
      '80% reduction in time spent manually checking regulatory agency portals',
      'Turnaround time for health authority query responses reduced by 55%'
    ]
  },
  {
    id: 'practical-ai-training',
    title: 'Our teams need practical, applied AI capability for commercial execution.',
    category: 'AI Training & Capability Multiplication',
    clientType: 'Commercial Enterprise / FMCG / Agro-Industrial Firm',
    theChallenge: 'Sales, marketing, and operations teams have dabbled with generic consumer AI chatbots but lack structured workflows to turn AI into measurable daily productivity and commercial revenue.',
    whatMindCraftInvestigates: [
      'Daily repetitive tasks across field sales, market analysts, and marketing managers',
      'Tool adoption barriers (lack of enterprise licenses, prompt fatigue, fear of inaccuracies)',
      'High-potential workflows: territory planning, proposal generation, customer research synthesis',
      'Internal IT security policies and approved tool boundaries'
    ],
    dataRequired: [
      'Pre-training competency assessment across 120 commercial team members',
      'Task time-allocation logs across sales planning, reporting, and customer outreach',
      'Sample marketing briefs, sales scripts, and CRM customer interaction records'
    ],
    analysisPerformed: [
      'Commercial team productivity bottleneck mapping',
      'Function-specific prompt library & template readiness evaluation',
      'Pre- vs post-training capability matrix modelling'
    ],
    strategicQuestions: [
      'How do we avoid one-off workshop enthusiasm that fades within 2 weeks?',
      'What practical guardrails will prevent hallucinations in client-facing materials?',
      'Who are the natural internal champions capable of sustaining peer-to-peer coaching?'
    ],
    recommendedIntervention: 'Deliver a modular 6-week applied AI accelerator centered on real work tasks, supported by a certified "Train-the-Trainer" champion network and tailored prompt repositories.',
    technologyAiLayer: 'Provision of a secure enterprise prompt hub containing pre-validated prompts tailored to the company\'s specific product portfolio and market segments.',
    peopleTrainingLayer: 'Hands-on live workshops, weekly peer application sprints, and one-on-one coaching for internal AI champions.',
    expectedOutputs: [
      'Tailored Enterprise Commercial AI Prompt Library & Playbook',
      'Certified Cohort of 12 Internal AI Champions',
      'Individual AI Productivity Action Plans for all 120 participants'
    ],
    successMetrics: [
      'Average of 4.2 hours saved per week per sales representative on administrative prep',
      '100% of participants actively utilizing approved AI workflows in weekly territory planning',
      'Lead qualification turnaround time accelerated by 3x'
    ]
  },
  {
    id: 'commercial-intelligence',
    title: 'We need better commercial intelligence and territory sales optimisation.',
    category: 'Market Research & Analytics',
    clientType: 'Medical Device / Diagnostics Distributor',
    theChallenge: 'A regional medical device distributor has 40 sales representatives covering 800 hospital accounts but suffers from uneven territory productivity, blind spots in secondary cities, and unpredictable re-order cycles.',
    whatMindCraftInvestigates: [
      'Account potential scoring vs current sales penetration across public/private tiers',
      'Sales representative route planning, call frequencies, and detail effectiveness',
      'Hospital purchasing committee cycles and capital budget allocation schedules',
      'Competitor distributor presence and exclusive bundling arrangements'
    ],
    dataRequired: [
      '3-year historical transaction database across 800 hospital accounts',
      'GPS route logs and CRM activity data from 40 field sales reps',
      'Primary research with 50 hospital procurement heads and surgical suite directors'
    ],
    analysisPerformed: [
      'Territory workload and travel efficiency geospatial optimisation',
      'Account predictive lifetime value and churn probability modelling',
      'Sales representative detailing effectiveness and conversion analysis'
    ],
    strategicQuestions: [
      'How should territories be re-balanced to capture emerging secondary healthcare hubs?',
      'What leading indicators predict a hospital switching to a competitor consumable?',
      'How can we equip reps with real-time account intelligence on their mobile devices?'
    ],
    recommendedIntervention: 'Redesign the commercial territory model into 5 regional clusters, re-align incentive structures to account retention, and deploy an automated sales intelligence assistant.',
    technologyAiLayer: 'Mobile-friendly AI commercial intelligence assistant that generates customised pre-call briefs and predicts re-order dates for each hospital.',
    peopleTrainingLayer: 'Territory management workshops and consultative sales coaching for field representatives and area managers.',
    expectedOutputs: [
      'Geospatially Optimised Territory Allocation Master Model',
      'Hospital Account Prioritisation & Potential Index',
      'Mobile-Ready Field Sales Intelligence Playbook & Assistant'
    ],
    successMetrics: [
      '22% increase in sales rep call coverage in high-potential secondary cities',
      '31% reduction in hospital consumable stock-out churn',
      '18% overall revenue growth within 2 quarters of territory re-alignment'
    ]
  },
  {
    id: 'process-redesign',
    title: 'We need to redesign our core business processes for scale and compliance.',
    category: 'Process Improvement & Systems Design',
    clientType: 'Rapidly Growing Agrochemical / Chemical Distributor',
    theChallenge: 'An agrochemical importer experiencing 40% annual growth is plagued by manual warehouse bottlenecks, inventory discrepancies, and delays in regulatory compliance filings.',
    whatMindCraftInvestigates: [
      'End-to-end supply chain workflows from port customs clearance to farm-gate delivery',
      'Standard operating procedures (SOPs) across quality control, storage, and dispatch',
      'ERP system utilisation gaps and manual spreadsheet workarounds',
      'Hazardous material storage and environmental regulatory compliance standards'
    ],
    dataRequired: [
      'Process cycle time studies and order fulfillment error logs',
      'Interviews with warehouse managers, logistics coordinators, and customs clearing agents',
      'ERP transaction audit logs and inventory reconciliation reports'
    ],
    analysisPerformed: [
      'Value-stream mapping identifying non-value-add delays and handoff bottlenecks',
      'Root-cause analysis of order fulfillment errors and stock shrinkage',
      'Compliance vulnerability audit against national pesticide control board regulations'
    ],
    strategicQuestions: [
      'Which processes should be standardised into formal digital SOPs immediately?',
      'How do we eliminate shadow IT spreadsheets without disrupting daily operations?',
      'What automated approval gates will ensure 100% regulatory compliance?'
    ],
    recommendedIntervention: 'Complete business process re-engineering across procurement, warehousing, and dispatch, paired with updated digital SOPs and automated inventory audit gates.',
    technologyAiLayer: 'Intelligent document extraction system for automated import bill of lading, customs entry, and batch certificate verification.',
    peopleTrainingLayer: 'SOP compliance workshops and digital ERP workflow training for logistics, operations, and quality teams.',
    expectedOutputs: [
      'End-to-End Business Process Master Blueprint & RACI Matrix',
      'Standardised Operational SOP Suite with Video & Visual Job Aids',
      'Inventory Optimisation & Warehouse Workflow Architecture'
    ],
    successMetrics: [
      'Order fulfillment turnaround time reduced from 5 days to 24 hours',
      'Inventory reconciliation accuracy improved to 99.6%',
      '100% audit pass rate with national environmental and pesticide boards'
    ]
  },
  {
    id: 'enterprise-ai-solution',
    title: 'We want to build a custom enterprise AI solution with robust governance.',
    category: 'AI Enterprise Solutions & Engineering',
    clientType: 'Commercial Bank / Pan-African Insurance Major',
    theChallenge: 'A financial institution needs an automated claims and loan verification engine that processes unstructured documents and flags fraud while complying with strict central bank risk and data privacy rules.',
    whatMindCraftInvestigates: [
      'Document types (bank statements, identity documents, tax forms, medical claims)',
      'Existing fraud patterns and historical false-positive rates',
      'Regulatory compliance guidelines (data sovereignty, explainability, non-discrimination)',
      'Integration points with core banking/insurance ledger systems'
    ],
    dataRequired: [
      '50,000+ anonymized historical application and claim documents',
      'Fraud investigation case logs and outcome classifications',
      'Security architecture specifications and penetration test reports'
    ],
    analysisPerformed: [
      'Document classification and extraction precision/recall benchmarking',
      'Model explainability (SHAP/LIME) testing to ensure regulatory auditability',
      'Latency and concurrent throughput load testing under peak transaction volumes'
    ],
    strategicQuestions: [
      'How do we ensure model decisions can be audited and explained to banking regulators?',
      'What threshold of confidence should trigger mandatory human underwriter review?',
      'How is personal identifying information (PII) masked during model inference?'
    ],
    recommendedIntervention: 'Architect and deploy a governed enterprise document intelligence pipeline with automated confidence scoring and human-in-the-loop verification queues.',
    technologyAiLayer: 'Custom multi-modal LLM extraction pipeline with built-in PII redaction, confidence scoring, and cryptographic audit trails.',
    peopleTrainingLayer: 'Underwriter and claims officer training on AI exception handling, bias detection, and human override protocols.',
    expectedOutputs: [
      'Production-Ready Enterprise Document & Fraud Intelligence Engine',
      'Model Governance, Bias Audit & Explainability Dossier for Regulators',
      'Underwriter Operational Console & User Documentation'
    ],
    successMetrics: [
      'Claims verification turnaround accelerated by 75%',
      'Fraud detection accuracy improved by 28% while reducing false positives',
      '100% compliance with central bank risk management and data sovereignty standards'
    ]
  }
];

export const RESEARCH_WORKSPACE_SAMPLE: ResearchWorkspaceItem = {
  id: 'rw-oncology-pan-africa',
  title: 'Pan-African Oncology Market Entry & Access Intelligence',
  clientContext: 'Global Specialty Biopharmaceutical Corporation',
  objective: 'Evaluate commercial feasibility, reimbursement pathways, and clinical stakeholder readiness for next-generation targeted therapies across Kenya, Nigeria, South Africa, and Egypt.',
  targetMarkets: ['Kenya', 'Nigeria', 'South Africa', 'Egypt'],
  primaryEvidence: [
    {
      source: 'Key Medical Oncologist In-Depth Interviews (KOLs)',
      sampleSize: 'n=48 Board-Certified Oncologists across 16 Tertiary Centres',
      keySignal: 'High diagnostic willingness but severe access barriers due to lack of local next-generation sequencing (NGS) facilities and out-of-pocket patient cost constraints.',
      confidence: 'Very High'
    },
    {
      source: 'Hospital Formulary & Procurement Heads Audit',
      sampleSize: 'n=24 Major Private & Public Oncology Hospital Pharmacy Directors',
      keySignal: 'Private centres list within 60-90 days if manufacturer provides patient-assistance co-pay support; public tenders require minimum 24-month local stability data.',
      confidence: 'High'
    },
    {
      source: 'Payer & Medical Scheme Reimbursement Panel',
      sampleSize: 'n=14 Senior Medical Advisors (Private Insurers & Public Schemes)',
      keySignal: 'South African private schemes require explicit health-economic QALY models; Kenya SHA transitioning towards bundled oncology case rates.',
      confidence: 'High'
    }
  ],
  secondaryEvidence: [
    {
      source: 'WHO IARC GLOBOCAN & National Cancer Registries',
      datasetType: 'Epidemiological Incidence & Mortality Modelling',
      keyFinding: 'Breast, cervical, and prostate cancers represent 62% of newly diagnosed solid tumors, with 70% diagnosed at Stage III or IV.'
    },
    {
      source: 'Pan-African Regulatory Authority Databases',
      datasetType: 'Registration Timelines & Fast-Track Pathways',
      keyFinding: 'EAC joint regulatory procedure reduces approval time to 7 months in East Africa; SAHPRA priority review applicable for unmet oncology indications.'
    },
    {
      source: 'Customs & Port Logistics Import Scans',
      datasetType: 'Cold-Chain Biologics Import Logistics',
      keyFinding: 'Validated -20°C to -80°C cold-chain infrastructure is concentrated at Nairobi and Johannesburg international airport hubs.'
    }
  ],
  strategicFindings: [
    {
      trend: 'Shift toward public-private partnership (PPP) center-of-excellence models in Kenya and Egypt.',
      impact: 'Allows manufacturers to secure guaranteed patient volumes in exchange for subsidized equipment and clinician training.',
      riskLevel: 'Moderate'
    },
    {
      trend: 'Rapid expansion of private hospital oncology chains (e.g. CarePoint, Evercare, Netcare).',
      impact: 'Creates an immediate, high-margin private tier representing 25% of eligible patient pool.',
      riskLevel: 'Low'
    },
    {
      trend: 'Currency depreciation impacting imported dollar-denominated specialty medicines.',
      impact: 'Requires local-currency capped pricing agreements or tiered volume rebates to avoid patient treatment discontinuation.',
      riskLevel: 'High'
    }
  ],
  recommendations: [
    {
      action: 'Implement a tiered commercial model: establish direct supply to top-10 private cancer centres while negotiating national PPP access in Kenya and South Africa.',
      priority: 'Immediate',
      evidenceStrength: 94
    },
    {
      action: 'Co-sponsor molecular pathology testing hubs with leading reference laboratories to eliminate diagnostic bottlenecks.',
      priority: 'Immediate',
      evidenceStrength: 88
    },
    {
      action: 'Deploy an AI-powered Patient Assistance & Adherence Support mobile platform to maintain treatment completion rates.',
      priority: 'Medium-term',
      evidenceStrength: 85
    }
  ]
};

export const AI_SOLUTIONS_CATALOG: AISolutionItem[] = [
  {
    id: 'sol-pv-agent',
    title: 'AI Pharmacovigilance & Adverse Event Triage',
    category: 'Life Sciences Core',
    description: 'Automated multi-channel adverse event screening, literature parsing, and standard E2B(R3) regulatory format extraction.',
    businessProblem: 'Pharmaceutical safety teams are overwhelmed by unstructured clinical notes, local medical journals, and social mentions, risking non-compliance with mandatory reporting deadlines.',
    dataInputs: [
      'Local biomedical literature databases & clinical registries',
      'Medical information inquiries & call centre transcripts',
      'Social media mentions & patient forum posts',
      'Spontaneous adverse event reporting forms'
    ],
    aiAnalyticsLayer: 'Fine-tuned medical BioBERT/LLM extraction model with entity recognition for MedDRA preferred terms and causality indicators.',
    workflowIntegration: 'Direct API integration with enterprise Safety Databases (Argus, ArisGlobal) and automated flagging of expedited reporting cases.',
    humanInteraction: 'Safety officers review AI-generated case summaries, verify causality scores, and approve submissions via a single-click verification portal.',
    governanceSafeguards: 'Complete audit logging, zero training on client private data, deterministic validation checks, and 100% human-in-the-loop mandatory sign-off.',
    projectedOutcome: '70% reduction in adverse event intake processing time with zero missed regulatory submission deadlines.',
    status: 'Production Architecture Pattern'
  },
  {
    id: 'sol-reg-monitor',
    title: 'Pan-African Regulatory Intelligence & Compliance Monitor',
    category: 'Life Sciences Core',
    description: 'Continuous automated tracking of guideline updates, gazette notices, and submission requirements across 20+ African regulatory bodies.',
    businessProblem: 'Regulatory affairs directors struggle with fragmented, unannounced policy changes across national medicines authorities, causing unexpected registration delays.',
    dataInputs: [
      'National health ministry & medicine regulatory authority websites',
      'Official government gazettes & regulatory circulars',
      'Regional harmonisation bulletins (EAC, ECOWAS, SADC/ZAZIBONA, AMA)',
      'Industry association policy briefs'
    ],
    aiAnalyticsLayer: 'Intelligent multi-source scraping agents with document diffing, semantic classification, and impact-scoring algorithms.',
    workflowIntegration: 'Enterprise Slack/Teams alert notifications, weekly executive digest emails, and automated updates to internal Regulatory Information Management Systems (RIMS).',
    humanInteraction: 'Regulatory specialists receive prioritised impact summaries and verify actionable filing requirements.',
    governanceSafeguards: 'Cryptographic source verification, timestamped change tracking, and fallback manual verification queues.',
    projectedOutcome: 'Instant awareness of regulatory policy shifts, eliminating surprise compliance holds and accelerating multi-country submission planning.',
    status: 'Production Architecture Pattern'
  },
  {
    id: 'sol-kol-graph',
    title: 'AI Key Opinion Leader (KOL) Discovery & Influence Graph',
    category: 'Life Sciences Core',
    description: 'Dynamic mapping of clinical specialists, clinical trial investigators, and academic leaders across African and global healthcare ecosystems.',
    businessProblem: 'Commercial and medical affairs teams rely on outdated, anecdotal lists of influential physicians, missing emerging clinical leaders in regional medical centres.',
    dataInputs: [
      'Peer-reviewed biomedical publications (PubMed, African Journals Online)',
      'Clinical trial registries & conference abstract proceedings',
      'Medical specialty society leadership directories',
      'Hospital department chair listings & clinical guidelines panels'
    ],
    aiAnalyticsLayer: 'Graph neural networks and entity resolution models linking co-authorships, clinical trial sponsorships, and therapeutic area influence scores.',
    workflowIntegration: 'Interactive 3D network visualisation console embedded in commercial CRM systems (Veeva, Salesforce).',
    humanInteraction: 'Medical Science Liaisons (MSLs) query the network to plan advisory boards, clinical studies, and speaker symposia.',
    governanceSafeguards: 'Strict reliance on public and consented professional data; adherence to healthcare compliance and ethical engagement standards.',
    projectedOutcome: '3x expansion in identified clinical influencers and 45% improvement in advisory board engagement quality.',
    status: 'Demonstration Prototype'
  },
  {
    id: 'sol-commercial-assistant',
    title: 'Commercial Field-Force AI Intelligence Assistant',
    category: 'Conversational & Engagement',
    description: 'Voice- and text-enabled mobile AI copilot providing sales representatives with account briefings, objection handling, and territory analytics.',
    businessProblem: 'Field sales reps spend hours sifting through complex CRM tables and product monographs, leading to unprepared hospital visits and missed commercial opportunities.',
    dataInputs: [
      'Enterprise CRM account histories & recent prescription trends',
      'Approved product monographs, clinical trial data, and objection playbooks',
      'Hospital formulary status and tender contract details',
      'Competitor product comparison matrices'
    ],
    aiAnalyticsLayer: 'Retrieval-Augmented Generation (RAG) agent operating strictly over approved enterprise compliance content with localised language understanding.',
    workflowIntegration: 'WhatsApp Enterprise / Mobile Web app integrated with enterprise single sign-on (SSO).',
    humanInteraction: 'Sales reps ask conversational questions (e.g. "Brief me on Dr. Ochieng\'s prescribing preferences and our key clinical endpoints vs Brand X") before entering meetings.',
    governanceSafeguards: 'Strict guardrails prohibiting medical claims outside approved product labels; automatic redaction of confidential pricing.',
    projectedOutcome: 'Saves 4 hours per rep per week in administrative prep; increases detailing effectiveness by 35%.',
    status: 'Production Architecture Pattern'
  },
  {
    id: 'sol-market-access-analytics',
    title: 'Market Access & Pricing Optimisation Analytics',
    category: 'Intelligence Platforms',
    description: 'Predictive modelling of payer reimbursement thresholds, out-of-pocket affordability curves, and tender bid pricing optimisation.',
    businessProblem: 'Market access directors face extreme pricing pressure and lack predictive models to evaluate the volume-price trade-off across private insurance and public tenders.',
    dataInputs: [
      'Historical tender award outcomes and winning bid prices',
      'Household income distribution and health expenditure statistics by country',
      'Medical insurance scheme coverage benefits and formulary co-pay rules',
      'Competitor international reference pricing databases'
    ],
    aiAnalyticsLayer: 'Monte Carlo price elasticity simulation, game-theoretic tender bidding models, and multi-objective optimisation algorithms.',
    workflowIntegration: 'Executive decision dashboard connected to commercial finance and supply planning systems.',
    humanInteraction: 'Market access executives run "what-if" pricing scenarios to test margin and volume impacts prior to government negotiations.',
    governanceSafeguards: 'Role-based access control, cryptographic data encryption at rest and in transit, and full audit logging of financial modelling.',
    projectedOutcome: 'Optimised gross margins by 4.5% while increasing public tender win rates by 22%.',
    status: 'Illustrative Blueprint'
  },
  {
    id: 'sol-doc-automation',
    title: 'Intelligent Document Processing & Regulatory Dossier Parser',
    category: 'Process Automation',
    description: 'Automated extraction, validation, and cross-referencing of complex technical documents (CTD modules, certificates of analysis, tender bids).',
    businessProblem: 'Manual review of 500-page regulatory dossiers and quality certificates results in human fatigue, transcription errors, and weeks of delay.',
    dataInputs: [
      'Common Technical Document (CTD) electronic PDF dossiers',
      'Certificates of Analysis (CoA) and Good Manufacturing Practice (GMP) certificates',
      'Import/Export shipping manifests and customs documentation',
      'Standard Operating Procedure manuals'
    ],
    aiAnalyticsLayer: 'Multi-modal vision-language models capable of parsing complex tabular data, scientific chemical structures, and stamps/signatures.',
    workflowIntegration: 'Automated ingestion pipelines connecting document repositories (SharePoint, Veeva Vault) with structured ERP databases.',
    humanInteraction: 'Quality assurance and regulatory reviewers review side-by-side discrepancy highlights and approve automated extractions.',
    governanceSafeguards: 'Deterministic verification of numerical batches, zero hallucination tolerance thresholds, and detailed extraction confidence scores.',
    projectedOutcome: '85% acceleration in document intake review with 99.8% extraction accuracy.',
    status: 'Production Architecture Pattern'
  }
];

export const TRAINING_SIMULATION_STEPS: TrainingCurriculumStep[] = [
  {
    step: 1,
    title: 'AI Fundamentals & Enterprise Strategic Literacy',
    duration: 'Week 1 · 4 Hours',
    learningObjectives: [
      'Understand core AI/ML vs Generative AI mechanics and capabilities',
      'Identify the difference between consumer chatbots and secure enterprise AI systems',
      'Demystify common AI myths, hallucinations, and capabilities'
    ],
    appliedExercises: [
      'Interactive audit of current personal vs team digital tool usage',
      'Identifying high-friction weekly tasks suitable for AI assistance'
    ],
    practicalDeliverables: ['Personal Task-to-AI Feasibility Matrix'],
    championMilestone: 'Baseline AI literacy assessment completed by 100% of cohort.'
  },
  {
    step: 2,
    title: 'Research Acceleration & Market Data Synthesis',
    duration: 'Week 1-2 · 6 Hours',
    learningObjectives: [
      'Master structured prompt engineering for rapid literature and report synthesis',
      'Extract critical signals from dense 100-page market research and epidemiological reports',
      'Validate AI outputs against primary source citations'
    ],
    appliedExercises: [
      'Simulated extraction of therapeutic market sizing from raw public health papers',
      'Comparative benchmarking of 3 competitor product profiles using AI synthesis'
    ],
    practicalDeliverables: ['Executive Market Briefing Template & Verified Prompt Chain'],
    championMilestone: 'Participants produce a decision-ready competitor briefing in under 30 minutes.'
  },
  {
    step: 3,
    title: 'Competitive Intelligence & Pipeline Monitoring Workflows',
    duration: 'Week 2 · 6 Hours',
    learningObjectives: [
      'Build repeatable AI workflows to track competitor clinical trials and patent filings',
      'Structure unstructured market rumors and field feedback into standardised intelligence logs',
      'Formulate strategic counter-messaging playbooks'
    ],
    appliedExercises: [
      'Setting up automated AI alerts for national drug authority approval gazettes',
      'Conducting a structured SWOT analysis against a new generic market entrant'
    ],
    practicalDeliverables: ['Competitive War-Room Prompt Playbook'],
    championMilestone: 'Automated intelligence workflow tested against real competitor scenario.'
  },
  {
    step: 4,
    title: 'Territory Planning & Customer Account Prioritisation',
    duration: 'Week 3 · 8 Hours',
    learningObjectives: [
      'Use AI to segment hospital accounts based on potential, access barriers, and historical volume',
      'Optimise sales representative weekly call routes and contact frequency',
      'Draft customised multi-stakeholder engagement strategies (KOL vs Pharmacist vs Hospital CFO)'
    ],
    appliedExercises: [
      'Uploading mock hospital account data and generating optimal 30-day territory itineraries',
      'Creating account-specific pre-call strategic briefings in seconds'
    ],
    practicalDeliverables: ['Optimised Territory Account Matrix & Pre-Call AI Briefing Bot'],
    championMilestone: 'Commercial reps generate customised pre-call briefings for their top 20 accounts.'
  },
  {
    step: 5,
    title: 'CRM Intelligence & Consultative Detailing Enablement',
    duration: 'Week 3-4 · 6 Hours',
    learningObjectives: [
      'Integrate AI assistance into CRM voice notes and meeting summary generation',
      'Transform complex clinical endpoint studies into conversational detailing scripts',
      'Draft tailored physician follow-up emails and scientific educational resources'
    ],
    appliedExercises: [
      'Role-playing complex physician objection handling with an AI clinical persona',
      'Generating compliant post-call CRM summaries from brief voice memos'
    ],
    practicalDeliverables: ['Standardised CRM Post-Call Logging Assistant'],
    championMilestone: 'Rep CRM documentation time reduced from 45 minutes to 8 minutes daily.'
  },
  {
    step: 6,
    title: 'Advanced Prompt Engineering & Multi-Modal Workflows',
    duration: 'Week 4 · 8 Hours',
    learningObjectives: [
      'Master Few-Shot Prompting, Chain-of-Thought reasoning, and system instruction design',
      'Extract data from scientific charts, scanned tables, and product packaging images',
      'Build custom GPTs/assistants for departmental knowledge repositories'
    ],
    appliedExercises: [
      'Building a departmental custom assistant loaded with company product monographs',
      'Parsing complex multi-page laboratory price lists into clean spreadsheet tables'
    ],
    practicalDeliverables: ['Departmental Custom Knowledge Assistant Prototype'],
    championMilestone: 'Each department launches one operational custom AI assistant.'
  },
  {
    step: 7,
    title: 'Responsible AI, Data Privacy & Regulatory Guardrails',
    duration: 'Week 5 · 6 Hours',
    learningObjectives: [
      'Understand national Data Protection Acts (Kenya DPA, Nigeria NDPR, SA POPIA, GDPR)',
      'Enforce strict zero-leakage protocols for patient and proprietary commercial data',
      'Identify and remediate AI bias, hallucinations, and copyright/compliance boundaries'
    ],
    appliedExercises: [
      'Red-teaming an AI prompt to test for data leakage vulnerabilities',
      'Drafting function-level Responsible AI Guidelines and SOP checkpoints'
    ],
    practicalDeliverables: ['Departmental Responsible AI Checklist & Compliance Oath'],
    championMilestone: '100% pass score on enterprise Responsible AI compliance exam.'
  },
  {
    step: 8,
    title: 'Applied Workflow Integration & Process Automation',
    duration: 'Week 5-6 · 8 Hours',
    learningObjectives: [
      'Connect AI models into everyday software (Excel/Sheets, Outlook/Gmail, Slack/Teams)',
      'Automate recurring weekly reporting decks and executive KPI summaries',
      'Streamline cross-functional handoffs between sales, medical affairs, and regulatory'
    ],
    appliedExercises: [
      'Building an end-to-end automated monthly commercial performance report generator',
      'Automating the drafting of tender bid response compliance matrices'
    ],
    practicalDeliverables: ['Live Automated Weekly Reporting Pipeline'],
    championMilestone: 'Commercial reporting cycle compressed from 3 days to 2 hours.'
  },
  {
    step: 9,
    title: 'Capstone Assessment & Business Impact Measurement',
    duration: 'Week 6 · 4 Hours',
    learningObjectives: [
      'Present live capstone AI productivity projects to executive leadership',
      'Calculate validated hours saved, turnaround acceleration, and commercial impact',
      'Establish continuous learning benchmarks for team members'
    ],
    appliedExercises: [
      'Executive boardroom pitch of department-built AI workflows',
      'Peer review and scoring of AI automation capstones'
    ],
    practicalDeliverables: ['Departmental AI Impact & ROI Portfolio Presentation'],
    championMilestone: 'Executive sign-off and recognition of top commercial AI capstones.'
  },
  {
    step: 10,
    title: 'Internal Champion Certification & Train-the-Trainer Enablement',
    duration: 'Ongoing · Retainer',
    learningObjectives: [
      'Certify high-performing team members as official MindCraft AI Champions',
      'Equip champions with coaching frameworks to onboard new hires and peers',
      'Maintain quarterly refreshes as enterprise AI models evolve'
    ],
    appliedExercises: [
      'Conducting peer coaching clinics and troubleshooting session simulations',
      'Managing the internal enterprise prompt library and quarterly audits'
    ],
    practicalDeliverables: ['Certified AI Champion Credentials & Peer Coaching Toolkit'],
    championMilestone: 'Self-sustaining internal AI Centre of Excellence established.'
  }
];

export const INSIGHTS_REPOSITORY: InsightArticle[] = [
  {
    id: 'ins-1',
    title: 'The Pan-African Life Sciences Convergence: Harmonising Regulation, Supply Chains, and AI',
    category: 'Life Sciences',
    readTime: '6 min read',
    date: 'February 2026',
    author: 'MindCraft Life Sciences Practice',
    summary: 'How the operationalization of the African Medicines Agency (AMA) in Kigali alongside national regulatory fast-tracks is transforming pharmaceutical market entry from fragmented hurdles into predictable regional corridors.',
    content: [
      'For decades, multinational pharmaceutical manufacturers treated Africa as 54 isolated, high-friction regulatory islands. The average lag between global regulatory approval (FDA/EMA) and commercial availability across African markets routinely exceeded 4 to 7 years.',
      'Today, three converging forces are rewriting this reality: the operationalization of the African Medicines Agency (AMA) headquartered in Kigali, the expansion of regional work-sharing initiatives (such as EAC and ZAZIBONA), and the application of automated regulatory intelligence systems.',
      'Organisations that embrace structured regulatory tracking and harmonise their submission dossiers across regional economic communities are achieving 40% faster time-to-market while slashing redundant local testing expenditure.'
    ],
    keyTakeaways: [
      'Regional work-sharing (EAC, ZAZIBONA) cuts registration timelines by up to 50%.',
      'Automated guideline tracking eliminates sudden compliance stoppages.',
      'Dual-tier private vs public market access strategies maximise revenue without sacrificing public health impact.'
    ],
    isFeatured: true
  },
  {
    id: 'ins-2',
    title: 'Beyond the Chatbot: Operationalising Enterprise AI in African Financial Services and Healthcare',
    category: 'AI & Transformation',
    readTime: '8 min read',
    date: 'January 2026',
    author: 'MindCraft Enterprise AI Directorate',
    summary: 'Why 85% of corporate AI pilots fail to reach production — and the architectural blueprint required to bridge data governance, model safety, and organisational adoption.',
    content: [
      'Across Nairobi, Johannesburg, Lagos, and Cairo, boardrooms are enthusiastic about artificial intelligence. Yet behind the headlines lies a pervasive frustration: hundreds of proof-of-concepts, thousands of individual ChatGPT subscriptions, but virtually zero measurable impact on core balance sheets.',
      'The gap is not algorithmic; it is architectural and human. True enterprise AI requires a robust data readiness layer, strict role-based access control to prevent proprietary IP leakage, deterministic validation checks, and intensive workforce enablement.',
      'MindCraft’s "Strategy → Data → Build → Training → Governance" lifecycle provides the necessary discipline to transform isolated experiments into governed production infrastructure.'
    ],
    keyTakeaways: [
      'AI strategy without clean, governed enterprise data produces expensive hallucinations.',
      'Workforce enablement must match software deployment to overcome adoption friction.',
      'Regulated industries require auditable, deterministic human-in-the-loop validation.'
    ],
    isFeatured: true
  },
  {
    id: 'ins-3',
    title: 'Navigating Africa’s Out-of-Pocket Healthcare Reality: Commercial Strategies for Specialty Devices and Pharma',
    category: 'Africa Intelligence',
    readTime: '7 min read',
    date: 'February 2026',
    author: 'MindCraft Market Research Team',
    summary: 'An empirical analysis of patient affordability, private insurance penetration, and innovative tiered pricing models across East and West African commercial centres.',
    content: [
      'In major African economies, out-of-pocket health expenditure still accounts for 40% to 70% of total healthcare spending, despite commendable public health insurance expansions like Kenya’s Social Health Authority and Ghana’s NHIS.',
      'For medical device and specialty pharmaceutical companies, standard Western pricing models lead either to prohibitive patient attrition or brand-eroding gray market arbitrage.',
      'Through primary physician surveys and payer price-elasticity modelling, MindCraft demonstrates how tiered dual-branding, hospital patient-assistance co-pays, and localised packaging sizes preserve gross margins while expanding commercial volume.'
    ],
    keyTakeaways: [
      '70% of specialty healthcare transactions occur in private tier-1/tier-2 clinics.',
      'Right-sized packaging and procedure packs reduce clinic inventory wastage by 18%.',
      'Tiered dual-brand positioning protects premium brand equity while capturing high-volume tender tenders.'
    ],
    isFeatured: false
  },
  {
    id: 'ins-4',
    title: 'Responsible AI in Regulated Verticals: Data Sovereignty, Ethics, and Auditable Governance',
    category: 'Responsible AI',
    readTime: '5 min read',
    date: 'January 2026',
    author: 'MindCraft AI Governance Council',
    summary: 'A practical framework for ensuring compliance with national Data Protection Acts while deploying high-performing machine learning and generative systems in pharmaceuticals and banking.',
    content: [
      'As African nations enact and enforce rigorous Data Protection Acts (including Kenya DPA 2019, Nigeria NDPR/NDPA, South Africa POPIA, and Egypt Data Protection Law), the era of unregulated data ingestion is firmly over.',
      'Enterprises adopting AI must establish clear data sovereignty boundaries: sensitive customer records, patient diagnostics, and proprietary financial ledgers must never be transmitted into open consumer model training pools.',
      'MindCraft embeds zero-data-retention guarantees, cryptographic anonymization, and explainable decision trees into every AI training programme and enterprise deployment.'
    ],
    keyTakeaways: [
      'Zero client data is ever used to train underlying public foundational models.',
      'All AI inferences operate within private tenant enclosures with strict encryption.',
      'Regulatory compliance requires explainable model outputs and continuous human oversight.'
    ],
    isFeatured: false
  }
];
