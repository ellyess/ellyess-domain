import type { Metadata } from "next";
import { Block, Bullets } from "@/components/Block";
import { PageShell } from "@/components/PageShell";
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
    <PageShell title="Research" intro={researchIntro}>
      <Block label="Thesis" note={`${phdStatus()} · Oct 2021 – Jun 2026`}>
        <h3 className="max-w-[60ch] text-[19px] font-semibold leading-snug">{thesis.title}</h3>
        <p className="mt-1.5 text-[14px] text-[var(--muted)]">
          {thesis.degree} · {thesis.funding}
        </p>
        <div className="mt-6">
          <Bullets items={thesis.findings} />
        </div>
        <p className="mt-6 max-w-[66ch] border-l-2 border-[var(--accent)] pl-4 text-[16px] leading-[1.65]">
          {thesis.conclusion}
        </p>
      </Block>

      <Block label="Publications" note="Peer-reviewed">
        <div className="border-b border-[var(--line)]">
          {publications.map((p) => (
            <article key={p.url} className="flex flex-col gap-1.5 border-t border-[var(--line)] py-5">
              <p className="eyebrow">
                {p.year} · <span className={p.role === "First author" ? "text-[var(--accent)]" : ""}>{p.role}</span>
              </p>
              <h3 className="text-[16.5px] font-medium leading-[1.4]">{p.title}</h3>
              <p className="text-[13.5px] text-[var(--muted)]">
                <Authors list={p.authors} /> · <i>{p.venue}</i>
              </p>
              <p className="max-w-[66ch] text-[14.5px] leading-[1.6] text-[var(--muted)]">{p.note}</p>
              <a href={p.url} target="_blank" rel="noreferrer" className="more eyebrow mt-1 py-1 !text-[var(--accent)]">
                DOI ↗
              </a>
            </article>
          ))}
        </div>
      </Block>
    </PageShell>
  );
}

function Authors({ list }: { list: string[] }) {
  return (
    <>
      {list.map((a, i) => {
        const self = a.startsWith("**");
        const name = a.replaceAll("**", "");
        return (
          <span key={a}>
            {self ? <span className="font-medium text-[var(--text)]">{name}</span> : name}
            {i < list.length - 1 ? ", " : ""}
          </span>
        );
      })}
    </>
  );
}
