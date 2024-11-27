'use client'
import React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


const Media = () => {
  return (
    <div>
           {/* banner section  */}
           <div className="bg-[url(/Images/mr-6.jpg)]  h-[400px] bg-cover bg-center bg-fixed flex justify-center items-center relative py-8 px-3 lg:pb-14">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 w-full lg:w-1/3 text-center space-y-3 border-4 border-white py-8">
      

        {/* Title */}
        <h3 className="text-5xl font-bold text-white ">
         Voice On Media
        </h3>

        {/* Description */}
        <p className="text-gray-100 text-xl">
        We are building for the future.
        </p>

    
      </div>
    </div>     




    <div className='my-10'>
           <h2 className='text-4xl text-blue-950 text-center font-bold'>Interviews</h2>



        {/* media card container  */}
 <div
  data-aos="fade-up"
  data-aos-duration="2500"
 
 className='flex justify-center item-center'>
 <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-around mb-8 mt-10 gap-8 '>
               {/* card 1 */}
      <div className='w-[305px] h-[350px] border-2 shadow-xl '>
      <iframe 
    width="300" 
    height="220" 
    src="https://www.youtube.com/embed/WIKrwWFZbLQ?autoplay=1&mute=1" 
    title="বিএনপির কোষাধ্যক্ষ হলেন মিল্লাত | NTV News" 
    frameBorder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    referrerPolicy="strict-origin-when-cross-origin" 
    allowFullScreen>
</iframe>


       <h2 className='text-lg font-bold my-3 text-black px-5'>বিএনপির কোষাধ্যক্ষ হলেন মিল্লাত | NTV News</h2>
      </div>
               {/* card 2 */}
      <div className='w-[305px] h-[350px] border-2 shadow-xl '>
      <iframe width="300" height="220" src="https://www.youtube.com/embed/EV4BffstKKY?autoplay=1&mute=1" title="‘শেখ হাসিনা পালিয়ে গেছে, তার দোসররা বসে নেই’ | M Rashiduzzaman Millat | BNP | Samakal" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>


       <h2 className='text-lg font-bold my-3 text-black px-5'>শেখ হাসিনা পালিয়ে গেছে, তার দোসররা বসে নেই’ | M Rashiduzzaman Millat | BNP | Samakal</h2>
      </div>
               {/* card 3 */}
      <div className='w-[305px] h-[350px] border-2 shadow-xl '>
  
      <iframe 
    width="300" 
    height="220" 
    src="https://www.youtube.com/embed/xHdh-wrcwCE?autoplay=1&mute=1" 
    title="বিতর্কের শেষ কোথায়? | এম রশিদুজ্জামান মিল্লাত | মাসুদ কামাল | News Hour" 
    frameBorder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    referrerPolicy="strict-origin-when-cross-origin" 
    allowFullScreen>
</iframe>


       <h2 className='text-lg font-bold my-3 text-black px-5'>বিতর্কের শেষ কোথায়? | এম রশিদুজ্জামান মিল্লাত | মাসুদ কামাল | News Hour</h2>
      </div>
               {/* card 4 */}
      <div className='w-[305px] h-[350px] border-2 shadow-xl '>
  
      <iframe 
    width="300" 
    height="220" 
    src="https://www.youtube.com/embed/xHdh-wrcwCE?autoplay=1&mute=1" 
    title="বিতর্কের শেষ কোথায়? | এম রশিদুজ্জামান মিল্লাত | মাসুদ কামাল | News Hour" 
    frameBorder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    referrerPolicy="strict-origin-when-cross-origin" 
    allowFullScreen>
</iframe>


       <h2 className='text-lg font-bold my-3 text-black px-5'>বিতর্কের শেষ কোথায়? | এম রশিদুজ্জামান মিল্লাত | মাসুদ কামাল | News Hour</h2>
      </div>
               {/* card 5 */}
      <div className='w-[305px] h-[350px] border-2 shadow-xl '>
  
      <iframe 
    width="300" 
    height="220" 
    src="https://www.youtube.com/embed/xHdh-wrcwCE?autoplay=1&mute=1" 
    title="বিতর্কের শেষ কোথায়? | এম রশিদুজ্জামান মিল্লাত | মাসুদ কামাল | News Hour" 
    frameBorder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    referrerPolicy="strict-origin-when-cross-origin" 
    allowFullScreen>
</iframe>


       <h2 className='text-lg font-bold my-3 text-black px-5'>বিতর্কের শেষ কোথায়? | এম রশিদুজ্জামান মিল্লাত | মাসুদ কামাল | News Hour</h2>
      </div>
               {/* card 6 */}
      <div className='w-[305px] h-[350px] border-2 shadow-xl '>
  
      <iframe 
    width="300" 
    height="220" 
    src="https://www.youtube.com/embed/xHdh-wrcwCE?autoplay=1&mute=1" 
    title="বিতর্কের শেষ কোথায়? | এম রশিদুজ্জামান মিল্লাত | মাসুদ কামাল | News Hour" 
    frameBorder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    referrerPolicy="strict-origin-when-cross-origin" 
    allowFullScreen>
</iframe>


       <h2 className='text-lg font-bold my-3 text-black px-5'>বিতর্কের শেষ কোথায়? | এম রশিদুজ্জামান মিল্লাত | মাসুদ কামাল | News Hour</h2>
      </div>
               {/* card 7 */}
      <div className='w-[305px] h-[350px] border-2 shadow-xl '>
  
      <iframe 
    width="300" 
    height="220" 
    src="https://www.youtube.com/embed/xHdh-wrcwCE?autoplay=1&mute=1" 
    title="বিতর্কের শেষ কোথায়? | এম রশিদুজ্জামান মিল্লাত | মাসুদ কামাল | News Hour" 
    frameBorder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    referrerPolicy="strict-origin-when-cross-origin" 
    allowFullScreen>
</iframe>


       <h2 className='text-lg font-bold my-3 text-black px-5'>বিতর্কের শেষ কোথায়? | এম রশিদুজ্জামান মিল্লাত | মাসুদ কামাল | News Hour</h2>
      </div>
               {/* card 8 */}
      <div className='w-[305px] h-[350px] border-2 shadow-xl '>
  
      <iframe 
    width="300" 
    height="220" 
    src="https://www.youtube.com/embed/xHdh-wrcwCE?autoplay=1&mute=1" 
    title="বিতর্কের শেষ কোথায়? | এম রশিদুজ্জামান মিল্লাত | মাসুদ কামাল | News Hour" 
    frameBorder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    referrerPolicy="strict-origin-when-cross-origin" 
    allowFullScreen>
</iframe>


       <h2 className='text-lg font-bold my-3 text-black px-5'>বিতর্কের শেষ কোথায়? | এম রশিদুজ্জামান মিল্লাত | মাসুদ কামাল | News Hour</h2>
      </div>
               {/* card 9 */}
      <div className='w-[305px] h-[350px] border-2 shadow-xl '>
  
      <iframe 
    width="300" 
    height="220" 
    src="https://www.youtube.com/embed/xHdh-wrcwCE?autoplay=1&mute=1" 
    title="বিতর্কের শেষ কোথায়? | এম রশিদুজ্জামান মিল্লাত | মাসুদ কামাল | News Hour" 
    frameBorder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    referrerPolicy="strict-origin-when-cross-origin" 
    allowFullScreen>
</iframe>


       <h2 className='text-lg font-bold my-3 text-black px-5'>বিতর্কের শেষ কোথায়? | এম রশিদুজ্জামান মিল্লাত | মাসুদ কামাল | News Hour</h2>
      </div>
      </section>

 </div>
   
               {/* pagination buttons */}
   <div className='flex item-center justify-center mt-5 mb-20'>
   <Stack spacing={2}>
     
     <Pagination count={10} color="primary" />
    
   </Stack>
   </div>


    </div> 
      
    </div>
  );
};

export default Media;