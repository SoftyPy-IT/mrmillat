'use client'
import { Pagination, Stack } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ImageModal from './ImageModal';
import axios from 'axios';
import { MdOutlineFullscreen } from 'react-icons/md';




const Gallery = () => {
 const [images,setImages] = useState<Array<{ id: number; image: string; title: string }>>([]); 
 const [isHover,setIsHover] = useState<boolean>(false);
 const [openModal,setOpenModal] = useState<boolean>(false);

 useEffect(()=>{
  const getData = async () => {
    try {
      const response = await axios.get('/data/gallery.json'); 
      setImages(response.data);
    } catch (error) {
      console.error('Error fetching the data:', error);
    }
  };

  getData();

 },[])

console.log(images);

  return (
    <div >
      {
        openModal && <div ><ImageModal close={setOpenModal}/></div>
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
   <section
    data-aos="fade-up"
    data-aos-duration="2500"
   
   onClick={()=>setOpenModal(true)} className='flex items-center justify-center px-5'>
   <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2  items-center justify-around mb-8 mt-10 gap-8 max-w-6xl'>

  {
   images?.map(image=>
    <div key={image.id} className='overflow-hidden'>
      <MdOutlineFullscreen className='text-3xl text-white absolute z-10 ' />
    <div
    onMouseEnter={() => setIsHover(true)}
    onMouseLeave={() => setIsHover(false)}
    onTouchStart={() => setIsHover(true)}
    onTouchEnd={() => setIsHover(false)}
    style={{
      backgroundImage: `url(${image.image})`,
      backgroundSize: "100% 100%",
      backgroundPosition: "center",
    }}
    className={` w-[300px] h-[150px] md:w-[400px] md:h-[200px] bg-[length:100%_100%] bg-center relative hover:scale-[105%] transition-transform duration-500 lg:w-[600px] lg:h-[300px]`}
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
        isHover ? "bottom-5 opacity-100" : "bottom-[-40px] opacity-0"
      }`}
    >
      M Rashedulzamman Millat
    </h1>
  </div>
      </div>   

   )

  }
         
             

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