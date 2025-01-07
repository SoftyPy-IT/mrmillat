"use client"

/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { IoCalendar, IoLocation } from 'react-icons/io5';
import QuickLinksSection from '../QuickLinksSection';
import useFeatures from '@/hooks/useFeatures';
import { TElectionCampaign } from '@/types/types';
import ElectionCountdown from './ElectionCountDownt';


type TElectionCampaignData ={
  electionCampaign: TElectionCampaign;
  isLoading:any
}

const ElectionCampaign = () => {
  const {electionCampaign,isLoading}:TElectionCampaignData = useFeatures();
  return (
<div>
{
    !isLoading &&
    <div className='mb-20 '>
    <div
     style={{backgroundImage:`url(${electionCampaign?.bgImageUrl})`}}
    className="  min-h-screen bg-cover bg-center bg-fixed flex justify-center items-center relative py-8 px-3 lg:pb-14">
     {/* Overlay */}
     <div className="absolute inset-0 bg-black bg-opacity-50"></div>

     {/* Content */}
     <div className="relative z-10 w-full lg:w-2/3 text-center space-y-8">
       {/* Date and Location */}
       <div className="flex justify-center gap-5 ">
         <div className="text-white font-bold w-[250px] px-3 py-2 text-xl flex items-center gap-2 bg-black bg-opacity-40">
           <IoCalendar className='text-2xl' />
           <p> {
       new Date( electionCampaign?.electionDate).toDateString()
      }</p>
         </div>
         <div className="text-white font-bold w-[250px] px-3 py-2 text-xl flex items-center gap-2 bg-black bg-opacity-40">
           <IoLocation className='text-2xl' />
           <p>{electionCampaign?.constituency}</p>
         </div>
       </div>

       {/* Title */}
       <h3 className="text-5xl font-bold text-white">
       {electionCampaign?.title}
       </h3>

       {/* Description */}
       <p className="text-gray-100">
       {electionCampaign?.description}
       </p>

       {/* Countdown */}
  
   {
    electionCampaign?.electionDate&& <ElectionCountdown electionDate={electionCampaign.electionDate }/>
   }
      
     </div>
   </div>
   <div className='relative flex justify-center -top-20'>
     <QuickLinksSection/>
   </div>
  </div>

  }
</div>
  );
};

export default ElectionCampaign;
