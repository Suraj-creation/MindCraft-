import React, { useState, useEffect, useRef, useId } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { EngagementBlueprint } from '../types';
import {
  X,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  Copy
} from 'lucide-react';

interface EngagementIntakeModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialBlueprint?: EngagementBlueprint | null;
}

const EASE = [0.16, 1, 0.3, 1] as const;

const FIELD_CLASS =
  'w-full min-h-11 px-3 py-2.5 rounded-xl bg-[#050505] border border-white/10 text-base sm:text-sm text-white placeholder-white/30 focus:outline-none focus:border-indigo-500';
const LABEL_CLASS = 'block text-[11px] font-mono uppercase font-bold tracking-wider text-indigo-400';

const FOCUSABLE =
  'a[href],button:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])';

const Heading: React.FC<{ lead: string; accent: string; hint: string }> = ({ lead, accent, hint }) => (
  <div>
    <h3 className="text-xl font-light text-white leading-snug">
      {lead} <span className="font-bold text-indigo-400">{accent}</span>
    </h3>
    <p className="text-sm text-white/60 mt-1">{hint}</p>
  </div>
);

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

  const uid = useId();
  const panelRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;

  useEffect(() => {
    if (initialBlueprint) {
      setSector(initialBlueprint.industry);
      setPillarNeed(initialBlueprint.need);
      if (initialBlueprint.objective) {
        setChallengeDescription(`Focus on: ${initialBlueprint.objective}`);
      }
    }
  }, [initialBlueprint]);

  // Focus management: remember opener, trap Tab, close on Escape, lock page scroll, restore focus.
  useEffect(() => {
    if (!isOpen) return;
    const opener = document.activeElement as HTMLElement | null;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const focusTimer = window.setTimeout(() => {
      const first = bodyRef.current?.querySelector<HTMLElement>('input,select,textarea,button');
      (first ?? panelRef.current)?.focus();
    }, 30);

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.stopPropagation();
        onCloseRef.current();
        return;
      }
      if (e.key !== 'Tab' || !panelRef.current) return;
      const nodes: HTMLElement[] = (Array.from(panelRef.current.querySelectorAll(FOCUSABLE)) as HTMLElement[]).filter(
        (n) => n.offsetParent !== null
      );
      if (nodes.length === 0) return;
      const first = nodes[0];
      const last = nodes[nodes.length - 1];
      const activeEl = document.activeElement;
      if (e.shiftKey && (activeEl === first || !panelRef.current.contains(activeEl))) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && (activeEl === last || !panelRef.current.contains(activeEl))) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('keydown', onKeyDown);

    return () => {
      window.clearTimeout(focusTimer);
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = prevOverflow;
      opener?.focus?.();
    };
  }, [isOpen]);

  // Return scroll position to top whenever the step changes
  useEffect(() => {
    bodyRef.current?.scrollTo({ top: 0 });
  }, [step]);

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

  const fid = (name: string) => `${uid}-${name}`;
  const stepTitle =
    step === 1 ? 'Stakeholder Profile'
    : step === 2 ? 'Sector & Capability Scope'
    : step === 3 ? 'Strategic Context & Data'
    : 'Engagement Architecture Review';

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-end sm:items-center justify-center sm:p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18, ease: EASE }}
        >
          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={fid('title')}
            tabIndex={-1}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.22, ease: EASE }}
            className="relative w-full sm:max-w-3xl max-h-[90dvh] flex flex-col rounded-t-2xl sm:rounded-2xl bg-[#0a0a0a] border border-white/10 shadow-2xl overflow-hidden outline-none"
          >
            {/* Modal Top Bar */}
            <div className="shrink-0 pl-4 sm:pl-6 pr-1.5 bg-[#050505] border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2 py-3">
                <div className="w-2 h-2 rounded-full bg-indigo-400" aria-hidden="true" />
                <span id={fid('title')} className="text-[11px] font-mono font-bold text-indigo-400 uppercase tracking-wider">
                  MindCraft Diagnostic Intake Wizard
                </span>
              </div>

              <button
                onClick={onClose}
                aria-label="Close intake wizard"
                className="mc-tap flex items-center justify-center rounded-lg text-white/60 hover:text-white hover:bg-white/5 transition-colors active:scale-[0.96]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Step Progress Tracker */}
            {step < 5 && (
              <div className="shrink-0 px-4 sm:px-6 pt-3 pb-3 border-b border-white/10 bg-[#050505]">
                <div className="flex items-center justify-between gap-3 text-xs text-white/60 mb-2 font-mono">
                  <span className="shrink-0">Step 0{step} of 04</span>
                  <span className="text-right truncate">{stepTitle}</span>
                </div>
                <div
                  className="w-full h-1 bg-white/10 rounded-full overflow-hidden"
                  role="progressbar"
                  aria-valuemin={1}
                  aria-valuemax={4}
                  aria-valuenow={step}
                  aria-label="Intake progress"
                >
                  <div
                    className="h-full w-full origin-left bg-indigo-500"
                    style={{ transform: `scaleX(${step / 4})`, transition: 'transform 0.25s cubic-bezier(0.16,1,0.3,1)' }}
                  />
                </div>
              </div>
            )}

            {/* Modal Body (scrolls inside) */}
            <div ref={bodyRef} className="flex-1 min-h-0 overflow-y-auto overscroll-contain p-4 sm:p-8">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={step}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.16, ease: EASE }}
                >
                  {/* STEP 1: Stakeholder Profile */}
                  {step === 1 && (
                    <div className="space-y-4">
                      <Heading
                        lead="Client Organization &"
                        accent="Lead Profile"
                        hint="Please provide your leadership contact details for secure consultation scheduling."
                      />

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                        <div className="space-y-1.5">
                          <label htmlFor={fid('name')} className={LABEL_CLASS}>Your Full Name *</label>
                          <input
                            id={fid('name')}
                            type="text"
                            required
                            autoComplete="name"
                            placeholder="Dr. Jane Doe / John Smith"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            className={FIELD_CLASS}
                          />
                        </div>

                        <div className="space-y-1.5">
                          <label htmlFor={fid('email')} className={LABEL_CLASS}>Professional Email Address *</label>
                          <input
                            id={fid('email')}
                            type="email"
                            inputMode="email"
                            required
                            autoComplete="email"
                            placeholder="jane.doe@company.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={FIELD_CLASS}
                          />
                        </div>

                        <div className="space-y-1.5">
                          <label htmlFor={fid('org')} className={LABEL_CLASS}>Organization Name *</label>
                          <input
                            id={fid('org')}
                            type="text"
                            required
                            autoComplete="organization"
                            placeholder="e.g. Novartis, Roche, KEMRI, Equity Bank"
                            value={organization}
                            onChange={(e) => setOrganization(e.target.value)}
                            className={FIELD_CLASS}
                          />
                        </div>

                        <div className="space-y-1.5">
                          <label htmlFor={fid('role')} className={LABEL_CLASS}>Your Title / Role *</label>
                          <input
                            id={fid('role')}
                            type="text"
                            required
                            autoComplete="organization-title"
                            placeholder="e.g. VP Market Access / Head of Commercial"
                            value={roleTitle}
                            onChange={(e) => setRoleTitle(e.target.value)}
                            className={FIELD_CLASS}
                          />
                        </div>

                        <div className="sm:col-span-2 space-y-1.5">
                          <label htmlFor={fid('markets')} className={LABEL_CLASS}>Target African Markets in Scope *</label>
                          <input
                            id={fid('markets')}
                            type="text"
                            placeholder="e.g. Kenya, Nigeria, Ghana, South Africa, Egypt"
                            value={targetMarkets}
                            onChange={(e) => setTargetMarkets(e.target.value)}
                            className={FIELD_CLASS}
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* STEP 2: Sector & Pillar Scope */}
                  {step === 2 && (
                    <div className="space-y-4">
                      <Heading
                        lead="Sector &"
                        accent="Capability Alignment"
                        hint="Define your industry domain and the primary MindCraft service pillars required."
                      />

                      <div className="space-y-4 pt-1">
                        <div className="space-y-1.5">
                          <label htmlFor={fid('sector')} className={LABEL_CLASS}>Industry Vertical</label>
                          <select
                            id={fid('sector')}
                            value={sector}
                            onChange={(e) => setSector(e.target.value)}
                            className={FIELD_CLASS}
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
                          <label htmlFor={fid('need')} className={LABEL_CLASS}>Primary Capability Need</label>
                          <select
                            id={fid('need')}
                            value={pillarNeed}
                            onChange={(e) => setPillarNeed(e.target.value)}
                            className={FIELD_CLASS}
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
                      <Heading
                        lead="Strategic Challenge &"
                        accent="Context"
                        hint="Briefly outline the business question or dilemma you need MindCraft to solve."
                      />

                      <div className="space-y-4 pt-1">
                        <div className="space-y-1.5">
                          <label htmlFor={fid('challenge')} className={LABEL_CLASS}>Core Strategic Dilemma / Objective</label>
                          <textarea
                            id={fid('challenge')}
                            rows={4}
                            placeholder="e.g. We are launching a specialty oncology portfolio across Kenya and Ghana, needing reimbursement mapping, key opinion leader validation, and a custom field detailing copilot."
                            value={challengeDescription}
                            onChange={(e) => setChallengeDescription(e.target.value)}
                            className={`${FIELD_CLASS} resize-y`}
                          />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="space-y-1.5">
                            <label htmlFor={fid('timeline')} className={LABEL_CLASS}>Timeline / Priority</label>
                            <select
                              id={fid('timeline')}
                              value={timelineUrgency}
                              onChange={(e) => setTimelineUrgency(e.target.value)}
                              className={FIELD_CLASS}
                            >
                              <option value="Within 30 Days (Immediate Priority)">Immediate (Next 30 Days)</option>
                              <option value="Q1 / Q2 Strategic Planning Cycle">Q1 / Q2 Strategic Cycle</option>
                              <option value="6-Month Multi-Phase Transformation">6-Month Transformation</option>
                              <option value="Ongoing Retainer Partnership">Annual Retainer Scope</option>
                            </select>
                          </div>

                          <div className="space-y-1.5">
                            <label htmlFor={fid('data')} className={LABEL_CLASS}>Internal Data Readiness</label>
                            <select
                              id={fid('data')}
                              value={dataReadiness}
                              onChange={(e) => setDataReadiness(e.target.value)}
                              className={FIELD_CLASS}
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
                    <div className="space-y-4">
                      <Heading
                        lead="Engagement Diagnostic"
                        accent="Summary"
                        hint="Confirm your diagnostic details before submitting to MindCraft Senior Practice Partners."
                      />

                      <dl className="p-4 sm:p-5 rounded-2xl bg-[#050505] border border-white/10 space-y-3">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                          <div>
                            <dt className="text-white/50 text-[11px] font-mono uppercase tracking-wider">Organization</dt>
                            <dd className="font-bold text-white break-words">{organization || 'Not Specified'}</dd>
                          </div>
                          <div>
                            <dt className="text-white/50 text-[11px] font-mono uppercase tracking-wider">Contact</dt>
                            <dd className="font-bold text-white break-words">{fullName} ({roleTitle})</dd>
                          </div>
                          <div>
                            <dt className="text-white/50 text-[11px] font-mono uppercase tracking-wider">Industry Sector</dt>
                            <dd className="font-bold text-indigo-400">{sector}</dd>
                          </div>
                          <div>
                            <dt className="text-white/50 text-[11px] font-mono uppercase tracking-wider">Markets in Scope</dt>
                            <dd className="font-bold text-white break-words">{targetMarkets}</dd>
                          </div>
                        </div>

                        <div className="pt-3 border-t border-white/[0.08] text-sm">
                          <dt className="text-white/50 text-[11px] font-mono uppercase tracking-wider">Primary Scope & Need</dt>
                          <dd className="font-semibold text-white">{pillarNeed}</dd>
                        </div>

                        <div className="text-sm">
                          <dt className="text-white/50 text-[11px] font-mono uppercase tracking-wider">Dilemma Context</dt>
                          <dd className="text-white/70 italic break-words">{challengeDescription || 'Strategic consultation requested.'}</dd>
                        </div>
                      </dl>

                      <div className="flex items-start gap-2 text-sm text-white/60 bg-[#050505] p-3.5 rounded-xl border border-white/10">
                        <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>Protected by MindCraft Enterprise Non-Disclosure & Data Privacy Guarantee.</span>
                      </div>
                    </div>
                  )}

                  {/* STEP 5: Success Confirmation */}
                  {step === 5 && (
                    <div className="text-center py-4 space-y-5" aria-live="polite">
                      <div className="w-16 h-16 rounded-2xl bg-[#0d0f17] border border-indigo-500/35 flex items-center justify-center mx-auto">
                        <CheckCircle2 className="w-8 h-8 text-emerald-400" />
                      </div>

                      <div>
                        <div className="text-[11px] font-mono uppercase text-indigo-400 font-bold tracking-wider">
                          Engagement Intake Received
                        </div>
                        <h3 className="text-2xl font-light text-white mt-1">
                          Consultation Request <span className="font-bold text-indigo-400">Scheduled</span>
                        </h3>
                        <p className="text-sm text-white/70 mt-2 max-w-lg mx-auto leading-relaxed">
                          Thank you, <span className="text-white font-semibold">{fullName}</span>. A Senior Practice Partner from MindCraft Nairobi HQ will review your diagnostic brief and contact you within 24 hours.
                        </p>
                      </div>

                      <div className="p-4 sm:p-5 rounded-2xl bg-[#050505] border border-indigo-500/35 max-w-md mx-auto text-left space-y-2">
                        <div className="flex items-center justify-between gap-3 text-sm">
                          <span className="text-white/50">Dossier Reference ID</span>
                          <span className="font-mono font-bold text-indigo-400">{referenceId}</span>
                        </div>
                        <div className="flex items-center justify-between gap-3 text-sm">
                          <span className="text-white/50">Lead Partner Assigned</span>
                          <span className="font-semibold text-white text-right">Nairobi Practice Lead</span>
                        </div>
                        <div className="flex items-center justify-between gap-3 text-sm">
                          <span className="text-white/50">Estimated Briefing</span>
                          <span className="text-emerald-400 font-semibold text-right">Within 24 Business Hours</span>
                        </div>
                      </div>

                      <div className="flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-center gap-3 pt-2">
                        <button
                          onClick={handleCopySummary}
                          className="mc-tap px-4 py-2 rounded-xl bg-[#050505] hover:bg-white/5 border border-white/10 text-white text-sm font-semibold transition-colors active:scale-[0.98] inline-flex items-center justify-center gap-1.5"
                        >
                          <Copy className="w-4 h-4" />
                          <span>{copied ? 'Copied to Clipboard!' : 'Copy Summary'}</span>
                        </button>
                        <button
                          onClick={onClose}
                          className="mc-tap px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold transition-colors active:scale-[0.98]"
                        >
                          Return to Portal
                        </button>
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Modal Footer Controls */}
            {step < 5 && (
              <div className="shrink-0 px-4 sm:px-6 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] bg-[#050505] border-t border-white/10 flex items-center justify-between gap-3">
                {step > 1 ? (
                  <button
                    onClick={() => setStep(prev => prev - 1)}
                    className="mc-tap px-4 py-2 rounded-xl bg-[#0a0a0a] hover:bg-white/5 text-white/70 hover:text-white text-sm font-semibold transition-colors active:scale-[0.98] inline-flex items-center gap-1.5 border border-white/10"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back</span>
                  </button>
                ) : (
                  <div />
                )}

                <button
                  onClick={handleNext}
                  id="intake-next-btn"
                  className="mc-tap flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold transition-colors active:scale-[0.98] inline-flex items-center justify-center gap-1.5"
                >
                  <span>{step === 4 ? 'Confirm & Submit Engagement Brief' : 'Continue'}</span>
                  <ArrowRight className="w-4 h-4 shrink-0" />
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
