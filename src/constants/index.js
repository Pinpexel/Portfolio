import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  pinpexelLogo,
  ecommerce,
  laravel,
  workflow,
  agentArmy,
} from "../assets";

export const navLinks = [
  {
    id: "",           // scrolls to top / Hero
    title: "Home",
  },
  {
    id: "about",      // Services section (About.jsx wrapped with "about" id)
    title: "Services",
  },
  {
    id: "work",       // Projects section (Works.jsx wrapped with "work" id)
    title: "Projects",
  },
  {
    id: "feedbacks",  // Clients / Testimonials section
    title: "Clients",
  },
  {
    id: "contact",    // Contact section
    title: "Contact",
  },
];

const services = [
  {
    title: "Development & Programming",
    icon: web,
  },
  {
    title: "Graphic Design & Video Editing",
    icon: creator,
  },
  {
    title: "AI Ads Videos",
    icon: mobile,
  },
  {
    title: "AI Workflow Automation",
    icon: backend,
  },
];

const socials = [
  {
    id: "instagram",
    name: "Instagram",
    link: "https://www.instagram.com/pinpexel?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==",
  },
  {
    id: "whatsapp",
    name: "WhatsApp",
    link: "https://wa.me/962789625727",
  },
  {
    id: "github",
    name: "GitHub",
    link: "https://github.com/Pinpexel",
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "PinPexel delivered our eCommerce platform on time and beyond our expectations. Their attention to detail and technical skill is unmatched.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "We've never worked with an agency that truly cares about our business success the way PinPexel does. They are true partners.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After PinPexel automated our workflows, our team saves 20+ hours a week. The ROI has been incredible. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];


const projects = [
  {
    name: "eCommerce Platform",
    description:
      "A fully functional eCommerce website built with pure PHP, MySQL, and Bootstrap. Includes a customer-facing store and a complete admin dashboard for managing products and users.",
    tags: [
      {
        name: "PHP",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: ecommerce,
    source_code_link: "https://github.com/",
  },
  {
    name: "Sales & Inventory System",
    description:
      "A robust web application built with the Laravel framework, featuring a powerful dependency injection container, database ORM, and secure routing.",
    tags: [
      {
        name: "Laravel",
        color: "blue-text-gradient",
      },
      {
        name: "PHP",
        color: "green-text-gradient",
      },
      {
        name: "Backend",
        color: "pink-text-gradient",
      },
    ],
    image: laravel,
    source_code_link: "https://github.com/",
  },
  {
    name: "Ultimate Media & Ads Agent Army",
    description:
      "A complete automation system featuring a team of 9 AI agents managed directly via Telegram. It integrates Generative AI for creating cinematic images and videos, allows on-the-go control of Facebook and Instagram ad budgets, and automatically manages emails, calendars, and documents.",
    tags: [
      {
        name: "automation",
        color: "blue-text-gradient",
      },
      {
        name: "ai-agents",
        color: "green-text-gradient",
      },
      {
        name: "telegram-bot",
        color: "pink-text-gradient",
      },
    ],
    image: agentArmy,
    source_code_link: "https://github.com/",
  },
];


export { services, technologies, experiences, testimonials, projects, socials };
