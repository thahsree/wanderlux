import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Travel Designer – Premium Tour Packages India",
  description:
    "Discover India's finest tour packages. The Travel Designer offers curated travel experiences – pilgrimage tours, adventure trips, honeymoon packages, cultural tours and more.",
  keywords: "India tour packages, travel India, holiday packages, Kerala tours, Rajasthan tours, Himachal tours",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

