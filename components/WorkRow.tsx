import Link from "next/link";
import type { Item } from "@/content/site";

/* One project in a list: meta on the left, title, summary, stack and links. */
export function WorkRow({ item }: { item: Item }) {
  return (
    <article className="grid grid-cols-1 gap-2 border-t border-[var(--line)] py-6 md:grid-cols-[180px_minmax(0,1fr)] md:gap-10">
      <p className="eyebrow pt-1">{item.meta}</p>
      <div className="flex min-w-0 max-w-[66ch] flex-col gap-2">
        <h3 className="text-[18px] font-semibold leading-snug">
          {item.slug ? (
            <Link href={`/work/${item.slug}`} className="hover:text-[var(--accent)]">
              {item.title}
            </Link>
          ) : (
            item.title
          )}
        </h3>
        <p className="text-[15px] leading-[1.6] text-[var(--muted)]">{item.summary}</p>
        {item.tech ? (
          <p className="text-[12px] text-[var(--subtle)] [font-family:var(--font-mono)]">{item.tech}</p>
        ) : null}
        <div className="mt-1 flex flex-wrap gap-x-6">
          {item.slug ? (
            <Link href={`/work/${item.slug}`} className="more eyebrow py-2 !text-[var(--accent)]">
              Case study <span className="arrow" aria-hidden>→</span>
            </Link>
          ) : null}
          {item.url ? (
            <a
              href={item.url}
              target="_blank"
              rel="noreferrer"
              className="more eyebrow py-2 !text-[var(--muted)]"
              aria-label={`${item.linkLabel ?? "Open"}: ${item.title}`}
            >
              {item.linkLabel ?? "Open"} ↗
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
