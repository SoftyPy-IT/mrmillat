"use client"
/* eslint-disable @typescript-eslint/no-explicit-any */

import React from 'react';
import "../navbar/navbar.css"
import Link from 'next/link';
import { TBanner } from '@/types/types';
import useFeatures from '@/hooks/useFeatures';
import Image from 'next/image';

type TBannerData ={
  banner:TBanner;
  isLoading:any;
}

const Banner = () => {
 const {banner,isLoading}:TBannerData = useFeatures();
 
  return (
 <div>
  {
       isLoading?
       <div className='w-full flex justify-center mt-28'>
            <Image alt='photo' src="/Images/loading.gif" height={600} width={800} className='w-[80px] h-[80px] '/>
           </div>
       :
      
      <div className="relative w-full h-[500px] lg:min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-30 z-10"></div>
   {/* Video Background */}
  
     <video
       className="absolute top-0 left-0 w-full h-full object-cover"
       autoPlay
       loop
       muted
       playsInline
     >
       
       <source src={banner?.videoUrl} type="video/mp4" />
   
     </video>

   

 
   {/* Banner Content */}
   <div className=' flex justify-center items-center lg:justify-start'>
   <div className="max-w-xl lg:text-left px-10 md:top-[30%] xl:top-[30%] 2xl:top-[40%] top-40 text-center text-white absolute z-10 lg:ml-20">
    <h1 
    data-aos="fade-left"
    data-aos-delay="200"
    data-aos-duration="1000"
    className="mb-5 text-3xl lg:text-6xl font-bold ">{banner?.name}</h1>
     <p 
       data-aos="fade-left"
       data-aos-delay="400"
       data-aos-duration="1000"
     
     className="mb-5  md:text-xl">
       politician of Bangladesh Nationalist Party and a former member of parliament for Jamalpur-1.
   {/* {
     banner?.designation
   } */}
     </p>
   <Link 
     data-aos="fade-up"
     data-aos-delay="1000"
     data-aos-duration="1000"
   href='/about'><button className='hover-border-button '>About Me</button></Link>
    </div>
   </div>

   
 </div>  
    }
    
 </div>


  
  );
};

export default Banner;



