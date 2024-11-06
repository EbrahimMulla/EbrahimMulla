import project1 from "../assets/project1.webp";
import project2 from "../assets/project2.webp";
import project3 from "../assets/project3.webp";
import project4 from "../assets/project4.webp";
import project5 from "../assets/project5.webp";
import project6 from "../assets/project6.webp";
import personImage from "../assets/testimonial.webp";

import {
  RiHtml5Line,
  RiCss3Line,
  RiJavascriptLine,
  RiReactjsLine,
  RiNodeTree,
  RiJavaLine,
  RiFirebaseFill,
  RiShare2Fill,
  RiComputerLine,
  RiFireLine,
  RiThunderstormsLine,
  RiChargingPile2Line,
  RiAiGenerate,
} from "@remixicon/react";
import {
  RiDatabaseLine,
  RiCodeSSlashLine,
  RiGitBranchLine,
} from "@remixicon/react";

export const NAVIGATION_LINKS = [
  { href: "#Project", label: "Project" },
  { href: "#Skills", label: "Skills" },
  { href: "#WorkExperince", label: "Work Experince" },
  { href: "#Education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export const PROFILE = {
  name: "Ebrahim Mulla",
  role: "Cyber Security Analyst",
  subheading:
    "A recent BCA graduate with a specialization in Cyber Security, possessing a strong foundation in computer science and hands-on experience in vulnerability assessments and penetration testing to enhance organizational security. Proficient in identifying and mitigating OWASP Top 10 vulnerabilities, as well as OWASP Top 10 API Security Risks. Skilled in Android development, demonstrated through the development of an online music application, where I actively identified bugs and improved overall functionality. I am a team-oriented individual with strong strategic thinking, problem-solving abilities, and a resilient attitude. I am eager to apply my technical expertise and collaborate with like-minded professionals to tackle emerging challenges in the field of cybersecurity. ",
};

export const PROJECTS = [
  {
    id: 1,
    title: " Music Application",
    description:
      "A full-featured Music Application which had recommendtion section with most played music all of that Online",
    techStack: ["Kotlin", "Firebase"],
    imgSrc: project1,
    link: "",
  },
  {
    id: 2,
    title: "Online Order Tracker",
    description:
      "A real-time online Order tracket app with live tracking individual as well as team with profile page. Built with Kotlin and Firebase",
    techStack: ["Kotlin", "Firebase"],
    imgSrc: project2,
    link: "",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "A personal portfolio website showcasing projects and skills. Fully responsive and optimized for performance.",
    techStack: ["Next.js", "Tailwind CSS"],
    imgSrc: project3,
    link: "",
  },
  {
    id: 4,
    title: "Lawyer Portfolio",
    description:
      "A blogging platform with a content management system, for a lawyer through which he could attract more customer",
    techStack: ["HTML", "CSS", "Tailwind CSS","REACT"],
    imgSrc: project4,
    link: "https://sohail-ali.vercel.app/",
  },
  {
    id: 5,
    title: "SIEM Lab",
    description:
      "A cybersecurity lab designed for Security Information and Event Management (SIEM) tools, enabling the analysis and monitoring of security incidents.",
    techStack: ["Linux", "Virtualbox", "MetaSploit","Nmap"],
    imgSrc: project5,
    link: "",
  },
  {
    id: 6,
    title: "Encryption and decryption software",
    description:
      "Created a Encryption and Decryption software at 1st year of my college .And also solved 10 exteramly diffcult Problem for cyber forinces",
    techStack: ["C++", "Nmap", "USBscan", "Hashmap"],
    imgSrc: project6,
    link: "",
  },
];

export const SKILLS = [
  {
    name: "Kotlin",
    icon: <RiJavaLine className="text-orange-600" />,
  },
  {
    name: "Firebase",
    icon: <RiFirebaseFill className="text-orange-500" />,
  },
  {
    name: "JavaScript",
    icon: <RiJavascriptLine className="text-yellow-500" />,
  },
  {
    name: "React",
    icon: <RiReactjsLine className="text-orange-500" />,
  },
  {
    name: "Burpsuits",
    icon: <RiFireLine className="text-orange-400" />,
  },
  {
    name: "OWSAP Zap",
    icon: <RiThunderstormsLine className="text-blue-600" />,
  },
  {
    name: "Tailwind CSS",
    icon: <RiCodeSSlashLine className="text-teal-400" />,
  },
  {
    name: "SqlMap",
    icon: <RiComputerLine className="text-pink-400" />,
  },
  {
    name: "CCNA",
    icon: <RiChargingPile2Line className="text-green-400" />,
  },
  {
    name: "A.I Prompts",
    icon: <RiAiGenerate className="text-purple-400" />,
  },
];

export const EXPERIENCES = [
  {
    yearRange: "07/2023 - Present",
    role: "Omni Sports Leader",
    company: "Decathlon",
    description:
      "I had Developed Android Appliction Which help to Track Online order in Store, which not online help the team maintain reports but maintian healthy compitation among the teammates.",
    techStack: ["Kotlin", "Firebase", "Leadership", "Stock Manegment"],
  },

];

export const EDUCATION = [
  {
    id: 1,
    degree: "Bachelor of Science in Computer Application (Cyber Security)",
    institution: "Tilak Maharashtra Vidyapeeth",
    duration: "2021 - 2024",
    description:
      "I graduated with honors in Computer Applications, Android Development, Penetration Testing, and Web Development. I also completed a project involving the development of a live music platform.",
  },
  {
    id: 2,
    degree: "Cybersecurity Analyst",
    institution: "TCS",
    duration: "2024",
    description:
      "Completed a job simulation involving identity and access management (IAM) for Tata Consultancy Services, collaborating with a Cybersecurity Consulting team. Acquired expertise in IAM principles, cybersecurity best practices, and strategic alignment with business objectives. Delivered comprehensive documentation and presentations, showcasing the ability to communicate complex technical concepts effectively.",
  },
  {
    id: 3,
    degree: "Security Analyst",
    institution: "EC-Council",
    duration: "2024",
    description:
      "I have completed a SQL Injection certification from EC-Council, where I gained in-depth knowledge of SQL injection techniques, prevention methods, and best practices for securing databases. This certification has equipped me with the skills to identify vulnerabilities, conduct ethical hacking assessments, and implement robust security measures to protect applications against SQL injection attacks.",
  },
  {
    id: 4,
    degree: "Software Engineering",
    institution: " Goldman Sachs",
    duration: "2024",
    description:
      "Completed a job simulation as a Goldman Sachs governance analyst responsible for assessing IT security and suggesting improvements. Identified that the company was using an outdated password hashing algorithm by cracking passwords using Hashcat. Wrote a memo for my supervisor summarizing a range of proposed uplifts to increase the company’s level of password protection including extending minimum password length and using a dedicated hashing algorithm.",
  },
];

