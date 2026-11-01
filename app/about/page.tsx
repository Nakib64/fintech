import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AboutHero from "../components/about/AboutHero";
import EntityVerificationCard from "../components/about/EntityVerificationCard";
import LeadershipGrid from "../components/about/LeadershipGrid";
import LegalFrameworkTabs from "../components/about/LegalFrameworkTabs";
import LegalCounselBanner from "../components/about/LegalCounselBanner";

export const metadata: Metadata = {
  title: "About & Legal Governance",
  description:
    "Institutional trust, corporate charters, New Mexico entity disclosure, executive governance, and standard commercial terms of service at ASHIVOX LLC.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="w-full pt-20 bg-surface-container-lowest min-h-screen">
        <div className="flex flex-col w-full">
          <AboutHero />
          <section className="w-full bg-surface-bright pb-24">
            <div className="max-w-[1440px] mx-auto px-5 md:px-margin">
              <EntityVerificationCard />
              {/* <LeadershipGrid /> */}
              <LegalFrameworkTabs />
              <LegalCounselBanner />
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
