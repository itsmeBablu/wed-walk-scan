import { Download, Menu, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { APPLE_EASE, gsap, prefersReducedMotion, useGSAP } from '@/animations/gsapConfig';
import { BrandLogo } from '@/components/ui/BrandLogo';
import { BrandWordmark } from '@/components/ui/BrandWordmark';
import { GlassThemeToggle } from '@/components/ui/GlassThemeToggle';
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher';
import { LiquidGlassButton } from '@/components/ui/LiquidGlassButton';
import { NAVIGATION_ITEMS } from '@/data/navigation';
import { useLanguage } from '@/hooks/useLanguage';
import type { SectionId } from '@/types';
import { cn } from '@/utils/cn';

interface MobileNavigationProps {
  activeSection: SectionId;
  isScrolled: boolean;
  isOverDark: boolean;
  onSelectSection: (id: SectionId) => void;
}

export function MobileNavigation({
  activeSection,
  isScrolled,
  isOverDark,
  onSelectSection,
}: MobileNavigationProps) {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const navBarRef = useRef<HTMLElement>(null);
  const sheetRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (!open) {
      return;
    }
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [open]);

  // GSAP compact <-> expanded height on mobile scroll
  useGSAP(
    () => {
      const bar = navBarRef.current;
      if (!bar) {
        return;
      }
      const targetHeight = isScrolled ? 50 : 58;
      if (isFirstRender.current || prefersReducedMotion()) {
        isFirstRender.current = false;
        gsap.set(bar, { height: targetHeight });
        return;
      }
      gsap.to(bar, {
        height: targetHeight,
        duration: 0.34,
        ease: APPLE_EASE,
        overwrite: 'auto',
      });
    },
    { scope: navBarRef, dependencies: [isScrolled] },
  );

  // GSAP glass sheet + staggered navigation links entrance
  useGSAP(
    () => {
      const sheet = sheetRef.current;
      if (!open || !sheet || prefersReducedMotion()) {
        return;
      }

      const tl = gsap.timeline({ defaults: { ease: APPLE_EASE } });
      tl.fromTo(
        sheet,
        { opacity: 0, y: -12, scale: 0.97 },
        { opacity: 1, y: 0, scale: 1, duration: 0.28, clearProps: 'transform' },
      ).from(
        '[data-mobile-nav-item]',
        {
          opacity: 0,
          x: -10,
          duration: 0.24,
          stagger: 0.04,
          clearProps: 'transform,opacity',
        },
        '-=0.14',
      );
    },
    { scope: sheetRef, dependencies: [open] },
  );

  return (
    <div className="px-4 lg:hidden">
      <nav
        ref={navBarRef}
        aria-label="Mobile"
        data-over-dark={isOverDark ? 'true' : undefined}
        className="liquid-glass liquid-glass--nav mx-auto flex h-[58px] items-center justify-between rounded-full px-3.5"
      >
        <a href="#top" className="relative z-[3] flex items-center gap-2.5">
          <BrandLogo size={26} />
          <BrandWordmark className="text-[15px] font-semibold text-[var(--bs-text-primary)]" />
        </a>

        <div className="relative z-[3] flex items-center gap-2">
          <LanguageSwitcher size="sm" />
          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-glass-sheet"
            aria-label={open ? t.nav.menuClose : t.nav.menuOpen}
            onClick={() => setOpen((prev) => !prev)}
            className="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-[var(--bs-surface)]/80 text-[var(--bs-text-primary)] ring-1 ring-[var(--bs-border-subtle)] transition-transform active:scale-95 dark:bg-white/12"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {open && (
        <div
          id="mobile-glass-sheet"
          ref={sheetRef}
          className="liquid-glass liquid-glass--elevated mt-2.5 rounded-[var(--bs-radius-lg)] p-4"
        >
          <div className="relative z-[3] flex flex-col gap-4">
            <ul className="space-y-1">
              {NAVIGATION_ITEMS.map((item) => {
                const isActive = item.id === activeSection;
                return (
                  <li key={item.id} data-mobile-nav-item>
                    <a
                      href={item.href}
                      onClick={() => {
                        onSelectSection(item.id);
                        setOpen(false);
                      }}
                      className={cn(
                        'flex items-center justify-between rounded-[14px] px-3.5 py-2.5 text-[15px] transition-colors',
                        isActive
                          ? 'bg-[var(--bs-accent)] font-semibold text-[var(--bs-accent-ink)]'
                          : 'font-medium text-[var(--bs-text-primary)] hover:bg-[var(--bs-border-subtle)]',
                      )}
                    >
                      <span>{t.nav.items[item.id]}</span>
                      {isActive && (
                        <span
                          aria-hidden="true"
                          className="h-2 w-2 rounded-full bg-[var(--bs-accent-ink)]"
                        />
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>

            <div
              data-mobile-nav-item
              className="flex flex-wrap items-center justify-between gap-3 border-t border-[var(--bs-border-subtle)] pt-3"
            >
              <GlassThemeToggle size="sm" />
              <LiquidGlassButton
                href="#downloads"
                size="sm"
                onClick={() => {
                  onSelectSection('downloads');
                  setOpen(false);
                }}
              >
                <Download className="h-3.5 w-3.5" aria-hidden="true" />
                {t.nav.downloadCta}
              </LiquidGlassButton>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
