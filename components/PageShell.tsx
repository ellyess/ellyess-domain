import { WorkRow } from "@/components/WorkRow";
import type { Item } from "@/content/site";

type PageShellProps = {
  title: string;
  intro: string;
  items?: Item[];
  children?: React.ReactNode;
  kicker?: string;
};

export function PageShell({ title, intro, items = [], children, kicker }: PageShellProps) {
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

      {items.length ? (
        <section className="border-t border-[var(--line-strong)]">
          {items.map((item) => (
            <WorkRow key={item.title} item={item} />
          ))}
        </section>
      ) : null}

      {children}
    </main>
  );
}
