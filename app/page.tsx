import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import TrustedBy from "@/app/components/TrustedBy";
import FeaturesSection from "@/app/components/FeaturesSection";
import ProductSection from "@/app/components/ProductSection";
import BentoSection from "@/app/components/BentoSection";
import PricingSection from "@/app/components/PricingSection";
import Testimonials from "@/app/components/Testimonials";
import CTASection from "@/app/components/CTASection";
import Footer from "@/app/components/Footer";
import ScrollReveal from "@/app/components/ScrollReveal";

export default function Home() {
  return (
    <>
      {/* <Navbar /> */}

      <main id="main-content">
        <Hero />

        <div className="reveal">
          <ProductSection />
        </div>

        <div className="reveal">
          <BentoSection />
        </div>

        <div className="reveal">
          <PricingSection />
        </div>

        <div className="reveal">
          <Testimonials />
        </div>

        <div className="reveal">
          <CTASection />
        </div>
      </main>

      <Footer />

      <ScrollReveal />
    </>
  );
}
