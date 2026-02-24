import { Section } from "@/components/Section";
import { areas, principles, profileLinks, projects } from "@/content/site";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="space-y-14">
      <header className="space-y-5 border-b border-[var(--line)] pb-10">
        <p className="text-sm text-[var(--muted)] [font-family:var(--font-mono)]">ellyess benmoufok</p>
        <h1 className="max-w-3xl text-3xl font-semibold leading-tight md:text-4xl">
          Computational science, energy systems, optimisation, and applied modelling.
        </h1>
        <p className="max-w-2xl text-base leading-relaxed text-[var(--muted)]">
          PhD candidate in Computational Science working across wind energy systems,
          optimisation workflows, and applied scientific software.
        </p>
      </header>

      <Section title="Systems Lens">
        <div className="grid gap-3 md:grid-cols-3">
          {principles.map((item) => (
            <div key={item} className="border border-[var(--line)] bg-[var(--surface)] p-4">
              <p className="text-xs uppercase tracking-wide text-[var(--muted)] [font-family:var(--font-mono)]">
                Principle
              </p>
              <p className="mt-2 text-sm">{item}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Selected Work">
        <div className="space-y-3">
          {projects.map((project) => (
            <article key={project.title} className="border border-[var(--line)] bg-[var(--surface)] p-4">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <h3 className="text-lg font-medium">{project.title}</h3>
                <span className="text-xs text-[var(--muted)] [font-family:var(--font-mono)]">
                  {project.kind}
                </span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{project.summary}</p>
              {project.url ? (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-block text-xs text-[var(--accent)] [font-family:var(--font-mono)]"
                >
                  Open link ↗
                </a>
              ) : null}
            </article>
          ))}
        </div>
      </Section>

      <Section title="Work Areas">
        <div className="grid gap-3 sm:grid-cols-2">
          {areas.map((area) => (
            <Link
              key={area.href}
              href={area.href}
              className="border border-[var(--line)] bg-[var(--surface)] p-4 transition-colors hover:border-[var(--accent)]"
            >
              <p className="text-base font-medium">{area.title}</p>
              <p className="mt-1 text-sm text-[var(--muted)]">{area.summary}</p>
            </Link>
          ))}
        </div>
      </Section>

      <Section title="Profiles">
        <div className="flex flex-wrap gap-3">
          {profileLinks.map((profile) => (
            <a
              key={profile.label}
              href={profile.href}
              target="_blank"
              rel="noreferrer"
              className="border border-[var(--line)] bg-[var(--surface)] px-3 py-2 text-sm text-[var(--muted)] transition-colors hover:border-[var(--accent)] hover:text-[var(--text)]"
            >
              {profile.label}
            </a>
          ))}
        </div>
      </Section>
    </main>
  );
}