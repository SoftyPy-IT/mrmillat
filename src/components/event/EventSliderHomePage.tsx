'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination,Autoplay } from 'swiper/modules';
import { useEffect, useState } from 'react';
import EventCard, { Event } from './eventCard';
import axios from 'axios';


const EventSliderHomePage = () => {
  const [events,setEvents] = useState<Event[]>([]);
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
    <div className='mt-20'>
      <>
    <section>
        <h3 className='text-4xl font-bold text-center text-blue-950 my-10'>Recent News</h3>
    <Swiper
        key={events.length}
        effect={'coverflow'}
        autoplay={{
          delay: 2000,
          disableOnInteraction: true,
        }}
        loop={true}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={2}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper mb-20"
        breakpoints={{
          // When window width is >= 1024px (desktop)
          1024: {
            slidesPerView: 2,
            centeredSlides: true,
          },
          // When window width is >= 768px (tablet)
          768: {
            slidesPerView: 2,
            centeredSlides: true,
          },
          // When window width is >= 640px (small tablets, large phones)
          640: {
            slidesPerView: 1,
            centeredSlides: true,
          },
          // When window width is >= 320px (small phones)
          320: {
            slidesPerView: 1,
            centeredSlides: true,
          },
        }}
      >

        {
          events?.map((event:Event,i)=>
            <SwiperSlide key={i} className=' mb-16'>
            <EventCard event={event}></EventCard>
            </SwiperSlide>
          )
        }
        
       
      </Swiper>
    </section>
    </>
    </div>
  );
};

export default EventSliderHomePage;