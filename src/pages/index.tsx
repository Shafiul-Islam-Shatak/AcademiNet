// import { Geist, Geist_Mono } from "next/font/google";
import Features from "@/components/HomeComponents/Features";
import HeroSection from "@/components/HomeComponents/HeroSection";

export default function Home() {
  return (
    <div>
      {/* Home Page components goes here without the Navbar and Footer components. */}
      <HeroSection />
      <Features/>
    </div>
  );
}
