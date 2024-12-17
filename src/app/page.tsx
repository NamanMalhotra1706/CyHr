import { AboutSection } from "@/components/AboutSection";
import {FAQSection} from "@/components/FAQ";
import { FeaturesSection } from "@/components/FeatureSection";
import Footer from "@/components/Footer";
import {HomeGemini} from "@/components/HomeGemini";
import { TeamSection } from "@/components/TeamSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.98] antialiased bg-grid-white/[0.02]">
      <HomeGemini/>
      <FeaturesSection/>
      <AboutSection/>
      <TeamSection/>
      <FAQSection/>
      <Footer/>
    </main>
  );
}
