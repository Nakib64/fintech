"use client";

import Image from "next/image";
import Link from "next/link";
import RevealOnScroll from "../RevealOnScroll";
import { Plan } from "../../lib/plans";

interface OrderSummaryProps {
  selectedPlan: Plan;
}

export default function OrderSummary({ selectedPlan }: OrderSummaryProps) {
  const isMonthly = selectedPlan.cycle === "/mo";

  return (
    <div className="flex flex-col gap-6 w-full max-w-full">
      {/* Order Summary Card */}
      <RevealOnScroll variant="right">
        <div className="bg-surface-container-lowest rounded-2xl sm:rounded-[2rem] p-4 sm:p-6 md:p-8 shadow-md border border-outline-variant/30 space-y-5 sm:space-y-6 w-full max-w-full overflow-hidden">
          <div className="flex items-center justify-between gap-2 pb-3 border-b border-outline-variant/20 flex-wrap sm:flex-nowrap">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse shrink-0" />
              <span className="text-[11px] sm:text-[12px] uppercase tracking-widest text-primary font-bold">
                Order Summary
              </span>
            </div>
            <span className="px-2.5 py-1 rounded-full bg-primary-fixed/40 text-on-primary-fixed-variant text-[10px] sm:text-[11px] font-bold shrink-0">
              {isMonthly ? "Monthly Subscription" : "Milestone Project"}
            </span>
          </div>

          {/* Plan Item Detail */}
          <div className="space-y-3">
            <div className="flex items-start justify-between gap-3 sm:gap-4">
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="text-[18px] sm:text-[22px] font-extrabold text-on-surface">
                    {selectedPlan.name}
                  </h3>
                  {selectedPlan.badge && (
                    <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider shrink-0">
                      {selectedPlan.badge}
                    </span>
                  )}
                </div>
                <p className="text-[12px] sm:text-[13px] text-on-surface-variant mt-1 leading-relaxed">
                  {selectedPlan.desc}
                </p>
              </div>
              <div className="text-right shrink-0">
                <span className="text-[22px] sm:text-[28px] font-black text-on-surface tracking-tight block">
                  {selectedPlan.price}
                </span>
                <span className="block text-[11px] sm:text-[12px] text-outline font-semibold">
                  {selectedPlan.cycle} (USD)
                </span>
              </div>
            </div>

            {/* Plan Feature Badges */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1 sm:pt-2">
              {selectedPlan.features.slice(0, 3).map((feat, i) => (
                <span
                  key={i}
                  className="px-2.5 sm:px-3 py-1 rounded-full bg-surface-container-low text-on-surface text-[10px] sm:text-[11px] font-semibold flex items-center gap-1.5"
                >
                  <span className="material-symbols-outlined text-[13px] text-primary">
                    check
                  </span>
                  <span>{feat}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Fulfillment Time Estimate */}
          <div className="rounded-xl bg-surface-container-low p-3 sm:p-3.5 flex items-center justify-between text-[12px] sm:text-[13px] border border-outline-variant/20 gap-2">
            <div className="flex items-center gap-1.5 sm:gap-2 text-on-surface font-semibold min-w-0">
              <span className="material-symbols-outlined text-primary text-[18px] shrink-0">
                schedule
              </span>
              <span className="truncate">Expected Delivery Timeline</span>
            </div>
            <span className="text-primary font-bold shrink-0">
              {isMonthly ? "Weekly Sprints" : "2 – 5 Days"}
            </span>
          </div>

          {/* Transparent Mathematical Breakdown */}
          <div className="bg-surface-container-low rounded-xl sm:rounded-2xl p-3.5 sm:p-4 space-y-2.5 border border-outline-variant/20 text-[13px] sm:text-[14px]">
            <div className="flex justify-between text-on-surface-variant">
              <span>Selected Package Subtotal</span>
              <span className="font-semibold text-on-surface">{selectedPlan.price} USD</span>
            </div>
            <div className="flex justify-between text-on-surface-variant">
              <span>Payment Processing Fee</span>
              <span className="text-emerald-600 font-semibold">$0.00 (Waived)</span>
            </div>
            <div className="flex justify-between text-on-surface-variant">
              <span>Applicable Sales Tax</span>
              <span>$0.00 USD</span>
            </div>
            <div className="pt-2.5 sm:pt-3 border-t border-outline-variant/30 flex justify-between items-baseline text-[16px] sm:text-[18px] font-bold text-on-surface">
              <span>Total Due Today</span>
              <div className="text-right">
                <span className="text-[22px] sm:text-[26px] font-black text-primary">
                  {selectedPlan.price}
                </span>
                <span className="text-[12px] sm:text-[13px] text-on-surface-variant font-medium ml-1">
                  USD
                </span>
              </div>
            </div>
          </div>

          {/* Legal LLC Assurance Badge */}
          <div className="rounded-xl sm:rounded-2xl bg-primary-fixed/25 p-3.5 sm:p-4 flex items-start gap-2.5 sm:gap-3 border border-primary/20">
            <span className="material-symbols-outlined text-primary text-[20px] sm:text-[22px] shrink-0 mt-0.5">
              verified_user
            </span>
            <p className="text-[12px] sm:text-[12.5px] text-on-primary-fixed-variant leading-relaxed">
              Backed by our 14-day evaluation guarantee. 100% intellectual property ownership of all final masters and source files upon payment.
            </p>
          </div>
        </div>
      </RevealOnScroll>

      {/* Security & Compliance Architecture */}
      <RevealOnScroll variant="right" delay={150}>
        <div className="bg-surface-container-low rounded-2xl sm:rounded-[2rem] p-4 sm:p-6 shadow-sm border border-outline-variant/30 space-y-3.5 sm:space-y-4 w-full max-w-full overflow-hidden">
          <span className="text-[11px] sm:text-[12px] uppercase tracking-wider font-bold text-on-surface block">
            Payment Security &amp; Compliance
          </span>
          <div className="grid grid-cols-2 gap-2.5 sm:gap-4">
            <div className="p-3 sm:p-4 bg-surface-container-lowest rounded-xl border border-outline-variant/20">
              <div className="flex items-center gap-1.5 text-primary mb-1">
                <span className="material-symbols-outlined text-[16px] sm:text-[18px]">
                  security
                </span>
                <span className="text-[11px] sm:text-[12px] font-bold">256-Bit SSL</span>
              </div>
              <p className="text-[11px] sm:text-[12px] text-outline">
                Encrypted checkout
              </p>
            </div>
            <div className="p-3 sm:p-4 bg-surface-container-lowest rounded-xl border border-outline-variant/20">
              <div className="flex items-center gap-1.5 text-primary mb-1">
                <span className="material-symbols-outlined text-[16px] sm:text-[18px]">
                  shield
                </span>
                <span className="text-[11px] sm:text-[12px] font-bold">PCI Compliant</span>
              </div>
              <p className="text-[11px] sm:text-[12px] text-outline">
                Tokenized processing
              </p>
            </div>
          </div>

          {/* Direct Compliance Links to Dedicated Pages */}
          <div className="pt-2 border-t border-outline-variant/20 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-on-surface-variant text-[11.5px] sm:text-[12.5px]">
            <Link
              className="text-primary hover:underline font-semibold"
              href="/terms"
              target="_blank"
            >
              Terms ↗
            </Link>
            <span className="text-outline">•</span>
            <Link
              className="text-primary hover:underline font-semibold"
              href="/privacy"
              target="_blank"
            >
              Privacy ↗
            </Link>
            <span className="text-outline">•</span>
            <Link
              className="text-primary hover:underline font-semibold"
              href="/refund-policy"
              target="_blank"
            >
              Refunds ↗
            </Link>
            <span className="text-outline">•</span>
            <Link
              className="text-primary hover:underline font-semibold"
              href="/fulfillment-policy"
              target="_blank"
            >
              Fulfillment ↗
            </Link>
          </div>
        </div>
      </RevealOnScroll>

      {/* Support Guarantee Card */}
      <RevealOnScroll variant="right" delay={250}>
        <div className="bg-surface-container-lowest rounded-2xl sm:rounded-[2rem] p-4 sm:p-5 shadow-sm border border-outline-variant/30 flex items-start sm:items-center gap-3 sm:gap-4 w-full max-w-full overflow-hidden">
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5 sm:mt-0">
            <span className="material-symbols-outlined text-[20px] sm:text-[22px]">
              support_agent
            </span>
          </div>
          <div className="space-y-0.5 text-[12px] sm:text-[13px] min-w-0 flex-1">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-bold text-on-surface">
                Dedicated Creative Producer
              </span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
            </div>
            <p className="text-outline text-[11px] sm:text-[12px]">
              Assigned within 24 business hours to guide your project kickoff.
            </p>
          </div>
        </div>
      </RevealOnScroll>
    </div>
  );
}
