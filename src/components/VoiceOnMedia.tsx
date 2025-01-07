'use client'
import React, { useEffect,useState } from 'react';
import useAxiosPublic from '@/hooks/useAxiosPublic';
import ReactPlayer from 'react-player/youtube';
import { TVoiceOnMedia } from '@/types/types';

const VoiceOnMedia = () => {
  const axiosPublic = useAxiosPublic();
  const [medias,setMedias] = useState([]);
  const [isClient,setIsClient] = useState(false);
  const limit = 3; 


     useEffect(()=>{
        const getData =async()=>{
          try {
          const response = await axiosPublic.get(`voice-on-media?limit=${limit}`);
          const {totalCount,data}= response?.data?.data
          console.log(totalCount,data);
          setMedias(data);
          } catch (error) {
          console.log(error);  
          }
        
            }      
      getData();   
      },[axiosPublic])
    console.log(medias);  

    useEffect(()=>{
      setIsClient(true);
    },[])
  

  return (
    <div className='bg-white'>
          
    <div className='my-10'>
           <h2 className='text-4xl text-blue-950 text-center font-bold'>Interviews</h2>



        {/* media card container  */}
 <div
  data-aos="fade-up"
  data-aos-duration="2500"
 
 className='flex justify-center item-center'>
 <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-around mb-8 mt-10 gap-8 '>
               {/* card 1 */}
     
      {
        isClient  && 
        medias?.slice(0,2).map((media:TVoiceOnMedia)=>
          <div key={media?._id} className='w-[303px] h-[340px] border-2 shadow-xl '>
            <ReactPlayer
     
              controls
              width={300} height={200} url={media?.videoUrl}  />

                <h2 className='text-lg font-bold my-3 text-black px-5'>{media?.title}</h2>
         
          </div>
        )
      }      
     
      </section>

 </div>
   
            


    </div> 
      
    </div>
  );
};

export default VoiceOnMedia;