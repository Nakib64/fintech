import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProjectsHero from "../components/projects/ProjectsHero";
import IntakeSection from "../components/projects/IntakeSection";
import CalendarSync from "../components/projects/CalendarSync";
import ProcurementFaq from "../components/projects/ProcurementFaq";
import ProjectsCta from "../components/projects/ProjectsCta";

export const metadata: Metadata = {
  title: "Contact & Strategic Intake | ASHIVOX LLC",
  description:
    "Initiate project discovery, review ASHIVOX LLC registration details, or get in touch directly at support@ashivox.com.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="w-full pt-20 bg-surface-container-lowest min-h-screen">
        <div className="flex flex-col w-full">
          <ProjectsHero />
          <IntakeSection />
          <CalendarSync />
          <ProcurementFaq />
          <ProjectsCta />
        </div>
      </main>
      <Footer />
    </>
  );
}
