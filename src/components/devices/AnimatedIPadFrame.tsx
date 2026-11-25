import { useRef, type ReactNode } from 'react';
import { APPLE_CINEMATIC_EASE, gsap, prefersReducedMotion, useGSAP } from '@/animations/gsapConfig';
import { IPadFrame } from '@/components/devices/IPadFrame';
import { cn } from '@/utils/cn';

interface AnimatedIPadFrameProps {
  label?: string;
  children: ReactNode;
  manualControl?: boolean;
  className?: string;
}

export function AnimatedIPadFrame({
  label,
  children,
  manualControl = false,
  className,
}: AnimatedIPadFrameProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = wrapperRef.current;
      if (!el || manualControl || prefersReducedMotion()) {
        return;
      }

      gsap.from(el, {
        y: 34,
        scale: 0.96,
        opacity: 0,
        duration: 0.88,
        ease: APPLE_CINEMATIC_EASE,
        clearProps: 'transform,opacity',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          once: true,
        },
      });
    },
    { scope: wrapperRef, dependencies: [manualControl] },
  );

  return (
    <div ref={wrapperRef} className={cn('relative will-change-transform', className)}>
      <IPadFrame label={label}>{children}</IPadFrame>
    </div>
  );
}
