type SectionProps = {
  title: string;
  number?: string;
  kicker?: string;
  children: React.ReactNode;
};

export function Section({ title, number, kicker, children }: SectionProps) {
  return (
    <section>
      <header className="grid grid-cols-[48px_minmax(0,1fr)] items-baseline gap-x-6 border-t border-[var(--line-strong)] pt-[18px] pb-2 md:grid-cols-[72px_minmax(0,1fr)_auto]">
        <span className="eyebrow text-[var(--subtle)]">{number}</span>
        <h2 className="text-[21px] font-semibold tracking-[-0.01em] text-[var(--text)]">
          {title}
        </h2>
        {kicker ? (
          <span className="eyebrow hidden text-[var(--subtle)] md:block">{kicker}</span>
        ) : null}
      </header>
      <div>{children}</div>
    </section>
  );
}
