"use client";

import { useState } from "react";
import Link from "next/link";
import RevealOnScroll from "../RevealOnScroll";

export default function LegalBar() {
  const [showEntityModal, setShowEntityModal] = useState(false);

  return (
    <>
      <section className="w-full bg-surface-container-low py-10">
        <div className="max-w-[1440px] mx-auto px-5 md:px-margin">
          <RevealOnScroll variant="up">
            <div className="bg-surface-container-lowest p-6 sm:p-8 rounded-[2rem] shadow-sm flex flex-col lg:flex-row items-center justify-between gap-6 border border-outline-variant/30">
              <div className="flex flex-col gap-2 max-w-2xl">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[22px]">
                    gavel
                  </span>
                  <span className="text-[13px] font-bold text-on-surface uppercase tracking-wider">
                    Legal Governance &amp; Policies
                  </span>
                </div>
                <p className="text-[13px] leading-relaxed text-on-surface-variant">
                  ASHIVOX LLC operates under US commercial guidelines, New Mexico state jurisdiction, and PCI-DSS Level 1 payment processing standards.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2.5 w-full lg:w-auto">
                <button
                  type="button"
                  onClick={() => setShowEntityModal(true)}
                  className="px-4 py-2 rounded-full bg-primary/10 hover:bg-primary/15 text-[13px] font-bold text-primary transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <span className="material-symbols-outlined text-[16px]">verified</span>
                  <span>Entity Info</span>
                </button>
                <Link
                  href="/terms"
                  className="px-4 py-2 rounded-full bg-surface-container-low hover:bg-surface-container text-[13px] font-semibold text-on-surface transition-colors"
                >
                  Terms
                </Link>
                <Link
                  href="/privacy"
                  className="px-4 py-2 rounded-full bg-surface-container-low hover:bg-surface-container text-[13px] font-semibold text-on-surface transition-colors"
                >
                  Privacy
                </Link>
                <Link
                  href="/refund-policy"
                  className="px-4 py-2 rounded-full bg-surface-container-low hover:bg-surface-container text-[13px] font-semibold text-on-surface transition-colors"
                >
                  Refunds
                </Link>
                <Link
                  href="/fulfillment-policy"
                  className="px-4 py-2 rounded-full bg-surface-container-low hover:bg-surface-container text-[13px] font-semibold text-on-surface transition-colors"
                >
                  Fulfillment
                </Link>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Official Entity Disclosure Modal */}
      {showEntityModal && (
        <div className="fixed inset-0 z-50 bg-[#1b0b38]/70 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-surface-container-lowest max-w-2xl w-full rounded-[2rem] p-6 sm:p-8 shadow-[0_32px_72px_-12px_rgba(17,12,36,0.35)] max-h-[90vh] overflow-y-auto relative animate-scale-in">
            <button
              onClick={() => setShowEntityModal(false)}
              className="absolute top-6 right-6 w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-on-surface hover:bg-surface-container-high transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-[20px]">close</span>
            </button>

            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-secondary-fixed flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-secondary text-[24px]">
                  verified
                </span>
              </div>
              <div>
                <h3 className="text-[20px] font-bold text-on-surface">
                  Official US Entity Disclosure
                </h3>
                <span className="text-[12px] font-bold text-primary tracking-wide">
                  State of New Mexico &bull; Active &amp; Good Standing
                </span>
              </div>
            </div>

            <div className="space-y-5 text-[14px] leading-relaxed text-on-surface-variant">
              <div className="bg-surface-container-low p-5 rounded-2xl space-y-2 border border-outline-variant/30">
                <h4 className="text-[15px] text-on-surface font-bold">
                  Corporate Registration Profile
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[13px] pt-1">
                  <div>
                    <span className="text-outline uppercase text-[10px] font-bold block">Legal Entity Name</span>
                    <strong className="text-on-surface">ASHIVOX LLC</strong>
                  </div>
                  <div>
                    <span className="text-outline uppercase text-[10px] font-bold block">Jurisdiction of Formation</span>
                    <span className="text-on-surface font-medium">State of New Mexico, USA</span>
                  </div>
                  <div>
                    <span className="text-outline uppercase text-[10px] font-bold block">Registered Office</span>
                    <span className="text-on-surface font-medium">1209 Mountain Road PL NE, Ste R, Albuquerque, NM 87110, USA</span>
                  </div>
                  <div>
                    <span className="text-outline uppercase text-[10px] font-bold block">Registered Agent</span>
                    <span className="text-on-surface font-medium">Registered Agents Inc.</span>
                  </div>
                  <div>
                    <span className="text-outline uppercase text-[10px] font-bold block">Business Registration #</span>
                    <span className="text-on-surface font-mono font-bold text-primary">0008132694 (NM SOS)</span>
                  </div>
                  <div>
                    <span className="text-outline uppercase text-[10px] font-bold block">Business Telephone</span>
                    <span className="text-on-surface font-medium">+1 (505) 528-9302</span>
                  </div>
                  <div>
                    <span className="text-outline uppercase text-[10px] font-bold block">Verified Support Email</span>
                    <span className="text-on-surface font-medium">support@ashivox.com</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-[14px] text-on-surface font-bold mb-1">
                  14-Day Evaluation &amp; Money-Back Guarantee
                </h4>
                <p className="text-[13px]">
                  Retainer and milestone bookings include a 14-day evaluation window from initial kickoff. If initial concept deliverables do not satisfy the agreed project brief, clients may request a cancellation and refund through our verified billing rails.
                </p>
              </div>

              <div>
                <h4 className="text-[14px] text-on-surface font-bold mb-1">
                  PCI-DSS Level 1 Settlement
                </h4>
                <p className="text-[13px]">
                  Payment credentials are never stored on agency servers. All card tokenization, 3-D Secure authentication, and recurring invoices are processed by regulated providers (Stripe and Wise) under PCI DSS Level 1 certificate standards.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-outline-variant/20 flex flex-wrap items-center justify-between gap-3">
              <div className="flex gap-3 text-[13px]">
                <Link href="/terms" onClick={() => setShowEntityModal(false)} className="text-primary font-semibold hover:underline">
                  Terms of Service ↗
                </Link>
                <Link href="/privacy" onClick={() => setShowEntityModal(false)} className="text-primary font-semibold hover:underline">
                  Privacy Policy ↗
                </Link>
              </div>
              <button
                onClick={() => setShowEntityModal(false)}
                className="px-6 py-2.5 rounded-full bg-primary text-on-primary text-[14px] font-semibold hover:bg-tertiary transition-colors cursor-pointer"
              >
                Close Disclosure
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
