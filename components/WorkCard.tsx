import Image from "next/image";
import Link from "next/link";
import type { Featured, Thumb } from "@/content/site";

const toneColour = {
  ok: "var(--ok)",
  neutral: "var(--subtle)",
  warn: "var(--warn)",
};

export function WorkCard({ item }: { item: Featured }) {
  const body = (
    <>
      <div className="thumb h-[200px] overflow-hidden bg-[var(--img-bg)]">
        <ThumbView thumb={item.thumb} />
      </div>
      <div className="flex flex-1 flex-col gap-2 px-5 pt-[18px] pb-5">
        <span className="eyebrow">{item.kicker}</span>
        <h3 className="text-[18px] font-semibold leading-snug">
          {item.title}
          {item.external ? <span className="ml-1.5 text-[var(--subtle)]" aria-hidden>↗</span> : null}
        </h3>
        <p className="text-[14.5px] leading-[1.55] text-[var(--muted)]">{item.summary}</p>
        <p className="mt-auto pt-1.5 text-[11.5px] text-[var(--subtle)] [font-family:var(--font-mono)]">
          <span style={{ color: toneColour[item.status.tone] }} aria-hidden>
            ●{" "}
          </span>
          {item.status.label} · {item.status.detail}
        </p>
      </div>
    </>
  );

  return item.external ? (
    <a href={item.href} target="_blank" rel="noreferrer" className="card text-[var(--text)]">
      {body}
    </a>
  ) : (
    <Link href={item.href} className="card text-[var(--text)]">
      {body}
    </Link>
  );
}

function ThumbView({ thumb }: { thumb: Thumb }) {
  if (thumb.kind === "image") {
    return (
      <Image
        src={thumb.src}
        width={thumb.width}
        height={thumb.height}
        alt={thumb.alt}
        sizes="(min-width: 1060px) 480px, 100vw"
        className="fig h-full w-full object-cover"
      />
    );
  }

  if (thumb.kind === "regions") {
    const regions = [
      { code: "DK", thin: false },
      { code: "DE", thin: false },
      { code: "UK", thin: true },
      { code: "US", thin: true },
      { code: "BR", thin: false },
    ];
    return (
      <div className="flex h-full flex-col justify-center gap-2.5 p-[22px]">
        <span className="eyebrow">Held-out regions, as registered</span>
        <div className="grid grid-cols-5 gap-1.5">
          {regions.map((r) => (
            <span
              key={r.code}
              className="flex h-12 items-center justify-center rounded text-[11px] [font-family:var(--font-mono)]"
              style={{
                border: `1px ${r.thin ? "dashed" : "solid"} var(--ok)`,
                background: r.thin ? "transparent" : "var(--ok-soft)",
              }}
            >
              {r.code}
            </span>
          ))}
        </div>
        <span className="text-[12px] text-[var(--muted)]">
          Beat uncorrected ERA5 in all five. Dashed: margins too thin to call yet.
        </span>
      </div>
    );
  }

  const stats = [
    { value: "154", label: "sources" },
    { value: "164", label: "countries" },
    { value: "489", label: "documented traps" },
  ];
  return (
    <div className="flex h-full flex-col justify-center gap-4 p-[22px]">
      <span className="eyebrow">At launch, 8 Nov 2026</span>
      <div className="grid grid-cols-3 gap-3">
        {stats.map((s) => (
          <div key={s.label}>
            <p className="display text-[30px] leading-none tabular-nums">{s.value}</p>
            <p className="mt-1.5 text-[12px] text-[var(--muted)]">{s.label}</p>
          </div>
        ))}
      </div>
      <span className="text-[12px] text-[var(--muted)]">
        Links, access code and national totals checked weekly.
      </span>
    </div>
  );
}
