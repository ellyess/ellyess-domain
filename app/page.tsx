import Link from "next/link";
import { CopyEmail } from "@/components/CopyEmail";
import { SectionHead } from "@/components/SectionHead";
import { WindField } from "@/components/WindField";
import { WorkCard } from "@/components/WorkCard";
import { codeAndData, contact, education, experience, featured, publications } from "@/content/site";

export default function HomePage() {
  return (
    <main className="flex flex-col">
      {/* —— Hero —— */}
      <section className="max-w-[860px]">
        <span className="tick mb-[26px]" aria-hidden />
        <h1 className="display text-[30px] leading-[1.3] [text-wrap:pretty] md:text-[44px]">
          Hi, I&apos;m Ellyess. I build and check the{" "}
          <a href="#work" className="word">weather and climate data</a> that{" "}
          <a href="#work" className="word">wind and energy models</a> run on, and the{" "}
          <Link href="/code" className="word">open-source software</Link> that makes it usable. PhD,{" "}
          <Link href="/research" className="word">Imperial College London</Link>.
        </h1>
        <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-1">
          <a href="/Ellyess_Benmoufok_CV.pdf" className="more eyebrow py-2 !text-[var(--accent)]">
            Download CV
          </a>
          <CopyEmail email={contact.email} className="py-2 !text-[var(--muted)]" />
          <a href="https://github.com/ellyess" target="_blank" rel="noreferrer" className="more eyebrow py-2 !text-[var(--muted)]">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/ellyessbenmoufok/" target="_blank" rel="noreferrer" className="more eyebrow py-2 !text-[var(--muted)]">
            LinkedIn
          </a>
          <a href="https://orcid.org/0009-0000-0337-5690" target="_blank" rel="noreferrer" className="more eyebrow py-2 !text-[var(--muted)]">
            ORCID
          </a>
        </div>
        <p className="mt-4 flex items-start gap-2.5 text-[14px] text-[var(--muted)]">
          <span className="mt-[7px] h-2 w-2 shrink-0 rounded-full bg-[var(--ok)]" aria-hidden />
          <span>Available now · London · remote or hybrid · UK right to work, no sponsorship needed</span>
        </p>
      </section>

      <div className="mt-11">
        <WindField />
      </div>

      {/* —— Selected work —— */}
      <section className="mt-[84px]">
        <SectionHead id="work" title="Selected work" more={{ href: "/code", label: "All projects" }} />
        <div className="mt-6 grid grid-cols-1 gap-[22px] md:grid-cols-2">
          {featured.map((item) => (
            <WorkCard key={item.title} item={item} />
          ))}
        </div>
      </section>

      {/* —— Publications —— */}
      <section className="mt-[84px] max-w-[900px]">
        <SectionHead id="publications" title="Publications" more={{ href: "/research", label: "Thesis and findings" }} />
        <div className="mt-[18px] border-b border-[var(--line)]">
          {publications.map((p) => (
            <ListRow key={p.url} left={p.year} right={p.role} rightAccent={p.role === "First author"}>
              <a href={p.url} target="_blank" rel="noreferrer" className="group block">
                <span className="text-[16px] font-medium leading-[1.4] group-hover:text-[var(--accent)]">{p.title}</span>
                <span className="mt-1 block text-[13.5px] text-[var(--muted)]">
                  {p.finding} <i>{p.journal}</i>.
                </span>
              </a>
            </ListRow>
          ))}
        </div>
      </section>

      {/* —— Code & data —— */}
      <section className="mt-[84px] max-w-[900px]">
        <SectionHead id="code" title="Code & data" more={{ href: "https://github.com/ellyess", label: "GitHub", external: true }} />
        <div className="mt-[18px] border-b border-[var(--line)]">
          {codeAndData.map((c) => (
            <ListRow key={c.title} left={c.kind} right={c.tag}>
              <a href={c.href} target="_blank" rel="noreferrer" className="group text-[15.5px]">
                <b className="font-medium group-hover:text-[var(--accent)]">{c.title}</b>{" "}
                <span className="text-[var(--muted)]">· {c.note}</span>
              </a>
            </ListRow>
          ))}
        </div>
      </section>

      {/* —— Experience —— */}
      <section className="mt-[84px] max-w-[900px]">
        <SectionHead id="experience" title="Experience" />
        <div className="mt-[18px] border-b border-[var(--line)]">
          {experience.map((e) => (
            <ListRow key={e.role + e.when} left={e.when}>
              <p className="text-[15.5px]">
                <b className="font-medium">{e.role}</b>, {e.org}
              </p>
              <p className="mt-1 text-[14px] leading-[1.55] text-[var(--muted)]">{e.note}</p>
            </ListRow>
          ))}
        </div>
        <p className="mt-5 text-[14px] leading-[1.6] text-[var(--muted)]">{education}</p>
      </section>
    </main>
  );
}

function ListRow({
  left,
  right,
  rightAccent = false,
  children,
}: {
  left: string;
  right?: string;
  rightAccent?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-1 items-baseline gap-1.5 border-t border-[var(--line)] py-4 md:grid-cols-[96px_minmax(0,1fr)_auto] md:gap-6">
      <span className="eyebrow">{left}</span>
      <div className="min-w-0">{children}</div>
      {right ? (
        <span className={`eyebrow ${rightAccent ? "!text-[var(--accent)]" : ""}`}>{right}</span>
      ) : (
        <span className="hidden md:block" />
      )}
    </div>
  );
}
