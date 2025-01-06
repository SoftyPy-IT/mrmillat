'use client'
import EventCardItem  from '@/components/event/EventItemCart';
import useAxiosPublic from '@/hooks/useAxiosPublic';
import { TEvent } from '@/types/types';
import { useSwipeable } from "react-swipeable";
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';
import { FaCalendar } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';




const EventDetails = ({ params }: { params: { id: string } }) => {
  const axiosPublic = useAxiosPublic();
  const { id } = params; 
  const limit = 10;
  const [event, setEvent] = useState<TEvent|null>(null);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response1 = await axiosPublic.get(`events/${id}`); 
        const result = response1.data.data; 
        setEvent(result);
        console.log(result);
        const response2 = await axiosPublic.get(`events?type=previous&limit=${limit}`);
        const {data}= response2?.data?.data
        setEvents(data);
      } catch (error) {
        console.error('Error fetching the data:', error);
      }
    };

    getData();
  }, [id,axiosPublic]);


  
    const [direction, setDirection] = useState<"left" | "right">("left");
  
    const handlers = useSwipeable({
      onSwipedLeft: () => setDirection("left"),
      onSwipedRight: () => setDirection("right"),
      preventScrollOnSwipe: true,
      trackMouse: true,
    });
  

  
  if (!event) {
    return <div className='text-center my-10'>Loading...</div>;
  }
   console.log(event);
  return (
<div className='w-full   bg-white flex justify-center items-center'>
<div className=" container">
  <div className="px-5 pb-10">
    <div className='md:h-[500px] h-[300px] relative'>
    <Image src={event?.imageUrl}  layout="fill"  objectFit="cover" alt='photo' ></Image>
    
    </div>
    <div className="mt-10 lg:mx-10 mx-5">
      <h2 className="text-xl font-bold text-blue-950">{event?.title}</h2>
      <div className="mt-3 text-sm opacity-80 lg:flex flex-row justify-between item-center   px-8 ">

<div className='flex gap-1 items-center '>
<span ><FaCalendar /></span><p className='text-black'><strong>Date:</strong>{new Date(event?.date).toDateString()}</p>
</div>
<div className='flex gap-1 items-center'>
<span ><FaLocationDot /></span><p className='text-black'><strong>Location:</strong> {event?.location}</p>
</div>

</div>
      <p className="text-sm mt-10">
    {event?.description}
      </p>
    
      <button className='hover-border-button mt-6'>Share</button>    
    </div>
  </div>


  {/* Related Events section  */}
            
         
<h3 className='text-4xl font-bold my-10 text-center text-blue-950'>Latest Events</h3>
<section className="mb-20 " {...handlers}>
      <Marquee className='h-auto overflow-hidden' pauseOnHover={true} direction={direction}>
        {events?.map((event: TEvent) => (
          <div className="mx-5" key={event._id}>
            <EventCardItem event={event} />
          </div>
        ))}
      </Marquee>
    </section>
</div>
</div>
  );
};

export default EventDetails;