import Image from "next/image";
import Link from "next/link";

export default function VoxwelLogo({
  size = "default",
  className = "",
}: {
  size?: "small" | "default" | "large";
  className?: string;
}) {
  const sizes = {
    small: { width: 20, height: 20 },
    default: { width: 50, height: 50 },
    large: { width: 80, height: 80 },
  };

  const currentSize = sizes[size];

  return (
    <Link href="/" className={`inline-block ${className}`}>
      <Image
        src="/voxwel1.avif"
        alt="VoxWel"
        width={currentSize.width}
        height={currentSize.height}
        priority
        className="object-contain"
      />
    </Link>
  );
}
