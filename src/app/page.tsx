import Header from "@/components/layout/Header";
import Section from "@/components/layout/Section";
import SectionHeading from "@/components/common/SectionHeading";
import Button from "@/components/common/Button";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Section>
          <SectionHeading
            eyebrow="FEATURES"
            title="現場のDXを叶える3つの機能"
            description="シンプルな操作で、現場の記録・分析・管理を一元化します。"
          />

          <div className="mt-12 flex justify-center gap-4">
            <Button>無料デモを体験する</Button>

            <Button variant="secondary">
              詳細を見る
            </Button>
          </div>
        </Section>
      </main>
    </>
  );
}