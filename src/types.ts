export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  category: "Mobile App" | "Web Development" | "Academic";
  imageUrl: string;
  tags: string[];
  features?: string[];
  challenges?: string[];
  outcomes?: string[];
  link?: string;
  github?: string;
  caseStudyId?: string;
}

export interface Skill {
  name: string;
  icon: string; // The Lucide icon string
  category: "design" | "development" | "trait";
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  description: string;
  highlights?: string[];
}
