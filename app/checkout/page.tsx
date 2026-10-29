import type { Metadata } from "next";
import { Suspense } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CheckoutContainer from "../components/checkout/CheckoutContainer";

export const metadata: Metadata = {
  title: "Stripe Checkout & Merchant Settlement",
  description:
    "Institutional settlement rails, tokenized 3D Secure checkout, and Delaware LLC automated merchant invoicing.",
};

export default function CheckoutPage() {
  return (
    <>
      <Header />
      <main className="w-full pt-20 bg-surface-container-lowest min-h-screen">
        <div className="flex flex-col w-full">
          {/* Atmospheric Violet Backdrop Layer */}
          <section className="relative w-full overflow-hidden bg-surface-container-lowest pb-16 md:pb-24">
            {/* Atmospheric Ambient Glows */}
            <div className="absolute -top-40 right-10 w-[580px] h-[580px] rounded-full bg-gradient-to-br from-primary-fixed/40 via-tertiary-fixed-dim/20 to-transparent blur-3xl pointer-events-none -z-0" />
            <div className="absolute top-96 -left-32 w-[460px] h-[460px] rounded-full bg-gradient-to-tr from-secondary-fixed/40 to-transparent blur-3xl pointer-events-none -z-0" />

            <div className="max-w-[1440px] mx-auto px-5 md:px-margin relative z-10 pt-6">


              {/* Main Checkout Section */}
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
