import type { ReactNode } from 'react';
import { cn } from '@/utils/cn';

interface BentoGridProps {
  children: ReactNode;
  className?: string;
}

export function BentoGrid({ children, className }: BentoGridProps) {
  return (
    <div
      className={cn(
        'grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 3xl:grid-cols-5 lg:gap-6',
        className,
      )}
    >
      {children}
    </div>
  );
}
