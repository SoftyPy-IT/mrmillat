'use client';

import { FacebookShareButton } from 'react-share';

const ShareButtons = ({ shareUrl,title }: { shareUrl: string,title:string }) => {
  return (
    <div>
      <FacebookShareButton url={shareUrl} hashtag={title}>
        <span className="hover-border-button mt-6">Share on Facebook</span>
      </FacebookShareButton>
    </div>
  );
};

export default ShareButtons;
