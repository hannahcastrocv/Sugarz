import { Menu, Wallet, LogOut } from "lucide-react";
import Button from "../ui/Button.jsx";
import { SugarLogo } from "../icons/SugarBrand.jsx";
import { useWallet } from "../../context/WalletContext.jsx";
import { useToast } from "../../context/ToastContext.jsx";

// Top bar: mobile menu + logo, and a working Connect Wallet button on the right.
export default function Header({ onOpenMenu }) {
  const { connected, shortAddress, connecting, connect, disconnect, hasWallet } = useWallet();
  const { notify } = useToast();

  const onWalletClick = async () => {
    if (connected) {
      disconnect();
      notify("Wallet disconnected", { tone: "info" });
      return;
    }
    if (!hasWallet) {
      notify("No wallet detected", {
        body: "Install MetaMask or another Ethereum wallet, then try again.",
        tone: "info",
      });
      return;
    }
    const res = await connect();
    if (res.ok) notify("Wallet connected", { body: shortAddressFrom(res.address), tone: "success" });
    else if (res.reason === "rejected") notify("Connection cancelled", { body: "You dismissed the wallet request.", tone: "info" });
    else if (res.reason === "error") notify("Could not connect", { body: "Something went wrong reaching your wallet.", tone: "info" });
  };

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
          {connected ? (
            <button
              onClick={onWalletClick}
              title="Click to disconnect"
              className="group inline-flex items-center gap-2 rounded-lg border border-mint/40 bg-mint/10 px-3 py-2 text-xs font-semibold text-ink transition hover:border-sugar-pink/50"
            >
              <span className="h-2 w-2 rounded-full bg-mint shadow-[0_0_8px_1px_rgba(52,211,153,0.6)]" />
              <span className="font-mono">{shortAddress}</span>
              <LogOut size={13} className="text-faint transition group-hover:text-sugar-pink" />
            </button>
          ) : (
            <Button variant="primary" size="md" onClick={onWalletClick} disabled={connecting}>
              <Wallet size={14} />
              <span className="hidden xs:inline">{connecting ? "Connecting..." : "Connect Wallet"}</span>
              <span className="xs:hidden">{connecting ? "..." : "Connect"}</span>
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}

function shortAddressFrom(addr) {
  return addr ? `${addr.slice(0, 6)}...${addr.slice(-4)}` : "";
}
