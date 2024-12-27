import { link } from "fs";

export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Calendars", link: "#calendar" },
    { name: "Contact", link: "#contact" },

  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "I prioritize client collaboration, fostering open communication ",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/b1.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: "I'm very flexible with time zone communications",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "My tech stack",
      description: "I constantly try to improve",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "Tech enthusiast with a passion for development.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
  
    {
      id: 5,
      title: "Currently building a JS Animation library",
      description: "The Inside Scoop",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Do you want to start a project together?",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];
  
  export const projects = [
    {
      id: 1,
      title: "Collaborative Whiteboard App",
      des: "An online collaborative whiteboard app with public and private rooms, real-time chat, downloadable whiteboards, and NFT minting on the Mumbai Testnet.",
      img: "/cn.png",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
      link: "https://github.com/HarshGalav/CN-project-collabarative-whiteboard-chat-app",
    },
    {
      id: 2,
      title: "Nike Landing Page using Tailwind",
      des: "This Nike landing page, designed with Tailwind CSS, features bold typography, dynamic product displays, responsive layouts, and a clean, modern design to captivate users.",
      img: "Nike.png",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
      link: "https://nike-tailwind-nine.vercel.app/",
    },
    {
      id: 3,
      title: "Twitter alike Django Project",
      des: "This Twitter-like social media platform built with Django, featuring user authentication, posting, timelines, follow system, real-time notifications, and engagement tools.",
      img: "/tweet.png",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
      link: "https://twitter-alike-django-vmdj.vercel.app/tweet/",
    },
    {
      id: 4,
      title: "Ecoyaan Frontend",
      des: "During my internship at Ecoyaan, I developed the frontend of the platform using React and TypeScript, integrating REST APIs and ensuring responsive, user-friendly interfaces.",
      img: "/eco.png",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
      link: "https://ecoyaan.com/",
    },
  ];
  
 
  
  
  export const workExperience = [
    {
      id: 1,
      title: "Software Engineering Intern",
      desc: "As a Software Engineering Intern at Ecoyaan, I developed the frontend using React and TypeScript, integrated REST APIs, and contributed to creating a seamless, responsive user experience.",
      className: "md:col-span-2",
      time:"Jan 2024 - Aug 2024",
      company:"Ecoyaan",
      thumbnail: "/exp1.svg",
    },
    {
      id: 2,
      title: "Web Developer",
      desc: "Developed and maintained the Biosphere Club website, focusing on UI and performance improvements.",
      className: "md:col-span-2", // no change needed here
      time: "May 2024 - Aug 2024",
      company: "Biosphere Club VIT Chennai",
      thumbnail: "/exp2.svg",

    },
    {
      id: 3,
      title: "Freelance Developer",
      desc: "I recently began my journey as a freelance developer, focusing on building custom web and mobile applications and providing tailored solutions to clients.",
      className: "md:col-span-2", // no change needed here
      time: "Dec 2024 - Present",
      thumbnail: "/exp3.svg",

    },
    {
      id: 4,
      title: "Competitive Programmer",
      desc: "I have solved over 500 problems on platforms like LeetCode, GeeksforGeeks, and Codeforces, focusing on algorithms, data structures, and optimization techniques. ",
      className: "md:col-span-2",
      company:"Leetcode, Codeforces",
      time:"July 2020 - Present",
      thumbnail: "/exp4.svg",

    },
  ];
  
  export const socialMedia = [
    {
      id: 1,
      link:"https://github.com/HarshGalav",
      img: "/git.svg",
    },
    {
      id: 2,
      link:"https://x.com/HarshSh11311338",
      img: "/twit.svg",
    },
    {
      id: 3,
      link:"https://www.linkedin.com/in/harsh-sharma-a3a560244/",
      img: "/link.svg",
    },
    {
      id: 4,
      link:"https://leetcode.com/u/harshsharma3122/",
      img: "/lc.png",
    },
  ];