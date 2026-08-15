import { useCallback } from "react";
import { useToast } from "../context/ToastContext.jsx";

// Pre-launch, every on-chain / source-backed action shows the same friendly
// "Coming Soon" notice instead of doing anything. One hook wires them all.
export default function useComingSoon() {
  const { notify } = useToast();
  return useCallback(
    (label) => (e) => {
      if (e && typeof e.preventDefault === "function") e.preventDefault();
      notify("Coming Soon", {
        body: label ? `${label} unlocks after Sugar Finance launches.` : "This unlocks after Sugar Finance launches.",
        tone: "info",
      });
    },
    [notify]
  );
}
