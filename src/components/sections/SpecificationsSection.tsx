import SectionHeading from "@/components/common/SectionHeading";
import SpecificationCard from "@/components/common/SpecificationCard";
import Section from "@/components/layout/Section";
import { specifications } from "@/data/specifications";

export default function SpecificationsSection() {
  return (
    <Section>
      <SectionHeading
        eyebrow="SPECIFICATIONS"
        title="成果につながるLPを意識した実装"
        description="見た目だけでなく、使いやすさ・表示速度・保守性まで考慮したLP制作を行います。"
      />

      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {specifications.map((specification) => (
          <SpecificationCard
            key={specification.title}
            title={specification.title}
            description={specification.description}
            icon={specification.icon}
          />
        ))}
      </div>
    </Section>
  );
}