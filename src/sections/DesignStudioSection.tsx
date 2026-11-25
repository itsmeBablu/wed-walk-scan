import { CheckCircle2 } from 'lucide-react';
import { useRef, useState } from 'react';
import {
  APPLE_EASE,
  computePinScrollDistance,
  getPinnedStartOffset,
  gsap,
  ScrollTrigger,
  prefersReducedMotion,
  useGSAP,
} from '@/animations/gsapConfig';
import { MacWindow } from '@/components/devices/MacWindow';
import { ScreenshotPlaceholder } from '@/components/ui/ScreenshotPlaceholder';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { useLanguage } from '@/hooks/useLanguage';
import { cn } from '@/utils/cn';

export function DesignStudioSection() {
  const { t } = useLanguage();
  const capabilities = t.designStudio.capabilities;
  const [activeIdx, setActiveIdx] = useState(0);

  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const windowRef = useRef<HTMLDivElement>(null);
  const screenRef = useRef<HTMLDivElement>(null);

  const activeCapability = capabilities[activeIdx] ?? capabilities[0];

  useGSAP(
    () => {
      const section = sectionRef.current;
      const stage = stageRef.current;
      const win = windowRef.current;
      if (!section || !stage || !win) {
        return;
      }

      const mm = gsap.matchMedia();
      mm.add(
        '(min-width: 1024px) and (min-height: 700px) and (prefers-reduced-motion: no-preference)',
        () => {
          // Entry zoom into focus, then settle cleanly back to normal plane
          gsap.fromTo(
            win,
            { scale: 0.9, y: 40, opacity: 0.65 },
            {
              scale: 1,
              y: 0,
              opacity: 1,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: stage,
                start: 'top 85%',
                end: 'top 22%',
                scrub: 0.5,
              },
            },
          );

          const pinTrigger = ScrollTrigger.create({
            trigger: stage,
            pin: stage,
            start: () => `top ${getPinnedStartOffset()}px`,
            end: () => `+=${computePinScrollDistance(stage, 1.65)}`,
            scrub: 0.4,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              const next = Math.min(
                capabilities.length - 1,
                Math.floor(self.progress * capabilities.length),
              );
              setActiveIdx((prev) => (prev === next ? prev : next));
            },
            onLeave: () => {
              gsap.to(win, { scale: 0.985, duration: 0.4, ease: APPLE_EASE });
            },
            onEnterBack: () => {
              gsap.to(win, { scale: 1, duration: 0.4, ease: APPLE_EASE });
            },
          });

          return () => {
            pinTrigger.kill();
          };
        },
      );

      return () => mm.revert();
    },
    { scope: sectionRef, dependencies: [capabilities.length] },
  );

  useGSAP(
    () => {
      const screen = screenRef.current;
      if (!screen || prefersReducedMotion()) {
        return;
      }
      gsap.fromTo(
        screen,
        { opacity: 0.55, scale: 0.99 },
        { opacity: 1, scale: 1, duration: 0.38, ease: APPLE_EASE, clearProps: 'transform' },
      );
    },
    { scope: screenRef, dependencies: [activeIdx] },
  );

  if (!activeCapability) {
    return null;
  }

  return (
    <section
      ref={sectionRef}
      id="design-studio"
      data-dark-section="true"
      aria-labelledby="design-studio-heading"
      className="relative overflow-x-clip bg-[#111110] py-24 text-[#FAFAF7] sm:py-32"
    >
      {/* Subtle studio ambient light */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-12 mx-auto h-[460px] max-w-[min(92vw,1600px)] bg-[radial-gradient(60%_55%_at_50%_35%,rgba(250,204,21,0.16),transparent_72%)]"
      />

      <div className="bs-container">
        <div id="design-studio-heading">
          <SectionHeading
            inverted
            eyebrow={t.designStudio.eyebrow}
            title={t.designStudio.title}
            subtitle={t.designStudio.subtitle}
          />
        </div>

        <div
          ref={stageRef}
          className="mt-14 grid grid-cols-1 items-center gap-8 lg:mt-16 lg:grid-cols-12 lg:gap-10 xl:gap-14"
        >
          {/* Focused Mac Design Studio Window */}
          <div ref={windowRef} className="lg:col-span-8 will-change-transform">
            <MacWindow
              darkChrome
              title={t.designStudio.windowTitle}
              badge={activeCapability.subtitle}
            >
              <div ref={screenRef}>
                <ScreenshotPlaceholder darkSurface screenshotId={activeCapability.screenshotId} />
              </div>
            </MacWindow>
          </div>

          {/* Supporting capability chapters beside window */}
          <div className="space-y-3 lg:col-span-4">
            {capabilities.map((cap, index) => {
              const selected = index === activeIdx;
              return (
                <button
                  key={cap.id}
                  type="button"
                  onClick={() => setActiveIdx(index)}
                  className={cn(
                    'w-full cursor-pointer rounded-[var(--bs-radius-md)] border p-5 text-left transition-all duration-200',
                    selected
                      ? 'border-[#facc15]/55 bg-[#272000]/75 shadow-[0_14px_36px_-12px_rgba(250,204,21,0.22)] backdrop-blur-xl'
                      : 'border-white/10 bg-white/[0.03] hover:border-[#fef08a]/25 hover:bg-white/[0.06]',
                  )}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-[11px] font-semibold text-[#facc15]">
                      0{index + 1}
                    </span>
                    <span className="text-[11px] font-medium text-[#b5b2a6]">{cap.subtitle}</span>
                  </div>

                  <h3 className="mt-2 text-lg font-semibold tracking-tight text-white">
                    {cap.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-[#b5b2a6]">{cap.description}</p>

                  {selected && (
                    <ul className="mt-3.5 space-y-1.5 border-t border-white/10 pt-3">
                      {cap.specs.map((spec) => (
                        <li
                          key={spec}
                          className="flex items-center gap-2 text-xs font-medium text-[#fef08a]"
                        >
                          <CheckCircle2
                            className="h-3.5 w-3.5 shrink-0 text-[#facc15]"
                            aria-hidden="true"
                          />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
