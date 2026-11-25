import { GlassThemeToggle } from '@/components/ui/GlassThemeToggle';

export function ThemeToggle(props: { compact?: boolean; size?: 'sm' | 'md'; className?: string }) {
  return <GlassThemeToggle {...props} />;
}
