import { useMemo, useRef, useState } from 'react';
import { APPLE_EASE, gsap, prefersReducedMotion, useGSAP } from '@/animations/gsapConfig';
import { ExportFormatCard } from '@/components/exports/ExportFormatCard';
import { GlassSegmentedControl, type SegmentedOption } from '@/components/ui/GlassSegmentedControl';
import { EXPORT_EXPLORER_CATEGORIES } from '@/data/exportCatalog';
import { useLanguage } from '@/hooks/useLanguage';
import type { ExportExplorerCategory } from '@/types';

export function ExportFormatExplorer() {
  const { t } = useLanguage();
  const [category, setCategory] = useState<ExportExplorerCategory>('all');
  const gridRef = useRef<HTMLDivElement>(null);

  const options: SegmentedOption<ExportExplorerCategory>[] = useMemo(
    () =>
      EXPORT_EXPLORER_CATEGORIES.map((cat) => ({
        value: cat,
        label: t.deliverables.explorer.categoryLabels[cat],
      })),
    [t.deliverables.explorer.categoryLabels],
  );

  const filteredFormats = useMemo(() => {
    const all = t.deliverables.explorer.formats;
    if (category === 'all') {
      return all;
    }
    return all.filter((item) => item.category === category);
  }, [category, t.deliverables.explorer.formats]);

  useGSAP(
    () => {
      const grid = gridRef.current;
      if (!grid || prefersReducedMotion()) {
        return;
      }
      const cards = grid.querySelectorAll('[data-export-card]');
      if (cards.length === 0) {
        return;
      }
      gsap.fromTo(
        cards,
        { opacity: 0, y: 14, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.34,
          stagger: 0.04,
          ease: APPLE_EASE,
          clearProps: 'transform,opacity',
        },
      );
    },
    { scope: gridRef, dependencies: [category] },
  );

  return (
    <div>
      <div className="mx-auto max-w-3xl text-center">
        <span className="inline-flex rounded-full bg-[var(--bs-badge-bg)] px-3.5 py-1 text-xs font-semibold tracking-wider text-[var(--bs-badge-text)] uppercase ring-1 ring-[var(--bs-badge-border)]">
          {t.deliverables.explorer.eyebrow}
        </span>
        <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[var(--bs-text-primary)] sm:text-3xl">
          {t.deliverables.explorer.title}
        </h3>
        <p className="mt-2.5 text-sm leading-relaxed text-[var(--bs-text-muted)] sm:text-base">
          {t.deliverables.explorer.subtitle}
        </p>
      </div>

      {/* Responsive horizontally scrollable Liquid Glass category pills */}
      <div className="mt-8 flex justify-center">
        <div className="max-w-full overflow-x-auto pb-2">
          <GlassSegmentedControl
            options={options}
            value={category}
            onChange={setCategory}
            ariaLabel={t.deliverables.explorer.eyebrow}
            size="sm"
            className="whitespace-nowrap"
          />
        </div>
      </div>

      <div ref={gridRef} className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {filteredFormats.map((item) => (
          <ExportFormatCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
