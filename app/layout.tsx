import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackgroundAnimation from "@/components/BackgroundAnimation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Karl Bryan Tchoupe Pembe | Portfolio",
  description:
    "Portfolio de Karl Bryan Tchoupe Pembe - Étudiant en Génie Informatique, Technicien en Systèmes Électroniques, Passionné par la Cybersécurité",
  keywords: [
    "Karl Bryan",
    "Portfolio",
    "Génie Informatique",
    "Développeur",
    "Cybersécurité",
    "Douala",
    "Cameroun",
  ],
  authors: [{ name: "Karl Bryan Tchoupe Pembe" }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://portfolio-karl.com",
    title: "Karl Bryan Tchoupe Pembe | Portfolio",
    description:
      "Portfolio de Karl Bryan Tchoupe Pembe - Étudiant en Génie Informatique",
  },
  twitter: {
    card: "summary_large_image",
    title: "Karl Bryan Tchoupe Pembe | Portfolio",
    description:
      "Portfolio de Karl Bryan Tchoupe Pembe - Étudiant en Génie Informatique",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="dark scroll-smooth">
      <body className={`${inter.className} bg-dark text-white`}>
        <BackgroundAnimation />
        <Navbar />
        <main className="relative z-10 min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
