import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useRef } from 'react'

const Contact = () => {
  gsap.registerPlugin(ScrollTrigger)

  const topics = [
    ['your', 'project'],
    ['your', 'brand'],
    ['natural', 'wine'],
    ['results'],
    ['nothing in', 'particular'],
    ['the', 'sake of', 'talking'],
    ['your', 'goals'],
    ['Myspace'],
    ['conversion'],
    ['the', 'funnel'],
    ['identity'],
    ['your', 'feelings'],
    ['diversity'],
    ['your', 'startup'],
    ['a', 'pitch'],
    ['beards'],
    ['Degrassi', 'Junior', 'High'],
    ['your', 'business'],
    ['on', 'mute'],
    ['much', 'louder']
  ]

  const sectionRefs = useRef([])

  useGSAP(function () {
    sectionRefs.current.forEach((ref) => {
      if (!ref) return
      gsap.from(ref.querySelectorAll('.anim-line'), {
        scrollTrigger: {
          trigger: ref,
          start: 'top 90%',
          end: 'top 40%',
          scrub: 1
        },
        y: 120,
        opacity: 0,
        stagger: 0.08,
        ease: 'power2.out'
      })
    })
  })

  const socials = [
    { label: 'FB', href: 'https://www.facebook.com/K72.ca/' },
    { label: 'IG', href: 'https://www.instagram.com/k72_creation/' },
    { label: 'IN', href: 'https://www.linkedin.com/company/k72' },
    { label: 'BE', href: 'https://www.behance.net/agenceK72' }
  ]

  return (
    <div className='bg-white text-black'>
      {topics.map((topic, i) => (
        <section
          key={i}
          ref={el => { sectionRefs.current[i] = el }}
          className='min-h-screen flex flex-col justify-center px-6 sm:px-10 lg:px-20 py-20 border-b border-black/5'
        >
          <div className='max-w-7xl mx-auto w-full'>
            <h2 className='font-[font1] text-[10vw] sm:text-[8vw] lg:text-[6.5vw] leading-[1.05] uppercase select-none -tracking-[0.02em]'>
              <div className='anim-line'>To talk</div>
              <div className='anim-line'>about</div>
              {topic.map((word, j) => (
                <div key={j} className='anim-line font-[font2]'>{word}</div>
              ))}
            </h2>

            <div className='flex flex-col sm:flex-row gap-8 sm:gap-12 lg:gap-20 mt-12 sm:mt-16 lg:mt-20 mb-10 sm:mb-14 lg:mb-18'>
              <p className='anim-line font-[font1] text-base sm:text-lg lg:text-xl text-black/50 leading-relaxed'>
                Onscreen or in an office.<br />
                Here. There.<br />
                Anywhere.
              </p>
              <address className='anim-line not-italic'>
                <a
                  href='https://maps.app.goo.gl/PwGE7FGRcGwdtdto6'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='font-[font2] text-base sm:text-lg lg:text-xl hover:text-[#D3FD50] transition-colors duration-300 leading-relaxed'
                >
                  525 Av. Viger O - Suite 400<br />
                  Montréal, QC H2Z 1G6 →
                </a>
              </address>
            </div>

            <div className='anim-line overflow-hidden border-t border-b border-black/10 py-4 sm:py-5 mb-8 sm:mb-10'>
              <div className='marquee-track flex whitespace-nowrap'>
                <a
                  href='mailto:hello@k72.ca'
                  className='font-[font2] text-lg sm:text-xl lg:text-2xl hover:text-[#D3FD50] transition-colors duration-300 flex items-center gap-6 sm:gap-8 mr-6 sm:mr-8 shrink-0'
                >
                  <span>hello@k72.ca</span>
                  <svg className='w-5 h-5 sm:w-6 sm:h-6 fill-current shrink-0' viewBox='0 0 24 24'><path d='M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z' /></svg>
                </a>
                <a
                  href='mailto:hello@k72.ca'
                  className='font-[font2] text-lg sm:text-xl lg:text-2xl hover:text-[#D3FD50] transition-colors duration-300 flex items-center gap-6 sm:gap-8 mr-6 sm:mr-8 shrink-0'
                  aria-hidden='true'
                >
                  <span>hello@k72.ca</span>
                  <svg className='w-5 h-5 sm:w-6 sm:h-6 fill-current shrink-0' viewBox='0 0 24 24'><path d='M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z' /></svg>
                </a>
                <a
                  href='mailto:hello@k72.ca'
                  className='font-[font2] text-lg sm:text-xl lg:text-2xl hover:text-[#D3FD50] transition-colors duration-300 flex items-center gap-6 sm:gap-8 mr-6 sm:mr-8 shrink-0'
                  aria-hidden='true'
                >
                  <span>hello@k72.ca</span>
                  <svg className='w-5 h-5 sm:w-6 sm:h-6 fill-current shrink-0' viewBox='0 0 24 24'><path d='M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z' /></svg>
                </a>
              </div>
            </div>

            <div className='anim-line'>
              <h3 className='font-[font2] text-xs sm:text-sm uppercase tracking-[0.25em] text-black/40 mb-4'>
                Follow us
              </h3>
              <ul className='flex gap-6 sm:gap-8'>
                {socials.map(s => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='font-[font2] uppercase text-xs sm:text-sm tracking-widest hover:text-[#D3FD50] transition-colors duration-300'
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ))}
    </div>
  )
}

export default Contact














