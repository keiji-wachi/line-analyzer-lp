import Header from "@/components/layout/Header";
import HeroSection from "@/components/sections/HeroSection";
import ProglemSection from "@/components/sections/ProblemSection";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <HeroSection />
        <ProglemSection />
      </main>
    </>
  );
}