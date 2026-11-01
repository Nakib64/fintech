import type { Metadata } from "next";
import { Suspense } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CheckoutContainer from "../components/checkout/CheckoutContainer";
import CheckoutHero from "../components/checkout/CheckoutHero";

export const metadata: Metadata = {
  title: "Stripe Checkout & Merchant Settlement | ASHIVOX LLC",
  description:
    "Institutional settlement rails, tokenized 3D Secure checkout, and automated merchant invoicing by ASHIVOX LLC.",
};

export default function CheckoutPage() {
  return (
    <>
      <Header />
      <main className="w-full pt-20 bg-surface-container-lowest min-h-screen">
        <div className="flex flex-col w-full">
          <CheckoutHero />

          {/* Main Checkout Section */}
          <section className="relative w-full bg-surface-container-lowest pb-16 md:pb-24 pt-6">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-margin relative z-10 w-full overflow-hidden sm:overflow-visible">
              <Suspense
                fallback={
                  <div className="p-12 text-center text-on-surface-variant">
                    <span className="material-symbols-outlined animate-spin text-[32px] text-primary">
                      progress_activity
                    </span>
                    <p className="mt-2 text-[14px]">
                      Loading secure settlement engine...
                    </p>
                  </div>
                }
              >
                <CheckoutContainer />
              </Suspense>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
