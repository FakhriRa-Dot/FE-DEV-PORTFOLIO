import {
  SiBootstrap,
  SiCss,
  SiHtml5,
  SiJavascript,
  SiMui,
  SiNextdotjs,
  SiReact,
  SiStorybook,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from "react-icons/si";
import type { ReactNode } from "react";
import { SkillId } from "./skill";

export const techIconMap: Record<SkillId, ReactNode> = {
  html: <SiHtml5 />,
  css: <SiCss />,
  javascript: <SiJavascript />,
  typescript: <SiTypescript />,
  react: <SiReact />,
  next: <SiNextdotjs />,
  vite: <SiVite />,
  tailwind: <SiTailwindcss />,
  bootstrap: <SiBootstrap />,
  mui: <SiMui />,
  storybook: <SiStorybook />,
};
