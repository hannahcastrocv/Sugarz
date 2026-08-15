import Modal from "../ui/Modal.jsx";
import { useWallet } from "../../context/WalletContext.jsx";
import { useToast } from "../../context/ToastContext.jsx";

const WALLETS = [
  { id: "metamask", name: "MetaMask", tint: "#f6851b" },
  { id: "coinbase", name: "Coinbase Wallet", tint: "#2c5ff6" },
  { id: "other", name: "Other Wallet", tint: "#a259ff" },
];

function WalletMark({ tint }) {
  return (
    <span
      className="pixelated grid h-8 w-8 shrink-0 place-items-center rounded-md"
      style={{ backgroundColor: `${tint}22`, border: `1px solid ${tint}66` }}
    >
      <span className="h-3.5 w-3.5 rounded-[3px]" style={{ backgroundColor: tint }} />
    </span>
  );
}

export default function WalletModal() {
  const { modalOpen, closeModal } = useWallet();
  const { notify } = useToast();

  const pick = (name) => {
    notify(`${name} selected`, {
      body: "Wallet connection will be enabled after launch.",
      tone: "info",
    });
  };

  return (
    <Modal open={modalOpen} onClose={closeModal} title="Connect Wallet">
      <p className="mb-4 rounded-lg border border-gold/30 bg-gold/10 px-3 py-2 text-xs text-gold">
        Wallet connection will be enabled after launch. This is a preview.
      </p>
      <div className="space-y-2.5">
        {WALLETS.map((w) => (
          <button
            key={w.id}
            onClick={() => pick(w.name)}
            className="group flex w-full items-center gap-3 rounded-xl border border-line2 bg-panel2 px-4 py-3 text-left transition hover:border-sugar-pink/50 hover:bg-panel3"
          >
            <WalletMark tint={w.tint} />
            <span className="text-sm font-semibold text-ink">{w.name}</span>
            <span className="ml-auto text-[10px] font-bold uppercase tracking-wide text-faint transition group-hover:text-sugar-pink">
              Preview
            </span>
          </button>
        ))}
      </div>
      <p className="mt-4 text-center text-[11px] text-faint">
        Sugar Finance is on Robinhood Chain. No transaction is sent in this demo.
      </p>
    </Modal>
  );
}
