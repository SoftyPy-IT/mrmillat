'use client'
import React, { useEffect, useState } from 'react';
import Marquee from "react-fast-marquee";
import { Pagination, Stack } from '@mui/material';
import axios from 'axios';
import EventCard, { Event } from '@/components/event/eventCard';


const Events = () => {
  const [events,setEvents] = useState([]);
  useEffect(()=>{
    const getData = async () => {
      try {
        const response = await axios.get('/data/events.json'); 
        setEvents(response.data);
      } catch (error) {
        console.error('Error fetching the data:', error);
      }
    };
  
    getData();
  
   },[])

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
    <section
     data-aos="fade-up"
     data-aos-duration="2500"
     className='flex  item-center justify-center'>
      
<div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 justify-between items-center gap-10'>
  
               
   {
    events?.map((event:Event)=><EventCard key={event.id} event={event}/>)
   }             
               
              
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
      <section className='mb-20'>
      <Marquee pauseOnHover={true}>
      {
    events?.map((event:Event)=><div className="mx-5" key={event.id}><EventCard   event={event}/></div>)
   }             
           
              
      </Marquee>
        
        </section>  



    </div>
  );
};

export default Events;