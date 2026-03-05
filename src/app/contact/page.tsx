import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactFormSection from "@/components/ContactFormSection";

export default function ContactPage() {
    return (
        <main className="main-content bg-[#f0f9ff]/30">
            <Header />
            <div>
                <ContactFormSection />
            </div>
            <Footer />
        </main>
    );
}
