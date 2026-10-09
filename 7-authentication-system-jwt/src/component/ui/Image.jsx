export default function Image({ src, ...props }) {
  return <img src={src} {...props} />;
}
