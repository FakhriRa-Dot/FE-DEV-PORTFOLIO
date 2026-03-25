export type SkillId =
  | "html"
  | "css"
  | "javascript"
  | "typescript"
  | "react"
  | "next"
  | "vite"
  | "tailwind"
  | "bootstrap"
  | "mui"
  | "storybook";

export type Skill = {
  title: string;
  items: {
    id: SkillId;
    label: string;
  }[];
};

export const techStacks: Skill[] = [
  {
    title: "Core Web",
    items: [
      { id: "html", label: "HTML" },
      { id: "css", label: "CSS" },
      { id: "javascript", label: "JavaScript" },
      { id: "typescript", label: "TypeScript" },
    ],
  },
  {
    title: "Framework & Tools",
    items: [
      { id: "react", label: "React.js" },
      { id: "next", label: "Next.js" },
      { id: "vite", label: "Vite" },
    ],
  },
  {
    title: "UI & Styling",
    items: [
      { id: "tailwind", label: "Tailwind CSS" },
      { id: "bootstrap", label: "Bootstrap" },
      { id: "mui", label: "Material UI" },
      { id: "storybook", label: "Storybook" },
    ],
  },
];
