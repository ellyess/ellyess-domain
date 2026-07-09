import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0b0d10",
          color: "#e6eaf0",
          padding: "72px",
          border: "1px solid #222933",
        }}
      >
        <div style={{ color: "#a7b0bd", fontSize: 24 }}>ellyess.com</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 64, lineHeight: 1.1, maxWidth: 980 }}>
            Climate &amp; Energy Data Science
          </div>
          <div style={{ fontSize: 28, color: "#a7b0bd", maxWidth: 980 }}>
            Scientific Python, reanalysis modelling, and research software engineering.
          </div>
        </div>
        <div style={{ fontSize: 20, color: "#7aa2f7" }}>
          PhD, Imperial College London
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}