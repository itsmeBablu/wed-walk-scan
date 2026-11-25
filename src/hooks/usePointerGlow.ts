import { useEffect, type RefObject } from 'react';
import { useIsTouchDevice, usePrefersReducedMotion } from '@/hooks/useMediaQuery';

/**
 * Updates `--pointer-x` and `--pointer-y` CSS variables via rAF on fine-pointer
 * desktop hardware so Liquid Glass specular highlights react smoothly to movement.
 */
export function usePointerGlow<T extends HTMLElement>(
  ref: RefObject<T | null>,
  enabled = true,
): void {
  const reducedMotion = usePrefersReducedMotion();
  const isTouch = useIsTouchDevice();

  useEffect(() => {
    const element = ref.current;
    if (!element || !enabled || reducedMotion || isTouch) {
      return;
    }

    let frameId = 0;
    let latestX = 50;
    let latestY = 20;

    const flush = () => {
      frameId = 0;
      element.style.setProperty('--pointer-x', `${latestX.toFixed(1)}%`);
      element.style.setProperty('--pointer-y', `${latestY.toFixed(1)}%`);
    };

    const handleMove = (event: PointerEvent) => {
      if (event.pointerType !== 'mouse') {
        return;
      }
      const rect = element.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) {
        return;
      }
      latestX = Math.max(0, Math.min(100, ((event.clientX - rect.left) / rect.width) * 100));
      latestY = Math.max(0, Math.min(100, ((event.clientY - rect.top) / rect.height) * 100));
      if (!frameId) {
        frameId = window.requestAnimationFrame(flush);
      }
    };

    const handleLeave = () => {
      if (frameId) {
        window.cancelAnimationFrame(frameId);
        frameId = 0;
      }
      element.style.setProperty('--pointer-x', '50%');
      element.style.setProperty('--pointer-y', '18%');
    };

    element.addEventListener('pointermove', handleMove, { passive: true });
    element.addEventListener('pointerleave', handleLeave, { passive: true });

    return () => {
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }
      element.removeEventListener('pointermove', handleMove);
      element.removeEventListener('pointerleave', handleLeave);
    };
  }, [enabled, isTouch, reducedMotion, ref]);
}
