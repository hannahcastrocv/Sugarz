import PixelIcon from "../icons/PixelIcon.jsx";
import ArtIcon from "../art/ArtIcon.jsx";
import { LAUNCH_STATUS } from "../../config/siteConfig.js";

// Card shell.
export function Panel({ className = "", children, glow = false, ...props }) {
  return (
    <section
      className={`panel grain relative overflow-hidden p-4 sm:p-5 ${glow ? "shadow-glowpink" : ""} ${className}`}
      {...props}
    >
      {children}
    </section>
  );
}

const ACCENTS = {
  pink: "text-sugar-pink",
  gold: "text-gold",
  grape: "text-grapeSoft",
  sky: "text-sky",
  mint: "text-mint",
  ink: "text-ink",
};

// Section header matching the reference: a pixel-art sprite, a chunky uppercase
// colored title, optional subtitle, and an optional right-aligned action.
export function SectionHeader({ icon, art, artSize = 48, title, subtitle, accent = "gold", action, className = "" }) {
  return (
    <div className={`flex items-start justify-between gap-3 ${className}`}>
      <div className="flex items-start gap-3">
        {art ? (
          <ArtIcon name={art} size={artSize} className="mt-0.5 shrink-0" />
        ) : icon ? (
          <span className="mt-0.5 shrink-0 rounded-lg border border-line bg-panel2 p-1.5">
            <PixelIcon name={icon} size={22} />
          </span>
        ) : null}
        <div className="min-w-0">
          <h2
            className={`font-display text-lg font-extrabold uppercase leading-none tracking-wide sm:text-xl ${ACCENTS[accent] || ACCENTS.gold}`}
          >
            {title}
          </h2>
          {subtitle && <p className="mt-2 max-w-md text-sm leading-relaxed text-muted">{subtitle}</p>}
        </div>
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}

const BADGE_TONES = {
  pink: "border-sugar-pink/40 bg-sugar-pink/10 text-sugar-pink",
  gold: "border-gold/40 bg-gold/10 text-gold",
  grape: "border-grape/40 bg-grape/10 text-grapeSoft",
  mint: "border-mint/40 bg-mint/10 text-mint",
  sky: "border-sky/40 bg-sky/10 text-sky",
  muted: "border-line2 bg-panel3 text-muted",
};

export function Badge({ children, tone = "muted", className = "" }) {
  return <span className={`chip ${BADGE_TONES[tone] || BADGE_TONES.muted} ${className}`}>{children}</span>;
}

// Stat tile: label, a large value, and an optional status note beneath.
export function Stat({ label, value, note, className = "" }) {
  return (
    <div className={`panel-2 p-3.5 ${className}`}>
      <p className="label">{label}</p>
      <p className="mt-2 text-2xl font-extrabold leading-none text-ink font-display">{value}</p>
      {note && <ValueText value={note} className="mt-1.5 block text-sm font-semibold" />}
    </div>
  );
}

// Renders a value; placeholders render muted so pre-launch state reads clearly.
export function ValueText({ value, className = "" }) {
  const isPlaceholder =
    value === LAUNCH_STATUS.comingSoon ||
    value === LAUNCH_STATUS.tba ||
    value === LAUNCH_STATUS.demo ||
    value === "--" ||
    value === "Growing";
  return <span className={`${isPlaceholder ? "text-muted" : "text-ink"} ${className}`}>{value}</span>;
}

export function DetailRow({ label, children }) {
  return (
    <div>
      <p className="label">{label}</p>
      <div className="mt-1.5 text-sm font-semibold">{children}</div>
    </div>
  );
}

export default Panel;
