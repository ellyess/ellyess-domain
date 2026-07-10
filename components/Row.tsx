/* Datasheet row: empty index gutter keeps alignment with the section
   header; meta column stacks on desktop, wraps inline on mobile where
   the gutter is dropped so phones get full measure. */
export function Row({
  meta,
  children,
}: {
  meta?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <article className="rule-row grid grid-cols-[minmax(0,1fr)] gap-x-6 gap-y-2 py-6 first:border-t-0 md:grid-cols-[72px_176px_minmax(0,1fr)]">
      <span aria-hidden className="hidden md:block" />
      <div className="flex flex-row flex-wrap gap-x-4 gap-y-1.5 md:col-start-2 md:flex-col">
        {meta}
      </div>
      <div className="max-w-[62ch] space-y-2 md:col-start-3 md:row-start-1">
        {children}
      </div>
    </article>
  );
}

export function RowTitle({ title, sub }: { title: string; sub?: string }) {
  return (
    <div>
      <h3 className="text-[17px] font-semibold leading-snug tracking-[-0.01em] text-[var(--text)]">
        {title}
      </h3>
      {sub ? <p className="mt-0.5 text-[13.5px] text-[var(--muted)]">{sub}</p> : null}
    </div>
  );
}

export function RowBullets({ bullets }: { bullets: string[] }) {
  return (
    <ul className="list-disc space-y-1 pl-4 text-sm leading-relaxed text-[var(--muted)] marker:text-[var(--subtle)]">
      {bullets.map((b) => (
        <li key={b}>{b}</li>
      ))}
    </ul>
  );
}
