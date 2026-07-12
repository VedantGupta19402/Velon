import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React, { useRef, useCallback } from 'react'

const posts = [
  {
    image: 'https://picsum.photos/seed/blog1/1280/720',
    category: 'Strategy',
    title: 'The speed of culture: why brands must move faster',
    excerpt: 'In a world that never stops, brands that hesitate get left behind. Here is how to keep pace without losing your identity.',
    date: 'May 12, 2026'
  },
  {
    image: 'https://picsum.photos/seed/blog2/1280/720',
    category: 'Design',
    title: 'Motion in every pixel — the art of kinetic branding',
    excerpt: 'Static is dying. We explore how kinetic design systems are reshaping the way audiences experience brand identity.',
    date: 'Apr 28, 2026'
  },
  {
    image: 'https://picsum.photos/seed/blog3/1280/720',
    category: 'Culture',
    title: 'Inside the studio: how we build teams that move',
    excerpt: 'Great work comes from great rhythm. A look inside how Velon structures creative teams for maximum flow.',
    date: 'Apr 10, 2026'
  },
  {
    image: 'https://picsum.photos/seed/blog4/1280/720',
    category: 'Advertising',
    title: 'Beyond the campaign: building perpetual motion',
    excerpt: 'The old campaign model is broken. We share how always-on creativity is replacing the once-a-year big idea.',
    date: 'Mar 22, 2026'
  },
  {
    image: 'https://picsum.photos/seed/blog5/1280/720',
    category: 'Branding',
    title: 'Velocity over volume: rethinking brand presence',
    excerpt: 'More touchpoints are not the answer. We break down why speed and relevance beat scale every time.',
    date: 'Mar 5, 2026'
  },
  {
    image: 'https://picsum.photos/seed/blog6/1280/720',
    category: 'Design',
    title: 'Typography in motion: when letters come alive',
    excerpt: 'An exploration of how animated typography is redefining storytelling in digital spaces.',
    date: 'Feb 18, 2026'
  }
]

const categories = ['All', 'Strategy', 'Design', 'Culture', 'Advertising', 'Branding']

const Blog = () => {
  gsap.registerPlugin(ScrollTrigger)
  const gridRef = useRef(null)
  const marqueeRef = useRef(null)
  const cardRefs = useRef([])

  useGSAP(function () {
    const chars = document.querySelectorAll('.blog-char')
    gsap.to(chars, {
      opacity: 1,
      y: 0,
      rotateX: 0,
      duration: 0.9,
      stagger: 0.03,
      ease: 'back.out(1.7)',
      delay: 0.3
    })

    gsap.to('.blog-line-drop', {
      scaleY: 1,
      duration: 0.8,
      delay: 1.4,
      ease: 'power3.out',
      transformOrigin: 'top center'
    })

    gsap.from('.featured-card', {
      scrollTrigger: {
        trigger: '.featured-wrap',
        start: 'top 75%'
      },
      opacity: 0,
      y: 100,
      scale: 0.95,
      duration: 1,
      ease: 'power3.out'
    })

    gsap.from('.blog-card', {
      scrollTrigger: {
        trigger: gridRef.current,
        start: 'top 80%'
      },
      opacity: 0,
      y: 100,
      rotateX: 10,
      stagger: 0.08,
      duration: 0.9,
      ease: 'power3.out'
    })

    gsap.from('.category-pill', {
      scrollTrigger: {
        trigger: '.categories-wrap',
        start: 'top 85%'
      },
      opacity: 0,
      x: -30,
      stagger: 0.06,
      duration: 0.6,
      ease: 'power2.out'
    })

    gsap.to('.marquee-track', {
      x: '-50%',
      duration: 20,
      repeat: -1,
      ease: 'none'
    })

    gsap.from('.footer-reveal-blog', {
      scrollTrigger: {
        trigger: '.blog-footer',
        start: 'top 85%'
      },
      opacity: 0,
      y: 60,
      duration: 0.8,
      ease: 'power3.out'
    })
  })

  const splitText = (text) => {
    return text.split('').map((char, i) => (
      <span key={i} className='blog-char' style={{ display: char === ' ' ? 'inline' : 'inline-block', opacity: 0, transform: 'translateY(120px) rotateX(40deg)' }}>
        {char === ' ' ? '\u00A0' : char}
      </span>
    ))
  }

  const handleTilt = useCallback((e, index) => {
    const card = cardRefs.current[index]
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = ((y - centerY) / centerY) * -10
    const rotateY = ((x - centerX) / centerX) * 10
    gsap.to(card.querySelector('.tilt-inner'), {
      rotateX,
      rotateY,
      duration: 0.4,
      ease: 'power2.out',
      transformPerspective: 1000
    })
  }, [])

  const resetTilt = useCallback((index) => {
    const card = cardRefs.current[index]
    if (!card) return
    gsap.to(card.querySelector('.tilt-inner'), {
      rotateX: 0,
      rotateY: 0,
      duration: 0.4,
      ease: 'power2.out'
    })
  }, [])

  return (
    <div className='text-black bg-white'>
      <div className='pt-[25vh] pb-20 px-10 relative overflow-hidden'>
        <div className='orbs w-[40vw] h-[40vw] bg-[#D3FD50] top-[-15vw] left-[-5vw] opacity-10' style={{ animation: 'float 10s ease-in-out infinite' }} />
        <div className='orbs w-[25vw] h-[25vw] bg-black top-[30vh] right-[-5vw] opacity-5' style={{ animation: 'float 7s ease-in-out infinite reverse' }} />
        <div className='relative z-10'>
          <h1 className='font-[font2] text-[19vw] uppercase leading-[16vw] text-center select-none'>
            {splitText('Latest')}
          </h1>
          <h1 className='font-[font2] text-[19vw] uppercase leading-[16vw] text-center -mt-8 select-none'>
            {splitText('Reads')}
          </h1>
        </div>
        <div className='flex justify-center mt-20 relative z-10'>
          <div className='w-[1px] h-32 bg-black blog-line-drop origin-top' style={{ transform: 'scaleY(0)' }}></div>
        </div>
      </div>

      <div className='categories-wrap px-10 pb-16 flex justify-center gap-4 flex-wrap'>
        {categories.map((cat) => (
          <button key={cat} className='category-pill font-[font2] text-sm uppercase tracking-[0.15em] px-8 py-3 rounded-full border-2 border-black/20 hover:bg-black hover:text-white hover:border-black transition-all duration-300'>
            {cat}
          </button>
        ))}
      </div>

      <div className='featured-wrap px-10 pb-20'>
        <div className='featured-card group cursor-pointer relative overflow-hidden rounded-[3vw] bg-black text-white'>
          <img className='w-full h-[70vh] object-cover opacity-60 group-hover:scale-105 transition-all duration-700' src='https://picsum.photos/seed/featured/1920/1080' alt='Featured post' />
          <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent'></div>
          <div className='absolute bottom-0 left-0 p-12 lg:p-20'>
            <span className='font-[font2] text-xs uppercase tracking-[0.2em] text-[#D3FD50]'>Featured · Design</span>
            <h2 className='font-[font2] text-5xl lg:text-7xl uppercase leading-tight mt-4 max-w-3xl group-hover:text-[#D3FD50] transition-colors duration-300'>
              The future of motion design is already here
            </h2>
            <p className='font-[font1] text-lg mt-4 text-white/60 max-w-xl'>
              How brands are using kinetic identities to stay ahead in an accelerated world.
            </p>
            <span className='font-[font2] text-xs uppercase tracking-[0.1em] text-white/40 mt-6 block'>May 20, 2026</span>
          </div>
        </div>
      </div>

      <div ref={gridRef} className='px-10 pb-40'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {posts.map((post, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className='blog-card group cursor-pointer blog-card-3d'
              onMouseMove={(e) => handleTilt(e, index)}
              onMouseLeave={() => resetTilt(index)}
            >
              <div className='tilt-inner'>
                <div className='overflow-hidden rounded-[2vw] mb-6 relative'>
                  <img
                    className='w-full h-64 object-cover transition-all duration-700 group-hover:scale-110'
                    src={post.image}
                    alt={post.title}
                  />
                  <div className='absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500'></div>
                </div>
                <div>
                  <span className='font-[font2] text-xs uppercase tracking-[0.2em] text-[#D3FD50]'>{post.category}</span>
                  <h3 className='font-[font2] text-2xl uppercase leading-tight mt-2 group-hover:text-[#D3FD50] transition-colors duration-300'>{post.title}</h3>
                  <p className='font-[font1] text-base mt-3 text-black/60 leading-relaxed'>{post.excerpt}</p>
                  <div className='flex items-center justify-between mt-4'>
                    <span className='font-[font2] text-xs uppercase tracking-[0.1em] text-black/40'>{post.date}</span>
                    <span className='font-[font2] text-xs uppercase tracking-[0.1em] text-black opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0'>
                      Read →
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div ref={marqueeRef} className='bg-black text-white py-8 overflow-hidden border-y border-white/10'>
        <div className='marquee-track flex gap-16 whitespace-nowrap' style={{ width: 'max-content' }}>
          {[...Array(3)].map((_, i) => (
            <div key={i} className='flex gap-16 items-center'>
              <span className='font-[font2] text-2xl uppercase tracking-[0.2em]'>Strategy</span>
              <span className='w-2 h-2 bg-[#D3FD50] rounded-full'></span>
              <span className='font-[font2] text-2xl uppercase tracking-[0.2em]'>Design</span>
              <span className='w-2 h-2 bg-[#D3FD50] rounded-full'></span>
              <span className='font-[font2] text-2xl uppercase tracking-[0.2em]'>Culture</span>
              <span className='w-2 h-2 bg-[#D3FD50] rounded-full'></span>
              <span className='font-[font2] text-2xl uppercase tracking-[0.2em]'>Advertising</span>
              <span className='w-2 h-2 bg-[#D3FD50] rounded-full'></span>
              <span className='font-[font2] text-2xl uppercase tracking-[0.2em]'>Branding</span>
              <span className='w-2 h-2 bg-[#D3FD50] rounded-full'></span>
              <span className='font-[font2] text-2xl uppercase tracking-[0.2em]'>Motion</span>
              <span className='w-2 h-2 bg-[#D3FD50] rounded-full'></span>
              <span className='font-[font2] text-2xl uppercase tracking-[0.2em]'>Typography</span>
              <span className='w-2 h-2 bg-[#D3FD50] rounded-full'></span>
            </div>
          ))}
        </div>
      </div>

      <div className='blog-footer bg-black text-white px-10 py-16 border-t border-white/10'>
        <div className='footer-reveal-blog'>
          <div className='flex justify-between items-center'>
            <div className='flex gap-6'>
              {['fb', 'ig', 'in', 'be'].map((s) => (
                <button key={s} className='font-[font2] uppercase border-4 border-white rounded-[3.5vw] px-10 py-3 hover:text-[#D3FD50] hover:border-[#D3FD50] transition-all duration-300'>
                  {s}
                </button>
              ))}
            </div>
            <a href='#top' className='font-[font2] uppercase border-4 border-white rounded-[3.5vw] px-10 py-3 text-2xl hover:text-[#D3FD50] hover:border-[#D3FD50] transition-all duration-300'>
              Back to top
            </a>
          </div>
          <div className='pt-20 flex justify-center'>
            <h1 className='font-[font2] text-8xl uppercase text-center'>See you in motion</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog
