import { createContext, useContext, useState, useCallback } from "react";
import { CheckCircle2, Info, Clock, X } from "lucide-react";

const ToastContext = createContext(null);

let idCounter = 0;

const TONE = {
  success: { icon: CheckCircle2, ring: "border-mint/50", accent: "text-mint" },
  info: { icon: Info, ring: "border-sugar-pink/50", accent: "text-sugar-pink" },
  pending: { icon: Clock, ring: "border-gold/50", accent: "text-gold" },
};

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const dismiss = useCallback((id) => {
    setToasts((t) => t.filter((x) => x.id !== id));
  }, []);

  const notify = useCallback(
    (title, opts = {}) => {
      const id = ++idCounter;
      const toast = {
        id,
        title,
        body: opts.body || "",
        tone: opts.tone || "info",
        duration: opts.duration ?? 3200,
      };
      setToasts((t) => [...t, toast]);
      if (toast.duration > 0) {
        setTimeout(() => dismiss(id), toast.duration);
      }
      return id;
    },
    [dismiss]
  );

  return (
    <ToastContext.Provider value={{ notify, dismiss }}>
      {children}
      <div className="pointer-events-none fixed bottom-4 right-4 z-[120] flex w-[calc(100vw-2rem)] max-w-sm flex-col gap-2">
        {toasts.map((t) => {
          const tone = TONE[t.tone] || TONE.info;
          const Icon = tone.icon;
          return (
            <div
              key={t.id}
              className={`pointer-events-auto flex items-start gap-3 rounded-xl border ${tone.ring} bg-panel2/95 px-4 py-3 shadow-card backdrop-blur animate-slideup`}
              role="status"
            >
              <Icon size={18} className={`mt-0.5 shrink-0 ${tone.accent}`} />
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-ink">{t.title}</p>
                {t.body && <p className="mt-0.5 text-xs text-muted">{t.body}</p>}
              </div>
              <button
                onClick={() => dismiss(t.id)}
                className="shrink-0 rounded-md p-1 text-faint transition hover:bg-white/5 hover:text-ink"
                aria-label="Dismiss notification"
              >
                <X size={14} />
              </button>
            </div>
          );
        })}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within a ToastProvider");
  return ctx;
}
