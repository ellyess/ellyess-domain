import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Section } from "@/components/Section";
import { Row, RowBullets } from "@/components/Row";
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

export default async function ProjectPage({ params }: Props) {
  const project = getProject((await params).slug);
  if (!project) notFound();

  const others = projects.filter((p) => p.slug !== project.slug);

  return (
    <main className="space-y-20">
      <header>
        <p className="eyebrow">
          <Link href="/#work" className="hover:text-[var(--text)]">
            Work
          </Link>{" "}
          / {project.kicker}
        </p>
        <h1 className="mt-6 max-w-[22ch] text-4xl font-semibold leading-[1.1] tracking-[-0.02em] text-[var(--text)] md:text-5xl">
          {project.title}
        </h1>
        <p className="mt-6 max-w-[62ch] text-[15.5px] leading-relaxed text-[var(--muted)]">
          {project.summary}
        </p>
        <dl className="mt-8 grid max-w-[62ch] grid-cols-[auto_minmax(0,1fr)] gap-x-6 gap-y-1.5 text-[13px]">
          <dt className="eyebrow text-[var(--subtle)]">Period</dt>
          <dd className="text-[var(--text)]">{project.period}</dd>
          <dt className="eyebrow text-[var(--subtle)]">Stack</dt>
          <dd className="text-[12.5px] text-[var(--text)] [font-family:var(--font-mono)]">
            {project.tech}
          </dd>
        </dl>
        <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
          {project.links.map((l) => (
            <a key={l.href} href={l.href} target="_blank" rel="noreferrer" className="link-arrow">
              {l.label}
            </a>
          ))}
        </div>
      </header>

      {project.sections.map((s, i) => (
        <Section
          key={s.title}
          number={String(i + 1).padStart(2, "0")}
          title={s.title}
          kicker={s.kicker}
        >
          <Row>
            {s.intro ? (
              <p className="text-[15px] leading-relaxed text-[var(--muted)]">{s.intro}</p>
            ) : null}
            {s.bullets ? <RowBullets bullets={s.bullets} /> : null}
          </Row>
          {s.figure ? (
            <figure className="mt-4 md:ml-[96px]">
              <div className="space-y-3 rounded-md bg-white p-3 md:p-5">
                {s.figure.images.map((img) => (
                  <Image
                    key={img.src}
                    src={img.src}
                    width={img.width}
                    height={img.height}
                    alt={img.alt}
                    sizes="(min-width: 1060px) 900px, 100vw"
                    className="mx-auto h-auto"
                    style={{
                      // Panels in one figure share a scale, so a half-width
                      // panel renders at half the width of a full one
                      width: `${(img.width / Math.max(...s.figure!.images.map((i) => i.width))) * 100}%`,
                    }}
                  />
                ))}
              </div>
              <figcaption className="mt-3 max-w-[70ch] text-[12.5px] leading-relaxed text-[var(--subtle)]">
                {s.figure.caption}
              </figcaption>
            </figure>
          ) : null}
        </Section>
      ))}

      <Section title="More work" kicker="Case studies">
        {others.map((p) => (
          <Row key={p.slug} meta={<span className="eyebrow text-[var(--subtle)]">{p.kicker}</span>}>
            <Link
              href={`/work/${p.slug}`}
              className="text-[17px] font-semibold leading-snug tracking-[-0.01em] text-[var(--text)] hover:text-[var(--accent)]"
            >
              {p.title}
            </Link>
            <p className="text-sm leading-relaxed text-[var(--muted)]">{p.summary}</p>
          </Row>
        ))}
      </Section>
    </main>
  );
}
