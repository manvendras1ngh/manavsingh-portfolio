export interface Project {
  id: number;
  title: string;
  date: string;
  description: string;
  tags: string[];
  image: string;
  links: {
    website?: string;
    github?: string;
    linkedin?: string;
    demo?: string;
  };
}

export interface Experience {
  id: number;
  company: string;
  role: string;
  period: string;
  description: string[];
}
