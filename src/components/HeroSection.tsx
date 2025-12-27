import React from "react";
import Image from "next/image";

const HeroSection = ({
  imageUrlMd,
  imageUrlSm,
  title,
  subTitle,
  category,
}: {
  imageUrlMd: string;
  imageUrlSm: string;
  title: string;
  subTitle: string;
  category: string;
}) => {
  const height = category === "About" || title === "About Me" ? "500px" : "400px";

  return (
    <div className="relative w-full" style={{ height }}>
      {/* Background Image for Desktop */}
      <div className="hidden md:block absolute inset-0 overflow-hidden">
        <Image
          src={imageUrlMd}
          alt={title}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
          quality={85}
        />
      </div>
      
      {/* Background Image for Mobile */}
      <div className="md:hidden absolute inset-0 overflow-hidden">
        <Image
          src={imageUrlSm}
          alt={title}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
          quality={85}
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Content */}
      <div className="absolute inset-0 flex justify-center items-center z-10">
        <div className="relative z-20 w-full max-w-[800px] text-center space-y-3 border-4 border-white py-8 mx-4 px-4 lg:mx-0 lg:w-[500px] backdrop-blur-sm bg-white/10 rounded-lg">
          {/* Title */}
          <h3 className="text-3xl lg:text-5xl font-bold text-white drop-shadow-lg">{title}</h3>

          {/* Description */}
          <p className="text-gray-100 text-base lg:text-xl mt-2 drop-shadow-md">{subTitle}</p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;