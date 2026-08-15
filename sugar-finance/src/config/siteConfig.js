// =============================================================================
// SUGAR FINANCE - CENTRAL CONFIGURATION
// =============================================================================
// Sugar Finance is PRE-LAUNCH. Nothing here connects to a live contract, API,
// or market yet. Every value below is a placeholder. After launch, replace the
// placeholders in this single file and the whole app updates. Do not scatter
// real addresses or URLs anywhere else in the codebase.
//
// Status meanings used across the UI:
//   "Coming Soon"  -> a live metric that will exist after launch
//   "TBA"          -> a value to be announced (supply, dates)
//   "Demo Data"    -> illustrative content shown only to preview the interface
// =============================================================================

export const LAUNCH_STATUS = {
  isLive: false, // Flip to true after launch to enable real data wiring.
  comingSoon: "Coming Soon",
  tba: "TBA",
  demo: "Demo Data",
};

// ---------------------------------------------------------------------------
// Network. Sugar Finance is exclusively on Robinhood Chain.
// ---------------------------------------------------------------------------
export const NETWORK = {
  CHAIN_NAME: "Robinhood Chain",
  CHAIN_ID: "REPLACE_WITH_OFFICIAL_ROBINHOOD_CHAIN_ID",
  RPC_URL: "REPLACE_WITH_OFFICIAL_ROBINHOOD_CHAIN_RPC_URL",
  EXPLORER_URL: "REPLACE_WITH_OFFICIAL_ROBINHOOD_CHAIN_EXPLORER_URL",
  GAS_TOKEN: "ETH",
  STABLECOIN: "USDG",
};

// ---------------------------------------------------------------------------
// Contracts. Do not invent addresses. Replace after deployment.
// ---------------------------------------------------------------------------
export const CONTRACTS = {
  SUGAR_CONTRACT: "REPLACE_WITH_OFFICIAL_SUGAR_TOKEN_ADDRESS",
  USDG_CONTRACT: "REPLACE_WITH_OFFICIAL_USDG_ADDRESS",
  NFT_CONTRACT: "REPLACE_WITH_OFFICIAL_SUGAR_NFT_ADDRESS",
  POOL_CONTRACTS: {
    SUGAR_USDG: "REPLACE_WITH_OFFICIAL_SUGAR_USDG_POOL_ADDRESS",
    SUGAR_ETH: "REPLACE_WITH_OFFICIAL_SUGAR_ETH_POOL_ADDRESS",
  },
  SAFARI_CONTRACTS: {
    SAVANNAH: "REPLACE_WITH_OFFICIAL_SAFARI_SAVANNAH_ADDRESS",
    JUNGLE: "REPLACE_WITH_OFFICIAL_SAFARI_JUNGLE_ADDRESS",
    DESERT: "REPLACE_WITH_OFFICIAL_SAFARI_DESERT_ADDRESS",
    MOUNTAIN: "REPLACE_WITH_OFFICIAL_SAFARI_MOUNTAIN_ADDRESS",
  },
  EXPEDITION_CONTRACT: "REPLACE_WITH_OFFICIAL_EXPEDITION_ADDRESS",
  CRAFTING_CONTRACT: "REPLACE_WITH_OFFICIAL_CRAFTING_ADDRESS",
};

// ---------------------------------------------------------------------------
// Token. No supply or price is invented while pre-launch.
// ---------------------------------------------------------------------------
export const TOKEN = {
  symbol: "SUGAR",
  displaySymbol: "$SUGAR",
  decimals: 18,
  totalSupply: LAUNCH_STATUS.tba,
  price: LAUNCH_STATUS.comingSoon,
};

// ---------------------------------------------------------------------------
// NFT collection. Artwork is provided later; do not generate replacements.
// ---------------------------------------------------------------------------
export const NFT = {
  name: "Sugar NFTs",
  supply: 7777,
  mintPlatform: "OpenSea",
};

// ---------------------------------------------------------------------------
// External links. Placeholders only. Replace after launch.
// ---------------------------------------------------------------------------
export const LINKS = {
  OPEN_SEA_URL: "REPLACE_WITH_OFFICIAL_OPENSEA_COLLECTION_URL",
  ANVIL_URL: "REPLACE_WITH_OFFICIAL_ANVIL_MARKET_URL",
  X_URL: "REPLACE_WITH_OFFICIAL_X_PROFILE_URL",
  DOCS_URL: "REPLACE_WITH_OFFICIAL_DOCS_URL",
};

// ---------------------------------------------------------------------------
// API endpoints for live data after launch (TVL, APR, floor price, etc.).
// ---------------------------------------------------------------------------
export const API_ENDPOINTS = {
  STATS: "REPLACE_WITH_OFFICIAL_STATS_API",
  POOLS: "REPLACE_WITH_OFFICIAL_POOLS_API",
  NFT_STATS: "REPLACE_WITH_OFFICIAL_NFT_STATS_API",
  ANVIL_MARKET: "REPLACE_WITH_OFFICIAL_ANVIL_MARKET_API",
};

// Demo wallet/network address shown in the sidebar for visual purposes only.
export const DEMO_WALLET_ADDRESS = "0xA8F5...7B21";

export const BRAND = {
  name: "Sugar Finance",
  tagline: "The sweetest DeFi ecosystem on Robinhood Chain.",
  secondary: "Farm, earn, collect, and explore a world filled with sugar.",
};

// Helper: return a link only if it has been configured (not a placeholder).
export function resolvedLink(url) {
  if (!url || url.startsWith("REPLACE_WITH")) return null;
  return url;
}

export default {
  LAUNCH_STATUS,
  NETWORK,
  CONTRACTS,
  TOKEN,
  NFT,
  LINKS,
  API_ENDPOINTS,
  DEMO_WALLET_ADDRESS,
  BRAND,
  resolvedLink,
};
