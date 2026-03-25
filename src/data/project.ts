import { SkillId } from "./skill";

export type Project = {
  id: number;
  title: string;
  description: string;
  category: SkillId[];
  featured?: boolean;
  image?: string;
  demoUrl?: string;
  codeUrl?: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "User Management",
    description:
      "A web-based user management system that allows administrators to manage user data, roles, and access permissions efficiently.",
    category: ["next", "typescript", "react"],
    featured: true,
    image: "/images/project-1.png",
    demoUrl: "https://mini-project-react-beta.vercel.app/",
    codeUrl: "https://github.com/FakhriRa-Dot/MiniProject-React.git",
  },
  {
    id: 2,
    title: "Recipe App",
    description:
      "A responsive recipe application designed to help users discover, save, and manage cooking recipes in one place.",
    featured: true,
    category: ["next", "typescript", "tailwind"],
    image: "/images/project-2.png",
    codeUrl: "https://github.com/FakhriRa-Dot/AssignmentDayEC.git",
  },
  {
    id: 3,
    title: "Coffe Shop",
    description:
      "A modern coffee shop website built to showcase products, menus, and brand identity.",
    category: ["next", "css", "tailwind"],
    image: "/images/project-3.png",
    codeUrl: "https://github.com/FakhriRa-Dot/Mini-Project-AdvanceReact.git",
  },
];
