import { TEvent } from '@/types/types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaCalendar } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';

const EventCardItem = ({event}:{event:TEvent}) => {
  
  return (
    <div key={event?._id} className="max-w-[520px] lg:h-[480px] rounded-xl shadow-lg hover:bg-gray-100 bg-white">
      <div className="p-5">
       <div className="overflow-hidden"> <Image
          src={event?.imageUrl}
          alt="Event Image"
          width={300}
          height={150}
          className="w-full duration-500  hover:scale-110   h-44 rounded-lg object-cover shadow-md"
        /></div>
        <div className="mt-4">
          <h2 className="text-lg font-bold text-blue-950">
            {event?.title.length>100?`${event?.title?.slice(0,100)}...`: event?.title}</h2>
          <p className="text-sm mt-2">
        {event.description.slice(0,100)} <Link href={`/events/${event?._id}`}><button  className='text-blue-500'>আরও-দেখুন...</button></Link>
          </p>
          <div className=" text-sm opacity-80 lg:flex flex-row justify-between item-center text-black h-[60px]">
    
         <div className='flex gap-1 items-center'>
         <span ><FaCalendar /></span>
         <p><strong>Date:</strong>{new Date(event?.date).toDateString()}</p>
         </div>
         <div className='flex gap-1 items-center'>
         <span ><FaLocationDot /></span><p><strong>Location:</strong>{event?.location}</p>
         </div>
         
         </div>
      <button className='hover-border-button mt-6'>Share</button>
        </div>
      </div>
    </div>
  );
};

export default EventCardItem