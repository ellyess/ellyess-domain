import { PageShell } from "@/components/PageShell";
import { codeItems } from "@/content/site";

export default function CodePage() {
  return (
    <PageShell
      title="Code"
      intro="Implementation work focused on scientific computing, optimisation pipelines, and production-minded technical tooling."
      items={codeItems}
    />
  );
}