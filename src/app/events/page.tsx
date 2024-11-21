import Image from 'next/image';
import React from 'react';
import { FaCalendar } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import Marquee from "react-fast-marquee";
import { Pagination, Stack } from '@mui/material';
import Link from 'next/link';


const Events = () => {
  return (
    <div>
      {/* banner section  */}
     
   <div className="bg-[url(/Images/mr-11.jpg)]  h-[400px] bg-cover bg-center bg-fixed flex justify-center items-center relative py-8 px-3 lg:pb-14 ">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-10"></div>

      {/* Content */}
      <div className="relative z-10 w-full lg:w-1/3 text-center space-y-3 border-4 border-white py-8">
      

        {/* Title */}
        <h3 className="text-5xl font-bold text-white ">
           Events
        </h3>

        {/* Description */}
        <p className="text-gray-100 text-xl">
        Leadership, Experience, and values mean something
        </p>

    
      </div>
    </div>




       {/* Event Highlights section  */}
       <h3 className='text-4xl font-bold my-10 text-center text-blue-950'>Event Highlights</h3>
    <section className='flex  item-center justify-center'>
      
<div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 justify-between items-center gap-10'>
  
                {/* card-1  */}
                <div className="max-w-[520px] lg:h-[380px] rounded-xl shadow-lg ">
  <div className="p-5">
   <div className="overflow-hidden"> <Image
      src="/Images/mr-10.jpg"
      alt="Event Image"
      width={300}
      height={150}
      className="w-full duration-500  hover:scale-110   h-44 rounded-lg object-cover shadow-md"
    /></div>
    <div className="mt-4">
      <h2 className="text-xl font-bold text-blue-950">ময়মনসিংহ-কিশোরগঞ্জ রোড মার্চ এর উদ্বোধনীতে রশিদুজ্জামান মিল্লাত এর বক্তব্য  </h2>
      <p className="text-sm mt-2">
      অবৈধ সরকারের পদত্যাগ ও সংসদ বিলুপ্ত করে নির্দলীয় নিরপেক্ষ সরকারের অধীনে নির্বাচন এবং দেশনেত্রী বেগম <Link href="/events/event-details/"><button className='text-blue-500'>আরও-দেখুন...</button></Link>
      </p>
      <div className="mt-3 text-sm opacity-80 lg:flex flex-row justify-between item-center text-black ">

     <div className='flex gap-1 items-center'>
     <span ><FaCalendar /></span><p><strong>Date:</strong> ১ অক্টোবর ২০২৩, রবিবার</p>
     </div>
     <div className='flex gap-1 items-center'>
     <span ><FaLocationDot /></span><p><strong>Location:</strong> ১ অক্টোবর ২০২৩, রবিবার</p>
     </div>
     
     </div>
      
    </div>
  </div>
</div>
                {/* card-2  */}
    <div className="max-w-[520px] lg:h-[380px] rounded-xl shadow-lg ">
  <div className="p-5">
   <div className="overflow-hidden"> <Image
      src="/Images/mr-10.jpg"
      alt="Event Image"
      width={300}
      height={150}
      className="w-full duration-500  hover:scale-110   h-44 rounded-lg object-cover shadow-md"
    /></div>
    <div className="mt-4">
      <h2 className="text-xl font-bold text-blue-950">ময়মনসিংহ-কিশোরগঞ্জ রোড মার্চ এর উদ্বোধনীতে রশিদুজ্জামান মিল্লাত এর বক্তব্য  </h2>
      <p className="text-sm mt-2">
      অবৈধ সরকারের পদত্যাগ ও সংসদ বিলুপ্ত করে নির্দলীয় নিরপেক্ষ সরকারের অধীনে নির্বাচন এবং দেশনেত্রী বেগম <Link href="/events/event-details/"><button className='text-blue-500'>আরও-দেখুন...</button></Link>
      </p>
      <div className="mt-3 text-sm opacity-80 lg:flex flex-row justify-between item-center text-black ">

     <div className='flex gap-1 items-center'>
     <span ><FaCalendar /></span><p><strong>Date:</strong> ১ অক্টোবর ২০২৩, রবিবার</p>
     </div>
     <div className='flex gap-1 items-center'>
     <span ><FaLocationDot /></span><p><strong>Location:</strong> ১ অক্টোবর ২০২৩, রবিবার</p>
     </div>
     
     </div>
      
    </div>
  </div>
</div>
                {/* card-3  */}
    <div className="max-w-[520px] lg:h-[380px] rounded-xl shadow-lg ">
  <div className="p-5">
   <div className="overflow-hidden"> <Image
      src="/Images/mr-10.jpg"
      alt="Event Image"
      width={300}
      height={150}
      className="w-full duration-500  hover:scale-110   h-44 rounded-lg object-cover shadow-md"
    /></div>
    <div className="mt-4">
      <h2 className="text-xl font-bold text-blue-950">ময়মনসিংহ-কিশোরগঞ্জ রোড মার্চ এর উদ্বোধনীতে রশিদুজ্জামান মিল্লাত এর বক্তব্য  </h2>
      <p className="text-sm mt-2">
      অবৈধ সরকারের পদত্যাগ ও সংসদ বিলুপ্ত করে নির্দলীয় নিরপেক্ষ সরকারের অধীনে নির্বাচন এবং দেশনেত্রী বেগম <Link href="/events/event-details/"><button className='text-blue-500'>আরও-দেখুন...</button></Link>
      </p>
      <div className="mt-3 text-sm opacity-80 lg:flex flex-row justify-between item-center text-black ">

     <div className='flex gap-1 items-center'>
     <span ><FaCalendar /></span><p><strong>Date:</strong> ১ অক্টোবর ২০২৩, রবিবার</p>
     </div>
     <div className='flex gap-1 items-center'>
     <span ><FaLocationDot /></span><p><strong>Location:</strong> ১ অক্টোবর ২০২৩, রবিবার</p>
     </div>
     
     </div>
      
    </div>
  </div>
</div>
                {/* card-4  */}
    <div className="max-w-[520px] lg:h-[380px] rounded-xl shadow-lg ">
  <div className="p-5">
   <div className="overflow-hidden"> <Image
      src="/Images/mr-10.jpg"
      alt="Event Image"
      width={300}
      height={150}
      className="w-full duration-500  hover:scale-110   h-44 rounded-lg object-cover shadow-md"
    /></div>
    <div className="mt-4">
      <h2 className="text-xl font-bold text-blue-950">ময়মনসিংহ-কিশোরগঞ্জ রোড মার্চ এর উদ্বোধনীতে রশিদুজ্জামান মিল্লাত এর বক্তব্য  </h2>
      <p className="text-sm mt-2">
      অবৈধ সরকারের পদত্যাগ ও সংসদ বিলুপ্ত করে নির্দলীয় নিরপেক্ষ সরকারের অধীনে নির্বাচন এবং দেশনেত্রী বেগম <Link href="/events/event-details/"><button className='text-blue-500'>আরও-দেখুন...</button></Link>
      </p>
      <div className="mt-3 text-sm opacity-80 lg:flex flex-row justify-between item-center text-black ">

     <div className='flex gap-1 items-center'>
     <span ><FaCalendar /></span><p><strong>Date:</strong> ১ অক্টোবর ২০২৩, রবিবার</p>
     </div>
     <div className='flex gap-1 items-center'>
     <span ><FaLocationDot /></span><p><strong>Location:</strong> ১ অক্টোবর ২০২৩, রবিবার</p>
     </div>
     
     </div>
      
    </div>
  </div>
</div>
                {/* card-5  */}
    <div className="max-w-[520px] lg:h-[380px] rounded-xl shadow-lg ">
  <div className="p-5">
   <div className="overflow-hidden"> <Image
      src="/Images/mr-10.jpg"
      alt="Event Image"
      width={300}
      height={150}
      className="w-full duration-500  hover:scale-110   h-44 rounded-lg object-cover shadow-md"
    /></div>
    <div className="mt-4">
      <h2 className="text-xl font-bold text-blue-950">ময়মনসিংহ-কিশোরগঞ্জ রোড মার্চ এর উদ্বোধনীতে রশিদুজ্জামান মিল্লাত এর বক্তব্য  </h2>
      <p className="text-sm mt-2">
      অবৈধ সরকারের পদত্যাগ ও সংসদ বিলুপ্ত করে নির্দলীয় নিরপেক্ষ সরকারের অধীনে নির্বাচন এবং দেশনেত্রী বেগম <Link href="/events/event-details/"><button className='text-blue-500'>আরও-দেখুন...</button></Link>
      </p>
      <div className="mt-3 text-sm opacity-80 lg:flex flex-row justify-between item-center text-black ">

     <div className='flex gap-1 items-center'>
     <span ><FaCalendar /></span><p><strong>Date:</strong> ১ অক্টোবর ২০২৩, রবিবার</p>
     </div>
     <div className='flex gap-1 items-center'>
     <span ><FaLocationDot /></span><p><strong>Location:</strong> ১ অক্টোবর ২০২৩, রবিবার</p>
     </div>
     
     </div>
      
    </div>
  </div>
</div>
                {/* card-6  */}
    <div className="max-w-[520px] lg:h-[380px] rounded-xl shadow-lg ">
  <div className="p-5">
   <div className="overflow-hidden"> <Image
      src="/Images/mr-10.jpg"
      alt="Event Image"
      width={300}
      height={150}
      className="w-full duration-500  hover:scale-110   h-44 rounded-lg object-cover shadow-md"
    /></div>
    <div className="mt-4">
      <h2 className="text-xl font-bold text-blue-950">ময়মনসিংহ-কিশোরগঞ্জ রোড মার্চ এর উদ্বোধনীতে রশিদুজ্জামান মিল্লাত এর বক্তব্য  </h2>
      <p className="text-sm mt-2">
      অবৈধ সরকারের পদত্যাগ ও সংসদ বিলুপ্ত করে নির্দলীয় নিরপেক্ষ সরকারের অধীনে নির্বাচন এবং দেশনেত্রী বেগম <Link href="/events/event-details/"><button className='text-blue-500'>আরও-দেখুন...</button></Link>
      </p>
      <div className="mt-3 text-sm opacity-80 lg:flex flex-row justify-between item-center text-black ">

     <div className='flex gap-1 items-center'>
     <span ><FaCalendar /></span><p><strong>Date:</strong> ১ অক্টোবর ২০২৩, রবিবার</p>
     </div>
     <div className='flex gap-1 items-center'>
     <span ><FaLocationDot /></span><p><strong>Location:</strong> ১ অক্টোবর ২০২৩, রবিবার</p>
     </div>
     
     </div>
      
    </div>
  </div>
</div>
</div>


      </section>  

      {/* pagination buttons */}
    <div className='flex item-center justify-center mb-20 mt-16'>
   <Stack spacing={2}>
     
     <Pagination count={10} color="primary" />
    
   </Stack>
   </div>

            {/* Up Comming Events section  */}

<h3 className='text-4xl font-bold my-10 text-center text-blue-950'>Up Comming Events</h3>
      <section className=''>
      <Marquee pauseOnHover={true}>
                {/* card-1  */}
  <div className="md:max-w-[520px] max-w-[300px]  mx-10  mb-10 lg:h-[380px] rounded-xl shadow-lg ">
  <div className="p-5">
   <div className="overflow-hidden"> <Image
      src="/Images/mr-10.jpg"
      alt="Event Image"
      width={300}
      height={150}
      className="w-full duration-500  hover:scale-110   h-44 rounded-lg object-cover shadow-md"
    /></div>
    <div className="mt-4">
      <h2 className="text-xl font-bold text-blue-950">ময়মনসিংহ-কিশোরগঞ্জ রোড মার্চ এর উদ্বোধনীতে রশিদুজ্জামান মিল্লাত এর বক্তব্য  </h2>
      <p className="text-sm mt-2">
      অবৈধ সরকারের পদত্যাগ ও সংসদ বিলুপ্ত করে নির্দলীয় নিরপেক্ষ সরকারের অধীনে নির্বাচন এবং দেশনেত্রী বেগম <Link href="/events/event-details/"><button className='text-blue-500'>আরও-দেখুন...</button></Link>
      </p>
      <div className="mt-3 text-sm opacity-80 lg:flex flex-row justify-between item-center text-black ">

     <div className='flex gap-1 items-center'>
     <span ><FaCalendar /></span><p><strong>Date:</strong> ১ অক্টোবর ২০২৩, রবিবার</p>
     </div>
     <div className='flex gap-1 items-center'>
     <span ><FaLocationDot /></span><p><strong>Location:</strong> ১ অক্টোবর ২০২৩, রবিবার</p>
     </div>
     
     </div>
      
    </div>
  </div>
</div>
                {/* card-2  */}
    <div className="md:max-w-[520px] max-w-[300px]  mx-10  mb-10 lg:h-[380px] rounded-xl shadow-lg ">
  <div className="p-5">
   <div className="overflow-hidden"> <Image
      src="/Images/mr-10.jpg"
      alt="Event Image"
      width={300}
      height={150}
      className="w-full duration-500  hover:scale-110     h-44 rounded-lg object-cover shadow-md"
    /></div>
    <div className="mt-4">
      <h2 className="text-xl font-bold text-blue-950">ময়মনসিংহ-কিশোরগঞ্জ রোড মার্চ এর উদ্বোধনীতে রশিদুজ্জামান মিল্লাত এর বক্তব্য  </h2>
      <p className="text-sm mt-2">
      অবৈধ সরকারের পদত্যাগ ও সংসদ বিলুপ্ত করে নির্দলীয় নিরপেক্ষ সরকারের অধীনে নির্বাচন এবং দেশনেত্রী বেগম <Link href="/events/event-details/"><button className='text-blue-500'>আরও-দেখুন...</button></Link>
      </p>
      <div className="mt-3 text-sm opacity-80 lg:flex flex-row justify-between item-center text-black ">

     <div className='flex gap-1 items-center'>
     <span ><FaCalendar /></span><p><strong>Date:</strong> ১ অক্টোবর ২০২৩, রবিবার</p>
     </div>
     <div className='flex gap-1 items-center'>
     <span ><FaLocationDot /></span><p><strong>Location:</strong> ১ অক্টোবর ২০২৩, রবিবার</p>
     </div>
     
     </div>
      
    </div>
  </div>
</div>
                {/* card-3  */}
    <div className="md:max-w-[520px] max-w-[300px]  mx-10  mb-10 lg:h-[380px] rounded-xl shadow-lg ">
  <div className="p-5">
   <div className="overflow-hidden"> <Image
      src="/Images/mr-10.jpg"
      alt="Event Image"
      width={300}
      height={150}
      className="w-full duration-500  hover:scale-110   h-44 rounded-lg object-cover shadow-md"
    /></div>
    <div className="mt-4">
      <h2 className="text-xl font-bold text-blue-950">ময়মনসিংহ-কিশোরগঞ্জ রোড মার্চ এর উদ্বোধনীতে রশিদুজ্জামান মিল্লাত এর বক্তব্য  </h2>
      <p className="text-sm mt-2">
      অবৈধ সরকারের পদত্যাগ ও সংসদ বিলুপ্ত করে নির্দলীয় নিরপেক্ষ সরকারের অধীনে নির্বাচন এবং দেশনেত্রী বেগম <Link href="/events/event-details/"><button className='text-blue-500'>আরও-দেখুন...</button></Link>
      </p>
      <div className="mt-3 text-sm opacity-80 lg:flex flex-row justify-between item-center text-black ">

     <div className='flex gap-1 items-center'>
     <span ><FaCalendar /></span><p><strong>Date:</strong> ১ অক্টোবর ২০২৩, রবিবার</p>
     </div>
     <div className='flex gap-1 items-center'>
     <span ><FaLocationDot /></span><p><strong>Location:</strong> ১ অক্টোবর ২০২৩, রবিবার</p>
     </div>
     
     </div>
      
    </div>
  </div>
</div>
                {/* card-4  */}
<div className="md:max-w-[520px] max-w-[300px]  mx-10  mb-10 lg:h-[380px] rounded-xl shadow-lg ">
  <div className="p-5">
   <div className="overflow-hidden"> <Image
      src="/Images/mr-10.jpg"
      alt="Event Image"
      width={300}
      height={150}
      className="w-full duration-500  hover:scale-110   h-44 rounded-lg object-cover shadow-md"
    /></div>
    <div className="mt-4">
      <h2 className="text-xl font-bold text-blue-950">ময়মনসিংহ-কিশোরগঞ্জ রোড মার্চ এর উদ্বোধনীতে রশিদুজ্জামান মিল্লাত এর বক্তব্য  </h2>
      <p className="text-sm mt-2">
      অবৈধ সরকারের পদত্যাগ ও সংসদ বিলুপ্ত করে নির্দলীয় নিরপেক্ষ সরকারের অধীনে নির্বাচন এবং দেশনেত্রী বেগম <Link href="/events/event-details/"><button className='text-blue-500'>আরও-দেখুন...</button></Link>
      </p>
      <div className="mt-3 text-sm opacity-80 lg:flex flex-row justify-between item-center text-black ">

     <div className='flex gap-1 items-center'>
     <span ><FaCalendar /></span><p><strong>Date:</strong> ১ অক্টোবর ২০২৩, রবিবার</p>
     </div>
     <div className='flex gap-1 items-center'>
     <span ><FaLocationDot /></span><p><strong>Location:</strong> ১ অক্টোবর ২০২৩, রবিবার</p>
     </div>
     
     </div>
      
    </div>
  </div>
</div>    
      </Marquee>
        
        </section>  



    </div>
  );
};

export default Events;