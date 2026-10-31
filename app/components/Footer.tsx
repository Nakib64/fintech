import Link from "next/link";
import Image from "next/image";
import RevealOnScroll from "./RevealOnScroll";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0e031f] text-white/70 border-t border-white/10 relative overflow-hidden mt-space-xl">
      {/* Atmospheric ambient glow */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[300px] bg-primary/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] bg-primary-container/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-5 md:px-margin py-space-xl flex flex-col gap-space-lg relative z-10">
        <RevealOnScroll variant="up">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-lg">
            {/* Brand Column */}
            <div className="flex flex-col gap-space-sm">
              <Link
                href="/"
                className="inline-block group"
                aria-label="ASHIVOX LLC"
              >
                <Image
                  src="/logo.png"
                  alt="ASHIVOX LLC"
                  width={160}
                  height={40}
                  className="h-8 sm:h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </Link>
              <p className="text-[13px] leading-[22px] text-white/70">
                Creative media production and brand growth agency registered in
                the United States.
              </p>
              <div className="flex items-center gap-2 mt-1">
                <span className="material-symbols-outlined text-[#c084fc] text-[18px]">
                  mail
                </span>
                <a
                  href="mailto:support@ashivox.com"
                  className="text-[13px] text-white/90 hover:text-white underline-offset-2 hover:underline transition-colors font-medium"
                >
                  support@ashivox.com
                </a>
              </div>
              <div className="flex items-center gap-space-xs mt-1">
                <span className="material-symbols-outlined text-[#c084fc] text-[18px]">
                  verified_user
                </span>
                <span className="text-[12px] font-semibold text-white/85">
                  256-bit SSL • PCI Compliant
                </span>
              </div>
            </div>

            {/* US Office */}
            <div className="flex flex-col gap-space-xs">
              <span className="text-[13px] font-bold text-white uppercase tracking-wider">
                Registered Business Address
              </span>
              <p className="text-[13px] leading-[22px] text-white/70">
                1209 Mountain Road PL NE, Ste R
                <br />
                Albuquerque, NM 87110, USA
              </p>
              <div className="mt-2">
                <span className="text-[11px] uppercase font-bold text-white/50 tracking-wider block">
                  Registered Agent
                </span>
                <p className="text-[13px] text-white/80 font-medium">
                  Registered Agents Inc.
                </p>
              </div>
            </div>

            {/* Payment & Security */}
            <div className="flex flex-col gap-space-xs">
              <span className="text-[13px] font-bold text-white uppercase tracking-wider">
                Support &amp; Payments
              </span>
              <p className="text-[13px] leading-[22px] text-white/70">
                Cards and bank transfers processed securely via Stripe with
                institutional encryption and zero hidden fees.
              </p>
              <div className="flex items-center gap-space-xs mt-space-xs text-white/80">
                <span className="material-symbols-outlined text-[16px] text-[#c084fc]">
                  lock
                </span>
                <span className="text-[12px] font-semibold">
                  Stripe Encrypted
                </span>
              </div>
            </div>

            {/* Navigation & Legal Links */}
            <div className="flex flex-col gap-space-xs">
              <span className="text-[13px] font-bold text-white uppercase tracking-wider">
                Quick Links
              </span>
              <div className="flex flex-col gap-2 text-[13px]">
                <Link
                  href="/services"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Services &amp; Pricing
                </Link>
                <Link
                  href="/contact"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Contact &amp; Discovery
                </Link>
                <Link
                  href="/about"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  About &amp; Governance
                </Link>
                <Link
                  href="/checkout"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Checkout
                </Link>
              </div>
            </div>
          </div>
        </RevealOnScroll>

        {/* Bottom Bar */}
        <RevealOnScroll variant="fade" delay={200}>
          <div className="pt-space-md border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-space-sm text-white/60 text-[13px]">
            <p>© 2025 ASHIVOX LLC. All rights reserved.</p>
            <div className="flex items-center gap-3 text-[12px]">
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px] text-[#c084fc]">
                  shield
                </span>
                Registered US Entity
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px] text-[#c084fc]">
                  credit_card
                </span>
                Stripe Verified
              </span>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </footer>
  );
}
