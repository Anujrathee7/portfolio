import type { Metadata } from "next";
import { Space_Grotesk, Inter, Orbitron } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron-var",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Anuj Rathee — Software Engineer",
  description: "Portfolio of Anuj Rathee, Software & Systems Engineering student and full-stack developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${orbitron.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
