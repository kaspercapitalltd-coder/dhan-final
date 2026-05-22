import LaunchBanner from "@/components/LaunchBanner";
import Hero from "@/components/Hero";
import WhyUs from "@/components/WhyUs";
import StatsBar from "@/components/StatsBar";
import HowItWorks from "@/components/HowItWorks";
import PricingPlans from "@/components/PricingPlans";
import Testimonials from "@/components/Testimonials";
import DhanReferral from "@/components/DhanReferral";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <>
      <LaunchBanner />
      <Hero />
      <WhyUs />
      <StatsBar />
      <HowItWorks />
      <PricingPlans />
      <Testimonials />
      <DhanReferral />
      <FAQ />
      <FinalCTA />
    </>
  );
}
