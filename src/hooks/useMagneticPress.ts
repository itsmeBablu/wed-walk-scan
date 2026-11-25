import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import type { RefObject } from 'react';
import { useIsTouchDevice, usePrefersReducedMotion } from '@/hooks/useMediaQuery';

/**
 * Adds subtle Apple-like magnetic cursor pull and spring press feedback
 * without aggressive bounce or touch/reduced-motion interference.
 */
export function useMagneticPress<T extends HTMLElement>(
  ref: RefObject<T | null>,
  strength = 4,
): void {
  const reducedMotion = usePrefersReducedMotion();
  const isTouch = useIsTouchDevice();

  useGSAP(
    () => {
      const el = ref.current;
      if (!el || reducedMotion || isTouch) {
        return;
      }

      const xTo = gsap.quickTo(el, 'x', { duration: 0.35, ease: 'power3.out' });
      const yTo = gsap.quickTo(el, 'y', { duration: 0.35, ease: 'power3.out' });

      const onMove = (e: PointerEvent) => {
        if (e.pointerType !== 'mouse') {
          return;
        }
        const rect = el.getBoundingClientRect();
        if (!rect.width || !rect.height) {
          return;
        }
        const relX = (e.clientX - rect.left) / rect.width - 0.5;
        const relY = (e.clientY - rect.top) / rect.height - 0.5;
        xTo(relX * strength * 2);
        yTo(relY * strength * 2);
      };

      const onLeave = () => {
        xTo(0);
        yTo(0);
        gsap.to(el, { scale: 1, duration: 0.3, ease: 'power3.out' });
      };

      const onDown = () => {
        gsap.to(el, { scale: 0.965, duration: 0.14, ease: 'power2.out' });
      };

      const onUp = () => {
        gsap.to(el, { scale: 1, duration: 0.32, ease: 'back.out(1.6)' });
      };

      el.addEventListener('pointermove', onMove, { passive: true });
      el.addEventListener('pointerleave', onLeave, { passive: true });
      el.addEventListener('pointerdown', onDown, { passive: true });
      el.addEventListener('pointerup', onUp, { passive: true });

      return () => {
        el.removeEventListener('pointermove', onMove);
        el.removeEventListener('pointerleave', onLeave);
        el.removeEventListener('pointerdown', onDown);
        el.removeEventListener('pointerup', onUp);
      };
    },
    { scope: ref, dependencies: [isTouch, reducedMotion, strength] },
  );
}
