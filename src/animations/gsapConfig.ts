import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

ScrollTrigger.config({
  ignoreMobileResize: true,
});

export const APPLE_EASE = 'power3.out';
export const APPLE_CINEMATIC_EASE = 'expo.out';

export function prefersReducedMotion(): boolean {
  return (
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
}

/**
 * Computes responsive header clearance for ScrollTrigger `pin` triggers
 * based on the live floating navigation bar bounds.
 */
export function getPinnedStartOffset(): number {
  if (typeof document === 'undefined') {
    return 88;
  }
  const header = document.querySelector<HTMLElement>('header');
  if (!header) {
    return 88;
  }
  const rect = header.getBoundingClientRect();
  return Math.max(76, Math.round(rect.bottom + 14));
}

/**
 * Computes responsive pin scroll travel distance from actual pinned element
 * dimensions and viewport height.
 */
export function computePinScrollDistance(
  element: HTMLElement | null,
  spanRatio = 1.85,
  elementMultiplier = 1.6,
): number {
  if (typeof window === 'undefined') {
    return 1200;
  }
  const vhDistance = Math.round(window.innerHeight * spanRatio);
  const elHeight = element?.offsetHeight ?? 0;
  const elDistance = elHeight > 0 ? Math.round(elHeight * elementMultiplier) : 0;
  return Math.max(vhDistance, elDistance);
}

export { gsap, ScrollTrigger, useGSAP };
