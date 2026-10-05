import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import { Azeret_Mono, Newsreader } from "next/font/google";
import { site } from "./site";
import "./globals.css";

// Two voices, two faces, and no italics in either. Newsreader is the
// human one — everything written in the first person. Azeret is the
// machine one: the nameplate, the labels, the dates, the stacks.
const newsreader = Newsreader({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
  variable: "--font-newsreader",
});

// 400 sets the dates, 500 the nameplate and the labels — small
// uppercase mono needs the extra weight to hold at 11px.
const azeret = Azeret_Mono({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
  variable: "--font-azeret",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  alternates: { canonical: "/" },
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  openGraph: {
    type: "profile",
    title: site.title,
    description: site.description,
    url: site.url,
    siteName: site.name,
    locale: site.locale,
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  // One theme, so one colour. Matches --color-paper.
  themeColor: "#0b0f14",
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: site.url,
  jobTitle: site.jobTitle,
  worksFor: { "@type": "Organization", name: site.worksFor },
  alumniOf: { "@type": "CollegeOrUniversity", name: site.alumniOf },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Espoo",
    addressCountry: "FI",
  },
  sameAs: site.sameAs,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${newsreader.variable} ${azeret.variable}`}>
      <body>
        {children}
        <script
          type="application/ld+json"
          // Static object, no user input. Stringified once at build.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        {/* Cookieless page counts. A CV link tagged ?utm_source=<company>
            shows up in the dashboard as a visit from that application. */}
        <Analytics />
      </body>
    </html>
  );
}
