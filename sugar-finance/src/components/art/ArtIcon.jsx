import { ART } from "../../assets/art/index.js";

// Renders a project pixel-art sprite crisply at any size.
export default function ArtIcon({ name, size = 40, className = "", alt = "", glow = false, style = {} }) {
  const src = ART[name];
  if (!src) return null;
  return (
    <img
      src={src}
      alt={alt}
      width={size}
      height={size}
      draggable={false}
      className={`pixelated select-none ${glow ? "drop-shadow-[0_0_10px_rgba(255,77,125,0.45)]" : ""} ${className}`}
      style={{ width: size, height: size, objectFit: "contain", ...style }}
    />
  );
}
