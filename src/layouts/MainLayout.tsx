import { useEffect, useRef, type ReactNode } from 'react';
import {
  APPLE_CINEMATIC_EASE,
  gsap,
  prefersReducedMotion,
  ScrollTrigger,
  useGSAP,
} from '@/animations/gsapConfig';
import { MacNavigationBar } from '@/components/navigation/MacNavigationBar';
import { MobileNavigation } from '@/components/navigation/MobileNavigation';
import { Footer } from '@/components/ui/Footer';
import { LiquidGlassSvgDefs } from '@/components/ui/LiquidGlassSvgDefs';
import { NAVIGATION_ITEMS } from '@/data/navigation';
import { useLanguage } from '@/hooks/useLanguage';
import { useScrollSpy } from '@/hooks/useScrollSpy';

const SECTION_IDS = NAVIGATION_ITEMS.map((item) => item.id);

export function MainLayout({ children }: { children: ReactNode }) {
  const { t } = useLanguage();
  const { activeSection, isScrolled, isOverDark, selectSection } = useScrollSpy(SECTION_IDS);
  const headerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const header = headerRef.current;
      if (!header || prefersReducedMotion()) {
        return;
      }

      gsap.from(header, {
        y: -26,
        opacity: 0,
        duration: 0.72,
        ease: APPLE_CINEMATIC_EASE,
        clearProps: 'transform,opacity',
      });
    },
    { scope: headerRef },
  );

  useEffect(() => {
    const id = window.requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });
    return () => window.cancelAnimationFrame(id);
  }, []);

  return (
    <div
      id="top"
      className="relative min-h-dvh bg-[var(--bs-bg-page)] text-[var(--bs-text-primary)]"
    >
      <LiquidGlassSvgDefs />

      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-full focus:bg-[var(--bs-accent)] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-[var(--bs-accent-ink)]"
      >
        {t.nav.skipToContent}
      </a>

      <header
        ref={headerRef}
        className="pointer-events-none fixed inset-x-0 top-0 z-40 pt-3 sm:pt-4"
      >
        <div className="pointer-events-auto">
          <MacNavigationBar
            activeSection={activeSection}
            isScrolled={isScrolled}
            isOverDark={isOverDark}
            onSelectSection={selectSection}
          />
          <MobileNavigation
            activeSection={activeSection}
            isScrolled={isScrolled}
            isOverDark={isOverDark}
            onSelectSection={selectSection}
          />
        </div>
      </header>

      <main id="main-content">{children}</main>

      <Footer />
    </div>
  );
}
