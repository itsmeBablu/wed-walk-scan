import { useCallback, useEffect, useRef } from 'react';
import { APPLE_EASE, gsap, prefersReducedMotion, useGSAP } from '@/animations/gsapConfig';
import { BrandLogo } from '@/components/ui/BrandLogo';
import { BrandWordmark } from '@/components/ui/BrandWordmark';
import { GlassThemeToggle } from '@/components/ui/GlassThemeToggle';
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher';
import { LiquidGlassButton } from '@/components/ui/LiquidGlassButton';
import { NAVIGATION_ITEMS } from '@/data/navigation';
import { useLanguage } from '@/hooks/useLanguage';
import { usePointerGlow } from '@/hooks/usePointerGlow';
import type { SectionId } from '@/types';
import { cn } from '@/utils/cn';

interface LiquidGlassNavigationProps {
  activeSection: SectionId;
  isScrolled: boolean;
  isOverDark: boolean;
  onSelectSection: (id: SectionId) => void;
}

function measureAnchorInTrack(
  anchor: HTMLAnchorElement,
  track: HTMLUListElement,
): { x: number; width: number } {
  const trackRect = track.getBoundingClientRect();
  const anchorRect = anchor.getBoundingClientRect();
  return {
    x: Math.round((anchorRect.left - trackRect.left) * 10) / 10,
    width: Math.round(anchorRect.width * 10) / 10,
  };
}

export function LiquidGlassNavigation({
  activeSection,
  isScrolled,
  isOverDark,
  onSelectSection,
}: LiquidGlassNavigationProps) {
  const { t, language } = useLanguage();
  const pillRef = useRef<HTMLElement>(null);
  const logoWrapRef = useRef<HTMLDivElement>(null);
  const navTrackRef = useRef<HTMLUListElement>(null);
  const activeIndicatorRef = useRef<HTMLSpanElement>(null);
  const hoverIndicatorRef = useRef<HTMLSpanElement>(null);
  const itemRefs = useRef<Map<SectionId, HTMLAnchorElement>>(new Map());
  const isFirstIndicatorRender = useRef(true);
  const isFirstCompactRender = useRef(true);
  const lastViewportWidth = useRef(typeof window !== 'undefined' ? window.innerWidth : 1440);

  usePointerGlow(pillRef, true);

  // GSAP compact <-> expanded scroll animation for floating macOS capsule
  useGSAP(
    () => {
      const pill = pillRef.current;
      const logoWrap = logoWrapRef.current;
      if (!pill || !logoWrap) {
        return;
      }

      const targetVars = {
        height: isScrolled ? 52 : 58,
        maxWidth: isScrolled ? 1020 : 1140,
        paddingLeft: isScrolled ? 14 : 18,
        paddingRight: isScrolled ? 14 : 18,
        y: isScrolled ? -2 : 0,
      };

      const logoScale = isScrolled ? 0.9 : 1;

      if (isFirstCompactRender.current || prefersReducedMotion()) {
        isFirstCompactRender.current = false;
        gsap.set(pill, targetVars);
        gsap.set(logoWrap, { scale: logoScale });
        return;
      }

      gsap.to(pill, {
        ...targetVars,
        duration: 0.42,
        ease: APPLE_EASE,
        overwrite: 'auto',
      });
      gsap.to(logoWrap, {
        scale: logoScale,
        duration: 0.36,
        ease: APPLE_EASE,
        overwrite: 'auto',
      });
    },
    { scope: pillRef, dependencies: [isScrolled] },
  );

  // Persistent non-reverting GSAP active pill slider measured relative to navTrackRef
  const slideActiveIndicator = useCallback(
    (animate: boolean) => {
      const indicator = activeIndicatorRef.current;
      const track = navTrackRef.current;
      const activeEl = itemRefs.current.get(activeSection);
      if (!indicator || !track || !activeEl) {
        return;
      }

      const { x, width } = measureAnchorInTrack(activeEl, track);
      if (width <= 0) {
        return;
      }

      if (!animate || prefersReducedMotion()) {
        gsap.set(indicator, { x, width, opacity: 1 });
        return;
      }

      gsap.to(indicator, {
        x,
        width,
        opacity: 1,
        duration: 0.42,
        ease: APPLE_EASE,
        overwrite: 'auto',
      });
    },
    [activeSection],
  );

  useEffect(() => {
    const animate = !isFirstIndicatorRender.current;
    isFirstIndicatorRender.current = false;
    slideActiveIndicator(animate);
  }, [activeSection, language, isScrolled, slideActiveIndicator]);

  useEffect(() => {
    let active = true;
    document.fonts?.ready.then(() => {
      if (active) {
        slideActiveIndicator(false);
      }
    });

    const onResize = () => {
      if (window.innerWidth !== lastViewportWidth.current) {
        lastViewportWidth.current = window.innerWidth;
        slideActiveIndicator(false);
      }
    };

    window.addEventListener('resize', onResize, { passive: true });
    return () => {
      active = false;
      window.removeEventListener('resize', onResize);
    };
  }, [slideActiveIndicator]);

  useEffect(() => {
    const indicator = activeIndicatorRef.current;
    const hoverEl = hoverIndicatorRef.current;
    return () => {
      if (indicator) {
        gsap.killTweensOf(indicator);
      }
      if (hoverEl) {
        gsap.killTweensOf(hoverEl);
      }
    };
  }, []);

  // GSAP gliding glass hover pill measured relative to navTrackRef
  const handleItemEnter = (id: SectionId) => {
    const hoverEl = hoverIndicatorRef.current;
    const track = navTrackRef.current;
    const anchor = itemRefs.current.get(id);
    if (!hoverEl || !track || !anchor || prefersReducedMotion()) {
      return;
    }
    const { x, width } = measureAnchorInTrack(anchor, track);
    gsap.to(hoverEl, {
      x,
      width,
      opacity: 1,
      duration: 0.24,
      ease: APPLE_EASE,
      overwrite: 'auto',
    });
  };

  const handleTrackLeave = () => {
    const hoverEl = hoverIndicatorRef.current;
    if (!hoverEl) {
      return;
    }
    gsap.to(hoverEl, {
      opacity: 0,
      duration: 0.2,
      ease: 'power2.out',
      overwrite: 'auto',
    });
  };

  return (
    <nav
      ref={pillRef}
      aria-label="Primary"
      data-interactive="true"
      data-over-dark={isOverDark ? 'true' : undefined}
      className="liquid-glass liquid-glass--nav mx-auto flex h-[58px] max-w-[1140px] items-center justify-between gap-4 rounded-full px-[18px] will-change-transform"
    >
      {/* Brand mark */}
      <a
        href="#top"
        className="relative z-[3] flex shrink-0 items-center gap-2.5 rounded-full py-1 pr-2 pl-1 transition-opacity hover:opacity-85"
      >
        <div ref={logoWrapRef} className="inline-flex origin-left will-change-transform">
          <BrandLogo size={28} />
        </div>
        <BrandWordmark className="text-[15px] font-semibold text-[var(--bs-text-primary)]" />
      </a>

      {/* Navigation links with GSAP hover + sliding Primary Yellow active pill */}
      <ul
        ref={navTrackRef}
        onPointerLeave={handleTrackLeave}
        className="relative z-[3] hidden items-center gap-1 rounded-full bg-black/[0.03] p-1 lg:flex dark:bg-white/[0.04]"
      >
        <span
          ref={hoverIndicatorRef}
          aria-hidden="true"
          className="pointer-events-none absolute top-1 bottom-1 left-0 rounded-full bg-black/[0.05] opacity-0 dark:bg-white/[0.08]"
        />

        <span
          ref={activeIndicatorRef}
          aria-hidden="true"
          className="pointer-events-none absolute top-1 bottom-1 left-0 rounded-full bg-[var(--bs-accent)] opacity-0 shadow-[0_4px_14px_-3px_rgba(250,204,21,0.65)] will-change-transform"
        />

        {NAVIGATION_ITEMS.map((item) => {
          const isActive = item.id === activeSection;
          return (
            <li key={item.id} className="z-[2]">
              <a
                ref={(el) => {
                  if (el) {
                    itemRefs.current.set(item.id, el);
                  } else {
                    itemRefs.current.delete(item.id);
                  }
                }}
                href={item.href}
                aria-current={isActive ? 'page' : undefined}
                onClick={() => onSelectSection(item.id)}
                onPointerEnter={() => handleItemEnter(item.id)}
                className={cn(
                  'inline-flex items-center rounded-full whitespace-nowrap transition-colors duration-200',
                  isScrolled ? 'h-8 px-3 text-[12.5px]' : 'h-8 px-3.5 text-[13px]',
                  isActive
                    ? 'font-semibold text-[var(--bs-accent-ink)]'
                    : 'font-medium text-[var(--bs-text-muted)] hover:text-[var(--bs-text-primary)]',
                )}
              >
                {t.nav.items[item.id]}
              </a>
            </li>
          );
        })}
      </ul>

      {/* Controls + Liquid Glass CTA */}
      <div className="relative z-[3] flex shrink-0 items-center gap-2">
        <LanguageSwitcher size="sm" />
        <GlassThemeToggle compact size="sm" />
        <LiquidGlassButton
          href="#downloads"
          size="sm"
          onClick={() => onSelectSection('downloads')}
          className="inline-flex"
        >
          {t.nav.downloadCta}
        </LiquidGlassButton>
      </div>
    </nav>
  );
}
