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
      <header className="space-y-6 pb-2">
        <p className="eyebrow">{kicker ?? "Section"}</p>
        <h1 className="display text-5xl md:text-7xl text-[var(--text)]">
          {title}
        </h1>
        <p className="max-w-2xl text-base leading-relaxed text-[var(--muted)]">{intro}</p>
      </header>

      <section className="space-y-px">
        {items.map((item, i) => {
          const isLink = Boolean(item.url);
          return (
            <article
              key={item.title}
              className={`card card-accent group grid grid-cols-1 gap-4 px-6 py-6 md:grid-cols-[180px_minmax(0,1fr)_auto] md:items-baseline md:gap-8`}
            >
              <div className="flex items-baseline gap-3 md:flex-col md:items-start md:gap-2">
                <span className="eyebrow text-[var(--subtle)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {item.meta ? (
                  <span className="eyebrow text-[var(--muted)]">{item.meta}</span>
                ) : null}
              </div>

              <div className="space-y-2">
                <h2 className="display text-xl md:text-2xl text-[var(--text)] transition-colors group-hover:text-[var(--text)]">
                  {item.title}
                </h2>
                <p className="text-sm leading-relaxed text-[var(--muted)] max-w-2xl">
                  {item.summary}
                </p>
                {item.tech ? (
                  <p className="pt-1 text-xs text-[var(--subtle)] [font-family:var(--font-mono)]">
                    {item.tech}
                  </p>
                ) : null}
              </div>

              {isLink ? (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="card-link link-arrow self-start md:self-center"
                  aria-label={`Open ${item.title}`}
                >
                  Open
                </a>
              ) : null}
            </article>
          );
        })}
      </section>

      {children}
    </main>
  );
}
