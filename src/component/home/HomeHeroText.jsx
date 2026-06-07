import React from 'react'
import Video from './VideoBaground';
const HomeHeroText = () => {
    return (
        <div className='font-[font1] pt-5 text-center'>
            <div className='text-[9.5vw] uppercase leading-[8vw] justify-center flex items-center'>Built for</div>
            <div className='text-[9.5vw] uppercase leading-[8vw] justify-center flex text-center'>every<div className='h-[7vw] w-[15vw] rounded-full overflow-hidden -mt-3'><Video /></div>motion</div>
            <div className='text-[9.5vw] uppercase leading-[8vw] justify-center flex items-center'>velocity</div>
        </div>
    ) 
}

export default HomeHeroText
