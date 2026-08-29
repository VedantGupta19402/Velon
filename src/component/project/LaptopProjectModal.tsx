'use client';

import React, { useEffect } from 'react';
import { ProjectDetails } from '@/data/projectsData';
import { ProjectShowcaseView } from './ProjectShowcaseView';

interface LaptopProjectModalProps {
  project: ProjectDetails | null;
  isOpen: boolean;
  onClose: () => void;
  onNextProject?: () => void;
  onPrevProject?: () => void;
}

const LaptopProjectModal: React.FC<LaptopProjectModalProps> = ({
  project,
  isOpen,
  onClose,
  onNextProject,
  onPrevProject,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !project) return null;

  return (
    <div className='fixed inset-0 z-50 bg-[#EFECE6] overflow-y-auto animate-in fade-in duration-300'>
      <ProjectShowcaseView
        project={project}
        onClose={onClose}
        onNextProject={onNextProject}
        onPrevProject={onPrevProject}
        backHref='/Project'
      />
    </div>
  );
};

export type { ProjectDetails, LaptopProjectModalProps };
export { LaptopProjectModal };
export default LaptopProjectModal;
