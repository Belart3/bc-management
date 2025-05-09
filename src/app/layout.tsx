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
      <head>
      {/* Google Tag Manager */}
      <script
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WB5VHZQ3');`,
        }}
      />
      {/* End Google Tag Manager */}
      </head>
      <body
        className=" pt-[10px] md:pt-5 scroll-smooth relative"
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WB5VHZQ3"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
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
