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
                Creative media production, video editing, and digital brand growth agency registered in the United States.
              </p>
              
              <div className="flex flex-col gap-1.5 mt-1 text-[13px]">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#c084fc] text-[18px]">
                    mail
                  </span>
                  <a
                    href="mailto:support@ashivox.com"
                    className="text-white/90 hover:text-white underline-offset-2 hover:underline transition-colors font-medium"
                  >
                    support@ashivox.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#c084fc] text-[18px]">
                    call
                  </span>
                  <a
                    href="tel:+15055289302"
                    className="text-white/90 hover:text-white underline-offset-2 hover:underline transition-colors font-medium"
                  >
                    +1 (505) 528-9302
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-space-xs mt-2">
                <span className="material-symbols-outlined text-[#c084fc] text-[18px]">
                  verified_user
                </span>
                <span className="text-[12px] font-semibold text-white/85">
                  256-bit SSL • PCI-DSS Compliant
                </span>
              </div>
            </div>

            {/* US Registered Office */}
            <div className="flex flex-col gap-space-xs">
              <span className="text-[13px] font-bold text-white uppercase tracking-wider">
                Registered Business Office
              </span>
              <p className="text-[13px] leading-[22px] text-white/70">
                ASHIVOX LLC
                <br />
                1209 Mountain Road PL NE, Ste R
                <br />
                Albuquerque, NM 87110, USA
              </p>
              <div className="mt-2">
                <span className="text-[11px] uppercase font-bold text-white/50 tracking-wider block">
                  Business Registration #
                </span>
                <p className="text-[13px] text-white/90 font-mono font-bold tracking-wide">
                  0008132694
                </p>
              </div>
              <div className="mt-2">
                <span className="text-[11px] uppercase font-bold text-white/50 tracking-wider block">
                  Registered Agent
                </span>
                <p className="text-[13px] text-white/80 font-medium">
                  Registered Agents Inc.
                </p>
              </div>
              <div className="mt-2">
                <span className="text-[11px] uppercase font-bold text-white/50 tracking-wider block">
                  Jurisdiction
                </span>
                <p className="text-[13px] text-white/80 font-medium">
                  State of New Mexico, USA
                </p>
              </div>
            </div>

            {/* Payment & Security */}
            <div className="flex flex-col gap-space-xs">
              <span className="text-[13px] font-bold text-white uppercase tracking-wider">
                Billing &amp; Payment Rails
              </span>
              <p className="text-[13px] leading-[22px] text-white/70">
                Cards and bank transfers processed securely via Stripe and Wise with 256-bit institutional encryption and transparent USD billing.
              </p>
              <div className="flex flex-wrap items-center gap-2 mt-2">
                <span className="px-2.5 py-1 rounded bg-white/10 text-white text-[11px] font-semibold">
                  Visa
                </span>
                <span className="px-2.5 py-1 rounded bg-white/10 text-white text-[11px] font-semibold">
                  Mastercard
                </span>
                <span className="px-2.5 py-1 rounded bg-white/10 text-white text-[11px] font-semibold">
                  AMEX
                </span>
                <span className="px-2.5 py-1 rounded bg-white/10 text-white text-[11px] font-semibold">
                  ACH Wire
                </span>
                <span className="px-2.5 py-1 rounded bg-white/10 text-white text-[11px] font-semibold">
                  Stripe
                </span>
              </div>
            </div>

            {/* Quick Links & Essential Legal Policies */}
            <div className="flex flex-col gap-space-xs">
              <span className="text-[13px] font-bold text-white uppercase tracking-wider">
                Legal &amp; Policies
              </span>
              <div className="grid grid-cols-1 gap-2 text-[13px]">
                <Link
                  href="/terms"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Terms of Service
                </Link>
                <Link
                  href="/privacy"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/refund-policy"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Refund &amp; Cancellation
                </Link>
                <Link
                  href="/fulfillment-policy"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Delivery &amp; Fulfillment
                </Link>
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
              </div>
            </div>
          </div>
        </RevealOnScroll>

        {/* Bottom Bar */}
        <RevealOnScroll variant="fade" delay={200}>
          <div className="pt-space-md border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-space-sm text-white/60 text-[13px]">
            <p>© 2026 ASHIVOX LLC. All rights reserved.</p>
            <div className="flex flex-wrap items-center gap-3 text-[12px]">
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px] text-[#c084fc]">
                  shield
                </span>
                Registered US Entity (NM #0008132694)
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px] text-[#c084fc]">
                  lock
                </span>
                PCI-DSS Compliant
              </span>
              <span>•</span>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms
              </Link>
              <span>•</span>
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy
              </Link>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </footer>
  );
}
