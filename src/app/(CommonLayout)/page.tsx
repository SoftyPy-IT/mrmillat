import HomePage from '@/components/HomePage';
import Head from 'next/head';
import React from 'react';

const page = () => {
  return (
    <>
    <Head>
        <title>M. Rashiduzzaman Millat</title>
        <meta name="description" content="Official website of M. Rashiduzzaman Millat, former Member of Parliament for Jamalpur-1." />
      </Head>
       <main>
       <HomePage/>
       </main> 
    </>
  );
};

export default page;