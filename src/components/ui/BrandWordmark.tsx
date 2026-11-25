import { BRAND_CONFIG } from '@/data/brand';
import { cn } from '@/utils/cn';

interface BrandWordmarkProps {
  className?: string;
  accentD?: boolean;
}

/**
 * Renders `dWalkScan` with exact casing and optional emphasis on the lowercase `d`
 * representing multidimensional BIM workflows.
 */
export function BrandWordmark({ className, accentD = true }: BrandWordmarkProps) {
  return (
    <span className={cn('tracking-tight', className)}>
      <span className={cn(accentD ? 'font-bold text-[var(--bs-accent-text)]' : 'font-semibold')}>
        {BRAND_CONFIG.dPrefix}
      </span>
      <span>{BRAND_CONFIG.nameBody}</span>
    </span>
  );
}
