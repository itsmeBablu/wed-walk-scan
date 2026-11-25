import {
  useRef,
  type AnchorHTMLAttributes,
  type ButtonHTMLAttributes,
  type ReactNode,
} from 'react';
import { useMagneticPress } from '@/hooks/useMagneticPress';
import { usePointerGlow } from '@/hooks/usePointerGlow';
import { cn } from '@/utils/cn';

type GlassButtonTone = 'accent' | 'neutral';
type GlassButtonSize = 'sm' | 'md' | 'lg';

interface BaseProps {
  children: ReactNode;
  tone?: GlassButtonTone;
  size?: GlassButtonSize;
  className?: string;
}

type GlassButtonAsButton = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & {
    href?: undefined;
  };

type GlassButtonAsAnchor = BaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps> & {
    href: string;
  };

export type LiquidGlassButtonProps = GlassButtonAsButton | GlassButtonAsAnchor;

const SIZE_CLASSES: Record<GlassButtonSize, string> = {
  sm: 'h-9 px-4 text-xs font-medium',
  md: 'h-11 px-5 text-sm font-medium',
  lg: 'h-12 px-6 text-[15px] font-medium',
};

const TONE_CLASSES: Record<GlassButtonTone, string> = {
  accent:
    '!bg-[var(--glass-tint-accent)] !border-[#ca8a04]/45 dark:!border-[#fde047]/45 [&::before]:opacity-35 text-[var(--bs-accent-ink)] font-semibold shadow-[var(--glass-shadow-button)] hover:brightness-105',
  neutral: 'text-[var(--bs-text-primary)] hover:brightness-105',
};

export function LiquidGlassButton(props: LiquidGlassButtonProps) {
  const { children, tone = 'accent', size = 'md', className, ...rest } = props;

  const ref = useRef<HTMLButtonElement & HTMLAnchorElement>(null);
  usePointerGlow(ref, true);
  useMagneticPress(ref, 4);

  const classes = cn(
    'liquid-glass liquid-glass--elevated relative inline-flex items-center justify-center gap-2 rounded-full select-none cursor-pointer transition-[filter,transform] duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--bs-accent)] disabled:pointer-events-none disabled:opacity-50',
    SIZE_CLASSES[size],
    TONE_CLASSES[tone],
    className,
  );

  if ('href' in props && props.href !== undefined) {
    const { href, ...anchorProps } = rest as Omit<GlassButtonAsAnchor, keyof BaseProps>;
    return (
      <a ref={ref} href={href} data-interactive="true" className={classes} {...anchorProps}>
        <span className="relative z-[3] inline-flex items-center gap-2">{children}</span>
      </a>
    );
  }

  const buttonProps = rest as Omit<GlassButtonAsButton, keyof BaseProps>;
  return (
    <button
      ref={ref}
      type={buttonProps.type ?? 'button'}
      data-interactive="true"
      className={classes}
      {...buttonProps}
    >
      <span className="relative z-[3] inline-flex items-center gap-2">{children}</span>
    </button>
  );
}
