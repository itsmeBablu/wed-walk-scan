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

export { gsap, ScrollTrigger, useGSAP };
