"use client";

import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function ElectionInfoSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Election Information
          </h2>
          <p className="mt-3 text-gray-600">
            ভোটার ও প্রার্থীদের জন্য প্রয়োজনীয় তথ্য
          </p>
        </div>

        <div className="space-y-14">
          {/* Postal Vote — Image Left */}
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
            {/* Image */}
            <div className="relative h-64 md:h-[500px] rounded-xl overflow-hidden">
              <Image
                src="/Images/postal.jpeg"
                alt="Postal Vote System"
                fill
                className="h-full w-full"
              />
            </div>

            {/* Content */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                Postal voting (IT Supported)
              </h3>

              <p className="mt-3 text-gray-600 leading-relaxed max-w-lg">
                Eligible voters can complete postal voting related procedures
                using the official mobile application. Below are important
                instructions, samples, and official circulars.
              </p>

              {/* Resource List */}
              <ul className="mt-5 space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-red-600">•</span>
                  <Link
                    href="https://www.ecs.gov.bd/bec/public/files/Postal%20Voting/OCV_Postal%20Vote_BD_compressed.pdf"
                    target="_blank"
                    className="hover:underline"
                  >
                    Instruction for Postal Voting registration schedule using
                    Mobile App (OCV) – PDF
                  </Link>
                </li>

                <li className="flex items-start gap-2">
                  <span className="mt-1 text-red-600">•</span>
                  <Link
                    href="https://www.ecs.gov.bd/bec/public/files/Postal%20Voting/ICV_Postal%20Vote_BD2_compressed.pdf"
                    target="_blank"
                    className="hover:underline"
                  >
                    Instruction for Postal Voting registration schedule using
                    Mobile App (ICPV) – PDF
                  </Link>
                </li>

                <li className="flex items-start gap-2">
                  <span className="mt-1 text-blue-600">•</span>
                  <Link href="/postal-vote" className="hover:underline">
                    How to fill up address in mobile app – with samples
                  </Link>
                </li>

                <li className="flex items-start gap-2">
                  <span className="mt-1 text-red-600">•</span>
                  <Link
                    href="https://www.ecs.gov.bd/files/JjPAukrNEqv8M3llPnI2d2rKJXOlIfWH6QkZTAJI.pdf"
                    target="_blank"
                    className="hover:underline"
                  >
                    Circular for Out of Country Voting (OCV) – PDF
                  </Link>
                </li>
              </ul>

              {/* Existing CTA */}
              <Link href="/postal-vote" className="inline-flex mt-6">
                <span className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700">
                  View Details
                  <FaArrowRight className="text-xs" />
                </span>
              </Link>
            </div>
          </div>

        
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
            {/* Content */}
            <div className="md:order-1 order-2">
              <h3 className="text-xl font-semibold text-gray-900">
                নির্বাচনী ইশতেহার
              </h3>

              <p className="mt-4 text-gray-600 leading-relaxed max-w-lg">
                প্রার্থীর নির্বাচনী অঙ্গীকার, উন্নয়ন পরিকল্পনা এবং ভবিষ্যৎ
                কর্মসূচির বিস্তারিত তথ্য এখানে তুলে ধরা হয়েছে।
              </p>

              <Link
                href="/election-manifesto"
                className="inline-flex mt-6"
              >
                <span className="inline-flex items-center gap-2 text-sm font-medium text-green-600 hover:text-green-700">
                  বিস্তারিত দেখুন
                  <FaArrowRight className="text-xs" />
                </span>
              </Link>
            </div>

            {/* Image */}
            <div className="relative h-64 md:h-[300px] rounded-xl overflow-hidden md:order-2 order-1">
              <Image
                src="https://admin.mrmillat.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdo2cbxkkj%2Fimage%2Fupload%2Fv1767014128%2FElection%2520Campaign-1767014110700.jpg&w=384&q=75"
                alt="নির্বাচনী ইশতেহার"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
