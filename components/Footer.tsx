import { ProfileLinks } from "@/components/ProfileLinks";

export function Footer() {
  return (
    <footer className="mt-24 pb-14">
      <div className="scale-rule scale-rule--up mb-7" aria-hidden />
      <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-4">
        <p className="eyebrow text-[var(--subtle)]">
          © {new Date().getFullYear()} Ellyess Benmoufok
        </p>
        <ProfileLinks />
      </div>
    </footer>
  );
}
