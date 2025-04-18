export type BioType = {
  name: string;
  roles: string[];
  description: string;
  github: string;
  linkedin: string;
  photo: string;
};

export type SkillItem = {
  id: number;
  name: string;
  image: string;
};

export type SkillCategory = {
  id: number;
  title: string;
  skills: SkillItem[];
};

export type Experience = {
  id: number;
  img: string;
  role: string;
  company: string;
  date: string;
};

export type Education = {
  id: number;
  img: string;
  school: string;
  date: string;
  desc: string;
  degree: string;
};

export type Certificate = {
  id: number;
  img: string;
  title: string;
  link: string;
};

export type MenuItem = {
  label: string;
  href: `#${string}`;
};
