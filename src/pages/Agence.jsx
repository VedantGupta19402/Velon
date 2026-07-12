import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React, { useContext, useEffect, useRef } from 'react'
import PhotoAndPostDescription from '../component/Agence/PhotoAndPostDescription';
import Fotter from '../component/Agence/Fotter.jsx'

const Agence = () => {
  gsap.registerPlugin(ScrollTrigger)
  const imageDivRef = useRef(null)
  const imageRef = useRef(null)
  const sectionColorChange = useRef(null)
  const imageArr = [
    'https://picsum.photos/seed/velon1/480/640',
    'https://picsum.photos/seed/velon2/480/640',
    'https://picsum.photos/seed/velon3/480/640',
    'https://picsum.photos/seed/velon4/480/640',
    'https://picsum.photos/seed/velon5/480/640',
    'https://picsum.photos/seed/velon6/480/640',
    'https://picsum.photos/seed/velon7/480/640',
    'https://picsum.photos/seed/velon8/480/640',
    'https://picsum.photos/seed/velon9/480/640',
    'https://picsum.photos/seed/velon10/480/640',
    'https://picsum.photos/seed/velon11/480/640'
  ]

  useEffect(() => {
    gsap.to(sectionColorChange.current, {
      backgroundColor: 'black',
      scrollTrigger: {
        trigger: sectionColorChange.current,
        start: 'top top',
        end: 'top -30%',
        scrub: true
      }
    });
  });

  useGSAP(function () {
    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        start: "top 29%",
        end: "top -105%",
        pin: true,
        scrub: true,
        onUpdate: function (ele) {
          let imageIndex;
          if (ele.progress < 1) {
            imageIndex = Math.round(ele.progress * imageArr.length);
          } else {
            imageIndex = imageArr.length - 1
          }
          imageRef.current.src = imageArr[imageIndex];
        }
      }
    })

  })

  return (
    <div className="text-black bg-white">
      <div id='pageStart' className='section1 relative py-1'>
        <div ref={imageDivRef} className=' overflow-hidden h-[20vw] w-[15vw] absolute top-[14.5vw] left-[30.7vw] rounded-4xl'>
          <img ref={imageRef} className='h-full w-full' src="https://picsum.photos/seed/velon1/480/640" alt="error" />
        </div>
        <div className='font-[font1] relative'>
          <div className='mt-[55vh]'>
            <h1 className='text-[19vw] text-center uppercase leading-[17vw]'>BUILT <br />
              TO MOVE</h1>
            <div className='pl-[50vh]'>
              <p className='text-[4vw] leading-15'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We design at the speed of culture. Velon is where motion meets meaning — every pixel, every frame, every interaction driven by purpose. Great brands don't stand still. They move, adapt, and evolve. We build brands that are built to move.</p>
            </div>
            <div className=' m-50 flex gap-[20vw]'>
              <div>
                <h1 className='text-3xl'>Expertise</h1>
              </div>
              <div>
                <ul className='text-2xl'>
                  <li>Strategy</li>
                  <li>Advertising</li>
                  <li>Branding</li>
                  <li>Design</li>
                  <li>Content</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section2 h-screen mt-20">
        <div className='h-[30vw] w-full flex justify-center gap-20 pt-10 px-10'>
          <div className='w-1/4 h-1/3'>
            <h4 className='text-[1.3vw] leading-7 font-[font2] text-start'>Our Work_ Built in motion, shaped by purpose, driven by the relentless pursuit of better.</h4>
          </div>
          <div className='w-1/4 h-1/3'>
            <h4 className='text-[1.3vw] leading-7 font-[font2] text-start'>Our Creative_ Thriving where ideas move fast and talent moves faster. Pushed to become the sharpest versions of ourselves.</h4>
          </div>
          <div className='w-1/4 h-1/3'>
            <h4 className='text-[1.3vw] leading-7 font-[font2] text-start'>Our Culture_ We move together. No silos, no ego. Just a team building something worth moving for.</h4>
          </div>
        </div>
      </div>
      <div ref={sectionColorChange} className='section2 -mt-140 flex flex-col items-center justify-center'>
        <div className='mt-50'>
          <PhotoAndPostDescription />
        </div>
        <Fotter/>
      </div>
    </div>
  )
}

export default Agence

