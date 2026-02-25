import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Ellyess — Systems & Optimisation",
    short_name: "Ellyess",
    description:
      "Computational science, energy systems, optimisation, and applied modelling.",
    start_url: "/",
    display: "standalone",
    background_color: "#0b0d10",
    theme_color: "#0b0d10",
    icons: [
      {
        src: "/page-icon.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/page-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}