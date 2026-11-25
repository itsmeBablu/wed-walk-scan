import { NotesShowcase } from '@/components/exports/NotesShowcase';
import { SpatialPhotoShowcase } from '@/components/exports/SpatialPhotoShowcase';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { useLanguage } from '@/hooks/useLanguage';

export function SurveyEvidenceSection() {
  const { t } = useLanguage();
  const sp = t.deliverables.spatialPhotos;

  return (
    <section
      id="survey-evidence"
      aria-labelledby="survey-evidence-heading"
      className="border-t border-[var(--bs-border-subtle)] bg-[var(--bs-surface)] py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div id="survey-evidence-heading">
          <SectionHeading eyebrow={sp.eyebrow} title={sp.headline} subtitle={sp.subtitle} />
        </div>

        <div className="mt-14">
          <SpatialPhotoShowcase />
        </div>

        <NotesShowcase />
      </div>
    </section>
  );
}
