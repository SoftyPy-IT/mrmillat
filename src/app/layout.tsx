import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/Footer";
import React from "react";
import ReactQueryProvider from "@/providers/ReactQueryProvider";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Softypy - Trusted e-solution",
  description:
    "Softypy is a trusted e-solutions provider. We provide services like web development, mobile app development, digital marketing, and more. Contact us now! ",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://softypy.com",
    siteName: "Softypy - Trusted e-solutions",
    title: "Softypy - Trusted e-solutions",
    description:
      "Softypy is a trusted e-solutions provider. We provide services like web development, mobile app development, digital marketing, and more. Contact us now! ",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Softypy",
      },
    ],
    countryName: "Bangladesh",
    emails: ["softypy@gmail.com"],
    phoneNumbers: ["+880 1762-380594"],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
     <ReactQueryProvider> 
      <div className="text-gray-500">
     
      <Navbar/>
        <main className="  pt-12 min-h-screen">
          
              {children}
                  
        
        </main>
        {/* footer  */}
        <div>
        <Footer/>
        </div>
        </div>
        </ReactQueryProvider> 
        </body>
    </html>
  );
}



