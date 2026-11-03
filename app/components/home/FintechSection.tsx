"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import RevealOnScroll from "../RevealOnScroll";
import { ALL_PLANS, Plan } from "../../lib/plans";
import {
  StripeLogo,
  VisaLogo,
  MastercardLogo,
  AmexLogo,
  ApplePayLogo,
  GooglePayLogo,
  WiseLogo,
  PaymentBadge,
} from "../PaymentLogos";

export default function FintechSection() {
  const [selectedPlan, setSelectedPlan] = useState<Plan>(ALL_PLANS[0]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<"card" | "wire">("card");

  // Close dropdown on outside click or ESC
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <section className="w-full bg-[#1b0b38] text-on-primary py-space-xl relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-[1440px] mx-auto px-5 md:px-margin relative flex flex-col gap-12">
        {/* Section Top */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-2">
            <RevealOnScroll variant="up">
              <span className="font-bold text-[12px] tracking-wider uppercase text-primary-fixed block">
                Secure Settlement
              </span>
            </RevealOnScroll>
            <RevealOnScroll variant="up" delay={80}>
              <h2 className="text-[32px] sm:text-[40px] leading-[1.2] font-bold text-on-primary tracking-tight">
                Enterprise Payment &amp; Invoicing Rails
              </h2>
            </RevealOnScroll>
            <RevealOnScroll variant="up" delay={160}>
              <p className="text-[15px] leading-[24px] text-secondary-fixed max-w-xl">
                Pay with credit cards, ACH bank transfer, Apple Pay, or Google
                Pay. All payments are encrypted, tokenized, and secured by Stripe and Wise.
              </p>
            </RevealOnScroll>
          </div>
        </div>

        {/* Payment Gateways & Compliant Checkout Rails */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Gateway Status Cards */}
          <div className="lg:col-span-6 flex flex-col gap-5">
            <RevealOnScroll variant="left" delay={100}>
              <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-surface-container-lowest/10 backdrop-blur-md border border-white/10 flex flex-col gap-3 transition-transform hover:-translate-y-0.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-9 sm:h-10 px-2.5 sm:px-3 rounded-lg sm:rounded-xl bg-white flex items-center justify-center shadow-sm shrink-0">
                      <StripeLogo className="h-4 sm:h-5 w-auto" />
                    </div>
                    <div>
                      <h4 className="text-[15px] sm:text-[17px] font-bold text-on-primary">
                        Stripe 256-Bit Hosted Rails
                      </h4>
                      <span className="text-[11px] sm:text-[12px] font-medium text-primary-fixed">
                        Instant 3D Secure Verification
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-[12px] sm:text-[13px] leading-[19px] sm:leading-[20px] text-secondary-fixed mt-1">
                  Card details are processed with end-to-end tokenization directly on Stripe PCI-DSS Level 1 infrastructure. Accepts Visa, Mastercard, AMEX, Apple Pay, and Google Pay.
                </p>
                {/* Visual Card Badges */}
                <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 pt-2 border-t border-white/10">
                  <PaymentBadge title="Visa">
                    <VisaLogo className="h-3 w-auto" />
                  </PaymentBadge>
                  <PaymentBadge title="Mastercard">
                    <MastercardLogo className="h-4 w-auto" />
                  </PaymentBadge>
                  <PaymentBadge title="American Express">
                    <AmexLogo className="h-3.5 w-auto" />
                  </PaymentBadge>
                  <PaymentBadge title="Apple Pay">
                    <ApplePayLogo className="h-3 w-auto text-black" />
                  </PaymentBadge>
                  <PaymentBadge title="Google Pay">
                    <GooglePayLogo className="h-3.5 w-auto" />
                  </PaymentBadge>
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll variant="left" delay={180}>
              <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-surface-container-lowest/5 backdrop-blur-sm border border-white/5 flex flex-col gap-3 transition-transform hover:-translate-y-0.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-9 sm:h-10 px-2.5 sm:px-3 rounded-lg sm:rounded-xl bg-white flex items-center justify-center shadow-sm shrink-0">
                      <div className="flex items-center gap-1 text-[#163300]">
                        <WiseLogo className="h-3.5 sm:h-4 w-auto text-[#2ed06e]" />
                        <span className="font-extrabold text-[11px] sm:text-[12px] tracking-tight text-[#163300]">WISE</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-[15px] sm:text-[17px] font-bold text-on-primary">
                        Corporate ACH &amp; Wire Invoicing
                      </h4>
                      <span className="text-[11px] sm:text-[12px] font-medium text-secondary-fixed">
                        Direct US Banking Settlement
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-[12px] sm:text-[13px] leading-[19px] sm:leading-[20px] text-secondary-fixed opacity-80 mt-1">
                  Compliant US ACH bank transfers and international SWIFT wire options for enterprise accounting teams and monthly creative retainers.
                </p>
                <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 pt-2 border-t border-white/5">
                  <PaymentBadge title="Wise Commercial Rails">
                    <div className="flex items-center gap-1 text-[#163300]">
                      <WiseLogo className="h-3.5 w-auto text-[#2ed06e]" />
                      <span className="font-extrabold text-[10px] tracking-tight text-[#163300]">WISE</span>
                    </div>
                  </PaymentBadge>
                  <PaymentBadge title="US ACH Direct Debit">
                    <span className="text-[10px] font-bold text-slate-800 tracking-tight">ACH Transfer</span>
                  </PaymentBadge>
                  <PaymentBadge title="SWIFT International Wire">
                    <span className="text-[10px] font-bold text-slate-800 tracking-tight">SWIFT Wire</span>
                  </PaymentBadge>
                </div>
              </div>
            </RevealOnScroll>

            {/* Guarantee Badges */}
            <RevealOnScroll variant="up" delay={260}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-1">
                <div className="flex items-center gap-2.5 sm:gap-3 bg-white/5 p-3 sm:p-3.5 rounded-lg sm:rounded-xl border border-white/10">
                  <span className="material-symbols-outlined text-primary-fixed text-[20px] sm:text-[22px]">
                    verified_user
                  </span>
                  <span className="text-[12px] sm:text-[13px] text-on-primary font-medium">
                    PCI-DSS Level 1 Certified
                  </span>
                </div>
                <div className="flex items-center gap-2.5 sm:gap-3 bg-white/5 p-3 sm:p-3.5 rounded-lg sm:rounded-xl border border-white/10">
                  <span className="material-symbols-outlined text-primary-fixed text-[20px] sm:text-[22px]">
                    published_with_changes
                  </span>
                  <span className="text-[12px] sm:text-[13px] text-on-primary font-medium">
                    14-Day Evaluation Window
                  </span>
                </div>
              </div>
            </RevealOnScroll>
          </div>

          {/* Transparent Checkout Selector & Summary (Linking to compliant /checkout) */}
          <div className="lg:col-span-6">
            <RevealOnScroll variant="right" delay={150}>
              <div className="bg-surface-container-lowest text-on-surface p-4 sm:p-6 lg:p-8 rounded-md sm:rounded-2xl shadow-[0_24px_60px_-8px_rgba(105,41,196,0.3)] relative">
        

                {/* Plan Dropdown */}
                <div className="space-y-4">
                  <div className="relative" ref={dropdownRef}>
                    <div className="flex items-center justify-between mb-1">
                      <label className="block text-[11px] uppercase text-on-surface-variant font-extrabold tracking-wider">
                        Select Package
                      </label>
                      <span className="text-[11px] text-primary font-semibold">
                        Instant Selection
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      className="w-full h-12 sm:h-14 px-3 sm:px-4 rounded-md sm:rounded-xl bg-surface-container-low border border-outline-variant/30 hover:border-primary/50 text-[13px] sm:text-[14px] text-on-surface flex items-center justify-between transition-all cursor-pointer text-left"
                    >
                      <div className="flex items-center gap-2 min-w-0">
                        <span className="material-symbols-outlined text-primary text-[18px] sm:text-[20px] shrink-0">
                          {selectedPlan.icon || "star"}
                        </span>
                        <div className="truncate">
                          <span className="font-bold text-on-surface block truncate">
                            {selectedPlan.name}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5 sm:gap-2 shrink-0 ml-2">
                        <span className="font-black text-primary text-[14px] sm:text-[16px]">
                          {selectedPlan.price}
                        </span>
                        <span className="text-[10px] sm:text-[11px] text-outline font-medium">
                          {selectedPlan.cycle} USD
                        </span>
                        <span
                          className={`material-symbols-outlined text-[16px] sm:text-[18px] text-outline transition-transform duration-200 ${
                            dropdownOpen ? "rotate-180" : ""
                          }`}
                        >
                          expand_more
                        </span>
                      </div>
                    </button>

                    {/* Dropdown Menu */}
                    {dropdownOpen && (
                      <div className="absolute top-full left-0 right-0 mt-2 z-30 bg-surface-container-lowest rounded-xl border border-outline-variant/30 shadow-2xl p-2 max-h-60 overflow-y-auto space-y-1 animate-scale-in">
                        {ALL_PLANS.map((plan) => {
                          const isSelected = plan.id === selectedPlan.id;
                          return (
                            <button
                              key={plan.id}
                              type="button"
                              onClick={() => {
                                setSelectedPlan(plan);
                                setDropdownOpen(false);
                              }}
                              className={`w-full flex items-center justify-between p-2.5 rounded-lg transition-all cursor-pointer text-left ${
                                isSelected
                                  ? "bg-primary/10 border border-primary/30"
                                  : "hover:bg-surface-container-low"
                              }`}
                            >
                              <div className="flex items-center gap-2 min-w-0">
                                <span className="material-symbols-outlined text-primary text-[16px] sm:text-[18px] shrink-0">
                                  {plan.icon || "star"}
                                </span>
                                <div className="truncate">
                                  <span className="font-bold text-[12px] sm:text-[13px] text-on-surface block truncate">
                                    {plan.name}
                                  </span>
                                  <span className="text-[10px] sm:text-[11px] text-outline block truncate">
                                    {plan.desc}
                                  </span>
                                </div>
                              </div>
                              <div className="text-right shrink-0 ml-2">
                                <span className="font-bold text-[13px] sm:text-[14px] text-primary">
                                  {plan.price}
                                </span>
                                <span className="text-[10px] text-outline ml-0.5">
                                  {plan.cycle} USD
                                </span>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>

                  {/* Payment Rails Selector */}
                  <div className="space-y-2">
                    <label className="block text-[11px] uppercase text-on-surface-variant font-extrabold tracking-wider">
                      Settlement Method
                    </label>
                    <div className="grid grid-cols-2 gap-2 sm:gap-3">
                      <button
                        type="button"
                        onClick={() => setActiveTab("card")}
                        className={`p-2.5 sm:p-3 rounded-md sm:rounded-xl border text-left transition-all cursor-pointer ${
                          activeTab === "card"
                            ? "border-primary bg-primary/10  text-primary shadow-sm"
                            : "border-outline-variant/30 bg-surface-container-low text-on-surface"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1.5 sm:gap-2">
                            <span className="material-symbols-outlined text-[16px] sm:text-[18px]">credit_card</span>
                            <span className="text-[12px] sm:text-[13px]">Card &amp; Digital</span>
                          </div>
                          <StripeLogo className="h-2.5 sm:h-3 w-auto" />
                        </div>
                        <span className="text-[9px] sm:text-[10px] block text-outline font-normal mt-1 truncate">Visa, Mastercard, AMEX</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setActiveTab("wire")}
                        className={`p-2.5 sm:p-3 rounded-md sm:rounded-xl border text-left transition-all cursor-pointer ${
                          activeTab === "wire"
                            ? "border-primary bg-primary/10  text-primary shadow-sm"
                            : "border-outline-variant/30 bg-surface-container-low text-on-surface"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1.5 sm:gap-2">
                            <span className="material-symbols-outlined text-[16px] sm:text-[18px]">receipt_long</span>
                            <span className="text-[12px] sm:text-[13px]">ACH &amp; Wire</span>
                          </div>
                          <div className="flex items-center gap-1 text-primary">
                            <WiseLogo className="h-2.5 sm:h-3 w-auto" />
                            <span className="font-extrabold text-[8px] sm:text-[9px] tracking-tight">WISE</span>
                          </div>
                        </div>
                        <span className="text-[9px] sm:text-[10px] block text-outline font-normal mt-1 truncate">Corporate Invoicing</span>
                      </button>
                    </div>
                  </div>

                  {/* Summary Box */}
                  <div className="p-3 sm:p-4 rounded-md sm:rounded-xl bg-surface-container-low border border-outline-variant/20 space-y-1.5 sm:space-y-2 text-[12px] sm:text-[13px]">
                    <div className="flex justify-between text-on-surface-variant gap-2">
                      <span className="shrink-0">Plan Selection:</span>
                      <span className="font-bold text-on-surface text-right truncate">{selectedPlan.name}</span>
                    </div>
                    <div className="flex justify-between text-on-surface-variant gap-2">
                      <span className="shrink-0">Billing Cycle:</span>
                      <span className="font-medium text-on-surface text-right">{selectedPlan.cycle === "/mo" ? "Monthly Subscription" : "Milestone Sprint"}</span>
                    </div>
                    <div className="flex justify-between text-on-surface-variant pt-2 border-t border-outline-variant/20 gap-2">
                      <span className="font-bold text-on-surface">Total Amount:</span>
                      <span className="font-black text-primary text-[15px] sm:text-[16px]">{selectedPlan.price} USD</span>
                    </div>
                  </div>

                  {/* Proceed to Full Checkout Button */}
                  <Link
                    href={`/checkout?plan=${encodeURIComponent(selectedPlan.name)}&price=${encodeURIComponent(selectedPlan.price)}`}
                    className="w-full min-h-[48px] sm:h-14 px-3 sm:px-4 py-3 rounded-lg sm:rounded-xl text-white text-[13px] sm:text-[15px] font-bold flex items-center justify-center gap-2 bg-gradient-to-r from-primary via-primary-container to-[#b060ff] hover:from-[#8b24e6] hover:to-[#a44cf8] shadow-[0_12px_28px_rgba(112,21,226,0.38)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                  >
                    <span className="sm:hidden">Checkout ({selectedPlan.price} USD)</span>
                    <span className="hidden sm:inline">Proceed to Secure Checkout ({selectedPlan.price} USD)</span>
                    <span className="material-symbols-outlined text-[18px] sm:text-[20px]">
                      arrow_forward
                    </span>
                  </Link>

                  <p className="text-center text-[12px] text-outline">
                    Complies with PCI-DSS Level 1 &bull; 14-Day Evaluation Guarantee
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
