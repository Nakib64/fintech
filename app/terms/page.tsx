import type { Metadata } from "next";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import RevealOnScroll from "../components/RevealOnScroll";

export const metadata: Metadata = {
  title: "Terms of Service | ASHIVOX LLC",
  description:
    "Terms of Service for ASHIVOX LLC. Commercial terms, intellectual property ownership, payment obligations, and governing law.",
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="w-full pt-20 bg-surface-container-lowest min-h-screen">
        {/* Hero Banner */}
        <section className="relative w-full bg-gradient-to-b from-[#180535] via-[#24084f] to-[#120329] text-white py-16 md:py-20">
          <div className="max-w-[1000px] mx-auto px-5 md:px-margin">
            <RevealOnScroll variant="up">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md mb-4 border border-white/10 text-[12px] font-bold uppercase tracking-wider text-primary-fixed-dim">
                <span className="material-symbols-outlined text-[16px]">gavel</span>
                <span>Standard Commercial Agreement</span>
              </div>
              <h1 className="text-[34px] sm:text-[44px] md:text-[50px] font-extrabold tracking-tight leading-tight">
                Terms of Service
              </h1>
              <p className="text-[15px] text-white/80 mt-3 max-w-2xl">
                Last updated: January 15, 2026. Please read these terms carefully before engaging our services or ordering production plans.
              </p>
            </RevealOnScroll>
          </div>
        </section>

        {/* Content Section */}
        <section className="w-full py-16 md:py-20 bg-surface-container-lowest">
          <div className="max-w-[1000px] mx-auto px-5 md:px-margin text-on-surface leading-relaxed space-y-10">
            <RevealOnScroll variant="up">
              <div className="p-6 rounded-2xl bg-surface-container-low border border-outline-variant/30 space-y-2">
                <h3 className="text-[17px] font-bold text-on-surface">Contracting Entity</h3>
                <p className="text-[14px] text-on-surface-variant">
                  These Terms of Service (&quot;Terms&quot;, &quot;Agreement&quot;) constitute a legally binding agreement between you (&quot;Client&quot;, &quot;you&quot;, &quot;your&quot;) and <strong>ASHIVOX LLC</strong> (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, &quot;our&quot;), a limited liability company organized and existing under the laws of the State of New Mexico, United States.
                </p>
                <p className="text-[13px] text-on-surface-variant">
                  <strong>Business Registration #:</strong> 0008132694 (State of New Mexico)<br />
                  <strong>Registered Office:</strong> 1209 Mountain Road PL NE, Ste R, Albuquerque, NM 87110, USA<br />
                  <strong>Registered Agent:</strong> Registered Agents Inc.<br />
                  <strong>Corporate Inquiries:</strong> <a href="mailto:support@ashivox.com" className="text-primary underline">support@ashivox.com</a> | +1 (505) 528-9302
                </p>
              </div>
            </RevealOnScroll>

            <div className="space-y-4">
              <h2 className="text-[22px] font-bold text-on-surface">1. Scope of Services</h2>
              <p className="text-[14px] text-on-surface-variant">
                ASHIVOX LLC provides professional creative media services, including but not limited to digital video editing, motion design, color grading, sound design, content writing, and social media production packages as described on our Services page. Each project is executed in accordance with the specifications, turnaround times, and revision quotas designated in the selected plan or written statement of work (SOW).
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-[22px] font-bold text-on-surface">2. Ordering, Pricing &amp; Payment Obligations</h2>
              <ul className="list-disc pl-6 space-y-2 text-[14px] text-on-surface-variant">
                <li><strong>Currency:</strong> All fees are stated and charged in United States Dollars (USD).</li>
                <li><strong>Payment in Advance:</strong> Services are billed prior to the commencement of creative production sprints or upon delivery of an approved invoice.</li>
                <li><strong>Accepted Payment Methods:</strong> Payments may be made via credit/debit card (Visa, Mastercard, American Express), bank wire / ACH transfer, Apple Pay, Google Pay, or corporate electronic invoicing via our approved payment partners (Stripe Inc. and Wise).</li>
                <li><strong>No Hidden Fees:</strong> There are no setup fees or unexpected surcharges. Any optional scope adjustments or expedited rush deliveries must be confirmed in writing by both parties before billing.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-[22px] font-bold text-on-surface">3. Subscriptions &amp; Monthly Retainers</h2>
              <p className="text-[14px] text-on-surface-variant">
                For monthly retainer plans (such as our ongoing Social Media Growth or Dedicated Video Retainer packages):
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[14px] text-on-surface-variant">
                <li><strong>Billing Cycle:</strong> Retainers recur every thirty (30) days from the initial purchase date at the agreed fixed rate.</li>
                <li><strong>Renewal:</strong> Subscriptions renew automatically unless cancelled prior to the end of the current billing cycle.</li>
                <li><strong>Cancellation Method:</strong> Clients may cancel their monthly retainer at any time by sending an email notification to <a href="mailto:support@ashivox.com" className="text-primary font-semibold underline">support@ashivox.com</a> or via their account portal. Cancellations require thirty (30) days notice. No cancellation penalties or fees apply.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-[22px] font-bold text-on-surface">4. Intellectual Property Rights &amp; Ownership</h2>
              <p className="text-[14px] text-on-surface-variant">
                <strong>100% Client Ownership:</strong> Upon full receipt of payment for the applicable project or invoice, ASHIVOX LLC transfers and assigns to the Client all worldwide rights, title, and intellectual property interest in the final completed deliverable files (including exported videos, project source files, scripts, and graphics).
              </p>
              <p className="text-[14px] text-on-surface-variant">
                <strong>Client Materials:</strong> The Client warrants that all raw media, logos, trademarks, and background audio supplied to ASHIVOX LLC for editing are owned by the Client or properly licensed. The Client indemnifies ASHIVOX LLC against any third-party copyright claims arising from Client-supplied assets.
              </p>
              <p className="text-[14px] text-on-surface-variant">
                <strong>Portfolio Display:</strong> Unless a signed Non-Disclosure Agreement (NDA) is executed prior to kickoff, ASHIVOX LLC reserves the right to display non-confidential deliverables in our creative portfolio and case studies.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-[22px] font-bold text-on-surface">5. Turnaround, Delivery &amp; Revisions</h2>
              <p className="text-[14px] text-on-surface-variant">
                Delivery timelines depend on the purchased package (typically 2 to 5 business days for single video projects). Review workflows and revision requests are governed by our dedicated <Link href="/fulfillment-policy" className="text-primary font-semibold underline">Fulfillment &amp; Delivery Policy</Link>. Each package includes a specified number of revision rounds (1 to 3 rounds) to refine pacing, captions, color, and audio balance.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-[22px] font-bold text-on-surface">6. Refunds &amp; Cancellations</h2>
              <p className="text-[14px] text-on-surface-variant">
                All cancellations, evaluation periods, and refund requests are governed by our <Link href="/refund-policy" className="text-primary font-semibold underline">Refund &amp; Cancellation Policy</Link>. We offer a 14-day evaluation period on new creative engagements. Approved refunds are credited back to the original payment method within 5 to 7 business days.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-[22px] font-bold text-on-surface">7. Limitation of Liability</h2>
              <p className="text-[14px] text-on-surface-variant">
                To the fullest extent permitted by law, ASHIVOX LLC shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, revenue, or data. The maximum aggregate liability of ASHIVOX LLC under any claim arising out of this Agreement shall not exceed the total fees paid by the Client to ASHIVOX LLC in the two (2) months preceding the incident.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-[22px] font-bold text-on-surface">8. Dispute Resolution &amp; Governing Law</h2>
              <p className="text-[14px] text-on-surface-variant">
                This Agreement and any dispute or controversy arising out of or in connection with it shall be governed by, and construed in accordance with, the laws of the <strong>State of New Mexico, United States</strong>, without giving effect to any principles of conflicts of law.
              </p>
              <p className="text-[14px] text-on-surface-variant">
                The parties agree that any legal suit, action, or proceeding arising out of or related to this Agreement shall be instituted exclusively in the state or federal courts located in Bernalillo County, New Mexico. The parties irrevocably submit to the exclusive jurisdiction of such courts.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-[22px] font-bold text-on-surface">9. Contact &amp; Legal Notices</h2>
              <p className="text-[14px] text-on-surface-variant">
                Formal legal notices should be addressed to:
              </p>
              <div className="p-5 rounded-xl bg-surface-container-low border border-outline-variant/30 text-[14px]">
                <p className="font-bold text-on-surface">ASHIVOX LLC</p>
                <p className="text-on-surface-variant mt-1">Business Registration #: 0008132694</p>
                <p className="text-on-surface-variant">Attn: Legal Department</p>
                <p className="text-on-surface-variant">1209 Mountain Road PL NE, Ste R, Albuquerque, NM 87110, USA</p>
                <p className="text-on-surface-variant">Email: <a href="mailto:support@ashivox.com" className="text-primary font-semibold underline">support@ashivox.com</a></p>
                <p className="text-on-surface-variant">Phone: +1 (505) 528-9302</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

