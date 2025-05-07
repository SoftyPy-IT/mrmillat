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
  title: "M. Rashiduzzaman Millat",
  description:
    "Politician of Bangladesh Nationalist Party and a former member of parliament for Jamalpur-1.",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://mrmillat.com",
    siteName: "M. Rashiduzzaman Millat",
    title: "Politician of Bangladesh Nationalist Party and a former member of parliament for Jamalpur-1.",
    description:
      "এম রশিদুজ্জামান মিল্লাত জামালপুর-১ (দেওয়ানগঞ্জ-বকশীগঞ্জ) আসনের একজন সুপরিচিত রাজনৈতিক নেতা। তার নেতৃত্বে দেওয়ানগঞ্জ এবং বকশীগঞ্জ এলাকায় ব্যাপক অবকাঠামোগত উন্নয়ন সাধিত হয়েছে। এর মধ্যে সবচেয়ে উল্লেখযোগ্য হলো বাহাদুরাবাদে পুরাতন ব্রহ্মপুত্র নদীর উপর সেতু নির্মাণ।",
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



