export type Experience = {
  id: number;
  role: string;
  company: string;
  period: string;
  points: string[];
};

export const experiences: Experience[] = [
  {
    id: 1,
    role: "Fullstack Developer Intern",
    company: "Yayasan Al Hasanah",
    period: "2024",
    points: [
      "Assisted a fullstack developer in building a web-based inventory management system.",
      "Developed and maintained frontend interfaces to manage inventory data.",
      "Collaborated on backend integration for CRUD operations and data handling.",
      "Participated in testing and debugging to ensure system functionality and reliability.",
    ],
  },
];
