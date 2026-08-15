// =============================================================================
// SUGAR FINANCE - DEMO DATA
// =============================================================================
// Placeholder content used to preview the interface before launch. None of this
// reflects live on-chain data. Live values are "Coming Soon" / "TBA".
// =============================================================================

import { LAUNCH_STATUS } from "../config/siteConfig.js";

const CS = LAUNCH_STATUS.comingSoon;
const TBA = LAUNCH_STATUS.tba;

// Sidebar navigation. Order and labels are fixed.
export const NAV_ITEMS = [
  { key: "overview", label: "Overview", path: "/", icon: "home" },
  { key: "token", label: "Sugar Token", path: "/token", icon: "coin" },
  { key: "kingdom", label: "Kingdom (Pools)", path: "/kingdom", icon: "castle" },
  { key: "safari", label: "The Safari", path: "/safari", icon: "safari" },
  { key: "expedition", label: "The Expedition", path: "/expedition", icon: "map" },
  { key: "crafting", label: "Crafting", path: "/crafting", icon: "flask" },
  { key: "nfts", label: "Sugar NFTs", path: "/nfts", icon: "nft", badge: "7,777" },
  { key: "items", label: "Sugar Items", path: "/items", icon: "gem" },
  { key: "anvil", label: "Anvil Market", path: "/anvil", icon: "anvil", badge: "AMM" },
  { key: "mechanics", label: "Mechanics", path: "/mechanics", icon: "gear" },
  { key: "faq", label: "FAQ", path: "/faq", icon: "help" },
];

// Overview stat tiles. Big value is a dash pre-launch, with a status word below.
export const OVERVIEW_STATS = [
  { label: "Total Value Locked", value: "--", note: CS },
  { label: "Total Sugar Supply", value: "--", note: TBA },
  { label: "Sugar Earned (24h)", value: "--", note: TBA },
  { label: "Total Users", value: "--", note: "Growing" },
];

// Kingdom pools. APR / TVL are dashes with a Coming Soon status pre-launch.
export const KINGDOM_POOLS = [
  { id: "sugar-usdg", pair: "SUGAR / USDG", type: "Stable", tokens: ["sugar", "usdg"], apr: "--", tvl: "--", status: CS },
  { id: "sugar-eth", pair: "SUGAR / ETH", type: "Volatile", tokens: ["sugar", "eth"], apr: "--", tvl: "--", status: CS },
];

// Safari pools.
export const SAFARI_POOLS = [
  { id: "savannah", name: "Savannah", theme: "savannah", apr: "--", totalStaked: "-- SUGAR" },
  { id: "jungle", name: "Jungle", theme: "jungle", apr: "--", totalStaked: "-- SUGAR" },
  { id: "desert", name: "Desert", theme: "desert", apr: "--", totalStaked: "-- SUGAR" },
  { id: "mountain", name: "Mountain", theme: "mountain", apr: "--", totalStaked: "-- SUGAR" },
];

// Expedition durations + how-it-works steps.
export const EXPEDITION_DURATIONS = [
  { id: "3d", label: "3 Days", days: 3 },
  { id: "7d", label: "7 Days", days: 7 },
  { id: "14d", label: "14 Days", days: 14 },
  { id: "30d", label: "30 Days", days: 30 },
];

export const EXPEDITION_STEPS = [
  "Lock SUGAR and choose an expedition time.",
  "Our explorers venture out to find rare sweets and items.",
  "When time ends, you receive random rewards.",
  "Use items to boost rewards or reduce lock times.",
];

// Crafting recipes (demo). Ingredients and effects match the reference.
export const CRAFT_RECIPES = [
  {
    id: "lollipop-staff",
    name: "Lollipop Staff",
    rarity: "Rare",
    art: "recipeLollipop",
    heroArt: "lollipopStaff",
    effects: [
      { label: "Reward Boost", value: "+15%" },
      { label: "Locktime", value: "-3%" },
    ],
    ingredients: [
      { name: "Rainbow Cherry", art: "ingRainbowCherry", have: 10, need: 10 },
      { name: "Sugar Gem", art: "ingSugarGem", have: 500, need: 500 },
      { name: "Magic Syrup", art: "itemMagicSyrup", have: 7, need: 5 },
    ],
  },
  {
    id: "sugar-cape",
    name: "Sugar Cape",
    rarity: "Rare",
    art: "sugarCape",
    heroArt: "sugarCape",
    effects: [
      { label: "Reward", value: "+12%" },
      { label: "Locktime", value: "-2%" },
    ],
    ingredients: [
      { name: "Spun Silk Sugar", art: "ingRainbowCherry", have: 6, need: 8 },
      { name: "Sugar Gem", art: "ingSugarGem", have: 500, need: 400 },
      { name: "Magic Syrup", art: "itemMagicSyrup", have: 7, need: 6 },
    ],
  },
  {
    id: "sweet-wings",
    name: "Sweet Wings",
    rarity: "Legendary",
    art: "sweetWings",
    heroArt: "sweetWings",
    effects: [
      { label: "Reward", value: "+60%" },
      { label: "Locktime", value: "-10%" },
    ],
    ingredients: [
      { name: "Rainbow Cherry", art: "ingRainbowCherry", have: 10, need: 24 },
      { name: "Sugar Gem", art: "ingSugarGem", have: 500, need: 1200 },
      { name: "Magic Syrup", art: "itemMagicSyrup", have: 7, need: 20 },
    ],
  },
];

// Sugar Items (demo). Pastel card colors + values match the reference.
// Separate from the 7,777 Sugar NFT collection.
export const SUGAR_ITEMS = [
  { id: "rainbow-lollipop", name: "Rainbow Lollipop", rarity: "Rare", art: "itemRainbowLollipop", bg: "#eac7c4", rewardBoost: "+21.20%", locktime: "-5.20%" },
  { id: "parasol-pancake", name: "Parasol Sugar Pancake", rarity: "Epic", art: "itemParasolPancake", bg: "#c5aeea", rewardBoost: "+18.50%", locktime: "-4.00%" },
  { id: "gummy-bear-charm", name: "Gummy Bear Charm", rarity: "Rare", art: "itemGummyBear", bg: "#f1aaa7", rewardBoost: "+12.30%", locktime: "-2.50%" },
  { id: "sugar-compass", name: "Sugar Compass", rarity: "Rare", art: "itemSugarCompass", bg: "#f6d194", rewardBoost: "+15.00%", locktime: "-3.00%" },
  { id: "magic-syrup", name: "Magic Syrup", rarity: "Rare", art: "itemMagicSyrup", bg: "#f0adad", rewardBoost: "+12.00%", locktime: "-1.00%" },
];

// NFT collection stats. All live values are pre-launch.
export const NFT_STATS = [
  { label: "Supply", value: "7,777" },
  { label: "Minted", value: "--" },
  { label: "Owners", value: "--" },
  { label: "Floor Price", value: "--" },
  { label: "Volume (24h)", value: "--" },
  { label: "Listed", value: "--" },
];

// Placeholder gallery slots. Real artwork gets dropped in later; no fake
// names, traits, rarities, or prices are attached.
export const NFT_PLACEHOLDERS = Array.from({ length: 12 }, (_, i) => ({ id: i, variant: i % 6 }));

// Ecosystem cards.
export const ECOSYSTEM = [
  { key: "safari", title: "The Safari", icon: "safari", path: "/safari", blurb: "Explore Safari pools and discover new ways to grow your Sugar." },
  { key: "expedition", title: "The Expedition", icon: "map", path: "/expedition", blurb: "Lock SUGAR and send your crew out to discover rare Sugar Items." },
  { key: "crafting", title: "Crafting", icon: "flask", path: "/crafting", blurb: "Combine Sugar Items to create powerful boosters." },
  { key: "nfts", title: "Sugar NFTs", icon: "nft", path: "/nfts", blurb: "The official 7,777 Sugar NFT collection." },
  { key: "items", title: "Sugar Items", icon: "gem", path: "/items", blurb: "Expedition rewards that improve your Sugar yield." },
  { key: "anvil", title: "Anvil Market", icon: "anvil", path: "/anvil", blurb: "Trade eligible Sugar assets through the Anvil AMM." },
];

// Token utilities (6, matching the Sugar Token reference).
export const TOKEN_UTILITIES = [
  { title: "Kingdom Rewards", art: "utilKingdom", text: "Earn SUGAR by providing liquidity in Kingdom pools." },
  { title: "Crafting", art: "utilCrafting", text: "Use SUGAR with items to craft powerful boosters." },
  { title: "Safari Staking", art: "utilSafari", text: "Stake SUGAR in Safari pools to earn more." },
  { title: "Sugar NFTs", art: "utilNfts", text: "Own and trade 7,777 unique Sugar NFTs." },
  { title: "Expedition", art: "utilExpedition", text: "Lock SUGAR to join expeditions and discover rare items." },
  { title: "Governance (Soon)", art: "utilGovernance", text: "Vote on future features and ecosystem changes." },
];

// Mechanics mini-cards (Overview module + Mechanics page).
export const MECHANICS = [
  { title: "Kingdom (Pools)", art: "castle", text: "Provide liquidity in pools and earn SUGAR rewards." },
  { title: "The Safari", art: "utilSafari", text: "Stake SUGAR in Safari pools to earn more." },
  { title: "The Expedition", art: "utilExpedition", text: "Lock SUGAR to join expeditions and discover rare items." },
  { title: "Crafting", art: "craftingBottle", text: "Combine items to create powerful boosters." },
  { title: "Sugar NFTs", art: "utilNfts", text: "Collect 7,777 unique Sugar NFTs." },
  { title: "Sugar Items", art: "gem", text: "Use items to boost your yield and reduce lock times." },
];

// FAQ. Answers reflect pre-launch status.
export const FAQ = [
  { q: "What is Sugar Finance?", a: "Sugar Finance is a DeFi ecosystem on Robinhood Chain where you farm, earn, collect, and explore a world filled with sugar. It brings together Kingdom liquidity pools, the Safari, Expeditions, Crafting, Sugar Items, a Sugar NFT collection, and the Anvil Market." },
  { q: "What is SUGAR?", a: "SUGAR is the native utility token of Sugar Finance. It is earned through Kingdom pools and used across the Safari, Expeditions, and Crafting." },
  { q: "What network is Sugar Finance on?", a: "Sugar Finance is built exclusively on Robinhood Chain. The gas token is ETH and the stablecoin is USDG." },
  { q: "What is USDG?", a: "USDG is the stablecoin used across Sugar Finance on Robinhood Chain, including the SUGAR / USDG Kingdom pool." },
  { q: "What is the Kingdom?", a: "The Kingdom is the liquidity pool system. Provide liquidity in Kingdom pools to earn SUGAR rewards." },
  { q: "What is the Safari?", a: "The Safari is a set of themed pools where you stake SUGAR to grow it in different environments." },
  { q: "How do Expeditions work?", a: "You lock SUGAR and choose a duration. Your explorers venture out, and when the expedition ends you receive rewards that can include Sugar Items to improve your yield." },
  { q: "What are Sugar Items?", a: "Sugar Items are rewards obtained through Expeditions. They can provide a reward boost, a locktime reduction, and other future utilities. They are separate from the Sugar NFT collection." },
  { q: "What are Sugar NFTs?", a: "Sugar NFTs are the official collectible NFT collection of Sugar Finance. They are separate from Sugar Items." },
  { q: "How many Sugar NFTs will exist?", a: "The collection is 7,777 unique characters." },
  { q: "Where will Sugar NFTs be minted?", a: "The planned mint platform is OpenSea. The collection link will be published here once configured." },
  { q: "What is the Anvil Market?", a: "The Anvil Market is an AMM interface for trading eligible Sugar assets through the Anvil AMM. It becomes available after launch." },
  { q: "Is SUGAR live yet?", a: "Sugar Finance is currently preparing for launch. Contract addresses, live market data, and transaction functionality will be enabled after launch." },
  { q: "What is the current SUGAR price?", a: "SUGAR has not launched yet, so there is currently no official market price." },
  { q: "Where can I buy SUGAR?", a: "Trading information will be announced after launch." },
];

export default {
  NAV_ITEMS, OVERVIEW_STATS, KINGDOM_POOLS, SAFARI_POOLS, EXPEDITION_DURATIONS,
  EXPEDITION_STEPS, CRAFT_RECIPES, SUGAR_ITEMS, NFT_STATS, NFT_PLACEHOLDERS,
  ECOSYSTEM, TOKEN_UTILITIES, MECHANICS, FAQ,
};
