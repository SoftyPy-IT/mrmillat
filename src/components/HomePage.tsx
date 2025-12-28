"use client";
import ArticleSectionHomePage from "@/components/Article/ArticleSectionHomePage";
import ElectionCampaign from "@/components/electionCampaign/ElectionCampaign";
import EventSliderHomePage from "@/components/event/EventSliderHomePage";
import IntroductionVideo from "@/components/introductionVideo/IntroductionVideo";
import OurConcern from "@/components/OurConcern";
import VoiceOnMedia from "@/components/VoiceOnMedia";
import { TFeatures } from "@/types/types";
import React, { useEffect, useState } from "react";
import Banner from "./banner/Banner";
import PlanSliderHomePage from "./Plan/PlanSliderHomePage";

const HomePage = () => {
  const [features, setFeatures] = useState<TFeatures | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_API_URL}/features`
      );
      const data = await res.json();
      setFeatures(data.data);
    };
    fetchData();
  }, []);

  if (!features) return null;
  return (
    <div>
      {/* banner */}
      <Banner bannerData={features.banner} />
      <section className=" md:py-20">
        {/* our concern section  */}
        <div className="flex justify-center items-center w-full">
          <OurConcern ourConcernIssue={features.ourConcernIssue} />
        </div>

        {/* introductionVideo */}
        <div className="flex justify-center items-center">
          <IntroductionVideo />
        </div>
      </section>
      <div className="">
        <PlanSliderHomePage />
      </div>

      {/* election Campaign */}
      <div>
        <ElectionCampaign electionCampaign={features.electionCampaign} />
      </div>

      {/* event slider */}
      <div className="flex justify-center items-center">
        <EventSliderHomePage />
      </div>

      {/* articles  */}
      <div>
        <ArticleSectionHomePage />
      </div>

      {/* Voice of Media section  */}
      <div>
        <VoiceOnMedia />
      </div>
    </div>
  );
};

export default HomePage;
