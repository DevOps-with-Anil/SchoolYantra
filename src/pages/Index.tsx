import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { HeroSection } from "@/components/home/HeroSection";
import { TrustedBy } from "@/components/home/TrustedBy";
import { KeyStats } from "@/components/home/KeyStats";
import { AppShowcase } from "@/components/home/AppShowcase";
import { HowItWorks } from "@/components/home/HowItWorks";
import { Testimonials } from "@/components/home/Testimonials";
import { CTABanner } from "@/components/home/CTABanner";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <TrustedBy />
        <KeyStats />
        <AppShowcase />
        <HowItWorks />
        <Testimonials />
        <CTABanner />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
