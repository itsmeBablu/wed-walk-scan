import { useRef, type ReactNode } from 'react';
import { useGSAP, gsap } from '@/animations/gsapConfig';
import { LiquidGlassPanel, type LiquidGlassPanelProps } from '@/components/ui/LiquidGlassPanel';
import { useIsTouchDevice, usePrefersReducedMotion } from '@/hooks/useMediaQuery';
import { cn } from '@/utils/cn';

export interface LiquidGlassCardProps extends LiquidGlassPanelProps {
  children: ReactNode;
  elevateOnHover?: boolean;
}

export function LiquidGlassCard({
  children,
  elevateOnHover = true,
  interactive = true,
  refraction = true,
  className,
  ...rest
}: LiquidGlassCardProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const reducedMotion = usePrefersReducedMotion();
  const isTouch = useIsTouchDevice();

  useGSAP(
    () => {
      const el = wrapperRef.current;
      if (!el || !elevateOnHover || reducedMotion || isTouch) {
        return;
      }

      const onEnter = () => {
        gsap.to(el, { y: -4, duration: 0.32, ease: 'power3.out' });
      };
      const onLeave = () => {
        gsap.to(el, { y: 0, duration: 0.36, ease: 'power3.out' });
      };

      el.addEventListener('pointerenter', onEnter);
      el.addEventListener('pointerleave', onLeave);
      return () => {
        el.removeEventListener('pointerenter', onEnter);
        el.removeEventListener('pointerleave', onLeave);
      };
    },
    { scope: wrapperRef, dependencies: [elevateOnHover, isTouch, reducedMotion] },
  );

  return (
    <div ref={wrapperRef} className="h-full will-change-transform">
      <LiquidGlassPanel
        interactive={interactive}
        refraction={refraction}
        className={cn('h-full p-6 sm:p-7', className)}
        {...rest}
      >
        {children}
      </LiquidGlassPanel>
    </div>
  );
}
