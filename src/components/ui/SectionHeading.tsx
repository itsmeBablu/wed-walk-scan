import { ScrollReveal } from '@/animations/ScrollReveal';
import { AnimatedHeading } from '@/components/ui/AnimatedHeading';
import { cn } from '@/utils/cn';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: 'center' | 'left';
  inverted?: boolean;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  inverted = false,
  className,
}: SectionHeadingProps) {
  const centered = align === 'center';

  return (
    <div className={cn('max-w-3xl', centered ? 'mx-auto text-center' : 'text-left', className)}>
      <ScrollReveal y={14} duration={0.6}>
        <span
          className={cn(
            'inline-flex items-center rounded-full px-3.5 py-1 text-xs font-semibold tracking-wider uppercase',
            inverted
              ? 'bg-[#272000]/80 text-[#fef08a] ring-1 ring-[#facc15]/35'
              : 'bg-[var(--bs-badge-bg)] text-[var(--bs-badge-text)] ring-1 ring-[var(--bs-badge-border)]',
          )}
        >
          {eyebrow}
        </span>
      </ScrollReveal>

      <AnimatedHeading
        as="h2"
        text={title}
        className={cn(
          'mt-4 text-3xl font-semibold tracking-[-0.028em] text-balance sm:text-4xl lg:text-[46px] lg:leading-[1.08]',
          inverted ? 'text-[#F5F5F7]' : 'text-[var(--bs-text-primary)]',
        )}
      />

      {subtitle && (
        <ScrollReveal y={18} delay={0.08} duration={0.7}>
          <p
            className={cn(
              'mt-4 text-base leading-relaxed text-pretty sm:text-lg',
              inverted ? 'text-[#A1A1A6]' : 'text-[var(--bs-text-muted)]',
            )}
          >
            {subtitle}
          </p>
        </ScrollReveal>
      )}
    </div>
  );
}
