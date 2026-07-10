import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { IBM_Plex_Mono, IBM_Plex_Sans, Sora } from "next/font/google";
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

// Display face is reserved for the name and wordmark only
const display = Sora({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ellyess.com"),
  title: {
    default: "Ellyess Benmoufok | Climate & Energy Data Scientist",
    template: "%s · Ellyess",
  },
  description:
    "Climate and energy data science, scientific Python, and research software engineering. PhD, Imperial College London.",
  applicationName: "Ellyess",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://ellyess.com",
    title: "Ellyess Benmoufok | Climate & Energy Data Scientist",
    description:
      "Climate and energy data science, scientific Python, and research software engineering. PhD, Imperial College London.",
    siteName: "Ellyess",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Ellyess Benmoufok | Climate & Energy Data Scientist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ellyess Benmoufok | Climate & Energy Data Scientist",
    description:
      "Climate and energy data science, scientific Python, and research software engineering. PhD, Imperial College London.",
    images: ["/twitter-image"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable} ${display.variable}`}>
      <body className="min-h-screen bg-[var(--bg)] text-[var(--text)] antialiased [font-family:var(--font-sans)]">
        <div className="mx-auto max-w-[1060px] px-6">
          <Nav />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}