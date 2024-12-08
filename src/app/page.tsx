import ArticleSectionHomePage from '@/components/Article/ArticleSectionHomePage';
import Banner from '@/components/banner/Banner';
import ElectionCampaign from '@/components/electionCampaign/ElectionCampaign';
import EventSliderHomePage from '@/components/event/EventSliderHomePage';
import IntroductionVideo from '@/components/introductionVideo/IntroductionVideo';
import OurConcern from '@/components/OurConcern';
import VoiceOnMedia from '@/components/VoiceOnMedia';
import React from 'react';


const page = () => {
  return (
      
    <div >
      
       
                  {/* banner */}
      <Banner/>

   <section className='bg-[url(/Images/bg-1.gif)] bg-cover bg-center py-20'>

                       {/* our concern section  */}
   <div className='flex justify-center items-center w-full'>
    <OurConcern/>
    </div>     
   
                   {/* introductionVideo */}
      <div className='flex justify-center items-center'>
      <IntroductionVideo/>
      </div>
                    
               
   </section>
                   

                    {/* election Campaign */}
   <div >
   <ElectionCampaign/>
   </div>

                    

                     {/* event slider */}
   <EventSliderHomePage/>

                      {/* articles  */}
   <div>
    <ArticleSectionHomePage/>
   </div>



     {/* Voice of Media section  */}
     <div>
    <VoiceOnMedia/>
    </div>     
                       
    </div>
  );
};

export default page;