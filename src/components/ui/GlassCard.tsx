import { LiquidGlassCard, type LiquidGlassCardProps } from '@/components/ui/LiquidGlassCard';

export type GlassCardProps = LiquidGlassCardProps;

export function GlassCard(props: GlassCardProps) {
  return <LiquidGlassCard {...props} />;
}
