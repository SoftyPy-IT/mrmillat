"use client"

import { FacebookIcon, FacebookShareButton} from 'react-share';

const ShareButtons = ({shareUrl,quote,hashtag,
  title}: {shareUrl:string,quote:string,
    title:string,hashtag:string }) => {

      console.log("Share URL:", shareUrl, "Quote:", quote, "Hashtag:", hashtag,"title:",title);
  return (
    <div>
     

      <FacebookShareButton url={shareUrl}>
      <FacebookIcon size={32} round={true} />
      </FacebookShareButton>

   

    </div>
  );
};

export default ShareButtons;
