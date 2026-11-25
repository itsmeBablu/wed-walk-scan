import { X } from 'lucide-react';
import { useEffect, useId, useRef, type ReactNode } from 'react';
import { APPLE_EASE, gsap, prefersReducedMotion, useGSAP } from '@/animations/gsapConfig';
import { useLanguage } from '@/hooks/useLanguage';
import { cn } from '@/utils/cn';

interface GlassModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  className?: string;
}

export function GlassModal({ open, onClose, title, children, className }: GlassModalProps) {
  const { t } = useLanguage();
  const titleId = useId();
  const overlayRef = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) {
      return;
    }
    const previousFocus = document.activeElement as HTMLElement | null;
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      previousFocus?.focus?.();
    };
  }, [open, onClose]);

  useGSAP(
    () => {
      const dialog = dialogRef.current;
      const overlay = overlayRef.current;
      if (!open || !dialog || !overlay || prefersReducedMotion()) {
        return;
      }
      gsap.fromTo(overlay, { opacity: 0 }, { opacity: 1, duration: 0.22, ease: 'power2.out' });
      gsap.fromTo(
        dialog,
        { opacity: 0, y: 18, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.34,
          ease: APPLE_EASE,
          clearProps: 'transform',
        },
      );
    },
    { scope: overlayRef, dependencies: [open] },
  );

  if (!open) {
    return null;
  }

  return (
    <div
      ref={overlayRef}
      role="presentation"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/45 p-4 backdrop-blur-sm"
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className={cn(
          'liquid-glass liquid-glass--elevated relative w-full max-w-lg rounded-[var(--bs-radius-lg)] p-6 sm:p-8',
          className,
        )}
      >
        <div className="relative z-[3]">
          <div className="mb-5 flex items-start justify-between gap-4">
            <h3
              id={titleId}
              className="text-xl font-semibold tracking-tight text-[var(--bs-text-primary)]"
            >
              {title}
            </h3>
            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              aria-label={t.controls.close}
              className="inline-flex h-8 w-8 shrink-0 cursor-pointer items-center justify-center rounded-full bg-[var(--bs-border-subtle)] text-[var(--bs-text-primary)] transition-colors hover:bg-[var(--bs-border-strong)]"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
