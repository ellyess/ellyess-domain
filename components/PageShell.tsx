type Item = {
  title: string;
  summary: string;
  meta?: string;
  url?: string;
};

type PageShellProps = {
  title: string;
  intro: string;
  items: Item[];
  children?: React.ReactNode;
};

export function PageShell({ title, intro, items, children }: PageShellProps) {
  return (
    <main className="space-y-8">
      <header className="border-b border-[var(--line)] pb-6">
        <h1 className="text-2xl font-semibold md:text-3xl">{title}</h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[var(--muted)]">{intro}</p>
      </header>

      <section className="space-y-3">
        {items.map((item) => (
          <article key={item.title} className="border border-[var(--line)] bg-[var(--surface)] p-4">
            <div className="flex flex-wrap items-start justify-between gap-2">
              <h2 className="text-base font-medium">{item.title}</h2>
              {item.meta ? (
                <span className="text-xs text-[var(--muted)] [font-family:var(--font-mono)]">{item.meta}</span>
              ) : null}
            </div>
            <p className="mt-2 text-sm text-[var(--muted)]">{item.summary}</p>
            {item.url ? (
              <a
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-block text-xs text-[var(--accent)] [font-family:var(--font-mono)]"
              >
                Open link ↗
              </a>
            ) : null}
          </article>
        ))}
      </section>

      {children}
    </main>
  );
}