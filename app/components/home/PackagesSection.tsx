"use client";

import Link from "next/link";
import { useState } from "react";
import RevealOnScroll from "../RevealOnScroll";

const packages = [
  {
    id: "video-editing",
    icon: "movie",
    iconBg: "bg-primary-fixed",
    iconColor: "text-primary",
    badge: "Post-Production",
    title: "Video Editing",
    desc: "Fast, high-retention videos for YouTube, Reels, and TikTok.",
    price: "$1,499",
    cycle: "/mo",
    features: [
      "8 Long-form or 20 Shorts",
      "Licensed sound & music",
      "Motion graphics & color grade",
      "48-hour delivery & 3 revisions",
      "Full 100% copyright ownership",
    ],
    cta: "Purchase",
    featured: false,
  },
  {
    id: "content-writing",
    icon: "edit_note",
    iconBg: "bg-primary text-white",
    iconColor: "text-white",
    badge: "⭐ Most Popular",
    title: "Content Writing",
    desc: "Viral video scripts and copy to grow your brand and sales.",
    price: "$999",
    cycle: "/mo",
    features: [
      "12 High-retention video scripts",
      "4 Deep-dive SEO articles",
      "Weekly newsletters & ad copy",
      "Full research & fact-checking",
      "Dedicated script supervisor",
    ],
    cta: "Purchase",
    featured: true,
  },
  {
    id: "social-media",
    icon: "trending_up",
    iconBg: "bg-tertiary-fixed",
    iconColor: "text-tertiary",
    badge: "Social Growth",
    title: "Social Media",
    desc: "Full management across Instagram, TikTok, X, and YouTube.",
    price: "$1,899",
    cycle: "/mo",
    features: [
      "Multi-channel growth strategy",
      "Weekly scheduling & posting",
      "Daily community & DM replies",
      "Monthly performance reports",
      "Account director assigned",
    ],
    cta: "Purchase",
    featured: false,
  },
];

export default function PackagesSection() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "milestone">(
    "monthly"
  );

  return (
    <section className="w-full bg-background py-space-xl relative" id="packages">
      {/* Subtle Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-[1440px] mx-auto px-5 md:px-margin flex flex-col gap-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-2">
            <RevealOnScroll variant="up">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 text-primary text-[12px] font-bold uppercase tracking-wider mb-1 self-start">
                <span>Transparent Retainers</span>
              </div>
            </RevealOnScroll>
            <RevealOnScroll variant="up" delay={80}>
              <h2 className="text-[34px] sm:text-[42px] leading-[1.15] font-extrabold text-on-surface tracking-tight">
                Simple, Predictable Plans
              </h2>
            </RevealOnScroll>
            <RevealOnScroll variant="up" delay={160}>
              <p className="text-[15px] leading-[24px] text-on-surface-variant max-w-xl">
                Choose a structured plan with fast 48-hour turnarounds. Pause or cancel anytime with zero hidden fees.
              </p>
            </RevealOnScroll>
          </div>

          <RevealOnScroll variant="fade" delay={200}>
            <div className="inline-flex items-center gap-1.5 bg-surface-container-low p-1.5 rounded-full border border-outline-variant/30 shadow-inner self-start">
              <button
                type="button"
                onClick={() => setBillingCycle("monthly")}
                className={`px-5 py-2 rounded-full text-[13px] font-bold transition-all cursor-pointer ${billingCycle === "monthly"
                  ? "bg-gradient-to-r from-primary to-primary-container text-white shadow-md shadow-primary/30"
                  : "text-on-surface-variant hover:text-on-surface"
                  }`}
              >
                Monthly Retainer
              </button>
              <button
                type="button"
                onClick={() => setBillingCycle("milestone")}
                className={`px-5 py-2 rounded-full text-[13px] font-bold transition-all cursor-pointer ${billingCycle === "milestone"
                  ? "bg-gradient-to-r from-primary to-primary-container text-white shadow-md shadow-primary/30"
                  : "text-on-surface-variant hover:text-on-surface"
                  }`}
              >
                One-Off Milestone
              </button>
            </div>
          </RevealOnScroll>
        </div>

        {/* Package Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {packages.map((pkg, i) => {
            const displayPrice =
              billingCycle === "milestone"
                ? pkg.id === "video-editing"
                  ? "$2,199"
                  : pkg.id === "content-writing"
                    ? "$1,450"
                    : "$2,750"
                : pkg.price;

            const displayCycle =
              billingCycle === "milestone" ? " / sprint" : " / month";

            return (
              <RevealOnScroll key={pkg.title} variant="up" delay={i * 120} className="h-full">
                {pkg.featured ? (
                  /* Featured Card with Radiant Gradient Border */
                  <div className="h-full p-[2.5px] rounded-[2.25rem] bg-gradient-to-b from-[#b060ff] via-[#8525e8] to-[#5914a8] shadow-[0_20px_50px_rgba(112,21,226,0.28)] hover:shadow-[0_24px_60px_rgba(112,21,226,0.38)] transition-all duration-300 transform hover:-translate-y-2 flex flex-col relative group">
                    {/* Floating Top Badge */}
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-primary to-[#b060ff] text-white text-[11px] uppercase font-extrabold tracking-wider shadow-lg flex items-center gap-1.5 whitespace-nowrap">
                      <span>{pkg.badge}</span>
                    </div>

                    <div className="h-full rounded-[2.1rem] bg-gradient-to-b from-surface-container-lowest via-surface-container-lowest to-surface-container-low/40 p-8 flex flex-col justify-between">
                      <div>
                        {/* Header Row */}
                        <div className="flex items-center justify-between mb-5">
                          <div className="w-13 h-13 rounded-2xl bg-gradient-to-tr from-primary to-primary-container text-white flex items-center justify-center shadow-md shadow-primary/30">
                            <span className="material-symbols-outlined text-[28px]">
                              {pkg.icon}
                            </span>
                          </div>
                          <span className="text-[11px] uppercase tracking-widest text-primary font-extrabold px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                            Top Recommendation
                          </span>
                        </div>

                        <h3 className="text-[26px] font-extrabold text-on-surface">
                          {pkg.title}
                        </h3>
                        <p className="text-[13px] text-on-surface-variant mt-1.5 leading-relaxed">
                          {pkg.desc}
                        </p>

                        {/* Price Tag */}
                        <div className="bg-primary-fixed/25 border border-primary/20 rounded-2xl p-4 my-6">
                          <div className="flex items-baseline gap-1">
                            <span className="text-[40px] font-black text-on-surface tracking-tight">
                              {displayPrice}
                            </span>
                            <span className="text-[14px] text-on-surface-variant font-semibold">
                              {displayCycle}
                            </span>
                          </div>
                          <p className="text-[11px] text-primary font-semibold mt-0.5">
                            Full commercial rights • Dedicated producer
                          </p>
                        </div>

                        {/* Features List */}
                        <ul className="space-y-3 text-[13px] text-on-surface">
                          {pkg.features.map((feature) => (
                            <li key={feature} className="flex items-center gap-2.5">
                              <span className="w-5 h-5 rounded-full bg-primary/15 text-primary flex items-center justify-center shrink-0">
                                <span className="material-symbols-outlined text-[15px] font-bold">
                                  check
                                </span>
                              </span>
                              <span className="font-medium">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* CTA Button */}
                      <div className="mt-8 pt-4 border-t border-outline-variant/30">
                        <Link
                          href={`/checkout?plan=${encodeURIComponent(
                            pkg.title
                          )}&price=${encodeURIComponent(displayPrice + displayCycle)}`}
                          className="w-full py-4 rounded-full text-white text-[15px] font-extrabold bg-gradient-to-r from-primary via-primary-container to-[#b060ff] hover:from-[#8b24e6] hover:to-[#a44cf8] shadow-[0_10px_28px_rgba(138,63,252,0.45)] hover:shadow-[0_12px_36px_rgba(138,63,252,0.65)] transition-all flex items-center justify-center gap-2 transform active:scale-95 cursor-pointer"
                        >
                          <span>{pkg.cta}</span>
                          <span className="material-symbols-outlined text-[19px] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                            north_east
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Standard Card with Elegant Glass Hover Lift */
                  <div className="h-full rounded-[2.25rem] p-8 bg-surface-container-lowest border border-outline-variant/30 hover:border-primary/40 shadow-[0_8px_30px_rgba(27,11,56,0.06)] hover:shadow-[0_20px_45px_rgba(112,21,226,0.18)] transition-all duration-300 transform hover:-translate-y-2 flex flex-col justify-between group">
                    <div>
                      {/* Header Row */}
                      <div className="flex items-center justify-between mb-5">
                        <div
                          className={`w-13 h-13 rounded-2xl ${pkg.iconBg} flex items-center justify-center shadow-sm`}
                        >
                          <span
                            className={`material-symbols-outlined ${pkg.iconColor} text-[28px]`}
                          >
                            {pkg.icon}
                          </span>
                        </div>
                        <span className="text-[11px] uppercase tracking-widest text-primary font-bold px-3 py-1 rounded-full bg-surface-container-low border border-outline-variant/30">
                          {pkg.badge}
                        </span>
                      </div>

                      <h3 className="text-[26px] font-extrabold text-on-surface">
                        {pkg.title}
                      </h3>
                      <p className="text-[13px] text-on-surface-variant mt-1.5 leading-relaxed">
                        {pkg.desc}
                      </p>

                      {/* Price Tag */}
                      <div className="bg-surface-container-low border border-outline-variant/20 rounded-2xl p-4 my-6">
                        <div className="flex items-baseline gap-1">
                          <span className="text-[40px] font-black text-on-surface tracking-tight">
                            {displayPrice}
                          </span>
                          <span className="text-[14px] text-on-surface-variant font-semibold">
                            {displayCycle}
                          </span>
                        </div>
                        <p className="text-[11px] text-on-surface-variant mt-0.5">
                          Standard SLA • Cancel anytime
                        </p>
                      </div>

                      {/* Features List */}
                      <ul className="space-y-3 text-[13px] text-on-surface">
                        {pkg.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2.5">
                            <span className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                              <span className="material-symbols-outlined text-[15px] font-bold">
                                check
                              </span>
                            </span>
                            <span className="font-medium">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA Button */}
                    <div className="mt-8 pt-4 border-t border-outline-variant/20">
                      <Link
                        href={`/checkout?plan=${encodeURIComponent(
                          pkg.title
                        )}&price=${encodeURIComponent(displayPrice + displayCycle)}`}
                        className="w-full py-4 rounded-full text-white text-[15px] font-bold bg-primary hover:bg-primary-container shadow-[0_6px_20px_rgba(112,21,226,0.3)] hover:shadow-[0_8px_24px_rgba(112,21,226,0.45)] transition-all flex items-center justify-center gap-2 transform active:scale-95 cursor-pointer"
                      >
                        <span>{pkg.cta}</span>
                        <span className="material-symbols-outlined text-[19px] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                          north_east
                        </span>
                      </Link>
                    </div>
                  </div>
                )}
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
