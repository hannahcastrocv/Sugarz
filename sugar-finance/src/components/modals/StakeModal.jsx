import { useState, useEffect } from "react";
import Modal from "../ui/Modal.jsx";
import Button from "../ui/Button.jsx";
import { Badge } from "../ui/Primitives.jsx";
import { useToast } from "../../context/ToastContext.jsx";

// A demo staking modal. It walks through the interface states the real flow
// will use (idle, confirm, pending, done) but never sends a transaction.
export default function StakeModal({ open, onClose, poolName, poolType, symbol = "SUGAR", tone = "pink" }) {
  const { notify } = useToast();
  const [amount, setAmount] = useState("");
  const [phase, setPhase] = useState("idle"); // idle | pending | done

  useEffect(() => {
    if (open) {
      setAmount("");
      setPhase("idle");
    }
  }, [open]);

  const confirm = () => {
    setPhase("pending");
    setTimeout(() => {
      setPhase("done");
      notify("Preview only", {
        body: "Staking goes live after launch. No transaction was sent.",
        tone: "info",
      });
    }, 1400);
  };

  return (
    <Modal open={open} onClose={onClose} title={`Stake ${poolName || ""}`.trim()}>
      <div className="mb-4 flex items-center gap-2">
        {poolType && <Badge tone={tone}>{poolType}</Badge>}
        <Badge tone="gold">Coming Soon</Badge>
      </div>

      <label className="label" htmlFor="stake-amount">
        Amount to stake
      </label>
      <div className="mt-1.5 flex items-center gap-2 rounded-xl border border-line2 bg-panel2 px-3 py-2.5">
        <input
          id="stake-amount"
          inputMode="decimal"
          placeholder="0.00"
          value={amount}
          onChange={(e) => setAmount(e.target.value.replace(/[^0-9.]/g, ""))}
          disabled={phase !== "idle"}
          className="w-full bg-transparent text-lg font-bold text-ink outline-none placeholder:text-faint disabled:opacity-60"
        />
        <span className="shrink-0 rounded-md bg-panel3 px-2 py-1 text-[11px] font-bold text-muted">{symbol}</span>
      </div>
      <p className="mt-2 text-[11px] text-faint">Balance and live APR appear here after launch.</p>

      <div className="mt-5">
        {phase === "idle" && (
          <Button variant="primary" full onClick={confirm}>
            Confirm Transaction
          </Button>
        )}
        {phase === "pending" && (
          <Button variant="disabled" full disabled>
            <span className="inline-block h-3 w-3 animate-spin rounded-full border-2 border-white/40 border-t-white" />
            Transaction Pending
          </Button>
        )}
        {phase === "done" && (
          <div className="space-y-3">
            <div className="rounded-lg border border-mint/40 bg-mint/10 px-3 py-2.5 text-center text-sm font-semibold text-mint">
              Preview complete
            </div>
            <Button variant="outline" full onClick={onClose}>
              Close
            </Button>
          </div>
        )}
      </div>
    </Modal>
  );
}
