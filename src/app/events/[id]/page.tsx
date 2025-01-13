import React from "react";
import axios from "axios";
import Image from "next/image";
import { FaCalendar, FaLocationDot } from "react-icons/fa6";
import RelatedEvents from "@/components/event/RelatedEvents";
import ShareButtons from "@/components/event/ShareButtons";
import { TEvent } from "@/types/types";
import type { Metadata } from "next";
import { notFound } from "next/navigation";


type EventDetailsProps = {
  params: {
    id: string;
  };
};


async function fetchEvent(id: string): Promise<TEvent | null> {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_API_URL}/events/${id}`);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching event data:", error);
    return null; 
  }
}



export async function generateMetadata({ params }: EventDetailsProps): Promise<Metadata> {
  const event = await fetchEvent(params.id);
   
  return {
    title: event?.title || "Default Event Title",
    description: event?.shortDescription || "Default Event Description",
    openGraph: {
      type: "website",
      title: event?.title || "Default Event Title",
      description: event?.shortDescription || "Default Event Description",
      url: `https://mrmillat.com/events/${params?.id}`,
      images: event?.imageUrl ? [{ url: event.imageUrl }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: event?.title || "Default Event Title",
      description: event?.shortDescription || "Default Event Description",
      images: event?.imageUrl ? [event.imageUrl] : [],
    },
  };
  

}

// Event Details Page
export default async function EventDetails({ params }: EventDetailsProps) {
  const event = await fetchEvent(params?.id);
  console.log(event);
  // Ensure proper fallback if no event is found
  if (!event) {
    notFound();
  }
  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
 

  return (
    <div className="w-full bg-white flex justify-center items-center">
      <div className="container">
        <div className="px-5 pb-10">
          {/* Event Image */}
          <div className="md:h-[500px] h-[300px] relative">
            <Image src={event.imageUrl} layout="fill" objectFit="cover" alt={event.title} />
          </div>

          <div className="mt-10 lg:mx-10 mx-5">
            <h2 className="text-xl font-bold text-blue-950">{event.title}</h2>

            {/* Event Date and Location */}
            <div className="mt-3 text-sm opacity-80 lg:flex flex-row justify-between item-center px-8">
              <div className="flex gap-1 items-center">
                <span>
                  <FaCalendar />
                </span>
                <p className="text-black">
                  <strong>Date:</strong> {new Date(event.date).toDateString()}
                </p>
              </div>
              <div className="flex gap-1 items-center">
                <span>
                  <FaLocationDot />
                </span>
                <p className="text-black">
                  <strong>Location:</strong> {event.location}
                </p>
              </div>
            </div>

            {/* Event Short Description */}
            <p className="text-sm my-10">{event.shortDescription}</p>

            {/* Event Full Description */}
            <div dangerouslySetInnerHTML={{ __html: event.description }} />

            {/* Share Buttons */}
            <div className="mt-24">
              <ShareButtons shareUrl={shareUrl} title={event.title} quote={event.shortDescription} hashtag={`#${event.title}`} />
                  
            </div>
          </div>
        </div>
          {/* Related Events */}
      <RelatedEvents />
      </div>

    
    </div>
  );
}

