import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Play, Gift } from "lucide-react";
import { Panel, SectionHeader, ValueText } from "../ui/Primitives.jsx";
import Button from "../ui/Button.jsx";
import ArtIcon from "../art/ArtIcon.jsx";
import PixelIcon from "../icons/PixelIcon.jsx";
import { SugarCoin } from "../icons/SugarBrand.jsx";
import { UtilityCard, MechanicCard, ItemCard, NFTCard, RecipeRow } from "../cards/Cards.jsx";
import { KingdomPoolCard, TopPoolCard } from "../cards/PoolCard.jsx";
import { NFT_ART } from "../../assets/nft/index.js";
import heroKingdom from "../../assets/art/hero-kingdom.webp";
import {
  OVERVIEW_STATS, KINGDOM_POOLS, SAFARI_POOLS, EXPEDITION_DURATIONS, EXPEDITION_STEPS,
  CRAFT_RECIPES, SUGAR_ITEMS, TOKEN_UTILITIES, MECHANICS, NFT_STATS, NFT_PLACEHOLDERS,
} from "../../data/demoData.js";
import { NETWORK, TOKEN, LAUNCH_STATUS } from "../../config/siteConfig.js";
import useComingSoon from "../../hooks/useComingSoon.js";

const CS = LAUNCH_STATUS.comingSoon;
const CHAIN = { name: NETWORK.CHAIN_NAME, gasToken: NETWORK.GAS_TOKEN, stablecoin: NETWORK.STABLECOIN };

// Small text action ("VIEW ALL POOLS ->"). Navigates when `to` is an internal
// page; otherwise shows a Coming Soon toast via onClick.
function ActionLink({ label, to, onClick }) {
  const cls =
    "inline-flex items-center gap-1.5 rounded-lg border border-line2 bg-panel2/60 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wide text-ink transition hover:border-sugar-pink/60 hover:text-sugar-pink";
  if (to) return <Link to={to} className={cls}>{label} <ArrowRight size={13} /></Link>;
  return <button onClick={onClick} className={cls}>{label} <ArrowRight size={13} /></button>;
}

// ---- Hero -------------------------------------------------------------------
export function HeroModule() {
  return (
    <Panel className="overflow-hidden !p-0">
      <div className="relative min-h-[260px] sm:min-h-[300px]">
        <img
          src={heroKingdom}
          alt="The Sugar kingdom"
          draggable={false}
          className="pixelated absolute inset-0 h-full w-full object-cover object-right"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(8,11,22,0.97) 0%, rgba(8,11,22,0.95) 30%, rgba(8,11,22,0.55) 52%, rgba(8,11,22,0.12) 68%, transparent 82%)",
          }}
        />
        <div className="relative flex min-h-[260px] max-w-[86%] flex-col justify-center p-6 sm:min-h-[300px] sm:max-w-[62%] sm:p-8">
          <p className="text-sm font-semibold text-muted">Welcome to</p>
          <h1 className="mt-1 font-display text-4xl font-extrabold leading-none sm:text-5xl">
            <span className="text-sugar-pink">Sugar</span> <span className="text-ink">Finance</span>
          </h1>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
            The sweetest DeFi ecosystem on {CHAIN.name}. Farm, earn, collect, and explore a world filled with sugar.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button as={Link} to="/kingdom" variant="primary" size="lg">
              <PixelIcon name="castle" size={16} /> Enter the Kingdom
            </Button>
            <Button as={Link} to="/mechanics" variant="outline" size="lg">
              <Play size={14} /> How it Works
            </Button>
          </div>
        </div>
      </div>
    </Panel>
  );
}

// ---- Overview stat tiles ----------------------------------------------------
export function StatsRow() {
  return (
    <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
      {OVERVIEW_STATS.map((s) => (
        <div key={s.label} className="panel-2 p-4">
          <p className="label">{s.label}</p>
          <p className="mt-2 font-display text-2xl font-extrabold leading-none text-ink">{s.value}</p>
          <ValueText value={s.note} className="mt-1.5 block text-sm font-semibold" />
        </div>
      ))}
    </div>
  );
}

// ---- Top Kingdom Pools strip ------------------------------------------------
export function TopKingdomPoolsModule() {
  const comingSoon = useComingSoon();
  return (
    <Panel>
      <SectionHeader art="castle" artSize={40} title="Top Kingdom Pools" accent="gold"
        action={<ActionLink label="View all pools" to="/kingdom" />} />
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {KINGDOM_POOLS.map((p) => <TopPoolCard key={p.id} pool={p} />)}
      </div>
    </Panel>
  );
}

// ---- Sugar Token ------------------------------------------------------------
export function SugarTokenModule() {
  return (
    <Panel>
      <div className="flex items-start gap-3">
        <SugarCoin size={54} glow />
        <div>
          <h2 className="font-display text-xl font-extrabold uppercase tracking-wide text-gold">Sugar Token</h2>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-muted">
            ${TOKEN.symbol} is the native utility token of Sugar Finance on {CHAIN.name}.
          </p>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-x-6 gap-y-4 rounded-xl border border-line bg-panel2/50 p-4">
        <div>
          <p className="label">Network</p>
          <p className="mt-1 flex items-center gap-1.5 text-sm font-bold text-ink">
            <PixelIcon name="leaf" size={14} /> {CHAIN.name}
          </p>
        </div>
        <div>
          <p className="label">Contract</p>
          <ValueText value={CS} className="mt-1 block text-sm font-bold" />
        </div>
        <div>
          <p className="label">Total Supply</p>
          <p className="mt-1 text-sm font-bold text-muted">--</p>
        </div>
        <div>
          <p className="label">Decimals</p>
          <p className="mt-1 text-sm font-bold text-ink">{TOKEN.decimals}</p>
        </div>
      </div>

      <p className="mt-5 font-display text-base font-extrabold uppercase tracking-wide text-gold">Utilities</p>
      <div className="mt-3 grid gap-x-6 gap-y-4 sm:grid-cols-2">
        {TOKEN_UTILITIES.map((u) => <UtilityCard key={u.title} item={u} />)}
      </div>

      <div className="mt-5 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-line bg-panel2/50 px-4 py-3">
        <div>
          <p className="label">Built On</p>
          <p className="mt-0.5 flex items-center gap-1.5 text-sm font-bold text-ink"><PixelIcon name="leaf" size={13} /> {CHAIN.name}</p>
        </div>
        <div>
          <p className="label">Gas Token</p>
          <p className="mt-0.5 flex items-center gap-1.5 text-sm font-bold text-ink"><PixelIcon name="eth" size={13} /> {CHAIN.gasToken}</p>
        </div>
        <div>
          <p className="label">Stablecoin</p>
          <p className="mt-0.5 flex items-center gap-1.5 text-sm font-bold text-ink"><PixelIcon name="usdg" size={13} /> {CHAIN.stablecoin}</p>
        </div>
      </div>
    </Panel>
  );
}

// ---- Kingdom pools ----------------------------------------------------------
export function KingdomModule({ narrow = false }) {
  const comingSoon = useComingSoon();
  return (
    <Panel>
      <SectionHeader art="castle" artSize={48} title="Kingdom (Pools)" accent="gold"
        subtitle="Provide liquidity in Kingdom pools and earn $SUGAR rewards."
        action={<ActionLink label="View all pools" to="/kingdom" />} />
      <div className={`mt-4 grid gap-3 ${narrow ? "" : "sm:grid-cols-2"}`}>
        {KINGDOM_POOLS.map((p) => <KingdomPoolCard key={p.id} pool={p} />)}
      </div>
    </Panel>
  );
}

// ---- Your Liquidity Positions ----------------------------------------------
export function LiquidityPositionsModule() {
  const comingSoon = useComingSoon();
  return (
    <Panel>
      <SectionHeader title="Your Liquidity Positions" accent="gold"
        action={<ActionLink label="View all" to="/kingdom" />} />
      <div className="mt-4 flex items-center gap-4 rounded-xl border border-line bg-panel2/50 p-4">
        <SugarCoin size={44} />
        <div>
          <p className="text-sm font-bold text-ink">No positions yet</p>
          <p className="mt-0.5 text-xs text-muted">Add liquidity to start earning $SUGAR rewards!</p>
        </div>
      </div>
    </Panel>
  );
}

// ---- The Safari -------------------------------------------------------------
export function SafariModule({ narrow = false }) {
  const comingSoon = useComingSoon();
  return (
    <Panel>
      <SectionHeader art="utilSafari" artSize={44} title="The Safari" accent="mint"
        subtitle="Stake $SUGAR in Safari pools to earn more rewards."
        action={<ActionLink label="How it works" to="/mechanics" />} />
      <div className={`mt-4 grid gap-4 ${narrow ? "" : "lg:grid-cols-2"}`}>
        <div className="rounded-xl border border-line bg-panel2/50 p-4">
          <p className="label">Your Position</p>
          <div className="mt-3 flex items-center gap-2 text-sm">
            <SugarCoin size={20} /> <span className="text-muted">Staked</span>
            <span className="ml-auto font-bold text-ink">-- SUGAR</span>
          </div>
          <div className="mt-2 flex items-center gap-2 text-sm">
            <Gift size={16} className="text-gold" /> <span className="text-muted">Pending Rewards</span>
            <span className="ml-auto font-bold text-sugar-pink">-- SUGAR</span>
          </div>
          <div className="mt-4 space-y-2">
            <Button variant="primary" full onClick={comingSoon("Safari staking")}>Stake Now</Button>
            <Button variant="outline" full onClick={comingSoon("Unstaking")}>Unstake</Button>
          </div>
        </div>
        <div className="rounded-xl border border-line bg-panel2/50 p-4">
          <p className="label">Active Safari Pools</p>
          <div className="mt-3 space-y-2">
            {SAFARI_POOLS.map((p) => (
              <div key={p.id} className="flex items-center gap-3 rounded-lg bg-panel px-3 py-2">
                <PixelIcon name="safari" size={18} />
                <span className="text-sm font-semibold text-ink">{p.name}</span>
                <span className="ml-auto text-xs text-muted">APR {p.apr}</span>
                <Button size="sm" variant="dark" onClick={comingSoon(p.name + " pool")}>Stake</Button>
              </div>
            ))}
          </div>
          <Link to="/safari" className="mt-3 flex w-full items-center justify-center gap-1.5 text-[11px] font-bold uppercase tracking-wide text-muted transition hover:text-sugar-pink">
            View all Safari pools <ArrowRight size={13} />
          </Link>
        </div>
      </div>
    </Panel>
  );
}

// ---- The Expedition ---------------------------------------------------------
export function ExpeditionModule({ narrow = false }) {
  const comingSoon = useComingSoon();
  const [dur, setDur] = useState("7d");
  return (
    <Panel>
      <SectionHeader art="utilExpedition" artSize={44} title="The Expedition" accent="sky"
        subtitle="Lock $SUGAR on expeditions to discover rare sweets and powerful items."
        action={<ActionLink label="My expeditions" to="/expedition" />} />
      <div className={`mt-4 grid gap-4 ${narrow ? "" : "lg:grid-cols-2"}`}>
        <div className="rounded-xl border border-line bg-panel2/50 p-4">
          <p className="label">Start New Expedition</p>
          <p className="mt-3 text-xs text-muted">Amount to Lock</p>
          <div className="mt-1 flex items-center gap-2 rounded-lg border border-line bg-panel px-3 py-2.5">
            <input type="text" inputMode="decimal" placeholder="0.00"
              className="w-full bg-transparent text-sm font-semibold text-ink outline-none placeholder:text-faint" />
            <span className="text-xs font-bold text-muted">SUGAR</span>
          </div>
          <p className="mt-3 text-xs text-muted">Duration</p>
          <div className="mt-1 grid grid-cols-4 gap-2">
            {EXPEDITION_DURATIONS.map((d) => (
              <button key={d.id} onClick={() => setDur(d.id)}
                className={`rounded-lg border px-2 py-2 text-[11px] font-bold transition ${
                  dur === d.id ? "border-sugar-pink/60 bg-sugar-pink/10 text-sugar-pink" : "border-line bg-panel text-muted hover:text-ink"}`}>
                {d.label}
              </button>
            ))}
          </div>
          <Button variant="primary" full className="mt-4" onClick={comingSoon("Expeditions")}>Start Expedition</Button>
        </div>
        <div className="rounded-xl border border-line bg-panel2/50 p-4">
          <p className="label">How Expeditions Work</p>
          <ol className="mt-3 space-y-2.5">
            {EXPEDITION_STEPS.map((s, i) => (
              <li key={i} className="flex gap-3 text-sm text-muted">
                <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-sugar-pink/15 text-[11px] font-bold text-sugar-pink">{i + 1}</span>
                <span className="leading-snug">{s}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Panel>
  );
}

// ---- Crafting ---------------------------------------------------------------
export function CraftingModule({ narrow = false }) {
  const comingSoon = useComingSoon();
  const [sel, setSel] = useState(CRAFT_RECIPES[0].id);
  const recipe = CRAFT_RECIPES.find((r) => r.id === sel) || CRAFT_RECIPES[0];
  return (
    <Panel>
      <SectionHeader art="craftingBottle" artSize={44} title="Crafting" accent="sky"
        subtitle="Combine sweets and items to craft powerful boosters."
        action={<ActionLink label="Crafting guide" to="/crafting" />} />
      <div className={`mt-4 grid gap-4 ${narrow ? "" : "lg:grid-cols-2"}`}>
        <div className="rounded-xl border border-line bg-panel2/50 p-4">
          <p className="label">Popular Recipes</p>
          <div className="mt-3 space-y-2">
            {CRAFT_RECIPES.map((r) => (
              <RecipeRow key={r.id} recipe={r} active={r.id === sel} onSelect={setSel} />
            ))}
          </div>
        </div>
        <div className="rounded-xl border border-line bg-panel2/50 p-4">
          <p className="text-[11px] font-bold uppercase tracking-wide text-sugar-pink">Selected Recipe</p>
          <div className="mt-2 flex items-center gap-3">
            <ArtIcon name={recipe.heroArt} size={64} />
            <div>
              <p className="font-display text-lg font-extrabold text-grapeSoft">{recipe.name}</p>
              <p className="text-xs font-semibold text-grapeSoft/80">{recipe.rarity}</p>
            </div>
          </div>
          <div className="mt-3 space-y-1">
            {recipe.effects.map((e) => (
              <p key={e.label} className="text-sm font-bold text-ink"><span className="text-mint">{e.value}</span> {e.label}</p>
            ))}
          </div>
          <p className="mt-4 text-[11px] font-bold uppercase tracking-wide text-gold">Required Ingredients</p>
          <div className="mt-2 grid grid-cols-3 gap-2">
            {recipe.ingredients.map((ing) => {
              const ok = ing.have >= ing.need;
              return (
                <div key={ing.name} className="rounded-lg border border-line bg-panel p-2 text-center">
                  <ArtIcon name={ing.art} size={34} className="mx-auto" />
                  <p className="mt-1 text-[10px] font-semibold leading-tight text-muted">{ing.name}</p>
                  <p className={`mt-0.5 text-xs font-bold ${ok ? "text-mint" : "text-sugar-pink"}`}>{ing.have} / {ing.need}</p>
                </div>
              );
            })}
          </div>
          <Button variant="primary" full className="mt-4" onClick={comingSoon("Crafting")}>Craft Now</Button>
        </div>
      </div>
    </Panel>
  );
}

// ---- Sugar NFTs -------------------------------------------------------------
export function SugarNFTsModule() {
  const comingSoon = useComingSoon();
  return (
    <Panel>
      <SectionHeader art="utilNfts" artSize={44} title="Sugar NFTs" accent="pink"
        subtitle="The official Sugar Finance NFT collection. 7,777 unique characters living in the sweetest side."
        action={<ActionLink label="View collection" to="/nfts" />} />
      <div className="mt-4 grid grid-cols-3 gap-2 sm:grid-cols-6">
        {NFT_ART.map((src, i) => <NFTCard key={i} img={src} alt={`Sugar NFT #${i + 1}`} />)}
      </div>
      <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-3">
        {NFT_STATS.slice(0, 5).map((s) => (
          <div key={s.label}>
            <p className="label">{s.label}</p>
            <ValueText value={s.value} className="mt-0.5 block text-sm font-bold" />
          </div>
        ))}
        <Button variant="primary" className="ml-auto" onClick={comingSoon("OpenSea mint")}>View on OpenSea</Button>
      </div>
    </Panel>
  );
}

// ---- Sugar Items ------------------------------------------------------------
export function SugarItemsModule({ narrow = false }) {
  const comingSoon = useComingSoon();
  return (
    <Panel>
      <SectionHeader art="gem" artSize={44} title="Sugar Items" accent="pink"
        subtitle="Expedition reward items that boost your yield and reduce lock times."
        action={<ActionLink label="View all items" to="/items" />} />
      <div className={`mt-4 grid gap-3 grid-cols-2 sm:grid-cols-3 ${narrow ? "" : "lg:grid-cols-5"}`}>
        {SUGAR_ITEMS.map((it) => <ItemCard key={it.id} item={it} />)}
      </div>
      <Button as={Link} to="/items" variant="primary" full className="mt-4">Browse All Items</Button>
    </Panel>
  );
}

// ---- Anvil Market -----------------------------------------------------------
export function AnvilModule() {
  const comingSoon = useComingSoon();
  const [tab, setTab] = useState("Overview");
  const tabs = ["Overview", "Buy", "Sell", "Explore"];
  return (
    <Panel>
      <div className="flex items-start gap-3">
        <ArtIcon name="wizardHammer" size={44} />
        <div className="flex items-center gap-2">
          <h2 className="font-display text-xl font-extrabold uppercase tracking-wide text-sugar-pink">Anvil Market</h2>
          <span className="chip border-grape/40 bg-grape/10 text-grapeSoft">AMM</span>
        </div>
      </div>
      <p className="mt-2 text-sm text-muted">Trade eligible Sugar assets through the Anvil AMM.</p>

      <div className="mt-4 grid grid-cols-4 gap-2">
        {tabs.map((t) => (
          <button key={t} onClick={() => setTab(t)}
            className={`rounded-lg border px-2 py-2 text-[11px] font-bold uppercase tracking-wide transition ${
              tab === t ? "border-sugar-deep/60 bg-gradient-to-b from-sugar-pink to-sugar-red text-white" : "border-line bg-panel2 text-muted hover:text-ink"}`}>
            {t}
          </button>
        ))}
      </div>

      <div className="mt-4 flex flex-col items-center gap-4 rounded-xl border border-line bg-panel2/50 p-5 sm:flex-row sm:items-center">
        <ArtIcon name="anvil" size={120} className="shrink-0" />
        <div className="text-center sm:text-left">
          <p className="font-display text-lg font-extrabold text-ink">AMM Coming Soon</p>
          <p className="mt-1 text-sm text-muted">Trade NFTs and assets on the Anvil AMM.</p>
        </div>
      </div>
      <Button variant="primary" full className="mt-4" onClick={comingSoon("The Anvil Market")}>Go to Market</Button>
    </Panel>
  );
}

// ---- Mechanics --------------------------------------------------------------
export function MechanicsModule() {
  const comingSoon = useComingSoon();
  return (
    <Panel>
      <SectionHeader icon="gear" title="Mechanics" accent="ink"
        subtitle="Learn how Sugar Finance works."
        action={<ActionLink label="How it works" to="/mechanics" />} />
      <div className="mt-4 grid grid-cols-2 gap-3 lg:grid-cols-3">
        {MECHANICS.map((m, i) => <MechanicCard key={m.title} item={m} index={i} />)}
      </div>
    </Panel>
  );
}

export default {};
