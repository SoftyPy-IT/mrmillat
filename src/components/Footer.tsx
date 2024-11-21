import React from 'react';
import { IoLogoFacebook, IoLogoLinkedin, IoLogoTwitter } from 'react-icons/io5';

const Footer = () => {
  return (
    <footer className='bg-blue-950 text-center py-10 text-gray-100 flex flex-col lg:flex-row justify-between px-10 gap-5 items-center'>
      <p>Copyright © 2022 Populi, All rights reserved. Powered by MoxCreative.</p>
      <div className='flex gap-3'>
       <a href="https://www.facebook.com/rashiduzzaman.millat" target='_blank'><IoLogoFacebook className='text-2xl '/></a>
        <IoLogoLinkedin className='text-2xl '/>
        <IoLogoTwitter className='text-2xl '/>
      </div>
    </footer>
  );
};

export default Footer;