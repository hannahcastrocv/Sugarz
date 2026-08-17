import { NETWORK, LINKS, LAUNCH_STATUS } from "../../config/siteConfig.js";
import PixelIcon from "../icons/PixelIcon.jsx";

function XLogo({ size = 16 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const FACTS = [
  { label: "Built On", value: NETWORK.CHAIN_NAME, icon: "leaf" },
  { label: "Gas Token", value: NETWORK.GAS_TOKEN, icon: "eth" },
  { label: "Stablecoin", value: NETWORK.STABLECOIN, icon: "usdg" },
  { label: "Audited", value: LAUNCH_STATUS.comingSoon, icon: "shield" },
];

export default function Footer() {
  return (
    <footer className="mt-8 border-t border-line bg-base/60">
      <div className="flex flex-col gap-5 px-4 py-5 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="grid grid-cols-2 gap-x-8 gap-y-4 sm:grid-cols-4">
          {FACTS.map((f) => (
            <div key={f.label} className="flex items-center gap-2.5">
              <PixelIcon name={f.icon} size={22} />
              <div>
                <p className="label">{f.label}</p>
                <p className={`mt-0.5 text-sm font-semibold ${f.value === LAUNCH_STATUS.comingSoon ? "text-muted" : "text-ink"}`}>
                  {f.value}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href={LINKS.X_URL}
            target="_blank"
            rel="noreferrer"
            className="grid h-10 w-10 place-items-center rounded-lg border border-line2 bg-panel2 text-ink transition hover:border-sugar-pink/50 hover:text-sugar-pink"
            aria-label="Sugar Finance on X"
          >
            <XLogo />
          </a>
        </div>
      </div>
    </footer>
  );
}
