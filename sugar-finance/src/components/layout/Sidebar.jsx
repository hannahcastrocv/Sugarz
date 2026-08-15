import { NavLink } from "react-router-dom";
import { Copy } from "lucide-react";
import { NAV_ITEMS } from "../../data/demoData.js";
import { NETWORK, DEMO_WALLET_ADDRESS } from "../../config/siteConfig.js";
import PixelIcon from "../icons/PixelIcon.jsx";
import { SugarLogo } from "../icons/SugarBrand.jsx";
import ArtIcon from "../art/ArtIcon.jsx";
import { useToast } from "../../context/ToastContext.jsx";

export default function Sidebar({ onNavigate }) {
  const { notify } = useToast();

  const copyAddress = () => {
    const write = navigator.clipboard?.writeText?.(DEMO_WALLET_ADDRESS);
    Promise.resolve(write).finally(() =>
      notify("Copied demo address", { body: "Placeholder value shown for the preview.", tone: "success" })
    );
  };

  return (
    <div className="flex h-full flex-col">
      {/* Logo */}
      <div className="px-4 pb-4 pt-5">
        <NavLink to="/" onClick={onNavigate} aria-label="Sugar Finance home">
          <SugarLogo />
        </NavLink>
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto px-3 pb-2">
        <ul className="space-y-1">
          {NAV_ITEMS.map((item) => (
            <li key={item.key}>
              <NavLink
                to={item.path}
                end={item.path === "/"}
                onClick={onNavigate}
                className={({ isActive }) =>
                  `group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-semibold transition-colors ${
                    isActive
                      ? "bg-gradient-to-r from-sugar-pink/90 to-sugar-red/90 text-white shadow-[0_2px_0_0_#8f0f32]"
                      : "text-muted hover:bg-white/5 hover:text-ink"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span
                      className={`grid h-6 w-6 shrink-0 place-items-center rounded-md ${
                        isActive ? "bg-white/15" : "bg-panel2 group-hover:bg-panel3"
                      }`}
                    >
                      <PixelIcon name={item.icon} size={16} />
                    </span>
                    <span className="truncate">{item.label}</span>
                    {item.badge && (
                      <span
                        className={`ml-auto rounded-md px-1.5 py-0.5 text-[9px] font-bold tracking-wide ${
                          isActive
                            ? "bg-white/20 text-white"
                            : item.badge === "AMM"
                            ? "border border-grape/40 bg-grape/10 text-grapeSoft"
                            : "border border-sugar-pink/40 bg-sugar-pink/10 text-sugar-pink"
                        }`}
                      >
                        {item.badge}
                      </span>
                    )}
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Network footer */}
      <div className="mt-2 px-3 pb-3">
        <div className="rounded-xl border border-line bg-panel2 p-3">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-mint shadow-[0_0_8px_2px_rgba(52,211,153,0.6)]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-faint">
              On {NETWORK.CHAIN_NAME}
            </span>
          </div>
          <button
            onClick={copyAddress}
            className="mt-2 flex w-full items-center justify-between gap-2 rounded-lg border border-line bg-panel px-2.5 py-1.5 text-left transition hover:border-sugar-pink/40"
            title="Demo address (placeholder)"
          >
            <span className="flex items-center gap-2">
              <PixelIcon name="coin" size={16} />
              <span className="font-mono text-xs text-muted">{DEMO_WALLET_ADDRESS}</span>
            </span>
            <Copy size={13} className="text-faint" />
          </button>
        </div>

        {/* Mascot */}
        <div className="relative mt-3 grid place-items-center overflow-hidden rounded-xl border border-line bg-gradient-to-b from-panel2 to-panel py-3">
          <div className="pointer-events-none absolute inset-0 opacity-40 [background:radial-gradient(120px_60px_at_50%_90%,rgba(255,77,125,0.35),transparent_70%)]" />
          <ArtIcon name="mascot" size={96} className="relative animate-floaty drop-shadow-[0_6px_10px_rgba(0,0,0,0.5)]" />
        </div>
      </div>
    </div>
  );
}
