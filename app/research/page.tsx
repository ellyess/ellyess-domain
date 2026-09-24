import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { Section } from "@/components/Section";
import { Row, RowBullets, RowTitle } from "@/components/Row";
import { publications, researchIntro, thesis } from "@/content/site";
import { phdStatus } from "@/lib/status";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Research",
  description:
    "PhD research on ERA5 reanalysis wind bias correction and wind representation in European energy system models, with peer-reviewed publications in Energy and Energy Conversion and Management.",
  alternates: { canonical: "/research" },
};

export default function ResearchPage() {
  return (
    <PageShell title="Research" kicker="Computational science" intro={researchIntro}>
      <Section number="01" title="Thesis" kicker={phdStatus()}>
        <Row
          meta={
            <>
              <span className="eyebrow text-[var(--subtle)]">Oct 2021 – Jun 2026</span>
              <span className="eyebrow text-[var(--subtle)]">{thesis.funding}</span>
            </>
          }
        >
          <RowTitle title={thesis.title} sub={thesis.degree} />
          <RowBullets bullets={thesis.findings} />
          <p className="text-sm leading-relaxed text-[var(--text)]">{thesis.conclusion}</p>
        </Row>
      </Section>

      <Section number="02" title="Publications" kicker="Peer-reviewed">
        {publications.map((p) => (
          <Row
            key={p.url}
            meta={
              <>
                <span className="eyebrow text-[var(--subtle)]">{p.short}</span>
                <span className="eyebrow text-[var(--subtle)]">{p.role}</span>
              </>
            }
          >
            <RowTitle title={p.title} />
            <p className="text-xs italic text-[var(--subtle)]">{p.venue}</p>
            <p className="text-sm leading-relaxed text-[var(--muted)]">{p.note}</p>
            <a href={p.url} target="_blank" rel="noreferrer" className="link-arrow !mt-4">
              View publication
            </a>
          </Row>
        ))}
      </Section>
    </PageShell>
  );
}
