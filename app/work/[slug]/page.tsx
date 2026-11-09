import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Block, Bullets } from "@/components/Block";
import { getProject, projects } from "@/content/projects";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProject((await params).slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.description,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: { title: project.title, description: project.description },
  };
}

const toneColour = { ok: "var(--ok)", neutral: "var(--subtle)", warn: "var(--warn)" };

export default async function ProjectPage({ params }: Props) {
  const project = getProject((await params).slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === project.slug);
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];

  return (
    <main>
      <p className="eyebrow">
        <Link href="/#work" className="hover:text-[var(--text)]">
          Work
        </Link>{" "}
        / {project.kicker}
      </p>

      <header className="mt-5 grid grid-cols-1 items-start gap-10 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] lg:gap-14">
        <div className="flex min-w-0 flex-col gap-6">
          <h1 className="display text-[32px] leading-[1.15] md:text-[42px]">{project.title}</h1>
          <div className="rounded-lg border border-[var(--accent)]/40 bg-[var(--accent-soft)] px-6 py-5">
            <p className="eyebrow !text-[var(--accent)]">In brief</p>
            <ul className="mt-3 space-y-2.5 pl-[18px] text-[15.5px] leading-[1.6] [list-style:disc]">
              {project.brief.map((b) => (
                <li key={b.label}>
                  <b className="font-medium">{b.label}:</b>{" "}
                  <span className="text-[var(--muted)]">{b.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <dl className="grid grid-cols-[auto_minmax(0,1fr)] gap-x-5 gap-y-3.5 border-t border-[var(--line-strong)] pt-[18px] text-[14px]">
          <dt className="eyebrow pt-0.5">Role</dt>
          <dd className="leading-[1.55] text-[var(--muted)]">{project.role}</dd>
          <dt className="eyebrow pt-0.5">Period</dt>
          <dd className="text-[var(--muted)]">{project.period}</dd>
          <dt className="eyebrow pt-0.5">Status</dt>
          <dd className="text-[var(--muted)]">
            <span style={{ color: toneColour[project.status.tone] }} aria-hidden>
              ●{" "}
            </span>
            {project.status.text}
          </dd>
          <dt className="eyebrow pt-0.5">Stack</dt>
          <dd className="leading-[1.55] text-[var(--muted)]">{project.tech}</dd>
          <dt className="eyebrow pt-0.5">Links</dt>
          <dd className="flex flex-wrap gap-x-4 gap-y-1">
            {project.links.map((l) => (
              <a key={l.href} href={l.href} target="_blank" rel="noreferrer" className="text-[var(--accent)] hover:underline">
                {l.label} ↗
              </a>
            ))}
          </dd>
        </dl>
      </header>

      {project.facts ? (
        <dl className="mt-11 grid grid-cols-2 border-y border-[var(--line)] md:grid-cols-6">
          {project.facts.map((f, i) => (
            <div
              key={f.label}
              className={`py-4 pr-4 ${i % 2 === 1 ? "max-md:border-l max-md:pl-4" : ""} md:border-l md:pl-4 md:first:border-l-0 md:first:pl-0 ${i >= 2 ? "max-md:border-t" : ""}`}
            >
              <dt className="eyebrow">{f.label}</dt>
              <dd className="mt-1.5 text-[14px] [font-family:var(--font-mono)]">{f.value}</dd>
            </div>
          ))}
        </dl>
      ) : null}

      <div className="mt-16 flex flex-col gap-14">
        {project.sections.map((s) => (
          <Block key={s.title} label={s.title} note={s.kicker}>
            <div className="flex flex-col gap-6">
              {s.intro ? (
                <p className="max-w-[66ch] text-[16.5px] leading-[1.7] text-[var(--muted)]">{s.intro}</p>
              ) : null}
              {s.bullets ? <Bullets items={s.bullets} /> : null}
              {s.figure ? (
                <figure>
                  <div className="space-y-3 rounded-md border border-[var(--line)] bg-[var(--img-bg)] p-3 md:p-4">
                    {s.figure.images.map((img) => (
                      <Image
                        key={img.src}
                        src={img.src}
                        width={img.width}
                        height={img.height}
                        alt={img.alt}
                        sizes="(min-width: 1060px) 860px, 100vw"
                        className="fig mx-auto h-auto"
                        style={{
                          // Panels in one figure share a scale
                          width: `${(img.width / Math.max(...s.figure!.images.map((i) => i.width))) * 100}%`,
                        }}
                      />
                    ))}
                  </div>
                  <figcaption className="mt-2.5 max-w-[72ch] text-[13px] leading-[1.55] text-[var(--subtle)]">
                    {s.figure.caption}
                  </figcaption>
                </figure>
              ) : null}
            </div>
          </Block>
        ))}
      </div>

      <nav aria-label="More case studies" className="mt-24 flex flex-wrap justify-between gap-6 border-t border-[var(--line)] pt-7">
        <Link href={`/work/${prev.slug}`} className="more group flex-col !items-start gap-1.5">
          <span className="eyebrow">Previous</span>
          <span className="text-[16px] group-hover:text-[var(--accent)]">← {prev.title}</span>
        </Link>
        <Link href={`/work/${next.slug}`} className="more group ml-auto flex-col !items-end gap-1.5 text-right">
          <span className="eyebrow">Next</span>
          <span className="text-[16px] group-hover:text-[var(--accent)]">{next.title} →</span>
        </Link>
      </nav>
    </main>
  );
}
