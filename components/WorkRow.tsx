import Link from "next/link";
import { Row } from "@/components/Row";
import type { Item } from "@/content/site";

export function WorkRow({ item }: { item: Item }) {
  return (
    <Row
      meta={
        item.meta ? <span className="eyebrow text-[var(--subtle)]">{item.meta}</span> : undefined
      }
    >
      <h3 className="text-[17px] font-semibold leading-snug tracking-[-0.01em] text-[var(--text)]">
        {item.slug ? (
          <Link href={`/work/${item.slug}`} className="hover:text-[var(--accent)]">
            {item.title}
          </Link>
        ) : (
          item.title
        )}
      </h3>
      <p className="text-sm leading-relaxed text-[var(--muted)]">{item.summary}</p>
      {item.tech ? (
        <p className="pt-1 text-[11.5px] text-[var(--subtle)] [font-family:var(--font-mono)]">
          {item.tech}
        </p>
      ) : null}
      <div className="!mt-4 flex flex-wrap gap-x-7 gap-y-2">
      {item.slug ? (
        <Link href={`/work/${item.slug}`} className="link-arrow">
          Read case study
        </Link>
      ) : null}
      {item.url ? (
        <a
          href={item.url}
          target="_blank"
          rel="noreferrer"
          className="link-arrow"
          aria-label={`${item.linkLabel ?? "Open"}: ${item.title}`}
        >
          {item.linkLabel ?? "Open"}
        </a>
      ) : null}
      </div>
    </Row>
  );
}
