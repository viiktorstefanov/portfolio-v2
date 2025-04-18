export type BioType = {
  name: string;
  roles: string[];
  description: string;
  github: string;
  linkedin: string;
  photo: string;
};

export type SkillItem = {
  id: string;
  name: string;
  image: string;
};

export type SkillCategory = {
  id: string;
  title: string;
  skills: SkillItem[];
};

export type Experience = {
  id: string;
  img: string;
  role: string;
  company: string;
  date: string;
};

export type Education = {
  id: string;
  img: string;
  school: string;
  date: string;
  desc: string;
  degree: string;
};

export type Certificate = {
  id: string;
  img: string;
  title: string;
  link: string;
};

export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  imageView?: string;
  tags: string[];
  github: string;
  webapp: string;
  youTube?: string;
};

export type MenuItem = {
  label: string;
  href: `#${string}`;
};
