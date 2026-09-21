import SectionHeading from "@/components/common/SectionHeading";
import TechCard from "@/components/common/TechCard";
import Section from "@/components/layout/Section";
import { techStack } from "@/data/techStack";

export default function TechStackSection() {
  return (
    <Section id="tech-stack">
      <SectionHeading
        eyebrow="TECH STACK"
        title="品質を支える技術スタック"
        description="見た目だけでなく、保守性・安全性・レスポンシブ・テストまで考慮したWeb開発を行っています。"
      />

      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {techStack.map((tech) => (
          <TechCard
            key={tech.name}
            name={tech.name}
            category={tech.category}
            description={tech.description}
            icon={tech.icon}
          />
        ))}
      </div>
    </Section>
  );
}