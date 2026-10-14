export interface AIPlatformItem {
  id: string;
  name: string;
  subtitle: string;
  cluster: 'Conversational AI & Automation' | 'Life Sciences Intelligence' | 'Industrial & Enterprise AI';
  clusterKey: 'conversational' | 'lifesciences' | 'industrial';
  priorityBadge?: string;
  badgeTone: 'emerald' | 'indigo' | 'amber' | 'cyan';
  summary: string;
  businessChallenge: string;
  technology: string[];
  bestFitSectors: string[];
  keyCapabilities: string[];
  officialUrl: string;
  officialLabel: string;
}

export interface AIImplementationService {
  id: string;
  step: string;
  title: string;
  summary: string;
  deliverables: string[];
}

export const AI_CLUSTERS = [
  { key: 'all', label: 'All AI Platforms & Services', count: 6 },
  { key: 'conversational', label: 'Conversational AI & Automation', count: 1 },
  { key: 'lifesciences', label: 'Life Sciences Intelligence', count: 2 },
  { key: 'industrial', label: 'Industrial & Enterprise AI', count: 3 }
] as const;

export const AI_PLATFORMS: AIPlatformItem[] = [
  {
    id: 'voiceops',
    name: 'VoiceOps',
    subtitle: 'Intelligent Voice Agents for Business Operations',
    cluster: 'Conversational AI & Automation',
    clusterKey: 'conversational',
    priorityBadge: 'Priority Solution',
    badgeTone: 'emerald',
    summary:
      'MindCraft Consultancy, in collaboration with DSeT Consulting, provides VoiceOps to automate high-volume inbound and outbound telephone communications across enterprise operations. Engineered with sub-second speech processing, contextual memory, and neural voice synthesis, VoiceOps autonomously manages payment collections, clinic appointments, distributor logistics, and customer support with automated transcription, outcome logging, and bi-directional CRM/ERP synchronization.',
    businessChallenge:
      'High-volume customer, distributor, and patient communications suffer from expensive manual call centres, delayed payment collections, missed appointment slots, and inconsistent logging across distributed teams.',
    technology: [
      'Conversational AI',
      'Real-Time Speech Recognition',
      'LLM Orchestration',
      'Neural Voice Synthesis',
      'REST APIs & Webhooks'
    ],
    bestFitSectors: [
      'Pharmaceuticals',
      'Healthcare & Clinics',
      'Banking & Financial Services',
      'Distributors & Wholesalers',
      'Retail & E-commerce',
      'Logistics & Fleet Ops'
    ],
    keyCapabilities: [
      'Autonomous inbound and outbound call handling with sub-second response latency',
      'Contextual multi-turn dialogue with intelligent intent classification and escalation fallbacks',
      'Automatic call transcription, sentiment detection, and structured outcome tagging (commitments, callbacks)',
      'Enterprise REST API and webhook connectors for Veeva, Salesforce, SAP, and custom ERPs'
    ],
    officialUrl: 'https://dsetconsulting.com/product/voiceops',
    officialLabel: 'DSeT VoiceOps Specification'
  },
  {
    id: 'pharmaai',
    name: 'PharmaAI',
    subtitle: 'Pharmaceutical Commercial Market Intelligence',
    cluster: 'Life Sciences Intelligence',
    clusterKey: 'lifesciences',
    priorityBadge: 'Strongest Sector Fit',
    badgeTone: 'indigo',
    summary:
      'Developed by DSeT Consulting and integrated through MindCraft’s pharmaceutical advisory, PharmaAI equips commercial, brand, and market-access teams with deterministic natural-language intelligence over licensed pharmaceutical datasets. By replacing error-prone manual spreadsheets with audited data pipelines, the platform delivers instant market-share diagnostics, competitor brand movements, therapy-area attractiveness metrics, and 12-month brand sales forecasting with verified source citations.',
    businessChallenge:
      'Commercial directors and brand managers rely on disconnected monthly spreadsheets and static market reports, slowing strategic responses to competitor price moves, tender losses, and shifting prescribing volumes.',
    technology: [
      'Deterministic Data Retrieval',
      'Natural-Language Querying',
      'Time-Series Sales Forecasting',
      'Analytical Pipelines',
      'Source-Linked Audit Trails'
    ],
    bestFitSectors: [
      'Pharmaceutical Manufacturers',
      'Medical Device Companies',
      'In-Vitro Diagnostics (IVD)',
      'Life Sciences Market Research',
      'Healthcare Investment Advisory'
    ],
    keyCapabilities: [
      'Natural-language querying over national audits, IMS/IQVIA formats, and internal sales datasets',
      'Deterministic numerical calculations engineered to eliminate generative AI hallucinations',
      '12-month brand and therapy-level sales forecasting with statistical confidence ranges',
      'Full query audit logs with cryptographic citations linking every figure to its source ledger'
    ],
    officialUrl: 'https://dsetconsulting.com/product/pharmaai',
    officialLabel: 'DSeT PharmaAI Platform'
  },
  {
    id: 'medicsiq',
    name: 'MedicsIQ',
    subtitle: 'AI-Powered Healthcare & Wellness Assessment',
    cluster: 'Life Sciences Intelligence',
    clusterKey: 'lifesciences',
    priorityBadge: 'Edge-Native Assessment',
    badgeTone: 'cyan',
    summary:
      'MedicsIQ combines computer vision and localized edge inference to deliver interactive skin, scalp, and wellness evaluations for retail pharmacies, clinics, and consumer-health brands. The system analyzes visible epidermal biomarkers—such as hydration, sebum balance, texture, and scalp condition—to generate tailored product regimens and longitudinal wellness tracking, supported by regional-language voice guidance while safeguarding patient privacy.',
    businessChallenge:
      'Consumer health, derma, and pharmacy brands struggle to deliver personalized, objective consultations at scale without high clinical overhead or invasive data collection.',
    technology: [
      'Computer Vision Biomarkers',
      'Edge-Native Inference',
      'Recommendation Systems',
      'Multilingual Voice Assistant',
      'Longitudinal Progress Tracking'
    ],
    bestFitSectors: [
      'Consumer Health & Wellness',
      'Retail Pharmacy Chains',
      'Dermo-Cosmetics & Personal Care',
      'Wellness Kiosks & Spas',
      'Digital Health Platforms'
    ],
    keyCapabilities: [
      'On-device image analysis for visible biomarkers (hydration, sebum, melanin, texture, scalp)',
      'Edge deployment architecture for low-latency, private, and offline-capable retail kiosk environments',
      'Automated product catalogue recommendation engine paired with personalized daily regimens',
      'Strict governance controls positioning assessments for wellness engagement rather than medical diagnosis'
    ],
    officialUrl: 'https://dsetconsulting.com/product/medicsiq',
    officialLabel: 'DSeT MedicsIQ Specification'
  },
  {
    id: 'edgebay-intellifence',
    name: 'EdgeBay IntelliFence',
    subtitle: 'Industrial Edge AI & Predictive Operational Intelligence',
    cluster: 'Industrial & Enterprise AI',
    clusterKey: 'industrial',
    priorityBadge: 'Industrial OT/IT Core',
    badgeTone: 'amber',
    summary:
      'Operating directly at the factory and facility edge, EdgeBay IntelliFence connects machine sensors, PLCs, and SCADA architectures with modern predictive intelligence. The platform performs real-time continuous inference over operational telemetry to detect early thermal, vibrational, and electrical anomalies, alerting operators to impending equipment failure curves and production bottlenecks before costly downtime occurs.',
    businessChallenge:
      'Heavy manufacturing, energy, and process industries endure catastrophic unplanned equipment downtime and reactive maintenance cycles due to siloed OT systems that cannot analyze sensor streams in real time.',
    technology: [
      'Edge AI Inference',
      'Vibration & Thermal Telemetry',
      'SCADA / PLC Gateway Connectors',
      'Predictive Anomaly Models',
      'IT/OT Converged Dashboards'
    ],
    bestFitSectors: [
      'Pharmaceutical Manufacturing Plants',
      'Mining & Minerals Processing',
      'Energy & Utilities',
      'Chemical & Process Facilities',
      'Transport & Port Infrastructure'
    ],
    keyCapabilities: [
      'Edge-native inference processing thousands of sensor signals locally without continuous cloud dependency',
      'Predictive failure curve modeling to shift maintenance regimes from calendar-based to condition-based',
      'Pre-built protocol adaptors for Modbus, OPC-UA, Siemens, and Allen-Bradley industrial control systems',
      'Executive and shop-floor dashboards correlating machine health with overall equipment effectiveness (OEE)'
    ],
    officialUrl: 'https://dsetconsulting.com/product',
    officialLabel: 'DSeT Industrial AI Catalogue'
  },
  {
    id: 'orebill-ai',
    name: 'OreBill AI',
    subtitle: 'Intelligent Dispatch, Reconciliation & Invoicing',
    cluster: 'Industrial & Enterprise AI',
    clusterKey: 'industrial',
    priorityBadge: 'Revenue Operations',
    badgeTone: 'indigo',
    summary:
      'OreBill AI automates the high-friction journey from dispatch point to verified payment for mining, mineral trading, and bulk commodities operations. The platform captures weighbridge records, parses material assay certificates, applies dynamic contract pricing rules, and enriches line items with HSN codes to produce verified, GST-compliant invoices and direct ERP reconciliation, eliminating billing leaks and multi-week dispute cycles.',
    businessChallenge:
      'Mineral extraction and heavy industrial supply chains face severe revenue leakage, weighbridge discrepancy disputes, and multi-week billing bottlenecks caused by manual paper slip processing.',
    technology: [
      'Intelligent Document Extraction (IDP)',
      'Automated Weighbridge Parsing',
      'Dynamic Pricing Logic Engines',
      'HSN Code Tax Enrichment',
      'ERP Ledger Connectors'
    ],
    bestFitSectors: [
      'Mining & Mineral Extraction',
      'Commodity Trading & Export',
      'Bulk Materials & Aggregates',
      'Heavy Logistics & Freight',
      'Industrial Building Supplies'
    ],
    keyCapabilities: [
      'Automated extraction of weighbridge receipts, transit passes, and quality assay reports',
      'Grade reconciliation and moisture deduction calculation based on pre-set commercial contracts',
      'Automated GST-compliant invoice generation with accurate statutory HSN code enrichment',
      'Direct integration with enterprise ERPs (SAP, Tally, Oracle) and state mining oversight portals (i3MS)'
    ],
    officialUrl: 'https://dsetconsulting.com/product',
    officialLabel: 'DSeT Commercial Automation'
  },
  {
    id: 'securecloud',
    name: 'SecureCloud',
    subtitle: 'AI-Driven Cloud Security & Continuous Compliance',
    cluster: 'Industrial & Enterprise AI',
    clusterKey: 'industrial',
    priorityBadge: 'Regulated Enterprise Security',
    badgeTone: 'emerald',
    summary:
      'Engineered for regulated life sciences, financial, and critical infrastructure enterprises, SecureCloud provides continuous cloud-posture observability and automated compliance evidence generation. The platform inspects cloud infrastructure-as-code configurations, analyzes API telemetry for identity anomalies, enforces strict data-residency perimeters across hybrid environments, and continuously collects auditable proof for regulatory authorities.',
    businessChallenge:
      'Healthcare and financial institutions managing sensitive patient or transactional data face rigorous compliance audits (HIPAA, ISO 27001, local data protection laws) while managing complex multi-cloud and private data centre footprints.',
    technology: [
      'AI Log Anomaly Detection',
      'Identity & Access Management (IAM)',
      'Infrastructure-as-Code (IaC) Scanning',
      'Continuous Compliance Observability',
      'Automated Audit Evidence Pipelines'
    ],
    bestFitSectors: [
      'Banking & Financial Institutions',
      'Healthcare Providers & Hospital Networks',
      'Pharmaceutical Enterprises',
      'Critical Public Infrastructure',
      'Energy & Telecommunications'
    ],
    keyCapabilities: [
      'Automated security scanning of Terraform, CloudFormation, and Kubernetes manifests prior to deployment',
      'Real-time behavioral anomaly detection across cloud management planes and privileged user sessions',
      'Automated evidence collection and mapping against ISO 27001, SOC 2, and healthcare data residency laws',
      'Hybrid deployment support with zero-trust posture monitoring for private data centres and public clouds'
    ],
    officialUrl: 'https://dsetconsulting.com/product/securecloud',
    officialLabel: 'DSeT SecureCloud Architecture'
  }
];

export const AI_IMPLEMENTATION_SERVICES: AIImplementationService[] = [
  {
    id: 'deploy',
    step: '01',
    title: 'AI Platform Deployment & Implementation',
    summary:
      'Turnkey provisioning and deployment of AI platforms across public cloud, on-premises data centres, or air-gapped hybrid architectures. We configure identity governance, network boundaries, and failover redundancy with structured user training and go-live handover.',
    deliverables: [
      'Secure environment provisioning & infrastructure hardening',
      'Model gateway configuration & latency benchmarking',
      'User role provisioning & role-based access controls (RBAC)',
      'Operational handover runbooks and administrative training'
    ]
  },
  {
    id: 'integration',
    step: '02',
    title: 'Enterprise Integration & Data Modernisation',
    summary:
      'Seamlessly connect AI platforms with your operational systems of record—including SAP, Oracle, Veeva CRM, SCADA, EHRs, and core databases. Modernize data pipelines without requiring high-risk rip-and-replace overhauls of established business infrastructure.',
    deliverables: [
      'Bi-directional REST API, webhook, and middleware pipeline design',
      'ETL/ELT pipeline modernisation for real-time model ingestion',
      'Legacy system connectors (ERP, CRM, SCADA, HIS/EHR)',
      'Data sanitization, tokenization, and schema validation pipelines'
    ]
  },
  {
    id: 'managed-ops',
    step: '03',
    title: 'Managed AI Operations & Optimisation',
    summary:
      'Sustained operational excellence for mission-critical AI systems. Our engineering team monitors model drift, retrains predictive algorithms against newly emerging data patterns, manages prompt orchestration, and optimizes inference costs under strict enterprise SLAs.',
    deliverables: [
      '24/7 telemetry monitoring for model accuracy, latency, and drift',
      'Continuous prompt tuning and retrieval index optimization',
      'Inference cost management and token quota governance',
      'Quarterly system enhancement and compliance re-validation'
    ]
  },
  {
    id: 'custom-eng',
    step: '04',
    title: 'Custom AI Engineering & Specialized Models',
    summary:
      'Develop custom machine-learning models, specialized domain fine-tuning, and bespoke edge inference workflows for unique industry challenges where generic commercial APIs and standard off-the-shelf tools fail to deliver adequate precision.',
    deliverables: [
      'Domain-specific fine-tuning (BioBERT, clinical NLP, industrial CV)',
      'Edge-native model quantization and embedded inference pipelines',
      'Custom mathematical optimization and predictive bidding engines',
      'Private model weights deployment with complete client IP ownership'
    ]
  },
  {
    id: 'readiness',
    step: '05',
    title: 'AI Readiness & Solution Architecture',
    summary:
      'Strategic advisory combining MindCraft’s deep industry knowledge with technical feasibility analysis. We evaluate organizational data readiness, quantify business ROI across competing use cases, design target architectures, and establish ethical AI governance protocols.',
    deliverables: [
      'Organizational AI readiness & data quality scorecard',
      'Value-to-effort use case prioritization matrix',
      'Enterprise solution architecture blueprint & vendor evaluation',
      'Responsible AI governance, privacy, and compliance guidelines'
    ]
  }
];
