import Link from "next/link";

type Props = {
  id?: string;
  title: string;
  more?: { href: string; label: string; external?: boolean };
  level?: 1 | 2;
};

/* A short rule, the heading, and an optional "see all" link beneath it. */
export function SectionHead({ id, title, more, level = 2 }: Props) {
  const Heading = level === 1 ? "h1" : "h2";
  return (
    <header id={id} className="scroll-mt-10">
      <span className="tick mb-[18px]" aria-hidden />
      <Heading
        className={
          level === 1
            ? "display text-[36px] leading-[1.15] md:text-[44px]"
            : "text-[26px] font-medium tracking-[-0.01em]"
        }
      >
        {title}
      </Heading>
      {more ? (
        more.external ? (
          <a href={more.href} target="_blank" rel="noreferrer" className="more eyebrow mt-1.5 py-2 !text-[var(--muted)]">
            <span className="arrow" aria-hidden>→</span> {more.label}
          </a>
        ) : (
          <Link href={more.href} className="more eyebrow mt-1.5 py-2 !text-[var(--muted)]">
            <span className="arrow" aria-hidden>→</span> {more.label}
          </Link>
        )
      ) : null}
    </header>
  );
}
