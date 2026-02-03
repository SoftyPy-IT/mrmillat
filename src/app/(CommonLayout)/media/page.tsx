"use client";

import React, { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import HeroMediaBanner from "./HeroMediaBanner";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import ReactPlayer from "react-player";
import { TVoiceOnMedia } from "@/types/types";

/* ---------------- Component ---------------- */

const Media = () => {
  const axiosPublic = useAxiosPublic();

  const [medias, setMedias] = useState<TVoiceOnMedia[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [isClient, setIsClient] = useState(false);

  const limit = 6;

  /* ---------------- Fetch Data ---------------- */

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axiosPublic.get(
          `voice-on-media?limit=${limit}&page=${currentPage}&sort=-publishDate`
        );

        const { totalCount, data } = response?.data?.data;
        setMedias(data);
        setTotalCount(totalCount);
      } catch (error) {
        console.error(error);
      }
    };

    getData();
  }, [currentPage, axiosPublic]);

  useEffect(() => {
    setIsClient(true);
  }, []);

  /* ---------------- Simple Solution ---------------- */

  const isFacebookVideo = (url: string) =>
    url.includes("facebook.com") || url.includes("fb.watch");

  return (
    <div className="bg-white">
      <HeroMediaBanner />

      <div className="my-10 container mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold inline-block pb-3 border-b-4 border-blue-500 text-blue-950">
            Videos
          </h2>
        </div>

        {/* Media Grid */}
        <div className="flex justify-center">
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {isClient &&
              medias.map((media) => {
                const isFacebook = isFacebookVideo(media.videoUrl);

                // For Facebook videos that can't embed, show a clickable thumbnail
                if (isFacebook) {
                  return (
                    <div
                      key={media._id}
                      className="w-full max-w-[383px] bg-gray-50 rounded-xl overflow-hidden border shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 flex flex-col"
                    >
                      {/* Clickable Thumbnail for Facebook */}
                      <a
                        href={media.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block relative w-full pt-[56.25%] bg-gray-900 hover:bg-gray-800 transition-colors"
                      >
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                          <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                              <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                            </svg>
                          </div>
                          <p className="text-lg font-semibold">Watch on Facebook</p>
                          <p className="text-sm text-gray-300 mt-2">Click to open video</p>
                        </div>
                      </a>

                      {/* Title */}
                      <div className="p-5 min-h-[80px] flex items-center bg-white">
                        <h2 className="text-lg font-bold line-clamp-2">
                          {media.title}
                        </h2>
                      </div>
                    </div>
                  );
                }

                // For non-Facebook videos, use ReactPlayer normally
                return (
                  <div
                    key={media._id}
                    className="w-full max-w-[383px] bg-gray-50 rounded-xl overflow-hidden border shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 flex flex-col"
                  >
                    {/* Video Player */}
                    <div className="relative w-full pt-[56.25%] bg-black">
                      <ReactPlayer
                        url={media.videoUrl}
                        width="100%"
                        height="100%"
                        controls
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                        }}
                        light={true}
                      />
                    </div>

                    {/* Title */}
                    <div className="p-5 min-h-[80px] flex items-center bg-white">
                      <h2 className="text-lg font-bold line-clamp-2">
                        {media.title}
                      </h2>
                    </div>
                  </div>
                );
              })}
          </section>
        </div>

        {/* Pagination */}
        {totalCount > limit && (
          <div className="flex justify-center mt-12 mb-20">
            <Stack spacing={2}>
              <Pagination
                count={Math.ceil(totalCount / limit)}
                page={currentPage}
                onChange={(_, value) => setCurrentPage(value)}
                color="primary"
              />
            </Stack>
          </div>
        )}
      </div>
    </div>
  );
};

export default Media;