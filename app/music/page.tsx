import { PageShell } from "@/components/PageShell";
import { musicEmbeds, musicItems } from "@/content/site";

export default function MusicPage() {
  return (
    <PageShell
      title="Music"
      intro="A secondary creative practice documented with the same preference for structure, clarity, and iterative craft. Released tracks are streamed below."
      items={musicItems}
    >
      <section className="space-y-3">
        <h2 className="text-xs uppercase tracking-wide text-[var(--muted)] [font-family:var(--font-mono)]">
          Releases
        </h2>

        {musicEmbeds.map((track) => (
          <article key={track.src} className="border border-[var(--line)] bg-[var(--surface)] p-4">
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
            <p className="mt-3 text-xs text-[var(--muted)] [font-family:var(--font-mono)]">
              <a href={track.href} target="_blank" rel="noreferrer" className="text-[var(--accent)] hover:underline">
                Open on {track.platform ?? "platform"} ↗
              </a>
            </p>
          </article>
        ))}
      </section>
    </PageShell>
  );
}