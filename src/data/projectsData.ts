export interface ProjectDetails {
  id: string;
  slug: string;
  indexNumber: string;
  totalProjects: string;
  titleLine1: string;
  titleLine2: string;
  title: string;
  category?: string;
  categoryTag: string;
  tagline?: string;
  year: string;
  categories: string[];
  technologies: string[];
  roleList: string[];
  description: string;
  liveUrl: string;
  githubUrl?: string;
  image: string;
  prevProjectSlug: string;
  prevProjectTitle: string;
  nextProjectSlug: string;
  nextProjectTitle: string;
}

export const projectsDataList: ProjectDetails[] = [
  {
    id: 'orion-ink',
    slug: 'orion-ink',
    indexNumber: '01',
    totalProjects: '04',
    titleLine1: 'ORION',
    titleLine2: 'INK',
    title: 'ORION INK',
    categoryTag: 'INTERACTIVE TATTOO EXPERIENCE',
    category: 'EDITORIAL EXPERIENCE',
    year: '2026',
    categories: ['Creative Development', 'Design', 'Motion'],
    technologies: ['React', 'GSAP', 'Tailwind'],
    roleList: ['Full Stack Developer', 'Creative Technologist'],
    description:
      'A digital experience that brings the art of tattoo culture to life through immersive visuals, smooth interactions and a bold visual narrative.',
    liveUrl: 'https://orion-ink.netlify.app/',
    githubUrl: 'https://github.com/vedantgupta',
    image: '/projects/orion.png',
    prevProjectSlug: 'velonn',
    prevProjectTitle: 'VELONN MOTILITY',
    nextProjectSlug: 'azure-horizon',
    nextProjectTitle: 'AZURE HORIZON',
  },
  {
    id: 'azure-horizon',
    slug: 'azure-horizon',
    indexNumber: '02',
    totalProjects: '04',
    titleLine1: 'AZURE',
    titleLine2: 'HORIZON',
    title: 'AZURE HORIZON',
    categoryTag: 'LUXURY VILLA EXPERIENCE',
    category: 'LUXURY ARCHITECTURE',
    year: '2026',
    categories: ['Spatial Design', 'Architecture', 'Motion'],
    technologies: ['Next.js', 'Lenis', 'GSAP', 'Tailwind'],
    roleList: ['Creative Developer', 'Frontend Lead'],
    description:
      'A serene high-end digital real estate experience designed to evoke warmth, coastal luxury, and modern architectural beauty through fluid spatial transitions.',
    liveUrl: 'https://azure-horizon.vercel.app/',
    githubUrl: 'https://github.com/vedantgupta',
    image: '/projects/azure.png',
    prevProjectSlug: 'orion-ink',
    prevProjectTitle: 'ORION INK',
    nextProjectSlug: 'bugatti',
    nextProjectTitle: 'BUGATTI CHIRON',
  },
  {
    id: 'bugatti',
    slug: 'bugatti',
    indexNumber: '03',
    totalProjects: '04',
    titleLine1: 'BUGATTI',
    titleLine2: 'CHIRON',
    title: 'BUGATTI CHIRON',
    categoryTag: 'ENGINEERING FOR POWER',
    category: 'LUXURY AUTOMOTIVE',
    year: '2026',
    categories: ['Automotive', '3D WebGL', 'Interactive'],
    technologies: ['WebGL', 'HTML5 Canvas', 'GSAP', 'TypeScript'],
    roleList: ['3D Web Lead', 'Creative Technologist'],
    description:
      'A speed-focused digital journey highlighting quad-turbo aerodynamics, carbon monocoque structural engineering, and active airflow simulations.',
    liveUrl: 'https://buggati-scroll-site.netlify.app/',
    githubUrl: 'https://github.com/vedantgupta',
    image: '/projects/bugatti.png',
    prevProjectSlug: 'azure-horizon',
    prevProjectTitle: 'AZURE HORIZON',
    nextProjectSlug: 'velonn',
    nextProjectTitle: 'VELONN MOTILITY',
  },
  {
    id: 'velonn',
    slug: 'velonn',
    indexNumber: '04',
    totalProjects: '04',
    titleLine1: 'VELONN',
    titleLine2: 'STUDIO',
    title: 'VELONN MOTILITY',
    categoryTag: 'DIGITAL EXPERIENCE AGENCY',
    category: 'CREATIVE STUDIO',
    year: '2026',
    categories: ['Agency Identity', 'Motion', 'Creative Tech'],
    technologies: ['Next.js 16', 'GSAP', 'Tailwind v4', 'Lenis'],
    roleList: ['Founder', 'Principal Technologist'],
    description:
      'The flagship digital brand identity and portfolio platform showcasing experimental web interactions, editorial typography, and fluid page transitions.',
    liveUrl: 'https://velonn.netlify.app/',
    githubUrl: 'https://github.com/vedantgupta',
    image: '/projects/azure.png',
    prevProjectSlug: 'bugatti',
    prevProjectTitle: 'BUGATTI CHIRON',
    nextProjectSlug: 'orion-ink',
    nextProjectTitle: 'ORION INK',
  },
];
