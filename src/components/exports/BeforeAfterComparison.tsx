import { MoveHorizontal } from 'lucide-react';
import { useCallback, useRef, useState } from 'react';
import { ScreenshotPlaceholder } from '@/components/ui/ScreenshotPlaceholder';

interface BeforeAfterComparisonProps {
  beforeScreenshotId: string;
  afterScreenshotId: string;
  beforeLabel: string;
  afterLabel: string;
  hint: string;
}

export function BeforeAfterComparison({
  beforeScreenshotId,
  afterScreenshotId,
  beforeLabel,
  afterLabel,
  hint,
}: BeforeAfterComparisonProps) {
  const [splitPercent, setSplitPercent] = useState(52);
  const containerRef = useRef<HTMLDivElement>(null);
  const draggingRef = useRef(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) {
      return;
    }
    const rect = el.getBoundingClientRect();
    if (!rect.width) {
      return;
    }
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setSplitPercent(Math.round(Math.max(8, Math.min(92, pct))));
  }, []);

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    draggingRef.current = true;
    event.currentTarget.setPointerCapture(event.pointerId);
    updateFromClientX(event.clientX);
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current) {
      return;
    }
    updateFromClientX(event.clientX);
  };

  const handlePointerUp = () => {
    draggingRef.current = false;
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      setSplitPercent((p) => Math.max(8, p - 4));
    } else if (event.key === 'ArrowRight') {
      event.preventDefault();
      setSplitPercent((p) => Math.min(92, p + 4));
    }
  };

  return (
    <div>
      <div
        ref={containerRef}
        role="slider"
        tabIndex={0}
        aria-label={`${beforeLabel} / ${afterLabel}`}
        aria-valuemin={8}
        aria-valuemax={92}
        aria-valuenow={splitPercent}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onKeyDown={handleKeyDown}
        className="relative cursor-ew-resize overflow-hidden rounded-[var(--bs-radius-lg)] border border-[var(--bs-border-strong)] bg-[var(--bs-surface)] shadow-xl select-none focus-visible:outline-2 focus-visible:outline-[var(--bs-accent)]"
      >
        {/* After layer (base) */}
        <div className="w-full">
          <ScreenshotPlaceholder screenshotId={afterScreenshotId} />
        </div>

        {/* Before layer (clipped from right) */}
        <div
          aria-hidden="true"
          style={{ clipPath: `inset(0 ${100 - splitPercent}% 0 0)` }}
          className="pointer-events-none absolute inset-0"
        >
          <ScreenshotPlaceholder darkSurface screenshotId={beforeScreenshotId} />
        </div>

        {/* Floating corner labels */}
        <span className="liquid-glass liquid-glass--elevated pointer-events-none absolute top-3 left-3 z-20 rounded-full px-3 py-1 text-[11px] font-semibold text-[var(--bs-text-primary)]">
          <span className="relative z-[3]">{beforeLabel}</span>
        </span>
        <span className="liquid-glass liquid-glass--elevated pointer-events-none absolute top-3 right-3 z-20 rounded-full px-3 py-1 text-[11px] font-semibold text-[var(--bs-text-primary)]">
          <span className="relative z-[3]">{afterLabel}</span>
        </span>

        {/* Divider line + handle */}
        <div
          aria-hidden="true"
          style={{ left: `${splitPercent}%` }}
          className="pointer-events-none absolute inset-y-0 z-20 -translate-x-1/2"
        >
          <div className="h-full w-0.5 bg-[var(--bs-accent)] shadow-[0_0_12px_rgba(250,204,21,0.8)]" />
          <div className="absolute top-1/2 left-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[var(--bs-accent)] text-[var(--bs-accent-ink)] shadow-lg ring-2 ring-white/80">
            <MoveHorizontal className="h-4 w-4" />
          </div>
        </div>
      </div>

      <p className="mt-2.5 text-center text-xs font-medium text-[var(--bs-text-muted)]">{hint}</p>
    </div>
  );
}
