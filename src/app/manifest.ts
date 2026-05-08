import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Group Hedge",
    short_name: "AB Hedge",
    description:
      "Research, Engineering, and Supply Solutions across Oil & Gas, Mining, Healthcare, and Infrastructure.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a1628",
    theme_color: "#0a1628",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "16x16 32x32 48x48 64x64 128x128 256x256",
        type: "image/x-icon",
      },
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
