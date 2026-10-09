import Lenis from 'lenis';

/**
 * Smooth wheel scrolling for the whole page.
 * - Touch keeps native momentum scrolling (Lenis only smooths wheel input by default).
 * - Off entirely for visitors who prefer reduced motion.
 * - Pauses whenever something locks the body (menus, modals, bottom sheets set
 *   `document.body.style.overflow = 'hidden'`), so the page never scrolls behind an overlay.
 */
let lenis: Lenis | null = null;
let observer: MutationObserver | null = null;

export function startSmoothScroll(): () => void {
  if (lenis || typeof window === 'undefined') return () => {};
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return () => {};

  lenis = new Lenis({
    autoRaf: true,
    lerp: 0.12,
    smoothWheel: true,
    allowNestedScroll: true,
    prevent: (node) => node.hasAttribute?.('data-lenis-prevent') ?? false
  });

  const syncLock = () => {
    if (!lenis) return;
    if (document.body.style.overflow === 'hidden') lenis.stop();
    else lenis.start();
  };
  observer = new MutationObserver(syncLock);
  observer.observe(document.body, { attributes: true, attributeFilter: ['style'] });

  return () => {
    observer?.disconnect();
    observer = null;
    lenis?.destroy();
    lenis = null;
  };
}

/** Glide back to the top (back-to-top button). */
export function glideToTop() {
  if (lenis) lenis.scrollTo(0, { duration: 1.1 });
  else window.scrollTo({ top: 0, behavior: 'smooth' });
}

/** Jump to the top for a new page, cancelling any glide still running from the old one. */
export function scrollToTop() {
  if (lenis) lenis.scrollTo(0, { immediate: true, force: true });
  else window.scrollTo({ top: 0 });
}
