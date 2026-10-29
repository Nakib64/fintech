import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProjectsHero from "../components/projects/ProjectsHero";
import IntakeSection from "../components/projects/IntakeSection";
import CalendarSync from "../components/projects/CalendarSync";
import ProcurementFaq from "../components/projects/ProcurementFaq";
import ProjectsCta from "../components/projects/ProjectsCta";

export const metadata: Metadata = {
  title: "Projects & Strategic Intake",
  description:
    "Initiate project discovery, review Delaware commercial registration details, or reserve an immediate synchronization slot with our Executive Producer.",
};

export default function ProjectsPage() {
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
