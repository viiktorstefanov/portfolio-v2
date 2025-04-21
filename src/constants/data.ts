import {
  BioType,
  Certificate,
  Education,
  Experience,
  MenuItem,
  Project,
  SkillCategory,
} from "../types/constants";

export const Bio: BioType = {
  name: "Viktor Stefanov",
  roles: ["Full-Stack Developer"],
  description:
    "A highly motivated and passionate developer with experience in JavaScript, TypeScript, React, Angular, NestJS, HTML, CSS, SCSS, and Tailwind. I am looking for an opportunity to apply my skills and explore new concepts in web development.",
  github: "https://github.com/ViiktorStefanov",
  linkedin: "https://www.linkedin.com/in/viktorstefanov/",
  photo: "assets/images/HeroImage.webp",
  languages: [
    "JavaScript",
    "TypeScript",
    "React",
    "Angular",
    "NodeJS",
    "NestJS",
    "Redux",
    "HTML",
    "CSS",
  ],
};

export const skills: SkillCategory[] = [
  {
    id: "1fd5e0be-6e8f-4d4a-9d56-165ad326303a",
    title: "Front-End",
    skills: [
      {
        id: "3a55999c-68da-40da-af18-993d7fe1c5e3",
        name: "React",
        image: "https://skillicons.dev/icons?i=react",
      },
      {
        id: "5fcaf3ba-899d-45e8-976e-055ca57f836e",
        name: "Angular",
        image: "https://skillicons.dev/icons?i=angular",
      },
      {
        id: "e5c3830d-ee47-421b-9a50-06febec17823",
        name: "HTML",
        image: "https://skillicons.dev/icons?i=html",
      },
      {
        id: "0a6de881-e78f-405c-9072-f87e1bdb150b",
        name: "CSS",
        image: "https://skillicons.dev/icons?i=css",
      },
      {
        id: "20b827e7-355f-45fb-b399-4b4c4023185e",
        name: "JavaScript",
        image: "https://skillicons.dev/icons?i=javascript",
      },
      {
        id: "72d7782c-2f91-4da6-b757-75e75ab3b1a8",
        name: "TypeScript",
        image: "https://skillicons.dev/icons?i=typescript",
      },
      {
        id: "d6b87856-638e-42ca-9f51-398dd1854e5f",
        name: "Redux",
        image: "https://skillicons.dev/icons?i=redux",
      },
      {
        id: "ad8b7938-b4fa-404c-bf22-0245b3b82607",
        name: "Styled-Components",
        image: "https://skillicons.dev/icons?i=styledcomponents",
      },
      {
        id: "acf2682f-c36d-471b-a397-4bf29160637f",
        name: "MUI",
        image: "https://skillicons.dev/icons?i=mui",
      },
      {
        id: "b7cac01b-fad4-4977-abbc-bb120fef98f8",
        name: "Tailwind",
        image: "https://skillicons.dev/icons?i=tailwind",
      },
      {
        id: "eebd43af-638b-4297-8cd6-ffd2b2512563",
        name: "SASS",
        image: "https://skillicons.dev/icons?i=sass",
      },
      {
        id: "ccf40352-42f3-476a-b850-95f3e6053088",
        name: "Formik",
        image: "assets/images/formik.webp",
      },
    ],
  },
  {
    id: "a06d4b3e-e973-4ab3-8cc2-e8849237a01f",
    title: "Back-End",
    skills: [
      {
        id: "5bd07678-9ec9-4493-b647-3c79ed02db99",
        name: "Node JS",
        image: "https://skillicons.dev/icons?i=nodejs",
      },
      {
        id: "4be51255-9936-4e58-8877-795938548e25",
        name: "Express",
        image: "https://skillicons.dev/icons?i=express",
      },
      {
        id: "2718085d-7646-4adf-ac41-1ad4047ade64",
        name: "NestJS",
        image: "https://skillicons.dev/icons?i=nestjs",
      },
      {
        id: "6969b1a4-329b-4372-bbe1-6c747411129f",
        name: "MongoDB",
        image: "https://skillicons.dev/icons?i=mongodb",
      },
      {
        id: "2edd8605-5b63-46b2-bffd-97d481b511e8",
        name: "PostgreSQL",
        image: "https://skillicons.dev/icons?i=postgresql",
      },
      {
        id: "361d4637-d9e4-4ba3-8313-411086130368",
        name: "Swagger",
        image:
          "assets/images/swagger.webp",
      },
      {
        id: "d28dc609-3385-4ac0-9a48-3f68ad80ecae",
        name: "typeORM",
        image: "assets/images/typeorm.webp",
      },
      {
        id: "b6efb9b4-5a9b-4d21-b9a2-5d42acabadc6",
        name: "Auth0",
        image: "assets/images/auth0.webp",
      },
      {
        id: "fafeff51-351b-4770-a0b6-615bbf1b7a05",
        name: "NextJS",
        image: "https://skillicons.dev/icons?i=nextjs",
      },
      {
        id: "f8e337c7-dbb6-48e7-b19e-d74f77015c65",
        name: "Zod",
        image: "assets/images/zod.webp",
      },
      {
        id: "8d5e1fc6-d33a-41e1-92cc-8e7689de36a0",
        name: "Joi",
        image: "assets/images/joi.webp",
      },
    ],
  },
  {
    id: "5e8ed75e-d1ce-4ff8-8e53-31bc6355b7c9",
    title: "Others",
    skills: [
      {
        id: "1cbd2d18-78b4-4c53-b93c-535c2787e446",
        name: "Bitbucket",
        image: "https://skillicons.dev/icons?i=bitbucket",
      },
      {
        id: "a0c416c5-a043-4e0f-9612-3ce0e13174f6",
        name: "Git",
        image: "https://skillicons.dev/icons?i=git",
      },
      {
        id: "abe86982-879d-4daf-a926-ee05dfd27c94",
        name: "GitHub",
        image: "https://skillicons.dev/icons?i=github",
      },
      {
        id: "c1619d71-d52f-4d40-8fe1-0de4036238eb",
        name: "VS Code",
        image: "https://skillicons.dev/icons?i=vscode",
      },
      {
        id: "1ec4c01b-cbeb-4faf-be93-8a4c3f4666ee",
        name: "Postman",
        image: "https://skillicons.dev/icons?i=postman",
      },
      {
        id: "70e0a90b-82c7-4901-a63c-9633f31e3d96",
        name: "Docker",
        image: "https://skillicons.dev/icons?i=docker",
      },
      {
        id: "306c3b1d-96c0-4e8e-a216-fbf6c409065a",
        name: "Photoshop",
        image: "https://skillicons.dev/icons?i=photoshop",
      },
    ],
  },
];

export const experiences: Experience[] = [
  {
    id: "b49545f2-3a5a-4b97-8f21-d319879dd934",
    img: "assets/images/first.webp",
    role: "Intern Software Developer",
    company: "First. Best in Sports / Coretech",
    date: "March 2025 - April 2025",
  },
  {
    id: "8b1a3cbc-b15a-4183-a9c4-b1cab2f32741",
    img: "assets/images/podkrepi-logo.webp",
    role: "Volunteer Front-End Developer",
    company: "Podkrepi.bg",
    date: "September 2024 - March 2025",
  },
  {
    id: "482b7908-ea9c-4c8e-a41a-af5e7f3b39a6",
    img: "assets/images/digital.webp",
    role: "Computer Technical Specialist",
    company: "Digital Republic",
    date: "January 2021 - December 2022",
  },
  {
    id: "a74c881c-d69b-4038-9e68-d6130650be27",
    img: "assets/images/bros-logo.webp",
    role: "Service technician",
    company: "BrosBG",
    date: "February 2019 - January 2021",
  },
  {
    id: "a7627f91-0047-4c8d-909c-23129270eed8",
    img: "assets/images/j1.webp",
    role: "J1 STUDENT",
    company: "USA",
    date: "May 2016 - October 2016",
  },
];

export const education: Education[] = [
  {
    id: "60076445-d31c-463c-b7f3-43c3fc1f6b66",
    img: "assets/images/udemy.webp",
    school: "Udemy",
    date: "December 2023 - January 2024",
    degree: "TypeScript",
  },
  {
    id: "8a34184e-edbb-466e-b1ec-7d130bcafbf7",
    img: "assets/images/softuni.webp",
    school: "Software University",
    date: "October 2022 - April 2024",
    degree: "Front-End Developer",
  },
  {
    id: "aa1a11ee-eb14-4790-a7ae-9a48e3e024c0",
    img: "assets/images/unwe.webp",
    school: "University of National and World Economy",
    date: "September 2014 - October 2018",
    degree: "Regional Development",
  },
  {
    id: "258ea994-1d7f-42fe-9027-f2955b0d7b19",
    img: "assets/images/tcom.webp",
    school: "Professional School of Telecommunications",
    date: "September 2009 - September 2014",
    degree: "Network Systems",
  },
];

export const certificates: Certificate[] = [
  {
    id: "d3b34fcc-97a1-419e-9375-1f51f2524fd8",
    img: "assets/images/front-end-certificate.webp",
    title: "Front-End Developer (React)",
    link: "assets/images/front-end-certificate.webp",
  },
  {
    id: "93acc1c2-60c5-47a2-b33e-30ce766affb1",
    img: "assets/images/certificates/angular-certificate.webp",
    title: "Angular",
    link: "https://softuni.bg/certificates/details/211776/fc7b72bc",
  },
  {
    id: "2c0829fe-9892-40c5-9064-8d22a1ead540",
    img: "assets/images/certificates/gpt-certificate.webp",
    title: "Practical use of ChatGPT in Software Development",
    link: "https://github.com/viiktorstefanov/ViiktorStefanov/blob/main/HackBulgaria_Masterclass_Viktor%20Stefanov_15.02.pdf",
  },
  {
    id: "b59b6acb-cab8-4d7c-95e2-3505c4ccd2ce",
    img: "assets/images/certificates/typescript-certificate.webp",
    title: "TypeScript",
    link: "https://github.com/viiktorstefanov/ViiktorStefanov/blob/main/typescript.webp",
  },
  {
    id: "37b00392-f7ef-4f99-9c2d-eef20f0b3f90",
    img: "assets/images/certificates/react-certificate.webp",
    title: "React",
    link: "https://softuni.bg/certificates/details/197757/5626224d",
  },
  {
    id: "9a6ac640-89ae-4d31-9d95-40dba06ce351",
    img: "assets/images/certificates/back-end-certificate.webp",
    title: "JavaScript Back-End",
    link: "https://softuni.bg/certificates/details/190511/2dd2f159",
  },
  {
    id: "34d0ac22-8bf2-458e-8d2f-473c0156af7a",
    img: "assets/images/certificates/html-css-certificate.webp",
    title: "HTML & CSS",
    link: "https://softuni.bg/certificates/details/205236/765fdeb9",
  },
  {
    id: "565f3dee-4482-4f44-9e65-6cf6dac6f375",
    img: "assets/images/certificates/applications-certificate.webp",
    title: "JavaScript Applications",
    link: "https://softuni.bg/certificates/details/180040/65f26b18",
  },
  {
    id: "d67c8da7-b796-434a-bfe2-dbe47b99dd44",
    img: "assets/images/certificates/advanced-certificate.webp",
    title: "JavaScript Advanced",
    link: "https://softuni.bg/certificates/details/174124/7392ef54",
  },
  {
    id: "16e4fc08-9646-4bcf-97d6-04b29a29fa2e",
    img: "assets/images/certificates/fundamentals-certificate.webp",
    title: "JS Fundamentals",
    link: "https://softuni.bg/certificates/details/166091/98066d3e",
  },
  {
    id: "0b9e81bb-1524-4d64-9f5e-ab9588c258bc",
    img: "assets/images/certificates/basics-certificate.webp",
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

export const projects: Project[] = [
  {
    id: "27c2f6ce-3a4c-4b0c-84d8-b7eb9e5d9178",
    title: "Podkrepi.bg",
    description:
      "We are volunteers from the IT community, lawyers, accountants, marketers, medics, and NGO representatives. We are united by the desire to create an improved fundraising environment in Bulgaria by developing the most transparent platform for donations. The platform will support itself by membership fees and grants and not by charging a percentage of the funds raised for the campaigns that go through it.",
    image: {
      url: "assets/images/podkrepi-logo.webp",
      objectFit: "contain"
    },
    imageView: "assets/images/podkrepi.webp",
    tags: [
      "React",
      "TypeScript",
      "Next.js",
      "NextAuth.js",
      "MaterialUI",
      "Styled-Components",
      "Formik",
      "React Query",
      "Yup",
    ],
    github:
      "https://github.com/podkrepi-bg/frontend#--%D0%B4%D0%B0%D1%80%D0%B8%D1%82%D0%B5%D0%BB%D1%81%D0%BA%D0%B0-%D0%BF%D0%BB%D0%B0%D1%82%D1%84%D0%BE%D1%80%D0%BC%D0%B0-%D0%BF%D0%BE%D0%B4%D0%BA%D1%80%D0%B5%D0%BF%D0%B8%D0%B1%D0%B3",
    webapp: "https://podkrepi.bg/en",
  },
  {
    id: "da168d7c-ea80-444c-a227-4b56f2b0dbfd",
    title: "The Forgotten Heroes of Bulgaria",
    description:
      "Dynamic educational app, designed to make the study of Bulgarian history accessible and enjoyable for children. Combining engaging gameplay with educational content, focused on inspiring curiosity about Bulgarian history. The game presents a series of multiple choice questions dedicated to notable Bulgarian heroes. Each question is designed to challenge and inspire young minds, turning learning into an exciting adventure. The app features a competitive leaderboard that displays children' scores, reinforcing a sense of achievement and encouraging friendly competition. Kids can track their progress, see how they are doing against their peers and stay motivated to improve their knowledge. It also features a detailed section on heroes, a wealth of information, their contributions and their impact on the story.",
    image:  {
      url: "assets/images/zabravenite-logo.webp",
      objectFit: "fill"
    },
    tags: [
      "TypeScript",
      "React",
      "Redux",
      "HTML",
      "CSS",
      "MongoDB",
      "Node JS",
      "Express JS",
    ],
    github: "https://github.com/viiktorstefanov/Forgotten-Heroes",
    webapp: "https://zabravenite.web.app/",
    youTubeVideoId: "TlxkeeGK8Ow?si=KYKYPddASlEucYI4",
  },
  {
    id: "7875ac67-687e-4e0f-9c55-38f2b1c765c7",
    title: "Foodstack",
    description:
      "An app to track calories and macronutrients. Foodstack is designed to help you take control of your nutrition and reach your body goals. Whether you're looking to lose weight, gain muscle, or simply maintain a balanced diet, this app has got you covered.",
    image:  {
      url: "assets/images/foodstack-logo.webp",
      objectFit: "cover"
    },
    tags: [
      "TypeScript",
      "Angular",
      "HTML",
      "CSS",
      "MongoDB",
      "Node JS",
      "Express JS",
    ],
    github: "https://github.com/viiktorstefanov/Food-Stack-Angular",
    webapp: "https://foodstack-eu.web.app/home",
    youTubeVideoId: "XlWjy4EO1ag?si=P_PiiTA-yLaYUdY_",
  },
  {
    id: "6f7ca7e0-2d61-45e3-8860-708f085255c4",
    title: "MERN (TypeScript)",
    description:
      "This repository contains a RESTful API built using TypeScript, Express, and MongoDB. The project structure is designed to be scalable, modular, and easy to maintain. It includes all the necessary features such as routing, middleware, database operations,services and more.Also has front-end application built with React(TypeScript) and Redux for state managment.",
    image:  {
      url: "assets/images/mern.webp",
      objectFit: "cover"
    },
    imageView: "assets/images/mern.webp",
    tags: [
      "TypeScript",
      "React",
      "Redux",
      "HTML",
      "Tailwind",
      "MongoDB",
      "Node JS",
      "Express TS",
    ],
    github: "https://github.com/viiktorstefanov/mern-boiler-plate",
    webapp: "https://mern-boiler-plate.web.app/",
  },
  {
    id: "9a896700-c740-4997-a77b-0a8df30eea89",
    title: "URL TO MP3",
    description:
      "This web application provides users with a seamless and straightforward way to convert YouTube videos into high-quality MP3 audio files. By simply providing a YouTube video URL, users can effortlessly download their favorite audio content without the distractions of intrusive ads or the risk of malware, ensuring a clean and secure experience.Easy-to-use Interface: Users simply paste a YouTube link to start the conversion process.No Ads or Malware: Unlike many similar services, this app is free from annoying advertisements and malicious software, offering a clean user experience.High-Quality MP3 Downloads: Converts YouTube videos into high-quality MP3 files that users can easily save and enjoy offline.Fast and Reliable: Quick conversion with minimal wait times.This application stands out for its emphasis on simplicity, user experience, and security, making it a trustworthy tool for audio conversion from YouTube.",
    image:  {
      url: "assets/images/url-to-mp3.webp",
      objectFit: "cover"
    },
    imageView: "assets/images/url-to-mp3.webp",
    tags: ["TypeScript", "React"],
    github: "https://github.com/viiktorstefanov/url-to-mp3",
    webapp: "https://url-to-mp3.web.app/",
  },
  {
    id: "b4625ca1-d74f-453e-b456-7e76e8e3afa9",
    title: "Junior Front-End Developer Task",
    description:
      "As part of a technical assignment for a junior front-end developer position at MClimate, I developed a complete React project that demonstrates core front-end skills, including API integration, state management, component reusability, and responsive UI implementation. I also went beyond the initial requirements by recreating MClimate’s official website design and incorporating it into the project to showcase attention to detail and strong UI/UX capabilities.MClimate required the creation of a simple React project with an initial architecture and Redux setup. The task included integrating a login form using their public API, with the provided credentials, and storing the returned tokens in Redux. Additionally, the project needed to include three separate pages built with reusable components based on their provided designs: a page displaying a clickable building element, a detailed building page, and a floor detail page. All displayed data could be hardcoded, and no design was required for the login form. Use of a UI library like Reactstrap was optional.",
    image:  {
      url: "assets/images/mclimate.webp",
      objectFit: "cover"
    },
    imageView: "assets/images/mclimate.webp",
    tags: ["TypeScript", "React", "HTML", "CSS", "Redux Toolkit", "Axios"],
    github: "https://github.com/viiktorstefanov/mclimate-task",
    webapp: "https://front-end-task-52c74.web.app/",
  },
  {
    id: "79340247-727d-4847-8fe0-1b9479130a8e",
    title: "NIPS serivce",
    description:
      "NIPS Service is a professional repair service center specializing in mobile phones, laptops, computers, and tablets. The website provides essential information about the company, services offered, and contact details for customers.",
    image:  {
      url: "assets/images/nips.webp",
      objectFit: "cover"
    },
    imageView: "assets/images/nips.webp",
    tags: ["Wordpress", "CSS"],
    webapp: "http://nipsservice.com",
  },
  {
    id: "a8d45e31-f5da-4a2e-bfa6-74709ed53ba7",
    title: "Articles",
    description:
      "Developed as part of a task for a React Native Intern Developer role, this cross-platform mobile application was built using React Native and Expo CLI, with Android Studio used for virtual visualization. The app features a Home screen displaying a dynamic list of articles and an Article Details screen for viewing detailed content of selected articles. It integrates with a Hasura-hosted GraphQL API using Apollo Client for efficient data fetching with queries like articles and articles_by_pk. The app includes smooth navigation, state management, and a responsive UI aligned with the provided design. Comprehensive build and run instructions are included for seamless setup and deployment.",
    image:  {
      url: "assets/images/react-native-app.webp",
      objectFit: "cover"
    },
    tags: [
      "TypeScript",
      "React Native",
      "Expo CLI",
      "Android Studio",
      "Apollo Client",
    ],
    github: "https://github.com/viiktorstefanov/react-native-challenge",
    youTubeVideoId: "aumTg12fyRc?si=jeD0R23jbsPB9Z2l",
  },
  {
    id: "f3595978-4781-4698-856b-68c8e7682d13",
    title: "Urban",
    description:
      "Project is focused on providing potential clients with an accessible platform to view the artist's portfolio and easily book appointments.",
    image:  {
      url: "assets/images/logo new 2023.webp",
      objectFit: "contain"
    },
    tags: [
      "JavaScript",
      "React",
      "HTML",
      "CSS",
      "MongoDB",
      "Node JS",
      "Express JS",
    ],
    github: "https://github.com/viiktorstefanov/Urban-Tattoo-React",
    webapp: "https://urban-tattoo-react.web.app/",
    youTubeVideoId: "cMf11SA3vEU?si=bpwuBkUloiES2YR2",
  },
  {
    id: "d8d33e0d-d583-4c51-b1bb-48d09a3d3c02",
    title: "Drone Delivery Network Simulator",
    description:
      "This project was part of an assignment when I applied for an internship as an intern web developer at ' Nemetschek ' company.I had to create an application to simulate deliveries of products with drones.As it had to be calculated: the final time for all deliveries, how many drones were used for deliveries, what type of drones were used, the average delivery time, the current status of each order, the current status of each drone. As input data we get a JSON format file.",
    image:  {
      url: "assets/images/drone-delivery-screenshot.webp",
      objectFit: "contain"
    },
    tags: ["JavaScript", "HTML", "CSS", "Node JS"],
    github: "https://github.com/viiktorstefanov/DroneDelivery",
    webapp: "https://drone-nemetschek.web.app/",
    youTubeVideoId: "spbe8WXzLhw?si=DTMSbeppnRuK5Bs0",
  },
  {
    id: "99314ac2-6396-4f57-b65e-5d1a8aa54972",
    title: "Me2",
    description:
      "Me2 is a platform designed for users to share and discover positive experiences or enjoyable places they've encountered. The application serves as a community-driven space where positivity is the central theme, allowing users to explore, contribute, and connect through shared experiences and places.",
    image:  {
      url: "assets/images/me2-logo.webp",
      objectFit: "contain"
    },
    tags: [
      "TypeScript",
      "Angular",
      "HTML",
      "CSS",
      "MongoDB",
      "Node JS",
      "Express JS",
    ],
    github: "https://github.com/viiktorstefanov/me2-angular",
    webapp: "https://me2-angular-d82fe.web.app/home",
    youTubeVideoId: "ThwDfgf2YDc?si=PMwqJ_0MLcJ00Gre",
  },
  {
    id: "d4d274fb-2928-40ea-8a4b-57124eddf21b",
    title: "WebAPI Swift MT799 Messages",
    description:
      "This project was part of an assignment when I applied for an internship as an intern web developer at ' ProCredit Bank ' company. It was my first encounter with C# and .NET.  Project provides a RESTful API for handling SWIFT MT799 messages and allows to upload SWIFT MT799 messages and get stored messages.",
    image:  {
      url: "assets/images/Swift.webp",
      objectFit: "fill"
    },
    imageView: "assets/images/Swift.webp",
    tags: ["C#", ".NET 8", "SQLite", "Nlog", "Swagger"],
    github: "https://github.com/viiktorstefanov/webAPI-SwiftMT799.",
  },
  {
    id: "26995b70-0f58-4686-b572-c19b4c91838d",
    title: "AI Hackathon",
    description:
      "I participated in a 2-day AI Hackathon, where our team developed an AI-powered game based on Greek mythology. The game immerses users in an interactive story, where the narrative evolves based on user choices, with multiple possible outcomes generated by artificial intelligence. Game Concept: The user embarks on a journey through ancient Greek myths, interacting with gods, heroes, and monsters. At key moments in the story, AI generates different outcomes based on user decisions, creating a unique, dynamic storytelling experience.AI Integration: Leveraged AI model to generate storylines and branching paths, offering a high level of personalization.Players can explore various mythological themes and see how their decisions affect the storyline's progression.The AI-generated narrative paths keep users engaged with rich, evolving storylines and numerous possible endings.",
    image:  {
      url: "assets/images/greek.webp",
      objectFit: "fill"
    },
    imageView: "assets/images/greek.webp",
    tags: ["OpenAI Assistant", "Python", "React", "JavaScript"],
    github: "https://github.com/HristoP96/turing-titans-be",
    webapp: "https://turing-titans-15e03f49c298.herokuapp.com/game",
  },
  {
    id: "dfc16c72-da08-4757-af13-defc947d50b2",
    title: "Gym Academy",
    description:
      "GymAcademy is an application designed for all kind of athletes to discover, browse, and share workout programs. Whether you are a beginner, advanced, intermediate, or professional, GymAcademy provides a platform for users to access popular workout programs and contribute their own. The project was designed to practice my skills with ExpressJS as well as to implement server-side-rendering.",
    image:  {
      url: "assets/images/gymacademy-logo.webp",
      objectFit: "scale-down"
    },
    tags: [
      "Express JS",
      "JavaScript",
      "Handlebars",
      "MongoDB",
      "Mongoose",
      "Cookie-Parser",
      "JWT",
      "BCRYPT",
    ],
    github: "https://github.com/viiktorstefanov/GymAcademy",
    youTubeVideoId: "20QuV88aZF8?si=D4lmi_fjGmrslphG",
  },
  {
    id: "32b506c1-338c-4c0f-8b36-e196d8bfe283",
    title: "Urban Roots",
    description:
      "This initial version of my 'Urban' project, represents the foundational phase of the project, meticulously constructed utilizing fundamental expertise in HTML, CSS, and JavaScript.With LIT-HTML serving as the templating and implementing SPA.",
    image:  {
      url: "assets/images/urban-roots.webp",
      objectFit: "cover"
    },
    imageView: "assets/images/urban-site-review.gif",
    tags: [
      "JavaScript",
      "LIT-HTML",
      "HTML",
      "CSS",
      "PAGE",
      "Express JS",
      "MongoDB",
      "JWT",
      "BCRYPT",
    ],
    github: "https://github.com/viiktorstefanov/urban",
  },
  {
    id: "f15e2097-591b-4462-9b4a-535fd7d30025",
    title: "FirstGameProject",
    description:
      "My first game project, that I ever created with JavaScript.It was part of a JavaScript training from university. The game is completely simple. You are a dark magician, who can shoot fire.Your goal is to kill bugs.Starting with 0 points.For each killed bug you got points.For each level that is passed , the speed of the bugs increases.Move using `W`, `A`, `S` & `D` and avoid the bugs. Press `Spacebar` to shoot bugs.",
    image:  {
      url: "assets/images/firstgameproject thumbnail.webp",
      objectFit: "fill"
    },
    tags: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/viiktorstefanov/FirstGameProject",
    webapp: "https://myfirstgameproject-95dbe.web.app/",
    youTubeVideoId: "d1R0MaG43Zo?si=MzSbYL0FJQz-wc9h",
  },
];
