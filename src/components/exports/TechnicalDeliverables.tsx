import { AlertTriangle, Cpu } from 'lucide-react';
import { ScrollReveal } from '@/animations/ScrollReveal';
import { LiquidGlassCard } from '@/components/ui/LiquidGlassCard';
import { useLanguage } from '@/hooks/useLanguage';

export function TechnicalDeliverables() {
  const { t } = useLanguage();
  const tech = t.deliverables.technicalDeliverables;

  return (
    <ScrollReveal y={26} className="mt-16">
      <div className="surface-card rounded-[var(--bs-radius-xl)] p-6 sm:p-10">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10 xl:gap-14">
          <div className="lg:col-span-5 xl:col-span-4">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--bs-badge-bg)] px-3.5 py-1 text-xs font-semibold tracking-wider text-[var(--bs-badge-text)] uppercase ring-1 ring-[var(--bs-badge-border)]">
              <Cpu className="h-3.5 w-3.5" aria-hidden="true" />
              {tech.eyebrow}
            </span>

            <h3 className="mt-4 text-2xl font-semibold tracking-tight text-[var(--bs-text-primary)] sm:text-3xl">
              {tech.headline}
            </h3>

            <p className="bs-prose mt-3 text-[15px] leading-relaxed text-[var(--bs-text-muted)]">
              {tech.subtitle}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {tech.equipmentTypes.map((eq) => (
                <span
                  key={eq}
                  className="rounded-full border border-[var(--bs-border-subtle)] bg-[var(--bs-surface-subtle)] px-3 py-1 text-xs font-medium text-[var(--bs-text-primary)]"
                >
                  {eq}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-6 lg:col-span-7 xl:col-span-8">
            {/* Evidence provenance chain */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 2xl:grid-cols-4">
              {tech.evidenceChain.map((item) => (
                <div
                  key={item.step}
                  className="rounded-[var(--bs-radius-md)] border border-[var(--bs-border-subtle)] bg-[var(--bs-bg-page)] p-4"
                >
                  <p className="font-mono text-xs font-semibold text-[var(--bs-accent-text)]">
                    {item.step}
                  </p>
                  <p className="mt-1 text-sm text-[var(--bs-text-primary)]">{item.detail}</p>
                </div>
              ))}
            </div>

            {/* Technical Room Export Formats */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 2xl:grid-cols-4">
              {tech.outputs.map((out) => (
                <LiquidGlassCard key={out.ext} variant="subtle" rounded="md" className="p-4">
                  <span className="rounded-full bg-[var(--bs-badge-bg)] px-2.5 py-0.5 font-mono text-[11px] font-bold text-[var(--bs-badge-text)]">
                    {out.ext}
                  </span>
                  <p className="mt-2.5 font-mono text-xs font-semibold text-[var(--bs-text-primary)]">
                    {out.title}
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-[var(--bs-text-muted)]">
                    {out.detail}
                  </p>
                </LiquidGlassCard>
              ))}
            </div>

            <div className="flex items-start gap-2.5 rounded-[var(--bs-radius-md)] border border-dashed border-[var(--bs-border-strong)] bg-[var(--bs-surface-subtle)]/75 p-4 text-xs leading-relaxed text-[var(--bs-text-muted)]">
              <AlertTriangle
                className="mt-0.5 h-4 w-4 shrink-0 text-[var(--bs-accent-text)]"
                aria-hidden="true"
              />
              <p>{tech.verificationWarning}</p>
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
