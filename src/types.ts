export type NavTab = 
  | 'overview'
  | 'home'
  | 'operating-model'
  | 'life-sciences'
  | 'africa-intelligence'
  | 'consulting'
  | 'market-research'
  | 'ai-training'
  | 'ai-solutions'
  | 'question-to-outcome'
  | 'scenarios'
  | 'capability-graph'
  | 'maturity-model'
  | 'engagement-builder'
  | 'builder'
  | 'method'
  | 'responsible-ai'
  | 'insights'
  | 'about'
  | 'contact';

export type RoleLens = 
  | 'all' 
  | 'executive' 
  | 'lifesciences' 
  | 'technology' 
  | 'commercial' 
  | 'regulatory'
  | 'africa' 
  | 'learning'
  | 'investor'
  | 'hospital';

export interface ServicePillar {
  id: string;
  name: string;
  tagline: string;
  question: string;
  description: string;
  color: string;
  iconName: string;
  capabilities: {
    title: string;
    description: string;
    bulletPoints: string[];
  }[];
  deliverables: string[];
  intersections: {
    withPillar: string;
    integratedValue: string;
  }[];
}

export interface LifeSciencesSector {
  id: string;
  name: string;
  category: 'core-pharma' | 'devices-equipment' | 'healthcare-delivery';
  tagline: string;
  description: string;
  focusAreas: string[];
  strategicChallenges: string[];
  researchMethods: string[];
  aiOpportunities: string[];
  exampleDeliverables: string[];
  workflowExample: {
    question: string;
    method: string;
    intelligence: string;
    decision: string;
    aiSolution: string;
    outcome: string;
  };
}

export interface DiversifiedIndustry {
  id: string;
  name: string;
  tagline: string;
  description: string;
  focusAreas: string[];
  methodology: string;
}

export interface CountryDossier {
  id: string;
  name: string;
  region: 'East Africa' | 'West Africa' | 'Southern Africa' | 'North Africa' | 'Central Africa';
  isHQ?: boolean;
  capital: string;
  currency: string;
  marketHighlights: string[];
  capabilityCoverage: {
    marketResearch: string;
    regulatoryIntelligence: string;
    marketEntrySupport: string;
    localAssociateNetwork: string;
    trainingDelivery: string;
  };
  keySectors: string[];
  typicalQuestions: string[];
  engagementModels: string[];
}

export interface ProblemOutcomeScenario {
  id: string;
  title: string;
  category: string;
  clientType: string;
  theChallenge: string;
  whatMindCraftInvestigates: string[];
  dataRequired: string[];
  analysisPerformed: string[];
  strategicQuestions: string[];
  recommendedIntervention: string;
  technologyAiLayer: string;
  peopleTrainingLayer: string;
  expectedOutputs: string[];
  successMetrics: string[];
}

export interface ResearchWorkspaceItem {
  id: string;
  title: string;
  clientContext: string;
  objective: string;
  targetMarkets: string[];
  primaryEvidence: {
    source: string;
    sampleSize: string;
    keySignal: string;
    confidence: 'High' | 'Very High' | 'Medium';
  }[];
  secondaryEvidence: {
    source: string;
    datasetType: string;
    keyFinding: string;
  }[];
  strategicFindings: {
    trend: string;
    impact: string;
    riskLevel: 'Low' | 'Moderate' | 'High';
  }[];
  recommendations: {
    action: string;
    priority: 'Immediate' | 'Medium-term' | 'Strategic';
    evidenceStrength: number; // 0-100
  }[];
}

export interface AISolutionItem {
  id: string;
  title: string;
  category: 'Strategy & Architecture' | 'Life Sciences Core' | 'Intelligence Platforms' | 'Process Automation' | 'Conversational & Engagement';
  description: string;
  businessProblem: string;
  dataInputs: string[];
  aiAnalyticsLayer: string;
  workflowIntegration: string;
  humanInteraction: string;
  governanceSafeguards: string;
  projectedOutcome: string;
  status: 'Production Architecture Pattern' | 'Demonstration Prototype' | 'Illustrative Blueprint';
}

export interface TrainingCurriculumStep {
  step: number;
  title: string;
  duration: string;
  learningObjectives: string[];
  appliedExercises: string[];
  practicalDeliverables: string[];
  championMilestone: string;
}

export interface EngagementBlueprint {
  industry: string;
  geography: string;
  need: string;
  objective: string;
  workstreams: {
    pillar: string;
    scope: string;
    timeline: string;
  }[];
  methodologyOverview: string;
  expectedDeliverables: string[];
  keyStakeholders: string[];
  indicativePhases: {
    phase: string;
    title: string;
    duration: string;
    activities: string;
  }[];
  successMetrics: string[];
}

export interface InsightArticle {
  id: string;
  title: string;
  category: 'Africa Intelligence' | 'Life Sciences' | 'AI & Transformation' | 'Regulatory & Policy' | 'Responsible AI';
  readTime: string;
  date: string;
  author: string;
  summary: string;
  content: string[];
  keyTakeaways: string[];
  isFeatured?: boolean;
}
