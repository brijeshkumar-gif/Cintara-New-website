import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import WhatCintaraDoesSection from "@/components/WhatCintaraDoesSection";
import GovernanceSection from "@/components/GovernanceSection";
import ExecutionSection from "@/components/ExecutionSection";

export default function Home() {
  return (
    <div style={{ background: "#ffffff" }}>
      <HeroSection />
      <ProblemSection />
      <WhatCintaraDoesSection />
      <GovernanceSection />
      <ExecutionSection />
    </div>
  );
}
