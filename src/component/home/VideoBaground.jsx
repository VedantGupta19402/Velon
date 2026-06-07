import React from 'react'

const Video = () => {
  return (
    <div className='h-full w-full'>
      <video className='h-full w-full object-cover' autoPlay muted loop playsInline src="https://videos.pexels.com/video-files/34645139/14683903_3840_2160_30fps.mp4"></video>
    </div>
  )
}

export default Video

