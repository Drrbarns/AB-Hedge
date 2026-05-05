import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Group Hedge social preview";
export const size = {
  width: 1200,
  height: 675,
};
export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(160deg, #07132b 0%, #0a162f 45%, #10284c 100%)",
          color: "#ffffff",
          padding: "58px 68px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "fit-content",
            border: "1px solid rgba(251, 191, 36, 0.38)",
            background: "rgba(251, 191, 36, 0.14)",
            color: "#fbbf24",
            fontSize: 24,
            letterSpacing: 1.2,
            textTransform: "uppercase",
            padding: "10px 18px",
            borderRadius: 9999,
            fontWeight: 700,
          }}
        >
          Group Hedge
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <span style={{ fontSize: 78, fontWeight: 800, letterSpacing: -2 }}>
            Strategic Intelligence.
          </span>
          <span style={{ fontSize: 78, fontWeight: 800, letterSpacing: -2, color: "#fbbf24" }}>
            Industrial Excellence.
          </span>
        </div>

        <div style={{ display: "flex", fontSize: 30, color: "rgba(255,255,255,0.92)" }}>
          Research • Engineering • Supply Solutions
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
