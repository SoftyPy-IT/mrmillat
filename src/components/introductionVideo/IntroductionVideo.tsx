/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import useFeatures from "@/hooks/useFeatures";
import { TWhoWeAre } from "@/types/types";
import Link from "next/link";
import React from "react";

type TWhoWeAreInfo = {
  whoWeAre: TWhoWeAre;
  isLoading: boolean;
};

const IntroductionVideo = () => {
  const { whoWeAre, isLoading }: TWhoWeAreInfo = useFeatures();

  // YouTube Video ID extracted from your link
  const videoId = "rQjUJFxNuZA";
  const embedUrl = `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`;

  if (isLoading) return null;

  return (
    <section className="relative overflow-hidden py-24 bg-slate-50/50">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -z-10 h-full w-1/3 bg-blue-50/50 skew-x-12 transform" />

      <div className="container mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          
          {/* Video Section */}
          <div 
            className="relative group w-full"
            data-aos="zoom-in-up"
            data-aos-duration="1000"
          >
            {/* The "Floating" Frame Effect */}
            <div className="absolute -bottom-6 -left-6 h-full w-full rounded-2xl border-2 border-blue-200/60 transition-transform duration-500 group-hover:-translate-x-2 group-hover:translate-y-2" />
            
            {/* Youtube Iframe Container */}
            <div className="relative aspect-video overflow-hidden rounded-2xl bg-slate-900 shadow-2xl ring-4 ring-white">
              <iframe
                className="absolute inset-0 h-full w-full"
                src={embedUrl}
                title="Who We Are - Introduction Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          {/* Content Section */}
          <div 
            className="flex flex-col items-center text-center lg:items-start lg:text-left"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-1.5 text-sm font-bold tracking-wide text-orange-600 uppercase">
              <span className="h-2 w-2 rounded-full bg-orange-500 animate-pulse" />
              Our Mission
            </div>
            
            <h2 className="mb-6 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl lg:leading-[1.1]">
              {whoWeAre?.title || "Empowering the Future of Democracy"}
            </h2>
            
            <p className="mb-8 text-lg leading-relaxed text-slate-600">
              {whoWeAre?.description 
                ? whoWeAre.description.slice(0, 350) + "..." 
                : "We are committed to providing transparent and accessible solutions for modern governance and community engagement."}
            </p>

            <Link href="/about" className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-blue-700 px-8 py-4 font-semibold text-white transition-all hover:bg-blue-800 hover:shadow-xl active:scale-95 shadow-blue-200">
              <span>Explore More</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 transition-transform group-hover:translate-x-1" 
                fill="none" viewBox="0 0 24 24" stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroductionVideo;