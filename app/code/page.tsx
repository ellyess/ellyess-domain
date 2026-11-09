import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { WorkRow } from "@/components/WorkRow";
import { codeItems, work } from "@/content/site";

export const metadata: Metadata = {
  title: "Code & data",
  description:
    "Open-source scientific Python and open data: PyVWF for bias-corrected wind power, Wind Generation Sources, a PyPSA-Eur fork, catastrophe-model and ML evaluation projects.",
  alternates: { canonical: "/code" },
};

export default function CodePage() {
  const side = codeItems.filter((item) => !work.includes(item));

  return (
    <PageShell
      title="Code & data"
      intro="Scientific Python and open data, released so other people can install, test, cite and extend it. Tests, continuous integration, typing and documentation are part of the work."
    >
      <section>
        <h2 className="eyebrow mb-2">Research software and data</h2>
        <div className="border-b border-[var(--line)]">
          {work.map((item) => (
            <WorkRow key={item.title} item={item} />
          ))}
        </div>
      </section>
      <section>
        <h2 className="eyebrow mb-2">Side projects</h2>
        <div className="border-b border-[var(--line)]">
          {side.map((item) => (
            <WorkRow key={item.title} item={item} />
          ))}
        </div>
      </section>
    </PageShell>
  );
}
