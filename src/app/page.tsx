import Header from "@/components/layout/Header";
import HeroSection from "@/components/sections/HeroSection";
import ProglemSection from "@/components/sections/ProblemSection";
import FeaturesSection from "@/components/sections/FeatureSection";
import TechStackSection from "@/components/sections/TechStackSection";
import SpecificationSection from "@/components/sections/SpecificationsSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <HeroSection />
        <ProglemSection />
        <FeaturesSection />
        <TechStackSection />
        <SpecificationSection />
        <ContactSection />
      </main>
    </>
  );
}