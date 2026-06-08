import React from 'react'

const ProjectCart = (props) => {

    return (
        <>
            <div className=' group relative w-1/2 h-full hover:rounded-[4vw] transition-all overflow-hidden'>
                <img className='h-full w-full object-cover' src={props.image1} alt="" />
                <div className=' absolute transition-all opacity-0 group-hover:opacity-100 flex items-center justify-center top-0 left-0 text-white bg-black/50 h-full w-full'>
                    <h2 className=' cursor-pointer font-[font1] text-6xl border-4 rounded-full pt-2 px-4'>View Project</h2>
                </div>
            </div>
            <div className=' group relative w-1/2 h-full hover:rounded-[4vw] transition-all overflow-hidden'>
                <img className='h-full w-full object-cover' src={props.image2} alt="" />
                <div className=' absolute transition-all opacity-0 group-hover:opacity-100 flex items-center justify-center top-0 left-0 text-white bg-black/50 h-full w-full'>
                    <h2 className=' cursor-pointer font-[font1] text-6xl border-4 rounded-full pt-2 px-4'>View Project</h2>
                </div>
            </div>
        </>
    )
}

export default ProjectCart
