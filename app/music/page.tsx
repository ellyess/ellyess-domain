import { PageShell } from "@/components/PageShell";
import { musicEmbeds, musicItems } from "@/content/site";

export default function MusicPage() {
  return (
    <PageShell
      title="Music"
      kicker="Creative practice"
      intro="A second discipline run with the same care as the technical work — structure, clarity, and iterative craft. Released tracks stream below."
      items={musicItems}
    >
      <section className="space-y-4 pt-6">
        <header className="flex items-baseline justify-between border-t border-[var(--line)] pt-5">
          <h2 className="display text-2xl md:text-[28px] text-[var(--text)]">Releases</h2>
          <span className="eyebrow hidden md:block">Streaming</span>
        </header>

        <div className="space-y-px">
          {musicEmbeds.map((track) => (
            <article key={track.src} className="card px-6 py-6">
              <div className="mb-3 flex items-baseline justify-between gap-4">
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
        </div>
      </section>
    </PageShell>
  );
}