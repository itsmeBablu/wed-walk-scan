import { Box, Cloud, Compass, Cpu, Layers, Ruler, ScanLine, ShieldCheck } from 'lucide-react';
import { useRef } from 'react';
import { gsap, useGSAP } from '@/animations/gsapConfig';
import { LiquidGlassPanel } from '@/components/ui/LiquidGlassPanel';
import { useIsTouchDevice, usePrefersReducedMotion } from '@/hooks/useMediaQuery';
import type { FeatureItem } from '@/types';
import { cn } from '@/utils/cn';

const ICON_MAP = {
  scan: ScanLine,
  layers: Layers,
  ruler: Ruler,
  box: Box,
  cpu: Cpu,
  cloud: Cloud,
  compass: Compass,
  shield: ShieldCheck,
} as const;

interface FeatureCardProps {
  item: FeatureItem;
  className?: string;
}

export function FeatureCard({ item, className }: FeatureCardProps) {
  const Icon = ICON_MAP[item.icon];
  const cardRef = useRef<HTMLElement>(null);
  const reducedMotion = usePrefersReducedMotion();
  const isTouch = useIsTouchDevice();

  useGSAP(
    () => {
      const card = cardRef.current;
      if (!card || reducedMotion || isTouch) {
        return;
      }
      const onEnter = () => gsap.to(card, { y: -4, duration: 0.3, ease: 'power3.out' });
      const onLeave = () => gsap.to(card, { y: 0, duration: 0.35, ease: 'power3.out' });
      card.addEventListener('pointerenter', onEnter);
      card.addEventListener('pointerleave', onLeave);
      return () => {
        card.removeEventListener('pointerenter', onEnter);
        card.removeEventListener('pointerleave', onLeave);
      };
    },
    { scope: cardRef, dependencies: [isTouch, reducedMotion] },
  );

  return (
    <article
      ref={cardRef}
      data-bento-card
      className={cn(
        'surface-card flex flex-col justify-between rounded-[var(--bs-radius-lg)] p-6 transition-shadow duration-300 will-change-transform hover:shadow-[0_18px_42px_-16px_rgba(0,113,227,0.18)] sm:p-7',
        item.span === 'wide' && 'md:col-span-2',
        className,
      )}
    >
      <div>
        <div className="flex items-center justify-between gap-3">
          <LiquidGlassPanel
            variant="subtle"
            rounded="md"
            className="inline-flex h-11 w-11 items-center justify-center bg-[var(--bs-badge-bg)] text-[var(--bs-badge-text)]"
          >
            <div className="flex h-full w-full items-center justify-center">
              <Icon className="h-5 w-5" aria-hidden="true" />
            </div>
          </LiquidGlassPanel>

          <span className="rounded-full border border-[var(--bs-badge-border)] bg-[var(--bs-badge-bg)] px-3 py-1 text-[11px] font-semibold tracking-wider text-[var(--bs-badge-text)] uppercase">
            {item.tag}
          </span>
        </div>

        <h3 className="mt-5 text-xl font-semibold tracking-tight text-[var(--bs-text-primary)]">
          {item.title}
        </h3>
        <p className="mt-2.5 text-[15px] leading-relaxed text-[var(--bs-text-muted)]">
          {item.description}
        </p>
      </div>

      {item.metric && (
        <div className="mt-6 flex items-center gap-2 border-t border-[var(--bs-border-subtle)] pt-4">
          <span aria-hidden="true" className="h-2 w-2 rounded-full bg-[var(--bs-accent)]" />
          <span className="font-mono text-xs font-medium text-[var(--bs-text-primary)]">
            {item.metric}
          </span>
        </div>
      )}
    </article>
  );
}
