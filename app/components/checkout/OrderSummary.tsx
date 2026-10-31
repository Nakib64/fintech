"use client";

import Image from "next/image";
import Link from "next/link";
import RevealOnScroll from "../RevealOnScroll";
import { Plan } from "../../lib/plans";

interface OrderSummaryProps {
  selectedPlan: Plan;
}

export default function OrderSummary({ selectedPlan }: OrderSummaryProps) {
  return (
    <div className="flex flex-col gap-6">
      {/* Order Summary Card */}
      <RevealOnScroll variant="right">
        <div className="bg-surface-container-lowest rounded-[2rem] p-6 sm:p-8 shadow-md border border-outline-variant/30 space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-outline-variant/20">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
              <span className="text-[12px] uppercase tracking-widest text-primary font-bold">
                Order Summary
              </span>
            </div>
            <span className="px-3 py-1 rounded-full bg-primary-fixed/40 text-on-primary-fixed-variant text-[11px] font-bold">
              {selectedPlan.cycle === "/mo" ? "Monthly Billing" : "Milestone Sprint"}
            </span>
          </div>

          {/* Plan Item Detail */}
          <div className="space-y-3">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-[22px] font-extrabold text-on-surface">
                    {selectedPlan.name}
                  </h3>
                  {selectedPlan.badge && (
                    <span className="px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider">
                      {selectedPlan.badge}
                    </span>
                  )}
                </div>
                <p className="text-[13px] text-on-surface-variant mt-1 leading-relaxed">
                  {selectedPlan.desc}
                </p>
              </div>
              <div className="text-right shrink-0">
                <span className="text-[30px] font-black text-on-surface tracking-tight">
                  {selectedPlan.price}
                </span>
                <span className="block text-[13px] text-outline font-semibold">
                  {selectedPlan.cycle}
                </span>
              </div>
            </div>

            {/* Dynamic Plan Feature Badges */}
            <div className="flex flex-wrap gap-2 pt-2">
              {selectedPlan.features.slice(0, 3).map((feat, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-full bg-surface-container-low text-on-surface text-[11px] font-semibold flex items-center gap-1.5"
                >
                  <span className="material-symbols-outlined text-[13px] text-primary">
                    check
                  </span>
                  <span>{feat}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Mathematical Breakdown */}
          <div className="bg-surface-container-low rounded-2xl p-4 space-y-2.5 border border-outline-variant/20 text-[14px]">
            <div className="flex justify-between text-on-surface-variant">
              <span>Selected Plan Subtotal</span>
              <span className="font-semibold text-on-surface">{selectedPlan.price}</span>
            </div>
            <div className="flex justify-between text-on-surface-variant">
              <span>Institutional Stripe Processing</span>
              <span className="text-emerald-600 font-semibold">$0.00 (Waived)</span>
            </div>
            <div className="flex justify-between text-on-surface-variant">
              <span>Applicable Sales Tax</span>
              <span>$0.00</span>
            </div>
            <div className="pt-3 border-t border-outline-variant/30 flex justify-between items-baseline text-[18px] font-bold text-on-surface">
              <span>Total Due Today</span>
              <div className="text-right">
                <span className="text-[26px] font-black text-primary">
                  {selectedPlan.price}
                </span>
                <span className="text-[12px] text-on-surface-variant font-medium ml-1">
                  USD
                </span>
              </div>
            </div>
          </div>

          {/* Legal LLC Assurance Badge */}
          <div className="rounded-2xl bg-primary-fixed/25 p-4 flex items-start gap-3 border border-primary/20">
            <span className="material-symbols-outlined text-primary text-[22px] shrink-0 mt-0.5">
              verified_user
            </span>
            <p className="text-[12.5px] text-on-primary-fixed-variant leading-relaxed">
              Backed by our 14-day money-back guarantee. You own 100% of all video rights, raw assets, and deliverables upon purchase.
            </p>
          </div>
        </div>
      </RevealOnScroll>

      {/* Security Architecture Blueprint */}
      <RevealOnScroll variant="right" delay={150}>
        <div className="bg-surface-container-low rounded-[2rem] p-6 shadow-sm border border-outline-variant/30 space-y-4">
          <span className="text-[12px] uppercase tracking-wider font-bold text-on-surface block">
            Institutional Guarantee
          </span>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-surface-container-lowest rounded-xl border border-outline-variant/20">
              <div className="flex items-center gap-1.5 text-primary mb-1">
                <span className="material-symbols-outlined text-[18px]">
                  security
                </span>
                <span className="text-[12px] font-bold">256-Bit SSL</span>
              </div>
              <p className="text-[12px] text-outline">
                Encrypted checkout
              </p>
            </div>
            <div className="p-4 bg-surface-container-lowest rounded-xl border border-outline-variant/20">
              <div className="flex items-center gap-1.5 text-primary mb-1">
                <span className="material-symbols-outlined text-[18px]">
                  shield
                </span>
                <span className="text-[12px] font-bold">PCI Compliant</span>
              </div>
              <p className="text-[12px] text-outline">
                Card details never stored
              </p>
            </div>
          </div>

          {/* Compliance Documentation Links */}
          <div className="pt-1 flex flex-wrap items-center justify-between gap-3 text-on-surface-variant text-[13px]">
            <Link
              className="inline-flex items-center gap-1 text-primary hover:underline font-semibold"
              href="/about"
            >
              <span>Service Terms</span>
              <span>↗</span>
            </Link>
            <span className="text-outline">•</span>
            <Link
              className="inline-flex items-center gap-1 text-primary hover:underline font-semibold"
              href="/about"
            >
              <span>Refund Policy</span>
              <span>↗</span>
            </Link>
            <span className="text-outline">•</span>
            <span className="text-outline">ASHIVOX LLC SLA</span>
          </div>
        </div>
      </RevealOnScroll>

      {/* Support Guarantee Card */}
      <RevealOnScroll variant="right" delay={250}>
        <div className="bg-surface-container-lowest rounded-[2rem] p-5 shadow-sm border border-outline-variant/30 flex items-center gap-4">
          <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 border border-primary/20">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXDYjsxrCuKB5-hb65QZkNuwJApC1S9LNB6iVaA9N1flC2d6hd9scXbjS1ae9opUQXC5mxi6ZBpfW0Tibvdx5pKRaDYweHjQ9Pp3IC8cWrJndC6EaCY1qooTu6M38f_FEr8z_CEoHqJduxxQGnM5CbXSGTCX9kN87-OvgII_ZwqyooPQEPZgmabK62Ii_DbbO5_LsERcp3bj2IRNqw9mIAHaQdciFitCcZu8n61c3a"
              alt="Executive Client Success Manager"
              fill
              sizes="48px"
              className="object-cover"
            />
          </div>
          <div className="space-y-0.5">
            <div className="flex items-center gap-2">
              <span className="text-[14px] font-bold text-on-surface">
                Dedicated Producer
              </span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            </div>
            <p className="text-[12px] text-outline">
              Assigned immediately to guide your creative onboarding.
            </p>
          </div>
        </div>
      </RevealOnScroll>
    </div>
  );
}
