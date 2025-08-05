import type { Project } from "./types";

export const projects: Project[] = [
  {
    id: 1,
    title: "Grind Gears",
    date: "January, 2025",
    description:
      "A sleek, responsive eCommerce web app built with React and TypeScript, designed for seamless gear and equipment shopping. It combines Material-UI, Tailwind CSS, and shadcn/ui for a clean, modern, and highly customizable user interface.",
    tags: ["React.js", "typescript", "Material-UI (MUI)", "tailwind", "shadcn"],
    image:
      "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?w=800&h=400&fit=crop",
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
    tags: ["node.js", "express", "mondodb", "vercel"],
    image:
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=400&fit=crop",
    links: {
      website: "https://grind-gears-backend.vercel.app",
      github: "https://github.com/manvendras1ngh/grind-gears-backend",
    },
  },
];
