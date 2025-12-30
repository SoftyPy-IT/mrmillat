/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import { TManifesto } from "@/types/types";
import useAxiosPublic from "@/hooks/useAxiosPublic";


export default function ElectionInfoSection() {
  const axiosPublic = useAxiosPublic();
  const [manifestos, setManifestos] = useState<TManifesto[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const response = await axiosPublic.get("/manifestos");

        // Adjust based on your API response structure
        if (response.data.success) {
          if (Array.isArray(response.data.data)) {
            setManifestos(response.data.data);
          } else if (
            response.data.data?.data &&
            Array.isArray(response.data.data.data)
          ) {
            setManifestos(response.data.data.data);
          }
        }
      } catch (error) {
        console.error("Error fetching manifestos:", error);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [axiosPublic]);

  // Get the latest manifesto (most recent date) - FIXED
  const latestManifesto =
    manifestos?.length > 0
      ? manifestos.sort(
          (a, b) => {
            // Handle undefined dates by using a fallback
            const dateA = a.date ? new Date(a.date).getTime() : 0;
            const dateB = b.date ? new Date(b.date).getTime() : 0;
            return dateB - dateA; // Sort descending (newest first)
          }
        )[0]
      : null;

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold inline-block pb-3 border-b-4 border-blue-500">
            Election Information
          </h2>
        </div>

        <div className="space-y-14">
          {/* Dynamic Manifesto Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
            {/* Content */}
            <div className="md:order-1 order-2">
              {loading ? (
                <div className="space-y-4">
                  <div className="h-7 bg-gray-200 rounded w-3/4 animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded w-full animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded w-5/6 animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded w-4/5 animate-pulse"></div>
                </div>
              ) : latestManifesto ? (
                <>
                  <h3 className="text-4xl font-semibold text-gray-900">
                    {latestManifesto.title}
                  </h3>

                  <div className="mt-4">
                    <p className="text-gray-600 leading-relaxed max-w-lg">
                      {latestManifesto.shortDescription}
                    </p>

                    {/* PDF Links if available */}
                    {latestManifesto.pdfLinks &&
                      latestManifesto.pdfLinks.length > 0 && (
                        <div className="mt-4">
                          {/* You can add PDF links here if needed */}
                        </div>
                      )}

                    
                  </div>

                  <Link
                    href={"/election-manifesto"}
                    className="inline-flex mt-6"
                  >
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-green-600 hover:text-green-700">
                      বিস্তারিত দেখুন
                      <FaArrowRight className="text-xs" />
                    </span>
                  </Link>
                </>
              ) : (
                <>
                  
                </>
              )}
            </div>

            {/* Image */}
            <div className="relative h-64 md:h-[300px] rounded-xl overflow-hidden md:order-2 order-1">
              {loading ? (
                <div className="w-full h-full bg-gray-200 animate-pulse rounded-xl"></div>
              ) : latestManifesto && latestManifesto.imageUrl ? (
                <Image
                  src={latestManifesto.imageUrl}
                  alt={latestManifesto.title || "নির্বাচনী ইশতেহার"}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              ) : (
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-400">No Image</span>
                </div>
              )}
            </div>
          </div>

          {/* Postal Vote — Image Left (Keep existing) */}
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
            {/* Image */}
            <div className="relative overflow-hidden">
              <Image
                src="/Images/postal.png"
                alt="Postal Vote System"
                width={300}
                height={300}
                className="h-full w-full rounded"
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
        </div>
      </div>
    </section>
  );
}