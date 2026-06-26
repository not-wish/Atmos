import FeatureShowcase from "@/components/sections/FeatureShowcase";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import HeroSection from "@/components/sections/HeroSection";
import PricingMatrix from "@/components/sections/PricingMatrix";
import SocialProof from "@/components/sections/SocialProof";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center">
      <Header />
      <HeroSection />
      <section id="features" className="flex items-center justify-center w-full">
        <FeatureShowcase />
      </section>
      <section id="pricing" className="flex items-center justify-center w-full">
        <PricingMatrix />
      </section>
      <section id="social-proof" className="flex items-center justify-center w-full">
        <SocialProof />
      </section>
      <Footer />
    </main>
  );
}
