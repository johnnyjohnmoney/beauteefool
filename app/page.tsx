import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { FeaturesSection } from "@/components/features-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { CTASection } from "@/components/cta-section";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <HeroSection />
        <div id="services">
          <ServicesSection />
        </div>
        <div id="about">
          <FeaturesSection />
        </div>
        <div id="testimonials">
          <TestimonialsSection />
        </div>
        <div id="contact">
          <CTASection />
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-neutral-900 text-white py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-neutral-400">
            © 2025 Beauteefool Beauty Salon. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}