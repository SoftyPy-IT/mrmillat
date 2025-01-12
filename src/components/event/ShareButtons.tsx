'use client';

import { FacebookShareButton, LinkedinShareButton, TwitterShareButton, WhatsappShareButton } from 'react-share';

const ShareButtons = ({ shareUrl,title }: { shareUrl: string,title:string }) => {
  return (
    <div>
      <FacebookShareButton url={shareUrl} hashtag={`#${title}`}>
        <span className="hover-border-button mt-6">facebook</span>
      </FacebookShareButton>

    {/* LinkedIn */}
 <LinkedinShareButton url={shareUrl} title={title} >
 <span className="hover-border-button mt-6">linkedIn</span>
 </LinkedinShareButton>

 {/* Twitter */}
 <TwitterShareButton url={shareUrl} title={title}>
 <span className="hover-border-button mt-6">Twitter</span>
 </TwitterShareButton>

 {/* WhatsApp */}
 <WhatsappShareButton url={shareUrl} title={title}>
 <span className="hover-border-button mt-6">Whatsapp</span>
 </WhatsappShareButton>





    </div>
  );
};

export default ShareButtons;
