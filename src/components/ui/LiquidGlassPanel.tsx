import { useRef, type HTMLAttributes, type ReactNode } from 'react';
import { usePointerGlow } from '@/hooks/usePointerGlow';
import { cn } from '@/utils/cn';

export type LiquidGlassVariant = 'default' | 'elevated' | 'subtle' | 'nav';

export interface LiquidGlassPanelProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  variant?: LiquidGlassVariant;
  interactive?: boolean;
  refraction?: boolean;
  rounded?: 'sm' | 'md' | 'lg' | 'xl' | 'pill';
}

const ROUNDED_MAP: Record<NonNullable<LiquidGlassPanelProps['rounded']>, string> = {
  sm: 'rounded-[var(--bs-radius-sm)]',
  md: 'rounded-[var(--bs-radius-md)]',
  lg: 'rounded-[var(--bs-radius-lg)]',
  xl: 'rounded-[var(--bs-radius-xl)]',
  pill: 'rounded-[var(--bs-radius-pill)]',
};

const VARIANT_MAP: Record<LiquidGlassVariant, string> = {
  default: '',
  elevated: 'liquid-glass--elevated',
  subtle: 'liquid-glass--subtle',
  nav: 'liquid-glass--nav',
};

export function LiquidGlassPanel({
  children,
  variant = 'default',
  interactive = false,
  refraction = false,
  rounded = 'lg',
  className,
  ...rest
}: LiquidGlassPanelProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  usePointerGlow(panelRef, interactive);

  return (
    <div
      ref={panelRef}
      data-interactive={interactive ? 'true' : undefined}
      className={cn('liquid-glass', VARIANT_MAP[variant], ROUNDED_MAP[rounded], className)}
      {...rest}
    >
      {refraction && <span aria-hidden="true" className="liquid-glass-refract-layer" />}
      {children}
    </div>
  );
}
