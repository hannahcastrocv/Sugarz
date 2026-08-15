import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PixelIcon from "../icons/PixelIcon.jsx";
import ArtIcon from "../art/ArtIcon.jsx";
import { SugarCoin } from "../icons/SugarBrand.jsx";
import NFTPlaceholder from "../art/NFTPlaceholder.jsx";
import { Badge } from "../ui/Primitives.jsx";

// --- Token + token-pair icons -------------------------------------------------
export function TokenIcon({ token, size = 24 }) {
  if (token === "usdg") return <PixelIcon name="usdg" size={size} />;
  if (token === "eth") return <PixelIcon name="eth" size={size} />;
  return <SugarCoin size={size} />;
}

export function TokenPair({ tokens = ["sugar", "usdg"], size = 30 }) {
  return (
    <span className="relative inline-flex items-center">
      <TokenIcon token={tokens[0]} size={size} />
      <span className="-ml-2">
        <TokenIcon token={tokens[1]} size={size} />
      </span>
    </span>
  );
}

// --- Ecosystem card (Overview grid) ------------------------------------------
export function EcosystemCard({ item }) {
  return (
    <Link
      to={item.path}
      className="group panel-2 flex flex-col gap-2.5 p-4 transition-all hover:-translate-y-0.5 hover:border-sugar-pink/40 hover:shadow-glowpink"
    >
      <div className="flex items-center justify-between">
        <span className="grid h-10 w-10 place-items-center rounded-lg border border-line bg-panel">
          <PixelIcon name={item.icon} size={24} />
        </span>
        <ArrowRight size={16} className="text-faint transition group-hover:translate-x-0.5 group-hover:text-sugar-pink" />
      </div>
      <h3 className="text-sm font-bold text-ink">{item.title}</h3>
      <p className="text-xs leading-relaxed text-muted">{item.blurb}</p>
    </Link>
  );
}

// --- Token utility row (sprite + gold title + text) ---------------------------
export function UtilityCard({ item }) {
  return (
    <div className="flex gap-3">
      <ArtIcon name={item.art} size={38} className="mt-0.5 shrink-0" />
      <div>
        <p className="text-sm font-bold text-gold">{item.title}</p>
        <p className="mt-0.5 text-xs leading-relaxed text-muted">{item.text}</p>
      </div>
    </div>
  );
}

// --- Mechanic card ------------------------------------------------------------
const MECH_ACCENT = ["text-gold", "text-mint", "text-sky", "text-sky", "text-sugar-pink", "text-gold"];
export function MechanicCard({ item, index = 0 }) {
  return (
    <div className="panel-2 flex flex-col gap-2 p-4">
      <ArtIcon name={item.art} size={34} />
      <p className={`text-sm font-bold ${MECH_ACCENT[index % MECH_ACCENT.length]}`}>{item.title}</p>
      <p className="text-xs leading-relaxed text-muted">{item.text}</p>
    </div>
  );
}

// --- Sugar Item card (pastel, matches reference) ------------------------------
export function ItemCard({ item }) {
  return (
    <div
      className="group flex flex-col overflow-hidden rounded-2xl p-4 text-center shadow-card transition-transform hover:-translate-y-0.5"
      style={{ backgroundColor: item.bg }}
    >
      <div className="grid place-items-center py-2">
        <ArtIcon name={item.art} size={92} className="transition-transform group-hover:scale-105" />
      </div>
      <p className="mt-2 text-base font-extrabold text-[#20242e]">{item.name}</p>
      <p className="mt-1 text-sm font-semibold text-[#5b5560]">{item.rarity}</p>
      <p className="mt-3 text-lg font-extrabold leading-none text-[#20242e]">{item.rewardBoost}</p>
      <p className="text-xs font-semibold text-[#5b5560]">Reward Boost</p>
      <p className="mt-2 text-lg font-extrabold leading-none text-[#20242e]">{item.locktime}</p>
      <p className="text-xs font-semibold text-[#5b5560]">Locktime</p>
    </div>
  );
}

// --- NFT card (real artwork when provided, else placeholder) ------------------
export function NFTCard({ variant, img, alt = "Sugar NFT" }) {
  return (
    <div className="group relative aspect-square overflow-hidden rounded-xl border border-line bg-panel2 transition-all hover:-translate-y-0.5 hover:border-sugar-pink/50 hover:shadow-glowpink">
      {img ? (
        <img src={img} alt={alt} draggable={false} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
      ) : (
        <NFTPlaceholder variant={variant} className="transition-transform duration-300 group-hover:scale-105" />
      )}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
    </div>
  );
}

// --- Crafting recipe list row -------------------------------------------------
const RECIPE_RARITY_TEXT = {
  Rare: "text-grapeSoft",
  Epic: "text-grapeSoft",
  Legendary: "text-gold",
};

export function RecipeRow({ recipe, active, onSelect }) {
  return (
    <button
      onClick={() => onSelect(recipe.id)}
      className={`flex w-full items-center gap-3 rounded-lg border px-3 py-2.5 text-left transition ${
        active ? "border-sugar-pink/50 bg-sugar-pink/10" : "border-line bg-panel2 hover:border-line2 hover:bg-panel3"
      }`}
    >
      <ArtIcon name={recipe.art} size={36} className="shrink-0" />
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-bold text-ink">{recipe.name}</p>
        <p className={`text-[11px] font-semibold ${RECIPE_RARITY_TEXT[recipe.rarity] || "text-muted"}`}>{recipe.rarity}</p>
      </div>
      <div className="shrink-0 text-right">
        {recipe.effects.map((e) => (
          <p key={e.label} className="text-[11px] font-semibold text-muted">
            <span className="text-mint">{e.value}</span> {e.label}
          </p>
        ))}
      </div>
    </button>
  );
}

export default {};
