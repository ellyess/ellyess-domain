"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ProfileLinks } from "@/components/ProfileLinks";

const orbitLinks = [
  { href: "/", label: "Home", position: "top-8 left-1/2 -translate-x-1/2" },
  { href: "/research", label: "Research", position: "top-1/2 right-16 -translate-y-1/2" },
  { href: "/code", label: "Code", position: "bottom-12 left-1/2 -translate-x-1/2" },
  { href: "/music", label: "Music", position: "top-1/2 left-26 -translate-y-1/2" },
];

export function OrbitNav() {
  const pathname = usePathname();

  return (
    <aside className="mt-12 lg:mt-0">
      <div className="mx-auto max-w-[420px] lg:sticky lg:top-20">
        <div className="relative h-[420px] w-[420px]">
          {/* Soft halo behind the mark */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              background:
                "radial-gradient(closest-side, rgba(184,164,255,0.10), transparent 70%)",
            }}
          />
          <div className="absolute left-1/2 top-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2">
            <Image
              src="/page-icon.png"
              alt="Site icon"
              width={340}
              height={340}
              className="h-full w-full object-contain opacity-95"
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
                  className={`orbit-label ${index % 2 === 0 ? "orbit-label-y" : "orbit-label-x"} block border px-3.5 py-1.5 text-[10px] tracking-[0.18em] uppercase transition-all duration-200 [font-family:var(--font-mono)] backdrop-blur-sm ${
                    isActive
                      ? "border-[var(--accent-line)] bg-[var(--accent-soft)] text-[var(--text)]"
                      : "border-[var(--line)] bg-[var(--bg-elev)]/60 text-[var(--muted)] group-hover:border-[var(--accent-line)] group-hover:text-[var(--text)]"
                  }`}
                  style={{ animationDelay: `${index * 0.6}s` }}
                >
                  {link.label}
                </span>
              </Link>
            );
          })}
        </div>

        <ProfileLinks className="mt-2 justify-center" />
      </div>
    </aside>
  );
}