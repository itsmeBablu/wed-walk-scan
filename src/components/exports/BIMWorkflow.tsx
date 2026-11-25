import { Check, Info, Workflow } from 'lucide-react';
import { ScrollReveal } from '@/animations/ScrollReveal';
import { LiquidGlassCard } from '@/components/ui/LiquidGlassCard';
import { LiquidGlassPanel } from '@/components/ui/LiquidGlassPanel';
import { VERIFIED_DOWNSTREAM_TOOLS } from '@/data/exportCatalog';
import { useLanguage } from '@/hooks/useLanguage';

export function BIMWorkflow() {
  const { t } = useLanguage();
  const bim = t.deliverables.bim;

  return (
    <ScrollReveal y={26}>
      <LiquidGlassPanel variant="elevated" refraction rounded="xl" className="p-6 sm:p-10">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--bs-badge-bg)] px-3.5 py-1 text-xs font-semibold tracking-wider text-[var(--bs-badge-text)] uppercase ring-1 ring-[var(--bs-badge-border)]">
              <Workflow className="h-3.5 w-3.5" aria-hidden="true" />
              {bim.eyebrow}
            </span>

            <h3 className="mt-4 text-2xl font-semibold tracking-tight text-[var(--bs-text-primary)] sm:text-3xl">
              {bim.headline}
            </h3>

            <p className="mt-3 text-[15px] leading-relaxed text-[var(--bs-text-muted)]">
              {bim.subtitle}
            </p>

            <ul className="mt-6 space-y-2.5">
              {bim.capabilities.map((cap) => (
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
          </div>

          <div className="flex flex-col justify-between gap-6 lg:col-span-5">
            <LiquidGlassCard variant="subtle" elevateOnHover={false} rounded="lg">
              <p className="text-xs font-semibold tracking-wider text-[var(--bs-text-muted)] uppercase">
                {bim.toolsLabel}
              </p>

              <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-1">
                {VERIFIED_DOWNSTREAM_TOOLS.map((tool) => (
                  <div
                    key={tool.name}
                    className="flex items-center justify-between gap-2 rounded-[var(--bs-radius-sm)] border border-[var(--bs-border-subtle)] bg-[var(--bs-surface)]/85 px-3.5 py-2"
                  >
                    <span className="text-sm font-medium text-[var(--bs-text-primary)]">
                      {tool.name}
                    </span>
                    <span className="rounded-full bg-[var(--bs-badge-bg)] px-2.5 py-0.5 font-mono text-[10px] font-semibold text-[var(--bs-badge-text)]">
                      {tool.role}
                    </span>
                  </div>
                ))}
              </div>
            </LiquidGlassCard>

            <div className="flex items-start gap-2.5 rounded-[var(--bs-radius-md)] border border-dashed border-[var(--bs-border-strong)] bg-[var(--bs-surface-subtle)]/75 p-4 text-xs leading-relaxed text-[var(--bs-text-muted)]">
              <Info
                className="mt-0.5 h-4 w-4 shrink-0 text-[var(--bs-accent-text)]"
                aria-hidden="true"
              />
              <p>{bim.disclaimer}</p>
            </div>
          </div>
        </div>
      </LiquidGlassPanel>
    </ScrollReveal>
  );
}
