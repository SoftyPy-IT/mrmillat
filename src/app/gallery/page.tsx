'use client'
import { Pagination, Stack } from '@mui/material';
import React, { useState } from 'react';
import ImageModal from './ImageModal';

const Gallery = () => {
 const [isHover,setIsHover] = useState<boolean>(false);
 const [openModal,setOpenModal] = useState<boolean>(false);
  return (
    <div>
      {
        openModal? <div onClick={()=>setOpenModal(!openModal)}><ImageModal/></div>:''
      }
    
   {/* banner section  */}
     
   <div className="bg-[url(/Images/mr-15.jpg)]  h-[400px] bg-cover bg-center bg-fixed flex justify-center items-center relative py-8 px-3 lg:pb-14 ">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 w-full lg:w-1/3 text-center space-y-3 border-4 border-white py-8">
      

        {/* Title */}
        <h3 className="text-5xl font-bold text-white ">
           Gallery
        </h3>

        {/* Description */}
        <p className="text-gray-100 text-xl">
        Leadership, Experience, and values mean something
        </p>

    
      </div>
    </div>
   
           {/* Gallery container  */}
   <section onClick={()=>setOpenModal(!openModal)} className='flex items-center justify-center px-5'>
   <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center justify-around mb-8 mt-10 gap-8 max-w-5xl'>

      {/* gallery card 1  */}
      <div  className='overflow-hidden'>
      <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onTouchStart={() => setIsHover(true)}
      onTouchEnd={() => setIsHover(false)}
      className="bg-[url('/Images/mr-1.jpg')] h-[300px] w-[250px] bg-cover bg-center relative hover:scale-[105%] transition-transform duration-500  "
    >
      {/* Overlay */}
      <div
        className={`absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-500 ${
          isHover ? "opacity-100" : "opacity-0"
        }`}
      ></div>

      {/* Animated Text */}
      <h1
        className={`absolute px-5  text-lg font-semibold text-white transition-all duration-500 ${
          isHover ? "bottom-10 opacity-100" : "bottom-[-40px] opacity-0"
        }`}
      >
        M Rashedulzamman Millat
      </h1>
    </div>
        </div>         
               {/* gallery card 2  */}
      <div  className='overflow-hidden'>
      <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onTouchStart={() => setIsHover(true)}
      onTouchEnd={() => setIsHover(false)}
      className="bg-[url('/Images/mr-2.jpg')] h-[300px] w-[250px] bg-cover bg-center relative hover:scale-[105%] transition-transform duration-500  "
    >
      {/* Overlay */}
      <div
        className={`absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-500 ${
          isHover ? "opacity-100" : "opacity-0"
        }`}
      ></div>

      {/* Animated Text */}
      <h1
        className={`absolute px-5 text-lg font-semibold text-white transition-all duration-500 ${
          isHover ? "bottom-10 opacity-100" : "bottom-[-40px] opacity-0"
        }`}
      >
        M Rashedulzamman Millat
      </h1>
    </div>
        </div>         
               {/* gallery card 3  */}
      <div  className='overflow-hidden'>
      <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onTouchStart={() => setIsHover(true)}
      onTouchEnd={() => setIsHover(false)}
      className="bg-[url('/Images/mr-3.jpg')] h-[300px] w-[250px] bg-cover bg-center relative hover:scale-[105%] transition-transform duration-500  "
    >
      {/* Overlay */}
      <div
        className={`absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-500 ${
          isHover ? "opacity-100" : "opacity-0"
        }`}
      ></div>

      {/* Animated Text */}
      <h1
        className={`absolute px-5 text-lg font-semibold text-white transition-all duration-500 ${
          isHover ? "bottom-10 opacity-100" : "bottom-[-40px] opacity-0"
        }`}
      >
        M Rashedulzamman Millat
      </h1>
    </div>
        </div>         
               {/* gallery card 4  */}
      <div  className='overflow-hidden'>
      <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onTouchStart={() => setIsHover(true)}
      onTouchEnd={() => setIsHover(false)}
      className="bg-[url('/Images/mr-4.jpg')] h-[300px] w-[250px] bg-cover bg-center relative hover:scale-[105%] transition-transform duration-500  "
    >
      {/* Overlay */}
      <div
        className={`absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-500 ${
          isHover ? "opacity-100" : "opacity-0"
        }`}
      ></div>

      {/* Animated Text */}
      <h1
        className={`absolute px-5 text-lg font-semibold text-white transition-all duration-500 ${
          isHover ? "bottom-10 opacity-100" : "bottom-[-40px] opacity-0"
        }`}
      >
        M Rashedulzamman Millat
      </h1>
    </div>
        </div>         
               {/* gallery card 5  */}
      <div  className='overflow-hidden'>
      <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onTouchStart={() => setIsHover(true)}
      onTouchEnd={() => setIsHover(false)}
      className="bg-[url('/Images/mr-5.jpg')] h-[300px] w-[250px] bg-cover bg-center relative hover:scale-[105%] transition-transform duration-500  "
    >
      {/* Overlay */}
      <div
        className={`absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-500 ${
          isHover ? "opacity-100" : "opacity-0"
        }`}
      ></div>

      {/* Animated Text */}
      <h1
        className={`absolute px-5 text-lg font-semibold text-white transition-all duration-500 ${
          isHover ? "bottom-10 opacity-100" : "bottom-[-40px] opacity-0"
        }`}
      >
        M Rashedulzamman Millat
      </h1>
    </div>
        </div>         
               {/* gallery card 6  */}
      <div  className='overflow-hidden'>
      <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onTouchStart={() => setIsHover(true)}
      onTouchEnd={() => setIsHover(false)}
      className="bg-[url('/Images/mr-6.jpg')] h-[300px] w-[250px] bg-cover bg-center relative hover:scale-[105%] transition-transform duration-500  "
    >
      {/* Overlay */}
      <div
        className={`absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-500 ${
          isHover ? "opacity-100" : "opacity-0"
        }`}
      ></div>

      {/* Animated Text */}
      <h1
        className={`absolute px-5 text-lg font-semibold text-white transition-all duration-500 ${
          isHover ? "bottom-10 opacity-100" : "bottom-[-40px] opacity-0"
        }`}
      >
        M Rashedulzamman Millat
      </h1>
    </div>
        </div>         
               {/* gallery card 7  */}
      <div  className='overflow-hidden'>
      <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onTouchStart={() => setIsHover(true)}
      onTouchEnd={() => setIsHover(false)}
      className="bg-[url('/Images/mr-7.jpg')] h-[300px] w-[250px] bg-cover bg-center relative hover:scale-[105%] transition-transform duration-500  "
    >
      {/* Overlay */}
      <div
        className={`absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-500 ${
          isHover ? "opacity-100" : "opacity-0"
        }`}
      ></div>

      {/* Animated Text */}
      <h1
        className={`absolute px-5 text-lg font-semibold text-white transition-all duration-500 ${
          isHover ? "bottom-10 opacity-100" : "bottom-[-40px] opacity-0"
        }`}
      >
        M Rashedulzamman Millat
      </h1>
    </div>
        </div>         
               {/* gallery card 8 */}
      <div  className='overflow-hidden'>
      <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onTouchStart={() => setIsHover(true)}
      onTouchEnd={() => setIsHover(false)}
      className="bg-[url('/Images/mr-8.jpg')] h-[300px] w-[250px] bg-cover bg-center relative hover:scale-[105%] transition-transform duration-500  "
    >
      {/* Overlay */}
      <div
        className={`absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-500 ${
          isHover ? "opacity-100" : "opacity-0"
        }`}
      ></div>

      {/* Animated Text */}
      <h1
        className={`absolute px-5 text-lg font-semibold text-white transition-all duration-500 ${
          isHover ? "bottom-10 opacity-100" : "bottom-[-40px] opacity-0"
        }`}
      >
        M Rashedulzamman Millat
      </h1>
    </div>
        </div>         
               {/* gallery card 9  */}
      <div  className='overflow-hidden'>
      <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onTouchStart={() => setIsHover(true)}
      onTouchEnd={() => setIsHover(false)}
      className="bg-[url('/Images/mr-9.jpg')] h-[300px] w-[250px] bg-cover bg-center relative hover:scale-[105%] transition-transform duration-500  "
    >
      {/* Overlay */}
      <div
        className={`absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-500 ${
          isHover ? "opacity-100" : "opacity-0"
        }`}
      ></div>

      {/* Animated Text */}
      <h1
        className={`absolute px-5 text-lg font-semibold text-white transition-all duration-500 ${
          isHover ? "bottom-10 opacity-100" : "bottom-[-40px] opacity-0"
        }`}
      >
        M Rashedulzamman Millat
      </h1>
    </div>
        </div>         
               {/* gallery card 10  */}
      <div  className='overflow-hidden'>
      <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onTouchStart={() => setIsHover(true)}
      onTouchEnd={() => setIsHover(false)}
      className="bg-[url('/Images/mr-3.jpg')] h-[300px] w-[250px] bg-cover bg-center relative hover:scale-[105%] transition-transform duration-500  "
    >
      {/* Overlay */}
      <div
        className={`absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-500 ${
          isHover ? "opacity-100" : "opacity-0"
        }`}
      ></div>

      {/* Animated Text */}
      <h1
        className={`absolute px-5 text-lg font-semibold text-white transition-all duration-500 ${
          isHover ? "bottom-10 opacity-100" : "bottom-[-40px] opacity-0"
        }`}
      >
        M Rashedulzamman Millat
      </h1>
    </div>
        </div>         
               {/* gallery card 11  */}
      <div  className='overflow-hidden'>
      <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onTouchStart={() => setIsHover(true)}
      onTouchEnd={() => setIsHover(false)}
      className="bg-[url('/Images/mr-2.jpg')] h-[300px] w-[250px] bg-cover bg-center relative hover:scale-[105%] transition-transform duration-500  "
    >
      {/* Overlay */}
      <div
        className={`absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-500 ${
          isHover ? "opacity-100" : "opacity-0"
        }`}
      ></div>

      {/* Animated Text */}
      <h1
        className={`absolute px-5 text-lg font-semibold text-white transition-all duration-500 ${
          isHover ? "bottom-10 opacity-100" : "bottom-[-40px] opacity-0"
        }`}
      >
        M Rashedulzamman Millat
      </h1>
    </div>
        </div>         
               {/* gallery card 12  */}
      <div  className='overflow-hidden'>
      <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onTouchStart={() => setIsHover(true)}
      onTouchEnd={() => setIsHover(false)}
      className="bg-[url('/Images/mr-1.jpg')] h-[300px] w-[250px] bg-cover bg-center relative hover:scale-[105%] transition-transform duration-500  "
    >
      {/* Overlay */}
      <div
        className={`absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-500 ${
          isHover ? "opacity-100" : "opacity-0"
        }`}
      ></div>

      {/* Animated Text */}
      <h1
        className={`absolute px-5 text-lg font-semibold text-white transition-all duration-500 ${
          isHover ? "bottom-10 opacity-100" : "bottom-[-40px] opacity-0"
        }`}
      >
        M Rashedulzamman Millat
      </h1>
    </div>
        </div>         
             

   </div>
   </section>

    {/* pagination buttons */}
    <div className='flex item-center justify-center mt-5 mb-20'>
   <Stack spacing={2}>
     
     <Pagination count={10} color="primary" />
    
   </Stack>
   </div>

    </div>
  );
};

export default Gallery;