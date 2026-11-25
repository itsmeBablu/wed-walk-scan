import { useRef, type ReactNode } from 'react';
import { APPLE_CINEMATIC_EASE, gsap, prefersReducedMotion, useGSAP } from '@/animations/gsapConfig';
import { MacWindow } from '@/components/devices/MacWindow';
import { cn } from '@/utils/cn';

interface AnimatedMacWindowProps {
  title?: string;
  badge?: string;
  darkChrome?: boolean;
  children: ReactNode;
  /** Set true when controlled by a parent timeline (e.g. Hero entrance) */
  manualControl?: boolean;
  className?: string;
}

export function AnimatedMacWindow({
  title,
  badge,
  darkChrome,
  children,
  manualControl = false,
  className,
}: AnimatedMacWindowProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = wrapperRef.current;
      if (!el || manualControl || prefersReducedMotion()) {
        return;
      }

      gsap.from(el, {
        y: 32,
        scale: 0.96,
        opacity: 0,
        duration: 0.9,
        ease: APPLE_CINEMATIC_EASE,
        clearProps: 'transform,opacity',
        scrollTrigger: {
          trigger: el,
          start: 'top 84%',
          once: true,
        },
      });
    },
    { scope: wrapperRef, dependencies: [manualControl] },
  );

  return (
    <div ref={wrapperRef} className={cn('relative will-change-transform', className)}>
      <MacWindow title={title} badge={badge} darkChrome={darkChrome}>
        {children}
      </MacWindow>
    </div>
  );
}
