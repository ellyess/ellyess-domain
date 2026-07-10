import { PageShell } from "@/components/PageShell";
import { Section } from "@/components/Section";
import { musicEmbeds, musicItems } from "@/content/site";

export default function MusicPage() {
  return (
    <PageShell
      title="Music"
      kicker="Creative practice"
      intro="A second discipline run with the same care as the technical work — structure, clarity, and iterative craft. Released tracks stream below."
      items={musicItems}
    >
      <Section title="Releases" kicker="Streaming">
        {musicEmbeds.map((track) => (
          <article key={track.src} className="border-t border-[var(--line)] py-6 first:border-t-0">
            <div className="mb-4 flex items-baseline justify-between gap-4">
              <p className="eyebrow text-[var(--muted)]">{track.platform ?? "Player"}</p>
              <a
                href={track.href}
                target="_blank"
                rel="noreferrer"
                className="link-arrow"
              >
                Open
              </a>
            </div>
            <iframe
              title={track.title}
              style={{
                border: 0,
                width: "100%",
                height: `${track.height ?? 166}px`,
                borderRadius: track.rounded ? 12 : 0,
              }}
              src={track.src}
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              allowFullScreen
              loading="lazy"
            >
              <a href={track.href}>{track.title}</a>
            </iframe>
          </article>
        ))}
      </Section>
    </PageShell>
  );
}