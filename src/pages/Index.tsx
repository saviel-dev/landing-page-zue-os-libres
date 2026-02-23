import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CampaignSection from "@/components/CampaignSection";
import WikiSection from "@/components/WikiSection";
import ForumSection from "@/components/ForumSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Index = () => {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <WikiSection />
        <CampaignSection />
        <ForumSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
