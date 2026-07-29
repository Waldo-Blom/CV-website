import { ValidateDataMap } from "../validate.js";

export const projects = new ValidateDataMap([
   [
    1,
    {
      title: "Sparkling Clean",
      languages: ["Java", "Java Swing", "JDBC", "PostgreSQL"],
      description:
       "It's a Java Swing desktop app for our PRG381 module that lets university staff manage cleaning materials, suppliers, cleaners, and stock issuances. Built to meet the assignment's required modules (authentication, dashboard, CRUD, stock issuance, reports, and role-based access).",
      githubLink: "https://github.com/Waldo-Blom/PRG381_Project_PTA381_AM_Group-3",
      category: "University Projects",
      image: "../images/project/Sparkling-Clean.png", 
    },
  ],

  [
    2,
    {
      title: "Sign-Speak AI",
      languages: ["Node.js", "Express", "Python", "Flask", "PyTorch", "MediaPipe", "MongoDB", "WebSocket", "WebRTC", "JavaScript"],
      description:
       "Our PRJ381 yearly project, built as a team of 14. A real-time South African Sign Language translator that uses computer vision and machine learning to convert SASL gestures into text and speech. The live-hosted version is unfortunately no longer available, but the landing page covers the full breakdown.",
      githubLink: "https://github.com/Waldo-Blom/PRJ381",
      category: "University Projects",
      image: "../images/project/Sign-Speak-AI.png",
    },
  ],
  [
    3,
    {
      title: "Sky High Super Hero Academy",
      languages: ["C#", ".NET", "Windows Forms", "File I/O"],
      description:
        "Built for our Programming 282 module to demonstrate core OOP and file I/O principles. A Windows Forms app for managing superhero records, themed around the Sky High movie universe, with hero CRUD operations, automatic rank calculation, and a file-based databse",
      githubLink: "https://github.com/Waldo-Blom/PRG282-Sky_High_Super_Hero_Academy",
      category: "University Projects",
      image: "../images/project/Sky-High-Super-Hero-Academy.png",
    },
  ],
  [
    4,
    {
      title: "RangeMaster",
      languages: ["Next.js", "React", "TailwindCSS", "Shadcn UI", "Firestore", "Firebase Authentication"],
      description:
        "RangeMaster is a web-based application designed to track and analyse golfer performance during practice sessions, providing coaches with access to in-depth player statistics. The application was built using Firebase Studio, with the integrated Gemini coding assistant used during certain aspects of development, primarily to accelerate frontend implementation.<br><br><em>*Please note that this project was contracted work, commissioned by my golf coach to design and implement the backend functionality required for data storage and retrieval. As such, access to the application is available exclusively upon the execution of a signed Non-Disclosure Agreement (NDA), after which the project and backend documentation can be made available upon request.</em>",
      githubLink: "",
      category: "Personal Projects",
      image: "../images/project/RangeMaster.png",
    },
  ],
  [
    5,
    {
      title: "GolfCoachPro",
      languages: ["Next.js", "React", "TailwindCSS", "Shadcn UI", "Firestore", "Firebase Authentication"],
      description:
        "GolfCoachPro is a web-based, all-in-one management platform designed to help golf instructors efficiently manage student tracking, lesson scheduling, and payments from a single dashboard. The application was built using Firebase Studio, with the integrated Gemini coding assistant used during certain aspects of development, primarily to accelerate frontend implementation.<br><br><em>*Please note that this project was contracted work, commissioned by my golf coach to design and implement the backend functionality required for data storage and retrieval. As such, access to the application is available exclusively upon the execution of a signed Non-Disclosure Agreement (NDA), after which the project and backend documentation can be made available upon request.</em>",
      githubLink: "",
      category: "Personal Projects",
      image: "../images/project/Golf-Coach-Pro.png",
    },
  ],
  [
    6,
    {
      title: "CV Website",
      languages: ["HTML", "CSS", "JavaScript"], 
      description:
        "This is my personal CV website. I created this website to showcase my projects and skills. The website website you are currently using :)",
      githubLink: "https://github.com/Waldo-Blom/CV-website",
      category: "Personal Projects",
      image: "../images/project/CV-Website.png",
    },
    
  ],
  [
    7,
    {
      title: "TypeScript Essentials Course",
      languages: ["TypeScript", "JavaScript", "Node.js", "React", "Angular", "Vue"], 
      description:
        "Personal notes and code exercises from the TypeScript Essentials course by Shaun Wassell on O'Reilly Learning.",
      githubLink: "https://github.com/Waldo-Blom/Learning-TypeScript-Essentials",
      category: "Personal Projects",
      image: "../images/project/TypeScript-Essentials.png",
    },
    
  ],
  [
    8,
    {
      title: "Flappy Bird",
      languages: ["C#", "Unity"],	 
      description:
        "I remade Flappy Bird in Unity with C# as a project to learn more about game development. Check out the code on my GitHub.",
      githubLink: "https://github.com/Waldo-Blom/FlappyBird",
      category: "Personal Projects",
      image: "../images/project/Flappy-Bird.png",
    },
  ],
]);




