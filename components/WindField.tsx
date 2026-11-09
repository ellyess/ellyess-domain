/* Decorative wind streamlines over a dotted grid. Dashes travel along each
   line; they stop for visitors who ask for reduced motion. */

const lines = [
  "M-40 30 C 140 8, 300 70, 500 40 S 860 10, 1040 46",
  "M-40 62 C 160 40, 320 104, 520 72 S 860 44, 1040 80",
  "M-40 96 C 180 74, 330 136, 540 104 S 880 76, 1040 112",
  "M-40 130 C 150 112, 340 166, 520 138 S 870 108, 1040 146",
  "M-40 164 C 170 146, 330 196, 530 170 S 860 140, 1040 178",
  "M-40 198 C 160 182, 350 228, 540 204 S 880 176, 1040 212",
];

// Two dashes per line, with staggered speeds and starting points
const streaks = lines.flatMap((d, i) => [
  { d, dur: 7 + ((i * 2) % 6), delay: -i * 1.7, accent: i === 1 },
  { d, dur: 10 + ((i * 3) % 5), delay: -i * 2.9 - 4, accent: i === 3 },
]);

export function WindField() {
  return (
    <div
      className="h-[200px] overflow-hidden rounded-[10px] border border-[var(--line)] bg-[var(--card)] md:h-[240px]"
      aria-hidden
    >
      <svg viewBox="0 0 1000 240" preserveAspectRatio="xMidYMid slice" width="100%" height="100%">
        <defs>
          <pattern id="wind-grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="10" cy="10" r="1" fill="var(--dot)" />
          </pattern>
        </defs>
        <rect width="1000" height="240" fill="url(#wind-grid)" />
        <g stroke="var(--stream)" strokeWidth="1" opacity="0.5" fill="none">
          {lines.map((d) => (
            <path key={d} d={d} />
          ))}
        </g>
        <g strokeWidth="2.2">
          {streaks.map((s, i) => (
            <path
              key={i}
              className="streak"
              pathLength={1000}
              d={s.d}
              stroke={s.accent ? "var(--accent)" : "var(--stream)"}
              style={{ animationDuration: `${s.dur}s`, animationDelay: `${s.delay}s` }}
            />
          ))}
        </g>
      </svg>
    </div>
  );
}
