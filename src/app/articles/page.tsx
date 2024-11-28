
'use client'
import ArticleCard from '@/components/Article/ArticleCard';
import { Pagination, Stack } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';



export type Article ={
  id:number;
  title: string;
  description:string;
  publishDate:string;
  image:string|undefined;

}


const Articles = () => {
  const [articles , setArticles] = useState<Article[]>([])

  useEffect(()=>{
    const getData = async () => {
      try {
        const response = await axios.get('/data/article.json'); 
        setArticles(response.data);
      } catch (error) {
        console.error('Error fetching the data:', error);
      }
    };
  
    getData();
  
   },[])
  
  return (
    <div>
 {/* banner section  */}
     
 <div className="bg-[url(/Images/mr-22.jpg)]  h-[400px] bg-cover bg-center bg-fixed flex justify-center items-center relative py-8 px-3 lg:pb-14 ">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 w-full lg:w-1/3 text-center space-y-3 border-4 border-white py-8">
      

        {/* Title */}
        <h3 className="text-5xl font-bold text-white ">
           Article
        </h3>

        {/* Description */}
        <p className="text-gray-100 text-xl">
        Leadership, Experience, and values mean something
        </p>

    
      </div>
    </div>     

   {/* article container  */}
 <section className='flex justify-center items-center mt-20 mb-10'>


 <div className='grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between items-center'>
  {
    articles?.map(article=><ArticleCard article={article} key={article.id}  />)
  }

  
  </div>  
 </section>

  {/* pagination buttons */}
  <div className='flex item-center justify-center mt-5 mb-20'>
   <Stack spacing={2}>
     
     <Pagination count={10} color="primary" />
    
   </Stack>
   </div>



    </div>
  );
};

export default Articles;