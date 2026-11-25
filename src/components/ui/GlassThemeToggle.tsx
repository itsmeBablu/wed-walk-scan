import { Monitor, Moon, Sun } from 'lucide-react';
import { GlassSegmentedControl, type SegmentedOption } from '@/components/ui/GlassSegmentedControl';
import { useLanguage } from '@/hooks/useLanguage';
import { useTheme } from '@/hooks/useTheme';
import type { ThemePreference } from '@/types';

interface GlassThemeToggleProps {
  compact?: boolean;
  size?: 'sm' | 'md';
  className?: string;
}

export function GlassThemeToggle({
  compact = false,
  size = 'sm',
  className,
}: GlassThemeToggleProps) {
  const { preference, setPreference } = useTheme();
  const { t } = useLanguage();

  const options: SegmentedOption<ThemePreference>[] = [
    {
      value: 'light',
      label: t.controls.themes.light,
      ariaLabel: t.controls.themes.light,
      icon: <Sun className="h-3.5 w-3.5" aria-hidden="true" />,
    },
    {
      value: 'dark',
      label: t.controls.themes.dark,
      ariaLabel: t.controls.themes.dark,
      icon: <Moon className="h-3.5 w-3.5" aria-hidden="true" />,
    },
    {
      value: 'system',
      label: t.controls.themes.system,
      ariaLabel: t.controls.themes.system,
      icon: <Monitor className="h-3.5 w-3.5" aria-hidden="true" />,
    },
  ];

  return (
    <GlassSegmentedControl
      options={options}
      value={preference}
      onChange={setPreference}
      ariaLabel={t.controls.themeLabel}
      compact={compact}
      size={size}
      className={className}
    />
  );
}
