import {
  FileSpreadsheet,
  Search,
  Users,
  type LucideIcon,
} from "lucide-react";

type ProblemCardProps = {
  title: string;
  description: string;
  icon: "file" | "search" | "users";
};

const iconMap: Record<ProblemCardProps["icon"], LucideIcon> = {
  file: FileSpreadsheet,
  search: Search,
  users: Users,
};

export default function ProblemCard({
  title,
  description,
  icon,
}: ProblemCardProps) {
  const Icon = iconMap[icon];

  return (
    <article className="rounded-card border border-border bg-surface p-6 shadow-card">
      <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-danger/10 text-danger">
        <Icon
          size={22}
          strokeWidth={2}
          aria-hidden="true"
        />
      </div>

      <h3 className="text-xl font-bold text-text-primary">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-text-secondary">
        {description}
      </p>
    </article>
  );
}