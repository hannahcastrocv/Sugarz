import {
  HeroModule, StatsRow, TopKingdomPoolsModule, SugarTokenModule, KingdomModule,
  LiquidityPositionsModule, SafariModule, ExpeditionModule, CraftingModule,
  SugarNFTsModule, SugarItemsModule, AnvilModule, MechanicsModule,
} from "../components/modules/Modules.jsx";

// The Overview is the full dashboard: every module on one page, in the same
// three bands as the reference.
export default function Overview() {
  return (
    <div className="space-y-4">
      {/* Band 1: hero + stats + top pools | Sugar Token | Kingdom + liquidity */}
      <div className="grid items-start gap-4 xl:grid-cols-3">
        <div className="space-y-4">
          <HeroModule />
          <StatsRow />
          <TopKingdomPoolsModule />
        </div>
        <SugarTokenModule />
        <div className="space-y-4">
          <KingdomModule narrow />
          <LiquidityPositionsModule />
        </div>
      </div>

      {/* Band 2: Safari | Expedition | Crafting */}
      <div className="grid gap-4 xl:grid-cols-3">
        <SafariModule narrow />
        <ExpeditionModule narrow />
        <CraftingModule narrow />
      </div>

      {/* Band 3: Sugar NFTs | Sugar Items | Anvil | Mechanics */}
      <div className="grid gap-4 xl:grid-cols-2">
        <SugarNFTsModule />
        <SugarItemsModule narrow />
        <AnvilModule />
        <MechanicsModule />
      </div>
    </div>
  );
}
