import {
  BioType,
  Certificate,
  Education,
  Experience,
  MenuItem,
  Project,
  SkillCategory,
} from "../types/constants";

import { GoMortarBoard } from "react-icons/go";
import { PiCertificateLight, PiStack, PiGear, PiBriefcase } from "react-icons/pi";
import { HiOutlineInformationCircle } from "react-icons/hi2";
import { CiMail } from "react-icons/ci";

export const Bio: BioType = {
  name: "John Doe",
  roles: ["Full-Stack Developer"],
  description: "Passionate developer who loves building impactful web applications.",
  email: "john.doe@example.com",
  github: "https://github.com/johndoe",
  linkedin: "https://www.linkedin.com/in/johndoe",
  photo: "assets/images/john-doe.webp",
  languages: ["JavaScript", "TypeScript", "React", "NodeJS", "HTML", "CSS"],
};

export const skills: SkillCategory[] = [
  {
    id: "frontend-sample",
    title: "Front-End",
    skills: [
      { id: "skill-react", name: "React", image: "https://skillicons.dev/icons?i=react" },
      { id: "skill-js", name: "JavaScript", image: "https://skillicons.dev/icons?i=javascript" },
    ],
  },
  {
    id: "backend-sample",
    title: "Back-End",
    skills: [
      { id: "skill-node", name: "NodeJS", image: "https://skillicons.dev/icons?i=nodejs" },
      { id: "skill-express", name: "Express", image: "https://skillicons.dev/icons?i=express" },
    ],
  },
];

export const experiences: Experience[] = [
  {
    id: "exp-sample",
    img: "assets/images/company-logo.webp",
    role: "Software Developer",
    company: "TechCorp",
    date: "Jan 2023 - Present",
  },
];

export const education: Education[] = [
  {
    id: "edu-sample",
    img: "assets/images/university-logo.webp",
    school: "Tech University",
    date: "2019 - 2023",
    degree: "BSc in Computer Science",
  },
];

export const certificates: Certificate[] = [
  {
    id: "cert-sample",
    img: "assets/images/certificate-sample.webp",
    title: "Full-Stack Web Development",
    link: "https://example.com/certificate",
  },
];

export const projects: Project[] = [
  {
    id: "proj-sample",
    title: "Sample Project",
    description: "A sample project to demonstrate structure.",
    image: {
      url: "assets/images/project-logo.webp",
      objectFit: "contain",
    },
    imageView: "assets/images/project-preview.webp",
    tags: ["React", "NodeJS", "MongoDB"],
    github: "https://github.com/johndoe/sample-project",
    webapp: "https://sample-project.com",
  },
];

export const menuItems: MenuItem[] = [
  {
    label: "About",
    href: "#about",
    id: "menu-about",
    icon: HiOutlineInformationCircle,
  },
  {
    label: "Skills",
    href: "#skills",
    id: "menu-skills",
    icon: PiGear,
  },
  {
    label: "Experience",
    href: "#experience",
    id: "menu-experience",
    icon: PiBriefcase,
  },
  {
    label: "Projects",
    href: "#projects",
    id: "menu-projects",
    icon: PiStack,
  },
  {
    label: "Education",
    href: "#education",
    id: "menu-education",
    icon: GoMortarBoard,
  },
  {
    label: "Certificates",
    href: "#certificates",
    id: "menu-certificates",
    icon: PiCertificateLight,
  },
  {
    label: "Contact",
    href: "#contact",
    id: "menu-contact",
    icon: CiMail,
  },
];
