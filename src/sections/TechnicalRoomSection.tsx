import { useMemo, useRef, useState } from 'react';
import { APPLE_EASE, gsap, prefersReducedMotion, useGSAP } from '@/animations/gsapConfig';
import { QuantityShowcase } from '@/components/exports/QuantityShowcase';
import { TechnicalDeliverables } from '@/components/exports/TechnicalDeliverables';
import { GlassSegmentedControl, type SegmentedOption } from '@/components/ui/GlassSegmentedControl';
import { LiquidGlassCard } from '@/components/ui/LiquidGlassCard';
import { ParallaxImage } from '@/components/ui/ParallaxImage';
import { ScreenshotPlaceholder } from '@/components/ui/ScreenshotPlaceholder';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { useLanguage } from '@/hooks/useLanguage';

export function TechnicalRoomSection() {
  const { t } = useLanguage();
  const tabs = t.technicalRoom.tabs;
  const [activeTabId, setActiveTabId] = useState(tabs[0]?.id ?? 'floorplans');
  const frameRef = useRef<HTMLDivElement>(null);

  const activeTab = tabs.find((tab) => tab.id === activeTabId) ?? tabs[0];

  const tabOptions: SegmentedOption<string>[] = useMemo(
    () =>
      tabs.map((tab) => ({
        value: tab.id,
        label: tab.label,
      })),
    [tabs],
  );

  useGSAP(
    () => {
      const el = frameRef.current;
      if (!el || prefersReducedMotion()) {
        return;
      }
      gsap.fromTo(
        el,
        { opacity: 0.5, y: 10 },
        { opacity: 1, y: 0, duration: 0.36, ease: APPLE_EASE, clearProps: 'transform' },
      );
    },
    { scope: frameRef, dependencies: [activeTabId] },
  );

  if (!activeTab) {
    return null;
  }

  return (
    <section
      id="technical-room"
      aria-labelledby="technical-room-heading"
      className="border-t border-[var(--bs-border-subtle)] bg-[var(--bs-surface)] py-20 sm:py-28"
    >
      <div className="bs-container">
        <div id="technical-room-heading">
          <SectionHeading
            eyebrow={t.technicalRoom.eyebrow}
            title={t.technicalRoom.title}
            subtitle={t.technicalRoom.subtitle}
          />
        </div>

        <div className="mt-10 flex justify-center">
          <GlassSegmentedControl
            options={tabOptions}
            value={activeTab.id}
            onChange={setActiveTabId}
            ariaLabel={t.technicalRoom.eyebrow}
          />
        </div>

        <div
          ref={frameRef}
          className="mt-10 grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-10 xl:gap-14"
        >
          <div className="lg:col-span-5 xl:col-span-4">
            <LiquidGlassCard variant="elevated" elevateOnHover={false}>
              <span className="inline-flex rounded-full bg-[var(--bs-badge-bg)] px-3 py-1 text-xs font-semibold text-[var(--bs-badge-text)] ring-1 ring-[var(--bs-badge-border)]">
                {activeTab.label}
              </span>

              <h3 className="mt-4 text-2xl font-semibold tracking-tight text-[var(--bs-text-primary)]">
                {activeTab.title}
              </h3>

              <p className="bs-prose mt-3 text-[15px] leading-relaxed text-[var(--bs-text-muted)]">
                {activeTab.description}
              </p>

              <dl className="mt-6 grid grid-cols-1 gap-3 border-t border-[var(--bs-border-subtle)] pt-5 sm:grid-cols-3 lg:grid-cols-1">
                {activeTab.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="flex items-center justify-between gap-4 rounded-[var(--bs-radius-sm)] bg-[var(--bs-surface-subtle)]/70 px-3.5 py-2.5"
                  >
                    <dt className="text-xs font-medium text-[var(--bs-text-muted)]">
                      {metric.label}
                    </dt>
                    <dd className="font-mono text-xs font-semibold text-[var(--bs-text-primary)]">
                      {metric.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </LiquidGlassCard>
          </div>

          <div className="lg:col-span-7 xl:col-span-8">
            <ParallaxImage
              yOffset={18}
              className="rounded-[var(--bs-radius-lg)] border border-[var(--bs-border-strong)] bg-[var(--bs-bg-page)] shadow-[0_24px_60px_-24px_rgba(0,0,0,0.2)]"
            >
              <ScreenshotPlaceholder screenshotId={activeTab.screenshotId} />
            </ParallaxImage>
          </div>
        </div>

        <TechnicalDeliverables />
        <QuantityShowcase />
      </div>
    </section>
  );
}
