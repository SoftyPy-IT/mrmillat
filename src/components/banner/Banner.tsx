'use client'
import React from 'react';
import "../navbar/navbar.css"
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();


const Banner = () => {
  return (
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
      
      <source src="/Images/mr-video-1.mp4" type="video/mp4" />
  
    </video>

    {/* Banner Content */}
    <div className=' flex justify-center items-center lg:justify-start'>
    <div className="max-w-md lg:text-left px-10 md:top-[200px] top-40 text-center text-white absolute z-10 lg:ml-20">
     <h1 
     data-aos="fade-left"
     data-aos-delay="200"
     data-aos-duration="1000"
     className="mb-5 text-3xl lg:text-6xl font-bold ">M.R. MILLAT</h1>
      <p 
        data-aos="fade-left"
        data-aos-delay="400"
        data-aos-duration="1000"
      
      className="mb-5  md:text-xl">
      politician of  Bangladesh Nationalist Party and a former member of parliament for Jamalpur-1.
      </p>
    <Link 
      data-aos="fade-up"
      data-aos-delay="1000"
      data-aos-duration="1000"
    href='/about'><button className='hover-border-button '>About Me</button></Link>
     </div>
    </div>

    
  </div>

//     <div
//   className=" relative bg-[url(/Images/mr-15.jpg)] md:h-[600px] h-[400px] lg:min-h-screen bg-cover bg-center "
//  >
//    <div className="absolute inset-0 bg-black bg-opacity-20"></div>

//   
//   {/* <div className="text-neutral-content items-center justify-between gap-10 lg:gap-10 flex flex-col lg:flex-row-reverse  py-10 lg:py-0">

  

   
//   </div> */}
// </div>
  
  );
};

export default Banner;



