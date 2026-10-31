"use client";

import { useState } from "react";
import Link from "next/link";
import RevealOnScroll from "../RevealOnScroll";

type TabId = "video-editing" | "content-writing" | "social-media";

interface PackageCard {
  id: string;
  planId: string;
  title: string;
  subtitle: string;
  price: string;
  cycle: string;
  delivery: string;
  revisions: string;
  features: string[];
  cta: string;
  featured?: boolean;
}

interface ServiceTab {
  id: TabId;
  label: string;
  icon: string;
  note: string;
  packages: PackageCard[];
}

const serviceTabs: ServiceTab[] = [
  {
    id: "video-editing",
    label: "Video Editing",
    icon: "movie",
    note: "All video packages include commercial audio licensing & high-resolution masters.",
    packages: [
      {
        id: "ve-starter",
        planId: "video-50",
        title: "Starter",
        subtitle: "Basic editing, transitions & copyright-free music.",
        price: "$50",
        cycle: "/project",
        delivery: "2-3 days",
        revisions: "1 round",
        features: [
          "1 video up to 60 seconds",
          "Cuts, transitions & music sync",
          "Copyright-free soundtrack",
          "Basic color & audio leveling",
          "1080p Full HD vertical/square",
        ],
        cta: "Choose Plan",
        featured: false,
      },
      {
        id: "ve-professional",
        planId: "video-100",
        title: "Professional",
        subtitle: "Color correction, sound design & basic motion graphics.",
        price: "$100",
        cycle: "/project",
        delivery: "3-5 days",
        revisions: "2 rounds",
        features: [
          "1 video up to 3-5 minutes",
          "Cinematic color grading & LUTs",
          "Sound design & audio cleanup",
          "Motion titles & lower thirds",
          "Multi-format export (Reels, TikTok, YT)",
        ],
        cta: "Choose Plan",
        featured: true,
      },
      {
        id: "ve-advanced",
        planId: "video-150",
        title: "Advanced",
        subtitle: "Professional motion graphics, subtitles & multi-format export.",
        price: "$150",
        cycle: "/project",
        delivery: "4-6 days",
        revisions: "3 rounds",
        features: [
          "Advanced motion graphics & hooks",
          "Dynamic animated subtitles",
          "Multi-format export (16:9, 9:16, 1:1)",
          "Custom thumbnail concept",
          "Priority 48h turnaround queue",
        ],
        cta: "Choose Plan",
        featured: false,
      },
      {
        id: "ve-premium",
        planId: "video-200",
        title: "Premium Studio",
        subtitle: "Premium production, advanced visual effects & dedicated support.",
        price: "$200",
        cycle: "/project",
        delivery: "5-7 days",
        revisions: "Unlimited",
        features: [
          "Full studio production & VFX",
          "Commercial sound mastering",
          "Multi-platform master exports",
          "Source project files included",
          "Dedicated editor & 24/7 VIP support",
        ],
        cta: "Choose Plan",
        featured: false,
      },
    ],
  },
  {
    id: "content-writing",
    label: "Content Writing",
    icon: "edit_note",
    note: "All copy is 100% human-crafted, plagiarism-checked, and SEO-optimized.",
    packages: [
      {
        id: "cw-starter",
        planId: "content-20",
        title: "Social Captions",
        subtitle: "Catchy short-form social media captions and viral hashtags.",
        price: "$20",
        cycle: "/project",
        delivery: "24 hours",
        revisions: "1 round",
        features: [
          "Engaging short-form copy",
          "Targeted viral hashtag matrix",
          "Conversion-focused CTA",
          "Formatted for IG, FB & LinkedIn",
        ],
        cta: "Choose Plan",
        featured: false,
      },
      {
        id: "cw-blog",
        planId: "content-60",
        title: "SEO Blog Post",
        subtitle: "300-word SEO-friendly blog post optimized for ranking.",
        price: "$60",
        cycle: "/project",
        delivery: "2 days",
        revisions: "2 rounds",
        features: [
          "300 words of 100% original copy",
          "Primary keyword & meta description",
          "Hook-driven intro & outline",
          "Plagiarism-free verification",
        ],
        cta: "Choose Plan",
        featured: false,
      },
      {
        id: "cw-article",
        planId: "content-80",
        title: "In-Depth Article",
        subtitle: "500-word in-depth SEO-optimized article with rich formatting.",
        price: "$80",
        cycle: "/project",
        delivery: "3 days",
        revisions: "3 rounds",
        features: [
          "500 words deep-dive SEO article",
          "Competitor analysis & keyword map",
          "H2/H3 hierarchy & scannable layout",
          "Proofread & citation-ready",
        ],
        cta: "Choose Plan",
        featured: true,
      },
      {
        id: "cw-guide",
        planId: "content-120",
        title: "Authority Guide",
        subtitle: "1,000-word comprehensive guide or professional e-book.",
        price: "$120",
        cycle: "/project",
        delivery: "4-5 days",
        revisions: "Unlimited",
        features: [
          "1,000-word complete guide or e-book",
          "Deep research & industry case studies",
          "Executive summary & takeaways",
          "Full commercial copyright transfer",
        ],
        cta: "Choose Plan",
        featured: false,
      },
    ],
  },
  {
    id: "social-media",
    label: "Social Media Management",
    icon: "trending_up",
    note: "Consistent monthly management with content calendars and transparent analytics.",
    packages: [
      {
        id: "smm-starter",
        planId: "social-300",
        title: "Starter Growth",
        subtitle: "3 posts per week with basic engagement and branded graphics.",
        price: "$300",
        cycle: "/mo",
        delivery: "Monthly",
        revisions: "Active",
        features: [
          "3 custom posts per week (12/mo)",
          "Branded graphic design & copy",
          "Community monitoring & replies",
          "Cross-posting to IG & Facebook",
          "Monthly performance recap",
        ],
        cta: "Choose Plan",
        featured: false,
      },
      {
        id: "smm-growth",
        planId: "social-400",
        title: "Growth Retainer",
        subtitle: "5 posts per week with monthly reporting and scheduling.",
        price: "$400",
        cycle: "/mo",
        delivery: "Monthly",
        revisions: "Active",
        features: [
          "5 high-impact posts per week (20/mo)",
          "End-to-end scheduling & calendar",
          "In-depth monthly analytics report",
          "Audience interaction & growth plan",
          "Dedicated account coordinator",
        ],
        cta: "Choose Plan",
        featured: true,
      },
      {
        id: "smm-pro",
        planId: "social-500",
        title: "Pro Acceleration",
        subtitle: "Daily posts with community management and growth strategy.",
        price: "$500",
        cycle: "/mo",
        delivery: "Monthly",
        revisions: "Active",
        features: [
          "Daily posts & carousels (30/mo)",
          "Active community & DM management",
          "Data-driven algorithm strategy",
          "Weekly performance check-in",
          "Creative direction & branding",
        ],
        cta: "Choose Plan",
        featured: false,
      },
      {
        id: "smm-360",
        planId: "social-600",
        title: "360 Omnichannel",
        subtitle: "Full paid campaign management, video planning, and 24/7 support.",
        price: "$600",
        cycle: "/mo",
        delivery: "Monthly",
        revisions: "VIP 24/7",
        features: [
          "Complete paid ad management",
          "Short video planning & scripts",
          "Multi-channel (FB, IG, TikTok, X)",
          "Conversion tracking & A/B testing",
          "24/7 priority support & director",
        ],
        cta: "Choose Plan",
        featured: false,
      },
    ],
  },
];

export default function ServicesPricing() {
  const [activeTab, setActiveTab] = useState<TabId>("video-editing");

  const currentTab =
    serviceTabs.find((tab) => tab.id === activeTab) || serviceTabs[0];

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
                  Creative Services &amp; Packages
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
                Predictable pricing, fast 48-hour turnarounds, and full copyright ownership with zero hidden fees.
              </p>
            </RevealOnScroll>

            {/* Tab Navigation Pill Bar */}
            <RevealOnScroll variant="scale" delay={240}>
              <div className="inline-flex items-center gap-1.5 p-1.5 rounded-full bg-[#110427]/80 backdrop-blur-xl border border-white/10 shadow-inner">
                {serviceTabs.map((tab) => {
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center gap-2 px-5 sm:px-7 py-2.5 sm:py-3 rounded-full text-[13px] sm:text-[14px] font-semibold transition-all duration-300 cursor-pointer ${
                        isActive
                          ? "bg-gradient-to-r from-primary to-primary-container text-white shadow-lg shadow-primary/30"
                          : "text-surface-container-high hover:text-white"
                      }`}
                    >
                      <span className="material-symbols-outlined text-[18px]">
                        {tab.icon}
                      </span>
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </div>
            </RevealOnScroll>
          </div>
        </div>

        {/* Soft Organic Transition Curve */}
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

      {/* Core Packages Section */}
      <section className="w-full bg-surface-container-lowest py-16 md:py-24">
        <div className="max-w-[1440px] mx-auto px-5 md:px-margin">
          {/* Note Banner */}
          <div className="flex items-center justify-center gap-2 text-[12px] sm:text-[13px] text-on-surface-variant mb-12 text-center">
            <span className="px-2.5 py-0.5 rounded-full bg-amber-500/15 text-amber-800 font-bold text-[11px] border border-amber-500/25">
              Transparent Pricing
            </span>
            <span>{currentTab.note}</span>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-stretch">
            {currentTab.packages.map((pkg, idx) => {
              const checkoutUrl = `/checkout?plan=${encodeURIComponent(
                pkg.planId
              )}&price=${encodeURIComponent(pkg.price + " " + pkg.cycle)}`;

              return (
                <RevealOnScroll
                  key={`${currentTab.id}-${pkg.id}`}
                  variant="up"
                  delay={idx * 80}
                  className="h-full"
                >
                  {pkg.featured ? (
                    /* Featured Card with Radiant Gradient Border */
                    <div className="h-full p-[2.5px] rounded-[2rem] bg-gradient-to-b from-[#b060ff] via-[#8525e8] to-[#5914a8] shadow-[0_20px_50px_rgba(112,21,226,0.25)] hover:shadow-[0_24px_60px_rgba(112,21,226,0.38)] transition-all duration-300 transform hover:-translate-y-2 flex flex-col relative group">
                      {/* Floating Top Badge */}
                      <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-primary to-[#b060ff] text-white text-[11px] uppercase font-extrabold tracking-wider shadow-lg flex items-center gap-1.5 whitespace-nowrap">
                        <span>MOST POPULAR</span>
                      </div>

                      <div className="h-full rounded-[1.85rem] bg-gradient-to-b from-surface-container-lowest via-surface-container-lowest to-surface-container-low/40 p-6 sm:p-7 flex flex-col justify-between">
                        <div>
                          {/* Header */}
                          <div className="flex items-center justify-between mb-2">
                            <h2 className="text-[22px] font-extrabold text-on-surface">
                              {pkg.title}
                            </h2>
                            <span className="text-[10px] uppercase tracking-wider font-extrabold px-2.5 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                              Recommended
                            </span>
                          </div>
                          <p className="text-[13px] text-on-surface-variant leading-relaxed min-h-[38px]">
                            {pkg.subtitle}
                          </p>

                          {/* Price Tag */}
                          <div className="my-5">
                            <div className="flex items-baseline gap-1">
                              <span className="text-[38px] font-black text-on-surface tracking-tight">
                                {pkg.price}
                              </span>
                              <span className="text-[13px] text-primary font-bold">
                                {pkg.cycle}
                              </span>
                            </div>
                          </div>

                          {/* Delivery & Revisions Dual Pill Box */}
                          <div className="grid grid-cols-2 gap-2.5 mb-6">
                            <div className="p-2.5 rounded-xl bg-primary-fixed/25 border border-primary/20 text-center">
                              <span className="block text-[10px] uppercase font-bold tracking-wider text-primary">
                                DELIVERY
                              </span>
                              <span className="text-[12px] font-bold text-on-surface">
                                [{pkg.delivery}]
                              </span>
                            </div>
                            <div className="p-2.5 rounded-xl bg-primary-fixed/25 border border-primary/20 text-center">
                              <span className="block text-[10px] uppercase font-bold tracking-wider text-primary">
                                REVISIONS
                              </span>
                              <span className="text-[12px] font-bold text-on-surface">
                                [{pkg.revisions}]
                              </span>
                            </div>
                          </div>

                          {/* Features List */}
                          <ul className="space-y-2.5 text-[13px] text-on-surface">
                            {pkg.features.map((feature) => (
                              <li key={feature} className="flex items-start gap-2.5">
                                <span className="w-5 h-5 rounded-full bg-primary text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                                  <span className="material-symbols-outlined text-[13px] font-bold">
                                    check
                                  </span>
                                </span>
                                <span className="font-medium leading-snug">
                                  {feature}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* CTA Button */}
                        <div className="mt-7 pt-4 border-t border-outline-variant/30">
                          <Link
                            href={checkoutUrl}
                            className="w-full py-3.5 rounded-full text-white text-[14px] font-extrabold bg-gradient-to-r from-primary via-primary-container to-[#b060ff] hover:from-[#8b24e6] hover:to-[#a44cf8] shadow-[0_8px_24px_rgba(138,63,252,0.4)] hover:shadow-[0_12px_32px_rgba(138,63,252,0.6)] transition-all flex items-center justify-center gap-2 transform active:scale-95 cursor-pointer"
                          >
                            <span>{pkg.cta}</span>
                            <span className="material-symbols-outlined text-[17px] transition-transform group-hover:translate-x-0.5">
                              arrow_forward
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* Standard Card */
                    <div className="h-full rounded-[2rem] p-6 sm:p-7 bg-surface-container-lowest border border-outline-variant/30 hover:border-primary/40 shadow-sm hover:shadow-[0_16px_40px_rgba(112,21,226,0.12)] transition-all duration-300 transform hover:-translate-y-2 flex flex-col justify-between group">
                      <div>
                        {/* Header */}
                        <div className="flex items-center justify-between mb-2">
                          <h2 className="text-[22px] font-extrabold text-on-surface">
                            {pkg.title}
                          </h2>
                        </div>
                        <p className="text-[13px] text-on-surface-variant leading-relaxed min-h-[38px]">
                          {pkg.subtitle}
                        </p>

                        {/* Price Tag */}
                        <div className="my-5">
                          <div className="flex items-baseline gap-1">
                            <span className="text-[38px] font-black text-on-surface tracking-tight">
                              {pkg.price}
                            </span>
                            <span className="text-[13px] text-on-surface-variant font-semibold">
                              {pkg.cycle}
                            </span>
                          </div>
                        </div>

                        {/* Delivery & Revisions Dual Pill Box */}
                        <div className="grid grid-cols-2 gap-2.5 mb-6">
                          <div className="p-2.5 rounded-xl bg-surface-container-low border border-outline-variant/20 text-center">
                            <span className="block text-[10px] uppercase font-bold tracking-wider text-on-surface-variant">
                              DELIVERY
                            </span>
                            <span className="text-[12px] font-bold text-on-surface">
                              [{pkg.delivery}]
                            </span>
                          </div>
                          <div className="p-2.5 rounded-xl bg-surface-container-low border border-outline-variant/20 text-center">
                            <span className="block text-[10px] uppercase font-bold tracking-wider text-on-surface-variant">
                              REVISIONS
                            </span>
                            <span className="text-[12px] font-bold text-on-surface">
                              [{pkg.revisions}]
                            </span>
                          </div>
                        </div>

                        {/* Features List */}
                        <ul className="space-y-2.5 text-[13px] text-on-surface">
                          {pkg.features.map((feature) => (
                            <li key={feature} className="flex items-start gap-2.5">
                              <span className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                                <span className="material-symbols-outlined text-[13px] font-bold">
                                  check
                                </span>
                              </span>
                              <span className="font-medium leading-snug">
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* CTA Button */}
                      <div className="mt-7 pt-4 border-t border-outline-variant/20">
                        <Link
                          href={checkoutUrl}
                          className="w-full py-3.5 rounded-full text-on-surface text-[14px] font-bold bg-surface-container-low hover:bg-primary hover:text-white border border-outline-variant/30 hover:border-transparent transition-all flex items-center justify-center gap-2 transform active:scale-95 cursor-pointer shadow-sm hover:shadow-[0_6px_20px_rgba(112,21,226,0.25)]"
                        >
                          <span>{pkg.cta}</span>
                          <span className="material-symbols-outlined text-[17px] transition-transform group-hover:translate-x-0.5">
                            arrow_forward
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
