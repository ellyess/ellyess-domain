import { PageShell } from "@/components/PageShell";
import { researchItems } from "@/content/site";

export default function ResearchPage() {
  return (
    <PageShell
      title="Research"
      kicker="Computational science"
      intro="Wind energy systems, reanalysis bias correction, and the integration of physical modelling into continental-scale energy system optimisation."
      items={researchItems}
    />
  );
}