import { cn } from '@/utils/cn';

interface BrandLogoProps {
  size?: number;
  className?: string;
}

/**
 * dWalkScan geometric app icon combining an isometric 3D spatial prism
 * with a calibrated dimensional scan plane.
 */
export function BrandLogo({ size = 28, className }: BrandLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 128 128"
      fill="none"
      aria-hidden="true"
      className={cn('shrink-0', className)}
    >
      <defs>
        <linearGradient
          id="dws-logo-bg"
          x1="12"
          y1="8"
          x2="116"
          y2="120"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#272000" />
          <stop offset="55%" stopColor="#1A1708" />
          <stop offset="100%" stopColor="#111110" />
        </linearGradient>
      </defs>
      <rect x="4" y="4" width="120" height="120" rx="28" fill="url(#dws-logo-bg)" />
      <rect
        x="4.75"
        y="4.75"
        width="118.5"
        height="118.5"
        rx="27.25"
        stroke="#FACC15"
        strokeOpacity="0.48"
        strokeWidth="1.5"
      />
      {/* Isometric 3D architectural envelope */}
      <path
        d="M64 26L97 45V83L64 102L31 83V45L64 26Z"
        stroke="#FACC15"
        strokeWidth="4.8"
        strokeLinejoin="round"
      />
      <path
        d="M64 26V64M64 64L97 45M64 64L31 45M64 64V102"
        stroke="#FEF08A"
        strokeOpacity="0.84"
        strokeWidth="3.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Dimensional LiDAR scan plane */}
      <path
        d="M24 64H104"
        stroke="#FEF3C7"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="4 6"
      />
      <circle cx="64" cy="64" r="6" fill="#FACC15" />
    </svg>
  );
}
