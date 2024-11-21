import Banner from '@/components/banner/Banner';
import ElectionCampaign from '@/components/electionCampaign/ElectionCampaign';
import IntroductionVideo from '@/components/introductionVideo/IntroductionVideo';
import OurConcern from '@/components/OurConcern';
import VoiceOnMedia from '@/components/VoiceOnMedia';
import React from 'react';

const page = () => {
  return (
                  
    <div >

                  {/* banner */}
      <Banner/>

                     {/* introductionVideo */}
      <div className='flex justify-center items-center'>
      <IntroductionVideo/>
      </div>
                     {/* our concern section  */}
   <div className='flex justify-center items-center w-full'>
    <OurConcern/>
    </div>                  

                    {/* election Campaign */}
   <div >
   <ElectionCampaign/>
   </div>

                      {/* Voice of Media section  */}
   <div>
    <VoiceOnMedia/>
    </div>                   

                       
    </div>
  );
};

export default page;