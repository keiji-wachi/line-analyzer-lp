import Image from "next/image";

import Button from "@/components/common/Button";
import Container from "@/components/layout/Container";

import FloatingVisual from "@/components/motion/FloatingVisual";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <Container>
        <div className="grid min-h-[calc(100vh-72px)] items-center gap-12 py-14 lg:grid-cols-[0.82fr_1.18fr] lg:gap-6 lg:py-12">
          {/* Hero Content */}
          <div className="relative z-10 text-center lg:text-left">
            <p className="mb-5 text-sm font-semibold tracking-[0.16em] text-primary">
              製造現場のデータで、もっと強いものづくりを。
            </p>

            <h1 className="text-4xl font-bold leading-[1.2] tracking-tight text-text-primary sm:text-5xl lg:text-6xl">
              製造ラインの
              <br />
              <span className="text-primary">「異常」を</span>
              <br />
              利益に変える。
            </h1>

            <p className="mx-auto mt-6 max-w-lg text-base leading-8 text-text-secondary sm:text-lg lg:mx-0">
              現場で蓄積される異常データを可視化・分析し、
              設備停止や品質ロスの改善につなげる
              製造業向けデータ分析SaaS。
            </p>

            <div className="mt-8 flex justify-center lg:justify-start">
              <Button>無料デモを体験する</Button>
            </div>

            <div className="mt-5 text-sm leading-6 text-text-muted">
              <p>デモアカウントで今すぐ体験できます。</p>
              <p>ID / Password はデモ公開時に掲載予定</p>
            </div>
          </div>

          {/* Product Visual */}
          <div className="relative lg:-mr-10">
            <FloatingVisual>
            <Image
              src="/images/hero/dashboard-devices.png"
              alt="LineAnalyzerのPC版とスマートフォン版データ分析画面"
              width={1780}
              height={884}
              preload
              sizes="(max-width: 1024px) 90vw, 58vw"
              className="h-auto w-full lg:scale-[1.12]"
            />
            </FloatingVisual>
          </div>
        </div>
      </Container>
    </section>
  );
}