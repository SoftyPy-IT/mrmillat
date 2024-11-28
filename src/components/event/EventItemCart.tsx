import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaCalendar } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';


export type Event = {
  id: number;
  image: string;
  title: string;
  description: string;
  date: string;
  location: string;
  eventType: string;
};



const EventCardItem = ({event}:{event:Event}) => {
  
  return (
    <div key={event.id} className="max-w-[520px] lg:h-[460px] rounded-xl shadow-lg hover:bg-gray-300">
      <div className="p-5">
       <div className="overflow-hidden"> <Image
          src={event.image}
          alt="Event Image"
          width={300}
          height={150}
          className="w-full duration-500  hover:scale-110   h-44 rounded-lg object-cover shadow-md"
        /></div>
        <div className="mt-4">
          <h2 className="text-xl font-bold text-blue-950">{event.title}</h2>
          <p className="text-sm mt-2">
        {event.description.slice(0,100)} <Link href={`/events/${event.id}`}><button  className='text-blue-500'>আরও-দেখুন...</button></Link>
          </p>
          <div className=" text-sm opacity-80 lg:flex flex-row justify-between item-center text-black h-[60px]">
    
         <div className='flex gap-1 items-center'>
         <span ><FaCalendar /></span><p><strong>Date:</strong>{event.date}</p>
         </div>
         <div className='flex gap-1 items-center'>
         <span ><FaLocationDot /></span><p><strong>Location:</strong>{event.location}</p>
         </div>
         
         </div>
      <button className='hover-border-button mt-6'>Share</button>
        </div>
      </div>
    </div>
  );
};

export default EventCardItem