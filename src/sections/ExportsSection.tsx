import { Check, Layers, Ruler } from 'lucide-react';
import { useRef } from 'react';
import { gsap, useGSAP } from '@/animations/gsapConfig';
import { ScrollReveal } from '@/animations/ScrollReveal';
import { MacWindow } from '@/components/devices/MacWindow';
import { BIMWorkflow } from '@/components/exports/BIMWorkflow';
import { BeforeAfterComparison } from '@/components/exports/BeforeAfterComparison';
import { ExportFormatExplorer } from '@/components/exports/ExportFormatExplorer';
import { LiquidGlassCard } from '@/components/ui/LiquidGlassCard';
import { ScreenshotPlaceholder } from '@/components/ui/ScreenshotPlaceholder';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { useLanguage } from '@/hooks/useLanguage';

export function ExportsSection() {
  const { t } = useLanguage();
  const d = t.deliverables;
  const modelStageRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const stage = modelStageRef.current;
      if (!stage) {
        return;
      }

      const mm = gsap.matchMedia();
      mm.add(
        '(min-width: 1024px) and (hover: hover) and (prefers-reduced-motion: no-preference)',
        () => {
          gsap.fromTo(
            stage,
            { rotateX: 5, scale: 0.94, y: 24 },
            {
              rotateX: 0,
              scale: 1,
              y: 0,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: stage,
                start: 'top 84%',
                end: 'top 30%',
                scrub: 0.5,
              },
            },
          );
        },
      );

      return () => mm.revert();
    },
    { scope: modelStageRef },
  );

  return (
    <section
      id="exports"
      aria-labelledby="exports-heading"
      className="border-t border-[var(--bs-border-subtle)] bg-[var(--bs-bg-page)] py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl space-y-24 px-5 sm:px-8 sm:space-y-32">
        {/* 28. Comprehensive Export Showcase + 39. Interactive Explorer */}
        <div>
          <div id="exports-heading">
            <SectionHeading
              eyebrow={d.showcase.eyebrow}
              title={d.showcase.headline}
              subtitle={d.showcase.subtitle}
            />
          </div>

          <div className="mt-16">
            <ExportFormatExplorer />
          </div>
        </div>

        {/* 29. Floor Plans & Architectural Drawings */}
        <ScrollReveal y={26}>
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-10">
            <div className="space-y-6 lg:col-span-5">
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--bs-badge-bg)] px-3.5 py-1 text-xs font-semibold tracking-wider text-[var(--bs-badge-text)] uppercase ring-1 ring-[var(--bs-badge-border)]">
                  <Ruler className="h-3.5 w-3.5" aria-hidden="true" />
                  {d.floorPlans.eyebrow}
                </span>
                <h3 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--bs-text-primary)] sm:text-4xl">
                  {d.floorPlans.headline}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-[var(--bs-text-muted)]">
                  {d.floorPlans.subtitle}
                </p>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {d.floorPlans.formats.map((fmt) => (
                  <LiquidGlassCard key={fmt.ext} variant="subtle" rounded="md" className="p-4">
                    <span className="rounded-full bg-[var(--bs-badge-bg)] px-2.5 py-0.5 font-mono text-[11px] font-bold text-[var(--bs-badge-text)]">
                      {fmt.ext}
                    </span>
                    <p className="mt-2 text-sm font-semibold text-[var(--bs-text-primary)]">
                      {fmt.title}
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-[var(--bs-text-muted)]">
                      {fmt.detail}
                    </p>
                  </LiquidGlassCard>
                ))}
              </div>

              <ul className="space-y-2 text-sm text-[var(--bs-text-primary)]">
                {d.floorPlans.capabilities.map((cap) => (
                  <li key={cap} className="flex items-start gap-2.5">
                    <Check
                      className="mt-0.5 h-4 w-4 shrink-0 text-[var(--bs-accent-text)]"
                      aria-hidden="true"
                    />
                    <span>{cap}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-7">
              <div className="overflow-hidden rounded-[var(--bs-radius-lg)] border border-[var(--bs-border-strong)] bg-[var(--bs-surface)] shadow-xl">
                <ScreenshotPlaceholder screenshotId="export-floorplan-multi" />
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* 30. 3D Models & Mesh Exports */}
        <div>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full bg-[var(--bs-badge-bg)] px-3.5 py-1 text-xs font-semibold tracking-wider text-[var(--bs-badge-text)] uppercase ring-1 ring-[var(--bs-badge-border)]">
              {d.models3d.eyebrow}
            </span>
            <h3 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--bs-text-primary)] sm:text-4xl">
              {d.models3d.headline}
            </h3>
            <p className="mt-3 text-base leading-relaxed text-[var(--bs-text-muted)]">
              {d.models3d.subtitle}
            </p>
          </div>

          <div
            ref={modelStageRef}
            style={{ perspective: 1200 }}
            className="mt-10 will-change-transform"
          >
            <MacWindow darkChrome title="dWalkScan 3D Model Export" badge="USDZ · OBJ · STL · PLY">
              <ScreenshotPlaceholder darkSurface screenshotId="export-3d-mesh" />
            </MacWindow>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {d.models3d.formats.map((fmt) => (
              <LiquidGlassCard key={fmt.ext} variant="elevated" rounded="md" className="p-5">
                <span className="rounded-full bg-[var(--bs-accent)] px-2.5 py-0.5 font-mono text-xs font-bold text-[var(--bs-accent-ink)]">
                  {fmt.ext}
                </span>
                <h4 className="mt-3 text-base font-semibold text-[var(--bs-text-primary)]">
                  {fmt.title}
                </h4>
                <p className="mt-1.5 text-xs leading-relaxed text-[var(--bs-text-muted)]">
                  {fmt.detail}
                </p>
              </LiquidGlassCard>
            ))}
          </div>

          <div className="surface-card mt-8 rounded-[var(--bs-radius-lg)] p-6 sm:p-8">
            <p className="text-sm font-semibold text-[var(--bs-text-primary)]">
              {d.models3d.distinctionTitle}
            </p>
            <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
              {d.models3d.sources.map((src) => (
                <div
                  key={src.title}
                  className="rounded-[var(--bs-radius-md)] border border-[var(--bs-border-subtle)] bg-[var(--bs-bg-page)] p-4"
                >
                  <span className="rounded-full bg-[var(--bs-badge-bg)] px-2.5 py-0.5 text-[10px] font-semibold text-[var(--bs-badge-text)] uppercase">
                    {src.badge}
                  </span>
                  <h5 className="mt-2.5 text-sm font-semibold text-[var(--bs-text-primary)]">
                    {src.title}
                  </h5>
                  <p className="mt-1 text-xs leading-relaxed text-[var(--bs-text-muted)]">
                    {src.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 31. BIM & Engineering Exports */}
        <BIMWorkflow />

        {/* 36. Design Studio Exports & Before/After Slider */}
        <ScrollReveal y={26}>
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-10">
            <div className="space-y-6 lg:col-span-5">
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--bs-badge-bg)] px-3.5 py-1 text-xs font-semibold tracking-wider text-[var(--bs-badge-text)] uppercase ring-1 ring-[var(--bs-badge-border)]">
                  <Layers className="h-3.5 w-3.5" aria-hidden="true" />
                  {d.studioExports.eyebrow}
                </span>
                <h3 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--bs-text-primary)] sm:text-4xl">
                  {d.studioExports.headline}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-[var(--bs-text-muted)]">
                  {d.studioExports.subtitle}
                </p>
              </div>

              <ul className="space-y-2 text-sm text-[var(--bs-text-primary)]">
                {d.studioExports.formats.map((fmt) => (
                  <li key={fmt} className="flex items-start gap-2.5">
                    <Check
                      className="mt-0.5 h-4 w-4 shrink-0 text-[var(--bs-accent-text)]"
                      aria-hidden="true"
                    />
                    <span>{fmt}</span>
                  </li>
                ))}
              </ul>

              <p className="rounded-[var(--bs-radius-md)] border border-[var(--bs-badge-border)] bg-[var(--bs-badge-bg)] px-4 py-3 text-xs leading-relaxed text-[var(--bs-badge-text)]">
                {d.studioExports.isolationNote}
              </p>
            </div>

            <div className="lg:col-span-7">
              <BeforeAfterComparison
                beforeScreenshotId="export-studio-before"
                afterScreenshotId="export-studio-after"
                beforeLabel={d.studioExports.beforeLabel}
                afterLabel={d.studioExports.afterLabel}
                hint={d.studioExports.sliderHint}
              />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
