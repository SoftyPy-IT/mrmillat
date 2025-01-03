'use client'
import Biography from '@/components/Biography';
import Company from '@/components/company/Company';
import HeroSection from '@/components/HeroSection';
import JourneyToPolitics from '@/components/JourneyToPolitics/JourneyToPolitics';
import Mission from '@/components/Mission';
import Vision from '@/components/Vision';



const About = () => {
 
  return (
    <div className='bg-white'>
     {/* banner section  */}
     <HeroSection imageUrl={'/Images/mr-10.jpg'} title={'About Me'} subTitle={'     Use your right for right'}/>   
   
        {/* biography section  */}
 <Biography/>


                {/* Journey to politics  */}
  <section>
    <JourneyToPolitics/>
    
    </section>              
 


          {/* mission and vission section  */}
  <section className='flex flex-col items-center justify-center  md:gap-0 bg-[url(/Images/bg-1.gif)] bg-cover bg-center py-20'>

                   {/* mission  */}
  
<Mission/>


                       {/* vission  */}
<Vision/>
 
  </section>


                         {/* Company  */}

   <div>
  <Company/>
   </div>






    </div>
  );
};

export default About;