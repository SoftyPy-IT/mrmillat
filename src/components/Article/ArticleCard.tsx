import { Article } from '@/app/articles/page';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaCalendar } from 'react-icons/fa';




const ArticleCard = ({article}:{article:Article}) => {
  return (
    <div className="max-w-xs rounded-md shadow-md bg-white  text-gray-900 hover:bg-gray-300 h-[520px] flex flex-col justify-between items-center ">
	<div className='flex-1'>
	<Image src={article.image as string} alt="article image" width={400} height={400} className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500" />
	<div className="flex flex-col justify-between p-6 space-y-8">
		<div className="space-y-2">
    <div className='flex gap-1 items-center'>
         <span className='font-semibold'><FaCalendar /></span><p>Publish Date: {article.publishDate}</p>
         </div>
			<h2 className="text-lg font-semibold tracking-wide h-[80px]">{article.title.length>60? article.title.slice(0,60)+'...' :article.title.slice(0,60)    }</h2>
			<p className="text-gray-500">{article.description.slice(0,60)}...</p>
		</div>
	</div>
	<div className=''>
	<Link href={`/articles/${article.id}`}><button className="hover-border-button w-full z-20">Read more</button></Link>
	</div>
	</div>
</div>
  );
};

export default ArticleCard;