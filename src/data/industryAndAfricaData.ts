import {
  UniversalIndustry,
  AfricaRegionData,
  CountryDossier,
  ProblemCrossSection
} from '../types';

export const UNIVERSAL_INDUSTRIES: UniversalIndustry[] = [
  // ==========================================
  // CORE LIFE SCIENCES (6 SECTORS) - DEEP HERITAGE
  // ==========================================
  {
    id: 'pharmaceuticals',
    name: 'Pharmaceuticals',
    category: 'core-lifesciences',
    tier: 'core',
    tagline: 'Commercial intelligence, regulatory fluency, and market access across African & global markets.',
    description: 'MindCraft provides multinational and regional pharma manufacturers with deep clinical, commercial, and regulatory advisory.',
    heritageNote: 'Established Core Sector Heritage',
    designMetaphor: {
      theme: 'Scientific Intelligence & Regulatory Topology',
      accentColor: '#6366f1',
      icon: 'Pill',
      keyMetricType: 'Formulary Listing & Market Access Speed'
    },
    context: 'Navigating multi-tier distribution, disparate regulatory bodies (PPB, NAFDAC, SAHPRA, EDA), out-of-pocket payment models, and public reimbursement transitions.',
    keyQuestions: [
      'How should we price and position a new biologic across East, West, Central, North and Southern Africa?',
      'What are the real market shares of originator brands vs local generics across private retail chains?',
      'Which Key Opinion Leaders (KOLs) drive regional clinical guidelines and hospital formulary adoption?'
    ],
    researchAndIntelligence: [
      'Double-blind qualitative interviews with specialist physicians, hospital pharmacists, and procurement heads',
      'Retail pharmacy audit and price-elasticity benchmarking across capital and secondary cities',
      'KOL influence network mapping from clinical trials, publications, and medical society boards',
      'Pan-African regulatory intelligence tracking registration dossiers and fast-track pathways'
    ],
    consultingAndStrategy: [
      'Pan-African market access and dual-branding pricing strategy',
      'Commercial territory design and sales force effectiveness optimisation',
      'Local manufacturing feasibility and contract packaging advisory',
      'Public-private partnership (PPP) and national health scheme inclusion strategy'
    ],
    aiOpportunities: [
      'AI-assisted literature screening for adverse events and pharmacovigilance triage',
      'Regulatory change-detection agent monitoring gazettes and regional health agencies',
      'Territory sales intelligence copilot assisting medical representatives with pre-call planning',
      'Predictive tender demand modelling based on disease burden and public budget cycles'
    ],
    capabilityBuilding: [
      'Applied AI for Medical Affairs & Pharmacovigilance teams',
      'Field force digital literacy and CRM intelligence enablement',
      'Executive masterclasses on AI-assisted clinical data synthesis and market access'
    ],
    enterpriseSolutions: [
      'Pan-African Regulatory Submission & Guideline Intelligence Vault',
      'Automated Pharmacovigilance Literature Screening Engine',
      'Commercial Territory Intelligence & Formulary Penetration Hub'
    ],
    illustrativeEngagement: {
      title: 'Illustrative Capability: Pan-African Biologic Market Entry & Access Strategy',
      challenge: 'A global specialty pharmaceutical firm sought to launch an oncology therapy across 5 African markets facing distinct price-sensitivity thresholds and regulatory timelines.',
      investigation: 'Conducted 120+ clinical stakeholder interviews, evaluated public tender schedules, and audited private hospital formulary review cycles in Kenya, Nigeria, and South Africa.',
      strategicDecision: 'Prescribed a tiered dual-pack access model pairing private insurance premium coverage with government social health authority volume agreements.',
      aiLayer: 'Engineered an AI-driven competitor price-monitoring portal and hospital tender forecasting engine.',
      deliverables: [
        '5-Country Market Access & Pricing Dossier',
        'Hospital Formulary Protocol Toolkit',
        'AI Competitor Price & Tender Scraping Dashboard'
      ],
      outcomeFramework: [
        '38% acceleration in hospital formulary inclusion',
        'Maintained 42% gross margin while achieving public health access',
        'Zero regulatory compliance deviations in post-market surveillance'
      ]
    },
    sectorEcosystem: {
      market: 'Rapidly shifting toward chronic and non-communicable disease treatments alongside anti-infectives.',
      competitors: 'High competition between European/US originators and Indian/Chinese generic manufacturers.',
      customers: 'Clinicians, hospital pharmacy directors, state procurement agencies, and out-of-pocket patients.',
      regulators: 'National medicines regulatory authorities (NMRAs) moving toward continental AMA harmonisation.',
      operations: 'Cold-chain management, batch serialization, and anti-counterfeiting verification.',
      technology: 'Digital detailing, e-prescriptions, and AI-enabled pharmacovigilance.',
      people: 'Need for high-science medical science liaisons (MSLs) equipped with commercial data literacy.',
      aiOpportunities: 'Automated document processing for regulatory dossiers and predictive supply replenishment.'
    }
  },
  {
    id: 'medical-devices',
    name: 'Medical Devices',
    category: 'core-lifesciences',
    tier: 'core',
    tagline: 'Launch advisory, distributor qualification, and health economics across emerging healthcare systems.',
    description: 'Supporting global and regional medical device innovators to navigate procurement ecosystems, distributor partnerships, and clinical adoption.',
    heritageNote: 'Established Core Sector Heritage',
    designMetaphor: {
      theme: 'Biomedical Workflow & Value-Based Procurement',
      accentColor: '#0ea5e9',
      icon: 'Stethoscope',
      keyMetricType: 'Clinical Adoption Rate & Technical Uptime'
    },
    context: 'Device classification, variable import duties, distributor service capability gaps, and clinical stakeholder education across public and private hospitals.',
    keyQuestions: [
      'Which distribution partners possess genuine certified biomedical engineering and after-sales maintenance capacity?',
      'How can we prove the health-economic value of our device to risk-averse hospital procurement committees?',
      'What post-market clinical follow-up is necessary to maintain regional compliance?'
    ],
    researchAndIntelligence: [
      'Surgeon and biomedical technician workflow observation and device usability testing',
      'Distributor due-diligence audits covering cold-chain, warehousing, and technician certification',
      'Hospital purchasing committee decision flow and capital expenditure cycle mapping'
    ],
    consultingAndStrategy: [
      'Distributor network restructuring and service level agreement (SLA) design',
      'Value dossier creation for hospital CFOs and insurance pre-authorization committees',
      'Managed equipment services (MES) and pay-per-procedure commercial models'
    ],
    aiOpportunities: [
      'Predictive device telemetry for maintenance alerts and consumable replenishment triggers',
      'AI distributor performance scoring and compliance audit automation',
      'Automated medical device adverse incident classification and trend reporting'
    ],
    capabilityBuilding: [
      'Clinical sales teams training on consultative, health-economics-based selling',
      'Biomedical engineer digital maintenance tracking workshops'
    ],
    enterpriseSolutions: [
      'Device Installed Base & Maintenance Telemetry Portal',
      'Distributor Compliance & Clinical Education Knowledge Vault'
    ],
    illustrativeEngagement: {
      title: 'Illustrative Capability: Southern Africa Minimally Invasive Device Launch',
      challenge: 'A medical device manufacturer struggled with low surgeon adoption and distributor service latency across provincial hospitals.',
      investigation: 'Audited 18 distributor branches, surveyed 45 orthopedic surgeons, and analysed hospital operating theater utilisation logs.',
      strategicDecision: 'Shifted from transactional hardware sales to a bundled training + consumable subscription model with strict uptime SLAs.',
      aiLayer: 'Built a field telemetry logger tracking device cycles and generating automated service alerts.',
      deliverables: [
        'Distributor Network Capability Scoring Matrix',
        'Clinical Economic Value Proposition Dossier',
        'Field Service Telemetry & Maintenance Portal'
      ],
      outcomeFramework: [
        '62% reduction in unbudgeted equipment downtime',
        '3.2x increase in monthly surgical consumable pull-through',
        '94% surgeon satisfaction across trained facilities'
      ]
    },
    sectorEcosystem: {
      market: 'Growing demand for minimally invasive surgery and durable, low-maintenance hospital hardware.',
      competitors: 'Global market leaders facing price pressure from Asian diagnostic and surgical entrants.',
      customers: 'Hospital purchasing committees, chief surgeons, and head biomedical engineers.',
      regulators: 'Device registration rules tightening with increased scrutiny on electrical and clinical safety.',
      operations: 'After-sales maintenance, replacement part stocking, and surgeon simulation training.',
      technology: 'Connected IoT diagnostics, cloud-linked imaging suites, and remote service dashboards.',
      people: 'High reliance on specialised clinical application specialists and field service engineers.',
      aiOpportunities: 'Computer-vision assisted surgical workflow optimisation and predictive maintenance.'
    }
  },
  {
    id: 'medical-diagnostics',
    name: 'Medical Diagnostics',
    category: 'core-lifesciences',
    tier: 'core',
    tagline: 'Point-of-care adoption, laboratory network mapping, and diagnostic testing strategy.',
    description: 'Enabling molecular, rapid diagnostic, and clinical chemistry providers to expand laboratory access and diagnostic throughput.',
    heritageNote: 'Established Core Sector Heritage',
    designMetaphor: {
      theme: 'Laboratory Connectivity & Epidemiological Sizing',
      accentColor: '#14b8a6',
      icon: 'Activity',
      keyMetricType: 'Turnaround Time & Test Volume Throughput'
    },
    context: 'Balancing centralised reference laboratory capacity with decentralised rural point-of-care (POC) testing, power stability, and reagent cold chains.',
    keyQuestions: [
      'What is the viable reagent-rental placement model for secondary hospitals vs private lab chains?',
      'How can point-of-care rapid molecular diagnostics achieve national public screening inclusion?',
      'What are the turnaround-time bottlenecks across reference laboratory specimen transport networks?'
    ],
    researchAndIntelligence: [
      'National laboratory capacity, analyzer footprint, and sample courier route mapping',
      'Pathologist, lab technologist, and clinical biochemist analyzer preference studies',
      'Public health screening priority audits with national AIDS/TB/Malaria and oncology programmes'
    ],
    consultingAndStrategy: [
      'Reagent-rental financial modelling and analyzer placement optimisation',
      'Public-private partnership (PPP) diagnostic concession structuring',
      'Laboratory quality management system (QMS) and ISO 15189 accreditation advisory'
    ],
    aiOpportunities: [
      'Predictive reagent inventory optimisation based on seasonal disease patterns',
      'Computer-vision assistance for microfluidic and rapid test strip image interpretation',
      'Automated laboratory workflow scheduling and specimen batching optimisation'
    ],
    capabilityBuilding: [
      'Lab technologist digital SOP training and quality control data literacy',
      'Commercial diagnostic sales teams training on total-cost-of-testing consulting'
    ],
    enterpriseSolutions: [
      'Decentralised Point-of-Care Data Sync & Quality Control Platform',
      'Laboratory Reagent Inventory & Expiry Forecast Dashboard'
    ],
    illustrativeEngagement: {
      title: 'Illustrative Capability: National Point-of-Care Diagnostic Expansion',
      challenge: 'A diagnostics innovator needed to establish reliable rural placement of automated molecular testing systems without battery failures or stock-outs.',
      investigation: 'Mapped power grids, sample turnaround times, and technician training across 60 secondary health facilities.',
      strategicDecision: 'Designed a solar-hybrid bundled reagent-rental offering backed by mobile-first training modules.',
      aiLayer: 'Implemented an offline-capable mobile sync app with automated quality control flagging.',
      deliverables: [
        'National Laboratory Distribution & Route Map',
        'Reagent Placement Unit Economics Model',
        'Mobile Quality Assurance Sync App Prototype'
      ],
      outcomeFramework: [
        '140 analyzer placements across 4 provinces',
        'Average diagnostic result turnaround time cut from 5 days to 45 minutes',
        '99.4% test quality concordance rate'
      ]
    },
    sectorEcosystem: {
      market: 'Transitioning from centralised reference labs to robust point-of-care testing and screening.',
      competitors: 'Multinational molecular giants alongside rapid diagnostic test (RDT) low-cost makers.',
      customers: 'Private lab networks, public central medical stores, pathologists, and NGOs.',
      regulators: 'Strict validation protocols for in-vitro diagnostic (IVD) performance and batch release.',
      operations: 'Cold-chain transport of sensitive enzymes and specimen courier integrity.',
      technology: 'Multiplex PCR, point-of-care cartridges, and laboratory information systems (LIS).',
      people: 'Critical need for certified laboratory technologists and specimen handling staff.',
      aiOpportunities: 'Automated diagnostic triage and early outbreak detection signals from aggregate lab logs.'
    }
  },
  {
    id: 'medical-equipment',
    name: 'Medical Equipment',
    category: 'core-lifesciences',
    tier: 'core',
    tagline: 'Capital equipment market intelligence, tender tracking, and financing advisory.',
    description: 'Strategic advisory for imaging systems, surgical suites, ICU ventilators, and hospital capital installations.',
    heritageNote: 'Established Core Sector Heritage',
    designMetaphor: {
      theme: 'Capital Asset Lifecycle & Procurement Analytics',
      accentColor: '#8b5cf6',
      icon: 'Cpu',
      keyMetricType: 'Total Cost of Ownership & Tender Win Rate'
    },
    context: 'Navigating long public tender procurement cycles (12-24 months), capital financing constraints, and hospital purchasing committee deliberations.',
    keyQuestions: [
      'When will key public tertiary referral hospitals tender for MRI, CT, and radiotherapy upgrades?',
      'What equipment financing or Managed Equipment Services (MES) structures unlock private hospital purchases?',
      'How does the refurbished equipment market impact pricing and residual asset values?'
    ],
    researchAndIntelligence: [
      'Installed equipment base audits across public referral and private hospital networks',
      'Historical tender award analytics, competitor discounting patterns, and bid specifications teardowns',
      'Hospital board, CEO, and CFO capital expenditure priority interviews'
    ],
    consultingAndStrategy: [
      'Tender strategy, pre-bid educational positioning, and consortium structuring',
      'Equipment leasing, pay-per-scan, and managed equipment services financial structuring',
      'Biomedical engineering service contract and lifecycle warranty design'
    ],
    aiOpportunities: [
      'Automated government gazette and international development bank tender scraper and scoring',
      'Predictive total-cost-of-ownership (TCO) and hospital payback simulation models',
      'AI-assisted RFP bid response drafting and technical compliance verification'
    ],
    capabilityBuilding: [
      'Capital equipment sales teams training on financial business casing and C-suite negotiation',
      'Hospital engineering teams training on predictive maintenance analytics'
    ],
    enterpriseSolutions: [
      'Capital Healthcare Tender Pipeline & Competitor Pricing Radar',
      'Hospital Asset Lifecycle & Utilisation Intelligence Platform'
    ],
    illustrativeEngagement: {
      title: 'Illustrative Capability: Pan-African Imaging Tender & Financing Advisory',
      challenge: 'An imaging systems manufacturer was repeatedly disqualified from public hospital tenders due to rigid financing models and misaligned technical specifications.',
      investigation: 'Analysed 35 historical public tenders across 4 countries and audited 42 hospital imaging suites.',
      strategicDecision: 'Formulated a flexible Managed Equipment Services (MES) leasing model backed by local development finance institutions.',
      aiLayer: 'Built a tender intelligence dashboard tracking public health capital budget allocations.',
      deliverables: [
        'Pan-African Hospital Imaging Installed Base Map',
        'MES Financing & Risk Allocation Blueprint',
        'Tender Scraping & Compliance Scoring Hub'
      ],
      outcomeFramework: [
        'Won 3 major regional hospital replacement tenders totaling $8.2M',
        'Shortened client bid preparation time by 45%',
        'Established 10-year recurring maintenance revenue streams'
      ]
    },
    sectorEcosystem: {
      market: 'Rapid expansion of oncology centres, cardiac cath labs, and modernized trauma suites.',
      competitors: 'High-end American/European OEMs competing against value-tier Asian manufacturers.',
      customers: 'Hospital trustees, ministries of health, development finance institutions, and private equity owners.',
      regulators: 'Radiation safety boards, atomic energy commissions, and health infrastructure inspectors.',
      operations: 'Site planning, lead shielding, heavy rigging, calibration, and power conditioning.',
      technology: 'Digital radiography, low-helium MRI, and cloud PACS network integration.',
      people: 'Biomedical engineers, medical physicists, and specialised radiology technicians.',
      aiOpportunities: 'AI image reconstruction optimisation and automated downtime prediction.'
    }
  },
  {
    id: 'surgical-consumables',
    name: 'Surgical Consumables',
    category: 'core-lifesciences',
    tier: 'core',
    tagline: 'Channel distribution, hospital formulary intelligence, and volume optimisation.',
    description: 'Market research and supply chain strategy for surgical gloves, sutures, wound care, drapes, and disposable devices.',
    heritageNote: 'Established Core Sector Heritage',
    designMetaphor: {
      theme: 'High-Volume Channel Velocity & Price Elasticity',
      accentColor: '#ec4899',
      icon: 'Boxes',
      keyMetricType: 'Re-order Velocity & Stockout Mitigation'
    },
    context: 'High-volume margin pressures, hospital formulary switching behaviour, central medical store tenders, and low-cost unbranded import competition.',
    keyQuestions: [
      'Why are secondary hospitals switching from established brand sutures to unbranded imports?',
      'What distributor rebate and consignment structures prevent stockouts in high-volume theater units?',
      'How can a brand achieve standardised formulary inclusion across private hospital consortiums?'
    ],
    researchAndIntelligence: [
      'Operating theater nurse, scrub technician, and surgeon usage preference surveys',
      'Wholesaler and sub-distributor price, rebate, and payment-term benchmarking',
      'Hospital supply chain audit measuring stockout frequency, batch wastage, and lead times'
    ],
    consultingAndStrategy: [
      'SKU rationalization and procedure-pack bundling strategy',
      'Hospital purchasing consortium negotiation strategy and tiered volume rebates',
      'Counterfeit detection, tamper-evident packaging, and distributor channel auditing'
    ],
    aiOpportunities: [
      'Hospital surgical volume forecasting for proactive consumable replenishment triggers',
      'Automated price optimisation and margin waterfall models for distributor tiers',
      'Computer vision packaging verification for anti-counterfeit mobile authentication'
    ],
    capabilityBuilding: [
      'Distributor sales reps training on hospital clinical in-servicing and product demonstration',
      'Hospital procurement teams training on total procedure cost calculation'
    ],
    enterpriseSolutions: [
      'Surgical Theater Replenishment & Stockout Warning Dashboard',
      'Distributor Channel Integrity & Margin Waterfall Portal'
    ],
    illustrativeEngagement: {
      title: 'Illustrative Capability: Hospital Consumable Formulary Defense & Growth',
      challenge: 'A leading surgical consumables brand lost 24% market share to unbranded imports experiencing high theater wastage.',
      investigation: 'Surveyed 120 theater nurses and mapped procedure-level wastage across 28 private hospital operating theaters.',
      strategicDecision: 'Re-engineered packaging into procedure-specific custom kits and introduced automated volume rebates.',
      aiLayer: 'Deployed a re-order forecasting model linked to hospital surgical booking systems.',
      deliverables: [
        'Theater Wastage & Unit Economics Study',
        'Consumable Formulary Defense Playbook',
        'Automated Replenishment Alert Tool'
      ],
      outcomeFramework: [
        'Regained 24% lost market share within 9 months',
        'Reduced theater consumable waste by 18%',
        'Achieved preferred supplier status across 14 hospital groups'
      ]
    },
    sectorEcosystem: {
      market: 'High-volume recurring demand driven by rising surgical procedures and maternal health investments.',
      competitors: 'High price competition from low-cost Asian manufacturers and local repackagers.',
      customers: 'Theater matrons, hospital procurement managers, and central medical store buyers.',
      regulators: 'Standards bureaus and health ministries regulating sterility and biocompatibility.',
      operations: 'High-turnover warehousing, sterile barrier integrity, and consignment inventory.',
      technology: 'RFID inventory tracking, procedure kit assembly, and barcoded replenishment.',
      people: 'Operating theater nurses and hospital inventory clerks.',
      aiOpportunities: 'Predictive surgical tray optimisation and demand forecasting from theater schedules.'
    }
  },
  {
    id: 'hospitals-healthcare-providers',
    name: 'Hospitals & Healthcare Providers',
    category: 'core-lifesciences',
    tier: 'core',
    tagline: 'Operational strategy, digital health transformation, and clinical workforce capacity.',
    description: 'Advising private hospital groups, faith-based health networks, and public health systems on operational efficiency, revenue cycle, and patient experience.',
    heritageNote: 'Established Core Sector Heritage (Life Sciences Core)',
    designMetaphor: {
      theme: 'Clinical Workflow & Revenue Cycle Modernisation',
      accentColor: '#10b981',
      icon: 'Building2',
      keyMetricType: 'Claim Adjudication Speed & Bed Occupancy Yield'
    },
    context: 'Managing clinician shortages, insurance claim rejections, disparate paper/digital records, and transitioning toward value-based healthcare models.',
    keyQuestions: [
      'How can a multi-facility hospital network reduce insurance claim rejection rates from 20%+ to under 5%?',
      'What digital health and hospital information system (HIS) architecture supports clinical quality and billing accuracy?',
      'How do we optimise patient journey wait times and bed turnaround efficiency?'
    ],
    researchAndIntelligence: [
      'Patient satisfaction journey mapping and outpatient wait-time time-and-motion studies',
      'Physician, nursing, and administrative workflow diagnostics and burnout assessments',
      'Insurance claim submission, rejection, and dispute root-cause analysis'
    ],
    consultingAndStrategy: [
      'Hospital operating model redesign and clinical service line prioritisation',
      'Revenue cycle management (RCM) optimisation and admission-to-billing gate redesign',
      'Quality assurance, clinical pathway governance, and international accreditation (JCI/COHSASA)'
    ],
    aiOpportunities: [
      'AI-assisted medical coding and pre-submission insurance claim verification',
      'Patient appointment scheduling, triage support, and no-show prediction algorithms',
      'Clinical documentation speech-to-text assistants customised for regional physician accents'
    ],
    capabilityBuilding: [
      'Hospital leadership AI literacy and digital transformation governance masterclasses',
      'Billing and clinical coding teams training on AI-assisted ICD-10 and CPT coding',
      'Nursing and front-desk customer experience excellence cohorts'
    ],
    enterpriseSolutions: [
      'AI Pre-Submission Claim Validation & Revenue Cycle Engine',
      'Hospital Operational Throughput & Bed Occupancy Optimisation Portal'
    ],
    illustrativeEngagement: {
      title: 'Illustrative Capability: Hospital Network Revenue Cycle & Claims Transformation',
      challenge: 'A 300-bed hospital network suffered a 22% insurer claim rejection rate, creating severe working capital strain.',
      investigation: 'Audited 5,000 rejected claims, pinpointing pre-authorization omissions and diagnostic code discrepancies.',
      strategicDecision: 'Redesigned the admission billing gates and instituted automated real-time verification rules.',
      aiLayer: 'Integrated an AI pre-adjudication engine screening all claims prior to insurance submission.',
      deliverables: [
        'Claims Audit & Revenue Leakage Blueprint',
        'Clinical Coding Standard Operating Procedures',
        'AI Pre-Adjudication Claim Validation Portal'
      ],
      outcomeFramework: [
        'Claim rejection rate plummeted from 22% to 3.8%',
        'Accelerated insurer cash collections by 35 days',
        'Saved $1.4M annually in administrative rework costs'
      ]
    },
    sectorEcosystem: {
      market: 'Consolidation of private hospitals and expansion of national health insurance programmes.',
      competitors: 'Independent facilities competing against regional corporate hospital chains and academic centres.',
      customers: 'Patients, corporate employers, private medical insurers, and government health schemes.',
      regulators: 'Medical councils, radiation boards, pharmacy boards, and health facility inspectors.',
      operations: 'Inpatient bed management, operating theater utilisation, triage, and pharmacy dispensing.',
      technology: 'Electronic medical records (EMR/EHR), PACS, laboratory information systems, and billing ERPs.',
      people: 'Multidisciplinary clinical specialists, nursing personnel, billing coders, and administrators.',
      aiOpportunities: 'Automated claim triage, patient wait-time prediction, and clinical documentation support.'
    }
  },

  // ==========================================
  // DIVERSIFIED INDUSTRY VERTICALS (18 SECTORS) - BROAD APPLICATION
  // ==========================================
  {
    id: 'chemicals',
    name: 'Chemicals',
    category: 'diversified-vertical',
    tier: 'cross-sector',
    tagline: 'Industrial supply chain intelligence, environmental regulation, and raw material demand modelling.',
    description: 'Advising industrial chemical manufacturers and raw material importers on regulatory compliance, distributor channels, and industrial manufacturing demand.',
    heritageNote: 'Cross-Sector Application of MindCraft Consulting & Research Methodologies',
    designMetaphor: {
      theme: 'Industrial Process & Environmental Compliance Topology',
      accentColor: '#f59e0b',
      icon: 'FlaskConical',
      keyMetricType: 'Supply Continuity & Environmental Compliance Index'
    },
    context: 'Navigating hazardous material transport rules, raw material import tariff fluctuations, industrial customer concentration, and green chemistry transitions.',
    keyQuestions: [
      'What is the true demand trajectory for specialty polymers and industrial coatings across regional manufacturing clusters?',
      'How will tightening environmental and wastewater regulations impact chemical plant operations?',
      'Which industrial distributor networks provide reliable warehousing for regulated chemical compounds?'
    ],
    researchAndIntelligence: [
      'Industrial buyer surveys across manufacturing, construction, and textile sectors',
      'Environmental regulatory compliance tracking and hazardous substance import monitoring',
      'Supply chain and bulk storage logistics audits across major port corridors'
    ],
    consultingAndStrategy: [
      'Industrial market entry and distributor network rationalization',
      'Raw material pricing, tariff optimisation, and import-substitution strategy',
      'Environmental sustainability and circular economy transition roadmaps'
    ],
    aiOpportunities: [
      'Predictive raw material commodity price and demand forecasting models',
      'Automated Material Safety Data Sheet (MSDS) and chemical regulatory compliance parsing',
      'Industrial batch quality anomaly detection algorithms'
    ],
    capabilityBuilding: [
      'Commercial technical sales teams training on consultative industrial selling',
      'Plant safety and compliance teams training on digital environmental reporting'
    ],
    enterpriseSolutions: [
      'Chemical Supply Chain & Regulatory Compliance Radar',
      'Industrial Commodity Price & Demand Forecasting Hub'
    ],
    illustrativeEngagement: {
      title: 'Illustrative Capability: Regional Specialty Chemicals Market Entry & Distributor Strategy',
      challenge: 'An international chemical producer needed to enter the East African industrial manufacturing supply chain without intermediary margin erosion.',
      investigation: 'Audited 34 industrial chemical distributors and conducted structured interviews with 50 manufacturing plant managers.',
      strategicDecision: 'Established a direct-to-enterprise key account strategy for top manufacturers while appointing specialised regional distributors for tier-2 buyers.',
      aiLayer: 'Engineered an automated commodity price tracker and regulatory import dossier index.',
      deliverables: [
        'Regional Industrial Chemical Market Sizing Dossier',
        'Distributor Tiering & SLA Matrix',
        'Automated Regulatory Compliance Dashboard'
      ],
      outcomeFramework: [
        'Captured 16% market share in specialty industrial coatings within 14 months',
        'Reduced supply lead time from ports by 28%',
        '100% compliance adherence across hazardous chemical transport checkpoints'
      ]
    },
    sectorEcosystem: {
      market: 'Driven by local manufacturing expansion, urbanization, and water treatment needs.',
      competitors: 'Global chemical conglomerates competing against regional blenders and raw material importers.',
      customers: 'Manufacturing plants, paint producers, agricultural processors, and water utilities.',
      regulators: 'Environmental management authorities (NEMA, NESREA) and standards bureaus.',
      operations: 'Hazardous storage, specialised tanker logistics, bulk decanting, and quality testing.',
      technology: 'SCADA process control, batch traceability, and automated ERP inventory.',
      people: 'Chemical engineers, safety officers, and technical sales specialists.',
      aiOpportunities: 'Predictive maintenance for blending machinery and automated formulation matching.'
    }
  },
  {
    id: 'agrochemicals',
    name: 'Agrochemicals',
    category: 'diversified-vertical',
    tier: 'cross-sector',
    tagline: 'Farmer adoption insights, agro-dealer network mapping, and crop-protection strategy.',
    description: 'Helping crop protection, seed, and fertilizer companies understand smallholder and commercial farming adoption dynamics across Africa.',
    heritageNote: 'Cross-Sector Application of MindCraft Consulting & Research Methodologies',
    designMetaphor: {
      theme: 'Agronomic Ecosystem & Rural Last-Mile Distribution',
      accentColor: '#84cc16',
      icon: 'Sprout',
      keyMetricType: 'Agro-Dealer Penetration & Yield Impact'
    },
    context: 'Managing seasonal demand volatility, rural distribution fragmentation, counterfeit pesticide proliferation, and climate resilience requirements.',
    keyQuestions: [
      'What are smallholder farmer brand perceptions and willingness-to-pay for biological vs synthetic crop protection?',
      'Which agro-dealer hub networks drive actual product recommendation at the village retail level?',
      'How can an agricultural inputs manufacturer structure weather-indexed credit terms for farming cooperatives?'
    ],
    researchAndIntelligence: [
      'Field focus groups and structured surveys with smallholder and commercial farmers across agricultural zones',
      'Rural agro-dealer mystery shopping audits assessing brand recommendation and pricing',
      'Pesticide registration and maximum residue limit (MRL) regulatory benchmarking'
    ],
    consultingAndStrategy: [
      'Last-mile rural distribution strategy and agro-dealer loyalty programme structuring',
      'Smallholder product packaging right-sizing and pricing strategy',
      'Cooperative and contract-farming partnership frameworks'
    ],
    aiOpportunities: [
      'Geospatial crop yield and agrochemical demand forecasting from satellite NDVI and weather data',
      'AI-powered agronomic advisory chatbots for field extension workers and farmers',
      'Packaging QR-code anti-counterfeit verification engines'
    ],
    capabilityBuilding: [
      'Field agronomists and sales teams training on digital farmer data collection',
      'Agro-dealer network business literacy and safe chemical handling education'
    ],
    enterpriseSolutions: [
      'Agro-Dealer Network Performance & Stockout Tracking Hub',
      'Geospatial Crop Protection Demand Intelligence Portal'
    ],
    illustrativeEngagement: {
      title: 'Illustrative Capability: Last-Mile Agrochemical Distribution & Farmer Adoption',
      challenge: 'A crop protection brand faced counterfeit dilution and low smallholder penetration in high-value horticulture corridors.',
      investigation: 'Surveyed 450 farmers and audited 85 rural agro-dealers across 3 agricultural basins.',
      strategicDecision: 'Introduced right-sized single-dose sachets with scratch-off SMS authentication and structured master agro-dealer inventory financing.',
      aiLayer: 'Built a geospatial seasonal demand model mapping crop planting cycles to inventory replenishment.',
      deliverables: [
        'Agro-Dealer Footprint & Channel Economics Report',
        'Smallholder Packaging & Pricing Redesign Blueprint',
        'Geospatial Crop Demand & Inventory Tracker'
      ],
      outcomeFramework: [
        'Increased authentic product sales by 42% in target horticultural zones',
        'Eliminated counterfeit complaints in covered territories',
        'Expanded verified agro-dealer retail footprint by 110 shops'
      ]
    },
    sectorEcosystem: {
      market: 'High growth potential driven by food security imperatives and agricultural commercialisation.',
      competitors: 'Multinational crop science leaders alongside local generic formulators and organic bio-input makers.',
      customers: 'Commercial estates, smallholder farmer cooperatives, outgrower schemes, and rural agro-dealers.',
      regulators: 'Pest control products boards, ministries of agriculture, and export standard authorities.',
      operations: 'Seasonal packaging runs, rural hub distribution, and cold/dry chemical storage.',
      technology: 'Mobile money agronomy apps, satellite NDVI monitoring, and weather forecasting.',
      people: 'Agronomists, extension officers, and rural distributor sales agents.',
      aiOpportunities: 'Crop pest image classification and localised rainfall-linked application recommendations.'
    }
  },
  {
    id: 'automotive',
    name: 'Automotive',
    category: 'diversified-vertical',
    tier: 'cross-sector',
    tagline: 'Dealer network research, aftermarket parts distribution, and commercial fleet mobility advisory.',
    description: 'Supporting vehicle OEMs, commercial fleet operators, and aftermarket parts distributors in navigating African vehicle and mobility markets.',
    heritageNote: 'Cross-Sector Application of MindCraft Consulting & Research Methodologies',
    designMetaphor: {
      theme: 'Fleet Telematics & Aftermarket Velocity',
      accentColor: '#ef4444',
      icon: 'Car',
      keyMetricType: 'Fleet Availability & Aftermarket Fill Rate'
    },
    context: 'Prevalence of grey-market used vehicle imports, counterfeit spare parts, commercial fleet financing hurdles, and emerging electric mobility policies.',
    keyQuestions: [
      'What aftermarket spare parts distribution model wins against grey-market imports in secondary cities?',
      'How are commercial fleet operators transitioning toward telematics and total cost of ownership management?',
      'What is the commercial viability of EV two-wheeler and commercial vehicle assembly in regional hubs?'
    ],
    researchAndIntelligence: [
      'Commercial fleet operator purchasing and maintenance practice surveys',
      'Spare parts wholesale and retail trade audits across major automotive spare-part markets',
      'Electric vehicle (EV) policy, tariff, and charging infrastructure feasibility studies'
    ],
    consultingAndStrategy: [
      'Authorized dealer network expansion and territory standard operating procedures',
      'Aftermarket parts supply chain optimisation and distributor anti-counterfeit strategies',
      'Commercial fleet telematics adoption and lifecycle management blueprints'
    ],
    aiOpportunities: [
      'Predictive vehicle maintenance algorithms utilizing IoT telematics and diagnostic trouble codes',
      'Automated spare parts catalogue matching and inventory re-order forecasting',
      'Fleet route optimisation and fuel anomaly detection systems'
    ],
    capabilityBuilding: [
      'Dealer service managers training on digital customer retention and warranty workflows',
      'Fleet supervisors training on predictive maintenance analytics'
    ],
    enterpriseSolutions: [
      'Automotive Aftermarket Parts Velocity & Pricing Radar',
      'Commercial Fleet Telematics & Maintenance Intelligence Hub'
    ],
    illustrativeEngagement: {
      title: 'Illustrative Capability: Commercial Vehicle Aftermarket Parts Supply Chain Optimisation',
      challenge: 'A heavy commercial vehicle OEM suffered loss of aftermarket parts revenue to unbranded imports after vehicle warranty expiration.',
      investigation: 'Audited 60 fleet operators and mapped 40 spare parts retailers across transit corridors.',
      strategicDecision: 'Launched a second-line certified value parts brand paired with fast-track dealer maintenance packages.',
      aiLayer: 'Created an automated parts catalogue search engine for local mechanics.',
      deliverables: [
        'Aftermarket Channel Landscape & Competitor Pricing Dossier',
        'Second-Line Parts Commercial Launch Strategy',
        'Automated Parts Matching Portal'
      ],
      outcomeFramework: [
        'Recovered 31% of out-of-warranty fleet servicing revenue',
        'Achieved 96% same-day parts availability across regional dealer hubs',
        'Reduced commercial fleet roadside breakdown frequency by 23%'
      ]
    },
    sectorEcosystem: {
      market: 'High demand for commercial transport vehicles, logistics fleets, and rising two/three-wheeler mobility.',
      competitors: 'Japanese/European legacy OEMs competing against Chinese commercial vehicle manufacturers and used imports.',
      customers: 'Logistics fleets, public transport saccos/cooperatives, corporate fleets, and individual owners.',
      regulators: 'Transport safety authorities, national revenue authorities, and standards bureaus.',
      operations: 'Complete knock-down (CKD) assembly, dealer network servicing, and spare parts warehousing.',
      technology: 'Telematics, GPS tracking, electronic fare collection, and battery swapping stations.',
      people: 'Certified automotive technicians, fleet managers, and dealer sales executives.',
      aiOpportunities: 'Predictive component failure modelling and AI-driven insurance risk scoring from telematics.'
    }
  },
  {
    id: 'financial-services',
    name: 'Financial Services',
    category: 'diversified-vertical',
    tier: 'cross-sector',
    tagline: 'Digital banking transformation, AI-driven risk analytics, process automation, and financial inclusion advisory.',
    description: 'Advising commercial banks, microfinance institutions, insurers, and fintechs on operational transformation, AI adoption, and credit intelligence.',
    heritageNote: 'Preserving Core Corporate Profile Scope: Banking & Finance, Insurance, and Digital Financial Services',
    designMetaphor: {
      theme: 'Risk Topology & Transactional Automation',
      accentColor: '#3b82f6',
      icon: 'CreditCard',
      keyMetricType: 'Loan Processing Speed & Cost-to-Income Ratio'
    },
    context: 'Managing mobile money interoperability, non-performing loan (NPL) risks, evolving Central Bank regulatory frameworks, and legacy core banking migration.',
    keyQuestions: [
      'How can a commercial bank leverage alternative data and AI to underwrite micro and SME enterprises safely?',
      'What back-office workflows in mortgage, loan origination, and KYC can be automated safely?',
      'How should a regional insurer structure micro-health and parametric agricultural insurance products?'
    ],
    researchAndIntelligence: [
      'Customer digital banking experience, drop-off rates, and branch sentiment research',
      'Fintech and challenger bank competitive feature benchmarking and pricing studies',
      'Central Bank regulatory compliance and open banking framework scans'
    ],
    consultingAndStrategy: [
      'Digital banking transformation blueprints and legacy process re-engineering',
      'AI credit underwriting governance and responsible algorithmic risk models',
      'Bancassurance and micro-insurance distribution channel strategy'
    ],
    aiOpportunities: [
      'Alternative data credit scoring algorithms for unbanked and informal businesses',
      'Intelligent document processing for automated loan applications and KYC identity verification',
      'Conversational AI assistants for customer onboarding, balance queries, and financial coaching'
    ],
    capabilityBuilding: [
      'Banking executive masterclasses on AI governance, model risk, and Central Bank compliance',
      'Credit risk and operations teams training on prompt engineering and automated document verification'
    ],
    enterpriseSolutions: [
      'Automated KYC & Loan Origination Intelligent Document Engine',
      'Alternative Data SME Credit Scoring & Risk Monitoring Vault'
    ],
    illustrativeEngagement: {
      title: 'Illustrative Capability: Tier-1 Commercial Bank SME Credit & Onboarding Automation',
      challenge: 'A regional bank struggled with a 14-day manual SME loan approval cycle that depressed conversion and inflated operational cost.',
      investigation: 'Mapped 28 handoff steps in loan processing, analysing root causes of file delays and verification errors.',
      strategicDecision: 'Redesigned the credit approval gate to introduce automated bank statement parsing and tiered risk escalation.',
      aiLayer: 'Deployed an intelligent document parsing pipeline that extracts cash flow metrics from mobile money and bank statements.',
      deliverables: [
        'SME Credit Origination Redesign Blueprint',
        'AI Credit Underwriting Risk Governance Manual',
        'Intelligent Financial Document Extraction Pipeline'
      ],
      outcomeFramework: [
        'Reduced SME loan turnaround time from 14 days to under 48 hours',
        'Decreased back-office processing cost per application by 54%',
        'Maintained default rates within target threshold (<3.2%)'
      ]
    },
    sectorEcosystem: {
      market: 'Rapid expansion of digital lending, mobile money payments, and embedded SME finance.',
      competitors: 'Traditional tier-1 banks competing with digital-only micro-lenders and telco mobile money wallets.',
      customers: 'Retail depositors, informal traders, small-and-medium enterprises (SMEs), and corporate clients.',
      regulators: 'Central banks, insurance regulatory authorities, and data protection commissioners.',
      operations: 'Core banking transaction processing, KYC validation, branchless agency banking, and clearing.',
      technology: 'Open APIs, cloud-native banking stacks, optical character recognition (OCR), and biometric auth.',
      people: 'Credit underwriters, branch managers, data analysts, and compliance officers.',
      aiOpportunities: 'Real-time transaction fraud detection, AML transaction monitoring, and automated credit scoring.'
    }
  },
  {
    id: 'food-agribusiness',
    name: 'Food & Agribusiness',
    category: 'diversified-vertical',
    tier: 'cross-sector',
    tagline: 'Agricultural value chain intelligence, food processing efficiency, and export compliance advisory.',
    description: 'Advising commercial farms, agro-processors, food FMCG manufacturers, and export aggregators on supply chain integration and market intelligence.',
    heritageNote: 'Cross-Sector Application of MindCraft Consulting & Research Methodologies',
    designMetaphor: {
      theme: 'Value Chain Traceability & Agronomic Efficiency',
      accentColor: '#16a34a',
      icon: 'Wheat',
      keyMetricType: 'Post-Harvest Loss Reduction & Export Compliance'
    },
    context: 'Navigating post-harvest losses, outgrower scheme management, cold storage deficits, and strict international phytosanitary export standards.',
    keyQuestions: [
      'How can an agribusiness stabilise raw material procurement volumes across 10,000 outgrower smallholders?',
      'What processing and packaging investments maximise local retail shelf-life vs export market margins?',
      'How will regional trade agreements (AfCFTA) alter staple food trade and commodity pricing?'
    ],
    researchAndIntelligence: [
      'Outgrower farmer productivity, loyalty, and side-selling root-cause studies',
      'Food retail category audits, consumer flavor preferences, and price sensitivity',
      'Export market standards (GlobalGAP, HACCP, organic) compliance mapping'
    ],
    consultingAndStrategy: [
      'Outgrower supply chain integration and digital farmer payment structuring',
      'Food processing plant operational workflow and yield optimisation',
      'Export market entry and certified value-chain structuring'
    ],
    aiOpportunities: [
      'Predictive crop harvest timing and aggregate volume yield forecasting',
      'Computer-vision assisted sorting, grading, and defect detection for fresh produce',
      'Automated traceability ledger tracking produce from farm gate to retail shelf'
    ],
    capabilityBuilding: [
      'Agribusiness field managers training on digital agronomy and mobile data capture',
      'Quality assurance teams training on automated defect analytics'
    ],
    enterpriseSolutions: [
      'Agribusiness Outgrower Yield & Sourcing Intelligence Platform',
      'Fresh Produce Traceability & Export Compliance Portal'
    ],
    illustrativeEngagement: {
      title: 'Illustrative Capability: Commercial Food Processor Outgrower & Sourcing Optimisation',
      challenge: 'A major food processor experienced 35% raw material variance due to outgrower side-selling and erratic harvest timing.',
      investigation: 'Audited 1,200 outgrowers across 4 collection hubs, evaluating pricing transparency and input delivery cycles.',
      strategicDecision: 'Restructured outgrower contracts to include guaranteed minimum pricing, input advances, and mobile transparency.',
      aiLayer: 'Built a predictive harvest model combining weather patterns and planting dates to plan factory intake schedules.',
      deliverables: [
        'Outgrower Channel Governance & Incentive Blueprint',
        'Raw Material Sourcing Risk Map',
        'Predictive Factory Intake & Harvest Schedule Tool'
      ],
      outcomeFramework: [
        'Reduced factory raw material supply volatility by 48%',
        'Decreased post-harvest handling losses from 19% to 7%',
        'Boosted average farmer net income by 22%'
      ]
    },
    sectorEcosystem: {
      market: 'Growing domestic food processing demand driven by urbanization and rising packaged food consumption.',
      competitors: 'Local food aggregators competing against multinational FMCG brands and unorganized open-market trade.',
      customers: 'Urban consumers, supermarket chains, institutional caterers, and international export buyers.',
      regulators: 'Food and drug authorities, ministries of agriculture, and export development agencies.',
      operations: 'Contract farming management, post-harvest drying, cold-chain haulage, and factory packaging.',
      technology: 'Mobile payment integration, digital weighing scales, and moisture sensing IoT probes.',
      people: 'Agronomists, factory production managers, quality inspectors, and collection centre agents.',
      aiOpportunities: 'Computer-vision grain grading and satellite-enabled harvest volume forecasting.'
    }
  },
  {
    id: 'beverages',
    name: 'Beverages',
    category: 'diversified-vertical',
    tier: 'cross-sector',
    tagline: 'Beverage trade channel mapping, route-to-market optimisation, and brand perception intelligence.',
    description: 'Supporting alcoholic, non-alcoholic, dairy, and beverage manufacturers in optimising distribution routes, retailer margins, and brand positioning.',
    heritageNote: 'Cross-Sector Application of MindCraft Consulting & Research Methodologies',
    designMetaphor: {
      theme: 'Route-to-Market Velocity & Cooler Penetration',
      accentColor: '#d97706',
      icon: 'Wine',
      keyMetricType: 'On-Premise Distribution & Share of Throat'
    },
    context: 'Managing high excise tax shifts, returnable glass bottle logistics, intense point-of-sale cooler space competition, and informal tavern trade.',
    keyQuestions: [
      'What route-to-market distribution model maximizes retail cooler share in informal kiosks and on-premise venues?',
      'How are consumers reacting to tax-induced price increases and package size down-gauging?',
      'Which micro-distribution partner models reduce stockouts in high-density urban settlements?'
    ],
    researchAndIntelligence: [
      'On-premise (bars, restaurants) and off-premise (kiosks, liquor stores) retail audit censuses',
      'Consumer brand perception, occasion mapping, and price-elasticity studies',
      'Distributor route efficiency and distributor vehicle drop-density analysis'
    ],
    consultingAndStrategy: [
      'Route-to-market redesign and key distributor territory boundary optimisation',
      'Promotional spend effectiveness and trade margin waterfall structuring',
      'Excise tax pass-through modelling and pack-price architecture strategy'
    ],
    aiOpportunities: [
      'AI-driven daily delivery route optimisation for distributor truck fleets',
      'Computer-vision analysis of retail cooler shelves for planogram compliance and out-of-stock detection',
      'Predictive demand forecasting linked to local weather, holidays, and pay-day cycles'
    ],
    capabilityBuilding: [
      'Field sales representatives training on digital order-taking and retail relationship management',
      'Trade marketing teams training on AI-driven promotional ROI analytics'
    ],
    enterpriseSolutions: [
      'Retail Cooler & Planogram Computer Vision Audit Portal',
      'Distributor Route-to-Market Velocity & Stockout Dashboard'
    ],
    illustrativeEngagement: {
      title: 'Illustrative Capability: National Beverage Brand Route-to-Market & Retail Penetration',
      challenge: 'A beverage manufacturer was losing retail shelf space and suffering frequent stockouts in fast-growing peri-urban trading centres.',
      investigation: 'Audited 800 retail outlets, analysed distributor truck routes, and evaluated point-of-sale cooler uptime.',
      strategicDecision: 'Re-engineered the route-to-market model around dedicated high-density micro-distributors with smaller replenishment cycles.',
      aiLayer: 'Introduced an automated delivery route optimisation and digital order-taking application.',
      deliverables: [
        'Trade Channel Census & Retail Density Dossier',
        'Micro-Distributor Route-to-Market Playbook',
        'Distributor Fleet Route Optimisation Portal'
      ],
      outcomeFramework: [
        'Increased retail on-shelf availability from 68% to 91%',
        'Cut distributor delivery fuel costs by 19%',
        'Generated an 18% lift in quarterly regional sales volume'
      ]
    },
    sectorEcosystem: {
      market: 'Dynamic market with rapid growth in energy drinks, ready-to-drink beverages, and premium spirits.',
      competitors: 'Global beverage giants competing with regional breweries, juice formulators, and informal producers.',
      customers: 'Urban and rural consumers, informal kiosks, high-end supermarkets, clubs, and taverns.',
      regulators: 'Tax and revenue authorities (excise stamps), standards bodies, and liquor licensing boards.',
      operations: 'High-speed bottling lines, returnable bottle logistics, warehouse staging, and van distribution.',
      technology: 'Mobile order entry, handheld POS devices, and cooler temperature telemetry.',
      people: 'Route sales reps, delivery drivers, trade marketing managers, and merchandising teams.',
      aiOpportunities: 'Automated cooler shelf image recognition and localised demand spikes prediction.'
    }
  },
  {
    id: 'telecoms-technology',
    name: 'Telecommunications & Technology',
    category: 'diversified-vertical',
    tier: 'cross-sector',
    tagline: 'Digital infrastructure strategy, telco-to-techco evolution, mobile financial services, and AI adoption.',
    description: 'Advising mobile network operators (MNOs), internet service providers, tower companies, and enterprise software vendors on strategic growth and AI integration.',
    heritageNote: 'Cross-Sector Application of MindCraft Consulting & Research Methodologies',
    designMetaphor: {
      theme: 'Network Connectivity & Digital Service Fabric',
      accentColor: '#0284c7',
      icon: 'Radio',
      keyMetricType: 'ARPU Expansion & Subscriber Churn Mitigation'
    },
    context: 'Transitioning from voice/data commodities to digital financial and enterprise cloud services, fiber rollout ROI, and spectrum regulatory shifts.',
    keyQuestions: [
      'How can an MNO successfully evolve into a "TechCo" offering governed cloud and AI services to enterprise clients?',
      'What micro-segmentation models predict and prevent mobile subscriber churn before balance depletion?',
      'What are the commercial and regulatory parameters for enterprise 5G private networks in mining and logistics?'
    ],
    researchAndIntelligence: [
      'Enterprise B2B digital transformation needs and cloud adoption surveys',
      'Consumer subscriber journey, mobile app usability, and churn driver analytics',
      'Regional spectrum policy, roaming regulations, and data localisation requirement scans'
    ],
    consultingAndStrategy: [
      'Telco-to-TechCo operating model redesign and B2B enterprise service structuring',
      'Mobile financial services ecosystem expansion and merchant acquisition strategy',
      'Enterprise AI and cloud commercialisation roadmaps'
    ],
    aiOpportunities: [
      'Predictive subscriber churn prevention algorithms with automated retention micro-incentives',
      'Network traffic anomaly detection and predictive cell tower maintenance models',
      'Conversational AI customer service agents handling billing, bundle purchases, and SIM queries'
    ],
    capabilityBuilding: [
      'Telco enterprise sales teams training on consultative AI and cloud solution selling',
      'Customer support teams training on AI-assisted resolution workflows'
    ],
    enterpriseSolutions: [
      'Enterprise Customer Churn Prevention & Lifetime Value Radar',
      'Telco B2B Cloud & AI Solution Delivery Framework'
    ],
    illustrativeEngagement: {
      title: 'Illustrative Capability: Mobile Network Operator B2B Enterprise AI Portfolio Strategy',
      challenge: 'A major mobile operator wanted to build high-margin revenue streams by offering digital solutions to corporate clients.',
      investigation: 'Surveyed 150 enterprise CIOs and mapped technology readiness across banking, logistics, and healthcare.',
      strategicDecision: 'Designed a packaged B2B portfolio combining enterprise connectivity with managed cybersecurity and AI analytics.',
      aiLayer: 'Created an enterprise self-service provisioning portal prototype with integrated consumption analytics.',
      deliverables: [
        'B2B Enterprise Digital Market Demand Blueprint',
        'TechCo Product Portfolio & Commercial Pricing Manual',
        'Enterprise Solution Architecture Blueprint'
      ],
      outcomeFramework: [
        'Generated $6.4M in new enterprise recurring revenue within the first year',
        'Signed 24 tier-1 corporate clients for managed digital infrastructure',
        'Shortened B2B enterprise onboarding cycle by 60%'
      ]
    },
    sectorEcosystem: {
      market: 'Massive shift from voice/SMS to mobile broadband, cloud hosting, and mobile financial platforms.',
      competitors: 'Tier-1 multinational telcos, regional fiber operators, and global cloud hyperscalers.',
      customers: 'Mass-market prepaid subscribers, postpaid professionals, and enterprise corporations.',
      regulators: 'Communications authorities, data protection commissioners, and central banks (for mobile money).',
      operations: 'Base station maintenance, fiber installation, spectrum management, and SIM registration.',
      technology: '5G, fiber optic backhaul, software-defined networks (SDN), and private APNs.',
      people: 'Network engineers, software developers, corporate account managers, and customer care agents.',
      aiOpportunities: 'Automated network load balancing and contextual personalized data bundle recommendations.'
    }
  },
  {
    id: 'travel-hospitality',
    name: 'Tours, Travel & Hospitality',
    category: 'diversified-vertical',
    tier: 'cross-sector',
    tagline: 'Guest experience analytics, direct booking revenue strategy, and eco-tourism market intelligence.',
    description: 'Supporting luxury safari lodges, boutique hotels, tour operators, and tourism boards in driving international guest acquisition and operational excellence.',
    heritageNote: 'Cross-Sector Application of MindCraft Consulting & Research Methodologies',
    designMetaphor: {
      theme: 'Guest Journey Topology & RevPAR Optimisation',
      accentColor: '#f97316',
      icon: 'Palmtree',
      keyMetricType: 'Direct Booking Share & RevPAR Growth'
    },
    context: 'Managing high online travel agency (OTA) commission dependency, seasonal occupancy swings, sustainability compliance, and luxury guest personalization.',
    keyQuestions: [
      'How can luxury safari lodges and resort groups increase high-margin direct bookings vs OTA intermediaries?',
      'What are the emerging travel preferences of high-net-worth North American and European travelers seeking conservation experiences?',
      'How can boutique hotel chains automate guest personalization without losing human-touch hospitality?'
    ],
    researchAndIntelligence: [
      'International traveler preference studies across key feeder markets (US, UK, Germany, GCC)',
      'Competitive pricing, direct-booking conversion, and OTA commission leakage benchmarking',
      'Sustainability and community conservation impact audits'
    ],
    consultingAndStrategy: [
      'Direct-to-consumer digital revenue and guest loyalty programme strategy',
      'Hospitality revenue management and dynamic pricing framework design',
      'Eco-lodge operational workflow optimisation and staff service excellence standards'
    ],
    aiOpportunities: [
      'Dynamic revenue management algorithms predicting room demand and optimising nightly rates',
      'Conversational AI concierge handling guest itinerary inquiries and pre-arrival preferences',
      'Automated guest review sentiment analysis and service recovery triggers'
    ],
    capabilityBuilding: [
      'Hotel reservations and revenue managers training on dynamic pricing algorithms',
      'Front-of-house hospitality teams training on digital guest preference tracking'
    ],
    enterpriseSolutions: [
      'Hospitality Dynamic Pricing & RevPAR Optimisation Engine',
      'Luxury Travel Guest Itinerary & Conversational Concierge Vault'
    ],
    illustrativeEngagement: {
      title: 'Illustrative Capability: Luxury Safari Group Direct Booking & Yield Optimisation',
      challenge: 'A luxury lodge portfolio paid over 22% in OTA commissions while struggling with erratic low-season occupancy.',
      investigation: 'Analysed 12,000 past guest booking flows, website drop-off points, and competitor pricing elasticity.',
      strategicDecision: 'Re-engineered the digital booking experience, launched an exclusive alumni club, and introduced seasonal private-charter bundles.',
      aiLayer: 'Built a dynamic pricing engine adjusting room rates based on real-time flight search volumes from key feeder markets.',
      deliverables: [
        'Feeder Market Traveler Persona & Demand Dossier',
        'Direct Booking Conversion & Loyalty Blueprint',
        'Dynamic Pricing & Channel Yield Portal'
      ],
      outcomeFramework: [
        'Increased direct booking revenue share from 28% to 54%',
        'Boosted average RevPAR by 26% across high and shoulder seasons',
        'Saved $380K in third-party OTA commission fees annually'
      ]
    },
    sectorEcosystem: {
      market: 'Strong rebound in luxury conservation tourism, adventure travel, and regional corporate conferencing.',
      competitors: 'International luxury hotel brands competing with independent boutique lodges and local operators.',
      customers: 'High-net-worth international leisure tourists, domestic staycationers, and corporate conference planners.',
      regulators: 'Tourism regulatory authorities, wildlife services, and municipal health/safety boards.',
      operations: 'Front-desk operations, housekeeping, food and beverage, safari guiding, and off-grid utilities.',
      technology: 'Property management systems (PMS), central reservation engines, and channel managers.',
      people: 'Safari guides, executive chefs, front-of-house hosts, and lodge operations managers.',
      aiOpportunities: 'Personalized itinerary generation and predictive food & beverage procurement forecasting.'
    }
  },
  {
    id: 'energy-renewables',
    name: 'Energy & Renewable Energy',
    category: 'diversified-vertical',
    tier: 'cross-sector',
    tagline: 'Off-grid solar intelligence, commercial & industrial (C&I) solar advisory, and grid transition strategy.',
    description: 'Advising independent power producers (IPPs), off-grid solar providers, battery storage developers, and utilities on project viability and customer analytics.',
    heritageNote: 'Cross-Sector Application of MindCraft Consulting & Research Methodologies',
    designMetaphor: {
      theme: 'Grid Transition & Decentralised Energy Telemetry',
      accentColor: '#eab308',
      icon: 'SunMedium',
      keyMetricType: 'Levelized Cost of Energy & Customer Repayment Reliability'
    },
    context: 'Managing high upfront capital costs, pay-as-you-go (PAYG) customer default risks, power purchase agreement (PPA) negotiations, and grid reliability deficits.',
    keyQuestions: [
      'What commercial and financial structures unlock C&I solar adoption among mid-sized manufacturing plants?',
      'How can a pay-as-you-go solar provider predict and mitigate rural customer repayment defaults?',
      'What are the regulatory pathways and feed-in tariff frameworks for private mini-grids in rural electrification?'
    ],
    researchAndIntelligence: [
      'Commercial & industrial power reliability, diesel-spend, and renewable energy willingness-to-pay audits',
      'Pay-as-you-go (PAYG) rural household energy consumption and repayment behaviour research',
      'Energy regulatory commission tariff policies, wheeling regulations, and mini-grid licensing scans'
    ],
    consultingAndStrategy: [
      'C&I renewable energy project financial modelling and PPA structuring',
      'PAYG customer credit risk management and portfolio quality improvement strategy',
      'Mini-grid operational sustainability and community stakeholder engagement models'
    ],
    aiOpportunities: [
      'Predictive customer credit scoring for PAYG solar lease applications based on mobile money usage',
      'Solar irradiance and battery state-of-charge optimisation algorithms for off-grid systems',
      'Automated utility meter data anomaly detection and energy theft identification'
    ],
    capabilityBuilding: [
      'Energy project developers training on financial model risk analysis and PPA negotiation',
      'Field maintenance teams training on solar IoT telemetry and fault diagnostics'
    ],
    enterpriseSolutions: [
      'PAYG Solar Customer Credit Risk & Portfolio Quality Radar',
      'C&I Solar Project Viability & Energy Yield Simulation Hub'
    ],
    illustrativeEngagement: {
      title: 'Illustrative Capability: Decentralised Solar Provider Credit Risk & Repayment Optimisation',
      challenge: 'An off-grid solar company suffered rising non-performing loan rates across 40,000 rural solar home system customers.',
      investigation: 'Analysed 1.2M historical repayment events, agricultural harvest seasonality, and agent network incentive structures.',
      strategicDecision: 'Restructured credit underwriting gates and introduced harvest-aligned flexible repayment schedules.',
      aiLayer: 'Built a machine-learning credit risk model that predicts default probability at the point of customer onboarding.',
      deliverables: [
        'PAYG Customer Portfolio Risk & Seasonality Dossier',
        'Credit Policy & Agent Incentive Redesign Blueprint',
        'Machine Learning Credit Underwriting Scoring Tool'
      ],
      outcomeFramework: [
        'Reduced 90-day customer portfolio default rate from 18.4% to 7.1%',
        'Accelerated customer system completion and buyout rate by 33%',
        'Secured $12M in commercial debt refinancing on upgraded portfolio quality'
      ]
    },
    sectorEcosystem: {
      market: 'Rapid expansion of rooftop commercial solar, rural mini-grids, and utility-scale solar/wind farms.',
      competitors: 'Multinational renewable IPPs, local EPC contractors, and venture-backed PAYG solar startups.',
      customers: 'Off-grid rural households, industrial manufacturers, commercial buildings, and national grid utilities.',
      regulators: 'Energy and petroleum regulatory authorities, ministries of energy, and environmental agencies.',
      operations: 'Solar PV installation, battery storage maintenance, meter billing, and customer call centres.',
      technology: 'GSM-enabled smart meters, IoT inverters, lithium battery management systems, and SCADA.',
      people: 'Electrical engineers, solar PV installers, credit risk analysts, and customer care agents.',
      aiOpportunities: 'Solar generation forecasting and automated load shedding management.'
    }
  },
  {
    id: 'construction-real-estate',
    name: 'Construction, Real Estate & Infrastructure',
    category: 'diversified-vertical',
    tier: 'cross-sector',
    tagline: 'Feasibility intelligence, property market sizing, infrastructure procurement, and project cost governance.',
    description: 'Supporting commercial property developers, master-planned cities, infrastructure contractors, and institutional investors with market research and strategic advisory.',
    heritageNote: 'Cross-Sector Application of MindCraft Consulting & Research Methodologies',
    designMetaphor: {
      theme: 'Spatial Urban Sizing & Project Execution Governance',
      accentColor: '#64748b',
      icon: 'Building',
      keyMetricType: 'Project Budget Adherence & Asset Occupancy Yield'
    },
    context: 'Managing construction cost inflation, title deed/land registry bureaucracy, high vacancy in speculative office space, and rising demand for affordable housing.',
    keyQuestions: [
      'What mixed-use residential and commercial tenant mix maximizes yield in peri-urban growth corridors?',
      'How can infrastructure contractors prevent budget and schedule overruns across multi-year civil works?',
      'What are the commercial demand parameters for modern grade-A warehousing and logistics parks?'
    ],
    researchAndIntelligence: [
      'Residential and commercial real estate supply, demand, and vacancy rate censuses',
      'Tenant preference, rental yield, and commercial lease terms benchmarking',
      'Urban planning, zoning, and infrastructure procurement regulatory scans'
    ],
    consultingAndStrategy: [
      'Real estate development feasibility studies and optimal concept master planning',
      'Construction project governance, risk management, and contractor procurement strategy',
      'Affordable housing public-private partnership (PPP) structuring'
    ],
    aiOpportunities: [
      'Predictive construction material price inflation and project schedule risk modelling',
      'Automated building permit and environmental compliance document verification',
      'AI-driven tenant occupancy forecasting and commercial lease optimisation'
    ],
    capabilityBuilding: [
      'Real estate development teams training on financial feasibility and market validation',
      'Project managers training on digital construction progress tracking and cost control'
    ],
    enterpriseSolutions: [
      'Real Estate Market Demand & Rental Yield Intelligence Vault',
      'Construction Project Cost & Schedule Risk Governance Platform'
    ],
    illustrativeEngagement: {
      title: 'Illustrative Capability: Master-Planned Mixed-Use Development Feasibility & Market Validation',
      challenge: 'An institutional investor required rigorous market validation before committing $45M to a 100-acre mixed-use urban development.',
      investigation: 'Conducted 350 demographic interviews, surveyed 80 corporate tenants, and analysed competitive residential pipeline data.',
      strategicDecision: 'Recommended downsizing speculative office space in favour of middle-income residential units and convenience retail.',
      aiLayer: 'Created a financial simulation model evaluating cash flow under varying construction inflation and absorption rates.',
      deliverables: [
        'Comprehensive 100-Acre Master Plan Feasibility Dossier',
        'Phased Development & Tenant Allocation Strategy',
        'Dynamic Project Financial Sensitivity Model'
      ],
      outcomeFramework: [
        'Achieved 88% off-plan residential pre-sales in Phase 1',
        'Reduced unabsorbed commercial space risk by $14M',
        'Secured institutional co-investment from international pension funds'
      ]
    },
    sectorEcosystem: {
      market: 'Strong demand for affordable housing, modern logistics parks, and green-certified buildings.',
      competitors: 'International civil engineering firms competing with local construction contractors and developers.',
      customers: 'Homebuyers, corporate tenants, industrial logistics firms, and government infrastructure agencies.',
      regulators: 'National construction authorities, county planning departments, and environmental bodies.',
      operations: 'Site excavation, concrete casting, structural steel erection, MEP installation, and finishing.',
      technology: 'Building Information Modelling (BIM), drone site surveys, and construction management software.',
      people: 'Civil engineers, architects, quantity surveyors, project managers, and site supervisors.',
      aiOpportunities: 'Computer-vision drone inspection for site safety and predictive schedule delay modelling.'
    }
  },
  {
    id: 'transport-logistics',
    name: 'Transport, Logistics & Warehousing',
    category: 'diversified-vertical',
    tier: 'cross-sector',
    tagline: 'Corridor freight intelligence, warehousing efficiency, fleet optimisation, and trade compliance.',
    description: 'Advising 3PL logistics providers, freight forwarders, port authorities, and warehouse operators on transit efficiency, customs clearance, and cold chains.',
    heritageNote: 'Cross-Sector Application of MindCraft Consulting & Research Methodologies',
    designMetaphor: {
      theme: 'Freight Corridor Velocity & Multimodal Tracking',
      accentColor: '#059669',
      icon: 'Truck',
      keyMetricType: 'Corridor Dwell Time & Fleet Turnaround Ratio'
    },
    context: 'Managing border post clearance delays, road freight infrastructure bottlenecks, cargo pilferage, and pharmaceutical/food cold-chain breaks.',
    keyQuestions: [
      'What route and cross-docking models minimise transit dwell times along major regional trade corridors?',
      'How can a logistics firm build certified GDP (Good Distribution Practice) pharmaceutical cold-chain capacity?',
      'What digital platforms streamline customs clearance and single-window cargo tracking?'
    ],
    researchAndIntelligence: [
      'Trade corridor transit time, border post delay, and transport tariff benchmarking',
      'Shipper and cargo-owner logistics provider selection criteria surveys',
      'Customs harmonisation, AfCFTA rules of origin, and transport policy scans'
    ],
    consultingAndStrategy: [
      'Logistics network redesign and regional hub-and-spoke warehousing strategy',
      'Pharmaceutical and perishable cold-chain standard operating procedure design',
      'Freight forwarding digital transformation and customer portal strategy'
    ],
    aiOpportunities: [
      'Predictive cross-border transit time and customs dwell delay estimation models',
      'AI-driven warehouse slotting, order batching, and inventory space optimisation',
      'Fleet fuel consumption anomaly detection and predictive driver safety scoring'
    ],
    capabilityBuilding: [
      'Logistics operations teams training on digital cargo tracking and customs single-window systems',
      'Warehouse supervisors training on good distribution practice (GDP) compliance'
    ],
    enterpriseSolutions: [
      'Cross-Border Corridor Transit Time & Dwell Prediction Hub',
      'Good Distribution Practice (GDP) Cold-Chain Quality Radar'
    ],
    illustrativeEngagement: {
      title: 'Illustrative Capability: Regional Logistics Provider Cold-Chain & Corridor Optimisation',
      challenge: 'A 3PL logistics company suffered high transit delays and temperature excursions on pharmaceutical shipments between coastal ports and inland capitals.',
      investigation: 'Audited 120 freight journeys, evaluated reefer truck telematics, and mapped 6 border post customs checkpoints.',
      strategicDecision: 'Established a dedicated pre-cleared green-lane protocol and instituted strict reefer truck IoT monitoring SLAs.',
      aiLayer: 'Built a real-time temperature excursion prediction and border dwell-time forecasting tool.',
      deliverables: [
        'Regional Transit Corridor Performance & Risk Dossier',
        'GDP Pharmaceutical Cold-Chain Standard Operating Procedures',
        'Real-Time Cargo Telemetry & Dwell Warning Hub'
      ],
      outcomeFramework: [
        'Reduced cross-border transit time from 8 days to 3.5 days',
        'Eliminated pharmaceutical temperature excursion incidents (zero loss)',
        'Secured master logistics contracts with 3 global pharma manufacturers'
      ]
    },
    sectorEcosystem: {
      market: 'High growth driven by regional trade integration, e-commerce, and expanding retail supply chains.',
      competitors: 'Global freight forwarders competing with regional trucking firms and localised clearing agents.',
      customers: 'Importers, exporters, manufacturers, pharmaceutical distributors, and agricultural estates.',
      regulators: 'Revenue authorities (customs), port authorities, transport safety boards, and corridor agencies.',
      operations: 'Container handling, customs bonded warehousing, long-haul trucking, and last-mile dispatch.',
      technology: 'GPS fleet tracking, electronic cargo tracking systems (ECTS), and warehouse management software.',
      people: 'Fleet controllers, customs clearing agents, warehouse operations managers, and long-haul drivers.',
      aiOpportunities: 'Predictive port container dwell time forecasting and automated freight rate quoting.'
    }
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing',
    category: 'diversified-vertical',
    tier: 'cross-sector',
    tagline: 'Operational excellence, overall equipment effectiveness (OEE), lean manufacturing, and workforce capability.',
    description: 'Advising industrial manufacturers, plastics producers, steel mills, and packaging converters on factory floor efficiency, yield, and automation.',
    heritageNote: 'Cross-Sector Application of MindCraft Consulting & Research Methodologies',
    designMetaphor: {
      theme: 'Operations Intelligence & Lean Flow Topology',
      accentColor: '#ea580c',
      icon: 'Factory',
      keyMetricType: 'Overall Equipment Effectiveness (OEE) & Scrap Reduction'
    },
    context: 'Managing erratic power grid quality, rising raw material import costs, machinery downtime, and manual quality inspection bottlenecks.',
    keyQuestions: [
      'How can an industrial manufacturing plant increase Overall Equipment Effectiveness (OEE) from 55% to over 75%?',
      'What lean process workflows eliminate scrap and reduce changeover time on high-speed production lines?',
      'How can manufacturing leadership introduce practical AI tools without replacing frontline workforce experience?'
    ],
    researchAndIntelligence: [
      'Factory floor time-and-motion studies, bottleneck identification, and scrap analysis',
      'Industrial equipment downtime root-cause and maintenance practice audits',
      'Regional manufacturing competitiveness and import-parity pricing studies'
    ],
    consultingAndStrategy: [
      'Lean manufacturing transformation, 5S implementation, and Kaizen process design',
      'Plant maintenance strategy shifting from reactive firefighting to preventive & predictive models',
      'Total Quality Management (TQM) and ISO 9001 quality system certification advisory'
    ],
    aiOpportunities: [
      'Computer-vision assisted real-time automated quality defect detection on high-speed lines',
      'Predictive machine maintenance algorithms analysing vibration, temperature, and power draw',
      'AI-driven production schedule optimisation balancing batch sizes with customer order deadlines'
    ],
    capabilityBuilding: [
      'Plant managers and supervisors training on OEE calculation, root-cause problem solving, and lean tools',
      'Maintenance technicians training on predictive sensor diagnostics and digital work-order logs'
    ],
    enterpriseSolutions: [
      'Factory Overall Equipment Effectiveness (OEE) & Downtime Analytics Hub',
      'Computer-Vision Automated Defect Inspection & Quality Engine'
    ],
    illustrativeEngagement: {
      title: 'Illustrative Capability: Industrial Packaging Manufacturer OEE & Quality Turnaround',
      challenge: 'A plastics and packaging manufacturer faced high scrap rates (8.4%) and frequent unbudgeted extruder machine breakdowns.',
      investigation: 'Conducted a 4-week factory floor diagnostic across 12 production lines, identifying machine calibration drifts and poor changeover routines.',
      strategicDecision: 'Implemented standard centerlining procedures, visual 5S controls, and structured preventive maintenance schedules.',
      aiLayer: 'Installed IoT vibration sensors and computer-vision scrap cameras on primary extrusion lines.',
      deliverables: [
        'Plant Operational Bottleneck & Scrap Root-Cause Dossier',
        'Lean Manufacturing Standard Operating Procedure Suite',
        'Factory OEE & Predictive Maintenance Dashboard'
      ],
      outcomeFramework: [
        'Boosted Overall Equipment Effectiveness (OEE) from 58% to 76%',
        'Cut production scrap rate from 8.4% to 2.1%, saving $420K annually',
        'Reduced unbudgeted machine breakdown hours by 52%'
      ]
    },
    sectorEcosystem: {
      market: 'Expansion of import-substitution manufacturing across plastics, metals, paper, and construction materials.',
      competitors: 'Domestic manufacturing plants competing against low-cost Asian imports and regional producers.',
      customers: 'FMCG brand owners, construction contractors, agricultural distributors, and wholesalers.',
      regulators: 'Standards bureaus, environmental management bodies, and occupational safety departments.',
      operations: 'Raw material mixing, extrusion, stamping, assembly, quality inspection, and warehousing.',
      technology: 'PLC machine controllers, SCADA industrial networks, ERP systems, and IoT vibration sensors.',
      people: 'Plant managers, production line operators, maintenance fitters, and quality assurance inspectors.',
      aiOpportunities: 'Computer-vision defect detection on moving conveyor lines and automated energy optimisation.'
    }
  },
  {
    id: 'mining-extractives',
    name: 'Mining & Extractives',
    category: 'diversified-vertical',
    tier: 'cross-sector',
    tagline: 'Resource supply chain intelligence, local content compliance, operational safety, and environmental advisory.',
    description: 'Supporting mining operators, mineral processors, equipment suppliers, and government agencies with supply chain strategy and regulatory compliance.',
    heritageNote: 'Cross-Sector Application of MindCraft Consulting & Research Methodologies',
    designMetaphor: {
      theme: 'Resource Supply Chain & ESG Compliance Topology',
      accentColor: '#78716c',
      icon: 'Pickaxe',
      keyMetricType: 'Haulage Cycle Efficiency & ESG Compliance Index'
    },
    context: 'Managing remote site logistics, local content procurement regulations, environmental impact scrutiny, and heavy equipment maintenance costs.',
    keyQuestions: [
      'How can a mining operation satisfy strict local content procurement regulations while maintaining supply quality?',
      'What operational workflow improvements reduce heavy haulage cycle times and fuel expenditure?',
      'How should a mining enterprise structure transparent community benefit and ESG reporting systems?'
    ],
    researchAndIntelligence: [
      'Local supplier capability audits and local content procurement availability studies',
      'Mining transport corridor logistics bottlenecks and port transit studies',
      'Mining code, royalty structures, and environmental sustainability regulatory scans'
    ],
    consultingAndStrategy: [
      'Local content supplier development and procurement capacity building programmes',
      'Mine site supply chain resilience and strategic spares inventory optimisation',
      'Environmental, Social, and Governance (ESG) strategy and community stakeholder engagement'
    ],
    aiOpportunities: [
      'Predictive maintenance for heavy mobile equipment (haul trucks, excavators) from sensor telemetry',
      'AI-optimized haul truck dispatch and fuel efficiency routing models',
      'Automated satellite environmental monitoring for land rehabilitation and tailings dam safety'
    ],
    capabilityBuilding: [
      'Mining procurement teams training on local supplier capability development',
      'Mine operations managers training on predictive safety analytics and ESG reporting'
    ],
    enterpriseSolutions: [
      'Mining Local Content Procurement & Supplier Development Portal',
      'Heavy Equipment Maintenance & Telemetry Intelligence Hub'
    ],
    illustrativeEngagement: {
      title: 'Illustrative Capability: Gold Mining Operation Local Content & Supply Chain Strategy',
      challenge: 'A commercial mining operation struggled to meet mandatory 60% local content procurement targets due to supplier capacity deficits.',
      investigation: 'Audited 110 local suppliers, evaluating quality certifications, delivery reliability, and working capital constraints.',
      strategicDecision: 'Created a tiered supplier development programme offering technical mentorship, safety training, and early invoice payment.',
      aiLayer: 'Engineered a digital supplier discovery and compliance tracking portal.',
      deliverables: [
        'Local Content Supplier Landscape & Capability Dossier',
        'Supplier Incubation & Technical Upskilling Framework',
        'Digital Supplier Compliance & Spend Radar'
      ],
      outcomeFramework: [
        'Increased local procurement spend from 34% to 63% within 18 months',
        'Zero regulatory penalties from the national minerals commission',
        'Developed 14 certified local engineering and fabrication suppliers'
      ]
    },
    sectorEcosystem: {
      market: 'High global demand for critical transition minerals (copper, cobalt, lithium, manganese, gold, bauxite).',
      competitors: 'International mining corporations alongside state-owned mining enterprises and junior explorers.',
      customers: 'Global commodity trading houses, metal refiners, and battery manufacturers.',
      regulators: 'Ministries of mines, geological surveys, environmental protection agencies, and revenue boards.',
      operations: 'Drilling, blasting, haulage, crushing, flotation, smelting, and tailings management.',
      technology: 'Fleet management telemetry, geological 3D modelling, drone surveys, and automated weighbridges.',
      people: 'Mining engineers, geologists, heavy equipment operators, metallurgists, and community liaisons.',
      aiOpportunities: 'Ore grade prediction from drilling telemetry and automated tailings dam monitoring.'
    }
  },
  {
    id: 'healthcare-wellness',
    name: 'Healthcare & Wellness',
    category: 'diversified-vertical',
    tier: 'cross-sector',
    tagline: 'Consumer health trends, corporate wellness programmes, nutrition, and preventive digital health advisory.',
    description: 'Advising consumer health brands, nutraceutical makers, wellness platforms, and corporate employee health initiatives across African consumer markets.',
    heritageNote: 'Cross-Sector Wellness & Consumer Health (Distinct from Life Sciences Core Hospitals & Clinical Providers)',
    designMetaphor: {
      theme: 'Preventive Health & Consumer Wellbeing Topology',
      accentColor: '#06b6d4',
      icon: 'HeartPulse',
      keyMetricType: 'Consumer Habit Retention & Wellness Engagement'
    },
    context: 'Rising middle-class focus on preventive health, fitness, nutrition, mental health awareness, and over-the-counter (OTC) wellness products.',
    keyQuestions: [
      'What are consumer attitudes toward preventive nutraceuticals, vitamins, and functional foods across urban centres?',
      'How can corporate employers structure measurable wellness programmes that reduce employee absenteeism and healthcare claims?',
      'What digital health wellness apps achieve high daily active user engagement in African markets?'
    ],
    researchAndIntelligence: [
      'Urban consumer health, fitness, and nutritional supplement purchasing habit surveys',
      'Over-the-counter (OTC) wellness brand perception and retail pharmacy shelf audits',
      'Corporate employee health risk assessments and insurance utilisation diagnostics'
    ],
    consultingAndStrategy: [
      'Consumer health and nutraceutical brand positioning and retail channel strategy',
      'Corporate employee wellness programme design with measurable health outcomes',
      'Preventive digital health app product strategy and engagement mechanics'
    ],
    aiOpportunities: [
      'Personalized nutrition and wellness recommendation algorithms based on user lifestyle data',
      'Conversational AI health coaches providing evidence-based lifestyle and stress management guidance',
      'Aggregated corporate wellness analytics predicting health risk trends while preserving employee privacy'
    ],
    capabilityBuilding: [
      'Wellness programme managers training on health outcome measurement and behavioural nudge design',
      'Corporate HR teams training on digital employee wellbeing tools'
    ],
    enterpriseSolutions: [
      'Corporate Employee Wellness & Health Risk Intelligence Hub',
      'Consumer Nutraceutical Brand Positioning & Retail Channel Radar'
    ],
    illustrativeEngagement: {
      title: 'Illustrative Capability: Regional Consumer Wellness & Nutraceutical Brand Launch',
      challenge: 'A wellness brand sought to launch a range of fortified nutritional supplements across urban East Africa without high marketing waste.',
      investigation: 'Surveyed 600 urban consumers and audited 150 pharmacies, health stores, and modern retail supermarkets.',
      strategicDecision: 'Positioned the product line around daily immunity and mental focus, partnering with corporate wellness challenges and fitness influencers.',
      aiLayer: 'Built a conversational lifestyle health assessment bot that generates personalized nutritional advice.',
      deliverables: [
        'Urban Consumer Wellness Persona & Demand Dossier',
        'Retail Placement & Influencer Marketing Playbook',
        'Conversational Lifestyle Assessment Bot Prototype'
      ],
      outcomeFramework: [
        'Secured retail shelf placement in over 320 pharmacy and supermarket locations',
        'Achieved 42% repeat purchase rate within the first 6 months',
        'Generated 85,000 completed digital wellness assessments'
      ]
    },
    sectorEcosystem: {
      market: 'Rapidly growing consumer spending on vitamins, fitness memberships, mental health, and functional foods.',
      competitors: 'International supplement brands competing with local herbal formulators and FMCG nutrition brands.',
      customers: 'Urban middle-class consumers, fitness enthusiasts, corporate HR departments, and wellness seekers.',
      regulators: 'Food and drug authorities, standards bureaus, and advertising regulatory boards.',
      operations: 'Formulation blending, clean packaging, retail distribution, and direct-to-consumer e-commerce.',
      technology: 'Mobile wellness apps, wearable device synchronization, and digital habit trackers.',
      people: 'Nutritionists, wellness coaches, brand managers, and digital community moderators.',
      aiOpportunities: 'Personalized dietary recommendations and automated stress pattern detection from activity logs.'
    }
  },
  {
    id: 'retail-consumer-goods',
    name: 'Retail & Consumer Goods',
    category: 'diversified-vertical',
    tier: 'cross-sector',
    tagline: 'Consumer shopping insights, modern trade vs general trade dynamics, e-commerce, and brand equity.',
    description: 'Supporting FMCG brand owners, retail supermarket chains, e-commerce platforms, and direct-to-consumer innovators with market intelligence.',
    heritageNote: 'Cross-Sector Application of MindCraft Consulting & Research Methodologies',
    designMetaphor: {
      theme: 'Retail Basket Analytics & Consumer Sentiment',
      accentColor: '#f43f5e',
      icon: 'ShoppingBag',
      keyMetricType: 'Basket Size & General Trade On-Shelf Availability'
    },
    context: 'Dominance of informal general trade (dukasa/spazas/kiosks) over modern supermarkets, price sensitivity, and cash-to-mobile money shopping behaviour.',
    keyQuestions: [
      'What product package sizes and price points maximise velocity across informal retail kiosks?',
      'How can an FMCG brand optimise promotional spend across modern supermarket retail chains?',
      'What e-commerce fulfillment and quick-commerce delivery models are commercially viable in high-density urban areas?'
    ],
    researchAndIntelligence: [
      'Consumer shopper intercepted interviews, basket analysis, and brand switching studies',
      'Retail store censuses mapping SKU distribution, pricing compliance, and out-of-stocks',
      'Modern supermarket category management and supplier margin benchmarking'
    ],
    consultingAndStrategy: [
      'Pack-price architecture and affordable sachet strategy for emerging consumers',
      'General trade route-to-market and wholesale channel incentive design',
      'Retail category management and joint business planning (JBP) frameworks'
    ],
    aiOpportunities: [
      'Computer-vision shelf image recognition for automated retail audits and planogram compliance',
      'Predictive consumer demand forecasting linked to pay-day cycles and festive seasons',
      'Personalized retail customer loyalty promotion and cross-sell recommendation engines'
    ],
    capabilityBuilding: [
      'Trade marketing and sales reps training on mobile retail data collection and store grading',
      'Brand managers training on consumer sentiment analytics and price elasticity models'
    ],
    enterpriseSolutions: [
      'General Trade Retail Execution & On-Shelf Availability Radar',
      'Consumer Goods Price-Pack Architecture & Demand Simulation Hub'
    ],
    illustrativeEngagement: {
      title: 'Illustrative Capability: FMCG Brand Portfolio Price-Pack Architecture & General Trade Strategy',
      challenge: 'A consumer packaged goods company experienced declining market share as inflation eroded consumer purchasing power for standard pack sizes.',
      investigation: 'Audited 1,000 retail kiosks and conducted 400 consumer pantry interviews across 4 urban centres.',
      strategicDecision: 'Introduced affordable micro-pack single-use sizes and restructured distributor trade margins to protect kiosk stocking.',
      aiLayer: 'Built a predictive sales simulation model tracking price elasticity across retail segments.',
      deliverables: [
        'Consumer Inflation & Shopping Basket Shift Dossier',
        'Micro-Pack Sizing & Pricing Architecture Blueprint',
        'Retail Kiosk Coverage & Availability Tracker'
      ],
      outcomeFramework: [
        'Reversed market share decline, achieving a 21% volume growth in target categories',
        'Achieved 94% on-shelf kiosk availability in covered urban zones',
        'Protected brand gross margin across inflationary cycles'
      ]
    },
    sectorEcosystem: {
      market: 'High-volume consumer market characterized by dual retail: small modern trade and dominant informal kiosks.',
      competitors: 'Multinational consumer giants competing with local agile brand formulators and private label imports.',
      customers: 'Price-conscious everyday shoppers, household decision-makers, and informal shopkeepers.',
      regulators: 'Standards bureaus, consumer protection authorities, and municipal trade licensing offices.',
      operations: 'High-velocity manufacturing, primary/secondary warehousing, van sales, and retail merchandising.',
      technology: 'Handheld POS scanners, mobile money B2B payments, and distributor management systems (DMS).',
      people: 'Merchandisers, van sales drivers, trade marketing managers, and category analysts.',
      aiOpportunities: 'Computer-vision shelf share tracking and localised consumer demand spike prediction.'
    }
  },
  {
    id: 'education-training',
    name: 'Education & Training',
    category: 'diversified-vertical',
    tier: 'cross-sector',
    tagline: 'Higher education strategy, ed-tech market feasibility, workforce skills gap analytics, and digital learning.',
    description: 'Advising private university networks, technical vocational institutes, corporate academies, and ed-tech innovators on curriculum and institutional growth.',
    heritageNote: 'Cross-Sector Application of MindCraft Consulting & Research Methodologies',
    designMetaphor: {
      theme: 'Pedagogical Pathway & Institutional Capability Fabric',
      accentColor: '#8b5cf6',
      icon: 'GraduationCap',
      keyMetricType: 'Student Employability & Digital Course Completion'
    },
    context: 'Bridging the gap between university graduate skills and employer hiring needs, tuition affordability, and digital blended learning infrastructure.',
    keyQuestions: [
      'What technical, digital, and healthcare degree programmes have the highest employer hiring demand and tuition willingness-to-pay?',
      'How can an educational institution transition toward scalable, hybrid digital learning without drop in student completion?',
      'What corporate upskilling programmes are employers willing to sponsor for mid-career professionals?'
    ],
    researchAndIntelligence: [
      'Employer skills-gap surveys and emerging industry job role demand research',
      'Student and parent education affordability, programme perception, and career expectation studies',
      'Higher education commission accreditation standards and online degree regulations'
    ],
    consultingAndStrategy: [
      'University strategic planning, new programme feasibility, and faculty operating models',
      'Workforce curriculum modernisation aligned to industry certification standards',
      'Corporate training academy structuring and commercial B2B offering design'
    ],
    aiOpportunities: [
      'AI-driven personalized student learning paths and automated formative feedback tutors',
      'Predictive student retention models flagging at-risk students before course dropout',
      'Automated grading and assessment tools for high-enrollment technical assignments'
    ],
    capabilityBuilding: [
      'Faculty members training on AI-assisted instructional design and interactive teaching',
      'University administrative leadership training on educational data analytics'
    ],
    enterpriseSolutions: [
      'Institutional Student Retention & Academic Performance Radar',
      'Industry Skills-Gap & Curriculum Feasibility Intelligence Hub'
    ],
    illustrativeEngagement: {
      title: 'Illustrative Capability: Private Higher Education Network Digital Curriculum Transformation',
      challenge: 'A university network suffered a 32% student dropout rate in introductory technical courses and low graduate employment metrics.',
      investigation: 'Surveyed 80 enterprise employers and evaluated academic engagement data across 4,500 enrolled students.',
      strategicDecision: 'Overhauled the curriculum to incorporate project-based practical milestones and industry co-certified credentials.',
      aiLayer: 'Integrated an early-warning student engagement analytics dashboard for academic advisors.',
      deliverables: [
        'Employer Industry Skills Demand Blueprint',
        'Hybrid Digital Curriculum Redesign Framework',
        'Student Retention Early-Warning Analytics Dashboard'
      ],
      outcomeFramework: [
        'Reduced first-year student dropout rate from 32% to 11%',
        'Increased graduate employment placement within 6 months from 52% to 84%',
        'Expanded overall institutional enrolment by 28%'
      ]
    },
    sectorEcosystem: {
      market: 'Huge youth demographic driving soaring demand for higher education, tech skills, and vocational training.',
      competitors: 'Public universities competing with private university groups, vocational institutes, and online bootcamps.',
      customers: 'Students, self-paying parents, mid-career professionals, and corporate enterprise HR sponsors.',
      regulators: 'Commissions for university education, technical training authorities, and examination bodies.',
      operations: 'Campus facilities, student admissions, faculty scheduling, examinations, and alumni relations.',
      technology: 'Learning Management Systems (LMS), virtual classrooms, proctoring software, and student portals.',
      people: 'Professors, academic advisors, instructional designers, admissions officers, and career counselors.',
      aiOpportunities: 'Automated 24/7 student tutoring agents and intelligent curriculum relevance mapping.'
    }
  },
  {
    id: 'professional-business-services',
    name: 'Professional & Business Services',
    category: 'diversified-vertical',
    tier: 'cross-sector',
    tagline: 'Legal, accounting, advisory, and outsourcing operational modernisation and AI workflow integration.',
    description: 'Advising law firms, audit practices, management consulting boutiques, and business process outsourcing (BPO) centres on automation and service design.',
    heritageNote: 'Cross-Sector Application of MindCraft Consulting & Research Methodologies',
    designMetaphor: {
      theme: 'Knowledge Work Velocity & Governed Automation',
      accentColor: '#38bdf8',
      icon: 'Briefcase',
      keyMetricType: 'Billable Realization & Knowledge Worker Productivity'
    },
    context: 'Managing fee compression, talent retention, confidential client data protection, and transitioning from billable hours to value-based advisory.',
    keyQuestions: [
      'How can professional service firms automate repetitive document drafting and contract review safely?',
      'What operating model enables business process outsourcing (BPO) centres to move up the value chain into AI data annotation and analytics?',
      'How should professional practices govern employee use of public vs private enterprise AI models?'
    ],
    researchAndIntelligence: [
      'Corporate client satisfaction, legal/audit service buyer preference, and fee pricing benchmarks',
      'Knowledge worker productivity and administrative task time-utilization diagnostics',
      'Data privacy, professional confidentiality, and professional body compliance standards'
    ],
    consultingAndStrategy: [
      'Professional firm operating model restructuring and value-based pricing strategy',
      'Enterprise AI adoption governance, confidentiality policies, and tool selection',
      'Business Process Outsourcing (BPO) value-chain upgrading and service diversification blueprints'
    ],
    aiOpportunities: [
      'Private tenant-isolated vector RAG search across internal legal precedents and audit workpapers',
      'Automated contract clause extraction, risk redlining, and compliance verification',
      'AI-assisted proposal generation and consulting research synthesis tools'
    ],
    capabilityBuilding: [
      'Attorneys, auditors, and consultants training on advanced prompt engineering and private RAG tools',
      'Firm partners masterclasses on AI governance, liability, and practice transformation'
    ],
    enterpriseSolutions: [
      'Private Knowledge Vault & Legal Precedent Semantic Search Hub',
      'Professional Practice Time-Utilization & Proposal Acceleration Engine'
    ],
    illustrativeEngagement: {
      title: 'Illustrative Capability: Regional Commercial Law Firm Private AI Vault & Workflow Automation',
      challenge: 'A 60-lawyer corporate law firm faced fee pressure and spent excessive associate hours on manual contract due-diligence and clause discovery.',
      investigation: 'Analysed 8,000 hours of associate billables across M&A due diligence and commercial leasing contracts.',
      strategicDecision: 'Deployed a private, air-gapped vector search knowledge vault indexing 15 years of firm precedents.',
      aiLayer: 'Integrated an intelligent contract comparison and clause extraction engine with strict privilege protections.',
      deliverables: [
        'Legal Workflow & Precedent Indexing Blueprint',
        'Firm-Wide Responsible AI Governance Policy',
        'Private Precedent Search & Contract Review Tool'
      ],
      outcomeFramework: [
        'Shortened contract due-diligence review turnaround by 65%',
        'Boosted partner billable realization on fixed-fee retainers by 28%',
        'Zero client confidentiality or data privacy breaches'
      ]
    },
    sectorEcosystem: {
      market: 'Growing demand for specialised corporate legal, tax, audit, risk advisory, and business outsourcing services.',
      competitors: 'Big 4 audit firms and global legal networks competing with leading regional independent practices.',
      customers: 'Multinational corporations, financial institutions, private equity sponsors, and high-growth startups.',
      regulators: 'Law societies, institutes of certified public accountants, and data protection commissioners.',
      operations: 'Matter management, time tracking, conflict checking, document drafting, and client billing.',
      technology: 'Practice management systems, secure virtual data rooms, document automation, and private LLMs.',
      people: 'Partners, senior associates, audit managers, paralegals, and knowledge management directors.',
      aiOpportunities: 'Automated contract clause redlining and intelligent cross-matter research synthesis.'
    }
  },
  {
    id: 'environmental-waste-water',
    name: 'Environmental, Waste & Water Management',
    category: 'diversified-vertical',
    tier: 'cross-sector',
    tagline: 'Circular economy strategy, municipal water utility optimisation, industrial effluent compliance, and waste-to-value.',
    description: 'Advising water utilities, industrial recyclers, municipal waste management contractors, and sustainability investors on operational and regulatory models.',
    heritageNote: 'Cross-Sector Application of MindCraft Consulting & Research Methodologies',
    designMetaphor: {
      theme: 'Circular Resource Flow & Environmental Telemetry',
      accentColor: '#10b981',
      icon: 'Recycle',
      keyMetricType: 'Non-Revenue Water Loss Reduction & Recycled Material Recovery'
    },
    context: 'Managing non-revenue water loss in municipal grids, informal waste collection economics, industrial wastewater standards, and circular plastics mandates.',
    keyQuestions: [
      'How can a water utility reduce non-revenue physical and commercial water losses from 40%+ to under 20%?',
      'What commercial collection and pricing models make formal plastics recycling sustainable across urban centres?',
      'How can industrial manufacturing zones achieve zero-liquid-discharge (ZLD) effluent compliance cost-effectively?'
    ],
    researchAndIntelligence: [
      'Household and commercial water consumption, tariff willingness-to-pay, and meter bypass audits',
      'Informal waste-picker supply chains and municipal waste stream material composition censuses',
      'Environmental regulatory standards (effluent discharge, extended producer responsibility) scans'
    ],
    consultingAndStrategy: [
      'Municipal water utility performance improvement and non-revenue water reduction blueprints',
      'Extended Producer Responsibility (EPR) compliance and producer responsibility organisation (PRO) design',
      'Industrial wastewater treatment concession and waste-to-energy financial modelling'
    ],
    aiOpportunities: [
      'Acoustic sensor and pressure-telemetry water leak detection algorithms on municipal pipelines',
      'Computer-vision automated sorting and contamination detection for plastics recycling conveyor belts',
      'Predictive municipal waste generation modelling optimising collection truck routes'
    ],
    capabilityBuilding: [
      'Water utility engineers training on acoustic smart-meter telemetry and pressure management',
      'Municipal waste management teams training on digital waste tracking and EPR data reporting'
    ],
    enterpriseSolutions: [
      'Municipal Non-Revenue Water Loss Detection & Pressure Telemetry Hub',
      'Extended Producer Responsibility (EPR) Waste Recovery & Traceability Portal'
    ],
    illustrativeEngagement: {
      title: 'Illustrative Capability: Municipal Water Utility Non-Revenue Water Loss Turnaround',
      challenge: 'A metropolitan water utility suffered a 44% non-revenue water (NRW) loss from unmapped pipeline leaks and illegal commercial bypasses.',
      investigation: 'Audited 250 kilometers of primary water mains, deployed acoustic listening sticks, and reconciled billing records with bulk flow meters.',
      strategicDecision: 'Subdivided the grid into District Metered Areas (DMAs) with automated pressure reduction valves and prioritised maintenance crews.',
      aiLayer: 'Engineered an automated acoustic leak anomaly detection and billing discrepancy algorithm.',
      deliverables: [
        'Non-Revenue Water Diagnostic & Network Audit Dossier',
        'District Metered Area (DMA) Restructuring Playbook',
        'Real-Time Water Balance & Leak Alert Dashboard'
      ],
      outcomeFramework: [
        'Reduced non-revenue water losses from 44% to 23% in 12 months',
        'Recovered $3.2M in annualized billing revenue for the municipal utility',
        'Improved average daily water supply continuity from 8 hours to 18 hours'
      ]
    },
    sectorEcosystem: {
      market: 'High urgency driven by urban population growth, climate resilience, and strict corporate ESG commitments.',
      competitors: 'Municipal public utilities, private water concessions, waste recyclers, and informal collectors.',
      customers: 'Municipal governments, industrial manufacturing parks, residential estates, and sustainability donors.',
      regulators: 'Water services regulatory boards, national environmental authorities, and municipal health inspectors.',
      operations: 'Water abstraction, water treatment, pipeline distribution, waste collection, sorting, and recycling.',
      technology: 'Electromagnetic flow meters, acoustic leak loggers, smart pressure valves, and NIR optical sorters.',
      people: 'Water hydraulic engineers, environmental inspectors, waste collection drivers, and plant operators.',
      aiOpportunities: 'Acoustic pipe leak detection and predictive urban waste generation volume modelling.'
    }
  }
];

// ==========================================
// AFRICA INTELLIGENCE - 5 REGIONS & EXACT COUNTRY LISTS
// ==========================================
export const AFRICA_REGIONS_DATA: AfricaRegionData[] = [
  {
    name: 'East Africa',
    countries: [
      'Kenya',
      'Ethiopia',
      'Uganda',
      'Tanzania',
      'Rwanda',
      'Burundi',
      'South Sudan',
      'Somalia',
      'Djibouti',
      'Eritrea'
    ],
    headline: 'MindCraft Continental Headquarters & East African Regional Integration Hub',
    regionalContext: 'Dynamic economic community (EAC) with rapid digital health innovation, harmonised medicines registration guidelines, and expanding agro-processing.',
    industryOpportunity: [
      'Pharmaceuticals & Biologics Market Access',
      'Medical Device Distributor Networks',
      'Agrochemicals & Crop Protection Channels',
      'Mobile Financial Services & Digital Banking',
      'Renewable Energy & Mini-Grid Financing'
    ],
    researchCapability: [
      '500+ Physician & Pharmacist Primary Intelligence Network',
      'Hospital Formulary & Procurement Decision Audits',
      'Rural Agro-Dealer & Farmer Adoption Censuses',
      'EAC Regional Regulatory Harmonisation Scans'
    ],
    strategicQuestions: [
      'How to structure a pan-EAC regulatory submission strategy across PPB, NDA, TMDA, and FDA Rwanda?',
      'What are the commercial and reimbursement realities of newly transitioning social health schemes?',
      'How can consumer brands build resilient distribution corridors connecting Mombasa port to inland capitals?'
    ],
    aiOpportunities: [
      'Automated East African regulatory gazette & guideline change-tracker',
      'Predictive hospital tender demand modelling for medical equipment',
      'Agricultural weather-indexed yield forecasting and credit scoring'
    ],
    potentialEngagements: [
      'Pan-East Africa Market Entry Blueprint',
      'EAC Regulatory Fast-Track Advisory Retainer',
      'Commercial Sales Force AI Enablement Cohort',
      'Hospital Network Claims Automation & Revenue Cycle Engine'
    ]
  },
  {
    name: 'West Africa',
    countries: [
      'Nigeria',
      'Ghana',
      'Senegal',
      'Côte d’Ivoire',
      'Liberia',
      'Sierra Leone',
      'Guinea',
      'Guinea-Bissau',
      'Gambia',
      'Mali',
      'Burkina Faso',
      'Niger',
      'Benin',
      'Togo',
      'Cabo Verde',
      'Mauritania'
    ],
    headline: 'High-Volume Commercial Hubs, ECOWAS Trade Corridors & Dynamic Consumer Markets',
    regionalContext: 'High-density consumer populations, dual Anglophone/Francophone commercial hubs, strict NAFDAC/FDA oversight, and significant commodity trade.',
    industryOpportunity: [
      'High-Volume Pharmaceutical & Consumables Trade',
      'Diagnostic Laboratory Expansion & Molecular Screening',
      'Industrial Chemicals & Raw Material Sourcing',
      'Food Processing & FMCG General Trade Penetration',
      'Fintech & Digital SME Credit Infrastructure'
    ],
    researchCapability: [
      'Open-Market & Modern-Trade Channel Audits across Lagos, Kano, Onitsha, and Accra',
      'NAFDAC and Ghana FDA Regulatory Dossier Tracking',
      'Francophone West Africa (WAEMU) Healthcare & Commercial Scans',
      'SME Supply Chain & Payment Velocity Benchmarking'
    ],
    strategicQuestions: [
      'How can global life sciences brands navigate FX volatility while safeguarding retail shelf availability in Nigeria and Ghana?',
      'What is the optimal distributor structure balancing open-market trading hubs with modern pharmacy chains?',
      'How can an industrial manufacturer expand across Francophone WAEMU countries seamlessly?'
    ],
    aiOpportunities: [
      'AI-assisted NAFDAC / FDA regulatory submission document parsing',
      'Retail kiosk inventory velocity & counterfeit package detection',
      'Alternative data SME credit scoring for informal traders'
    ],
    potentialEngagements: [
      'West Africa Market Entry & Tier-1 Distributor Due Diligence',
      'Pharma Channel Audit & Anti-Counterfeiting Strategy',
      'Executive AI Literacy & Corporate Transformation Masterclasses',
      'B2B Trade Financing & Alternative Underwriting Platform Build'
    ]
  },
  {
    name: 'Central Africa',
    countries: [
      'Cameroon',
      'Democratic Republic of the Congo',
      'Republic of the Congo',
      'Gabon',
      'Chad',
      'Central African Republic',
      'Equatorial Guinea',
      'São Tomé and Príncipe'
    ],
    headline: 'CEMAC & ECCAS Markets, Francophone Healthcare Systems & Resource-Driven Economies',
    regionalContext: 'Predominantly Francophone markets, most sharing the CEMAC monetary union, with national regulators at different stages of maturity, significant donor-funded public-health procurement and economies anchored in extractives, timber and agriculture.',
    industryOpportunity: [
      'Essential Medicines Access & Public-Health Programme Supply',
      'Diagnostics & Laboratory Network Strengthening',
      'Mining & Extractives Supply Chain Services',
      'Agribusiness, Timber & Food Processing',
      'Telecoms, Mobile Money & Digital Payments'
    ],
    researchCapability: [
      'Francophone Physician, Pharmacist & Distributor Interviews',
      'Public & Donor-Funded Procurement Pathway Mapping',
      'CEMAC & DRC Product Registration Requirement Scans',
      'Distributor & Cold-Chain Capability Assessments across Douala, Kinshasa and Libreville'
    ],
    strategicQuestions: [
      'How should a manufacturer sequence product registration across Cameroon, Gabon, Congo and the DRC?',
      'Which distributors can reliably serve both the Douala port and inland CEMAC markets?',
      'How do donor-funded and public procurement channels shape demand for essential medicines and diagnostics in the DRC?'
    ],
    aiOpportunities: [
      'French-language regulatory document parsing and registration tracking',
      'Demand forecasting to anticipate public-health programme stock-outs',
      'Mobile-money transaction analytics for distributor and SME credit'
    ],
    potentialEngagements: [
      'Central Africa Market Entry & Registration Roadmap',
      'Distributor Due Diligence across CEMAC and the DRC',
      'Francophone Sales Force AI Enablement Programme',
      'Public-Health Supply Chain Visibility Dashboard'
    ]
  },
  {
    name: 'Southern Africa',
    countries: [
      'South Africa',
      'Botswana',
      'Namibia',
      'Zimbabwe',
      'Zambia',
      'Malawi',
      'Mozambique',
      'Angola',
      'Lesotho',
      'Eswatini',
      'Madagascar',
      'Mauritius',
      'Seychelles',
      'Comoros'
    ],
    headline: 'Mature Healthcare Infrastructure, Advanced Financial Markets & Mining Corridors',
    regionalContext: 'World-class private hospital networks, sophisticated SAHPRA regulatory benchmarks, deep financial markets, and critical mineral extraction.',
    industryOpportunity: [
      'Health Economics & Outcomes Research (HEOR) for Private Insurers',
      'Capital Medical Equipment & Managed Services (MES)',
      'Mining Supply Chain Optimisation & Local Content Compliance',
      'Banking RegTech & Algorithmic Risk Governance',
      'Automotive Aftermarket & Commercial Fleet Mobility'
    ],
    researchCapability: [
      'KOL & Private Hospital Purchasing Committee Decision Studies',
      'Single Exit Price (SEP) & Medical Scheme Reimbursement Audits',
      'Mining Corridor Logistics & Local Supplier Capacity Assessments',
      'Corporate ESG & Environmental Sustainability Benchmarking'
    ],
    strategicQuestions: [
      'How will emerging National Health Insurance (NHI) frameworks shift private hospital purchasing power in South Africa?',
      'What health economics evidence is required for Council for Medical Schemes (CMS) drug formulary coverage?',
      'How can mining operators fulfil strict local content quotas while optimising heavy haulage asset uptime?'
    ],
    aiOpportunities: [
      'Enterprise LLM private knowledge vaults for banking and legal precedents',
      'Predictive mining fleet maintenance and sensor telemetry analytics',
      'Hospital admission-to-claim AI adjudication and coding validation'
    ],
    potentialEngagements: [
      'Health Economics Value Dossier & Payer Reimbursement Strategy',
      'Enterprise AI Architecture & Tenant-Isolated Knowledge Vault Build',
      'Mining Supply Chain Local Content Development Blueprint',
      'Hospital Group Digital Health & Revenue Cycle Transformation'
    ]
  },
  {
    name: 'North Africa',
    countries: [
      'Egypt',
      'Libya',
      'Tunisia',
      'Algeria',
      'Morocco'
    ],
    headline: 'Mediterranean Gateway, High-Volume Public Tenders & Large-Scale Industrial Hubs',
    regionalContext: 'Major domestic pharmaceutical manufacturing base, centralised government procurement authorities (e.g. UPA in Egypt), and close trade integration with Europe and the Middle East.',
    industryOpportunity: [
      'Centralised Public Tender Bidding & Equipment Placement',
      'Contract Pharmaceutical Manufacturing & Bioequivalence Advisory',
      'Industrial Chemicals & Automotive Component Assembly',
      'Renewable Energy & Green Hydrogen Infrastructure Advisory',
      'Medical Tourism & Specialised Hospital Service Lines'
    ],
    researchCapability: [
      'Government Gazette & UPA Tender Award History Teardowns',
      'Egyptian Drug Authority (EDA) & Maghreb Regulatory Tracking',
      'Hospital Installed Base & Capital Asset Age Audits',
      'Cross-Border Mediterranean Supply Chain Analysis'
    ],
    strategicQuestions: [
      'What are historical discount thresholds and win-rate drivers in centralised government medical tenders?',
      'How to structure localised contract manufacturing partnerships with regional pharmaceutical plants?',
      'What are the commercial parameters for supplying automotive components into regional assembly plants in Morocco and Egypt?'
    ],
    aiOpportunities: [
      'Automated government gazette tender opportunity scraping and scoring',
      'Predictive equipment lifecycle cost simulation for hospital tenders',
      'Arabic and French NLP document parsing for regulatory submissions'
    ],
    potentialEngagements: [
      'Public Healthcare Tender Intelligence & Bid Optimisation Retainer',
      'Local Manufacturing Partnership & Licensing Feasibility Study',
      'North Africa Executive AI Enablement Masterclass Series',
      'Capital Equipment Lifecycle & Telemetry Intelligence Platform'
    ]
  }
];

// ==========================================
// PROBLEM-LED CROSS-SECTION DATASET
// "What are you trying to solve?"
// ==========================================
export const PROBLEM_CROSS_SECTIONS: ProblemCrossSection[] = [
  {
    id: 'enter-new-market',
    problemTitle: 'Enter a New Market',
    tagline: 'De-risk geographic and commercial expansion across African and international jurisdictions.',
    triggerQuestion: 'How do we enter a new regional market with the right structure, partner, regulatory license, and pricing?',
    commonIndustries: [
      'Pharmaceuticals',
      'Medical Devices',
      'Financial Services',
      'Chemicals',
      'Agrochemicals',
      'Food & Agribusiness',
      'Retail & Consumer Goods'
    ],
    mindcraftApproach: {
      research: 'Comprehensive primary field sizing, competitor benchmarking, buyer preference interviews, and regulatory timeline scans.',
      strategy: 'Formulate tiered pricing, entity setup structure, distributor qualification criteria, and go-to-market roadmaps.',
      aiEnablement: 'Deploy continuous market intelligence dashboards tracking competitor pricing, tenders, and regulatory shifts.',
      training: 'Equip local and incoming commercial leadership with market access strategies and digital field-force tools.',
      measurableOutcome: '30-40% faster time-to-market with zero unbudgeted regulatory delays and verified distributor partnerships.'
    },
    illustrativeEngagement: 'Pan-African Multi-Country Market Entry Strategy, Distributor Vetting Matrix, and Regulatory Pathway Roadmap.'
  },
  {
    id: 'understand-customers',
    problemTitle: 'Understand Customers',
    tagline: 'Uncover real purchasing behaviours, unmet clinical needs, price sensitivity, and adoption barriers.',
    triggerQuestion: 'Why are target customers not adopting our product, or what is driving customer churn?',
    commonIndustries: [
      'Hospitals & Healthcare Providers',
      'Financial Services',
      'Telecommunications & Technology',
      'Retail & Consumer Goods',
      'Tours, Travel & Hospitality',
      'Education & Training'
    ],
    mindcraftApproach: {
      research: 'Qualitative customer journey mapping, time-and-motion studies, double-blind clinician interviews, and basket analysis.',
      strategy: 'Redesign service touchpoints, loyalty incentives, pack-price architectures, and digital onboarding gates.',
      aiEnablement: 'Implement customer churn prediction algorithms and conversational feedback analytics engines.',
      training: 'Train frontline sales, customer success, and clinical staff on consultative customer experience excellence.',
      measurableOutcome: 'Measurable lift in Net Promoter Score (NPS), reduced customer acquisition cost, and 20%+ reduction in churn.'
    },
    illustrativeEngagement: 'Customer Journey Diagnostics, Churn Predictive Modelling, and Service Touchpoint Optimisation Suite.'
  },
  {
    id: 'understand-competitors',
    problemTitle: 'Understand Competitors',
    tagline: 'Track competitor pipelines, pricing elasticity, channel discounts, and commercial counter-strategies.',
    triggerQuestion: 'How are competitors pricing, winning public tenders, and winning over our key distributor accounts?',
    commonIndustries: [
      'Pharmaceuticals',
      'Medical Diagnostics',
      'Beverages',
      'Automotive',
      'Chemicals',
      'Professional & Business Services'
    ],
    mindcraftApproach: {
      research: 'Primary channel audits, mystery shopping, tender award teardowns, and distributor rebate benchmarking.',
      strategy: 'Develop competitive battlecards, defensive formulary strategies, second-line brand positioning, and rebate structures.',
      aiEnablement: 'Automated web and gazette scraper tracking competitor product registrations, pricing shifts, and tender wins.',
      training: 'Commercial sales teams enablement on competitive objection handling and value-based consultative selling.',
      measurableOutcome: 'Protected market share against low-cost imports and improved tender bid win-rates by 25%+.'
    },
    illustrativeEngagement: 'Competitor Intelligence Radar, Tender Pricing Teardown Matrix, and Commercial Counter-Strategy Playbook.'
  },
  {
    id: 'improve-operations',
    problemTitle: 'Improve Operations',
    tagline: 'Eliminate bottlenecks, reduce scrap, shorten lead times, and optimise asset productivity.',
    triggerQuestion: 'Where are our operational inefficiencies, delays, inventory stockouts, and margin leakages occurring?',
    commonIndustries: [
      'Manufacturing',
      'Transport, Logistics & Warehousing',
      'Hospitals & Healthcare Providers',
      'Mining & Extractives',
      'Construction, Real Estate & Infrastructure'
    ],
    mindcraftApproach: {
      research: 'End-to-end process mapping, time-and-motion studies, equipment downtime root-cause audits, and inventory waste analysis.',
      strategy: 'Implement lean manufacturing workflows, standard operating procedures, 5S visual controls, and SLA frameworks.',
      aiEnablement: 'Deploy Overall Equipment Effectiveness (OEE) dashboards, IoT telemetry alerts, and predictive maintenance tools.',
      training: 'Frontline supervisors and plant managers upskilled in Kaizen problem-solving, OEE calculation, and root-cause analysis.',
      measurableOutcome: '15-25% improvement in asset uptime, 50%+ reduction in scrap/waste, and faster customer fulfillment cycles.'
    },
    illustrativeEngagement: 'Lean Operations Transformation, Factory OEE Analytics Engine, and Predictive Maintenance Architecture.'
  },
  {
    id: 'build-ai-capability',
    problemTitle: 'Build AI Capability',
    tagline: 'Upskill your workforce, certify internal AI champions, and instill responsible AI governance.',
    triggerQuestion: 'How do we move our organisation from curiosity to practical, daily, governed AI usage across business functions?',
    commonIndustries: [
      'Financial Services',
      'Pharmaceuticals',
      'Telecommunications & Technology',
      'Professional & Business Services',
      'Education & Training',
      'Hospitals & Healthcare Providers'
    ],
    mindcraftApproach: {
      research: 'Organisational AI-readiness diagnostics, digital skills gap assessment, and function-by-function use case prioritisation.',
      strategy: 'Design tailored enterprise AI adoption roadmaps, responsible AI governance charters, and human-in-the-loop policies.',
      aiEnablement: 'Deploy curated private enterprise sandbox tools and customised prompt libraries tailored to team roles.',
      training: 'Multi-week applied masterclasses: executive briefings, function-specific cohorts, and train-the-trainer AI champions.',
      measurableOutcome: '70%+ daily active AI adoption rate across trained cohorts with zero confidentiality or compliance violations.'
    },
    illustrativeEngagement: 'Enterprise AI Academy, Function-Specific Prompt Engineering Cohorts, and Responsible AI Governance Charter.'
  },
  {
    id: 'automate-workflows',
    problemTitle: 'Automate Workflows',
    tagline: 'Streamline document processing, billing validations, regulatory filings, and repetitive back-office tasks.',
    triggerQuestion: 'How can we eliminate manual data entry, reduce human error, and accelerate turnaround on complex documents?',
    commonIndustries: [
      'Financial Services',
      'Hospitals & Healthcare Providers',
      'Professional & Business Services',
      'Transport, Logistics & Warehousing',
      'Environmental, Waste & Water Management'
    ],
    mindcraftApproach: {
      research: 'Workflow step mapping, handoff friction diagnostics, document error rate audits, and billing delay root-cause analysis.',
      strategy: 'Redesign operational gates, eliminate redundant approval layers, and establish automated validation rules.',
      aiEnablement: 'Integrate intelligent document processing (OCR + LLM), automated extraction pipelines, and ERP/CRM connectors.',
      training: 'Administrative and operational staff trained on exception handling and automated validation review.',
      measurableOutcome: '60-80% reduction in document processing time and 90%+ drop in manual clerical errors.'
    },
    illustrativeEngagement: 'Intelligent Document Processing Engine, Automated Insurance Pre-Adjudication Gate, and Loan Origination Pipeline.'
  },
  {
    id: 'improve-regulatory-intelligence',
    problemTitle: 'Improve Regulatory Intelligence',
    tagline: 'Stay ahead of pan-African regulatory changes, policy shifts, standards mandates, and submission filings.',
    triggerQuestion: 'How can we monitor and anticipate shifting health authority and government regulatory mandates across markets?',
    commonIndustries: [
      'Pharmaceuticals',
      'Medical Devices',
      'Medical Diagnostics',
      'Chemicals',
      'Agrochemicals',
      'Energy & Renewable Energy'
    ],
    mindcraftApproach: {
      research: 'National gazette scans, regulatory authority circular tracking, fast-track pathway audits, and regional harmonisation mapping.',
      strategy: 'Create multi-country regulatory submission dossiers, compliance gap strategies, and post-market surveillance plans.',
      aiEnablement: 'Build an automated regulatory change-detection agent and searchable regional guideline intelligence vault.',
      training: 'Regulatory affairs and quality teams trained on AI-assisted dossier drafting and adverse event triage.',
      measurableOutcome: 'Zero regulatory non-compliance penalties, 4-6 months faster approval times, and proactive policy adaptation.'
    },
    illustrativeEngagement: 'Pan-African Regulatory Submission Vault, Automated Guideline Change Radar, and Pharmacovigilance Triage Hub.'
  },
  {
    id: 'improve-commercial-intelligence',
    problemTitle: 'Improve Commercial Intelligence',
    tagline: 'Empower sales forces, optimise territory coverage, track channel pricing, and maximise revenue velocity.',
    triggerQuestion: 'How do we give our commercial teams real-time market data to prioritise high-yield accounts and close faster?',
    commonIndustries: [
      'Pharmaceuticals',
      'Surgical Consumables',
      'Beverages',
      'Automotive',
      'Retail & Consumer Goods',
      'Telecommunications & Technology'
    ],
    mindcraftApproach: {
      research: 'Retail census, hospital account tiering, distributor sales velocity tracking, and price-elasticity modelling.',
      strategy: 'Design territory realignment blueprints, distributor incentive programmes, and consultative sales playbooks.',
      aiEnablement: 'Deploy field sales rep AI copilots providing pre-call account briefs, stock alerts, and optimal route recommendations.',
      training: 'Commercial sales reps and territory managers trained in data-driven territory planning and CRM intelligence.',
      measurableOutcome: '15-30% increase in sales rep call productivity, improved retailer stocking density, and higher gross margin retention.'
    },
    illustrativeEngagement: 'Commercial Territory Optimisation Blueprint, Field Sales AI Copilot, and Channel Velocity Radar.'
  },
  {
    id: 'transform-digitally',
    problemTitle: 'Transform Digitally',
    tagline: 'Modernise legacy operating models, core systems, customer interfaces, and data infrastructure.',
    triggerQuestion: 'How do we modernise our legacy systems and operational culture to compete with digital-first innovators?',
    commonIndustries: [
      'Financial Services',
      'Hospitals & Healthcare Providers',
      'Telecommunications & Technology',
      'Education & Training',
      'Construction, Real Estate & Infrastructure'
    ],
    mindcraftApproach: {
      research: 'Digital maturity diagnostics, legacy architecture dependency mapping, and customer digital friction audits.',
      strategy: 'Develop a phased transformation roadmap with clear ROI gates, vendor selection criteria, and change management plans.',
      aiEnablement: 'Architect modern cloud-native data layers, API integration fabrics, and enterprise intelligence portals.',
      training: 'Leadership and staff change-management cohorts, digital champion networks, and cultural alignment programmes.',
      measurableOutcome: 'Modernized operating model with lower cost-to-serve, scalable architecture, and high internal user adoption.'
    },
    illustrativeEngagement: 'Digital Operating Model Blueprint, Vendor Architecture Selection Matrix, and Enterprise Change Management Roadmap.'
  },
  {
    id: 'build-an-ai-solution',
    problemTitle: 'Build an AI Solution',
    tagline: 'Engineer, test, and deploy production-grade, governed enterprise AI systems into your business infrastructure.',
    triggerQuestion: 'How do we go from proof-of-concept AI experiments to robust, secure, production-grade enterprise software?',
    commonIndustries: [
      'Pharmaceuticals',
      'Financial Services',
      'Hospitals & Healthcare Providers',
      'Professional & Business Services',
      'Manufacturing',
      'Transport, Logistics & Warehousing'
    ],
    mindcraftApproach: {
      research: 'Data availability and quality diagnostics, security requirement reviews, and workflow integration point mapping.',
      strategy: 'Architect the AI stack: model selection, private vector RAG infrastructure, latency budgets, and security guardrails.',
      aiEnablement: 'End-to-end software engineering: API gateways, human-in-the-loop validation UIs, and automated audit logging.',
      training: 'User acceptance training, administrator system runbooks, and internal prompt engineering optimisation.',
      measurableOutcome: 'Production software deployed on client infrastructure with 99.9% uptime, strict privacy, and validated ROI.'
    },
    illustrativeEngagement: 'Custom Enterprise RAG Intelligence Vault, Production Machine Learning Engine, and Governed AI Gateway Build.'
  }
];

// ==========================================
// 9-STEP MARKET ENTRY SIGNATURE FRAMEWORK
// "Entering an African Market?"
// ==========================================
export interface MarketEntryStep {
  stepNumber: string;
  title: string;
  question: string;
  mindcraftScope: string;
  deliverable: string;
}

export const MARKET_ENTRY_9STEPS: MarketEntryStep[] = [
  {
    stepNumber: '01',
    title: 'Market Understanding & Sizing',
    question: 'What is the true addressable market size, growth trajectory, and geographic demand concentration?',
    mindcraftScope: 'Primary field surveys, epidemiological/demographic sizing models, institutional purchasing capacity audits, and historical volume trends.',
    deliverable: 'Addressable Market Sizing & Demand Heatmap Dossier'
  },
  {
    stepNumber: '02',
    title: 'Competitive Landscape & Pipeline',
    question: 'Who are the established incumbents, what are their pricing tiers, and what pipeline products are emerging?',
    mindcraftScope: 'Competitor market share audits, pricing waterfall teardowns across wholesale/retail tiers, tender award histories, and distributor loyalty assessments.',
    deliverable: 'Competitor Pipeline & Pricing Benchmark Matrix'
  },
  {
    stepNumber: '03',
    title: 'Customer & Stakeholder Intelligence',
    question: 'Who drives the buying decision, what are their unmet clinical/operational needs, and what is their price tolerance?',
    mindcraftScope: 'Double-blind qualitative interviews with specialist physicians, hospital procurement heads, pharmacy buyers, and consumer focus groups.',
    deliverable: 'Key Opinion Leader (KOL) & Stakeholder Influence Graph'
  },
  {
    stepNumber: '04',
    title: 'Regulatory Landscape & Licensing',
    question: 'What are the registration pathways, timeline milestones, local agent requirements, and compliance hurdles?',
    mindcraftScope: 'National medicines/standards regulatory scans, fast-track pathway feasibility, registration dossier gap analysis, and regional EAC/ECOWAS harmonisation rules.',
    deliverable: 'Regulatory Registration Roadmap & Fast-Track Strategy'
  },
  {
    stepNumber: '05',
    title: 'Channel & Distribution Strategy',
    question: 'Which distribution partners possess genuine technical, storage, cold-chain, and ethical compliance capabilities?',
    mindcraftScope: 'Distributor due-diligence audits across capital and secondary cities, warehouse inspections, creditworthiness checks, and reference verifications.',
    deliverable: 'Distributor Qualification & Tiering Matrix'
  },
  {
    stepNumber: '06',
    title: 'Strategic Options & Commercial Model',
    question: 'What commercial go-to-market model balances speed, margin retention, investment risk, and local control?',
    mindcraftScope: 'Evaluating direct presence vs exclusive master distributor vs contract sales organisation (CSO) vs local contract manufacturing partnerships.',
    deliverable: 'Commercial Go-to-Market Blueprint & 3-Year Financial Model'
  },
  {
    stepNumber: '07',
    title: 'AI & Digital Enablement',
    question: 'Where can automated data streams, continuous intelligence, and field copilots accelerate market penetration?',
    mindcraftScope: 'Designing continuous competitor price-scraping tools, tender notification radars, CRM field copilot assistants, and regulatory change tracking agents.',
    deliverable: 'Market Intelligence & Competitor Tracking Architecture'
  },
  {
    stepNumber: '08',
    title: 'Implementation & Capability Building',
    question: 'How do we train the local team, align distributor sales reps, and ensure flawless operational launch?',
    mindcraftScope: 'Executing consultative sales masterclasses, medical affairs training, digital tool onboarding, and launching standard operating procedures.',
    deliverable: 'Commercial Launch Playbook & Team Training Cohort'
  },
  {
    stepNumber: '09',
    title: 'Measurement & Continuous Governance',
    question: 'How do we track market share, hospital formulary penetration, and distributor compliance over time?',
    mindcraftScope: 'Establishing recurring market audits, distributor SLA quarterly scorecards, adverse event monitoring, and executive KPI dashboards.',
    deliverable: 'Executive Governance KPI Scorecard & Ongoing Audit Cadence'
  }
];
