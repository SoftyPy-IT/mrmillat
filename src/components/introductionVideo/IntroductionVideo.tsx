import React from 'react';

const IntroductionVideo = () => {
  return (
   <div className='flex flex-col lg:flex-row justify-between items-center lg:gap-24 gap-10 my-20 max-w-6xl  '>
        {/* video  */}
    <div className='bg-blue-700 w-[300px] h-[250px]  md:w-[600px] md:h-[400px] '>
    <iframe className='w-[300px] shadow-xl h-[250px] relative left-4 top-4 md:left-10 md:top-10 md:w-[600px] md:h-[400px]' src="https://www.youtube.com/embed/G_zwNW_0TEw" title="Free, Fair and Credible Election  | M  Rashiduzzaman Millat  | Tritiyo Matra Talk show" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
        {/* content  */}
  <div className='space-y-5 p-5 text-center lg:text-left'>
  <h4 className='text-orange-500 font-semibold'>Who we are</h4>
  <h2 className='text-4xl font-bold text-blue-900'>If you want a better future,<br /> Vote for us.</h2>
  <p>
  Parturient dis torquent nostra mattis congue ut sagittis nibh luctus viverra. Enim convallis tristique magna torquent egestas dictumst consectetur. Malesuada mus dictumst orci litora nisl iaculis duis nostra enim vestibulum.
  </p>
  <button className='hover-border-button'>Discover More</button>
        </div>
   </div>
  );
};

export default IntroductionVideo;