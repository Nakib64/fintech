import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ServicesPricing from "../components/services/ServicesPricing";
import ProductionShowcase from "../components/services/ProductionShowcase";
import ComparisonTable from "../components/services/ComparisonTable";
import EnterpriseBanner from "../components/services/EnterpriseBanner";

export const metadata: Metadata = {
  title: "Services & Retainer Packages",
  description:
    "Explore Vortex Digital Media LLC's transparent production packages, video editing retainers, content writing sprints, and social media growth operations.",
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="w-full pt-20 bg-surface-container-lowest min-h-screen">
        <div className="flex flex-col w-full">
          <ServicesPricing />
          <ProductionShowcase />
          <ComparisonTable />
          <EnterpriseBanner />
        </div>
      </main>
      <Footer />
    </>
  );
}
