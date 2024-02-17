import "@/app/globals.css";
import { Footer } from "../components/footer";
import { Header } from "../components/ui/header";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({
 subsets: ["latin"],
 variable: "--font-inter",
});

export const metadata: Metadata = {
 title: "Totalne Koty",
 description: "3 gości którzy są zafiksowani na punkcie rozwoju na wielu płaszczzyznach dzieli się swoimi doświadczeniami i wiedzą.",
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
    </body>
   </html>
  </>
 );
}
