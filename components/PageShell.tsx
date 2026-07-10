import { Row, RowTitle } from "@/components/Row";

type Item = {
  title: string;
  summary: string;
  tech?: string;
  meta?: string;
  url?: string;
};

type PageShellProps = {
  title: string;
  intro: string;
  items: Item[];
  children?: React.ReactNode;
  kicker?: string;
};

export function PageShell({ title, intro, items, children, kicker }: PageShellProps) {
  return (
    <main className="space-y-14">
      <header>
        <p className="eyebrow">{kicker ?? "Section"}</p>
        <h1 className="mt-6 text-4xl font-semibold tracking-[-0.02em] text-[var(--text)] md:text-5xl">
          {title}
        </h1>
        <p className="mt-6 max-w-[62ch] text-[15.5px] leading-relaxed text-[var(--muted)]">
          {intro}
        </p>
      </header>

      <section className="border-t border-[var(--line-strong)]">
        <div>
          {items.map((item) => (
            <Row
              key={item.title}
              meta={
                item.meta ? (
                  <span className="eyebrow text-[var(--subtle)]">{item.meta}</span>
                ) : undefined
              }
            >
              <RowTitle title={item.title} />
              <p className="text-sm leading-relaxed text-[var(--muted)]">{item.summary}</p>
              {item.tech ? (
                <p className="pt-1 text-[11.5px] text-[var(--subtle)] [font-family:var(--font-mono)]">
                  {item.tech}
                </p>
              ) : null}
              {item.url ? (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="link-arrow !mt-4"
                  aria-label={`Open ${item.title}`}
                >
                  Open
                </a>
              ) : null}
            </Row>
          ))}
        </div>
      </section>

      {children}
    </main>
  );
}
