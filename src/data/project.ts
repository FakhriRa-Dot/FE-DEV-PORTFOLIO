import { SkillId } from "./skill";

export type Project = {
  id: number;
  slug: string;
  title: string;
  description: string;
  techStack: SkillId[];
  featured?: boolean;
  year: number;
  image?: string;
  demoUrl?: string;
  codeUrl?: string;
  highlights?: string[];
};

export const projects: Project[] = [
  {
    id: 1,
    slug: "user-management",
    title: "User Management",
    description:
      "A web-based user management system that allows administrators to manage user data, roles, and access permissions efficiently.",
    techStack: ["next", "typescript", "react"],
    featured: true,
    year: 2025,
    image: "/images/project-1.png",
    demoUrl: "https://mini-project-react-beta.vercel.app/",
    codeUrl: "https://github.com/FakhriRa-Dot/MiniProject-React.git",
    highlights: [
      "Role-based access control",
      "CRUD user management",
      "Responsive UI",
    ],
  },
  {
    id: 2,
    slug: "recipe-app",
    title: "Recipe App",
    description:
      "A responsive recipe application designed to help users discover, save, and manage cooking recipes in one place.",
    featured: true,
    techStack: ["next", "typescript", "tailwind"],
    year: 2025,
    image: "/images/project-2.png",
    codeUrl: "https://github.com/FakhriRa-Dot/AssignmentDayEC.git",
    highlights: ["Clean UI with Tailwind"],
  },
  {
    id: 3,
    slug: "coffee-shop",
    title: "Coffee Shop",
    description:
      "A modern coffee shop website built to showcase products, menus, and brand identity.",
    techStack: ["next", "css", "tailwind"],
    year: 2026,
    image: "/images/project-3.png",
    codeUrl: "https://github.com/FakhriRa-Dot/Mini-Project-AdvanceReact.git",
    highlights: ["Landing page design", "Responsive layout"],
  },
  {
    id: 4,
    slug: "travel-app",
    title: "Travel App",
    description:
      "A travel application designed to help users plan their trips, find accommodations, and explore destinations.",
    techStack: ["next", "typescript", "tailwind"],
    year: 2026,
    image: "/images/project-4.png",
    demoUrl: "https://travel-app-virid-one.vercel.app/",
    codeUrl: "https://github.com/FakhriRa-Dot/Travel-App.git",
    highlights: ["Responsive layout"],
  },
];
