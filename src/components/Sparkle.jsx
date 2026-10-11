// The four-point sparkle from the logo.
export default function Sparkle({
  width = 44,
  height = 54,
  color = 'var(--gold)',
  className,
  style,
}) {
  return (
    <svg
      className={className}
      style={style}
      width={width}
      height={height}
      viewBox="-40 -48 80 96"
      aria-hidden="true"
    >
      <path
        d="M0 -46 C3 -14 10 -6 38 0 C10 6 3 14 0 46 C-3 14 -10 6 -38 0 C-10 -6 -3 -14 0 -46 Z"
        fill={color}
      />
    </svg>
  )
}
