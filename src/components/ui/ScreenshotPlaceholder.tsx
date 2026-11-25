import { Camera, Layers, ScanLine, Smartphone } from 'lucide-react';
import { useState } from 'react';
import { SCREENSHOT_CONFIG } from '@/data/screenshots';
import { useLanguage } from '@/hooks/useLanguage';
import { isScreenshotAvailable, resolvePublicAsset } from '@/utils/assets';
import { cn } from '@/utils/cn';

interface ScreenshotPlaceholderProps {
  screenshotId: string;
  priority?: boolean;
  darkSurface?: boolean;
  className?: string;
}

export function ScreenshotPlaceholder({
  screenshotId,
  priority = false,
  darkSurface = false,
  className,
}: ScreenshotPlaceholderProps) {
  const { t } = useLanguage();
  const [failedLoad, setFailedLoad] = useState(false);

  const entry = SCREENSHOT_CONFIG[screenshotId];
  if (!entry) {
    return null;
  }

  const meta = t.screenshots[entry.i18nKey];
  const hasRealAsset = !failedLoad && isScreenshotAvailable(entry.path);

  const CategoryIcon =
    entry.category === 'iphone'
      ? Smartphone
      : entry.category === 'floorplans'
        ? Layers
        : entry.category === 'technical'
          ? ScanLine
          : Camera;

  return (
    <div
      style={{ aspectRatio: entry.aspectRatio }}
      className={cn(
        'relative w-full overflow-hidden rounded-[inherit] select-none',
        darkSurface
          ? 'bg-[#111110] text-[#FAFAF7]'
          : 'bg-[var(--bs-surface-subtle)] text-[var(--bs-text-primary)]',
        className,
      )}
    >
      {hasRealAsset ? (
        <img
          src={resolvePublicAsset(entry.path)}
          alt={meta.alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          onError={() => setFailedLoad(true)}
          className="h-full w-full object-cover object-top"
        />
      ) : (
        <div
          role="img"
          aria-label={meta.alt}
          className="blueprint-grid relative flex h-full w-full flex-col items-center justify-center p-4 text-center sm:p-6"
        >
          {/* Subtle architectural schematic vectors — never pretends to be a real screenshot */}
          <svg
            aria-hidden="true"
            viewBox="0 0 400 260"
            fill="none"
            className="pointer-events-none absolute inset-0 h-full w-full opacity-35"
          >
            <rect
              x="44"
              y="38"
              width="312"
              height="184"
              rx="10"
              stroke="currentColor"
              strokeOpacity="0.18"
              strokeWidth="1.2"
              strokeDasharray="6 6"
            />
            <path
              d="M44 130H180M220 130H356M200 38V110M200 150V222"
              stroke="#facc15"
              strokeOpacity="0.42"
              strokeWidth="1"
            />
            <circle
              cx="200"
              cy="130"
              r="24"
              stroke="#facc15"
              strokeOpacity="0.52"
              strokeWidth="1.2"
            />
          </svg>

          <div
            className={cn(
              'liquid-glass relative z-[3] flex max-w-[340px] flex-col items-center rounded-[var(--bs-radius-md)] px-4 py-4 sm:px-5 sm:py-5',
              darkSurface && '!bg-[#272000]/75 !text-white',
            )}
          >
            <div className="relative z-[3] flex flex-col items-center">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--bs-badge-bg)] px-2.5 py-1 text-[11px] font-semibold tracking-wider text-[var(--bs-badge-text)] uppercase ring-1 ring-[var(--bs-badge-border)]">
                <CategoryIcon className="h-3.5 w-3.5" aria-hidden="true" />
                {t.screenshotFallback.badge}
              </span>

              <p className="mt-2.5 text-sm font-semibold tracking-tight sm:text-[15px]">
                {meta.title}
              </p>
              <p
                className={cn(
                  'mt-1 text-xs leading-relaxed',
                  darkSurface ? 'text-white/75' : 'text-[var(--bs-text-muted)]',
                )}
              >
                {meta.subtitle}
              </p>

              <div
                className={cn(
                  'mt-3 flex flex-wrap items-center justify-center gap-1.5 font-mono text-[10px]',
                  darkSurface ? 'text-white/65' : 'text-[var(--bs-text-muted)]',
                )}
              >
                <span className="rounded bg-black/5 px-2 py-0.5 dark:bg-white/10">
                  {t.screenshotFallback.dropHint} public/{entry.path}
                </span>
                <span className="rounded bg-black/5 px-2 py-0.5 dark:bg-white/10">
                  {t.screenshotFallback.ratioLabel}: {entry.aspectRatio}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
