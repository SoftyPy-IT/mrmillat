import React from 'react';
import { IoCalendar, IoLocation } from 'react-icons/io5';
import QuickLinksSection from '../QuickLinksSection';

const ElectionCampaign = () => {
  return (
   <div className='mb-20 '>
     <div className="bg-[url(/Images/mr-2.jpg)]  min-h-screen bg-cover bg-center bg-fixed flex justify-center items-center relative py-8 px-3 lg:pb-14">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 w-full lg:w-1/2 text-center space-y-8">
        {/* Date and Location */}
        <div className="flex justify-center gap-5 ">
          <div className="text-white font-bold w-[250px] px-3 py-2 text-xl flex items-center gap-2 bg-black bg-opacity-40">
            <IoCalendar className='text-2xl' />
            <p>30 February, 2024</p>
          </div>
          <div className="text-white font-bold w-[250px] px-3 py-2 text-xl flex items-center gap-2 bg-black bg-opacity-40">
            <IoLocation className='text-2xl' />
            <p>Jamalpur-1, Tangail</p>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-5xl font-bold text-white">
          Election Campaign
        </h3>

        {/* Description */}
        <p className="text-gray-100">
          Urna risus himenaeos dui sociosqu purus nisi magnis. Conubia integer eu ante molestie vitae sapien dis
          tristique si praesent hac. Maximus blandit dignissim facilisi ut euismod odio erat.
        </p>

        {/* Countdown */}
        <div className="grid grid-cols-4 md:gap-10 gap-5  px-6">
          <div className="text-center p-3 bg-blue-700 bg-opacity-40">
            <h3 className="text-2xl md:text-4xl lg:text-7xl text-white">00</h3>
            <p className="text-gray-100">Days</p>
          </div>
          <div className="text-center p-3 bg-blue-700 bg-opacity-40">
            <h3 className="text-2xl md:text-4xl lg:text-7xl text-white">00</h3>
            <p className="text-gray-100">Hours</p>
          </div>
          <div className="text-center p-3 bg-blue-700 bg-opacity-40">
            <h3 className="text-2xl md:text-4xl lg:text-7xl text-white">00</h3>
            <p className="text-gray-100">Minutes</p>
          </div>
          <div className="text-center p-3 bg-blue-700 bg-opacity-40">
            <h3 className="text-2xl md:text-4xl lg:text-7xl text-white">00</h3>
            <p className="text-gray-100">Seconds</p>
          </div>
        </div>
      </div>
    </div>
    <div className='relative flex justify-center -top-20'>
      <QuickLinksSection/>
    </div>
   </div>
  );
};

export default ElectionCampaign;
