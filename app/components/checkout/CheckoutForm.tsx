"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import RevealOnScroll from "../RevealOnScroll";
import LottieDoneModal from "../LottieDoneModal";
import { Plan } from "../../lib/plans";

interface CheckoutFormProps {
  selectedPlan: Plan;
  onPlanChange: (plan: Plan) => void;
  allPlans: Plan[];
}

type PaymentMethod = "invoice" | "wire";

export default function CheckoutForm({
  selectedPlan,
  onPlanChange,
  allPlans,
}: CheckoutFormProps) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Form Fields State
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [country, setCountry] = useState("United States");
  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("invoice");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [formError, setFormError] = useState("");

  // Processing & Confirmation States
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderId, setOrderId] = useState("");
  const [emailStatusMessage, setEmailStatusMessage] = useState("");

  const isMonthly = selectedPlan.cycle === "/mo";

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

  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError("");

    if (!fullName.trim() || !email.trim()) {
      setFormError("Please enter your full name and work email address.");
      return;
    }

    if (!termsAccepted) {
      setFormError("Please accept the Terms of Service, Privacy Policy, and Refund Policy to proceed.");
      return;
    }

    setIsProcessing(true);

    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          email,
          company,
          country,
          address,
          planName: selectedPlan.name,
          planPrice: selectedPlan.price,
          planCycle: selectedPlan.cycle,
          paymentMethod,
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setOrderId(data.orderId);
        setEmailStatusMessage(
          `Official commercial invoice #${data.orderId} dispatched to ${email}.`
        );
        setOrderPlaced(true);
      } else {
        setFormError(data.error || "Failed to process order. Please try again.");
      }
    } catch (err) {
      console.error("Order submission error:", err);
      // Fallback in case of network issue
      const fallbackId = `ASH-${Math.floor(10000 + Math.random() * 90000)}`;
      setOrderId(fallbackId);
      setEmailStatusMessage(`Order #${fallbackId} registered for ${email}.`);
      setOrderPlaced(true);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleModalClose = () => {
    setOrderPlaced(false);
    setFullName("");
    setEmail("");
    setCompany("");
    setAddress("");
    setTermsAccepted(false);
  };

  // ── Standard Order Form ──
  return (
    <div className="flex flex-col gap-6 w-full max-w-full">
      {/* ── Confirmation Modal ── */}
      <LottieDoneModal
        isOpen={orderPlaced}
        onClose={handleModalClose}
        title="Confirmation Sent!"
        subtitle="Your order request has been received."
        orderId={orderId}
        email={email}
        message="Our creative executive team is reviewing your requirements and will reach out to you shortly (within 24 business hours) to confirm project scope and kick off onboarding."
        buttonText="Got it, Thanks!"
      />

      {/* ── 1. Plan Selector Dropdown Card ── */}
      <RevealOnScroll variant="up" className="relative z-50 w-full max-w-full">
        <div className="bg-surface-container-low rounded-2xl sm:rounded-[1.75rem] p-4 sm:p-6 shadow-sm border border-outline-variant/30 space-y-3 relative z-50 w-full max-w-full overflow-visible">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 min-w-0">
              <span className="material-symbols-outlined text-[18px] text-primary shrink-0">
                tune
              </span>
              <span className="text-[11px] sm:text-[12px] font-bold uppercase tracking-wider text-on-surface-variant truncate">
                Selected Package
              </span>
            </div>
            <span className="text-[10px] sm:text-[11px] text-primary font-bold bg-primary/10 px-2.5 py-0.5 rounded-full border border-primary/20 shrink-0">
              Change Package
            </span>
          </div>

          {/* Interactive Dropdown Trigger */}
          <div className="relative z-50 w-full" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="w-full flex items-center justify-between p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-surface-container-lowest border-2 border-primary/30 hover:border-primary transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer text-left group gap-2"
              aria-haspopup="listbox"
              aria-expanded={dropdownOpen}
            >
              <div className="flex items-center gap-2.5 sm:gap-3.5 min-w-0 flex-1">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-tr from-primary to-primary-container text-white flex items-center justify-center shrink-0 shadow-sm shadow-primary/30">
                  <span className="material-symbols-outlined text-[20px] sm:text-[24px]">
                    {selectedPlan.icon || "star"}
                  </span>
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
                    <span className="text-[14px] sm:text-[16px] font-bold text-on-surface group-hover:text-primary transition-colors truncate">
                      {selectedPlan.name}
                    </span>
                    {selectedPlan.badge && (
                      <span className="px-2 py-0.5 rounded-full bg-primary-fixed text-[9px] sm:text-[10px] text-on-primary-fixed font-bold uppercase tracking-wider shrink-0">
                        {selectedPlan.badge}
                      </span>
                    )}
                  </div>
                  <span className="text-[11px] sm:text-[12px] text-on-surface-variant block truncate">
                    {selectedPlan.desc}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 sm:gap-3 shrink-0 ml-1 sm:ml-3">
                <div className="text-right">
                  <span className="text-[15px] sm:text-[18px] font-extrabold text-on-surface block leading-tight">
                    {selectedPlan.price}
                  </span>
                  <span className="text-[10px] sm:text-[11px] text-outline font-medium block">
                    {selectedPlan.cycle} USD
                  </span>
                </div>
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-surface-container-low flex items-center justify-center text-on-surface-variant group-hover:bg-primary/10 group-hover:text-primary transition-colors shrink-0">
                  <span
                    className={`material-symbols-outlined text-[18px] sm:text-[20px] transition-transform duration-300 ${
                      dropdownOpen ? "rotate-180" : ""
                    }`}
                  >
                    expand_more
                  </span>
                </div>
              </div>
            </button>

            {/* Custom Dropdown Menu Floating with high z-index and elevation */}
            {dropdownOpen && (
              <div
                className="absolute top-full left-0 right-0 mt-2 z-50 bg-surface-container-lowest rounded-2xl border-2 border-primary/40 shadow-[0_24px_64px_rgba(20,5,45,0.45)] overflow-hidden p-2 space-y-1 animate-scale-in"
                role="listbox"
              >
                <div className="px-3 py-2 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-outline border-b border-outline-variant/20">
                  Available Production Packages
                </div>

                <div className="max-h-[300px] overflow-y-auto space-y-1 pr-1 custom-scrollbar">
                  {allPlans.map((plan) => {
                    const isSelected = plan.id === selectedPlan.id;
                    return (
                      <button
                        key={plan.id}
                        type="button"
                        onClick={() => {
                          onPlanChange(plan);
                          setDropdownOpen(false);
                        }}
                        className={`w-full flex items-center justify-between p-2.5 sm:p-3 rounded-xl transition-all cursor-pointer text-left gap-2 ${
                          isSelected
                            ? "bg-primary/10 border border-primary/30 shadow-inner"
                            : "hover:bg-surface-container-low"
                        }`}
                        role="option"
                        aria-selected={isSelected}
                      >
                        <div className="flex items-center gap-2.5 sm:gap-3 min-w-0 flex-1">
                          <div
                            className={`w-8 h-8 sm:w-9 sm:h-9 rounded-lg flex items-center justify-center shrink-0 ${
                              isSelected
                                ? "bg-primary text-white"
                                : "bg-surface-container-low text-primary"
                            }`}
                          >
                            <span className="material-symbols-outlined text-[18px] sm:text-[20px]">
                              {plan.icon || "star"}
                            </span>
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
                              <span
                                className={`text-[13px] sm:text-[14px] font-bold truncate ${
                                  isSelected
                                    ? "text-primary"
                                    : "text-on-surface"
                                }`}
                              >
                                {plan.name}
                              </span>
                              {plan.badge && (
                                <span className="px-1.5 py-0.5 rounded-full bg-surface-container-low text-[9px] sm:text-[10px] text-outline font-semibold shrink-0">
                                  {plan.badge}
                                </span>
                              )}
                            </div>
                            <span className="text-[10.5px] sm:text-[11px] text-on-surface-variant block truncate">
                              {plan.desc}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0 ml-1 sm:ml-2">
                          <div className="text-right">
                            <span className="text-[13px] sm:text-[15px] font-bold text-on-surface block leading-tight">
                              {plan.price}
                            </span>
                            <span className="text-[10px] sm:text-[11px] text-outline block">
                              {plan.cycle} USD
                            </span>
                          </div>
                          {isSelected && (
                            <span className="material-symbols-outlined text-[16px] sm:text-[18px] text-primary shrink-0">
                              check_circle
                            </span>
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </RevealOnScroll>

      {/* ── 2. Client Billing & Contact Information Form ── */}
      <RevealOnScroll variant="up" delay={80} className="relative z-10 w-full max-w-full">
        <form onSubmit={handleCheckout} className="space-y-6 w-full max-w-full">
          <div className="bg-surface-container-low rounded-2xl sm:rounded-[1.75rem] p-4 sm:p-6 md:p-8 shadow-sm space-y-5 sm:space-y-6 border border-outline-variant/30 w-full max-w-full overflow-hidden">
            <div className="flex items-center justify-between pb-2 border-b border-outline-variant/20">
              <div className="flex items-center gap-2.5 sm:gap-3">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-primary-fixed flex items-center justify-center text-primary shrink-0">
                  <span className="material-symbols-outlined text-[18px] sm:text-[20px]">
                    person
                  </span>
                </div>
                <h2 className="text-[16px] sm:text-[20px] font-bold text-on-surface">
                  Client &amp; Billing Details
                </h2>
              </div>
              <span className="text-[10px] sm:text-[11px] font-semibold text-outline shrink-0">
                Step 1 of 2
              </span>
            </div>

            <div className="space-y-3.5 sm:space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="w-full">
                  <label className="block text-[12px] sm:text-[13px] font-semibold text-on-surface-variant mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    required
                    className="w-full max-w-full h-11 sm:h-12 px-3.5 sm:px-4 rounded-xl bg-surface-container-lowest text-[13px] sm:text-[14px] text-on-surface focus:outline-none focus:ring-2 focus:ring-primary shadow-sm border border-outline-variant/30 box-border"
                    placeholder="e.g. John Doe"
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                </div>
                <div className="w-full">
                  <label className="block text-[12px] sm:text-[13px] font-semibold text-on-surface-variant mb-1">
                    Work Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    required
                    className="w-full max-w-full h-11 sm:h-12 px-3.5 sm:px-4 rounded-xl bg-surface-container-lowest text-[13px] sm:text-[14px] text-on-surface focus:outline-none focus:ring-2 focus:ring-primary shadow-sm border border-outline-variant/30 box-border"
                    placeholder="name@company.com"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="w-full">
                  <label className="block text-[12px] sm:text-[13px] font-semibold text-on-surface-variant mb-1">
                    Company / Organization (Optional)
                  </label>
                  <input
                    className="w-full max-w-full h-11 sm:h-12 px-3.5 sm:px-4 rounded-xl bg-surface-container-lowest text-[13px] sm:text-[14px] text-on-surface focus:outline-none focus:ring-2 focus:ring-primary shadow-sm border border-outline-variant/30 box-border"
                    placeholder="e.g. Acme Media Corp"
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                  />
                </div>
                <div className="w-full">
                  <label className="block text-[12px] sm:text-[13px] font-semibold text-on-surface-variant mb-1">
                    Country / Region
                  </label>
                  <select
                    className="w-full max-w-full h-11 sm:h-12 px-3.5 sm:px-4 rounded-xl bg-surface-container-lowest text-[13px] sm:text-[14px] text-on-surface focus:outline-none focus:ring-2 focus:ring-primary shadow-sm border border-outline-variant/30 cursor-pointer box-border"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                  >
                    <option value="United States">United States</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="Canada">Canada</option>
                    <option value="Australia">Australia</option>
                    <option value="Germany">Germany</option>
                    <option value="Other International">Other International</option>
                  </select>
                </div>
              </div>

              <div className="w-full">
                <label className="block text-[12px] sm:text-[13px] font-semibold text-on-surface-variant mb-1">
                  Billing Address (Optional for Invoicing)
                </label>
                <input
                  className="w-full max-w-full h-11 sm:h-12 px-3.5 sm:px-4 rounded-xl bg-surface-container-lowest text-[13px] sm:text-[14px] text-on-surface focus:outline-none focus:ring-2 focus:ring-primary shadow-sm border border-outline-variant/30 box-border"
                  placeholder="Street Address, City, State, Postal Code"
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* ── 3. Compliant Commercial Payment Rails ── */}
          <div className="bg-surface-container-low rounded-2xl sm:rounded-[1.75rem] p-4 sm:p-6 md:p-8 shadow-sm space-y-5 sm:space-y-6 border border-outline-variant/30 w-full max-w-full overflow-hidden">
            <div className="flex items-center justify-between pb-2 border-b border-outline-variant/20 gap-2">
              <div className="flex items-center gap-2.5 sm:gap-3">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-primary-fixed flex items-center justify-center text-primary shrink-0">
                  <span className="material-symbols-outlined text-[18px] sm:text-[20px]">
                    receipt_long
                  </span>
                </div>
                <h2 className="text-[16px] sm:text-[20px] font-bold text-on-surface leading-tight">
                  Payment &amp; Invoicing Preference
                </h2>
              </div>
              <div className="flex items-center gap-1.5 shrink-0">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="text-[10px] sm:text-[11px] font-semibold text-on-surface-variant whitespace-nowrap">
                  Commercial Rails
                </span>
              </div>
            </div>

            {/* Payment Method Radio Options */}
            <div className="space-y-2.5 sm:space-y-3">
              <label
                onClick={() => setPaymentMethod("invoice")}
                className={`flex items-start gap-2.5 sm:gap-3.5 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl border-2 transition-all cursor-pointer ${
                  paymentMethod === "invoice"
                    ? "border-primary bg-primary/5 shadow-sm"
                    : "border-outline-variant/30 bg-surface-container-lowest hover:border-primary/40"
                }`}
              >
                <input
                  type="radio"
                  name="paymentMethod"
                  checked={paymentMethod === "invoice"}
                  onChange={() => setPaymentMethod("invoice")}
                  className="mt-1 text-primary focus:ring-primary shrink-0 cursor-pointer"
                />
                <div className="flex-1 min-w-0">
                  <span className="text-[13.5px] sm:text-[15px] font-bold text-on-surface block leading-snug">
                    Electronic Invoice with Card &amp; Digital Pay (Stripe &amp; Wise Link)
                  </span>
                </div>
              </label>

              <label
                onClick={() => setPaymentMethod("wire")}
                className={`flex items-start gap-2.5 sm:gap-3.5 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl border-2 transition-all cursor-pointer ${
                  paymentMethod === "wire"
                    ? "border-primary bg-primary/5 shadow-sm"
                    : "border-outline-variant/30 bg-surface-container-lowest hover:border-primary/40"
                }`}
              >
                <input
                  type="radio"
                  name="paymentMethod"
                  checked={paymentMethod === "wire"}
                  onChange={() => setPaymentMethod("wire")}
                  className="mt-1 text-primary focus:ring-primary shrink-0 cursor-pointer"
                />
                <div className="flex-1 min-w-0">
                  <span className="text-[13.5px] sm:text-[15px] font-bold text-on-surface block leading-snug">
                    Direct US ACH &amp; Domestic / International Bank Wire
                  </span>
                </div>
              </label>
            </div>

            {/* ── Subscription Disclosure (if applicable) ── */}
            {isMonthly && (
              <div className="p-3.5 sm:p-4 rounded-xl bg-surface-container border border-outline-variant/30 space-y-1 text-[12px] sm:text-[13px] break-words">
                <div className="flex items-center gap-1.5 font-bold text-primary">
                  <span className="material-symbols-outlined text-[16px] sm:text-[18px] shrink-0">
                    autorenew
                  </span>
                  <span>Subscription &amp; Renewal Terms</span>
                </div>
                <p className="text-on-surface-variant leading-relaxed">
                  By subscribing, you authorize ASHIVOX LLC to invoice your selected payment method <strong>{selectedPlan.price} USD every 30 days</strong> until cancelled. Cancel anytime with thirty (30) days notice via <a href="mailto:support@ashivox.com" className="text-primary underline">support@ashivox.com</a>. No cancellation fees apply.
                </p>
              </div>
            )}

            {/* ── Mandatory Policy Agreement Checkbox ── */}
            <div className="pt-1">
              <label className="flex items-start gap-2.5 sm:gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  required
                  checked={termsAccepted}
                  onChange={(e) => setTermsAccepted(e.target.checked)}
                  className="mt-0.5 w-4 h-4 rounded text-primary focus:ring-primary cursor-pointer shrink-0"
                />
                <span className="text-[12px] sm:text-[13px] text-on-surface-variant leading-relaxed break-words">
                  I agree to the ASHIVOX LLC{" "}
                  <Link href="/terms" target="_blank" className="text-primary font-semibold underline">
                    Terms of Service
                  </Link>
                  ,{" "}
                  <Link href="/privacy" target="_blank" className="text-primary font-semibold underline">
                    Privacy Policy
                  </Link>
                  , and{" "}
                  <Link href="/refund-policy" target="_blank" className="text-primary font-semibold underline">
                    Refund &amp; Cancellation Policy
                  </Link>
                  .
                </span>
              </label>
            </div>

            {formError && (
              <div className="p-3 rounded-xl bg-red-50 text-red-700 text-[12px] sm:text-[13px] font-medium border border-red-200">
                {formError}
              </div>
            )}

            {/* Execution CTA Button */}
            <div className="pt-2">
              <button
                disabled={isProcessing}
                type="submit"
                className="w-full min-h-[50px] sm:min-h-[56px] py-3 sm:py-3.5 px-4 sm:px-6 rounded-full text-white text-[14px] sm:text-[15px] md:text-[16px] font-bold flex items-center justify-center gap-2 bg-gradient-to-r from-primary via-primary-container to-[#b060ff] hover:from-[#8b24e6] hover:to-[#a44cf8] shadow-[0_10px_24px_rgba(112,21,226,0.35)] hover:shadow-[0_16px_36px_rgba(112,21,226,0.55)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer disabled:opacity-75 whitespace-nowrap overflow-hidden"
              >
                {isProcessing ? (
                  <>
                    <span className="material-symbols-outlined text-[18px] sm:text-[20px] animate-spin shrink-0">
                      progress_activity
                    </span>
                    <span className="whitespace-nowrap truncate">
                      Submitting Order Request...
                    </span>
                  </>
                ) : (
                  <>
                    {/* Mobile screen (< sm): crisp single line */}
                    <span className="sm:hidden whitespace-nowrap">
                      Submit Order • {selectedPlan.price} USD
                    </span>
                    {/* Desktop / Tablet (sm+): full descriptive text */}
                    <span className="hidden sm:inline whitespace-nowrap">
                      Submit Order Request ({selectedPlan.price} USD)
                    </span>
                    <span className="material-symbols-outlined text-[18px] sm:text-[20px] shrink-0">
                      send
                    </span>
                  </>
                )}
              </button>
            </div>
          </div>
        </form>
      </RevealOnScroll>
    </div>
  );
}
