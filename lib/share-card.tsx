import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";

export const SHARE_CARD_SIZE = { width: 1200, height: 630 };

// Light theme from app/globals.css
const C = {
  bg: "#ffffff",
  text: "#272829",
  muted: "#4a4f5e",
  subtle: "#565c6d",
  lineStrong: "rgba(39, 42, 51, 0.24)",
  accent: "#4f5670",
};

async function loadFont(file: string) {
  return readFile(path.join(process.cwd(), "assets", "fonts", file));
}

/* Graduation tick rule, built from divs (satori has no repeating gradients) */
function ScaleRule() {
  return (
    <div
      style={{
        display: "flex",
        borderTop: `1px solid ${C.lineStrong}`,
        paddingTop: 0,
      }}
    >
      {Array.from({ length: 38 }).map((_, i) => (
        <div
          key={i}
          style={{
            width: 1,
            height: 7,
            marginRight: 27,
            background: C.lineStrong,
          }}
        />
      ))}
    </div>
  );
}

export async function renderShareCard(subline: string) {
  const [bold, sans, mono] = await Promise.all([
    loadFont("texgyreheros-bold.otf"),
    loadFont("texgyreheros-regular.otf"),
    loadFont("plex-mono-400.ttf"),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: C.bg,
          padding: "56px 72px 64px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "baseline",
              paddingBottom: 20,
            }}
          >
            <div style={{ fontFamily: "Heros", fontWeight: 700, fontSize: 26, color: C.text }}>
              Ellyess Benmoufok
            </div>
            <div
              style={{
                fontFamily: "IBM Plex Mono",
                fontSize: 17,
                letterSpacing: 3,
                color: C.subtle,
              }}
            >
              ELLYESS.COM
            </div>
          </div>
          <ScaleRule />
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontFamily: "IBM Plex Mono",
              fontSize: 17,
              letterSpacing: 3,
              color: C.accent,
            }}
          >
            CLIMATE &amp; ENERGY DATA SCIENCE
          </div>
          <div
            style={{
              display: "flex",
              fontFamily: "Heros",
              fontSize: 84,
              letterSpacing: -2,
              color: C.text,
              marginTop: 18,
            }}
          >
            Ellyess&nbsp;<span style={{ color: C.muted }}>Benmoufok</span>
          </div>
          <div
            style={{
              fontFamily: "Heros",
              fontSize: 27,
              color: C.muted,
              marginTop: 22,
              maxWidth: 980,
            }}
          >
            {subline}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            borderTop: `1px solid ${C.lineStrong}`,
            paddingTop: 24,
          }}
        >
          <div style={{ fontFamily: "Heros", fontSize: 21, color: C.muted }}>
            PhD in Computational Science &amp; Data Science · Imperial College London
          </div>
          <div
            style={{
              fontFamily: "IBM Plex Mono",
              fontSize: 17,
              letterSpacing: 3,
              color: C.subtle,
            }}
          >
            AVAILABLE NOW · LONDON
          </div>
        </div>
      </div>
    ),
    {
      ...SHARE_CARD_SIZE,
      fonts: [
        { name: "Heros", data: sans, weight: 400 as const, style: "normal" as const },
        { name: "Heros", data: bold, weight: 700 as const, style: "normal" as const },
        { name: "IBM Plex Mono", data: mono, weight: 400 as const, style: "normal" as const },
      ],
    },
  );
}
