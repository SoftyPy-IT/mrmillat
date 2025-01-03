import Image from 'next/image';
import React from 'react';

const Mission = () => {
  return (
    <div
    data-aos="fade-down"
    data-aos-duration="1500"
  
  className='flex flex-col md:flex-row justify-between items-center  md:gap-0 max-w-6xl  py-14 md:py-0'>
        {/* image  */}
        <div className=' md:w-1/2'>
              <Image src={'/Images/mr-7.jpg'} alt='image' width={300} height={300}
              className='object-cover md:w-[600px] md:h-[600px]' ></Image>
           </div>
        {/* content  */}
  <div className='space-y-5 p-5 px-10 md:w-1/2'>
  <h4 className='text-orange-500 font-semibold'>Mission</h4>
  <h2 className='text-4xl font-bold text-blue-900'>It’s time for a change. Vote us</h2>
  <p>
  Parturient dis torquent nostra mattis congue ut sagittis nibh luctus viverra. Enim convallis tristique magna torquent egestas dictumst consectetur. Malesuada mus dictumst orci litora nisl iaculis duis nostra enim vestibulum.
  Parturient dis torquent nostra mattis congue ut sagittis nibh luctus viverra. Enim convallis tristique magna torquent egestas dictumst consectetur. Malesuada mus dictumst orci litora nisl iaculis duis nostra enim vestibulum.
  </p>

        </div>
   </div>
  );
};

export default Mission;