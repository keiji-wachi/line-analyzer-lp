import ProblemCard from "@/components/common/ProblemCard";
import SectionHeading from "@/components/common/SectionHeading";
import Section from "@/components/layout/Section";
import { problems } from "@/data/problems";

import Reveal from "@/components/motion/Reveal";

export default function ProblemSection() {
  return (
    <Section id="problem">
      <Reveal>
        <SectionHeading
          eyebrow="PROBLEM STATEMENT"
          title="こんな現場の課題、放置していませんか？"
          description="多くの製造現場で、データはあるのに活かせていないのが現状です。"
        />
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {problems.map((problem, index) => (
        <Reveal
          key={problem.title}
          delay={index * 0.08}
        >

          <ProblemCard
            title={problem.title}
            description={problem.description}
            icon={problem.icon}
          />
        </Reveal>
        ))}
      </div>
    </Section>
  );
}