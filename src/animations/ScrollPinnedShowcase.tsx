import { useEffect, useRef, type ReactNode } from 'react';
import {
  computePinScrollDistance,
  getPinnedStartOffset,
  gsap,
  ScrollTrigger,
  useGSAP,
} from '@/animations/gsapConfig';
import { cn } from '@/utils/cn';

interface ScrollPinnedShowcaseProps {
  children: ReactNode;
  className?: string;
  /** Total scroll travel in vh units on desktop when pinned */
  scrollSpanVh?: number;
  /** Optional callback receiving normalized scroll progress [0..1] */
  onProgress?: (progress: number) => void;
  /** Optional selector for a pinned inner panel; defaults to the root element */
  pinSelector?: string;
}

/**
 * Reusable GSAP ScrollTrigger pinning wrapper.
 * Automatically activates pinning only on fine-pointer desktop viewports when
 * `prefers-reduced-motion` is off; mobile and reduced-motion keep normal scroll.
 */
export function ScrollPinnedShowcase({
  children,
  className,
  scrollSpanVh = 220,
  onProgress,
  pinSelector,
}: ScrollPinnedShowcaseProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef(onProgress);

  useEffect(() => {
    progressRef.current = onProgress;
  }, [onProgress]);

  useGSAP(
    () => {
      const root = rootRef.current;
      if (!root) {
        return;
      }

      const mm = gsap.matchMedia();
      mm.add(
        '(min-width: 1024px) and (min-height: 700px) and (prefers-reduced-motion: no-preference)',
        () => {
          const pinTarget = pinSelector
            ? (root.querySelector<HTMLElement>(pinSelector) ?? root)
            : root;

          const trigger = ScrollTrigger.create({
            trigger: root,
            pin: pinTarget,
            start: () => `top ${getPinnedStartOffset()}px`,
            end: () => `+=${computePinScrollDistance(pinTarget, scrollSpanVh / 100)}`,
            scrub: 0.4,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              progressRef.current?.(self.progress);
            },
          });

          return () => {
            trigger.kill();
          };
        },
      );

      return () => mm.revert();
    },
    { scope: rootRef, dependencies: [pinSelector, scrollSpanVh] },
  );

  return (
    <div ref={rootRef} className={cn('relative', className)}>
      {children}
    </div>
  );
}
