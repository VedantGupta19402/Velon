import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

const PhotoAndPostDescription = () => {
    gsap.registerPlugin(ScrollTrigger)
    const mainPageRef = useRef(null)
    const firstPageRef = useRef(null)
    const secondPageRef = useRef(null)
    const thirdPageRef = useRef(null)
    const forthPageRef = useRef(null)
    const fifthPageRef = useRef(null)
    let imageChange1 = -1 + Math.ceil(Math.random() * 11);
    let imageChange2 = -1 + Math.ceil(Math.random() * 11);
    if (imageChange1 === imageChange2) {
        imageChange1 = -1 + Math.ceil(Math.random() * 11);
    }


    // here is a code of image and detail of emplou

    const detailArr = [
        {
            image1: 'https://picsum.photos/seed/team1/480/640',
            name1: "MAYA",
            post1: "Creative Director",
            heading1: "CHEN",
            image2: 'https://picsum.photos/seed/team2/480/640',
            name2: "JORDAN",
            post2: "Art Director",
            heading2: "REYES"
        },
        {
            image3: 'https://picsum.photos/seed/team3/480/640',
            name3: "PRIYA",
            post3: "Brand Strategist",
            heading3: "SHARMA",
            image4: 'https://picsum.photos/seed/team4/480/640',
            name4: "MARCUS",
            post4: "Motion Designer",
            heading4: "WRIGHT"
        },
        {
            image5: 'https://picsum.photos/seed/team5/480/640',
            name5: "ELENA",
            post5: "Account Director",
            heading5: "PETROVA",
            image6: 'https://picsum.photos/seed/team6/480/640',
            name6: "DARIUS",
            post6: "Lead Developer",
            heading6: "OKONJO"
        },
        {
            image7: 'https://picsum.photos/seed/team7/480/640',
            name7: "LENA",
            post7: "Copywriter",
            heading7: "VOGT",
            image8: 'https://picsum.photos/seed/team8/480/640',
            name8: "OMAR",
            post8: "UX Designer",
            heading8: "HASSAN"
        },
        {
            image9: 'https://picsum.photos/seed/team9/480/640',
            name9: "AISHA",
            post9: "Producer",
            heading9: "BA",
            image10: 'https://picsum.photos/seed/team10/480/640',
            name10: "FINN",
            post10: "Strategy Lead",
            heading10: "MUELLER"
        }
    ]

    // here is a code of animation 

    useEffect(() => {
        const anim = gsap.context(() => {
            gsap.to(secondPageRef.current, {
                scrollTrigger: {
                    trigger: mainPageRef.current,
                    start: 'top top',
                    end: 'bottom bottom',
                    pin: firstPageRef.current
                }
            });
            gsap.to(thirdPageRef.current, {
                scrollTrigger: {
                    trigger: mainPageRef.current,
                    start: 'top -100%',
                    end: 'bottom bottom',
                    pin: secondPageRef.current
                }
            });
            gsap.to(forthPageRef.current, {
                scrollTrigger: {
                    trigger: mainPageRef.current,
                    start: 'top -200%',
                    end: 'bottom bottom',
                    pin: thirdPageRef.current
                }
            });
            gsap.to(fifthPageRef.current, {
                scrollTrigger: {
                    trigger: mainPageRef.current,
                    start: 'top -300%',
                    end: 'bottom bottom',
                    pin: forthPageRef.current
                }
            });
        });
        return () => anim.revert()
    });
    return (
        <div ref={mainPageRef} className='imageAnimation h-[500vh] flex justify-center flex-col w-full items-center relative'>

            {/* this is a animation point */}


            <section className=' absolute top-0 -left-[16vw]'>
                <div className='h-screen w-[37vw] bg-black rounded-4xl overflow-hidden'>
                    <img ref={firstPageRef} className='object-cover w-full h-full ' src="https://picsum.photos/seed/team1/480/640" alt="error" />
                    <div className='animationOnSection2 h-[30vh] w-full flex items-center gap-[70vw] absolute top-30 right-0 z-0'>
                        <h1 className='text-[10vw] top-0 font-[font2] uppercase text-[#D3FD50] '>MAYA</h1>
                        <h1 className='text-[10vw] top-0 font-[font2] uppercase text-[#D3FD50] '>MAYA</h1>
                    </div>
                    <div className='animationOnSection2 h-[30vh] w-full flex items-center gap-[70vw] absolute top-130 right-0'>
                        <div className='flex justify-center items-center z-3 '>
                            <h1 className='text-[10vw] top-0 font-[font2] uppercase text-[#D3FD50]'>CHEN</h1>
                            <h4 className='text-white text-4xl bottom-0 font-[font2] uppercase whitespace-nowrap'>Creative Director</h4>
                        </div>
                    </div>
                </div>
            </section>

            {/* this is a second animation page  */}


            <section className=' absolute -left-[16vw] top-[100vh]'>
                <div className='h-screen w-[37vw] bg-black rounded-4xl overflow-hidden z-1'>
                    <img ref={secondPageRef} className='object-cover w-full h-full ' src="https://picsum.photos/seed/team6/480/640" alt="error" />
                    <div className='animationOnSection2 h-[30vh] w-full flex items-center gap-[70vw] absolute top-30 right-0 z-0'>
                        <h1 className='text-[10vw] font-[font2] uppercase text-[#D3FD50]'>DARIUS</h1>
                        <h1 className='text-[10vw] font-[font2] uppercase text-[#D3FD50]'>DARIUS</h1>
                    </div>
                    <div className='animationOnSection2 h-[30vh] w-full flex items-center gap-[70vw] absolute top-130 right-0'>
                        <div className='flex justify-center items-center '>
                            <h1 className='text-[10vw] top-0 font-[font2] uppercase text-[#D3FD50]'>OKONJO</h1>
                            <h4 className='text-white text-4xl bottom-0 font-[font2] uppercase whitespace-nowrap'>Lead Developer</h4>
                        </div>
                    </div>
                </div>
            </section>

            {/* this is a thirdpage animation page */}

            <section ref={thirdPageRef} className='h-screen w-screen absolute top-[200vh]'>
                <div className=' bottomDivOfAgence h-screen w-screen rounded-t-[6vw] overflow-hidden relative'>
                    <img className='imageBottomOfAgence object-bottom h-full w-full' src="https://picsum.photos/seed/showcase1/1280/960" alt="" />
                    <div className=' absolute items-center justify-center top-0 left-0 flex flex-col gap-16 h-screen w-full'>
                        <h1 className='text-white font-[font2] text-4xl'>Pulse</h1>
                        <h1 className='insidePhotoBottomTextOfAgence text-white font-[font2] text-8xl leading-4'>Motion in every frame</h1>
                    </div>
                </div>
            </section>


            {/* this is a forthpage animation page */}

            <section ref={forthPageRef} className='h-screen w-screen absolute top-[300vh]'>
                <div className='bottomDivOfAgence h-screen w-screen rounded-t-[6vw] overflow-hidden relative'>
                    <img className='imageBottomOfAgence object-bottom h-full w-full' src="https://picsum.photos/seed/showcase2/1280/960" alt="" />
                    <div className=' absolute items-center justify-center top-0 left-0 flex flex-col gap-16 h-screen w-full'>
                        <h1 className='text-white font-[font2] text-4xl'>Aether</h1>
                        <h1 className='insidePhotoBottomTextOfAgence text-white font-[font2] text-8xl leading-4'>Born from light</h1>
                    </div>
                </div>
            </section>


            {/* this is a fithpage animation page */}

            <section ref={fifthPageRef} className='h-screen w-screen absolute top-[400vh]'>
                <div className='bottomDivOfAgence h-screen w-screen rounded-t-[6vw] overflow-hidden relative'>
                    <img className='imageBottomOfAgence object-bottom h-full w-full' src="https://picsum.photos/seed/showcase3/1280/960" alt="" />
                    <div className=' absolute items-center justify-center top-0 left-0 flex flex-col gap-16 h-screen w-full'>
                        <h1 className='text-white font-[font2] text-4xl'>Drift</h1>
                        <h1 className='insidePhotoBottomTextOfAgence text-white font-[font2] text-8xl leading-4'>Where speed meets stillness</h1>
                    </div>
                </div>
            </section>


        </div>
    )
}

export default PhotoAndPostDescription