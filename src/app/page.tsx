import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import WhatCintaraDoesSection from "@/components/WhatCintaraDoesSection";
import GovernanceSection from "@/components/GovernanceSection";
import ExecutionSection from "@/components/ExecutionSection";
import TestimonialSection from "@/components/TestimonialSection";
import CallToActionSection from "@/components/CallToActionSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div style={{ background: "#ffffff" }}>
      <HeroSection />
      <ProblemSection />
      <WhatCintaraDoesSection />
      <GovernanceSection />
      <ExecutionSection />
      <TestimonialSection />
      <CallToActionSection />
      <Footer />
    </div>
  );
}
