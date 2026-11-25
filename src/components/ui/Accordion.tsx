import { ChevronDown } from 'lucide-react';
import { useId, useRef, useState } from 'react';
import { APPLE_EASE, gsap, prefersReducedMotion, useGSAP } from '@/animations/gsapConfig';
import type { FaqItem } from '@/types';
import { cn } from '@/utils/cn';

interface AccordionRowProps {
  item: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
}

function AccordionRow({ item, isOpen, onToggle }: AccordionRowProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const buttonId = useId();
  const panelId = useId();
  const hasMounted = useRef(false);

  useGSAP(
    () => {
      const panel = panelRef.current;
      if (!panel) {
        return;
      }

      if (!hasMounted.current) {
        hasMounted.current = true;
        gsap.set(panel, {
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0,
        });
        return;
      }

      if (prefersReducedMotion()) {
        gsap.set(panel, {
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0,
        });
        return;
      }

      if (isOpen) {
        gsap.fromTo(
          panel,
          { height: 0, opacity: 0 },
          { height: 'auto', opacity: 1, duration: 0.36, ease: APPLE_EASE, overwrite: 'auto' },
        );
      } else {
        gsap.to(panel, {
          height: 0,
          opacity: 0,
          duration: 0.26,
          ease: 'power2.inOut',
          overwrite: 'auto',
        });
      }
    },
    { scope: panelRef, dependencies: [isOpen] },
  );

  return (
    <div className="border-b border-[var(--bs-border-subtle)] last:border-b-0">
      <button
        id={buttonId}
        type="button"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={onToggle}
        className="flex w-full cursor-pointer items-center justify-between gap-4 py-5 text-left transition-colors hover:text-[var(--bs-accent-text)]"
      >
        <span className="text-base font-medium tracking-tight text-[var(--bs-text-primary)] sm:text-lg">
          {item.question}
        </span>
        <ChevronDown
          aria-hidden="true"
          className={cn(
            'h-5 w-5 shrink-0 text-[var(--bs-text-muted)] transition-transform duration-300',
            isOpen && 'rotate-180 text-[var(--bs-accent-text)]',
          )}
        />
      </button>

      <div
        ref={panelRef}
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        aria-hidden={!isOpen}
        className="overflow-hidden"
      >
        <p className="bs-prose pb-5 text-[15px] leading-relaxed text-[var(--bs-text-muted)]">
          {item.answer}
        </p>
      </div>
    </div>
  );
}

interface AccordionProps {
  items: readonly FaqItem[];
  defaultOpenId?: string;
  className?: string;
}

export function Accordion({ items, defaultOpenId, className }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(defaultOpenId ?? items[0]?.id ?? null);

  return (
    <div className={cn('surface-card rounded-[var(--bs-radius-lg)] px-6 py-2 sm:px-8', className)}>
      {items.map((item) => (
        <AccordionRow
          key={item.id}
          item={item}
          isOpen={openId === item.id}
          onToggle={() => setOpenId((prev) => (prev === item.id ? null : item.id))}
        />
      ))}
    </div>
  );
}
