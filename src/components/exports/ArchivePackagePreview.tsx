import { Check, Info } from 'lucide-react';
import { useMemo, useState } from 'react';
import { ScrollReveal } from '@/animations/ScrollReveal';
import { AnimatedFileExplorer } from '@/components/exports/AnimatedFileExplorer';
import { GlassSegmentedControl, type SegmentedOption } from '@/components/ui/GlassSegmentedControl';
import { LiquidGlassCard } from '@/components/ui/LiquidGlassCard';
import { ORGANISED_SCAN_TREE, PHOTOS_ONLY_TREE, PROJECT_BUNDLE_TREE } from '@/data/exportCatalog';
import { useLanguage } from '@/hooks/useLanguage';

type ArchiveMode = 'project' | 'organised' | 'photos';

export function ArchivePackagePreview() {
  const { t } = useLanguage();
  const archives = t.deliverables.archives;
  const [mode, setMode] = useState<ArchiveMode>('project');

  const tabOptions: SegmentedOption<ArchiveMode>[] = useMemo(
    () =>
      archives.tabs.map((tab) => ({
        value: tab.id,
        label: tab.label,
      })),
    [archives.tabs],
  );

  const activeTab = archives.tabs.find((tab) => tab.id === mode) ?? archives.tabs[0];

  const activeTree =
    mode === 'project'
      ? PROJECT_BUNDLE_TREE
      : mode === 'organised'
        ? ORGANISED_SCAN_TREE
        : PHOTOS_ONLY_TREE;

  const activeTitle = activeTree[0]?.name ?? 'Archive.zip';

  return (
    <ScrollReveal y={26}>
      <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-10 xl:gap-14">
        <div className="space-y-6 lg:col-span-5 xl:col-span-4">
          <GlassSegmentedControl
            options={tabOptions}
            value={mode}
            onChange={setMode}
            ariaLabel={archives.eyebrow}
            size="sm"
          />

          {activeTab && (
            <LiquidGlassCard variant="elevated" elevateOnHover={false} rounded="lg">
              <h4 className="text-xl font-semibold tracking-tight text-[var(--bs-text-primary)]">
                {activeTab.label}
              </h4>
              <p className="mt-2.5 text-sm leading-relaxed text-[var(--bs-text-muted)]">
                {activeTab.description}
              </p>

              <ul className="mt-5 space-y-2 border-t border-[var(--bs-border-subtle)] pt-4 text-xs text-[var(--bs-text-primary)] sm:text-[13px]">
                {archives.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Check
                      className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--bs-accent-text)]"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </LiquidGlassCard>
          )}

          <div className="flex items-start gap-2.5 rounded-[var(--bs-radius-md)] border border-dashed border-[var(--bs-border-strong)] bg-[var(--bs-surface-subtle)]/75 p-4 text-xs leading-relaxed text-[var(--bs-text-muted)]">
            <Info
              className="mt-0.5 h-4 w-4 shrink-0 text-[var(--bs-accent-text)]"
              aria-hidden="true"
            />
            <p>{archives.packageNote}</p>
          </div>
        </div>

        <div className="lg:col-span-7 xl:col-span-8">
          <AnimatedFileExplorer nodes={activeTree} windowTitle={activeTitle} badge="ZIP Archive" />
        </div>
      </div>
    </ScrollReveal>
  );
}
