import { ClipboardCheck, FileText, Info, Pin } from 'lucide-react';
import { ScrollReveal } from '@/animations/ScrollReveal';
import { LiquidGlassCard } from '@/components/ui/LiquidGlassCard';
import { useLanguage } from '@/hooks/useLanguage';
import { cn } from '@/utils/cn';

const CARD_ICONS = [FileText, Pin, ClipboardCheck] as const;

export function NotesShowcase() {
  const { t } = useLanguage();
  const notes = t.deliverables.notesAndChecks;

  return (
    <ScrollReveal y={26} className="mt-16">
      <div className="mx-auto max-w-3xl text-center">
        <span className="inline-flex rounded-full bg-[var(--bs-badge-bg)] px-3.5 py-1 text-xs font-semibold tracking-wider text-[var(--bs-badge-text)] uppercase ring-1 ring-[var(--bs-badge-border)]">
          {notes.eyebrow}
        </span>
        <h3 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--bs-text-primary)] sm:text-4xl">
          {notes.headline}
        </h3>
        <p className="mt-3 text-base leading-relaxed text-[var(--bs-text-muted)]">
          {notes.subtitle}
        </p>
      </div>

      {/* Three verified iOS-style note & pin cards */}
      <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-3">
        {notes.cards.map((card, idx) => {
          const Icon = CARD_ICONS[idx] ?? FileText;
          return (
            <LiquidGlassCard
              key={card.id}
              variant="elevated"
              rounded="lg"
              className="flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--bs-badge-bg)] px-3 py-1 text-[11px] font-semibold text-[var(--bs-badge-text)]">
                    <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                    {card.badge}
                  </span>
                </div>

                <h4 className="mt-4 text-lg font-semibold tracking-tight text-[var(--bs-text-primary)]">
                  {card.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-[var(--bs-text-muted)]">
                  {card.description}
                </p>

                {idx === 1 && (
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {notes.pinStatuses.map((pill) => (
                      <span
                        key={pill.status}
                        className={cn(
                          'rounded-full px-2.5 py-0.5 text-[11px] font-semibold',
                          pill.status === 'Open'
                            ? 'bg-amber-500/20 text-amber-800 dark:text-amber-300'
                            : pill.status === 'In Progress'
                              ? 'bg-[var(--bs-badge-bg)] text-[var(--bs-badge-text)]'
                              : 'bg-emerald-500/20 text-emerald-800 dark:text-emerald-300',
                        )}
                      >
                        {pill.label}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <p className="mt-5 border-t border-[var(--bs-border-subtle)] pt-3.5 font-mono text-[11px] text-[var(--bs-text-muted)]">
                {card.meta}
              </p>
            </LiquidGlassCard>
          );
        })}
      </div>

      {/* Physical measurement verification table + audit transparency */}
      <div className="surface-card mt-6 rounded-[var(--bs-radius-lg)] p-5 sm:p-6">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
          <div className="space-y-3 lg:flex-1">
            <p className="font-mono text-xs font-semibold text-[var(--bs-accent-text)]">
              {notes.verificationTitle}
            </p>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {notes.verificationItems.map((check) => (
                <div
                  key={check.label}
                  className="rounded-[var(--bs-radius-sm)] border border-[var(--bs-border-subtle)] bg-[var(--bs-bg-page)] p-3.5"
                >
                  <p className="text-xs font-semibold text-[var(--bs-text-primary)]">
                    {check.label}
                  </p>
                  <p className="mt-1.5 font-mono text-[11px] text-[var(--bs-text-muted)]">
                    LiDAR: {check.observed} · Ref: {check.reference}
                  </p>
                  <p className="mt-0.5 font-mono text-[11px] font-semibold text-[var(--bs-accent-text)]">
                    Δ {check.delta}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-start gap-2.5 rounded-[var(--bs-radius-md)] border border-dashed border-[var(--bs-border-strong)] bg-[var(--bs-surface-subtle)]/75 p-4 text-xs leading-relaxed text-[var(--bs-text-muted)] lg:max-w-sm">
            <Info
              className="mt-0.5 h-4 w-4 shrink-0 text-[var(--bs-accent-text)]"
              aria-hidden="true"
            />
            <p>{notes.auditNotice}</p>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
