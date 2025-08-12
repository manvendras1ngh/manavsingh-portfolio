import type { Project } from "./types";

export const projects: Project[] = [
  {
    id: 1,
    title: "Grind Gears",
    date: "January, 2025",
    description:
      "A sleek, responsive eCommerce web app built with React and TypeScript, designed for seamless gear and equipment shopping. It combines Material-UI, Tailwind CSS, and shadcn/ui for a clean, modern, and highly customizable user interface.",
    tags: [
      "React.js",
      "React Router DOM",
      "Typescript",
      "Material-UI (MUI)",
      "Tailwind CSS",
      "Shadcn UI",
    ],
    image: "/grindGear.png",
    links: {
      website: "https://grind-gears.vercel.app",
      github: "https://github.com/manvendras1ngh/grindGears",
    },
  },
  {
    id: 2,
    title: "Grind Gears Backend",
    date: "January, 2025",
    description:
      "Grind Gears backend uses Node.js with Express for routing and MongoDB for data storage. It follows an MVC structure where Mongoose schemas define product and user models, controllers handle business logic (e.g. gear purchases, user auth), and routes neatly organize endpoints like /api/gears and /api/users. This modular structure ensures scalability and maintainability.",
    tags: ["Node.js", "Express", "MongoDB", "CORS", "Vercel"],
    image:
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=400&fit=crop",
    links: {
      github: "https://github.com/manvendras1ngh/grind-gears-backend",
    },
  },
  {
    id: 3,
    title: "Anvaya CRM",
    date: "August, 2025",
    description:
      "A modern Customer Relationship Management system built with React and TypeScript for managing leads and sales agents.",
    tags: [
      "React.js",
      "React Router DOM",
      "Typescript",
      "Tailwind CSS",
      "Shadcn UI",
    ],
    image: "/anvaya.png",
    links: {
      website: "https://anvaya-crm-jet.vercel.app",
      github: "https://github.com/manvendras1ngh/anvaya-crm-frontend",
    },
  },
  {
    id: 4,
    title: "Anvaya CRM Backend",
    date: "August, 2025",
    description:
      "A Node.js REST API for managing leads, agents, and reports in a Anvaya CRM system",
    tags: ["Node.js", "Express", "MongoDB", "CORS", "Vercel"],
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop",
    links: {
      github: "https://github.com/manvendras1ngh/anvaya-crm-backend",
    },
  },
];
