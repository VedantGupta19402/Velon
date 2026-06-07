import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className='font-[font2] flex item-center justify-center gap-2'>
      <Link to='/Project' className=' text-[6.5vw] hover:text-[#D3FD50] uppercase border-3 hover:border-[#D3FD50] px-10 border-white rounded-full leading-[5.5vw] pt-3'>Portfolio</Link>
      <Link to='/Agence' className='text-[6.5vw] uppercase border-3 hover:text-[#D3FD50] px-10 border-white hover:border-[#D3FD50] rounded-full leading-[5.5vw] pt-3'>About</Link>
    </div>
  )
}

export default HomeBottomText
