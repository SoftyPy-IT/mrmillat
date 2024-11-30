import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IoCheckmarkDoneSharp } from 'react-icons/io5';





const OurConcern = () => {
  return (
    <div
    
    data-aos="fade-up"
    data-aos-delay="500"
    data-aos-duration="1500"
    className='flex flex-col lg:flex-row-reverse gap-8 items-center justify-center w-full lg:max-w-6xl my-16 px-3'>
         
               {/* content  */}
  <div className='space-y-5 p-5 w-full lg:w-1/3 text-center lg:text-left'>
  <h4 className='text-orange-500 font-semibold'>Our Concern Issues</h4>
  <h2 className='text-4xl font-bold text-blue-900'>Right leader at right time for the right reason</h2>
  <p>
  Parturient dis torquent nostra mattis congue ut sagittis nibh luctus viverra. Enim convallis tristique magna torquent egestas dictumst consectetur. Malesuada mus dictumst orci litora nisl iaculis duis nostra enim vestibulum.
  </p>
  <Link href={'/events'}><button className='hover-border-button mt-6'>More Program</button></Link>
        </div> 

                  {/* image */}
          <div className=' lg:w-1/3'>
              <Image src={'/Images/mr-7.jpg'} alt='image' width={300} height={400}
              className='object-cover md:w-[400px] md:h-[400px]' ></Image>
           </div>


            {/* program */}
       <div className='flex flex-col gap-4  w-full lg:w-1/3'>
       <div className='px-8 py-2 border-l-2 border-blue-700 flex items-center gap-3 hover:bg-blue-600 '>
         <h3 className='font-semibold text-xl text-blue-950 hover:text-white'> Education System</h3>
         <IoCheckmarkDoneSharp className='text-3xl text-orange-500' />
        </div>
       <div className='px-8 py-2 border-l-2 border-blue-700 flex items-center gap-3 hover:bg-blue-600 '>
         <h3 className='font-semibold text-xl text-blue-950 hover:text-white'> Public Health Issues</h3>
         <IoCheckmarkDoneSharp className='text-3xl text-orange-500' />
        </div>
       <div className='px-8 py-2 border-l-2 border-blue-700 flex items-center gap-3 hover:bg-blue-600 '>
         <h3 className='font-semibold text-xl text-blue-950 hover:text-white'> Corruption Issues</h3>
         <IoCheckmarkDoneSharp className='text-3xl text-orange-500' />
        </div>
       <div className='px-8 py-2 border-l-2 border-blue-700 flex items-center gap-3 hover:bg-blue-600 '>
         <h3 className='font-semibold text-xl text-blue-950 hover:text-white'> Public Transportation</h3>
         <IoCheckmarkDoneSharp className='text-3xl text-orange-500' />
        </div>
       <div className='px-8 py-2 border-l-2 border-blue-700 flex items-center gap-3 hover:bg-blue-600 '>
         <h3 className='font-semibold text-xl text-blue-950 hover:text-white'> Climate Change Issues</h3>
         <IoCheckmarkDoneSharp className='text-3xl text-orange-500' />
        </div>
       <div className='px-8 py-2 border-l-2 border-blue-700 flex items-center gap-3 hover:bg-blue-600 '>
         <h3 className='font-semibold text-xl text-blue-950 hover:text-white'> Human Right & Law</h3>
         <IoCheckmarkDoneSharp className='text-3xl text-orange-500' />
        </div>
        
        </div>




    </div>
  );
};

export default OurConcern;