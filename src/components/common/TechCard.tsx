import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiSpringboot,
  SiMysql,
  SiJunit5,
  SiGithub,
} from "react-icons/si";
import type { IconType } from "react-icons";

type TechIcon =
  | "nextjs"
  | "react"
  | "typescript"
  | "tailwind"
  | "spring"
  | "mysql"
  | "junit"
  | "github";

type TechCardProps = {
  name: string;
  category: string;
  description: string;
  icon: TechIcon;
};

const iconMap: Record<TechIcon, IconType> = {
  nextjs: SiNextdotjs,
  react: SiReact,
  typescript: SiTypescript,
  tailwind: SiTailwindcss,
  spring: SiSpringboot,
  mysql: SiMysql,
  junit: SiJunit5,
  github: SiGithub,
};

export default function TechCard({
  name,
  category,
  description,
  icon,
}: TechCardProps) {
  const Icon = iconMap[icon];

  return (
    <article className="rounded-card border border-border/60 bg-surface p-6 transition duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
        <Icon size={26} aria-hidden="true" />
      </div>

      <p className="text-xs font-semibold tracking-[0.16em] text-primary">
        {category.toUpperCase()}
      </p>

      <h3 className="mt-3 text-xl font-bold text-text-primary">
        {name}
      </h3>

      <p className="mt-3 leading-7 text-text-secondary">
        {description}
      </p>
    </article>
  );
}