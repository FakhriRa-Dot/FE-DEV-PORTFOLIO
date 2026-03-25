import { SkillId } from "@/data/skill";

type FilterId = SkillId | "all";

type Props = {
  active: FilterId;
  onChange: (filter: FilterId) => void;
};

const filters: { id: FilterId; label: string }[] = [
  { id: "all", label: "all projects" },
  { id: "react", label: "react" },
  { id: "next", label: "next.js" },
  { id: "typescript", label: "typescript" },
  { id: "javascript", label: "javascript" },
];

export default function ProjectFilter({ active, onChange }: Props) {
  return (
    <div className="mb-12 flex flex-wrap gap-3">
      {filters.map((filter) => {
        const isActive = active === filter.id;

        return (
          <button
            key={filter.id}
            onClick={() => onChange(filter.id)}
            className={`rounded-md px-4 py-2 text-sm capitalize transition
              ${
                isActive
                  ? "bg-[#7b806f] text-white"
                  : "border bg-white text-gray-700 hover:bg-gray-100"
              }`}
          >
            {filter.label}
          </button>
        );
      })}
    </div>
  );
}
