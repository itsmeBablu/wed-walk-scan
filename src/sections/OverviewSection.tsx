import { Check } from 'lucide-react';
import { useCallback, useRef, useState } from 'react';
import { APPLE_EASE, gsap, prefersReducedMotion, useGSAP } from '@/animations/gsapConfig';
import { ScrollPinnedShowcase } from '@/animations/ScrollPinnedShowcase';
import { IPhoneFrame } from '@/components/devices/IPhoneFrame';
import { MacWindow } from '@/components/devices/MacWindow';
import { LiquidGlassPanel } from '@/components/ui/LiquidGlassPanel';
import { ScreenshotPlaceholder } from '@/components/ui/ScreenshotPlaceholder';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { useLanguage } from '@/hooks/useLanguage';
import { cn } from '@/utils/cn';

export function OverviewSection() {
  const { t } = useLanguage();
  const stages = t.overview.stages;
  const [activeIndex, setActiveIndex] = useState(0);
  const stagePanelRef = useRef<HTMLDivElement>(null);

  const activeStage = stages[activeIndex] ?? stages[0];

  const handleScrollProgress = useCallback(
    (progress: number) => {
      const nextIdx = Math.min(stages.length - 1, Math.floor(progress * stages.length));
      setActiveIndex((prev) => (prev === nextIdx ? prev : nextIdx));
    },
    [stages.length],
  );

  useGSAP(
    () => {
      const panel = stagePanelRef.current;
      if (!panel || prefersReducedMotion()) {
        return;
      }
      gsap.fromTo(
        panel,
        { opacity: 0.45, y: 14, scale: 0.985 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.42,
          ease: APPLE_EASE,
          clearProps: 'transform',
        },
      );
    },
    { scope: stagePanelRef, dependencies: [activeIndex] },
  );

  if (!activeStage) {
    return null;
  }

  return (
    <section
      id="overview"
      aria-labelledby="overview-heading"
      className="border-t border-[var(--bs-border-subtle)] bg-[var(--bs-surface)] py-20 sm:py-28"
    >
      <div className="bs-container">
        <div id="overview-heading">
          <SectionHeading
            eyebrow={t.overview.eyebrow}
            title={t.overview.title}
            subtitle={t.overview.subtitle}
          />
        </div>

        <ScrollPinnedShowcase
          scrollSpanVh={230}
          pinSelector="[data-overview-pin]"
          onProgress={handleScrollProgress}
          className="mt-14 lg:mt-16"
        >
          <div
            data-overview-pin
            className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-10 xl:gap-14"
          >
            {/* Left workflow selector rail */}
            <div className="space-y-2.5 lg:col-span-5 xl:col-span-4">
              {stages.map((stage, index) => {
                const isActive = index === activeIndex;
                return (
                  <button
                    key={stage.id}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    aria-current={isActive ? 'step' : undefined}
                    className={cn(
                      'w-full cursor-pointer rounded-[var(--bs-radius-md)] p-4 text-left transition-all duration-200',
                      isActive
                        ? 'liquid-glass liquid-glass--elevated'
                        : 'border border-transparent hover:border-[var(--bs-border-subtle)] hover:bg-[var(--bs-bg-page)]',
                    )}
                  >
                    <div className="relative z-[3] flex items-start gap-3.5">
                      <span
                        className={cn(
                          'mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full font-mono text-xs font-semibold transition-colors',
                          isActive
                            ? 'bg-[var(--bs-accent)] text-[var(--bs-accent-ink)]'
                            : 'bg-[var(--bs-surface-subtle)] text-[var(--bs-text-muted)]',
                        )}
                      >
                        {stage.stepNumber}
                      </span>

                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-sm font-semibold tracking-tight text-[var(--bs-text-primary)] sm:text-[15px]">
                            {stage.label}
                          </span>
                          <span className="rounded-full bg-[var(--bs-badge-bg)] px-2.5 py-0.5 text-[10px] font-semibold tracking-wide text-[var(--bs-badge-text)] uppercase ring-1 ring-[var(--bs-badge-border)]">
                            {stage.badge}
                          </span>
                        </div>

                        {isActive && (
                          <div className="mt-2 space-y-2.5">
                            <p className="text-xs leading-relaxed text-[var(--bs-text-muted)] sm:text-[13px]">
                              {stage.description}
                            </p>
                            <ul className="space-y-1.5 pt-1">
                              {stage.highlights.map((highlight) => (
                                <li
                                  key={highlight}
                                  className="flex items-center gap-2 text-xs font-medium text-[var(--bs-text-primary)]"
                                >
                                  <Check
                                    className="h-3.5 w-3.5 shrink-0 text-[var(--bs-accent-text)]"
                                    aria-hidden="true"
                                  />
                                  <span>{highlight}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right stage showcase */}
            <div className="lg:col-span-7 xl:col-span-8">
              <div ref={stagePanelRef} className="will-change-transform">
                <LiquidGlassPanel
                  variant="subtle"
                  refraction
                  rounded="xl"
                  className="p-5 sm:p-8 xl:p-10"
                >
                  <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <span className="font-mono text-xs font-semibold text-[var(--bs-accent-text)]">
                        {activeStage.stepNumber} / 0{stages.length}
                      </span>
                      <h3 className="mt-1 text-xl font-semibold tracking-tight text-[var(--bs-text-primary)] sm:text-2xl">
                        {activeStage.title}
                      </h3>
                    </div>
                  </div>

                  {activeStage.deviceType === 'iphone' ? (
                    <div className="py-2">
                      <IPhoneFrame className="max-w-[290px] xl:max-w-[330px]">
                        <ScreenshotPlaceholder screenshotId={activeStage.screenshotId} />
                      </IPhoneFrame>
                    </div>
                  ) : activeStage.deviceType === 'mac' ? (
                    <MacWindow title={activeStage.label} badge={activeStage.badge}>
                      <ScreenshotPlaceholder screenshotId={activeStage.screenshotId} />
                    </MacWindow>
                  ) : (
                    <div className="overflow-hidden rounded-[var(--bs-radius-md)] border border-[var(--bs-border-strong)] bg-[var(--bs-surface)] shadow-lg">
                      <ScreenshotPlaceholder screenshotId={activeStage.screenshotId} />
                    </div>
                  )}
                </LiquidGlassPanel>
              </div>
            </div>
          </div>
        </ScrollPinnedShowcase>
      </div>
    </section>
  );
}
