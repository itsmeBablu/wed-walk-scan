import {
  Archive,
  Box,
  Camera,
  Cpu,
  FileCode2,
  FileSpreadsheet,
  FileText,
  Layers,
  Ruler,
} from 'lucide-react';
import { LiquidGlassCard } from '@/components/ui/LiquidGlassCard';
import { useLanguage } from '@/hooks/useLanguage';
import type { ExportExplorerFormatItem } from '@/types';

const CATEGORY_ICON_MAP = {
  'floor-plans': Ruler,
  'models-3d': Box,
  'bim-cad': Layers,
  photos: Camera,
  'technical-rooms': Cpu,
  'design-studio': FileCode2,
  'reports-notes': FileSpreadsheet,
  archives: Archive,
} as const;

interface ExportFormatCardProps {
  item: ExportExplorerFormatItem;
}

export function ExportFormatCard({ item }: ExportFormatCardProps) {
  const { t } = useLanguage();
  const Icon = CATEGORY_ICON_MAP[item.category] ?? FileText;

  return (
    <div data-export-card className="h-full">
      <LiquidGlassCard variant="elevated" rounded="lg" className="flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between gap-2">
            <span className="inline-flex items-center gap-2 rounded-full bg-[var(--bs-badge-bg)] px-3 py-1 font-mono text-xs font-bold text-[var(--bs-badge-text)] ring-1 ring-[var(--bs-badge-border)]">
              <Icon className="h-3.5 w-3.5" aria-hidden="true" />
              {item.extension}
            </span>
            <span className="text-[11px] font-medium text-[var(--bs-text-muted)]">
              {t.deliverables.explorer.categoryLabels[item.category]}
            </span>
          </div>

          <h3 className="mt-4 text-lg font-semibold tracking-tight text-[var(--bs-text-primary)]">
            {item.name}
          </h3>

          <p className="bs-prose mt-2 text-sm leading-relaxed text-[var(--bs-text-muted)]">
            {item.purpose}
          </p>

          <div className="mt-4 space-y-2 border-t border-[var(--bs-border-subtle)] pt-3.5 text-xs">
            <div>
              <span className="font-semibold text-[var(--bs-text-primary)]">
                {t.deliverables.explorer.workflowsLabel}:{' '}
              </span>
              <span className="text-[var(--bs-text-muted)]">{item.workflows.join(' · ')}</span>
            </div>

            <div>
              <span className="font-semibold text-[var(--bs-text-primary)]">
                {t.deliverables.explorer.useCaseLabel}:{' '}
              </span>
              <span className="text-[var(--bs-text-muted)]">{item.professionalUse}</span>
            </div>
          </div>
        </div>

        <div className="mt-4 border-t border-[var(--bs-border-subtle)] pt-3.5">
          <p className="text-[10px] font-semibold tracking-wider text-[var(--bs-text-muted)] uppercase">
            {t.deliverables.explorer.compatibleLabel}
          </p>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {item.compatibleTools.map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-[var(--bs-border-subtle)] bg-[var(--bs-surface)] px-2.5 py-0.5 text-[11px] font-medium text-[var(--bs-text-primary)]"
              >
                {tool}
              </span>
            ))}
          </div>

          {item.caveat && (
            <p className="mt-2.5 text-[11px] leading-relaxed text-[var(--bs-accent-text)]">
              {item.caveat}
            </p>
          )}
        </div>
      </LiquidGlassCard>
    </div>
  );
}
