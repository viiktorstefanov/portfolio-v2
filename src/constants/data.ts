import { BioType, Education, Experience, SkillCategory } from "../types/constants";

export const Bio: BioType = {
    name: "Viktor Stefanov",
    roles: ["Full-Stack Developer"],
    description:
      "A highly motivated and passionate developer with experience in JavaScript, TypeScript, React, Angular, NestJS, HTML, CSS, SCSS, and Tailwind. I am looking for an opportunity to apply my skills and explore new concepts in web development.",
    github: "https://github.com/ViiktorStefanov",
    linkedin: "https://www.linkedin.com/in/viktorstefanov/",
  };
  
  export const skills: SkillCategory[] = [
    {
      id: 0,
      title: "Front-End",
      skills: [
        { id: 0, name: "React", image: "https://skillicons.dev/icons?i=react" },
        { id: 1, name: "Angular", image: "https://skillicons.dev/icons?i=angular" },
        { id: 2, name: "HTML", image: "https://skillicons.dev/icons?i=html" },
        { id: 3, name: "CSS", image: "https://skillicons.dev/icons?i=css" },
        { id: 4, name: "JavaScript", image: "https://skillicons.dev/icons?i=javascript" },
        { id: 5, name: "TypeScript", image: "https://skillicons.dev/icons?i=typescript" },
        { id: 6, name: "Redux", image: "https://skillicons.dev/icons?i=redux" },
        { id: 7, name: "Styled-Components", image: "https://skillicons.dev/icons?i=styledcomponents" },
        { id: 8, name: "MUI", image: "https://skillicons.dev/icons?i=mui" },
        { id: 9, name: "Tailwind", image: "https://skillicons.dev/icons?i=tailwind" },
        { id: 10, name: "SASS", image: "https://skillicons.dev/icons?i=sass" },
        { id: 11, name: "Formik", image: "assets/images/formik.png" },
      ],
    },
    {
      id: 1,
      title: "Back-End",
      skills: [
        { id: 0, name: "Node JS", image: "https://skillicons.dev/icons?i=nodejs" },
        { id: 1, name: "Express", image: "https://skillicons.dev/icons?i=express" },
        { id: 2, name: "NestJS", image: "https://skillicons.dev/icons?i=nestjs" },
        { id: 3, name: "MongoDB", image: "https://skillicons.dev/icons?i=mongodb" },
        { id: 4, name: "PostgreSQL", image: "https://skillicons.dev/icons?i=postgresql" },
        { id: 5, name: "Swagger", image: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Swagger-logo.png" },
        { id: 6, name: "typeORM", image: "assets/images/typeorm.png" },
        { id: 7, name: "Auth0", image: "assets/images/auth0.png" },
        { id: 8, name: "NextJS", image: "https://skillicons.dev/icons?i=nextjs" },
        { id: 9, name: "Zod", image: "https://zod.dev/logo.svg" },
        { id: 10, name: "Joi", image: "https://joi.dev/_nuxt/img/joiTransparent.c5fc726.png" },
      ],
    },
    {
      id: 2,
      title: "Others",
      skills: [
        { id: 0, name: "Bitbucket", image: "https://skillicons.dev/icons?i=bitbucket" },
        { id: 1, name: "Git", image: "https://skillicons.dev/icons?i=git" },
        { id: 2, name: "GitHub", image: "https://skillicons.dev/icons?i=github" },
        { id: 3, name: "VS Code", image: "https://skillicons.dev/icons?i=vscode" },
        { id: 4, name: "Postman", image: "https://skillicons.dev/icons?i=postman" },
        { id: 5, name: "Docker", image: "https://skillicons.dev/icons?i=docker" },
        { id: 6, name: "Photoshop", image: "https://skillicons.dev/icons?i=photoshop" },
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
  