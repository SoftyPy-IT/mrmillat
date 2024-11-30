'use client'
import Biography from '@/components/Biography';
import Company from '@/components/company/Company';
import JourneyToPolitics from '@/components/JourneyToPolitics/JourneyToPolitics';
import Image from 'next/image';


const About = () => {
 
  return (
    <div>
     {/* banner section  */}
     
   <div className="bg-[url(/Images/mr-10.jpg)]   h-[500px] bg-cover bg-center bg-fixed flex justify-center items-center relative py-8 px-3 lg:pb-14 ">
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
 <Biography/>


                {/* Journey to politics  */}
  <section>
    <JourneyToPolitics/>
    
    </section>              
 


          {/* mission and vission section  */}
  <section className='flex flex-col items-center justify-center  md:gap-0 bg-[url(/Images/bg-1.gif)] bg-cover bg-center py-20'>

                   {/* mission  */}
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



                       {/* vission  */}

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
  </section>


                         {/* Company  */}

   <div>
  <Company/>
   </div>






    </div>
  );
};

export default About;