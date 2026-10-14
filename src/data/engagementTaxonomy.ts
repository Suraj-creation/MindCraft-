import { NavTab } from '../types';

export interface EngagementService {
  id: string;
  name: string;
  domainId: number;
  domainName: string;
  /** Explicit brief explanation directly provided by the client */
  briefExplanation: string;
  /** Expanded practical scope and context for clients desiring deeper details */
  scopeDetail: string;
  primaryPillar: NavTab;
  typicalDeliverables: string[];
  keyStakeholders: string[];
}

export interface EngagementDomain {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  accentColor: string; // Tailwind color class or hex
  theme: 'strategy' | 'regulatory' | 'quality' | 'commercial' | 'operations' | 'people' | 'digital' | 'advisory';
  services: EngagementService[];
}

export interface EngagementArchetype {
  id: string;
  title: string;
  tagline: string;
  recommendedServiceIds: string[];
  industryDefault: string;
  geographyDefault: string;
  countriesDefault?: string[];
  capabilitiesDefault?: string[];
}

export const ENGAGEMENT_DOMAINS: EngagementDomain[] = [
  {
    id: 1,
    slug: 'strategy-feasibility',
    title: 'Strategy & Feasibility',
    subtitle: 'Evaluate viability, de-risk investments, and structure high-return market expansion',
    description: 'Assess technical, regulatory, and commercial viability before capital commitment, ensuring market entry and growth strategies are backed by empirical rigor.',
    iconName: 'Compass',
    accentColor: 'indigo',
    theme: 'strategy',
    services: [
      {
        id: 'product-feasibility-study',
        name: 'Product Feasibility Study',
        domainId: 1,
        domainName: 'Strategy & Feasibility',
        briefExplanation: 'Assess technical, regulatory and commercial viability of a product before you invest.',
        scopeDetail: 'Comprehensive evaluation of formulation viability, regulatory hurdles, cost of goods (COGS), import tariffs, and commercial profitability across target territories.',
        primaryPillar: 'consulting',
        typicalDeliverables: ['Feasibility Matrix & Scorecard', 'Go/No-Go Investment Dossier', 'Risk Mitigation Plan'],
        keyStakeholders: ['C-Suite / Investment Committee', 'R&D / Technical Leads', 'Business Development']
      },
      {
        id: 'market-feasibility-study',
        name: 'Market Feasibility Study',
        domainId: 1,
        domainName: 'Strategy & Feasibility',
        briefExplanation: 'Evaluate demand, competition and entry barriers to confirm a market is worth pursuing.',
        scopeDetail: 'Rigorous assessment of market size, patient epidemiology/disease burden, existing therapy landscape, and regulatory barriers to validate addressable market opportunity.',
        primaryPillar: 'market-research',
        typicalDeliverables: ['Addressable Market Sizing Report', 'Demand & Patient Population Estimate', 'Market Barrier Audit'],
        keyStakeholders: ['Commercial Directors', 'Strategy Officers', 'Market Access Teams']
      },
      {
        id: 'market-entry-strategy',
        name: 'Market Entry Strategy',
        domainId: 1,
        domainName: 'Strategy & Feasibility',
        briefExplanation: 'Define the best route, partners and timing to enter a new country or segment.',
        scopeDetail: 'Structuring route-to-market architecture (direct vs. distributor vs. joint venture), partner qualification criteria, and phased country entry sequence.',
        primaryPillar: 'consulting',
        typicalDeliverables: ['Market Entry Roadmap (Months 1-24)', 'Partner Operating Model', 'Capex & Opex Entry Budget'],
        keyStakeholders: ['Managing Directors', 'International Expansion Leads', 'Regional Heads']
      },
      {
        id: 'go-to-market-plan',
        name: 'Go-to-Market Plan',
        domainId: 1,
        domainName: 'Strategy & Feasibility',
        briefExplanation: 'Build a practical roadmap covering positioning, channels, pricing and launch activities.',
        scopeDetail: 'End-to-end tactical execution blueprint detailing target customer segments, channel incentives, product positioning, and launch milestones.',
        primaryPillar: 'consulting',
        typicalDeliverables: ['GTM Playbook & Activity Gantt', 'Channel Strategy Matrix', 'Launch Readiness Checklist'],
        keyStakeholders: ['Commercial Operations', 'Brand Managers', 'Sales Directors']
      },
      {
        id: 'business-plan-financial-modelling',
        name: 'Business Plan & Financial Modelling',
        domainId: 1,
        domainName: 'Strategy & Feasibility',
        briefExplanation: 'Develop investor-ready business plans and projections to support funding and decisions.',
        scopeDetail: 'Detailed 3-to-5 year P&L, balance sheet, and cash flow models with sensitivity analysis on currency fluctuations, volume uptake, and pricing dynamics.',
        primaryPillar: 'consulting',
        typicalDeliverables: ['Dynamic Financial Model (Excel)', 'Investor Deck & Executive Summary', 'Working Capital Projections'],
        keyStakeholders: ['Chief Financial Officer', 'Investment Committees', 'Banking & Financing Partners']
      },
      {
        id: 'product-pricing-reimbursement-strategy',
        name: 'Product Pricing & Reimbursement Strategy',
        domainId: 1,
        domainName: 'Strategy & Feasibility',
        briefExplanation: 'Set competitive, sustainable prices and navigate reimbursement and payer requirements.',
        scopeDetail: 'Price waterfall architecture, international reference pricing protection, out-of-pocket vs. insured payer analysis, and national reimbursement submissions.',
        primaryPillar: 'consulting',
        typicalDeliverables: ['Pricing Waterfall & Floor Calculator', 'Payer Dossier & Value Proposition', 'Reimbursement Pathway Map'],
        keyStakeholders: ['Market Access Leads', 'Pricing Committees', 'Commercial Heads']
      },
      {
        id: 'portfolio-rationalization-product-selection',
        name: 'Portfolio Rationalization & Product Selection',
        domainId: 1,
        domainName: 'Strategy & Feasibility',
        briefExplanation: 'Identify which products to launch, prioritise or retire based on market fit and returns.',
        scopeDetail: 'Analysis of SKU margins, lifecycle stages, regulatory renewal costs, and market demand to streamline portfolios for maximum return on investment.',
        primaryPillar: 'consulting',
        typicalDeliverables: ['SKU Rationalization Matrix', 'Product Launch Prioritization Scorecard', 'Portfolio Pruning Strategy'],
        keyStakeholders: ['Portfolio Managers', 'Commercial Directors', 'Supply Chain Planners']
      },
      {
        id: 'competitor-landscape-analysis',
        name: 'Competitor & Landscape Analysis',
        domainId: 1,
        domainName: 'Strategy & Feasibility',
        briefExplanation: 'Understand competitors, market share and positioning to sharpen your strategy.',
        scopeDetail: 'Deep-dive competitive profiling: market share estimates, competitor distribution footprints, pricing benchmarks, tender history, and strategic vulnerabilities.',
        primaryPillar: 'market-research',
        typicalDeliverables: ['Competitor Intelligence Dossier', 'Share of Voice & Market Share Benchmarks', 'Strategic Battlecards'],
        keyStakeholders: ['Strategy Directors', 'Competitive Intelligence Analysts', 'Marketing Teams']
      },
      {
        id: 'due-diligence-commercial-regulatory-technical',
        name: 'Due Diligence (Commercial, Regulatory, Technical)',
        domainId: 1,
        domainName: 'Strategy & Feasibility',
        briefExplanation: 'Verify risks and opportunities before partnerships, acquisitions or investments.',
        scopeDetail: 'Pre-deal verification evaluating target compliance history, validity of product registrations, on-ground market reputation, revenue quality, and hidden operational liabilities.',
        primaryPillar: 'consulting',
        typicalDeliverables: ['Red-Flag & Opportunity Due Diligence Report', 'Compliance & Dossier Audit', 'Risk-Adjusted Valuation Inputs'],
        keyStakeholders: ['M&A / Deal Teams', 'Private Equity & Corporate Investors', 'Legal Counsel']
      },
      {
        id: 'mergers-acquisitions-licensing-support',
        name: 'Mergers, Acquisitions & Licensing Support',
        domainId: 1,
        domainName: 'Strategy & Feasibility',
        briefExplanation: 'Guide deal sourcing, evaluation, negotiation and licensing arrangements.',
        scopeDetail: 'End-to-end deal guidance: identifying local acquisition or in-licensing targets, drafting term sheets, negotiating distribution rights, and post-merger integration planning.',
        primaryPillar: 'consulting',
        typicalDeliverables: ['Target Screening Matrix', 'Licensing Term Sheet Guidance', 'Post-Merger Integration Framework'],
        keyStakeholders: ['Corporate Development Executives', 'Licensing Directors', 'Board of Directors']
      }
    ]
  },
  {
    id: 2,
    slug: 'regulatory-compliance',
    title: 'Regulatory & Compliance',
    subtitle: 'Accelerate product registrations and navigate stringent health authority requirements',
    description: 'Ensure rapid, compliant paths to product approvals, license maintenance, and complete compliance across African national and regional health authorities.',
    iconName: 'ShieldCheck',
    accentColor: 'teal',
    theme: 'regulatory',
    services: [
      {
        id: 'regulatory-strategy-assistance',
        name: 'Regulatory Strategy & Assistance',
        domainId: 2,
        domainName: 'Regulatory & Compliance',
        briefExplanation: 'Plan and manage the fastest compliant path to approval in your target markets.',
        scopeDetail: 'Mapping regional harmonization routes (e.g., EAC, ECOWAS/WAHO, SADC, ZAZIBONA) and national fast-track pathways to minimize time-to-market.',
        primaryPillar: 'consulting',
        typicalDeliverables: ['Regulatory Critical-Path Roadmap', 'Health Authority Engagement Strategy', 'Submission Timeline Schedule'],
        keyStakeholders: ['Regulatory Affairs Directors', 'Compliance Officers', 'Medical Directors']
      },
      {
        id: 'product-registration-dossier-preparation',
        name: 'Product Registration & Dossier Preparation',
        domainId: 2,
        domainName: 'Regulatory & Compliance',
        briefExplanation: 'Prepare and submit complete registration dossiers to health authorities.',
        scopeDetail: 'Compiling, converting, and reviewing dossiers according to CTD/eCTD or national guidelines for pharmaceuticals, medical devices, diagnostics, and nutraceuticals.',
        primaryPillar: 'consulting',
        typicalDeliverables: ['Ready-to-Submit CTD Dossiers (Modules 1-5)', 'Health Authority Response Letters', 'Filing Tracking Ledger'],
        keyStakeholders: ['Regulatory Affairs Teams', 'Medical Writers', 'Quality Control Teams']
      },
      {
        id: 'registration-maintenance-renewals-variations',
        name: 'Registration Maintenance, Renewals & Variations',
        domainId: 2,
        domainName: 'Regulatory & Compliance',
        briefExplanation: 'Keep your approvals valid and up to date through renewals and post-approval changes.',
        scopeDetail: 'Managing lifecycle changes, major/minor variations, site transfers, shelf-life extensions, and timely 5-year registration renewals to prevent market supply disruption.',
        primaryPillar: 'consulting',
        typicalDeliverables: ['Lifecycle Variation Submissions', 'Registration Expiry Calendar', 'Variation Approval Certificates'],
        keyStakeholders: ['Regulatory Operations', 'Supply Chain Teams', 'Quality Assurance']
      },
      {
        id: 'buying-selling-product-registrations',
        name: 'Buying & Selling of Product Registrations',
        domainId: 2,
        domainName: 'Regulatory & Compliance',
        briefExplanation: 'Connect buyers and sellers of registrations and manage the transfer process.',
        scopeDetail: 'Facilitating dossier transfers, Marketing Authorization Holder (MAH) transfers, rights assignment, and health authority notifications between divestors and acquirers.',
        primaryPillar: 'consulting',
        typicalDeliverables: ['MAH Transfer Protocol', 'Regulatory Asset Valuation', 'Authority Transfer Submissions'],
        keyStakeholders: ['Business Development', 'Legal Counsel', 'Regulatory Directors']
      },
      {
        id: 'import-export-licensing-permits',
        name: 'Import/Export Licensing & Permits',
        domainId: 2,
        domainName: 'Regulatory & Compliance',
        briefExplanation: 'Secure the licences and permits needed to move products across borders.',
        scopeDetail: 'Obtaining import/export permits, special access waivers, customs clearance regulatory clearances, and narcotic/controlled substance authorizations.',
        primaryPillar: 'consulting',
        typicalDeliverables: ['Import/Export Permit Applications', 'Port Clearance Clearances', 'Customs Pre-Verification Certificates'],
        keyStakeholders: ['Logistics & Supply Chain', 'Customs Brokers', 'Regulatory Specialists']
      },
      {
        id: 'pharmacovigilance-post-market-surveillance',
        name: 'Pharmacovigilance & Post-Market Surveillance',
        domainId: 2,
        domainName: 'Regulatory & Compliance',
        briefExplanation: 'Set up systems to monitor product safety and meet reporting obligations.',
        scopeDetail: 'Establishing Local Qualified Person for Pharmacovigilance (QPPV) representation, adverse event reporting systems, periodic safety update reports (PSURs), and product recall protocols.',
        primaryPillar: 'consulting',
        typicalDeliverables: ['Pharmacovigilance System Master File (PSMF)', 'Local QPPV Agreement', 'Adverse Event SOP Manual'],
        keyStakeholders: ['QPPV / Safety Leads', 'Medical Affairs', 'Regulatory Compliance']
      },
      {
        id: 'labelling-artwork-compliance',
        name: 'Labelling & Artwork Compliance',
        domainId: 2,
        domainName: 'Regulatory & Compliance',
        briefExplanation: 'Ensure packaging, labels and inserts meet local regulatory requirements.',
        scopeDetail: 'Reviewing and adapting packaging cartons, blisters, labels, and package inserts (Patient Information Leaflets - PIL) for multi-language and national statutory warnings.',
        primaryPillar: 'consulting',
        typicalDeliverables: ['Approved Artwork Proofs', 'Multi-Language Leaflet Translations', 'Statutory Compliance Checklists'],
        keyStakeholders: ['Packaging Engineers', 'Regulatory Officers', 'Brand Managers']
      },
      {
        id: 'clinical-trial-study-support',
        name: 'Clinical Trial & Study Support',
        domainId: 2,
        domainName: 'Regulatory & Compliance',
        briefExplanation: 'Support study planning, approvals and local clinical evidence requirements.',
        scopeDetail: 'Assisting in local ethics committee submissions, regulatory clinical trial approvals, GCP compliance verification, and bioequivalence / clinical evidence alignment.',
        primaryPillar: 'consulting',
        typicalDeliverables: ['Ethics & Authority Clinical Submissions', 'Investigator Site Regulatory Packs', 'GCP Compliance Checklists'],
        keyStakeholders: ['Clinical Research Organizations (CROs)', 'Principal Investigators', 'Medical Directors']
      }
    ]
  },
  {
    id: 3,
    slug: 'quality-management-certification',
    title: 'Quality Management & Certification',
    subtitle: 'Institutionalize world-class quality standards, GMP, GDP, and audit readiness',
    description: 'Build fit-for-purpose Quality Management Systems, achieve ISO and GxP accreditations, and safeguard product integrity across manufacturing and distribution chains.',
    iconName: 'Award',
    accentColor: 'sky',
    theme: 'quality',
    services: [
      {
        id: 'qms-design-implementation',
        name: 'Quality Management System (QMS) Design & Implementation',
        domainId: 3,
        domainName: 'Quality Management & Certification',
        briefExplanation: 'Build a fit-for-purpose QMS aligned with your operations and regulations.',
        scopeDetail: 'Drafting quality manuals, operational procedures, change control workflows, and risk-management protocols tailored to corporate size and regulatory jurisdiction.',
        primaryPillar: 'consulting',
        typicalDeliverables: ['Quality Manual & Policy', 'Standard Operating Procedure (SOP) Suite', 'Document Management Architecture'],
        keyStakeholders: ['Quality Assurance Heads', 'Operations Directors', 'Compliance Managers']
      },
      {
        id: 'iso-implementation-certification',
        name: 'ISO Implementation & Certification',
        domainId: 3,
        domainName: 'Quality Management & Certification',
        briefExplanation: 'Guide your organisation to certification for ISO 13485, 9001, 14001, 45001 and more.',
        scopeDetail: 'Full lifecycle readiness: baseline gap audit, documentation remediation, staff training, pre-audit assessment, and liaison with accredited certification bodies.',
        primaryPillar: 'consulting',
        typicalDeliverables: ['ISO Gap Analysis Report', 'Certification Readiness Dossier', 'Pre-Certification Audit Report'],
        keyStakeholders: ['Quality Managers', 'Managing Directors', 'Operations Leads']
      },
      {
        id: 'good-distribution-practices-gdp',
        name: 'Good Distribution Practices (GDP)',
        domainId: 3,
        domainName: 'Quality Management & Certification',
        briefExplanation: 'Implement GDP-compliant processes for storage, handling and transport of healthcare products.',
        scopeDetail: 'Structuring temperature-controlled transport SOPs, consignment tracking, recall procedures, and distributor GDP compliance verification.',
        primaryPillar: 'consulting',
        typicalDeliverables: ['GDP Compliance Manual', 'Transport Validation Protocols', 'Distributor GDP Audit Checklist'],
        keyStakeholders: ['Supply Chain Directors', 'Warehouse Managers', 'Distribution Partners']
      },
      {
        id: 'good-manufacturing-practices-gmp',
        name: 'Good Manufacturing Practices (GMP)',
        domainId: 3,
        domainName: 'Quality Management & Certification',
        briefExplanation: 'Align facilities and processes with GMP standards and inspection expectations.',
        scopeDetail: 'Aligning plant cleanrooms, HVAC systems, water systems (WFI), batch records, validation protocols, and personnel hygiene with WHO / PIC/S / local authority GMP standards.',
        primaryPillar: 'consulting',
        typicalDeliverables: ['GMP Remediation Master Plan', 'Validation Master Plan (VMP)', 'Batch Record Templates'],
        keyStakeholders: ['Plant Managers', 'Production Directors', 'QA/QC Managers']
      },
      {
        id: 'good-storage-practices-gsp',
        name: 'Good Storage Practices (GSP)',
        domainId: 3,
        domainName: 'Quality Management & Certification',
        briefExplanation: 'Establish compliant warehousing and storage controls for product integrity.',
        scopeDetail: 'Thermal mapping of warehouse facilities, continuous temperature/humidity monitoring systems, pest control protocols, and quarantine/release segregation.',
        primaryPillar: 'consulting',
        typicalDeliverables: ['Warehouse Thermal Mapping Report', 'GSP SOP Package', 'Storage Calibration Log'],
        keyStakeholders: ['Warehouse Supervisors', 'Facility Managers', 'Quality Auditors']
      },
      {
        id: 'internal-audits-mock-inspections',
        name: 'Internal Audits & Mock Inspections',
        domainId: 3,
        domainName: 'Quality Management & Certification',
        briefExplanation: 'Identify gaps and prepare your team before regulators or customers arrive.',
        scopeDetail: 'Simulated health authority and client audits, front-room/back-room logistics coaching, document retrieval drills, and inspection defense training.',
        primaryPillar: 'consulting',
        typicalDeliverables: ['Mock Inspection Findings Report', 'Audit Readiness Action Matrix', 'Staff Inspection Coaching Plan'],
        keyStakeholders: ['Executive Leadership', 'Quality Assurance', 'Department Heads']
      },
      {
        id: 'capa-deviation-management',
        name: 'CAPA & Deviation Management',
        domainId: 3,
        domainName: 'Quality Management & Certification',
        briefExplanation: 'Investigate issues, find root causes and implement lasting corrective actions.',
        scopeDetail: 'Implementing root cause analysis methodologies (5-Whys, Ishikawa), CAPA effectiveness checks, and deviation closure workflows to eliminate repeat non-conformances.',
        primaryPillar: 'consulting',
        typicalDeliverables: ['Root Cause Investigation Framework', 'CAPA Log & Tracking Dashboard', 'Effectiveness Verification Protocol'],
        keyStakeholders: ['Quality Assurance Teams', 'Manufacturing Engineers', 'Site Heads']
      },
      {
        id: 'supplier-vendor-qualification',
        name: 'Supplier & Vendor Qualification',
        domainId: 3,
        domainName: 'Quality Management & Certification',
        briefExplanation: 'Assess and approve suppliers to protect quality and compliance.',
        scopeDetail: 'Auditing primary material suppliers, active pharmaceutical ingredient (API) manufacturers, packaging converters, and third-party logistics (3PL) providers.',
        primaryPillar: 'consulting',
        typicalDeliverables: ['Supplier Qualification Program', 'Approved Vendor List (AVL) Policy', 'Vendor Risk Rating Index'],
        keyStakeholders: ['Procurement Managers', 'Quality Auditors', 'Supply Chain Executives']
      }
    ]
  },
  {
    id: 4,
    slug: 'distribution-sales-channels',
    title: 'Distribution & Sales Channels',
    subtitle: 'Screen reliable distributors, structure fair contracts, and optimize commercial velocity',
    description: 'Build dependable commercial pipelines by shortlisting qualified distributors, negotiating favorable agreements, and coaching sales teams for maximum reach.',
    iconName: 'Network',
    accentColor: 'amber',
    theme: 'commercial',
    services: [
      {
        id: 'distributor-identification-evaluation',
        name: 'Distributor Identification & Evaluation',
        domainId: 4,
        domainName: 'Distribution & Sales Channels',
        briefExplanation: 'Find, screen and shortlist reliable distributors for your target markets.',
        scopeDetail: 'Objective screening of distributors evaluating cold-chain capacity, warehouse footprint, sub-distributor networks, financial stability, and ethical compliance.',
        primaryPillar: 'consulting',
        typicalDeliverables: ['Distributor Shortlist & Scorecard', 'Capacity & Financial Vetting Dossier', 'Partner Due Diligence Report'],
        keyStakeholders: ['Head of Commercial Expansion', 'Regional Sales Directors', 'Country Managers']
      },
      {
        id: 'distributor-onboarding-contracting',
        name: 'Distributor Onboarding & Contracting',
        domainId: 4,
        domainName: 'Distribution & Sales Channels',
        briefExplanation: 'Structure agreements and onboard partners with clear terms and expectations.',
        scopeDetail: 'Formulating distribution agreements with clear minimum purchase commitments, territory exclusivity boundaries, reporting cadences, and compliance covenants.',
        primaryPillar: 'consulting',
        typicalDeliverables: ['Distribution Agreement Term Sheet', 'Distributor Onboarding Playbook', 'KPI & Service Level Agreement (SLA)'],
        keyStakeholders: ['Legal Counsel', 'Commercial Directors', 'Channel Managers']
      },
      {
        id: 'distributor-management',
        name: 'Distributor Management',
        domainId: 4,
        domainName: 'Distribution & Sales Channels',
        briefExplanation: 'Monitor performance, payments, compliance and reporting to keep partners accountable.',
        scopeDetail: 'Ongoing governance: secondary sales data auditing, stock-turnover monitoring, payment collections tracking, and quarterly business reviews (QBRs).',
        primaryPillar: 'consulting',
        typicalDeliverables: ['Quarterly Performance Review Pack', 'Distributor Performance Scorecard', 'Channel Velocity Tracker'],
        keyStakeholders: ['Channel Directors', 'Finance & Credit Control', 'Territory Managers']
      },
      {
        id: 'channel-strategy-expansion',
        name: 'Channel Strategy & Expansion',
        domainId: 4,
        domainName: 'Distribution & Sales Channels',
        briefExplanation: 'Design and grow the right mix of sales channels for each market.',
        scopeDetail: 'Balancing retail pharmacy distribution, hospital direct-supply contracts, government medical stores, and private clinic networks for balanced margin and reach.',
        primaryPillar: 'consulting',
        typicalDeliverables: ['Multi-Channel Architecture Map', 'Margin & Discount Structure Model', 'Tier-2 Channel Expansion Plan'],
        keyStakeholders: ['Chief Commercial Officer', 'Trade Marketing Managers', 'Sales Heads']
      },
      {
        id: 'commercial-contract-negotiation',
        name: 'Commercial Contract Negotiation',
        domainId: 4,
        domainName: 'Distribution & Sales Channels',
        briefExplanation: 'Negotiate supply, distribution and partnership terms that protect your interests.',
        scopeDetail: 'Expert negotiation advisory on payment terms (letters of credit, advance payments), foreign exchange risk allocation, margin splits, and contract exit clauses.',
        primaryPillar: 'consulting',
        typicalDeliverables: ['Negotiation Battleplan & Boundary Matrix', 'Contract Mark-Up & Clause Advisory', 'Risk-Balanced Deal Terms'],
        keyStakeholders: ['Managing Directors', 'Commercial Heads', 'In-house Legal']
      },
      {
        id: 'sales-force-effectiveness-training',
        name: 'Sales Force Effectiveness & Training',
        domainId: 4,
        domainName: 'Distribution & Sales Channels',
        briefExplanation: 'Strengthen sales team skills, structure and results.',
        scopeDetail: 'Territory routing design, incentive structure realignment, consultative detailing coaching for medical reps, and sales KPI tracking systems.',
        primaryPillar: 'ai-training',
        typicalDeliverables: ['Sales Force Competency Framework', 'Territory Realignment Map', 'Field Detailing Playbook & Incentive Model'],
        keyStakeholders: ['Sales Directors', 'Training Managers', 'First-Line Field Managers']
      }
    ]
  },
  {
    id: 5,
    slug: 'tenders-institutional-business',
    title: 'Tenders & Institutional Business',
    subtitle: 'Win national public tenders, hospital bids, and institutional procurement contracts',
    description: 'Identify public and donor tender opportunities early, build compliant winning bids, and manage public sector procurement pathways effectively.',
    iconName: 'Building',
    accentColor: 'rose',
    theme: 'commercial',
    services: [
      {
        id: 'tender-information-opportunity-tracking',
        name: 'Tender Information & Opportunity Tracking',
        domainId: 5,
        domainName: 'Tenders & Institutional Business',
        briefExplanation: 'Receive timely alerts on relevant public and private tenders.',
        scopeDetail: 'Proactive surveillance of Ministry of Health, Central Medical Stores, donor programs (Global Fund, USAID), and private hospital group tender announcements.',
        primaryPillar: 'market-research',
        typicalDeliverables: ['Bi-Weekly Tender Intelligence Bulletin', 'Tender Calendar & Pipeline Matrix', 'Eligibility Pre-Screening Alerts'],
        keyStakeholders: ['Tender Managers', 'Institutional Sales Heads', 'Commercial Directors']
      },
      {
        id: 'tender-engagement-bid-preparation',
        name: 'Tender Engagement & Bid Preparation',
        domainId: 5,
        domainName: 'Tenders & Institutional Business',
        briefExplanation: 'Prepare compliant, competitive bids and documentation.',
        scopeDetail: 'Rigorous preparation of technical bid dossiers, financial bid modeling, manufacturer authorization letters, certificate verification, and bid bond management.',
        primaryPillar: 'consulting',
        typicalDeliverables: ['Complete Technical & Financial Bid Dossier', 'Tender Compliance Checklist', 'Price Optimization Model'],
        keyStakeholders: ['Tender Officers', 'Finance Teams', 'Regulatory Specialists']
      },
      {
        id: 'tender-follow-up',
        name: 'Tender Follow-up',
        domainId: 5,
        domainName: 'Tenders & Institutional Business',
        briefExplanation: 'Track awards, contracting, delivery and payment through to closure.',
        scopeDetail: 'Tracking award notifications, public procurement authority evaluations, challenge periods, purchase order issuance, delivery execution, and institutional collections.',
        primaryPillar: 'consulting',
        typicalDeliverables: ['Award Tracking & Post-Bid Analysis', 'Delivery Schedule Alignment', 'Payment Milestone Monitoring'],
        keyStakeholders: ['Institutional Key Account Leads', 'Supply Chain / Logistics', 'Finance']
      },
      {
        id: 'hospital-engagement',
        name: 'Hospital Engagement',
        domainId: 5,
        domainName: 'Tenders & Institutional Business',
        briefExplanation: 'Build relationships with hospital decision-makers, procurement teams and clinicians.',
        scopeDetail: 'Navigating Hospital Drugs & Therapeutics Committees (DTC), securing hospital formulary inclusion, and presenting clinical evidence to department heads.',
        primaryPillar: 'consulting',
        typicalDeliverables: ['Hospital Formulary Application Pack', 'DTC Clinical Evidence Dossier', 'Institutional Account Mapping'],
        keyStakeholders: ['Medical Affairs', 'Hospital Key Account Managers', 'Clinical Specialists']
      },
      {
        id: 'government-ministry-of-health-engagement',
        name: 'Government & Ministry of Health Engagement',
        domainId: 5,
        domainName: 'Tenders & Institutional Business',
        briefExplanation: 'Navigate public-sector stakeholders, policies and procurement processes.',
        scopeDetail: 'Engagement with policy makers, national standard treatment guideline committees, essential medicines list (EML) secretariats, and public procurement boards.',
        primaryPillar: 'consulting',
        typicalDeliverables: ['Essential Medicines List (EML) Submission', 'Public Policy Impact Briefing', 'Stakeholder Influence Map'],
        keyStakeholders: ['Government Affairs Directors', 'Country Leadership', 'Public Sector Leads']
      },
      {
        id: 'ngo-donor-agency-engagement',
        name: 'NGO & Donor Agency Engagement',
        domainId: 5,
        domainName: 'Tenders & Institutional Business',
        briefExplanation: 'Access NGO and donor-funded programmes and meet their procurement requirements.',
        scopeDetail: 'Aligning product specifications with donor funding pools (Global Fund, PEPFAR, UNICEF, GAVI, WHO prequalification requirements) and participating in humanitarian procurement.',
        primaryPillar: 'consulting',
        typicalDeliverables: ['Donor Alignment Strategy', 'Prequalification Advisory Dossier', 'Grant Procurement Submission Pack'],
        keyStakeholders: ['Global Health Directors', 'Institutional Relations Leads', 'Market Access']
      },
      {
        id: 'key-account-management',
        name: 'Key Account Management',
        domainId: 5,
        domainName: 'Tenders & Institutional Business',
        briefExplanation: 'Manage and grow relationships with your most important institutional customers.',
        scopeDetail: 'Structuring institutional partnership agreements, customized service agreements, volume rebate models, and dedicated clinician educational initiatives.',
        primaryPillar: 'consulting',
        typicalDeliverables: ['Key Account Plans (Tier-1 Accounts)', 'Contract Value & Rebate Ledger', 'Executive Engagement Schedule'],
        keyStakeholders: ['National Key Account Managers', 'Commercial Directors', 'Customer Service Leads']
      }
    ]
  },
  {
    id: 6,
    slug: 'commercialization-market-access',
    title: 'Commercialization & Market Access',
    subtitle: 'From approval to revenue: launch products, mobilize KOLs, and establish clinical uptake',
    description: 'Transform regulatory approvals into commercial market leadership through clear launch orchestration, clinical stakeholder mapping, and healthcare branding.',
    iconName: 'TrendingUp',
    accentColor: 'emerald',
    theme: 'commercial',
    services: [
      {
        id: 'product-commercialization',
        name: 'Product Commercialization',
        domainId: 6,
        domainName: 'Commercialization & Market Access',
        briefExplanation: 'Take a product from approval to market with a structured commercial plan.',
        scopeDetail: 'Orchestrating manufacturing readiness, regulatory clearance, sales team briefing, channel seeding, and commercial launch campaigns.',
        primaryPillar: 'consulting',
        typicalDeliverables: ['Master Commercialization Playbook', 'Stage-Gate Commercialization Schedule', 'Early Revenue Tracking Model'],
        keyStakeholders: ['Commercial Directors', 'Product Managers', 'Country Heads']
      },
      {
        id: 'project-commercialization',
        name: 'Project Commercialization',
        domainId: 6,
        domainName: 'Commercialization & Market Access',
        briefExplanation: 'Turn a project or innovation into a revenue-generating business.',
        scopeDetail: 'Transforming clinical research findings, digital health pilots, or medical innovations into sustainable, scalable, profit-generating ventures.',
        primaryPillar: 'consulting',
        typicalDeliverables: ['Innovation Monetization Strategy', 'Business Model Canvas', 'Commercial Scale-Up Plan'],
        keyStakeholders: ['Innovation Leads', 'New Venture Directors', 'Corporate Development']
      },
      {
        id: 'product-launch-management',
        name: 'Product Launch Management',
        domainId: 6,
        domainName: 'Commercialization & Market Access',
        briefExplanation: 'Plan and execute successful launches with clear timelines and accountability.',
        scopeDetail: 'Executing cross-functional launch war-rooms, tracking pre-launch milestones, synchronizing public relations and medical symposia, and monitoring day-1 stock availability.',
        primaryPillar: 'consulting',
        typicalDeliverables: ['Launch Readiness Dashboard', 'Symposia & Launch Event Blueprint', '90-Day Post-Launch Review Matrix'],
        keyStakeholders: ['Launch Leads', 'Marketing Managers', 'Sales Managers']
      },
      {
        id: 'market-access-stakeholder-mapping',
        name: 'Market Access & Stakeholder Mapping',
        domainId: 6,
        domainName: 'Commercialization & Market Access',
        briefExplanation: 'Identify the key decision-makers and pathways that influence product uptake.',
        scopeDetail: 'Mapping formal and informal decision networks: payers, clinical guideline committees, hospital procurement boards, and medical society gatekeepers.',
        primaryPillar: 'market-research',
        typicalDeliverables: ['Stakeholder Influence & Power Matrix', 'Patient Access Journey Map', 'Market Access Barrier Assessment'],
        keyStakeholders: ['Market Access Leads', 'Government Affairs', 'Medical Directors']
      },
      {
        id: 'kol-engagement',
        name: 'Key Opinion Leader (KOL) Engagement',
        domainId: 6,
        domainName: 'Commercialization & Market Access',
        briefExplanation: 'Connect with clinical experts who can build credibility and adoption.',
        scopeDetail: 'Identifying top clinical specialists and thought leaders, structuring compliant advisory boards, academic publications, and clinical speaker programs.',
        primaryPillar: 'consulting',
        typicalDeliverables: ['KOL Tiering & Profiling Roster', 'Advisory Board Charter & Agenda', 'Scientific Engagement Plan'],
        keyStakeholders: ['Medical Affairs Directors', 'Medical Science Liaisons (MSLs)', 'Clinical Leads']
      },
      {
        id: 'brand-marketing-strategy',
        name: 'Brand & Marketing Strategy',
        domainId: 6,
        domainName: 'Commercialization & Market Access',
        briefExplanation: 'Develop positioning and messaging that resonate with healthcare audiences.',
        scopeDetail: 'Crafting evidence-based scientific messaging, brand guidelines compliant with pharmaceutical advertising laws, omnichannel physician engagement, and digital awareness campaigns.',
        primaryPillar: 'consulting',
        typicalDeliverables: ['Brand Value Proposition Platform', 'Omnichannel Detailing Toolkit', 'Advertising Compliance Review'],
        keyStakeholders: ['Marketing Directors', 'Brand Managers', 'Digital Marketing Leads']
      },
      {
        id: 'medical-education-clinician-training',
        name: 'Medical Education & Clinician Training',
        domainId: 6,
        domainName: 'Commercialization & Market Access',
        briefExplanation: 'Equip healthcare professionals to use and recommend your products confidently.',
        scopeDetail: 'Designing Continuing Medical Education (CME) accredited symposia, workshops on new therapy guidelines, surgical device simulator workshops, and patient outcome education.',
        primaryPillar: 'ai-training',
        typicalDeliverables: ['CME Module Content & Syllabus', 'Clinician Workshop Materials', 'Training Impact Evaluation Report'],
        keyStakeholders: ['Medical Affairs', 'CME Coordinators', 'Clinical Specialists']
      }
    ]
  },
  {
    id: 7,
    slug: 'localization-manufacturing',
    title: 'Localization & Manufacturing',
    subtitle: 'Establish local production, technology transfer, CMO partnerships, and API sourcing',
    description: 'Transition from import reliance to compliant domestic production across Africa, securing tax incentives, local content advantages, and resilient supply chains.',
    iconName: 'Factory',
    accentColor: 'teal',
    theme: 'operations',
    services: [
      {
        id: 'localization-greenfield-brownfield',
        name: 'Localization (Greenfield & Brownfield)',
        domainId: 7,
        domainName: 'Localization & Manufacturing',
        briefExplanation: 'Establish local manufacturing through new builds or existing facilities.',
        scopeDetail: 'Feasibility, capital expenditure structuring, and regulatory licensing for constructing new pharmaceutical/device plants or retrofitting existing production lines.',
        primaryPillar: 'localization',
        typicalDeliverables: ['Greenfield/Brownfield Feasibility Dossier', 'Incentive & Tax Zone Analysis', 'Turnkey Facility Concept Plan'],
        keyStakeholders: ['Board of Directors', 'Industrialization Committees', 'Plant Engineering Directors']
      },
      {
        id: 'technology-transfer',
        name: 'Technology Transfer',
        domainId: 7,
        domainName: 'Localization & Manufacturing',
        briefExplanation: 'Plan and execute the smooth transfer of processes, know-how and capabilities.',
        scopeDetail: 'Structuring donor-to-recipient site protocols, analytical method transfer, pilot batch testing, equipment qualification, and process validation to ensure bioequivalence.',
        primaryPillar: 'localization',
        typicalDeliverables: ['Technology Transfer Master Protocol (TTMP)', 'Analytical Method Validation Report', 'Scale-up & Pilot Batch Records'],
        keyStakeholders: ['Technical Operations', 'R&D / Formulations Leads', 'QA/QC Managers']
      },
      {
        id: 'manufacturing-site-selection-setup',
        name: 'Manufacturing Site Selection & Setup',
        domainId: 7,
        domainName: 'Localization & Manufacturing',
        briefExplanation: 'Choose the right location and set up compliant production operations.',
        scopeDetail: 'Evaluating Special Economic Zones (SEZs), utility reliability (power, water, wastewater), logistics connectivity, labor talent availability, and local government tax holidays.',
        primaryPillar: 'localization',
        typicalDeliverables: ['Site Selection Evaluation Matrix', 'SEZ Comparative Cost Model', 'Infrastructure Readiness Audit'],
        keyStakeholders: ['Operations Directors', 'Corporate Development', 'Civil Engineering Leads']
      },
      {
        id: 'contract-manufacturing-cmo-cdmo-partnerships',
        name: 'Contract Manufacturing (CMO/CDMO) Partnerships',
        domainId: 7,
        domainName: 'Localization & Manufacturing',
        briefExplanation: 'Identify and engage manufacturing partners to scale production.',
        scopeDetail: 'Vetting regional toll-manufacturers and CMOs/CDMOs, negotiating technical agreements, auditing facility compliance, and managing contract production schedules.',
        primaryPillar: 'consulting',
        typicalDeliverables: ['CMO/CDMO Screening & Capability Audit', 'Quality & Technical Agreement (QTA)', 'Commercial Toll-Manufacturing Contract'],
        keyStakeholders: ['Procurement Heads', 'External Manufacturing Directors', 'Legal Counsel']
      },
      {
        id: 'api-procurement-partnerships',
        name: 'API Procurement & Partnerships',
        domainId: 7,
        domainName: 'Localization & Manufacturing',
        briefExplanation: 'Source quality active ingredients and build dependable supplier relationships.',
        scopeDetail: 'Establishing long-term supply agreements with WHO-prequalified or DMF-holding Active Pharmaceutical Ingredient (API) and excipient manufacturers across India, Europe, and China.',
        primaryPillar: 'consulting',
        typicalDeliverables: ['API Supplier Qualification Matrix', 'Drug Master File (DMF) Audit', 'Long-Term API Supply Contract'],
        keyStakeholders: ['Procurement Directors', 'Sourcing Managers', 'Formulations Specialists']
      },
      {
        id: 'plant-design-engineering-commissioning-support',
        name: 'Plant Design, Engineering & Commissioning Support',
        domainId: 7,
        domainName: 'Localization & Manufacturing',
        briefExplanation: 'Support facility layout, equipment selection and commissioning.',
        scopeDetail: 'Reviewing architectural cleanroom layouts, unidirectional personnel/material flows, HVAC zoning, equipment procurement specifications, and IQ/OQ/PQ commissioning protocols.',
        primaryPillar: 'localization',
        typicalDeliverables: ['Facility Conceptual Layout (GxP Compliant)', 'User Requirement Specifications (URS)', 'Commissioning & Qualification Protocol'],
        keyStakeholders: ['Engineering Leads', 'Facility Planners', 'Validation Specialists']
      },
      {
        id: 'technical-dossier-process-validation-support',
        name: 'Technical Dossier & Process Validation Support',
        domainId: 7,
        domainName: 'Localization & Manufacturing',
        briefExplanation: 'Prepare technical documentation and validate processes for approval.',
        scopeDetail: 'Compiling Module 3 (Quality/Chemistry, Manufacturing, and Controls - CMC) data, process validation reports, stability studies (Zone IVb), and batch manufacturing records.',
        primaryPillar: 'consulting',
        typicalDeliverables: ['Module 3 CMC Documentation', 'Process Validation Protocol & Report', 'Stability Study Protocols (Zone IVb)'],
        keyStakeholders: ['CMC Leads', 'Technical Dossier Compilers', 'Analytical Chemists']
      }
    ]
  },
  {
    id: 8,
    slug: 'healthcare-infrastructure-projects',
    title: 'Healthcare Infrastructure & Projects',
    subtitle: 'Plan, equip, and commission hospitals, diagnostic centers, and healthcare facilities',
    description: 'Turn infrastructure visions into operational, sustainable clinical facilities through master planning, medical equipment procurement, and PPP advisory.',
    iconName: 'Cross',
    accentColor: 'indigo',
    theme: 'operations',
    services: [
      {
        id: 'hospital-setting-up-planning',
        name: 'Hospital Setting Up & Planning',
        domainId: 8,
        domainName: 'Healthcare Infrastructure & Projects',
        briefExplanation: 'Plan and establish hospitals from concept and design to operational readiness.',
        scopeDetail: 'Comprehensive hospital master planning: clinical service mix definition, departmental zoning, bed-capacity modeling, clinical workflows, and licensing applications.',
        primaryPillar: 'consulting',
        typicalDeliverables: ['Hospital Master Operational Plan', 'Clinical Space Functional Program', 'Licensing & Commissioning Roadmap'],
        keyStakeholders: ['Hospital Promoters / Investors', 'Chief Medical Officers', 'Hospital Directors']
      },
      {
        id: 'medical-equipment-planning-procurement',
        name: 'Medical Equipment Planning & Procurement',
        domainId: 8,
        domainName: 'Healthcare Infrastructure & Projects',
        briefExplanation: 'Specify, source and procure the right equipment for your facility.',
        scopeDetail: 'Room-by-room equipment scheduling (imaging, ICU, surgical suites, pathology), vendor tendering, total cost of ownership (TCO) evaluation, and maintenance contract negotiation.',
        primaryPillar: 'consulting',
        typicalDeliverables: ['Room-by-Room Equipment Schedule', 'Vendor Tendering & Evaluation Dossier', 'Equipment Installation & Maintenance SLA'],
        keyStakeholders: ['Biomedical Engineering Leads', 'Hospital Procurement', 'Department Chairs']
      },
      {
        id: 'clinic-lab-diagnostic-centre-setup',
        name: 'Clinic, Laboratory & Diagnostic Centre Setup',
        domainId: 8,
        domainName: 'Healthcare Infrastructure & Projects',
        briefExplanation: 'Set up smaller healthcare facilities with compliant, efficient workflows.',
        scopeDetail: 'Turnkey setup for specialty outpatient clinics, clinical pathology laboratories, and diagnostic imaging centers with optimized patient flow and safety standards.',
        primaryPillar: 'consulting',
        typicalDeliverables: ['Diagnostic Center Operating Blueprint', 'Lab Workflow & Biosafety Protocol', 'Equipment Calibration Schedule'],
        keyStakeholders: ['Clinical Directors', 'Laboratory Managers', 'Operations Heads']
      },
      {
        id: 'new-project-support',
        name: 'New Project Support',
        domainId: 8,
        domainName: 'Healthcare Infrastructure & Projects',
        briefExplanation: 'Guide new initiatives from initial idea through to launch.',
        scopeDetail: 'Steering greenfield healthcare initiatives through scoping, stakeholder alignment, feasibility, architecture review, and initial pilot execution.',
        primaryPillar: 'consulting',
        typicalDeliverables: ['Project Charter & Feasibility Overview', 'Integrated Project Schedule', 'Milestone Review Framework'],
        keyStakeholders: ['Project Sponsors', 'Steering Committees', 'Project Managers']
      },
      {
        id: 'ongoing-project-support-rescue',
        name: 'Ongoing Project Support & Rescue',
        domainId: 8,
        domainName: 'Healthcare Infrastructure & Projects',
        briefExplanation: 'Get stalled or struggling projects back on track.',
        scopeDetail: 'Diagnostic turnaround review for delayed or budget-overrun healthcare projects: unblocking vendor disputes, resetting critical-path timelines, and recovering governance.',
        primaryPillar: 'consulting',
        typicalDeliverables: ['Project Recovery Audit Report', 'Fast-Track Remediation Plan', 'Budget Re-baselining Model'],
        keyStakeholders: ['Board of Directors', 'Lenders & Financing Consortia', 'Executive Leadership']
      },
      {
        id: 'project-management-monitoring',
        name: 'Project Management & Monitoring',
        domainId: 8,
        domainName: 'Healthcare Infrastructure & Projects',
        briefExplanation: 'Keep projects on time, on budget and aligned with goals.',
        scopeDetail: 'Independent Project Management Office (PMO) oversight: schedule tracking, contractor performance audits, quality milestones, and executive steering committee reporting.',
        primaryPillar: 'consulting',
        typicalDeliverables: ['PMO Governance Dashboard', 'Monthly Executive Progress Reports', 'Risk & Issue Mitigation Register'],
        keyStakeholders: ['Chief Operating Officer', 'Project Directors', 'Contractors']
      },
      {
        id: 'public-private-partnerships-ppp-advisory',
        name: 'Public-Private Partnerships (PPP) Advisory',
        domainId: 8,
        domainName: 'Healthcare Infrastructure & Projects',
        briefExplanation: 'Structure and navigate partnerships between government and private players.',
        scopeDetail: 'Structuring healthcare concessions, build-operate-transfer (BOT) agreements, diagnostic leasing arrangements, and risk-sharing models with Ministries of Health.',
        primaryPillar: 'consulting',
        typicalDeliverables: ['PPP Transaction Advisory Dossier', 'Risk-Allocation Matrix', 'Bankable Concession Agreement Framework'],
        keyStakeholders: ['Ministry of Health Officials', 'Infrastructure Funds', 'Healthcare Operators']
      }
    ]
  },
  {
    id: 9,
    slug: 'supply-chain-operations',
    title: 'Supply Chain & Operations',
    subtitle: 'Optimize healthcare logistics, cold-chain integrity, procurement, and inventory',
    description: 'Build robust, cost-effective supply chains capable of delivering sensitive pharmaceutical and medical products across complex multi-country corridors.',
    iconName: 'Truck',
    accentColor: 'sky',
    theme: 'operations',
    services: [
      {
        id: 'supply-chain-optimization',
        name: 'Supply Chain Optimization',
        domainId: 9,
        domainName: 'Supply Chain & Operations',
        briefExplanation: 'Improve efficiency, cost and reliability across your supply chain.',
        scopeDetail: 'Auditing multi-tier logistics networks, identifying bottlenecks, reducing lead times, optimizing freight routing, and eliminating hidden transport markups.',
        primaryPillar: 'consulting',
        typicalDeliverables: ['Supply Chain Diagnostic Report', 'Logistics Network Redesign Model', 'Cost-to-Serve Optimization Map'],
        keyStakeholders: ['Chief Supply Chain Officer', 'Logistics Directors', 'Procurement Managers']
      },
      {
        id: 'procurement-sourcing-strategy',
        name: 'Procurement & Sourcing Strategy',
        domainId: 9,
        domainName: 'Supply Chain & Operations',
        briefExplanation: 'Develop sourcing approaches that balance cost, quality and continuity.',
        scopeDetail: 'Establishing strategic sourcing categories, volume aggregation across affiliates, multi-sourcing de-risking, and supplier contract renegotiations.',
        primaryPillar: 'consulting',
        typicalDeliverables: ['Strategic Sourcing Playbook', 'Supplier Risk & Quality Matrix', 'Procurement Savings Tracker'],
        keyStakeholders: ['Procurement Directors', 'Category Managers', 'Finance Leadership']
      },
      {
        id: 'inventory-demand-planning',
        name: 'Inventory & Demand Planning',
        domainId: 9,
        domainName: 'Supply Chain & Operations',
        briefExplanation: 'Forecast demand and manage stock to avoid shortages and excess.',
        scopeDetail: 'Implementing Sales & Operations Planning (S&OP) cadences, safety stock parameters, expiry-date monitoring, and demand forecasting models.',
        primaryPillar: 'consulting',
        typicalDeliverables: ['S&OP Process Framework', 'Safety Stock & Reorder Point Calculator', 'Stock Expiry Minimization Plan'],
        keyStakeholders: ['Demand Planners', 'Warehouse Managers', 'Commercial Operations']
      },
      {
        id: 'cold-chain-logistics-advisory',
        name: 'Cold Chain & Logistics Advisory',
        domainId: 9,
        domainName: 'Supply Chain & Operations',
        briefExplanation: 'Design and validate temperature-controlled and compliant logistics.',
        scopeDetail: 'Designing 2–8°C and ultra-cold transport chains, data-logger validation, active/passive thermal packaging selection, and contingency protocols for power outages.',
        primaryPillar: 'consulting',
        typicalDeliverables: ['Cold Chain Validation Dossier', 'Thermal Packaging Qualification Report', 'Emergency Temperature Deviation SOP'],
        keyStakeholders: ['Cold Chain Managers', 'QA/QC Logistics Officers', 'Third-Party Logistics (3PL)']
      },
      {
        id: 'cost-reduction-operational-excellence',
        name: 'Cost Reduction & Operational Excellence',
        domainId: 9,
        domainName: 'Supply Chain & Operations',
        briefExplanation: 'Identify savings and streamline processes without compromising quality.',
        scopeDetail: 'Lean Six Sigma diagnostic: waste elimination across warehousing, packaging, administrative processing, and order-to-cash cycles.',
        primaryPillar: 'consulting',
        typicalDeliverables: ['Operational Waste Diagnostic', 'Process Value-Stream Map', 'Cost-Out Implementation Tracker'],
        keyStakeholders: ['Operations Directors', 'Continuous Improvement Leads', 'Plant Managers']
      },
      {
        id: 'interim-management-operational-support',
        name: 'Interim Management & Operational Support',
        domainId: 9,
        domainName: 'Supply Chain & Operations',
        briefExplanation: 'Provide experienced leadership and hands-on support during transitions or gaps.',
        scopeDetail: 'Deploying senior healthcare executives to step in as interim Country Managers, Commercial Heads, or Regulatory Leads during leadership transitions or market launches.',
        primaryPillar: 'consulting',
        typicalDeliverables: ['Interim Mandate Charter & 100-Day Plan', 'Operational Continuity Handover Pack', 'Executive Search Transition Bridge'],
        keyStakeholders: ['Board of Directors', 'Regional Vice Presidents', 'Human Resources']
      },
      {
        id: 'process-implementation-improvement',
        name: 'Process Implementation & Improvement',
        domainId: 9,
        domainName: 'Supply Chain & Operations',
        briefExplanation: 'Design, roll out and refine business processes and standards.',
        scopeDetail: 'Developing and standardizing end-to-end operational workflows, Standard Operating Procedures (SOPs), RACI matrices, and compliance tracking scorecards.',
        primaryPillar: 'consulting',
        typicalDeliverables: ['Standard Operating Procedure (SOP) Suite', 'Process RACI & Escalation Matrix', 'Process Compliance Audit Schedule'],
        keyStakeholders: ['Process Owners', 'Quality Managers', 'Department Leads']
      }
    ]
  },
  {
    id: 10,
    slug: 'people-training-capacity-building',
    title: 'People, Training & Capacity Building',
    subtitle: 'Build high-performing healthcare teams, train leadership, and ensure compliance',
    description: 'Empower healthcare organizations with top-tier talent acquisition, tailored commercial and regulatory training curricula, and executive leadership coaching.',
    iconName: 'GraduationCap',
    accentColor: 'amber',
    theme: 'people',
    services: [
      {
        id: 'talent-recruitment-executive-search',
        name: 'Talent Recruitment & Executive Search',
        domainId: 10,
        domainName: 'People, Training & Capacity Building',
        briefExplanation: 'Find and hire qualified healthcare professionals and leaders.',
        scopeDetail: 'Headhunting senior Country Managers, Regulatory Affairs Directors, Medical Science Liaisons, and Hospital Executives with verified track records in target African markets.',
        primaryPillar: 'consulting',
        typicalDeliverables: ['Role Profiling & Candidate Scorecard', 'Executive Shortlist & Vetting Dossier', 'Compensation & Package Benchmark'],
        keyStakeholders: ['HR Directors', 'Managing Directors', 'Hiring Committees']
      },
      {
        id: 'team-management-performance-support',
        name: 'Team Management & Performance Support',
        domainId: 10,
        domainName: 'People, Training & Capacity Building',
        briefExplanation: 'Help teams set goals, track performance and improve results.',
        scopeDetail: 'Establishing objective Key Performance Indicators (KPIs), performance management cadences, balanced scorecards, and commercial incentive programs.',
        primaryPillar: 'consulting',
        typicalDeliverables: ['Balanced Scorecard Framework', 'Performance Review Guidelines', 'Incentive Structure Model'],
        keyStakeholders: ['Department Managers', 'HR Heads', 'Operations Executives']
      },
      {
        id: 'organizational-design-structuring',
        name: 'Organizational Design & Structuring',
        domainId: 10,
        domainName: 'People, Training & Capacity Building',
        briefExplanation: 'Build the right structure, roles and reporting lines for growth.',
        scopeDetail: 'Designing agile organizational charts, defining clear reporting hierarchies, eliminating operational silos, and structuring cross-border business units.',
        primaryPillar: 'consulting',
        typicalDeliverables: ['Target Operating Model (TOM) Chart', 'Job Description & RACI Manual', 'Span-of-Control Optimization Report'],
        keyStakeholders: ['C-Suite', 'HR Executives', 'Transformation Officers']
      },
      {
        id: 'capacity-building-training-programs',
        name: 'Capacity Building & Training Programs',
        domainId: 10,
        domainName: 'People, Training & Capacity Building',
        briefExplanation: 'Develop your team’s technical and commercial skills through tailored training.',
        scopeDetail: 'Delivering interactive workshops on pharmaceutical sales detailing, tender management, data analytics, and customer relationship management.',
        primaryPillar: 'ai-training',
        typicalDeliverables: ['Custom Training Curriculum', 'Interactive Workshop Toolkits', 'Participant Skill Assessment & Certification'],
        keyStakeholders: ['Commercial Training Leads', 'Sales Teams', 'HR Operations']
      },
      {
        id: 'regulatory-compliance-training',
        name: 'Regulatory & Compliance Training',
        domainId: 10,
        domainName: 'People, Training & Capacity Building',
        briefExplanation: 'Train staff on regulatory requirements and compliance best practice.',
        scopeDetail: 'Comprehensive training on health authority expectations, anti-bribery/FCPA standards, pharmacovigilance reporting, and GMP/GDP protocols.',
        primaryPillar: 'ai-training',
        typicalDeliverables: ['Compliance Training Syllabus', 'Regulatory Knowledge Check Exams', 'Annual Compliance Certification Records'],
        keyStakeholders: ['Compliance Officers', 'Regulatory Specialists', 'All Staff']
      },
      {
        id: 'leadership-management-coaching',
        name: 'Leadership & Management Coaching',
        domainId: 10,
        domainName: 'People, Training & Capacity Building',
        briefExplanation: 'Strengthen leaders’ decision-making, communication and team management.',
        scopeDetail: 'One-on-one executive coaching for emerging country heads, clinical leaders transitioning to management, and senior leaders navigating market disruptions.',
        primaryPillar: 'ai-training',
        typicalDeliverables: ['Leadership Development Plan', '360-Degree Feedback Assessment', 'Executive Coaching Progress Journal'],
        keyStakeholders: ['Executives', 'Senior Directors', 'High-Potential Leaders']
      }
    ]
  },
  {
    id: 11,
    slug: 'market-intelligence-research',
    title: 'Market Intelligence & Research',
    subtitle: 'Decision-grade data, physician sentiment, disease forecasting, and price benchmarking',
    description: 'Transform market ambiguity into strategic clarity with primary field evidence, pricing benchmarks, epidemiology models, and regulatory monitoring.',
    iconName: 'BarChart3',
    accentColor: 'blue',
    theme: 'strategy',
    services: [
      {
        id: 'market-information-insights',
        name: 'Market Information & Insights',
        domainId: 11,
        domainName: 'Market Intelligence & Research',
        briefExplanation: 'Access reliable, up-to-date data on healthcare markets.',
        scopeDetail: 'Syndicated and tailored intelligence dossiers on pharmaceutical consumption, private vs. public spend, therapeutic segment dynamics, and hospital volumes.',
        primaryPillar: 'market-research',
        typicalDeliverables: ['Quarterly Market Intelligence Briefing', 'Healthcare Expenditure Report', 'Therapeutic Area Factsheet'],
        keyStakeholders: ['Strategy Leads', 'Market Insights Managers', 'Business Development']
      },
      {
        id: 'research-market-intelligence',
        name: 'Research & Market Intelligence',
        domainId: 11,
        domainName: 'Market Intelligence & Research',
        briefExplanation: 'Commission in-depth research to support strategic decisions.',
        scopeDetail: 'Custom primary research including in-depth interviews with key physicians, pharmacists, payers, and hospital procurement executives across target countries.',
        primaryPillar: 'market-research',
        typicalDeliverables: ['Primary Field Research Dossier', 'Clinician Perception & Sentiment Index', 'Evidence-Backed Recommendation Report'],
        keyStakeholders: ['Marketing Directors', 'Clinical Strategy Heads', 'Executive Committees']
      },
      {
        id: 'pricing-benchmarking',
        name: 'Pricing Benchmarking',
        domainId: 11,
        domainName: 'Market Intelligence & Research',
        briefExplanation: 'Compare pricing across competitors and countries to position effectively.',
        scopeDetail: 'Cross-country price audits: CIF import prices, distributor margins, pharmacy retail markups, public procurement prices, and patient out-of-pocket costs.',
        primaryPillar: 'market-research',
        typicalDeliverables: ['Cross-Country Pricing Index', 'Trade Margin Comparison Matrix', 'Price Elasticity & Positioning Advisory'],
        keyStakeholders: ['Pricing Managers', 'Commercial Directors', 'Market Access']
      },
      {
        id: 'disease-burden-demand-forecasting',
        name: 'Disease Burden & Demand Forecasting',
        domainId: 11,
        domainName: 'Market Intelligence & Research',
        briefExplanation: 'Estimate patient needs and future demand for your products.',
        scopeDetail: 'Epidemiological modeling projecting incidence, prevalence, diagnosis rates, treatment adherence, and 5-year unit volume demand across disease categories.',
        primaryPillar: 'market-research',
        typicalDeliverables: ['Epidemiological Forecast Model (Excel)', 'Patient Flow Algorithm', '5-Year Demand Projection Dossier'],
        keyStakeholders: ['Forecasting Managers', 'Supply Planners', 'Brand Teams']
      },
      {
        id: 'policy-regulatory-updates',
        name: 'Policy & Regulatory Updates',
        domainId: 11,
        domainName: 'Market Intelligence & Research',
        briefExplanation: 'Stay informed on changes affecting your products and markets.',
        scopeDetail: 'Continuous surveillance of health authority guidelines, essential drug lists, tariff adjustments, national health insurance rollouts, and pricing regulations.',
        primaryPillar: 'market-research',
        typicalDeliverables: ['Monthly Regulatory & Policy Monitor', 'Ad-hoc Emergency Regulatory Alerts', 'Strategic Impact Synthesis'],
        keyStakeholders: ['Regulatory Affairs', 'Government Affairs', 'Legal Counsel']
      }
    ]
  },
  {
    id: 12,
    slug: 'ai-digital-solutions',
    title: 'AI & Digital Solutions',
    subtitle: 'Practical AI tools, process automation, predictive dashboards, and regulatory tracking',
    description: 'Bridge business needs with enterprise-grade AI architecture, automated regulatory and tender trackers, and secure, governed digital workflows.',
    iconName: 'Cpu',
    accentColor: 'emerald',
    theme: 'digital',
    services: [
      {
        id: 'ai-training-for-teams',
        name: 'AI Training for Teams',
        domainId: 12,
        domainName: 'AI & Digital Solutions',
        briefExplanation: 'Build practical AI skills so your staff can work faster and smarter.',
        scopeDetail: 'Hands-on executive briefings and role-specific prompt engineering training for regulatory writing, commercial analysis, literature summarization, and reporting.',
        primaryPillar: 'ai-training',
        typicalDeliverables: ['Role-Specific AI Prompt Playbook', 'Prompt Engineering Course Syllabus', 'Certified Cohort of AI Champions'],
        keyStakeholders: ['Chief Information Officer', 'Department Heads', 'Functional Teams']
      },
      {
        id: 'custom-ai-solutions',
        name: 'Custom AI Solutions',
        domainId: 12,
        domainName: 'AI & Digital Solutions',
        briefExplanation: 'Develop AI tools tailored to your specific business requirements.',
        scopeDetail: 'Engineering enterprise-grade, privacy-governed AI tools (Retrieval-Augmented Generation / RAG) integrated with proprietary internal data sources and documentation.',
        primaryPillar: 'ai-solutions',
        typicalDeliverables: ['Custom AI Solution Architecture', 'Production API & Application Codebase', 'Model Governance & Safety Charter'],
        keyStakeholders: ['CTO / CIO', 'Data Science Leads', 'Business Unit Leaders']
      },
      {
        id: 'ai-enabled-process-automation',
        name: 'AI-Enabled Process Automation',
        domainId: 12,
        domainName: 'AI & Digital Solutions',
        briefExplanation: 'Automate repetitive tasks to save time and reduce errors.',
        scopeDetail: 'Automating multi-step administrative workflows: automated invoice reconciliation, adverse event report classification, order processing, and dossier verification.',
        primaryPillar: 'ai-solutions',
        typicalDeliverables: ['Automated Workflow Scripts & Connectors', 'Process Error Reduction Audit', 'User Operations Guide'],
        keyStakeholders: ['Operations Directors', 'Finance Teams', 'IT Managers']
      },
      {
        id: 'digital-transformation-advisory',
        name: 'Digital Transformation Advisory',
        domainId: 12,
        domainName: 'AI & Digital Solutions',
        briefExplanation: 'Plan and guide your move to modern, data-driven ways of working.',
        scopeDetail: 'Digital maturity assessment, technology vendor evaluation (ERP, CRM, LIMS), enterprise data architecture planning, and executive change management roadmaps.',
        primaryPillar: 'ai-solutions',
        typicalDeliverables: ['Digital Maturity Diagnostic', 'Technology Stack Architecture Map', 'Vendor Selection Scoring Matrix'],
        keyStakeholders: ['C-Suite', 'CIO / VP of Technology', 'Operations Directors']
      },
      {
        id: 'data-analytics-dashboards',
        name: 'Data Analytics & Dashboards',
        domainId: 12,
        domainName: 'AI & Digital Solutions',
        briefExplanation: 'Turn your data into clear, actionable visual insights.',
        scopeDetail: 'Building real-time executive dashboards connecting sales data, inventory levels, distributor performance, regulatory filing progress, and tender pipelines.',
        primaryPillar: 'ai-solutions',
        typicalDeliverables: ['Interactive PowerBI / Web Analytics Dashboard', 'Data Pipeline ETL Documentation', 'Executive KPI Tracking Guide'],
        keyStakeholders: ['Commercial Leadership', 'Finance Controllers', 'Supply Chain Planners']
      },
      {
        id: 'regulatory-tender-tracking-tools',
        name: 'Regulatory & Tender Tracking Tools',
        domainId: 12,
        domainName: 'AI & Digital Solutions',
        briefExplanation: 'Use smart tools to monitor deadlines, submissions and opportunities.',
        scopeDetail: 'Automated digital tracking systems for monitoring registration submission milestones, renewal expiry deadlines, tender portal updates, and authority communications.',
        primaryPillar: 'ai-solutions',
        typicalDeliverables: ['Automated Milestone Tracking Portal', 'Calendar Notification Webhooks', 'Compliance Risk Alert System'],
        keyStakeholders: ['Regulatory Managers', 'Tender Leads', 'Operations Directors']
      }
    ]
  },
  {
    id: 13,
    slug: 'ongoing-support-advisory',
    title: 'Ongoing Support & Advisory',
    subtitle: 'Flexible retainer advisory, regulatory follow-up, collections, and risk management',
    description: 'Ensure continuity and peace of mind through dedicated monthly advisory retainers, proactive cash collection follow-ups, and ongoing risk management.',
    iconName: 'Clock',
    accentColor: 'indigo',
    theme: 'advisory',
    services: [
      {
        id: 'retainer-based-advisory-support',
        name: 'Retainer-Based Advisory Support',
        domainId: 13,
        domainName: 'Ongoing Support & Advisory',
        briefExplanation: 'Get continuous access to expert guidance on a flexible monthly basis.',
        scopeDetail: 'Structured monthly retainer giving executive teams direct advisory access to senior MindCraft partners for strategic counsel, regulatory checks, and deal reviews.',
        primaryPillar: 'consulting',
        typicalDeliverables: ['Monthly Advisory Synthesis Briefing', 'Dedicated Senior Partner Office Hours', 'Priority Ad-Hoc Request Channel'],
        keyStakeholders: ['Managing Directors', 'Regional Vice Presidents', 'Country Managers']
      },
      {
        id: 'payment-collections-follow-up',
        name: 'Payment & Collections Follow-up',
        domainId: 13,
        domainName: 'Ongoing Support & Advisory',
        briefExplanation: 'Chase outstanding payments professionally to protect your cash flow.',
        scopeDetail: 'Professional follow-up on institutional, hospital, and distributor account receivables to overcome administrative bottlenecks and accelerate collections while preserving partnerships.',
        primaryPillar: 'consulting',
        typicalDeliverables: ['Aging Debt Recovery Strategy', 'Institutional Reconciliation Statement', 'Cash Flow Inflow Schedule'],
        keyStakeholders: ['Finance Directors', 'Credit Controllers', 'Commercial Heads']
      },
      {
        id: 'regulatory-tender-follow-up',
        name: 'Regulatory & Tender Follow-up',
        domainId: 13,
        domainName: 'Ongoing Support & Advisory',
        briefExplanation: 'Keep submissions, approvals and tender processes moving to completion.',
        scopeDetail: 'On-ground physical follow-up with health authority desks and public procurement boards to ensure submitted dossiers and tender awards do not stall in administrative queues.',
        primaryPillar: 'consulting',
        typicalDeliverables: ['Desk-Level Regulatory Status Dossier', 'Authority Clarification Fast-Response Pack', 'Tender Award Execution Report'],
        keyStakeholders: ['Regulatory Leads', 'Tender Managers', 'Country Representatives']
      },
      {
        id: 'business-continuity-risk-management',
        name: 'Business Continuity & Risk Management',
        domainId: 13,
        domainName: 'Ongoing Support & Advisory',
        briefExplanation: 'Identify risks and prepare plans to protect your operations.',
        scopeDetail: 'Developing crisis management protocols, foreign currency shortage hedges, supply chain disruption contingencies, and regulatory compliance risk registers.',
        primaryPillar: 'consulting',
        typicalDeliverables: ['Enterprise Risk Register', 'Business Continuity Plan (BCP)', 'Crisis Response Protocol Manual'],
        keyStakeholders: ['Executive Committees', 'Risk & Audit Chairs', 'Operations Directors']
      },
      {
        id: 'other-custom-requirement',
        name: 'Other / Custom Requirement',
        domainId: 13,
        domainName: 'Ongoing Support & Advisory',
        briefExplanation: 'Have a different need? Tell us and we’ll tailor a solution.',
        scopeDetail: 'Bespoke strategic mandates addressing unique cross-border challenges, specialized therapeutic investigations, or bespoke institutional assignments.',
        primaryPillar: 'consulting',
        typicalDeliverables: ['Custom Mandate Scoping Charter', 'Tailored Deliverable Package', 'Specific Terms of Reference (TOR)'],
        keyStakeholders: ['Executive Leadership', 'Board of Directors', 'Key Sponsors']
      }
    ]
  }
];

export const ALL_ENGAGEMENT_SERVICES: EngagementService[] = ENGAGEMENT_DOMAINS.flatMap(d => d.services);

export const ENGAGEMENT_ARCHETYPES: EngagementArchetype[] = [
  {
    id: 'market-entry-launch',
    title: 'New Market Entry & Commercial Launch',
    tagline: 'Ideal for pharmaceutical & medical device manufacturers entering new African territories.',
    industryDefault: 'Pharmaceuticals',
    geographyDefault: 'East Africa (Kenya, Tanzania, Uganda, Rwanda, Ethiopia)',
    countriesDefault: ['Kenya', 'Tanzania', 'Uganda', 'Rwanda', 'Ethiopia'],
    capabilitiesDefault: ['Strategy & Feasibility', 'Regulatory & Compliance', 'Distribution & Sales Channels'],
    recommendedServiceIds: [
      'market-feasibility-study',
      'market-entry-strategy',
      'product-registration-dossier-preparation',
      'distributor-identification-evaluation',
      'product-launch-management'
    ]
  },
  {
    id: 'local-manufacturing-setup',
    title: 'Domestic Localization & Manufacturing Setup',
    tagline: 'Ideal for healthcare investors and manufacturers building local production facilities.',
    industryDefault: 'Pharmaceuticals',
    geographyDefault: 'Pan-Africa (Nigeria, Ghana, Kenya, South Africa, Egypt)',
    countriesDefault: ['Nigeria', 'Ghana', 'Kenya', 'South Africa', 'Egypt'],
    capabilitiesDefault: ['Localization & Manufacturing', 'Quality Management & Certification', 'Strategy & Feasibility'],
    recommendedServiceIds: [
      'localization-greenfield-brownfield',
      'manufacturing-site-selection-setup',
      'technology-transfer',
      'good-manufacturing-practices-gmp',
      'api-procurement-partnerships'
    ]
  },
  {
    id: 'institutional-tender-growth',
    title: 'Institutional & Hospital Market Expansion',
    tagline: 'Ideal for healthcare suppliers targeting national public tenders and premier hospital networks.',
    industryDefault: 'Medical Equipment',
    geographyDefault: 'Pan-Africa (South Africa, Egypt, Kenya, Tanzania, Ghana)',
    countriesDefault: ['South Africa', 'Egypt', 'Kenya', 'Tanzania', 'Ghana'],
    capabilitiesDefault: ['Tenders & Institutional Business', 'Market Intelligence & Research', 'Ongoing Support & Advisory'],
    recommendedServiceIds: [
      'tender-information-opportunity-tracking',
      'tender-engagement-bid-preparation',
      'hospital-engagement',
      'pricing-benchmarking',
      'payment-collections-follow-up'
    ]
  },
  {
    id: 'digital-ai-transformation',
    title: 'Digital & AI Enterprise Acceleration',
    tagline: 'Ideal for healthcare enterprises seeking process automation, team upskilling, and smart tracking.',
    industryDefault: 'Hospitals & Healthcare Providers',
    geographyDefault: 'Pan-Africa (Kenya, South Africa, Nigeria, Egypt)',
    countriesDefault: ['Kenya', 'South Africa', 'Nigeria', 'Egypt'],
    capabilitiesDefault: ['AI & Digital Solutions', 'People, Training & Capacity Building'],
    recommendedServiceIds: [
      'ai-training-for-teams',
      'custom-ai-solutions',
      'ai-enabled-process-automation',
      'regulatory-tender-tracking-tools',
      'data-analytics-dashboards'
    ]
  }
];
