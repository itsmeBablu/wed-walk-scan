import { useRef, type ReactNode } from 'react';
import { gsap, useGSAP } from '@/animations/gsapConfig';
import { cn } from '@/utils/cn';

interface ParallaxImageProps {
  children: ReactNode;
  yOffset?: number;
  className?: string;
}

/**
 * Adds subtle GSAP ScrollTrigger vertical parallax on fine-pointer desktop screens.
 * Automatically disables parallax on touch devices and reduced-motion setups.
 */
export function ParallaxImage({ children, yOffset = 24, className }: ParallaxImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const container = containerRef.current;
      const inner = innerRef.current;
      if (!container || !inner) {
        return;
      }

      const mm = gsap.matchMedia();
      mm.add(
        '(min-width: 1024px) and (hover: hover) and (prefers-reduced-motion: no-preference)',
        () => {
          const resolveOffset = () =>
            Math.min(yOffset, Math.max(12, Math.round(container.offsetHeight * 0.055)));

          gsap.fromTo(
            inner,
            { y: () => -resolveOffset() },
            {
              y: () => resolveOffset(),
              ease: 'none',
              scrollTrigger: {
                trigger: container,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 0.6,
                invalidateOnRefresh: true,
              },
            },
          );
        },
      );

      return () => mm.revert();
    },
    { scope: containerRef, dependencies: [yOffset] },
  );

  return (
    <div ref={containerRef} className={cn('overflow-hidden', className)}>
      <div ref={innerRef} className="will-change-transform">
        {children}
      </div>
    </div>
  );
}
