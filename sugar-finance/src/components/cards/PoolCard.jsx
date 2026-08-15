import Button from "../ui/Button.jsx";
import { ValueText } from "../ui/Primitives.jsx";
import { TokenPair } from "./Cards.jsx";
import useComingSoon from "../../hooks/useComingSoon.js";

const TYPE_TEXT = { Stable: "text-mint", Volatile: "text-gold" };

// Full Kingdom pool card. Pre-launch: APR / TVL are dashes with a Coming Soon
// status, and the action button reads COMING SOON.
export function KingdomPoolCard({ pool }) {
  const comingSoon = useComingSoon();
  return (
    <div className="panel-2 flex flex-col p-4">
      <div className="flex items-center gap-3">
        <TokenPair tokens={pool.tokens} />
        <div>
          <p className="text-base font-bold text-ink">{pool.pair}</p>
          <p className={`text-xs font-semibold ${TYPE_TEXT[pool.type] || "text-muted"}`}>{pool.type}</p>
        </div>
      </div>

      <div className="divider my-4" />

      <div className="space-y-4">
        <div className="flex items-end justify-between">
          <div>
            <p className="label">APR</p>
            <p className="mt-1 text-xl font-extrabold text-ink font-display">{pool.apr}</p>
          </div>
          <ValueText value={pool.status} className="text-sm font-semibold" />
        </div>
        <div className="divider" />
        <div className="flex items-end justify-between">
          <div>
            <p className="label">TVL</p>
            <p className="mt-1 text-xl font-extrabold text-ink font-display">{pool.tvl}</p>
          </div>
          <ValueText value={pool.status} className="text-sm font-semibold" />
        </div>
      </div>

      <Button variant="outline" full className="mt-4" onClick={comingSoon(pool.pair + " pool")}>
        Coming Soon
      </Button>
    </div>
  );
}

// Compact pool card for the Overview "Top Kingdom Pools" strip.
export function TopPoolCard({ pool }) {
  return (
    <div className="panel-2 flex items-center gap-3 p-3.5">
      <TokenPair tokens={pool.tokens} size={26} />
      <div className="min-w-0">
        <p className="text-sm font-bold text-ink">{pool.pair}</p>
        <p className="text-xs text-muted">
          {pool.type} <span className="text-faint">&middot;</span> <ValueText value={pool.status} className="font-semibold" />
        </p>
      </div>
    </div>
  );
}

export default KingdomPoolCard;
