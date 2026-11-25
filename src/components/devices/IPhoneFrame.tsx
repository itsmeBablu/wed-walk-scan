import type { ReactNode } from 'react';
import { cn } from '@/utils/cn';

interface IPhoneFrameProps {
  label?: string;
  children: ReactNode;
  className?: string;
}

/**
 * Pure CSS + SVG modern iPhone Pro titanium hardware silhouette.
 * Relies on zero external device mockup image assets.
 */
export function IPhoneFrame({ label, children, className }: IPhoneFrameProps) {
  return (
    <div className={cn('relative mx-auto w-full max-w-[290px] select-none', className)}>
      {/* Side hardware buttons (left: Action + Volume Up/Down) */}
      <span
        aria-hidden="true"
        className="absolute top-[74px] -left-[3px] h-5 w-[3px] rounded-l-sm bg-neutral-500/70"
      />
      <span
        aria-hidden="true"
        className="absolute top-[112px] -left-[3px] h-10 w-[3px] rounded-l-sm bg-neutral-500/70"
      />
      <span
        aria-hidden="true"
        className="absolute top-[162px] -left-[3px] h-10 w-[3px] rounded-l-sm bg-neutral-500/70"
      />
      {/* Right side power button */}
      <span
        aria-hidden="true"
        className="absolute top-[132px] -right-[3px] h-14 w-[3px] rounded-r-sm bg-neutral-500/70"
      />

      {/* Titanium outer shell */}
      <div className="relative rounded-[44px] bg-gradient-to-b from-[#D2D2D7] via-[#7A7A80] to-[#B0B0B6] p-[3px] shadow-[0_32px_72px_-16px_rgba(0,0,0,0.42)] dark:from-[#525258] dark:via-[#2B2B30] dark:to-[#45454B]">
        {/* Inner black glass display bezel */}
        <div className="relative overflow-hidden rounded-[41px] bg-[#0B0B0D] p-[8px] ring-1 ring-white/15">
          {/* Screen area */}
          <div className="relative overflow-hidden rounded-[34px] bg-[var(--bs-surface-subtle)]">
            {/* Status bar + Dynamic Island */}
            <div className="pointer-events-none absolute inset-x-0 top-0 z-20 flex items-center justify-between px-5 pt-2.5">
              <span className="text-[10px] font-semibold tracking-tight text-white mix-blend-difference">
                9:41
              </span>

              {/* Dynamic Island pill */}
              <div className="flex h-[20px] w-[78px] items-center justify-end rounded-full bg-black px-2 shadow-inner ring-1 ring-white/10">
                <span className="h-2.5 w-2.5 rounded-full bg-[#171612] ring-1 ring-amber-300/25" />
              </div>

              {/* Micro signal + battery indicator */}
              <div
                aria-hidden="true"
                className="flex items-center gap-1 text-white mix-blend-difference"
              >
                <span className="h-2 w-3 rounded-[2px] border border-current p-[1px]">
                  <span className="block h-full w-full rounded-[1px] bg-current" />
                </span>
              </div>
            </div>

            {/* App screenshot / placeholder content */}
            {children}

            {/* Home indicator */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 bottom-2 z-20 flex justify-center"
            >
              <span className="h-1 w-24 rounded-full bg-white/45 mix-blend-difference" />
            </div>
          </div>

          {/* Specular glass edge highlight */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-[41px] bg-gradient-to-tr from-transparent via-white/5 to-white/15"
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
