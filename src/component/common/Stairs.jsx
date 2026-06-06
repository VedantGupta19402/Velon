import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import { useLocation } from 'react-router-dom'

const Stairs = (props) => {
    const appRef = useRef(null);
    
    const currentPath = useLocation().pathname;

    const stairParentRef = useRef(null);
    useGSAP(function () {
        const tl = gsap.timeline()
        tl.to(stairParentRef.current, {
            display: "block",
            delay:-0.3
        })
        tl.from('.stairs', {
            height: 0,
            stagger: {
                amount: -0.2
            }
        });
        tl.to('.stairs', {
            y: '100%',
            stagger: {
                amount: -0.2
            }
        })
        tl.to(stairParentRef.current, {
            display: "none"
        })
        tl.to('.stairs', {
            y: 0
        })

        gsap.from(appRef.current,{
            opacity:0,
            delay:1.2
        })
    }, [currentPath])
    return (
        <div>
            <div ref={stairParentRef} className='h-screen w-full fixed z-40'>
                <div className='h-full w-full flex fixed'>
                    <div className='stairs h-full w-1/5 bg-black'></div>
                    <div className='stairs h-full w-1/5 bg-black'></div>
                    <div className='stairs h-full w-1/5 bg-black'></div>
                    <div className='stairs h-full w-1/5 bg-black'></div>
                    <div className='stairs h-full w-1/5 bg-black'></div>
                </div>
            </div>
            <div ref={appRef}>
                {props.children}
            </div>
        </div>
    )
}

export default Stairs
