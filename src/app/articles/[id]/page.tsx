'use client'
import useAxiosPublic from '@/hooks/useAxiosPublic';
import { TArticle } from '@/types/types';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { FaCalendar } from 'react-icons/fa';;


const ArticleDetails = ({ params }: { params: { id: string } }) => {
  const axiosPublic = useAxiosPublic();
  const { id } = params; 
  const [article, setArticle] = useState<TArticle>( );

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axiosPublic.get(`/articles/${id}`); 
        const result = response.data.data;
         setArticle(result);
        } catch (error) {
        console.error('Error fetching the data:', error);
        }
    };

    getData();
  }, [id,axiosPublic]);
  
 
  return (
 <div className='flex justify-center '>
    <div className="w-full bg-white  container ">
  <div className="px-5 pb-10">
    <div className='md:h-[500px] h-[300px] relative'>
    <Image src={article?.imageUrl as string}  layout="fill"  objectFit="cover" alt='photo' />
    
    </div>
    <div className="mt-10 space-y-4">
      <h2 className="text-xl font-bold text-blue-950">{article?.title}</h2>
      
<div className='flex gap-1 items-center '>
<span ><FaCalendar /></span><p className='text-black'><strong>Publish On :</strong>{article?.publishedDate}</p>
</div>



      <p className="text-sm mt-2">
    {article?.description}
      </p>
    
   
    </div>
  </div>


  {/* Related Events section  */}
            
         

</div>
 </div>
  );
};

export default ArticleDetails;