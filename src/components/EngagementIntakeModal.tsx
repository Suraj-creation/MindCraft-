import React, { useState, useEffect, useRef, useId } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { EngagementBlueprint } from '../types';
import { UNIVERSAL_INDUSTRIES } from '../data/industryAndAfricaData';
import {
  X,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Copy,
  Mail
} from 'lucide-react';

interface EngagementIntakeModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialBlueprint?: EngagementBlueprint | null;
}

const EASE = [0.16, 1, 0.3, 1] as const;

/** The enquiry address published in the corporate profile (s.10). */
const CONTACT_EMAIL = 'info@mindcraftconsultancy.com';

const FIELD_CLASS =
  'w-full min-h-11 px-3 py-2.5 rounded-xl bg-[#050505] border border-white/10 text-base sm:text-sm text-white placeholder-white/35 focus:outline-none focus:border-indigo-500 aria-[invalid=true]:border-amber-400/70';
const LABEL_CLASS = 'block text-[13px] font-medium text-white/80';
const OPTIONAL = <span className="font-normal text-white/50"> (optional)</span>;

const FOCUSABLE =
  'a[href],button:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])';

/** Option values match the Engagement Builder's blueprint values so a blueprint pre-fills cleanly. */
const NEEDS: { value: string; label: string }[] = [
  { value: 'Not sure yet', label: 'Not sure yet: help me work it out' },
  { value: 'Integrated Multi-Pillar (Strategy + Research + AI)', label: 'A combination of capabilities' },
  { value: 'Business Consulting & Strategic Advisory', label: 'Business Consulting' },
  { value: 'Market Research & Commercial Evidence', label: 'Market Research & Intelligence' },
  { value: 'AI Training & Organizational Capability', label: 'AI Training & Digital Literacy' },
  { value: 'AI Enterprise Solutions & Engineering', label: 'AI Enterprise Solutions' }
];

const TIMELINES = ['Within the next month', 'Within 3 months', 'Within 6 months', 'Exploring options for now'];

const OTHER_SECTOR = 'Other / not listed';

const Heading: React.FC<{ title: string; hint: string }> = ({ title, hint }) => (
  <div>
    <h3 className="text-xl font-medium text-white leading-snug">{title}</h3>
    <p className="text-sm text-white/60 mt-1">{hint}</p>
  </div>
);

const FieldError: React.FC<{ id: string; message: string }> = ({ id, message }) =>
  message ? (
    <p id={id} className="text-[13px] text-amber-300">
      {message}
    </p>
  ) : null;

const STEP_TITLES = ['About you', 'What you need', 'Your challenge', 'Review and send'];

export const EngagementIntakeModal: React.FC<EngagementIntakeModalProps> = ({
  isOpen,
  onClose,
  initialBlueprint
}) => {
  const [step, setStep] = useState<number>(1);
  const [copied, setCopied] = useState<boolean>(false);
  const [showErrors, setShowErrors] = useState<boolean>(false);

  // Form State
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [organization, setOrganization] = useState<string>('');
  const [roleTitle, setRoleTitle] = useState<string>('');
  const [targetMarkets, setTargetMarkets] = useState<string>('');

  const [sector, setSector] = useState<string>(initialBlueprint?.industry || '');
  const [pillarNeed, setPillarNeed] = useState<string>(initialBlueprint?.need || NEEDS[0].value);
  const [challengeDescription, setChallengeDescription] = useState<string>('');
  const [timelineUrgency, setTimelineUrgency] = useState<string>(TIMELINES[1]);

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
      if (initialBlueprint.geography) setTargetMarkets(initialBlueprint.geography);
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

  const fid = (name: string) => `${uid}-${name}`;

  // Step 1 is the only step with required fields
  const errors = {
    name: fullName.trim() ? '' : 'Please enter your name.',
    email: !email.trim()
      ? 'Please enter your email address.'
      : /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
        ? ''
        : 'Please enter a valid email address, like name@company.com.',
    org: organization.trim() ? '' : 'Please enter your organisation.'
  };
  const stepOneValid = !errors.name && !errors.email && !errors.org;
  const errorFor = (key: keyof typeof errors) => (showErrors ? errors[key] : '');

  const needLabel = NEEDS.find((n) => n.value === pillarNeed)?.label ?? pillarNeed;

  const summary = (ref = referenceId) =>
    [
      `Reference: ${ref}`,
      `Name: ${fullName.trim()}${roleTitle.trim() ? `, ${roleTitle.trim()}` : ''}`,
      `Email: ${email.trim()}`,
      `Organisation: ${organization.trim()}`,
      `Industry: ${sector || 'Not specified'}`,
      `Support needed: ${needLabel}`,
      `Markets in scope: ${targetMarkets.trim() || 'Not specified'}`,
      `Timing: ${timelineUrgency}`,
      '',
      'Challenge:',
      challengeDescription.trim() || 'Not specified'
    ].join('\n');

  const mailtoHref = (ref = referenceId) => {
    const subject = `Enquiry from ${organization.trim() || fullName.trim()} [${ref}]`;
    // Keep the URL inside the length most mail clients accept
    const body = summary(ref).slice(0, 1800);
    return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleNext = () => {
    if (step === 1 && !stepOneValid) {
      setShowErrors(true);
      const firstInvalid = errors.name ? 'name' : errors.email ? 'email' : 'org';
      document.getElementById(fid(firstInvalid))?.focus();
      return;
    }
    if (step === 4) {
      const ref = referenceId || `MC-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
      setReferenceId(ref);
      setStep(5);
      // Hand the brief to the visitor's email app inside the click, so browsers treat it as user-initiated
      window.location.href = mailtoHref(ref);
      return;
    }
    setStep((prev) => prev + 1);
  };

  // A finished enquiry starts fresh next time; details typed so far are kept
  useEffect(() => {
    if (isOpen && step === 5) {
      setStep(1);
      setReferenceId('');
      setShowErrors(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  const handleCopySummary = async () => {
    try {
      await navigator.clipboard.writeText(`To: ${CONTACT_EMAIL}\n\n${summary()}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  const sectorOptions = UNIVERSAL_INDUSTRIES.map((i) => i.name);
  const lifeSciences = UNIVERSAL_INDUSTRIES.filter((i) => i.category === 'core-lifesciences').map((i) => i.name);
  const otherIndustries = UNIVERSAL_INDUSTRIES.filter((i) => i.category !== 'core-lifesciences').map((i) => i.name);
  const extraSector = sector && !sectorOptions.includes(sector) && sector !== OTHER_SECTOR ? sector : null;
  const extraNeed = !NEEDS.some((n) => n.value === pillarNeed) ? pillarNeed : null;


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
            className="relative w-full sm:max-w-2xl max-h-[90dvh] flex flex-col rounded-t-2xl sm:rounded-2xl bg-[#0a0a0a] border border-white/10 shadow-2xl overflow-hidden outline-none"
          >
            {/* Modal Top Bar */}
            <div className="shrink-0 pl-4 sm:pl-6 pr-1.5 bg-[#050505] border-b border-white/10 flex items-center justify-between">
              <h2 id={fid('title')} className="py-3 text-sm font-semibold text-white">
                Start a conversation with MindCraft
              </h2>

              <button
                onClick={onClose}
                aria-label="Close"
                className="mc-tap flex items-center justify-center rounded-lg text-white/60 hover:text-white hover:bg-white/5 transition-colors active:scale-[0.96]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Step Progress Tracker */}
            {step < 5 && (
              <div className="shrink-0 px-4 sm:px-6 pt-3 pb-3 border-b border-white/10 bg-[#050505]">
                <div className="flex items-center justify-between gap-3 text-xs text-white/60 mb-2 tabular-nums">
                  <span className="shrink-0">Step {step} of 4</span>
                  <span className="text-right truncate">{STEP_TITLES[step - 1]}</span>
                </div>
                <div
                  className="w-full h-1 bg-white/10 rounded-full overflow-hidden"
                  role="progressbar"
                  aria-valuemin={1}
                  aria-valuemax={4}
                  aria-valuenow={step}
                  aria-label="Enquiry progress"
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
                  {/* STEP 1: About you */}
                  {step === 1 && (
                    <div className="space-y-4">
                      <Heading title="About you" hint="So the right person at MindCraft can reply to you." />

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                        <div className="space-y-1.5">
                          <label htmlFor={fid('name')} className={LABEL_CLASS}>Your name</label>
                          <input
                            id={fid('name')}
                            type="text"
                            required
                            autoComplete="name"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            aria-invalid={Boolean(errorFor('name'))}
                            aria-describedby={errorFor('name') ? fid('name-err') : undefined}
                            className={FIELD_CLASS}
                          />
                          <FieldError id={fid('name-err')} message={errorFor('name')} />
                        </div>

                        <div className="space-y-1.5">
                          <label htmlFor={fid('email')} className={LABEL_CLASS}>Work email</label>
                          <input
                            id={fid('email')}
                            type="email"
                            inputMode="email"
                            required
                            autoComplete="email"
                            placeholder="name@company.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            aria-invalid={Boolean(errorFor('email'))}
                            aria-describedby={errorFor('email') ? fid('email-err') : undefined}
                            className={FIELD_CLASS}
                          />
                          <FieldError id={fid('email-err')} message={errorFor('email')} />
                        </div>

                        <div className="space-y-1.5">
                          <label htmlFor={fid('org')} className={LABEL_CLASS}>Organisation</label>
                          <input
                            id={fid('org')}
                            type="text"
                            required
                            autoComplete="organization"
                            value={organization}
                            onChange={(e) => setOrganization(e.target.value)}
                            aria-invalid={Boolean(errorFor('org'))}
                            aria-describedby={errorFor('org') ? fid('org-err') : undefined}
                            className={FIELD_CLASS}
                          />
                          <FieldError id={fid('org-err')} message={errorFor('org')} />
                        </div>

                        <div className="space-y-1.5">
                          <label htmlFor={fid('role')} className={LABEL_CLASS}>Your role{OPTIONAL}</label>
                          <input
                            id={fid('role')}
                            type="text"
                            autoComplete="organization-title"
                            value={roleTitle}
                            onChange={(e) => setRoleTitle(e.target.value)}
                            className={FIELD_CLASS}
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* STEP 2: What you need */}
                  {step === 2 && (
                    <div className="space-y-4">
                      <Heading title="What you need" hint="A rough idea is fine. We can work out the details together." />

                      <div className="space-y-4 pt-1">
                        <div className="space-y-1.5">
                          <label htmlFor={fid('sector')} className={LABEL_CLASS}>Industry{OPTIONAL}</label>
                          <select
                            id={fid('sector')}
                            value={sector}
                            onChange={(e) => setSector(e.target.value)}
                            className={FIELD_CLASS}
                          >
                            <option value="">Select your industry</option>
                            {extraSector && <option value={extraSector}>{extraSector}</option>}
                            <optgroup label="Life Sciences and healthcare">
                              {lifeSciences.map((n) => <option key={n} value={n}>{n}</option>)}
                            </optgroup>
                            <optgroup label="Other industries">
                              {otherIndustries.map((n) => <option key={n} value={n}>{n}</option>)}
                            </optgroup>
                            <option value={OTHER_SECTOR}>{OTHER_SECTOR}</option>
                          </select>
                        </div>

                        <div className="space-y-1.5">
                          <label htmlFor={fid('need')} className={LABEL_CLASS}>Support you are looking for</label>
                          <select
                            id={fid('need')}
                            value={pillarNeed}
                            onChange={(e) => setPillarNeed(e.target.value)}
                            className={FIELD_CLASS}
                          >
                            {extraNeed && <option value={extraNeed}>{extraNeed}</option>}
                            {NEEDS.map((n) => <option key={n.value} value={n.value}>{n.label}</option>)}
                          </select>
                        </div>

                        <div className="space-y-1.5">
                          <label htmlFor={fid('markets')} className={LABEL_CLASS}>Markets or countries in scope{OPTIONAL}</label>
                          <input
                            id={fid('markets')}
                            type="text"
                            placeholder="For example: Kenya and Nigeria, or Europe"
                            value={targetMarkets}
                            onChange={(e) => setTargetMarkets(e.target.value)}
                            className={FIELD_CLASS}
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* STEP 3: Your challenge */}
                  {step === 3 && (
                    <div className="space-y-4">
                      <Heading title="Your challenge" hint="A few sentences on the situation and what you would like to achieve." />

                      <div className="space-y-4 pt-1">
                        <div className="space-y-1.5">
                          <label htmlFor={fid('challenge')} className={LABEL_CLASS}>What would you like to discuss?{OPTIONAL}</label>
                          <textarea
                            id={fid('challenge')}
                            rows={5}
                            placeholder="For example: we plan to launch in two new East African markets next year and need to understand demand, regulation and the right distribution partners."
                            value={challengeDescription}
                            onChange={(e) => setChallengeDescription(e.target.value)}
                            className={`${FIELD_CLASS} resize-y`}
                          />
                        </div>

                        <div className="space-y-1.5 sm:max-w-xs">
                          <label htmlFor={fid('timeline')} className={LABEL_CLASS}>When would you like to start?</label>
                          <select
                            id={fid('timeline')}
                            value={timelineUrgency}
                            onChange={(e) => setTimelineUrgency(e.target.value)}
                            className={FIELD_CLASS}
                          >
                            {TIMELINES.map((t) => <option key={t} value={t}>{t}</option>)}
                          </select>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* STEP 4: Review */}
                  {step === 4 && (
                    <div className="space-y-4">
                      <Heading
                        title="Review and send"
                        hint={`Sending opens your email app with this summary addressed to ${CONTACT_EMAIL}.`}
                      />

                      <dl className="p-4 sm:p-5 rounded-2xl bg-[#050505] border border-white/10 space-y-3">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                          <div>
                            <dt className="text-white/50 text-xs font-medium">Organisation</dt>
                            <dd className="font-semibold text-white break-words">{organization}</dd>
                          </div>
                          <div>
                            <dt className="text-white/50 text-xs font-medium">Contact</dt>
                            <dd className="font-semibold text-white break-words">
                              {fullName}{roleTitle ? `, ${roleTitle}` : ''}
                            </dd>
                          </div>
                          <div>
                            <dt className="text-white/50 text-xs font-medium">Industry</dt>
                            <dd className="font-semibold text-white">{sector || 'Not specified'}</dd>
                          </div>
                          <div>
                            <dt className="text-white/50 text-xs font-medium">Markets in scope</dt>
                            <dd className="font-semibold text-white break-words">{targetMarkets || 'Not specified'}</dd>
                          </div>
                        </div>

                        <div className="pt-3 border-t border-white/[0.08] grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                          <div>
                            <dt className="text-white/50 text-xs font-medium">Support needed</dt>
                            <dd className="font-semibold text-white">{needLabel}</dd>
                          </div>
                          <div>
                            <dt className="text-white/50 text-xs font-medium">Timing</dt>
                            <dd className="font-semibold text-white">{timelineUrgency}</dd>
                          </div>
                        </div>

                        <div className="text-sm">
                          <dt className="text-white/50 text-xs font-medium">Challenge</dt>
                          <dd className="text-white/75 break-words whitespace-pre-line">{challengeDescription || 'Not specified'}</dd>
                        </div>
                      </dl>

                      <p className="text-[13px] text-white/50 leading-relaxed">
                        Nothing is sent until you press send in your email app.
                      </p>
                    </div>
                  )}

                  {/* STEP 5: Hand-off to email */}
                  {step === 5 && (
                    <div className="text-center py-4 space-y-5" role="status" aria-live="polite">
                      <div className="w-14 h-14 rounded-2xl bg-[#0d0f17] border border-indigo-500/35 flex items-center justify-center mx-auto">
                        <CheckCircle2 aria-hidden="true" className="w-7 h-7 text-emerald-400" />
                      </div>

                      <div>
                        <h3 className="text-2xl font-medium text-white">Your email is ready to send</h3>
                        <p className="text-sm text-white/70 mt-2 max-w-md mx-auto leading-relaxed">
                          Thank you, {fullName.trim().split(' ')[0]}. Your email app should now show your summary addressed to{' '}
                          <span className="text-white">{CONTACT_EMAIL}</span>. Press send there and the MindCraft team will reply to you.
                        </p>
                        <p className="text-[13px] text-white/50 mt-3 max-w-md mx-auto leading-relaxed">
                          If no email app opened, copy the summary and send it to {CONTACT_EMAIL} from any email account.
                        </p>
                      </div>

                      <div className="flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-center gap-3 pt-2">
                        <button
                          type="button"
                          onClick={handleCopySummary}
                          className="mc-tap px-4 py-2 rounded-xl bg-[#050505] hover:bg-white/5 border border-white/10 text-white text-sm font-semibold transition-colors active:scale-[0.98] inline-flex items-center justify-center gap-1.5"
                        >
                          <Copy aria-hidden="true" className="w-4 h-4" />
                          <span>{copied ? 'Summary copied' : 'Copy summary'}</span>
                        </button>
                        <a
                          href={mailtoHref()}
                          className="mc-tap px-4 py-2 rounded-xl bg-[#050505] hover:bg-white/5 border border-white/10 text-white text-sm font-semibold transition-colors active:scale-[0.98] inline-flex items-center justify-center gap-1.5"
                        >
                          <Mail aria-hidden="true" className="w-4 h-4" />
                          <span>Open email again</span>
                        </a>
                        <button
                          type="button"
                          onClick={onClose}
                          className="mc-tap px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold transition-colors active:scale-[0.98]"
                        >
                          Done
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
                    type="button"
                    onClick={() => setStep(prev => prev - 1)}
                    className="mc-tap px-4 py-2 rounded-xl bg-[#0a0a0a] hover:bg-white/5 text-white/70 hover:text-white text-sm font-semibold transition-colors active:scale-[0.98] inline-flex items-center gap-1.5 border border-white/10"
                  >
                    <ArrowLeft aria-hidden="true" className="w-4 h-4" />
                    <span>Back</span>
                  </button>
                ) : (
                  <div />
                )}

                <button
                  type="button"
                  onClick={handleNext}
                  id="intake-next-btn"
                  className="mc-tap flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold transition-colors active:scale-[0.98] inline-flex items-center justify-center gap-1.5"
                >
                  <span>{step === 4 ? 'Send by email' : 'Continue'}</span>
                  {step === 4 ? <Mail aria-hidden="true" className="w-4 h-4 shrink-0" /> : <ArrowRight aria-hidden="true" className="w-4 h-4 shrink-0" />}
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
