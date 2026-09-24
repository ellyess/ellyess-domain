import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { codeItems } from "@/content/site";

export const metadata: Metadata = {
  title: "Code",
  description:
    "Open-source scientific Python: PyVWF for bias-corrected wind power, a PyPSA-Eur fork, catastrophe-model and ML evaluation projects.",
  alternates: { canonical: "/code" },
};

export default function CodePage() {
  return (
    <PageShell
      title="Code"
      kicker="Research software"
      intro="Scientific Python released so other people can install, test, cite and extend it. Tests, continuous integration, typing and documentation are part of the work, not an afterthought."
      items={codeItems}
    />
  );
}
