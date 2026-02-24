import { PageShell } from "@/components/PageShell";
import { researchItems } from "@/content/site";

export default function ResearchPage() {
  return (
    <PageShell
      title="Research"
      intro="Research in computational science with focus on wind energy systems, optimisation formulation, and robust modelling workflows."
      items={researchItems}
    />
  );
}