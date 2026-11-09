import { profileLinks } from "@/content/site";

export function ProfileLinks({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap gap-x-6 gap-y-2 ${className}`}>
      {profileLinks.map((profile) => (
        <a
          key={profile.label}
          href={profile.href}
          target="_blank"
          rel="noreferrer"
          className="more eyebrow !text-[var(--muted)] hover:!text-[var(--accent)]"
        >
          {profile.label}
        </a>
      ))}
    </div>
  );
}
