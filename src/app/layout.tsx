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
    url: "https://www.mrmillat.com", // Add www prefix
    siteName: "M. Rashiduzzaman Millat",
    title: "M. Rashiduzzaman Millat",
    description:
      "Politician of Bangladesh Nationalist Party and a former member of parliament for Jamalpur-1.",
    images: [
      {
        url: "https://www.mrmillat.com/Images/mr-8.jpg", // Full URL with www
        width: 1200,
        height: 630,
        alt: "M. Rashiduzzaman Millat",
      },
    ],
    countryName: "Bangladesh",
    emails: ["info@shouravgroup-bd.com"],
    phoneNumbers: ["+88 02 222260615"],
  },
  // Add twitter metadata too
  twitter: {
    card: "summary_large_image",
    title: "M. Rashiduzzaman Millat",
    description: "Politician of Bangladesh Nationalist Party and a former member of parliament for Jamalpur-1.",
    images: ["https://www.mrmillat.com/Images/mr-8.jpg"],
  },
  // Add optional metadata for better compatibility
  metadataBase: new URL("https://www.mrmillat.com"), // This helps Next.js generate absolute URLs
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
