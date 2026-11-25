import { useRef } from 'react';
import { APPLE_CINEMATIC_EASE, gsap, prefersReducedMotion, useGSAP } from '@/animations/gsapConfig';
import { cn } from '@/utils/cn';

interface AnimatedHeadingProps {
  as?: 'h1' | 'h2' | 'h3';
  text: string;
  className?: string;
  /** Set true for above-the-fold hero headings controlled by a parent timeline */
  manualTrigger?: boolean;
}

export function AnimatedHeading({
  as: Tag = 'h2',
  text,
  className,
  manualTrigger = false,
}: AnimatedHeadingProps) {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      const el = headingRef.current;
      if (!el || manualTrigger || prefersReducedMotion()) {
        return;
      }

      gsap.from(el, {
        y: 24,
        opacity: 0,
        duration: 0.85,
        ease: APPLE_CINEMATIC_EASE,
        clearProps: 'transform,opacity',
        scrollTrigger: {
          trigger: el,
          start: 'top 86%',
          once: true,
        },
      });
    },
    { scope: headingRef, dependencies: [manualTrigger, text] },
  );

  return (
    <Tag ref={headingRef} className={cn(className)}>
      {text}
    </Tag>
  );
}
