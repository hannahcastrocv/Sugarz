import { useState } from "react";
import Button from "../ui/Button.jsx";
import { ValueText } from "../ui/Primitives.jsx";
import StakeModal from "../modals/StakeModal.jsx";

// Small pixel biome tile per Safari pool. Distinct palette per environment.
const BIOMES = {
  savannah: { sky: "#f0b24a", ground: "#c98a2e", accent: "#7c4f1c" },
  jungle: { sky: "#2f7d4a", ground: "#1f5a34", accent: "#0f3a20" },
  desert: { sky: "#e8c37a", ground: "#d9a24a", accent: "#b97e2a" },
  mountain: { sky: "#6b7db5", ground: "#4a5885", accent: "#e7dcff" },
};

function BiomeTile({ theme }) {
  const b = BIOMES[theme] || BIOMES.savannah;
  return (
    <svg viewBox="0 0 24 24" className="pixelated h-10 w-10" aria-hidden="true">
      <rect x="0" y="0" width="24" height="14" fill={b.sky} />
      <rect x="0" y="14" width="24" height="10" fill={b.ground} />
      {theme === "mountain" ? (
        <>
          <rect x="4" y="6" width="8" height="8" fill={b.accent} />
          <rect x="12" y="4" width="8" height="10" fill={b.accent} />
          <rect x="13" y="4" width="6" height="3" fill="#fff" />
        </>
      ) : theme === "jungle" ? (
        <>
          <rect x="4" y="8" width="4" height="6" fill={b.accent} />
          <rect x="14" y="6" width="6" height="8" fill={b.accent} />
          <rect x="9" y="16" width="6" height="2" fill={b.accent} />
        </>
      ) : theme === "desert" ? (
        <>
          <rect x="10" y="8" width="3" height="8" fill={b.accent} />
          <rect x="8" y="10" width="2" height="3" fill={b.accent} />
          <rect x="13" y="9" width="2" height="3" fill={b.accent} />
        </>
      ) : (
        <>
          <rect x="5" y="10" width="3" height="4" fill={b.accent} />
          <rect x="16" y="9" width="3" height="5" fill={b.accent} />
          <rect x="0" y="18" width="24" height="2" fill="rgba(255,255,255,0.15)" />
        </>
      )}
    </svg>
  );
}

export function SafariPoolCard({ pool }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="panel-2 flex flex-col p-4">
        <div className="flex items-center gap-3">
          <span className="grid place-items-center overflow-hidden rounded-md border border-line">
            <BiomeTile theme={pool.theme} />
          </span>
          <div>
            <p className="text-sm font-bold text-ink">{pool.name}</p>
            <p className="text-xs text-muted">{pool.blurb}</p>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-3">
          <div>
            <p className="label">APR</p>
            <ValueText value={pool.apr} className="mt-1 block text-base font-bold" />
          </div>
          <div>
            <p className="label">Total Staked</p>
            <ValueText value={pool.totalStaked} className="mt-1 block text-base font-bold" />
          </div>
        </div>
        <Button variant="primary" full className="mt-4" onClick={() => setOpen(true)}>
          Stake
        </Button>
      </div>
      <StakeModal open={open} onClose={() => setOpen(false)} poolName={pool.name} poolType="Safari" />
    </>
  );
}

// Compact row for the Overview "Active Safari Pools" list.
export function SafariRow({ pool, onStake }) {
  return (
    <div className="flex items-center gap-3 py-2">
      <span className="grid place-items-center overflow-hidden rounded-md border border-line">
        <BiomeTile theme={pool.theme} />
      </span>
      <span className="text-sm font-semibold text-ink">{pool.name}</span>
      <span className="ml-auto text-xs text-muted">
        <ValueText value={pool.apr} />
      </span>
      <Button variant="outline" size="sm" onClick={onStake}>
        Stake
      </Button>
    </div>
  );
}

export default SafariPoolCard;
