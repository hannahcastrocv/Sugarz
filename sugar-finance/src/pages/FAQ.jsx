import { Panel, SectionHeader } from "../components/ui/Primitives.jsx";
import FAQAccordion from "../components/ui/FAQAccordion.jsx";
import { FAQ as FAQ_ITEMS } from "../data/demoData.js";

export default function FAQ() {
  return (
    <div className="space-y-5">
      <Panel>
        <SectionHeader icon="help" title="FAQ" subtitle="Frequently asked questions about Sugar Finance." />
      </Panel>
      <FAQAccordion items={FAQ_ITEMS} />
    </div>
  );
}
