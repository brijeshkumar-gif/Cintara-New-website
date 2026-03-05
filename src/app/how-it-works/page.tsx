import HowItWorksHero from "@/components/HowItWorksHero";
import ControlPlaneArch from "@/components/ControlPlaneArch";
import RequestFlow from "@/components/RequestFlow";
import ArchPrinciples from "@/components/ArchPrinciples";
import InfrastructureSection from "@/components/InfrastructureSection";
import Footer from "@/components/Footer";

export default function HowItWorksPage() {
    return (
        <div style={{ background: "#ffffff" }}>
            <HowItWorksHero />
            <ControlPlaneArch />
            <RequestFlow />
            <ArchPrinciples />
            <InfrastructureSection />
            <Footer />
        </div>
    );
}
