import type { Metadata } from "next";
import { Suspense } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CheckoutSuccess from "../../components/checkout/CheckoutSuccess";

export const metadata: Metadata = {
  title: "Payment Confirmed | ASHIVOX LLC",
  description:
    "Official payment confirmation, package activation, and production onboarding for ASHIVOX LLC creative services.",
};

export default function CheckoutSuccessPage() {
  return (
    <>
      <Header />
      <main className="w-full pt-20 bg-surface-container-lowest min-h-screen">
        <Suspense
          fallback={
            <div className="p-20 text-center text-on-surface-variant">
              <span className="material-symbols-outlined animate-spin text-[36px] text-primary">
                progress_activity
              </span>
              <p className="mt-3 text-[15px] font-semibold">
                Confirming settlement and generating commercial receipt...
              </p>
            </div>
          }
        >
          <CheckoutSuccess />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}

