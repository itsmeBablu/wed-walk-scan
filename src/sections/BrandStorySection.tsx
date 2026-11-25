import { Clock, Layers3, Maximize2, MoveHorizontal, Wallet } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import {
  APPLE_EASE,
  computePinScrollDistance,
  getPinnedStartOffset,
  gsap,
  ScrollTrigger,
  prefersReducedMotion,
  useGSAP,
} from '@/animations/gsapConfig';
import { ScrollReveal } from '@/animations/ScrollReveal';
import { LiquidGlassCard } from '@/components/ui/LiquidGlassCard';
import { LiquidGlassPanel } from '@/components/ui/LiquidGlassPanel';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { useLanguage } from '@/hooks/useLanguage';
import { cn } from '@/utils/cn';

const DIMENSION_ICONS = {
  '1d': MoveHorizontal,
  '2d': Maximize2,
  '3d': Layers3,
  '4d': Clock,
  '5d': Wallet,
} as const;

export function BrandStorySection() {
  const { t } = useLanguage();
  const dimensions = t.brandStory.dimensions;
  const [activeIndex, setActiveIndex] = useState(0);

  const showcaseRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const layer1dRef = useRef<SVGGElement>(null);
  const layer2dRef = useRef<SVGGElement>(null);
  const layer3dRef = useRef<SVGGElement>(null);
  const layer4dRef = useRef<SVGGElement>(null);
  const layer5dRef = useRef<SVGGElement>(null);

  const activeDimension = dimensions[activeIndex] ?? dimensions[0];

  // ScrollTrigger progression across 1D -> 2D -> 3D -> 4D -> 5D on desktop
  useGSAP(
    () => {
      const container = showcaseRef.current;
      if (!container) {
        return;
      }

      const mm = gsap.matchMedia();
      mm.add(
        '(min-width: 1024px) and (min-height: 700px) and (prefers-reduced-motion: no-preference)',
        () => {
          const trigger = ScrollTrigger.create({
            trigger: container,
            pin: container,
            start: () => `top ${getPinnedStartOffset()}px`,
            end: () => `+=${computePinScrollDistance(container, 1.85)}`,
            scrub: 0.4,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              const next = Math.min(
                dimensions.length - 1,
                Math.floor(self.progress * dimensions.length),
              );
              setActiveIndex((prev) => (prev === next ? prev : next));
            },
          });

          return () => trigger.kill();
        },
      );

      return () => mm.revert();
    },
    { scope: showcaseRef, dependencies: [dimensions.length] },
  );

  // Smooth GSAP visual morphing across the 5 dimensional geometry layers
  useEffect(() => {
    const layers = [
      layer1dRef.current,
      layer2dRef.current,
      layer3dRef.current,
      layer4dRef.current,
      layer5dRef.current,
    ];
    if (layers.some((l) => !l)) {
      return;
    }

    const dur = prefersReducedMotion() ? 0 : 0.48;

    layers.forEach((layer, idx) => {
      if (!layer) {
        return;
      }
      const isVisible =
        idx === activeIndex ||
        (activeIndex >= 1 && idx === 0 && activeIndex < 2) ||
        (activeIndex >= 3 && idx === 2);

      const opacity = idx === activeIndex ? 1 : isVisible ? 0.28 : 0.05;
      const scale = idx === activeIndex ? 1 : idx < activeIndex ? 0.96 : 0.92;

      gsap.to(layer, {
        opacity,
        scale,
        transformOrigin: '50% 50%',
        duration: dur,
        ease: APPLE_EASE,
        overwrite: 'auto',
      });
    });
  }, [activeIndex]);

  if (!activeDimension) {
    return null;
  }

  return (
    <section
      id="brand-story"
      aria-labelledby="brand-story-heading"
      className="border-t border-[var(--bs-border-subtle)] bg-[var(--bs-bg-page)] py-20 sm:py-28"
    >
      <div className="bs-container">
        {/* Part 1: Brand Meaning — More than a scan. A new dimension. */}
        <div id="brand-story-heading">
          <SectionHeading
            eyebrow={t.brandStory.eyebrow}
            title={t.brandStory.title}
            subtitle={t.brandStory.subtitle}
          />
        </div>

        <ScrollReveal
          staggerSelector="[data-pillar-card]"
          stagger={0.08}
          y={24}
          className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 2xl:gap-7"
        >
          {t.brandStory.pillars.map((pillar, idx) => (
            <div key={pillar.id} data-pillar-card className="h-full">
              <LiquidGlassCard
                variant="elevated"
                rounded="lg"
                className="flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className={cn(
                        'inline-flex h-10 items-center justify-center rounded-full px-3.5 text-sm font-bold tracking-tight',
                        idx === 0
                          ? 'bg-[var(--bs-accent)] text-[var(--bs-accent-ink)]'
                          : 'bg-[var(--bs-badge-bg)] text-[var(--bs-badge-text)] ring-1 ring-[var(--bs-badge-border)]',
                      )}
                    >
                      {pillar.token}
                    </span>
                    <span className="font-mono text-[11px] font-medium text-[var(--bs-text-muted)]">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="mt-5 text-lg font-semibold tracking-tight text-[var(--bs-text-primary)]">
                    <span
                      className={idx === 0 ? 'font-bold text-[var(--bs-accent-text)]' : undefined}
                    >
                      {pillar.token}
                    </span>{' '}
                    — {pillar.label}
                  </h3>

                  <p className="bs-prose mt-2 text-sm leading-relaxed text-[var(--bs-text-muted)]">
                    {pillar.description}
                  </p>
                </div>
              </LiquidGlassCard>
            </div>
          ))}
        </ScrollReveal>

        {/* Part 2: Five Dimensions Progression (1D -> 5D) */}
        <div id="dimensions" className="mt-24 sm:mt-32">
          <SectionHeading
            eyebrow={t.brandStory.dimensionsEyebrow}
            title={t.brandStory.dimensionsTitle}
            subtitle={t.brandStory.dimensionsSubtitle}
          />

          <div
            ref={showcaseRef}
            className="mt-14 grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-10 xl:gap-14"
          >
            {/* Left selector list: 1D to 5D */}
            <div className="space-y-2.5 lg:col-span-5 xl:col-span-4">
              {dimensions.map((dim, idx) => {
                const Icon = DIMENSION_ICONS[dim.id];
                const isActive = idx === activeIndex;
                return (
                  <button
                    key={dim.id}
                    type="button"
                    onClick={() => setActiveIndex(idx)}
                    aria-current={isActive ? 'step' : undefined}
                    className={cn(
                      'w-full cursor-pointer rounded-[var(--bs-radius-md)] p-4 text-left transition-all duration-200',
                      isActive
                        ? 'liquid-glass liquid-glass--elevated'
                        : 'border border-transparent hover:border-[var(--bs-border-subtle)] hover:bg-[var(--bs-surface)]/70',
                    )}
                  >
                    <div className="relative z-[3] flex items-start gap-3.5">
                      <span
                        className={cn(
                          'mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full font-mono text-xs font-bold transition-colors',
                          isActive
                            ? 'bg-[var(--bs-accent)] text-[var(--bs-accent-ink)]'
                            : 'bg-[var(--bs-surface)] text-[var(--bs-text-muted)] ring-1 ring-[var(--bs-border-subtle)]',
                        )}
                      >
                        {dim.code}
                      </span>

                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <span className="flex items-center gap-1.5 text-sm font-semibold tracking-tight text-[var(--bs-text-primary)] sm:text-[15px]">
                            <Icon
                              className={cn(
                                'h-3.5 w-3.5 shrink-0',
                                isActive
                                  ? 'text-[var(--bs-accent-text)]'
                                  : 'text-[var(--bs-text-muted)]',
                              )}
                              aria-hidden="true"
                            />
                            {dim.code} — {dim.title}
                          </span>

                          <span
                            className={cn(
                              'rounded-full px-2.5 py-0.5 text-[10px] font-semibold tracking-wide uppercase',
                              dim.isVision
                                ? 'border border-dashed border-[var(--bs-border-strong)] bg-transparent text-[var(--bs-text-muted)]'
                                : 'bg-[var(--bs-badge-bg)] text-[var(--bs-badge-text)] ring-1 ring-[var(--bs-badge-border)]',
                            )}
                          >
                            {dim.isVision ? t.brandStory.visionTag : t.brandStory.availableTag}
                          </span>
                        </div>

                        <p className="mt-1 text-xs font-medium text-[var(--bs-text-muted)]">
                          {dim.description}
                        </p>

                        {isActive && (
                          <p className="mt-2 text-xs leading-relaxed text-[var(--bs-text-primary)]/90 sm:text-[13px]">
                            {dim.detail}
                          </p>
                        )}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right dimensional visual progression */}
            <div className="lg:col-span-7 xl:col-span-8">
              <LiquidGlassPanel variant="elevated" refraction rounded="xl" className="p-6 sm:p-8">
                <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2.5">
                    <span className="rounded-full bg-[var(--bs-accent)] px-3 py-0.5 font-mono text-xs font-bold text-[var(--bs-accent-ink)]">
                      {activeDimension.code}
                    </span>
                    <h3 className="text-lg font-semibold tracking-tight text-[var(--bs-text-primary)] sm:text-xl">
                      {activeDimension.title} — {activeDimension.description}
                    </h3>
                  </div>

                  <span
                    className={cn(
                      'rounded-full px-3 py-1 text-[11px] font-semibold',
                      activeDimension.isVision
                        ? 'border border-dashed border-[var(--bs-border-strong)] text-[var(--bs-text-muted)]'
                        : 'bg-[var(--bs-badge-bg)] text-[var(--bs-badge-text)]',
                    )}
                  >
                    {activeDimension.isVision ? t.brandStory.visionTag : t.brandStory.availableTag}
                  </span>
                </div>

                {/* Animated Dimensional Geometry Canvas */}
                <div className="blueprint-grid relative overflow-hidden rounded-[var(--bs-radius-md)] border border-[var(--bs-border-subtle)] bg-[#111110] p-4 sm:p-6">
                  <svg
                    ref={svgRef}
                    viewBox="0 0 560 320"
                    fill="none"
                    role="img"
                    aria-label={`${activeDimension.code} ${activeDimension.title}`}
                    className="h-auto w-full"
                  >
                    {/* 1D: Calibrated linear span */}
                    <g ref={layer1dRef}>
                      <line
                        x1="84"
                        y1="164"
                        x2="476"
                        y2="164"
                        stroke="#FACC15"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                      />
                      <line x1="84" y1="146" x2="84" y2="182" stroke="#FEF08A" strokeWidth="2.5" />
                      <line
                        x1="476"
                        y1="146"
                        x2="476"
                        y2="182"
                        stroke="#FEF08A"
                        strokeWidth="2.5"
                      />
                      <circle cx="84" cy="164" r="6" fill="#FACC15" />
                      <circle cx="476" cy="164" r="6" fill="#FACC15" />
                      <rect
                        x="224"
                        y="128"
                        width="112"
                        height="26"
                        rx="13"
                        fill="#272000"
                        stroke="#FACC15"
                        strokeOpacity="0.6"
                      />
                      <text
                        x="280"
                        y="145"
                        textAnchor="middle"
                        fill="#FEF08A"
                        fontSize="12"
                        fontFamily="ui-monospace, monospace"
                        fontWeight="600"
                      >
                        4.82 m · ±2 mm
                      </text>
                    </g>

                    {/* 2D: Architectural Floor Plan */}
                    <g ref={layer2dRef}>
                      <rect
                        x="110"
                        y="62"
                        width="340"
                        height="196"
                        rx="4"
                        fill="#FACC15"
                        fillOpacity="0.08"
                        stroke="#FACC15"
                        strokeWidth="3"
                      />
                      <line x1="278" y1="62" x2="278" y2="184" stroke="#FACC15" strokeWidth="2.5" />
                      <line
                        x1="278"
                        y1="224"
                        x2="278"
                        y2="258"
                        stroke="#FACC15"
                        strokeWidth="2.5"
                      />
                      {/* Door swing arc */}
                      <path
                        d="M278 184 A40 40 0 0 1 318 224"
                        stroke="#FEF08A"
                        strokeWidth="1.5"
                        strokeDasharray="4 4"
                      />
                      <line x1="278" y1="184" x2="318" y2="184" stroke="#FEF08A" strokeWidth="2" />
                      <rect
                        x="148"
                        y="138"
                        width="92"
                        height="30"
                        rx="15"
                        fill="#272000"
                        stroke="#FACC15"
                        strokeOpacity="0.55"
                      />
                      <text
                        x="194"
                        y="157"
                        textAnchor="middle"
                        fill="#FEF08A"
                        fontSize="12"
                        fontFamily="ui-monospace, monospace"
                        fontWeight="600"
                      >
                        24.6 m²
                      </text>
                      <text
                        x="368"
                        y="157"
                        textAnchor="middle"
                        fill="#FEF3C7"
                        fontSize="12"
                        fontFamily="ui-monospace, monospace"
                      >
                        14.2 m²
                      </text>
                    </g>

                    {/* 3D: Isometric Building Geometry */}
                    <g ref={layer3dRef}>
                      {/* Base floor footprint */}
                      <polygon
                        points="280,256 140,192 280,128 420,192"
                        fill="#FACC15"
                        fillOpacity="0.12"
                        stroke="#FEF08A"
                        strokeOpacity="0.55"
                        strokeWidth="1.8"
                      />
                      {/* Extruded building walls */}
                      <polygon
                        points="140,192 140,110 280,46 280,128"
                        fill="#272000"
                        fillOpacity="0.7"
                        stroke="#FACC15"
                        strokeWidth="2.5"
                        strokeLinejoin="round"
                      />
                      <polygon
                        points="280,128 280,46 420,110 420,192"
                        fill="#272000"
                        fillOpacity="0.45"
                        stroke="#FACC15"
                        strokeWidth="2.5"
                        strokeLinejoin="round"
                      />
                      <polygon
                        points="140,192 280,256 420,192 280,128"
                        fill="none"
                        stroke="#FACC15"
                        strokeWidth="2.5"
                        strokeLinejoin="round"
                      />
                      {/* Upper slab / roof outline */}
                      <polygon
                        points="280,174 140,110 280,46 420,110"
                        fill="#FACC15"
                        fillOpacity="0.16"
                        stroke="#FEF08A"
                        strokeWidth="2.5"
                        strokeLinejoin="round"
                      />
                      <line
                        x1="280"
                        y1="174"
                        x2="280"
                        y2="256"
                        stroke="#FACC15"
                        strokeWidth="2.5"
                      />
                    </g>

                    {/* 4D: Time / Phased Scheduling Vision Overlay */}
                    <g ref={layer4dRef}>
                      <rect
                        x="72"
                        y="24"
                        width="416"
                        height="48"
                        rx="14"
                        fill="#272000"
                        fillOpacity="0.92"
                        stroke="#FACC15"
                        strokeOpacity="0.55"
                      />
                      <text
                        x="94"
                        y="52"
                        fill="#FEF08A"
                        fontSize="12"
                        fontFamily="ui-monospace, monospace"
                        fontWeight="700"
                      >
                        4D TIMELINE (BIM VISION)
                      </text>
                      <rect x="292" y="38" width="52" height="20" rx="10" fill="#FACC15" />
                      <text
                        x="318"
                        y="52"
                        textAnchor="middle"
                        fill="#111110"
                        fontSize="10"
                        fontWeight="700"
                      >
                        P1
                      </text>
                      <rect
                        x="352"
                        y="38"
                        width="56"
                        height="20"
                        rx="10"
                        fill="#FEF08A"
                        fillOpacity="0.22"
                        stroke="#FEF08A"
                        strokeOpacity="0.5"
                      />
                      <text
                        x="380"
                        y="52"
                        textAnchor="middle"
                        fill="#FEF08A"
                        fontSize="10"
                        fontWeight="600"
                      >
                        P2
                      </text>
                      <rect
                        x="416"
                        y="38"
                        width="54"
                        height="20"
                        rx="10"
                        fill="#FEF08A"
                        fillOpacity="0.12"
                        stroke="#FEF08A"
                        strokeOpacity="0.35"
                      />
                      <text
                        x="443"
                        y="52"
                        textAnchor="middle"
                        fill="#FEF3C7"
                        fontSize="10"
                        fontWeight="600"
                      >
                        P3
                      </text>
                    </g>

                    {/* 5D: Cost & Material Quantities Vision Overlay */}
                    <g ref={layer5dRef}>
                      <rect
                        x="64"
                        y="240"
                        width="432"
                        height="54"
                        rx="14"
                        fill="#272000"
                        fillOpacity="0.94"
                        stroke="#FACC15"
                        strokeOpacity="0.65"
                      />
                      <text
                        x="86"
                        y="264"
                        fill="#FACC15"
                        fontSize="11"
                        fontFamily="ui-monospace, monospace"
                        fontWeight="700"
                      >
                        5D COST &amp; QUANTITIES (BIM VISION)
                      </text>
                      <text
                        x="86"
                        y="282"
                        fill="#FEF3C7"
                        fontSize="11"
                        fontFamily="ui-monospace, monospace"
                      >
                        Area: 38.8 m² · Walls: 94.2 m² · Openings: 5
                      </text>
                      <rect x="412" y="253" width="68" height="28" rx="14" fill="#FACC15" />
                      <text
                        x="446"
                        y="271"
                        textAnchor="middle"
                        fill="#111110"
                        fontSize="11"
                        fontFamily="ui-monospace, monospace"
                        fontWeight="700"
                      >
                        EST.
                      </text>
                    </g>
                  </svg>
                </div>

                <p className="mt-4 text-xs leading-relaxed text-[var(--bs-text-muted)]">
                  {t.brandStory.visionNote}
                </p>
              </LiquidGlassPanel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
