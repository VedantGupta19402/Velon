'use client';

import React from 'react';

const Video: React.FC = () => {
  return (
    <div className='h-full w-full'>
      <video
        className='h-full w-full object-cover'
        autoPlay
        muted
        loop
        playsInline
        src='https://videos.pexels.com/video-files/34645139/14683903_3840_2160_30fps.mp4'
      ></video>
    </div>
  );
};

export { Video };
export default Video;
