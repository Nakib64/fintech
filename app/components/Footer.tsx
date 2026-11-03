import Link from "next/link";
import Image from "next/image";
import RevealOnScroll from "./RevealOnScroll";
import { AcceptedPaymentMethods } from "./PaymentLogos";

function FacebookIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
        clipRule="evenodd"
      />
    </svg>
  );
}

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
                    href="mailto:support@ashivox.net"
                    className="text-white/90 hover:text-white underline-offset-2 hover:underline transition-colors font-medium"
                  >
                    support@ashivox.net
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

              {/* Social Channels */}
              <div className="flex flex-col gap-2 mt-1">
                <span className="text-[11px] font-bold text-white/50 uppercase tracking-wider">
                  Official Social Channels
                </span>
                <div className="flex items-center gap-2.5">
                  <a
                    href="https://www.facebook.com/share/1JLg3aSPgV/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="ASHIVOX on Facebook"
                    className="w-9 h-9 rounded-xl bg-white/5 hover:bg-[#1877F2] border border-white/10 hover:border-transparent text-white/80 hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-105"
                  >
                    <FacebookIcon className="w-4 h-4 fill-current" />
                  </a>
                  <a
                    href="https://www.instagram.com/ashiv_ox?obrf=MWNvam9scmo3a3JwbA=="
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="ASHIVOX on Instagram"
                    className="w-9 h-9 rounded-xl bg-white/5 hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] border border-white/10 hover:border-transparent text-white/80 hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-105"
                  >
                    <InstagramIcon className="w-4 h-4 fill-current" />
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-space-xs mt-1">
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
              <div className="mt-2">
                <AcceptedPaymentMethods />
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
              <a
                href="https://www.facebook.com/share/1JLg3aSPgV/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Facebook
              </a>
              <span>•</span>
              <a
                href="https://www.instagram.com/ashiv_ox?obrf=MWNvam9scmo3a3JwbA=="
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Instagram
              </a>
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
