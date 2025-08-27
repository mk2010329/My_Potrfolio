export interface NavItem {
  name: string;
  path: string;
}

export interface QuickStat {
  label: string;
  value: string;
}

export interface PreviewSection {
  image: any;
  title: string;
  description: string;
  href: string;
  icon: string;
}

export interface Skill {
  name: string;
  level: number;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  gpa?: string;
  description: string;
  image?: string;
}

export interface Achievement {
  id: string;
  title: string;
  organization: string;
  date: string;
  description: string;
  category: 'award' | 'certification' | 'publication' | 'other';
  image?: string;
  link?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
  category: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: React.ComponentType<{ className?: string }>;
}