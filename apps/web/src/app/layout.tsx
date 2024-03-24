import "@/app/globals.css";
import { Footer } from "../components/footer";
import { Header } from "../components/ui/header";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";

const inter = Inter({
 subsets: ["latin"],
 variable: "--font-inter",
});

export const metadata: Metadata = {
 title: "Totalne Koty",
 description: "3 gości zafiksowanych na punkcie rozwoju na wielu płaszczzyznach dzieli się swoimi doświadczeniami i wiedzą.",
 openGraph: {
  images: "/images/og-image.png",
 },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
 return (
  <>
   <html lang="pl">
    <body className={`antialiased text-gray-800 h-full ${inter.className}`}>
     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Header />
      {children}
     </div>
     <Footer />
     <SpeedInsights />
     <Script defer src="https://analytics.eu.umami.is/script.js" data-website-id="fea752ce-30e6-4fe6-88b4-8280ad72b870" />
    </body>
   </html>
  </>
 );
}
