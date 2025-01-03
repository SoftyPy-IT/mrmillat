import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from 'react';
import Image from 'next/image';



const Biography = () => {
  
  return (
    <section 
    
     data-aos="fade-up"
      data-aos-duration="2000"
    
    className='flex justify-center item-center bg-white'>
      <div className='lg:max-w-6xl max-w-[300px] md:max-w-[600px] bg-white lg:px-10 p-5 relative -top-32 shadow-xl pb-14'>
     <h3 className='text-xl md:text-3xl lg:text-4xl text-blue-950 font-semibold text-center mb-2'>Biography of <span className='text-orange-500 text-bold'>M.R. Millat</span></h3>
     <p className='text-sm font-semibold text-center mb-8'> Politician of Bangladesh Nationalist Party and a former member of parliament for Jamalpur-1.</p>
     <div className="overflow-hidden mb-8 w-full md:h-[400px] lg:h-[500px] h-[300px] relative"> <Image
      src="/Images/mr-8.jpg"
      alt="Event Image"
      width={1600}
      height={1600}
     className="w-full duration-500  hover:scale-110   h-full  object-cover shadow-md"
    /></div>


<div>
  <p className='px-5 mb-10'>
  এম রশিদুজ্জামান শমল্লাত: একজন প্রখ্যাত বাংলাদেশি রাজনীতিবিদ
এম রশিদুজ্জামান শমল্লাত একজন বিশিষ্ট বাংলাদেশি রাজনীতিবিদ এবং বাংলাদেশ জাতীয়তাবাদী দলের (বিএনপি) অন্যতম জ্যেষ্ঠ নেতা। তিনি জামালপুর-১ আসনের সাবেক সংসদ সদস্য (২০০১-২০০৬) এবং বর্তমানে বিএনপির উপদেষ্টা পরিষদের সদস্য। শমল্লাত দলের নীতিনির্ধারণে এবং অর্থনৈতিক স্থিতিশীলতা বজায় রাখতে গুরুত্বপূর্ণ ভূমিকা পালন করে আসছেন।

  </p>
      <Accordion defaultExpanded className='mb-8 mt-14  text-gray-500'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
         <h4 className='text-gray-700 text-lg font-semibold'>শিক্ষাজীবন</h4>
        </AccordionSummary>
        <AccordionDetails>
         <p >
         শমল্লাত ব্যবসা প্রশাসনে স্নাতক (সম্মান) এবং ইসলামিক স্টাডিজে স্নাতকোত্তর ডিগ্রি অর্জন করেন। তার এই বহুমুখী শিক্ষাগত পটভূমি তাকে কৌশলগত ব্যবসায়িক দক্ষতা এবং সাংস্কৃতিক ও নৈতিক অন্তর্দৃষ্টিতে সমৃদ্ধ করেছে, যা তার রাজনীতিক জীবনে জটিল পরিস্থিতিতে দক্ষ নেতৃত্ব প্রদান করতে সহায়ক।
         </p>
        </AccordionDetails>
      </Accordion >

      <Accordion className='mb-8 text-gray-500'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
        <h4 className='text-gray-700 text-lg font-semibold'>রাজনৈতিক যাত্রা</h4>
        </AccordionSummary>
        <AccordionDetails>
          <p>
          এম রশিদুজ্জামান শমল্লাতের রাজনীতিতে প্রবেশ ঘটে ১৯৮৬ সালে, বিএনপির বর্ষীয়ান নেতা ব্যারিস্টার আবদুস সালাম তালুকদারের মাধ্যমে। এর আগে তিনি জাতীয়তাবাদী সামাজিক ও সাংস্কৃতিক সংস্থা (জাসাস)-এ সক্রিয় ভূমিকা পালন করেন। তার সাংস্কৃতিক ও সামাজিক উদ্যোগের মাধ্যমে জাতীয়তাবাদী মূল্যবোধ প্রতিষ্ঠায় অবদান রাখেন। তার এই নিষ্ঠা ও শ্রম ১৯৯১ সালে তাকে বিএনপির মূল রাজনীতিতে জায়গা করে দেয়।

১৯৯৬ সালের জাতীয় নির্বাচনে প্রথমবারের মতো তিনি দলের মনোনয়ন লাভ করেন, যা তার রাজনৈতিক জীবনের একটি গুরুত্বপূর্ণ মাইলফলক। পরবর্তী সময়ে, ২০০১-২০০৬ সময়কালে তিনি জামালপুর-১ আসনের সংসদ সদস্য হিসেবে দায়িত্ব পালন করেন।


          </p>
        </AccordionDetails>
      </Accordion >
      <Accordion className='mb-8 text-gray-500'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
       <h4 className='text-gray-700 text-lg font-semibold'>নেতৃত্ব</h4>
        </AccordionSummary>
        <AccordionDetails>
          <p>
          শমল্লাতের নেতৃত্ব ও কর্মকাণ্ড বিএনপির ভারপ্রাপ্ত চেয়ারম্যান তারেক রহমান দ্বারা অত্যন্ত প্রভাবিত। তারেক রহমানের কৌশলগত দিকনির্দেশনা অনুসরণ করে শমল্লাত বিএনপির সাংগঠনিক কাঠামো মজবুত করতে এবং গণতন্ত্র, ন্যায়বিচার, ও মানবাধিকারের লক্ষ্যে কাজ করে গুরুত্বপূর্ণ ভূমিকা পালন করেছেন।

শমল্লাত প্রায়ই স্বীকার করেন যে, তারেক রহমানের দৃঢ় দৃষ্টিভঙ্গি এবং নেতৃত্ব তার রাজনীতিতে গভীর প্রভাব ফেলেছে এবং জনগণের প্রত্যাশা পূরণের প্রতিশ্রুতি আরও দৃঢ় করেছে।

          </p>
        </AccordionDetails>
      </Accordion >
      <Accordion className='mb-8 text-gray-500'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
         <h4 className='text-gray-700 text-lg font-semibold'>ছাত্র আন্দোলন ও মানবিক উন্নয়নে অবদান
         </h4>
        </AccordionSummary>
        <AccordionDetails>
          <p>
          এম রশিদুজ্জামান শমল্লাত ২০২৪ সালের ৫ আগস্টের ছাত্র আন্দোলনে গুরুত্বপূর্ণ ভূমিকা পালন করেন।

রাজনৈতিক দায়িত্বের পাশাপাশি, তিনি &quot;আমরা বিএনপির সৈনিক&quot; প্ল্যাটফর্মের উদ্যোগ গ্রহণ করেন, যা বিএনপির সমর্থকদের মধ্যে ঐক্য গড়ে তুলতে কাজ করে। সফল আন্দোলনের পর, তিনি আশেপাশের মানুষের সহায়তায় অগ্রণী ভূমিকা পালন করেন, যা তার সমাজসেবার প্রতিশ্রুতির প্রতিফলন।
          </p>
        </AccordionDetails>
      </Accordion >
      <Accordion className='mb-8 text-gray-500'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
        <h4 className='text-gray-700 text-lg font-semibold'>উন্নয়ন ও সামাজিক কল্যাণে অবদান
        </h4>
        </AccordionSummary>
        <AccordionDetails>
          <p>
          সংসদ সদস্য হিসেবে তার মেয়াদকালে শমল্লাত জামালপুর-১ আসনের অবকাঠামোগত উন্নয়ন এবং জনকল্যাণমূলক কাজকে সর্বোচ্চ অগ্রাধিকার দিয়েছেন। তার বাস্তবমুখী এবং কার্যকর উদ্যোগের মাধ্যমে তিনি তার নির্বাচনী এলাকার মানুষের জীবনযাত্রার মান উন্নত করতে সক্ষম হয়েছেন।

প্রতিকূল রাজনৈতিক পরিবেশ সত্ত্বেও, তিনি জনসেবা এবং জাতীয় উন্নয়নের জন্য দৃঢ়প্রতিজ্ঞ থেকেছেন।
          </p>
        </AccordionDetails>
      </Accordion > 
      <Accordion className=' text-gray-500 '>

        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
        <h4 className='text-gray-700 text-lg font-semibold'>উত্তরাধিকার ও দৃষ্টিভঙ্গি</h4>
        </AccordionSummary>
        <AccordionDetails>
          <p>
          তার ছাত্রজীবনের দিন থেকে বিএনপির জ্যেষ্ঠ নেতার বর্তমান অবস্থান পর্যন্ত এম রশিদুজ্জামান শমল্লাতের রাজনৈতিক যাত্রা তার দলের মূলনীতি এবং বাংলাদেশের মানুষের আকাঙ্ক্ষার প্রতি গভীর অঙ্গীকারের প্রতিফলন।

ব্যারিস্টার আবদুস সালাম তালুকদার এবং তারেক রহমানের দিকনির্দেশনায় শমল্লাত গণতন্ত্র, ন্যায়বিচার, এবং সামাজিক সংস্কারের লক্ষ্যে অবিচলভাবে কাজ করে যাচ্ছেন।

তার দৃষ্টিভঙ্গি হলো বাংলাদেশে তৃণমূল পর্যায়ে ক্ষমতায়ন, ন্যায়বিচার নিশ্চিত করা এবং জবাবদিহিতামূলক রাজনৈতিক সংস্কৃতি প্রচলন করা। এটি তাকে একজন নিবেদিতপ্রাণ জননেতা এবং সংস্কারক হিসেবে স্থায়ী উত্তরাধিকারী হিসেবে প্রতিষ্ঠিত করেছে।
          </p>
        </AccordionDetails>
      </Accordion >
    </div>

</div>
  


  </section>  
  );
};

export default Biography;




