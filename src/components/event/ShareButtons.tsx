'use client';

import Image from 'next/image';
import { FacebookShareButton, LinkedinShareButton, TwitterShareButton, WhatsappShareButton } from 'react-share';

const ShareButtons = ({ shareUrl,title,description}: { shareUrl: string,title:string,description:string }) => {
  return (
    <div>
     <FacebookShareButton url={shareUrl} hashtag={description}>
        <button style={{ display: 'flex', alignItems: 'center' }}>
          <Image
           width={20}
           height={20}
            src="/facebook-icon.png"
            alt="Share on Facebook"
            style={{ width: '20px', height: '20px', marginRight: '8px' }}
          />
          Facebook
        </button>
      </FacebookShareButton>

      {/* LinkedIn */}
      <LinkedinShareButton url={shareUrl} title={title} summary={description}>
        <button style={{ display: 'flex', alignItems: 'center' }}>
          <Image
           width={20}
           height={20}
            src="/linkedin-icon.png"
            alt="Share on LinkedIn"
            style={{ width: '20px', height: '20px', marginRight: '8px' }}
          />
          LinkedIn
        </button>
      </LinkedinShareButton>

      {/* Twitter */}
      <TwitterShareButton url={shareUrl} title={title}>
        <button style={{ display: 'flex', alignItems: 'center' }}>
          <Image
             width={20}
             height={20}
            src="/twitter-icon.png"
            alt="Share on Twitter"
            style={{ width: '20px', height: '20px', marginRight: '8px' }}
          />
          Twitter
        </button>
      </TwitterShareButton>

      {/* WhatsApp */}
      <WhatsappShareButton url={shareUrl} title={title}>
        <button style={{ display: 'flex', alignItems: 'center' }}>
          <Image
            width={20}
            height={20}
            
            src="/whatsapp-icon.png"
            alt="Share on WhatsApp"
            style={{ width: '20px', height: '20px', marginRight: '8px' }}
          />
          WhatsApp
        </button>
      </WhatsappShareButton>
    </div>
  );
};

export default ShareButtons;
