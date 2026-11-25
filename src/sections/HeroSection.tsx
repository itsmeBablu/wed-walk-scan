import { ArrowDownRight, Compass, Sparkles } from 'lucide-react';
import { useRef } from 'react';
import {
  APPLE_CINEMATIC_EASE,
  APPLE_EASE,
  gsap,
  prefersReducedMotion,
  useGSAP,
} from '@/animations/gsapConfig';
import { AnimatedIPadFrame } from '@/components/devices/AnimatedIPadFrame';
import { AnimatedIPhoneFrame } from '@/components/devices/AnimatedIPhoneFrame';
import { AnimatedMacWindow } from '@/components/devices/AnimatedMacWindow';
import { BrandLogo } from '@/components/ui/BrandLogo';
import { BrandWordmark } from '@/components/ui/BrandWordmark';
import { Button } from '@/components/ui/Button';
import { LiquidGlassButton } from '@/components/ui/LiquidGlassButton';
import { LiquidGlassPanel } from '@/components/ui/LiquidGlassPanel';
import { ScreenshotPlaceholder } from '@/components/ui/ScreenshotPlaceholder';
import { useLanguage } from '@/hooks/useLanguage';

export function HeroSection() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const root = sectionRef.current;
      if (!root || prefersReducedMotion()) {
        return;
      }

      const tl = gsap.timeline({ defaults: { ease: APPLE_CINEMATIC_EASE } });

      tl.from('[data-hero-brand]', {
        opacity: 0,
        y: 14,
        duration: 0.45,
        clearProps: 'transform,opacity',
      })
        .from(
          '[data-hero-line]',
          {
            opacity: 0,
            y: 28,
            duration: 0.65,
            stagger: 0.08,
            clearProps: 'transform,opacity',
          },
          '-=0.25',
        )
        .from(
          '[data-hero-copy]',
          {
            opacity: 0,
            y: 20,
            duration: 0.6,
            stagger: 0.08,
            ease: APPLE_EASE,
            clearProps: 'transform,opacity',
          },
          '-=0.36',
        )
        .from(
          '[data-hero-ctas]',
          {
            opacity: 0,
            y: 16,
            duration: 0.54,
            ease: APPLE_EASE,
            clearProps: 'transform,opacity',
          },
          '-=0.34',
        )
        .from(
          '[data-hero-mac]',
          {
            opacity: 0,
            scale: 0.94,
            y: 34,
            duration: 0.85,
            clearProps: 'transform,opacity',
          },
          '-=0.38',
        )
        .from(
          '[data-hero-ipad]',
          {
            opacity: 0,
            y: 40,
            scale: 0.95,
            duration: 0.82,
            clearProps: 'transform,opacity',
          },
          '-=0.6',
        )
        .from(
          '[data-hero-iphone]',
          {
            opacity: 0,
            y: 48,
            scale: 0.95,
            duration: 0.82,
            clearProps: 'transform,opacity',
          },
          '-=0.62',
        );

      const mm = gsap.matchMedia();
      mm.add('(min-width: 1024px) and (hover: hover)', () => {
        gsap.to('[data-hero-ipad]', {
          y: () => -Math.max(16, Math.round(root.clientHeight * 0.025)),
          ease: 'none',
          scrollTrigger: {
            trigger: root,
            start: 'top top',
            end: 'bottom top',
            scrub: 0.5,
            invalidateOnRefresh: true,
          },
        });
        gsap.to('[data-hero-iphone]', {
          y: () => -Math.max(28, Math.round(root.clientHeight * 0.045)),
          ease: 'none',
          scrollTrigger: {
            trigger: root,
            start: 'top top',
            end: 'bottom top',
            scrub: 0.5,
            invalidateOnRefresh: true,
          },
        });
      });

      return () => mm.revert();
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      aria-labelledby="hero-headline"
      className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28"
    >
      {/* Ambient architectural optical aura */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 mx-auto h-[580px] max-w-[min(94vw,1760px)] bg-[radial-gradient(62%_54%_at_50%_18%,rgba(250,204,21,0.2),transparent_72%)] dark:bg-[radial-gradient(62%_54%_at_50%_18%,rgba(250,204,21,0.16),transparent_72%)]"
      />

      <div className="bs-container">
        <div className="mx-auto max-w-5xl text-center 2xl:max-w-6xl">
          {/* 1. dWalkScan branding */}
          <div data-hero-brand className="flex flex-col items-center gap-3">
            <LiquidGlassPanel
              variant="elevated"
              rounded="pill"
              className="inline-flex items-center gap-2.5 px-4 py-1.5"
            >
              <div className="flex items-center gap-2.5">
                <BrandLogo size={22} />
                <BrandWordmark className="text-xs font-semibold text-[var(--bs-text-primary)]" />
                <span className="h-3 w-px bg-[var(--bs-border-strong)]" aria-hidden="true" />
                <span className="text-xs font-medium text-[var(--bs-text-muted)]">
                  {t.hero.eyebrow}
                </span>
              </div>
            </LiquidGlassPanel>
          </div>

          {/* 2. Staggered headline */}
          <h1
            id="hero-headline"
            className="mt-7 flex flex-wrap items-baseline justify-center gap-x-[clamp(0.75rem,1.4vw,1.75rem)] gap-y-1 text-[clamp(2.6rem,5.4vw,6.2rem)] leading-[1.01] font-semibold tracking-[-0.036em] text-[var(--bs-text-primary)]"
          >
            {t.hero.headlineLines.map((word) => (
              <span key={word} data-hero-line className="inline-block">
                {word}
              </span>
            ))}
          </h1>

          {/* 3. Supporting headlines & description */}
          <p
            data-hero-copy
            className="mt-4 text-[clamp(1.18rem,1.8vw,1.85rem)] font-medium tracking-tight text-[var(--bs-accent-text)]"
          >
            {t.hero.leadStatement}
          </p>

          <p
            data-hero-copy
            className="bs-prose mx-auto mt-3.5 text-base leading-relaxed text-pretty text-[var(--bs-text-muted)] sm:text-lg"
          >
            {t.hero.description}
          </p>

          <div data-hero-copy className="mt-4 flex justify-center">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--bs-badge-bg)] px-3.5 py-1 text-xs font-medium text-[var(--bs-badge-text)] ring-1 ring-[var(--bs-badge-border)]">
              <Sparkles className="h-3.5 w-3.5 text-[var(--bs-accent-text)]" aria-hidden="true" />
              {t.hero.platformPill}
            </span>
          </div>

          {/* 4. Liquid Glass & architectural CTAs */}
          <div data-hero-ctas className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
            <LiquidGlassButton href="#ecosystem" size="lg">
              <Compass className="h-4 w-4" aria-hidden="true" />
              {t.hero.primaryCta}
            </LiquidGlassButton>

            <Button href="#features" variant="secondary" size="lg">
              {t.hero.secondaryCta}
              <ArrowDownRight className="h-4 w-4 text-[var(--bs-accent-text)]" aria-hidden="true" />
            </Button>
          </div>
        </div>

        {/* 5, 6 & 7. Three-Device Apple Ecosystem Showcase: MacBook + iPad + iPhone */}
        <div className="relative mx-auto mt-12 flex w-full max-w-[min(100%,2200px)] flex-col gap-8 sm:mt-16 lg:mt-20 lg:block lg:pb-[clamp(4.5rem,7.5vw,10.5rem)]">
          {/* Background: MacBook displaying Design Studio */}
          <div data-hero-mac className="relative mx-auto w-full lg:w-[min(78%,1560px)]">
            <AnimatedMacWindow
              manualControl
              title={t.hero.macLabel}
              badge="macOS"
              className="relative"
            >
              <div className="relative overflow-hidden">
                <ScreenshotPlaceholder screenshotId="hero-mac" priority />
                <div
                  aria-hidden="true"
                  className="glass-sheen-bar pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/18 to-transparent"
                />
              </div>
            </AnimatedMacWindow>
          </div>

          {/* Middle Layer: iPad displaying Floor Plans */}
          <div
            data-hero-ipad
            className="mx-auto w-full max-w-[460px] lg:absolute lg:bottom-0 lg:left-0 lg:z-10 lg:w-[clamp(340px,31%,680px)] lg:max-w-none"
          >
            <AnimatedIPadFrame manualControl label={t.hero.ipadLabel}>
              <div className="relative overflow-hidden">
                <ScreenshotPlaceholder screenshotId="hero-ipad" priority />
                <div
                  aria-hidden="true"
                  className="glass-sheen-bar pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/16 to-transparent"
                />
              </div>
            </AnimatedIPadFrame>
          </div>

          {/* Foreground: iPhone displaying LiDAR Capture */}
          <div
            data-hero-iphone
            className="mx-auto w-full max-w-[270px] lg:absolute lg:right-0 lg:-bottom-4 lg:z-20 lg:w-[clamp(210px,18%,390px)] lg:max-w-none"
          >
            <AnimatedIPhoneFrame manualControl label={t.hero.iphoneLabel}>
              <div className="relative overflow-hidden">
                <ScreenshotPlaceholder screenshotId="hero-iphone" priority />
                <div
                  aria-hidden="true"
                  className="glass-sheen-bar pointer-events-none absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                />
              </div>
            </AnimatedIPhoneFrame>
          </div>
        </div>
      </div>
    </section>
  );
}
