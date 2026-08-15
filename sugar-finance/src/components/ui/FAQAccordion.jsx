import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQAccordion({ items }) {
  const [open, setOpen] = useState(0);

  return (
    <div className="space-y-2.5">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i} className={`panel-2 overflow-hidden transition-colors ${isOpen ? "border-sugar-pink/40" : ""}`}>
            <button
              onClick={() => setOpen(isOpen ? -1 : i)}
              className="flex w-full items-center justify-between gap-4 px-4 py-3.5 text-left"
              aria-expanded={isOpen}
            >
              <span className={`text-sm font-bold ${isOpen ? "text-sugar-pink" : "text-ink"}`}>{item.q}</span>
              <ChevronDown
                size={18}
                className={`shrink-0 text-faint transition-transform duration-200 ${isOpen ? "rotate-180 text-sugar-pink" : ""}`}
              />
            </button>
            <div
              className="grid transition-all duration-200 ease-out"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <p className="px-4 pb-4 text-sm leading-relaxed text-muted">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
