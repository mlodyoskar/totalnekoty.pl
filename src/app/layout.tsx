import "@/app/globals.css";
import { Footer } from "@/components/footer";
import { Header } from "@/components/ui/header";
import clsx from "clsx";
import { Inter, Lora } from "next/font/google";

const inter = Inter({
 subsets: ["latin"],
 variable: "--font-inter",
});

const lora = Lora({
 subsets: ["latin"],
 variable: "--font-lora",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
 return (
  <html lang="en" suppressHydrationWarning className={`${inter.variable} ${lora.variable}`}>
   <body className="antialiased text-gray-800 h-full ">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
     <Header />
     {children}
    </div>
    <Footer />
   </body>
  </html>
 );
}
