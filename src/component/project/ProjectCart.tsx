'use client';

import React from 'react';
import { ProjectDetails } from './LaptopProjectModal';

interface ProjectCartProps {
  image1: string;
  image2: string;
  project1?: ProjectDetails;
  project2?: ProjectDetails;
  onSelectProject?: (project: ProjectDetails) => void;
}

const ProjectCart: React.FC<ProjectCartProps> = ({
  image1,
  image2,
  project1,
  project2,
  onSelectProject,
}) => {
  const handleClick1 = () => {
    if (onSelectProject && project1) {
      onSelectProject(project1);
    }
  };

  const handleClick2 = () => {
    if (onSelectProject && project2) {
      onSelectProject(project2);
    }
  };

  return (
    <>
      <div
        onClick={handleClick1}
        className='group relative w-1/2 h-full hover:rounded-[4vw] transition-all duration-500 overflow-hidden cursor-pointer'
      >
        <img className='h-full w-full object-cover' src={image1} alt='Project preview' />
        <div className='absolute transition-all duration-300 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center top-0 left-0 text-white bg-black/60 backdrop-blur-sm h-full w-full p-8 text-center'>
          {project1 && (
            <span className='text-xs font-mono uppercase tracking-widest text-[#D3FD50] mb-3'>
              {project1.categoryTag || project1.category}
            </span>
          )}
          <h2 className='font-[font1] text-4xl sm:text-6xl border-4 border-white group-hover:border-[#D3FD50] group-hover:text-[#D3FD50] rounded-full pt-3 px-8 transition-all duration-300'>
            View Project
          </h2>
          {project1 && (
            <span className='font-[font2] text-sm sm:text-lg uppercase tracking-wider text-white/70 mt-4'>
              {project1.title}
            </span>
          )}
        </div>
      </div>

      <div
        onClick={handleClick2}
        className='group relative w-1/2 h-full hover:rounded-[4vw] transition-all duration-500 overflow-hidden cursor-pointer'
      >
        <img className='h-full w-full object-cover' src={image2} alt='Project preview' />
        <div className='absolute transition-all duration-300 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center top-0 left-0 text-white bg-black/60 backdrop-blur-sm h-full w-full p-8 text-center'>
          {project2 && (
            <span className='text-xs font-mono uppercase tracking-widest text-[#D3FD50] mb-3'>
              {project2.categoryTag || project2.category}
            </span>
          )}
          <h2 className='font-[font1] text-4xl sm:text-6xl border-4 border-white group-hover:border-[#D3FD50] group-hover:text-[#D3FD50] rounded-full pt-3 px-8 transition-all duration-300'>
            View Project
          </h2>
          {project2 && (
            <span className='font-[font2] text-sm sm:text-lg uppercase tracking-wider text-white/70 mt-4'>
              {project2.title}
            </span>
          )}
        </div>
      </div>
    </>
  );
};

export type { ProjectCartProps };
export { ProjectCart };
export default ProjectCart;
