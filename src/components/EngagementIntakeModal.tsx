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
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative w-full max-w-3xl rounded-2xl bg-[#FBFAF6] border border-[rgba(20,25,26,0.14)] shadow-2xl overflow-hidden animate-in fade-in-50 zoom-in-95 duration-200">
        
        {/* Modal Top Bar */}
        <div className="px-6 py-4 bg-[#123A2E] text-[#EDE7D9] flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-[10px] font-mono font-bold text-[#D98A5F] uppercase tracking-wider">
              MindCraft Engagement Intake
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Step Progress Tracker */}
        {step < 5 && (
          <div className="px-6 pt-4 pb-2 border-b border-[rgba(20,25,26,0.08)] bg-[#F4F1EA]">
            <div className="flex items-center justify-between text-xs text-[#4C524E] mb-2 font-mono">
              <span>Step 0{step} of 04</span>
              <span className="font-semibold text-[#16191A]">
                {step === 1 && 'Stakeholder Profile'}
                {step === 2 && 'Sector & Capability Scope'}
                {step === 3 && 'Strategic Context & Readiness'}
                {step === 4 && 'Engagement Architecture Review'}
              </span>
            </div>
            <div className="w-full h-1 bg-[rgba(20,25,26,0.1)] rounded-full overflow-hidden">
              <div 
                className="h-full bg-[#123A2E] transition-all duration-300"
                style={{ width: `${(step / 4) * 100}%` }}
              />
            </div>
          </div>
        )}

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          
          {/* STEP 1: Stakeholder Profile */}
          {step === 1 && (
            <div className="space-y-4">
              <div>
                <h3 className="text-xl sm:text-2xl font-serif text-[#16191A]">Client Organization & Lead Profile</h3>
                <p className="text-xs text-[#4C524E] mt-0.5 font-sans">
                  Please provide your leadership contact details for partner-led consultation scheduling.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono uppercase font-bold text-[#8A8578]">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Dr. Jane Doe / John Smith"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full p-2.5 rounded-lg bg-white border border-[rgba(20,25,26,0.12)] text-xs text-[#16191A] placeholder-[#8A8578] focus:outline-none focus:border-[#123A2E] font-sans"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono uppercase font-bold text-[#8A8578]">Professional Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="jane.doe@organization.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-2.5 rounded-lg bg-white border border-[rgba(20,25,26,0.12)] text-xs text-[#16191A] placeholder-[#8A8578] focus:outline-none focus:border-[#123A2E] font-sans"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono uppercase font-bold text-[#8A8578]">Organization Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Novartis, Roche, KEMRI, Equity Bank"
                    value={organization}
                    onChange={(e) => setOrganization(e.target.value)}
                    className="w-full p-2.5 rounded-lg bg-white border border-[rgba(20,25,26,0.12)] text-xs text-[#16191A] placeholder-[#8A8578] focus:outline-none focus:border-[#123A2E] font-sans"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono uppercase font-bold text-[#8A8578]">Your Title / Role *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. VP Market Access / Commercial Director"
                    value={roleTitle}
                    onChange={(e) => setRoleTitle(e.target.value)}
                    className="w-full p-2.5 rounded-lg bg-white border border-[rgba(20,25,26,0.12)] text-xs text-[#16191A] placeholder-[#8A8578] focus:outline-none focus:border-[#123A2E] font-sans"
                  />
                </div>

                <div className="sm:col-span-2 space-y-1.5">
                  <label className="text-[10px] font-mono uppercase font-bold text-[#8A8578]">Target African Markets in Scope *</label>
                  <input
                    type="text"
                    placeholder="e.g. Kenya, Nigeria, Ghana, South Africa, Egypt"
                    value={targetMarkets}
                    onChange={(e) => setTargetMarkets(e.target.value)}
                    className="w-full p-2.5 rounded-lg bg-white border border-[rgba(20,25,26,0.12)] text-xs text-[#16191A] placeholder-[#8A8578] focus:outline-none focus:border-[#123A2E] font-sans"
                  />
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: Sector & Pillar Scope */}
          {step === 2 && (
            <div className="space-y-4">
              <div>
                <h3 className="text-xl sm:text-2xl font-serif text-[#16191A]">Sector & Capability Alignment</h3>
                <p className="text-xs text-[#4C524E] mt-0.5 font-sans">
                  Define your industry domain and the primary MindCraft service pillars required.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono uppercase font-bold text-[#8A8578]">Industry Vertical</label>
                  <select
                    value={sector}
                    onChange={(e) => setSector(e.target.value)}
                    className="w-full p-2.5 rounded-lg bg-white border border-[rgba(20,25,26,0.12)] text-xs text-[#16191A] focus:outline-none focus:border-[#123A2E] font-sans"
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
                  <label className="text-[10px] font-mono uppercase font-bold text-[#8A8578]">Primary Capability Need</label>
                  <select
                    value={pillarNeed}
                    onChange={(e) => setPillarNeed(e.target.value)}
                    className="w-full p-2.5 rounded-lg bg-white border border-[rgba(20,25,26,0.12)] text-xs text-[#16191A] focus:outline-none focus:border-[#123A2E] font-sans"
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
            <div className="space-y-4">
              <div>
                <h3 className="text-xl sm:text-2xl font-serif text-[#16191A]">Strategic Challenge & Context</h3>
                <p className="text-xs text-[#4C524E] mt-0.5 font-sans">
                  Briefly outline the business question or commercial bottleneck you need MindCraft to solve.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono uppercase font-bold text-[#8A8578]">Core Strategic Dilemma / Objective</label>
                  <textarea
                    rows={3}
                    placeholder="e.g. We are expanding specialty oncology therapies into East & West Africa, requiring reimbursement mapping, KOL validation, and private AI tender copilots."
                    value={challengeDescription}
                    onChange={(e) => setChallengeDescription(e.target.value)}
                    className="w-full p-2.5 rounded-lg bg-white border border-[rgba(20,25,26,0.12)] text-xs text-[#16191A] placeholder-[#8A8578] focus:outline-none focus:border-[#123A2E] font-sans"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono uppercase font-bold text-[#8A8578]">Timeline / Urgency</label>
                    <select
                      value={timelineUrgency}
                      onChange={(e) => setTimelineUrgency(e.target.value)}
                      className="w-full p-2.5 rounded-lg bg-white border border-[rgba(20,25,26,0.12)] text-xs text-[#16191A] focus:outline-none focus:border-[#123A2E] font-sans"
                    >
                      <option value="Within 30 Days (Immediate Priority)">Immediate (Next 30 Days)</option>
                      <option value="Q1 / Q2 Strategic Planning Cycle">Q1 / Q2 Strategic Cycle</option>
                      <option value="6-Month Multi-Phase Transformation">6-Month Transformation</option>
                      <option value="Ongoing Retainer Partnership">Annual Retainer Scope</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono uppercase font-bold text-[#8A8578]">Internal Data Readiness</label>
                    <select
                      value={dataReadiness}
                      onChange={(e) => setDataReadiness(e.target.value)}
                      className="w-full p-2.5 rounded-lg bg-white border border-[rgba(20,25,26,0.12)] text-xs text-[#16191A] focus:outline-none focus:border-[#123A2E] font-sans"
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

          {/* STEP 4: Review & Confirmation */}
          {step === 4 && (
            <div className="space-y-4">
              <div>
                <h3 className="text-xl sm:text-2xl font-serif text-[#16191A]">Engagement Diagnostic Summary</h3>
                <p className="text-xs text-[#4C524E] mt-0.5 font-sans">
                  Confirm your diagnostic details before submitting to MindCraft Senior Practice Partners.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white border border-[rgba(20,25,26,0.1)] space-y-3 font-mono">
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <span className="text-[#8A8578] block text-[10px]">Organization:</span>
                    <span className="font-bold text-[#16191A]">{organization || 'Not Specified'}</span>
                  </div>
                  <div>
                    <span className="text-[#8A8578] block text-[10px]">Contact:</span>
                    <span className="font-bold text-[#16191A]">{fullName} ({roleTitle})</span>
                  </div>
                  <div>
                    <span className="text-[#8A8578] block text-[10px]">Industry Sector:</span>
                    <span className="font-bold text-[#123A2E]">{sector}</span>
                  </div>
                  <div>
                    <span className="text-[#8A8578] block text-[10px]">Markets in Scope:</span>
                    <span className="font-bold text-[#16191A]">{targetMarkets}</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-[rgba(20,25,26,0.06)] text-xs">
                  <span className="text-[#8A8578] block text-[10px]">Primary Scope & Need:</span>
                  <span className="font-semibold text-[#16191A]">{pillarNeed}</span>
                </div>

                <div className="text-xs">
                  <span className="text-[#8A8578] block text-[10px]">Strategic Context:</span>
                  <span className="text-[#3B4441] italic font-serif">{challengeDescription || 'Strategic consultation requested.'}</span>
                </div>
              </div>

              <div className="flex items-center space-x-2 text-xs text-[#4C524E] bg-[#123A2E]/5 p-3.5 rounded-lg border border-[#123A2E]/10 font-sans">
                <ShieldCheck className="w-4 h-4 text-[#123A2E] shrink-0" />
                <span>Protected by MindCraft Enterprise Non-Disclosure & Data Privacy Guarantee.</span>
              </div>
            </div>
          )}

          {/* STEP 5: Success Confirmation */}
          {step === 5 && (
            <div className="text-center py-6 space-y-5">
              <div className="w-14 h-14 rounded-2xl bg-[#123A2E] text-white flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 className="w-7 h-7 text-[#D98A5F]" />
              </div>

              <div>
                <div className="text-[10px] font-mono uppercase text-[#C0562F] font-bold">
                  Engagement Intake Received
                </div>
                <h3 className="text-2xl font-serif text-[#16191A] mt-1 font-normal">
                  Consultation Request Scheduled
                </h3>
                <p className="text-xs sm:text-sm text-[#4C524E] mt-2 max-w-lg mx-auto leading-relaxed">
                  Thank you, <span className="text-[#16191A] font-semibold">{fullName}</span>. A Senior Practice Partner from MindCraft Nairobi HQ will review your diagnostic brief and contact you within 24 hours.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white border border-[rgba(20,25,26,0.12)] max-w-md mx-auto text-left space-y-2 font-mono">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#8A8578]">Dossier Reference ID:</span>
                  <span className="font-bold text-[#123A2E]">{referenceId}</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#8A8578]">Lead Partner Assigned:</span>
                  <span className="font-semibold text-[#16191A]">Nairobi Practice Lead</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#8A8578]">Estimated Response:</span>
                  <span className="text-[#123A2E] font-semibold">Within 24 Business Hours</span>
                </div>
              </div>

              <div className="flex items-center justify-center space-x-3 pt-2">
                <button
                  onClick={handleCopySummary}
                  className="px-4 py-2 rounded-lg bg-white hover:bg-[#F4F1EA] border border-[rgba(20,25,26,0.12)] text-[#16191A] text-xs font-mono font-semibold transition-colors flex items-center space-x-1.5"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>{copied ? 'Copied to Clipboard!' : 'Copy Summary'}</span>
                </button>
                <button
                  onClick={onClose}
                  className="px-5 py-2 rounded-lg bg-[#123A2E] hover:bg-[#C0562F] text-white text-xs font-semibold transition-colors"
                >
                  Return to Portal
                </button>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer Controls */}
        {step < 5 && (
          <div className="px-6 py-4 bg-[#F4F1EA] border-t border-[rgba(20,25,26,0.08)] flex items-center justify-between">
            {step > 1 ? (
              <button
                onClick={() => setStep(prev => prev - 1)}
                className="px-4 py-2 rounded-lg bg-white hover:bg-[#ECE7DC] text-[#4C524E] hover:text-[#16191A] text-xs font-semibold transition-colors flex items-center space-x-1.5 border border-[rgba(20,25,26,0.1)]"
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
              className="px-5 py-2.5 rounded-lg bg-[#123A2E] hover:bg-[#C0562F] text-white text-xs font-semibold transition-all flex items-center space-x-1.5"
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
