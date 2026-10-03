export default function SVG({
  xmlns,
  width,
  height,
  fill,
  viewBox,
  strokeWidth,
  stroke,
  className,
  children,
}) {
  return (
    <svg
      xmlns={xmlns}
      width={width}
      height={height}
      fill={fill}
      viewBox={viewBox}
      stroke-width={strokeWidth}
      stroke={stroke}
      class={className}
    >
      {children}
    </svg>
  );
}
