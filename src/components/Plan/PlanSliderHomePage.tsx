"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import { useEffect, useState } from "react";
import PlanCardItem from "./PlanItemCard";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { TPlan } from "@/types/types";
import Link from "next/link";

const PlanSliderHomePage = () => {
  const axiosPublic = useAxiosPublic();
  const [plans, setPlans] = useState([]);
  const limit = 6;
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axiosPublic.get(
          `plans?type=previous&limit=${limit}`
        );
        const { totalCount, data } = response?.data?.data;
        console.log(totalCount, data);
        setPlans(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [axiosPublic]);
  // console.log(events);

  return (
    <div className="container text-black">
      <>
        <section>
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold inline-block pb-3 border-b-4 border-blue-500">
              দেশ গড়ার পরিকল্পনা
            </h2>
          </div>

          <div className="flex justify-center items-center w-full">
            <Swiper
              key={plans.length}
              effect={"coverflow"}
              speed={4000}
              autoplay={{
                delay: 2000,
                disableOnInteraction: true,
                pauseOnMouseEnter: true,
              }}
              spaceBetween={10}
              loop={true}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={2}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: false,
              }}
              pagination={true}
              modules={[EffectCoverflow, Pagination, Autoplay]}
              className="mySwiper mb-20"
              breakpoints={{
                1440: {
                  slidesPerView: 3,
                  centeredSlides: true,
                },
                1024: {
                  slidesPerView: 3,
                  centeredSlides: true,
                },

                768: {
                  slidesPerView: 2,
                  centeredSlides: true,
                },

                640: {
                  slidesPerView: 1,
                  centeredSlides: true,
                },

                320: {
                  slidesPerView: 1,
                  centeredSlides: true,
                },
              }}
            >
              {plans?.map((plan: TPlan, i) => (
                <SwiperSlide
                  key={i}
                  className=" my-16 sm:mx-10 sm:px-5 lg:mx-0 lg:px-0"
                >
                  <PlanCardItem plan={plan} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="flex flex-col items-center mb-5">
            <Link href="/plans">
              <button className="hover-border-button rounded ">See More</button>
            </Link>
          </div>
        </section>
      </>
    </div>
  );
};

export default PlanSliderHomePage;
