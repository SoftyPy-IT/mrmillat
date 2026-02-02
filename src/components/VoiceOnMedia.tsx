"use client";

import React, { useEffect, useState } from "react";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import ReactPlayer from "react-player";
import { TVoiceOnMedia } from "@/types/types";
import Link from "next/link";

/* ---------------- Helpers ---------------- */

const isFacebookVideo = (url: string) =>
  url.includes("facebook.com") || url.includes("fb.watch");

const getFacebookEmbedUrl = (url: string) =>
  `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(
    url
  )}&show_text=false`;

/* ---------------- Component ---------------- */

const VoiceOnMedia = () => {
  const axiosPublic = useAxiosPublic();

  const [medias, setMedias] = useState<TVoiceOnMedia[]>([]);
  const [isClient, setIsClient] = useState(false);

  /**
   * status:
   *  - loading
   *  - ready
   *  - failed (Facebook blocked)
   */
  const [videoStatus, setVideoStatus] = useState<
    Record<string, "loading" | "ready" | "failed">
  >({});

  const limit = 3;

  /* -------- Fetch Data -------- */

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axiosPublic.get(`voice-on-media?limit=${limit}&sort=-publishDate`);
        const data = res?.data?.data?.data || [];

        setMedias(data);

        const statusMap: Record<string, "loading"> = {};
        data.forEach((m: TVoiceOnMedia) => {
          statusMap[m._id] = "loading";
        });

        setVideoStatus(statusMap);
      } catch (err) {
        console.error(err);
      }
    };

    getData();
  }, [axiosPublic]);

  useEffect(() => {
    setIsClient(true);
  }, []);

  /* -------- Handlers -------- */

  const handleReady = (id: string) => {
    setVideoStatus((prev) => ({ ...prev, [id]: "ready" }));
  };

  /**
   * Facebook iframe does NOT fire errors.
   * If not ready within 5s → assume blocked.
   */
  const startFailTimer = (id: string) => {
    setTimeout(() => {
      setVideoStatus((prev) => {
        if (prev[id] === "loading") {
          return { ...prev, [id]: "failed" };
        }
        return prev;
      });
    }, 5000);
  };

  /* -------- Render -------- */

  return (
    <div className="relative text-black bg-white">
      <div className="container mx-auto py-20">
        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold inline-block pb-3 border-b-4 border-blue-500">
            Voice On Media
          </h2>
        </div>

        {/* Cards */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {isClient &&
            medias.slice(0, limit).map((media) => {
              const isFacebook = isFacebookVideo(media.videoUrl);
              const status = videoStatus[media._id];

              return (
                <div
                  key={media._id}
                  className="bg-white rounded-xl overflow-hidden border shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
                >
                  {/* Video Wrapper */}
                  <div className="relative w-full pt-[56.25%] bg-black">
                    {/* Loading */}
                    {status === "loading" && (
                      <div className="absolute inset-0 flex items-center justify-center bg-gray-800 text-gray-400 text-sm">
                        Loading video...
                      </div>
                    )}

                    {/* Facebook Video */}
                    {isFacebook && status !== "failed" && (
                      <iframe
                        src={getFacebookEmbedUrl(media.videoUrl)}
                        className="absolute inset-0 w-full h-full border-0"
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                        allowFullScreen
                        scrolling="no"
                        title="Facebook Video"
                        onLoad={() => handleReady(media._id)}
                        style={{
                          opacity: status === "ready" ? 1 : 0,
                          transition: "opacity 0.3s ease",
                        }}
                        ref={() => startFailTimer(media._id)}
                      />
                    )}

                    {/* Non-Facebook Videos */}
                    {!isFacebook && (
                      <div className="absolute inset-0">
                        <ReactPlayer
                          url={media.videoUrl}
                          width="100%"
                          height="100%"
                          controls
                          onReady={() => handleReady(media._id)}
                          style={{
                            opacity: status === "ready" ? 1 : 0,
                            transition: "opacity 0.3s ease",
                          }}
                        />
                      </div>
                    )}

                    {/* Facebook Fallback */}
                    {status === "failed" && (
                      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black text-white text-center px-4">
                        <p className="text-sm mb-3">
                          This video cannot be embedded due to Facebook
                          restrictions.
                        </p>
                        <a
                          href={media.videoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 transition"
                        >
                          Watch on Facebook
                        </a>
                      </div>
                    )}
                  </div>

                  {/* Title */}
                  <div className="p-5 min-h-[80px] flex items-center">
                    <h3 className="text-lg font-bold line-clamp-2">
                      {media.title}
                    </h3>
                  </div>
                </div>
              );
            })}
        </section>

        {/* View More */}
        <div className="flex justify-center mt-16">
          <Link href="/media">
            <button className="px-8 py-3 bg-blue-700 text-white font-semibold rounded hover:bg-blue-800 transition">
              View More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VoiceOnMedia;
