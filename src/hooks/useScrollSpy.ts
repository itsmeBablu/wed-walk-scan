import { useCallback, useEffect, useRef, useState } from 'react';
import type { SectionId } from '@/types';

interface ScrollSpyState {
  activeSection: SectionId;
  isScrolled: boolean;
  isOverDark: boolean;
  selectSection: (id: SectionId) => void;
}

export function useScrollSpy(sectionIds: readonly SectionId[]): ScrollSpyState {
  const [activeSection, setActiveSection] = useState<SectionId>(sectionIds[0] ?? 'overview');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOverDark, setIsOverDark] = useState(false);
  const lockUntilRef = useRef(0);

  const selectSection = useCallback((id: SectionId) => {
    lockUntilRef.current = performance.now() + 850;
    setActiveSection(id);
  }, []);

  useEffect(() => {
    let rafId = 0;

    const evaluate = () => {
      rafId = 0;
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 48);

      // Detect whether a dark section sits underneath the fixed glass navbar
      const darkSections = document.querySelectorAll<HTMLElement>('[data-dark-section="true"]');
      let overlappingDark = false;
      darkSections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 68 && rect.bottom >= 24) {
          overlappingDark = true;
        }
      });
      setIsOverDark(overlappingDark);

      if (performance.now() < lockUntilRef.current) {
        return;
      }

      // If near the very bottom of the page, highlight the last nav section (`downloads`)
      const docHeight = document.documentElement.scrollHeight;
      if (window.innerHeight + scrollY >= docHeight - 36) {
        const lastId = sectionIds[sectionIds.length - 1];
        if (lastId) {
          setActiveSection((prev) => (prev === lastId ? prev : lastId));
        }
        return;
      }

      // Deterministic geometric scroll-spy: works reliably alongside GSAP pin spacers
      const triggerY = Math.min(260, window.innerHeight * 0.34);
      let current: SectionId = sectionIds[0] ?? 'overview';

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) {
          continue;
        }
        const rect = el.getBoundingClientRect();
        if (rect.top <= triggerY) {
          current = id;
        }
      }

      setActiveSection((prev) => (prev === current ? prev : current));
    };

    const scheduleEvaluate = () => {
      if (!rafId) {
        rafId = window.requestAnimationFrame(evaluate);
      }
    };

    evaluate();
    window.addEventListener('scroll', scheduleEvaluate, { passive: true });
    window.addEventListener('resize', scheduleEvaluate, { passive: true });

    return () => {
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }
      window.removeEventListener('scroll', scheduleEvaluate);
      window.removeEventListener('resize', scheduleEvaluate);
    };
  }, [sectionIds]);

  return { activeSection, isScrolled, isOverDark, selectSection };
}
