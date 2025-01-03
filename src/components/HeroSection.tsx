
import React from 'react';

const HeroSection = ({imageUrl,title,subTitle}:{imageUrl:string,title:string,subTitle:string}) => {
 
  return (
    <div
    style={{backgroundImage:`url(${imageUrl})`}}
    className={`${title === 'About Me'?'h-[500px]':'h-[400px]'}   bg-cover bg-center bg-fixed flex justify-center items-center relative py-8 px-3 lg:pb-14 `}>
     {/* Overlay */}
     <div className="absolute inset-0 bg-black bg-opacity-30"></div>

     {/* Content */}
     <div className="relative z-10 w-full lg:w-1/3 text-center space-y-3 border-4 border-white py-8">
     

       {/* Title */}
       <h3 className="text-5xl font-bold text-white ">
        {title}
       </h3>

       {/* Description */}
       <p className="text-gray-100 text-xl">
      {subTitle}
       </p>

     </div>
   </div>
  );
};

export default HeroSection;