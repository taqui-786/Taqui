import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Instrument_Serif,
  Hanken_Grotesk,
} from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/Header";
import { ViewTransitions } from "next-view-transitions";
import ReactLenis from "lenis/react";
import { ThemeProvider } from "@/components/ui/theme-provider";
import UmamiAnalytics from "@/components/analytics/UmamiAnalytics";
import Footer from "@/components/ui/Footer";
import { generateMetadata as genMeta } from "@/app/config/siteConfig";
import { Toaster } from "react-hot-toast";

const instrumentSerif = Instrument_Serif({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-instrument-serif",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const hankenGrotesk = Hanken_Grotesk({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-sans",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = genMeta("/");

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html
        lang="en"
        className={hankenGrotesk.variable}
        suppressHydrationWarning
      >
        <body
          className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} antialiased`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {/* <ReactLenis root> */}
              <main className="min-h-dvh">
                <Header />
                {children}
                <Footer />
              </main>
            {/* </ReactLenis> */}
          </ThemeProvider>
          <Toaster/>
          <UmamiAnalytics />
        </body>
      </html>
    </ViewTransitions>
  );
}
