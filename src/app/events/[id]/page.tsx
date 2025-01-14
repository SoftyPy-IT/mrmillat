import React from "react";

import type { Metadata } from "next";
import EventDetails from "@/components/event/EventDetails";
import { TEvent } from "@/types/types";

const page = () => {
  return (
    <>
      <EventDetails/>
    </>
  );
};

export default page;

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const baseApi = process.env.NEXT_PUBLIC_BASE_API_URL;
  const id = (await params).id;
  console.log(id);
  const res = await fetch(`${baseApi}/events/${id}`);
  const data = await res.json();
  const finalData:TEvent = data.data;
  return {
    title: `${finalData.title}`,
    description: finalData.shortDescription,
    openGraph: {
      images: [
        {
          url: finalData.imageUrl,
          width: 800,
          height: 600,
          alt: finalData.location,
        },
      ],
    },
  };
}




// import React from "react";
// import axios from "axios";
// import Image from "next/image";
// import { FaCalendar, FaLocationDot } from "react-icons/fa6";
// import RelatedEvents from "@/components/event/RelatedEvents";
// import ShareButtons from "@/components/event/ShareButtons";
// import { TEvent } from "@/types/types";
// import type { Metadata } from "next";
// import { notFound } from "next/navigation";


// type EventDetailsProps = {
//   params: {
//     id: string;
//   };
// };


// async function fetchEvent(id: string): Promise<TEvent | null> {
//   try {
//     const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_API_URL}/events/${id}`);
//     return response.data.data;
//   } catch (error) {
//     console.error("Error fetching event data:", error);
//     return null; 
//   }
// }



// export async function generateMetadata({ params }: EventDetailsProps): Promise<Metadata> {
//   const event = await fetchEvent(params.id);
   
//   return {
//     title: event?.title || "Default Event Title",
//     description: event?.shortDescription || "Default Event Description",
//     openGraph: {
//       type: "website",
//       title: event?.title || "Default Event Title",
//       description: event?.shortDescription || "Default Event Description",
//       url: `https://mrmillat.com/events/${params?.id}`,
//       images: event?.imageUrl ? [{ url: event.imageUrl }] : [],
//     },
//     twitter: {
//       card: "summary_large_image",
//       title: event?.title || "Default Event Title",
//       description: event?.shortDescription || "Default Event Description",
//       images: event?.imageUrl ? [event.imageUrl] : [],
//     },
//   };
  

// }

// // Event Details Page


