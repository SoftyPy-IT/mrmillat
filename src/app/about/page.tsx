'use client'
import Company from '@/components/company/Company';
import Image from 'next/image';
import React, { useState } from 'react';

const About = () => {
  const [showMore,setShowMore] = useState<boolean>(false);
  return (
    <div>
     {/* banner section  */}
     
   <div className="bg-[url(/Images/mr-10.jpg)]  h-[500px] bg-cover bg-center bg-fixed flex justify-center items-center relative py-8 px-3 lg:pb-14 ">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 w-full lg:w-1/3 text-center space-y-3 border-4 border-white py-8 bottom-16">
      

        {/* Title */}
        <h3 className="text-5xl font-bold text-white ">
           About Me
        </h3>

        {/* Description */}
        <p className="text-gray-100 text-xl">
        Use your right for right
        </p>

    
      </div>
    </div>

        {/* biography section  */}
 <section className='flex justify-center item-center '>
  
 <div className='lg:max-w-6xl max-w-[300px] md:max-w-[600px] bg-white lg:px-10 p-5 relative -top-32 shadow-xl'>
     <h3 className='text-4xl text-blue-950 font-bold text-center mb-5'>Biography</h3>
     <div className="overflow-hidden mb-8 w-full md:h-[400px] lg:h-[500px] h-[300px] relative"> <Image
      src="/Images/mr-8.jpg"
      alt="Event Image"
      width={1600}
      height={1600}
     className="w-full duration-500  hover:scale-110   h-full  object-cover shadow-md"
    /></div>

    {
      showMore?  
      <p>
      এম রশিদুজ্জামান মিল্লাত বাংলাদেশ জাতীয়তাবাদী দলের রাজনীতিবিদ। তিনি জামালপুর-১ (দেওয়ানগঞ্জ-বকশীগঞ্জ) আসনে ২০০১ সালে প্রথমবার এমপি নির্বাচিত হন।বর্তমান বাংলাদেশ জাতীয়তাবাদী দল বিএনপির কোষাধ্যক্ষ।এবং আমরা বিএনপি পরিবার সেলের উপদেষ্টা হিসেবে দায়িত্ব পালন করছেন।তিনি জামালপুর জেলা বিএনপির সাবেক সভাপতি।
      এম রশিদুজ্জামান মিল্লাত জামালপুর জেলার দেওয়ানগঞ্জ উপজেলায় জন্মগ্রহণ করেন।
      এম রশিদুজ্জামান মিল্লাত দেওয়ানগঞ্জ উপজেলা বিএনপির সভাপতি ও কেন্দ্রীয় কমিটির কোষাধ্যক্ষ।তিনি জামালপুর জেলা বিএনপির সাবেক সভাপতি ছিলেন।২০০১ সালে অষ্টম জাতীয় সংসদ সদস্য নির্বাচনে প্রথমবার অংশগ্রহণ করে সংসদ সদস্য নির্বাচিত হন।[১] ব্যাপকভাবে উন্নয়ন করাই দেওয়ানগঞ্জ-বকশিগঞ্জ উপজেলার সর্বস্তরের জনগনের নেতাই পরিনত হন।জামালপুর-১আসনের সবচেয়ে জনপ্রিয় নেতা মিল্লাত। তিনি উপজেলার বাহাদুরাবাদে পুরাতন ব্রহ্মপুত্র নদের উপর সেতু নির্মাণ করে,দেওয়ানগঞ্জ উপজেলা সদরের সাথে উত্তর অঞ্চল(উপজেলার উত্তরের ইউনিয়ন,বকশিগঞ্জ উপজেলা,কুড়িগ্রাম জেলার, রৌমারী চর রাজিবপুর) এর সাথে সরাসরি সড়ক ও রেলপথে রাজধানীর সাথে যোগাযোগ স্থাপনের ব্যাবস্থা করেন।
      এম রশিদুজ্জামান মিল্লাত বাংলাদেশ জাতীয়তাবাদী দলের রাজনীতিবিদ। তিনি জামালপুর-১ (দেওয়ানগঞ্জ-বকশীগঞ্জ) আসনে ২০০১ সালে প্রথমবার এমপি নির্বাচিত হন।বর্তমান বাংলাদেশ জাতীয়তাবাদী দল বিএনপির কোষাধ্যক্ষ।এবং আমরা বিএনপি পরিবার সেলের উপদেষ্টা হিসেবে দায়িত্ব পালন করছেন।তিনি জামালপুর জেলা বিএনপির সাবেক সভাপতি।
      এম রশিদুজ্জামান মিল্লাত জামালপুর জেলার দেওয়ানগঞ্জ উপজেলায় জন্মগ্রহণ করেন।
      এম রশিদুজ্জামান মিল্লাত দেওয়ানগঞ্জ উপজেলা বিএনপির সভাপতি ও কেন্দ্রীয় কমিটির কোষাধ্যক্ষ।তিনি জামালপুর জেলা বিএনপির সাবেক সভাপতি ছিলেন।২০০১ সালে অষ্টম জাতীয় সংসদ সদস্য নির্বাচনে প্রথমবার অংশগ্রহণ করে সংসদ সদস্য নির্বাচিত হন।[১] ব্যাপকভাবে উন্নয়ন করাই দেওয়ানগঞ্জ-বকশিগঞ্জ উপজেলার সর্বস্তরের জনগনের নেতাই পরিনত হন।জামালপুর-১আসনের সবচেয়ে জনপ্রিয় নেতা মিল্লাত। তিনি উপজেলার বাহাদুরাবাদে পুরাতন ব্রহ্মপুত্র নদের উপর সেতু নির্মাণ করে,দেওয়ানগঞ্জ উপজেলা সদরের সাথে উত্তর অঞ্চল(উপজেলার উত্তরের ইউনিয়ন,বকশিগঞ্জ উপজেলা,কুড়িগ্রাম জেলার, রৌমারী চর রাজিবপুর) এর সাথে সরাসরি সড়ক ও রেলপথে রাজধানীর সাথে যোগাযোগ স্থাপনের ব্যাবস্থা করেন।২০০১ সালে অষ্টম জাতীয় সংসদ সদস্য নির্বাচনে প্রথমবার অংশগ্রহণ করে সংসদ 

      <button onClick={()=>setShowMore(!showMore)} className='text-blue-500'>View Less</button>
      
      </p>
      :
      <p>
      এম রশিদুজ্জামান মিল্লাত বাংলাদেশ জাতীয়তাবাদী দলের রাজনীতিবিদ। তিনি জামালপুর-১ (দেওয়ানগঞ্জ-বকশীগঞ্জ) আসনে ২০০১ সালে প্রথমবার এমপি নির্বাচিত হন।বর্তমান বাংলাদেশ জাতীয়তাবাদী দল বিএনপির কোষাধ্যক্ষ।এবং আমরা বিএনপি পরিবার সেলের উপদেষ্টা হিসেবে দায়িত্ব পালন করছেন।তিনি জামালপুর জেলা বিএনপির সাবেক সভাপতি।
      এম রশিদুজ্জামান মিল্লাত জামালপুর জেলার দেওয়ানগঞ্জ উপজেলায় জন্মগ্রহণ করেন।
      এম রশিদুজ্জামান মিল্লাত দেওয়ানগঞ্জ উপজেলা বিএনপির সভাপতি ও কেন্দ্রীয় কমিটির কোষাধ্যক্ষ।তিনি জামালপুর জেলা বিএনপির সাবেক সভাপতি ছিলেন।
      <span onClick={()=>setShowMore(!showMore)} className='text-blue-500'>...View More</span>
      </p>
    }
   
    </div>
  </section>  

          {/* mission and vission section  */}
  <section className='flex flex-col items-center justify-center  md:gap-0 '>

                   {/* mission  */}
  <div className='flex flex-col md:flex-row justify-between items-center  md:gap-0 max-w-6xl bg-gray-200 py-14 md:py-0'>
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



                       {/* vission  */}

  <div className='flex flex-col md:flex-row-reverse md:justify-start justify-between items-center py-14 md:py-0  gap-5  md:gap-0  max-w-6xl  bg-gray-200 mb-20'>
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
  </section>


                         {/* Company  */}

   <div>
  <Company/>
   </div>






    </div>
  );
};

export default About;