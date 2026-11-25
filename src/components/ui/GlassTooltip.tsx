import { useId, useState, type ReactNode } from 'react';
import { cn } from '@/utils/cn';

interface GlassTooltipProps {
  content: string;
  children: ReactNode;
  className?: string;
}

export function GlassTooltip({ content, children, className }: GlassTooltipProps) {
  const [visible, setVisible] = useState(false);
  const tooltipId = useId();

  return (
    <span
      className={cn('relative inline-flex shrink-0 items-center', className)}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onFocus={() => setVisible(true)}
      onBlur={() => setVisible(false)}
    >
      <span aria-describedby={visible ? tooltipId : undefined} className="inline-flex">
        {children}
      </span>
      <span
        id={tooltipId}
        role="tooltip"
        aria-hidden={!visible}
        className={cn(
          'liquid-glass liquid-glass--elevated pointer-events-none absolute bottom-full left-1/2 z-40 mb-2.5 w-max max-w-[260px] -translate-x-1/2 rounded-full px-3.5 py-1.5 text-center text-xs font-medium text-[var(--bs-text-primary)] transition-[opacity,transform] duration-200',
          visible ? 'translate-y-0 opacity-100' : 'translate-y-1 opacity-0',
        )}
      >
        <span className="relative z-[3] block">{content}</span>
      </span>
    </span>
  );
}
