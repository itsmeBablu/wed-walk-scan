import { useRef, type ReactNode } from 'react';
import { APPLE_EASE, gsap, prefersReducedMotion, useGSAP } from '@/animations/gsapConfig';
import { cn } from '@/utils/cn';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  duration?: number;
  staggerSelector?: string;
  stagger?: number;
}

export function ScrollReveal({
  children,
  className,
  delay = 0,
  y = 26,
  duration = 0.75,
  staggerSelector,
  stagger = 0.08,
}: ScrollRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const container = containerRef.current;
      if (!container || prefersReducedMotion()) {
        return;
      }

      const targets = staggerSelector
        ? Array.from(container.querySelectorAll<HTMLElement>(staggerSelector))
        : [container];

      if (targets.length === 0) {
        return;
      }

      gsap.from(targets, {
        y,
        opacity: 0,
        duration,
        delay,
        stagger: staggerSelector ? stagger : 0,
        ease: APPLE_EASE,
        clearProps: 'transform,opacity',
        scrollTrigger: {
          trigger: container,
          start: 'top 86%',
          once: true,
        },
      });
    },
    { scope: containerRef, dependencies: [delay, duration, stagger, staggerSelector, y] },
  );

  return (
    <div ref={containerRef} className={cn(className)}>
      {children}
    </div>
  );
}
