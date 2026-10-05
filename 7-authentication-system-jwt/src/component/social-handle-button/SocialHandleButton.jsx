import { Link } from "react-router-dom";
import Image from "../ui/Image";

export default function SocialHandleButton({
  to,
  title,
  src,
  alt,
  width,
  height,
  className,
}) {
  return (
    <Link to={to} target="_blank" title={title}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
      />
    </Link>
  );
}
