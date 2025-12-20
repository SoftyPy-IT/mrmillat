import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import React from "react";


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
  applicationName: "M. Rashiduzzaman Millat",
  title: "M. Rashiduzzaman Millat",
  description:
    "Politician of Bangladesh Nationalist Party and a former member of parliament for Jamalpur-1.",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://mrmillat.com",
    siteName: "M. Rashiduzzaman Millat",
    title: "Politician of Bangladesh Nationalist Party.",
    description:
      "মজুমদার আরিফুর রহমান ফেনী ফুলগাজীর একজন সুপরিচিত রাজনৈতিক নেতা এবং বিশিষ্ট শিল্পপতী। ",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "M. Rashiduzzaman Millat",
      },
    ],
    countryName: "Bangladesh",
    emails: ["info@shouravgroup-bd.com"],
    phoneNumbers: ["+88 02 222260615"],
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
        {children}
      </body>
    </html>
  );
}



