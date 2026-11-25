import { Check, Info, Laptop, Smartphone, Tablet } from 'lucide-react';
import { useMemo, useRef, useState } from 'react';
import { APPLE_EASE, gsap, prefersReducedMotion, useGSAP } from '@/animations/gsapConfig';
import { ScrollReveal } from '@/animations/ScrollReveal';
import { IPadFrame } from '@/components/devices/IPadFrame';
import { IPhoneFrame } from '@/components/devices/IPhoneFrame';
import { MacWindow } from '@/components/devices/MacWindow';
import { GlassSegmentedControl, type SegmentedOption } from '@/components/ui/GlassSegmentedControl';
import { LiquidGlassCard } from '@/components/ui/LiquidGlassCard';
import { LiquidGlassPanel } from '@/components/ui/LiquidGlassPanel';
import { ScreenshotPlaceholder } from '@/components/ui/ScreenshotPlaceholder';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { useLanguage } from '@/hooks/useLanguage';
import type { EcosystemPlatformId } from '@/types';
import { cn } from '@/utils/cn';

const PLATFORM_ICONS = {
  iphone: Smartphone,
  ipad: Tablet,
  mac: Laptop,
} as const;

export function EcosystemSection() {
  const { t } = useLanguage();
  const eco = t.ecosystem;
  const [selectedId, setSelectedId] = useState<EcosystemPlatformId>('ipad');
  const stageRef = useRef<HTMLDivElement>(null);

  const selected = eco.platforms.find((p) => p.id === selectedId) ?? eco.platforms[0];

  const options: SegmentedOption<EcosystemPlatformId>[] = useMemo(
    () =>
      eco.platforms.map((platform) => {
        const Icon = PLATFORM_ICONS[platform.id];
        return {
          value: platform.id,
          label: platform.tabLabel,
          icon: <Icon className="h-3.5 w-3.5" aria-hidden="true" />,
        };
      }),
    [eco.platforms],
  );

  useGSAP(
    () => {
      const stage = stageRef.current;
      if (!stage || prefersReducedMotion()) {
        return;
      }
      gsap.fromTo(
        stage,
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
    { scope: stageRef, dependencies: [selectedId] },
  );

  if (!selected) {
    return null;
  }

  return (
    <section
      id="ecosystem"
      aria-labelledby="ecosystem-heading"
      className="border-t border-[var(--bs-border-subtle)] bg-[var(--bs-surface)] py-20 sm:py-28"
    >
      <div className="bs-container">
        <div id="ecosystem-heading">
          <SectionHeading eyebrow={eco.eyebrow} title={eco.headline} subtitle={eco.subtitle} />
        </div>

        {/* Liquid Glass platform switcher */}
        <div className="mt-10 flex justify-center">
          <div className="max-w-full overflow-x-auto pb-1">
            <GlassSegmentedControl
              options={options}
              value={selected.id}
              onChange={setSelectedId}
              ariaLabel={eco.selectorLabel}
              className="whitespace-nowrap"
            />
          </div>
        </div>

        {/* Synchronized device preview stage */}
        <div
          ref={stageRef}
          className="mt-10 grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-10 xl:gap-14"
        >
          <div className="lg:col-span-5 xl:col-span-4">
            <LiquidGlassCard variant="elevated" elevateOnHover={false} rounded="xl">
              <span className="inline-flex rounded-full bg-[var(--bs-badge-bg)] px-3 py-1 text-xs font-semibold text-[var(--bs-badge-text)] ring-1 ring-[var(--bs-badge-border)]">
                {selected.deviceTag}
              </span>

              <h3 className="mt-4 text-2xl font-semibold tracking-tight text-[var(--bs-text-primary)] sm:text-3xl">
                {selected.roleTitle}
              </h3>

              <p className="bs-prose mt-3 text-[15px] leading-relaxed text-[var(--bs-text-muted)]">
                {selected.summary}
              </p>

              <ul className="mt-5 space-y-2 border-t border-[var(--bs-border-subtle)] pt-4">
                {selected.capabilities.map((cap) => (
                  <li
                    key={cap}
                    className="flex items-start gap-2.5 text-sm text-[var(--bs-text-primary)]"
                  >
                    <Check
                      className="mt-0.5 h-4 w-4 shrink-0 text-[var(--bs-accent-text)]"
                      aria-hidden="true"
                    />
                    <span>{cap}</span>
                  </li>
                ))}
              </ul>

              {selected.note && (
                <div className="mt-5 flex items-start gap-2 rounded-[var(--bs-radius-sm)] border border-dashed border-[var(--bs-border-strong)] bg-[var(--bs-surface-subtle)]/75 p-3 text-xs leading-relaxed text-[var(--bs-text-muted)]">
                  <Info
                    className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--bs-accent-text)]"
                    aria-hidden="true"
                  />
                  <p className="bs-prose">{selected.note}</p>
                </div>
              )}
            </LiquidGlassCard>
          </div>

          <div className="lg:col-span-7 xl:col-span-8">
            <LiquidGlassPanel
              variant="subtle"
              refraction
              rounded="xl"
              className="p-6 sm:p-8 xl:p-10"
            >
              {selected.id === 'iphone' ? (
                <div className="py-2">
                  <IPhoneFrame
                    className="max-w-[300px] xl:max-w-[340px]"
                    label={t.hero.iphoneLabel}
                  >
                    <ScreenshotPlaceholder screenshotId={selected.screenshotId} />
                  </IPhoneFrame>
                </div>
              ) : selected.id === 'ipad' ? (
                <div className="py-2">
                  <IPadFrame className="max-w-[760px]" label={t.hero.ipadLabel}>
                    <ScreenshotPlaceholder screenshotId={selected.screenshotId} />
                  </IPadFrame>
                </div>
              ) : (
                <MacWindow title={t.hero.macLabel} badge="macOS">
                  <ScreenshotPlaceholder screenshotId={selected.screenshotId} />
                </MacWindow>
              )}
            </LiquidGlassPanel>
          </div>
        </div>

        {/* All three platforms overview cards */}
        <ScrollReveal
          staggerSelector="[data-eco-card]"
          stagger={0.08}
          y={22}
          className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3 lg:gap-7"
        >
          {eco.platforms.map((platform) => {
            const Icon = PLATFORM_ICONS[platform.id];
            const isSelected = platform.id === selected.id;
            return (
              <button
                key={platform.id}
                data-eco-card
                type="button"
                onClick={() => setSelectedId(platform.id)}
                className={cn(
                  'surface-card flex h-full cursor-pointer flex-col justify-between rounded-[var(--bs-radius-lg)] p-6 text-left transition-all',
                  isSelected
                    ? 'border-[var(--bs-accent)] ring-1 ring-[var(--bs-accent)]/55'
                    : 'hover:border-[var(--bs-border-strong)]',
                )}
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--bs-badge-bg)] text-[var(--bs-badge-text)]">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="font-mono text-[11px] font-medium text-[var(--bs-text-muted)]">
                      {platform.deviceTag}
                    </span>
                  </div>
                  <h4 className="mt-4 text-lg font-semibold text-[var(--bs-text-primary)]">
                    {platform.roleTitle}
                  </h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-[var(--bs-text-muted)]">
                    {platform.summary}
                  </p>
                </div>
              </button>
            );
          })}
        </ScrollReveal>
      </div>
    </section>
  );
}
