import { CopyEmail } from "@/components/CopyEmail";
import { ProfileLinks } from "@/components/ProfileLinks";
import { contact, lastUpdated } from "@/content/site";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-[var(--line)] pt-8">
      <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-4">
        <div className="flex flex-wrap items-baseline gap-x-5 gap-y-2">
          <a
            href={`mailto:${contact.email}`}
            className="display break-all text-[19px] text-[var(--text)] hover:text-[var(--accent)] md:text-[22px]"
          >
            {contact.email}
          </a>
          <CopyEmail email={contact.email} />
        </div>
        <ProfileLinks />
      </div>
      <p className="mt-6 text-[12.5px] text-[var(--subtle)]">Last updated {lastUpdated}</p>
    </footer>
  );
}
