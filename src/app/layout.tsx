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
  title: "M. R. Millat",
  description: "Ex. MP Jamalpur-1",
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



