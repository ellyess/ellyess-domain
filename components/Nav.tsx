import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/research", label: "Research" },
  { href: "/code", label: "Code" },
//   { href: "/experiments", label: "Experiments" },
  { href: "/music", label: "Music" },
];

export function Nav() {
  return (
    <nav className="mb-10 flex flex-wrap items-center gap-x-6 gap-y-2 border-b border-[var(--line)] pb-5 text-sm">
      {links.map((link) => (
        <Link key={link.href} href={link.href} className="text-[var(--muted)] transition-colors hover:text-[var(--text)]">
          {link.label}
        </Link>
      ))}
    </nav>
  );
}