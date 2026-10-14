import React from 'react';
import logo120 from '../../assets/brand/mindcraft-logo-120.png';
import logo240 from '../../assets/brand/mindcraft-logo-240.png';
import logo360 from '../../assets/brand/mindcraft-logo-360.png';
import logo480 from '../../assets/brand/mindcraft-logo-480.png';
import logo720 from '../../assets/brand/mindcraft-logo-720.png';

/**
 * The MindCraft Consultancy lockup exactly as supplied in src/assets/logo.png
 * (mark, MINDCRAFT wordmark, CONSULTANCY line). The artwork is never redrawn or
 * rearranged: the files in assets/brand are the original trimmed to its own edges
 * and scaled with a Lanczos filter, so every screen density gets a sharp copy.
 */
const RATIO = 1322 / 977;
const SRCSET = `${logo120} 120w, ${logo240} 240w, ${logo360} 360w, ${logo480} 480w, ${logo720} 720w`;

export const BrandLogo: React.FC<{
  /** Rendered height in CSS px at the largest breakpoint; width follows the logo's own proportions. */
  height: number;
  /** `sizes` for srcset when the height changes by breakpoint. Defaults to the width at `height`. */
  sizes?: string;
  className?: string;
  priority?: boolean;
}> = ({ height, sizes, className = '', priority = false }) => {
  const width = Math.round(height * RATIO);
  return (
    <img
      src={logo240}
      srcSet={SRCSET}
      sizes={sizes ?? `${width}px`}
      width={width}
      height={height}
      alt="MindCraft Consultancy"
      decoding="async"
      loading={priority ? 'eager' : 'lazy'}
      draggable={false}
      className={`block w-auto select-none ${className}`}
    />
  );
};
