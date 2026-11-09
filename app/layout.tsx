import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { IBM_Plex_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

// TeX Gyre Heros, a free Helvetica clone (GUST Font License), the same face as the CV.
// It ships regular and bold only, so medium and semibold both map to bold.
const sans = localFont({
  variable: "--font-sans",
  src: [
    { path: "./fonts/texgyreheros-regular.woff2", weight: "300 400", style: "normal" },
    { path: "./fonts/texgyreheros-italic.woff2", weight: "300 400", style: "italic" },
    { path: "./fonts/texgyreheros-bold.woff2", weight: "500 800", style: "normal" },
    { path: "./fonts/texgyreheros-bolditalic.woff2", weight: "500 800", style: "italic" },
  ],
  fallback: ["Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
});

const mono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const TITLE = "Ellyess Benmoufok | Climate Data Scientist & Research Software Engineer";
const DESCRIPTION =
  "Wind resource modelling, ERA5 reanalysis bias correction, weather and climate data validation, and research software in Python. PhD in Computational Science & Data Science, Imperial College London. London, open to remote and hybrid roles.";

export const metadata: Metadata = {
  metadataBase: new URL("https://ellyess.com"),
  title: {
    default: TITLE,
    template: "%s · Ellyess Benmoufok",
  },
  description: DESCRIPTION,
  applicationName: "Ellyess",
  authors: [{ name: "Ellyess Benmoufok", url: "https://ellyess.com" }],
  keywords: [
    "Ellyess Benmoufok",
    "climate data scientist",
    "energy data scientist",
    "research software engineer",
    "wind resource assessment",
    "energy yield",
    "ERA5 bias correction",
    "reanalysis",
    "forecast verification",
    "model validation",
    "catastrophe modelling",
    "geospatial data science",
    "PyPSA-Eur",
    "PyVWF",
    "scientific Python",
    "Xarray",
    "Imperial College London",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "profile",
    url: "https://ellyess.com",
    title: TITLE,
    description: DESCRIPTION,
    siteName: "Ellyess Benmoufok",
    locale: "en_GB",
    firstName: "Ellyess",
    lastName: "Benmoufok",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: TITLE }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/twitter-image"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const themeScript = `try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark")document.documentElement.dataset.theme=t}catch(e){}`;

/* Structured data so search engines and recruiter tools read the
   profile as a person with a role, not an anonymous page. */
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ellyess Benmoufok",
  url: "https://ellyess.com",
  email: "mailto:benmoufok.ellyess@gmail.com",
  jobTitle: "Climate and energy data scientist",
  address: { "@type": "PostalAddress", addressLocality: "London", addressCountry: "GB" },
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "Imperial College London" },
    { "@type": "CollegeOrUniversity", name: "University of Surrey" },
  ],
  knowsAbout: [
    "Wind resource assessment",
    "Reanalysis bias correction",
    "ERA5",
    "Energy system modelling",
    "Model validation",
    "Geospatial data science",
    "Research software engineering",
    "Python",
  ],
  sameAs: [
    "https://github.com/ellyess",
    "https://www.linkedin.com/in/ellyessbenmoufok/",
    "https://orcid.org/0009-0000-0337-5690",
    "https://www.researchgate.net/profile/Ellyess_Benmoufok2",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Apply a stored theme choice before first paint */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[var(--bg)] text-[var(--text)] antialiased [font-family:var(--font-sans)]">
        <div className="shell">
          <Nav />
          <div className="min-w-0">
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}