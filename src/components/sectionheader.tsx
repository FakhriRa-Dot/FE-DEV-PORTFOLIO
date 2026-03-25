type Props = {
  label?: string;
  title: string;
};

export default function SectionHeader({ label, title }: Props) {
  return (
    <div className="flex gap-4 mb-10">
      <div className="w-1 bg-ink rounded-full mt-1" />

      <div>
        {label && (
          <p className="text-xs uppercase tracking-widest text-gray-500">
            {label}
          </p>
        )}
        <h2 className="text-xl font-alfa text-ink mt-1">{title}</h2>
      </div>
    </div>
  );
}
