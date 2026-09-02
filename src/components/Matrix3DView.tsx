import React, { useState, useMemo } from 'react';
import { 
  Box, 
  Layers, 
  Globe2, 
  Cpu, 
  Compass, 
  Search, 
  GraduationCap, 
  CheckCircle2, 
  ArrowRight, 
  FileText, 
  TrendingUp, 
  Sparkles,
  Building2
} from 'lucide-react';
import { UNIVERSAL_INDUSTRIES, AFRICA_REGIONS_DATA } from '../data/industryAndAfricaData';
import { SERVICE_PILLARS } from '../data/mindcraftData';
import { NavTab } from '../types';

interface Props {
  onNavigate: (tab: NavTab) => void;
  onSelectEngagementConfig?: (industry: string, geography: string, capability: string) => void;
}

export const Matrix3DView: React.FC<Props> = ({ 
  onNavigate,
  onSelectEngagementConfig 
}) => {
  const [selectedIndustryId, setSelectedIndustryId] = useState('pharmaceuticals');
  const [selectedGeography, setSelectedGeography] = useState('East Africa');
  const [selectedCapabilityId, setSelectedCapabilityId] = useState('consulting');

  const selectedIndustry = useMemo(() => {
    return UNIVERSAL_INDUSTRIES.find(i => i.id === selectedIndustryId) || UNIVERSAL_INDUSTRIES[0];
  }, [selectedIndustryId]);

  const selectedPillar = useMemo(() => {
    return SERVICE_PILLARS.find(p => p.id === selectedCapabilityId) || SERVICE_PILLARS[0];
  }, [selectedCapabilityId]);

  const handleLaunch = () => {
    if (onSelectEngagementConfig) {
      onSelectEngagementConfig(selectedIndustry.name, selectedGeography, selectedPillar.name);
    }
    onNavigate('engagement-builder');
  };

  return (
    <div className="w-full min-h-screen bg-[#050505] text-white p-4 md:p-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 pb-6 border-b border-white/10">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="px-3 py-1 text-xs font-mono tracking-wider uppercase rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
              Multi-Dimensional Configuration Engine
            </span>
            <span className="text-xs text-neutral-400 font-mono">
              24 Industries × 5 Geographies × 4 Capabilities
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
            Industry × Geography × Capability 3D Matrix
          </h1>
          <p className="text-neutral-400 text-sm md:text-base mt-1 max-w-3xl">
            Synthesize an instant, custom engagement profile by intersecting any industry vertical with a regional geographic footprint and a core MindCraft service pillar.
          </p>
        </div>

        <button
          onClick={handleLaunch}
          className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-xs font-semibold text-white transition-all shadow-[0_0_15px_rgba(99,102,241,0.3)] shrink-0 flex items-center gap-2"
        >
          Build Engagement from Matrix <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* 3-Dimensional Selector Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Dimension 1: Industry */}
        <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <span className="text-xs font-mono text-indigo-400 uppercase flex items-center gap-1.5">
              <Building2 className="w-4 h-4" /> Dimension 1: Industry
            </span>
            <span className="text-xs font-mono text-neutral-500">24 Sectors</span>
          </div>
          <select
            value={selectedIndustryId}
            onChange={(e) => setSelectedIndustryId(e.target.value)}
            className="w-full bg-[#050505] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-indigo-500"
          >
            <optgroup label="Core Life Sciences (6)">
              {UNIVERSAL_INDUSTRIES.filter(i => i.category === 'core-lifesciences').map(i => (
                <option key={i.id} value={i.id}>{i.name}</option>
              ))}
            </optgroup>
            <optgroup label="Diversified Verticals (18)">
              {UNIVERSAL_INDUSTRIES.filter(i => i.category === 'diversified-vertical').map(i => (
                <option key={i.id} value={i.id}>{i.name}</option>
              ))}
            </optgroup>
          </select>
          <div className="p-3 rounded-xl bg-[#050505] border border-white/5 text-xs text-neutral-300 line-clamp-3">
            {selectedIndustry.tagline}
          </div>
        </div>

        {/* Dimension 2: Geography */}
        <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <span className="text-xs font-mono text-emerald-400 uppercase flex items-center gap-1.5">
              <Globe2 className="w-4 h-4" /> Dimension 2: Geography
            </span>
            <span className="text-xs font-mono text-neutral-500">5 Regional Hubs</span>
          </div>
          <select
            value={selectedGeography}
            onChange={(e) => setSelectedGeography(e.target.value)}
            className="w-full bg-[#050505] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-indigo-500"
          >
            {AFRICA_REGIONS_DATA.map(r => (
              <option key={r.name} value={r.name}>{r.name} ({r.countries.length} Countries)</option>
            ))}
            <option value="Pan-African Multi-Country">Pan-African Multi-Country (All Hubs)</option>
            <option value="Global Connector (US/EU/Africa)">Global Connector (US / EU / Africa)</option>
          </select>
          <div className="p-3 rounded-xl bg-[#050505] border border-white/5 text-xs text-neutral-300 line-clamp-3">
            Full primary intelligence network coverage, regulatory monitoring, and distributor due diligence in target geography.
          </div>
        </div>

        {/* Dimension 3: Capability */}
        <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <span className="text-xs font-mono text-sky-400 uppercase flex items-center gap-1.5">
              <Layers className="w-4 h-4" /> Dimension 3: Capability
            </span>
            <span className="text-xs font-mono text-neutral-500">4 Service Pillars</span>
          </div>
          <select
            value={selectedCapabilityId}
            onChange={(e) => setSelectedCapabilityId(e.target.value)}
            className="w-full bg-[#050505] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-indigo-500"
          >
            {SERVICE_PILLARS.map(p => (
              <option key={p.id} value={p.id}>{p.name}</option>
            ))}
          </select>
          <div className="p-3 rounded-xl bg-[#050505] border border-white/5 text-xs text-neutral-300 line-clamp-3">
            {selectedPillar.tagline}
          </div>
        </div>
      </div>

      {/* Synthesized 3D Intersected Output Dossier */}
      <div className="bg-[#0a0a0a] border border-indigo-500/40 rounded-2xl p-6 md:p-8 space-y-6 shadow-[0_0_20px_rgba(99,102,241,0.15)]">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-indigo-400 uppercase">
              <Box className="w-4 h-4" /> Synthesized 3D Matrix Blueprint
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-white mt-1">
              {selectedPillar.name} for {selectedIndustry.name} in {selectedGeography}
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-mono border border-indigo-500/20">
              {selectedIndustry.name}
            </span>
            <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-mono border border-emerald-500/20">
              {selectedGeography}
            </span>
            <span className="px-3 py-1 rounded-full bg-sky-500/10 text-sky-400 text-xs font-mono border border-sky-500/20">
              {selectedPillar.name}
            </span>
          </div>
        </div>

        {/* 4-Column Intersected Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-[#050505] border border-white/5 space-y-2">
            <div className="text-xs font-semibold text-indigo-400 flex items-center gap-1.5">
              <Compass className="w-4 h-4" /> Core Investigation Questions
            </div>
            <ul className="text-xs text-neutral-300 space-y-1.5">
              {selectedIndustry.keyQuestions.slice(0, 2).map((q, idx) => (
                <li key={idx} className="line-clamp-3">• {q}</li>
              ))}
            </ul>
          </div>

          <div className="p-4 rounded-xl bg-[#050505] border border-white/5 space-y-2">
            <div className="text-xs font-semibold text-sky-400 flex items-center gap-1.5">
              <Search className="w-4 h-4" /> Integrated Methodology
            </div>
            <p className="text-xs text-neutral-300 leading-relaxed line-clamp-4">
              {selectedIndustry.researchAndIntelligence[0]} combined with {selectedPillar.tagline.toLowerCase()}.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#050505] border border-white/5 space-y-2">
            <div className="text-xs font-semibold text-emerald-400 flex items-center gap-1.5">
              <FileText className="w-4 h-4" /> Potential Deliverables
            </div>
            <ul className="text-xs text-neutral-300 space-y-1.5">
              {selectedIndustry.illustrativeEngagement.deliverables.slice(0, 2).map((d, idx) => (
                <li key={idx} className="line-clamp-2">• {d}</li>
              ))}
            </ul>
          </div>

          <div className="p-4 rounded-xl bg-[#050505] border border-white/5 space-y-2">
            <div className="text-xs font-semibold text-amber-400 flex items-center gap-1.5">
              <Cpu className="w-4 h-4" /> AI & Automation Layer
            </div>
            <p className="text-xs text-neutral-300 leading-relaxed line-clamp-4">
              {selectedIndustry.aiOpportunities[0]} tailored for {selectedGeography} operating realities.
            </p>
          </div>
        </div>

        {/* Measured Outcome Framework */}
        <div className="p-4 rounded-xl bg-[#050505] border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="text-xs font-mono text-emerald-400 uppercase flex items-center gap-1.5">
              <TrendingUp className="w-4 h-4" /> Target Business Outcome
            </div>
            <p className="text-xs text-neutral-300">
              {selectedIndustry.illustrativeEngagement.outcomeFramework[0]}
            </p>
          </div>
          <button
            onClick={handleLaunch}
            className="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-xs font-semibold text-white transition-all shadow-[0_0_15px_rgba(99,102,241,0.3)] shrink-0 flex items-center gap-2"
          >
            Configure Full Blueprint <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
