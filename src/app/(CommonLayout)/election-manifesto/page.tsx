"use client";

import Image from "next/image";
import Link from "next/link";
import { FaFilePdf } from "react-icons/fa";

export default function ElectionManifestoPage() {
  return (
    <section className="bg-gray-50">
      {/* HERO IMAGE */}
      <div className="relative w-full h-64 md:h-96">
        <Image
          src="/images/election-manifesto.jpg"
          alt="Election Manifesto"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-2xl md:text-4xl font-bold">
              নির্বাচনী ইশতেহার
            </h1>
            <p className="mt-2 text-sm md:text-lg">
              প্রার্থীর লক্ষ্য, প্রতিশ্রুতি ও ভবিষ্যৎ পরিকল্পনার বিস্তারিত
              বিবরণ
            </p>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-4xl mx-auto px-4 py-16 space-y-12">
        {/* Manifesto Overview */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 md:p-10">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
            প্রার্থীর নির্বাচনী পরিকল্পনা
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            এখানে প্রার্থীর নির্বাচনী অঙ্গীকার, সামাজিক ও অর্থনৈতিক উন্নয়ন
            পরিকল্পনা, শিক্ষা ও স্বাস্থ্য খাতের উদ্যোগ এবং ভবিষ্যৎ কর্মসূচির
            বিস্তারিত তুলে ধরা হয়েছে। প্রার্থী নির্বাচনী ইশতেহারের মাধ্যমে
            ভোটারদের সঙ্গে তার লক্ষ্য, নীতি ও প্রতিশ্রুতির তথ্য শেয়ার করছেন।
          </p>

          <p className="text-gray-700 leading-relaxed">
            বিস্তারিত তথ্যের জন্য নিচের ডাউনলোড লিঙ্কগুলো দেখুন অথবা প্রার্থীর
            ইশতেহার পিডিএফটি পড়ুন।
          </p>
        </div>

        {/* PDF / Download Links */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 md:p-8">
          <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-4">
            PDF ডাউনলোড
          </h3>

          <div className="space-y-3">
            <Link
              href="/pdfs/election-manifesto-candidate.pdf"
              target="_blank"
              className="flex items-center gap-3 text-sm md:text-base font-medium text-blue-600 hover:text-blue-700"
            >
              <FaFilePdf /> নির্বাচনী ইশতেহার (PDF)
            </Link>

            <Link
              href="/pdfs/election-manifesto-summary.pdf"
              target="_blank"
              className="flex items-center gap-3 text-sm md:text-base font-medium text-blue-600 hover:text-blue-700"
            >
              <FaFilePdf /> নির্বাচনী ইশতেহার সংক্ষিপ্ত বিবরণ (PDF)
            </Link>
          </div>
        </div>

        {/* Key Points / Highlights */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 md:p-8">
          <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-4">
            মূল বিষয়সমূহ
          </h3>

          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>শিক্ষা ও দক্ষতা উন্নয়ন পরিকল্পনা</li>
            <li>স্বাস্থ্য খাতের উন্নয়ন এবং হাসপাতাল সুবিধা সম্প্রসারণ</li>
            <li>অর্থনৈতিক প্রবৃদ্ধি ও নতুন কর্মসংস্থান সৃষ্টি</li>
            <li>সামাজিক কল্যাণমূলক প্রকল্প ও নাগরিক সেবা</li>
            <li>পরিবেশ সুরক্ষা ও টেকসই উন্নয়ন পরিকল্পনা</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
