import {
  useRef,
  type AnchorHTMLAttributes,
  type ButtonHTMLAttributes,
  type ReactNode,
} from 'react';
import { useMagneticPress } from '@/hooks/useMagneticPress';
import { cn } from '@/utils/cn';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface BaseProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  magnetic?: boolean;
  className?: string;
}

type ButtonAsButton = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & {
    href?: undefined;
  };

type ButtonAsAnchor = BaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps> & {
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsAnchor;

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary:
    'bg-[var(--bs-accent)] text-[var(--bs-accent-ink)] font-semibold hover:bg-[var(--bs-accent-hover)] active:bg-[var(--bs-accent-pressed)] shadow-[0_10px_24px_-8px_rgba(202,138,4,0.45)]',
  secondary:
    'bg-[var(--bs-surface)] text-[var(--bs-text-primary)] border border-[var(--bs-border-strong)] hover:bg-[var(--bs-surface-subtle)]',
  outline:
    'border border-[var(--bs-border-strong)] bg-transparent text-[var(--bs-text-primary)] hover:bg-[var(--bs-surface-subtle)]',
  ghost: 'bg-transparent text-[var(--bs-text-primary)] hover:bg-[var(--bs-border-subtle)]',
};

const SIZE_CLASSES: Record<ButtonSize, string> = {
  sm: 'h-9 px-4 text-xs font-medium',
  md: 'h-11 px-5 text-sm font-medium',
  lg: 'h-12 px-6 text-[15px] font-medium',
};

export function Button(props: ButtonProps) {
  const { children, variant = 'primary', size = 'md', magnetic = true, className, ...rest } = props;

  const ref = useRef<HTMLButtonElement & HTMLAnchorElement>(null);
  useMagneticPress(ref, magnetic ? 3 : 0);

  const classes = cn(
    'inline-flex items-center justify-center gap-2 rounded-full transition-colors duration-200 select-none cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--bs-accent)] disabled:pointer-events-none disabled:opacity-50',
    VARIANT_CLASSES[variant],
    SIZE_CLASSES[size],
    className,
  );

  if ('href' in props && props.href !== undefined) {
    const { href, ...anchorProps } = rest as Omit<ButtonAsAnchor, keyof BaseProps>;
    return (
      <a ref={ref} href={href} className={classes} {...anchorProps}>
        {children}
      </a>
    );
  }

  const buttonProps = rest as Omit<ButtonAsButton, keyof BaseProps>;
  return (
    <button ref={ref} type={buttonProps.type ?? 'button'} className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
