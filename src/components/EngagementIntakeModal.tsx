import React, { useState, useEffect } from 'react';
import { EngagementBlueprint } from '../types';
import { 
  X, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft, 
  Building2, 
  Mail, 
  User, 
  Globe2, 
  Calendar, 
  Layers, 
  ShieldCheck, 
  Copy, 
  Download,
  FileCheck
} from 'lucide-react';

interface EngagementIntakeModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialBlueprint?: EngagementBlueprint | null;
}

export const EngagementIntakeModal: React.FC<EngagementIntakeModalProps> = ({
  isOpen,
  onClose,
  initialBlueprint
}) => {
  const [step, setStep] = useState<number>(1);
  const [copied, setCopied] = useState<boolean>(false);

  // Form State
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [organization, setOrganization] = useState<string>('');
  const [roleTitle, setRoleTitle] = useState<string>('');
  const [targetMarkets, setTargetMarkets] = useState<string>('Kenya, Nigeria, South Africa');
  
  const [sector, setSector] = useState<string>(initialBlueprint?.industry || 'Pharmaceuticals');
  const [pillarNeed, setPillarNeed] = useState<string>(initialBlueprint?.need || 'Integrated Multi-Pillar (Strategy + Research + AI)');
  const [challengeDescription, setChallengeDescription] = useState<string>('');
  const [timelineUrgency, setTimelineUrgency] = useState<string>('Within 30 Days (Immediate Priority)');
  const [dataReadiness, setDataReadiness] = useState<string>('Partial structured data + clinical/market documents');
  
  const [referenceId, setReferenceId] = useState<string>('');

  useEffect(() => {
    if (initialBlueprint) {
      setSector(initialBlueprint.industry);
      setPillarNeed(initialBlueprint.need);
      if (initialBlueprint.objective) {
        setChallengeDescription(`Focus on: ${initialBlueprint.objective}`);
      }
    }
  }, [initialBlueprint]);

  if (!isOpen) return null;

  const handleNext = () => {
    if (step === 4) {
      // Generate Ref ID
      const randomNum = Math.floor(1000 + Math.random() * 9000);
      setReferenceId(`MC-ENG-2026-${randomNum}`);
      setStep(5);
    } else {
      setStep(prev => prev + 1);
    }
  };

  const handleCopySummary = () => {
    const text = `MindCraft Engagement Request [${referenceId}]
Organization: ${organization}
Lead: ${fullName} (${roleTitle} - ${email})
Sector: ${sector}
Target Markets: ${targetMarkets}
Primary Scope: ${pillarNeed}
Timeline: ${timelineUrgency}
Challenge Context: ${challengeDescription}`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="relative w-full max-w-3xl rounded-2xl bg-[#0a0a0a] border border-white/10 shadow-2xl overflow-hidden animate-in fade-in-50 zoom-in-95 duration-200">
        
        {/* Modal Top Bar */}
        <div className="px-6 py-4 bg-[#050505] border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
            <span className="text-[10px] font-mono font-bold text-indigo-400 uppercase tracking-wider">
              MindCraft Diagnostic Intake Wizard
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-white/50 hover:text-white hover:bg-white/5 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Step Progress Tracker */}
        {step < 5 && (
          <div className="px-6 pt-4 pb-2 border-b border-white/10 bg-[#050505]">
            <div className="flex items-center justify-between text-xs text-white/50 mb-2 font-mono">
              <span>Step 0{step} of 04</span>
              <span>
                {step === 1 && 'Stakeholder Profile'}
                {step === 2 && 'Sector & Capability Scope'}
                {step === 3 && 'Strategic Context & Data'}
                {step === 4 && 'Engagement Architecture Review'}
              </span>
            </div>
            <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
              <div 
                className="h-full bg-indigo-500 transition-all duration-300 shadow-[0_0_8px_rgba(99,102,241,0.5)]"
                style={{ width: `${(step / 4) * 100}%` }}
              />
            </div>
          </div>
        )}

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          
          {/* STEP 1: Stakeholder Profile */}
          {step === 1 && (
            <div className="space-y-4 animate-in fade-in-50 duration-150">
              <div>
                <h3 className="text-xl font-light text-white">Client Organization & <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-300">Lead Profile</span></h3>
                <p className="text-xs text-white/50 mt-0.5 font-mono">
                  Please provide your leadership contact details for secure consultation scheduling.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono uppercase font-bold text-indigo-400">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Dr. Jane Doe / John Smith"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-[#050505] border border-white/10 text-xs text-white placeholder-white/30 focus:outline-none focus:border-indigo-500 font-mono"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono uppercase font-bold text-indigo-400">Professional Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="jane.doe@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-[#050505] border border-white/10 text-xs text-white placeholder-white/30 focus:outline-none focus:border-indigo-500 font-mono"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono uppercase font-bold text-indigo-400">Organization Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Novartis, Roche, KEMRI, Equity Bank"
                    value={organization}
                    onChange={(e) => setOrganization(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-[#050505] border border-white/10 text-xs text-white placeholder-white/30 focus:outline-none focus:border-indigo-500 font-mono"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono uppercase font-bold text-indigo-400">Your Title / Role *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. VP Market Access / Head of Commercial"
                    value={roleTitle}
                    onChange={(e) => setRoleTitle(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-[#050505] border border-white/10 text-xs text-white placeholder-white/30 focus:outline-none focus:border-indigo-500 font-mono"
                  />
                </div>

                <div className="sm:col-span-2 space-y-1.5">
                  <label className="text-[10px] font-mono uppercase font-bold text-indigo-400">Target African Markets in Scope *</label>
                  <input
                    type="text"
                    placeholder="e.g. Kenya, Nigeria, Ghana, South Africa, Egypt"
                    value={targetMarkets}
                    onChange={(e) => setTargetMarkets(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-[#050505] border border-white/10 text-xs text-white placeholder-white/30 focus:outline-none focus:border-indigo-500 font-mono"
                  />
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: Sector & Pillar Scope */}
          {step === 2 && (
            <div className="space-y-4 animate-in fade-in-50 duration-150">
              <div>
                <h3 className="text-xl font-light text-white">Sector & <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-300">Capability Alignment</span></h3>
                <p className="text-xs text-white/50 mt-0.5 font-mono">
                  Define your industry domain and the primary MindCraft service pillars required.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono uppercase font-bold text-indigo-400">Industry Vertical</label>
                  <select
                    value={sector}
                    onChange={(e) => setSector(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-[#050505] border border-white/10 text-xs text-white focus:outline-none focus:border-indigo-500 font-mono"
                  >
                    <option value="Pharmaceuticals">Pharmaceuticals (Innovative / Generic / Biotech)</option>
                    <option value="Medical Devices">Medical Devices & Implants</option>
                    <option value="Medical Diagnostics">Medical Diagnostics & Laboratory Systems</option>
                    <option value="Medical Equipment">Capital Medical Equipment & Imaging</option>
                    <option value="Surgical Consumables">Surgical Consumables & Hospital Supplies</option>
                    <option value="Hospitals & Healthcare Providers">Hospitals & Healthcare Provider Networks</option>
                    <option value="Chemicals & Materials">Chemicals & Specialty Materials</option>
                    <option value="Agrochemicals">Agrochemicals & Crop Protection</option>
                    <option value="Automotive">Automotive & Mobility</option>
                    <option value="Banking & Finance">Banking & Financial Services</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono uppercase font-bold text-indigo-400">Primary Capability Need</label>
                  <select
                    value={pillarNeed}
                    onChange={(e) => setPillarNeed(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-[#050505] border border-white/10 text-xs text-white focus:outline-none focus:border-indigo-500 font-mono"
                  >
                    <option value="Integrated Multi-Pillar (Strategy + Research + AI)">Integrated Multi-Pillar (Full Strategy, Research & AI Stack)</option>
                    <option value="Business Consulting & Strategic Advisory">Business Consulting & Strategic Advisory (Pillar 01)</option>
                    <option value="Market Research & Commercial Evidence">Market Research & Primary/Desk Intelligence (Pillar 02)</option>
                    <option value="AI Training & Organizational Capability">AI Training & Digital Literacy Enablement (Pillar 03)</option>
                    <option value="AI Enterprise Solutions & Engineering">AI Enterprise Solutions & Private Software Build (Pillar 04)</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: Strategic Context & Data */}
          {step === 3 && (
            <div className="space-y-4 animate-in fade-in-50 duration-150">
              <div>
                <h3 className="text-xl font-light text-white">Strategic Challenge & <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-300">Context</span></h3>
                <p className="text-xs text-white/50 mt-0.5 font-mono">
                  Briefly outline the business question or dilemma you need MindCraft to solve.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono uppercase font-bold text-indigo-400">Core Strategic Dilemma / Objective</label>
                  <textarea
                    rows={3}
                    placeholder="e.g. We are launching a specialty oncology portfolio across Kenya and Ghana, needing reimbursement mapping, key opinion leader validation, and a custom field detailing copilot."
                    value={challengeDescription}
                    onChange={(e) => setChallengeDescription(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-[#050505] border border-white/10 text-xs text-white placeholder-white/30 focus:outline-none focus:border-indigo-500 font-mono"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono uppercase font-bold text-indigo-400">Timeline / Priority</label>
                    <select
                      value={timelineUrgency}
                      onChange={(e) => setTimelineUrgency(e.target.value)}
                      className="w-full p-2.5 rounded-xl bg-[#050505] border border-white/10 text-xs text-white focus:outline-none focus:border-indigo-500 font-mono"
                    >
                      <option value="Within 30 Days (Immediate Priority)">Immediate (Next 30 Days)</option>
                      <option value="Q1 / Q2 Strategic Planning Cycle">Q1 / Q2 Strategic Cycle</option>
                      <option value="6-Month Multi-Phase Transformation">6-Month Transformation</option>
                      <option value="Ongoing Retainer Partnership">Annual Retainer Scope</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono uppercase font-bold text-indigo-400">Internal Data Readiness</label>
                    <select
                      value={dataReadiness}
                      onChange={(e) => setDataReadiness(e.target.value)}
                      className="w-full p-2.5 rounded-xl bg-[#050505] border border-white/10 text-xs text-white focus:outline-none focus:border-indigo-500 font-mono"
                    >
                      <option value="Partial structured data + clinical/market documents">Partial data + documents</option>
                      <option value="Robust CRM / ERP data ready for AI ingestion">Robust CRM/ERP records</option>
                      <option value="Early-stage; need MindCraft primary data collection">Need primary field research</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 4: Review & Blueprint Confirmation */}
          {step === 4 && (
            <div className="space-y-4 animate-in fade-in-50 duration-150">
              <div>
                <h3 className="text-xl font-light text-white">Engagement Diagnostic <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-300">Summary</span></h3>
                <p className="text-xs text-white/50 mt-0.5 font-mono">
                  Confirm your diagnostic details before submitting to MindCraft Senior Practice Partners.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#050505] border border-white/10 space-y-3 font-mono">
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <span className="text-white/40 block text-[10px]">Organization:</span>
                    <span className="font-bold text-white">{organization || 'Not Specified'}</span>
                  </div>
                  <div>
                    <span className="text-white/40 block text-[10px]">Contact:</span>
                    <span className="font-bold text-white">{fullName} ({roleTitle})</span>
                  </div>
                  <div>
                    <span className="text-white/40 block text-[10px]">Industry Sector:</span>
                    <span className="font-bold text-indigo-400">{sector}</span>
                  </div>
                  <div>
                    <span className="text-white/40 block text-[10px]">Markets in Scope:</span>
                    <span className="font-bold text-white">{targetMarkets}</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-white/5 text-xs">
                  <span className="text-white/40 block text-[10px]">Primary Scope & Need:</span>
                  <span className="font-semibold text-white">{pillarNeed}</span>
                </div>

                <div className="text-xs">
                  <span className="text-white/40 block text-[10px]">Dilemma Context:</span>
                  <span className="text-white/70 italic font-sans">{challengeDescription || 'Strategic consultation requested.'}</span>
                </div>
              </div>

              <div className="flex items-center space-x-2 text-xs text-white/60 bg-[#050505] p-3.5 rounded-xl border border-white/10 font-mono">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Protected by MindCraft Enterprise Non-Disclosure & Data Privacy Guarantee.</span>
              </div>
            </div>
          )}

          {/* STEP 5: Success Confirmation */}
          {step === 5 && (
            <div className="text-center py-6 space-y-5 animate-in fade-in-50 duration-200">
              <div className="w-16 h-16 rounded-2xl bg-indigo-950/60 border border-indigo-500/50 text-indigo-300 flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(99,102,241,0.3)]">
                <CheckCircle2 className="w-8 h-8 text-emerald-400" />
              </div>

              <div>
                <div className="text-[10px] font-mono uppercase text-indigo-400 font-bold">
                  Engagement Intake Received
                </div>
                <h3 className="text-2xl font-light text-white mt-1">
                  Consultation Request <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-300">Scheduled</span>
                </h3>
                <p className="text-xs sm:text-sm text-white/60 mt-2 max-w-lg mx-auto leading-relaxed">
                  Thank you, <span className="text-white font-semibold">{fullName}</span>. A Senior Practice Partner from MindCraft Nairobi HQ will review your diagnostic brief and contact you within 24 hours.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#050505] border border-indigo-500/30 max-w-md mx-auto text-left space-y-2 font-mono">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-white/40">Dossier Reference ID:</span>
                  <span className="font-bold text-indigo-300">{referenceId}</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-white/40">Lead Partner Assigned:</span>
                  <span className="font-semibold text-white">Nairobi Practice Lead</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-white/40">Estimated Briefing:</span>
                  <span className="text-emerald-400 font-semibold">Within 24 Business Hours</span>
                </div>
              </div>

              <div className="flex items-center justify-center space-x-3 pt-2">
                <button
                  onClick={handleCopySummary}
                  className="px-4 py-2 rounded-xl bg-[#050505] hover:bg-white/5 border border-white/10 text-white text-xs font-mono font-semibold transition-colors flex items-center space-x-1.5"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>{copied ? 'Copied to Clipboard!' : 'Copy Summary'}</span>
                </button>
                <button
                  onClick={onClose}
                  className="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-mono font-semibold transition-colors shadow-[0_0_10px_rgba(99,102,241,0.25)]"
                >
                  Return to Portal
                </button>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer Controls */}
        {step < 5 && (
          <div className="px-6 py-4 bg-[#050505] border-t border-white/10 flex items-center justify-between">
            {step > 1 ? (
              <button
                onClick={() => setStep(prev => prev - 1)}
                className="px-4 py-2 rounded-xl bg-[#0a0a0a] hover:bg-white/5 text-white/60 hover:text-white text-xs font-mono font-semibold transition-colors flex items-center space-x-1.5 border border-white/10"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back</span>
              </button>
            ) : (
              <div />
            )}

            <button
              onClick={handleNext}
              id="intake-next-btn"
              className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-mono font-semibold transition-all flex items-center space-x-1.5 shadow-[0_0_15px_rgba(99,102,241,0.3)]"
            >
              <span>{step === 4 ? 'Confirm & Submit Engagement Brief' : 'Continue'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
