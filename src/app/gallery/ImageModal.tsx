import Image from 'next/image';
import React from 'react';
import { GiCancel } from 'react-icons/gi';

const ImageModal = () => {

  return (

  <div className='w-full  h-full flex flex-row justify-center items-center'>
   <div className="fixed inset-0 bg-black bg-opacity-50 z-20"></div>
             {/* modal container  */}
    <div className='bg-white shadow-2xl fixed top-10 z-20 h-auto max-w-[800px] mx-10'>
      <div className='max-w-[700px] h-[400px] relative'>
      <Image className='w-full h-full object-cover' src={'/Images/mr-15.jpg'} alt='image' height={1600} width={1600} ></Image>
      <span className='absolute text-orange-500 bg-white rounded-full -right-4 -top-5 text-3xl z-30'><GiCancel /></span>
      </div>
      <h3 className='text-black text-center py-5 font-semibold '>
       
        M Rashedulzamman Millat
        
        </h3>
    </div>



          </div>
  );
};

export default ImageModal;