import {
  BioType,
  Certificate,
  Education,
  Experience,
  MenuItem,
  SkillCategory,
} from "../types/constants";

export const Bio: BioType = {
  name: "Viktor Stefanov",
  roles: ["Full-Stack Developer"],
  description:
    "A highly motivated and passionate developer with experience in JavaScript, TypeScript, React, Angular, NestJS, HTML, CSS, SCSS, and Tailwind. I am looking for an opportunity to apply my skills and explore new concepts in web development.",
  github: "https://github.com/ViiktorStefanov",
  linkedin: "https://www.linkedin.com/in/viktorstefanov/",
  photo: "assets/images/HeroImage.jpg",
};

export const skills: SkillCategory[] = [
  {
    id: 0,
    title: "Front-End",
    skills: [
      { id: 0, name: "React", image: "https://skillicons.dev/icons?i=react" },
      {
        id: 1,
        name: "Angular",
        image: "https://skillicons.dev/icons?i=angular",
      },
      { id: 2, name: "HTML", image: "https://skillicons.dev/icons?i=html" },
      { id: 3, name: "CSS", image: "https://skillicons.dev/icons?i=css" },
      {
        id: 4,
        name: "JavaScript",
        image: "https://skillicons.dev/icons?i=javascript",
      },
      {
        id: 5,
        name: "TypeScript",
        image: "https://skillicons.dev/icons?i=typescript",
      },
      { id: 6, name: "Redux", image: "https://skillicons.dev/icons?i=redux" },
      {
        id: 7,
        name: "Styled-Components",
        image: "https://skillicons.dev/icons?i=styledcomponents",
      },
      { id: 8, name: "MUI", image: "https://skillicons.dev/icons?i=mui" },
      {
        id: 9,
        name: "Tailwind",
        image: "https://skillicons.dev/icons?i=tailwind",
      },
      { id: 10, name: "SASS", image: "https://skillicons.dev/icons?i=sass" },
      { id: 11, name: "Formik", image: "assets/images/formik.png" },
    ],
  },
  {
    id: 1,
    title: "Back-End",
    skills: [
      {
        id: 0,
        name: "Node JS",
        image: "https://skillicons.dev/icons?i=nodejs",
      },
      {
        id: 1,
        name: "Express",
        image: "https://skillicons.dev/icons?i=express",
      },
      { id: 2, name: "NestJS", image: "https://skillicons.dev/icons?i=nestjs" },
      {
        id: 3,
        name: "MongoDB",
        image: "https://skillicons.dev/icons?i=mongodb",
      },
      {
        id: 4,
        name: "PostgreSQL",
        image: "https://skillicons.dev/icons?i=postgresql",
      },
      {
        id: 5,
        name: "Swagger",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/a/ab/Swagger-logo.png",
      },
      { id: 6, name: "typeORM", image: "assets/images/typeorm.png" },
      { id: 7, name: "Auth0", image: "assets/images/auth0.png" },
      { id: 8, name: "NextJS", image: "https://skillicons.dev/icons?i=nextjs" },
      { id: 9, name: "Zod", image: "https://zod.dev/logo.svg" },
      {
        id: 10,
        name: "Joi",
        image: "https://joi.dev/_nuxt/img/joiTransparent.c5fc726.png",
      },
    ],
  },
  {
    id: 2,
    title: "Others",
    skills: [
      {
        id: 0,
        name: "Bitbucket",
        image: "https://skillicons.dev/icons?i=bitbucket",
      },
      { id: 1, name: "Git", image: "https://skillicons.dev/icons?i=git" },
      { id: 2, name: "GitHub", image: "https://skillicons.dev/icons?i=github" },
      {
        id: 3,
        name: "VS Code",
        image: "https://skillicons.dev/icons?i=vscode",
      },
      {
        id: 4,
        name: "Postman",
        image: "https://skillicons.dev/icons?i=postman",
      },
      { id: 5, name: "Docker", image: "https://skillicons.dev/icons?i=docker" },
      {
        id: 6,
        name: "Photoshop",
        image: "https://skillicons.dev/icons?i=photoshop",
      },
    ],
  },
];

export const experiences: Experience[] = [
  {
    id: 0,
    img: "assets/images/first.jpeg",
    role: "Intern Software Developer",
    company: "First. Best in Sports / Coretech",
    date: "March 2025 - April 2025",
  },
  {
    id: 1,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM2M5vvQmj-tNT-4HkpOhRg8BaHHaZmSJKKw&s",
    role: "Volunteer Front-End Developer",
    company: "Podkrepi.bg",
    date: "September 2024 - March 2025",
  },
  {
    id: 2,
    img: "https://cdncloudcart.com/15271/logo/2.svg?1578388646",
    role: "Computer Technical Specialist",
    company: "Digital Republic",
    date: "January 2021 - December 2022",
  },
  {
    id: 3,
    img: "https://brosbg.com/images/BROS-logo.png",
    role: "Service technician",
    company: "BrosBG",
    date: "February 2019 - January 2021",
  },
  {
    id: 4,
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg/1920px-Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg.png",
    role: "J1 STUDENT",
    company: "USA",
    date: "May 2016 - October 2016",
  },
];

export const education: Education[] = [
  {
    id: 0,
    img: "https://about.udemy.com/wp-content/uploads/2021/12/udemy-logo-share.png",
    school: "Udemy",
    date: "December 2023 - January 2024",
    desc: "",
    degree: "TypeScript",
  },
  {
    id: 1,
    img: "assets/images/softuni.png",
    school: "Software University",
    date: "October 2022 - April 2024",
    desc: "",
    degree: "Front-End Developer",
  },
  {
    id: 2,
    img: "assets/images/unwe.png",
    school: "University of National and World Economy",
    date: "September 2014 - October 2018",
    desc: "",
    degree: "Regional Development",
  },
  {
    id: 3,
    img: "https://tcom-sf.org/siteimages/logo.png",
    school: "Professional School of Telecommunications",
    date: "September 2009 - September 2014",
    desc: "",
    degree: "Network Systems",
  },
];

export const certificates: Certificate[] = [
  {
    id: 0,
    img: "assets/images/front-end-certificate.png",
    title: "Front-End Developer (React)",
    link: "assets/images/front-end-certificate.png",
  },
  {
    id: 1,
    img: "assets/images/certificates/angular-certificate.png",
    title: "Angular",
    link: "https://softuni.bg/certificates/details/211776/fc7b72bc",
  },
  {
    id: 2,
    img: "assets/images/certificates/gpt-certificate.png",
    title: "Practical use of ChatGPT in Software Development",
    link: "https://github.com/viiktorstefanov/ViiktorStefanov/blob/main/HackBulgaria_Masterclass_Viktor%20Stefanov_15.02.pdf",
  },
  {
    id: 3,
    img: "assets/images/certificates/typescript-certificate.png",
    title: "TypeScript",
    link: "https://github.com/viiktorstefanov/ViiktorStefanov/blob/main/typescript.jpg",
  },
  {
    id: 4,
    img: "assets/images/certificates/react-certificate.png",
    title: "React",
    link: "https://softuni.bg/certificates/details/197757/5626224d",
  },
  {
    id: 5,
    img: "assets/images/certificates/back-end-certificate.png",
    title: "JavaScript Back-End",
    link: "https://softuni.bg/certificates/details/190511/2dd2f159",
  },
  {
    id: 6,
    img: "assets/images/certificates/html-css-certificate.png",
    title: "HTML & CSS",
    link: "https://softuni.bg/certificates/details/205236/765fdeb9",
  },
  {
    id: 7,
    img: "assets/images/certificates/applications-certificate.png",
    title: "JavaScript Applications",
    link: "https://softuni.bg/certificates/details/180040/65f26b18",
  },
  {
    id: 8,
    img: "assets/images/certificates/advanced-certificate.png",
    title: "JavaScript Advanced",
    link: "https://softuni.bg/certificates/details/174124/7392ef54",
  },
  {
    id: 9,
    img: "assets/images/certificates/fundamentals-certificate.png",
    title: "JS Fundamentals",
    link: "https://softuni.bg/certificates/details/166091/98066d3e",
  },
  {
    id: 10,
    img: "assets/images/certificates/basics-certificate.png",
    title: "Programming Basics",
    link: "https://softuni.bg/certificates/details/147897/2fefa0e5",
  },
];

export const menuItems: MenuItem[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Certificates", href: "#certificates" },
];

export const languages = [
  "JavaScript",
  "TypeScript",
  "React",
  "Angular",
  "NodeJS",
  "NestJS",
  "Redux",
  "HTML",
  "CSS",
];
