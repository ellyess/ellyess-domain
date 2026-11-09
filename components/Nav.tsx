"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/ThemeToggle";

const links = [
  { href: "/#work", label: "Work", match: "/work" },
  { href: "/research", label: "Research", match: "/research" },
  { href: "/code", label: "Code & data", match: "/code" },
  { href: "/#experience", label: "Experience", match: null },
];

export function Nav() {
  const pathname = usePathname();

  return (
    <aside className="side" aria-label="Site">
      <Link href="/" className="eyebrow pb-3 font-medium leading-[1.6] !text-[var(--text)] max-[860px]:w-full max-[860px]:pb-1">
        Ellyess <br className="max-[860px]:hidden" />
        Benmoufok
      </Link>
      <span className="tick mb-2.5 mt-0.5 max-[860px]:hidden" aria-hidden />
      {links.map((link) => {
        const active = link.match ? pathname.startsWith(link.match) : false;
        return (
          <Link
            key={link.href}
            href={link.href}
            aria-current={active ? "page" : undefined}
            className={`side-link eyebrow ${active ? "!text-[var(--text)]" : "!text-[var(--muted)]"}`}
          >
            {link.label}
          </Link>
        );
      })}
      <a href="/Ellyess_Benmoufok_CV.pdf" className="side-link eyebrow !text-[var(--accent)]">
        CV ↓
      </a>
      <div className="mt-4 max-[860px]:ml-auto max-[860px]:mt-0">
        <ThemeToggle />
      </div>
    </aside>
  );
}
