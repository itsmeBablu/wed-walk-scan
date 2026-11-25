import { GlassSegmentedControl, type SegmentedOption } from '@/components/ui/GlassSegmentedControl';
import { useLanguage } from '@/hooks/useLanguage';
import type { Language } from '@/types';

interface LanguageSwitcherProps {
  size?: 'sm' | 'md';
  className?: string;
}

const LANGUAGE_OPTIONS: readonly SegmentedOption<Language>[] = [
  { value: 'en', label: 'EN', ariaLabel: 'English' },
  { value: 'de', label: 'DE', ariaLabel: 'Deutsch' },
];

export function LanguageSwitcher({ size = 'sm', className }: LanguageSwitcherProps) {
  const { language, setLanguage, t } = useLanguage();

  return (
    <GlassSegmentedControl
      options={LANGUAGE_OPTIONS}
      value={language}
      onChange={setLanguage}
      ariaLabel={t.controls.languageLabel}
      size={size}
      className={className}
    />
  );
}
