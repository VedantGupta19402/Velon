import React from 'react';
import { notFound } from 'next/navigation';
import { projectsDataList } from '@/data/projectsData';
import { ProjectShowcaseView } from '@/component/project/ProjectShowcaseView';

interface ProjectSlugPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return projectsDataList.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectSlugPage({ params }: ProjectSlugPageProps) {
  const { slug } = await params;
  const project = projectsDataList.find((p) => p.slug === slug || p.id === slug);

  if (!project) {
    notFound();
  }

  return <ProjectShowcaseView project={project} backHref='/Project' />;
}
