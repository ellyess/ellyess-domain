/* A labelled block: small label on the left, content on the right.
   Stacks on narrow screens. */
export function Block({
  label,
  note,
  children,
  className = "",
}: {
  label: string;
  note?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`grid grid-cols-1 gap-4 md:grid-cols-[180px_minmax(0,1fr)] md:gap-10 ${className}`}>
      <div>
        <h2 className="eyebrow">{label}</h2>
        {note ? <p className="mt-2 text-[13px] leading-[1.5] text-[var(--subtle)]">{note}</p> : null}
      </div>
      <div className="min-w-0">{children}</div>
    </section>
  );
}

export function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="max-w-[66ch] list-disc space-y-2.5 pl-[18px] text-[16px] leading-[1.65] text-[var(--muted)] marker:text-[var(--subtle)]">
      {items.map((b) => (
        <li key={b}>{b}</li>
      ))}
    </ul>
  );
}
