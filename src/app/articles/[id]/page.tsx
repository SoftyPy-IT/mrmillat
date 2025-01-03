'use client'
import axios from 'axios';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { FaCalendar } from 'react-icons/fa';;
import { Article } from '../page';

const ArticleDetails = ({ params }: { params: { id: string } }) => {
  const { id } = params; 
  const [article, setArticle] = useState<Article|null>(null);



  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get('/data/article.json'); 
        const result = response.data;
         setArticle(result);
        // Find the specific article by ID
        const matchedArticle = result.find((item: Article) => item.id === parseInt(id));
        setArticle(matchedArticle);
       
      } catch (error) {
        console.error('Error fetching the data:', error);
      }
    };

    getData();
  }, [id]);
  
 
  return (
 <div className='flex justify-center '>
    <div className="w-full bg-white  container ">
  <div className="px-5 pb-10">
    <div className='md:h-[500px] h-[300px] relative'>
    <Image src={article?.image as string}  layout="fill"  objectFit="cover" alt='shourav group' />
    
    </div>
    <div className="mt-10 space-y-4">
      <h2 className="text-xl font-bold text-blue-950">{article?.title}</h2>
      
<div className='flex gap-1 items-center '>
<span ><FaCalendar /></span><p className='text-black'><strong>Publish On :</strong>{article?.publishDate}</p>
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