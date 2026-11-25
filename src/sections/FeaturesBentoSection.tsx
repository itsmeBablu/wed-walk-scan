import { ScrollReveal } from '@/animations/ScrollReveal';
import { BentoGrid } from '@/components/ui/BentoGrid';
import { FeatureCard } from '@/components/ui/FeatureCard';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { useLanguage } from '@/hooks/useLanguage';

export function FeaturesBentoSection() {
  const { t } = useLanguage();

  return (
    <section
      id="features"
      aria-labelledby="features-heading"
      className="border-t border-[var(--bs-border-subtle)] bg-[var(--bs-bg-page)] py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div id="features-heading">
          <SectionHeading
            eyebrow={t.features.eyebrow}
            title={t.features.title}
            subtitle={t.features.subtitle}
          />
        </div>

        <ScrollReveal staggerSelector="[data-bento-card]" stagger={0.07} y={28} className="mt-14">
          <BentoGrid>
            {t.features.items.map((item) => (
              <FeatureCard key={item.id} item={item} />
            ))}
          </BentoGrid>
        </ScrollReveal>
      </div>
    </section>
  );
}
