import { Calculator, Check } from 'lucide-react';
import { useMemo, useState } from 'react';
import { ScrollReveal } from '@/animations/ScrollReveal';
import { GlassSegmentedControl, type SegmentedOption } from '@/components/ui/GlassSegmentedControl';
import { LiquidGlassCard } from '@/components/ui/LiquidGlassCard';
import { useLanguage } from '@/hooks/useLanguage';

type WastePercent = '0' | '5' | '10' | '15' | '20';

const WASTE_OPTIONS: readonly SegmentedOption<WastePercent>[] = [
  { value: '0', label: '+0%' },
  { value: '5', label: '+5%' },
  { value: '10', label: '+10%' },
  { value: '15', label: '+15%' },
  { value: '20', label: '+20%' },
];

export function QuantityShowcase() {
  const { t, language } = useLanguage();
  const q = t.deliverables.quantities;
  const [waste, setWaste] = useState<WastePercent>('10');

  const computed = useMemo(() => {
    const factor = 1 + Number(waste) / 100;
    const baseFloor = 24.6;
    const baseWallNet = 52.4;
    const fmt = (val: number) =>
      val.toLocaleString(language === 'de' ? 'de-DE' : 'en-US', {
        minimumFractionDigits: 1,
        maximumFractionDigits: 1,
      });

    return {
      flooring: `${fmt(baseFloor * factor)} m²`,
      paint: `${fmt(baseWallNet * factor)} m²`,
      perimeter: language === 'de' ? '20,4 m' : '20.4 m',
      volume: language === 'de' ? '61,5 – 64,0 m³' : '61.5 – 64.0 m³',
      openings: '1 / 2',
    };
  }, [language, waste]);

  return (
    <ScrollReveal y={26} className="mt-12">
      <LiquidGlassCard
        variant="elevated"
        rounded="xl"
        elevateOnHover={false}
        className="p-6 sm:p-10"
      >
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10 xl:gap-14">
          <div className="lg:col-span-6">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--bs-badge-bg)] px-3.5 py-1 text-xs font-semibold tracking-wider text-[var(--bs-badge-text)] uppercase ring-1 ring-[var(--bs-badge-border)]">
              <Calculator className="h-3.5 w-3.5" aria-hidden="true" />
              {q.eyebrow}
            </span>

            <h3 className="mt-4 text-2xl font-semibold tracking-tight text-[var(--bs-text-primary)] sm:text-3xl">
              {q.headline}
            </h3>

            <p className="bs-prose mt-3 text-[15px] leading-relaxed text-[var(--bs-text-muted)]">
              {q.subtitle}
            </p>

            <ul className="bs-prose mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-1">
              {q.metrics.map((metric) => (
                <li
                  key={metric}
                  className="flex items-start gap-2.5 text-sm text-[var(--bs-text-primary)]"
                >
                  <Check
                    className="mt-0.5 h-4 w-4 shrink-0 text-[var(--bs-accent-text)]"
                    aria-hidden="true"
                  />
                  <span>{metric}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col justify-between gap-5 lg:col-span-6">
            <div className="surface-card rounded-[var(--bs-radius-lg)] p-5 sm:p-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="text-sm font-semibold text-[var(--bs-text-primary)]">
                  {q.sampleRoomName}
                </p>
                <span className="rounded-full bg-[var(--bs-badge-bg)] px-2.5 py-0.5 font-mono text-[11px] font-semibold text-[var(--bs-badge-text)]">
                  quantities.csv
                </span>
              </div>

              <div className="mt-4">
                <p className="mb-2 text-xs font-semibold tracking-wider text-[var(--bs-text-muted)] uppercase">
                  {q.wasteLabel}
                </p>
                <GlassSegmentedControl
                  options={WASTE_OPTIONS}
                  value={waste}
                  onChange={setWaste}
                  ariaLabel={q.wasteLabel}
                  size="sm"
                />
              </div>

              <dl className="mt-5 space-y-2.5 border-t border-[var(--bs-border-subtle)] pt-4 text-sm">
                <div className="flex items-center justify-between gap-4">
                  <dt className="text-[var(--bs-text-muted)]">{q.floorBaseLabel}</dt>
                  <dd className="font-mono font-semibold text-[var(--bs-accent-text)]">
                    {computed.flooring}
                  </dd>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <dt className="text-[var(--bs-text-muted)]">{q.wallNetLabel}</dt>
                  <dd className="font-mono font-semibold text-[var(--bs-accent-text)]">
                    {computed.paint}
                  </dd>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <dt className="text-[var(--bs-text-muted)]">{q.perimeterLabel}</dt>
                  <dd className="font-mono font-medium text-[var(--bs-text-primary)]">
                    {computed.perimeter}
                  </dd>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <dt className="text-[var(--bs-text-muted)]">{q.volumeRangeLabel}</dt>
                  <dd className="font-mono font-medium text-[var(--bs-text-primary)]">
                    {computed.volume}
                  </dd>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <dt className="text-[var(--bs-text-muted)]">{q.openingsLabel}</dt>
                  <dd className="font-mono font-medium text-[var(--bs-text-primary)]">
                    {computed.openings}
                  </dd>
                </div>
              </dl>
            </div>

            <p className="text-xs leading-relaxed text-[var(--bs-text-muted)]">
              {q.visionConnection}
            </p>
          </div>
        </div>
      </LiquidGlassCard>
    </ScrollReveal>
  );
}
