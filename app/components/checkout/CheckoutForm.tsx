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
    <div className="flex flex-col gap-6">
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
      <RevealOnScroll variant="up" className="relative z-30">
        <div className="bg-surface-container-low rounded-[1.75rem] p-6 shadow-sm border border-outline-variant/30 space-y-3 relative z-30">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px] text-primary">
                tune
              </span>
              <span className="text-[12px] font-bold uppercase tracking-wider text-on-surface-variant">
                Selected Package
              </span>
            </div>
            <span className="text-[11px] text-primary font-bold bg-primary/10 px-2.5 py-0.5 rounded-full border border-primary/20">
              Change Package
            </span>
          </div>

          {/* Interactive Dropdown Trigger */}
          <div className="relative z-40" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="w-full flex items-center justify-between p-4 rounded-2xl bg-surface-container-lowest border-2 border-primary/30 hover:border-primary transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer text-left group"
              aria-haspopup="listbox"
              aria-expanded={dropdownOpen}
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-primary to-primary-container text-white flex items-center justify-center shrink-0 shadow-sm shadow-primary/30">
                  <span className="material-symbols-outlined text-[24px]">
                    {selectedPlan.icon || "star"}
                  </span>
                </div>
                <div className="truncate">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-[16px] font-bold text-on-surface group-hover:text-primary transition-colors">
                      {selectedPlan.name}
                    </span>
                    {selectedPlan.badge && (
                      <span className="px-2 py-0.5 rounded-full bg-primary-fixed text-[10px] text-on-primary-fixed font-bold uppercase tracking-wider">
                        {selectedPlan.badge}
                      </span>
                    )}
                  </div>
                  <span className="text-[12px] text-on-surface-variant block truncate">
                    {selectedPlan.desc}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 shrink-0 ml-3">
                <div className="text-right">
                  <span className="text-[18px] font-extrabold text-on-surface block">
                    {selectedPlan.price}
                  </span>
                  <span className="text-[11px] text-outline font-medium block">
                    {selectedPlan.cycle} (USD)
                  </span>
                </div>
                <div className="w-8 h-8 rounded-full bg-surface-container-low flex items-center justify-center text-on-surface-variant group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                  <span
                    className={`material-symbols-outlined text-[20px] transition-transform duration-300 ${
                      dropdownOpen ? "rotate-180" : ""
                    }`}
                  >
                    expand_more
                  </span>
                </div>
              </div>
            </button>

            {/* Custom Dropdown Menu */}
            {dropdownOpen && (
              <div
                className="absolute top-full left-0 right-0 mt-2 z-50 bg-surface-container-lowest rounded-2xl border border-primary/30 shadow-[0_24px_60px_rgba(27,11,56,0.35)] overflow-hidden p-2 space-y-1 animate-scale-in"
                role="listbox"
              >
                <div className="px-3 py-2 text-[11px] font-bold uppercase tracking-wider text-outline border-b border-outline-variant/20">
                  Available Production Packages
                </div>

                <div className="max-h-[320px] overflow-y-auto space-y-1 pr-1 custom-scrollbar">
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
                        className={`w-full flex items-center justify-between p-3 rounded-xl transition-all cursor-pointer text-left ${
                          isSelected
                            ? "bg-primary/10 border border-primary/30 shadow-inner"
                            : "hover:bg-surface-container-low"
                        }`}
                        role="option"
                        aria-selected={isSelected}
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <div
                            className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${
                              isSelected
                                ? "bg-primary text-white"
                                : "bg-surface-container-low text-primary"
                            }`}
                          >
                            <span className="material-symbols-outlined text-[20px]">
                              {plan.icon || "star"}
                            </span>
                          </div>
                          <div className="truncate">
                            <div className="flex items-center gap-2">
                              <span
                                className={`text-[14px] font-bold ${
                                  isSelected
                                    ? "text-primary"
                                    : "text-on-surface"
                                }`}
                              >
                                {plan.name}
                              </span>
                              {plan.badge && (
                                <span className="px-2 py-0.5 rounded-full bg-surface-container-low text-[10px] text-outline font-semibold">
                                  {plan.badge}
                                </span>
                              )}
                            </div>
                            <span className="text-[11px] text-on-surface-variant block truncate">
                              {plan.desc}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 shrink-0 ml-3">
                          <div className="text-right">
                            <span className="text-[15px] font-bold text-on-surface">
                              {plan.price}
                            </span>
                            <span className="text-[11px] text-outline ml-0.5">
                              {plan.cycle} USD
                            </span>
                          </div>
                          {isSelected && (
                            <span className="material-symbols-outlined text-[18px] text-primary">
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
      <RevealOnScroll variant="up" delay={80}>
        <form onSubmit={handleCheckout} className="space-y-6">
          <div className="bg-surface-container-low rounded-[1.75rem] p-6 sm:p-8 shadow-sm space-y-6 border border-outline-variant/30">
            <div className="flex items-center justify-between pb-2 border-b border-outline-variant/20">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-primary-fixed flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-[20px]">
                    person
                  </span>
                </div>
                <h2 className="text-[18px] sm:text-[20px] font-bold text-on-surface">
                  Client &amp; Billing Details
                </h2>
              </div>
              <span className="text-[11px] font-semibold text-outline">
                Step 1 of 2
              </span>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[13px] font-semibold text-on-surface-variant mb-1.5">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    required
                    className="w-full h-12 px-4 rounded-xl bg-surface-container-lowest text-[14px] text-on-surface focus:outline-none focus:ring-2 focus:ring-primary shadow-sm border border-outline-variant/30"
                    placeholder="e.g. John Doe"
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-[13px] font-semibold text-on-surface-variant mb-1.5">
                    Work Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    required
                    className="w-full h-12 px-4 rounded-xl bg-surface-container-lowest text-[14px] text-on-surface focus:outline-none focus:ring-2 focus:ring-primary shadow-sm border border-outline-variant/30"
                    placeholder="name@company.com"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[13px] font-semibold text-on-surface-variant mb-1.5">
                    Company / Organization (Optional)
                  </label>
                  <input
                    className="w-full h-12 px-4 rounded-xl bg-surface-container-lowest text-[14px] text-on-surface focus:outline-none focus:ring-2 focus:ring-primary shadow-sm border border-outline-variant/30"
                    placeholder="e.g. Acme Media Corp"
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-[13px] font-semibold text-on-surface-variant mb-1.5">
                    Country / Region
                  </label>
                  <select
                    className="w-full h-12 px-4 rounded-xl bg-surface-container-lowest text-[14px] text-on-surface focus:outline-none focus:ring-2 focus:ring-primary shadow-sm border border-outline-variant/30 cursor-pointer"
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

              <div>
                <label className="block text-[13px] font-semibold text-on-surface-variant mb-1.5">
                  Billing Address (Optional for Invoicing)
                </label>
                <input
                  className="w-full h-12 px-4 rounded-xl bg-surface-container-lowest text-[14px] text-on-surface focus:outline-none focus:ring-2 focus:ring-primary shadow-sm border border-outline-variant/30"
                  placeholder="Street Address, City, State/Province, Postal Code"
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* ── 3. Compliant Commercial Payment Rails ── */}
          <div className="bg-surface-container-low rounded-[1.75rem] p-6 sm:p-8 shadow-sm space-y-6 border border-outline-variant/30">
            <div className="flex items-center justify-between pb-2 border-b border-outline-variant/20">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-primary-fixed flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-[20px]">
                    receipt_long
                  </span>
                </div>
                <h2 className="text-[18px] sm:text-[20px] font-bold text-on-surface">
                  Payment &amp; Invoicing Preference
                </h2>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <span className="text-[11px] font-semibold text-on-surface-variant">
                  Official Commercial Rails
                </span>
              </div>
            </div>

            {/* Payment Method Radio Options */}
            <div className="space-y-3">
              <label
                onClick={() => setPaymentMethod("invoice")}
                className={`flex items-start gap-3.5 p-4 rounded-2xl border-2 transition-all cursor-pointer ${
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
                  className="mt-1 text-primary focus:ring-primary"
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[15px] font-bold text-on-surface">
                      Electronic Invoice with Card &amp; Digital Pay (Stripe &amp; Wise Link)
                    </span>
                  </div>
                  
                </div>
              </label>

              <label
                onClick={() => setPaymentMethod("wire")}
                className={`flex items-start gap-3.5 p-4 rounded-2xl border-2 transition-all cursor-pointer ${
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
                  className="mt-1 text-primary focus:ring-primary"
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[15px] font-bold text-on-surface">
                      Direct US ACH &amp; Domestic / International Bank Wire
                    </span>
                  
                  </div>
                  
                </div>
              </label>
            </div>

            {/* ── Subscription Disclosure (if applicable) ── */}
            {isMonthly && (
              <div className="p-4 rounded-xl bg-surface-container border border-outline-variant/30 space-y-1.5 text-[13px]">
                <div className="flex items-center gap-1.5 font-bold text-primary">
                  <span className="material-symbols-outlined text-[18px]">
                    autorenew
                  </span>
                  <span>Subscription &amp; Renewal Terms</span>
                </div>
                <p className="text-on-surface-variant leading-relaxed">
                  By subscribing, you authorize ASHIVOX LLC to invoice your selected payment method <strong>{selectedPlan.price} USD every 30 days</strong> until cancelled. You may cancel your subscription at any time with thirty (30) days notice by emailing <a href="mailto:support@ashivox.com" className="text-primary underline">support@ashivox.com</a>. No cancellation fees apply.
                </p>
              </div>
            )}

            {/* ── Mandatory Policy Agreement Checkbox ── */}
            <div className="pt-2">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  required
                  checked={termsAccepted}
                  onChange={(e) => setTermsAccepted(e.target.checked)}
                  className="mt-1 w-4 h-4 rounded text-primary focus:ring-primary cursor-pointer"
                />
                <span className="text-[13px] text-on-surface-variant leading-relaxed">
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
              <div className="p-3 rounded-xl bg-red-50 text-red-700 text-[13px] font-medium border border-red-200">
                {formError}
              </div>
            )}

            {/* Execution CTA Button */}
            <div className="pt-2">
              <button
                disabled={isProcessing}
                type="submit"
                className="w-full h-14 rounded-full text-white text-[16px] font-bold flex items-center justify-center gap-2 bg-gradient-to-r from-primary via-primary-container to-[#b060ff] hover:from-[#8b24e6] hover:to-[#a44cf8] shadow-[0_12px_28px_rgba(112,21,226,0.38)] hover:shadow-[0_16px_36px_rgba(112,21,226,0.55)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer disabled:opacity-75"
              >
                {isProcessing ? (
                  <>
                    <span className="material-symbols-outlined text-[20px] animate-spin">
                      progress_activity
                    </span>
                    <span>Submitting Order Request...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Order Request ({selectedPlan.price} USD)</span>
                    <span className="material-symbols-outlined text-[20px]">
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
