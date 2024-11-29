import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { RiShareForwardFill } from 'react-icons/ri';

const Company = () => {
  return (
    <div>

      <h3 className='text-4xl text-center font-bold my-10 text-blue-950'>Company</h3>
       <div className="bg-[url(/Images/mr-17.jpg)]  h-[500px] bg-cover bg-center bg-fixed flex justify-center items-center relative py-8 px-3 lg:pb-14 ">
      {/* Overlay */}
      

      {/* Content */}
      <div 
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      className="relative z-10 w-full lg:w-1/2  space-y-3 border-4 border-white py-8  bg-[rgb(0,0,0,0.7)] ">
      <div className='flex gap-5 item-center'>
        <div className='md:w-[100px] md:h-[100px] w-[60px] h-[60px] relative'>
        <Image src={'/Images/mr-16.jpg'}  layout="fill"  objectFit="cover" alt='shourav group' ></Image>
        </div>
       
        <h2 className='text-rose-600 text-2xl md:text-5xl font-bold'>SHOURAV<br />GROUP</h2>
      </div>


        {/* Description */}
      <div className='px-5 text-gray-100'> 
      <p className=" text-sm">
shourav Group
Shourav Group is engaged in various types of trading and manufacturing businesses in Bangladesh.
        </p>
       <h4 className='text-lg font-semibold'> Our Address
       </h4>
<p className='text-sm w-[250px]'>BTI Landmark, Level-6, CWS(A),
16 Gulshan Avenue, 
Dhaka-1212, Bangladesh</p>

<Link target='_blank' href={'https://www.shouravgroup-bd.com/?fbclid=IwZXh0bgNhZW0CMTAAAR3AD0YpYutjDuVDV4j678eMNl3yLq_s3SEzrNOJCNRABvg-y8HltXumeVA_aem_KRLLtkbLY5_2SPlfCAB-OQ'}> <button className='text-white border-2 border-white px-4 py-1 mt-6 hover:scale-95 flex item-center justify-center gap-2'><RiShareForwardFill />Visit</button></Link>
      
      </div>
        
    
      </div>
    </div>
    </div>
  );
};

export default Company;