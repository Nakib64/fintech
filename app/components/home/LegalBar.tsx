"use client";

import { useState } from "react";
import RevealOnScroll from "../RevealOnScroll";

export default function LegalBar() {
  const [activeModal, setActiveModal] = useState<string | null>(null);

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
                    Legal &amp; Compliance
                  </span>
                </div>
                <p className="text-[13px] leading-relaxed text-on-surface-variant">
                  All billing follows Stripe merchant terms, US commerce guidelines, and major card brand standards.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
                <button
                  onClick={() => setActiveModal("terms")}
                  className="px-5 py-2 rounded-full bg-surface-container-low hover:bg-surface-container text-[13px] font-semibold text-on-surface transition-colors cursor-pointer"
                >
                  Terms
                </button>
                <button
                  onClick={() => setActiveModal("refund")}
                  className="px-5 py-2 rounded-full bg-surface-container-low hover:bg-surface-container text-[13px] font-semibold text-on-surface transition-colors cursor-pointer"
                >
                  Refunds
                </button>
                <button
                  onClick={() => setActiveModal("privacy")}
                  className="px-5 py-2 rounded-full bg-surface-container-low hover:bg-surface-container text-[13px] font-semibold text-on-surface transition-colors cursor-pointer"
                >
                  Privacy
                </button>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Compliance / Disclosure Modal */}
      {activeModal && (
        <div className="fixed inset-0 z-50 bg-[#1b0b38]/70 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-surface-container-lowest max-w-2xl w-full rounded-[2rem] p-6 sm:p-8 shadow-[0_32px_72px_-12px_rgba(17,12,36,0.35)] max-h-[90vh] overflow-y-auto relative animate-scale-in">
            <button
              onClick={() => setActiveModal(null)}
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
                  State of Delaware • File No. 7491028
                </span>
              </div>
            </div>

            <div className="space-y-5 text-[14px] leading-relaxed text-on-surface-variant">
              <div className="bg-surface-container-low p-4 rounded-xl space-y-1">
                <h4 className="text-[14px] text-on-surface font-bold mb-2">
                  Company Details
                </h4>
                <p>
                  <strong>Legal Entity Name:</strong> ASHIVOX LLC
                </p>
                <p>
                  <strong>Formation State:</strong> Delaware, United States
                </p>
                <p>
                  <strong>Registered Address:</strong> 1209 Orange Street,
                  Wilmington, DE 19801
                </p>
                <p>
                  <strong>IRS Federal Employer ID (EIN):</strong> 88-3928174
                </p>
              </div>

              <div>
                <h4 className="text-[14px] text-on-surface font-bold mb-1">
                  14-Day Refund &amp; Cancellation Policy
                </h4>
                <p>
                  ASHIVOX LLC guarantees satisfaction. Retainer
                  contracts include a 14-day evaluation window from initial
                  milestone kickoff. If initial creative deliverables do not
                  satisfy the agreed statement of work (SOW), clients may request
                  a prorated or full refund processed through Stripe merchant
                  ledger.
                </p>
              </div>

              <div>
                <h4 className="text-[14px] text-on-surface font-bold mb-1">
                  Payment Processing Standards
                </h4>
                <p>
                  Payment credentials are never stored on agency servers. All
                  tokenization, 3-D Secure authentication, and recurring invoices
                  are processed by Stripe Inc. under PCI DSS Level 1 certificate
                  standards.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-4 flex justify-end">
              <button
                onClick={() => setActiveModal(null)}
                className="px-6 py-2.5 rounded-full bg-primary text-on-primary text-[14px] font-semibold hover:bg-tertiary transition-colors cursor-pointer"
              >
                I Understand &amp; Acknowledge
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
