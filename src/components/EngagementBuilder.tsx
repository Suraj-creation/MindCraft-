import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { EngagementBlueprint } from '../types';
import { PageHeader } from './ui/primitives';
import { MultiSelectDropdown, MultiSelectOption } from './ui/MultiSelectDropdown';
import { SingleSelectDropdown } from './ui/SingleSelectDropdown';
import {
  ENGAGEMENT_DOMAINS,
  ALL_ENGAGEMENT_SERVICES,
  ENGAGEMENT_ARCHETYPES,
  EngagementDomain,
  EngagementService
} from '../data/engagementTaxonomy';
import {
  ALL_AFRICAN_COUNTRIES,
  AFRICAN_REGIONS,
  INTERNATIONAL_CORRIDORS
} from '../data/africanCountries';
import {
  Compass,
  ShieldCheck,
  Award,
  Network,
  Building,
  TrendingUp,
  Factory,
  Cross,
  Truck,
  GraduationCap,
  BarChart3,
  Cpu,
  Clock,
  Sparkles,
  Layers,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Calendar,
  Users,
  Target,
  FileText,
  Search,
  Check,
  Plus,
  ChevronDown,
  ChevronUp,
  Info,
  Copy,
  RotateCcw,
  Globe2,
  Filter
} from 'lucide-react';

interface EngagementBuilderProps {
  onOpenIntakeWithBlueprint: (blueprint: EngagementBlueprint) => void;
}

const EASE = [0.16, 1, 0.3, 1] as const;

const DOMAIN_ICONS: Record<string, React.ElementType> = {
  Compass,
  ShieldCheck,
  Award,
  Network,
  Building,
  TrendingUp,
  Factory,
  Cross,
  Truck,
  GraduationCap,
  BarChart3,
  Cpu,
  Clock
};

export const EngagementBuilder: React.FC<EngagementBuilderProps> = ({
  onOpenIntakeWithBlueprint
}) => {
  // Step 1 Parameters State
  const [selectedIndustry, setSelectedIndustry] = useState<string>('Pharmaceuticals');
  const [selectedCountries, setSelectedCountries] = useState<string[]>(() => {
    return ENGAGEMENT_ARCHETYPES[0].countriesDefault || ['Kenya', 'Tanzania', 'Uganda', 'Rwanda', 'Ethiopia'];
  });
  const [selectedCapabilityNeeds, setSelectedCapabilityNeeds] = useState<string[]>(() => {
    return ENGAGEMENT_ARCHETYPES[0].capabilitiesDefault || ['Strategy & Feasibility', 'Regulatory & Compliance', 'Distribution & Sales Channels'];
  });
  const [selectedObjective, setSelectedObjective] = useState<string>('New Market Entry & Commercial Acceleration');

  // Step 2 Services Scope State
  const [selectedServices, setSelectedServices] = useState<Set<string>>(() => {
    return new Set(ENGAGEMENT_ARCHETYPES[0].recommendedServiceIds);
  });
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string>('all');
  const [expandedDomains, setExpandedDomains] = useState<Set<number>>(() => new Set([1, 2, 4]));
  const [expandedServiceDetails, setExpandedServiceDetails] = useState<Set<string>>(new Set());
  const [copied, setCopied] = useState<boolean>(false);
  const [filterBySelectedCapabilities, setFilterBySelectedCapabilities] = useState<boolean>(false);

  const industries = [
    'Pharmaceuticals',
    'Medical Devices',
    'Medical Diagnostics',
    'Medical Equipment',
    'Surgical Consumables',
    'Hospitals & Healthcare Providers',
    'Chemicals & Specialty Materials',
    'Agrochemicals',
    'Automotive & Mobility',
    'Banking & Financial Services'
  ];

  const objectives = [
    'New Market Entry & Commercial Acceleration',
    'Regulatory Approvals & Product Dossier Registration',
    'Domestic Manufacturing & Technology Transfer',
    'Institutional Tenders & Hospital Procurement Expansion',
    'Distributor Identification, Governance & Sales Velocity',
    'AI Transformation, Process Automation & Workforce Upskilling',
    'Quality Systems (GMP/GDP/ISO) & Inspection Readiness',
    'Ongoing Retainer-Based Executive Advisory'
  ];

  // African Countries Multi-Select Options (All 54 Countries separated & grouped)
  const geographyOptions: MultiSelectOption[] = useMemo(() => {
    const countryOpts: MultiSelectOption[] = ALL_AFRICAN_COUNTRIES.map(c => ({
      value: c.name,
      label: c.name,
      group: c.region,
      subtitle: c.regulatoryAgency ? `Regulator: ${c.regulatoryAgency}` : c.region,
      badge: c.majorHub ? 'Major Hub' : undefined
    }));

    const corridorOpts: MultiSelectOption[] = INTERNATIONAL_CORRIDORS.map(cor => ({
      value: cor,
      label: cor,
      group: 'International Corridors'
    }));

    return [...countryOpts, ...corridorOpts];
  }, []);

  const geographyGroups = [...AFRICAN_REGIONS, 'International Corridors'];

  // Capability Need Multi-Select Options (13 Practice Areas)
  const capabilityNeedOptions: MultiSelectOption[] = useMemo(() => {
    return ENGAGEMENT_DOMAINS.map(d => ({
      value: d.title,
      label: `${d.id < 10 ? `0${d.id}` : d.id}. ${d.title}`,
      group: d.theme === 'strategy' ? 'Strategy & Research'
           : d.theme === 'regulatory' || d.theme === 'quality' ? 'Regulatory & Quality'
           : d.theme === 'commercial' ? 'Commercial & Channels'
           : d.theme === 'operations' ? 'Operations & Localization'
           : d.theme === 'digital' || d.theme === 'people' ? 'People & Digital AI'
           : 'Ongoing Advisory',
      subtitle: `${d.services.length} services · ${d.subtitle}`
    }));
  }, []);

  const capabilityGroups = [
    'Strategy & Research',
    'Regulatory & Quality',
    'Commercial & Channels',
    'Operations & Localization',
    'People & Digital AI',
    'Ongoing Advisory'
  ];

  const filterCategories = [
    { id: 'all', label: 'All 13 Practice Areas' },
    { id: 'strategy', label: 'Strategy & Feasibility' },
    { id: 'regulatory', label: 'Regulatory & Quality' },
    { id: 'commercial', label: 'Distribution & Commercial' },
    { id: 'operations', label: 'Manufacturing, Infra & Supply' },
    { id: 'people', label: 'People & Digital AI' },
    { id: 'advisory', label: 'Ongoing Advisory' }
  ];

  // Automatically expand domains matching selected capability needs
  useEffect(() => {
    if (selectedCapabilityNeeds.length > 0) {
      const matchingDomainIds = ENGAGEMENT_DOMAINS
        .filter(d => selectedCapabilityNeeds.includes(d.title))
        .map(d => d.id);
      if (matchingDomainIds.length > 0) {
        setExpandedDomains(prev => new Set([...prev, ...matchingDomainIds]));
      }
    }
  }, [selectedCapabilityNeeds]);

  // Toggle service selection
  const toggleService = (id: string) => {
    setSelectedServices(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  // Toggle domain accordion
  const toggleDomain = (domainId: number) => {
    setExpandedDomains(prev => {
      const next = new Set(prev);
      if (next.has(domainId)) {
        next.delete(domainId);
      } else {
        next.add(domainId);
      }
      return next;
    });
  };

  // Toggle service extra detail
  const toggleServiceDetail = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setExpandedServiceDetails(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  // Apply an archetype preset
  const applyArchetype = (archetype: typeof ENGAGEMENT_ARCHETYPES[0]) => {
    setSelectedIndustry(archetype.industryDefault);
    setSelectedObjective(archetype.title);
    if (archetype.countriesDefault) {
      setSelectedCountries(archetype.countriesDefault);
    }
    if (archetype.capabilitiesDefault) {
      setSelectedCapabilityNeeds(archetype.capabilitiesDefault);
    }
    setSelectedServices(new Set(archetype.recommendedServiceIds));

    // Ensure domains containing these services are expanded
    const domainsToOpen = new Set<number>();
    archetype.recommendedServiceIds.forEach(svcId => {
      const svc = ALL_ENGAGEMENT_SERVICES.find(s => s.id === svcId);
      if (svc) domainsToOpen.add(svc.domainId);
    });
    setExpandedDomains(domainsToOpen);
  };

  // Clear all selections
  const clearAllServices = () => {
    setSelectedServices(new Set());
  };

  // Expand / collapse all domains
  const toggleAllDomains = () => {
    if (expandedDomains.size === ENGAGEMENT_DOMAINS.length) {
      setExpandedDomains(new Set());
    } else {
      setExpandedDomains(new Set(ENGAGEMENT_DOMAINS.map(d => d.id)));
    }
  };

  // Filtered domains and services
  const filteredDomains = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();

    return ENGAGEMENT_DOMAINS.map(domain => {
      // Capability filter check (if user toggled filter to selected capability needs)
      if (filterBySelectedCapabilities && selectedCapabilityNeeds.length > 0) {
        if (!selectedCapabilityNeeds.includes(domain.title)) {
          return null;
        }
      }

      // Category filter check
      let matchesCategory = true;
      if (activeCategoryFilter === 'strategy') {
        matchesCategory = domain.id === 1 || domain.id === 11;
      } else if (activeCategoryFilter === 'regulatory') {
        matchesCategory = domain.id === 2 || domain.id === 3;
      } else if (activeCategoryFilter === 'commercial') {
        matchesCategory = domain.id === 4 || domain.id === 5 || domain.id === 6;
      } else if (activeCategoryFilter === 'operations') {
        matchesCategory = domain.id === 7 || domain.id === 8 || domain.id === 9;
      } else if (activeCategoryFilter === 'people') {
        matchesCategory = domain.id === 10 || domain.id === 12;
      } else if (activeCategoryFilter === 'advisory') {
        matchesCategory = domain.id === 13;
      }

      if (!matchesCategory) return null;

      // Search query check
      const matchingServices = domain.services.filter(svc => {
        if (!q) return true;
        return (
          svc.name.toLowerCase().includes(q) ||
          svc.briefExplanation.toLowerCase().includes(q) ||
          svc.scopeDetail.toLowerCase().includes(q)
        );
      });

      if (q && matchingServices.length === 0 && !domain.title.toLowerCase().includes(q)) {
        return null;
      }

      return {
        ...domain,
        services: q ? matchingServices : domain.services
      };
    }).filter(Boolean) as EngagementDomain[];
  }, [searchQuery, activeCategoryFilter, filterBySelectedCapabilities, selectedCapabilityNeeds]);

  // Selected services list with details
  const selectedServicesList = useMemo(() => {
    return ALL_ENGAGEMENT_SERVICES.filter(s => selectedServices.has(s.id));
  }, [selectedServices]);

  // Format Geography Display String for Blueprint
  const formattedGeographyDisplay = useMemo(() => {
    if (selectedCountries.length === 0) return 'Pan-Africa (Continental Scope)';
    if (selectedCountries.length === 1) return selectedCountries[0];
    if (selectedCountries.length <= 4) {
      return `${selectedCountries.join(', ')} (${selectedCountries.length} countries)`;
    }
    return `${selectedCountries.slice(0, 3).join(', ')} (+${selectedCountries.length - 3} more African markets)`;
  }, [selectedCountries]);

  // Generate dynamic customized blueprint
  const generateBlueprint = (): EngagementBlueprint => {
    const svcList = selectedServicesList;
    const selectedServiceNames = svcList.map(s => s.name);
    const domainNames: string[] = Array.from(new Set(svcList.map(s => s.domainName)));

    // Categorize workstreams by discipline
    const strategySvcs = svcList.filter(s => [1, 6].includes(s.domainId));
    const regulatoryQualitySvcs = svcList.filter(s => [2, 3].includes(s.domainId));
    const commercialChannelSvcs = svcList.filter(s => [4, 5].includes(s.domainId));
    const operationsInfraSvcs = svcList.filter(s => [7, 8, 9].includes(s.domainId));
    const researchSvcs = svcList.filter(s => s.domainId === 11);
    const digitalAiSvcs = svcList.filter(s => s.domainId === 12);
    const peopleAdvisorySvcs = svcList.filter(s => [10, 13].includes(s.domainId));

    const workstreams = [];
    const geoSummary = formattedGeographyDisplay;

    if (researchSvcs.length > 0 || strategySvcs.length > 0) {
      const items = [...researchSvcs, ...strategySvcs].map(s => s.name).slice(0, 3).join(', ');
      workstreams.push({
        pillar: 'Strategy & Feasibility',
        scope: `Strategic diagnostic and market evidence gathering in ${geoSummary} covering: ${items || 'Market viability, pricing, and competitive landscape'}.`,
        timeline: 'Weeks 1 - 4'
      });
    } else {
      workstreams.push({
        pillar: 'Strategic Scoping',
        scope: `Market opportunity validation, stakeholder alignment, and critical-path mapping tailored to ${selectedIndustry} in ${geoSummary}.`,
        timeline: 'Weeks 1 - 3'
      });
    }

    if (regulatoryQualitySvcs.length > 0) {
      const items = regulatoryQualitySvcs.map(s => s.name).slice(0, 3).join(', ');
      workstreams.push({
        pillar: 'Regulatory & Quality Compliance',
        scope: `Execution of national and regional health authority submissions across ${selectedCountries.length > 0 ? selectedCountries.slice(0, 3).join(', ') : 'target markets'}: ${items}.`,
        timeline: 'Weeks 3 - 8'
      });
    } else if (commercialChannelSvcs.length > 0) {
      const items = commercialChannelSvcs.map(s => s.name).slice(0, 3).join(', ');
      workstreams.push({
        pillar: 'Commercial & Channel Engagement',
        scope: `Commercial partner alignment, distributor vetting, contracting, and sales activation: ${items}.`,
        timeline: 'Weeks 4 - 8'
      });
    } else {
      workstreams.push({
        pillar: 'Commercial & Regulatory Architecture',
        scope: `Regulatory landscape mapping, partner compliance audits, and route-to-market structuring for ${selectedObjective}.`,
        timeline: 'Weeks 3 - 7'
      });
    }

    if (operationsInfraSvcs.length > 0) {
      const items = operationsInfraSvcs.map(s => s.name).slice(0, 3).join(', ');
      workstreams.push({
        pillar: 'Localization, Infra & Operations',
        scope: `Operational implementation, local manufacturing, or supply chain validation: ${items}.`,
        timeline: 'Weeks 6 - 10'
      });
    } else if (digitalAiSvcs.length > 0) {
      const items = digitalAiSvcs.map(s => s.name).slice(0, 3).join(', ');
      workstreams.push({
        pillar: 'AI & Digital Systems',
        scope: `Architecture and deployment of intelligent tracking and analytics solutions: ${items}.`,
        timeline: 'Weeks 6 - 10'
      });
    } else {
      workstreams.push({
        pillar: 'Operational Implementation',
        scope: `Process design, supply chain validation, and operational governance setup in ${geoSummary}.`,
        timeline: 'Weeks 6 - 9'
      });
    }

    if (peopleAdvisorySvcs.length > 0) {
      const items = peopleAdvisorySvcs.map(s => s.name).slice(0, 3).join(', ');
      workstreams.push({
        pillar: 'Capability & Ongoing Advisory',
        scope: `Team capacity building and ongoing executive follow-up: ${items}.`,
        timeline: 'Weeks 9 - 12+'
      });
    } else {
      workstreams.push({
        pillar: 'Activation & Handover',
        scope: `Executive briefings, change management, and ongoing KPI governance review.`,
        timeline: 'Weeks 10 - 12'
      });
    }

    // Deliverables compiled from selected services
    const deliverables: string[] = [];
    svcList.forEach(s => {
      if (s.typicalDeliverables[0] && !deliverables.includes(s.typicalDeliverables[0])) {
        deliverables.push(s.typicalDeliverables[0]);
      }
    });
    if (deliverables.length === 0) {
      deliverables.push(
        `Executive Strategy Blueprint & Market Dossier (${geoSummary})`,
        `Commercial Route-to-Market & Regulatory Action Matrix`,
        `Stakeholder Mapping & Partner Qualification Index`,
        `Operational SOP & Governance Package`
      );
    }

    // Stakeholders compiled from selected services
    const stakeholders: string[] = [];
    svcList.forEach(s => {
      s.keyStakeholders.forEach(stk => {
        if (!stakeholders.includes(stk) && stakeholders.length < 5) {
          stakeholders.push(stk);
        }
      });
    });
    if (stakeholders.length === 0) {
      stakeholders.push(
        'C-Suite & Strategic Planning Executives',
        'Commercial Directors & Territory Managers',
        'Regulatory Affairs & Medical Leads',
        'Operations & Supply Chain Heads'
      );
    }

    const needSummary = svcList.length > 0
      ? `${svcList.length} Selected Services across ${domainNames.length} Practice Areas`
      : selectedCapabilityNeeds.length > 0
        ? `Focus on: ${selectedCapabilityNeeds.join(', ')}`
        : 'Integrated Multi-Pillar Engagement';

    return {
      industry: selectedIndustry,
      geography: geoSummary,
      need: needSummary,
      objective: selectedObjective,
      selectedServices: selectedServiceNames,
      selectedDomains: domainNames,
      selectedCountries: selectedCountries,
      selectedCapabilityAreas: selectedCapabilityNeeds,
      workstreams,
      methodologyOverview: `MindCraft's unified delivery method integrating rigorous primary field evidence, regulatory acumen, local operational execution, and modern digital/AI intelligence.`,
      expectedDeliverables: deliverables.slice(0, 6),
      keyStakeholders: stakeholders.slice(0, 4),
      indicativePhases: [
        {
          phase: 'Phase 01',
          title: 'Diagnostic & Feasibility',
          duration: 'Weeks 1-3',
          activities: `Problem framing, regulatory audit, market evidence gathering in ${geoSummary}, and baseline scope confirmation.`
        },
        {
          phase: 'Phase 02',
          title: 'Strategy & Solution Architecture',
          duration: 'Weeks 4-6',
          activities: 'Operating model formulation, technical dossier compilation, partner screening, and roadmapping.'
        },
        {
          phase: 'Phase 03',
          title: 'Execution, Licensing & Deployment',
          duration: 'Weeks 7-9',
          activities: 'Submissions, partner contracting, pilot trials, system integration, and commercial preparation.'
        },
        {
          phase: 'Phase 04',
          title: 'Launch, Capability Transfer & Review',
          duration: 'Weeks 10-12',
          activities: 'Commercial launch activation, team training, handover, and milestone auditing.'
        }
      ],
      successMetrics: [
        `Decision-ready strategy delivered across ${selectedCountries.length > 0 ? `${selectedCountries.length} countries` : 'target territories'} against agreed timeline`,
        'Full compliance with local and regional health authority guidelines',
        'Structured partner accountability and verifiable commercial traction'
      ]
    };
  };

  const blueprint = generateBlueprint();

  const handleCopySummary = () => {
    const text = `MindCraft Engagement Sketch:
Industry: ${blueprint.industry}
Target Geography: ${blueprint.geography} (${selectedCountries.join(', ')})
Capability Needs: ${selectedCapabilityNeeds.join(', ')}
Objective: ${blueprint.objective}

Selected Services (${selectedServices.size}):
${selectedServicesList.map(s => `- [${s.domainName}] ${s.name}: ${s.briefExplanation}`).join('\n')}

Expected Deliverables:
${blueprint.expectedDeliverables.map(d => `- ${d}`).join('\n')}`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const viewport = { once: true, margin: '-10%' } as const;

  return (
    <section className="mc-section mc-page-intro" id="engagement-builder-section">
      <div className="mc-container">

        {/* Header: Exact title requested by client */}
        <PageHeader
          className="mb-8 md:mb-12"
          title={<>Sketch an engagement before we talk:</>}
          lead="Select your target African countries, capability areas where you need help, and specific solutions from our 13 practice areas to dynamically sketch an indicative brief."
        />

        {/* Quick Archetype Presets */}
        <div className="mb-8 p-4 sm:p-5 rounded-2xl bg-[#0a0a0a] border border-white/10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-indigo-400" />
              <span className="text-xs font-semibold uppercase tracking-wider text-indigo-300">
                Recommended Engagement Archetypes
              </span>
            </div>
            <div className="flex items-center gap-3">
              {selectedServices.size > 0 && (
                <button
                  type="button"
                  onClick={clearAllServices}
                  className="text-xs text-white/50 hover:text-white flex items-center gap-1 transition-colors"
                >
                  <RotateCcw className="w-3 h-3" /> Clear services ({selectedServices.size})
                </button>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
            {ENGAGEMENT_ARCHETYPES.map((arch) => (
              <button
                key={arch.id}
                type="button"
                onClick={() => applyArchetype(arch)}
                className="mc-tap p-3 rounded-xl bg-[#050505] border border-white/10 hover:border-indigo-500/40 text-left transition-all active:scale-[0.98] group"
              >
                <div className="text-sm font-semibold text-white group-hover:text-indigo-300 transition-colors">
                  {arch.title}
                </div>
                <div className="text-xs text-white/60 line-clamp-2 mt-1">
                  {arch.tagline}
                </div>
                <div className="mt-2 text-[11px] font-medium text-indigo-400/90 flex items-center gap-1">
                  <span>Pre-load {arch.recommendedServiceIds.length} services</span>
                  <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Step 1: Engagement Parameters Selectors with Custom Clean Dropdowns */}
        <div className="mb-8 p-5 sm:p-6 rounded-2xl bg-[#0a0a0a] border border-white/10">
          <div className="text-xs font-semibold text-indigo-400 uppercase tracking-wider mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-[11px] font-bold">1</span>
              <span>Define Your Parameters & Areas Where You Need Help</span>
            </div>
            <div className="text-[11px] text-white/50">
              {selectedCountries.length} countries · {selectedCapabilityNeeds.length} capability areas
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* 01. Industry Vertical */}
            <SingleSelectDropdown
              id="eb-industry-select"
              label="01. Industry Vertical"
              value={selectedIndustry}
              onChange={setSelectedIndustry}
              options={industries}
              accentColor="indigo"
              helpText="Select your primary sector."
            />

            {/* 02. Target Geography (All 54 African Countries separated + Multi-Select) */}
            <MultiSelectDropdown
              id="eb-geography-select"
              label={`02. Target Geography (${selectedCountries.length} countries)`}
              placeholder="Select African countries..."
              selectedValues={selectedCountries}
              onChange={setSelectedCountries}
              options={geographyOptions}
              groups={geographyGroups}
              searchable={true}
              accentColor="emerald"
              allowSelectAllInGroup={true}
              maxDisplayChips={2}
              helpText="All 54 African countries separated. Multi-select specific markets or entire regional groups."
            />

            {/* 03. Capability Need (Multi-Select Dropdown of Areas Where People Need Help) */}
            <MultiSelectDropdown
              id="eb-capability-need-select"
              label={`03. Capability Need (${selectedCapabilityNeeds.length} areas)`}
              placeholder="Select capability areas..."
              selectedValues={selectedCapabilityNeeds}
              onChange={setSelectedCapabilityNeeds}
              options={capabilityNeedOptions}
              groups={capabilityGroups}
              searchable={true}
              accentColor="indigo"
              allowSelectAllInGroup={false}
              maxDisplayChips={2}
              helpText="Choose all practice areas where your organization requires support."
            />

            {/* 04. Strategic Objective */}
            <SingleSelectDropdown
              id="eb-objective-select"
              label="04. Strategic Objective"
              value={selectedObjective}
              onChange={setSelectedObjective}
              options={objectives}
              accentColor="emerald"
              helpText="Primary goal of this engagement."
            />
          </div>

          {/* Active Selections Tag Summary */}
          {(selectedCountries.length > 0 || selectedCapabilityNeeds.length > 0) && (
            <div className="mt-4 pt-4 border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="text-white/50 font-medium mr-1">In Scope Markets:</span>
                {selectedCountries.slice(0, 5).map(c => (
                  <span key={c} className="px-2 py-0.5 rounded-md bg-[#050505] border border-emerald-500/30 text-emerald-300 font-medium">
                    {c}
                  </span>
                ))}
                {selectedCountries.length > 5 && (
                  <span className="text-white/50 text-[11px]">
                    +{selectedCountries.length - 5} more
                  </span>
                )}
              </div>

              <div className="flex items-center gap-2 shrink-0">
                {selectedCapabilityNeeds.length > 0 && (
                  <button
                    type="button"
                    onClick={() => setFilterBySelectedCapabilities(prev => !prev)}
                    className={`mc-tap px-2.5 py-1 rounded-lg border text-[11px] font-semibold transition-colors inline-flex items-center gap-1.5 ${
                      filterBySelectedCapabilities
                        ? 'bg-indigo-600 text-white border-indigo-500'
                        : 'bg-[#050505] text-indigo-300 border-indigo-500/30 hover:border-indigo-500/60'
                    }`}
                  >
                    <Filter className="w-3 h-3" />
                    <span>{filterBySelectedCapabilities ? 'Filtered to Capability Needs' : 'Filter Services to Needs'}</span>
                  </button>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Step 2: Service Selection Explorer */}
        <div className="mb-10 space-y-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="text-xs font-semibold text-indigo-400 uppercase tracking-wider mb-1 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-[11px] font-bold">2</span>
                <span>Select Engagement Services (13 Practice Areas · 89 Solutions)</span>
              </div>
              <p className="text-sm text-white/70">
                Click any service to add or remove it from your engagement scope. Every service includes a brief explanation of how it creates value.
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={toggleAllDomains}
                className="text-xs text-indigo-400 hover:text-white px-3 py-1.5 rounded-lg border border-white/10 hover:border-indigo-500/35 transition-colors"
              >
                {expandedDomains.size === ENGAGEMENT_DOMAINS.length ? 'Collapse All Areas' : 'Expand All Areas'}
              </button>
            </div>
          </div>

          {/* Search & Category Filter Toolbar */}
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-white/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search services (e.g. Dossier, Tender, Cold Chain, ISO, Pricing, KOL, CDMO)..."
                className="w-full min-h-11 pl-10 pr-4 py-2 rounded-xl bg-[#0a0a0a] border border-white/10 text-sm text-white placeholder-white/40 focus:outline-none focus:border-indigo-500"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/50 hover:text-white text-xs"
                >
                  Clear
                </button>
              )}
            </div>

            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
              {filterCategories.map(cat => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => {
                    setActiveCategoryFilter(cat.id);
                    if (filterBySelectedCapabilities) setFilterBySelectedCapabilities(false);
                  }}
                  className={`text-xs px-3 py-2 rounded-xl border whitespace-nowrap transition-colors ${
                    activeCategoryFilter === cat.id && !filterBySelectedCapabilities
                      ? 'bg-indigo-600 text-white border-indigo-500'
                      : 'bg-[#0a0a0a] text-white/70 border-white/10 hover:border-white/20'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Practice Areas / Domains List */}
          <div className="space-y-4">
            {filteredDomains.map(domain => {
              const IconComponent = DOMAIN_ICONS[domain.iconName] || Layers;
              const isExpanded = expandedDomains.has(domain.id);
              const selectedInDomainCount = domain.services.filter(s => selectedServices.has(s.id)).length;
              const isDomainInCapabilityNeeds = selectedCapabilityNeeds.includes(domain.title);

              return (
                <div
                  key={domain.id}
                  className={`rounded-2xl bg-[#0a0a0a] border transition-colors overflow-hidden ${
                    isDomainInCapabilityNeeds ? 'border-indigo-500/40 shadow-sm' : 'border-white/10'
                  }`}
                >
                  {/* Domain Header Accordion Bar */}
                  <div
                    onClick={() => toggleDomain(domain.id)}
                    className="p-4 sm:p-5 flex items-center justify-between cursor-pointer hover:bg-white/[0.02] transition-colors select-none"
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') toggleDomain(domain.id); }}
                    aria-expanded={isExpanded}
                  >
                    <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                      <div className="w-10 h-10 rounded-xl bg-[#050505] border border-white/10 flex items-center justify-center shrink-0 text-indigo-400">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-indigo-400 tabular-nums">
                            {domain.id < 10 ? `0${domain.id}` : domain.id}.
                          </span>
                          <h3 className="text-base sm:text-lg font-bold text-white truncate">
                            {domain.title}
                          </h3>
                          {isDomainInCapabilityNeeds && (
                            <span className="text-[10px] px-2 py-0.5 rounded-full bg-indigo-500/15 text-indigo-300 font-semibold border border-indigo-500/25 hidden sm:inline">
                              Priority Need
                            </span>
                          )}
                          {selectedInDomainCount > 0 && (
                            <span className="text-xs px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 font-semibold border border-indigo-500/30">
                              {selectedInDomainCount} selected
                            </span>
                          )}
                        </div>
                        <p className="text-xs sm:text-sm text-white/60 line-clamp-1 mt-0.5">
                          {domain.subtitle}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 shrink-0 ml-2">
                      <span className="text-xs text-white/40 hidden sm:inline">
                        {domain.services.length} services
                      </span>
                      <div className="w-8 h-8 rounded-lg bg-[#050505] border border-white/10 flex items-center justify-center text-white/70">
                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </div>
                    </div>
                  </div>

                  {/* Domain Services Grid */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2, ease: EASE }}
                        className="border-t border-white/10 p-4 sm:p-5 bg-[#070707]"
                      >
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-3">
                          {domain.services.map(service => {
                            const isSelected = selectedServices.has(service.id);
                            const hasDetailOpen = expandedServiceDetails.has(service.id);

                            return (
                              <div
                                key={service.id}
                                onClick={() => toggleService(service.id)}
                                className={`mc-tap p-4 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                                  isSelected
                                    ? 'bg-indigo-950/25 border-indigo-500/60 shadow-lg shadow-indigo-500/5'
                                    : 'bg-[#050505] border-white/10 hover:border-white/20'
                                }`}
                              >
                                <div>
                                  {/* Service Top Row: Checkbox + Name */}
                                  <div className="flex items-start gap-2.5 mb-2">
                                    <div
                                      className={`w-5 h-5 rounded-md mt-0.5 shrink-0 flex items-center justify-center border transition-colors ${
                                        isSelected
                                          ? 'bg-indigo-600 border-indigo-500 text-white'
                                          : 'border-white/20 bg-black/40 text-transparent'
                                      }`}
                                    >
                                      <Check className="w-3.5 h-3.5" />
                                    </div>
                                    <div className="min-w-0">
                                      <div className={`text-sm font-bold leading-snug ${isSelected ? 'text-indigo-200' : 'text-white'}`}>
                                        {service.name}
                                      </div>
                                    </div>
                                  </div>

                                  {/* Explicit Brief Explanation from Client */}
                                  <p className="text-xs text-white/70 leading-relaxed pl-7">
                                    {service.briefExplanation}
                                  </p>

                                  {/* Expandable Deeper Scope Details */}
                                  {hasDetailOpen && (
                                    <motion.div
                                      initial={{ opacity: 0, y: -4 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      className="mt-3 pt-3 border-t border-white/10 text-xs text-white/60 pl-7 space-y-2"
                                    >
                                      <div>
                                        <span className="font-semibold text-white/80">Detailed Scope: </span>
                                        {service.scopeDetail}
                                      </div>
                                      <div>
                                        <span className="font-semibold text-white/80">Deliverables: </span>
                                        {service.typicalDeliverables.join(' · ')}
                                      </div>
                                    </motion.div>
                                  )}
                                </div>

                                {/* Bottom Info Button */}
                                <div className="mt-3 pt-2 border-t border-white/[0.05] flex items-center justify-between text-[11px] text-white/50 pl-7">
                                  <span>{isSelected ? '✓ In Scope' : '+ Click to add'}</span>
                                  <button
                                    type="button"
                                    onClick={(e) => toggleServiceDetail(service.id, e)}
                                    className="text-indigo-400 hover:text-white transition-colors"
                                  >
                                    {hasDetailOpen ? 'Less detail' : 'More detail'}
                                  </button>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

        {/* Step 3: Generated Blueprint Result */}
        <div
          id="engagement-blueprint-result"
          className="rounded-2xl bg-[#0a0a0a] border border-indigo-500/40 p-5 sm:p-8 space-y-6 md:space-y-8 relative overflow-hidden scroll-mt-20"
        >
          {/* Blueprint Header */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-5 md:pb-6 border-b border-white/10 gap-4">
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="text-xs px-2.5 py-1 rounded-md bg-[#0d0f17] border border-indigo-500/40 text-indigo-300 font-semibold">
                  Synthesized Engagement Brief
                </span>
                <span className="text-xs px-2.5 py-1 rounded bg-[#050505] border border-white/10 text-white/70 tabular-nums break-words flex items-center gap-1.5">
                  <Globe2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{blueprint.geography}</span>
                </span>
                <span className="text-xs px-2.5 py-1 rounded bg-indigo-950/40 border border-indigo-500/30 text-indigo-300 tabular-nums">
                  {selectedServices.size} Services Selected
                </span>
              </div>
              <motion.h2
                key={blueprint.objective}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, ease: EASE }}
                className="font-heading text-2xl sm:text-3xl font-medium tracking-[-0.015em] text-white"
              >
                {blueprint.objective}
              </motion.h2>
              <p className="text-sm text-indigo-400 mt-1">
                Custom scope sketched across {blueprint.selectedDomains?.length || 0} practice areas in {blueprint.geography}. MindCraft refines this with you on a discovery call.
              </p>
            </div>

            {/* Top Action CTAs */}
            <div className="flex items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={handleCopySummary}
                className="mc-tap px-3.5 py-2.5 rounded-xl border border-white/10 hover:border-white/20 bg-[#050505] text-xs font-semibold text-white/80 transition-colors inline-flex items-center gap-1.5"
                title="Copy engagement summary to clipboard"
              >
                <Copy className="w-3.5 h-3.5" />
                <span>{copied ? 'Copied!' : 'Copy Brief'}</span>
              </button>

              <button
                type="button"
                onClick={() => onOpenIntakeWithBlueprint(blueprint)}
                id="discuss-blueprint-btn"
                className="mc-tap px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-colors active:scale-[0.98] inline-flex items-center gap-2 shadow-lg shadow-indigo-600/20"
              >
                <span>Discuss this engagement</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Selected Scope Summary Boxes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {/* Target Countries List */}
            <div className="p-4 rounded-xl bg-[#050505] border border-white/10 space-y-2">
              <div className="text-xs font-semibold text-emerald-400 flex items-center justify-between">
                <span>Target African Markets ({selectedCountries.length})</span>
                <span className="text-[11px] text-white/50">Multi-Country Coverage</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {selectedCountries.map(c => (
                  <span
                    key={c}
                    className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-[#0a0a0a] border border-emerald-500/30 text-xs text-white"
                  >
                    <span className="text-emerald-400 font-bold">•</span>
                    <span>{c}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Selected Capability Needs */}
            <div className="p-4 rounded-xl bg-[#050505] border border-white/10 space-y-2">
              <div className="text-xs font-semibold text-indigo-400 flex items-center justify-between">
                <span>Capability Needs ({selectedCapabilityNeeds.length})</span>
                <span className="text-[11px] text-white/50">Priority Focus Areas</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {selectedCapabilityNeeds.map(need => (
                  <span
                    key={need}
                    className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-[#0a0a0a] border border-indigo-500/30 text-xs text-white"
                  >
                    <span className="text-indigo-400 font-bold">•</span>
                    <span>{need}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Selected Specific Services Tags (if any) */}
          {selectedServicesList.length > 0 && (
            <div className="p-4 rounded-xl bg-[#050505] border border-white/10 space-y-2">
              <div className="text-xs font-semibold text-indigo-400 flex items-center justify-between">
                <span>Selected Specific Solutions ({selectedServicesList.length})</span>
                <span className="text-[11px] text-white/50">Across {blueprint.selectedDomains?.length} practice areas</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {selectedServicesList.map(s => (
                  <span
                    key={s.id}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#0a0a0a] border border-indigo-500/30 text-xs text-white"
                  >
                    <span className="text-indigo-400 font-bold">•</span>
                    <span>{s.name}</span>
                    <button
                      type="button"
                      onClick={() => toggleService(s.id)}
                      className="text-white/40 hover:text-white ml-1"
                      aria-label={`Remove ${s.name}`}
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* 4 Workstreams: Responsive Grid */}
          <motion.div
            className="space-y-3"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.22, ease: EASE }}
          >
            <div className="text-xs font-semibold text-indigo-400 flex items-center gap-2">
              <Layers className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Recommended Integrated Workstreams</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
              {blueprint.workstreams.map((ws, i) => (
                <div key={i} className="p-4 sm:p-5 rounded-2xl bg-[#050505] border border-white/10 flex flex-col justify-between hover:border-indigo-500/35 transition-colors">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span className="text-sm font-bold text-white">{ws.pillar}</span>
                      <span className="text-xs tabular-nums text-indigo-400 shrink-0">{ws.timeline}</span>
                    </div>
                    <p className="text-xs text-white/70 leading-relaxed">
                      {ws.scope}
                    </p>
                  </div>
                  <div className="mt-3 pt-2 border-t border-white/[0.08] text-[11px] text-white/50 tabular-nums">
                    Lead: MindCraft Senior Practice
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* 4 Indicative Delivery Phases */}
          <motion.div
            className="space-y-3"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.22, ease: EASE }}
          >
            <div className="text-xs font-semibold text-indigo-400 flex items-center gap-2">
              <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Indicative 12-Week Delivery Phasing</span>
            </div>

            <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {blueprint.indicativePhases.map((ph, i) => (
                <li key={i} className="p-4 sm:p-5 rounded-2xl bg-[#050505] border border-white/10">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-xs tabular-nums text-indigo-400 font-bold">{ph.phase}</span>
                    <span className="text-xs text-white/60 tabular-nums">{ph.duration}</span>
                  </div>
                  <div className="text-sm font-bold text-white mb-1.5">{ph.title}</div>
                  <p className="text-xs text-white/70 leading-relaxed">{ph.activities}</p>
                </li>
              ))}
            </ol>
          </motion.div>

          {/* Deliverables + Stakeholders + Metrics */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.22, ease: EASE }}
          >
            <div className="p-4 sm:p-5 rounded-2xl bg-[#050505] border border-white/10 space-y-2">
              <div className="text-xs font-semibold text-emerald-400 flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Expected Deliverables ({blueprint.expectedDeliverables.length})</span>
              </div>
              <ul className="space-y-2">
                {blueprint.expectedDeliverables.map((del, i) => (
                  <li key={i} className="text-xs text-white/80 flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{del}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-[#050505] border border-white/10 space-y-2">
              <div className="text-xs font-semibold text-indigo-400 flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Key Stakeholders Required</span>
              </div>
              <ul className="space-y-2">
                {blueprint.keyStakeholders.map((stk, i) => (
                  <li key={i} className="text-xs text-white/80 flex items-start gap-2">
                    <span className="text-indigo-400 font-bold" aria-hidden="true">•</span>
                    <span>{stk}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-[#050505] border border-indigo-500/35 space-y-2">
              <div className="text-xs font-semibold text-indigo-400 flex items-center gap-1.5">
                <Target className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Success Impact Targets</span>
              </div>
              <ul className="space-y-2">
                {blueprint.successMetrics.map((met, i) => (
                  <li key={i} className="text-xs text-white font-medium flex items-start gap-2">
                    <span className="text-indigo-400 font-bold" aria-hidden="true">↑</span>
                    <span>{met}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Bottom Confirmation Bar */}
          <div className="p-5 rounded-2xl bg-[#050505] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="text-sm font-semibold text-white">
                Ready to refine this custom engagement brief?
              </div>
              <p className="text-xs text-white/60 mt-0.5">
                Your selected markets ({selectedCountries.length}) and capability areas ({selectedCapabilityNeeds.length}) will be pre-filled so our partners can review your scope beforehand.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onOpenIntakeWithBlueprint(blueprint)}
              className="mc-tap px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold shrink-0 transition-colors active:scale-[0.98] inline-flex items-center gap-2"
            >
              <span>Schedule Blueprint Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Sticky Summary Bar (mobile only) */}
      <div className="md:hidden sticky bottom-0 z-20 mt-4 bg-[#050505]/95 backdrop-blur border-t border-white/10 pb-[env(safe-area-inset-bottom)]">
        <div className="mc-container h-14 flex items-center justify-between gap-3">
          <div className="min-w-0 leading-tight">
            <div className="text-xs text-indigo-400 font-medium">
              {selectedServices.size} services · {selectedCountries.length} markets
            </div>
            <div className="text-xs text-white/80 truncate">
              {blueprint.industry} · {blueprint.geography}
            </div>
          </div>
          <button
            type="button"
            onClick={() => onOpenIntakeWithBlueprint(blueprint)}
            className="mc-tap shrink-0 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold active:scale-[0.98] inline-flex items-center gap-1.5"
          >
            Discuss <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
