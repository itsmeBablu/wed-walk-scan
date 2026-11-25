/**
 * Global hidden SVG filter definitions used by decorative optical Liquid Glass
 * sheen layers. Text layers never sit inside displacement filters so typography
 * remains crisp across Safari, Chrome, Firefox, and Edge.
 */
export function LiquidGlassSvgDefs() {
  return (
    <svg
      aria-hidden="true"
      width="0"
      height="0"
      className="pointer-events-none fixed h-0 w-0 overflow-hidden"
    >
      <defs>
        <filter id="dwalkscan-glass-caustics" x="-10%" y="-10%" width="120%" height="120%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.012 0.018"
            numOctaves="2"
            seed="7"
            result="noise"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale="6"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </defs>
    </svg>
  );
}
