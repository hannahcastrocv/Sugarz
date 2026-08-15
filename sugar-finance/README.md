# Sugar Finance

The sweetest DeFi ecosystem on Robinhood Chain. Farm, earn, collect, and explore a world filled with sugar.

This is the **pre-launch demo frontend**. Nothing connects to a live contract, API, or market. Every price, address, and metric is a placeholder shown as `Coming Soon`, `TBA`, or `Demo Data`. Wallet connection and all transactions are previews only.

## Tech stack

React 18, Vite 5, Tailwind CSS 3, React Router 6, lucide-react. All artwork (logo, icons, mascot, hero scene, NFT placeholders, item sprites) is hand-built SVG pixel art with no external image assets, so nothing looks AI-generated and everything stays crisp.

## Run it locally

```bash
npm install
npm run dev
```

Then open the URL Vite prints (default http://localhost:5173).

Other commands:

```bash
npm run build     # production build into dist/
npm run preview   # serve the production build locally
```

## Deploy

The build is static and uses a hash router, so deep links work on any static host with no redirect rules.

- **Cloudflare Pages**: build command `npm run build`, output directory `dist`.
- **GitHub Pages**: push `dist/` or use an action; `base` is already `./`.

## Where to change things after launch

Everything replaceable lives in one file: **`src/config/siteConfig.js`**. Do not scatter addresses or URLs elsewhere. Replace the `REPLACE_WITH_...` placeholders there:

- `NETWORK` - chain id, RPC URL, explorer URL
- `CONTRACTS` - SUGAR, USDG, NFT, pool, safari, expedition, crafting addresses
- `TOKEN` - supply and price (set once live data is wired)
- `LINKS` - `OPEN_SEA_URL`, `ANVIL_URL`, `X_URL`, docs
- `API_ENDPOINTS` - stats, pools, NFT stats, Anvil market

Flip `LAUNCH_STATUS.isLive` to `true` when you start wiring real data. Any link that is still a placeholder falls back to a friendly "coming soon" notice instead of a broken URL.

Demo content (pools, safari, items, recipes, FAQ, mechanics) lives in **`src/data/demoData.js`**.

### NFT artwork

The gallery on `Sugar NFTs` uses clean pixel placeholders (`src/components/art/NFTPlaceholder.jsx`). Drop the real 7,777 artwork in and swap the gallery source when it is ready. No fake names, traits, rarities, or prices are attached anywhere.

## Project structure

```
src/
  config/       siteConfig.js  (single source of truth for launch values)
  data/         demoData.js    (placeholder content)
  context/      Wallet + Toast providers
  components/
    layout/     Sidebar, Header, Footer, Layout
    ui/         Button, Modal, Primitives, FAQAccordion
    cards/      Pool, Safari, Item, NFT, Recipe, Ecosystem cards
    modals/     WalletModal, StakeModal
    icons/      PixelIcon, SugarBrand (logo + coin)
    art/        HeroKingdom, Sprite, Mascot, NFTPlaceholder
  pages/        Overview, SugarToken, Kingdom, Safari, Expedition,
                Crafting, SugarNFTs, SugarItems, AnvilMarket, Mechanics, FAQ
```

## Status

Pre-launch. SUGAR has not launched, the 7,777 NFT collection has not minted, and there are no live contracts, pools, or markets yet.
