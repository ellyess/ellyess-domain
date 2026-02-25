"use client";

import Image from "next/image";
import { profileLinks } from "@/content/site";
import Link from "next/link";
import { usePathname } from "next/navigation";

const orbitLinks = [
  { href: "/", label: "Home", position: "top-8 left-1/2 -translate-x-1/2" },
  { href: "/research", label: "Research", position: "top-1/2 right-16 -translate-y-1/2" },
  { href: "/code", label: "Code", position: "bottom-12 left-1/2 -translate-x-1/2" },
  { href: "/music", label: "Music", position: "top-1/2 left-26 -translate-y-1/2" },
];

function getFaviconUrl(href: string) {
  try {
    const domain = new URL(href).hostname;
    return `https://www.google.com/s2/favicons?domain=${domain}&sz=64`;
  } catch {
    return "https://www.google.com/s2/favicons?domain=example.com&sz=64";
  }
}

export function OrbitNav() {
  const pathname = usePathname();

  return (
    <aside className="mt-10 lg:mt-0">
      <div className="mx-auto max-w-[420px] lg:sticky lg:top-24">
        <div className="relative h-[420px] w-[420px]">
          <div className="absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2">
            <Image
              src="/page-icon.png"
              alt="Site icon"
              width={360}
              height={360}
              className="h-full w-full object-contain"
              priority
            />
          </div>

          {orbitLinks.map((link, index) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(`${link.href}/`));

            return (
              <Link key={link.href} href={link.href} className={`group absolute ${link.position}`}>
                <span
                  className={`orbit-label ${index % 2 === 0 ? "orbit-label-y" : "orbit-label-x"} block border px-3 py-1.5 text-xs transition-all [font-family:var(--font-mono)] ${
                    isActive
                      ? "border-[var(--text)] bg-[var(--text)] text-[var(--bg)]"
                      : "border-[var(--line)] bg-[var(--surface)] text-[var(--muted)] group-hover:border-[var(--accent)] group-hover:text-[var(--text)]"
                  }`}
                  style={{ animationDelay: `${index * 0.6}s` }}
                >
                  {link.label}
                </span>
              </Link>
            );
          })}
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {profileLinks.map((profile) => (
            <a
              key={profile.label}
              href={profile.href}
              target="_blank"
              rel="noreferrer"
              aria-label={profile.label}
              title={profile.label}
              className="flex h-9 w-9 items-center justify-center border border-[var(--line)] bg-[var(--surface)] transition-colors hover:border-[var(--accent)]"
            >
              <span className="relative block h-[18px] w-[18px]">
                <Image
                  src={profile.icon ?? getFaviconUrl(profile.href)}
                  alt={profile.label}
                  fill
                  className="object-contain invert"
                />
              </span>
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
}