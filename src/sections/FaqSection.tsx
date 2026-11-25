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
      <div className="bs-container">
        <div id="faq-heading">
          <SectionHeading eyebrow={t.faq.eyebrow} title={t.faq.title} subtitle={t.faq.subtitle} />
        </div>

        <ScrollReveal y={20} className="mx-auto mt-12 max-w-5xl">
          <Accordion items={t.faq.items} />
        </ScrollReveal>
      </div>
    </section>
  );
}
