/* PhD status wording changes on the conferral date. Pages that render it
   revalidate daily so the site updates itself without a redeploy. */
const CONFERRAL = new Date("2026-10-01T00:00:00Z");

export function phdConferred(now: Date = new Date()) {
  return now >= CONFERRAL;
}

export function phdStatus() {
  return phdConferred()
    ? "PhD awarded 2026"
    : "Viva passed June 2026 · conferral 1 October 2026";
}
