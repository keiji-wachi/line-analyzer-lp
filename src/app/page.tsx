import Header from "@/components/layout/Header";
import HeroSection from "@/components/sections/HeroSection";
import ProglemSection from "@/components/sections/ProblemSection";
import FeaturesSection from "@/components/sections/FeatureSection";
import TechStackSection from "@/components/sections/TechStackSection";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <HeroSection />
        <ProglemSection />
        <FeaturesSection />
        <TechStackSection />
      </main>
    </>
  );
}