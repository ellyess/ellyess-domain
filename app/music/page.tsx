import { PageShell } from "@/components/PageShell";
import { musicEmbeds, musicItems } from "@/content/site";

export default function MusicPage() {
  return (
    <PageShell
      title="Music"
      intro="A secondary creative practice documented with the same preference for structure, clarity, and iterative craft."
      items={musicItems}
    >
      <section className="space-y-3">
        <h2 className="text-xs uppercase tracking-wide text-[var(--muted)] [font-family:var(--font-mono)]">
          Selected Tracks
        </h2>

        {musicEmbeds.map((track) => (
          <article key={track.src} className="border border-[var(--line)] bg-[var(--surface)] p-4">
            <iframe
              title={track.title}
              style={{ border: 0, width: "100%", height: "42px" }}
              src={track.src}
              seamless
            >
              <a href={track.href}>{track.title}</a>
            </iframe>
          </article>
        ))}
      </section>
    </PageShell>
  );
}