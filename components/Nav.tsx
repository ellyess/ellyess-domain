"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/research", label: "Research" },
  { href: "/code", label: "Code" },
  { href: "/music", label: "Music" },
];

export function Nav() {
  const pathname = usePathname();

  return (
    <>
      <nav className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-3 pt-7 pb-5">
        <Link
          href="/"
          className="display text-[15px] text-[var(--text)] transition-colors hover:text-[var(--accent)]"
        >
          Ellyess Benmoufok
        </Link>
        <div className="flex items-baseline gap-x-7">
          {links.map((link) => {
            const isActive =
              pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`eyebrow transition-colors hover:text-[var(--text)] ${
                  isActive ? "text-[var(--accent)]" : "text-[var(--muted)]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </nav>
      <div className="scale-rule mb-14 md:mb-16" aria-hidden />
    </>
  );
}
