'use client'
import useAxiosPublic from '@/hooks/useAxiosPublic';
import React, { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';
import EventCardItem from './EventItemCart';
import { TEvent } from '@/types/types';

const UpcomingEvents = () => {
  const axiosPublic = useAxiosPublic();
  const [events, setEvents] = useState([]);
  // const [totalCount,setTotalCount] = useState(0);

   useEffect(()=>{
      const getData =async()=>{
        try {
        const response = await axiosPublic.get(`events?type=upcoming`);
        const {totalCount,data}= response?.data?.data
        console.log(totalCount,data);
     setEvents(data);
    //  setTotalCount(totalCount);
        } catch (error) {
        console.log(error);  
        }
      
          }      
    getData();   
    },[axiosPublic])
  console.log(events);  
  return (
    <div>
    <section className='mb-20'>
      <Marquee pauseOnHover={true}>
      {
    events?.map((event:TEvent)=><div className="mx-5" key={event?._id}><EventCardItem   event={event}/></div>)
   }             
           
              
      </Marquee>
        
        </section>    
    </div>
  );
};

export default UpcomingEvents;