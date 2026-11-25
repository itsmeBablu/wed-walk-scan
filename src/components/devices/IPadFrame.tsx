import type { ReactNode } from 'react';
import { cn } from '@/utils/cn';

interface IPadFrameProps {
  label?: string;
  children: ReactNode;
  className?: string;
}

/**
 * Pure CSS + SVG modern iPad Pro landscape hardware frame.
 * Relies on zero external mockup image assets.
 */
export function IPadFrame({ label, children, className }: IPadFrameProps) {
  return (
    <div className={cn('relative mx-auto w-full max-w-[760px] select-none', className)}>
      {/* Side top/power & volume micro buttons */}
      <span
        aria-hidden="true"
        className="absolute -top-[3px] right-10 h-[3px] w-10 rounded-t-sm bg-neutral-500/70"
      />
      <span
        aria-hidden="true"
        className="absolute top-10 -right-[3px] h-7 w-[3px] rounded-r-sm bg-neutral-500/70"
      />
      <span
        aria-hidden="true"
        className="absolute top-20 -right-[3px] h-7 w-[3px] rounded-r-sm bg-neutral-500/70"
      />

      {/* Precision aluminum / space black outer chassis */}
      <div className="relative rounded-[26px] bg-gradient-to-b from-[#CFCFD4] via-[#86868C] to-[#ADADB3] p-[2.5px] shadow-[0_28px_68px_-18px_rgba(0,0,0,0.42)] sm:rounded-[30px] dark:from-[#4C4C52] dark:via-[#2A2A2E] dark:to-[#3E3E44]">
        {/* Dark glass bezel */}
        <div className="relative overflow-hidden rounded-[23.5px] bg-[#0B0B0D] p-[10px] ring-1 ring-white/15 sm:rounded-[27.5px] sm:p-[13px]">
          {/* Landscape camera dot */}
          <span
            aria-hidden="true"
            className="absolute top-[5px] left-1/2 z-20 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[#1F242D] ring-1 ring-white/15 sm:top-[6px]"
          />

          {/* Display surface */}
          <div className="relative overflow-hidden rounded-[14px] bg-[var(--bs-surface-subtle)] sm:rounded-[16px]">
            {children}

            {/* Bottom iPadOS home indicator */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 bottom-2 z-20 flex justify-center"
            >
              <span className="h-1 w-28 rounded-full bg-white/45 mix-blend-difference" />
            </div>
          </div>

          {/* Specular glass reflection */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-[23.5px] bg-gradient-to-tr from-transparent via-white/[0.04] to-white/[0.14] sm:rounded-[27.5px]"
          />
        </div>
      </div>

      {label && (
        <p className="mt-3 text-center text-xs font-medium tracking-tight text-[var(--bs-text-muted)]">
          {label}
        </p>
      )}
    </div>
  );
}
