import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import { Nav } from "@/components/Nav";
import "./globals.css";

const sans = IBM_Plex_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const mono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ellyess.com"),
  title: {
    default: "Ellyess — Systems & Optimisation",
    template: "%s · Ellyess",
  },
  description:
    "Computational science, energy systems, optimisation, and applied modelling.",
  applicationName: "Ellyess",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://ellyess.com",
    title: "Ellyess — Systems & Optimisation",
    description:
      "Computational science, energy systems, optimisation, and applied modelling.",
    siteName: "Ellyess",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Ellyess — Systems & Optimisation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ellyess — Systems & Optimisation",
    description:
      "Computational science, energy systems, optimisation, and applied modelling.",
    images: ["/twitter-image"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/icon.svg",
    apple: "/apple-icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body className="min-h-screen bg-[var(--bg)] text-[var(--text)] antialiased [font-family:var(--font-sans)]">
        <div className="mx-auto max-w-4xl px-6 py-10 md:py-14">
          <Nav />
          {children}
        </div>
      </body>
    </html>
  );
}