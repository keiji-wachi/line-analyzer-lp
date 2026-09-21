import SectionHeading from "@/components/common/SectionHeading";
import TechCard from "@/components/common/TechCard";
import Section from "@/components/layout/Section";
import { techStack } from "@/data/techStack";

import Reveal from "@/components/motion/Reveal";

export default function TechStackSection() {
  return (
    <Section id="tech-stack">
      <Reveal>
        <SectionHeading
          eyebrow="TECH STACK"
          title="品質を支える技術スタック"
          description="見た目だけでなく、保守性・安全性・レスポンシブ・テストまで考慮したWeb開発を行っています。"
        />
      </Reveal>

      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {techStack.map((tech, index) => (
        <Reveal
          key={tech.name}
          delay={index * 0.06}
        >
          <TechCard
            name={tech.name}
            category={tech.category}
            description={tech.description}
            icon={tech.icon}
          />
        </Reveal>
        ))}
      </div>
    </Section>
  );
}