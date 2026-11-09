import { SectionHead } from "@/components/SectionHead";

type PageShellProps = {
  title: string;
  intro: string;
  children?: React.ReactNode;
};

export function PageShell({ title, intro, children }: PageShellProps) {
  return (
    <main>
      <SectionHead title={title} level={1} />
      <p className="mt-5 max-w-[64ch] text-[17px] leading-[1.7] text-[var(--muted)]">{intro}</p>
      <div className="mt-14 flex flex-col gap-16">{children}</div>
    </main>
  );
}
