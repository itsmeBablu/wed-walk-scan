import { useRef, type ReactNode } from 'react';
import { APPLE_CINEMATIC_EASE, gsap, prefersReducedMotion, useGSAP } from '@/animations/gsapConfig';
import { IPhoneFrame } from '@/components/devices/IPhoneFrame';
import { cn } from '@/utils/cn';

interface AnimatedIPhoneFrameProps {
  label?: string;
  children: ReactNode;
  manualControl?: boolean;
  className?: string;
}

export function AnimatedIPhoneFrame({
  label,
  children,
  manualControl = false,
  className,
}: AnimatedIPhoneFrameProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = wrapperRef.current;
      if (!el || manualControl || prefersReducedMotion()) {
        return;
      }

      gsap.from(el, {
        y: 36,
        opacity: 0,
        duration: 0.9,
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
      <IPhoneFrame label={label}>{children}</IPhoneFrame>
    </div>
  );
}
