import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Popup from "@/components/Popup";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Defi crypto tax services and Defi blockchain tax management",
  description: "With our expert Defi Crypto Tax Services, you can streamline your Defi cryptocurrency tax reporting and Defi Blockchain Asset Management.", 
  keywords: "DeFi cryptocurrency tax reporting, DeFi blockchain asset management, Crypto tax calculations, DeFi tax liability minimization, Crypto portfolio growth strategies, DeFi wallet consolidation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className=" pt-[10px] md:pt-5 scroll-smooth relative"
      >
        <div className={`${inter.variable} antialiased mx-5 lg:mx-10 bg-white relative`}>
          <Navbar />
          {children}
        </div>
        <Popup />
        <Footer />
      </body>
    </html>
  );
}
