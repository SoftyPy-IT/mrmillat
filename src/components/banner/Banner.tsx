import Image from 'next/image';
import React from 'react';
import "../navbar/navbar.css"
import Link from 'next/link';

const Banner = () => {
  return (
    <div
  className="hero  relative"
  style={{
    backgroundImage: "url(/Images/about-us-banner-01-32ff.png)",
  }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="text-neutral-content items-center justify-between gap-10 lg:gap-10 flex flex-col lg:flex-row-reverse  py-10 lg:py-0">
  <div className='lg:w-[400px] md:w-[340px] md:h-[400px] w-[240px] h-[280px] lg:h-[500px] relative'>
   <Image src='/Images/mr-8.jpg' alt='banner' objectFit="cover"
          fill
    className="w-[300px] lg:w-[500px] object-cover"/>
    </div>
    <div className="max-w-md px-10 text-center lg:text-left">
      <h1 className="mb-5 text-3xl lg:text-6xl font-bold">M.R. MILLAT</h1>
      <p className="mb-5  md:text-xl">
      politician of  Bangladesh Nationalist Party and a former member of parliament for Jamalpur-1.
      </p>
     <Link href='/about'><button className='hover-border-button '>About Me</button></Link>
    </div>
  </div>
</div>
  
  );
};

export default Banner;