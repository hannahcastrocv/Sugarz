import { ART } from "../../assets/art/index.js";

// The official Sugar coin. Rendered from the project coin artwork so it matches
// the brand exactly everywhere it appears (logo, token icon, pool pairs).
export function SugarCoin({ size = 28, className = "", glow = false }) {
  return (
    <img
      src={ART.coin}
      alt="Sugar"
      width={size}
      height={size}
      draggable={false}
      className={`pixelated select-none ${glow ? "drop-shadow-[0_0_8px_rgba(255,77,125,0.5)]" : ""} ${className}`}
      style={{ width: size, height: size, objectFit: "contain" }}
    />
  );
}

export function SugarLogo({ compact = false }) {
  return (
    <div className="flex items-center gap-2 select-none">
      <SugarCoin size={compact ? 26 : 30} glow />
      <span className="leading-none">
        <span
          className="font-display font-extrabold text-sugar-pink"
          style={{ fontSize: compact ? "20px" : "23px", letterSpacing: "-0.01em" }}
        >
          Sugar
        </span>
        <span
          className="ml-1.5 font-display font-bold text-ink"
          style={{ fontSize: compact ? "17px" : "19px", letterSpacing: "-0.01em" }}
        >
          Finance
        </span>
      </span>
    </div>
  );
}

export default SugarLogo;
