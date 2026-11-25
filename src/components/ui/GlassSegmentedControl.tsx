import { useCallback, useEffect, useRef, type ReactNode } from 'react';
import { APPLE_EASE, gsap, prefersReducedMotion, useGSAP } from '@/animations/gsapConfig';
import { cn } from '@/utils/cn';

export interface SegmentedOption<T extends string> {
  value: T;
  label: string;
  icon?: ReactNode;
  ariaLabel?: string;
}

interface GlassSegmentedControlProps<T extends string> {
  options: readonly SegmentedOption<T>[];
  value: T;
  onChange: (value: T) => void;
  ariaLabel: string;
  size?: 'sm' | 'md';
  compact?: boolean;
  className?: string;
}

export function GlassSegmentedControl<T extends string>({
  options,
  value,
  onChange,
  ariaLabel,
  size = 'md',
  compact = false,
  className,
}: GlassSegmentedControlProps<T>) {
  const trackRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLSpanElement>(null);
  const buttonRefs = useRef<Map<T, HTMLButtonElement>>(new Map());
  const isInitialMount = useRef(true);

  const syncThumb = useCallback(
    (animate: boolean) => {
      const track = trackRef.current;
      const thumb = thumbRef.current;
      const activeBtn = buttonRefs.current.get(value);
      if (!track || !thumb || !activeBtn) {
        return;
      }

      const x = activeBtn.offsetLeft;
      const width = activeBtn.offsetWidth;

      if (!animate || prefersReducedMotion()) {
        gsap.set(thumb, { x, width, opacity: 1 });
      } else {
        gsap.to(thumb, {
          x,
          width,
          opacity: 1,
          duration: 0.34,
          ease: APPLE_EASE,
          overwrite: 'auto',
        });
      }
    },
    [value],
  );

  useGSAP(
    () => {
      const shouldAnimate = !isInitialMount.current;
      isInitialMount.current = false;
      syncThumb(shouldAnimate);
    },
    { scope: trackRef, dependencies: [value, options, syncThumb] },
  );

  useEffect(() => {
    const track = trackRef.current;
    if (!track || typeof ResizeObserver === 'undefined') {
      return;
    }
    const observer = new ResizeObserver(() => syncThumb(false));
    observer.observe(track);
    return () => observer.disconnect();
  }, [syncThumb]);

  const handleKeyDown = (event: React.KeyboardEvent, index: number) => {
    if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') {
      return;
    }
    event.preventDefault();
    const delta = event.key === 'ArrowRight' ? 1 : -1;
    const nextIndex = (index + delta + options.length) % options.length;
    const nextOption = options[nextIndex];
    if (nextOption) {
      onChange(nextOption.value);
      buttonRefs.current.get(nextOption.value)?.focus();
    }
  };

  return (
    <div
      ref={trackRef}
      role="radiogroup"
      aria-label={ariaLabel}
      className={cn(
        'liquid-glass liquid-glass--subtle relative inline-flex items-center rounded-full p-1',
        className,
      )}
    >
      <span
        ref={thumbRef}
        aria-hidden="true"
        className="pointer-events-none absolute top-1 bottom-1 left-0 z-[2] rounded-full bg-[var(--bs-surface)] opacity-0 shadow-[0_2px_8px_rgba(0,0,0,0.12)] ring-1 ring-[var(--bs-border-subtle)] dark:bg-white/16 dark:shadow-[0_2px_10px_rgba(0,0,0,0.45)]"
      />
      {options.map((option, index) => {
        const selected = option.value === value;
        return (
          <button
            key={option.value}
            ref={(el) => {
              if (el) {
                buttonRefs.current.set(option.value, el);
              } else {
                buttonRefs.current.delete(option.value);
              }
            }}
            type="button"
            role="radio"
            aria-checked={selected}
            aria-label={option.ariaLabel ?? option.label}
            tabIndex={selected ? 0 : -1}
            onClick={() => onChange(option.value)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            className={cn(
              'relative z-[3] inline-flex cursor-pointer items-center justify-center gap-1.5 rounded-full font-medium transition-colors duration-200 select-none',
              size === 'sm' ? 'h-7 px-2.5 text-xs' : 'h-8 px-3.5 text-xs sm:text-[13px]',
              compact && 'px-2',
              selected
                ? 'text-[var(--bs-text-primary)]'
                : 'text-[var(--bs-text-muted)] hover:text-[var(--bs-text-primary)]',
            )}
          >
            {option.icon}
            {!compact && <span>{option.label}</span>}
          </button>
        );
      })}
    </div>
  );
}
