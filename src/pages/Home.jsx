import React from 'react'
import Video from '../component/home/VideoBaground';
import HomeHeroText from '../component/home/HomeHeroText';
import HomeBottomText from '../component/home/HomeBottomText';
const Home = () => {
  return (
    <div>
      <div className='h-screen w-screen fixed'>
        <Video />
      </div>
      <div className='h-screen w-screen relative flex flex-col justify-between'>
        <HomeHeroText />
        <HomeBottomText />
      </div>
    </div>
  )
}

export default Home
