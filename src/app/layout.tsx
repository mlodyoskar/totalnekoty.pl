import "@/app/globals.css";
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
   <body className="antialiased text-gray-800 ">{children}</body>
  </html>
 );
}
