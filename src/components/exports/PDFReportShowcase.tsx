import { Check, FileText, Info } from 'lucide-react';
import { useRef, useState } from 'react';
import { APPLE_EASE, gsap, prefersReducedMotion, useGSAP } from '@/animations/gsapConfig';
import { ScrollReveal } from '@/animations/ScrollReveal';
import { LiquidGlassPanel } from '@/components/ui/LiquidGlassPanel';
import { ScreenshotPlaceholder } from '@/components/ui/ScreenshotPlaceholder';
import { useLanguage } from '@/hooks/useLanguage';
import { cn } from '@/utils/cn';

export function PDFReportShowcase() {
  const { t } = useLanguage();
  const pdf = t.deliverables.pdfReports;
  const [activePageIdx, setActivePageIdx] = useState(0);
  const stackRef = useRef<HTMLDivElement>(null);

  const activePage = pdf.pages[activePageIdx] ?? pdf.pages[0];

  useGSAP(
    () => {
      const stack = stackRef.current;
      if (!stack || prefersReducedMotion()) {
        return;
      }
      gsap.fromTo(
        stack,
        { opacity: 0.6, y: 12, scale: 0.985 },
        { opacity: 1, y: 0, scale: 1, duration: 0.36, ease: APPLE_EASE, clearProps: 'transform' },
      );
    },
    { scope: stackRef, dependencies: [activePageIdx] },
  );

  if (!activePage) {
    return null;
  }

  return (
    <ScrollReveal y={26}>
      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-10 xl:gap-14">
        <div className="space-y-6 lg:col-span-5 xl:col-span-4">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--bs-badge-bg)] px-3.5 py-1 text-xs font-semibold tracking-wider text-[var(--bs-badge-text)] uppercase ring-1 ring-[var(--bs-badge-border)]">
              <FileText className="h-3.5 w-3.5" aria-hidden="true" />
              {pdf.eyebrow}
            </span>
            <h3 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--bs-text-primary)] sm:text-4xl">
              {pdf.headline}
            </h3>
            <p className="bs-prose mt-3 text-[15px] leading-relaxed text-[var(--bs-text-muted)]">
              {pdf.subtitle}
            </p>
          </div>

          {/* Clickable stacked report pages */}
          <div className="space-y-2">
            {pdf.pages.map((page, idx) => {
              const selected = idx === activePageIdx;
              return (
                <button
                  key={page.id}
                  type="button"
                  onClick={() => setActivePageIdx(idx)}
                  className={cn(
                    'w-full cursor-pointer rounded-[var(--bs-radius-md)] p-3.5 text-left transition-all',
                    selected
                      ? 'liquid-glass liquid-glass--elevated'
                      : 'border border-[var(--bs-border-subtle)] bg-[var(--bs-surface)] hover:border-[var(--bs-border-strong)]',
                  )}
                >
                  <div className="relative z-[3] flex items-center justify-between gap-2">
                    <span className="text-sm font-semibold text-[var(--bs-text-primary)]">
                      {page.title}
                    </span>
                    <span className="font-mono text-[11px] font-semibold text-[var(--bs-accent-text)]">
                      P.0{idx + 1}
                    </span>
                  </div>
                  <p className="relative z-[3] mt-1 text-xs text-[var(--bs-text-muted)]">
                    {page.summary}
                  </p>
                </button>
              );
            })}
          </div>

          <ul className="space-y-1.5 text-xs text-[var(--bs-text-primary)] sm:text-[13px]">
            {pdf.contents.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <Check
                  className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--bs-accent-text)]"
                  aria-hidden="true"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Stacked PDF report document presentation */}
        <div className="lg:col-span-7 xl:col-span-8">
          <div className="relative mx-auto max-w-[min(100%,560px)] pt-6 pr-4 pb-4 2xl:max-w-[640px]">
            {/* Background stacked page layers */}
            <div
              aria-hidden="true"
              className="surface-card absolute top-2 right-0 left-6 h-full rounded-[var(--bs-radius-lg)] opacity-55"
            />
            <div
              aria-hidden="true"
              className="surface-card absolute top-4 right-2 left-3 h-full rounded-[var(--bs-radius-lg)] opacity-75"
            />

            <div ref={stackRef} className="relative z-10 will-change-transform">
              <LiquidGlassPanel variant="elevated" rounded="lg" className="p-4 sm:p-5">
                <div className="mb-3 flex items-center justify-between gap-2">
                  <span className="font-mono text-xs font-semibold text-[var(--bs-accent-text)]">
                    project-report.pdf · {activePage.title}
                  </span>
                </div>
                <div className="overflow-hidden rounded-[var(--bs-radius-md)] border border-[var(--bs-border-subtle)]">
                  <ScreenshotPlaceholder screenshotId={activePage.screenshotId} />
                </div>
              </LiquidGlassPanel>
            </div>
          </div>

          <div className="mt-6 flex items-start gap-2.5 rounded-[var(--bs-radius-md)] border border-dashed border-[var(--bs-border-strong)] bg-[var(--bs-surface-subtle)]/75 p-4 text-xs leading-relaxed text-[var(--bs-text-muted)]">
            <Info
              className="mt-0.5 h-4 w-4 shrink-0 text-[var(--bs-accent-text)]"
              aria-hidden="true"
            />
            <p>{pdf.sampleNote}</p>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
