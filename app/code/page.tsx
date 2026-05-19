import { PageShell } from "@/components/PageShell";
import { codeItems } from "@/content/site";

export default function CodePage() {
  return (
    <PageShell
      title="Code"
      kicker="Implementation"
      intro="Scientific computing, optimisation pipelines, and production-minded technical tooling. Open source where possible."
      items={codeItems}
    />
  );
}