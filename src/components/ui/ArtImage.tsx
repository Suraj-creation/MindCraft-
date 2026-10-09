import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { EASE } from './primitives';

/**
 * The site's art-directed imagery, one registry for every page.
 *
 * Sources are the generated brand illustrations supplied in src/assets (PNG, ~2 MB each). The files used here are
 * Lanczos-resized WebP copies (quality 80): `overview/<name>-<width>.webp` and `pages/<name>-<width>.webp`.
 * All of them are conceptual illustrations, not photographs of MindCraft people, clients or premises.
 * The one exception is `dayanand-portrait.webp`, the real photograph from his own consultant profile.
 */
const files = {
  ...(import.meta.glob('../../assets/overview/*.webp', { eager: true, import: 'default' }) as Record<string, string>),
  ...(import.meta.glob('../../assets/pages/*.webp', { eager: true, import: 'default' }) as Record<string, string>)
};

/** Intrinsic size of each original, so the browser can reserve space and pick a width. */
const META = {
  // Overview
  global: { w: 1672, h: 941 },
  office: { w: 1672, h: 941 },
  corridor: { w: 1672, h: 941 },
  strategy: { w: 1672, h: 941 },
  // Inner pages
  'consulting-boardroom': { w: 1672, h: 941 },
  'research-mapping': { w: 1672, h: 941 },
  'training-workshop': { w: 1672, h: 941 },
  'solutions-operations': { w: 1672, h: 941 },
  'lifesciences-lab': { w: 1672, h: 941 },
  'industries-panorama': { w: 2048, h: 768 },
  'africa-network': { w: 1983, h: 793 },
  'localization-market': { w: 2048, h: 768 },
  'market-entry-port': { w: 1983, h: 793 },
  'model-strategy-hub': { w: 2048, h: 768 },
  'about-skyline': { w: 1983, h: 793 }
} as const;

export type ArtName = keyof typeof META;

/** Every width generated for an image, smallest first, as [width, url]. */
const variants = (name: string): [number, string][] =>
  Object.entries(files)
    .map(([path, url]) => {
      const m = path.match(/\/([a-z0-9-]+)-(\d+)\.webp$/);
      return m && m[1] === name ? ([Number(m[2]), url] as [number, string]) : null;
    })
    .filter((v): v is [number, string] => v !== null)
    .sort((a, b) => a[0] - b[0]);

const ART = Object.fromEntries(
  (Object.keys(META) as ArtName[]).map((name) => {
    const v = variants(name);
    const mid = v.find(([w]) => w >= 1024) ?? v[v.length - 1];
    return [name, { srcSet: v.map(([w, url]) => `${url} ${w}w`).join(', '), src: mid?.[1] ?? '' }];
  })
) as Record<ArtName, { srcSet: string; src: string }>;

/** Aspect ratio of an original, for containers that should show the whole image. */
export const artRatio = (name: ArtName) => `${META[name].w} / ${META[name].h}`;

/**
 * A responsive, art-directed image that fills its (positioned) parent.
 * The parent sets the crop through its own size; `position` picks the focal point.
 * Enters once with a slow settle (opacity + a 4% scale-down); still for reduced motion.
 */
export const ArtImage: React.FC<{
  name: ArtName;
  /** Empty string when the image is decorative and the meaning is carried by nearby text. */
  alt: string;
  sizes: string;
  /** CSS object-position classes, e.g. "object-[56%_45%] lg:object-[46%_50%]". */
  position?: string;
  /** Above-the-fold images load eagerly with high priority and animate on mount. */
  priority?: boolean;
  /** Skip the entrance (for images that are part of a larger, already-animated composition). */
  still?: boolean;
  className?: string;
}> = ({ name, alt, sizes, position = 'object-center', priority = false, still = false, className = '' }) => {
  const reduce = useReducedMotion();
  const art = ART[name];
  const { w, h } = META[name];
  const settled = { opacity: 1, scale: 1 };
  const motionProps =
    reduce || still
      ? {}
      : priority
        ? { initial: { opacity: 0, scale: 1.04 }, animate: settled }
        : { initial: { opacity: 0, scale: 1.04 }, whileInView: settled, viewport: { once: true, margin: '0px 0px -15% 0px' } };

  return (
    // Attribute order matters: React applies props in order, and the browser starts fetching as soon as
    // src is set, so loading, sizes and srcSet must come first or lazy loading and width selection are ignored.
    <motion.img
      loading={priority ? 'eager' : 'lazy'}
      decoding={priority ? 'sync' : 'async'}
      fetchPriority={priority ? 'high' : 'auto'}
      width={w}
      height={h}
      sizes={sizes}
      srcSet={art.srcSet}
      src={art.src}
      alt={alt}
      draggable={false}
      {...motionProps}
      transition={{ duration: priority ? 1.4 : 1.1, ease: EASE }}
      className={`absolute inset-0 h-full w-full object-cover select-none ${position} ${className}`}
    />
  );
};
