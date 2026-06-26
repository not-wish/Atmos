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
      <Header/>
      <HeroSection/>
      <FeatureShowcase/>
      <section id="pricing" className="">
        <PricingMatrix/>
      </section>
      <SocialProof/>
      <Footer/>
    </main>
  );
}
