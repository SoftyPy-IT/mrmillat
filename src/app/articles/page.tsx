'use client'
import ArticleCard from '@/components/Article/ArticleCard';
import HeroSection from '@/components/HeroSection';
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
    <div className='bg-white'>
 {/* banner section  */}
 <HeroSection imageUrl={'/Images/mr-22.jpg'} title={' Article'} subTitle={'    Leadership, Experience, and values mean something'}/>
 

   {/* article container  */}
 <section className='flex justify-center items-center mt-20 mb-10'>


 <div className='grid gap-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between items-center'>
  {
    articles?.map(article=><ArticleCard article={article} key={article.id}  />)
  }

  
  </div>  
 </section>

  {/* pagination buttons */}
  <div className='flex item-center justify-center mt-20 mb-20'>
   <Stack spacing={2}>
     
     <Pagination count={10} color="primary" />
    
   </Stack>
   </div>



    </div>
  );
};

export default Articles;