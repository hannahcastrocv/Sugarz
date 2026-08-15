import { Menu, Wallet } from "lucide-react";
import Button from "../ui/Button.jsx";
import { SugarLogo } from "../icons/SugarBrand.jsx";
import useComingSoon from "../../hooks/useComingSoon.js";

// Minimal top bar: mobile menu + logo, and a Connect Wallet action pinned to the
// right (Coming Soon pre-launch). The network chip lives in the sidebar.
export default function Header({ onOpenMenu }) {
  const comingSoon = useComingSoon();
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-base/85 backdrop-blur-md">
      <div className="flex items-center gap-3 px-4 py-3 sm:px-6">
        <button
          onClick={onOpenMenu}
          className="grid h-9 w-9 place-items-center rounded-lg border border-line2 bg-panel2 text-muted transition hover:text-ink lg:hidden"
          aria-label="Open menu"
        >
          <Menu size={18} />
        </button>
        <div className="lg:hidden">
          <SugarLogo compact />
        </div>

        <div className="ml-auto">
          <Button variant="primary" size="md" onClick={comingSoon("Wallet connection")}>
            <Wallet size={14} />
            <span className="hidden xs:inline">Connect Wallet</span>
            <span className="xs:hidden">Connect</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
