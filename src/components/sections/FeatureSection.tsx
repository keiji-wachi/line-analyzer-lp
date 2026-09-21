import FeatureItem from "@/components/common/FeatureItem";
import SectionHeading from "@/components/common/SectionHeading";
import Section from "@/components/layout/Section";
import Reveal from "@/components/motion/Reveal";
import { features } from "@/data/features";

export default function FeaturesSection() {
  return (
    <Section id="features">
      <Reveal>
        <SectionHeading
          eyebrow="FEATURES"
          title="現場のDXを叶える3つの機能"
          description="シンプルな操作で、現場の記録・分析・管理を一元化します。"
        />
      </Reveal>

      <div className="mt-16 space-y-24 lg:mt-24 lg:space-y-32">
        {features.map((feature) => (
          <Reveal
            key={feature.number}
            delay={0.05}
          >
            <FeatureItem {...feature} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}