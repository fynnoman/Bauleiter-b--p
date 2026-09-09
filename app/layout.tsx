import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";

const sans = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"]
});

export const metadata: Metadata = {
  title: "Bauleiter Tiefbau & Infrastruktur (m/w/d) – Saarland | B+P Beratung und Personal",
  description:
    "Bauleiter sein, nicht das Leben auf der Autobahn verbringen. Regionale Projekte im Saarland, eigene Kolonnen, moderner Maschinenpark. Direktanstellung beim Auftraggeber, vermittelt durch B+P.",
  robots: { index: true, follow: true }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={sans.variable}>
      <body className="font-sans bg-page text-ink">{children}</body>
    </html>
  );
}
