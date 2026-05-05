import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(140deg, #0a1a35 0%, #10284d 60%, #13386b 100%)",
          borderRadius: 36,
          color: "#fbbf24",
          fontFamily: "Arial, sans-serif",
          fontWeight: 800,
          fontSize: 84,
          letterSpacing: -2,
        }}
      >
        AB
      </div>
    ),
    {
      ...size,
    }
  );
}
