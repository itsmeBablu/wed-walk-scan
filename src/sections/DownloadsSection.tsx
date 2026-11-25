import { Check, Download, Info, Laptop, Smartphone, Tablet } from 'lucide-react';
import { useState } from 'react';
import { ScrollReveal } from '@/animations/ScrollReveal';
import { Button } from '@/components/ui/Button';
import { GlassModal } from '@/components/ui/GlassModal';
import { GlassTooltip } from '@/components/ui/GlassTooltip';
import { LiquidGlassButton } from '@/components/ui/LiquidGlassButton';
import { LiquidGlassCard } from '@/components/ui/LiquidGlassCard';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { useLanguage } from '@/hooks/useLanguage';
import type { DownloadOption } from '@/types';

const PLATFORM_ICON_MAP = {
  mac: Laptop,
  ipad: Tablet,
  ios: Smartphone,
} as const;

export function DownloadsSection() {
  const { t } = useLanguage();
  const [activeModalOption, setActiveModalOption] = useState<DownloadOption | null>(null);

  return (
    <section
      id="downloads"
      aria-labelledby="downloads-heading"
      className="relative overflow-hidden border-t border-[var(--bs-border-subtle)] bg-[var(--bs-surface)] py-20 sm:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-0 mx-auto h-[340px] max-w-4xl bg-[radial-gradient(60%_60%_at_50%_100%,rgba(250,204,21,0.14),transparent_70%)]"
      />

      <div className="relative z-[1] mx-auto max-w-6xl px-5 sm:px-8">
        <div id="downloads-heading">
          <SectionHeading
            eyebrow={t.downloads.eyebrow}
            title={t.downloads.title}
            subtitle={t.downloads.subtitle}
          />
        </div>

        <ScrollReveal
          staggerSelector="[data-download-card]"
          stagger={0.1}
          y={26}
          className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-7"
        >
          {t.downloads.options.map((option) => {
            const Icon = PLATFORM_ICON_MAP[option.id];
            return (
              <div key={option.id} data-download-card className="h-full">
                <LiquidGlassCard
                  variant="elevated"
                  rounded="xl"
                  className="flex flex-col justify-between gap-6"
                >
                  <div className="flex flex-1 flex-col">
                    <div className="flex items-center justify-between gap-3">
                      <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[var(--bs-badge-bg)] text-[var(--bs-badge-text)] ring-1 ring-[var(--bs-badge-border)]">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>

                      <GlassTooltip content={t.downloads.specsTooltip}>
                        <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-[var(--bs-border-subtle)] bg-[var(--bs-surface)]/80 px-3 py-1 font-mono text-[11px] font-medium whitespace-nowrap text-[var(--bs-text-muted)]">
                          <Info
                            className="h-3.5 w-3.5 shrink-0 text-[var(--bs-accent-text)]"
                            aria-hidden="true"
                          />
                          <span>
                            {option.version} · {option.size}
                          </span>
                        </span>
                      </GlassTooltip>
                    </div>

                    <p className="mt-6 text-xs font-semibold tracking-wider text-[var(--bs-accent-text)] uppercase">
                      {option.platform}
                    </p>
                    <h3 className="mt-1.5 text-2xl font-semibold tracking-tight text-[var(--bs-text-primary)]">
                      {option.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[var(--bs-text-muted)]">
                      {option.subtitle}
                    </p>

                    <div className="mt-auto flex flex-col items-start gap-2 pt-5">
                      <span className="rounded-full bg-[var(--bs-surface-subtle)] px-3 py-1 text-xs font-medium text-[var(--bs-text-primary)]">
                        {option.osRequirement}
                      </span>
                      <span className="rounded-full bg-[var(--bs-surface-subtle)] px-3 py-1 text-xs font-medium text-[var(--bs-text-muted)]">
                        {option.architecture}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col items-stretch gap-2.5 border-t border-[var(--bs-border-subtle)] pt-5">
                    <LiquidGlassButton onClick={() => setActiveModalOption(option)}>
                      <Download className="h-4 w-4" aria-hidden="true" />
                      {option.ctaLabel}
                    </LiquidGlassButton>

                    <Button variant="ghost" size="sm" onClick={() => setActiveModalOption(option)}>
                      {t.downloads.viewReleaseNotes}
                    </Button>
                  </div>
                </LiquidGlassCard>
              </div>
            );
          })}
        </ScrollReveal>
      </div>

      <GlassModal
        open={activeModalOption !== null}
        onClose={() => setActiveModalOption(null)}
        title={activeModalOption?.releaseNotesTitle ?? ''}
      >
        {activeModalOption && (
          <div className="space-y-5">
            <div className="space-y-2.5">
              {activeModalOption.releaseNotes.map((note) => (
                <div
                  key={note}
                  className="flex items-start gap-2.5 text-sm text-[var(--bs-text-primary)]"
                >
                  <Check
                    className="mt-0.5 h-4 w-4 shrink-0 text-[var(--bs-accent-text)]"
                    aria-hidden="true"
                  />
                  <span>{note}</span>
                </div>
              ))}
            </div>

            <div className="rounded-[var(--bs-radius-md)] border border-[var(--bs-border-subtle)] bg-[var(--bs-surface-subtle)]/75 p-4">
              <ul className="space-y-1.5 text-xs text-[var(--bs-text-muted)]">
                {activeModalOption.requirements.map((req) => (
                  <li key={req}>• {req}</li>
                ))}
              </ul>
            </div>

            <p className="text-xs leading-relaxed text-[var(--bs-text-muted)]">
              {t.downloads.modalNote}
            </p>
          </div>
        )}
      </GlassModal>
    </section>
  );
}
