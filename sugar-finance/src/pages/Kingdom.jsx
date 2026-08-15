import { KingdomModule, LiquidityPositionsModule } from "../components/modules/Modules.jsx";
export default function Kingdom() {
  return (
    <div className="mx-auto max-w-4xl space-y-4">
      <KingdomModule />
      <LiquidityPositionsModule />
    </div>
  );
}
