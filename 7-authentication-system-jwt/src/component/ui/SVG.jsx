export default function SVG({ xmlns, width, height, children, ...props }) {
  return (
    <svg xmlns={xmlns} width={width} height={height} {...props}>
      {children}
    </svg>
  );
}
