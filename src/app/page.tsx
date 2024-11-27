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

   <div className='flex justify-center items-center w-full'>
    <OurConcern/>
    </div>     

           {/* introductionVideo */}
      <div className='flex justify-center items-center'>
      <IntroductionVideo/>
      </div>
                     {/* our concern section  */}
               
   </section>
                   

                    {/* election Campaign */}
   <div >
   <ElectionCampaign/>
   </div>

                      {/* Voice of Media section  */}
   <div>
    <VoiceOnMedia/>
    </div>     

                     {/* event slider */}
   <EventSliderHomePage/>
                       
    </div>
  );
};

export default page;