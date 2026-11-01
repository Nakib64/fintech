"use client";

import { useState } from "react";
import Link from "next/link";
import RevealOnScroll from "../RevealOnScroll";

type TabId = "tos" | "privacy" | "refund";

export default function LegalFrameworkTabs() {
  const [activeTab, setActiveTab] = useState<TabId>("tos");

  return (
    <div className="mb-20">
      <div className="mb-10 text-center max-w-3xl mx-auto">
        <RevealOnScroll variant="up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[12px] font-bold uppercase tracking-wider mb-2">
            <span>Legal Policies</span>
          </div>
        </RevealOnScroll>
        <RevealOnScroll variant="up" delay={80}>
          <h2 className="text-[32px] sm:text-[38px] font-bold text-on-surface tracking-tight">
            Simple, Clear Policies
          </h2>
        </RevealOnScroll>
        <RevealOnScroll variant="up" delay={160}>
          <p className="text-[15px] leading-[24px] text-on-surface-variant mt-2">
            Easy-to-read terms on how we work, protect your data, and handle refunds.
          </p>
        </RevealOnScroll>
      </div>

      {/* Pill Navigation Bar */}
      <RevealOnScroll variant="fade" delay={200}>
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1.5 rounded-full bg-surface-container-high/60 backdrop-blur-md border border-outline-variant/30">
            <button
              onClick={() => setActiveTab("tos")}
              className={`px-6 py-2.5 rounded-full text-[13px] font-semibold transition-all duration-200 cursor-pointer ${
                activeTab === "tos"
                  ? "bg-primary text-on-primary shadow-sm"
                  : "text-on-surface-variant hover:text-on-surface"
              }`}
            >
              Terms of Service
            </button>
            <button
              onClick={() => setActiveTab("privacy")}
              className={`px-6 py-2.5 rounded-full text-[13px] font-semibold transition-all duration-200 cursor-pointer ${
                activeTab === "privacy"
                  ? "bg-primary text-on-primary shadow-sm"
                  : "text-on-surface-variant hover:text-on-surface"
              }`}
            >
              Privacy Policy
            </button>
            <button
              onClick={() => setActiveTab("refund")}
              className={`px-6 py-2.5 rounded-full text-[13px] font-semibold transition-all duration-200 cursor-pointer ${
                activeTab === "refund"
                  ? "bg-primary text-on-primary shadow-sm"
                  : "text-on-surface-variant hover:text-on-surface"
              }`}
            >
              Refund &amp; Cancellation
            </button>
          </div>
        </div>
      </RevealOnScroll>

      {/* Tab Panels */}
      <div className="rounded-[2rem] bg-surface-container-lowest p-6 md:p-12 shadow-sm border border-outline-variant/30">
        {/* 1. Terms of Service */}
        {activeTab === "tos" && (
          <div className="space-y-8 animate-fade-in">
            <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 bg-surface-container-low/40 rounded-2xl p-6 border border-outline-variant/20">
              <div>
                <span className="text-[12px] uppercase font-bold text-primary tracking-wider">
                  Client Terms
                </span>
                <h3 className="text-[22px] sm:text-[26px] font-bold text-on-surface mt-0.5">
                  Terms of Service
                </h3>
                <p className="text-[13px] text-on-surface-variant mt-1">
                  Last Updated: 2024 • Clear &amp; Simple
                </p>
              </div>
              <div className="mt-4 md:mt-0 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-[20px]">
                  verified_user
                </span>
                <span className="text-[13px] font-bold text-on-surface">
                  New Mexico, USA Jurisdiction
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-primary font-bold text-[18px]">
                  <span className="material-symbols-outlined text-[20px]">
                    contract
                  </span>
                  <h4>1. Clear Scope of Work</h4>
                </div>
                <p className="text-[14px] text-on-surface-variant leading-relaxed">
                  Every project starts with a clear plan and agreed deliverables.
                  Any extra scope or changes are approved by you in advance.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2 text-primary font-bold text-[18px]">
                  <span className="material-symbols-outlined text-[20px]">
                    assignment_turned_in
                  </span>
                  <h4>2. Fast Turnaround</h4>
                </div>
                <p className="text-[14px] text-on-surface-variant leading-relaxed">
                  We guarantee on-time delivery for every sprint. Our team answers
                  questions and requests within 4 hours during business days.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2 text-primary font-bold text-[18px]">
                  <span className="material-symbols-outlined text-[20px]">
                    copyright
                  </span>
                  <h4>3. 100% IP Ownership</h4>
                </div>
                <p className="text-[14px] text-on-surface-variant leading-relaxed">
                  Once your invoice is paid, you own full rights to all video files,
                  source files, and raw footage. We never hold your assets hostage.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2 text-primary font-bold text-[18px]">
                  <span className="material-symbols-outlined text-[20px]">
                    gavel
                  </span>
                  <h4>4. Fair Resolution</h4>
                </div>
                <p className="text-[14px] text-on-surface-variant leading-relaxed">
                  Engagements are backed by New Mexico law, keeping contracts clear,
                  standardized, and easy to resolve.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-outline-variant/20 flex justify-end">
              <Link
                href="/terms"
                className="inline-flex items-center gap-1.5 text-primary text-[14px] font-bold hover:underline"
              >
                <span>Read Full Terms of Service</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </Link>
            </div>
          </div>
        )}

        {/* 2. Privacy Policy */}
        {activeTab === "privacy" && (
          <div className="space-y-8 animate-fade-in">
            <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 bg-surface-container-low/40 rounded-2xl p-6 border border-outline-variant/20">
              <div>
                <span className="text-[12px] uppercase font-bold text-primary tracking-wider">
                  Your Privacy
                </span>
                <h3 className="text-[22px] sm:text-[26px] font-bold text-on-surface mt-0.5">
                  Privacy &amp; Data Protection
                </h3>
                <p className="text-[13px] text-on-surface-variant mt-1">
                  GDPR • CCPA Compliant
                </p>
              </div>
              <div className="mt-4 md:mt-0 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-[20px]">
                  lock
                </span>
                <span className="text-[13px] font-bold text-on-surface">
                  Encrypted US Storage
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-primary font-bold text-[18px]">
                  <span className="material-symbols-outlined text-[20px]">key</span>
                  <h4>1. Strong Encryption</h4>
                </div>
                <p className="text-[14px] text-on-surface-variant leading-relaxed">
                  All video files, proxies, and data are protected with 256-bit
                  encryption and stored on secure cloud servers in the USA.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2 text-primary font-bold text-[18px]">
                  <span className="material-symbols-outlined text-[20px]">
                    security
                  </span>
                  <h4>2. Global Privacy Standards</h4>
                </div>
                <p className="text-[14px] text-on-surface-variant leading-relaxed">
                  We support EU and international privacy standards. We sign mutual
                  NDAs and data protection agreements on request.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2 text-primary font-bold text-[18px]">
                  <span className="material-symbols-outlined text-[20px]">
                    manage_accounts
                  </span>
                  <h4>3. We Never Sell Your Data</h4>
                </div>
                <p className="text-[14px] text-on-surface-variant leading-relaxed">
                  We never sell, rent, or share your contact information or media
                  assets with third parties or data brokers.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2 text-primary font-bold text-[18px]">
                  <span className="material-symbols-outlined text-[20px]">
                    delete_forever
                  </span>
                  <h4>4. Safe Storage &amp; Deletion</h4>
                </div>
                <p className="text-[14px] text-on-surface-variant leading-relaxed">
                  We store raw files safely for 90 days after delivery. You can
                  request copies or ask us to delete them anytime.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-outline-variant/20 flex justify-end">
              <Link
                href="/privacy"
                className="inline-flex items-center gap-1.5 text-primary text-[14px] font-bold hover:underline"
              >
                <span>Read Full Privacy Policy</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </Link>
            </div>
          </div>
        )}

        {/* 3. Refund & Cancellation Policy */}
        {activeTab === "refund" && (
          <div className="space-y-8 animate-fade-in">
            <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 bg-surface-container-low/40 rounded-2xl p-6 border border-outline-variant/20">
              <div>
                <span className="text-[12px] uppercase font-bold text-primary tracking-wider">
                  Refunds &amp; Cancellations
                </span>
                <h3 className="text-[22px] sm:text-[26px] font-bold text-on-surface mt-0.5">
                  Refund &amp; Cancellation Policy
                </h3>
                <p className="text-[13px] text-on-surface-variant mt-1">
                  Clear &amp; Simple Terms
                </p>
              </div>
              <div className="mt-4 md:mt-0 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-[20px]">
                  sync_alt
                </span>
                <span className="text-[13px] font-bold text-on-surface">
                  14-Day Guarantee
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-primary font-bold text-[18px]">
                  <span className="material-symbols-outlined text-[20px]">
                    schedule
                  </span>
                  <h4>1. 14-Day Guarantee</h4>
                </div>
                <p className="text-[14px] text-on-surface-variant leading-relaxed">
                  If you are not satisfied during the initial concept phase within
                  14 days, you can cancel for a refund of up to 80%.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2 text-primary font-bold text-[18px]">
                  <span className="material-symbols-outlined text-[20px]">
                    event_repeat
                  </span>
                  <h4>2. Retainer Cancellation</h4>
                </div>
                <p className="text-[14px] text-on-surface-variant leading-relaxed">
                  Monthly retainers can be cancelled anytime with a 30-day email
                  notice. No hidden cancellation penalties.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2 text-primary font-bold text-[18px]">
                  <span className="material-symbols-outlined text-[20px]">
                    task
                  </span>
                  <h4>3. Milestone Approval</h4>
                </div>
                <p className="text-[14px] text-on-surface-variant leading-relaxed">
                  Once you review and approve a video milestone or final cut, that
                  stage is accepted and complete.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2 text-primary font-bold text-[18px]">
                  <span className="material-symbols-outlined text-[20px]">
                    payments
                  </span>
                  <h4>4. Fast Refund Payouts</h4>
                </div>
                <p className="text-[14px] text-on-surface-variant leading-relaxed">
                  Approved refunds are sent directly back to your payment card or
                  bank within 5 to 7 business days.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-outline-variant/20 flex justify-end">
              <Link
                href="/refund-policy"
                className="inline-flex items-center gap-1.5 text-primary text-[14px] font-bold hover:underline"
              >
                <span>Read Full Refund &amp; Cancellation Policy</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
