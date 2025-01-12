import RelatedEvents from "@/components/event/RelatedEvents";
import ShareButtons from "@/components/event/ShareButtons";
import { TEvent } from "@/types/types";
import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import { FaCalendar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";


export default async function EventDetails({params}:{params:{id:string}}){
  const eventId = params?.id;

  let event:TEvent|null = null;
  try {
  const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_API_URL}/events/${eventId}`); 
   event = response?.data?.data; 

} catch (error) {
  console.error('Error fetching the data:', error);
}

if(!event){
  return <div className="text-center my-56">Event not found</div>;
}

console.log(event);

const shareUrl=`https://mrmillat.com/events/${eventId}`
const title = event?.title;
const description=event?.shortDescription;

return(
  <>
  <Head>
  <title>{event?.title}</title>
  <meta property="og:url" content={shareUrl} />
  <meta property="og:type" content="website" />
  <meta property="og:image" content={event?.imageUrl} />
  <meta property="og:title" content={event?.title} />
  <meta property="og:description" content={event?.shortDescription} />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={event?.title} />
  <meta name="twitter:description" content={event?.shortDescription} />
  <meta name="twitter:image" content={event?.imageUrl} />
 </Head>

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
<p className="text-sm my-10">
    {event?.shortDescription}
      </p>   
<div dangerouslySetInnerHTML={{__html:event?.description}} >
 </div>   
    
 <div className="mt-24">
 <ShareButtons description={description} title={title} shareUrl={shareUrl}/> 
 </div>

 </div>
   </div>

</div>




</div>

<RelatedEvents/>
  </>
)


}

{/* 
// 'use client'
// import EventCardItem  from '@/components/event/EventItemCart';
// import useAxiosPublic from '@/hooks/useAxiosPublic';
// import { TEvent } from '@/types/types';
// import { useSwipeable } from "react-swipeable";
// import Image from 'next/image';
// import React, { useEffect, useState } from 'react';
// import Marquee from 'react-fast-marquee';
// import { FaCalendar } from 'react-icons/fa';
// import { FaLocationDot } from 'react-icons/fa6';
// import axios from 'axios';

// const EventDetails = ({event}:{event:TEvent}) => { */}
//   const axiosPublic = useAxiosPublic();
//   const limit = 10;
//   const [events, setEvents] = useState([]);

//   useEffect(() => {
//     const getData = async () => {
//       try {
//         const response = await axiosPublic.get(`events?type=previous&limit=${limit}`);
//         const {data}= response?.data?.data
//         setEvents(data);
//       } catch (error) {
//         console.error('Error fetching the data:', error);
//       }
//     };

//     getData();
//   }, [axiosPublic]);


  
//     const [direction, setDirection] = useState<"left" | "right">("left");
  
//     const handlers = useSwipeable({
//       onSwipedLeft: () => setDirection("left"),
//       onSwipedRight: () => setDirection("right"),
//       preventScrollOnSwipe: true,
//       trackMouse: true,
//     });
  

  
//   if (!event) {
//     return <div className='text-center my-10'>Loading...</div>;
//   }
//    console.log(event);
//   return (
// <div className='w-full   bg-white flex justify-center items-center'>
// <div className=" container">
//   <div className="px-5 pb-10">
//     <div className='md:h-[500px] h-[300px] relative'>
//     <Image src={event?.imageUrl}  layout="fill"  objectFit="cover" alt='photo' ></Image>
    
//     </div>
//     <div className="mt-10 lg:mx-10 mx-5">
//       <h2 className="text-xl font-bold text-blue-950">{event?.title}</h2>
//       <div className="mt-3 text-sm opacity-80 lg:flex flex-row justify-between item-center   px-8 ">

// <div className='flex gap-1 items-center '>
// <span ><FaCalendar /></span><p className='text-black'><strong>Date:</strong>{new Date(event?.date).toDateString()}</p>
// </div>
// <div className='flex gap-1 items-center'>
// <span ><FaLocationDot /></span><p className='text-black'><strong>Location:</strong> {event?.location}</p>
// </div>
// </div>
// <p className="text-sm my-10">
//     {event?.shortDescription}

//       </p>
      
// <div dangerouslySetInnerHTML={{__html:event?.description}} >
// </div>   
    
//       <button className='hover-border-button mt-6'>Share</button>    
//     </div>
//   </div>


//   {/* Related Events section  */}
            
         
// <h3 className='text-4xl font-bold my-10 text-center text-blue-950'>Latest Events</h3>
// <section className="mb-20 " {...handlers}>
//       <Marquee className='h-auto overflow-hidden' pauseOnHover={true} direction={direction}>
//         {events?.map((event: TEvent) => (
//           <div className="mx-5" key={event._id}>
//             <EventCardItem event={event} />
//           </div>
//         ))}
//       </Marquee>
//     </section>
// </div>
// </div>
//   );
// };



// export async function getServerSideProps({ params }: { params: { id: string } }){
//  const eventId=params?.id;
 
//  try {
//   const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_API_URL}/events/${eventId}`); 
//   const event = response?.data?.data; 

// return {
//   props:{event}
// }
// } catch (error) {
//   console.error('Error fetching the data:', error);

//   return {
//     notFound:true
//   }
// }


// }

// export default EventDetails;