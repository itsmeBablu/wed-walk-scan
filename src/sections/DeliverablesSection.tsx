import { ShieldCheck } from 'lucide-react';
import { ScrollReveal } from '@/animations/ScrollReveal';
import { ArchivePackagePreview } from '@/components/exports/ArchivePackagePreview';
import { PDFReportShowcase } from '@/components/exports/PDFReportShowcase';
import { LiquidGlassCard } from '@/components/ui/LiquidGlassCard';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { useLanguage } from '@/hooks/useLanguage';

export function DeliverablesSection() {
  const { t } = useLanguage();
  const { archives, privacy } = t.deliverables;

  return (
    <section
      id="deliverables"
      aria-labelledby="deliverables-heading"
      className="border-t border-[var(--bs-border-subtle)] bg-[var(--bs-bg-page)] py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl space-y-24 px-5 sm:px-8 sm:space-y-32">
        {/* 37. Organized Project ZIP Packages */}
        <div>
          <div id="deliverables-heading">
            <SectionHeading
              eyebrow={archives.eyebrow}
              title={archives.headline}
              subtitle={archives.subtitle}
            />
          </div>

          <div className="mt-14">
            <ArchivePackagePreview />
          </div>
        </div>

        {/* 38. Client-Ready PDF Reports */}
        <PDFReportShowcase />

        {/* 40. Data Ownership & Privacy */}
        <ScrollReveal y={26}>
          <div className="surface-card rounded-[var(--bs-radius-xl)] p-6 sm:p-10">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--bs-badge-bg)] px-3.5 py-1 text-xs font-semibold tracking-wider text-[var(--bs-badge-text)] uppercase ring-1 ring-[var(--bs-badge-border)]">
                <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
                {privacy.eyebrow}
              </span>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight text-[var(--bs-text-primary)] sm:text-3xl">
                {privacy.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-[var(--bs-text-muted)]">
                {privacy.subtitle}
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {privacy.pillars.map((pillar) => (
                <LiquidGlassCard key={pillar.title} variant="subtle" rounded="md" className="p-5">
                  <h4 className="text-sm font-semibold text-[var(--bs-text-primary)]">
                    {pillar.title}
                  </h4>
                  <p className="mt-2 text-xs leading-relaxed text-[var(--bs-text-muted)]">
                    {pillar.detail}
                  </p>
                </LiquidGlassCard>
              ))}
            </div>

            <p className="mt-6 text-xs leading-relaxed text-[var(--bs-text-muted)]">
              {privacy.disclaimer}
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
