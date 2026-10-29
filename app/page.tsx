import Image from "next/image";
import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";
import RevealOnScroll from "./components/RevealOnScroll";
import HeroSection from "./components/home/HeroSection";
import LogoStrip from "./components/home/LogoStrip";
import TrustBlock from "./components/home/TrustBlock";
import PackagesSection from "./components/home/PackagesSection";
import FintechSection from "./components/home/FintechSection";
import CaseStudySection from "./components/home/CaseStudySection";
import LegalBar from "./components/home/LegalBar";


export default function Home() {
  return (
    <>
      <Header />
      <main className="w-full bg-[#180535]">
        <div className="flex flex-col w-full">
          <HeroSection />
          <LogoStrip />
          <TrustBlock />
          <PackagesSection />
          <FintechSection />
          <CaseStudySection />
          <LegalBar />
        </div>
      </main>
      <Footer />
    </>
  );
}
