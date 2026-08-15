const VARIANTS = {
  primary:
    "bg-gradient-to-b from-sugar-pink to-sugar-red text-white border border-sugar-deep/60 hover:from-sugar-rose hover:to-sugar-deep shadow-[0_2px_0_0_#8f0f32,0_8px_20px_-8px_rgba(255,77,125,0.7)] active:translate-y-[1px]",
  outline:
    "bg-panel2/60 text-ink border border-line2 hover:border-sugar-pink/60 hover:bg-panel3/60",
  dark: "bg-panel3 text-ink border border-line2 hover:bg-[#242c52]",
  ghost: "bg-transparent text-muted border border-transparent hover:text-ink hover:bg-white/5",
  gold: "bg-gradient-to-b from-gold to-[#e0a92f] text-[#3a2a06] border border-[#b98a1f] hover:brightness-105 shadow-[0_2px_0_0_#a9801d] active:translate-y-[1px]",
  disabled: "bg-panel2 text-faint border border-line cursor-not-allowed",
};

const SIZES = {
  sm: "px-3 py-1.5 text-[11px]",
  md: "px-4 py-2.5 text-xs",
  lg: "px-5 py-3 text-sm",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  full = false,
  pixel = false,
  as: Tag = "button",
  className = "",
  disabled = false,
  ...props
}) {
  const v = disabled ? VARIANTS.disabled : VARIANTS[variant] || VARIANTS.primary;
  return (
    <Tag
      className={`inline-flex select-none items-center justify-center gap-2 rounded-lg font-semibold uppercase tracking-wide transition-all duration-150 ${
        pixel ? "font-pixel !tracking-normal text-[10px]" : ""
      } ${SIZES[size]} ${v} ${full ? "w-full" : ""} ${className}`}
      disabled={Tag === "button" ? disabled : undefined}
      aria-disabled={disabled || undefined}
      {...props}
    >
      {children}
    </Tag>
  );
}
