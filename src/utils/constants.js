// import project1 from "../assets/projects/project-1.jpg";
// import project2 from "../assets/projects/project-2.jpg";
// import project3 from "../assets/projects/project-3.jpg";
// import project4 from "../assets/projects/project-4.jpg";
import work from "../assets/work.png";
import work2 from '../assets/work2.png'

export const HERO_CONTENT = 'Full Stack Developer with 2+ years of experience building user-friendly interfaces and reliable backend systems.';
export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const NAVIBATIONS_LINKS = [
  {
    path: '/',
    element: 'Home'
      },
  {
    path: '/about',
    element: 'About'
  },
  {
    path: '/work',
    element: 'Work'
  },
  {
    path: '/contact',
    element: 'Contact'
  }
]

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "Wedding Popcorn",
    image: work,
    description: "Designed and developed a custom website for Wedding Popcorn using HTML, CSS, and JavaScript. Created intuitive layouts and optimized navigation for a seamless user experience. Collaborated closely with the client to showcase their wedding planning services, enhancing their online presence and attracting new customers. Delivered a fully functional and visually appealing website that reflected their brand and business goals.",
    technologies: ["HTML", "CSS", "Java Script", "WowJS", "Bootstrap"],
  },
  {
    title: "Studio Popcorn",
    image: work2,
    description:
      "Designed and developed a custom website for Studio Popcorn using HTML, CSS, and JavaScript. Focused on creating dynamic and engaging layouts, optimized for dance studio services and event bookings. Collaborated with the client to highlight their unique dance offerings, ensuring a user-friendly experience that drives customer interaction. Delivered a sleek, modern, and fully responsive website, enhancing the studio's digital presence and supporting their business growth.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
  },
  // {
  //   title: "Portfolio Website",
  //   image: project3,
  //   description:
  //     "A personal portfolio website showcasing projects, skills, and contact information.",
  //   technologies: ["HTML", "CSS", "React", "Bootstrap"],
  // },
  // {
  //   title: "Blogging Platform",
  //   image: project4,
  //   description:
  //     "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
  //   technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  // },
];

export const CONTACT = {
  address: "7 2nd Floor Yakult, Nirman Nagar, Jaipur, Rajsthan - 302019 ",
  phoneNo: "(+91) - 6388675377 ",
  email: "vijayk8478.com",
};
