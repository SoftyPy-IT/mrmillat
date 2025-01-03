import Image from 'next/image';
import React from 'react';

const Vision = () => {
  return (
    <div
  data-aos="fade-up"
  data-aos-duration="1500"
  
  className='flex flex-col md:flex-row-reverse md:justify-start justify-between items-center py-14 md:py-0  gap-5  md:gap-0  max-w-6xl '>
        {/* image  */}
        <div className=' md:w-1/2'>
              <Image src={'/Images/mr-9.jpg'} alt='image' width={300} height={300}
              className='object-cover md:w-[600px] md:h-[600px]' ></Image>
           </div>
        {/* content  */}
  <div className='space-y-5 p-5 px-10 md:w-1/2'>
  <h4 className='text-orange-500 font-semibold'>Vission</h4>
  <h2 className='md:text-4xl text-2xl font-bold text-blue-900'>A fresh face, A fresh leader. A fresh start</h2>
  <p>
  Parturient dis torquent nostra mattis congue ut sagittis nibh luctus viverra. Enim convallis tristique magna torquent egestas dictumst consectetur. Malesuada mus dictumst orci litora nisl iaculis duis nostra enim vestibulum.
  </p>
  
        </div>
   </div>
  );
};

export default Vision;