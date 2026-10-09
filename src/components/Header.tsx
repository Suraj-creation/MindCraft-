import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import { AnimatePresence, MotionConfig, motion } from 'motion/react';
import { NavTab, RoleLens } from '../types';
import { BrandLogo } from './ui/BrandLogo';
import { NAV_ITEMS, NavSubItem, sectionOf } from '../data/navigation';
import { scrollToTop } from '../lib/smoothScroll';
import {
  Search,
  CheckCircle2,
  Menu,
  X,
  ChevronDown,
  SlidersHorizontal
} from 'lucide-react';

interface HeaderProps {
  activeTab: NavTab;
  setActiveTab: (tab: NavTab) => void;
  roleLens: RoleLens;
  setRoleLens: (role: RoleLens) => void;
  onOpenIntake: () => void;
  onOpenSearch: () => void;
}

const EASE = [0.16, 1, 0.3, 1] as const;
const MORE_ID = 'more';

const ROLE_LABELS: { [key in RoleLens]: string } = {
  all: 'All Perspectives',
  executive: 'Executive / Board',
  lifesciences: 'Life Sciences Lead',
  technology: 'CIO / Tech Architect',
  commercial: 'Commercial & Sales',
  regulatory: 'Regulatory / PV Lead',
  africa: 'Africa Strategist',
  learning: 'HR & L&D Director',
  investor: 'Private Equity / Investor',
  hospital: 'Hospital / Healthcare Provider'
};

const triggerId = (id: string) => `nav-${id}`;
const panelId = (id: string) => `nav-panel-${id}`;

/** Arrow / Home / End / Escape inside an open panel. Items carry data-menu-item. */
const handlePanelKeys = (e: React.KeyboardEvent<HTMLElement>, onEscape: () => void) => {
  const items = Array.from<HTMLElement>(e.currentTarget.querySelectorAll<HTMLElement>('[data-menu-item]'));
  const i = items.indexOf(document.activeElement as HTMLElement);
  let n: number;
  if (e.key === 'ArrowDown') n = (i + 1) % items.length;
  else if (e.key === 'ArrowUp') n = i <= 0 ? items.length - 1 : i - 1;
  else if (e.key === 'Home') n = 0;
  else if (e.key === 'End') n = items.length - 1;
  else if (e.key === 'Escape') {
    e.preventDefault();
    e.stopPropagation();
    onEscape();
    return;
  } else return;
  e.preventDefault();
  items[n]?.focus();
};

/** Trigger label + caret. Shared by the live bar and the hidden measuring row so widths match. */
const TriggerFace: React.FC<{ label: string; caret: boolean; open?: boolean }> = ({ label, caret, open }) => (
  <>
    <span>{label}</span>
    {caret && (
      <ChevronDown
        aria-hidden="true"
        className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? 'rotate-180 text-indigo-300' : 'text-white/35'}`}
      />
    )}
  </>
);

const TRIGGER_BASE =
  'relative h-16 lg:h-20 px-3 flex items-center gap-1 text-[13px] font-medium whitespace-nowrap transition-colors duration-150';

/** One row inside a desktop panel. */
const PanelItem: React.FC<{ item: NavSubItem; active: boolean; onSelect: () => void }> = ({ item, active, onSelect }) => {
  const Icon = item.icon;
  return (
    <li>
      <button
        type="button"
        data-menu-item
        onClick={onSelect}
        aria-current={active ? 'page' : undefined}
        className={`w-full text-left px-3 py-2.5 rounded-xl flex items-start gap-3 transition-colors duration-150 ${
          active ? 'bg-[#0d0f17] ring-1 ring-inset ring-indigo-500/35' : 'hover:bg-white/[0.05] focus-visible:bg-white/[0.05]'
        }`}
      >
        {Icon && (
          <span className={`mt-0.5 p-1.5 rounded-lg bg-white/5 border border-white/10 shrink-0 ${item.color}`}>
            <Icon className="w-4 h-4" />
          </span>
        )}
        <span className="min-w-0">
          <span className={`block text-sm font-semibold leading-snug ${active ? 'text-indigo-200' : 'text-white'}`}>{item.label}</span>
          <span className="block mt-0.5 text-xs text-white/50 leading-snug">{item.desc}</span>
        </span>
      </button>
    </li>
  );
};

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  roleLens,
  setRoleLens,
  onOpenIntake,
  onOpenSearch
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [lensOpen, setLensOpen] = useState(false);
  const [mobileGroup, setMobileGroup] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(NAV_ITEMS.length);

  const headerRef = useRef<HTMLElement>(null);
  const navWrapRef = useRef<HTMLDivElement>(null);
  const measureRef = useRef<HTMLUListElement>(null);
  const openRef = useRef<string | null>(null);
  const openedByHover = useRef(false);
  const timers = useRef<{ open?: number; close?: number }>({});
  const pendingFocus = useRef<'first' | 'last' | null>(null);

  const activeSection = sectionOf(activeTab);
  const visibleItems = NAV_ITEMS.slice(0, visibleCount);
  const overflowItems = NAV_ITEMS.slice(visibleCount);
  const moreIsActive = overflowItems.some((i) => i.id === activeSection);

  const setMenu = (id: string | null) => {
    openRef.current = id;
    setOpenMenu(id);
  };

  const clearTimers = () => {
    window.clearTimeout(timers.current.open);
    window.clearTimeout(timers.current.close);
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll while the mobile sheet is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  // The sheet opens on the section you are in; growing past the breakpoint closes it
  useEffect(() => {
    if (mobileMenuOpen) setMobileGroup(activeSection);
  }, [mobileMenuOpen]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1280px)');
    const onChange = () => mq.matches && setMobileMenuOpen(false);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  // Escape closes any open menu; outside click closes desktop popovers
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
        setMenu(null);
        setLensOpen(false);
      }
    };
    const onPointer = (e: PointerEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        clearTimers();
        setMenu(null);
        setLensOpen(false);
      }
    };
    window.addEventListener('keydown', onKey);
    window.addEventListener('pointerdown', onPointer);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('pointerdown', onPointer);
      clearTimers();
    };
  }, []);

  // Fit as many top-level items as the bar allows; the rest go under "More"
  useLayoutEffect(() => {
    const wrap = navWrapRef.current;
    const measure = measureRef.current;
    if (!wrap || !measure) return;
    const compute = () => {
      const avail = wrap.clientWidth;
      if (!avail) return;
      const widths = Array.from(measure.children).map((el) => (el as HTMLElement).offsetWidth);
      const moreWidth = widths.pop() ?? 0;
      if (widths.reduce((a, b) => a + b, 0) <= avail) {
        setVisibleCount(widths.length);
        return;
      }
      let used = moreWidth;
      let n = 0;
      while (n < widths.length && used + widths[n] <= avail) used += widths[n++];
      setVisibleCount(n);
    };
    compute();
    const ro = new ResizeObserver(compute);
    ro.observe(wrap);
    document.fonts?.ready.then(compute);
    return () => ro.disconnect();
  }, []);

  // Keep an open panel inside the viewport, and move focus into it when opened from the keyboard
  useLayoutEffect(() => {
    if (!openMenu) return;
    const panel = document.getElementById(panelId(openMenu));
    const shell = panel?.parentElement;
    if (!panel || !shell) return;
    shell.style.transform = '';
    const over = panel.getBoundingClientRect().right - (window.innerWidth - 16);
    if (over > 0) shell.style.transform = `translateX(${-over}px)`;
    if (pendingFocus.current) {
      const items = panel.querySelectorAll<HTMLElement>('[data-menu-item]');
      items[pendingFocus.current === 'first' ? 0 : items.length - 1]?.focus();
      pendingFocus.current = null;
    }
  }, [openMenu]);

  const go = (tab: NavTab) => {
    clearTimers();
    setActiveTab(tab);
    setMenu(null);
    setLensOpen(false);
    setMobileMenuOpen(false);
    scrollToTop();
  };

  /* ---------- hover intent: a short delay to open, a longer grace period to close ---------- */
  const hoverOpen = (id: string) => {
    clearTimers();
    const open = () => {
      openedByHover.current = true;
      setLensOpen(false);
      setMenu(id);
    };
    if (openRef.current) open();
    else timers.current.open = window.setTimeout(open, 80);
  };
  const hoverClose = () => {
    clearTimers();
    timers.current.close = window.setTimeout(() => setMenu(null), 180);
  };

  const toggleMenu = (id: string) => {
    clearTimers();
    setLensOpen(false);
    if (openRef.current === id && openedByHover.current) {
      // Clicking a menu that hover already opened pins it instead of closing it
      openedByHover.current = false;
      return;
    }
    openedByHover.current = false;
    setMenu(openRef.current === id ? null : id);
  };

  const focusSiblingTrigger = (from: HTMLElement, dir: 1 | -1) => {
    const triggers = Array.from<HTMLElement>(navWrapRef.current?.querySelectorAll<HTMLElement>('[data-nav-trigger]') ?? []);
    const i = triggers.indexOf(from);
    triggers[(i + dir + triggers.length) % triggers.length]?.focus();
  };

  const onTriggerKey = (e: React.KeyboardEvent<HTMLButtonElement>, id: string, hasPanel: boolean) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      e.preventDefault();
      focusSiblingTrigger(e.currentTarget, e.key === 'ArrowRight' ? 1 : -1);
    } else if (hasPanel && (e.key === 'ArrowDown' || e.key === 'ArrowUp')) {
      e.preventDefault();
      clearTimers();
      openedByHover.current = false;
      pendingFocus.current = e.key === 'ArrowDown' ? 'first' : 'last';
      if (openRef.current === id) {
        // Already open: the layout effect will not re-run, so focus directly
        const items = document.getElementById(panelId(id))?.querySelectorAll<HTMLElement>('[data-menu-item]');
        items?.[pendingFocus.current === 'first' ? 0 : items.length - 1]?.focus();
        pendingFocus.current = null;
      } else {
        setMenu(id);
      }
    }
  };

  const closeAndReturn = (id: string) => {
    setMenu(null);
    document.getElementById(triggerId(id))?.focus();
  };

  const onWrapperBlur = (e: React.FocusEvent<HTMLLIElement>, id: string) => {
    if (openRef.current === id && !e.currentTarget.contains(e.relatedTarget as Node | null)) setMenu(null);
  };

  /* ---------- desktop panel ---------- */
  const renderPanel = (id: string, alignRight: boolean, content: React.ReactNode, wide = false) => (
    <AnimatePresence>
      {openMenu === id && (
        <div className={`absolute top-full z-50 pt-2 ${alignRight ? 'right-0' : 'left-0'}`}>
          <motion.div
            id={panelId(id)}
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.16, ease: EASE }}
            onKeyDown={(e) => handlePanelKeys(e, () => closeAndReturn(id))}
            className={`${wide ? 'w-[36rem]' : 'w-[23rem]'} rounded-2xl bg-[#0a0a0a] border border-white/10 shadow-[0_24px_48px_-12px_rgba(0,0,0,0.85)] p-1.5`}
          >
            {content}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );

  const activeIndicator = (
    <motion.span
      layoutId="nav-active-indicator"
      aria-hidden="true"
      className="absolute left-3 right-3 -bottom-px h-0.5 rounded-full bg-indigo-400"
      transition={{ duration: 0.25, ease: EASE }}
    />
  );

  return (
    <MotionConfig reducedMotion="user">
      <header
        ref={headerRef}
        id="main-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,border-color] duration-300 border-b backdrop-blur-xl backdrop-saturate-150 ${
          isScrolled || mobileMenuOpen
            ? 'bg-[#050505]/90 border-white/10'
            : 'bg-[#050505]/60 border-white/[0.06]'
        }`}
      >
        <div className="mc-container">
          <div className="flex items-center h-16 lg:h-20 gap-4 xl:gap-8">

            {/* Logo & brand identity */}
            <button
              onClick={() => go('home')}
              className="flex items-center shrink-0 mc-tap rounded-lg transition-transform duration-150 active:scale-[0.98]"
              id="brand-logo-button"
              aria-label="MindCraft Consultancy, home"
            >
              <BrandLogo height={64} sizes="(min-width: 1024px) 87px, 65px" priority className="h-12 lg:h-16" />
            </button>

            {/* Desktop navigation (xl and up). Items that don't fit move into "More". */}
            <div ref={navWrapRef} className="hidden xl:flex flex-1 min-w-0 relative self-stretch">
              {/* Hidden measuring row: same faces as the live triggers, plus the More trigger last */}
              <div className="absolute inset-x-0 top-0 h-0 overflow-hidden" aria-hidden="true">
                <ul ref={measureRef} className="invisible flex w-max">
                  {NAV_ITEMS.map((item) => (
                    <li key={item.id} className={TRIGGER_BASE}>
                      <TriggerFace label={item.label} caret={!!item.dropdown} />
                    </li>
                  ))}
                  <li className={TRIGGER_BASE}>
                    <TriggerFace label="More" caret />
                  </li>
                </ul>
              </div>

              <nav id="desktop-nav" aria-label="Primary" className="min-w-0">
                <ul className="flex items-stretch">
                  {visibleItems.map((item, index) => {
                    const hasPanel = !!item.dropdown;
                    const isActive = activeSection === item.id;
                    const open = openMenu === item.id;
                    return (
                      <li
                        key={item.id}
                        className="relative"
                        onPointerEnter={(e) => e.pointerType === 'mouse' && hasPanel && hoverOpen(item.id)}
                        onPointerLeave={(e) => e.pointerType === 'mouse' && hasPanel && hoverClose()}
                        onBlur={(e) => onWrapperBlur(e, item.id)}
                      >
                        <button
                          type="button"
                          id={triggerId(item.id)}
                          data-nav-trigger
                          aria-expanded={hasPanel ? open : undefined}
                          aria-controls={hasPanel ? panelId(item.id) : undefined}
                          aria-current={!hasPanel && isActive ? 'page' : undefined}
                          onClick={() => (hasPanel ? toggleMenu(item.id) : go(item.id))}
                          onKeyDown={(e) => onTriggerKey(e, item.id, hasPanel)}
                          className={`${TRIGGER_BASE} ${isActive || open ? 'text-white' : 'text-white/65 hover:text-white'}`}
                        >
                          <TriggerFace label={item.label} caret={hasPanel} open={open} />
                          {isActive && activeIndicator}
                        </button>

                        {hasPanel &&
                          renderPanel(
                            item.id,
                            index >= visibleItems.length - 2 && overflowItems.length === 0,
                            <ul className={item.wide ? 'grid grid-cols-2 gap-1' : 'space-y-0.5'}>
                              {item.dropdown!.map((sub) => (
                                <PanelItem key={sub.id + sub.label} item={sub} active={activeTab === sub.id} onSelect={() => go(sub.id)} />
                              ))}
                            </ul>,
                            item.wide
                          )}
                      </li>
                    );
                  })}

                  {overflowItems.length > 0 && (
                    <li
                      className="relative"
                      onPointerEnter={(e) => e.pointerType === 'mouse' && hoverOpen(MORE_ID)}
                      onPointerLeave={(e) => e.pointerType === 'mouse' && hoverClose()}
                      onBlur={(e) => onWrapperBlur(e, MORE_ID)}
                    >
                      <button
                        type="button"
                        id={triggerId(MORE_ID)}
                        data-nav-trigger
                        aria-expanded={openMenu === MORE_ID}
                        aria-controls={panelId(MORE_ID)}
                        onClick={() => toggleMenu(MORE_ID)}
                        onKeyDown={(e) => onTriggerKey(e, MORE_ID, true)}
                        className={`${TRIGGER_BASE} ${moreIsActive || openMenu === MORE_ID ? 'text-white' : 'text-white/65 hover:text-white'}`}
                      >
                        <TriggerFace label="More" caret open={openMenu === MORE_ID} />
                        {moreIsActive && activeIndicator}
                      </button>

                      {renderPanel(
                        MORE_ID,
                        true,
                        <div className="space-y-1">
                          {overflowItems.map((item) =>
                            item.dropdown ? (
                              <div key={item.id}>
                                <div className="px-3 pt-2 pb-1 text-xs font-medium text-white/40">{item.label}</div>
                                <ul className="space-y-0.5">
                                  {item.dropdown.map((sub) => (
                                    <PanelItem key={sub.id + sub.label} item={sub} active={activeTab === sub.id} onSelect={() => go(sub.id)} />
                                  ))}
                                </ul>
                              </div>
                            ) : (
                              <ul key={item.id}>
                                <PanelItem
                                  item={{ id: item.id, label: item.label, short: item.label, desc: item.desc ?? '' }}
                                  active={activeSection === item.id}
                                  onSelect={() => go(item.id)}
                                />
                              </ul>
                            )
                          )}
                        </div>
                      )}
                    </li>
                  )}
                </ul>
              </nav>
            </div>

            {/* Right actions */}
            <div className="flex items-center gap-2 ml-auto shrink-0">
              <button
                onClick={onOpenSearch}
                id="global-search-btn"
                className="mc-tap px-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] text-white/60 hover:text-white border border-white/10 transition-colors flex items-center justify-center gap-2 text-[13px]"
                aria-label="Search the MindCraft platform"
                title="Search (Ctrl/Cmd+K)"
              >
                <Search className="w-4 h-4 text-white/50" />
                <span className="hidden min-[1800px]:inline text-white/55">Search</span>
                <kbd className="hidden min-[1800px]:inline px-1.5 py-0.5 rounded-md bg-white/5 border border-white/10 font-mono text-[11px] text-white/45">⌘K</kbd>
              </button>

              {/* Role lens (desktop) */}
              <div className="relative hidden xl:block" onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setLensOpen(false); }}>
                <button
                  id="role-lens-button"
                  aria-haspopup="listbox"
                  aria-expanded={lensOpen}
                  aria-controls="role-lens-panel"
                  onClick={() => { clearTimers(); setMenu(null); setLensOpen((o) => !o); }}
                  onKeyDown={(e) => {
                    if (e.key === 'ArrowDown') {
                      e.preventDefault();
                      setMenu(null);
                      setLensOpen(true);
                      requestAnimationFrame(() =>
                        document.querySelector<HTMLElement>('#role-lens-panel [aria-selected="true"]')?.focus()
                      );
                    }
                  }}
                  aria-label={`Perspective lens: ${ROLE_LABELS[roleLens]}`}
                  title={`Perspective lens: ${ROLE_LABELS[roleLens]}`}
                  className={`mc-tap px-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border text-[13px] flex items-center justify-center gap-2 transition-colors ${
                    roleLens !== 'all' ? 'border-indigo-500/35' : 'border-white/10'
                  }`}
                >
                  <SlidersHorizontal className="w-3.5 h-3.5 text-indigo-400" />
                  <span className="hidden min-[1800px]:inline text-white/50">Lens</span>
                  <span className="hidden min-[1800px]:inline text-indigo-300 font-semibold max-w-[8.5rem] truncate">{ROLE_LABELS[roleLens]}</span>
                  <ChevronDown className={`hidden min-[1800px]:block w-3 h-3 text-white/40 transition-transform duration-200 ${lensOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {lensOpen && (
                    <motion.div
                      id="role-lens-panel"
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      transition={{ duration: 0.16, ease: EASE }}
                      role="listbox"
                      aria-label="Perspective lens"
                      onKeyDown={(e) =>
                        handlePanelKeys(e, () => {
                          setLensOpen(false);
                          document.getElementById('role-lens-button')?.focus();
                        })
                      }
                      className="absolute right-0 top-full mt-2 w-64 rounded-2xl bg-[#0a0a0a] border border-white/10 shadow-[0_24px_48px_-12px_rgba(0,0,0,0.85)] p-1.5 z-50"
                    >
                      <div className="px-3 pt-2 pb-1.5 text-xs font-medium text-white/40">View the site as</div>
                      {(Object.keys(ROLE_LABELS) as RoleLens[]).map((r) => (
                        <button
                          key={r}
                          role="option"
                          data-menu-item
                          aria-selected={roleLens === r}
                          onClick={() => { setRoleLens(r); setLensOpen(false); }}
                          className={`w-full text-left px-3 h-10 rounded-xl text-[13px] transition-colors flex items-center justify-between ${
                            roleLens === r
                              ? 'bg-[#0d0f17] ring-1 ring-inset ring-indigo-500/35 text-indigo-200 font-semibold'
                              : 'text-white/70 hover:bg-white/[0.05] hover:text-white'
                          }`}
                        >
                          <span>{ROLE_LABELS[r]}</span>
                          {roleLens === r && <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" />}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <button
                onClick={onOpenIntake}
                id="header-start-engagement-btn"
                className="mc-tap hidden sm:flex px-4 rounded-xl whitespace-nowrap bg-indigo-600 hover:bg-indigo-500 active:scale-[0.98] text-white text-[13px] font-semibold transition-[background-color,transform] duration-150 items-center"
              >
                Start a conversation
              </button>

              <button
                onClick={() => setMobileMenuOpen((o) => !o)}
                id="mobile-menu-toggle-btn"
                className="mc-tap xl:hidden rounded-xl bg-[#0a0a0a] border border-white/10 flex items-center justify-center text-white/70 hover:text-white"
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-nav-sheet"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Dim the page behind the sheet; tapping it closes the menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              key="mobile-nav-backdrop"
              aria-hidden="true"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: EASE }}
              onClick={() => setMobileMenuOpen(false)}
              className="xl:hidden fixed inset-x-0 top-16 lg:top-20 bottom-0 bg-black/60"
            />
          )}
        </AnimatePresence>

        {/* Mobile / tablet navigation sheet: one row per section, groups expand in place */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              id="mobile-nav-sheet"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: EASE }}
              className="xl:hidden absolute top-full inset-x-0 bg-[#050505] border-b border-white/10 max-h-[calc(100dvh-4rem)] lg:max-h-[calc(100dvh-5rem)] overflow-y-auto overscroll-contain"
            >
              <nav className="mc-container pt-2 pb-4" aria-label="Mobile">
                <ul className="divide-y divide-white/[0.08]">
                  {NAV_ITEMS.map((item) => {
                    const isActive = activeSection === item.id;
                    if (!item.dropdown) {
                      return (
                        <li key={item.id}>
                          <button
                            type="button"
                            onClick={() => go(item.id)}
                            aria-current={isActive ? 'page' : undefined}
                            className="mc-tap w-full py-3 flex items-center justify-between gap-3 text-left"
                          >
                            <span className={`text-[15px] font-medium ${isActive ? 'text-indigo-300' : 'text-white/90'}`}>{item.label}</span>
                            {isActive && <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" aria-hidden="true" />}
                          </button>
                        </li>
                      );
                    }
                    const expanded = mobileGroup === item.id;
                    const groupPanel = `mobile-group-${item.id}`;
                    return (
                      <li key={item.id}>
                        <button
                          type="button"
                          onClick={() => setMobileGroup(expanded ? null : item.id)}
                          aria-expanded={expanded}
                          aria-controls={groupPanel}
                          className="mc-tap w-full py-3 flex items-center justify-between gap-3 text-left"
                        >
                          <span className="flex items-baseline gap-2 min-w-0">
                            <span className={`text-[15px] font-medium ${isActive ? 'text-indigo-300' : 'text-white/90'}`}>{item.label}</span>
                            {item.badge && <span className="text-xs text-white/40 truncate">{item.badge}</span>}
                          </span>
                          <span className="flex items-center gap-2.5 shrink-0">
                            {isActive && !expanded && <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" aria-hidden="true" />}
                            <ChevronDown className={`w-4 h-4 text-white/40 transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`} />
                          </span>
                        </button>
                        {expanded && (
                          <motion.ul
                            id={groupPanel}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.18, ease: EASE }}
                            className={`pb-3 grid grid-cols-1 gap-1 ${item.dropdown.length > 3 ? 'sm:grid-cols-2' : ''}`}
                          >
                            {item.dropdown.map((sub) => {
                              const Icon = sub.icon;
                              const subActive = activeTab === sub.id;
                              return (
                                <li key={sub.id + sub.label}>
                                  <button
                                    type="button"
                                    onClick={() => go(sub.id)}
                                    aria-current={subActive ? 'page' : undefined}
                                    className={`mc-tap w-full text-left px-3 py-2.5 rounded-xl flex items-start gap-3 transition-colors ${
                                      subActive ? 'bg-[#0d0f17] ring-1 ring-inset ring-indigo-500/35' : 'active:bg-white/5'
                                    }`}
                                  >
                                    {Icon && <Icon className={`w-4 h-4 mt-0.5 shrink-0 ${sub.color}`} />}
                                    <span className="min-w-0">
                                      <span className={`block text-sm font-semibold ${subActive ? 'text-indigo-200' : 'text-white'}`}>{sub.label}</span>
                                      <span className="block text-xs text-white/50 mt-0.5 leading-snug">{sub.desc}</span>
                                    </span>
                                  </button>
                                </li>
                              );
                            })}
                          </motion.ul>
                        )}
                      </li>
                    );
                  })}

                  {/* Perspective lens */}
                  <li>
                    <button
                      type="button"
                      onClick={() => setMobileGroup(mobileGroup === 'lens' ? null : 'lens')}
                      aria-expanded={mobileGroup === 'lens'}
                      aria-controls="mobile-group-lens"
                      className="mc-tap w-full py-3 flex items-center justify-between gap-3 text-left"
                    >
                      <span className="flex items-center gap-2 min-w-0">
                        <SlidersHorizontal className="w-4 h-4 text-indigo-400 shrink-0" />
                        <span className="text-[15px] font-medium text-white/90">Perspective</span>
                        <span className="text-xs text-indigo-300 truncate">{ROLE_LABELS[roleLens]}</span>
                      </span>
                      <ChevronDown className={`w-4 h-4 text-white/40 shrink-0 transition-transform duration-200 ${mobileGroup === 'lens' ? 'rotate-180' : ''}`} />
                    </button>
                    {mobileGroup === 'lens' && (
                      <motion.ul
                        id="mobile-group-lens"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.18, ease: EASE }}
                        className="pb-3 grid grid-cols-1 sm:grid-cols-2 gap-1"
                      >
                        {(Object.keys(ROLE_LABELS) as RoleLens[]).map((r) => (
                          <li key={r}>
                            <button
                              type="button"
                              onClick={() => { setRoleLens(r); setMobileGroup(null); }}
                              aria-pressed={roleLens === r}
                              className={`mc-tap w-full px-3 rounded-xl text-left text-sm flex items-center justify-between ${
                                roleLens === r ? 'bg-[#0d0f17] ring-1 ring-inset ring-indigo-500/35 text-indigo-200' : 'text-white/75 active:bg-white/5'
                              }`}
                            >
                              <span>{ROLE_LABELS[r]}</span>
                              {roleLens === r && <CheckCircle2 className="w-4 h-4 text-indigo-400" />}
                            </button>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </li>
                </ul>
              </nav>

              {/* Primary action stays in reach on phones (the bar shows it from sm up) */}
              <div className="sm:hidden sticky bottom-0 bg-[#050505]/95 backdrop-blur border-t border-white/10 pb-[env(safe-area-inset-bottom)]">
                <div className="mc-container py-1.5">
                  <button
                    onClick={() => { onOpenIntake(); setMobileMenuOpen(false); }}
                    className="w-full mc-tap rounded-xl bg-indigo-600 active:scale-[0.98] text-white font-medium text-sm flex items-center justify-center gap-2 transition-transform duration-150"
                  >
                    Start a conversation
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </MotionConfig>
  );
};
