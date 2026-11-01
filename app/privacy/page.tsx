import type { Metadata } from "next";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import RevealOnScroll from "../components/RevealOnScroll";

export const metadata: Metadata = {
  title: "Privacy Policy | ASHIVOX LLC",
  description:
    "ASHIVOX LLC Privacy Policy. Learn how we collect, handle, protect, and process client data under US, GDPR, and CCPA standards.",
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="w-full pt-20 bg-surface-container-lowest min-h-screen">
        {/* Hero Banner */}
        <section className="relative w-full bg-gradient-to-b from-[#180535] via-[#24084f] to-[#120329] text-white py-16 md:py-20">
          <div className="max-w-[1000px] mx-auto px-5 md:px-margin">
            <RevealOnScroll variant="up">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md mb-4 border border-white/10 text-[12px] font-bold uppercase tracking-wider text-primary-fixed-dim">
                <span className="material-symbols-outlined text-[16px]">lock</span>
                <span>Legal &amp; Data Protection</span>
              </div>
              <h1 className="text-[34px] sm:text-[44px] md:text-[50px] font-extrabold tracking-tight leading-tight">
                Privacy Policy
              </h1>
              <p className="text-[15px] text-white/80 mt-3 max-w-2xl">
                Last updated: January 15, 2026. This policy describes how ASHIVOX LLC collects, uses, and safeguards your personal and commercial data.
              </p>
            </RevealOnScroll>
          </div>
        </section>

        {/* Policy Content */}
        <section className="w-full py-16 md:py-20 bg-surface-container-lowest">
          <div className="max-w-[1000px] mx-auto px-5 md:px-margin text-on-surface leading-relaxed space-y-10">
            <RevealOnScroll variant="up">
              <div className="p-6 rounded-2xl bg-surface-container-low border border-outline-variant/30 space-y-2">
                <h3 className="text-[17px] font-bold text-on-surface">Entity Identification</h3>
                <p className="text-[14px] text-on-surface-variant">
                  This Privacy Policy governs the operations of <strong>ASHIVOX LLC</strong> (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), a limited liability company organized under the laws of the State of New Mexico, USA.
                </p>
                <p className="text-[13px] text-on-surface-variant">
                  <strong>Business Registration #:</strong> 0008132694 (State of New Mexico)<br />
                  <strong>Registered Office:</strong> 1209 Mountain Road PL NE, Ste R, Albuquerque, NM 87110, USA<br />
                  <strong>Contact Email:</strong> <a href="mailto:support@ashivox.com" className="text-primary underline">support@ashivox.com</a><br />
                  <strong>Telephone:</strong> +1 (505) 528-9302
                </p>
              </div>
            </RevealOnScroll>

            <div className="space-y-4">
              <h2 className="text-[22px] font-bold text-on-surface">1. Information We Collect</h2>
              <p className="text-[14px] text-on-surface-variant">
                We only collect information necessary to fulfill our creative media, video production, content strategy, and billing services. This includes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[14px] text-on-surface-variant">
                <li><strong>Contact Information:</strong> Full name, professional email address, company or business name, billing address, and phone number when submitting a discovery form or completing checkout.</li>
                <li><strong>Project Briefs &amp; Media Assets:</strong> Brand assets, raw video footage, logos, scripts, brand guidelines, and creative briefs uploaded for editing and production.</li>
                <li><strong>Billing &amp; Transaction Data:</strong> Transaction amount, purchased package, currency (USD), payment timestamps, and invoice records. <em>Note: ASHIVOX LLC never captures, stores, or processes raw credit card numbers or banking passwords on our servers. All financial transactions are tokenized and processed directly by our regulated payment partners (Stripe Inc. and Wise).</em></li>
                <li><strong>Technical &amp; Log Data:</strong> IP address, browser type, device information, and interaction records collected via standard server logs to maintain website security and integrity.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-[22px] font-bold text-on-surface">2. How We Use Your Information</h2>
              <p className="text-[14px] text-on-surface-variant">
                We use collected information exclusively for the following commercial purposes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[14px] text-on-surface-variant">
                <li>Delivering agreed creative video editing, animation, and content writing services.</li>
                <li>Generating and issuing accurate corporate invoices, payment receipts, and tax documentation (e.g. IRS W-9 upon request).</li>
                <li>Communicating production milestones, video draft reviews, and sprint status updates.</li>
                <li>Complying with applicable legal, banking, anti-money laundering (AML), and financial reporting obligations.</li>
                <li>Preventing unauthorized access, fraud, or violations of our Terms of Service.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-[22px] font-bold text-on-surface">3. Data Sharing &amp; Third-Party Processors</h2>
              <p className="text-[14px] text-on-surface-variant">
                <strong>We never sell, rent, or trade your personal information or media assets.</strong> We only share information with vetted service providers that enable our business operations:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[14px] text-on-surface-variant">
                <li><strong>Payment Processors &amp; Banking Partners:</strong> Stripe Inc. and Wise (Wise Payments Ltd) for processing secure card transactions, ACH debits, and corporate bank transfers under PCI-DSS Level 1 compliance.</li>
                <li><strong>Cloud Infrastructure &amp; Asset Storage:</strong> Secure enterprise cloud servers located in the United States with AES-256 bit encryption at rest and in transit.</li>
                <li><strong>Legal &amp; Compliance Authorities:</strong> Only when strictly required by enforceable subpoena, court order, or applicable federal or state laws.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-[22px] font-bold text-on-surface">4. Data Retention &amp; Asset Security</h2>
              <p className="text-[14px] text-on-surface-variant">
                All client media assets and project source files are archived on encrypted US cloud storage for 90 days following final deliverable acceptance. You may request permanent deletion of your project media files at any time by contacting our support team. Financial and transaction records are retained for the statutory period required by United States federal and New Mexico tax laws.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-[22px] font-bold text-on-surface">5. Your Legal Rights (GDPR &amp; CCPA / CPRA)</h2>
              <p className="text-[14px] text-on-surface-variant">
                Depending on your geographic location, you hold statutory rights regarding your personal information, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[14px] text-on-surface-variant">
                <li><strong>Right of Access:</strong> Request a copy of the personal data we hold about you.</li>
                <li><strong>Right of Rectification:</strong> Request correction of inaccurate or incomplete records.</li>
                <li><strong>Right of Erasure (&quot;Right to be Forgotten&quot;):</strong> Request deletion of your personal records, subject to legal compliance retentions.</li>
                <li><strong>Right to Restrict or Object to Processing:</strong> Object to specific data uses.</li>
              </ul>
              <p className="text-[14px] text-on-surface-variant">
                To exercise any of these rights, email us at <a href="mailto:support@ashivox.com" className="text-primary font-semibold underline">support@ashivox.com</a>. We respond to all verified requests within 30 days.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-[22px] font-bold text-on-surface">6. Cookies &amp; Tracking Technologies</h2>
              <p className="text-[14px] text-on-surface-variant">
                Our website uses only essential session cookies necessary for website navigation, security, and checkout state preservation. We do not use third-party invasive tracking or behavioral advertising pixels.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-[22px] font-bold text-on-surface">7. Contact Information</h2>
              <p className="text-[14px] text-on-surface-variant">
                For questions regarding this Privacy Policy or our data protection practices, please contact:
              </p>
              <div className="p-5 rounded-xl bg-surface-container-low border border-outline-variant/30 text-[14px]">
                <p className="font-bold text-on-surface">ASHIVOX LLC — Data Privacy Officer</p>
                <p className="text-on-surface-variant mt-1">Business Registration #: 0008132694</p>
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

