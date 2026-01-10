// "use client";
// import React, { useEffect, useState } from "react";
// import useAxiosPublic from "@/hooks/useAxiosPublic";
// import ReactPlayer from "react-player/youtube";
// import { TVoiceOnMedia } from "@/types/types";
// import Link from "next/link";

// const VoiceOnMedia = () => {
//   const axiosPublic = useAxiosPublic();
//   const [medias, setMedias] = useState([]);
//   const [isClient, setIsClient] = useState(false);
//   const limit = 3;
//   useEffect(() => {
//     const getData = async () => {
//       try {
//         const response = await axiosPublic.get(`voice-on-media?limit=${limit}`);
//         const { totalCount, data } = response?.data?.data;
//         console.log(totalCount, data);
//         setMedias(data);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     getData();
//   }, [axiosPublic]);
//   console.log(medias);

//   useEffect(() => {
//     setIsClient(true);
//   }, []);

//   return (
//     <div className="bg-white">
//       <div className="my-20">
//         <h2 className="text-4xl text-blue-950 text-center font-bold">
//           Voice On Media
//         </h2>

//         {/* media card container  */}
//         <div
//           data-aos="fade-up"
//           data-aos-duration="2500"
//           className="flex justify-center item-center"
//         >
//           <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-around mb-8 mt-10 gap-8 ">
//             {isClient &&
//               medias?.slice(0, 3).map((media: TVoiceOnMedia) => (
//                 <div
//                   key={media?._id}
//                   className="w-[303px] h-[320px] border-2 shadow-xl "
//                 >
//                   <ReactPlayer
//                     controls
//                     width={300}
//                     height={200}
//                     url={media?.videoUrl}
//                   />

//                   <h2 className="text-md font-bold my-3 text-blue-950 px-5">
//                     {media?.title}
//                   </h2>
//                 </div>
//               ))}
//           </section>
//         </div>

//         <div className="w-full flex justify-center">
//           <Link
//             data-aos="fade-up"
//             data-aos-delay="1000"
//             data-aos-duration="1000"
//             href="/media"
//           >
//             <button className="hover-border-button rounded">View More</button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

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
  const [videoReady, setVideoReady] = useState<Record<string, boolean>>({});
  const limit = 3;

  /* -------- Fetch Data -------- */

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axiosPublic.get(`voice-on-media?limit=${limit}`);
        const data = res?.data?.data?.data || [];
        setMedias(data);

        const readyMap: Record<string, boolean> = {};
        data.forEach((m: TVoiceOnMedia) => (readyMap[m._id] = false));
        setVideoReady(readyMap);
      } catch (err) {
        console.error(err);
      }
    };

    getData();
  }, [axiosPublic]);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleReady = (id: string) =>
    setVideoReady((prev) => ({ ...prev, [id]: true }));

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
            medias.slice(0, 3).map((media) => {
              const isFacebook = isFacebookVideo(media.videoUrl);

              return (
                <div
                  key={media._id}
                  className="bg-white rounded-xl overflow-hidden border shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
                >
                  {/* Video */}
                  <div className="relative w-full pt-[56.25%] bg-black">
                    {!videoReady[media._id] && (
                      <div className="absolute inset-0 flex items-center justify-center bg-gray-800 text-gray-400">
                        Loading video...
                      </div>
                    )}

                    {isFacebook ? (
                      <iframe
                        src={getFacebookEmbedUrl(media.videoUrl)}
                        className="absolute inset-0 w-full h-full border-0"
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                        allowFullScreen
                        scrolling="no"
                        title="Facebook Video"
                        onLoad={() => handleReady(media._id)}
                        style={{
                          opacity: videoReady[media._id] ? 1 : 0,
                          transition: "opacity 0.3s ease",
                        }}
                      />
                    ) : (
                      <div className="absolute inset-0">
                        <ReactPlayer
                          url={media.videoUrl}
                          width="100%"
                          height="100%"
                          controls
                          onReady={() => handleReady(media._id)}
                          style={{
                            opacity: videoReady[media._id] ? 1 : 0,
                            transition: "opacity 0.3s ease",
                          }}
                        />
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
