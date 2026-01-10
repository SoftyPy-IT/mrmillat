// "use client";
// import React, { useEffect, useState } from "react";
// import Pagination from "@mui/material/Pagination";
// import Stack from "@mui/material/Stack";
// import HeroMediaBanner from "./HeroMediaBanner";
// import useAxiosPublic from "@/hooks/useAxiosPublic";
// import ReactPlayer from "react-player/youtube";
// import { TVoiceOnMedia } from "@/types/types";

// const Media = () => {
//   const axiosPublic = useAxiosPublic();
//   const [medias, setMedias] = useState([]);
//   const [totalCount, setTotalCount] = useState(0);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [isClient, setIsClient] = useState(false);
//   const limit = 6;

//   useEffect(() => {
//     const getData = async () => {
//       try {
//         const response = await axiosPublic.get(
//           `voice-on-media?limit=${limit}&page=${currentPage}`
//         );
//         const { totalCount, data } = response?.data?.data;
//         console.log(totalCount, data);
//         setMedias(data);
//         setTotalCount(totalCount);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     getData();
//   }, [currentPage, axiosPublic]);
//   console.log(medias);

//   useEffect(() => {
//     setIsClient(true);
//   }, []);

//   return (
//     <div className="bg-white">
//       {/* banner section  */}
//       <HeroMediaBanner />

//       <div className="my-10">
//         <h2 className="text-4xl text-blue-950 text-center font-bold">
//           Interviews
//         </h2>

//         {/* media card container  */}
//         <div
//           data-aos="fade-up"
//           data-aos-duration="2500"
//           className="flex justify-center item-center"
//         >
//           <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-around mb-8 mt-10 gap-8 ">
//             {/* card 1 */}

//             {isClient &&
//               medias?.map((media: TVoiceOnMedia) => (
//                 <div
//                   key={media?._id}
//                   className="w-[303px] h-[360px] border-2 shadow-xl "
//                 >
//                   <ReactPlayer
//                     controls
//                     width={300}
//                     height={200}
//                     url={media?.videoUrl}
//                   />

//                   <h2 className="text-lg font-bold my-3 text-black px-5">
//                     {media?.title}
//                   </h2>
//                 </div>
//               ))}
//           </section>
//         </div>

//         {/* pagination buttons */}
//         {totalCount < limit && currentPage === 1 ? (
//           ""
//         ) : (
//           <div className="flex item-center justify-center mb-20 mt-8">
//             <Stack spacing={2}>
//               <Pagination
//                 count={Math.ceil(totalCount / limit)}
//                 page={currentPage}
//                 onChange={(event, value) => setCurrentPage(value)}
//                 color="primary"
//               />
//             </Stack>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

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

/* ---------------- Component ---------------- */
const Media = () => {
  const axiosPublic = useAxiosPublic();
  const [medias, setMedias] = useState<TVoiceOnMedia[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [isClient, setIsClient] = useState(false);
  const [videoReady, setVideoReady] = useState<Record<string, boolean>>({});
  const limit = 6;

  /* -------- Fetch Data -------- */
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axiosPublic.get(
          `voice-on-media?limit=${limit}&page=${currentPage}&sort=-publishDate`
        );
        const { totalCount, data } = response?.data?.data;
        setMedias(data);
        setTotalCount(totalCount);

        const readyMap: Record<string, boolean> = {};
        data.forEach((media: TVoiceOnMedia) => (readyMap[media._id] = false));
        setVideoReady(readyMap);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, [currentPage, axiosPublic]);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleReady = (id: string) =>
    setVideoReady((prev) => ({ ...prev, [id]: true }));

  return (
    <div className="bg-white">
      <HeroMediaBanner />

      <div className="my-10 container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold inline-block pb-3 border-b-4 border-blue-500 text-blue-950">
            Videos
          </h2>
        </div>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {isClient &&
            medias.map((media: TVoiceOnMedia) => {
              const isFacebook = isFacebookVideo(media.videoUrl);

              return (
                <div
                  key={media._id}
                  className="w-full bg-white rounded-xl overflow-hidden border border-gray-200 shadow-lg hover:shadow-xl hover:border-blue-400 transition-all duration-300 hover:-translate-y-1 flex flex-col"
                  // style={{ minHeight: "380px", maxHeight: "380px" }}
                >
                  {/* Fixed height video container */}
                  <div className="relative w-full h-56 bg-gray-100">
                    {!videoReady[media._id] && (
                      <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                        <div className="animate-pulse text-gray-500">
                          Loading video...
                        </div>
                      </div>
                    )}

                    {isFacebook ? (
                      // Facebook video using iframe
                      <iframe
                        src={`https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(
                          media.videoUrl
                        )}&show_text=false&width=500&height=285`}
                        className="absolute inset-0 w-full h-full border-0"
                        scrolling="no"
                        allowFullScreen={true}
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                        title="Facebook Video"
                        onLoad={() => handleReady(media._id)}
                        style={{
                          opacity: videoReady[media._id] ? 1 : 0,
                          transition: "opacity 0.3s ease-in",
                        }}
                      />
                    ) : (
                      // YouTube or other videos using ReactPlayer
                      <div className="absolute inset-0">
                        <ReactPlayer
                          url={media.videoUrl}
                          width="100%"
                          height="100%"
                          controls
                          onReady={() => handleReady(media._id)}
                          style={{
                            opacity: videoReady[media._id] ? 1 : 0,
                            transition: "opacity 0.3s ease-in",
                          }}
                        />
                      </div>
                    )}
                  </div>

                  {/* Title container */}
                  <div className="p-4 flex items-center bg-white">
                    <h2 className="text-lg font-bold text-gray-800 ">
                      {media.title}
                    </h2>
                  </div>
                </div>
              );
            })}
        </section>

        {/* pagination buttons */}
        {totalCount < limit && currentPage === 1 ? (
          ""
        ) : (
          <div className="flex items-center justify-center mb-20 mt-12">
            <Stack spacing={2}>
              <Pagination
                count={Math.ceil(totalCount / limit)}
                page={currentPage}
                onChange={(event, value) => setCurrentPage(value)}
                color="primary"
                sx={{
                  '& .MuiPaginationItem-root': {
                    color: '#1e40af',
                    border: '1px solid #d1d5db',
                    '&:hover': {
                      backgroundColor: '#dbeafe',
                    },
                  },
                  '& .MuiPaginationItem-root.Mui-selected': {
                    backgroundColor: '#1e40af',
                    color: 'white',
                    '&:hover': {
                      backgroundColor: '#1e3a8a',
                    },
                  },
                }}
              />
            </Stack>
          </div>
        )}
      </div>
    </div>
  );
};

export default Media;