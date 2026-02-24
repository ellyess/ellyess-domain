type SectionProps = {
  title: string;
  children: React.ReactNode;
};

export function Section({ title, children }: SectionProps) {
  return (
    <section className="space-y-4">
      <h2 className="text-xs uppercase tracking-wide text-[var(--muted)] [font-family:var(--font-mono)]">
        {title}
      </h2>
      {children}
    </section>
  );
}