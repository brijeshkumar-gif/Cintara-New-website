import AboutHero from "@/components/AboutHero";
import ShiftSection from "@/components/ShiftSection";
import CoreBeliefSection from "@/components/CoreBeliefSection";
import ControlPlaneSection from "@/components/ControlPlaneSection";
import PrinciplesSection from "@/components/PrinciplesSection";
import ReadinessSection from "@/components/ReadinessSection";
import LeadershipSection from "@/components/LeadershipSection";
import AdvisorySection from "@/components/AdvisorySection";
import AboutCTASection from "@/components/AboutCTASection";
import Footer from "@/components/Footer";

export default function AboutPage() {
    return (
        <main className="main-content">
            <AboutHero />
            <ShiftSection />
            <CoreBeliefSection />
            <ControlPlaneSection />
            <PrinciplesSection />
            <ReadinessSection />
            <LeadershipSection />
            <AdvisorySection />
            <AboutCTASection />
            <Footer />
        </main>
    );
}
