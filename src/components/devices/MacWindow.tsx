import type { ReactNode } from 'react';
import { cn } from '@/utils/cn';

interface MacWindowProps {
  title?: string;
  badge?: string;
  darkChrome?: boolean;
  children: ReactNode;
  className?: string;
}

export function MacWindow({
  title = 'dWalkScan',
  badge,
  darkChrome = false,
  children,
  className,
}: MacWindowProps) {
  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-[20px] border shadow-[0_28px_70px_-20px_rgba(0,0,0,0.28)] sm:rounded-[24px]',
        darkChrome
          ? 'border-[#facc15]/20 bg-[#171612] text-[#FAFAF7] shadow-[0_32px_90px_-18px_rgba(0,0,0,0.82)]'
          : 'border-[var(--bs-border-strong)] bg-[var(--bs-surface)] text-[var(--bs-text-primary)]',
        className,
      )}
    >
      {/* Subtle moving top specular reflection across window rim */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 z-20 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent opacity-70"
      />

      {/* macOS Tahoe translucent glass title bar */}
      <div
        className={cn(
          'relative z-10 flex h-11 items-center justify-between border-b px-4 backdrop-blur-xl sm:h-12 sm:px-5',
          darkChrome
            ? 'border-white/10 bg-white/[0.05]'
            : 'border-[var(--bs-border-subtle)] bg-[var(--bs-surface-subtle)]/80',
        )}
      >
        {/* Traffic light window controls */}
        <div aria-hidden="true" className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-[#FF5F57] ring-1 ring-black/15" />
          <span className="h-3 w-3 rounded-full bg-[#FEBC2E] ring-1 ring-black/15" />
          <span className="h-3 w-3 rounded-full bg-[#28C840] ring-1 ring-black/15" />
        </div>

        {/* Centered floating glass title pill */}
        <div
          className={cn(
            'hidden max-w-[55%] truncate rounded-full px-3.5 py-1 text-xs font-medium tracking-tight sm:block',
            darkChrome
              ? 'bg-white/8 text-white/85 ring-1 ring-white/10'
              : 'bg-[var(--bs-surface)]/80 text-[var(--bs-text-primary)] ring-1 ring-[var(--bs-border-subtle)]',
          )}
        >
          {title}
        </div>

        {/* Right toolbar status chip */}
        <div className="flex items-center gap-2">
          {badge ? (
            <span
              className={cn(
                'rounded-full px-2.5 py-0.5 font-mono text-[10px] font-semibold tracking-wide',
                darkChrome
                  ? 'bg-[#272000] text-[#fef08a] ring-1 ring-[#facc15]/35'
                  : 'bg-[var(--bs-badge-bg)] text-[var(--bs-badge-text)] ring-1 ring-[var(--bs-badge-border)]',
              )}
            >
              {badge}
            </span>
          ) : (
            <span aria-hidden="true" className="h-3 w-12 rounded-full bg-current opacity-10" />
          )}
        </div>
      </div>

      {/* Viewport surface */}
      <div className="relative overflow-hidden">{children}</div>
    </div>
  );
}
