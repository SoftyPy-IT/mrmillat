"use client";
import Link from "next/link";
import Image from "next/image";
import { TOurConcernIssue } from "@/types/types";
import React, { useEffect, useState } from "react";
import useAxiosPublic from "@/hooks/useAxiosPublic";

const Development20012006Page = () => {
  const axiosPublic = useAxiosPublic();
  const [issue, setIssue] = useState<TOurConcernIssue | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchIssue = async () => {
      try {
        setLoading(true);
        
        // Fetch from features endpoint
        const response = await axiosPublic.get("/features");
        
        // Check if response has data
        if (!response.data) {
          console.error("No data in response");
          return;
        }
        
        // Extract the ourConcernIssue from features data
        const featuresData = response.data.data || response.data;
        
        if (featuresData && featuresData.ourConcernIssue) {
          // Convert the nested _id object to string if needed
          const concernIssue = {
            ...featuresData.ourConcernIssue,
            _id: featuresData.ourConcernIssue._id?.$oid || 
                 featuresData.ourConcernIssue._id || 
                 "default-id"
          };
          
          setIssue(concernIssue as TOurConcernIssue);
        } else {
          console.error("ourConcernIssue not found in features data");
        }
        
      } catch (error) {
        console.error("Error fetching features:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchIssue();
  }, [axiosPublic]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="w-14 h-14 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!issue) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center">
        <div>
          <h2 className="text-2xl font-bold mb-4">Content not found</h2>
          <Link href="/">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg">
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white mt-10">
      {/* HERO IMAGE – REAL SIZE (NO CROP) */}
      <div className="w-full flex justify-center">
        <div className="relative">
          <Image
            src={issue.imageUrl}
            alt={issue.title}
            width={800}
            height={500}
            className=""
            priority
          />
        </div>
      </div>

      {/* CONTENT */}
      <div className="px-4 mt-10">
        <div className="max-w-4xl mx-auto">
          {/* TITLE */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            {issue.title}
          </h1>

          {/* DESCRIPTION */}
          <div className="mb-10">
            <div className="text-xl md:text-2xl text-gray-700 leading-relaxed font-medium border-l-4 border-blue-500 pl-6 py-2">
              {issue.shortDescription}
            </div>
          </div>

          {/* KEY AREAS SECTION */}
          {issue.ourConcernIssues && (
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Key Focus Areas</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {Object.entries(issue.ourConcernIssues).map(([key, value], idx) => (
                  <div
                    key={key}
                    className="flex items-start gap-4 p-6 bg-gray-50 rounded-lg border border-gray-200"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                        <span className="text-lg font-bold text-blue-600">{idx + 1}</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">
                        {value}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

           <div className="mb-10">
            <div className="text-xl md:text-2xl text-gray-700 leading-relaxed font-medium pl-6 py-2" dangerouslySetInnerHTML={{ __html: issue.description || "" }}/>
             
          </div>
        </div>
      </div>
    </div>
  );
};

export default Development20012006Page;