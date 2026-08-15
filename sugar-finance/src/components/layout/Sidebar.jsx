import { NavLink } from "react-router-dom";
import { NAV_ITEMS } from "../../data/demoData.js";
import PixelIcon from "../icons/PixelIcon.jsx";
import { SugarLogo } from "../icons/SugarBrand.jsx";
import ArtIcon from "../art/ArtIcon.jsx";

export default function Sidebar({ onNavigate }) {
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

      {/* Mascot */}
      <div className="px-3 pb-3">
        <div className="relative mt-2 grid place-items-center overflow-hidden rounded-xl border border-line bg-gradient-to-b from-panel2 to-panel py-3">
          <div className="pointer-events-none absolute inset-0 opacity-40 [background:radial-gradient(120px_60px_at_50%_90%,rgba(255,77,125,0.35),transparent_70%)]" />
          <ArtIcon name="mascot" size={96} className="relative animate-floaty drop-shadow-[0_6px_10px_rgba(0,0,0,0.5)]" />
        </div>
      </div>
    </div>
  );
}
