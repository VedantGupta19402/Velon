import React from 'react'
import ProjectCart from '../component/project/ProjectCart'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

const Project = () => {


  let imageArray = [
    {
      image1: "https://picsum.photos/seed/work1/1280/960",
      image2: "https://picsum.photos/seed/work2/1280/960"
    },
    {
      image1: "https://picsum.photos/seed/work3/1280/960",
      image2: "https://picsum.photos/seed/work4/1280/960"
    },
    {
      image1: "https://picsum.photos/seed/work5/1280/960",
      image2: "https://picsum.photos/seed/work6/1280/960"
    },
    {
      image1: "https://picsum.photos/seed/work7/1280/960",
      image2: "https://picsum.photos/seed/work8/1280/960"
    },
    {
      image1: "https://picsum.photos/seed/work9/1280/960",
      image2: "https://picsum.photos/seed/work10/1280/960"
    }
  ]
  gsap.registerPlugin(ScrollTrigger)

  useGSAP(function () {
    gsap.from(".hero",{
      height:'50px',
      stagger:{
        amount:0.4
      },
      scrollTrigger:{
        trigger:".lol",
        start:"top 100%",
        end:"top -350%",
        scrub:true
      }
    })
  })

  return (
    <div className='text-black p-4'>
      <div className='pt-[41.5vh]'>
        <h2 className='font-[font2] text-[13.5vw] uppercase '>Our Work</h2>
        <div className='lol -mt-20'>
          {imageArray.map((ele, index) => {
            return <div key={index} className='hero w-full h-[700px] mb-3 flex gap-3'>
              <ProjectCart image1={ele.image1} image2={ele.image2} />
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default Project
