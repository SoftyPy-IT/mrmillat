'use client'
import React, { useEffect, useState } from 'react';
import Marquee from "react-fast-marquee";
import { Pagination, Stack } from '@mui/material';
import axios from 'axios';
import EventCardItem, { Event } from '@/components/event/EventItemCart';
import HeroSection from '@/components/HeroSection';


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
    <div className='bg-white'>
               {/* banner section  */}
     <HeroSection imageUrl={'/Images/mr-23.jpg'} title={'Events'} subTitle={'Leadership, Experience, and values mean something'}/>

       {/* Event Highlights section  */}
    <h3 className='text-4xl font-bold my-10 text-center text-blue-950'>Event Highlights</h3>
    <section
     data-aos="fade-up"
     data-aos-duration="2500"
     className='flex  item-center justify-center'>
      
<div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 justify-between items-center gap-10'>
  
               
   {
    events?.map((event:Event)=><EventCardItem key={event.id} event={event}/>)
   }             
               
              
</div>


      </section>  

      {/* pagination buttons */}
    <div className='flex item-center justify-center mb-20 mt-16'>
   <Stack spacing={2}>
     
     <Pagination count={10} color="primary" />
    
   </Stack>
   </div>

            {/* Up Coming Events section  */}
            
         
<h3 className='text-4xl font-bold my-10 text-center text-blue-950'>Up Comming Events</h3>
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

export default Events;


// // pages/events.tsx
// import React from 'react';

// export async function getServerSideProps(context: any) {
//   const upcomingRes = await fetch('https://api.example.com/events?type=upcoming');
//   const upcomingEvents = await upcomingRes.json();

//   const pastRes = await fetch('https://api.example.com/events?type=past');
//   const pastEvents = await pastRes.json();

//   return {
//     props: {
//       upcomingEvents, // Pass upcoming events to the component
//       pastEvents,     // Pass past events to the component
//     },
//   };
// }

// type Event = {
//   id: string;
//   title: string;
//   description: string;
//   eventDate: string;
// };

// const EventsPage = ({ upcomingEvents, pastEvents }: { upcomingEvents: Event[]; pastEvents: Event[] }) => {
//   return (
//     <div>
//       <h1>Upcoming Events</h1>
//       <ul>
//         {upcomingEvents.length > 0 ? (
//           upcomingEvents.map((event) => (
//             <li key={event.id}>
//               <h2>{event.title}</h2>
//               <p>{event.description}</p>
//               <p>{new Date(event.eventDate).toDateString()}</p>
//             </li>
//           ))
//         ) : (
//           <p>No upcoming events.</p>
//         )}
//       </ul>

//       <h1>Past Events</h1>
//       <ul>
//         {pastEvents.length > 0 ? (
//           pastEvents.map((event) => (
//             <li key={event.id}>
//               <h2>{event.title}</h2>
//               <p>{event.description}</p>
//               <p>{new Date(event.eventDate).toDateString()}</p>
//             </li>
//           ))
//         ) : (
//           <p>No past events.</p>
//         )}
//       </ul>
//     </div>
//   );
// };

// export default EventsPage;
