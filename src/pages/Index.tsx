import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import InteractiveMap from "@/components/InteractiveMap";
import FeaturesSection from "@/components/FeaturesSection";
import ImpactDashboard from "@/components/ImpactDashboard";
import EducationSection from "@/components/EducationSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <InteractiveMap />
      <ImpactDashboard />
      <EducationSection />
      <Footer />
    </div>
  );
};

export default Index;