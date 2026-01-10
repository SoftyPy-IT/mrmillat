"use client";
import { Pagination, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import ImageModal from "./ImageModal";
import { MdOutlineFullscreen } from "react-icons/md";
import HeroGalleryBanner from "./HeroGalleryBanner";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { TGallery } from "@/types/types";

const Gallery = () => {
  const axiosPublic = useAxiosPublic();
  const [images, setImages] = useState<TGallery[]>([]);
  const [imageId, setImageId] = useState<string | undefined>();
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );
  const [totalCount, setTotalCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [isHover, setIsHover] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const limit = 6;

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axiosPublic.get(
          `gallery?limit=${limit}&page=${currentPage}&sort=-date`
        );
        const { totalCount, data } = response?.data?.data;
        setImages(data);
        setTotalCount(totalCount);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [currentPage, axiosPublic]);

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
    setOpenModal(true);
  };

  return (
    <div className="bg-white">
      {openModal && (
        <ImageModal
          close={setOpenModal}
          selectedIndex={selectedImageIndex || 0}
          images={images}
        />
      )}

      {/* Banner section */}
      <HeroGalleryBanner />

      {/* Gallery container */}
      <section
        data-aos="fade-up"
        data-aos-duration="2500"
        className="flex justify-center px-5"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20 mb-8 max-w-6xl">
          {images.map((image: TGallery, index: number) => (
            <div
              key={image?._id || index}
              onClick={() => handleImageClick(index)}
              onMouseEnter={() => setImageId(image?._id)}
              className="relative overflow-hidden cursor-pointer"
            >
              <MdOutlineFullscreen className="text-3xl text-white absolute z-10 top-2 right-2" />
              <div
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
                onTouchStart={() => setIsHover(true)}
                onTouchEnd={() => setIsHover(false)}
                style={{
                  backgroundImage: `url(${image?.imageUrl})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                className={`w-[300px] h-[200px] md:w-[400px] md:h-[260px] lg:w-[600px] lg:h-[400px] relative transition-transform duration-500 hover:scale-105`}
              >
                <div
                  className={`absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-500 ${
                    isHover && imageId === image?._id
                      ? "opacity-100"
                      : "opacity-0"
                  }`}
                ></div>
                <div
                  className={`absolute px-9 text-lg font-semibold text-white transition-all duration-500 ${
                    isHover && imageId === image?._id
                      ? "bottom-10 opacity-100"
                      : "bottom-[-40px] opacity-0"
                  }`}
                >
                  {image?.title}
                </div>
                <p
                  className={`absolute px-9 text-sm font-semibold text-white transition-all duration-500 ${
                    isHover && imageId === image?._id
                      ? "bottom-5 opacity-100"
                      : "bottom-[-40px] opacity-0"
                  }`}
                >
                  {new Date(image?.date).toDateString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pagination */}
      {totalCount > limit && (
        <div className="flex justify-center mb-20 mt-8">
          <Stack spacing={2}>
            <Pagination
              count={Math.ceil(totalCount / limit)}
              page={currentPage}
              onChange={(event, value) => setCurrentPage(value)}
              color="primary"
            />
          </Stack>
        </div>
      )}
    </div>
  );
};

export default Gallery;
