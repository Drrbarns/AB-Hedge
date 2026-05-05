import { ImageResponse } from "next/og";

export const size = {
  width: 512,
  height: 512,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(140deg, #08152f 0%, #0f2b56 70%, #133569 100%)",
          borderRadius: 96,
          color: "#ffffff",
          fontFamily: "Arial, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 260,
            height: 260,
            borderRadius: 9999,
            background: "rgba(251, 191, 36, 0.2)",
            filter: "blur(24px)",
            top: -40,
            right: -40,
          }}
        />
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", lineHeight: 1 }}>
          <span style={{ fontSize: 220, fontWeight: 800, color: "#fbbf24" }}>AB</span>
          <span style={{ fontSize: 42, letterSpacing: 3, fontWeight: 700, marginTop: -10 }}>
            HEDGE GROUP
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
