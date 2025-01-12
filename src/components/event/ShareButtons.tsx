'use client';
import { FacebookShare } from 'react-share-kit'
// import { FacebookShareButton, LinkedinShareButton, TwitterShareButton, WhatsappShareButton } from 'react-share';

const ShareButtons = ({shareUrl,quote,hashtag,
  title}: {shareUrl:string,quote:string,
    title:string,hashtag:string }) => {

      console.log("Share URL:", shareUrl, "Quote:", quote, "Hashtag:", hashtag,"title:",title);
  return (
    <div>
     
<FacebookShare
  url={shareUrl}
  quote={quote} // Quote for Facebook
  title={title} // Title for Facebook
  hashtag={hashtag} // Hashtag
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
