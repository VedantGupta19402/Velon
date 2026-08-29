'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ProjectDetails } from '@/data/projectsData';

interface ProjectShowcaseViewProps {
  project: ProjectDetails;
  onClose?: () => void;
  onNextProject?: () => void;
  onPrevProject?: () => void;
  backHref?: string;
}

const ProjectShowcaseView: React.FC<ProjectShowcaseViewProps> = ({
  project,
  onClose,
  onNextProject,
  onPrevProject,
  backHref = '/Project',
}) => {
  const [iframeLoaded, setIframeLoaded] = useState<boolean>(false);
  const [interactiveMode, setInteractiveMode] = useState<boolean>(false);

  return (
    <div className='relative w-full h-screen bg-[#EFECE6] text-neutral-900 select-none overflow-hidden flex flex-col font-sans'>
      {/* ── AMBIENT WARM STUDIO BACKGROUND ── */}
      <div className='fixed inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_50%_46%,_rgba(255,255,255,0.85)_0%,_rgba(240,237,230,0.95)_55%,_rgba(226,220,211,1)_100%)]' />

      {/* Decorative SVG Bezier Arc */}
      <svg
        className='fixed top-0 left-0 w-[480px] h-[480px] pointer-events-none opacity-20 z-0'
        viewBox='0 0 480 480'
        fill='none'
      >
        <path
          d='M 260 0 Q 260 200 360 260'
          stroke='#111111'
          strokeWidth='0.75'
          strokeDasharray='3 3'
        />
        <circle cx='260' cy='22' r='2.5' fill='#111111' />
      </svg>

      {/* ── 1. GLOBAL NAVIGATION ── */}
      <header className='relative z-20 w-full px-[5vw] sm:px-[5.5vw] pt-6 sm:pt-8 pb-2 flex items-center justify-between shrink-0'>
        {/* Left: Brand Identity */}
        <div className='flex items-center gap-4'>
          <span className='font-mono text-xs sm:text-[13px] font-semibold tracking-[0.26em] text-neutral-900 uppercase'>
            VEDANT GUPTA
          </span>
          <div className='w-12 sm:w-16 h-[1px] bg-neutral-400/80' />
        </div>

        {/* Right: Editorial Nav Links & Controls */}
        <div className='flex items-center gap-8 sm:gap-12'>
          <nav className='hidden md:flex items-center gap-8 lg:gap-10 text-[11px] font-mono tracking-[0.2em] uppercase'>
            <Link
              href='/Project'
              className='text-neutral-900 font-bold border-b border-neutral-900 pb-0.5 tracking-[0.2em]'
            >
              WORK
            </Link>
            <Link
              href='/Agence'
              className='text-neutral-500 hover:text-neutral-900 transition-colors tracking-[0.2em]'
            >
              ABOUT
            </Link>
            <Link
              href='/Blog'
              className='text-neutral-500 hover:text-neutral-900 transition-colors tracking-[0.2em]'
            >
              EXPERIMENTS
            </Link>
            <Link
              href='/Contact'
              className='text-neutral-500 hover:text-neutral-900 transition-colors tracking-[0.2em]'
            >
              CONTACT
            </Link>
          </nav>

          {/* Minimalist Action Dot / Close Toggle */}
          <div className='flex items-center gap-3 pl-2'>
            {onClose ? (
              <button
                type='button'
                onClick={onClose}
                aria-label='Close View'
                className='flex items-center gap-2 group cursor-pointer'
              >
                <div className='w-2.5 h-2.5 rounded-full bg-neutral-900 group-hover:bg-[#D3FD50] transition-colors' />
                <div className='w-4 h-[2px] bg-neutral-900 group-hover:bg-neutral-600 transition-colors' />
              </button>
            ) : (
              <Link
                href={backHref}
                aria-label='Back to Projects'
                className='flex items-center gap-2 group cursor-pointer'
              >
                <div className='w-2.5 h-2.5 rounded-full bg-neutral-900 group-hover:bg-[#D3FD50] transition-colors' />
                <div className='w-4 h-[2px] bg-neutral-900 group-hover:bg-neutral-600 transition-colors' />
              </Link>
            )}
          </div>
        </div>
      </header>

      {/* ── 2. FULL VIEWPORT HERO COMPOSITION ── */}
      <main className='relative z-10 w-full flex-1 flex flex-col justify-center overflow-hidden'>
        
        {/* 3-Column Composition Grid */}
        <div
          className='w-full h-full flex flex-col lg:flex-row items-stretch'
          style={{ minHeight: 0 }}
        >
          
          {/* ── LEFT COLUMN: TITLE & IDENTITY ── */}
          <div className='w-full lg:w-[22vw] xl:w-[20vw] 2xl:w-[18vw] flex flex-col justify-center px-[5vw] sm:px-[5.5vw] py-6 lg:py-0 order-2 lg:order-1 shrink-0 relative z-10'>
            
            {/* Section Eyebrow */}
            <div className='flex items-center gap-3.5 mb-5'>
              <span className='font-mono text-[11px] sm:text-xs font-semibold tracking-[0.18em] text-neutral-800 uppercase'>
                {project.indexNumber || '01'} / {project.totalProjects || '04'}
              </span>
              <div className='w-14 sm:w-16 h-[1px] bg-neutral-400/80' />
            </div>

            {/* Large Editorial Project Title */}
            <h1
              className='font-bold text-neutral-900 uppercase mb-3'
              style={{
                fontFamily: '"Cormorant Garamond", serif',
                fontSize: 'clamp(3.5rem, 6vw, 7.5rem)',
                lineHeight: 0.85,
                letterSpacing: '-0.04em',
              }}
            >
              {project.titleLine1 || 'ORION'}
              <br />
              {project.titleLine2 || 'INK'}
            </h1>

            {/* Subtitle Kicker */}
            <span className='font-mono text-[11px] sm:text-[12px] font-bold tracking-[0.2em] text-neutral-800 uppercase mb-6 block'>
              {project.categoryTag || 'INTERACTIVE TATTOO EXPERIENCE'}
            </span>

            {/* Supporting Description */}
            <p
              className='text-neutral-600 max-w-[22rem] mb-7 font-light'
              style={{
                fontFamily: 'font1, sans-serif',
                fontSize: 'clamp(13px, 0.9vw, 15px)',
                lineHeight: 1.7,
              }}
            >
              {project.description}
            </p>

            {/* View Live Site CTA */}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='group inline-flex items-center gap-2 text-xs sm:text-[13px] font-mono font-bold tracking-[0.14em] text-neutral-900 border-b border-neutral-900 pb-0.5 hover:text-neutral-500 hover:border-neutral-500 transition-all uppercase w-fit'
              >
                <span>VIEW LIVE SITE</span>
                <span className='group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform'>
                  ↗
                </span>
              </a>
            )}
          </div>

          {/* ── CENTER COLUMN: DRAMATICALLY LARGE LAPTOP HERO ── */}
          <div className='w-full lg:flex-1 flex flex-col items-center justify-center order-1 lg:order-2 relative px-4 lg:px-0'>
            
            {/* The MacBook Pro — Takes up the full center space */}
            <div
              className='relative flex flex-col items-center select-none'
              style={{
                width: 'min(62vw, 1100px)',
                maxWidth: '100%',
              }}
            >
              
              {/* Laptop Top Display Screen Lid */}
              <div
                className='relative w-full bg-[#111419] p-[0.7%] pb-[0.6%]'
                style={{
                  aspectRatio: '16 / 10',
                  borderRadius: 'clamp(12px, 1.5vw, 24px)',
                  borderBottomLeftRadius: 0,
                  borderBottomRightRadius: 0,
                  border: '1px solid #262B34',
                  boxShadow: '0 40px 120px rgba(0,0,0,0.35), 0 15px 40px rgba(0,0,0,0.2)',
                }}
              >
                
                {/* Top Camera Notch & Sensor LED */}
                <div className='absolute top-1 sm:top-1.5 inset-x-0 flex justify-center items-center gap-1.5 z-20 pointer-events-none'>
                  <div className='w-1.5 h-1.5 rounded-full bg-[#050505] border border-white/20 flex items-center justify-center'>
                    <div className='w-0.5 h-0.5 rounded-full bg-[#1E3A8A]' />
                  </div>
                  <div className='w-1 h-1 rounded-full bg-[#00FF66]/80 animate-pulse' />
                </div>

                {/* Inner Screen Display */}
                <div className='relative w-full h-full overflow-hidden bg-[#0A0D12] border border-black shadow-inner' style={{ borderRadius: 'clamp(8px, 1.2vw, 18px)' }}>
                  
                  {/* Project Screenshot */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`w-full h-full object-cover object-top transition-opacity duration-500 scale-[1.005] ${
                      interactiveMode && iframeLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'
                    }`}
                  />

                  {/* Live Interactive Embed */}
                  {interactiveMode && project.liveUrl && (
                    <iframe
                      src={project.liveUrl}
                      title={project.title}
                      onLoad={() => setIframeLoaded(true)}
                      className='w-full h-full border-0 absolute inset-0 bg-[#0A0D12]'
                      sandbox='allow-scripts allow-same-origin allow-popups allow-forms'
                    />
                  )}

                  {/* Display Glass Glare */}
                  <div className='absolute inset-0 pointer-events-none bg-gradient-to-tr from-transparent via-white/[0.03] to-white/[0.06]' />
                </div>
              </div>

              {/* Bottom Laptop Chassis Base */}
              <div
                className='relative h-[1.2vw] min-h-[10px] max-h-[22px] -mt-px flex justify-center items-start'
                style={{
                  width: '104%',
                  background: 'linear-gradient(to bottom, #343B45, #20252D, #111419)',
                  borderBottomLeftRadius: 'clamp(10px, 1.5vw, 24px)',
                  borderBottomRightRadius: 'clamp(10px, 1.5vw, 24px)',
                  borderTop: '1px solid #464E5B',
                  boxShadow: '0 8px 30px rgba(0,0,0,0.3)',
                }}
              >
                {/* Trackpad Cutout */}
                <div className='w-[15%] min-w-[80px] max-w-[180px] h-[40%] bg-[#0A0D12] rounded-b-lg shadow-inner' />
              </div>

              {/* Ground Shadow */}
              <div className='w-[90%] h-[1.5vw] min-h-[8px] max-h-[16px] bg-black/25 blur-xl rounded-full -mt-1 pointer-events-none' />

              {/* Interactive Mode Switcher */}
              <div className='mt-3 flex items-center gap-2.5'>
                <button
                  type='button'
                  onClick={() => setInteractiveMode(!interactiveMode)}
                  className='px-4 py-1.5 rounded-full bg-neutral-900/10 hover:bg-neutral-900 text-neutral-800 hover:text-white text-[11px] font-mono uppercase tracking-wider transition-all cursor-pointer font-medium'
                >
                  {interactiveMode ? '✦ Live Interactive Mode Active' : '✦ Switch to Live Preview'}
                </button>
              </div>
            </div>
          </div>

          {/* ── RIGHT COLUMN: METADATA ── */}
          <div className='w-full lg:w-[20vw] xl:w-[18vw] 2xl:w-[16vw] flex flex-col justify-center order-3 px-[5vw] sm:px-[5.5vw] lg:px-0 lg:pr-[5vw] py-6 lg:py-0 shrink-0 lg:pl-8 xl:pl-10'>
            
            {/* Year */}
            <div className='mb-6'>
              <span className='font-mono text-[10px] uppercase tracking-[0.22em] text-neutral-400 font-medium block mb-2'>
                YEAR
              </span>
              <p className='font-mono text-[13px] text-neutral-900 font-medium'>
                {project.year || '2026'}
              </p>
            </div>

            {/* Category */}
            <div className='mb-6'>
              <span className='font-mono text-[10px] uppercase tracking-[0.22em] text-neutral-400 font-medium block mb-2.5'>
                CATEGORY
              </span>
              <div className='space-y-1 text-[13px] text-neutral-800 leading-relaxed' style={{ fontFamily: 'font1, sans-serif' }}>
                {project.categories && project.categories.length > 0 ? (
                  project.categories.map((c, i) => <p key={i}>{c}</p>)
                ) : (
                  <>
                    <p>Creative Development</p>
                    <p>Design</p>
                    <p>Motion</p>
                  </>
                )}
              </div>
            </div>

            {/* Technologies */}
            <div className='mb-6'>
              <span className='font-mono text-[10px] uppercase tracking-[0.22em] text-neutral-400 font-medium block mb-2.5'>
                TECHNOLOGIES
              </span>
              <div className='space-y-1 font-mono text-[12px] text-neutral-800 leading-relaxed'>
                {project.technologies && project.technologies.length > 0 ? (
                  project.technologies.map((t, i) => <p key={i}>{t}</p>)
                ) : (
                  <>
                    <p>React</p>
                    <p>GSAP</p>
                    <p>Tailwind</p>
                  </>
                )}
              </div>
            </div>

            {/* Divider */}
            <div className='w-full h-[1px] bg-neutral-300/50 mb-6' />

            {/* Role */}
            <div className='mb-6'>
              <span className='font-mono text-[10px] uppercase tracking-[0.22em] text-neutral-400 font-medium block mb-2.5'>
                ROLE
              </span>
              <div className='space-y-1 text-[13px] text-neutral-800 leading-relaxed' style={{ fontFamily: 'font1, sans-serif' }}>
                {project.roleList && project.roleList.length > 0 ? (
                  project.roleList.map((r, i) => <p key={i}>{r}</p>)
                ) : (
                  <>
                    <p>Full Stack Developer</p>
                    <p>Creative Technologist</p>
                  </>
                )}
              </div>
            </div>

            {/* View Case Study CTA */}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='group inline-flex items-center gap-2.5 text-[11px] font-mono font-bold tracking-[0.14em] text-neutral-900 hover:text-neutral-500 transition-colors uppercase'
              >
                <div className='w-5 h-5 rounded-full border border-neutral-900 flex items-center justify-center text-[10px] group-hover:bg-neutral-900 group-hover:text-white transition-colors'>
                  +
                </div>
                <span className='border-b border-neutral-900 pb-0.5 group-hover:border-neutral-500'>
                  VIEW CASE STUDY ↗
                </span>
              </a>
            )}
          </div>

        </div>

        {/* Small index number at bottom-left of composition */}
        <div className='absolute bottom-6 left-[5.5vw] z-10 hidden lg:block'>
          <span className='font-mono text-[11px] text-neutral-400 tracking-[0.15em]'>
            {project.indexNumber || '01'}
          </span>
        </div>
      </main>

      {/* ── 3. BOTTOM PROJECT NAVIGATION FOOTER ── */}
      <footer className='relative z-20 w-full px-[5vw] sm:px-[5.5vw] py-5 border-t border-neutral-300/60 flex flex-col md:flex-row items-center justify-between gap-4 shrink-0'>
        
        {/* Left: Projects Tag */}
        <div className='flex items-center gap-4 min-w-[140px]'>
          <span className='font-mono text-[11px] uppercase tracking-[0.22em] text-neutral-500 font-semibold'>
            | PROJECTS
          </span>
          <div className='w-12 sm:w-16 h-[1px] bg-neutral-400/80' />
        </div>

        {/* Center: Manifesto Statement */}
        <div className='text-center px-4 flex-1'>
          <p
            className='font-semibold text-neutral-900 uppercase'
            style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontSize: 'clamp(15px, 1.4vw, 24px)',
              lineHeight: 1.3,
              letterSpacing: '0.04em',
            }}
          >
            Turning Ideas Into<br className='hidden sm:inline' /> Immersive Digital Experiences.
          </p>
        </div>

        {/* Right: Previous / Next Project Navigation */}
        <div className='flex items-center gap-6 sm:gap-8 min-w-[240px] justify-end'>
          {/* Previous Project */}
          {project.prevProjectSlug ? (
            <Link
              href={`/Project/${project.prevProjectSlug}`}
              onClick={onPrevProject}
              className='group text-right cursor-pointer'
            >
              <div className='flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-neutral-500 group-hover:text-neutral-900 transition-colors justify-end'>
                <span>←</span>
                <span>PREVIOUS PROJECT</span>
              </div>
              <p className='font-mono text-xs font-bold text-neutral-800 group-hover:text-neutral-900 uppercase transition-colors'>
                {project.prevProjectTitle || 'AZURE HORIZON'}
              </p>
            </Link>
          ) : (
            onPrevProject && (
              <button
                type='button'
                onClick={onPrevProject}
                className='group text-right cursor-pointer'
              >
                <div className='flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-neutral-500 group-hover:text-neutral-900 transition-colors justify-end'>
                  <span>←</span>
                  <span>PREVIOUS PROJECT</span>
                </div>
                <p className='font-mono text-xs font-bold text-neutral-800 group-hover:text-neutral-900 uppercase transition-colors'>
                  {project.prevProjectTitle || 'AZURE HORIZON'}
                </p>
              </button>
            )
          )}

          {/* Vertical Separator */}
          <div className='w-[1px] h-7 bg-neutral-300/80' />

          {/* Next Project */}
          {project.nextProjectSlug ? (
            <Link
              href={`/Project/${project.nextProjectSlug}`}
              onClick={onNextProject}
              className='group text-left cursor-pointer'
            >
              <div className='flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-neutral-500 group-hover:text-neutral-900 transition-colors'>
                <span>NEXT PROJECT</span>
                <span>→</span>
              </div>
              <p className='font-mono text-xs font-bold text-neutral-800 group-hover:text-neutral-900 uppercase transition-colors'>
                {project.nextProjectTitle || 'VELONN'}
              </p>
            </Link>
          ) : (
            onNextProject && (
              <button
                type='button'
                onClick={onNextProject}
                className='group text-left cursor-pointer'
              >
                <div className='flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-neutral-500 group-hover:text-neutral-900 transition-colors'>
                  <span>NEXT PROJECT</span>
                  <span>→</span>
                </div>
                <p className='font-mono text-xs font-bold text-neutral-800 group-hover:text-neutral-900 uppercase transition-colors'>
                  {project.nextProjectTitle || 'VELONN'}
                </p>
              </button>
            )
          )}
        </div>

      </footer>
    </div>
  );
};

export type { ProjectShowcaseViewProps };
export { ProjectShowcaseView };
export default ProjectShowcaseView;