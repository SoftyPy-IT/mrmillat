"use client";

import React, { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import HeroMediaBanner from "./HeroMediaBanner";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import ReactPlayer from "react-player";
import { TVoiceOnMedia } from "@/types/types";

/* ---------------- Helpers ---------------- */

const isFacebookVideo = (url: string) =>
  url.includes("facebook.com") || url.includes("fb.watch");

const getFacebookEmbedUrl = (url: string) =>
  `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(
    url
  )}&show_text=false`;

/* ---------------- Component ---------------- */

const Media = () => {
  const axiosPublic = useAxiosPublic();

  const [medias, setMedias] = useState<TVoiceOnMedia[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [isClient, setIsClient] = useState(false);

  /**
   * status:
   * loading | ready | failed
   */
  const [videoStatus, setVideoStatus] = useState<
    Record<string, "loading" | "ready" | "failed">
  >({});

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

        const statusMap: Record<string, "loading"> = {};
        data.forEach((m: TVoiceOnMedia) => {
          statusMap[m._id] = "loading";
        });

        setVideoStatus(statusMap);
      } catch (error) {
        console.error(error);
      }
    };

    getData();
  }, [currentPage, axiosPublic]);

  useEffect(() => {
    setIsClient(true);
  }, []);

  /* ---------------- Handlers ---------------- */

  const markReady = (id: string) => {
    setVideoStatus((prev) => ({ ...prev, [id]: "ready" }));
  };

  /**
   * Facebook iframe never errors.
   * If not ready in 5s → assume blocked.
   */
  const startFailTimer = (id: string) => {
    setTimeout(() => {
      setVideoStatus((prev) =>
        prev[id] === "loading" ? { ...prev, [id]: "failed" } : prev
      );
    }, 5000);
  };

  /* ---------------- Render ---------------- */

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
                const status = videoStatus[media._id];

                return (
                  <div
                    key={media._id}
                    className="w-full max-w-[383px] bg-gray-50 rounded-xl overflow-hidden border shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 flex flex-col"
                  >
                    {/* Video */}
                    <div className="relative w-full pt-[56.25%] bg-black">
                      {status === "loading" && (
                        <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-sm">
                          Loading video...
                        </div>
                      )}

                      {/* Facebook */}
                      {isFacebook && status !== "failed" && (
                        <iframe
                          src={getFacebookEmbedUrl(media.videoUrl)}
                          className="absolute inset-0 w-full h-full border-0"
                          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                          allowFullScreen
                          title="Facebook Video"
                          onLoad={() => markReady(media._id)}
                          ref={() => startFailTimer(media._id)}
                          style={{
                            opacity: status === "ready" ? 1 : 0,
                            transition: "opacity 0.3s ease",
                          }}
                        />
                      )}

                      {/* Other platforms */}
                      {!isFacebook && (
                        <ReactPlayer
                          url={media.videoUrl}
                          width="100%"
                          height="100%"
                          controls
                          onReady={() => markReady(media._id)}
                          style={{
                            position: "absolute",
                            inset: 0,
                            opacity: status === "ready" ? 1 : 0,
                            transition: "opacity 0.3s ease",
                          }}
                        />
                      )}

                      {/* Facebook fallback */}
                      {status === "failed" && (
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black px-4 text-center">
                          <p className="text-sm mb-3">
                            This video can’t be embedded due to Facebook
                            restrictions.
                          </p>
                          <a
                            href={media.videoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700"
                          >
                            Watch on Facebook
                          </a>
                        </div>
                      )}
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
