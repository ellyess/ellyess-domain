import { Row, RowTitle } from "@/components/Row";
import type { Item } from "@/content/site";

export function WorkRow({ item }: { item: Item }) {
  return (
    <Row
      meta={
        item.meta ? <span className="eyebrow text-[var(--subtle)]">{item.meta}</span> : undefined
      }
    >
      <RowTitle title={item.title} />
      <p className="text-sm leading-relaxed text-[var(--muted)]">{item.summary}</p>
      {item.tech ? (
        <p className="pt-1 text-[11.5px] text-[var(--subtle)] [font-family:var(--font-mono)]">
          {item.tech}
        </p>
      ) : null}
      {item.url ? (
        <a
          href={item.url}
          target="_blank"
          rel="noreferrer"
          className="link-arrow !mt-4"
          aria-label={`${item.linkLabel ?? "Open"}: ${item.title}`}
        >
          {item.linkLabel ?? "Open"}
        </a>
      ) : null}
    </Row>
  );
}
