import { Check, ChevronDown } from 'lucide-react';
import { useEffect, useId, useRef, useState } from 'react';
import { APPLE_EASE, gsap, prefersReducedMotion, useGSAP } from '@/animations/gsapConfig';
import { cn } from '@/utils/cn';

export interface DropdownOption<T extends string> {
  value: T;
  label: string;
  badge?: string;
}

interface GlassDropdownProps<T extends string> {
  options: readonly DropdownOption<T>[];
  value: T;
  onChange: (value: T) => void;
  label: string;
  className?: string;
}

export function GlassDropdown<T extends string>({
  options,
  value,
  onChange,
  label,
  className,
}: GlassDropdownProps<T>) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLUListElement>(null);
  const listboxId = useId();

  const current = options.find((o) => o.value === value) ?? options[0];

  useEffect(() => {
    if (!open) {
      return;
    }
    const handlePointerDown = (event: PointerEvent) => {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    };
    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [open]);

  useGSAP(
    () => {
      const menu = menuRef.current;
      if (!open || !menu || prefersReducedMotion()) {
        return;
      }
      gsap.fromTo(
        menu,
        { opacity: 0, y: -8, scale: 0.97 },
        { opacity: 1, y: 0, scale: 1, duration: 0.24, ease: APPLE_EASE, clearProps: 'transform' },
      );
    },
    { scope: rootRef, dependencies: [open] },
  );

  return (
    <div ref={rootRef} className={cn('relative inline-block text-left', className)}>
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listboxId}
        aria-label={label}
        onClick={() => setOpen((prev) => !prev)}
        className="liquid-glass liquid-glass--elevated inline-flex h-11 min-w-[210px] cursor-pointer items-center justify-between gap-3 rounded-full px-4 text-sm font-medium text-[var(--bs-text-primary)] transition-transform duration-150 active:scale-[0.98]"
      >
        <span className="relative z-[3] flex items-center gap-2">
          {current?.badge && (
            <span className="rounded-full bg-[var(--bs-badge-bg)] px-2 py-0.5 font-mono text-[11px] font-semibold text-[var(--bs-badge-text)]">
              {current.badge}
            </span>
          )}
          <span>{current?.label}</span>
        </span>
        <ChevronDown
          className={cn(
            'relative z-[3] h-4 w-4 text-[var(--bs-text-muted)] transition-transform duration-200',
            open && 'rotate-180',
          )}
          aria-hidden="true"
        />
      </button>

      {open && (
        <ul
          ref={menuRef}
          id={listboxId}
          role="listbox"
          aria-label={label}
          className="liquid-glass liquid-glass--elevated absolute left-0 z-30 mt-2 w-full min-w-[250px] overflow-hidden rounded-[var(--bs-radius-md)] p-1.5"
        >
          {options.map((option) => {
            const selected = option.value === value;
            return (
              <li
                key={option.value}
                role="option"
                aria-selected={selected}
                className="relative z-[3]"
              >
                <button
                  type="button"
                  onClick={() => {
                    onChange(option.value);
                    setOpen(false);
                  }}
                  className={cn(
                    'flex w-full cursor-pointer items-center justify-between gap-2 rounded-[10px] px-3 py-2 text-left text-sm transition-colors',
                    selected
                      ? 'bg-[var(--bs-badge-bg)] font-medium text-[var(--bs-badge-text)]'
                      : 'text-[var(--bs-text-primary)] hover:bg-[var(--bs-border-subtle)]',
                  )}
                >
                  <span className="flex items-center gap-2">
                    {option.badge && (
                      <span className="font-mono text-[11px] font-semibold opacity-80">
                        {option.badge}
                      </span>
                    )}
                    <span>{option.label}</span>
                  </span>
                  {selected && <Check className="h-4 w-4 shrink-0" aria-hidden="true" />}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
