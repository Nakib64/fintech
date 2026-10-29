"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative w-full bg-[#f9f9fd] overflow-hidden">
      {/* ── Upper Nocturnal Purple Hero Zone ── */}
      <div className="relative w-full pt-20 sm:pt-28 lg:pt-32 pb-40 sm:pb-52 md:pb-64 lg:pb-[420px] bg-gradient-to-b from-[#160430] via-[#24084d] via-[#360e70] to-[#4a1491] text-white overflow-hidden">
        {/* Top ambient glow blending header and hero */}
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[880px] h-[480px] bg-[#7015e2]/25 blur-[170px] pointer-events-none rounded-full animate-glow-pulse" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[450px] bg-[#9333ea]/35 blur-[160px] pointer-events-none rounded-full" />

        {/* Decorative Star Left */}
        <div
          className={`absolute top-28 sm:top-36 left-[6%] sm:left-[10%] opacity-0 pointer-events-none transition-all duration-1000 ${mounted ? "opacity-85" : ""
            }`}
          style={{ transitionDelay: "500ms" }}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 0L14.2 9.8L24 12L14.2 14.2L12 24L9.8 14.2L0 12L9.8 9.8L12 0Z"
              fill="#e879f9"
            />
          </svg>
        </div>

        {/* Decorative Bolt Right */}
        <div
          className={`absolute top-36 sm:top-44 right-[6%] sm:right-[10%] opacity-0 pointer-events-none transition-all duration-1000 animate-float ${mounted ? "opacity-90" : ""
            }`}
          style={{ transitionDelay: "700ms" }}
        >
          <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
            <path
              d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
              fill="#fdf4ff"
              stroke="#c084fc"
              strokeWidth="2"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Hero Text Content */}
        <div className="max-w-[1440px] mx-auto px-5 md:px-margin flex flex-col items-center text-center relative z-10">
          {/* Hero Heading with Pink Chevron */}
          <h1
            className={`text-[32px] sm:text-[44px] md:text-[52px] lg:text-[58px] font-black tracking-tight leading-[1.12] text-white transition-all duration-700 ${mounted
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
              }`}
          >

            Innovating Your
            <br />
            Digital World With Us
          </h1>

          {/* Subtitle */}
          <p
            className={`max-w-xl text-[14px] sm:text-[15px] lg:text-[16px] text-white/80 leading-relaxed font-normal mb-5 sm:mb-6 mt-3 transition-all duration-700 ${mounted
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
              }`}
            style={{ transitionDelay: "180ms" }}
          >
            Creative video production, high-impact scripts, and social growth for modern brands.
          </p>

          {/* CTA Button */}
          <Link
            href="/services"
            className={`inline-flex items-center gap-2 px-7 py-3 sm:px-8 sm:py-3.5 rounded-full bg-gradient-to-r from-[#9333ea] to-[#c084fc] hover:from-[#8b24e6] hover:to-[#b060ff] text-white text-[14px] sm:text-[15px] font-bold shadow-[0_8px_30px_rgba(168,85,247,0.5)] transition-all transform hover:scale-[1.03] active:scale-95 duration-700 cursor-pointer ${mounted
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
              }`}
            style={{ transitionDelay: "320ms" }}
          >
            <span>Get Started</span>
            <span className="material-symbols-outlined text-[18px]">
              north_east
            </span>
          </Link>
        </div>

        {/* Organic Curved SVG Wave at Bottom of Purple Zone */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none">
          <svg
            viewBox="0 0 1440 220"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto block"
            preserveAspectRatio="none"
          >
            <path
              d="M0,80 C360,160 1080,180 1440,90 L1440,220 L0,220 Z"
              fill="#f9f9fd"
            />
          </svg>
        </div>
      </div>

      {/* ── Showcase Image Container (Hanging Down across the Curve) ── */}
      <div className="relative z-20 max-w-[1440px] mx-auto px-4 sm:px-6 md:px-margin -mt-32 sm:-mt-44 md:-mt-52 lg:-mt-[340px] flex flex-col items-center">
        <div
          className={`w-full max-w-[680px] sm:max-w-[760px] md:max-w-[820px] lg:max-w-[1440px] transition-all duration-1000 ${mounted
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-8 scale-95"
            }`}
          style={{ transitionDelay: "450ms" }}
        >
          {/* Main Showcase Image Frame with Bold Purple Border */}
          <div className="p-1.5 sm:p-2.5 rounded-[1.75rem] sm:rounded-[2.25rem] bg-[#9333ea] shadow-[0_20px_60px_rgba(112,21,226,0.5),0_0_40px_rgba(192,132,252,0.35)]">
            <div className="rounded-[1.4rem] sm:rounded-[1.85rem] overflow-hidden bg-[#110526] relative aspect-[16/9] shadow-2xl">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhGxGOGb_xoT-3ShnQLv33_R-5S6w2k3xI0LFXrRpXRekt2LUhZ8KJw329_4q9wasBNVm1siCgcKxPNFiZhZVa6jl-OcfBCDPZhVtwhjm8oKWj46Fi-uxW0y2ePXjQBj54M68jLi2_NktGcVCnUOfXuHCF4F6rmVPyH7cALnOthWSHaLa8Voc_I0vpig1M78i2QrL5NBT4JedK-k53YCeRRUBsTY_Q6kNIs3dK-qht"
                alt="Agency Conference Presentation Showcase"
                fill
                sizes="(max-width: 768px) 100vw, 880px"
                className="object-cover object-center"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 pointer-events-none" />
            </div>
          </div>

          {/* Layered Lavender Shadow Shelf beneath Card */}
          <div className="w-[88%] sm:w-[92%] h-4 sm:h-6 mx-auto -mt-2 sm:-mt-3 rounded-b-[1.5rem] sm:rounded-b-[2rem] bg-[#e9d5ff] opacity-80 border-b border-x border-[#c084fc]/40 shadow-sm" />
        </div>
      </div>
    </section>
  );
}
