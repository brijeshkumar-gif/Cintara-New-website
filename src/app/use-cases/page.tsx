import UseCasesHero from "@/components/UseCasesHero";
import ScenariosSection from "@/components/ScenariosSection";
import HighStakesSection from "@/components/HighStakesSection";
import UseCasesCTA from "@/components/UseCasesCTA";
import Footer from "@/components/Footer";

export default function UseCasesPage() {
    return (
        <div style={{ background: "#ffffff" }}>
            <UseCasesHero />
            <ScenariosSection />
            <HighStakesSection />
            <UseCasesCTA />
            <Footer />
        </div>
    );
}
