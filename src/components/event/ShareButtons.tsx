'use client';
import { FacebookShare } from 'react-share-kit'
// import { FacebookShareButton, LinkedinShareButton, TwitterShareButton, WhatsappShareButton } from 'react-share';

const ShareButtons = ({url,quote,
  hashtag}: {url:string,quote:string,
    hashtag:string }) => {
  return (
    <div>
     

<FacebookShare
  url={url}
  quote={quote}
  title={quote}
  hashtag={hashtag}
/>
      {/* <FacebookShareButton url={shareUrl} hashtag={`#${title}`} quote>
        <span className="hover-border-button mt-6">facebook</span>
      </FacebookShareButton> */}

    {/* LinkedIn
 <LinkedinShareButton url={shareUrl} title={title} summary='millat' source='https://mrmillat.com/' >
 <span className="hover-border-button mt-6">linkedIn</span>
 </LinkedinShareButton>

 {/* Twitter */}
 {/* <TwitterShareButton url={shareUrl} title={title} >
 <span className="hover-border-button mt-6">Twitter</span>
 </TwitterShareButton> */}

 {/* WhatsApp */}
 {/* <WhatsappShareButton url={shareUrl} title={title}>
 <span className="hover-border-button mt-6">Whatsapp</span>
 </WhatsappShareButton> */} 

    </div>
  );
};

export default ShareButtons;
