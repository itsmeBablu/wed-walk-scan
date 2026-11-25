import { ScrollReveal } from '@/animations/ScrollReveal';
import { Accordion } from '@/components/ui/Accordion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { useLanguage } from '@/hooks/useLanguage';

export function FaqSection() {
  const { t } = useLanguage();

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="border-t border-[var(--bs-border-subtle)] bg-[var(--bs-bg-page)] py-20 sm:py-24"
    >
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <div id="faq-heading">
          <SectionHeading eyebrow={t.faq.eyebrow} title={t.faq.title} subtitle={t.faq.subtitle} />
        </div>

        <ScrollReveal y={20} className="mt-12">
          <Accordion items={t.faq.items} />
        </ScrollReveal>
      </div>
    </section>
  );
}
