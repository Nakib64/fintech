"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import Link from "next/link";
import RevealOnScroll from "../RevealOnScroll";
import { ALL_PLANS, Plan } from "../../lib/plans";
import LottieDoneModal from "../LottieDoneModal";

export default function FintechSection() {
  const [selectedPlan, setSelectedPlan] = useState<Plan>(ALL_PLANS[0]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Form Fields
  const [email, setEmail] = useState("alex@company.com");
  const [cardNumber, setCardNumber] = useState("4242 •••• •••• 4242");
  const [expiry, setExpiry] = useState("12 / 28");
  const [cvc, setCvc] = useState("382");

  // Processing & Modal
  const [isProcessing, setIsProcessing] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [orderId, setOrderId] = useState("");

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
        setShowModal(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleSandboxSubmit = (e?: FormEvent) => {
    if (e) e.preventDefault();
    setIsProcessing(true);
    const randomNum = Math.floor(10000 + Math.random() * 90000);
    setOrderId(`VDM-${randomNum}`);

    setTimeout(() => {
      setIsProcessing(false);
      setShowModal(true);
    }, 900);
  };

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
                Secure Payments
              </span>
            </RevealOnScroll>
            <RevealOnScroll variant="up" delay={80}>
              <h2 className="text-[32px] sm:text-[40px] leading-[1.2] font-bold text-on-primary tracking-tight">
                Fast &amp; Secure Payment Rails
              </h2>
            </RevealOnScroll>
            <RevealOnScroll variant="up" delay={160}>
              <p className="text-[15px] leading-[24px] text-secondary-fixed max-w-xl">
                Pay with credit cards, ACH bank transfer, Apple Pay, or Google
                Pay. All payments are encrypted and secured by Stripe.
              </p>
            </RevealOnScroll>
          </div>
        </div>

        {/* Payment Gateways & Sandbox Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Gateway Status Cards */}
          <div className="lg:col-span-6 flex flex-col gap-5">
            <RevealOnScroll variant="left" delay={100}>
              <div className="p-6 rounded-[1.5rem] bg-surface-container-lowest/10 backdrop-blur-md border border-white/10 flex flex-col gap-2 transition-transform hover:-translate-y-0.5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-on-primary text-[20px]">
                      payments
                    </span>
                  </div>
                  <div>
                    <h4 className="text-[17px] font-bold text-on-primary">
                      Stripe Checkout
                    </h4>
                    <span className="text-[12px] font-medium text-primary-fixed">
                      Instant &amp; 3D Secure
                    </span>
                  </div>
                </div>
                <p className="text-[13px] leading-[20px] text-secondary-fixed mt-1">
                  End-to-end 256-bit encryption. Accepts Visa, Mastercard, AMEX,
                  Apple Pay, and Google Pay.
                </p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll variant="left" delay={180}>
              <div className="p-6 rounded-[1.5rem] bg-surface-container-lowest/5 backdrop-blur-sm border border-white/5 flex flex-col gap-2 transition-transform hover:-translate-y-0.5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-secondary-fixed text-[20px]">
                      account_balance_wallet
                    </span>
                  </div>
                  <div>
                    <h4 className="text-[17px] font-bold text-on-primary">
                      Bank Wire &amp; ACH
                    </h4>
                    <span className="text-[12px] font-medium text-secondary-fixed">
                      Direct Invoicing
                    </span>
                  </div>
                </div>
                <p className="text-[13px] leading-[20px] text-secondary-fixed opacity-80 mt-1">
                  US ACH bank transfers and international SWIFT wire options for
                  teams and monthly retainers.
                </p>
              </div>
            </RevealOnScroll>

            {/* Guarantee Badges */}
            <RevealOnScroll variant="up" delay={260}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                <div className="flex items-center gap-3 bg-white/5 p-3.5 rounded-xl border border-white/10">
                  <span className="material-symbols-outlined text-primary-fixed text-[22px]">
                    verified_user
                  </span>
                  <span className="text-[13px] text-on-primary font-medium">
                    PCI-DSS Level 1 Safe
                  </span>
                </div>
                <div className="flex items-center gap-3 bg-white/5 p-3.5 rounded-xl border border-white/10">
                  <span className="material-symbols-outlined text-primary-fixed text-[22px]">
                    published_with_changes
                  </span>
                  <span className="text-[13px] text-on-primary font-medium">
                    14-Day Money Back
                  </span>
                </div>
              </div>
            </RevealOnScroll>
          </div>

          {/* Interactive Fully Workable Checkout Form (Matching /checkout) */}
          <div className="lg:col-span-6">
            <RevealOnScroll variant="right" delay={150}>
              <div className="bg-surface-container-lowest text-on-surface p-6 sm:p-8 rounded-[2rem] shadow-[0_24px_60px_-8px_rgba(105,41,196,0.3)] relative">
                {/* Header Row */}
                <div className="flex items-center justify-between pb-3 bg-surface-container-low p-3.5 rounded-xl mb-5">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-[20px]">
                      lock
                    </span>
                    <span className="text-[14px] font-bold">
                      Stripe Test Checkout
                    </span>
                  </div>
                  <span className="text-[11px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-primary-fixed text-on-primary-fixed">
                    Interactive Demo
                  </span>
                </div>

                {/* Express Pay Options */}
                <div className="grid grid-cols-2 gap-3 mb-5">
                  <button
                    type="button"
                    onClick={() => handleSandboxSubmit()}
                    className="h-11 rounded-full bg-black text-white text-[13px] font-semibold hover:bg-neutral-800 transition-transform active:scale-95 flex items-center justify-center cursor-pointer shadow-sm"
                  >
                    <span>Apple Pay</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleSandboxSubmit()}
                    className="h-11 rounded-full bg-black text-white text-[13px] font-semibold hover:bg-neutral-800 transition-transform active:scale-95 flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
                  >
                    <span>Google Pay</span>
                    <span className="material-symbols-outlined text-[16px] text-[#c084fc]">
                      account_balance_wallet
                    </span>
                  </button>
                </div>

                <form onSubmit={handleSandboxSubmit} className="space-y-4">
                  {/* Selected Plan Dropdown */}
                  <div className="relative" ref={dropdownRef}>
                    <div className="flex items-center justify-between mb-1">
                      <label className="block text-[11px] uppercase text-on-surface-variant font-extrabold tracking-wider">
                        Selected Plan
                      </label>
                      <span className="text-[10px] text-primary font-bold">
                        Click to Switch
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      className="w-full h-13 px-4 rounded-2xl bg-surface-container-low border border-outline-variant/30 hover:border-primary/50 text-[14px] text-on-surface flex items-center justify-between transition-all cursor-pointer text-left"
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <span className="material-symbols-outlined text-primary text-[20px]">
                          {selectedPlan.icon || "star"}
                        </span>
                        <div className="truncate">
                          <span className="font-bold text-on-surface block truncate">
                            {selectedPlan.name}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 shrink-0 ml-2">
                        <span className="font-black text-primary text-[15px]">
                          {selectedPlan.price}
                        </span>
                        <span className="text-[11px] text-outline font-medium">
                          {selectedPlan.cycle}
                        </span>
                        <span
                          className={`material-symbols-outlined text-[18px] text-outline transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""
                            }`}
                        >
                          expand_more
                        </span>
                      </div>
                    </button>

                    {/* Dropdown Menu */}
                    {dropdownOpen && (
                      <div className="absolute top-full left-0 right-0 mt-2 z-30 bg-surface-container-lowest rounded-2xl border border-outline-variant/30 shadow-2xl p-2 max-h-60 overflow-y-auto space-y-1 animate-scale-in">
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
                              className={`w-full flex items-center justify-between p-2.5 rounded-xl transition-all cursor-pointer text-left ${isSelected
                                  ? "bg-primary/10 border border-primary/30"
                                  : "hover:bg-surface-container-low"
                                }`}
                            >
                              <div className="flex items-center gap-2.5 min-w-0">
                                <span className="material-symbols-outlined text-primary text-[18px]">
                                  {plan.icon || "star"}
                                </span>
                                <div className="truncate">
                                  <span className="font-bold text-[13px] text-on-surface block truncate">
                                    {plan.name}
                                  </span>
                                  <span className="text-[11px] text-outline block truncate">
                                    {plan.desc}
                                  </span>
                                </div>
                              </div>
                              <div className="text-right shrink-0 ml-2">
                                <span className="font-bold text-[14px] text-primary">
                                  {plan.price}
                                </span>
                                <span className="text-[10px] text-outline ml-0.5">
                                  {plan.cycle}
                                </span>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label className="block text-[11px] uppercase text-on-surface-variant font-extrabold tracking-wider mb-1">
                      Email Address
                    </label>
                    <input
                      className="w-full h-12 px-4 rounded-xl bg-surface-container-low border border-outline-variant/30 text-[14px] text-on-surface focus:ring-2 focus:ring-primary focus:outline-none transition-all placeholder:text-on-surface-variant/50"
                      placeholder="you@company.com"
                      required
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  {/* Card Number */}
                  <div>
                    <label className="block text-[11px] uppercase text-on-surface-variant font-extrabold tracking-wider mb-1">
                      Demo Card Number
                    </label>
                    <div className="relative flex items-center">
                      <span className="absolute left-3.5 material-symbols-outlined text-outline text-[18px]">
                        credit_card
                      </span>
                      <input
                        className="w-full h-12 pl-10 pr-24 rounded-xl bg-surface-container-low border border-outline-variant/30 font-mono text-[14px] text-on-surface focus:ring-2 focus:ring-primary focus:outline-none"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                      />
                      <span className="absolute right-3 px-2 py-0.5 rounded-md bg-primary-fixed text-[10px] font-bold text-on-primary-fixed uppercase tracking-wider">
                        Test Mode
                      </span>
                    </div>
                  </div>

                  {/* Expiry and CVC */}
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] uppercase text-on-surface-variant font-extrabold tracking-wider mb-1">
                        Expiry
                      </label>
                      <input
                        className="w-full h-11 px-3 rounded-xl bg-surface-container-low border border-outline-variant/30 font-mono text-[13px] text-on-surface focus:ring-2 focus:ring-primary focus:outline-none"
                        value={expiry}
                        onChange={(e) => setExpiry(e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] uppercase text-on-surface-variant font-extrabold tracking-wider mb-1">
                        CVC
                      </label>
                      <input
                        className="w-full h-11 px-3 rounded-xl bg-surface-container-low border border-outline-variant/30 font-mono text-[13px] text-on-surface focus:ring-2 focus:ring-primary focus:outline-none"
                        value={cvc}
                        onChange={(e) => setCvc(e.target.value)}
                      />
                    </div>
                  </div>

                  {/* Purchase CTA Button */}
                  <button
                    className="w-full py-4 rounded-full bg-gradient-to-r from-primary via-primary-container to-[#b060ff] hover:from-[#8b24e6] hover:to-[#a44cf8] text-white text-[15px] font-extrabold transition-all flex items-center justify-center gap-2 shadow-[0_8px_24px_rgba(112,21,226,0.35)] hover:shadow-[0_10px_30px_rgba(112,21,226,0.5)] mt-4 disabled:opacity-70 cursor-pointer active:scale-95"
                    disabled={isProcessing}
                    type="submit"
                  >
                    {isProcessing ? (
                      <>
                        <span className="material-symbols-outlined animate-spin text-[18px]">
                          progress_activity
                        </span>
                        <span>Securing Settlement...</span>
                      </>
                    ) : (
                      <>
                        <span>Purchase ({selectedPlan.price})</span>
                        <span className="material-symbols-outlined text-[19px]">
                          arrow_forward
                        </span>
                      </>
                    )}
                  </button>

                  <p className="text-center text-[11px] text-on-surface-variant mt-2">
                    Instant Delaware LLC SLA activation • 14-day guarantee
                  </p>
                </form>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>

      {/* ── SIMPLE LOTTIE DONE MODAL ── */}
      <LottieDoneModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="Done!"
        subtitle="Purchase Successful"
      />
    </section>
  );
}
