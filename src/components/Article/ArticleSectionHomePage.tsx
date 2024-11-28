'use client'
import { Article } from '@/app/articles/page';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ArticleCard from './ArticleCard';

const ArticleSectionHomePage = () => {
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
    <div className="bg-[url(/Images/mr-23.jpg)]  min-h-screen bg-cover bg-center bg-fixed flex justify-center items-center relative  px-3 lg:pb-14 py-24">
    {/* Overlay */}
    <div className="absolute inset-0 bg-black bg-opacity-50"></div>

    {/* Content */}
    <div className='flex flex-col lg:flex-row gap-14 justify-around items-baseline relative z-10 py-20'>
  {
    articles?.slice(0,3).map(article=><ArticleCard article={article} key={article.id}  />)
  }

  
  </div>  
  </div>
  );
};

export default ArticleSectionHomePage;