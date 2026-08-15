import { useEffect } from "react";
import { X } from "lucide-react";

export default function Modal({ open, onClose, title, children, footer, maxWidth = "max-w-md" }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" role="dialog" aria-modal="true">
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm animate-pop"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className={`relative w-full ${maxWidth} panel animate-slideup p-5 shadow-glowpink`}>
        <div className="mb-4 flex items-center justify-between gap-4">
          <h3 className="eyebrow text-sugar-pink">{title}</h3>
          <button
            onClick={onClose}
            className="rounded-md p-1.5 text-faint transition hover:bg-white/5 hover:text-ink"
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>
        <div>{children}</div>
        {footer && <div className="mt-5">{footer}</div>}
      </div>
    </div>
  );
}
