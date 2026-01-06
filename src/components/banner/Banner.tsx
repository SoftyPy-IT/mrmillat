import React from "react";
import "../navbar/navbar.css";
import Link from "next/link";
import { TBanner } from "@/types/types";
// import Image from "next/image";

const Banner = async ({ bannerData }: { bannerData: TBanner }) => {
  console.log(bannerData);
  return (
    <div>
      <div className="relative w-full h-[500px] lg:min-h-screen overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={"/Images/mrmillat-2.mp4"} type="video/mp4" />
        </video>

        <div className=" flex justify-center items-center ">
          <div className="max-w-5xl 2xl:max-w-7xl  md:px-6 top-[50%] md:top-[30%] lg:top-[65%]   text-center text-white absolute z-10 lg:ml-20">
            <h1
              data-aos="fade-left"
              data-aos-delay="200"
              data-aos-duration="1000"
              className="md:mb-5 mb-2 text-[28px] lg:text-7xl font-semibold"
            >
              {bannerData?.name}
            </h1>
            <h3
              data-aos="fade-left"
              data-aos-delay="400"
              data-aos-duration="1000"
              className="mb-5 text-sm md:text-lg xl:text-xl "
            >
              {bannerData?.designation}
            </h3>
            <Link
              data-aos="fade-up"
              data-aos-delay="1000"
              data-aos-duration="1000"
              href="/about"
            >
              <button className="hover-border-button rounded ">About Me</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
