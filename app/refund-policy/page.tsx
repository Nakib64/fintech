import type { Metadata } from "next";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import RevealOnScroll from "../components/RevealOnScroll";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy | ASHIVOX LLC",
  description:
    "ASHIVOX LLC Refund and Cancellation Policy. Transparent 14-day evaluation, eligibility guidelines, refund request steps, and processing timelines.",
};

export default function RefundPolicyPage() {
  return (
    <>
      <Header />
      <main className="w-full pt-20 bg-surface-container-lowest min-h-screen">
        {/* Hero Banner */}
        <section className="relative w-full bg-gradient-to-b from-[#180535] via-[#24084f] to-[#120329] text-white py-16 md:py-20">
          <div className="max-w-[1000px] mx-auto px-5 md:px-margin">
            <RevealOnScroll variant="up">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md mb-4 border border-white/10 text-[12px] font-bold uppercase tracking-wider text-primary-fixed-dim">
                <span className="material-symbols-outlined text-[16px]">sync_alt</span>
                <span>Client Protection &amp; Guarantees</span>
              </div>
              <h1 className="text-[34px] sm:text-[44px] md:text-[50px] font-extrabold tracking-tight leading-tight">
                Refund &amp; Cancellation Policy
              </h1>
              <p className="text-[15px] text-white/80 mt-3 max-w-2xl">
                Last updated: January 15, 2026. We are committed to transparency. This policy outlines exactly when and how refunds and cancellations are processed for ASHIVOX LLC creative services.
              </p>
            </RevealOnScroll>
          </div>
        </section>

        {/* Policy Content */}
        <section className="w-full py-16 md:py-20 bg-surface-container-lowest">
          <div className="max-w-[1000px] mx-auto px-5 md:px-margin text-on-surface leading-relaxed space-y-10">
            <RevealOnScroll variant="up">
              <div className="p-6 rounded-2xl bg-surface-container-low border border-outline-variant/30 space-y-2">
                <h3 className="text-[17px] font-bold text-on-surface">Overview</h3>
                <p className="text-[14px] text-on-surface-variant">
                  At <strong>ASHIVOX LLC</strong>, client satisfaction and trust are foundational to our operations. Because our services involve customized creative labor, bespoke video editing, and intellectual property transfers, our refund and cancellation policies are clearly defined below so you know your rights before beginning work.
                </p>
              </div>
            </RevealOnScroll>

            <div className="space-y-4">
              <h2 className="text-[22px] font-bold text-on-surface">1. The 14-Day Evaluation Window</h2>
              <p className="text-[14px] text-on-surface-variant">
                For all first-time project bookings or initial monthly retainer kickoffs:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[14px] text-on-surface-variant">
                <li>If during the first fourteen (14) days from the order date or initial concept delivery you are unsatisfied with the creative direction and wish to discontinue, you may request a cancellation and refund.</li>
                <li>Refunds issued during this concept phase may be eligible for up to an 80% to 100% refund of fees paid, minus any non-recoverable direct hard costs already incurred on your behalf (such as custom purchased commercial music licenses, specialized stock video purchases, or third-party voiceover fees).</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-[22px] font-bold text-on-surface">2. Milestone Approvals &amp; Exclusions</h2>
              <p className="text-[14px] text-on-surface-variant">
                Refunds are not available in the following circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[14px] text-on-surface-variant">
                <li><strong>Approved Milestones:</strong> Once a Client provides written or portal approval for a milestone cut, storyboard, script, or final master delivery, that milestone is considered accepted and non-refundable.</li>
                <li><strong>Completed Projects:</strong> Once all agreed revision rounds are completed and high-resolution master video files are exported and delivered, the project is deemed complete.</li>
                <li><strong>Change of Mind Outside 14 Days:</strong> Refund requests submitted after 14 days from initial order placement cannot be refunded.</li>
                <li><strong>Client Delay:</strong> Delays caused solely by the Client’s failure to provide necessary raw assets, scripts, or feedback do not extend the evaluation deadline or entitle the Client to a refund.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-[22px] font-bold text-on-surface">3. Monthly Retainer &amp; Subscription Cancellations</h2>
              <p className="text-[14px] text-on-surface-variant">
                For monthly retainer contracts (e.g. Social Media Management or Ongoing Video Sprints):
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[14px] text-on-surface-variant">
                <li>You may cancel recurring retainers at any time.</li>
                <li>To avoid being charged for an upcoming billing cycle, submit written notice of cancellation via email to <a href="mailto:support@ashivox.com" className="text-primary font-semibold underline">support@ashivox.com</a> at least <strong>thirty (30) days</strong> prior to the renewal date.</li>
                <li>Upon cancellation, our production team will continue fulfilling all deliverable quotas through the end of the paid billing period. There are zero penalty fees or early exit fees.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-[22px] font-bold text-on-surface">4. Step-by-Step Refund Request Process</h2>
              <p className="text-[14px] text-on-surface-variant">
                To request an eligible refund, follow these simple steps:
              </p>
              <ol className="list-decimal pl-6 space-y-3 text-[14px] text-on-surface-variant">
                <li>
                  <strong>Submit a Written Notice:</strong> Send an email to <a href="mailto:support@ashivox.com" className="text-primary font-semibold underline">support@ashivox.com</a> with the subject line: <code>Refund Request - [Order / Invoice Number]</code>.
                </li>
                <li>
                  <strong>Provide Order Details:</strong> Include your full name, business email, transaction date, and a brief description of the issue or why the creative deliverables did not meet expectations.
                </li>
                <li>
                  <strong>Review &amp; Determination:</strong> Our Executive Producer and Billing Team will review the project log and communicate a formal determination within two (2) business days.
                </li>
              </ol>
            </div>

            <div className="space-y-4">
              <h2 className="text-[22px] font-bold text-on-surface">5. Refund Method &amp; Processing Timelines</h2>
              <p className="text-[14px] text-on-surface-variant">
                Once approved:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[14px] text-on-surface-variant">
                <li><strong>Refund Destination:</strong> Refunds are credited strictly back to the original method of payment (the credit/debit card, ACH account, or wire transfer originally charged) via our payment processors (Stripe or Wise). Under no circumstances are refunds paid out to alternate third parties.</li>
                <li><strong>Processing Time:</strong> ASHIVOX LLC initiates the refund within one (1) business day of approval. Depending on your financial institution or card issuing bank, the credit typically appears on your statement within <strong>5 to 7 business days</strong> (and up to 10 business days for international wire transfers).</li>
                <li><strong>Confirmation:</strong> An automated electronic refund receipt with the processor ARN / transaction ID is emailed to you as soon as the credit is submitted.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-[22px] font-bold text-on-surface">6. Billing Questions &amp; Support</h2>
              <p className="text-[14px] text-on-surface-variant">
                If you have questions regarding any transaction or invoice from ASHIVOX LLC, contact us directly before initiating a chargeback or payment dispute with your bank so we can resolve the matter quickly and amicably:
              </p>
              <div className="p-5 rounded-xl bg-surface-container-low border border-outline-variant/30 text-[14px]">
                <p className="font-bold text-on-surface">ASHIVOX LLC — Billing Support</p>
                <p className="text-on-surface-variant mt-1">Business Registration #: 0008132694</p>
                <p className="text-on-surface-variant">1209 Mountain Road PL NE, Ste R, Albuquerque, NM 87110, USA</p>
                <p className="text-on-surface-variant">Email: <a href="mailto:support@ashivox.com" className="text-primary font-semibold underline">support@ashivox.com</a></p>
                <p className="text-on-surface-variant">Phone: +1 (505) 528-9302</p>
                <p className="text-on-surface-variant">Business Hours: Monday – Friday, 9:00 AM – 6:00 PM (Mountain Time)</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

