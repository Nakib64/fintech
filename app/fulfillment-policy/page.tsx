import type { Metadata } from "next";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import RevealOnScroll from "../components/RevealOnScroll";

export const metadata: Metadata = {
  title: "Delivery & Fulfillment Policy | ASHIVOX LLC",
  description:
    "ASHIVOX LLC Delivery and Fulfillment Policy. Learn how we onboard clients, execute creative sprints, deliver master files, and handle revisions.",
};

export default function FulfillmentPolicyPage() {
  return (
    <>
      <Header />
      <main className="w-full pt-20 bg-surface-container-lowest min-h-screen">
        {/* Hero Banner */}
        <section className="relative w-full bg-gradient-to-b from-[#180535] via-[#24084f] to-[#120329] text-white py-16 md:py-20">
          <div className="max-w-[1000px] mx-auto px-5 md:px-margin">
            <RevealOnScroll variant="up">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md mb-4 border border-white/10 text-[12px] font-bold uppercase tracking-wider text-primary-fixed-dim">
                <span className="material-symbols-outlined text-[16px]">local_shipping</span>
                <span>Fulfillment &amp; Service Delivery</span>
              </div>
              <h1 className="text-[34px] sm:text-[44px] md:text-[50px] font-extrabold tracking-tight leading-tight">
                Delivery &amp; Fulfillment Policy
              </h1>
              <p className="text-[15px] text-white/80 mt-3 max-w-2xl">
                Last updated: January 15, 2026. This policy outlines how digital media deliverables, video editing sprints, and creative assets are executed, reviewed, and fulfilled.
              </p>
            </RevealOnScroll>
          </div>
        </section>

        {/* Content */}
        <section className="w-full py-16 md:py-20 bg-surface-container-lowest">
          <div className="max-w-[1000px] mx-auto px-5 md:px-margin text-on-surface leading-relaxed space-y-10">
            <RevealOnScroll variant="up">
              <div className="p-6 rounded-2xl bg-surface-container-low border border-outline-variant/30 space-y-2">
                <h3 className="text-[17px] font-bold text-on-surface">Digital Delivery Model</h3>
                <p className="text-[14px] text-on-surface-variant">
                  <strong>ASHIVOX LLC</strong> delivers 100% digital creative media services (including video editing, motion graphics, color grading, sound design, content writing, and social media production). Because there are no physical goods shipped, fulfillment is carried out electronically through secure cloud storage and collaborative review platforms.
                </p>
              </div>
            </RevealOnScroll>

            <div className="space-y-4">
              <h2 className="text-[22px] font-bold text-on-surface">1. Onboarding &amp; Project Kickoff</h2>
              <ul className="list-disc pl-6 space-y-2 text-[14px] text-on-surface-variant">
                <li><strong>Immediate Confirmation:</strong> Upon successful order placement or invoice payment, you will receive an automated payment confirmation and order receipt within minutes.</li>
                <li><strong>Creative Intake (Within 24 Hours):</strong> Within 24 business hours of payment, an ASHIVOX LLC Producer reaches out via your registered work email with a dedicated project workspace (Google Drive / Frame.io / Notion intake board) to gather your raw footage, brand guidelines, and creative specifications.</li>
                <li><strong>Production Kickoff:</strong> Production begins as soon as all necessary raw client assets and briefs are submitted.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-[22px] font-bold text-on-surface">2. Standard Turnaround Timelines</h2>
              <p className="text-[14px] text-on-surface-variant">
                Expected turnaround times depend on the selected package tier as outlined below:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                <div className="p-4 rounded-xl bg-surface-container-low border border-outline-variant/20">
                  <h4 className="font-bold text-[15px] text-on-surface">Single Video Projects</h4>
                  <ul className="text-[13px] text-on-surface-variant mt-2 space-y-1">
                    <li>• <strong>Starter Tier:</strong> 2 to 3 business days for first cut.</li>
                    <li>• <strong>Professional Tier:</strong> 3 to 5 business days for first cut.</li>
                    <li>• <strong>Advanced Tier:</strong> 4 to 6 business days for first cut.</li>
                    <li>• <strong>Studio Tier:</strong> 5 to 7 business days for initial master.</li>
                  </ul>
                </div>
                <div className="p-4 rounded-xl bg-surface-container-low border border-outline-variant/20">
                  <h4 className="font-bold text-[15px] text-on-surface">Retainers &amp; Content Sprints</h4>
                  <ul className="text-[13px] text-on-surface-variant mt-2 space-y-1">
                    <li>• <strong>Content Writing:</strong> 2 to 4 business days per batch.</li>
                    <li>• <strong>Social Media Retainers:</strong> Continuous weekly sprints delivered on a predetermined editorial calendar.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-[22px] font-bold text-on-surface">3. Review &amp; Revision Workflow</h2>
              <p className="text-[14px] text-on-surface-variant">
                Every video project includes a collaborative review cycle:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[14px] text-on-surface-variant">
                <li><strong>Draft Review:</strong> Draft cuts are shared via interactive timestamped review links (Frame.io or high-bitrate preview links) allowing you to leave precise feedback.</li>
                <li><strong>Included Revisions:</strong> Each package designates the number of revision rounds (between 1 and 3 rounds). Revisions cover adjustments to pacing, audio balancing, cuts, graphics, and subtitles.</li>
                <li><strong>Revision Turnaround:</strong> Minor revisions are completed within 24 to 48 business hours of receiving feedback.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-[22px] font-bold text-on-surface">4. Final Master Delivery &amp; File Formats</h2>
              <p className="text-[14px] text-on-surface-variant">
                Upon final client approval:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[14px] text-on-surface-variant">
                <li><strong>Export Standards:</strong> Master videos are rendered in crisp 1080p Full HD or 4K UHD ProRes / H.264 formats optimized for YouTube, Instagram Reels, TikTok, or broadcast.</li>
                <li><strong>Asset Download:</strong> Master videos, exported thumbnails, project source files, and commercial music licenses are delivered via an encrypted private cloud download folder.</li>
                <li><strong>Archival Guarantee:</strong> Final master assets and project files remain securely backed up on our servers for at least 90 days following project completion.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-[22px] font-bold text-on-surface">5. Expedited Requests &amp; Support</h2>
              <p className="text-[14px] text-on-surface-variant">
                If you have an urgent campaign launch or require priority 24-hour turnaround, please contact your assigned producer or our support desk:
              </p>
              <div className="p-5 rounded-xl bg-surface-container-low border border-outline-variant/30 text-[14px]">
                <p className="font-bold text-on-surface">ASHIVOX LLC — Production Fulfillment</p>
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

