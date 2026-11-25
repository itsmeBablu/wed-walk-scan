import { Archive, Check, FolderOpen, MapPin } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import {
  APPLE_EASE,
  gsap,
  ScrollTrigger,
  prefersReducedMotion,
  useGSAP,
} from '@/animations/gsapConfig';
import { SurveyEvidenceCard } from '@/components/exports/SurveyEvidenceCard';
import { LiquidGlassPanel } from '@/components/ui/LiquidGlassPanel';
import { useLanguage } from '@/hooks/useLanguage';
import { cn } from '@/utils/cn';

export function SpatialPhotoShowcase() {
  const { t } = useLanguage();
  const sp = t.deliverables.spatialPhotos;
  const [stageIndex, setStageIndex] = useState(0);

  const stageWrapRef = useRef<HTMLDivElement>(null);
  const markerLayerRef = useRef<HTMLDivElement>(null);
  const cardLayerRef = useRef<HTMLDivElement>(null);
  const archiveLayerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const wrap = stageWrapRef.current;
      if (!wrap) {
        return;
      }

      const mm = gsap.matchMedia();
      mm.add(
        '(min-width: 1024px) and (min-height: 700px) and (prefers-reduced-motion: no-preference)',
        () => {
          const trigger = ScrollTrigger.create({
            trigger: wrap,
            start: 'top 65%',
            end: 'bottom 35%',
            scrub: 0.35,
            onUpdate: (self) => {
              const next = Math.min(2, Math.floor(self.progress * 3));
              setStageIndex((prev) => (prev === next ? prev : next));
            },
          });

          return () => trigger.kill();
        },
      );

      return () => mm.revert();
    },
    { scope: stageWrapRef },
  );

  useEffect(() => {
    const marker = markerLayerRef.current;
    const card = cardLayerRef.current;
    const archive = archiveLayerRef.current;
    if (!marker || !card || !archive) {
      return;
    }

    const dur = prefersReducedMotion() ? 0 : 0.46;

    gsap.to(marker, {
      opacity: stageIndex === 0 ? 1 : 0.25,
      scale: stageIndex === 0 ? 1 : 0.94,
      duration: dur,
      ease: APPLE_EASE,
    });
    gsap.to(card, {
      opacity: stageIndex === 1 ? 1 : stageIndex === 0 ? 0.35 : 0.3,
      scale: stageIndex === 1 ? 1 : stageIndex === 0 ? 0.86 : 0.88,
      y: stageIndex === 1 ? 0 : stageIndex === 0 ? 18 : -10,
      duration: dur,
      ease: APPLE_EASE,
    });
    gsap.to(archive, {
      opacity: stageIndex === 2 ? 1 : 0.25,
      y: stageIndex === 2 ? 0 : 14,
      scale: stageIndex === 2 ? 1 : 0.94,
      duration: dur,
      ease: APPLE_EASE,
    });
  }, [stageIndex]);

  return (
    <div ref={stageWrapRef} className="space-y-8">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
        {/* Left: Copy + capabilities + clickable 3-stage transition steps */}
        <div className="space-y-6 lg:col-span-5">
          <div className="space-y-3">
            {sp.stages.map((st, idx) => {
              const active = idx === stageIndex;
              return (
                <button
                  key={st.step}
                  type="button"
                  onClick={() => setStageIndex(idx)}
                  aria-current={active ? 'step' : undefined}
                  className={cn(
                    'w-full cursor-pointer rounded-[var(--bs-radius-md)] p-4 text-left transition-all',
                    active
                      ? 'liquid-glass liquid-glass--elevated'
                      : 'border border-[var(--bs-border-subtle)] bg-[var(--bs-surface)]/70 hover:border-[var(--bs-border-strong)]',
                  )}
                >
                  <div className="relative z-[3] flex items-start gap-3">
                    <span
                      className={cn(
                        'mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full font-mono text-xs font-bold',
                        active
                          ? 'bg-[var(--bs-accent)] text-[var(--bs-accent-ink)]'
                          : 'bg-[var(--bs-surface-subtle)] text-[var(--bs-text-muted)]',
                      )}
                    >
                      {st.step}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-[var(--bs-text-primary)]">
                        {st.title}
                      </p>
                      <p className="mt-1 text-xs leading-relaxed text-[var(--bs-text-muted)]">
                        {st.detail}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="surface-card rounded-[var(--bs-radius-md)] p-5">
            <ul className="space-y-2 text-xs leading-relaxed text-[var(--bs-text-primary)] sm:text-[13px]">
              {sp.captureFeatures.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <Check
                    className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--bs-accent-text)]"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
              {sp.exportFeatures.map((item) => (
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
        </div>

        {/* Right: GSAP 3-stage photo transition: Marker -> Photo Card -> Export Archive */}
        <div className="lg:col-span-7">
          <LiquidGlassPanel variant="subtle" refraction rounded="xl" className="p-5 sm:p-7">
            <div className="space-y-4">
              {/* Stage 1: 3D Building Marker */}
              <div
                ref={markerLayerRef}
                className="flex items-center justify-between gap-4 rounded-[var(--bs-radius-md)] border border-[var(--bs-border-subtle)] bg-[#111110] p-4 text-[#FAFAF7]"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#facc15] text-[#111110]">
                    <MapPin className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold text-[#fef08a]">{sp.sampleMarkerLabel}</p>
                    <p className="font-mono text-[11px] text-[#b5b2a6]">{sp.sampleCoords}</p>
                  </div>
                </div>
                <span className="hidden rounded-full bg-[#272000] px-2.5 py-1 font-mono text-[10px] font-semibold text-[#facc15] ring-1 ring-[#facc15]/40 sm:inline-block">
                  3D Ray Pin
                </span>
              </div>

              {/* Stage 2: Enlarged Survey Evidence Card */}
              <div ref={cardLayerRef} className="will-change-transform">
                <SurveyEvidenceCard
                  markerLabel={sp.sampleMarkerLabel}
                  roomLabel={sp.sampleRoomLabel}
                  coords={sp.sampleCoords}
                  pose={sp.samplePose}
                />
              </div>

              {/* Stage 3: Organized Export Archive */}
              <div
                ref={archiveLayerRef}
                className="flex flex-wrap items-center justify-between gap-3 rounded-[var(--bs-radius-md)] border border-[var(--bs-badge-border)] bg-[var(--bs-badge-bg)] px-4 py-3.5 text-[var(--bs-badge-text)]"
              >
                <div className="flex items-center gap-3">
                  <Archive className="h-5 w-5 shrink-0" aria-hidden="true" />
                  <div>
                    <p className="flex items-center gap-1.5 font-mono text-xs font-semibold">
                      <FolderOpen className="h-3.5 w-3.5" aria-hidden="true" />
                      {sp.sampleArchivePath}
                    </p>
                    <p className="mt-0.5 text-[11px] opacity-85">
                      photos/index.csv · photo-index.json · camera.json
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <p className="mt-4 text-xs leading-relaxed text-[var(--bs-text-muted)]">
              {sp.coordinateNotice}
            </p>
          </LiquidGlassPanel>
        </div>
      </div>
    </div>
  );
}
