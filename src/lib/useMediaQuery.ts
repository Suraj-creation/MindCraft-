import { useCallback, useSyncExternalStore } from 'react';

/**
 * A media query as React state. Prerendered HTML and the first (hydrating) render both use `false`,
 * so the server and client markup match; the real value applies immediately after hydration.
 */
export function useMediaQuery(query: string): boolean {
  const subscribe = useCallback(
    (onChange: () => void) => {
      const mq = window.matchMedia(query);
      mq.addEventListener('change', onChange);
      return () => mq.removeEventListener('change', onChange);
    },
    [query]
  );
  return useSyncExternalStore(subscribe, () => window.matchMedia(query).matches, () => false);
}
