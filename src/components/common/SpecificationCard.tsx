import {
  Code2,
  Gauge,
  MonitorSmartphone,
  type LucideIcon,
} from "lucide-react";

type SpecificationIcon =
  | "responsive"
  | "performance"
  | "code";

type SpecificationCardProps = {
  title: string;
  description: string;
  icon: SpecificationIcon;
};

const iconMap: Record<SpecificationIcon, LucideIcon> = {
  responsive: MonitorSmartphone,
  performance: Gauge,
  code: Code2,
};

export default function SpecificationCard({
  title,
  description,
  icon,
}: SpecificationCardProps) {
  const Icon = iconMap[icon];

  return (
    <article className="rounded-card border border-border/60 bg-surface p-8 lg:p-9">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Icon size={30} strokeWidth={2} aria-hidden="true" />
        </div>

      <h3 className="mt-6 text-xl font-bold text-text-primary">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-text-secondary">
        {description}
      </p>
    </article>
  );
}