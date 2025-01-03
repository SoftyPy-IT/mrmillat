import Link from 'next/link';
import React from 'react';



const VoiceOnMedia = () => {
  return (
    <div className='my-32'>
           <h2 className='lg:text-4xl text-2xl md:text-3xl text-blue-950 text-center font-bold'>Voice On Media</h2>
        {/* media card container  */}
      
    <section
     data-aos="fade-up"
       data-aos-duration="1500"
    
    className='flex justify-center items-center'>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center mb-8 mt-10 gap-8'>
               {/* card 1 */}
      <div className='w-[305px] h-[350px] border-2 shadow-xl '>
      <iframe 
    width="300" 
    height="220" 
    src="https://www.youtube.com/embed/WIKrwWFZbLQ" 
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
      <iframe width="300" height="220" src="https://www.youtube.com/embed/EV4BffstKKY" title="‘শেখ হাসিনা পালিয়ে গেছে, তার দোসররা বসে নেই’ | M Rashiduzzaman Millat | BNP | Samakal" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>


       <h2 className='text-lg font-bold my-3 text-black px-5'>শেখ হাসিনা পালিয়ে গেছে, তার দোসররা বসে নেই’ | M Rashiduzzaman Millat | BNP | Samakal</h2>
      </div>
               {/* card 3 */}
      <div className='w-[305px] h-[350px] border-2 shadow-xl '>
  
      <iframe 
    width="300" 
    height="220" 
    src="https://www.youtube.com/embed/xHdh-wrcwCE" 
    title="বিতর্কের শেষ কোথায়? | এম রশিদুজ্জামান মিল্লাত | মাসুদ কামাল | News Hour" 
    frameBorder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    referrerPolicy="strict-origin-when-cross-origin" 
    allowFullScreen>
</iframe>


       <h2 className='text-lg font-bold my-3 text-black px-5'>বিতর্কের শেষ কোথায়? | এম রশিদুজ্জামান মিল্লাত | মাসুদ কামাল | News Hour</h2>
      </div>
      </div>

    </section>

     <div className='flex justify-center items-center mt-6'>
   <Link href={'/media'}>  <button className='hover-border-button mx-auto'>View More</button> </Link> 
      </div>  
    </div>
  );
};

export default VoiceOnMedia;