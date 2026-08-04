import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://alcatech.fr"),
  title: { default: "ALCATECH | Ingénierie électrique en France et à l'international", template: "%s | ALCATECH" },
  description: "ALCATECH, bureau d'études en ingénierie électrique à Lyon : études HTA/BT, projets industriels, essais, mise en service et assistance technique en France et à l'étranger.",
  keywords: ["ingénierie électrique", "bureau d'études électrique", "ingénieur électricité industrielle", "études HTA BT", "mise en service électrique", "assistance technique électrique", "Lyon", "France", "international"],
  authors: [{ name: "ALCATECH" }],
  creator: "ALCATECH",
  publisher: "ALCATECH",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  openGraph: {
    type: "website", locale: "fr_FR", url: "/", siteName: "ALCATECH",
    title: "ALCATECH — Ingénierie électrique industrielle",
    description: "Études électriques, pilotage de projets industriels, essais et mise en service en France et à l'international.",
    images: [{ url: "/alcatech-logo.svg", width: 1200, height: 630, alt: "ALCATECH — Engineering · Industry · AI" }],
  },
  twitter: { card: "summary_large_image", title: "ALCATECH — Ingénierie électrique industrielle", description: "L'expertise électrique au service de vos projets industriels.", images: ["/alcatech-logo.svg"] },
  other: { "codex-preview": "development", "geo.region": "FR-ARA", "geo.placename": "Lyon" },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fr"><body>{children}</body></html>;
}
