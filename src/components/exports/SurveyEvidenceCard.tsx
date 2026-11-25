import { Camera, Compass, MapPin } from 'lucide-react';
import { LiquidGlassCard } from '@/components/ui/LiquidGlassCard';
import { ScreenshotPlaceholder } from '@/components/ui/ScreenshotPlaceholder';

interface SurveyEvidenceCardProps {
  markerLabel: string;
  roomLabel: string;
  coords: string;
  pose: string;
  archivePath?: string;
  screenshotId?: string;
  compact?: boolean;
}

export function SurveyEvidenceCard({
  markerLabel,
  roomLabel,
  coords,
  pose,
  archivePath,
  screenshotId = 'export-spatial-photo',
  compact = false,
}: SurveyEvidenceCardProps) {
  return (
    <LiquidGlassCard variant="elevated" rounded="lg" elevateOnHover={false} className="p-4 sm:p-5">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--bs-badge-bg)] px-2.5 py-0.5 text-[11px] font-semibold text-[var(--bs-badge-text)]">
          <Camera className="h-3 w-3" aria-hidden="true" />
          {markerLabel}
        </span>

        {archivePath && (
          <span className="truncate font-mono text-[10px] text-[var(--bs-text-muted)]">
            {archivePath}
          </span>
        )}
      </div>

      {!compact && (
        <div className="mt-3.5 overflow-hidden rounded-[var(--bs-radius-md)] border border-[var(--bs-border-subtle)]">
          <ScreenshotPlaceholder screenshotId={screenshotId} />
        </div>
      )}

      <p className="mt-3 text-sm font-semibold text-[var(--bs-text-primary)]">{roomLabel}</p>

      <div className="mt-2 space-y-1 font-mono text-[11px] text-[var(--bs-text-muted)]">
        <p className="flex items-center gap-1.5">
          <MapPin
            className="h-3.5 w-3.5 shrink-0 text-[var(--bs-accent-text)]"
            aria-hidden="true"
          />
          <span>{coords}</span>
        </p>
        <p className="flex items-center gap-1.5">
          <Compass
            className="h-3.5 w-3.5 shrink-0 text-[var(--bs-accent-text)]"
            aria-hidden="true"
          />
          <span>{pose}</span>
        </p>
      </div>
    </LiquidGlassCard>
  );
}
