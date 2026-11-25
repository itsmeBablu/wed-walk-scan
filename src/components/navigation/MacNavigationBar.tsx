import { LiquidGlassNavigation } from '@/components/navigation/LiquidGlassNavigation';
import type { SectionId } from '@/types';

interface MacNavigationBarProps {
  activeSection: SectionId;
  isScrolled: boolean;
  isOverDark: boolean;
  onSelectSection: (id: SectionId) => void;
}

export function MacNavigationBar({
  activeSection,
  isScrolled,
  isOverDark,
  onSelectSection,
}: MacNavigationBarProps) {
  return (
    <div className="bs-nav-shell hidden lg:block">
      <LiquidGlassNavigation
        activeSection={activeSection}
        isScrolled={isScrolled}
        isOverDark={isOverDark}
        onSelectSection={onSelectSection}
      />
    </div>
  );
}
