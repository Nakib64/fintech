"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import RevealOnScroll from "../RevealOnScroll";
import { Plan } from "../../lib/plans";
import LottieDoneModal from "../LottieDoneModal";

interface CheckoutFormProps {
  selectedPlan: Plan;
  onPlanChange: (plan: Plan) => void;
  allPlans: Plan[];
}

export default function CheckoutForm({
  selectedPlan,
  onPlanChange,
  allPlans,
}: CheckoutFormProps) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Form Fields State
  const [fullName, setFullName] = useState("Alex Vance");
  const [email, setEmail] = useState("alex@vortexdigital.media");
  const [cardNumber, setCardNumber] = useState("4242 •••• •••• 4242");
  const [expiry, setExpiry] = useState("12 / 28");
  const [cvc, setCvc] = useState("382");
  const [ein, setEin] = useState("");
  const [address, setAddress] = useState(
    "1201 N Orange St, Suite 700, Wilmington, DE 19801"
  );

  // Processing & Success States
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

  const handleCheckout = () => {
    setIsProcessing(true);
    // Generate unique order ID
    const randomNum = Math.floor(10000 + Math.random() * 90000);
    setOrderId(`VDM-${randomNum}`);

    setTimeout(() => {
      setIsProcessing(false);
      setShowModal(true);
    }, 900);
  };

  return (
    <div className="flex flex-col gap-6">
      {/* ── 1. Plan Selector Dropdown Card ── */}
      <RevealOnScroll variant="up" className="relative z-30">
        <div className="bg-surface-container-low rounded-[1.75rem] p-6 shadow-sm border border-outline-variant/30 space-y-3 relative z-30">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px] text-primary">
                tune
              </span>
              <span className="text-[12px] font-bold uppercase tracking-wider text-on-surface-variant">
                Selected Plan
              </span>
            </div>
            <span className="text-[11px] text-primary font-bold bg-primary/10 px-2.5 py-0.5 rounded-full border border-primary/20">
              Change Anytime
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
                    {selectedPlan.cycle}
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
                  Available Production Plans
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
                              {plan.cycle}
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

     

      {/* ── 3. Payment Details & Billing Form ── */}
      <RevealOnScroll variant="up" delay={100}>
        <div className="bg-surface-container-low rounded-[1.75rem] p-6 sm:p-8 shadow-sm space-y-6 border border-outline-variant/30">
          <div className="flex items-center justify-between pb-2 border-b border-outline-variant/20">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-primary-fixed flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-[20px]">
                  credit_card
                </span>
              </div>
              <h2 className="text-[18px] sm:text-[20px] font-bold text-on-surface">
                Payment Details
              </h2>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[11px] font-semibold text-on-surface-variant">
                Stripe Test Environment
              </span>
            </div>
          </div>

          {/* Form Fields */}
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[13px] font-semibold text-on-surface-variant mb-1.5">
                  Full Name
                </label>
                <input
                  className="w-full h-12 px-4 rounded-full bg-surface-container-lowest text-[14px] text-on-surface focus:outline-none focus:ring-2 focus:ring-primary shadow-sm border border-outline-variant/30"
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-[13px] font-semibold text-on-surface-variant mb-1.5">
                  Work Email
                </label>
                <input
                  className="w-full h-12 px-4 rounded-full bg-surface-container-lowest text-[14px] text-on-surface focus:outline-none focus:ring-2 focus:ring-primary shadow-sm border border-outline-variant/30"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label className="block text-[13px] font-semibold text-on-surface-variant mb-1.5">
                Card Number
              </label>
              <div className="relative flex items-center">
                <span className="absolute left-4 material-symbols-outlined text-outline text-[20px]">
                  credit_card
                </span>
                <input
                  className="w-full h-12 pl-12 pr-28 rounded-full bg-surface-container-lowest text-[14px] font-mono text-on-surface focus:outline-none focus:ring-2 focus:ring-primary shadow-sm border border-outline-variant/30"
                  placeholder="4242 4242 4242 4242"
                  type="text"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                />
                <div className="absolute right-4 flex items-center gap-1.5">
                  <span className="px-2.5 py-0.5 rounded-full bg-primary-fixed text-[10px] text-on-primary-fixed font-bold uppercase tracking-wider">
                    Demo Card
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[13px] font-semibold text-on-surface-variant mb-1.5">
                  Expiration Date
                </label>
                <div className="relative flex items-center">
                  <span className="absolute left-4 material-symbols-outlined text-outline text-[20px]">
                    calendar_today
                  </span>
                  <input
                    className="w-full h-12 pl-12 pr-4 rounded-full bg-surface-container-lowest text-[14px] font-mono text-on-surface focus:outline-none focus:ring-2 focus:ring-primary shadow-sm border border-outline-variant/30"
                    placeholder="MM / YY"
                    type="text"
                    value={expiry}
                    onChange={(e) => setExpiry(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <label className="block text-[13px] font-semibold text-on-surface-variant mb-1.5">
                  CVC / CVV
                </label>
                <div className="relative flex items-center">
                  <span className="absolute left-4 material-symbols-outlined text-outline text-[20px]">
                    lock
                  </span>
                  <input
                    className="w-full h-12 pl-12 pr-4 rounded-full bg-surface-container-lowest text-[14px] font-mono text-on-surface focus:outline-none focus:ring-2 focus:ring-primary shadow-sm border border-outline-variant/30"
                    placeholder="123"
                    type="text"
                    value={cvc}
                    onChange={(e) => setCvc(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="pt-2 space-y-4">
              <div>
                <label className="block text-[13px] font-semibold text-on-surface-variant mb-1.5">
                  Company Tax ID (EIN - Optional)
                </label>
                <div className="relative flex items-center">
                  <span className="absolute left-4 material-symbols-outlined text-outline text-[20px]">
                    corporate_fare
                  </span>
                  <input
                    className="w-full h-12 pl-12 pr-4 rounded-full bg-surface-container-lowest text-[14px] text-on-surface focus:outline-none focus:ring-2 focus:ring-primary shadow-sm border border-outline-variant/30 placeholder:text-outline/70"
                    placeholder="e.g. 12-3456789 (Optional)"
                    type="text"
                    value={ein}
                    onChange={(e) => setEin(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <label className="block text-[13px] font-semibold text-on-surface-variant mb-1.5">
                  Billing Address
                </label>
                <div className="relative flex items-center">
                  <span className="absolute left-4 material-symbols-outlined text-outline text-[20px]">
                    pin_drop
                  </span>
                  <input
                    className="w-full h-12 pl-12 pr-4 rounded-full bg-surface-container-lowest text-[14px] text-on-surface focus:outline-none focus:ring-2 focus:ring-primary shadow-sm border border-outline-variant/30"
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Execution Button */}
          <div className="pt-2">
            <button
              onClick={handleCheckout}
              disabled={isProcessing}
              className="w-full h-14 rounded-full text-white text-[16px] font-bold flex items-center justify-center gap-2 bg-gradient-to-r from-primary via-primary-container to-[#b060ff] hover:from-[#8b24e6] hover:to-[#a44cf8] shadow-[0_12px_28px_rgba(112,21,226,0.38)] hover:shadow-[0_16px_36px_rgba(112,21,226,0.55)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer disabled:opacity-75"
              type="button"
            >
              {isProcessing ? (
                <>
                  <span className="material-symbols-outlined text-[20px] animate-spin">
                    progress_activity
                  </span>
                  <span>Securing Settlement...</span>
                </>
              ) : (
                <>
                  <span>Purchase ({selectedPlan.price})</span>
                  <span className="material-symbols-outlined text-[22px]">
                    arrow_forward
                  </span>
                </>
              )}
            </button>
          </div>
        </div>
      </RevealOnScroll>

      {/* ── 4. PayPal & Wire Transfer Alternative ── */}
      <RevealOnScroll variant="up" delay={150}>
        <div className="bg-surface-container-high rounded-[1.75rem] p-6 shadow-sm flex items-start gap-4 border border-outline-variant/30">
          <div className="w-10 h-10 rounded-full bg-tertiary-fixed flex items-center justify-center text-on-tertiary-fixed shrink-0 mt-0.5">
            <span className="material-symbols-outlined text-[20px]">
              account_balance
            </span>
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-[15px] font-bold text-on-surface">
                PayPal &amp; Bank Wire
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-surface-container-lowest text-outline text-[10px] tracking-wider uppercase font-semibold">
                Available
              </span>
            </div>
            <p className="text-[13px] text-on-surface-variant leading-relaxed">
              We also accept PayPal and corporate bank wire transfers. Delaware LLC invoices issued instantly.
            </p>
          </div>
        </div>
      </RevealOnScroll>

      {/* ── 5. SIMPLE LOTTIE DONE MODAL ── */}
      <LottieDoneModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="Done!"
        subtitle="Purchase Successful"
      />
    </div>
  );
}
