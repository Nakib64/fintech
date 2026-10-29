"use client";

import { useState } from "react";
import Link from "next/link";
import RevealOnScroll from "../RevealOnScroll";

type BillingCycle = "retainer" | "milestone";

interface ServicePackage {
  id: string;
  badge: string;
  icon: string;
  title: string;
  desc: string;
  prices: {
    retainer: { price: string; cycle: string; cta: string };
    milestone: { price: string; cycle: string; cta: string };
  };
  features: string[];
  featured?: boolean;
}

const packages: ServicePackage[] = [
  {
    id: "video",
    badge: "Post-Production",
    icon: "movie_edit",
    title: "Video Editing",
    desc: "High-impact video editing for YouTube, Reels, and TikTok.",
    prices: {
      retainer: {
        price: "$1,499",
        cycle: "/mo",
        cta: "Purchase",
      },
      milestone: {
        price: "$2,199",
        cycle: "/sprint",
        cta: "Purchase",
      },
    },
    features: [
      "20 Short-form Reels/Shorts",
      "4 Master YouTube Videos",
      "Sound design & color grading",
      "48-hour turnaround guarantee",
    ],
    featured: false,
  },
  {
    id: "scripting",
    badge: "Writing & Copy",
    icon: "edit_note",
    title: "Content Writing",
    desc: "Viral video scripts and copy to grow your brand and revenue.",
    prices: {
      retainer: {
        price: "$999",
        cycle: "/mo",
        cta: "Purchase",
      },
      milestone: {
        price: "$1,450",
        cycle: "/sprint",
        cta: "Purchase",
      },
    },
    features: [
      "24 Video retention scripts",
      "4 Deep-dive articles",
      "Weekly newsletters & copy",
      "Trend research & hook matrix",
    ],
    featured: true,
  },
  {
    id: "smm",
    badge: "Social Growth",
    icon: "hub",
    title: "Social Media",
    desc: "Complete account management and distribution across channels.",
    prices: {
      retainer: {
        price: "$1,899",
        cycle: "/mo",
        cta: "Purchase",
      },
      milestone: {
        price: "$2,750",
        cycle: "/audit",
        cta: "Purchase",
      },
    },
    features: [
      "Posting to IG, TikTok, X & YouTube",
      "Community engagement & DM replies",
      "Growth audits & analytics",
      "Dedicated creative director",
    ],
    featured: false,
  },
];

export default function ServicesPricing() {
  const [billing, setBilling] = useState<BillingCycle>("retainer");

  return (
    <>
      {/* Immersive Top Banner Bleeding Behind App Shell Header */}
      <section className="relative w-full -mt-20 pt-32 pb-24 md:pb-32 bg-gradient-to-b from-[#180535] via-[#240a4d] to-[#320e6d] text-surface-container-lowest overflow-hidden">
        {/* Atmospheric Ambient Glows */}
        <div className="absolute -top-24 right-1/4 w-96 h-96 bg-primary-container/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-12 w-80 h-80 bg-surface-tint/25 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1440px] mx-auto px-5 md:px-margin relative z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            {/* Subheader Label */}
            <RevealOnScroll variant="up">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md mb-6 shadow-sm border border-white/10">
                <span className="text-[12px] uppercase font-bold text-primary-fixed-dim tracking-wider">
                  Creative Services &amp; Plans
                </span>
              </div>
            </RevealOnScroll>

            <RevealOnScroll variant="up" delay={80}>
              <h1 className="text-[36px] sm:text-[48px] md:text-[56px] leading-[1.1] font-bold text-white tracking-tight mb-6">
                Services &amp; Pricing
              </h1>
            </RevealOnScroll>

            <RevealOnScroll variant="up" delay={160}>
              <p className="text-[16px] md:text-[18px] text-surface-container-high/85 max-w-2xl leading-relaxed mb-10">
                Scale your media engine with predictable production cycles and
                fast 48-hour turnarounds.
              </p>
            </RevealOnScroll>

            {/* Pricing Model Switcher */}
            <RevealOnScroll variant="scale" delay={240}>
              <div className="inline-flex p-1.5 rounded-full bg-[#110427]/80 backdrop-blur-xl border border-white/10 shadow-inner">
                <button
                  type="button"
                  onClick={() => setBilling("retainer")}
                  className={`px-7 py-3 rounded-full text-[14px] font-semibold transition-all duration-300 cursor-pointer ${billing === "retainer"
                      ? "bg-gradient-to-r from-primary to-primary-container text-on-primary shadow-lg shadow-primary/30"
                      : "text-surface-container-high hover:text-white"
                    }`}
                >
                  Monthly
                </button>
                <button
                  type="button"
                  onClick={() => setBilling("milestone")}
                  className={`px-7 py-3 rounded-full text-[14px] font-semibold transition-all duration-300 cursor-pointer ${billing === "milestone"
                      ? "bg-gradient-to-r from-primary to-primary-container text-on-primary shadow-lg shadow-primary/30"
                      : "text-surface-container-high hover:text-white"
                    }`}
                >
                  One-Off
                </button>
              </div>
            </RevealOnScroll>
          </div>
        </div>

        {/* Soft Organic Transition Curve to Crisp Light Surface */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none">
          <svg
            className="relative block w-full h-12 md:h-16 text-surface-container-lowest"
            preserveAspectRatio="none"
            viewBox="0 0 1200 120"
          >
            <path
              d="M0,0 C300,90 900,90 1200,0 L1200,120 L0,120 Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </section>

      {/* Core Service Packages Section */}
      <section className="w-full bg-surface-container-lowest py-16 md:py-24">
        <div className="max-w-[1440px] mx-auto px-5 md:px-margin">
          {/* Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 -mt-16 md:-mt-24 relative z-20 items-stretch">
            {packages.map((pkg, idx) => {
              const currentPricing = pkg.prices[billing];
              return (
                <RevealOnScroll key={pkg.id} variant="up" delay={idx * 120} className="h-full">
                  {pkg.featured ? (
                    /* Featured Card with Radiant Gradient Border */
                    <div className="h-full p-[2.5px] rounded-[2.25rem] bg-gradient-to-b from-[#b060ff] via-[#8525e8] to-[#5914a8] shadow-[0_20px_50px_rgba(112,21,226,0.28)] hover:shadow-[0_24px_60px_rgba(112,21,226,0.38)] transition-all duration-300 transform hover:-translate-y-2 flex flex-col relative group">
                      {/* Floating Top Badge */}
                      <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-primary to-[#b060ff] text-white text-[11px] uppercase font-extrabold tracking-wider shadow-lg flex items-center gap-1.5 whitespace-nowrap">
                        <span>⭐ Most Popular • Best Value</span>
                      </div>

                      <div className="h-full rounded-[2.1rem] bg-gradient-to-b from-surface-container-lowest via-surface-container-lowest to-surface-container-low/40 p-8 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between mb-5">
                            <div className="w-13 h-13 rounded-2xl bg-gradient-to-tr from-primary to-primary-container text-white flex items-center justify-center shadow-md shadow-primary/30">
                              <span className="material-symbols-outlined text-[28px]">
                                {pkg.icon}
                              </span>
                            </div>
                            <span className="text-[11px] uppercase tracking-widest text-primary font-extrabold px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                              {pkg.badge}
                            </span>
                          </div>

                          <h2 className="text-[26px] font-extrabold text-on-surface mb-2">
                            {pkg.title}
                          </h2>
                          <p className="text-[13px] text-on-surface-variant leading-relaxed mb-6">
                            {pkg.desc}
                          </p>

                          {/* Price Tag */}
                          <div className="bg-primary-fixed/25 border border-primary/20 rounded-2xl p-4 mb-6">
                            <div className="flex items-baseline gap-1">
                              <span className="text-[42px] font-black text-on-surface tracking-tight">
                                {currentPricing.price}
                              </span>
                              <span className="text-[14px] text-on-surface-variant font-semibold">
                                {currentPricing.cycle}
                              </span>
                            </div>
                            <p className="text-[11px] text-primary font-semibold mt-0.5">
                              {billing === "retainer" ? "Billed monthly • Cancel anytime" : "Single milestone delivery"}
                            </p>
                          </div>

                          <div className="flex flex-col gap-3 mb-8">
                            {pkg.features.map((feature, i) => (
                              <div key={i} className="flex items-start gap-2.5">
                                <span className="w-5 h-5 rounded-full bg-primary/15 text-primary flex items-center justify-center shrink-0 mt-0.5">
                                  <span className="material-symbols-outlined text-[15px] font-bold">
                                    check
                                  </span>
                                </span>
                                <span
                                  className={`text-[13px] ${i === 0
                                      ? "text-on-surface font-semibold"
                                      : "text-on-surface"
                                    }`}
                                >
                                  {feature}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="pt-4 border-t border-outline-variant/30">
                          <Link
                            href={`/checkout?plan=${encodeURIComponent(
                              pkg.title
                            )}&price=${encodeURIComponent(
                              currentPricing.price + currentPricing.cycle
                            )}`}
                            className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-full bg-gradient-to-r from-primary via-primary-container to-[#b060ff] hover:from-[#8b24e6] hover:to-[#a44cf8] text-on-primary text-[15px] font-extrabold shadow-[0_10px_28px_rgba(138,63,252,0.45)] hover:shadow-[0_12px_36px_rgba(138,63,252,0.65)] transition-all transform active:scale-95 cursor-pointer"
                          >
                            <span>{currentPricing.cta}</span>
                            <span className="material-symbols-outlined text-[19px] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                              north_east
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* Standard Card with Polished Hover Lift */
                    <div className="h-full rounded-[2.25rem] p-8 bg-surface-container-lowest border border-outline-variant/30 hover:border-primary/40 shadow-[0_8px_30px_rgba(27,11,56,0.06)] hover:shadow-[0_20px_45px_rgba(112,21,226,0.18)] transition-all duration-300 transform hover:-translate-y-2 flex flex-col justify-between group">
                      <div>
                        <div className="flex items-center justify-between mb-5">
                          <div className="w-13 h-13 rounded-2xl bg-primary-fixed text-primary flex items-center justify-center shadow-sm">
                            <span className="material-symbols-outlined text-[28px]">
                              {pkg.icon}
                            </span>
                          </div>
                          <span className="text-[11px] uppercase tracking-widest text-primary font-bold px-3 py-1 rounded-full bg-surface-container-low border border-outline-variant/30">
                            {pkg.badge}
                          </span>
                        </div>

                        <h2 className="text-[26px] font-extrabold text-on-surface mb-2">
                          {pkg.title}
                        </h2>
                        <p className="text-[13px] text-on-surface-variant leading-relaxed mb-6">
                          {pkg.desc}
                        </p>

                        {/* Price Tag */}
                        <div className="bg-surface-container-low border border-outline-variant/20 rounded-2xl p-4 mb-6">
                          <div className="flex items-baseline gap-1">
                            <span className="text-[42px] font-black text-on-surface tracking-tight">
                              {currentPricing.price}
                            </span>
                            <span className="text-[14px] text-on-surface-variant font-semibold">
                              {currentPricing.cycle}
                            </span>
                          </div>
                          <p className="text-[11px] text-on-surface-variant mt-0.5">
                            {billing === "retainer" ? "Billed monthly • Cancel anytime" : "Single milestone delivery"}
                          </p>
                        </div>

                        <div className="flex flex-col gap-3 mb-8">
                          {pkg.features.map((feature, i) => (
                            <div key={i} className="flex items-start gap-2.5">
                              <span className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                                <span className="material-symbols-outlined text-[15px] font-bold">
                                  check
                                </span>
                              </span>
                              <span
                                className={`text-[13px] ${i === 0
                                    ? "text-on-surface font-semibold"
                                    : "text-on-surface"
                                  }`}
                              >
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4 border-t border-outline-variant/20">
                        <Link
                          href={`/checkout?plan=${encodeURIComponent(
                            pkg.title
                          )}&price=${encodeURIComponent(
                            currentPricing.price + currentPricing.cycle
                          )}`}
                          className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-full bg-primary hover:bg-primary-container text-on-primary text-[15px] font-bold shadow-[0_6px_20px_rgba(112,21,226,0.3)] hover:shadow-[0_8px_24px_rgba(112,21,226,0.45)] transition-all transform active:scale-95 cursor-pointer"
                        >
                          <span>{currentPricing.cta}</span>
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
    </>
  );
}
