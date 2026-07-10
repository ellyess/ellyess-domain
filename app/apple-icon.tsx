import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/* Same graduation-tick mark as icon.svg, rendered as PNG for Apple touch */
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0b0e13",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
          paddingTop: 52,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: 24,
            borderTop: "8px solid rgba(255, 255, 255, 0.4)",
            padding: "0 10px 0 10px",
          }}
        >
          <div style={{ width: 14, height: 44, background: "#e9edf2" }} />
          <div style={{ width: 14, height: 84, background: "#d9a054" }} />
          <div style={{ width: 14, height: 44, background: "#e9edf2" }} />
        </div>
      </div>
    ),
    size,
  );
}
