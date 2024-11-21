'use client'
import { IoMenuSharp } from 'react-icons/io5';
import './navbar.css';
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CiCircleRemove } from 'react-icons/ci';
import Image from 'next/image';

type Route={
  navbar:string;
  route:string
}

const Navbar = () => {
  const pathName = usePathname();
  const [showDropdown,setShowDropdown] = useState<boolean>(false);
  const routes:Route[] = [{navbar:"Home",route:"/"},{navbar:"About",route:"/about"},{navbar:"Events",route:"/events"},{navbar:"Gallery",route:"/gallery"},{navbar:"Media",route:"/media"}]

  return (
    <div >

      <nav className='container mx-auto px-10 flex justify-between py-2 lg:py-0  items-center'>
           {/* nav start  */}
      <div>
        {/* <div className=' font-semibold text-blue-900 font-serif italic text-center border-2 border-dashed border-orange-400 outline-dashed outline-2 outline-gray-400 outline-offset-4  p-4 py-2 transform -skew-x-12'>
          <p className='text-blue-700 md:text-xl text-lg'>Save</p>
          <p className='text-gray-400 md:text-2xl text-xl'>Bangladesh</p>
        </div> */}
        <Image src={'/Images/logo.png'} alt='logo' width={150} height={75} className='w-[100px] h-[50px] md:w-[150px] md:h-[75px]'></Image>
     
      </div>
             {/* nav center  */}
       <div className='lg:flex hidden gap-5 text-gray-600 font-semibold '>
        {
          routes.map((item,idx)=>  <Link className='hover-button hover:text-orange-500'  key={idx} href={item.route}>
          <button  className={`hover:text-orange-500
            ${pathName === item.route?'text-orange-500':''}`}>{item.navbar}
           <span className="border top-left"></span>
           <span className="border top-right"></span>
           <span className="border bottom-right"></span>
           <span className="border bottom-left"></span>
          </button>
          </Link>)
        }
       
        </div> 

            {/* nav end       */}
<div className='lg:flex hidden'>
<button className='hover-border-button'>
Connect
</button>
          

          </div>   

           {/* nav item for small device  */}
          <div className='block lg:hidden relative'>
{
  !showDropdown&&<IoMenuSharp onClick={()=>setShowDropdown(!showDropdown)} className='text-3xl text-gray-600' />
}
{
  showDropdown?
  <div onClick={()=>setShowDropdown(!showDropdown)}  className='bg-white z-50 flex flex-col absolute  py-2 shadow-xl w-[200px] right-0'>
  <CiCircleRemove className='text-4xl text-rose-500 absolute -right-2 -top-5' />
{
  routes?.map((item,idx)=><Link href={item.route} key={idx}> <p  className='py-2 hover:bg-blue-900 hover:text-orange-500 px-6 border-b'>{item.navbar}</p></Link>)
}
 
    
  </div>
  :' '
}


</div>           
      </nav>
    </div>
  );
};

export default Navbar;