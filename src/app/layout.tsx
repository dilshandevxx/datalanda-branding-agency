import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Preloader from "@/components/Preloader";
import CookieBanner from "@/components/CookieBanner";
import { LazyMotion, domAnimation } from "framer-motion";

export const metadata: Metadata = {
  title: "SKYLABS | Premium Brand Identity Agency",
  description: "Crafting digital landscapes driven by data and design. We forge comprehensive brand identities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700;800;900&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet" />
      </head>
      <body>
        <LazyMotion features={domAnimation}>
          <Preloader />
          <SmoothScroll>
            {children}
          </SmoothScroll>
          <CookieBanner />
        </LazyMotion>
      </body>
    </html>
  );
}
