import { PageShell } from "@/components/PageShell";
import { researchItems } from "@/content/site";

export default function ResearchPage() {
  return (
    <PageShell
      title="Research"
      kicker="Computational science"
      intro="Wind energy systems, reanalysis bias correction, and uncertainty quantification, integrated into continental-scale energy system optimisation with an emphasis on reproducible research."
      items={researchItems}
    />
  );
}