"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ALL_PLANS, getPlanByNameOrId, Plan } from "../../lib/plans";
import { PayoneerLogo, VisaLogo, MastercardLogo } from "../PaymentLogos";

export default function CheckoutSuccess() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderId") || `ASH-${Math.floor(10000 + Math.random() * 90000)}`;
  const planParam = searchParams.get("plan") || "Video Editing - Professional";
  const priceParam = searchParams.get("price") || "$100";
  const cycleParam = searchParams.get("cycle") || "/project";
  const emailParam = searchParams.get("email") || "";
  const nameParam = searchParams.get("name") || "Valued Client";
  const countryParam = searchParams.get("country") || "United States";
  const isSimulated = searchParams.get("simulated") === "true";

  const [matchedPlan, setMatchedPlan] = useState<Plan>(() =>
    getPlanByNameOrId(planParam, priceParam)
  );
  const [emailStatus, setEmailStatus] = useState<"sending" | "sent" | "error">("sending");
  const confirmedRef = useRef(false);

  useEffect(() => {
    const plan = getPlanByNameOrId(planParam, priceParam);
    setMatchedPlan(plan);

    // Call confirm endpoint to trigger purchase confirmation email if not yet triggered
    if (!confirmedRef.current && emailParam) {
      confirmedRef.current = true;
      fetch("/api/checkout/confirm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          orderId,
          fullName: nameParam,
          email: emailParam,
          country: countryParam,
          planName: plan.name,
          planPrice: plan.price,
          planCycle: plan.cycle || cycleParam,
          paymentMethod: "payoneer",
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            setEmailStatus("sent");
            if (data.plan) {
              setMatchedPlan(data.plan);
            }
          } else {
            setEmailStatus("error");
          }
        })
        .catch(() => setEmailStatus("error"));
    } else {
      setEmailStatus("sent");
    }
  }, [orderId, planParam, priceParam, cycleParam, emailParam, nameParam, countryParam]);

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="w-full max-w-[860px] mx-auto px-4 sm:px-6 py-10 md:py-16">
      {/* ── Top Header & Status ── */}
      <div className="text-center space-y-4 mb-8 sm:mb-10 animate-fade-in">
        <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-emerald-500/10 border-2 border-emerald-500/30 text-emerald-500 shadow-[0_0_30px_rgba(16,185,129,0.2)] mb-2">
          <span className="material-symbols-outlined text-[36px] sm:text-[44px]">
            check_circle
          </span>
        </div>

        <div className="inline-block px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[11px] sm:text-[12px] font-bold uppercase tracking-wider">
          Payment Successful &amp; Package Activated
        </div>

        <h1 className="text-[28px] sm:text-[38px] md:text-[44px] font-extrabold tracking-tight text-on-surface leading-tight">
          Thank You, {nameParam}!
        </h1>

        <p className="text-[14px] sm:text-[16px] text-on-surface-variant max-w-xl mx-auto leading-relaxed">
          Your order has been settled via{" "}
          <strong className="text-on-surface">Payoneer Checkout</strong>. We have
          dispatched your official payment receipt and onboarding instructions to{" "}
          <strong className="text-primary underline">{emailParam || "your email"}</strong>.
        </p>
      </div>

      {/* ── Order Summary & Receipt Card ── */}
      <div className="bg-surface-container-lowest rounded-xl sm:rounded-2xl border border-outline-variant/30 shadow-[0_16px_40px_-8px_rgba(27,11,56,0.08)] p-5 sm:p-8 space-y-6">
        {/* Receipt Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-outline-variant/20">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-outline">
              Commercial Order Reference
            </span>
            <div className="text-[20px] sm:text-[24px] font-black text-on-surface tracking-tight">
              {orderId}
            </div>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-auto">
            <button
              onClick={handlePrint}
              type="button"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-outline-variant/30 hover:border-primary/40 text-[12px] sm:text-[13px] font-bold text-on-surface hover:text-primary transition-colors cursor-pointer bg-surface-container-low"
            >
              <span className="material-symbols-outlined text-[16px]">print</span>
              <span>Print Receipt</span>
            </button>
            <div className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 text-[11px] font-bold uppercase tracking-wider">
              Paid &bull; Settled
            </div>
          </div>
        </div>

        {/* Breakdown Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[13.5px]">
          <div className="p-4 rounded-lg sm:rounded-xl bg-surface-container-low/60 border border-outline-variant/20 space-y-1">
            <span className="text-[11px] font-bold uppercase tracking-wider text-outline block">
              Purchased Package
            </span>
            <span className="font-extrabold text-[16px] text-on-surface block">
              {matchedPlan.name}
            </span>
            <span className="text-[12px] text-on-surface-variant block">
              {matchedPlan.desc}
            </span>
          </div>

          <div className="p-4 rounded-lg sm:rounded-xl bg-surface-container-low/60 border border-outline-variant/20 space-y-1">
            <span className="text-[11px] font-bold uppercase tracking-wider text-outline block">
              Amount Paid (USD)
            </span>
            <div className="flex items-baseline gap-1.5">
              <span className="font-black text-[22px] text-primary">
                {matchedPlan.price}
              </span>
              <span className="text-[12px] text-on-surface-variant font-medium">
                USD {matchedPlan.cycle}
              </span>
            </div>
            <span className="text-[11px] text-emerald-600 font-semibold block">
              Encrypted Settlement Confirmed
            </span>
          </div>

          <div className="p-4 rounded-lg sm:rounded-xl bg-surface-container-low/60 border border-outline-variant/20 space-y-1">
            <span className="text-[11px] font-bold uppercase tracking-wider text-outline block">
              Payment Rail
            </span>
            <div className="flex items-center gap-2 pt-0.5">
              <PayoneerLogo className="h-4 w-auto text-on-surface" />
              <span className="text-on-surface font-semibold text-[13px]">
                Payoneer Checkout
              </span>
            </div>
            <span className="text-[11px] text-outline block">
              3D Secure Tokenized Settlement
            </span>
          </div>

          <div className="p-4 rounded-lg sm:rounded-xl bg-surface-container-low/60 border border-outline-variant/20 space-y-1">
            <span className="text-[11px] font-bold uppercase tracking-wider text-outline block">
              Date &amp; Destination
            </span>
            <span className="font-semibold text-on-surface block">
              {currentDate}
            </span>
            <span className="text-[12px] text-on-surface-variant block truncate">
              {emailParam} ({countryParam})
            </span>
          </div>
        </div>

        {/* ── Package Deliverables Included ── */}
        <div className="pt-2">
          <h3 className="text-[14px] font-bold uppercase tracking-wider text-on-surface mb-3 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-[18px]">
              inventory_2
            </span>
            <span>Included in Your Production Plan</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {matchedPlan.features.map((feat, i) => (
              <div
                key={i}
                className="flex items-start gap-2 p-2.5 rounded-lg bg-surface-container-low/40 border border-outline-variant/20 text-[12.5px] text-on-surface-variant"
              >
                <span className="material-symbols-outlined text-primary text-[16px] shrink-0 mt-0.5">
                  check_circle
                </span>
                <span className="font-medium text-on-surface">{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Onboarding Next Steps Timeline ── */}
        <div className="pt-4 border-t border-outline-variant/20">
          <h3 className="text-[14px] font-bold uppercase tracking-wider text-on-surface mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-[18px]">
              rocket_launch
            </span>
            <span>Production Onboarding: Next Steps</span>
          </h3>

          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-surface-container-low border border-outline-variant/20">
              <div className="w-7 h-7 rounded-full bg-primary text-white flex items-center justify-center text-[12px] font-bold shrink-0">
                1
              </div>
              <div className="text-[13px] leading-relaxed">
                <span className="font-bold text-on-surface block">
                  Check Your Email for Confirmation
                </span>
                <span className="text-on-surface-variant">
                  We sent an official confirmation and tax invoice to{" "}
                  <strong>{emailParam || "your email"}</strong>. (Please verify your spam folder if it doesn&apos;t appear in 2 minutes).
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-surface-container-low border border-outline-variant/20">
              <div className="w-7 h-7 rounded-full bg-primary text-white flex items-center justify-center text-[12px] font-bold shrink-0">
                2
              </div>
              <div className="text-[13px] leading-relaxed">
                <span className="font-bold text-on-surface block">
                  Private Workspace Intake (Within 2-4 Hours)
                </span>
                <span className="text-on-surface-variant">
                  Your designated ASHIVOX producer will email you a private Google Drive and Frame.io upload folder to collect your raw files, brand guidelines, and creative brief.
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-surface-container-low border border-outline-variant/20">
              <div className="w-7 h-7 rounded-full bg-primary text-white flex items-center justify-center text-[12px] font-bold shrink-0">
                3
              </div>
              <div className="text-[13px] leading-relaxed">
                <span className="font-bold text-on-surface block">
                  Sprint Kickoff &amp; First Cut Delivery
                </span>
                <span className="text-on-surface-variant">
                  Editing starts immediately upon asset delivery. Your first cut draft will be delivered with collaborative revision rounds.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Entity & Support Banner ── */}
        <div className="p-4 rounded-xl bg-surface-container-low text-[12px] text-on-surface-variant flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border border-outline-variant/20">
          <div>
            <strong className="text-on-surface">Contracting Entity: ASHIVOX LLC</strong> (New Mexico ID: 0008132694)<br />
            1209 Mountain Road PL NE, Ste R, Albuquerque, NM 87110, USA
          </div>
          <div className="text-left sm:text-right shrink-0">
            Direct Support: <a href="mailto:support@ashivox.net" className="text-primary font-bold underline">support@ashivox.net</a><br />
            Tel: +1 (505) 528-9302
          </div>
        </div>

        {/* ── Action Buttons ── */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            href="/"
            className="w-full sm:w-auto min-h-[46px] px-6 py-2.5 rounded-full bg-surface-container-low hover:bg-surface-container text-on-surface text-[14px] font-bold text-center border border-outline-variant/30 transition-colors"
          >
            Return to Homepage
          </Link>
          <Link
            href="/contact"
            className="w-full sm:w-auto min-h-[46px] px-6 py-2.5 rounded-full bg-gradient-to-r from-primary to-[#b060ff] hover:from-[#8b24e6] hover:to-[#a44cf8] text-white text-[14px] font-bold text-center shadow-md transition-all"
          >
            Submit Creative Brief Now
          </Link>
        </div>
      </div>
    </div>
  );
}

