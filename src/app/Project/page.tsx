'use client';

import React, { useState } from 'react';
import { ProjectCart } from '@/component/project/ProjectCart';
import { LaptopProjectModal } from '@/component/project/LaptopProjectModal';
import { ProjectDetails, projectsDataList } from '@/data/projectsData';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

interface ProjectRowData {
  image1: string;
  image2: string;
  project1: ProjectDetails;
  project2: ProjectDetails;
}

const ProjectPage: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectDetails | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const allProjectsList = projectsDataList;

  const projectsData: ProjectRowData[] = [
    {
      image1: '/projects/orion.png',
      image2: '/projects/azure.png',
      project1: allProjectsList[0],
      project2: allProjectsList[1],
    },
    {
      image1: '/projects/bugatti.png',
      image2: '/projects/azure.png',
      project1: allProjectsList[2],
      project2: allProjectsList[3],
    },
  ];

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const heroElements = document.querySelectorAll('.hero-row');
    heroElements.forEach((hero) => {
      gsap.fromTo(
        hero,
        { height: '140px' },
        {
          height: '700px',
          ease: 'power2.out',
          scrollTrigger: {
            trigger: hero,
            start: 'top 92%',
            end: 'top 35%',
            scrub: 1,
          },
        }
      );
    });
  });

  const handleOpenProject = (project: ProjectDetails) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const handleNextProject = () => {
    if (!selectedProject) return;
    const currentIndex = allProjectsList.findIndex((p) => p.id === selectedProject.id);
    const nextIndex = (currentIndex + 1) % allProjectsList.length;
    setSelectedProject(allProjectsList[nextIndex]);
  };

  const handlePrevProject = () => {
    if (!selectedProject) return;
    const currentIndex = allProjectsList.findIndex((p) => p.id === selectedProject.id);
    const prevIndex = (currentIndex - 1 + allProjectsList.length) % allProjectsList.length;
    setSelectedProject(allProjectsList[prevIndex]);
  };

  return (
    <div className='text-black p-4 sm:p-6 lg:p-8 bg-white min-h-screen'>
      <div className='pt-[35vh] sm:pt-[40vh]'>
        <h2 className='font-[font2] text-[13.5vw] uppercase select-none leading-none tracking-tight mb-8 sm:mb-12'>
          Our Work
        </h2>

        <div className='project-container flex flex-col gap-6 sm:gap-8'>
          {projectsData.map((row, index) => (
            <div
              key={index}
              className='hero-row w-full h-[700px] overflow-hidden rounded-2xl sm:rounded-3xl flex flex-col sm:flex-row gap-4 shadow-sm bg-neutral-100'
            >
              <ProjectCart
                image1={row.image1}
                image2={row.image2}
                project1={row.project1}
                project2={row.project2}
                onSelectProject={handleOpenProject}
              />
            </div>
          ))}
        </div>
      </div>

      {/* ── EXPANDED 3-COLUMN LUXURY EDITORIAL STAGE MODAL (Exact match to screenshot) ── */}
      <LaptopProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onNextProject={handleNextProject}
        onPrevProject={handlePrevProject}
      />
    </div>
  );
};

export { ProjectPage };
export default ProjectPage;
