'use client'
import EventCardItem, { Event } from '@/components/event/EventItemCart';
import axios from 'axios';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';
import { FaCalendar } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';

const EventDetails = ({ params }: { params: { id: string } }) => {
  const { id } = params; 
  const [event, setEvent] = useState<Event|null>(null);
  const [events, setEvents] = useState<Event[]>([]);
   console.log(id);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get('/data/events.json'); 
        const result = response.data;
         setEvents(result);
        // Find the specific event by ID
        const matchedEvent = result.find((item: Event) => item.id === parseInt(id));
        setEvent(matchedEvent);
        console.log(matchedEvent);
      } catch (error) {
        console.error('Error fetching the data:', error);
      }
    };

    getData();
  }, [id]);
  
  if (!event) {
    return <div>Loading...</div>;
  }
   console.log(event);
  return (
    <div className="w-full   bg-white">
  <div className="px-5 pb-10">
    <div className='md:h-[500px] h-[300px] relative'>
    <Image src={event?.image}  layout="fill"  objectFit="cover" alt='shourav group' ></Image>
    
    </div>
    <div className="mt-4">
      <h2 className="text-xl font-bold text-blue-950">{event?.title}</h2>
      <div className="mt-3 text-sm opacity-80 lg:flex flex-row justify-between item-center   px-8 ">

<div className='flex gap-1 items-center '>
<span ><FaCalendar /></span><p className='text-black'><strong>Date:</strong>{event?.date}</p>
</div>
<div className='flex gap-1 items-center'>
<span ><FaLocationDot /></span><p className='text-black'><strong>Location:</strong> {event?.location}</p>
</div>

</div>
      <p className="text-sm mt-2">
    {event?.description}
      </p>
    
      <button className='hover-border-button mt-6'>Share</button>    
    </div>
  </div>


  {/* Related Events section  */}
            
         
<h3 className='text-4xl font-bold my-10 text-center text-blue-950'>Latest Events</h3>
      <section className='mb-20'>
      <Marquee pauseOnHover={true}>
      {
    events?.map((event:Event)=><div className="mx-5" key={event.id}><EventCardItem   event={event}/></div>)
   }             
           
              
      </Marquee>
        
        </section>  
</div>
  );
};

export default EventDetails;