import Link from "next/link";
import RevealOnScroll from "./RevealOnScroll";

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-low text-on-surface-variant mt-space-xl">
      <div className="max-w-[1440px] mx-auto px-5 md:px-margin py-space-xl flex flex-col gap-space-lg">
        <RevealOnScroll variant="up">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-lg">
            {/* Brand Column */}
            <div className="flex flex-col gap-space-sm">
              <div className="flex items-center gap-space-xs">
                <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center text-on-primary">
                  <span className="material-symbols-outlined text-[16px]">
                    auto_awesome
                  </span>
                </div>
                <span className="text-[20px] font-bold text-on-surface tracking-tight">
                  Vortex Digital LLC
                </span>
              </div>
              <p className="text-[13px] leading-[20px] text-on-surface-variant">
                Creative media production and brand growth agency registered in
                Delaware, USA.
              </p>
              <div className="flex items-center gap-space-xs mt-space-xs">
                <span className="material-symbols-outlined text-primary text-[18px]">
                  verified_user
                </span>
                <span className="text-[12px] font-semibold text-on-surface-variant">
                  256-bit SSL • PCI Compliant
                </span>
              </div>
            </div>

            {/* US Office */}
            <div className="flex flex-col gap-space-xs">
              <span className="text-[13px] font-bold text-on-surface uppercase tracking-wider">
                US Commercial Office
              </span>
              <p className="text-[13px] leading-[20px] text-on-surface-variant">
                1201 N Orange St, Suite 700
                <br />
                Wilmington, DE 19801, USA
              </p>
              <p className="text-[13px] leading-[20px] text-on-surface-variant">
                Delaware Entity ID: DE-7491028
              </p>
            </div>

            {/* Payment & Security */}
            <div className="flex flex-col gap-space-xs">
              <span className="text-[13px] font-bold text-on-surface uppercase tracking-wider">
                Payments &amp; Tax
              </span>
              <p className="text-[13px] leading-[20px] text-on-surface-variant">
                Federal EIN: 88-3928174 • W-9 verified. Cards and ACH transfers
                processed securely via Stripe.
              </p>
              <div className="flex items-center gap-space-xs mt-space-xs text-on-surface-variant">
                <span className="material-symbols-outlined text-[16px] text-primary">
                  lock
                </span>
                <span className="text-[12px] font-semibold">
                  Stripe Encrypted
                </span>
              </div>
            </div>

            {/* Navigation & Legal Links */}
            <div className="flex flex-col gap-space-xs">
              <span className="text-[13px] font-bold text-on-surface uppercase tracking-wider">
                Quick Links
              </span>
              <div className="flex flex-col gap-1.5 text-[13px]">
                <Link
                  href="/services"
                  className="text-on-surface-variant hover:text-primary transition-colors"
                >
                  Services &amp; Pricing
                </Link>
                <Link
                  href="/projects"
                  className="text-on-surface-variant hover:text-primary transition-colors"
                >
                  Project Discovery
                </Link>
                <Link
                  href="/about"
                  className="text-on-surface-variant hover:text-primary transition-colors"
                >
                  Terms &amp; Policies
                </Link>
                <Link
                  href="/checkout"
                  className="text-on-surface-variant hover:text-primary transition-colors"
                >
                  Checkout
                </Link>
              </div>
            </div>
          </div>
        </RevealOnScroll>

        {/* Bottom Bar */}
        <RevealOnScroll variant="fade" delay={200}>
          <div className="pt-space-md border-t border-outline-variant/40 flex flex-col sm:flex-row items-center justify-between gap-space-sm text-on-surface-variant text-[13px]">
            <p>© 2025 Vortex Digital Media LLC. All rights reserved.</p>
            <div className="flex items-center gap-3 text-[12px]">
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px] text-primary">
                  shield
                </span>
                Delaware Entity
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px] text-primary">
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
