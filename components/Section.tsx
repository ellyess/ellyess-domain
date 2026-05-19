type SectionProps = {
  title: string;
  number?: string;
  kicker?: string;
  children: React.ReactNode;
};

export function Section({ title, number, kicker, children }: SectionProps) {
  return (
    <section className="space-y-6">
      <header className="flex items-baseline justify-between gap-6 border-t border-[var(--line)] pt-5">
        <div className="flex items-baseline gap-4">
          {number ? (
            <span className="eyebrow text-[var(--subtle)]">{number}</span>
          ) : null}
          <h2 className="display text-2xl md:text-[28px] text-[var(--text)]">
            {title}
          </h2>
        </div>
        {kicker ? <span className="eyebrow hidden md:block">{kicker}</span> : null}
      </header>
      {children}
    </section>
  );
}
